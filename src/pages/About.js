import React from 'react';
import './About.css';

export default function About() {
  return (
    <main className="main-about">
      <h1>About Us</h1>
      <p>
        We are a passionate team building modern web applications with React.
      </p>
      <section>
        <h2>Our Team</h2>
        <ul>
          <li>
            <strong>Jane Doe</strong><br />Frontend Developer<br />Loves UI/UX and React.
          </li>
          <li>
            <strong>John Smith</strong><br />Backend Developer<br />API wizard and database expert.
          </li>
          <li>
            <strong>Alex Lee</strong><br />Full Stack Developer<br />Bridges frontend and backend.
          </li>
        </ul>
      </section>
    </main>
  );
}
