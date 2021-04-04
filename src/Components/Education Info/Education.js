import React, { useState } from "react";
import DisplayEducation from "./DisplayEducation";
import "../../styles/Components.css";

const Education = (props) => {
  // States

  const [data, setData] = useState({
    qual: "",
    institute: "",
    location: "",
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
        <label htmlFor="qual">Qualification</label>
        <input
          type="text"
          id="qual"
          placeholder="Enter your qualification"
          onChange={handleChange}
          value={data.qual}
          required
        />
        <label htmlFor="institute">Institution</label>
        <input
          type="text"
          id="institute"
          placeholder="Name of your Institution"
          onChange={handleChange}
          value={data.institute}
          required
        />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          placeholder="Where did you get your education"
          onChange={handleChange}
          value={data.location}
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
        <DisplayEducation
          qual={data.qual}
          institute={data.institute}
          location={data.location}
        />
        <button className="btn" onClick={toggleEditing}>
          Edit &nbsp;
          <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
};

export default Education;
