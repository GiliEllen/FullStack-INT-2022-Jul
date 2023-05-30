import React from "react";



const updatedComponent = (OriginalComponent) => {
    class NewComponent extends React.Component {
        constructor(props) {
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