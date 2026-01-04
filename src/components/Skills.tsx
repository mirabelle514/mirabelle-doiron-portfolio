import React from 'react';

interface SkillCategory {
  name: string;
  skills: string[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind"]
    },
    {
      name: "AI",
      skills: ["OpenAI", "RAG", "Vector DBs", "MCP"]
    },
    {
      name: "Tools",
      skills: ["Figma", "Storybook", "Git", "Vercel"]
    }
  ];

  return (
    <div id="skills" className="py-20 px-6" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: '#2d3748' }}>Technical Skills</h2>
        
        <div className="flex flex-wrap justify-center gap-3">
          {skillCategories.flatMap((category) => 
            category.skills.map((skill, skillIndex) => (
              <span 
                key={`${category.name}-${skillIndex}`} 
                className="px-4 py-2 rounded-full text-sm"
                style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e0', color: '#4a5568' }}
              >
                {skill}
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
