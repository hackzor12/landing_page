import React from 'react';
import sprintboard from '../img/sprintboard.png';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col l1"></div>
          <div className="col l10 center-align">
            <h1>About Us</h1>
            <p>
              We use cutting-edge technology to move your company's assets to the cloud safely and efficiently.
              <br />
            </p>
            <img className="responsive-img" src={sprintboard} />
          </div>
          <div className="col l1"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
