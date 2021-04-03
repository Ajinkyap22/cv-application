import { Component } from "react";

class DisplayEducation extends Component {
  render() {
    return (
      <div>
        <li className="data">Qualification - {this.props.qual}</li>
        <li className="data">Institute - {this.props.institute}</li>
        <li className="data">Location - {this.props.location}</li>
      </div>
    );
  }
}

export default DisplayEducation;
