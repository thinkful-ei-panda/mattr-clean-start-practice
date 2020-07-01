import React, { Component } from 'react';

class Counter extends Component {
    state = {
      count: 0
    };
    
    render() {
      return (
        <div>
          <p>The current count: {this.state.count}</p>
          <button>
            Add 1
          </button>
        </div>
      )
    }
  }

  export default Counter