// Homepage.js
import React from 'react';

function Homepage() {
  return (
    <main style={{
      maxWidth: 900,
      margin: '2rem auto',
      padding: '2rem',
      background: '#fff',
      borderRadius: 12,
      boxShadow: '0 2px 16px rgba(0,0,0,0.08)'
    }}>
      <h1 style={{ color: '#282c34', marginBottom: 16 }}>Welcome to MyApp!</h1>
      <p style={{ color: '#444', fontSize: 18 }}>
        This is a beautiful homepage with some dummy data to showcase your app.
      </p>
      <section style={{ marginTop: 32 }}>
        <h2 style={{ color: '#282c34' }}>Featured Items</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{
            background: '#f5f5f5',
            margin: '16px 0',
            padding: '16px',
            borderRadius: 8
          }}>
            <strong>Item One</strong> — Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
          <li style={{
            background: '#f5f5f5',
            margin: '16px 0',
            padding: '16px',
            borderRadius: 8
          }}>
            <strong>Item Two</strong> — Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
          <li style={{
            background: '#f5f5f5',
            margin: '16px 0',
            padding: '16px',
            borderRadius: 8
          }}>
            <strong>Item Three</strong> — Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Homepage;
