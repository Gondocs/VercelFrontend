import React from "react";
import useScrollAnimations from "../useScrollAnimations";

export default function Projects() {
  useScrollAnimations();
  return (
    <main className="py-20 relative">
      <section className="max-w-6xl mx-auto px-6">
        {/* Section Header - Centered */}
        <div className="text-center mb-16 animate-slide-in-down">
          <h1 className="text-6xl font-black gradient-text mb-6">Projektek</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
        </div>
        
        {/* Main Project */}
        <div className="glow-border text-white rounded-2xl p-10 mb-20 shadow-2xl animate-slide-in-up group max-w-5xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="text-6xl">💼</div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-2">
                Vállalati Szoftverkereső Rendszer
              </h2>
              <span className="inline-block bg-white/10 text-gray-300 px-4 py-1 rounded-full text-sm font-medium">
                Szakdolgozat
              </span>
            </div>
          </div>
          
          <p className="text-gray-300 mb-8 leading-relaxed text-lg border-l-4 border-white/20 pl-6">
            Ez az első nagyobb projektem, amely a szakdolgozatom keretében készült, és egy modern, vállalati szoftverkereső rendszer fejlesztését tűzte ki célul. A projekt során teljes körűen végigmentem a szoftverfejlesztés minden fontosabb lépésén, az üzleti igények felmérésétől kezdve az adatbázis tervezésén át a felhasználói felület kialakításáig.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="text-white font-bold mb-2">⚡ Keresés & Szűrés</div>
              <div className="text-sm text-gray-400">Szoftverek keresése és összehasonlítása</div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="text-white font-bold mb-2">💬 Értékelések</div>
              <div className="text-sm text-gray-400">Vélemények megtekintése, beküldése</div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="text-white font-bold mb-2">🔧 Admin Panel</div>
              <div className="text-sm text-gray-400">Teljes körű tartalom kezelés</div>
            </div>
          </div>
          
          <a 
            href="http://vallalatiszoftverkereso.runasp.net" 
            target='_blank'
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-gray-300 font-semibold transition-colors duration-300 group"
          >
            <span>Projekt megtekintése</span>
            <span className="transform group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>
        
        {/* Future Projects Header */}
        <div className="text-center mb-12 animate-slide-in-down">
          <h2 className="text-5xl font-black text-white mb-6">Jövőbeli Projektötletek</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
        </div>
        
        {/* Future Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="gradient-card text-white rounded-2xl p-8 animate-slide-in-up">
            <div className="text-5xl mb-4">🎓</div>
            <h3 className="text-2xl font-bold text-white mb-4">Online Oktatási Platform</h3>
            <p className="text-gray-300 leading-relaxed">
              Tanfolyamok létrehozása, videók, tesztek, és tanulási statisztikák modern környezetben.
            </p>
          </div>
          
          <div className="gradient-card text-white rounded-2xl p-8 animate-slide-in-up" style={{animationDelay: '0.1s'}}>
            <div className="text-5xl mb-4">⏰</div>
            <h3 className="text-2xl font-bold text-white mb-4">Időmenedzsment App</h3>
            <p className="text-gray-300 leading-relaxed">
              Mobilbarát alkalmazás feladatok kezelésére értesítésekkel és naptár integrációval.
            </p>
          </div>
          
          <div className="gradient-card text-white rounded-2xl p-8 animate-slide-in-up" style={{animationDelay: '0.2s'}}>
            <div className="text-5xl mb-4">🛒</div>
            <h3 className="text-2xl font-bold text-white mb-4">E-commerce Webshop</h3>
            <p className="text-gray-300 leading-relaxed">
              Modern webáruház termékek böngészésével, fizetési integrációval és admin felülettel.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}