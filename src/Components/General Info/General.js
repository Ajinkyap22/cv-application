import React, { useState } from "react";
import DisplayGeneral from "./DisplayGeneral";
import "../../styles/Components.css";

const General = (props) => {
  // States

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
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
      <form className="info" onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          onChange={handleChange}
          value={data.name}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          onChange={handleChange}
          value={data.email}
          required
        />
        <label htmlFor="phone">Phone no.</label>
        <input
          type="tel"
          id="phone"
          placeholder="Enter your phone number"
          onChange={handleChange}
          value={data.phone}
          min="1"
          required
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          placeholder="Enter your age"
          onChange={handleChange}
          value={data.age}
          min="1"
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
        <DisplayGeneral
          name={data.name}
          email={data.email}
          phone={data.phone}
          age={data.age}
          isEditing={isEditing}
        />
        <button className="btn" onClick={toggleEditing}>
          Edit &nbsp;
          <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
};

export default General;
