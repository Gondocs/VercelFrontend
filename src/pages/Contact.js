import React from 'react';

const contactInfo = {
  email: 'john.doe@email.com',
  github: 'https://github.com/johndoe',
  linkedin: 'https://linkedin.com/in/johndoe',
};

function ContactForm({ className }) {
  return (
    <form className={`flex flex-col gap-3 bg-black text-white rounded-lg shadow-lg p-6 ${className || ''}`.trim()}>
      <input type="text" placeholder="Your Name" required className="bg-[#181a1b] text-white border border-[#444] rounded px-4 py-2 focus:border-[#61dafb] outline-none" />
      <input type="email" placeholder="Your Email" required className="bg-[#181a1b] text-white border border-[#444] rounded px-4 py-2 focus:border-[#61dafb] outline-none" />
      <textarea placeholder="Your Message" rows={4} required className="bg-[#181a1b] text-white border border-[#444] rounded px-4 py-2 focus:border-[#61dafb] outline-none" />
      <button type="submit" className="bg-[#61dafb] text-[#181a1b] font-bold rounded px-4 py-2 mt-2 hover:bg-[#4ec6e6] transition">Send Message</button>
    </form>
  );
}

function ContactLinks({ className }) {
  return (
    <div className={`flex gap-4 bg-black text-white rounded-lg shadow-lg p-4 mt-4 ${className || ''}`.trim()}>
      <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-[#61dafb] hover:underline">GitHub</a>
      <span>|</span>
      <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#61dafb] hover:underline">LinkedIn</a>
    </div>
  );
}

export default function Contact() {
  return (
    <main className="py-8">
      <section className="w-[75%] max-w-4xl mx-auto bg-black rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-white mb-2">Minimalist Style</h2>
        <p className="text-white mb-4">
          Contact me at <a href={`mailto:${contactInfo.email}`} className="text-white underline">{contactInfo.email}</a>
        </p>
        <ContactForm />
        <ContactLinks />
      </section>
    </main>
  );
}
