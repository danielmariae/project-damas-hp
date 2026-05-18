import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Flame, Waves, Network } from 'lucide-react';
import { Button } from '../ui/Button';

interface Model {
  id: number;
  name: string;
  icon: React.ReactNode;
  focus: string;
  visual: string;
  description: string;
  features: string[];
  image: string;
}

const models: Model[] = [
  {
    id: 1,
    name: 'Arena do Dragão',
    icon: <Flame className="w-8 h-8" />,
    focus: 'Intensidade',
    visual: 'Tons quentes (laranja/vermelho), efeitos de faíscas quando uma peça é comida.',
    description: 'A borda do tabuleiro simula a arena de pedra das batalhas mais épicas.',
    features: ['LEDs vermelhos', 'Efeitos de faíscas', 'Design de pedra ancient'],
    image: '/assets/images/model-dragon.png',
  },
  {
    id: 2,
    name: 'O Lago Negro',
    icon: <Waves className="w-8 h-8" />,
    focus: 'Mistério e Fluidez',
    visual: 'Acrílico translúcido com tons de azul e cinza.',
    description: 'O sistema de LED deve sugerir ondas ou bolhas, criando uma atmosfera etérea.',
    features: ['Acrílico translúcido', 'LEDs azuis ondulantes', 'Efeito névoa'],
    image: '/assets/images/model-lake.png',
  },
  {
    id: 3,
    name: 'O Labirinto',
    icon: <Network className="w-8 h-8" />,
    focus: 'Suspense e Complexidade',
    visual: 'Bordas mais altas, geometria complexa.',
    description: 'A iluminação LED deve percorrer o caminho das peças como se estivesse "guiando" o jogador.',
    features: ['Geometria complexa', 'LEDs dinâmicos', 'Caminhos iluminados'],
    image: '/assets/images/model-labyrinth.png',
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export const Models = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % models.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + models.length) % models.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % models.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentModel = models[currentIndex];

  return (
    <section id="models" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            Modelos<span className="text-accent"> Épicos</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Escolha seu estilo de batalha. Cada tabuleiro é uma obra de arte tecnológica
            inspirada nos momentos cruciais do universo bruxo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-md mx-auto w-full">
            <div className="absolute inset-0 rounded-2xl border-2 border-secondary/30" />
            <div className="absolute inset-2 rounded-xl bg-dark-light border border-surface/30 overflow-hidden">
              <div className="relative w-full h-full">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="absolute inset-0"
                  >
                    <img
                      src={currentModel.image}
                      alt={currentModel.name}
                      className="w-full h-full object-contain p-8"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-8xl opacity-20">
                    {currentIndex === 0 ? '🐉' : currentIndex === 1 ? '🌊' : '🌀'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-secondary/20 text-secondary">
                    {currentModel.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading text-text">{currentModel.name}</h3>
                    <p className="text-text-muted text-sm">Foco: {currentModel.focus}</p>
                  </div>
                </div>

                <p className="text-text-muted mb-4">{currentModel.visual}</p>
                <p className="text-text-muted mb-6">{currentModel.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {currentModel.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-sm rounded-full bg-surface/30 text-text-muted border border-surface/50"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button variant="outline">Ver Detalhes</Button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-dark-light border border-surface/50 text-text hover:text-accent hover:border-accent/50 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-2">
            {models.map((model, index) => (
              <button
                key={model.id}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  currentIndex === index ? 'bg-accent w-8' : 'bg-surface hover:bg-secondary/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-dark-light border border-surface/50 text-text hover:text-accent hover:border-accent/50 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};