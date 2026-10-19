/**
 * voice-coach.js - Gemini Live Real-time Neural Voice & Audio Engine
 * Powered by Gemini 3.8 Flash Neural Speech (Aoede, Kore, Puck, Charon, Fenrir)
 * Over Web Audio API & Low-Latency WebSocket Stream, with automatic fallback
 */

export const GEMINI_VOICES = {
  'Aoede': {
    id: 'Aoede',
    name: 'Sensei Aoede',
    title: '✨ 👩 Sensei Aoede (Warm & Expressive)',
    gender: 'female',
    sample: "Welcome to the Go board. Let us build sound stones, protect our liberties, and enjoy the game together."
  },
  'Kore': {
    id: 'Kore',
    name: 'Master Kore',
    title: '✨ 👩 Master Kore (Serene & Philosophical)',
    gender: 'female',
    sample: "Breathe with the stones. Do not rush to attack; secure your own groups first and allow your opponent's weaknesses to surface."
  },
  'Puck': {
    id: 'Puck',
    name: 'Sensei Puck',
    title: '✨ 👨 Sensei Puck (Energetic & Friendly)',
    gender: 'male',
    sample: "Good to have you here! Always look at the whole board before placing your stone. Protect your corners and maintain thick connections."
  },
  'Charon': {
    id: 'Charon',
    name: 'Grandmaster Charon',
    title: '✨ 👨 Grandmaster Charon (Deep & Authoritative)',
    gender: 'male',
    sample: "Go is a conversation without words. The board mirrors the mind. Play with harmony, balance, and patience."
  },
  'Fenrir': {
    id: 'Fenrir',
    name: 'Master Fenrir',
    title: '✨ 👨 Master Fenrir (Direct & Tactical)',
    gender: 'male',
    sample: "Every stone has a mission. Identify whether your move attacks, defends, or expands. Never play an idle move."
  }
};

export class VoiceCoach {
  constructor() {
    this.selectedPersona = localStorage.getItem('move37_gemini_voice') || 'Aoede';
    if (!GEMINI_VOICES[this.selectedPersona]) {
      this.selectedPersona = 'Aoede';
    }
    this.enabled = localStorage.getItem('move37_voice_enabled') !== 'false';
    this.audioCtx = null;
    this.activeSource = null;
    this.ws = null;
    this.isWsReady = false;
    this.unlocked = false;

    // Web Speech API fallback
    this.synth = typeof window !== 'undefined' && 'speechSynthesis' in window ? window.speechSynthesis : null;

    this.connectWebSocket();
  }

  initAudioContext() {
    if (!this.audioCtx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  unlock() {
    if (this.unlocked) return;
    this.unlocked = true;
    this.initAudioContext();
    if (this.synth && this.synth.paused) {
      try { this.synth.resume(); } catch (e) {}
    }
  }

  connectWebSocket() {
    if (typeof window === 'undefined') return;
    try {
      const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
      const wsUrl = `${protocol}//${window.location.host}/ws/live-coach`;
      this.ws = new WebSocket(wsUrl);

      this.ws.onopen = () => {
        this.isWsReady = true;
        console.log('[Gemini Live] WebSocket connected');
      };

      this.ws.onclose = () => {
        this.isWsReady = false;
        // Attempt reconnect in 3s
        setTimeout(() => this.connectWebSocket(), 3000);
      };

      this.ws.onerror = (err) => {
        this.isWsReady = false;
      };
    } catch (e) {
      this.isWsReady = false;
    }
  }

  setEnabled(val) {
    this.enabled = !!val;
    localStorage.setItem('move37_voice_enabled', this.enabled ? 'true' : 'false');
    if (!this.enabled) {
      this.stop();
    }
    return this.enabled;
  }

  setPersona(personaId) {
    if (GEMINI_VOICES[personaId]) {
      this.selectedPersona = personaId;
      localStorage.setItem('move37_gemini_voice', personaId);
    }
  }

  isSpeaking() {
    const isAudioPlaying = !!this.activeSource;
    const isSynthPlaying = !!(this.synth && (this.synth.speaking || this.synth.pending) && window._activeCoachUtterance);
    return isAudioPlaying || isSynthPlaying;
  }

  stop() {
    // 1. Stop active Web Audio source
    if (this.activeSource) {
      try {
        this.activeSource.stop();
        this.activeSource.disconnect();
      } catch (e) {}
      this.activeSource = null;
    }

    // 2. Stop Web Speech fallback
    if (this.synth) {
      try {
        window._activeCoachUtterance = null;
        this.synth.cancel();
        if (this.synth.paused) this.synth.resume();
      } catch (e) {}
    }
  }

  /**
   * Play Gemini 3.8 Flash Neural Audio (WAV) directly via Web Audio API
   */
  async playAudioBase64(base64Data, onEndCallback = null) {
    if (!base64Data || !this.enabled) {
      if (onEndCallback) onEndCallback();
      return;
    }

    this.stop();
    this.initAudioContext();

    if (!this.audioCtx) {
      if (onEndCallback) onEndCallback();
      return;
    }

    try {
      const binary = atob(base64Data);
      const len = binary.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binary.charCodeAt(i);
      }

      const audioBuffer = await this.audioCtx.decodeAudioData(bytes.buffer.slice(0));
      const source = this.audioCtx.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(this.audioCtx.destination);

      this.activeSource = source;

      let finished = false;
      const cleanup = () => {
        if (finished) return;
        finished = true;
        if (this.activeSource === source) {
          this.activeSource = null;
        }
        if (onEndCallback) onEndCallback();
      };

      source.onended = cleanup;
      source.start(0);
    } catch (err) {
      console.warn('[Gemini Live] Audio playback error:', err);
      this.activeSource = null;
      if (onEndCallback) onEndCallback();
    }
  }

  /**
   * High-level speech request:
   * 1. If direct audio base64 is already provided from Gemini API turn, plays immediately!
   * 2. Otherwise calls /api/gemini/live-tts to synthesize via Gemini 3.8 Flash
   * 3. Seamlessly falls back to local Web Speech API if offline
   */
  async speakAsync(text, directAudioBase64 = null) {
    if (!this.enabled) return;

    // Fast-path: Audio was generated alongside move evaluation
    if (directAudioBase64) {
      return new Promise((resolve) => {
        this.playAudioBase64(directAudioBase64, resolve);
      });
    }

    const clean = (text || '').replace(/[*#_~`\[\]]/g, '').trim();
    if (!clean) return;

    // Request Gemini 3.8 Flash Live TTS
    try {
      const res = await fetch('/api/gemini/live-tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: clean,
          voice: this.selectedPersona
        })
      });

      const data = await res.json();
      if (data.success && data.audioBase64) {
        return new Promise((resolve) => {
          this.playAudioBase64(data.audioBase64, resolve);
        });
      }
    } catch (err) {
      console.warn('[Gemini Live TTS] Request failed, using client speech fallback:', err);
    }

    // Fallback: Web Speech API
    return this._speakWebSpeechAsync(clean);
  }

  speak(text, directAudioBase64 = null) {
    this.speakAsync(text, directAudioBase64).catch(() => {});
  }

  _speakWebSpeechAsync(text) {
    return new Promise((resolve) => {
      if (!this.synth || !this.enabled) return resolve();

      this.stop();
      if (this.synth.paused) {
        try { this.synth.resume(); } catch (e) {}
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.volume = 1.0;

      window._activeCoachUtterance = utterance;

      let resolved = false;
      const done = () => {
        if (!resolved) {
          resolved = true;
          window._activeCoachUtterance = null;
          resolve();
        }
      };

      utterance.onend = done;
      utterance.onerror = done;
      setTimeout(done, Math.max(3000, (text.split(/\s+/).length * 500)));

      try {
        this.synth.speak(utterance);
      } catch (e) {
        done();
      }
    });
  }

  testVoice() {
    this.unlock();
    const persona = GEMINI_VOICES[this.selectedPersona] || GEMINI_VOICES['Aoede'];
    const prevEnabled = this.enabled;
    this.enabled = true;
    this.speakAsync(persona.sample).finally(() => {
      this.enabled = prevEnabled;
    });
  }
}

export const voiceCoach = new VoiceCoach();
if (typeof window !== 'undefined') {
  window.voiceCoach = voiceCoach;
}
