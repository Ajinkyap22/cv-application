import React, { useState } from "react";
import DisplayExperience from "./DisplayExp";
import "../../styles/Components.css";

const Experience = (props) => {
  // States

  const [data, setData] = useState({
    company: "",
    position: "",
    years: "",
  });

  const [isEditing, setEditing] = useState(true);

  // Functions

  function handleChange(e) {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  }

  function submitForm(e) {
    e.preventDefault();

    setEditing(false);
  }

  function toggleEditing() {
    setEditing((prevState) => !prevState);
  }

  // Render
  if (isEditing) {
    return (
      <form onSubmit={submitForm} className="info">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          placeholder="Name of the company"
          onChange={handleChange}
          value={data.company}
          required
        />
        <label htmlFor="position">Position</label>
        <input
          type="text"
          id="position"
          placeholder="Enter your job title"
          onChange={handleChange}
          value={data.position}
          required
        />
        <label htmlFor="years">Years</label>
        <input
          type="number"
          id="years"
          placeholder="How long did you work there?"
          onChange={handleChange}
          value={data.years}
          min="0"
          required
        />
        <div className="btns">
          <button type="submit" className="btn save">
            Save
          </button>
          <input
            type="button"
            className="btn cancel"
            value="Cancel"
            onClick={props.toggle}
            formNoValidate
          />
        </div>
      </form>
    );
  } else {
    return (
      <div>
        <DisplayExperience
          company={data.company}
          position={data.position}
          years={data.years}
        />
        <button className="btn" onClick={toggleEditing}>
          Edit &nbsp;
          <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
};

export default Experience;
