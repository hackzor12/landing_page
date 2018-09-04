import React from 'react';
import logo from '../img/logo.png';

const SocialBrand = () => {
  return (
    <section id="social" className="grey lighten-2">
      <div className="container center-align">
        <img src={logo} className="brand-logo"/>
        <div className="col s6 center-align black-text">
          Peregrine Cloud Solutions, LLC
        </div>
      </div>
    </section>
  );
};

export default SocialBrand;
