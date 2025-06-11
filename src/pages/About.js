import React from "react";
import useScrollAnimations from "../useScrollAnimations";

const about = {
  bio: "Hi! I'm John Doe, a frontend developer with a love for clean code and engaging user experiences. I enjoy solving problems and learning new technologies.",
  skills: [
    "React.js",
    "JavaScript (ES6+)",
    "HTML5 & CSS3",
    "UI/UX Design",
    "Figma & Adobe XD",
    "Git & GitHub",
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
          <ul>
            {about.skills.map((skill) => (
              <li
                key={skill}
                className="bg-black text-white rounded-md my-1 py-1 px-3 animate-slide-in-up"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
