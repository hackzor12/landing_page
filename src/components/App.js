import React, { Component } from 'react';

// import About from './About';
// import Services from './Services';
// import Contact from './Contact';
// import SocialBrand from './SocialBrand';

import AsyncComponent from '../hocs/AsyncComponent'

const Navbar = AsyncComponent(() => import('./Navbar'));
const Hero = AsyncComponent(() => import('./Hero'), { height: '680px' });
const OurTeam = AsyncComponent(() => import('./OurTeam'));
const Footer = AsyncComponent(() => import('./Footer'));

const HTML = document.documentElement



class App extends Component {
  constructor(props) {
    super(props)
    this.onLoaded = this.onLoaded.bind(this)
    this.state = {
      isLoading: true
    }
  }

  onLoaded() {
    this.enableScroll.bind(this)
  }

  enableScroll() {
    if (HTML.classList.contains('loading')) {
      HTML.classList.remove('loading')
    }
  }

  render() {
    return <div id="app" >
      <Navbar />
      <Hero onLoaded={this.onLoaded} />
      {/* <About /> */}
      {/* <Services /> */}
      {/* <Contact /> */}
      <OurTeam  />
      {/* <SocialBrand /> */}
      <Footer />
    </div>
  }
};

export default App;
