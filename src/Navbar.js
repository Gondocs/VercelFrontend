// Navbar.js
import React, { useEffect, useState } from 'react';

function Navbar({ isMobile }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Only highlight nav link for section currently in view
    const sectionIds = ['home', 'about', 'projects', 'experience', 'contact'];
    function handleScroll() {
      const scrollPos = window.scrollY + 100;
      let found = false;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(id);
          found = true;
          break;
        }
      }
      if (!found) setActiveSection('');
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = (
    <>
      <a href="#home" className={`nav-underline text-white text-xl font-bold${activeSection==='home' ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>Home</a>
      <a href="#about" className={`nav-underline text-white text-xl font-bold${activeSection==='about' ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>About</a>
      <a href="#projects" className={`nav-underline text-white text-xl font-bold${activeSection==='projects' ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>Projects</a>
      <a href="#experience" className={`nav-underline text-white text-xl font-bold${activeSection==='experience' ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>Experience</a>
      <a href="#contact" className={`nav-underline text-white text-xl font-bold${activeSection==='contact' ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>Contact</a>
    </>
  );

  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-black shadow-lg border-b-2 border-black sticky top-0 z-50">
      <a href="#home" className="flex-shrink-0 ml-20">
        <img src="/GR_logo.png" alt="Logo" style={{ height: '120px', width: 'auto', marginLeft:'30px',}} />
      </a>
      <div className="flex space-x-8">
        {navLinks}
      </div>
    </nav>
  );
}

export default Navbar;
