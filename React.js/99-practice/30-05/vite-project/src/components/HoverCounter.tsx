import React, { Component, SetStateAction } from "react";
import updatedComponent from "../helpers/withCounter";

type MyProps = {
  count: number;
  incrementCount: SetStateAction<number>;
};

type MyState = {
  count: number;
};

class hoverCounter extends Component {

  render() {
    const {count, incrementCount} = this.props
    return (
      <div>
        <h2 onMouseOver={incrementCount}>Hoverd {this.state.count} times</h2>
      </div>
    );
  }
}

export default updatedComponent(hoverCounter);
