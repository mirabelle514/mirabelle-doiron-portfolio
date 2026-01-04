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
    <div id="skills" className="py-20 px-6" style={{ backgroundColor: '#242434' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: '#ffffff' }}>Tech</h2>
        
        <div className="space-y-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center gap-4">
              <span className="font-semibold min-w-24" style={{ color: '#b9d6e2' }}>
                {category.name}:
              </span>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="flex items-center">
                    <span style={{ color: '#ffffff' }}>{skill}</span>
                    {skillIndex < category.skills.length - 1 && (
                      <span className="mx-2" style={{ color: '#b9d6e2' }}>•</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
