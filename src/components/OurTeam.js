import React from 'react';
import TeamMember from './TeamMember';

const OurTeam = () => {
  return (
    <section id="our-team">
      <div className="container">
        <h1>Latest from the Loop</h1>
        <div className="row">
          <div className="col m4">
            <TeamMember />
          </div>
          <div className="col m4">
            <TeamMember />
          </div>
          <div className="col m4">
            <TeamMember />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
