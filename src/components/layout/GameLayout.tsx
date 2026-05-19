import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';

interface GameLayoutProps {
  children: ReactNode;
}

export function GameLayout({ children }: GameLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-[#0d0d0d]/90 backdrop-blur-md border-b border-[#1A1A1A]"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-[#F0E6D2] hover:text-[#D4A017] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-heading tracking-wider hidden md:inline">Voltar</span>
          </Link>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#D4A017]" />
            <span className="font-heading text-xl text-[#F0E6D2]">
              Dama<span className="text-[#D4A017]">Bruxa</span>
            </span>
          </div>
          <div className="w-24" />
        </div>
      </motion.header>

      <main className="pt-24 pb-12 px-6" style={{ minHeight: '100vh' }}>
        {children}
      </main>
    </div>
  );
}