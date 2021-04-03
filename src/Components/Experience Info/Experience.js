import { Component } from "react";
import DisplayExperience from "./DisplayExp";
import "../../styles/Components.css";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: "",
      position: "",
      years: "",
      isEditing: true,
    };

    this.submitForm = this.submitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleEditing = this.toggleEditing.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    this.setState({
      isEditing: false,
    });
  }

  toggleEditing() {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  render() {
    if (this.state.isEditing) {
      return (
        <form onSubmit={this.submitForm} className="info">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            placeholder="Name of the company"
            onChange={this.handleChange}
            value={this.state.company}
            required
          />
          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            placeholder="Enter your job title"
            onChange={this.handleChange}
            value={this.state.position}
            required
          />
          <label htmlFor="years">Years</label>
          <input
            type="number"
            id="years"
            placeholder="How long did you work there?"
            onChange={this.handleChange}
            value={this.state.years}
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
              onClick={this.props.toggle}
              formNoValidate
            />
          </div>
        </form>
      );
    } else {
      return (
        <div>
          <DisplayExperience
            company={this.state.company}
            position={this.state.position}
            years={this.state.years}
          />
          <button className="btn" onClick={this.toggleEditing}>
            Edit &nbsp;{" "}
            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
          </button>
        </div>
      );
    }
  }
}

export default Experience;
