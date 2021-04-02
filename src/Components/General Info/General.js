import { Component } from "react";
import DisplayGeneral from "./DisplayGeneral";
import "../../styles/Components.css";

class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      age: "",
      data: [],
      isEditing: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
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
      data: this.state.data.concat([
        this.state.name,
        this.state.email,
        this.state.phone,
        this.state.age,
      ]),
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
        <form className="info" onSubmit={this.submitForm}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            onChange={this.handleChange}
            value={this.state.name}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            onChange={this.handleChange}
            value={this.state.email}
            required
          />
          <label htmlFor="phone">Phone no.</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            onChange={this.handleChange}
            value={this.state.phone}
            min="1"
            required
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            placeholder="Enter your age"
            onChange={this.handleChange}
            value={this.state.age}
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
              onClick={this.props.toggle}
              formNoValidate
            />
          </div>
        </form>
      );
    } else {
      return (
        <div>
          <DisplayGeneral
            data={this.state.data}
            isEditing={this.state.isEditing}
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

export default General;
