/**
 * particles.js - High-performance Canvas Particle VFX Engine
 * Handles 3 distinct capture animation styles:
 * 1. 'dissolve' - Glowing ethereal stardust dissolving into thin air
 * 2. 'explode' - High-velocity supernova shockwave and shattering debris
 * 3. 'flames' - Fierce inferno flames leaping upward with glowing embers
 */

export class ParticleEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.shockwaves = [];
    this.animId = null;
    this.style = 'random'; // 'random' | 'dissolve' | 'explode' | 'flames'
  }

  resize(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
  }

  setStyle(style) {
    this.style = style;
  }

  /**
   * Spawns particle burst for captured stones
   * @param {Array<{px: number, py: number, color: number}>} stones - Pixel centers and stone colors
   * @param {string} overrideStyle - Optional style override
   */
  spawnCaptureVFX(stones, overrideStyle = null) {
    let style = overrideStyle || this.style;
    if (style === 'random') {
      const styles = ['dissolve', 'explode', 'flames'];
      style = styles[Math.floor(Math.random() * styles.length)];
    }

    for (const stone of stones) {
      const { px, py, color } = stone;
      const isBlack = color === 1;

      if (style === 'dissolve') {
        this.spawnDissolve(px, py, isBlack);
      } else if (style === 'explode') {
        this.spawnExplosion(px, py, isBlack);
      } else if (style === 'flames') {
        this.spawnFlames(px, py, isBlack);
      }
    }

    if (!this.animId) {
      this.loop();
    }
  }

  spawnDissolve(px, py, isBlack) {
    const count = 45;
    const baseHue = isBlack ? 210 : 45; // Cool cyan/slate vs warm gold/white

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.5 + Math.random() * 2.5;
      const radius = 2 + Math.random() * 4;

      this.particles.push({
        x: px + (Math.random() - 0.5) * 16,
        y: py + (Math.random() - 0.5) * 16,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.2, // Float upward
        life: 1.0,
        decay: 0.012 + Math.random() * 0.015,
        radius,
        color: `hsla(${baseHue + (Math.random() * 40 - 20)}, 95%, ${isBlack ? '75%' : '85%'}`,
        type: 'dust',
        wobble: Math.random() * Math.PI * 2
      });
    }
  }

  spawnExplosion(px, py, isBlack) {
    const count = 65;

    // Shockwave ring
    this.shockwaves.push({
      x: px,
      y: py,
      radius: 5,
      maxRadius: 55,
      alpha: 0.9,
      decay: 0.04,
      color: isBlack ? '#38bdf8' : '#fbbf24'
    });

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2.0 + Math.random() * 6.5;
      const radius = 2 + Math.random() * 5;

      this.particles.push({
        x: px,
        y: py,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1.0,
        decay: 0.02 + Math.random() * 0.025,
        radius,
        drag: 0.94,
        gravity: 0.12,
        color: isBlack
          ? (Math.random() > 0.4 ? '#38bdf8' : '#818cf8')
          : (Math.random() > 0.4 ? '#f59e0b' : '#ef4444'),
        type: 'spark'
      });
    }
  }

  spawnFlames(px, py, isBlack) {
    const count = 55;

    for (let i = 0; i < count; i++) {
      const speed = 1.0 + Math.random() * 3.5;
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.1; // Upward plume

      this.particles.push({
        x: px + (Math.random() - 0.5) * 18,
        y: py + (Math.random() - 0.5) * 10,
        vx: Math.cos(angle) * speed * 0.6,
        vy: Math.sin(angle) * speed - 1.5,
        life: 1.0,
        decay: 0.018 + Math.random() * 0.02,
        radius: 3 + Math.random() * 7,
        type: 'flame',
        palette: isBlack ? 'bluefire' : 'solarfire'
      });
    }
  }

  loop() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Render & update shockwaves
    for (let i = this.shockwaves.length - 1; i >= 0; i--) {
      const sw = this.shockwaves[i];
      sw.radius += (sw.maxRadius - sw.radius) * 0.2;
      sw.alpha -= sw.decay;

      if (sw.alpha <= 0) {
        this.shockwaves.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
      this.ctx.strokeStyle = sw.color;
      this.ctx.globalAlpha = Math.max(0, sw.alpha);
      this.ctx.lineWidth = 3;
      this.ctx.stroke();
      this.ctx.restore();
    }

    // Render & update particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];

      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;

      if (p.drag) {
        p.vx *= p.drag;
        p.vy *= p.drag;
      }
      if (p.gravity) {
        p.vy += p.gravity;
      }
      if (p.wobble !== undefined) {
        p.wobble += 0.15;
        p.x += Math.sin(p.wobble) * 0.6;
      }

      if (p.life <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();

      if (p.type === 'flame') {
        const rad = Math.max(0.5, p.radius * p.life);
        const grad = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, rad);
        if (p.palette === 'solarfire') {
          grad.addColorStop(0, `rgba(255, 255, 200, ${p.life})`);
          grad.addColorStop(0.3, `rgba(255, 140, 0, ${p.life * 0.9})`);
          grad.addColorStop(0.8, `rgba(230, 40, 20, ${p.life * 0.6})`);
          grad.addColorStop(1, `rgba(50, 0, 0, 0)`);
        } else {
          grad.addColorStop(0, `rgba(230, 250, 255, ${p.life})`);
          grad.addColorStop(0.3, `rgba(56, 189, 248, ${p.life * 0.9})`);
          grad.addColorStop(0.8, `rgba(79, 70, 229, ${p.life * 0.6})`);
          grad.addColorStop(1, `rgba(15, 23, 42, 0)`);
        }
        this.ctx.fillStyle = grad;
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, rad, 0, Math.PI * 2);
        this.ctx.fill();
      } else {
        this.ctx.globalAlpha = Math.max(0, p.life);
        this.ctx.fillStyle = p.color.includes('hsla') ? `${p.color}, ${p.life})` : p.color;
        this.ctx.shadowBlur = 10;
        this.ctx.shadowColor = p.color;
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, Math.max(0.5, p.radius * (p.type === 'dust' ? p.life : 1)), 0, Math.PI * 2);
        this.ctx.fill();
      }

      this.ctx.restore();
    }

    if (this.particles.length > 0 || this.shockwaves.length > 0) {
      this.animId = requestAnimationFrame(() => this.loop());
    } else {
      this.animId = null;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  clear() {
    this.particles = [];
    this.shockwaves = [];
    if (this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
