import { motion } from 'framer-motion';
import { Sparkles, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { fadeInUp } from '../../lib/animations';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        src="/assets/videos/hero-board.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-primary/20 to-dark" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex items-center justify-center gap-2 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Sparkles className="w-5 h-5 text-accent" />
          <span className="text-accent text-sm tracking-widest uppercase">
            A Estratégia Milenar, Agora Conjurada com Magia Real
          </span>
        </motion.div>

        <h1 className="mb-6">
          Onde o Intelecto
          <span className="block text-accent">Desafia os Elementos</span>
        </h1>

        <p className="text-xl md:text-2xl text-text-muted mb-10 max-w-2xl mx-auto">
          Dama & HP: Sinta o movimento, domine a arena e reivindique seu lugar na história.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button size="lg">
            <Sparkles className="inline-block w-5 h-5 mr-2" />
            Explorar os Tabuleiros
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-muted hover:text-accent transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.a>
    </section>
  );
};