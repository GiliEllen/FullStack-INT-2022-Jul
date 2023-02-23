import { Component, ReactNode } from "react";

type CounterClassState = {
  count: number;
};

type CounterClassProps = {
  message?: string;
};

class CounterClass extends Component<CounterClassProps, CounterClassState> {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render(): ReactNode {
    return (
      <>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>Add in class</button>
      </>
    );
  }
}

export default CounterClass;
