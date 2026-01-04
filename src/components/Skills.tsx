import React from 'react';
import { tokens } from '../tokens';

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
    <div id="skills" className="py-20 px-6" style={{ backgroundColor: tokens.colors.bg.secondary }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: tokens.colors.text.primary }}>Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="p-6 rounded-lg transition-all hover:shadow-lg"
              style={{ backgroundColor: tokens.colors.bg.card, border: `1px solid ${tokens.colors.border.default}` }}
            >
              <h3 className="text-lg font-semibold mb-4" style={{ color: tokens.colors.text.primary }}>
                {category.name}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={`${category.name}-${skillIndex}`} 
                    className="text-xs px-2 py-1 rounded"
                    style={{ backgroundColor: tokens.colors.tag.bg, border: `1px solid ${tokens.colors.tag.border}`, color: tokens.colors.tag.text }}
                  >
                    {skill}
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
