// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white text-center py-8 border-t-4 border-black shadow-inner mt-12">
      <div className="mb-4 flex justify-center gap-8">
        <a href="#" className="text-white underline font-bold text-lg hover:text-white transition">Privacy Policy</a>
        <a href="#" className="text-white underline font-bold text-lg hover:text-white transition">Terms of Service</a>
      </div>
      <div className="text-base text-white">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
