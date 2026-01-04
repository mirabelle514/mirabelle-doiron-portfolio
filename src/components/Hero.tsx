import React from 'react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  return (
    <div id="hero" className="pt-28 pb-20 px-6" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#2d3748' }}>
            Mirabelle Doiron
          </h1>
          <p className="text-xl md:text-2xl mb-4" style={{ color: '#4a5568' }}>
            Senior Frontend Engineer <span style={{ color: '#8b2942' }}>(UX/AI)</span>
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: '#718096' }}>
            7 years building design systems and AI-powered experiences
          </p>
          
          <div className="flex justify-center flex-wrap gap-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 rounded-md font-medium transition-all hover:opacity-90" 
              style={{ backgroundColor: '#3d5a6c', color: '#ffffff' }}
            >
              View Projects
            </button>
            
            <a 
              href="/resume.pdf" 
              download="Mirabelle_Doiron_Resume.pdf"
              className="px-6 py-3 rounded-md font-medium transition-all hover:opacity-90" 
              style={{ backgroundColor: 'transparent', color: '#3d5a6c', border: '2px solid #3d5a6c' }}
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
