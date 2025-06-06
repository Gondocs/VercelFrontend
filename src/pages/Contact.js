import React from 'react';

export default function Contact() {
  return (
    <main style={{
      maxWidth: 900,
      margin: '2rem auto',
      padding: '2rem',
      background: '#fff',
      borderRadius: 12,
      boxShadow: '0 2px 16px rgba(0,0,0,0.08)'
    }}>
      <h1 style={{ color: '#282c34', marginBottom: 16 }}>Contact</h1>
      <p style={{ color: '#444', fontSize: 18 }}>
        Get in touch with us! Fill out the form below or reach us at <a href="mailto:info@myapp.com" style={{ color: '#61dafb' }}>info@myapp.com</a>.
      </p>
      <form style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
        <input type="text" placeholder="Your Name" style={{ padding: 10, borderRadius: 6, border: '1px solid #ccc' }} />
        <input type="email" placeholder="Your Email" style={{ padding: 10, borderRadius: 6, border: '1px solid #ccc' }} />
        <textarea placeholder="Your Message" rows={4} style={{ padding: 10, borderRadius: 6, border: '1px solid #ccc' }} />
        <button type="submit" style={{ padding: 12, borderRadius: 6, background: '#61dafb', color: '#fff', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Send</button>
      </form>
    </main>
  );
}
