import React, { Component } from 'react'

export default class Roulette extends Component {
    static defaultProps = {
        bulletInChamber: 8
      };

      state = {
        chamber: null,
        spinningTheChamber: false,
      };

      componentWillUnmount() {
        clearTimeout(this.timeout)
      }

      handleTriggerClick = () => {
        this.setState({
          spinningTheChamber: true,
        })
        this.timeout = setTimeout(() => {
          const randomChamber = Math.ceil(Math.random() * 8)
    
          this.setState({
            chamber: randomChamber,
            spinningTheChamber: false,
          })
        }, 2000)
      }

      renderDisplay() {
        const { chamber, spinningTheChamber } = this.state
        const { bulletInChamber } = this.props
        if (spinningTheChamber) {
          return 'spinning the chamber and pulling the trigger! ...'
        } else if (chamber === bulletInChamber) {
          return 'BANG!!!!!'
        } else {
          return 'you\'re safe!'
        }
      }


    render() {
        return (
            <div>
                <h1>This is a State Drill: Roulette</h1>
                <p>{this.renderDisplay()}</p>
                <button onClick= {this.handleTriggerClick}>Trigger</button>
            </div>
        )
    }
}
