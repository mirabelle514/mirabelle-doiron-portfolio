import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className="py-20 px-6" style={{ backgroundColor: '#242434' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12" style={{ color: '#ffffff' }}>Technical Skills</h2>
        
        <div className="mb-8">
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#ffffff' }}>
            Core technologies and tools I work with to build modern, scalable applications.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <span className="px-4 py-2 rounded" style={{ backgroundColor: '#b9d6e2', color: '#193441' }}>
            React
          </span>
          <span className="px-4 py-2 rounded" style={{ backgroundColor: '#b9d6e2', color: '#193441' }}>
            TypeScript
          </span>
          <span className="px-4 py-2 rounded" style={{ backgroundColor: '#b9d6e2', color: '#193441' }}>
            JavaScript
          </span>
          <span className="px-4 py-2 rounded" style={{ backgroundColor: '#b9d6e2', color: '#193441' }}>
            HTML/CSS
          </span>
          <span className="px-4 py-2 rounded" style={{ backgroundColor: '#b9d6e2', color: '#193441' }}>
            iOS Development
          </span>
          <span className="px-4 py-2 rounded" style={{ backgroundColor: '#b9d6e2', color: '#193441' }}>
            Swift
          </span>
          <span className="px-4 py-2 rounded" style={{ backgroundColor: '#b9d6e2', color: '#193441' }}>
            AI Integration
          </span>
          <span className="px-4 py-2 rounded" style={{ backgroundColor: '#b9d6e2', color: '#193441' }}>
            Git
          </span>
          <span className="px-4 py-2 rounded" style={{ backgroundColor: '#b9d6e2', color: '#193441' }}>
            Tailwind CSS
          </span>
          <span className="px-4 py-2 rounded" style={{ backgroundColor: '#b9d6e2', color: '#193441' }}>
            Vite
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;