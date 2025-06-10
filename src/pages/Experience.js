import React from 'react';
import './Experience.css';

export default function Experience() {
  return (
    <main className="main-experience">
      <h1>Experience</h1>
      <section className="experience-list">
        <div className="experience-item">
          <h2>Frontend Developer</h2>
          <h3>Awesome Web Co. | 2022 - Present</h3>
          <ul>
            <li>Developed and maintained modern React applications.</li>
            <li>Collaborated with designers to create engaging UIs.</li>
            <li>Optimized performance and accessibility.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h2>Web Development Intern</h2>
          <h3>Startup Hub | 2021 - 2022</h3>
          <ul>
            <li>Assisted in building landing pages and dashboards.</li>
            <li>Learned best practices in responsive design.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h2>BSc Computer Science</h2>
          <h3>University of Example | 2018 - 2021</h3>
          <ul>
            <li>Graduated with honors.</li>
            <li>Specialized in web technologies and UI/UX.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
