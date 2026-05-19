import { motion } from 'framer-motion';
import { Piece } from './Piece';
import type { Piece as PieceType } from '../../lib/gameLogic';

interface BoardTheme {
  lightSquare: string;
  darkSquare: string;
  border: string;
  glow: string;
  backgroundImage?: string;
}

interface SquareProps {
  row: number;
  col: number;
  isDark: boolean;
  piece: PieceType | undefined;
  isSelected: boolean;
  isValidMove: boolean;
  onClick: () => void;
  theme: BoardTheme;
}

export function Square({
  isDark,
  piece,
  isSelected,
  isValidMove,
  onClick,
  theme,
}: SquareProps) {
  const bgColor = isDark 
    ? `${theme.darkSquare}CC` 
    : `${theme.lightSquare}80`;

  return (
    <div
      className="relative w-full aspect-square cursor-pointer"
      style={{ 
        backgroundColor: bgColor,
        backdropFilter: 'blur(0.5px)',
      }}
      onClick={onClick}
    >
      {isValidMove && (
        <motion.div
          className="absolute inset-2 rounded-full"
          style={{ backgroundColor: theme.glow }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}

      {piece && (
        <div className="absolute inset-2">
          <Piece piece={piece} isSelected={isSelected} themeGlow={theme.glow} />
        </div>
      )}
    </div>
  );
}