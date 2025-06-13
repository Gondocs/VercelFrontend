import React from 'react';
import useScrollAnimations from '../useScrollAnimations';

export default function Experience() {
  useScrollAnimations();
  return (
    <main className="py-16">
      
      <section className="w-[75%] mx-auto bg-black">
        <h1 className="text-3xl font-bold text-[#ffffff] mb-2 animate-slide-in-left">Tapasztalat</h1>
        {/* KTS Online Kft. */}
        <div className="bg-black text-white rounded-xl my-4 p-6 shadow-lg animate-slide-in-up">
          <h2 className="text-xl font-bold text-white animate-slide-in-left">Webfejlesztő</h2>
          <h3 className="text-white mb-2 animate-slide-in-right">KTS Online Kft. | 2024. január – Jelenleg</h3>
          <ul className="list-disc ml-6">
            <li className="animate-slide-in-up">WordPress alapú weboldalak fejlesztése és karbantartása.</li>
            <li className="animate-slide-in-up">Egyedi JavaScript és saját kódok készítése ügyféligények alapján.</li>
            <li className="animate-slide-in-up">Ügyfélkapcsolattartás és technikai támogatás.</li>
            <li className="animate-slide-in-up">Webhelybiztonság és optimalizálás.</li>
            <li className="animate-slide-in-up">PHP alapú fejlesztések.</li>
            <li className="animate-slide-in-up">Divi és Elementor használata a weboldalak testreszabásához.</li>
            <li className="animate-slide-in-up">
              Webhely: <a href="https://kts.hu" target='_blank' className="text-white underline">https://kts.hu</a>
            </li>
          </ul>
        </div>
        {/* GYSEV Zrt. */}
        <div className="bg-black text-white rounded-xl my-4 p-6 shadow-lg animate-slide-in-up">
          <h2 className="text-xl font-bold text-white animate-slide-in-left">Gyakornok</h2>
          <h3 className="text-white mb-2 animate-slide-in-right">GYSEV Zrt. | 2023. május – 2023. szeptember</h3>
          <ul className="list-disc ml-6">
            <li className="animate-slide-in-up">React alapú belső feladatokat ellátó szoftver fejlesztése.</li>
            <li className="animate-slide-in-up">
              Webhely: <a href="https://hu.gysev.hu" target='_blank' className="text-white underline">https://hu.gysev.hu</a>
            </li>
          </ul>
        </div>
        {/* BSc */}
        <div className="bg-black text-white rounded-xl my-4 p-6 shadow-lg animate-slide-in-up">
          <h2 className="text-xl font-bold text-white animate-slide-in-left">Mérnökinformatikus BSc</h2>
          <h3 className="text-white mb-2 animate-slide-in-right">Széchenyi István Egyetem | 2021. augusztus – 2025. június</h3>
          <ul className="list-disc ml-6">
            <li className="animate-slide-in-up">Cím: Egyetem tér 1., 9026 Győr (Magyarország)</li>
            <li className="animate-slide-in-up">
              Webhely: <a href="https://www.uni.sze.hu" target='_blank' className="text-white underline">https://www.uni.sze.hu</a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
