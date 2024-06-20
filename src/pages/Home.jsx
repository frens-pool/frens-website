import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesAll from '../partials/FeaturesAll';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import Banner from '../partials/Banner';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden transition-all">
      <Header />
      <main className="flex-grow">
        <HeroHome />
        <FeaturesAll />
        {/* <FeaturesHome /> */}
        {/* <FeaturesBlocks /> */}
        {/* <Testimonials /> */}
        {/* <Newsletter /> */}
      </main>
      {/* <Banner /> */}
      {/* <Footer /> */}

    </div>
  );
}

export default Home;