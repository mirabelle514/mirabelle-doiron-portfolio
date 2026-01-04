import React from 'react';
import { tokens } from '../tokens';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Senior Frontend Engineer",
      company: "OSEA",
      period: "March 2025 - Present"
    },
    {
      title: "UX Frontend Engineer",
      company: "Indeed",
      period: "July 2021 - July 2025"
    },
    {
      title: "Frontend Developer",
      company: "AAA",
      period: "April 2017 - July 2021"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6" style={{backgroundColor: tokens.colors.bg.primary}}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{color: tokens.colors.text.primary}}>Experience</h2>
        
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="p-5 rounded-lg"
              style={{backgroundColor: tokens.colors.bg.card, border: `1px solid ${tokens.colors.border.default}`}}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-semibold" style={{color: tokens.colors.text.primary}}>{exp.title}</h3>
                  <p className="text-sm" style={{color: tokens.colors.text.secondary}}>{exp.company}</p>
                </div>
                <p className="text-sm mt-2 md:mt-0" style={{color: tokens.colors.text.muted}}>{exp.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
