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
      title: "Developer Experience Engineering",
      description: "Created a modular developer experience platform that generates personalized setup documentation, replacing static guides with adaptive, role-specific onboarding workflows for development teams.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS "],
      impact: "Reduced paper work by 60% and improved developer onboarding time",
      type: "DX Engineering",
      link: "https://github.com/mirabelle514/onboarding-your-team"
    },
    {
      title: "AI-Powered Home Design Assistant App",
      description: "Created an intelligent home design assistant App that leverages advanced recommendation algorithms to create personalized DIY project suggestions based on your style preferences, budget constraints, and skill level.",
      technologies: ["AI APIs", "Data Modeling", "React", "Analytics"],
      impact: "Enhanced user experience through intelligent features and data-driven insights",
      type: "AI/ML - Mobile Development",
      link: "https://github.com/mirabelle514/DesignMyMaison"
    },
    {
      title: "Cross-Platform Development",
      description: "Built a comprehensive business management platform for freelancers featuring time tracking, client management, automated invoicing, and tax calculations with secure local storage.",
      technologies: ["React", "Vite", "Mobile UX", "Tailwind"],
      impact: "Allows freelancers to manage their business and projects efficiently",
      type: "Mobile Development",
      link: "https://github.com/mirabelle514/contractortracker.app"
    }
  ];

  return (
    <div id="projects" className="py-20 px-6" style={{ backgroundColor: '#193441' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: '#ffffff' }}>Featured <span style={{ color: '#ffffff' }}>Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a 
              key={index} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block rounded p-6 hover:shadow-lg transition-all cursor-pointer"
              style={{ backgroundColor: '#193441', border: '1px solid #b9d6e2' }}
            >
              <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium px-2 py-1 rounded" style={{ backgroundColor: '#b9d6e2', color: '#193441' }}>
                  {project.type}
                </span>
                <span style={{ color: '#ffffff', fontSize: '16px' }}>↗</span>
              </div>
              
              <h3 className="text-lg font-bold mb-3" style={{ color: '#ffffff' }}>{project.title}</h3>
                <p className="mb-4 text-sm" style={{ color: '#ffffff' }}>{project.description}</p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs px-2 py-1 rounded" style={{ backgroundColor: '#b9d6e2', color: '#193441' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="border-t pt-4" style={{ borderColor: '#b9d6e2' }}>
                <p className="text-xs flex items-center" style={{ color: '#ffffff' }}>
                  Impact: {project.impact}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;