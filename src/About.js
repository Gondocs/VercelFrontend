import React from 'react';
import useScrollAnimations from '../useScrollAnimations';

const contactInfo = {
  email: 'john.doe@email.com',
  github: 'https://github.com/johndoe',
  linkedin: 'https://linkedin.com/in/johndoe',
};

function ContactForm({ className }) {
  return (
    <form className={`flex flex-col gap-3 bg-black text-white rounded-lg shadow-lg p-6 ${className || ''}`.trim()}>
      <input type="text" placeholder="Neved" required className="bg-[#181a1b] text-white border border-[#444] rounded px-4 py-2 focus:border-[#61dafb] outline-none" />
      <input type="email" placeholder="Email címed" required className="bg-[#181a1b] text-white border border-[#444] rounded px-4 py-2 focus:border-[#61dafb] outline-none" />
      <textarea placeholder="Üzeneted" rows={4} required className="bg-[#181a1b] text-white border border-[#444] rounded px-4 py-2 focus:border-[#61dafb] outline-none" />
      <button type="submit" className="bg-[#61dafb] text-[#181a1b] font-bold rounded px-4 py-2 mt-2 hover:bg-[#4ec6e6] transition">Üzenet küldése</button>
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
  useScrollAnimations();
  return (
    <main className="py-8">
      <section className="w-[75%] max-w-4xl mx-auto bg-black rounded-xl shadow-lg p-8 animate-slide-in-up">
        <h2 className="text-2xl font-bold text-white mb-2 animate-slide-in-left">Minimalista Stílus</h2>
        <p className="text-white mb-4 animate-slide-in-right">
          Lépj kapcsolatba velem a következő címen: <a href={`mailto:${contactInfo.email}`} className="text-white underline animate-slide-in-up">{contactInfo.email}</a>
        </p>
        <ContactForm className="animate-slide-in-up" />
        <ContactLinks className="animate-slide-in-up" />
      </section>
    </main>
  );
}