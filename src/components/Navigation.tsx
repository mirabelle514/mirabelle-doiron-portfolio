import React from 'react';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navigation = ({ activeSection, scrollToSection }: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full z-50 shadow-sm" style={{ backgroundColor: '#193441', borderBottom: '1px solid #b9d6e2' }}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold" style={{ color: '#ffffff' }}>Mirabelle Doiron</div>
          <div className="hidden md:flex space-x-8">
            {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm transition-colors"
                style={{ 
                  color: activeSection === item.toLowerCase() ? '#b9d6e2' : '#ffffff',
                  fontWeight: activeSection === item.toLowerCase() ? '500' : 'normal'
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