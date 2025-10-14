import React from 'react';
import useScrollAnimations from '../useScrollAnimations';

export default function Experience() {
  useScrollAnimations();
  return (
    <main className="py-16 relative">
      <section className="w-[75%] mx-auto">
        <h1 className="text-5xl font-bold gradient-text mb-8 animate-slide-in-left">Tapasztalat</h1>
        
        {/* KTS Online Kft. */}
        <div className="gradient-card text-white rounded-xl my-6 p-8 shadow-lg animate-slide-in-up hover:shadow-primary/50 transition-all duration-300">
          <h2 className="text-2xl font-bold text-white animate-slide-in-left mb-2">Webfejlesztő</h2>
          <h3 className="text-lg text-primary-light mb-4 animate-slide-in-right">KTS Online Kft. | 2024. január – Jelenleg</h3>
          <ul className="list-none ml-0 space-y-3">
            <li className="animate-slide-in-up flex items-start">
              <span className="text-primary mr-3 text-xl">▹</span>
              <span className="text-gray-300">WordPress alapú weboldalak fejlesztése és karbantartása.</span>
            </li>
            <li className="animate-slide-in-up flex items-start">
              <span className="text-primary mr-3 text-xl">▹</span>
              <span className="text-gray-300">Egyedi JavaScript és saját kódok készítése ügyféligények alapján.</span>
            </li>
            <li className="animate-slide-in-up flex items-start">
              <span className="text-primary mr-3 text-xl">▹</span>
              <span className="text-gray-300">Ügyfélkapcsolattartás és technikai támogatás.</span>
            </li>
            <li className="animate-slide-in-up flex items-start">
              <span className="text-primary mr-3 text-xl">▹</span>
              <span className="text-gray-300">Webhelybiztonság és optimalizálás.</span>
            </li>
            <li className="animate-slide-in-up flex items-start">
              <span className="text-primary mr-3 text-xl">▹</span>
              <span className="text-gray-300">PHP alapú fejlesztések.</span>
            </li>
            <li className="animate-slide-in-up flex items-start">
              <span className="text-primary mr-3 text-xl">▹</span>
              <span className="text-gray-300">Divi és Elementor használata a weboldalak testreszabásához.</span>
            </li>
            <li className="animate-slide-in-up flex items-start">
              <span className="text-primary mr-3 text-xl">▹</span>
              <span className="text-gray-300">
                Webhely: <a href="https://kts.hu" target='_blank' className="text-primary hover:text-accent underline transition-colors duration-300">https://kts.hu</a>
              </span>
            </li>
          </ul>
        </div>
        
        {/* GYSEV Zrt. */}
        <div className="gradient-card text-white rounded-xl my-6 p-8 shadow-lg animate-slide-in-up hover:shadow-accent/50 transition-all duration-300">
          <h2 className="text-2xl font-bold text-white animate-slide-in-left mb-2">Gyakornok</h2>
          <h3 className="text-lg text-accent-light mb-4 animate-slide-in-right">GYSEV Zrt. | 2023. május – 2023. szeptember</h3>
          <ul className="list-none ml-0 space-y-3">
            <li className="animate-slide-in-up flex items-start">
              <span className="text-accent mr-3 text-xl">▹</span>
              <span className="text-gray-300">React alapú belső feladatokat ellátó szoftver fejlesztése.</span>
            </li>
            <li className="animate-slide-in-up flex items-start">
              <span className="text-accent mr-3 text-xl">▹</span>
              <span className="text-gray-300">
                Webhely: <a href="https://hu.gysev.hu" target='_blank' className="text-accent hover:text-primary underline transition-colors duration-300">https://hu.gysev.hu</a>
              </span>
            </li>
          </ul>
        </div>
        
        {/* BSc */}
        <div className="gradient-card text-white rounded-xl my-6 p-8 shadow-lg animate-slide-in-up hover:shadow-cyber-blue/50 transition-all duration-300">
          <h2 className="text-2xl font-bold text-white animate-slide-in-left mb-2">Mérnökinformatikus BSc</h2>
          <h3 className="text-lg text-cyber-blue mb-4 animate-slide-in-right">Széchenyi István Egyetem | 2021. augusztus – 2025. június</h3>
          <ul className="list-none ml-0 space-y-3">
            <li className="animate-slide-in-up flex items-start">
              <span className="text-cyber-blue mr-3 text-xl">▹</span>
              <span className="text-gray-300">Cím: Egyetem tér 1., 9026 Győr (Magyarország)</span>
            </li>
            <li className="animate-slide-in-up flex items-start">
              <span className="text-cyber-blue mr-3 text-xl">▹</span>
              <span className="text-gray-300">
                Webhely: <a href="https://www.uni.sze.hu" target='_blank' className="text-cyber-blue hover:text-accent underline transition-colors duration-300">https://www.uni.sze.hu</a>
              </span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
