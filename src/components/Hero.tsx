import React from 'react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  return (
    <div id="hero" className="pt-24 pb-20 px-6" style={{ backgroundColor: '#242434' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Senior Frontend Engineer <span style={{ color: '#b9d6e2' }}>(UX/AI)</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{ color: '#b9d6e2' }}>
            7 years building design systems and AI-powered experiences
          </p>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="/resume.pdf" 
              download="Mirabelle_Doiron_Resume.pdf"
              className="flex items-center px-6 py-3 rounded hover:opacity-80 transition-opacity" 
              style={{ backgroundColor: '#b9d6e2', color: '#193441' }}
            >
              <span className="mr-2">Download PDF</span>
              <span style={{ fontSize: '16px' }}>↓</span>
            </a>
            
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 rounded hover:opacity-80 transition-opacity" 
              style={{ backgroundColor: '#242434', color: '#ffffff', border: '1px solid #b9d6e2' }}
            >
              <span className="mr-2">View Online</span>
              <span style={{ fontSize: '16px' }}>↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
