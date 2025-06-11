// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#23272a] text-white text-center py-6 border-t-4 border-[#61dafb] shadow-inner">
      <div className="mb-2">
        <a href="#" className="text-[#61dafb] mx-4 underline font-bold">Privacy Policy</a>
        <a href="#" className="text-[#61dafb] mx-4 underline font-bold">Terms of Service</a>
      </div>
      <div className="text-base">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
