import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8" style={{ color: '#2d3748' }}>About Me</h2>
        <div className="text-lg space-y-6" style={{ color: '#4a5568' }}>
          <p>
            I'm a Senior Frontend Engineer specializing in design systems and AI integration. 7 years building design systems and AI-powered experiences.
          </p>
          <p>
            At Indeed, I built tooling for engineers and designers—including an AI assistant that significantly improved documentation search and adoption across the team. I participated in the Claude AI Pilot Program, implementing AI-powered features and creating a Design System AI agent.
          </p>
          <p>
            I focus on the intersection of craft (clean component APIs, intuitive UX) and intelligence (AI features that feel magical, not clunky).
          </p>
          <p>
            <strong style={{ color: '#2d3748' }}>Currently exploring:</strong> AI coding assistants, MCP servers, and how AI can accelerate frontend development.
          </p>
        </div>
        
        <div className="mt-12 p-6 rounded-lg" style={{ backgroundColor: '#f5f5f0' }}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3" style={{ color: '#2d3748' }}>UX Frontend Development</h3>
              <ul className="space-y-1 text-sm" style={{ color: '#4a5568' }}>
                <li>• React Component Development</li>
                <li>• UI/UX Implementation</li>
                <li>• Accessibility</li>
                <li>• Design Token Usage</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3" style={{ color: '#2d3748' }}>AI Automation Engineer</h3>
              <ul className="space-y-1 text-sm" style={{ color: '#4a5568' }}>
                <li>• Claude AI</li>
                <li>• MCP-server Development</li>
                <li>• AI Agent Development</li>
                <li>• Workflow Automation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3" style={{ color: '#2d3748' }}>Frontend Technologies</h3>
              <ul className="space-y-1 text-sm" style={{ color: '#4a5568' }}>
                <li>• React</li>
                <li>• TypeScript</li>
                <li>• Next.js</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
