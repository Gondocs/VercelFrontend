import React from "react";
import useScrollAnimations from "../useScrollAnimations";

const about = {
  bio: "Szenvedélyes frontend fejlesztő vagyok, aki elkötelezett a modern webes technológiák, a letisztult kód és a felhasználóbarát élmények iránt. Szeretek új dolgokat tanulni, problémákat megoldani, és mindig keresem a fejlődési lehetőségeket.",
  frontend: [
    {
      name: "React.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      link: "https://react.dev/",
    },
    {
      name: "JavaScript (ES6+)",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "HTML5 & CSS3",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    },
    {
      name: "Material UI",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      link: "https://mui.com/",
    },
    {
      name: "Tailwind CSS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Bootstrap",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      link: "https://getbootstrap.com/",
    },
    {
      name: "UI/UX Design, Figma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "WordPress",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
      link: "https://wordpress.org/",
    },
  ],
  backend: [
    {
      name: "PHP",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      link: "https://www.php.net/",
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      link: "https://www.mysql.com/",
    },
    {
      name: "MSSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
      link: "https://www.microsoft.com/en-us/sql-server",
    },
    {
      name: "C#",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    },
    {
      name: "Unity",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
      link: "https://unity.com/",
    },
    {
      name: "Plesk",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Logo_Plesk.svg/768px-Logo_Plesk.svg.png?20200804133750",
      link: "https://www.plesk.com/",
    },
  ],
  tools: [
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      link: "https://github.com/",
    },
    {
      name: "GitLab",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
      link: "https://gitlab.com/",
    },
  ],
  data: [
    {
      name: "Google Analytics",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_Google_Analytics.svg",
      link: "https://analytics.google.com/",
    },
    {
      name: "GDPR Cookie",
      logo: "https://cdn-icons-png.flaticon.com/512/1047/1047711.png",
      link: "https://gdpr.eu/cookies/",
    },
    {
      name: "Looker Studio",
      logo: "https://lookerstudio.google.com/favicon.ico",
      link: "https://lookerstudio.google.com/",
    },
  ],
};

export default function About() {
  useScrollAnimations();
  return (
    <main className="py-16">
      <section className="w-[75%] max-w-4xl mx-auto bg-black">
        <h1 className="text-3xl font-bold text-[#ffffff] mb-6 animate-slide-in-left">
          Rólam
        </h1>
        <div className="bg-black text-white rounded-xl my-4 p-6 shadow-lg">
          <p className="text-white mb-4 animate-slide-in-right">{about.bio}</p>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Frontend</h2>
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
          <h2 className="text-2xl font-semibold mt-12 mb-2">Backend</h2>
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
          <h2 className="text-2xl font-semibold mt-12 mb-2">Tools</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
          <h2 className="text-2xl font-semibold mt-12 mb-2">Data & Analytics</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
