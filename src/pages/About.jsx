import React from "react";
import Collapse from '../components/Collapse';
import AboutBanner from '../components/AboutBanner';
import '../pages/about.scss';
import aboutData from '../assets/data/About.json';

function About() {
  
  return (
    <main className="about">
      <AboutBanner />
      <div className="about-container">
        {aboutData.map((item) => ( /* On utilise le composant Collapse pour chaque élément de aboutData, en passant les props title et content */
          <Collapse /* On utilise le composant Collapse pour chaque élément de aboutData, en passant les props title et content */
            key={item.id} /* La clé unique pour chaque élément de la liste, ici on utilise l'id de chaque objet */
            title={item.title} /* Le titre de chaque section, par exemple "Fiabilité", "Respect", etc. */
            content={item.content} /* Le contenu de chaque section, qui sera affiché lorsque le Collapse est ouvert */
          />
        ))}
      </div>
    </main>
  );
}

export default About;