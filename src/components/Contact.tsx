import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="py-20 px-6" style={{ backgroundColor: '#193441' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8" style={{ color: '#ffffff' }}>Get in Touch</h2>
        
        <div className="flex justify-center flex-wrap gap-4">
          <a 
            href="https://www.linkedin.com/in/mirabelle-doiron-84955a28/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 rounded hover:opacity-80 transition-opacity" 
            style={{ backgroundColor: '#b9d6e2', color: '#193441' }}
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/mirabelle514" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 rounded hover:opacity-80 transition-opacity" 
            style={{ backgroundColor: '#193441', color: '#ffffff', border: '1px solid #b9d6e2' }}
          >
            GitHub
          </a>
          <a 
            href="mailto:mirabelle.doiron@gmail.com?subject=Portfolio%20Inquiry%20-%20Senior%20Frontend%20Engineer" 
            className="flex items-center px-6 py-3 rounded hover:opacity-80 transition-opacity" 
            style={{ backgroundColor: '#193441', color: '#ffffff', border: '1px solid #b9d6e2' }}
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
