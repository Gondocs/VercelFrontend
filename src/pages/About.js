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
    <main className="py-16 relative">
      <section className="w-[75%] mx-auto"> 
        <h1 className="text-5xl font-bold gradient-text mb-8 animate-slide-in-left">
          Rólam
        </h1>
        <div className="glow-border text-white rounded-xl my-4 p-8 shadow-lg">
          <p className="text-gray-300 text-lg mb-8 animate-slide-in-right leading-relaxed">{about.bio}</p>
          
          <h2 className="text-3xl font-semibold mt-12 mb-6 bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">Frontend</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10">
            {about.frontend.map((skill) => (
              <li
                key={skill.name}
                className="flex flex-col items-center gradient-card rounded-lg py-4 px-3 animate-slide-in-up shadow-lg hover:shadow-primary/50 transition-all duration-300"
              >
                <a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <img
                      src={skill.logo}
                      alt={skill.name + " logo"}
                      width={48}
                      height={48}
                      loading="lazy"
                      className="relative w-12 h-12 mb-3 transition-transform group-hover:scale-125 group-hover:rotate-6 duration-300"
                    />
                  </div>
                  <span className="text-sm text-center text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                </a>
              </li>
            ))}
          </ul>
          
          <h2 className="text-3xl font-semibold mt-12 mb-6 bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">Backend</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10">
            {about.backend.map((skill) => (
              <li
                key={skill.name}
                className="flex flex-col items-center gradient-card rounded-lg py-4 px-3 animate-slide-in-up shadow-lg hover:shadow-accent/50 transition-all duration-300"
              >
                <a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <img
                      src={skill.logo}
                      alt={skill.name + " logo"}
                      width={48}
                      height={48}
                      loading="lazy"
                      className="relative w-12 h-12 mb-3 transition-transform group-hover:scale-125 group-hover:rotate-6 duration-300"
                    />
                  </div>
                  <span className="text-sm text-center text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                </a>
              </li>
            ))}
          </ul>
          
          <h2 className="text-3xl font-semibold mt-12 mb-6 bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">Eszközök</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10">
            {about.tools.map((tool) => (
              <li
                key={tool.name}
                className="flex flex-col items-center gradient-card rounded-lg py-4 px-3 animate-slide-in-up shadow-lg hover:shadow-cyber-blue/50 transition-all duration-300"
              >
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 to-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <img
                      src={tool.logo}
                      alt={tool.name + " logo"}
                      width={48}
                      height={48}
                      loading="lazy"
                      className="relative w-12 h-12 mb-3 transition-transform group-hover:scale-125 group-hover:rotate-6 duration-300"
                    />
                  </div>
                  <span className="text-sm text-center text-gray-300 group-hover:text-white transition-colors">{tool.name}</span>
                </a>
              </li>
            ))}
          </ul>
          
          <h2 className="text-3xl font-semibold mt-12 mb-6 bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">Adat & Analitika</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-6">
            {about.data.map((item) => (
              <li
                key={item.name}
                className="flex flex-col items-center gradient-card rounded-lg py-4 px-3 animate-slide-in-up shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <img
                      src={item.logo}
                      alt={item.name + " logo"}
                      width={48}
                      height={48}
                      loading="lazy"
                      className="relative w-12 h-12 mb-3 transition-transform group-hover:scale-125 group-hover:rotate-6 duration-300"
                    />
                  </div>
                  <span className="text-sm text-center text-gray-300 group-hover:text-white transition-colors">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
