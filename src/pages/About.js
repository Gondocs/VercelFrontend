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
    <main className="py-16">
      <section className="w-[75%] mx-auto bg-black"> 
        <h1 className="text-3xl font-bold text-[#ffffff] mb-2 animate-slide-in-left">
          Rólam
        </h1>
        <div className="bg-black text-white rounded-xl my-4 p-6 shadow-lg">
          <p className="text-white mb-4 animate-slide-in-right text-lg">{about.bio}</p>
          <h2 className="text-2xl font-semibold mt-20 mb-2">Frontend</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            {about.frontend.map((skill) => (
              <li
                key={skill.name}
                className="flex flex-col items-center bg-black text-white rounded-md py-3 px-2 animate-slide-in-up shadow"
              >
                <a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name + " logo"}
                    className="w-10 h-10 mb-2 transition-transform group-hover:scale-110"
                  />
                  <span className="text-sm text-center">{skill.name}</span>
                </a>
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold mt-20 mb-2">Backend</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            {about.backend.map((skill) => (
              <li
                key={skill.name}
                className="flex flex-col items-center bg-black text-white rounded-md py-3 px-2 animate-slide-in-up shadow"
              >
                <a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name + " logo"}
                    className="w-10 h-10 mb-2 transition-transform group-hover:scale-110"
                  />
                  <span className="text-sm text-center">{skill.name}</span>
                </a>
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold mt-20 mb-2">Eszközök</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            {about.tools.map((tool) => (
              <li
                key={tool.name}
                className="flex flex-col items-center bg-black text-white rounded-md py-3 px-2 animate-slide-in-up shadow"
              >
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group"
                >
                  <img
                    src={tool.logo}
                    alt={tool.name + " logo"}
                    className="w-10 h-10 mb-2 transition-transform group-hover:scale-110"
                  />
                  <span className="text-sm text-center">{tool.name}</span>
                </a>
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold mt-20 mb-2">Adat & Analitika</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            {about.data.map((item) => (
              <li
                key={item.name}
                className="flex flex-col items-center bg-black text-white rounded-md py-3 px-2 animate-slide-in-up shadow"
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group"
                >
                  <img
                    src={item.logo}
                    alt={item.name + " logo"}
                    className="w-10 h-10 mb-2 transition-transform group-hover:scale-110"
                  />
                  <span className="text-sm text-center">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
