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
      <section className="w-[75%] max-w-4xl mx-auto bg-black rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Card Style</h2>
        <div>
          {projects.map(p => (
            <div key={p.title} className="bg-black text-white rounded-lg shadow-md my-4 p-6">
              <h3 className="text-xl font-bold text-white">{p.title}</h3>
              <p className="text-white">{p.desc}</p>
              <a href={p.link} className="text-white underline">View Project</a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
