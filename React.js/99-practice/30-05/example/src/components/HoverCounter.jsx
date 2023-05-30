import React, { Component } from "react";
import updatedComponent from "../helpers/withCounter";

class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div onMouseOver={incrementCount}>
        <h2>Hovered {count} times</h2>
      </div>
    );
  }
}

export default updatedComponent(HoverCounter);
