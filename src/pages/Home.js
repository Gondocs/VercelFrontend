import React from 'react';
import './Home.css';

const profile = {
  name: 'John Doe',
  title: 'Frontend Developer & UI/UX Enthusiast',
  description: 'Passionate about building beautiful, accessible, and performant web applications. Experienced in React, JavaScript, and modern web technologies.',
  image: 'https://randomuser.me/api/portraits/men/32.jpg',
};

export default function Home() {
  return (
    <main className="main-home">
      <h1 style={{textAlign: 'center', marginBottom: '2rem'}}>Choose Your Favorite Profile Design</h1>
      <div className="profile-variants">
        {/* Variant 1: Card with shadow */}
        <section className="profile-card">
          <h2>Card Style</h2>
          <div className="profile-content">
            <img src={profile.image} alt="Profile" className="profile-pic" />
            <div>
              <h3>{profile.name}</h3>
              <h4>{profile.title}</h4>
              <p>{profile.description}</p>
            </div>
          </div>
        </section>
        {/* Variant 2: Bordered section */}
        <section className="profile-bordered">
          <h2>Bordered Style</h2>
          <div className="profile-content">
            <img src={profile.image} alt="Profile" className="profile-pic" />
            <div>
              <h3>{profile.name}</h3>
              <h4>{profile.title}</h4>
              <p>{profile.description}</p>
            </div>
          </div>
        </section>
        {/* Variant 3: Dark background */}
        <section className="profile-dark">
          <h2>Dark Style</h2>
          <div className="profile-content">
            <img src={profile.image} alt="Profile" className="profile-pic" />
            <div>
              <h3>{profile.name}</h3>
              <h4>{profile.title}</h4>
              <p>{profile.description}</p>
            </div>
          </div>
        </section>
        {/* Variant 4: Minimalist */}
        <section className="profile-minimal">
          <h2>Minimalist Style</h2>
          <div className="profile-content">
            <img src={profile.image} alt="Profile" className="profile-pic" />
            <div>
              <h3>{profile.name}</h3>
              <h4>{profile.title}</h4>
              <p>{profile.description}</p>
            </div>
          </div>
        </section>
        {/* Variant 5: Gradient background */}
        <section className="profile-gradient">
          <h2>Gradient Style</h2>
          <div className="profile-content">
            <img src={profile.image} alt="Profile" className="profile-pic" />
            <div>
              <h3>{profile.name}</h3>
              <h4>{profile.title}</h4>
              <p>{profile.description}</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
