import React from 'react';
import './Contact.css';

const contactInfo = {
  email: 'john.doe@email.com',
  github: 'https://github.com/johndoe',
  linkedin: 'https://linkedin.com/in/johndoe',
};

function ContactForm({ className }) {
  return (
    <form className={className}>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" rows={4} required />
      <button type="submit">Send Message</button>
    </form>
  );
}

function ContactLinks({ className }) {
  return (
    <div className={className}>
      <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a> |
      <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  );
}

export default function Contact() {
  return (
    <main className="main-contact">
      <h1 style={{textAlign: 'center', marginBottom: '2rem'}}>Choose Your Favorite Contact Design</h1>
      <div className="contact-variants">
        {/* Card Style */}
        <section className="contact-card">
          <h2>Card Style</h2>
          <p>Contact me at <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
          <ContactForm className="contact-form" />
          <ContactLinks className="contact-links" />
        </section>
        {/* Bordered Style */}
        <section className="contact-bordered">
          <h2>Bordered Style</h2>
          <p>Contact me at <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
          <ContactForm className="contact-form" />
          <ContactLinks className="contact-links" />
        </section>
        {/* Dark Style */}
        <section className="contact-dark">
          <h2>Dark Style</h2>
          <p>Contact me at <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
          <ContactForm className="contact-form" />
          <ContactLinks className="contact-links" />
        </section>
        {/* Minimalist Style */}
        <section className="contact-minimal">
          <h2>Minimalist Style</h2>
          <p>Contact me at <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
          <ContactForm className="contact-form" />
          <ContactLinks className="contact-links" />
        </section>
        {/* Gradient Style */}
        <section className="contact-gradient">
          <h2>Gradient Style</h2>
          <p>Contact me at <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
          <ContactForm className="contact-form" />
          <ContactLinks className="contact-links" />
        </section>
      </div>
    </main>
  );
}
