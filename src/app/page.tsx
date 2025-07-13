import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Certificates from '@/components/sections/Certificates';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-black/20 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Fadhil Firdaus Adha. Universitas Sangga Buana YPKP.
          </p>
        </div>
      </footer>
    </>
  );
}