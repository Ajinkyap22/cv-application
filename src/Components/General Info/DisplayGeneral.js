import { Component } from "react";

class DisplayGeneral extends Component {
  constructor(props) {
    super(props);

    this.data = props.data;
  }

  render() {
    return (
      <div>
        <li className="data">Name - {this.data[0]}</li>
        <li className="data">Email - {this.data[1]}</li>
        <li className="data">Phone - {this.data[2]}</li>
        <li className="data">Age - {this.data[3]}</li>
      </div>
    );
  }
}

export default DisplayGeneral;
