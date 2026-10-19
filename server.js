const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const { WebSocketServer } = require('ws');
const { transformCoord, inverseTransformCoord, getCanonicalMoveSequence } = require('./symmetry.js');
const { OPENING_BOOK_9X9 } = require('./opening-book-9x9.js');
const { getFirestoreRecommendation, setFirestoreRecommendation } = require('./firestore-cache.js');

// Auto-load .env file if present
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
      const idx = trimmed.indexOf('=');
      const key = trimmed.slice(0, idx).trim();
      const val = trimmed.slice(idx + 1).trim();
      if (!process.env[key]) {
        process.env[key] = val;
      }
    }
  });
}

const PORT = process.env.PORT || 8080;
const PUBLIC_DIR = path.join(__dirname, 'public');
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2'
};

const MEMORY_AUDIO_CACHE = new Map();

async function getOrSynthesizeAudio(text, voice) {
  if (!text) return null;
  const cacheKey = `${voice}:${text}`;
  if (MEMORY_AUDIO_CACHE.has(cacheKey)) {
    return MEMORY_AUDIO_CACHE.get(cacheKey);
  }
  try {
    const audio = await synthesizeGeminiAudio(text, voice);
    if (audio) {
      MEMORY_AUDIO_CACHE.set(cacheKey, audio);
      return audio;
    }
  } catch (e) {
    console.warn('[Audio Synthesis] Skipped:', e.message);
  }
  return null;
}

/**
 * Call Gemini 3.8 Flash via generativelanguage.googleapis.com
 */
function callGemini38Flash(promptText) {
  return new Promise((resolve, reject) => {
    if (!GEMINI_API_KEY) {
      return reject(new Error('GEMINI_API_KEY is not configured'));
    }

    const payload = JSON.stringify({
      contents: [{
        parts: [{ text: promptText }]
      }],
      generationConfig: {
        responseMimeType: "application/json",
        temperature: 0.3
      }
    });

    const options = {
      hostname: 'generativelanguage.googleapis.com',
      path: `/v1beta/models/gemini-3.8-flash:generateContent?key=${GEMINI_API_KEY}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          if (parsed.error) {
            return reject(new Error(parsed.error.message || 'Gemini API Error'));
          }
          const text = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
          if (!text) {
            return reject(new Error('No text returned from Gemini API'));
          }
          const result = JSON.parse(text);
          resolve(result);
        } catch (err) {
          reject(new Error(`Failed to parse Gemini response: ${err.message}. Raw: ${body.slice(0, 200)}`));
        }
      });
    });

    req.on('error', (err) => reject(err));
    req.write(payload);
    req.end();
  });
}

/**
 * Synthesize crystal-clear neural speech using Gemini 3.8 Flash TTS
 * Voices: Aoede (Warm female), Kore (Serene female), Puck (Friendly male), Charon (Authoritative male), Fenrir (Crisp male)
 */
function synthesizeGeminiAudio(text, voice = 'Aoede') {
  return new Promise((resolve, reject) => {
    if (!GEMINI_API_KEY) {
      return reject(new Error('GEMINI_API_KEY is not configured'));
    }

    const cleanText = (text || '').replace(/[*#_~`\[\]]/g, '').trim();
    if (!cleanText) return resolve(null);

    const postData = JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: cleanText }] }],
      generationConfig: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: {
              voiceName: voice || 'Aoede'
            }
          }
        }
      }
    });

    const req = https.request({
      hostname: 'generativelanguage.googleapis.com',
      path: `/v1beta/models/gemini-3.8-flash-tts:generateContent?key=${GEMINI_API_KEY}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, res => {
      let body = '';
      res.on('data', d => body += d);
      res.on('end', () => {
        try {
          const json = JSON.parse(body);
          const part = json.candidates?.[0]?.content?.parts?.[0];
          if (part && part.inlineData && part.inlineData.data) {
            resolve({
              audioBase64: part.inlineData.data,
              mimeType: part.inlineData.mimeType || 'audio/wav'
            });
          } else {
            resolve(null);
          }
        } catch (e) {
          resolve(null);
        }
      });
    });

    req.on('error', (err) => {
      console.warn('[Gemini TTS] Request error:', err.message);
      resolve(null);
    });
    req.write(postData);
    req.end();
  });
}

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;

  // Health check endpoint
  if (pathname === '/healthz') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('OK');
  }

  // API 1: Gemini 3.8 Flash Go Coach (with integrated Neural Audio)
  if (pathname === '/api/gemini/coach' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      try {
        const data = JSON.parse(body || '{}');
        const movesList = data.moves ? data.moves.join(', ') : 'None (Empty Board)';
        const turn = data.turn === 'B' ? 'Black' : 'White';
        const level = data.level || 1;
        const size = data.size || 19;
        const candidate = data.candidateMove || null;
        const voice = data.voice || 'Aoede';

        const levelDescription = level === 1
          ? "Novice on 9x9 board (Explain liberties, atari, two eyes, capturing, avoid self-atari)"
          : level === 2
          ? "Medium on 13x13 board (Explain corner/side framework, cutting/connecting, sente vs gote, joseki)"
          : "Advance on 19x19 board (Explain center moyo, whole-board harmony, aji, tesuji, flexible reductions, endgame yose)";

        const boardCoordInfo = size === 9
          ? "The board is 9x9. Coordinates use standard Go notation (Columns A-J skipping 'I', Rows 1-9). Center Tengen is E5, corner star points are C3, G3, C7, G7."
          : size === 13
          ? "The board is 13x13. Coordinates use standard Go notation (Columns A-N skipping 'I', Rows 1-13). Center Tengen is G7, corner star points are D4, K4, D10, K10."
          : "The board is standard 19x19. Coordinates skip 'I' (Columns: A-T, Rows: 1-19).";

        // -------------------------------------------------------------------
        // Strategy A: 8-Fold Dihedral Symmetry Opening Book & Firestore Cache (move37-512017)
        // -------------------------------------------------------------------
        if (size === 9 && !candidate) {
          const { canonicalKey, transformIndex } = getCanonicalMoveSequence(data.moves || [], 9);

          // Tier 1: In-Memory 8-fold Opening Book (0ms)
          if (OPENING_BOOK_9X9[canonicalKey]) {
            const raw = OPENING_BOOK_9X9[canonicalKey];
            const cachedResponse = {
              ...raw,
              recommendedMove: inverseTransformCoord(raw.recommendedMove, transformIndex, 9),
              top3Candidates: raw.top3Candidates.map(c => ({
                ...c,
                coord: inverseTransformCoord(c.coord, transformIndex, 9)
              })),
              statusBadge: '8-Fold Opening Book (0ms)',
              source: 'opening-book-8fold',
              cached: true
            };

            const scriptToSpeak = cachedResponse.spokenScript || '';
            if (scriptToSpeak) {
              const audio = await getOrSynthesizeAudio(scriptToSpeak, voice);
              if (audio) {
                cachedResponse.audioBase64 = audio.audioBase64;
                cachedResponse.mimeType = audio.mimeType;
              }
            }

            console.log(`[Coach] Served from 8-fold Opening Book: ${canonicalKey} (mapped via T${transformIndex})`);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ success: true, coach: cachedResponse }));
          }

          // Tier 2: Firestore Document Store in move37-512017 (~25ms)
          const firestoreDoc = await getFirestoreRecommendation(canonicalKey);
          if (firestoreDoc && firestoreDoc.top3Candidates && firestoreDoc.top3Candidates.length > 0) {
            const cachedResponse = {
              ...firestoreDoc,
              recommendedMove: inverseTransformCoord(firestoreDoc.recommendedMove, transformIndex, 9),
              top3Candidates: firestoreDoc.top3Candidates.map(c => ({
                ...c,
                coord: inverseTransformCoord(c.coord, transformIndex, 9)
              })),
              statusBadge: 'Firestore (move37-512017)',
              source: 'firestore-move37',
              cached: true
            };

            const scriptToSpeak = cachedResponse.spokenScript || '';
            if (scriptToSpeak) {
              const audio = await getOrSynthesizeAudio(scriptToSpeak, voice);
              if (audio) {
                cachedResponse.audioBase64 = audio.audioBase64;
                cachedResponse.mimeType = audio.mimeType;
              }
            }

            // Populate in-memory cache for subsequent identical plays
            OPENING_BOOK_9X9[canonicalKey] = firestoreDoc;

            console.log(`[Coach] Served from Firestore (move37-512017): ${canonicalKey} (mapped via T${transformIndex})`);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ success: true, coach: cachedResponse }));
          }
        }

        const prompt = `You are a legendary 9-dan Go (Baduk / Weiqi) Sensei and Grandmaster Coach using Gemini 3.8 Flash.
${boardCoordInfo}
Move sequence so far: [${movesList}].
The human student is playing as BLACK. The AI opponent is playing as WHITE.
Student training level: Level ${level} - ${levelDescription}.
${candidate ? `The student (Black) just played at ${candidate}. Provide a thorough pedagogical evaluation of this move.` : `Provide in-depth tactical guidance for the student (Black)'s upcoming move against White.`}

CRITICAL PEDAGOGICAL INSTRUCTIONS:
The user interface features a dedicated tactical analysis panel with ample reading space.
Provide rich, thorough, lengthier explanations (2-4 insightful sentences per section) rather than terse one-liners.
All advice, strategic recommendations, and tactical warnings must be strictly tailored for the playing student (BLACK).
Do NOT give advice or strategic recommendations for White.

Return valid JSON with:
{
  "recommendedMove": "Coordinate string valid for Black on a ${size}x${size} board (e.g. 'G7', 'E5', 'D4')",
  "top3Candidates": [
    { "rank": 1, "coord": "Top choice coordinate valid for ${size}x${size}", "name": "Primary Master Choice", "reason": "Concise 1-sentence tactical rationale" },
    { "rank": 2, "coord": "Second choice coordinate valid for ${size}x${size}", "name": "Solid Alternative", "reason": "Concise 1-sentence tactical rationale" },
    { "rank": 3, "coord": "Third choice coordinate valid for ${size}x${size}", "name": "Flexible Expansion", "reason": "Concise 1-sentence tactical rationale" }
  ],
  "whatToDo": "In-depth tactical guidance (2-3 sentences) detailing: 1) Exactly where Black should play, 2) The classical Go proverb/principle behind this choice (e.g., corner enclosure, eye-space foundation, maintaining sente), and 3) The territorial or strategic outcome Black achieves.",
  "whatToWatchOutFor": "Thorough threat analysis (2-3 sentences) detailing: 1) What counter-attacks or invasions White is preparing, 2) Which of Black's stones have cutting defects or weak liberties, and 3) How Black should preempt White's aggressive clamps or splits.",
  "whatNotToDo": "Detailed pitfall warning (2-3 sentences) explaining: 1) The exact amateur mistake to avoid at this stage (e.g. premature attachments, empty triangles, giving away sente, playing without liberties), and 2) Why falling into this trap damages Black's position.",
  "summary": "Deep 2-sentence grandmaster assessment of the current board balance, stone efficiency, and strategic momentum for Black.",
  "spokenScript": "A warm, natural spoken coaching script (1-2 sentences) directly advising Black on what to play and watch out for. Optimized for clear narration without markdown or list symbols.",
  "candidateEvaluation": {
    "grade": "EXCELLENT" | "SOLID" | "BLUNDER",
    "title": "Clear, instructive title describing the student's move quality",
    "explanation": "Detailed 2-3 sentence breakdown explaining why this move was excellent, solid, or a mistake, how it impacts liberties and shape, and the immediate consequence.",
    "spokenFeedback": "Short 1-sentence verbal reaction to the student's move"
  }
}`;

        const aiResponse = await callGemini38Flash(prompt);

        // Write-back to Firestore (move37-512017) and in-memory cache for future players
        if (size === 9 && !candidate && aiResponse.top3Candidates && aiResponse.top3Candidates.length > 0) {
          const { canonicalKey, transformIndex } = getCanonicalMoveSequence(data.moves || [], 9);
          const canonicalData = {
            recommendedMove: transformCoord(aiResponse.recommendedMove, transformIndex, 9),
            top3Candidates: aiResponse.top3Candidates.map(c => ({
              ...c,
              coord: transformCoord(c.coord, transformIndex, 9)
            })),
            whatToDo: aiResponse.whatToDo,
            whatToWatchOutFor: aiResponse.whatToWatchOutFor,
            whatNotToDo: aiResponse.whatNotToDo,
            summary: aiResponse.summary,
            spokenScript: aiResponse.spokenScript
          };
          setFirestoreRecommendation(canonicalKey, canonicalData);
          OPENING_BOOK_9X9[canonicalKey] = canonicalData;
        }

        // Concurrently synthesize Gemini 3.8 Flash Neural Speech
        const scriptToSpeak = (aiResponse.candidateEvaluation && aiResponse.candidateEvaluation.spokenFeedback) || aiResponse.spokenScript || '';
        if (scriptToSpeak) {
          const audio = await getOrSynthesizeAudio(scriptToSpeak, voice);
          if (audio) {
            aiResponse.audioBase64 = audio.audioBase64;
            aiResponse.mimeType = audio.mimeType;
          }
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ success: true, coach: aiResponse }));
      } catch (err) {
        console.error('Gemini Coach error:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });
    return;
  }

  // API 2: Gemini 3.8 Flash Autonomous Next Move (with integrated Neural Audio)
  if (pathname === '/api/gemini/next-move' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      try {
        const data = JSON.parse(body || '{}');
        const movesList = data.moves ? data.moves.join(', ') : 'None (Empty Board)';
        const turn = data.turn === 'B' ? 'Black' : 'White';
        const size = data.size || 19;
        const voice = data.voice || 'Aoede';

        const boardCoordInfo = size === 9
          ? "The board is 9x9. Coordinates use standard Go notation (Columns A-J skipping 'I', Rows 1-9). Center Tengen is E5, corner star points are C3, G3, C7, G7."
          : size === 13
          ? "The board is 13x13. Coordinates use standard Go notation (Columns A-N skipping 'I', Rows 1-13). Center Tengen is G7, corner star points are D4, K4, D10, K10."
          : "The board is standard 19x19. Coordinates skip 'I' (Columns: A-T, Rows: 1-19).";

        const prompt = `You are an active 9-dan Go master Sensei powered by Gemini 3.8 Flash playing as White in a teaching game against a student playing as Black.
${boardCoordInfo}
Moves played so far: [${movesList}].
Current player to move: White.

MANDATORY RULES:
1. You must ALWAYS select an active, constructive legal move on the ${size}x${size} board that teaches proper Go principles (e.g. claim corners/sides, enclose territory, defend cutting points, or counter-attack).
2. NEVER pass while empty legal intersections remain on the board. Passing early ruins the learning game.
3. Do NOT replay already occupied intersections.

Return valid JSON:
{
  "move": "Coordinate string valid for ${size}x${size} (e.g. ${size === 9 ? 'C5' : (size === 13 ? 'D4' : 'Q16')})",
  "commentary": "Brief 1-sentence note on White's placement.",
  "voiceAnnouncerScript": "Brief 1-sentence announcement: announce where White played and return the turn to the student, e.g. 'White plays at ${size === 9 ? 'C5' : 'D4'}. Your turn.'"
}`;

        const aiResponse = await callGemini38Flash(prompt);

        // Synthesize Gemini Neural Speech for White's move
        if (aiResponse.voiceAnnouncerScript) {
          try {
            const audio = await synthesizeGeminiAudio(aiResponse.voiceAnnouncerScript, voice);
            if (audio) {
              aiResponse.audioBase64 = audio.audioBase64;
              aiResponse.mimeType = audio.mimeType;
            }
          } catch (e) {
            console.warn('[Gemini Next Move] Audio synthesis skipped:', e.message);
          }
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ success: true, ...aiResponse }));
      } catch (err) {
        console.error('Gemini Next Move error:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });
    return;
  }

  // API 3: Gemini 3.8 Flash Live TTS on-demand
  if (pathname === '/api/gemini/live-tts' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      try {
        const data = JSON.parse(body || '{}');
        const text = data.text || '';
        const voice = data.voice || 'Aoede';
        const audio = await synthesizeGeminiAudio(text, voice);
        if (audio) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: true, ...audio }));
        } else {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: false, error: 'Audio synthesis failed' }));
        }
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });
    return;
  }

  // API 4: Unified Fast Turn (Evaluation + White Move + Next 3 Candidates in 1 Round-Trip)
  if (pathname === '/api/gemini/unified-turn' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      try {
        const data = JSON.parse(body || '{}');
        const movesList = data.moves ? data.moves.join(', ') : 'None';
        const blackMove = data.blackMove || (data.moves ? data.moves[data.moves.length - 1] : 'Opening');
        const level = data.level || 1;
        const size = data.size || 19;
        const voice = data.voice || 'Aoede';

        const boardCoordInfo = size === 9
          ? "The board is 9x9. Coordinates use standard Go notation (Columns A-J skipping 'I', Rows 1-9). Center Tengen is E5, corner star points are C3, G3, C7, G7."
          : size === 13
          ? "The board is 13x13. Coordinates use standard Go notation (Columns A-N skipping 'I', Rows 1-13). Center Tengen is G7, corner star points are D4, K4, D10, K10."
          : "The board is standard 19x19. Coordinates skip 'I' (Columns: A-T, Rows: 1-19).";

        // Check 8-Fold Dihedral Opening Book & Firestore Cache for 9x9
        if (size === 9) {
          const { canonicalKey, transformIndex } = getCanonicalMoveSequence(data.moves || [], 9);
          if (OPENING_BOOK_9X9[canonicalKey]) {
            const raw = OPENING_BOOK_9X9[canonicalKey];
            const cachedAdvice = {
              ...raw,
              recommendedMove: inverseTransformCoord(raw.recommendedMove, transformIndex, 9),
              top3Candidates: (raw.top3Candidates || []).map(c => ({
                ...c,
                coord: inverseTransformCoord(c.coord, transformIndex, 9)
              }))
            };

            const fastResponse = {
              candidateEvaluation: raw.candidateEvaluation || {
                grade: "EXCELLENT",
                title: "Canonical Joseki / Fuseki",
                explanation: `Solid opening move played at ${blackMove}. Controls crucial framework and maintains balanced liberties.`,
                spokenFeedback: `Great play at ${blackMove}!`
              },
              whiteMove: raw.whiteMove ? {
                ...raw.whiteMove,
                coord: inverseTransformCoord(raw.whiteMove.coord, transformIndex, 9),
                voiceAnnouncerScript: `White plays at ${inverseTransformCoord(raw.whiteMove.coord, transformIndex, 9)}. Your turn.`
              } : {
                coord: cachedAdvice.recommendedMove,
                commentary: "White occupies opposing quadrant to maintain territory balance.",
                voiceAnnouncerScript: `White plays at ${cachedAdvice.recommendedMove}. Your turn.`
              },
              nextBlackAdvice: cachedAdvice
            };

            const scriptToSpeak = fastResponse.candidateEvaluation.spokenFeedback;
            if (scriptToSpeak) {
              const audio = await getOrSynthesizeAudio(scriptToSpeak, voice);
              if (audio) {
                fastResponse.audioBase64 = audio.audioBase64;
                fastResponse.mimeType = audio.mimeType;
              }
            }

            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ success: true, turn: fastResponse, source: 'cache-8fold' }));
          }
        }

        const prompt = `You are an active 9-dan Go master Sensei powered by Gemini 3.8 Flash conducting a teaching match against a human student playing as Black.
${boardCoordInfo}
Current game move history: [${movesList}].
The student just played: Black at ${blackMove}.

Provide a fast, unified turn response covering:
1. EVALUATION of Black's move at ${blackMove}.
2. WHITE'S NEXT MOVE: White must select an active, legal counter-move (do NOT pass while empty legal intersections remain, and do not pick an already occupied coordinate).
3. BLACK'S UPCOMING ADVICE & 3 CANDIDATE CHOICES for Black's next move after White plays.

Return valid JSON:
{
  "candidateEvaluation": {
    "grade": "EXCELLENT" | "SOLID" | "BLUNDER",
    "title": "Short punchy title (3-5 words)",
    "explanation": "2-sentence breakdown of how this move affects liberties, shape, and territory.",
    "spokenFeedback": "Short 1-sentence verbal reaction to Black's move."
  },
  "whiteMove": {
    "coord": "Coordinate valid for ${size}x${size} (e.g. ${size === 9 ? 'C3' : (size === 13 ? 'D4' : 'Q16')})",
    "commentary": "1-sentence tactical rationale for White's move.",
    "voiceAnnouncerScript": "White plays at <coord>. Your turn."
  },
  "nextBlackAdvice": {
    "recommendedMove": "Coordinate string for Black's top upcoming choice",
    "top3Candidates": [
      { "rank": 1, "coord": "Top choice coordinate", "name": "Primary Master Choice", "reason": "1-sentence tactical rationale" },
      { "rank": 2, "coord": "Second choice coordinate", "name": "Solid Alternative", "reason": "1-sentence tactical rationale" },
      { "rank": 3, "coord": "Third choice coordinate", "name": "Flexible Expansion", "reason": "1-sentence tactical rationale" }
    ],
    "whatToDo": "2-3 sentences explaining Black's best strategic direction and relevant Go proverb.",
    "whatToWatchOutFor": "2-3 sentences analyzing White's threats or cuts to preempt.",
    "whatNotToDo": "2-3 sentences warning against common amateur mistakes or premature attachments.",
    "summary": "1 sentence on the whole-board positional balance.",
    "spokenScript": "1-sentence encouragement for Black's next move."
  }
}`;

        const aiResponse = await callGemini38Flash(prompt);

        // Synthesize Neural Speech for Coach Feedback concurrently
        const scriptToSpeak = (aiResponse.candidateEvaluation && aiResponse.candidateEvaluation.spokenFeedback) || '';
        if (scriptToSpeak) {
          try {
            const audio = await synthesizeGeminiAudio(scriptToSpeak, voice);
            if (audio) {
              aiResponse.audioBase64 = audio.audioBase64;
              aiResponse.mimeType = audio.mimeType;
            }
          } catch(e) {}
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ success: true, turn: aiResponse }));
      } catch (err) {
        console.error('Unified turn error:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });
    return;
  }

  // Static files handling
  let safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  if (safePath === '/' || safePath === '') {
    safePath = '/index.html';
  }

  let filePath = path.join(PUBLIC_DIR, safePath);

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(PUBLIC_DIR, 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      return res.end('500 Internal Server Error');
    }
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'X-Content-Type-Options': 'nosniff'
    });
    res.end(content);
  });
});

// WebSocket Server for Gemini Live streaming audio
const wss = new WebSocketServer({ noServer: true });

server.on('upgrade', (request, socket, head) => {
  const parsedUrl = new URL(request.url, `http://${request.headers.host}`);
  if (parsedUrl.pathname === '/ws/live-coach') {
    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit('connection', ws, request);
    });
  } else {
    socket.destroy();
  }
});

wss.on('connection', (ws) => {
  ws.on('message', async (message) => {
    try {
      const data = JSON.parse(message.toString());
      if (data.action === 'ping') {
        return ws.send(JSON.stringify({ type: 'pong' }));
      }
      if (data.action === 'speak') {
        const voice = data.voice || 'Aoede';
        const text = data.text || '';
        const audio = await synthesizeGeminiAudio(text, voice);
        if (audio) {
          ws.send(JSON.stringify({
            type: 'audio',
            audioBase64: audio.audioBase64,
            mimeType: audio.mimeType,
            text,
            voice
          }));
        } else {
          ws.send(JSON.stringify({ type: 'error', message: 'Gemini audio synthesis failed' }));
        }
      }
    } catch (e) {
      ws.send(JSON.stringify({ type: 'error', message: e.message }));
    }
  });
});

server.listen(PORT, () => {
  console.log(`Move 37 Go Showcase Server running on http://localhost:${PORT}`);
  console.log(`Gemini 3.8 Flash API Key configured: ${GEMINI_API_KEY ? 'YES (' + GEMINI_API_KEY.slice(0, 7) + '...)' : 'NO'}`);
  console.log(`Gemini Live WebSocket listening on /ws/live-coach`);
});
