import React from 'react';
import { tokens } from '../tokens';

const Footer = () => {
  return (
    <footer className="py-8 px-6" style={{ backgroundColor: tokens.colors.bg.footer }}>
      <div className="max-w-4xl mx-auto text-center">
        <p style={{ color: tokens.colors.text.light }}>
          © 2025 - Mirabelle Doiron
        </p>
      </div>
    </footer>
  );
};

export default Footer;
