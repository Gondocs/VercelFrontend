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
      <section className={`mx-auto w-full ${!isMobile ? 'max-w-6xl' : 'w-[95%]'}`}>
        {/* Welcome Message - Centered and Compact */}
        <div className="text-center mb-16 animate-slide-in-down max-w-4xl mx-auto">
          <h1 className={`font-black gradient-text mb-6 tracking-tight leading-tight ${
            !isMobile ? "text-6xl" : "text-4xl"
          }`}>
            Üdvözöllek a személyes oldalamon!
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6"></div>
          <p className={`text-gray-400 leading-relaxed ${!isMobile ? "text-xl" : "text-lg"}`}>
            Fedezd fel a munkáimat és tapasztalataimat egy modern, <span className="text-white font-semibold">professzionális</span> környezetben.
          </p>
        </div>
        
        {/* Profile Section - Centered Layout */}
        <div className="max-w-5xl mx-auto">
          {/* Profile Image */}
          <div className="flex justify-center mb-12 animate-slide-in-up">
            <div className="relative group">
              {/* Decorative element */}
              <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-gray-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-white via-gray-400 to-white rounded-full opacity-20 blur-sm"></div>
              <img
                src={profile.image}
                alt="Profile"
                width={280}
                height={280}
                loading="eager"
                className="relative w-64 h-64 rounded-full object-cover border-4 border-white/10 transition-all duration-500 group-hover:scale-105 group-hover:border-white/30"
              />
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-white rounded-tr-full opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-white rounded-bl-full opacity-50"></div>
            </div>
          </div>
          
          {/* Profile Info Card */}
          <div className="gradient-card p-10 animate-slide-in-up">
            <div className="space-y-6">
              {/* Name and Title */}
              <div className="text-center">
                <h3 className="text-5xl font-black text-white mb-3 tracking-tight">
                  {profile.name}
                </h3>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-white"></div>
                  <h4 className="text-2xl text-gray-300 font-light tracking-wider uppercase">
                    {profile.title}
                  </h4>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-white"></div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-300 leading-relaxed text-lg text-center max-w-3xl mx-auto">
                {profile.description}
              </p>
              
              {/* Stats - Redesigned with better spacing */}
              <div className="pt-8 border-t border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                  <div className="text-center group">
                    <div className="mb-3">
                      <div className="text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform">3+</div>
                      <div className="h-1 w-12 bg-gradient-to-r from-white to-transparent mx-auto"></div>
                    </div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">
                      Év tapasztalat
                    </div>
                  </div>
                  
                  <div className="text-center group md:border-l md:border-r border-white/10">
                    <div className="mb-3">
                      <div className="text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform">80+</div>
                      <div className="h-1 w-12 bg-gradient-to-r from-white to-transparent mx-auto"></div>
                    </div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">
                      Elkészített weboldal
                    </div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="mb-3">
                      <div className="text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform">5+</div>
                      <div className="h-1 w-12 bg-gradient-to-r from-white to-transparent mx-auto"></div>
                    </div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">
                      Technológia
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
