import React from 'react';
import { tokens } from '../tokens';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navigation = ({ activeSection, scrollToSection }: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full z-50 shadow-sm" style={{ backgroundColor: tokens.colors.bg.primary, borderBottom: `1px solid ${tokens.colors.border.default}` }}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold" style={{ color: tokens.colors.text.primary }}>Mirabelle Doiron</div>
          <div className="hidden md:flex space-x-8">
            {['Projects', 'About', 'Experience', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm transition-colors"
                style={{ 
                  color: activeSection === item.toLowerCase() ? tokens.colors.accent.burgundy : tokens.colors.text.secondary,
                  fontWeight: activeSection === item.toLowerCase() ? '600' : 'normal'
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
