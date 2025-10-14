// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="glass backdrop-blur-md bg-opacity-10 text-white text-center py-12 border-t border-white/10 shadow-2xl mt-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-gray-500/5 to-white/5 pointer-events-none"></div>
      <div className="text-base text-gray-400 relative z-10">
        &copy; {new Date().getFullYear()} | <a href='https://www.gondocsrobert.hu' target='_blank' rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-300 font-semibold">gondocsrobert.hu</a>
      </div>
    </footer>
  );
}

export default Footer;
