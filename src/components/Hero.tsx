import React from 'react';
import { tokens } from '../tokens';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  return (
    <div id="hero" className="pt-28 pb-20 px-6" style={{ backgroundColor: tokens.colors.bg.primary }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: tokens.colors.text.primary }}>
          Senior Frontend Engineer 
          </h1>
          <p className="text-xl md:text-2xl mb-4" style={{ color: tokens.colors.accent.burgundy }}>
          (UX/Design + AI)
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: tokens.colors.text.muted }}>
          UX Frontend Engineer at Indeed for 4+ years, where I discovered a passion for Al automation through side initiatives during my final year. 
          Built Al automation solutions alongside my core frontend responsibilities. 8+ years total Frontend engineering experience.
          </p>
          
          <div className="flex justify-center flex-wrap gap-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 rounded-md font-medium transition-all hover:opacity-90" 
              style={{ backgroundColor: tokens.colors.accent.teal, color: tokens.colors.text.light }}
            >
              View Projects
            </button>
            
            <a 
              href="/resume.pdf" 
              download="Mirabelle_Doiron_Resume.pdf"
              className="px-6 py-3 rounded-md font-medium transition-all hover:opacity-90" 
              style={{ backgroundColor: 'transparent', color: tokens.colors.accent.teal, border: `2px solid ${tokens.colors.accent.teal}` }}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
