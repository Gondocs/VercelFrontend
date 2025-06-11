// Navbar.js
import React from 'react';
import logo from './logo.svg';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#23272a] shadow-md">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 mr-4" />
        <span className="text-[#61dafb] font-bold text-xl">MyApp</span>
      </div>
      <div className="flex space-x-6">
        <a href="#home" className="text-[#e0e0e0] hover:text-[#61dafb] border-b-2 border-transparent hover:border-[#61dafb] transition">Home</a>
        <a href="#about" className="text-[#e0e0e0] hover:text-[#61dafb] border-b-2 border-transparent hover:border-[#61dafb] transition">About</a>
        <a href="#projects" className="text-[#e0e0e0] hover:text-[#61dafb] border-b-2 border-transparent hover:border-[#61dafb] transition">Projects</a>
        <a href="#experience" className="text-[#e0e0e0] hover:text-[#61dafb] border-b-2 border-transparent hover:border-[#61dafb] transition">Experience</a>
        <a href="#contact" className="text-[#e0e0e0] hover:text-[#61dafb] border-b-2 border-transparent hover:border-[#61dafb] transition">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
