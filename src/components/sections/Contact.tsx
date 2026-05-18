import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, ShoppingBag, Mail } from 'lucide-react';
import { Button } from '../ui/Button';
import { fadeIn } from '../../lib/animations';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-primary/10 to-dark" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">
            O Ponto de<span className="text-accent"> Encontro</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Pronto para adquirir seu artefato? Encontre-nos nas convenções parceiras ou
            solicite via nossa rede de comunicação mística.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="p-6 rounded-2xl bg-dark-light/50 border border-surface/30">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-heading mb-2">O Beco Diagonal da Tecnologia</h3>
                  <p className="text-text-muted text-sm mb-3">
                    Disponível em nossas convenções parceiras. Visite-nos em eventos de
                    tecnologia e cultura geek.
                  </p>
                  <span className="text-accent text-sm">Ver próximos eventos →</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-dark-light/50 border border-surface/30">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gold/10 text-gold">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-heading mb-2">Lojas Conceito Selecionadas</h3>
                  <p className="text-text-muted text-sm">
                    Exclusivamente disponível em lojas conceito selecionadas que compartilham
                    nossa visão de inovação e magia.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-dark-light/50 border border-surface/30">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-heading mb-2">Solicitar via Coruja</h3>
                  <p className="text-text-muted text-sm">
                    Prefere comprar diretamente? Envie uma mensagem e nossos elves
                    domésticos responderão em até 24 horas.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="p-8 rounded-2xl bg-dark-light/50 border border-surface/30"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-heading mb-6">Enviar Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-text-muted mb-2">
                  Seu Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-dark border border-surface/50 text-text placeholder-text-muted/50 focus:border-accent focus:outline-none transition-colors"
                  placeholder="Digite seu nome"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-text-muted mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-dark border border-surface/50 text-text placeholder-text-muted/50 focus:border-accent focus:outline-none transition-colors"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-text-muted mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-dark border border-surface/50 text-text placeholder-text-muted/50 focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Sua mensagem..."
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                <Send className="inline-block w-4 h-4 mr-2" />
                Enviar via Coruja
              </Button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-text-muted text-sm">
            © 2024 Dama & HP. Feito com 🧙‍♂️ e ⚡ por apaixonados pelo universo bruxo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};