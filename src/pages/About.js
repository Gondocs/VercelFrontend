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
    <main className="main-about">
      <h1 style={{textAlign: 'center', marginBottom: '2rem'}}>Choose Your Favorite About Design</h1>
      <div className="about-variants">
        {/* Card Style */}
        <section className="about-card">
          <h2>Card Style</h2>
          <p>{about.bio}</p>
          <ul>
            {about.skills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </section>
        {/* Bordered Style */}
        <section className="about-bordered">
          <h2>Bordered Style</h2>
          <p>{about.bio}</p>
          <ul>
            {about.skills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </section>
        {/* Dark Style */}
        <section className="about-dark">
          <h2>Dark Style</h2>
          <p>{about.bio}</p>
          <ul>
            {about.skills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </section>
        {/* Minimalist Style */}
        <section className="about-minimal">
          <h2>Minimalist Style</h2>
          <p>{about.bio}</p>
          <ul>
            {about.skills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </section>
        {/* Gradient Style */}
        <section className="about-gradient">
          <h2>Gradient Style</h2>
          <p>{about.bio}</p>
          <ul>
            {about.skills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </section>
      </div>
    </main>
  );
}
