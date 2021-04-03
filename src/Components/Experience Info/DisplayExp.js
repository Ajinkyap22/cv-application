import { Component } from "react";

class DisplayExperience extends Component {
  render() {
    return (
      <div>
        <li className="data">Company - {this.props.company}</li>
        <li className="data">Position - {this.props.position}</li>
        <li className="data">Years - {this.props.years}</li>
      </div>
    );
  }
}

export default DisplayExperience;
