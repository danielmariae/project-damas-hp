import { Navbar } from '../components/layout/Navbar';
import { ParticleBackground } from '../components/ui/ParticleBackground';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Models } from '../components/sections/Models';
import { Features } from '../components/sections/Features';
import { Contact } from '../components/sections/Contact';

export function Landing() {
  return (
    <>
      <ParticleBackground particleCount={40} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Models />
        <Features />
        <Contact />
      </main>
    </>
  );
}