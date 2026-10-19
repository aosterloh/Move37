/**
 * audio.js - Zero-dependency Web Audio API procedural sound synthesizer
 * Produces crisp physical stone placement clicks and dramatic capture sound effects
 */

class SoundSynthesizer {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.volume = 0.6;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setMuted(muted) {
    this.muted = muted;
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
  }

  /**
   * Realistic stone placement click:
   * Combines high-frequency stone contact click (slate/shell) with warm wooden board resonance
   */
  playStonePlacement(isBlack = true) {
    if (this.muted) return;
    this.init();

    const t = this.ctx.currentTime;
    const masterGain = this.ctx.createGain();
    masterGain.gain.setValueAtTime(this.volume, t);
    masterGain.connect(this.ctx.destination);

    // 1. High frequency ceramic / slate snap
    const snapOsc = this.ctx.createOscillator();
    const snapGain = this.ctx.createGain();
    const pitchJitter = 0.95 + Math.random() * 0.1;
    snapOsc.type = 'triangle';
    snapOsc.frequency.setValueAtTime(isBlack ? 950 * pitchJitter : 1100 * pitchJitter, t);
    snapOsc.frequency.exponentialRampToValueAtTime(200, t + 0.04);

    snapGain.gain.setValueAtTime(0.7, t);
    snapGain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);

    snapOsc.connect(snapGain);
    snapGain.connect(masterGain);

    snapOsc.start(t);
    snapOsc.stop(t + 0.06);

    // 2. Warm wooden board body resonance
    const thudOsc = this.ctx.createOscillator();
    const thudGain = this.ctx.createGain();
    thudOsc.type = 'sine';
    thudOsc.frequency.setValueAtTime(140 * pitchJitter, t);
    thudOsc.frequency.exponentialRampToValueAtTime(45, t + 0.12);

    thudGain.gain.setValueAtTime(0.5, t);
    thudGain.gain.exponentialRampToValueAtTime(0.001, t + 0.14);

    thudOsc.connect(thudGain);
    thudGain.connect(masterGain);

    thudOsc.start(t);
    thudOsc.stop(t + 0.15);

    // 3. Subtle noise click
    const bufferSize = this.ctx.sampleRate * 0.02; // 20ms noise
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.2));
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'highpass';
    noiseFilter.frequency.value = 1800;

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.3, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.03);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(masterGain);

    noise.start(t);
  }

  /**
   * Capture VFX Audio: Dissolve / Stardust
   * Ethereal shimmering ascending harp / chime
   */
  playDissolve() {
    if (this.muted) return;
    this.init();

    const t = this.ctx.currentTime;
    const masterGain = this.ctx.createGain();
    masterGain.gain.setValueAtTime(this.volume * 0.7, t);
    masterGain.connect(this.ctx.destination);

    const freqs = [523.25, 659.25, 783.99, 1046.5, 1318.5]; // C E G C E
    freqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const delay = idx * 0.04;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t + delay);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, t + delay + 0.35);

      gain.gain.setValueAtTime(0, t + delay);
      gain.gain.linearRampToValueAtTime(0.25, t + delay + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, t + delay + 0.45);

      osc.connect(gain);
      gain.connect(masterGain);

      osc.start(t + delay);
      osc.stop(t + delay + 0.5);
    });
  }

  /**
   * Capture VFX Audio: Supernova Explosion
   * Sub-bass kick & bursting noise shockwave
   */
  playExplosion() {
    if (this.muted) return;
    this.init();

    const t = this.ctx.currentTime;
    const masterGain = this.ctx.createGain();
    masterGain.gain.setValueAtTime(this.volume * 0.9, t);
    masterGain.connect(this.ctx.destination);

    // Deep sub-bass boom
    const subOsc = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(160, t);
    subOsc.frequency.exponentialRampToValueAtTime(25, t + 0.45);

    subGain.gain.setValueAtTime(0.8, t);
    subGain.gain.exponentialRampToValueAtTime(0.001, t + 0.5);

    subOsc.connect(subGain);
    subGain.connect(masterGain);
    subOsc.start(t);
    subOsc.stop(t + 0.55);

    // White noise explosion burst
    const dur = 0.4;
    const bufferSize = Math.floor(this.ctx.sampleRate * dur);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1200, t);
    filter.frequency.exponentialRampToValueAtTime(100, t + dur);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.6, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + dur);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(masterGain);

    noise.start(t);
  }

  /**
   * Capture VFX Audio: Inferno / Burst of Flames
   * Roaring whoosh with fiery sizzle
   */
  playFlames() {
    if (this.muted) return;
    this.init();

    const t = this.ctx.currentTime;
    const masterGain = this.ctx.createGain();
    masterGain.gain.setValueAtTime(this.volume * 0.8, t);
    masterGain.connect(this.ctx.destination);

    const dur = 0.55;
    const bufferSize = Math.floor(this.ctx.sampleRate * dur);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    // Bandpass sweeping up like rising flame
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.Q.value = 3.5;
    filter.frequency.setValueAtTime(300, t);
    filter.frequency.linearRampToValueAtTime(1400, t + 0.25);
    filter.frequency.exponentialRampToValueAtTime(400, t + dur);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.1, t);
    noiseGain.gain.linearRampToValueAtTime(0.65, t + 0.15);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + dur);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(masterGain);

    noise.start(t);
  }

  playCapture(style = 'random') {
    if (style === 'random') {
      const styles = ['dissolve', 'explode', 'flames'];
      style = styles[Math.floor(Math.random() * styles.length)];
    }
    switch (style) {
      case 'explode':
        this.playExplosion();
        break;
      case 'flames':
        this.playFlames();
        break;
      case 'dissolve':
      default:
        this.playDissolve();
        break;
    }
    return style;
  }
}

export const sound = new SoundSynthesizer();
