import React from 'react';

export default function About() {
  return (
    <main style={{
      maxWidth: 900,
      margin: '2rem auto',
      padding: '2rem',
      background: '#fff',
      borderRadius: 12,
      boxShadow: '0 2px 16px rgba(0,0,0,0.08)'
    }}>
      <h1 style={{ color: '#282c34', marginBottom: 16 }}>About Us</h1>
      <p style={{ color: '#444', fontSize: 18 }}>
        We are a passionate team building modern web applications with React.
      </p>
      <section style={{ marginTop: 32 }}>
        <h2 style={{ color: '#282c34' }}>Our Team</h2>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 24 }}>
          <li style={{
            background: '#e9ecef',
            padding: '16px',
            borderRadius: 8,
            flex: 1
          }}>
            <strong>Jane Doe</strong><br />Frontend Developer<br />Loves UI/UX and React.
          </li>
          <li style={{
            background: '#e9ecef',
            padding: '16px',
            borderRadius: 8,
            flex: 1
          }}>
            <strong>John Smith</strong><br />Backend Developer<br />API wizard and database expert.
          </li>
          <li style={{
            background: '#e9ecef',
            padding: '16px',
            borderRadius: 8,
            flex: 1
          }}>
            <strong>Alex Lee</strong><br />Full Stack Developer<br />Bridges frontend and backend.
          </li>
        </ul>
      </section>
    </main>
  );
}
