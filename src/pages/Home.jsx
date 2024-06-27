import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesAll from '../partials/FeaturesAll';
import VideoPart from '../partials/VideoPart';
import Footer from '../partials/Footer';
import Banner from '../partials/Banner';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden transition-all">
      <Header />
      <main className="flex-grow">
        <HeroHome />
        <FeaturesAll />
        <VideoPart />
      </main>
      <Footer />
    </div>
  );
}

export default Home;