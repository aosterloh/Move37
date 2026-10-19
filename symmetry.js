/**
 * symmetry.js - 8-Fold Dihedral Symmetry (D4) Engine for Go Boards
 * Computes canonical symmetry keys and maps coordinates bidirectionally
 * across 4 rotations and 4 reflections.
 */

const LETTERS = 'ABCDEFGHJKLMNOPQRST';

function toCoord(x, y, size = 9) {
  const col = LETTERS[x];
  const row = size - y;
  return `${col}${row}`;
}

function fromCoord(coord, size = 9) {
  if (!coord) return null;
  let clean = String(coord).trim();
  if (clean.includes(':')) {
    clean = clean.split(':').pop().trim();
  } else if (clean.includes(' ')) {
    clean = clean.split(' ').pop().trim();
  }
  if (clean.length < 2) return null;
  const colChar = clean[0].toUpperCase();
  const x = LETTERS.indexOf(colChar);
  const rowNum = parseInt(clean.slice(1), 10);
  const y = size - rowNum;
  if (x === -1 || isNaN(y) || x < 0 || x >= size || y < 0 || y >= size) return null;
  return { x, y };
}

// 8 Dihedral transformations (x, y) -> (tx, ty)
const TRANSFORMS = [
  (x, y, N) => ({ x, y }),                         // T0: Identity (0 deg)
  (x, y, N) => ({ x: N - 1 - y, y: x }),           // T1: Rotate 90 deg clockwise
  (x, y, N) => ({ x: N - 1 - x, y: N - 1 - y }),   // T2: Rotate 180 deg
  (x, y, N) => ({ x: y, y: N - 1 - x }),           // T3: Rotate 270 deg clockwise
  (x, y, N) => ({ x: N - 1 - x, y }),              // T4: Horizontal reflection (flip X)
  (x, y, N) => ({ x, y: N - 1 - y }),              // T5: Vertical reflection (flip Y)
  (x, y, N) => ({ x: y, y: x }),                   // T6: Main diagonal reflection (transpose)
  (x, y, N) => ({ x: N - 1 - y, y: N - 1 - x })    // T7: Anti-diagonal reflection
];

// Inverses of each transformation: T_inv[k](T[k](x, y)) == (x, y)
const INVERSE_INDICES = [0, 3, 2, 1, 4, 5, 6, 7];

function transformCoord(coord, transformIndex, size = 9) {
  const pt = fromCoord(coord, size);
  if (!pt) return coord;
  const fn = TRANSFORMS[transformIndex];
  const tPt = fn(pt.x, pt.y, size);
  return toCoord(tPt.x, tPt.y, size);
}

function inverseTransformCoord(coord, transformIndex, size = 9) {
  const invIdx = INVERSE_INDICES[transformIndex];
  return transformCoord(coord, invIdx, size);
}

/**
 * Generate canonical key for a sequence of moves on an NxN board.
 * Returns:
 * {
 *   canonicalKey: string (e.g. "9x9:E5,C3"),
 *   canonicalMoves: string[],
 *   transformIndex: number (0..7),
 *   inverseTransformIndex: number (0..7)
 * }
 */
function getCanonicalMoveSequence(moves = [], size = 9) {
  if (!moves || moves.length === 0) {
    return {
      canonicalKey: `${size}x${size}:START`,
      canonicalMoves: [],
      transformIndex: 0,
      inverseTransformIndex: 0
    };
  }

  let bestIndex = 0;
  let bestString = null;
  let bestMoves = [];

  for (let t = 0; t < 8; t++) {
    const tMoves = moves.map(m => transformCoord(m, t, size));
    const str = tMoves.join(',');
    if (bestString === null || str < bestString) {
      bestString = str;
      bestIndex = t;
      bestMoves = tMoves;
    }
  }

  return {
    canonicalKey: `${size}x${size}:${bestString}`,
    canonicalMoves: bestMoves,
    transformIndex: bestIndex,
    inverseTransformIndex: INVERSE_INDICES[bestIndex]
  };
}

module.exports = {
  toCoord,
  fromCoord,
  transformCoord,
  inverseTransformCoord,
  getCanonicalMoveSequence
};
