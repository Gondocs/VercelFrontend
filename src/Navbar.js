// Navbar.js
import React, { useEffect, useState } from 'react';

function Navbar({ isMobile }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Smooth scroll for anchor links
    const handleClick = e => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        const id = e.target.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if (el) {
          e.preventDefault();
          setMenuOpen(false); // close menu on link click
          window.scrollTo({
            top: el.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth',
          });
        }
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    // Highlight nav link for current section
    const sectionIds = ['home', 'about', 'projects', 'experience', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      let current = 'home';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
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
