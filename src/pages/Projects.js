import React from 'react';
import './Projects.css';

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
    <main className="main-projects dark-section">
      <div className="projects-variants">
        {/* Card Style */}
        <section className="projects-card dark-card">
          <h2 style={{color: '#61dafb'}}>Card Style</h2>
          <div className="projects-list">
            {projects.map(p => (
              <div className="project-card" key={p.title} style={{background: '#23272a', color: '#e0e0e0', borderRadius: 8, boxShadow: '0 2px 12px #0006', margin: '1rem 0', padding: '1rem'}}>
                <h3 style={{color: '#61dafb'}}>{p.title}</h3>
                <p style={{color: '#b0b0b0'}}>{p.desc}</p>
                <a href={p.link} style={{color: '#61dafb'}}>View Project</a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
