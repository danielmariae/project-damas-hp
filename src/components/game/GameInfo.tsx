import { motion } from 'framer-motion';
import type { Player } from '../../lib/gameLogic';

interface GameInfoProps {
  currentPlayer: Player;
  captures: { light: number; dark: number };
  isGameOver: boolean;
  winner: Player | 'draw' | null;
  onReset: () => void;
}

export function GameInfo({
  currentPlayer,
  captures,
  isGameOver,
  winner,
  onReset,
}: GameInfoProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      <motion.div
        className="text-center"
        key={currentPlayer}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-text-muted text-sm mb-2">Turno de</p>
        <div className="flex items-center gap-3">
          <div
            className={`w-4 h-4 rounded-full ${
              currentPlayer === 'light' ? 'bg-[#F0E6D2]' : 'bg-[#2C2C2C] border border-[#C69C6D]'
            }`}
          />
          <span className="text-xl font-heading text-[#F0E6D2]">
            {currentPlayer === 'light' ? 'Luz' : 'Sombras'}
          </span>
        </div>
      </motion.div>

      <div className="flex gap-8 text-center">
        <div className="p-4 rounded-lg bg-dark-light/50 border border-surface/30">
          <p className="text-text-muted text-xs mb-2">Capturadas</p>
          <p className="text-2xl font-heading text-[#F0E6D2]">{captures.light}</p>
          <div className="w-3 h-3 rounded-full bg-[#F0E6D2] mx-auto mt-2" />
        </div>
        <div className="p-4 rounded-lg bg-dark-light/50 border border-surface/30">
          <p className="text-text-muted text-xs mb-2">Capturadas</p>
          <p className="text-2xl font-heading text-[#F0E6D2]">{captures.dark}</p>
          <div className="w-3 h-3 rounded-full bg-[#2C2C2C] border border-[#C69C6D] mx-auto mt-2" />
        </div>
      </div>

      {isGameOver && (
        <motion.div
          className="text-center p-6 rounded-xl bg-[#D4A017]/20 border border-[#D4A017]/50"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <p className="text-text-muted text-sm mb-2">Vencedor</p>
          <p className="text-2xl font-heading text-[#D4A017]">
            {winner === 'light' ? 'Luz' : winner === 'dark' ? 'Sombras' : 'Empate!'}
          </p>
        </motion.div>
      )}

      {isGameOver && (
        <motion.button
          onClick={onReset}
          className="px-6 py-3 rounded-lg bg-[#D4A017] text-[#1A1A1A] font-semibold tracking-wider uppercase"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Nova Partida
        </motion.button>
      )}
    </div>
  );
}