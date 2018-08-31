import React from 'react';
import clouds from '../img/clouds.jpg';

const Hero = () => {
  return (
    <section
      id="hero"
      className="blue lighten-4"
      style={{ backgroundImage: 'url(' + clouds + ')'}}
    >
      <div className="container valign-wrapper jc-center">
        <div className="valign center-align white-text">
          <p className="flowtext hide-on-small-only">Migrate your company's assets to the cloud</p>
          <h3>
            Cloud Migration Experts
          </h3>

          <p className="big">
            Avoid the complications of cloud migration
            <br/>
            Migrate your company's assets to the cloud quickly and safely
          </p>

          <a className="btn waves-light waves-effect m-r-16">Features</a>
          <a className="btn waves-light waves-effect">Portfolio</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
