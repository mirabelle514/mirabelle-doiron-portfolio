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
    <section id="experience" className="py-20 px-6" style={{backgroundColor: '#ffffff'}}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center" style={{color: '#2d3748'}}>Experience</h2>
        <p className="text-center mb-12" style={{color: '#4a5568'}}>
          7+ years of professional experience in frontend development, and recently fell in love with AI integration technologies
        </p>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg"
              style={{backgroundColor: '#f5f5f0', border: '1px solid #e2e8f0'}}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg" style={{color: '#4a5568'}}>🏢</span>
                    <span className="font-semibold" style={{color: '#2d3748'}}>{exp.company}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{color: '#2d3748'}}>{exp.title}</h3>
                </div>
                <div className="flex items-center gap-2 text-sm" style={{color: '#4a5568'}}>
                  <span>📅</span>
                  <span>{exp.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
