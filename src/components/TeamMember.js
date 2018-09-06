import React from 'react';

const TeamMember = ({ props }) =>
  <div className="team-member">
      <div className="image-wrapper center-align">
        <img className="responsive-img" src={ props.image } style={{ maxHeight: "150px", maxWidth: "150px" }}/>
      </div>
      <div className="content center-align">
        <h5> { props.name } </h5>
        <p style={{ fontStyle: `italic` }}> { props.title } </p>
      </div>
  </div>


export default TeamMember;
