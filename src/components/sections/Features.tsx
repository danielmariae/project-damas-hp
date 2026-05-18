import { motion } from 'framer-motion';
import { Cpu, Sparkles, Wifi, Shield, Palette, Gamepad2 } from 'lucide-react';
import { fadeIn, staggerContainer } from '../../lib/animations';

const features = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: 'Sensores Ultra-Precisos',
    description:
      'Cada movimento é detectado com precisão milimétrica. Os sensores respondem instantaneamente ao toque das peças.',
  },
  {
    icon: <Wifi className="w-8 h-8" />,
    title: 'Integração com GPU',
    description:
      'Processamento de efeitos visuais em tempo real. Conecte ao monitor/TV e veja a magia acontecer na tela.',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Acrílico de Alta Resistência',
    description:
      'Materiais premium que combinam durabilidade com estética. Cada peça é usinada com perfeição.',
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'LEDsRGB Inteligentes',
    description:
      'Iluminação dinâmica que reage ao jogo. Cores diferentes para cada casa e efeito visual por movimento.',
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'DNA Harry Potter',
    description:
      'Design inspirado em momentos icônicos dos livros e filmes. Cada modelo conta uma história.',
  },
  {
    icon: <Gamepad2 className="w-8 h-8" />,
    title: 'Experiência Phygital',
    description:
      'A fusão perfeita entre o físico e o digital. Não é apenas um jogo, é uma extensão da magia.',
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">
            A Tecnologia<span className="text-accent"> por Trás da Magia</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Não é apenas um jogo de mesa. É uma extensão da partida. Os sensores
            reagem ao seu movimento, criando uma experiência verdadeiramente imersiva.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className="group p-8 rounded-2xl bg-dark-light/50 border border-surface/30 hover:border-accent/50 transition-all duration-300"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 p-3 rounded-xl bg-accent/10 text-accent w-fit group-hover:bg-accent/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-heading mb-3 text-text">{feature.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/20 via-dark-light/50 to-primary/20 border border-surface/30 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-heading mb-2">Premium e Inovador</h3>
          <p className="text-text-muted">
            Cada tabuleiro é uma obra de arte tecnológica, desenvolvida para quem busca
            mais que um jogo — busca uma experiência.
          </p>
        </motion.div>
      </div>
    </section>
  );
};