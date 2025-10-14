import React from "react";
import useScrollAnimations from "../useScrollAnimations";
import { useMediaQuery } from "react-responsive";

const profile = {
  name: "Göndöcs Róbert",
  title: "Web- és szoftverfejlesztő",
  description:
    "Tapasztalt web- és szoftverfejlesztő, elkötelezett a modern technológiák alkalmazása iránt. Szenvedélyem a letisztult, akadálymentes és nagy teljesítményű webalkalmazások építése, különös tekintettel a React és JavaScript, Typescript alapú megoldásokra. Jelenleg főként Wordpress alapú weboldalak fejlesztésével foglalkozom, de mindig nyitott vagyok új kihívásokra és lehetőségekre.",
  image: "profilkep_CV.webp",
};

export default function Home() {
  useScrollAnimations();
  const isMobile = useMediaQuery({ maxWidth: 810 });

  return (
    <main className="py-20 min-h-screen relative flex items-center">
      {/* Hero Section with Modern Layout */}
      <section className={`mx-auto w-full ${!isMobile ? 'w-[80%]' : 'w-[95%]'}`}>
        <div className="glow-border p-12 mb-12 animate-slide-in-down">
          <h1 className={`font-black gradient-text mb-4 tracking-tight leading-tight ${
            !isMobile ? "text-7xl" : "text-4xl"
          }`}>
            Üdvözöllek a<br />személyes oldalamon!
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-white to-transparent mb-6"></div>
          <p className="text-2xl text-gray-400 max-w-2xl animate-slide-in-right">
            Fedezd fel a munkáimat és tapasztalataimat egy modern, <span className="text-white font-semibold">professzionális</span> környezetben.
          </p>
        </div>
        
        {/* Profile Card with Better Layout */}
        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Profile Image Section */}
          <div className="md:col-span-2 flex justify-center animate-slide-in-left">
            <div className="relative group">
              {/* Decorative element */}
              <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-gray-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-white via-gray-400 to-white rounded-full opacity-20 blur-sm"></div>
              <img
                src={profile.image}
                alt="Profile"
                width={320}
                height={320}
                loading="eager"
                className="relative w-80 h-80 rounded-full object-cover border-4 border-white/10 transition-all duration-500 group-hover:scale-105 group-hover:border-white/30"
              />
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-white rounded-tr-full opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-white rounded-bl-full opacity-50"></div>
            </div>
          </div>
          
          {/* Profile Info Section */}
          <div className="md:col-span-3 gradient-card p-10 animate-slide-in-right">
            <div className="space-y-6">
              <div>
                <h3 className="text-5xl font-black text-white mb-3 tracking-tight">
                  {profile.name}
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-white to-transparent"></div>
                  <h4 className="text-2xl text-gray-300 font-light tracking-wider uppercase">
                    {profile.title}
                  </h4>
                  <div className="h-px flex-1 bg-gradient-to-l from-white to-transparent"></div>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-lg border-l-4 border-white/30 pl-6">
                {profile.description}
              </p>
              
              {/* Stats or highlights */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">2+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Év tapasztalat</div>
                </div>
                <div className="text-center border-l border-r border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">20+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Projekt</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">∞</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Lehetőség</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
