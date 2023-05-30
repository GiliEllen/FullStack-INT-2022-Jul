import React, { Component, SetStateAction } from "react";
import updatedComponent from "../helpers/withCounter";


class hoverCounter extends Component {

  render() {
    const {count, incrementCount} = this.props
    return (
      <div>
        <h2 onMouseOver={incrementCount}>Hoverd {count} times</h2>
      </div>
    );
  }
}

export default updatedComponent(hoverCounter);
