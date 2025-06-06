import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <main className="main-home">
      <h1>Welcome to MyApp!</h1>
      <p>
        This is a beautiful homepage with some dummy data to showcase your app.
      </p>
      <section>
        <h2>Featured Items</h2>
        <ul>
          <li>
            <strong>Item One</strong> — Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
          <li>
            <strong>Item Two</strong> — Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
          <li>
            <strong>Item Three</strong> — Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </li>
        </ul>
      </section>
    </main>
  );
}
