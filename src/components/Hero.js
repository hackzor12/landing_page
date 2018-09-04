import React from 'react';
import clouds from '../img/clouds.jpg';

const Hero = () => {
  return (
    <section
      id="hero"
      className="blue lighten-1"
      style={{ backgroundImage: `url(${clouds})`}}
    >
      <div className="container valign-wrapper jc-center">
        <div style={{ textShadow: '1px 1px black' }} className="valign center-align white-text">
          <h3  >
            Cloud Migration Experts
          </h3>

          <p className="big">
            Avoid the complications of cloud migration
            <br/>
            Migrate your company's assets to the cloud quickly and safely
          </p>

          <a style={{ textShadow: '0px 0px' }} className="btn waves-light waves-effect m-r-16 blue lighten-1">
            Get A Quote!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
