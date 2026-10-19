/**
 * board-renderer.js - Exquisite Canvas Renderer for 19x19 Go Board
 * Supports:
 * - 2D Classic Obsidian & Kaya wood grain rendering
 * - Perspective / 2.5D Tilt controls
 * - Radiating Influence / Territory Heatmap overlay
 * - Star points (hoshi), coordinate notations, and move number overlays
 * - Realistic slate & clamshell stones with physical lighting & shadows
 * - Hover stone preview & spotlight highlight indicators
 */

import { EMPTY, BLACK, WHITE } from './go-engine.js';

export class BoardRenderer {
  constructor(canvas, engine) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.engine = engine;

    // View toggles
    this.showCoordinates = true;
    this.showInfluenceHeatmap = false;
    this.showMoveNumbers = false;
    this.boardTheme = 'kaya'; // 'kaya' | 'obsidian' | 'cyberpunk'
    this.hoverCoord = null;
    this.spotlightCoord = null; // Highlight special moves like Move 37
    this.candidateSuggestions = []; // Top 3 AI Move Candidates (off-black stones 1, 2, 3)

    this.padding = 38;
    this.cellSize = 0;
    this.boardWidth = 0;
  }

  updateMetrics() {
    const width = this.canvas.width;
    if (width > 0 && this.engine && this.engine.size > 1) {
      this.padding = Math.max(24, Math.floor(width * 0.045));
      this.cellSize = (width - this.padding * 2) / (this.engine.size - 1);
      this.boardWidth = width;
    }
  }

  resize(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
    this.updateMetrics();
    this.render();
  }

  setCandidateSuggestions(suggestions = []) {
    this.candidateSuggestions = suggestions || [];
    this.render();
  }

  setHover(x, y) {
    if (!this.hoverCoord || this.hoverCoord.x !== x || this.hoverCoord.y !== y) {
      this.hoverCoord = (x !== null && y !== null) ? { x, y } : null;
      this.render();
    }
  }

  setSpotlight(coord) {
    this.spotlightCoord = coord;
    this.render();
  }

  toggleCoordinates() {
    this.showCoordinates = !this.showCoordinates;
    this.render();
    return this.showCoordinates;
  }

  toggleInfluenceHeatmap() {
    this.showInfluenceHeatmap = !this.showInfluenceHeatmap;
    this.render();
    return this.showInfluenceHeatmap;
  }

  toggleMoveNumbers() {
    this.showMoveNumbers = !this.showMoveNumbers;
    this.render();
    return this.showMoveNumbers;
  }

  setTheme(theme) {
    this.boardTheme = theme;
    this.render();
  }

  // Convert board intersection (x, y) to pixel coordinates
  toPixel(x, y) {
    if (!this.cellSize) this.updateMetrics();
    return {
      px: this.padding + x * this.cellSize,
      py: this.padding + y * this.cellSize
    };
  }

  // Convert canvas pixel (px, py) to nearest board intersection (x, y)
  toBoardCoord(px, py) {
    if (!this.cellSize) this.updateMetrics();
    if (!this.cellSize) return null;
    const x = Math.round((px - this.padding) / this.cellSize);
    const y = Math.round((py - this.padding) / this.cellSize);
    if (this.engine.inBounds(x, y)) {
      // Check if click was within reasonable radius
      const target = this.toPixel(x, y);
      const dist = Math.hypot(px - target.px, py - target.py);
      if (dist <= this.cellSize * 0.65) {
        return { x, y };
      }
    }
    return null;
  }

  render() {
    const { width, height } = this.canvas;
    if (!width || !height) return;

    // Guarantee that cell size and padding strictly match current board size & canvas dimensions
    this.updateMetrics();

    this.ctx.clearRect(0, 0, width, height);

    // 1. Draw Board Background
    this.drawBoardSurface(width, height);

    // 2. Draw Influence / Territory Heatmap (if enabled)
    if (this.showInfluenceHeatmap) {
      this.drawInfluenceHeatmap();
    }

    // 3. Draw Grid Lines and Star Points
    this.drawGrid();

    // 4. Draw Coordinates
    if (this.showCoordinates) {
      this.drawCoordinates();
    }

    // 5. Draw Placed Stones
    this.drawStones();

    // 6. Draw AI Candidate Suggestions (Off-Black Stones 1, 2, 3)
    this.drawCandidateSuggestions();

    // 7. Draw Spotlight Marker (e.g. Move 37)
    if (this.spotlightCoord) {
      this.drawSpotlight();
    }

    // 8. Draw Last Move Marker
    this.drawLastMoveMarker();

    // 9. Draw Hover Preview Stone
    this.drawHoverPreview();
  }

  drawBoardSurface(w, h) {
    this.ctx.save();

    // Outer subtle border and ambient glow
    if (this.boardTheme === 'obsidian') {
      const grad = this.ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#13161c');
      grad.addColorStop(0.5, '#0c0e12');
      grad.addColorStop(1, '#08090c');
      this.ctx.fillStyle = grad;
      this.ctx.fillRect(0, 0, w, h);

      // Fine carbon/slate weave line effect
      this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
      this.ctx.lineWidth = 1;
      for (let i = 0; i < w; i += 6) {
        this.ctx.beginPath();
        this.ctx.moveTo(i, 0);
        this.ctx.lineTo(i, h);
        this.ctx.stroke();
      }

      // Border bevel
      this.ctx.strokeStyle = 'rgba(212, 175, 55, 0.25)'; // Champagne gold edge
      this.ctx.lineWidth = 2;
      this.ctx.strokeRect(1, 1, w - 2, h - 2);

    } else if (this.boardTheme === 'cyberpunk') {
      this.ctx.fillStyle = '#05070f';
      this.ctx.fillRect(0, 0, w, h);

      // Neon grid ambient wash
      const radGrad = this.ctx.createRadialGradient(w / 2, h / 2, 40, w / 2, h / 2, w / 1.5);
      radGrad.addColorStop(0, 'rgba(56, 189, 248, 0.08)');
      radGrad.addColorStop(0.7, 'rgba(129, 140, 248, 0.04)');
      radGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      this.ctx.fillStyle = radGrad;
      this.ctx.fillRect(0, 0, w, h);

      this.ctx.strokeStyle = '#38bdf8';
      this.ctx.lineWidth = 1.5;
      this.ctx.strokeRect(2, 2, w - 4, h - 4);

    } else {
      // Luxury Kaya Wood grain
      const grad = this.ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#d9a766');
      grad.addColorStop(0.5, '#cf9957');
      grad.addColorStop(1, '#c08a47');
      this.ctx.fillStyle = grad;
      this.ctx.fillRect(0, 0, w, h);

      this.ctx.strokeStyle = 'rgba(90, 50, 15, 0.4)';
      this.ctx.lineWidth = 2;
      this.ctx.strokeRect(1, 1, w - 2, h - 2);
    }

    this.ctx.restore();
  }

  drawGrid() {
    this.ctx.save();
    const size = this.engine.size;
    const isObsidian = this.boardTheme === 'obsidian';
    const isCyber = this.boardTheme === 'cyberpunk';

    let gridColor = 'rgba(255, 255, 255, 0.22)';
    let starColor = '#d4af37'; // Gold star points

    if (isCyber) {
      gridColor = 'rgba(56, 189, 248, 0.35)';
      starColor = '#38bdf8';
    } else if (this.boardTheme === 'kaya') {
      gridColor = 'rgba(40, 20, 10, 0.75)';
      starColor = '#2b1509';
    }

    this.ctx.strokeStyle = gridColor;
    this.ctx.lineWidth = isCyber ? 1.2 : 1.0;

    // Draw horizontal & vertical lines
    for (let i = 0; i < size; i++) {
      const p1 = this.toPixel(i, 0);
      const p2 = this.toPixel(i, size - 1);
      this.ctx.beginPath();
      this.ctx.moveTo(p1.px, p1.py);
      this.ctx.lineTo(p2.px, p2.py);
      this.ctx.stroke();

      const p3 = this.toPixel(0, i);
      const p4 = this.toPixel(size - 1, i);
      this.ctx.beginPath();
      this.ctx.moveTo(p3.px, p3.py);
      this.ctx.lineTo(p4.px, p4.py);
      this.ctx.stroke();
    }

    // Draw Star Points (Hoshi) accurately for 9x9, 13x13, and 19x19
    let starPoints = [];
    if (size === 19) {
      for (const sx of [3, 9, 15]) {
        for (const sy of [3, 9, 15]) {
          starPoints.push({ x: sx, y: sy });
        }
      }
    } else if (size === 13) {
      starPoints = [
        { x: 3, y: 3 }, { x: 9, y: 3 },
        { x: 6, y: 6 }, // Tengen
        { x: 3, y: 9 }, { x: 9, y: 9 }
      ];
    } else if (size === 9) {
      starPoints = [
        { x: 2, y: 2 }, { x: 6, y: 2 },
        { x: 4, y: 4 }, // Tengen
        { x: 2, y: 6 }, { x: 6, y: 6 }
      ];
    }

    this.ctx.fillStyle = starColor;
    for (const pt of starPoints) {
      const { px, py } = this.toPixel(pt.x, pt.y);
      this.ctx.beginPath();
      this.ctx.arc(px, py, Math.max(2.5, this.cellSize * 0.09), 0, Math.PI * 2);
      this.ctx.fill();

      if (isObsidian || isCyber) {
        this.ctx.shadowBlur = 6;
        this.ctx.shadowColor = starColor;
        this.ctx.fill();
        this.ctx.shadowBlur = 0;
      }
    }

    this.ctx.restore();
  }

  drawCoordinates() {
    this.ctx.save();
    const size = this.engine.size;
    const letters = 'ABCDEFGHJKLMNOPQRST'; // standard 19-letter notation
    const isObsidian = this.boardTheme === 'obsidian';
    const isCyber = this.boardTheme === 'cyberpunk';

    this.ctx.font = `600 ${Math.max(9, Math.floor(this.padding * 0.34))}px 'Inter', sans-serif`;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillStyle = isCyber ? '#38bdf8' : (isObsidian ? 'rgba(212, 175, 55, 0.75)' : 'rgba(50, 25, 10, 0.8)');

    const offset = Math.floor(this.padding * 0.52);

    for (let i = 0; i < size; i++) {
      const { px, py } = this.toPixel(i, i);
      const colText = letters[i];
      const rowText = `${size - i}`;

      // Column headers (Top & Bottom)
      this.ctx.fillText(colText, px, offset);
      this.ctx.fillText(colText, px, this.canvas.height - offset);

      // Row headers (Left & Right)
      this.ctx.fillText(rowText, offset, py);
      this.ctx.fillText(rowText, this.canvas.width - offset, py);
    }

    this.ctx.restore();
  }

  drawInfluenceHeatmap() {
    this.ctx.save();
    const map = this.engine.calculateInfluenceMap();
    const r = this.cellSize * 0.75;

    for (let y = 0; y < this.engine.size; y++) {
      for (let x = 0; x < this.engine.size; x++) {
        const val = map[y][x]; // -1.0 to 1.0
        if (Math.abs(val) < 0.05) continue;

        const { px, py } = this.toPixel(x, y);
        this.ctx.beginPath();
        this.ctx.arc(px, py, r, 0, Math.PI * 2);

        if (val > 0) {
          // Black territory / influence (Cyan / Deep Blue)
          this.ctx.fillStyle = `rgba(56, 189, 248, ${Math.min(0.55, val * 0.5)})`;
        } else {
          // White territory / influence (Amber / Gold)
          this.ctx.fillStyle = `rgba(245, 158, 11, ${Math.min(0.55, Math.abs(val) * 0.5)})`;
        }
        this.ctx.fill();
      }
    }
    this.ctx.restore();
  }

  drawStones() {
    const size = this.engine.size;
    const r = this.cellSize * 0.46; // Standard Go stone fills ~92% of cell

    // Build move number index if numbers are toggled
    const moveNumbers = new Map();
    if (this.showMoveNumbers) {
      let num = 1;
      for (const h of this.engine.history) {
        if (h.lastMove && !h.lastMove.pass) {
          moveNumbers.set(`${h.lastMove.x},${h.lastMove.y}`, num++);
        }
      }
      if (this.engine.lastMove && !this.engine.lastMove.pass) {
        moveNumbers.set(`${this.engine.lastMove.x},${this.engine.lastMove.y}`, num);
      }
    }

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const color = this.engine.board[y][x];
        if (color === EMPTY) continue;

        const { px, py } = this.toPixel(x, y);
        this.drawSingleStone(px, py, color, r);

        // Move number badge
        if (this.showMoveNumbers && moveNumbers.has(`${x},${y}`)) {
          const num = moveNumbers.get(`${x},${y}`);
          this.ctx.save();
          this.ctx.fillStyle = color === BLACK ? '#f8fafc' : '#0f172a';
          this.ctx.font = `bold ${Math.max(8, Math.floor(r * 0.75))}px 'Inter', sans-serif`;
          this.ctx.textAlign = 'center';
          this.ctx.textBaseline = 'middle';
          this.ctx.fillText(num, px, py + 0.5);
          this.ctx.restore();
        }
      }
    }
  }

  drawSingleStone(px, py, color, r, alpha = 1.0) {
    this.ctx.save();
    this.ctx.globalAlpha = alpha;

    // 1. Cast shadow
    this.ctx.beginPath();
    this.ctx.arc(px + r * 0.14, py + r * 0.2, r * 0.98, 0, Math.PI * 2);
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
    this.ctx.fill();

    // 2. Stone Body with Realistic Lighting & Reflection
    this.ctx.beginPath();
    this.ctx.arc(px, py, r, 0, Math.PI * 2);

    if (color === BLACK) {
      // Deep Slate stone: Subtle radial gradient with rim light and top-left specular reflection
      const grad = this.ctx.createRadialGradient(
        px - r * 0.32, py - r * 0.32, r * 0.08,
        px, py, r
      );
      grad.addColorStop(0, '#475569');
      grad.addColorStop(0.25, '#1e293b');
      grad.addColorStop(0.75, '#0f172a');
      grad.addColorStop(1, '#020617');

      this.ctx.fillStyle = grad;
      this.ctx.fill();

      // Delicate gloss highlight
      this.ctx.beginPath();
      this.ctx.arc(px - r * 0.28, py - r * 0.28, r * 0.26, 0, Math.PI * 2);
      this.ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
      this.ctx.fill();

    } else {
      // Clamshell White stone: Pearlescent, luminous gradient
      const grad = this.ctx.createRadialGradient(
        px - r * 0.3, py - r * 0.3, r * 0.05,
        px, py, r
      );
      grad.addColorStop(0, '#ffffff');
      grad.addColorStop(0.5, '#f8fafc');
      grad.addColorStop(0.85, '#e2e8f0');
      grad.addColorStop(1, '#cbd5e1');

      this.ctx.fillStyle = grad;
      this.ctx.fill();

      // Subtle specular shine
      this.ctx.beginPath();
      this.ctx.arc(px - r * 0.32, py - r * 0.32, r * 0.24, 0, Math.PI * 2);
      this.ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
      this.ctx.fill();
    }

    this.ctx.restore();
  }

  drawLastMoveMarker() {
    const last = this.engine.lastMove;
    if (!last || last.pass || !this.engine.inBounds(last.x, last.y)) return;

    const { px, py } = this.toPixel(last.x, last.y);
    const r = this.cellSize * 0.46;
    const isBlack = last.color === BLACK;

    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(px, py, r * 0.38, 0, Math.PI * 2);
    this.ctx.strokeStyle = isBlack ? '#38bdf8' : '#e11d48';
    this.ctx.lineWidth = 2.5;
    this.ctx.shadowBlur = 8;
    this.ctx.shadowColor = isBlack ? '#38bdf8' : '#e11d48';
    this.ctx.stroke();
    this.ctx.restore();
  }

  drawSpotlight() {
    if (!this.spotlightCoord) return;
    const { x, y } = this.spotlightCoord;
    const { px, py } = this.toPixel(x, y);
    const r = this.cellSize * 0.72;

    this.ctx.save();
    // Pulsing gold beacon ring
    this.ctx.beginPath();
    this.ctx.arc(px, py, r, 0, Math.PI * 2);
    this.ctx.strokeStyle = '#f59e0b';
    this.ctx.lineWidth = 3.5;
    this.ctx.shadowBlur = 16;
    this.ctx.shadowColor = '#fbbf24';
    this.ctx.stroke();

    // Crosshair ticks
    const tickLen = 6;
    this.ctx.beginPath();
    this.ctx.moveTo(px - r - tickLen, py);
    this.ctx.lineTo(px - r + tickLen, py);
    this.ctx.moveTo(px + r - tickLen, py);
    this.ctx.lineTo(px + r + tickLen, py);
    this.ctx.moveTo(px, py - r - tickLen);
    this.ctx.lineTo(px, py - r + tickLen);
    this.ctx.moveTo(px, py + r - tickLen);
    this.ctx.lineTo(px, py + r + tickLen);
    this.ctx.stroke();
    this.ctx.restore();
  }

  drawCandidateSuggestions() {
    if (!this.candidateSuggestions || this.candidateSuggestions.length === 0) return;

    const r = this.cellSize * 0.46;
    const rankColors = {
      1: { border: '#f59e0b', glow: 'rgba(245, 158, 11, 0.4)', badgeBg: '#d97706', ring: '#fbbf24' }, // Gold
      2: { border: '#38bdf8', glow: 'rgba(56, 189, 248, 0.4)', badgeBg: '#0284c7', ring: '#7dd3fc' }, // Cyan
      3: { border: '#a855f7', glow: 'rgba(168, 85, 247, 0.4)', badgeBg: '#7e22ce', ring: '#c084fc' }  // Violet
    };

    for (const cand of this.candidateSuggestions) {
      if (cand.x === undefined || cand.y === undefined) continue;
      if (!this.engine.inBounds(cand.x, cand.y)) continue;
      // Do not draw over existing placed stones
      if (this.engine.board[cand.y][cand.x] !== EMPTY) continue;

      const { px, py } = this.toPixel(cand.x, cand.y);
      const conf = rankColors[cand.rank] || rankColors[1];

      this.ctx.save();

      // 1. Soft atmospheric colored halo
      this.ctx.beginPath();
      this.ctx.arc(px, py, r * 1.08, 0, Math.PI * 2);
      this.ctx.fillStyle = conf.glow;
      this.ctx.shadowColor = conf.border;
      this.ctx.shadowBlur = 10;
      this.ctx.fill();

      // 2. Off-black translucent smoky obsidian stone body
      this.ctx.beginPath();
      this.ctx.arc(px, py, r, 0, Math.PI * 2);
      const grad = this.ctx.createRadialGradient(
        px - r * 0.3, py - r * 0.3, r * 0.1,
        px, py, r
      );
      grad.addColorStop(0, 'rgba(71, 85, 105, 0.90)');   // slate-600 highlight
      grad.addColorStop(0.35, 'rgba(30, 41, 59, 0.86)'); // slate-800
      grad.addColorStop(1, 'rgba(15, 23, 42, 0.92)');    // slate-900 edge
      this.ctx.fillStyle = grad;
      this.ctx.fill();

      // 3. Colored accent ring with dashed subtle style
      this.ctx.beginPath();
      this.ctx.arc(px, py, r * 0.92, 0, Math.PI * 2);
      this.ctx.strokeStyle = conf.ring;
      this.ctx.lineWidth = 1.8;
      this.ctx.stroke();

      // 4. Central circular badge with number (1, 2, or 3)
      const badgeR = Math.max(8, Math.floor(r * 0.46));
      this.ctx.beginPath();
      this.ctx.arc(px, py, badgeR, 0, Math.PI * 2);
      this.ctx.fillStyle = conf.badgeBg;
      this.ctx.fill();

      this.ctx.strokeStyle = '#ffffff';
      this.ctx.lineWidth = 1.2;
      this.ctx.stroke();

      // 5. Crisp white numeral
      this.ctx.fillStyle = '#ffffff';
      this.ctx.font = `bold ${Math.max(10, Math.floor(badgeR * 1.25))}px 'Inter', sans-serif`;
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.shadowBlur = 0;
      this.ctx.fillText(cand.rank, px, py + 0.5);

      this.ctx.restore();
    }
  }

  drawHoverPreview() {
    if (!this.hoverCoord) return;
    const { x, y } = this.hoverCoord;
    if (this.engine.board[y][x] !== EMPTY) return;

    const { px, py } = this.toPixel(x, y);
    const r = this.cellSize * 0.46;
    const currentColor = this.engine.turn;

    // Check validity
    const check = this.engine.checkMove(x, y, currentColor);
    if (!check.valid) {
      // Draw red forbidden X
      this.ctx.save();
      this.ctx.strokeStyle = '#ef4444';
      this.ctx.lineWidth = 2.5;
      const xLen = r * 0.45;
      this.ctx.beginPath();
      this.ctx.moveTo(px - xLen, py - xLen);
      this.ctx.lineTo(px + xLen, py + xLen);
      this.ctx.moveTo(px + xLen, py - xLen);
      this.ctx.lineTo(px - xLen, py + xLen);
      this.ctx.stroke();
      this.ctx.restore();
      return;
    }

    // Ghost preview stone
    this.drawSingleStone(px, py, currentColor, r, 0.45);
  }
}
