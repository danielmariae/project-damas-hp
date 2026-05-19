import { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, Waves, Network } from 'lucide-react';
import { GameLayout } from '../components/layout/GameLayout';
import { Board } from '../components/game/Board';
import { GameInfo } from '../components/game/GameInfo';
import { useGame } from '../hooks/useGame';

type BoardTheme = 'dragon' | 'lake' | 'labyrinth';

const themes = {
  dragon: {
    name: 'Arena do Dragão',
    icon: <Flame className="w-4 h-4" />,
    lightSquare: '#8B4513',
    darkSquare: '#2D1810',
    border: '#8B4513',
    glow: 'rgba(139, 69, 19, 0.4)',
    backgroundImage: '/assets/images/34.png',
  },
  lake: {
    name: 'O Lago Negro',
    icon: <Waves className="w-4 h-4" />,
    lightSquare: '#4682B4',
    darkSquare: '#1a2a3a',
    border: '#4682B4',
    glow: 'rgba(70, 130, 180, 0.4)',
    backgroundImage: '/assets/images/35.png',
  },
  labyrinth: {
    name: 'O Labirinto',
    icon: <Network className="w-4 h-4" />,
    lightSquare: '#6c955b',
    darkSquare: '#263b1e',
    border: '#6c955b',
    glow: 'rgba(107, 91, 149, 0.4)',
    backgroundImage: '/assets/images/36.png',
  },
};

export function GamePreview() {
  const [theme, setTheme] = useState<BoardTheme>('dragon');
  const game = useGame();
  const currentTheme = themes[theme];

  return (
    <GameLayout>
      <div className="max-w-6xl mx-auto min-h-screen">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl md:text-4xl font-heading text-[#F0E6D2] mb-2">
            Prévia do <span className="text-[#D4A017]">Jogo</span>
          </h1>
          <p className="text-[#C69C6D] text-sm">
            Teste a experiência do tabuleiro mágico
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              {(Object.keys(themes) as BoardTheme[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all ${
                    theme === t
                      ? 'bg-[#D4A017] text-[#1A1A1A]'
                      : 'bg-[#1A1A1A] text-[#C69C6D] border border-[#C69C6D]/30 hover:border-[#D4A017]'
                  }`}
                >
                  {themes[t].icon}
                  {themes[t].name}
                </button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
            <Board
              pieces={game.pieces}
              selectedPosition={game.selectedPosition}
              validMoves={game.validMoves}
              currentPlayer={game.currentPlayer}
              onSquareClick={game.handleSquareClick}
              isSelected={game.isSelected}
              isValidMoveSquare={game.isValidMoveSquare}
              getPieceAt={game.getPieceAt}
              rows={game.ROWS}
              cols={game.COLS}
              theme={currentTheme}
            />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <GameInfo
              currentPlayer={game.currentPlayer}
              captures={game.captures}
              isGameOver={game.isGameOver}
              winner={game.winner}
              onReset={game.resetGame}
            />
          </motion.div>
        </div>

        <motion.div
          className="mt-12 p-6 rounded-xl bg-[#1A1A1A]/50 border border-[#C69C6D]/30 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-[#D4A017] font-heading text-lg mb-3">Como Jogar</h3>
          <ul className="text-[#C69C6D] text-sm space-y-2">
            <li>• Clique em uma peça para selecioná-la (brilho dourado = selecionada)</li>
            <li>• Clique em uma casa com ponto dourado para mover</li>
            <li>• Capture peças inimigas saltando sobre elas na diagonal</li>
            <li>• Chegue à última fileira para virar <span className="text-[#D4A017]">Arquimago</span> (move para frente e para trás)</li>
            <li>• O jogador com peças claras começa</li>
          </ul>
        </motion.div>
      </div>
    </GameLayout>
  );
}