import Particles from './components/Particles';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { Achievements } from './components/sections/Achievements';

function App() {
  return (
    <div className="relative min-h-screen text-slate-200 selection:bg-cyan-500/30 bg-[#0B0C15] overflow-x-hidden">

      {/* 1. Fixed Particles Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles
          className="w-full h-full"
          particleColors={['#ffffff', '#ffffff', '#0ea5e9']}
          particleCount={150}
          particleSpread={10}
          speed={0.15}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* 2. Main Scrollable Content */}
      <main className="relative z-10 container mx-auto px-6 py-12 md:py-24 max-w-6xl">

        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />

        <footer className="text-center text-slate-600 py-12 border-t border-white/5 mt-20">
          <p>© {new Date().getFullYear()} Rounak Kumar. Crafted with React & OGL.</p>
        </footer>

      </main>
    </div>
  );
}

export default App;