export type Player = 'light' | 'dark';

export interface Piece {
  id: string;
  player: Player;
  isKing: boolean;
}

export interface Position {
  row: number;
  col: number;
}

export interface Move {
  from: Position;
  to: Position;
  captures?: Position[];
}

export const ROWS = 10;
export const COLS = 8;

export function isDarkSquare(row: number, col: number): boolean {
  return (row + col) % 2 === 1;
}

export function getInitialPieces(): Map<string, Piece> {
  const pieces = new Map<string, Piece>();

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < COLS; col++) {
      if (isDarkSquare(row, col)) {
        const id = `light-${row}-${col}`;
        pieces.set(`${row}-${col}`, { id, player: 'light', isKing: false });
      }
    }
  }

  for (let row = 7; row < 10; row++) {
    for (let col = 0; col < COLS; col++) {
      if (isDarkSquare(row, col)) {
        const id = `dark-${row}-${col}`;
        pieces.set(`${row}-${col}`, { id, player: 'dark', isKing: false });
      }
    }
  }

  return pieces;
}

export function getValidMoves(
  piece: Piece,
  position: Position,
  pieces: Map<string, Piece>
): Move[] {
  const moves: Move[] = [];
  const directions = piece.isKing
    ? [[-1, -1], [-1, 1], [1, -1], [1, 1]]
    : piece.player === 'light'
      ? [[1, -1], [1, 1]]
      : [[-1, -1], [-1, 1]];

  for (const [dRow, dCol] of directions) {
    const newRow = position.row + dRow;
    const newCol = position.col + dCol;

    if (newRow >= 0 && newRow < ROWS && newCol >= 0 && newCol < COLS) {
      const targetKey = `${newRow}-${newCol}`;
      const targetPiece = pieces.get(targetKey);

      if (!targetPiece) {
        moves.push({
          from: position,
          to: { row: newRow, col: newCol },
        });
      } else if (targetPiece.player !== piece.player) {
        const captureRow = newRow + dRow;
        const captureCol = newCol + dCol;

        if (
          captureRow >= 0 &&
          captureRow < ROWS &&
          captureCol >= 0 &&
          captureCol < COLS &&
          !pieces.get(`${captureRow}-${captureCol}`)
        ) {
          moves.push({
            from: position,
            to: { row: captureRow, col: captureCol },
            captures: [{ row: newRow, col: newCol }],
          });
        }
      }
    }
  }

  return moves;
}

export function applyMove(
  pieces: Map<string, Piece>,
  move: Move
): Map<string, Piece> {
  const newPieces = new Map(pieces);

  const piece = newPieces.get(`${move.from.row}-${move.from.col}`);
  if (!piece) return pieces;

  newPieces.delete(`${move.from.row}-${move.from.col}`);

  if (move.captures) {
    for (const capture of move.captures) {
      newPieces.delete(`${capture.row}-${capture.col}`);
    }
  }

  const isKing =
    (piece.player === 'light' && move.to.row === ROWS - 1) ||
    (piece.player === 'dark' && move.to.row === 0);

  newPieces.set(`${move.to.row}-${move.to.col}`, {
    ...piece,
    isKing: piece.isKing || isKing,
  });

  return newPieces;
}

export function hasValidMoves(
  player: Player,
  pieces: Map<string, Piece>
): boolean {
  for (const [key, piece] of pieces) {
    if (piece.player === player) {
      const [row, col] = key.split('-').map(Number);
      const moves = getValidMoves(piece, { row, col }, pieces);
      if (moves.length > 0) return true;
    }
  }
  return false;
}

export function checkWinner(
  pieces: Map<string, Piece>
): Player | 'draw' | null {
  const lightPieces = Array.from(pieces.values()).filter(
    (p) => p.player === 'light'
  );
  const darkPieces = Array.from(pieces.values()).filter(
    (p) => p.player === 'dark'
  );

  if (lightPieces.length === 0) return 'dark';
  if (darkPieces.length === 0) return 'light';

  if (!hasValidMoves('light', pieces)) return 'dark';
  if (!hasValidMoves('dark', pieces)) return 'light';

  return null;
}

export function countCaptures(
  pieces: Map<string, Piece>
): { light: number; dark: number } {
  const lightStart = 12;
  const darkStart = 12;

  const lightCurrent = Array.from(pieces.values()).filter(
    (p) => p.player === 'light'
  ).length;
  const darkCurrent = Array.from(pieces.values()).filter(
    (p) => p.player === 'dark'
  ).length;

  return {
    light: lightStart - lightCurrent,
    dark: darkStart - darkCurrent,
  };
}