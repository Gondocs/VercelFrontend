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
    <main className="main-projects">
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Choose Your Favorite Projects Design</h1>
      <div className="projects-variants">
        {/* Card Style */}
        <section className="projects-card">
          <h2>Card Style</h2>
          <div className="projects-list">
            {projects.map(p => (
              <div className="project-card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a href={p.link}>View Project</a>
              </div>
            ))}
          </div>
        </section>
        {/* Bordered Style */}
        <section className="projects-bordered">
          <h2>Bordered Style</h2>
          <div className="projects-list">
            {projects.map(p => (
              <div className="project-card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a href={p.link}>View Project</a>
              </div>
            ))}
          </div>
        </section>
        {/* Dark Style */}
        <section className="projects-dark">
          <h2>Dark Style</h2>
          <div className="projects-list">
            {projects.map(p => (
              <div className="project-card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a href={p.link}>View Project</a>
              </div>
            ))}
          </div>
        </section>
        {/* Minimalist Style */}
        <section className="projects-minimal">
          <h2>Minimalist Style</h2>
          <div className="projects-list">
            {projects.map(p => (
              <div className="project-card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a href={p.link}>View Project</a>
              </div>
            ))}
          </div>
        </section>
        {/* Gradient Style */}
        <section className="projects-gradient">
          <h2>Gradient Style</h2>
          <div className="projects-list">
            {projects.map(p => (
              <div className="project-card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a href={p.link}>View Project</a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
