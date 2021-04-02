import React, { Component } from "react";
import General from "./Components/General Info/General";
import Education from "./Components/Education Info/Education";
import Experience from "./Components/Experience Info/Experience";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: false,
      education: false,
      experience: false,
    };
  }

  displaySection(name) {
    this.setState({
      [name]: !this.state[name],
    });
  }

  render() {
    return (
      <div className="container">
        <h1>CV Application</h1>
        <div className="sections">
          <div
            className="section General"
            id="general"
            onClick={this.displaySection.bind(this, "general")}
          >
            <label>General Info</label>
            <i
              className="fa fa-angle-down"
              id={this.state.general ? "active" : ""}
              aria-hidden="true"
            ></i>
          </div>
          <div id={!this.state.general ? "hidden" : ""}>
            <General toggle={this.displaySection.bind(this, "general")} />
          </div>
          <div
            className="section Education"
            id="education"
            onClick={this.displaySection.bind(this, "education")}
          >
            <label>Education Info</label>
            <i
              className="fa fa-angle-down"
              id={this.state.education ? "active" : ""}
              aria-hidden="true"
            ></i>
          </div>
          <div id={!this.state.education ? "hidden" : ""}>
            <Education toggle={this.displaySection.bind(this, "education")} />
          </div>
          <div
            className="section Experience"
            id="experience"
            onClick={this.displaySection.bind(this, "experience")}
          >
            <label>Experience Info</label>
            <i
              className="fa fa-angle-down"
              id={this.state.experience ? "active" : ""}
              aria-hidden="true"
            ></i>
          </div>
          <div id={!this.state.experience ? "hidden" : ""}>
            <Experience toggle={this.displaySection.bind(this, "experience")} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
