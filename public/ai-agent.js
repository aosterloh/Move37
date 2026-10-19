/**
 * ai-agent.js - Gemini 3.8 Flash Go Engine & Grandmaster Coach
 * Features:
 * - Real-time integration with Gemini 3.8 Flash for intelligent Go coaching
 * - Dynamic Candidate Move Grading (EXCELLENT, SOLID, BLUNDER)
 * - Deep tactical advice: what to do, what to watch out for, what not to do
 * - Authentic Go knowledge base (Fuseki openings, Joseki, eye-space, Sente)
 */

import { EMPTY, BLACK, WHITE } from './go-engine.js';

export class GoAIAgent {
  constructor(engine) {
    this.engine = engine;
    this.isGeminiBusy = false;
  }

  /**
   * Format the current move history into standard Go coordinates for Gemini prompt
   */
  getMoveHistoryList() {
    const list = [];
    let count = 1;
    for (const h of this.engine.history) {
      if (h.lastMove) {
        if (h.lastMove.pass) {
          list.push(`${count}. Pass (${h.lastMove.color === BLACK ? 'B' : 'W'})`);
        } else {
          const coord = this.engine.toGoCoord(h.lastMove.x, h.lastMove.y);
          const colorStr = h.lastMove.color === BLACK ? 'B' : 'W';
          list.push(`${count}. ${colorStr}:${coord}`);
        }
        count++;
      }
    }
    if (this.engine.lastMove) {
      if (this.engine.lastMove.pass) {
        list.push(`${count}. Pass (${this.engine.lastMove.color === BLACK ? 'B' : 'W'})`);
      } else {
        const coord = this.engine.toGoCoord(this.engine.lastMove.x, this.engine.lastMove.y);
        const colorStr = this.engine.lastMove.color === BLACK ? 'B' : 'W';
        list.push(`${count}. ${colorStr}:${coord}`);
      }
    }
    return list;
  }

  /**
   * High-Speed Unified Turn:
   * Combines move evaluation, White counter-move, and next Black advice in a single 1.5s call
   */
  async requestUnifiedTurn(blackCoord, level = 1) {
    try {
      const moves = this.getMoveHistoryList();
      const voice = (typeof window !== 'undefined' && window.voiceCoach && window.voiceCoach.selectedPersona) || 'Aoede';

      const response = await fetch('/api/gemini/unified-turn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          moves,
          blackMove: blackCoord,
          level,
          size: this.engine.size,
          voice
        })
      });

      const data = await response.json();
      if (data && data.success && data.turn) {
        if (data.turn.nextBlackAdvice && Array.isArray(data.turn.nextBlackAdvice.top3Candidates)) {
          data.turn.nextBlackAdvice.top3Candidates = data.turn.nextBlackAdvice.top3Candidates.map((c, idx) => {
            const pt = this.engine.fromGoCoord(c.coord);
            return {
              rank: c.rank || (idx + 1),
              coord: c.coord,
              x: pt ? pt.x : undefined,
              y: pt ? pt.y : undefined,
              name: c.name || `Choice ${idx + 1}`,
              reason: c.reason || ''
            };
          }).filter(c => c.x !== undefined && c.y !== undefined);
        }
        return data;
      }
      return null;
    } catch (err) {
      console.warn('[AI Agent] Unified turn request failed:', err.message);
      return null;
    }
  }

  /**
   * Request intelligent coaching analysis from Gemini 3.8 Flash
   * @param {number} level - 1 (Novice), 2 (Master), 3 (Legend)
   * @param {string|null} candidateCoord - e.g. "D4" or null
   */
  async requestGeminiCoaching(level = 1, candidateCoord = null) {
    try {
      const moves = this.getMoveHistoryList();
      const turn = this.engine.turn === BLACK ? 'B' : 'W';
      const voice = (typeof window !== 'undefined' && window.voiceCoach && window.voiceCoach.selectedPersona) || 'Aoede';

      const response = await fetch('/api/gemini/coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          moves,
          turn: 'B', // Text tips and advice are strictly for the playing user (Black)
          studentColor: 'B',
          level,
          size: this.engine.size,
          candidateMove: candidateCoord,
          voice
        })
      });

      const data = await response.json();
      if (data.success && data.coach) {
        let top3 = [];
        if (Array.isArray(data.coach.top3Candidates) && data.coach.top3Candidates.length > 0) {
          top3 = data.coach.top3Candidates.map((c, idx) => {
            const pt = this.engine.fromGoCoord(c.coord);
            return {
              rank: c.rank || (idx + 1),
              coord: c.coord,
              x: pt ? pt.x : undefined,
              y: pt ? pt.y : undefined,
              name: c.name || `Choice ${idx + 1}`,
              reason: c.reason || ''
            };
          }).filter(c => c.x !== undefined && c.y !== undefined && this.engine.board[c.y][c.x] === EMPTY);
        }

        // If Gemini didn't return 3 valid candidates or some were invalid, merge with local heuristic candidates
        if (top3.length < 3) {
          const fallbackTop3 = this.getTop3Candidates(BLACK);
          const existingCoords = new Set(top3.map(c => c.coord));
          for (const fb of fallbackTop3) {
            if (!existingCoords.has(fb.coord)) {
              top3.push({
                rank: top3.length + 1,
                coord: fb.coord,
                x: fb.x,
                y: fb.y,
                name: fb.name,
                reason: fb.reason
              });
              existingCoords.add(fb.coord);
            }
            if (top3.length >= 3) break;
          }
        }

        return {
          statusBadge: `Gemini 3.8 Flash`,
          recommendedMove: data.coach.recommendedMove || (top3[0] ? top3[0].coord : (this.engine.size === 9 ? 'E5' : (this.engine.size === 13 ? 'G7' : 'Q16'))),
          top3Candidates: top3,
          summary: data.coach.summary || 'Maintain balanced stones and defend weak cuts.',
          whatToDo: data.coach.whatToDo || 'Stake territory in the corners and sides.',
          whatToWatchOutFor: data.coach.whatToWatchOutFor || 'Watch out for cutting defects in your stones.',
          whatNotToDo: data.coach.whatNotToDo || 'Do not play inside tight spaces with only 1 liberty.',
          spokenScript: data.coach.spokenScript || null,
          candidateEvaluation: data.coach.candidateEvaluation || null,
          audioBase64: data.coach.audioBase64 || null
        };
      }
    } catch (err) {
      console.warn('Gemini 3.8 Flash coach fetch failed, using built-in knowledge base:', err);
    }

    // Fallback to built-in knowledge base if offline or network error
    return this.generateFallbackAdvice(level);
  }

  /**
   * Request next autonomous move from Gemini 3.8 Flash
   */
  async requestGeminiNextMove() {
    try {
      const moves = this.getMoveHistoryList();
      const turn = this.engine.turn === BLACK ? 'B' : 'W';
      const voice = (typeof window !== 'undefined' && window.voiceCoach && window.voiceCoach.selectedPersona) || 'Aoede';

      const response = await fetch('/api/gemini/next-move', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          moves,
          turn,
          size: this.engine.size,
          voice
        })
      });

      const data = await response.json();
      if (data.success && data.move) {
        // In Learning mode, forbid premature passes by White while open legal moves exist
        if (data.move.toUpperCase() !== 'PASS') {
          const pt = this.engine.fromGoCoord(data.move);
          if (pt && this.engine.checkMove(pt.x, pt.y, this.engine.turn).valid) {
            return {
              move: { x: pt.x, y: pt.y, color: this.engine.turn },
              commentary: data.commentary || `Gemini 3.8 Flash plays ${data.move}.`,
              voiceAnnouncerScript: data.voiceAnnouncerScript || `White has played at ${data.move}. Take a moment to evaluate your response.`,
              audioBase64: data.audioBase64 || null
            };
          }
        }
      }
    } catch (err) {
      console.warn('Gemini next move failed:', err);
    }
    return null;
  }

  /**
   * High-level heuristic move finder guaranteeing a valid, strategic move on any board size.
   * White will NEVER pass as long as there is an unoccupied legal point on the board.
   */
  getSmartCandidateMove(color = WHITE) {
    const opp = color === BLACK ? WHITE : BLACK;
    const groups = this.engine.getAllGroups();

    // 1. Urgent Defense: Save own group in Atari (liberties === 1)
    const myAtaris = groups.filter(g => g.color === color && g.liberties.size === 1);
    for (const g of myAtaris) {
      for (const libStr of g.liberties) {
        const [lx, ly] = libStr.split(',').map(Number);
        const check = this.engine.checkMove(lx, ly, color);
        if (check.valid) {
          return { x: lx, y: ly, reason: 'Defending group from capture' };
        }
      }
    }

    // 2. Urgent Attack: Capture opponent group in Atari (liberties === 1)
    const oppAtaris = groups.filter(g => g.color === opp && g.liberties.size === 1);
    for (const g of oppAtaris) {
      for (const libStr of g.liberties) {
        const [lx, ly] = libStr.split(',').map(Number);
        const check = this.engine.checkMove(lx, ly, color);
        if (check.valid) {
          return { x: lx, y: ly, reason: 'Capturing opponent stones' };
        }
      }
    }

    // 3. Size-Adaptive Star Points & Tengen
    const starPoints = this.engine.size === 9
      ? ['C3', 'G7', 'C7', 'G3', 'E5', 'C5', 'G5', 'E3', 'E7']
      : (this.engine.size === 13
        ? ['D4', 'K10', 'D10', 'K4', 'G7', 'D7', 'K7', 'G4', 'G10']
        : ['Q16', 'D4', 'Q4', 'D16', 'K10', 'R14', 'C6', 'O3', 'E16', 'D10', 'Q10', 'K4', 'K16']);

    for (const coord of starPoints) {
      const pt = this.engine.fromGoCoord(coord);
      if (pt && this.engine.board[pt.y][pt.x] === EMPTY) {
        const check = this.engine.checkMove(pt.x, pt.y, color);
        if (check.valid) {
          return { x: pt.x, y: pt.y, reason: 'Commanding opening star point' };
        }
      }
    }

    // 4. Strategic Extensions: Near existing stones on the 3rd and 4th lines
    const candidates = [];
    for (let y = 0; y < this.engine.size; y++) {
      for (let x = 0; x < this.engine.size; x++) {
        if (this.engine.board[y][x] !== EMPTY) continue;
        const check = this.engine.checkMove(x, y, color);
        if (!check.valid) continue;

        let score = 0;
        const neighbors = this.engine.getNeighbors(x, y);
        let liberties = 0;
        for (const n of neighbors) {
          if (this.engine.board[n.y][n.x] === EMPTY) liberties++;
          else if (this.engine.board[n.y][n.x] === color) score += 3;
          else score += 2;
        }
        if (liberties < 2) continue; // Avoid immediate self-atari

        const edgeDist = Math.min(x, y, this.engine.size - 1 - x, this.engine.size - 1 - y);
        if (this.engine.size === 9) {
          if (edgeDist === 1 || edgeDist === 2) score += 4;
        } else {
          if (edgeDist === 2 || edgeDist === 3) score += 5;
        }

        score += liberties * 2;
        candidates.push({ x, y, score });
      }
    }

    if (candidates.length > 0) {
      candidates.sort((a, b) => b.score - a.score);
      return { x: candidates[0].x, y: candidates[0].y, reason: 'Expanding territorial framework' };
    }

    // 5. Universal Legal Move Sweep (Center outward)
    const mid = Math.floor(this.engine.size / 2);
    const allPoints = [];
    for (let y = 0; y < this.engine.size; y++) {
      for (let x = 0; x < this.engine.size; x++) {
        if (this.engine.board[y][x] === EMPTY) {
          const dist = Math.abs(x - mid) + Math.abs(y - mid);
          allPoints.push({ x, y, dist });
        }
      }
    }
    allPoints.sort((a, b) => a.dist - b.dist);

    for (const p of allPoints) {
      const check = this.engine.checkMove(p.x, p.y, color);
      if (check.valid) {
        return { x: p.x, y: p.y, reason: 'Solid positional play' };
      }
    }

    // Truly no legal moves left on board
    return null;
  }

  /**
   * Return 3 distinct, ranked candidate moves for the student (Black):
   * Rank 1: Gold - Master recommendation (e.g. urgent atari defense / primary star point)
   * Rank 2: Cyan - Solid alternative (e.g. opposite corner / base enclosure)
   * Rank 3: Violet - Flexible alternative (e.g. side extension / Tengen)
   */
  getTop3Candidates(color = BLACK) {
    const opp = color === BLACK ? WHITE : BLACK;
    const candidates = [];
    const usedPoints = new Set();

    const addCandidate = (x, y, name, reason) => {
      const key = `${x},${y}`;
      if (usedPoints.has(key)) return;
      if (!this.engine.inBounds(x, y)) return;
      if (this.engine.board[y][x] !== EMPTY) return;
      const check = this.engine.checkMove(x, y, color);
      if (!check.valid) return;

      usedPoints.add(key);
      const rank = candidates.length + 1;
      const coord = this.engine.toGoCoord(x, y);
      candidates.push({
        rank,
        coord,
        x,
        y,
        name,
        reason
      });
    };

    const groups = this.engine.getAllGroups();

    // 1. Defend urgent friendly ataris
    const myAtaris = groups.filter(g => g.color === color && g.liberties.size === 1);
    for (const g of myAtaris) {
      for (const libStr of g.liberties) {
        const [lx, ly] = libStr.split(',').map(Number);
        addCandidate(lx, ly, 'Urgent Atari Defense', 'Rescue threatened group by connecting or escaping.');
        if (candidates.length >= 3) break;
      }
      if (candidates.length >= 3) break;
    }

    // 2. Capture vulnerable opponent ataris
    if (candidates.length < 3) {
      const oppAtaris = groups.filter(g => g.color === opp && g.liberties.size === 1);
      for (const g of oppAtaris) {
        for (const libStr of g.liberties) {
          const [lx, ly] = libStr.split(',').map(Number);
          addCandidate(lx, ly, 'Tactical Capture', 'Strike at the final liberty to capture opponent stones.');
          if (candidates.length >= 3) break;
        }
        if (candidates.length >= 3) break;
      }
    }

    // 3. Size-Adaptive Star Points & Tengen
    if (candidates.length < 3) {
      const starPoints = this.engine.size === 9
        ? ['E5', 'C3', 'G7', 'C7', 'G3', 'C5', 'G5', 'E3', 'E7']
        : (this.engine.size === 13
          ? ['G7', 'D4', 'K10', 'D10', 'K4', 'D7', 'K7', 'G4', 'G10']
          : ['Q16', 'D4', 'Q4', 'D16', 'K10', 'R14', 'C6', 'O3', 'E16', 'D10', 'Q10']);

      const labels = ['Corner Foundation', 'Territorial Anchor', 'Central Radiance', 'Side Wing', 'Balance Point'];
      let labelIdx = 0;
      for (const coord of starPoints) {
        const pt = this.engine.fromGoCoord(coord);
        if (pt) {
          const label = labels[labelIdx % labels.length];
          labelIdx++;
          addCandidate(pt.x, pt.y, label, `Claim strategic star point at ${coord} for rapid framework.`);
          if (candidates.length >= 3) break;
        }
      }
    }

    // 4. Strategic Extensions around existing stones
    if (candidates.length < 3) {
      const scored = [];
      for (let y = 0; y < this.engine.size; y++) {
        for (let x = 0; x < this.engine.size; x++) {
          const key = `${x},${y}`;
          if (usedPoints.has(key) || this.engine.board[y][x] !== EMPTY) continue;
          const check = this.engine.checkMove(x, y, color);
          if (!check.valid) continue;

          let score = 0;
          const neighbors = this.engine.getNeighbors(x, y);
          let libs = 0;
          for (const n of neighbors) {
            if (this.engine.board[n.y][n.x] === EMPTY) libs++;
            else if (this.engine.board[n.y][n.x] === color) score += 3;
            else score += 2;
          }
          if (libs < 2) continue;

          const edgeDist = Math.min(x, y, this.engine.size - 1 - x, this.engine.size - 1 - y);
          if (this.engine.size === 9) {
            if (edgeDist === 1 || edgeDist === 2) score += 4;
          } else {
            if (edgeDist === 2 || edgeDist === 3) score += 5;
          }
          score += libs * 2;
          scored.push({ x, y, score });
        }
      }

      scored.sort((a, b) => b.score - a.score);
      for (const item of scored) {
        addCandidate(item.x, item.y, 'Framework Extension', 'Expand along the side to maintain liberties and territory.');
        if (candidates.length >= 3) break;
      }
    }

    // 5. Fill remaining slots with center-outward legal moves
    if (candidates.length < 3) {
      const mid = Math.floor(this.engine.size / 2);
      const allPoints = [];
      for (let y = 0; y < this.engine.size; y++) {
        for (let x = 0; x < this.engine.size; x++) {
          if (this.engine.board[y][x] === EMPTY && !usedPoints.has(`${x},${y}`)) {
            allPoints.push({ x, y, dist: Math.abs(x - mid) + Math.abs(y - mid) });
          }
        }
      }
      allPoints.sort((a, b) => a.dist - b.dist);
      for (const p of allPoints) {
        addCandidate(p.x, p.y, 'Solid Play', 'Safe, harmonious placement maintaining breathing space.');
        if (candidates.length >= 3) break;
      }
    }

    return candidates.slice(0, 3);
  }

  /**
   * Built-in fallback tactical advisor (grandmaster Go principles)
   */
  generateFallbackAdvice(level = 1) {
    const currentColor = BLACK; // Text tips strictly advise the playing user (Black)
    const top3Candidates = this.getTop3Candidates(currentColor);
    const candidate = top3Candidates[0];
    const recommendedCoord = candidate
      ? candidate.coord
      : (this.engine.size === 9 ? 'E5' : (this.engine.size === 13 ? 'G7' : 'Q16'));

    const groups = this.engine.getAllGroups();
    const friendlyAtaris = groups.filter(g => g.color === currentColor && g.liberties.size === 1);
    const oppAtaris = groups.filter(g => g.color !== currentColor && g.liberties.size === 1);

    if (friendlyAtaris.length > 0) {
      const lib = Array.from(friendlyAtaris[0].liberties)[0].split(',').map(Number);
      const coord = this.engine.toGoCoord(lib[0], lib[1]);
      return {
        statusBadge: 'Urgent Atari',
        recommendedMove: coord,
        top3Candidates,
        summary: `Critical: Your stones have only 1 liberty remaining.`,
        whatToDo: `Play at ${coord} immediately to extend liberties or counter-capture!`,
        whatToWatchOutFor: `Opponent will capture your stones next turn if you do not defend.`,
        whatNotToDo: `Do not ignore this threat to play tenuki elsewhere.`
      };
    }

    if (oppAtaris.length > 0) {
      const lib = Array.from(oppAtaris[0].liberties)[0].split(',').map(Number);
      const coord = this.engine.toGoCoord(lib[0], lib[1]);
      return {
        statusBadge: 'Capture Available',
        recommendedMove: coord,
        top3Candidates,
        summary: `Opponent group is in Atari with only 1 liberty.`,
        whatToDo: `Strike at ${coord} to capture the opponent's stones!`,
        whatToWatchOutFor: `Ensure your capturing move doesn't place you into a dangerous trap.`,
        whatNotToDo: `Do not let the opponent connect and escape.`
      };
    }

    const moveCount = this.engine.history.length;
    if (moveCount < (this.engine.size === 9 ? 4 : (this.engine.size === 13 ? 8 : 12))) {
      return {
        statusBadge: 'Opening Fuseki',
        recommendedMove: recommendedCoord,
        top3Candidates,
        summary: `Opening Axiom: Stake out star points and corners early for efficient territorial framework.`,
        whatToDo: `Claim strategic point at ${recommendedCoord}.`,
        whatToWatchOutFor: `Avoid crowding stones; expand outward to maintain breathing liberties.`,
        whatNotToDo: `Do not attach face-to-face unless prepared for early cross-cut fighting.`
      };
    }

    return {
      statusBadge: 'Strategic Balance',
      recommendedMove: recommendedCoord,
      top3Candidates,
      summary: `Balance territory along the 3rd line with central influence.`,
      whatToDo: `Extend your framework or reinforce boundaries near ${recommendedCoord}.`,
      whatToWatchOutFor: `Watch out for cutting points (cross-cuts) that divide your groups.`,
      whatNotToDo: `Avoid the 'empty triangle' (a 3-stone clump that wastes liberties).`
    };
  }

  /**
   * Fast evaluation of candidate moves
   */
  evaluateCandidateMoveFast(x, y, color = this.engine.turn) {
    const check = this.engine.checkMove(x, y, color);
    if (!check.valid) {
      return {
        grade: 'BLUNDER',
        badgeClass: 'badge-blunder',
        title: 'Illegal Move',
        explanation: check.reason
      };
    }

    if (check.capturedStones && check.capturedStones.length > 0) {
      return {
        grade: 'EXCELLENT',
        badgeClass: 'badge-excellent',
        title: `Decisive Capture (+${check.capturedStones.length})`,
        explanation: `Excellent tactical strike! Captured ${check.capturedStones.length} stone(s), securing eyespace and eliminating threats.`
      };
    }

    const coordStr = this.engine.toGoCoord(x, y);
    const starPoints = ['D4', 'Q4', 'D16', 'Q16', 'K10', 'D10', 'Q10', 'K4', 'K16'];
    if (this.engine.history.length < 12 && starPoints.includes(coordStr)) {
      return {
        grade: 'EXCELLENT',
        badgeClass: 'badge-excellent',
        title: 'Golden Opening Point',
        explanation: `Textbook Fuseki development! Commanding the corners and sides commands high-efficiency territory.`
      };
    }

    return {
      grade: 'SOLID',
      badgeClass: 'badge-solid',
      title: 'Sound Positional Play',
      explanation: `Harmonious balance. Expands liberties and maintains flexible board structure.`
    };
  }
}
