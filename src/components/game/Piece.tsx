import { motion } from 'framer-motion';
import type { Piece as PieceType } from '../../lib/gameLogic';

interface PieceProps {
  piece: PieceType;
  isSelected: boolean;
  themeGlow?: string;
}

export function Piece({ piece, isSelected, themeGlow = 'rgba(212, 175, 55, 0.4)' }: PieceProps) {
  const isLight = piece.player === 'light';
  const baseColor = isLight ? '#F0E6D2' : '#2C2C2C';
  const borderColor = '#D4A017';

  return (
    <motion.div
      className={`w-full h-full rounded-full flex items-center justify-center ${
        isLight ? 'border-2 border-[#C69C6D]/50' : 'border-2 border-[#1A1A1A]'
      }`}
      style={{
        background: `radial-gradient(circle at 30% 30%, ${baseColor}, ${
          isLight ? '#C69C6D' : '#0a0a0a'
        })`,
        boxShadow: isSelected
          ? `0 0 20px ${themeGlow}, 0 0 40px ${themeGlow}, inset 0 0 15px ${borderColor}40`
          : 'inset 0 2px 4px rgba(0,0,0,0.3)',
      }}
      animate={isSelected ? { scale: [1, 1.05, 1] } : {}}
      transition={{ duration: 1, repeat: Infinity }}
    >
      {piece.isKing && (
        <motion.div
          className="text-[#D4A017]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ♔
        </motion.div>
      )}
    </motion.div>
  );
}