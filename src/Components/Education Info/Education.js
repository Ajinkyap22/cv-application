import { Component } from "react";
import DisplayEducation from "./DisplayEducation";
import "../../styles/Components.css";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      qual: "",
      institute: "",
      location: "",
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

  toggleEditing() {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  submitForm(e) {
    e.preventDefault();
    this.setState({
      isEditing: false,
    });
  }

  render() {
    if (this.state.isEditing) {
      return (
        <form onSubmit={this.submitForm} className="info">
          <label htmlFor="qual">Qualification</label>
          <input
            type="text"
            id="qual"
            placeholder="Enter your qualification"
            onChange={this.handleChange}
            value={this.state.qual}
            required
          />
          <label htmlFor="institute">Institution</label>
          <input
            type="text"
            id="institute"
            placeholder="Name of your Institution"
            onChange={this.handleChange}
            value={this.state.institute}
            required
          />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            placeholder="Where did you get your education"
            onChange={this.handleChange}
            value={this.state.location}
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
          <DisplayEducation
            qual={this.state.qual}
            institute={this.state.institute}
            location={this.state.location}
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

export default Education;
