import React from 'react';
import useScrollAnimations from '../useScrollAnimations';

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
  useScrollAnimations();
  return (
    <main className="py-8">
      <section className="w-[75%] max-w-4xl mx-auto bg-black rounded-xl shadow-lg p-8 animate-slide-in-up">
        <h2 className="text-2xl font-bold text-white mb-4 animate-slide-in-left">Card Style</h2>
        <div>
          {projects.map(p => (
            <div key={p.title} className="bg-black text-white rounded-lg shadow-md my-4 p-6 animate-slide-in-up">
              <h3 className="text-xl font-bold text-white animate-slide-in-left">{p.title}</h3>
              <p className="text-white animate-slide-in-right">{p.desc}</p>
              <a href={p.link} className="text-white underline animate-slide-in-up">View Project</a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
