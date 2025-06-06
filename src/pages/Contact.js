import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <main className="main-contact">
      <h1>Contact</h1>
      <p>
        Get in touch with us! Fill out the form below or reach us at <a href="mailto:info@myapp.com">info@myapp.com</a>.
      </p>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message" rows={4} />
        <button type="submit">Send</button>
      </form>
    </main>
  );
}
