import React from 'react';
import useScrollAnimations from '../useScrollAnimations';

export default function Experience() {
  useScrollAnimations();
  return (
    <main className="py-16">
      
      <section className="w-[75%] max-w-4xl mx-auto bg-black">
        <h1 className="text-3xl font-bold text-[#ffffff] mb-2 animate-slide-in-left">Tapasztalat</h1>
        <div className="bg-black text-white rounded-xl my-4 p-6 shadow-lg animate-slide-in-up">
          <h2 className="text-xl font-bold text-white animate-slide-in-left">Frontend fejlesztő</h2>
          <h3 className="text-white mb-2 animate-slide-in-right">Awesome Web Kft. | 2022 - Jelenleg</h3>
          <ul className="list-disc ml-6">
            <li className="animate-slide-in-up">Modern React alkalmazások fejlesztése és karbantartása.</li>
            <li className="animate-slide-in-up">Együttműködés designerekkel a felhasználóbarát felületekért.</li>
            <li className="animate-slide-in-up">Teljesítmény és akadálymentesség optimalizálása.</li>
          </ul>
        </div>
        <div className="bg-black text-white rounded-xl my-4 p-6 shadow-lg animate-slide-in-up">
          <h2 className="text-xl font-bold text-white animate-slide-in-left">Webfejlesztő gyakornok</h2>
          <h3 className="text-white mb-2 animate-slide-in-right">Startup Hub | 2021 - 2022</h3>
          <ul className="list-disc ml-6">
            <li className="animate-slide-in-up">Landing oldalak és dashboardok készítésében való közreműködés.</li>
            <li className="animate-slide-in-up">Reszponzív tervezés legjobb gyakorlatai elsajátítása.</li>
          </ul>
        </div>
        <div className="bg-black text-white rounded-xl my-4 p-6 shadow-lg animate-slide-in-up">
          <h2 className="text-xl font-bold text-white animate-slide-in-left">BSc Programtervező Informatikus</h2>
          <h3 className="text-white mb-2 animate-slide-in-right">Példa Egyetem | 2018 - 2021</h3>
          <ul className="list-disc ml-6">
            <li className="animate-slide-in-up">Kitüntetéssel végeztem.</li>
            <li className="animate-slide-in-up">Webes technológiákra és UI/UX-re specializálódtam.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
