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
    <main className="py-12 bg-gradient-to-b from-black to-black min-h-screen">
      <section
        className={`mx-auto bg-black rounded-2xl shadow-2xl p-10 mb-10 border border-black animate-slide-in-up${
          !isMobile ? " w-[75%]" : "w-[95%]"
        }`}
      >
        <h1 className={`text-5xl font-extrabold text-white mb-6 text-center drop-shadow-lg animate-slide-in-left ${
          !isMobile ? "text-5xl" : "text-2xl"
        }`}>
          Üdvözöllek a személyes oldalamon!
        </h1>
        <p className="text-xl text-white text-center mb-2 animate-slide-in-right">
          Fedezd fel a munkáimat és tapasztalataimat.
        </p>
      </section>
      <section
        className={`mx-auto bg-black rounded-2xl shadow-2xl p-10 flex flex-col md:flex-row items-center gap-10 border border-black animate-slide-in-up${
          !isMobile ? " w-[75%]" : "w-[95%]"
        }`}
      >
        {" "}
        <img
          src={profile.image}
          alt="Profile"
          width={224}
          height={224}
          loading="eager"
          className="w-56 h-56 rounded-full shadow-2xl border-4 border-black object-cover bg-black transition-transform duration-300 hover:scale-105 animate-slide-in-left"
        />
        <div className="flex-1 text-center md:text-left animate-slide-in-right">
          <h3 className="text-3xl font-extrabold text-white mb-2 drop-shadow">
            {profile.name}
          </h3>
          <h4 className="text-xl text-white mb-2 font-semibold">
            {profile.title}
          </h4>
          <p className="text-white leading-relaxed">
            {profile.description}
          </p>
        </div>
      </section>
    </main>
  );
}
