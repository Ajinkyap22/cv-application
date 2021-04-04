import React from "react";

const DisplayExperience = (props) => {
  return (
    <div>
      <li className="data">Company - {props.company}</li>
      <li className="data">Position - {props.position}</li>
      <li className="data">Years - {props.years}</li>
    </div>
  );
};

export default DisplayExperience;
