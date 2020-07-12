import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 1
    }
  }

  handleClick = () => {
    console.log('clicked')
    const addNew = this.state.count + this.state.count
    this.setState(
      {
        count: addNew
      }
    )
  }
  render() {
    return (
      <section>
        <h1>Counting</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.handleClick()}>Click Me</button>
        
      </section>
    )
  }
}
