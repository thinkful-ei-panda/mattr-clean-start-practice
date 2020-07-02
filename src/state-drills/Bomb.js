import React, { Component } from 'react'

export default class Bomb extends Component {
    constructor(props) {
        console.log('props in constructor', props)
          super(props)
          this.state = {
            count: 0
          }
        }

        //  componentDidMount() {
        //       setInterval(() => {
        //         console.log('tick')
        //       }, 1000)
        //     }

        componentDidMount() {
            this.interval = setInterval(() => {
              this.setState({
                count: this.state.count + 1
              })
            }, 1000)
          }

            componentWillUnmount() {
                clearInterval(this.interval)
              }

              renderDisplay() {
                const { count } = this.state
                if (count >= 8) {
                  clearInterval(this.interval)
                  return 'BOOM!!!!'
                } else if (count % 2 === 0) {
                  return 'tick'
                } else {
                  return 'tock'
                }
              }

              render() {
                return (
                  <div className='CountdownBomb'>
                      <h1>This is a State Drill</h1>
                    <p> {this.renderDisplay()} </p>
                  </div>
                )
              }
            }