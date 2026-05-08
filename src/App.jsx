import React, { useState, useCallback } from 'react';
import './index.css';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Extracurricular from './components/Extracurricular';
import Contact from './components/Contact';

function App() {
  const [loaded, setLoaded] = useState(false);

  const handleLoaded = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      className="relative min-h-screen mesh-bg font-outfit"
      data-testid="app-root"
      style={{ cursor: 'none' }}
    >
      {/* Loading Screen */}
      {!loaded && <LoadingScreen onDone={handleLoaded} />}

      {/* Persistent elements */}
      <CustomCursor />
      <ParticleBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main
        data-testid="app-main"
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.8s ease',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Extracurricular />
        <Contact />
      </main>
    </div>
  );
}

export default App;
