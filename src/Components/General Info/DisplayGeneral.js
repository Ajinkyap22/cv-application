import React from "react";

const DisplayGeneral = (props) => {
  return (
    <div>
      <li className="data">Name - {props.name}</li>
      <li className="data">Email - {props.email}</li>
      <li className="data">Phone - {props.phone}</li>
      <li className="data">Age - {props.age}</li>
    </div>
  );
};

export default DisplayGeneral;
