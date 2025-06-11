import React from 'react';
import './Experience.css';

export default function Experience() {
  return (
    <main className="main-experience dark-section">
      <h1 style={{color: '#61dafb'}}>Experience</h1>
      <section className="experience-list">
        <div className="experience-item" style={{background: '#23272a', color: '#e0e0e0', borderRadius: 8, margin: '1rem 0', padding: '1rem', boxShadow: '0 2px 12px #0006'}}>
          <h2 style={{color: '#61dafb'}}>Frontend Developer</h2>
          <h3 style={{color: '#b0b0b0'}}>Awesome Web Co. | 2022 - Present</h3>
          <ul>
            <li>Developed and maintained modern React applications.</li>
            <li>Collaborated with designers to create engaging UIs.</li>
            <li>Optimized performance and accessibility.</li>
          </ul>
        </div>
        <div className="experience-item" style={{background: '#23272a', color: '#e0e0e0', borderRadius: 8, margin: '1rem 0', padding: '1rem', boxShadow: '0 2px 12px #0006'}}>
          <h2 style={{color: '#61dafb'}}>Web Development Intern</h2>
          <h3 style={{color: '#b0b0b0'}}>Startup Hub | 2021 - 2022</h3>
          <ul>
            <li>Assisted in building landing pages and dashboards.</li>
            <li>Learned best practices in responsive design.</li>
          </ul>
        </div>
        <div className="experience-item" style={{background: '#23272a', color: '#e0e0e0', borderRadius: 8, margin: '1rem 0', padding: '1rem', boxShadow: '0 2px 12px #0006'}}>
          <h2 style={{color: '#61dafb'}}>BSc Computer Science</h2>
          <h3 style={{color: '#b0b0b0'}}>University of Example | 2018 - 2021</h3>
          <ul>
            <li>Graduated with honors.</li>
            <li>Specialized in web technologies and UI/UX.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
