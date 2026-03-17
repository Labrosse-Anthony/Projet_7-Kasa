import React from 'react';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import Header from '../components/Header';

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Gallery/>
    </div>
  );
}

export default Home;