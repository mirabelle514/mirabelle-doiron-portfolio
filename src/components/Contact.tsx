import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="py-20 px-6" style={{ backgroundColor: '#3d5a6c' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4" style={{ color: '#ffffff' }}>Get in Touch</h2>
        <p className="mb-8" style={{ color: '#e2e8f0' }}>
          I'm actively seeking Senior Frontend Engineer roles with a focus on AI-powered applications and design systems.
        </p>
        
        <div className="flex justify-center flex-wrap gap-4">
          <a 
            href="https://www.linkedin.com/in/mirabelle-doiron-84955a28/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity" 
            style={{ backgroundColor: '#ffffff', color: '#3d5a6c' }}
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/mirabelle514" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity" 
            style={{ backgroundColor: 'transparent', color: '#ffffff', border: '2px solid #ffffff' }}
          >
            GitHub
          </a>
          <a 
            href="mailto:mirabelle.doiron@gmail.com?subject=Portfolio%20Inquiry%20-%20Senior%20Frontend%20Engineer" 
            className="flex items-center px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity" 
            style={{ backgroundColor: 'transparent', color: '#ffffff', border: '2px solid #ffffff' }}
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
