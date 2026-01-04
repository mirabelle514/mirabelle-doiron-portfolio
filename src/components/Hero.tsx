import React from 'react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  return (
    <div id="hero" className="pt-24 pb-20 px-6" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-wider uppercase mb-4" style={{ color: '#3d5a6c' }}>
            SENIOR FRONTEND ENGINEER
          </p>
          <h1 className="text-5xl md:text-6xl font-light mb-6" style={{ color: '#2d3748' }}>
            Senior Frontend{' '}
            <span className="block" style={{ color: '#8b2942' }}>Engineer (UX/AI)</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto" style={{ color: '#4a5568' }}>
            7 years building design systems and AI-powered experiences. At Indeed, I built tooling for engineers and designers—including an AI assistant that significantly improved documentation search and adoption.
          </p>
          
          <div className="flex justify-center flex-wrap gap-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 rounded-md font-medium transition-all hover:opacity-90" 
              style={{ backgroundColor: '#3d5a6c', color: '#ffffff' }}
            >
              View Projects
            </button>
            
            <button 
              onClick={() => scrollToSection('about')}
              className="px-6 py-3 rounded-md font-medium transition-all hover:opacity-90" 
              style={{ backgroundColor: '#3d5a6c', color: '#ffffff' }}
            >
              About Me
            </button>
            
            <a 
              href="/resume.pdf" 
              download="Mirabelle_Doiron_Resume.pdf"
              className="px-6 py-3 rounded-md font-medium transition-all hover:opacity-90" 
              style={{ backgroundColor: '#3d5a6c', color: '#ffffff' }}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
