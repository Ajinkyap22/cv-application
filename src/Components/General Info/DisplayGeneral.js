import { Component } from "react";

class DisplayGeneral extends Component {
  render() {
    return (
      <div>
        <li className="data">Name - {this.props.name}</li>
        <li className="data">Email - {this.props.email}</li>
        <li className="data">Phone - {this.props.phone}</li>
        <li className="data">Age - {this.props.age}</li>
      </div>
    );
  }
}

export default DisplayGeneral;
