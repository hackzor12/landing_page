import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import OurTeam from './OurTeam';
import SocialBrand from './SocialBrand';
import Footer from './Footer';

const App = () => {
  return (
    <div id="app">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <OurTeam />
      {/* <SocialBrand /> */}
      <Footer />
    </div>
  );
};

export default App;
