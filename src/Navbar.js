// Navbar.js
import React from 'react';
import logo from './logo.svg';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-black shadow-lg border-b-2 border-black sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="h-12 w-12 mr-2 rounded-full border-2 border-black shadow" />
        <span className="text-white font-extrabold text-2xl tracking-wide drop-shadow">MyApp</span>
      </div>
      <div className="flex space-x-8">
        <a href="#home" className="text-white hover:text-white border-b-2 border-transparent hover:border-white transition text-lg font-medium px-2 py-1">Home</a>
        <a href="#about" className="text-white hover:text-white border-b-2 border-transparent hover:border-white transition text-lg font-medium px-2 py-1">About</a>
        <a href="#projects" className="text-white hover:text-white border-b-2 border-transparent hover:border-white transition text-lg font-medium px-2 py-1">Projects</a>
        <a href="#experience" className="text-white hover:text-white border-b-2 border-transparent hover:border-white transition text-lg font-medium px-2 py-1">Experience</a>
        <a href="#contact" className="text-white hover:text-white border-b-2 border-transparent hover:border-white transition text-lg font-medium px-2 py-1">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
