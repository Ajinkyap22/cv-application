import React from "react";

const DisplayEducation = (props) => {
  return (
    <div>
      <li className="data">Qualification - {props.qual}</li>
      <li className="data">Institute - {props.institute}</li>
      <li className="data">Location - {props.location}</li>
    </div>
  );
};

export default DisplayEducation;
