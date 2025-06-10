// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      background: '#282c34'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Logo" style={{ height: 40, marginRight: 16 }} />
        <span style={{ color: '#61dafb', fontWeight: 'bold', fontSize: 22 }}>MyApp</span>
      </div>
      <div>
        <Link to="/" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>Home</Link>
        <Link to="/about" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>About</Link>
        <Link to="/projects" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>Projects</Link>
        <Link to="/experience" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>Experience</Link>
        <Link to="/contact" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
