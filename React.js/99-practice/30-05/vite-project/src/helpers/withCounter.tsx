import React from "react";

type MyProps = {
    name?: string
  };
  
  type MyState = {
    count: number;
  };

const updatedComponent = (OriginalComponent:any) => {
    class NewComponent extends React.Component<MyProps,MyState> {
        constructor(props: MyProps) {
            super(props);
        
            this.state = {
              count: 0,
            };
          }
        
          incrementCount = () => {
            this.setState({ count: this.state.count + 1 });
          };
        
        render() {
            return <OriginalComponent count={this.state.count} incrementCount={this.incrementCount}/>
        }
    }
    return NewComponent
}

export default updatedComponent