import React from 'react';
import useScrollAnimations from '../useScrollAnimations';

export default function Experience() {
  useScrollAnimations();
  return (
    <main className="py-20 relative">
      <section className="w-[85%] mx-auto">
        {/* Section Header */}
        <div className="mb-16 animate-slide-in-left">
          <h1 className="text-6xl font-black gradient-text mb-4">Tapasztalat</h1>
          <div className="h-1 w-32 bg-gradient-to-r from-white to-transparent"></div>
        </div>
        
        {/* Timeline */}
        <div className="space-y-12">
          {/* KTS Online Kft. */}
          <div className="gradient-card text-white rounded-2xl p-10 shadow-2xl animate-slide-in-up relative">
            <div className="absolute -left-4 top-10 w-8 h-8 bg-white rounded-full border-4 border-black"></div>
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="text-5xl mb-2">💼</div>
                <div className="inline-block bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                  JELENLEGI
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-2">Webfejlesztő</h2>
                <h3 className="text-xl text-gray-400 mb-6">KTS Online Kft. • 2024. január – Jelenleg</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-white font-semibold mb-2">🌐 WordPress Fejlesztés</div>
                    <div className="text-sm text-gray-400">Weboldalak fejlesztése és karbantartása</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-white font-semibold mb-2">⚡ Custom kódolás</div>
                    <div className="text-sm text-gray-400">JavaScript és egyedi megoldások</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-white font-semibold mb-2">🤝 Ügyfélkapcsolat</div>
                    <div className="text-sm text-gray-400">Technikai támogatás és kommunikáció</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-white font-semibold mb-2">🔧 PHP Development</div>
                    <div className="text-sm text-gray-400">Backend fejlesztések, Divi, Elementor</div>
                  </div>
                </div>
                
                <a href="https://kts.hu" target='_blank' className="inline-flex items-center gap-2 text-white hover:text-gray-300 font-semibold mt-6 transition-colors group">
                  <span>kts.hu</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* GYSEV Zrt. */}
          <div className="gradient-card text-white rounded-2xl p-10 shadow-2xl animate-slide-in-up relative">
            <div className="absolute -left-4 top-10 w-8 h-8 bg-gray-400 rounded-full border-4 border-black"></div>
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="text-5xl mb-2">🎓</div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-2">Gyakornok</h2>
                <h3 className="text-xl text-gray-400 mb-6">GYSEV Zrt. • 2023. május – 2023. szeptember</h3>
                
                <div className="bg-white/5 p-6 rounded-lg">
                  <div className="text-white font-semibold mb-2">⚛️ React Fejlesztés</div>
                  <div className="text-gray-400">React alapú belső feladatokat ellátó szoftver fejlesztése, modern webes technológiák alkalmazása</div>
                </div>
                
                <a href="https://hu.gysev.hu" target='_blank' className="inline-flex items-center gap-2 text-white hover:text-gray-300 font-semibold mt-6 transition-colors group">
                  <span>hu.gysev.hu</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* BSc */}
          <div className="gradient-card text-white rounded-2xl p-10 shadow-2xl animate-slide-in-up relative">
            <div className="absolute -left-4 top-10 w-8 h-8 bg-gray-500 rounded-full border-4 border-black"></div>
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="text-5xl mb-2">🎓</div>
                <div className="inline-block bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                  TANULMÁNYOK
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-2">Mérnökinformatikus BSc</h2>
                <h3 className="text-xl text-gray-400 mb-6">Széchenyi István Egyetem • 2021. augusztus – 2025. június</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-white font-semibold mb-2">📍 Helyszín</div>
                    <div className="text-sm text-gray-400">Egyetem tér 1., 9026 Győr</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-white font-semibold mb-2">🌐 Intézmény</div>
                    <div className="text-sm text-gray-400">
                      <a href="https://www.uni.sze.hu" target='_blank' className="hover:text-white transition-colors">
                        uni.sze.hu
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
