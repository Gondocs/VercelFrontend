// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white text-center py-8 border-t-4 border-white shadow-inner mt-12">

      <div className="text-base text-white">&copy; {new Date().getFullYear()} | <a href='www.gondocsrobert.hu' target='_blank'>gondocsrobert.hu</a></div>
    </footer>
  );
}

export default Footer;
