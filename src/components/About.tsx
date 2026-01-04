import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6" style={{ backgroundColor: '#193441' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#ffffff' }}>About</h2>
        <div className="text-lg space-y-6" style={{ color: '#ffffff' }}>
          <p>
            I'm a Senior Frontend Engineer specializing in design systems and AI integration.
          </p>
          <p>
            At Indeed, I built tooling for engineers and designers—including an AI assistant that significantly improved documentation search and adoption across the team.
          </p>
          <p>
            I focus on the intersection of craft (clean component APIs, intuitive UX) and intelligence (AI features that feel magical, not clunky).
          </p>
          <p style={{ color: '#b9d6e2' }}>
            <strong>Currently exploring:</strong> AI coding assistants, MCP servers, and how AI can accelerate frontend development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
