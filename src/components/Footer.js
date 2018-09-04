import React from 'react';
import logo from '../img/logo_allwhite.png';

const Footer = () => {
  return (
    <section id="footer" className="blue lighten-1">
      <div className="container center-align">
        {/* <div className="row"> */}
          {/* <div className="col s3"></div> */}
          <img src={logo} alt="Smiley face" className="brand-logo"/>
          {/* <div className="col s3"></div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Footer;
