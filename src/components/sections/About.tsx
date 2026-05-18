import { motion } from 'framer-motion';
import { Cpu, Zap, Heart } from 'lucide-react';
import { fadeIn, fadeInLeft, fadeInRight } from '../../lib/animations';

export const About = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Engenharia de Precisão',
      description: 'Cada tabuleiro é construído com componentes de alta tecnologia',
    },
    {
      icon: Zap,
      title: 'Design Inovador',
      description: 'Fusão entre o universo mágico e a tecnologia de ponta',
    },
    {
      icon: Heart,
      title: 'Feito à Mão',
      description: 'Criado por apasionados pelo universo HP',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            className="relative"
            variants={fadeInLeft}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-2xl" />
              <div className="relative inset-4 bg-dark-light rounded-xl border border-surface/50 overflow-hidden">
                <img
                  src="/assets/images/magic-forge.jpeg"
                  alt="The Magic Forge"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center overflow-hidden">
                      <img
                        src="/assets/images/wizard-artisan.jfif"
                        alt="Artesão Bruxo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-text font-heading text-lg">The Magic Forge</h4>
                      <p className="text-text-muted text-sm">Artesãos da Tecnologia Mágica</p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-accent/10 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <motion.div variants={fadeInRight}>
            <h2 className="mb-6">
              A Forja<span className="text-accent"> Mágica</span>
            </h2>
            <p className="text-text-muted text-lg mb-8">
              Não vendemos apenas jogos de mesa. Criamos experiências para quem cresceu
              lendo e sonhando com o universo bruxo. Cada peça é um artefato de poder,
              cada movimento uma magia.
            </p>
            <p className="text-text-muted mb-10">
              Ours são desenvolvidos por artesãos que entendem de eletrônica e adoram
              Harry Potter. O resultado? Uma experiência phygital que transforma
              qualquer partida em um momento épico.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  className="text-center p-4 rounded-xl bg-dark-light/50 border border-surface/30"
                  whileHover={{ y: -5, borderColor: 'rgba(6, 182, 212, 0.3)' }}
                >
                  <feature.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h4 className="text-sm font-medium text-text mb-1">{feature.title}</h4>
                  <p className="text-xs text-text-muted">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};