// Navbar.js
import React from 'react';
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
        <a href="#" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>Home</a>
        <a href="#" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>About</a>
        <a href="#" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
