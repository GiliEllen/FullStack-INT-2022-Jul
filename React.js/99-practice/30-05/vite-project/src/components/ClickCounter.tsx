import React, { Component } from 'react'
import updatedComponent from '../helpers/withCounter'

type MyProps = {
    props?: any
    name?: string
}

type MyState = {
    count: number
}

export class ClickCounter extends Component<MyProps, MyState> {

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>{this.props.name} Clicked {this.state.count} times</button>
      </div>
    )
  }
}

export default updatedComponent(ClickCounter) 