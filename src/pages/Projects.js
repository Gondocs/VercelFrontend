import React from 'react';
import useScrollAnimations from '../useScrollAnimations';

const projects = [
  {
    title: 'Személyes Portfólió Weboldal',
    desc: 'Egy modern, reszponzív portfólió, React és styled-components segítségével. Bemutatja a készségeimet, projektjeimet és elérhetőségeimet.',
    link: '#',
  },
  {
    title: 'Feladatkezelő Alkalmazás',
    desc: 'Teljes körű MERN alkalmazás a napi feladatok kezelésére, hitelesítéssel és valós idejű frissítésekkel.',
    link: '#',
  },
  {
    title: 'API Integrációs Bemutató',
    desc: 'React alkalmazás, amely bemutatja a harmadik féltől származó API-k integrációját és a dinamikus adatok vizualizációját.',
    link: '#',
  },
];

export default function Projects() {
  useScrollAnimations();
  return (
    <main className="py-16">
        
      {/* Példa magyar projektek listára */}
      <section className="w-[75%] max-w-4xl mx-auto bg-black">
        <h1 className="text-3xl font-bold text-[#ffffff] mb-6 animate-slide-in-left">Projektek</h1>
        <div className="bg-black text-white rounded-xl my-4 p-6 shadow-lg animate-slide-in-up">
          <h2 className="text-xl font-bold text-white animate-slide-in-left">Webshop alkalmazás</h2>
          <p className="text-white mb-2 animate-slide-in-right">React, Node.js, MongoDB</p>
          <ul className="list-disc ml-6">
            <li className="animate-slide-in-up">Teljes körű webáruház fejlesztése Reacttel.</li>
            <li className="animate-slide-in-up">Felhasználói fiókok, kosár, fizetés integráció.</li>
          </ul>
        </div>
        {projects.map(p => (
          <div key={p.title} className="bg-black text-white rounded-lg shadow-md my-4 p-6 animate-slide-in-up">
            <h3 className="text-xl font-bold text-white animate-slide-in-left">{p.title}</h3>
            <p className="text-white animate-slide-in-right">{p.desc}</p>
            <a href={p.link} className="text-white underline animate-slide-in-up">Projekt megtekintése</a>
          </div>
        ))}
      </section>
    </main>
  );
}
