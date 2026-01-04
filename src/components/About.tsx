import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#2d3748' }}>About</h2>
        <div className="text-lg space-y-6" style={{ color: '#4a5568' }}>
          <p>
            I specialize in design systems and AI integration. At Indeed, I built tooling for engineers and designers, including an AI assistant that improved documentation search and adoption across the team.
          </p>
          <p>
            I participated in the Claude AI Pilot Program, implementing AI-powered features and creating a Design System AI agent.
          </p>
          <p>
            Currently exploring AI coding assistants, MCP servers, and how AI can accelerate frontend development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
