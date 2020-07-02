import React, { Component } from 'react'

export default class HelloWorld extends Component {
    constructor(props) {
        console.log('props in constructor', props)
          super(props)
          this.state = {
            who: "World"
          }
        }

        handleMatthewButtonClick = () => {
              this.setState({
                  who: "Matthew"
            })
        }

        handleReactButtonClick = () => {
            this.setState({
            who: "React"
            })
         }

         handleFriendButtonClick = () => {
            this.setState({
            who: "friend"
            })
         }


    render() {
        return (
            <div>
                <h1>Hello World Drill</h1>
                <p>Hello, {this.state.who}</p>
                <button onClick={this.handleMatthewButtonClick}>Matthew</button>
                <button onClick={this.handleReactButtonClick}>React</button>
                <button onClick={this.handleFriendButtonClick}>friend</button>
            </div>
        )
    }
}
