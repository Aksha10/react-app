import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div className="Child">
        <h2>{this.props.greeting}</h2>
        <h3>{this.props.userName}</h3>
      </div>
    );
  }
}
export default Child;
