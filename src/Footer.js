// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer style={{
      background: '#282c34',
      color: '#fff',
      textAlign: 'center',
      padding: '1.5rem 0',
      borderTop: '4px solid #61dafb',
      boxShadow: '0 -2px 16px rgba(0,0,0,0.06)'
    }}>
      <div style={{ marginBottom: 8 }}>
        <a href="#" style={{ color: '#61dafb', margin: '0 1rem', textDecoration: 'underline', fontWeight: 'bold' }}>Privacy Policy</a>
        <a href="#" style={{ color: '#61dafb', margin: '0 1rem', textDecoration: 'underline', fontWeight: 'bold' }}>Terms of Service</a>
      </div>
      <div style={{ fontSize: 15 }}>
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
