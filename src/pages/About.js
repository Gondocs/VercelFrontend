import React from 'react';
import './About.css';

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
    <main className="main-about dark-section">
        <section className="about-card dark-card">
          <h2 style={{color: '#61dafb'}}>Card Style</h2>
          <p style={{color: '#b0b0b0'}}>{about.bio}</p>
          <ul>
            {about.skills.map(skill => <li key={skill} style={{background: '#23272a', color: '#e0e0e0', borderRadius: 6, margin: '0.3rem 0', padding: '0.3rem 0.7rem'}}>{skill}</li>)}
          </ul>
        </section>
    </main>
  );
}
