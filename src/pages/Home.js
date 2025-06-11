import React from 'react';

const profile = {
  name: 'Göndöcs Róbert',
  title: 'Web- és szoftverfejlesztő & UI/UX tervező',
  description: 'Szenvedélyesen építek gyönyörű, akadálymentes és nagy teljesítményű webalkalmazásokat. Tapasztalt vagyok React, JavaScript és modern webes technológiák terén.',
  image: 'profilkep_CV.jpg',
};

export default function Home() {
  return (
    <main className="py-8">
      <section className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-8">
        <h1 className="text-3xl font-bold text-[#61dafb] mb-2">Üdvözöllek a személyes oldalamon!</h1>
        <p className="text-lg text-[#b0b0b0]">Fedezd fel a munkáimat és tapasztalataimat.</p>
      </section>
      <section className="max-w-2xl mx-auto bg-[#23272a] rounded-xl shadow-lg p-8 flex items-center gap-8">
        <img src={profile.image} alt="Profile" className="w-32 h-32 rounded-full shadow-lg bg-[#181a1b] object-cover" />
        <div>
          <h3 className="text-2xl font-bold text-[#61dafb]">{profile.name}</h3>
          <h4 className="text-lg text-[#e0e0e0]">{profile.title}</h4>
          <p className="text-[#b0b0b0]">{profile.description}</p>
        </div>
      </section>
    </main>
  );
}
