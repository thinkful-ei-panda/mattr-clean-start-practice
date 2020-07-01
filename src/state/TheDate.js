import React, { Component } from 'react';

class TheDate extends Component {
    constructor(props) {
    super(props)
    this.state = { datetime: new Date() };
    // console.log('constructor')
    }

    // componentDidMount() {
    //   setInterval(() => {
    //     console.log('tick')
    //   }, 1000)
    // }

    componentDidMount() {
      // console.log('componentDidMount')
      this.interval = setInterval(() => {
        // console.log('setInterval')
        this.setState({
          datetime: new Date()
        })
      }, 1000)
    }

    componentWillUnmount() {
      // console.log('componentWillUnMount')
      clearInterval(this.interval)
    }

    render() {
      // console.log('render')
      return (
        <div>{this.state.datetime.toLocaleString()}</div>
      )
    }
}

export default TheDate