/**
 * GoEngine - Complete 19x19 Go (Baduk/Weiqi) Rules Engine
 * Features:
 * - Group detection and liberty calculation
 * - Multi-stone capture resolution
 * - Suicide move detection & Ko rule enforcement
 * - Stone influence & territory estimation
 * - Undo/Redo & move history
 */

export const EMPTY = 0;
export const BLACK = 1;
export const WHITE = 2;

export class GoEngine {
  constructor(size = 19) {
    this.size = size;
    this.reset();
  }

  reset() {
    this.board = Array(this.size).fill(null).map(() => Array(this.size).fill(EMPTY));
    this.turn = BLACK;
    this.history = []; // Array of { boardCopy, move: {x, y, color}, captures: [] }
    this.capturedStones = { [BLACK]: 0, [WHITE]: 0 }; // Captured BY this player
    this.lastMove = null;
    this.consecutivePasses = 0;
    this.koPoint = null; // Point that cannot be played due to ko
  }

  setSize(newSize) {
    if (this.size !== newSize) {
      this.size = newSize;
      this.reset();
    }
  }

  cloneBoard(board = this.board) {
    return board.map(row => [...row]);
  }

  inBounds(x, y) {
    return x >= 0 && x < this.size && y >= 0 && y < this.size;
  }

  getNeighbors(x, y) {
    const deltas = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const neighbors = [];
    for (const [dx, dy] of deltas) {
      const nx = x + dx;
      const ny = y + dy;
      if (this.inBounds(nx, ny)) {
        neighbors.push({ x: nx, y: ny });
      }
    }
    return neighbors;
  }

  /**
   * Finds connected group of stones of the same color starting at (x, y)
   * returns { stones: [{x, y}], liberties: Set of 'x,y', color }
   */
  getGroup(x, y, board = this.board) {
    const color = board[y][x];
    if (color === EMPTY) return null;

    const visited = new Set();
    const stones = [];
    const liberties = new Set();
    const queue = [{ x, y }];
    visited.add(`${x},${y}`);

    while (queue.length > 0) {
      const curr = queue.shift();
      stones.push(curr);

      for (const n of this.getNeighbors(curr.x, curr.y)) {
        const key = `${n.x},${n.y}`;
        const nColor = board[n.y][n.x];

        if (nColor === EMPTY) {
          liberties.add(key);
        } else if (nColor === color && !visited.has(key)) {
          visited.add(key);
          queue.push(n);
        }
      }
    }

    return { color, stones, liberties };
  }

  /**
   * Check if playing at (x, y) for color is valid
   * Returns { valid: boolean, reason?: string, capturedStones?: [] }
   */
  checkMove(x, y, color = this.turn) {
    if (!this.inBounds(x, y)) {
      return { valid: false, reason: 'Coordinates out of bounds' };
    }
    if (this.board[y][x] !== EMPTY) {
      return { valid: false, reason: 'Intersection already occupied' };
    }

    // Ko rule check
    if (this.koPoint && this.koPoint.x === x && this.koPoint.y === y) {
      return { valid: false, reason: 'Illegal move: Ko rule violation (repeating previous board state)' };
    }

    // Simulate move
    const opponent = color === BLACK ? WHITE : BLACK;
    const tempBoard = this.cloneBoard();
    tempBoard[y][x] = color;

    // Check if move captures any opponent groups
    const captured = [];
    const checkedGroups = new Set();

    for (const n of this.getNeighbors(x, y)) {
      if (tempBoard[n.y][n.x] === opponent) {
        const key = `${n.x},${n.y}`;
        if (!checkedGroups.has(key)) {
          const group = this.getGroup(n.x, n.y, tempBoard);
          for (const stone of group.stones) {
            checkedGroups.add(`${stone.x},${stone.y}`);
          }
          if (group.liberties.size === 0) {
            captured.push(...group.stones);
          }
        }
      }
    }

    // Remove captured stones on simulation board
    for (const stone of captured) {
      tempBoard[stone.y][stone.x] = EMPTY;
    }

    // Now check if our placed group has liberties
    const ourGroup = this.getGroup(x, y, tempBoard);
    if (ourGroup.liberties.size === 0 && captured.length === 0) {
      return { valid: false, reason: 'Illegal move: Suicide (group would have 0 liberties)' };
    }

    return { valid: true, capturedStones: captured };
  }

  /**
   * Play stone at (x, y)
   * Returns { success: boolean, captured: [], move: {x, y, color} }
   */
  play(x, y, color = this.turn) {
    const check = this.checkMove(x, y, color);
    if (!check.valid) {
      return { success: false, reason: check.reason };
    }

    const opponent = color === BLACK ? WHITE : BLACK;
    const captured = check.capturedStones;

    // Save history
    this.history.push({
      board: this.cloneBoard(),
      turn: this.turn,
      capturedStones: { ...this.capturedStones },
      lastMove: this.lastMove ? { ...this.lastMove } : null,
      koPoint: this.koPoint ? { ...this.koPoint } : null
    });

    // Place stone
    this.board[y][x] = color;

    // Remove captured stones
    for (const stone of captured) {
      this.board[stone.y][stone.x] = EMPTY;
    }

    // Update captured scores
    this.capturedStones[color] += captured.length;

    // Ko point calculation: single stone capture where placed stone has only 1 liberty
    if (captured.length === 1) {
      const group = this.getGroup(x, y);
      if (group && group.stones.length === 1 && group.liberties.size === 1) {
        this.koPoint = { x: captured[0].x, y: captured[0].y };
      } else {
        this.koPoint = null;
      }
    } else {
      this.koPoint = null;
    }

    this.lastMove = { x, y, color };
    this.turn = opponent;
    this.consecutivePasses = 0;

    return {
      success: true,
      captured,
      move: { x, y, color }
    };
  }

  pass() {
    this.history.push({
      board: this.cloneBoard(),
      turn: this.turn,
      capturedStones: { ...this.capturedStones },
      lastMove: this.lastMove ? { ...this.lastMove } : null,
      koPoint: this.koPoint ? { ...this.koPoint } : null
    });

    this.turn = this.turn === BLACK ? WHITE : BLACK;
    this.consecutivePasses++;
    this.koPoint = null;
    this.lastMove = { pass: true, color: this.turn === BLACK ? WHITE : BLACK };

    return {
      success: true,
      gameOver: this.consecutivePasses >= 2
    };
  }

  undo() {
    if (this.history.length === 0) return false;
    const prev = this.history.pop();
    this.board = prev.board;
    this.turn = prev.turn;
    this.capturedStones = prev.capturedStones;
    this.lastMove = prev.lastMove;
    this.koPoint = prev.koPoint;
    this.consecutivePasses = 0;
    return true;
  }

  /**
   * Find all groups on the board
   */
  getAllGroups() {
    const visited = new Set();
    const groups = [];

    for (let y = 0; y < this.size; y++) {
      for (let x = 0; x < this.size; x++) {
        const key = `${x},${y}`;
        if (this.board[y][x] !== EMPTY && !visited.has(key)) {
          const group = this.getGroup(x, y);
          for (const stone of group.stones) {
            visited.add(`${stone.x},${stone.y}`);
          }
          groups.push(group);
        }
      }
    }

    return groups;
  }

  /**
   * Compute Territory and Radiating Influence Heatmap
   * Returns a 2D array of values from -1.0 (strong white influence) to +1.0 (strong black influence)
   */
  calculateInfluenceMap() {
    const map = Array(this.size).fill(0).map(() => Array(this.size).fill(0));
    const DECAY = 0.55;
    const MAX_DIST = 6;

    for (let y = 0; y < this.size; y++) {
      for (let x = 0; x < this.size; x++) {
        const color = this.board[y][x];
        if (color === EMPTY) continue;

        const val = color === BLACK ? 1.0 : -1.0;

        // Radiate influence
        for (let dy = -MAX_DIST; dy <= MAX_DIST; dy++) {
          for (let dx = -MAX_DIST; dx <= MAX_DIST; dx++) {
            const tx = x + dx;
            const ty = y + dy;
            if (this.inBounds(tx, ty)) {
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist <= MAX_DIST) {
                const influence = val * Math.pow(DECAY, dist);
                map[ty][tx] += influence;
              }
            }
          }
        }
      }
    }

    // Normalize and clamp between -1 and 1
    for (let y = 0; y < this.size; y++) {
      for (let x = 0; x < this.size; x++) {
        map[y][x] = Math.tanh(map[y][x]);
      }
    }

    return map;
  }

  /**
   * Estimate territory and score
   */
  estimateTerritory() {
    const visited = new Set();
    let blackTerritory = 0;
    let whiteTerritory = 0;
    let blackStones = 0;
    let whiteStones = 0;

    for (let y = 0; y < this.size; y++) {
      for (let x = 0; x < this.size; x++) {
        if (this.board[y][x] === BLACK) blackStones++;
        else if (this.board[y][x] === WHITE) whiteStones++;
      }
    }

    for (let y = 0; y < this.size; y++) {
      for (let x = 0; x < this.size; x++) {
        const key = `${x},${y}`;
        if (this.board[y][x] === EMPTY && !visited.has(key)) {
          // Flood fill empty area
          const area = [];
          const queue = [{ x, y }];
          visited.add(key);
          const touchedColors = new Set();

          while (queue.length > 0) {
            const curr = queue.shift();
            area.push(curr);

            for (const n of this.getNeighbors(curr.x, curr.y)) {
              const nKey = `${n.x},${n.y}`;
              const nColor = this.board[n.y][n.x];
              if (nColor === EMPTY) {
                if (!visited.has(nKey)) {
                  visited.add(nKey);
                  queue.push(n);
                }
              } else {
                touchedColors.add(nColor);
              }
            }
          }

          if (touchedColors.size === 1) {
            if (touchedColors.has(BLACK)) blackTerritory += area.length;
            if (touchedColors.has(WHITE)) whiteTerritory += area.length;
          }
        }
      }
    }

    return {
      blackStones,
      whiteStones,
      blackTerritory,
      whiteTerritory,
      blackCaptures: this.capturedStones[BLACK],
      whiteCaptures: this.capturedStones[WHITE],
      komi: 7.5
    };
  }

  /**
   * Convert coordinates to Go notation: e.g. (3, 3) -> "D16", (15, 15) -> "Q4"
   */
  toGoCoord(x, y) {
    const letters = 'ABCDEFGHJKLMNOPQRST'; // 'I' is traditionally skipped in Go
    const col = letters[x];
    const row = this.size - y;
    return `${col}${row}`;
  }

  fromGoCoord(coord) {
    if (!coord || coord.length < 2) return null;
    const letters = 'ABCDEFGHJKLMNOPQRST';
    const colChar = coord[0].toUpperCase();
    const x = letters.indexOf(colChar);
    const rowNum = parseInt(coord.slice(1), 10);
    const y = this.size - rowNum;
    if (x === -1 || isNaN(y) || !this.inBounds(x, y)) return null;
    return { x, y };
  }
}
