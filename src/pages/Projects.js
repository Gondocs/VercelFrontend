import React from 'react';

const projects = [
  {
    title: 'Personal Portfolio Website',
    desc: 'A modern, responsive portfolio built with React and styled-components. Showcases my skills, projects, and contact info.',
    link: '#',
  },
  {
    title: 'Task Manager App',
    desc: 'Full-stack MERN app for managing daily tasks, with authentication and real-time updates.',
    link: '#',
  },
  {
    title: 'API Integration Demo',
    desc: 'React app demonstrating integration with third-party APIs and dynamic data visualization.',
    link: '#',
  },
];

export default function Projects() {
  return (
    <main className="py-8">
      <section className="max-w-2xl mx-auto bg-[#23272a] rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-[#61dafb] mb-4">Card Style</h2>
        <div>
          {projects.map(p => (
            <div key={p.title} className="bg-[#181a1b] text-[#e0e0e0] rounded-lg shadow-md my-4 p-6">
              <h3 className="text-xl font-bold text-[#61dafb]">{p.title}</h3>
              <p className="text-[#b0b0b0]">{p.desc}</p>
              <a href={p.link} className="text-[#61dafb] underline">View Project</a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
