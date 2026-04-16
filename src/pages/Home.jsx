import React from 'react';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import Header from '../components/Header';

function Home() {
  return (
    <div>
      <Banner texte="Chez vous, partout et ailleurs" />
      <Gallery/>
    </div>
  );
}

export default Home;