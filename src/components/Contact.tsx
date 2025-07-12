import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="py-20 px-6" style={{ backgroundColor: '#193441' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8" style={{ color: '#ffffff' }}>Contact Me</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#ffffff' }}>
          I'm actively seeking opportunities as a Frontend Engineer, Mobile Developer, or Full-Stack Developer with a focus on AI-powered applications.
        </p>
        
        <div className="flex justify-center space-x-6">
          <a href="mailto:mirabelle.doiron@gmail.com?subject=Portfolio%20Inquiry%20-%20Frontend%20Engineer%20Opportunity" className="flex items-center px-6 py-3 rounded hover:opacity-80 transition-opacity" style={{ backgroundColor: '#b9d6e2', color: '#193441' }}>
            <span className="mr-2">Email Me</span>
          </a>
           <a href="https://www.linkedin.com/in/mirabelle-doiron-84955a28/" className="flex items-center px-6 py-3 rounded hover:opacity-80 transition-opacity" style={{ backgroundColor: '#193441', color: '#ffffff', border: '1px solid #b9d6e2' }}>
            <span className="mr-2">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;