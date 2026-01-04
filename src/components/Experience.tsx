import React from 'react';

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
    <section id="experience" className="py-20 px-6" style={{backgroundColor: '#242434'}}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Experience</h2>
        
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row md:items-center md:justify-between p-4 rounded"
              style={{backgroundColor: '#193441', border: '1px solid #b9d6e2'}}
            >
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">{exp.title}</span>
                <span style={{color: '#b9d6e2'}}>|</span>
                <span style={{color: '#b9d6e2'}}>{exp.company}</span>
              </div>
              <span className="text-sm mt-2 md:mt-0" style={{color: '#ffffff'}}>{exp.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
