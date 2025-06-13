import React from "react";
import useScrollAnimations from "../useScrollAnimations";

export default function Projects() {
  useScrollAnimations();
  return (
    <main className="py-16">
      <section className="w-[70%] mx-auto bg-black">
        <h1 className="text-3xl font-bold text-[#ffffff] mb-2 animate-slide-in-left">Projektek</h1>
        <div className="bg-black text-white rounded-xl my-4 p-6 shadow-lg animate-slide-in-up">
          <h2 className="text-xl font-bold text-white animate-slide-in-left">Vállalati Szoftverkereső Rendszer (Szakdolgozat)</h2>
          <p className="text-white mb-4 animate-slide-in-right">
            Ez az első nagyobb projektem, amely a szakdolgozatom keretében készült, és egy modern, vállalati szoftverkereső rendszer fejlesztését tűzte ki célul. A projekt során teljes körűen végigmentem a szoftverfejlesztés minden fontosabb lépésén, az üzleti igények felmérésétől kezdve az adatbázis tervezésén át a felhasználói felület kialakításáig.
          </p>
          <ul className="list-disc ml-6">
            <li className="animate-slide-in-up">Szoftverek keresése, szűrése és összehasonlítása.</li>
            <li className="animate-slide-in-up">Felhasználói értékelések és vélemények megtekintése, beküldése.</li>
            <li className="animate-slide-in-up">Adminisztrációs felület a szoftverek és kategóriák kezelésére.</li>
          </ul>
          <p className="text-white mt-4 animate-slide-in-right">
            <a href="http://vallalatiszoftverkereso.runasp.net" target='_blank' className="text-white underline italic">A projekt elérhető ezen a linken: </a>
          </p>
        </div>
        <h1 className="text-3xl font-bold text-[#ffffff] mb-2 mt-12 animate-slide-in-left">Jövőbeli Projektötletek</h1>
        <div className="bg-black text-white rounded-xl my-4 p-6 shadow-lg animate-slide-in-up">
          <h2 className="text-xl font-bold text-white animate-slide-in-left">Online Oktatási Platform</h2>
          <p className="text-white mb-4 animate-slide-in-right">
            Egy webes alkalmazás, amely lehetővé teszi tanfolyamok létrehozását, kezelést és a tanulók számára való hozzáférést. A rendszer tartalmazhat videókat, teszteket, és tanulási statisztikákat.
          </p>
        </div>
        <div className="bg-black text-white rounded-xl my-4 p-6 shadow-lg animate-slide-in-up">
          <h2 className="text-xl font-bold text-white animate-slide-in-left">Időmenedzsment Alkalmazás</h2>
          <p className="text-white mb-4 animate-slide-in-right">
            Egy mobilbarát alkalmazás, amely segíti a felhasználókat napi feladataik és időbeosztásuk kezelésében. Tartalmazhat értesítéseket, statisztikákat és integrációt naptárakkal.
          </p>
        </div>
        <div className="bg-black text-white rounded-xl my-4 p-6 shadow-lg animate-slide-in-up">
          <h2 className="text-xl font-bold text-white animate-slide-in-left">E-commerce Weboldal</h2>
          <p className="text-white mb-4 animate-slide-in-right">
            Egy modern webshop, amely lehetővé teszi termékek böngészését, vásárlását és fizetési integrációt. Tartalmazhat adminisztrációs felületet a termékek kezelésére.
          </p>
        </div>
      </section>
    </main>
  );
}