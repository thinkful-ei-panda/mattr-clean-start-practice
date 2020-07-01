import React, { Component } from 'react';

class TheDate extends Component {
    constructor(props) {
    super(props)
    this.state = { datetime: new Date() };
    }
    render() {
      
      return (
        <div>{this.state.datetime.toLocaleString()}</div>
      )
    }
}

export default TheDate