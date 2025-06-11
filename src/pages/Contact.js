import React from 'react';
import './Contact.css';

const contactInfo = {
  email: 'john.doe@email.com',
  github: 'https://github.com/johndoe',
  linkedin: 'https://linkedin.com/in/johndoe',
};

function ContactForm({ className }) {
  return (
    <form className={className + ' dark-card'} style={{background: '#23272a', color: '#e0e0e0', borderRadius: 8, boxShadow: '0 2px 12px #0006'}}>
      <input type="text" placeholder="Your Name" required style={{background: '#181a1b', color: '#e0e0e0'}} />
      <input type="email" placeholder="Your Email" required style={{background: '#181a1b', color: '#e0e0e0'}} />
      <textarea placeholder="Your Message" rows={4} required style={{background: '#181a1b', color: '#e0e0e0'}} />
      <button type="submit" style={{background: '#61dafb', color: '#181a1b', fontWeight: 'bold'}}>Send Message</button>
    </form>
  );
}

function ContactLinks({ className }) {
  return (
    <div className={className + ' dark-card'} style={{background: '#23272a', color: '#e0e0e0', borderRadius: 8, boxShadow: '0 2px 12px #0006', padding: '1rem', marginTop: '1rem'}}>
      <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" style={{color: '#61dafb'}}>GitHub</a> |
      <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{color: '#61dafb'}}>LinkedIn</a>
    </div>
  );
}

export default function Contact() {
  return (
    <main className="main-contact dark-section">
        <section className="contact-minimal dark-card">
          <h2 style={{color: '#61dafb'}}>Minimalist Style</h2>
          <p style={{color: '#b0b0b0'}}>Contact me at <a href={`mailto:${contactInfo.email}`} style={{color: '#61dafb'}}>{contactInfo.email}</a></p>
          <ContactForm className="contact-form" />
          <ContactLinks className="contact-links" />
        </section>
    </main>
  );
}
