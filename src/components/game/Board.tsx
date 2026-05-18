import { Square } from './Square';
import type { Player, Position } from '../../lib/gameLogic';

interface BoardTheme {
  lightSquare: string;
  darkSquare: string;
  border: string;
  glow: string;
}

interface BoardProps {
  pieces: Map<string, { id: string; player: Player; isKing: boolean }>;
  selectedPosition: Position | null;
  validMoves: { from: Position; to: Position; captures?: Position[] }[];
  currentPlayer: Player;
  onSquareClick: (row: number, col: number) => void;
  isSelected: (row: number, col: number) => boolean;
  isValidMoveSquare: (row: number, col: number) => boolean;
  getPieceAt: (row: number, col: number) => { id: string; player: Player; isKing: boolean } | undefined;
  rows: number;
  cols: number;
  theme: BoardTheme;
}

export function Board({
  onSquareClick,
  isSelected,
  isValidMoveSquare,
  getPieceAt,
  rows,
  cols,
  theme,
}: BoardProps) {
  const squares = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const isDark = (row + col) % 2 === 1;
      const piece = getPieceAt(row, col);
      const selected = isSelected(row, col);
      const validMove = isValidMoveSquare(row, col);

      squares.push(
        <Square
          key={`${row}-${col}`}
          row={row}
          col={col}
          isDark={isDark}
          piece={piece}
          isSelected={selected}
          isValidMove={validMove}
          onClick={() => onSquareClick(row, col)}
          theme={theme}
        />
      );
    }
  }

  const boardStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    width: 'min(85vw, 320px)',
    border: `4px solid ${theme.border}`,
    borderRadius: '4px',
    overflow: 'hidden',
    boxShadow: `0 0 30px ${theme.glow}`,
    margin: '0 auto',
  };

  return (
    <div style={boardStyle}>
      {squares}
    </div>
  );
}