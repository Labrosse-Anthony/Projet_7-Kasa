import React from "react";
import Collapse from '../components/Collapse';
import Banner from '../components/Banner';
import '../pages/about.scss';
import aboutData from '../assets/data/About.json';

function About() {
  
  return (
    <main className="about">
      <Banner isAbout={true} />
      <div className="about-container">
        {aboutData.map((item) => ( 
          <Collapse 
            key={item.id} 
            title={item.title} 
            content={item.content} 
          />
        ))}
      </div>
    </main>
  );
}

export default About;