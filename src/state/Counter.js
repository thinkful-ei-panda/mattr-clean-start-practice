import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
      // console.log('props in constructor', props)
        super(props)
        this.state = {
          count: 0
        }
        // this.handleButtonClick = this.handleButtonClick.bind(this)
      }

    
    handleButtonClick = () => {
    //   console.log('props in handleButtonClick', this.props)
    // console.log('state in handleButtonClick', this.state)
        const newCount = this.state.count + 1
        this.setState({
            count: newCount
          })
      }

    render() {
      return (
        <div>
          <h1>This is a State Drill: Counter</h1>
          <p>The current count: {this.state.count}</p>
          <button onClick={this.handleButtonClick}>
            Add 1
          </button>

          {/* <button onClick={() => this.handleButtonClick()}>
        Add 1
      </button> */}

        </div>
      )
    }
  }

  export default Counter