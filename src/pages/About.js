import React from 'react';

const about = {
  bio: "Hi! I'm John Doe, a frontend developer with a love for clean code and engaging user experiences. I enjoy solving problems and learning new technologies.",
  skills: [
    'React.js',
    'JavaScript (ES6+)',
    'HTML5 & CSS3',
    'UI/UX Design',
    'Figma & Adobe XD',
    'Git & GitHub',
  ],
};

export default function About() {
  return (
    <main className="py-8">
      <section className="max-w-2xl mx-auto bg-[#23272a] rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-[#61dafb] mb-4">Card Style</h2>
        <p className="text-[#b0b0b0] mb-4">{about.bio}</p>
        <ul>
          {about.skills.map(skill => (
            <li key={skill} className="bg-[#181a1b] text-[#e0e0e0] rounded-md my-1 py-1 px-3">{skill}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
