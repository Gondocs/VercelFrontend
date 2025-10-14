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
    <main className="py-12 min-h-screen relative">
      <section
        className={`mx-auto glow-border p-10 mb-10 animate-slide-in-up${
          !isMobile ? " w-[75%]" : "w-[95%]"
        }`}
      >
        <h1 className={`font-extrabold gradient-text mb-6 text-center drop-shadow-lg animate-slide-in-left ${
          !isMobile ? "text-6xl" : "text-3xl"
        }`}>
          Üdvözöllek a személyes oldalamon!
        </h1>
        <p className="text-xl text-gray-300 text-center mb-2 animate-slide-in-right">
          Fedezd fel a munkáimat és tapasztalataimat.
        </p>
      </section>
      
      <section
        className={`mx-auto gradient-card rounded-2xl shadow-2xl p-10 flex flex-col md:flex-row items-center gap-10 animate-slide-in-up${
          !isMobile ? " w-[75%]" : "w-[95%]"
        }`}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-50 animate-pulse-slow"></div>
          <img
            src={profile.image}
            alt="Profile"
            width={224}
            height={224}
            loading="eager"
            className="relative w-56 h-56 rounded-full shadow-2xl border-4 border-primary/50 object-cover transition-transform duration-300 hover:scale-110 animate-slide-in-left"
          />
        </div>
        
        <div className="flex-1 text-center md:text-left animate-slide-in-right">
          <h3 className="text-4xl font-extrabold text-white mb-2 drop-shadow-lg">
            {profile.name}
          </h3>
          <h4 className="text-2xl bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent mb-4 font-semibold">
            {profile.title}
          </h4>
          <p className="text-gray-300 leading-relaxed text-lg">
            {profile.description}
          </p>
        </div>
      </section>
    </main>
  );
}
