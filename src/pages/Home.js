import React from 'react';
import useScrollAnimations from '../useScrollAnimations';

const profile = {
  name: 'Göndöcs Róbert',
  title: 'Web- és szoftverfejlesztő & UI/UX tervező',
  description: 'Szenvedélyesen építek gyönyörű, akadálymentes és nagy teljesítményű webalkalmazásokat. Tapasztalt vagyok React, JavaScript és modern webes technológiák terén.',
  image: 'profilkep_CV.webp',
};

export default function Home() {
  useScrollAnimations();
  return (
    <main className="py-12 bg-gradient-to-b from-black to-black min-h-screen">
      <section className="w-[75%] mx-auto bg-black rounded-2xl shadow-2xl p-10 mb-10 border border-black animate-slide-in-up">
        <h1 className="text-4xl font-extrabold text-white mb-3 text-center drop-shadow-lg animate-slide-in-left">Üdvözöllek a személyes oldalamon!</h1>
        <p className="text-xl text-white text-center mb-2 animate-slide-in-right">Fedezd fel a munkáimat és tapasztalataimat.</p>
      </section>
      <section className="w-[75%] mx-auto bg-black rounded-2xl shadow-2xl p-10 flex flex-col md:flex-row items-center gap-10 border border-black animate-slide-in-up">
        <img src={profile.image} alt="Profile" className="w-56 h-56 rounded-full shadow-2xl border-4 border-black object-cover bg-black transition-transform duration-300 hover:scale-105 animate-slide-in-left" />
        <div className="flex-1 text-center md:text-left animate-slide-in-right">
          <h3 className="text-3xl font-extrabold text-white mb-2 drop-shadow">{profile.name}</h3>
          <h4 className="text-xl text-white mb-2 font-semibold">{profile.title}</h4>
          <p className="text-lg text-white leading-relaxed">{profile.description}</p>
        </div>
      </section>
    </main>
  );
}
