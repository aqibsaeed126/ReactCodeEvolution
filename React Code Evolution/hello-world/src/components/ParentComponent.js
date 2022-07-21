import React, { Component } from 'react';
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
constructor(props) {
  super(props)

  this.state = {
     parentName: 'Parent'
  }
} 

parentGreetHandler = (msg) => {
    alert(`Hello ${this.state.parentName} , message from ${msg}`);
}

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.parentGreetHandler}/>
      </div>
    )
  }
}

export default ParentComponent