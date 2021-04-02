import { Component } from "react";

class DisplayEducation extends Component {
  constructor(props) {
    super(props);

    this.data = props.data;
  }
  render() {
    return (
      <div>
        <li className="data">Qualification - {this.data[0]}</li>
        <li className="data">Institute - {this.data[1]}</li>
        <li className="data">Location - {this.data[2]}</li>
      </div>
    );
  }
}

export default DisplayEducation;
