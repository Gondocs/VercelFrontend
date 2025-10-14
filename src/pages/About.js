import React from "react";
import useScrollAnimations from "../useScrollAnimations";

const about = {
  bio: "Szenvedélyes frontend fejlesztő vagyok, aki elkötelezett a modern webes technológiák, a letisztult kód és a felhasználóbarát élmények iránt. Szeretek új dolgokat tanulni, problémákat megoldani, és mindig keresem a fejlődési lehetőségeket.",
  frontend: [
    {
      name: "React.js",
      logo: "react-original.svg",
      link: "https://react.dev/",
    },
    {
      name: "JavaScript (ES6+)",
      logo: "javascript-original.svg",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "TypeScript",
      logo: "typescript-original.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "HTML5 & CSS3",
      logo: "html5-original.svg",
      link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    },
    {
      name: "Material UI",
      logo: "materialui-original.svg",
      link: "https://mui.com/",
    },
    {
      name: "Tailwind CSS",
      logo: "Tailwind_CSS_Logo.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Bootstrap",
      logo: "bootstrap-original.svg",
      link: "https://getbootstrap.com/",
    },
    {
      name: "UI/UX Design, Figma",
      logo: "figma-original.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "WordPress",
      logo: "wordpress-original.svg",
      link: "https://wordpress.org/",
    },
  ],
  backend: [
    {
      name: "PHP",
      logo: "php-original.svg",
      link: "https://www.php.net/",
    },
    {
      name: "MySQL",
      logo: "mysql-original.svg",
      link: "https://www.mysql.com/",
    },
    {
      name: "MSSQL",
      logo: "microsoftsqlserver-plain.svg",
      link: "https://www.microsoft.com/en-us/sql-server",
    },
    {
      name: "C#",
      logo: "csharp-original.svg",
      link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    },
    {
      name: "Unity",
      logo: "unity-original.svg",
      link: "https://unity.com/",
    },
    {
      name: "Plesk",
      logo: "plesk-logo.svg",
      link: "https://www.plesk.com/",
    },
  ],
  tools: [
    {
      name: "Git",
      logo: "git-original.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "GitHub",
      logo: "github-original.svg",
      link: "https://github.com/",
    },
    {
      name: "GitLab",
      logo: "gitlab-original.svg",
      link: "https://gitlab.com/",
    },
  ],
  data: [
    {
      name: "Google Analytics",
      logo: "google_analytics-icon.svg",
      link: "https://analytics.google.com/",
    },
    {
      name: "GDPR Cookie",
      logo: "cookie-icon.svg",
      link: "https://gdpr.eu/cookies/",
    },
    {
      name: "Looker Studio",
      logo: "looker-icon.svg",
      link: "https://lookerstudio.google.com/",
    },
  ],
};

export default function About() {
  useScrollAnimations();
  return (
    <main className="py-20 relative">
      <section className="w-[85%] mx-auto">
        {/* Section Header */}
        <div className="mb-16 animate-slide-in-left">
          <h1 className="text-6xl font-black gradient-text mb-4">
            Rólam
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-white to-transparent"></div>
        </div>
        
        <div className="glow-border text-white rounded-2xl p-12 shadow-2xl">
          <p className="text-gray-300 text-xl mb-16 animate-slide-in-right leading-relaxed max-w-4xl">
            {about.bio}
          </p>
          
          {/* Frontend Skills */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-4">
              <span className="text-5xl">⚡</span>
              Frontend
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {about.frontend.map((skill) => (
                <li
                  key={skill.name}
                  className="flex flex-col items-center gradient-card rounded-xl py-6 px-4 animate-slide-in-up shadow-lg group"
                >
                  <a
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center w-full"
                  >
                    <div className="relative mb-4 p-4 bg-white/5 rounded-lg group-hover:bg-white/10 transition-all">
                      <img
                        src={skill.logo}
                        alt={skill.name + " logo"}
                        width={56}
                        height={56}
                        loading="lazy"
                        className="w-14 h-14 transition-transform group-hover:scale-110 duration-300"
                      />
                    </div>
                    <span className="text-sm text-center text-gray-300 group-hover:text-white transition-colors font-medium">
                      {skill.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="section-divider"></div>
          
          {/* Backend Skills */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-4">
              <span className="text-5xl">🔧</span>
              Backend
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {about.backend.map((skill) => (
                <li
                  key={skill.name}
                  className="flex flex-col items-center gradient-card rounded-xl py-6 px-4 animate-slide-in-up shadow-lg group"
                >
                  <a
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center w-full"
                  >
                    <div className="relative mb-4 p-4 bg-white/5 rounded-lg group-hover:bg-white/10 transition-all">
                      <img
                        src={skill.logo}
                        alt={skill.name + " logo"}
                        width={56}
                        height={56}
                        loading="lazy"
                        className="w-14 h-14 transition-transform group-hover:scale-110 duration-300"
                      />
                    </div>
                    <span className="text-sm text-center text-gray-300 group-hover:text-white transition-colors font-medium">
                      {skill.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="section-divider"></div>
          
          {/* Tools */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-4">
              <span className="text-5xl">🛠️</span>
              Eszközök
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {about.tools.map((tool) => (
                <li
                  key={tool.name}
                  className="flex flex-col items-center gradient-card rounded-xl py-6 px-4 animate-slide-in-up shadow-lg group"
                >
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center w-full"
                  >
                    <div className="relative mb-4 p-4 bg-white/5 rounded-lg group-hover:bg-white/10 transition-all">
                      <img
                        src={tool.logo}
                        alt={tool.name + " logo"}
                        width={56}
                        height={56}
                        loading="lazy"
                        className="w-14 h-14 transition-transform group-hover:scale-110 duration-300"
                      />
                    </div>
                    <span className="text-sm text-center text-gray-300 group-hover:text-white transition-colors font-medium">
                      {tool.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="section-divider"></div>
          
          {/* Data & Analytics */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-4">
              <span className="text-5xl">📊</span>
              Adat & Analitika
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {about.data.map((item) => (
                <li
                  key={item.name}
                  className="flex flex-col items-center gradient-card rounded-xl py-6 px-4 animate-slide-in-up shadow-lg group"
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center w-full"
                  >
                    <div className="relative mb-4 p-4 bg-white/5 rounded-lg group-hover:bg-white/10 transition-all">
                      <img
                        src={item.logo}
                        alt={item.name + " logo"}
                        width={56}
                        height={56}
                        loading="lazy"
                        className="w-14 h-14 transition-transform group-hover:scale-110 duration-300"
                      />
                    </div>
                    <span className="text-sm text-center text-gray-300 group-hover:text-white transition-colors font-medium">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
