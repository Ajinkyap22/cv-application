import { Component } from "react";

class DisplayExperience extends Component {
  constructor(props) {
    super(props);

    this.data = props.data;
  }
  render() {
    return (
      <div>
        <li className="data">Company - {this.data[0]}</li>
        <li className="data">Position - {this.data[1]}</li>
        <li className="data">Years - {this.data[2]}</li>
      </div>
    );
  }
}

export default DisplayExperience;
