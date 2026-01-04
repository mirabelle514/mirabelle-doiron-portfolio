import React from 'react';
import { tokens } from '../tokens';

const About = () => {
  return (
    <section id="about" className="py-20 px-6" style={{ backgroundColor: tokens.colors.bg.secondary }}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: tokens.colors.text.primary }}>About</h2>
        <div className="text-lg space-y-6" style={{ color: tokens.colors.text.secondary }}>
          <p>
            I'm a UX Frontend Engineer with 8+ years of software engineering experience, including 4 years at Indeed. I'm passionate about AI automation, building AI solutions, and iOS development. My work focuses on creating user-centric experiences while leveraging emerging technologies.
          </p>
          <p>
            I'm recently available due to Indeed's company-wide workforce reduction. During my time there, I participated in the Claude AI Pilot Program, implementing AI-powered features that increased team productivity by 40%. I also created a Design System AI agent for automating documentation and improving developer efficiency.
          </p>
          <p>
            I'm seeking UX Frontend Engineer roles or opportunities to grow into AI Automation positions where I can leverage my skills and explore emerging technologies. My focus is on user-centric experiences and AI-enhanced development workflows.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
