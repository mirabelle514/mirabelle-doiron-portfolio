import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  impact: string;
  type: string;
  link?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "AI-Powered Documentation Assistant",
      description: "Built a RAG-powered chatbot for the Indeed Design System that transformed how engineers and designers find documentation. The assistant understands natural language queries and surfaces relevant component docs, usage patterns, and code examples.",
      technologies: ["React", "TypeScript", "OpenAI", "Vector DB"],
      impact: "Significantly improved documentation search time and increased design system adoption across the team",
      type: "Production AI",
      link: "#case-study-ai-assistant"
    },
    {
      title: "MCP Server for React Patterns",
      description: "Teaching AI assistants React best practices. Built an MCP server that provides AI coding assistants with design system templates, component conventions, and accessibility patterns to generate better code suggestions.",
      technologies: ["TypeScript", "MCP", "React"],
      impact: "Better AI-generated code suggestions and faster developer onboarding",
      type: "AI/Developer Tools",
      link: "#case-study-mcp-server"
    },
    {
      title: "Design System Component Library",
      description: "Contributed to enterprise-scale component libraries with a focus on clean APIs, comprehensive Storybook documentation, and WCAG accessibility compliance. Components used across multiple product teams.",
      technologies: ["React", "TypeScript", "Storybook", "Tailwind"],
      impact: "Improved developer productivity and UI consistency across products",
      type: "Design Systems",
      link: "#case-study-component-library"
    }
  ];

  return (
    <div id="projects" className="py-20 px-6" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: '#2d3748' }}>Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg transition-all hover:shadow-lg"
              style={{ backgroundColor: '#f5f5f0', border: '1px solid #e2e8f0' }}
            >
              <p className="text-xs font-medium uppercase tracking-wide mb-3" style={{ color: '#718096' }}>
                {project.type}
              </p>
              
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#2d3748' }}>{project.title}</h3>
              <p className="mb-4 text-sm" style={{ color: '#4a5568' }}>{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="text-xs px-2 py-1 rounded"
                    style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e0', color: '#4a5568' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.link}
                className="text-sm font-medium hover:opacity-80 transition-opacity"
                style={{ color: '#8b2942' }}
              >
                View details
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
