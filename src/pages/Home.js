import React from 'react';
import './Home.css';

const profile = {
  name: 'Göndöcs Róbert',
  title: 'Web- és szoftverfejlesztő & UI/UX tervező',
  description: 'Szenvedélyesen építek gyönyörű, akadálymentes és nagy teljesítményű webalkalmazásokat. Tapasztalt vagyok React, JavaScript és modern webes technológiák terén.',
  image: 'profilkep_CV.jpg',
};

export default function Home() {
  return (
    <main className="main-home dark-section">
        <section className="profile-card dark-card">
          <div className="profile-content">
            <img src={profile.image} alt="Profile" className="profile-pic" style={{borderRadius: '50%', boxShadow: '0 2px 16px #0008', background: '#181a1b'}} />
            <div>
              <h3 style={{color: '#61dafb'}}>{profile.name}</h3>
              <h4 style={{color: '#e0e0e0'}}>{profile.title}</h4>
              <p style={{color: '#b0b0b0'}}>{profile.description}</p>
            </div>
          </div>
        </section>
    </main>
  );
}
