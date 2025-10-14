import React from "react";
import useScrollAnimations from "../useScrollAnimations";

export default function Projects() {
  useScrollAnimations();
  return (
    <main className="py-16 relative">
      <section className="w-[75%] mx-auto">
        <h1 className="text-5xl font-bold gradient-text mb-8 animate-slide-in-left">Projektek</h1>
        
        <div className="glow-border text-white rounded-xl my-6 p-8 shadow-lg animate-slide-in-up hover:shadow-primary/50 transition-all duration-300">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent animate-slide-in-left mb-3">
            Vállalati Szoftverkereső Rendszer (Szakdolgozat)
          </h2>
          <p className="text-gray-300 mb-6 animate-slide-in-right leading-relaxed">
            Ez az első nagyobb projektem, amely a szakdolgozatom keretében készült, és egy modern, vállalati szoftverkereső rendszer fejlesztését tűzte ki célul. A projekt során teljes körűen végigmentem a szoftverfejlesztés minden fontosabb lépésén, az üzleti igények felmérésétől kezdve az adatbázis tervezésén át a felhasználói felület kialakításáig.
          </p>
          <ul className="list-none ml-0 space-y-3">
            <li className="animate-slide-in-up flex items-start">
              <span className="text-primary mr-3 text-xl">▹</span>
              <span className="text-gray-300">Szoftverek keresése, szűrése és összehasonlítása.</span>
            </li>
            <li className="animate-slide-in-up flex items-start">
              <span className="text-primary mr-3 text-xl">▹</span>
              <span className="text-gray-300">Felhasználói értékelések és vélemények megtekintése, beküldése.</span>
            </li>
            <li className="animate-slide-in-up flex items-start">
              <span className="text-primary mr-3 text-xl">▹</span>
              <span className="text-gray-300">Adminisztrációs felület a szoftverek és kategóriák kezelésére.</span>
            </li>
          </ul>
          <p className="text-gray-300 mt-6 animate-slide-in-right">
            <a href="http://vallalatiszoftverkereso.runasp.net" target='_blank' className="text-primary hover:text-accent underline italic transition-colors duration-300">
              A projekt elérhető ezen a linken →
            </a>
          </p>
        </div>
        
        <h1 className="text-4xl font-bold gradient-text mb-8 mt-16 animate-slide-in-left">Jövőbeli Projektötletek</h1>
        
        <div className="gradient-card text-white rounded-xl my-6 p-8 shadow-lg animate-slide-in-up hover:shadow-accent/50 transition-all duration-300">
          <h2 className="text-2xl font-bold text-white animate-slide-in-left mb-3">Online Oktatási Platform</h2>
          <p className="text-gray-300 mb-4 animate-slide-in-right leading-relaxed">
            Egy webes alkalmazás, amely lehetővé teszi tanfolyamok létrehozását, kezelést és a tanulók számára való hozzáférést. A rendszer tartalmazhat videókat, teszteket, és tanulási statisztikákat.
          </p>
        </div>
        
        <div className="gradient-card text-white rounded-xl my-6 p-8 shadow-lg animate-slide-in-up hover:shadow-cyber-blue/50 transition-all duration-300">
          <h2 className="text-2xl font-bold text-white animate-slide-in-left mb-3">Időmenedzsment Alkalmazás</h2>
          <p className="text-gray-300 mb-4 animate-slide-in-right leading-relaxed">
            Egy mobilbarát alkalmazás, amely segíti a felhasználókat napi feladataik és időbeosztásuk kezelésében. Tartalmazhat értesítéseket, statisztikákat és integrációt naptárakkal.
          </p>
        </div>
        
        <div className="gradient-card text-white rounded-xl my-6 p-8 shadow-lg animate-slide-in-up hover:shadow-purple-500/50 transition-all duration-300">
          <h2 className="text-2xl font-bold text-white animate-slide-in-left mb-3">E-commerce Weboldal</h2>
          <p className="text-gray-300 mb-4 animate-slide-in-right leading-relaxed">
            Egy modern webshop, amely lehetővé teszi termékek böngészését, vásárlását és fizetési integrációt. Tartalmazhat adminisztrációs felületet a termékek kezelésére.
          </p>
        </div>
      </section>
    </main>
  );
}