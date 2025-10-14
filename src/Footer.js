// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="glass backdrop-blur-md bg-opacity-10 text-white text-center py-8 border-t border-cyan-500/30 shadow-2xl mt-12 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-cyber-blue/5 pointer-events-none"></div>
      <div className="text-base text-gray-300 relative z-10">
        &copy; {new Date().getFullYear()} | <a href='https://www.gondocsrobert.hu' target='_blank' className="text-primary hover:text-accent transition-colors duration-300 underline">gondocsrobert.hu</a>
      </div>
    </footer>
  );
}

export default Footer;
