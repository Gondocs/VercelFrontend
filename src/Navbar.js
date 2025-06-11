// Navbar.js
import React from 'react';
import logo from './logo.svg';

function Navbar() {
  return (
    <nav className="navbar-dark" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      background: '#282c34'
    }}>
      <div className="navbar-logo" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Logo" style={{ height: 40, marginRight: 16 }} />
        <span className="navbar-title" style={{ color: '#61dafb', fontWeight: 'bold', fontSize: 22 }}>MyApp</span>
      </div>
      <div className="navbar-links">
        <a href="#home" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>Home</a>
        <a href="#about" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>About</a>
        <a href="#projects" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>Projects</a>
        <a href="#experience" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>Experience</a>
        <a href="#contact" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
