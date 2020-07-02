import React, { Component } from 'react'

export default class Tabs extends Component {
    static defaultProps = { tabs: [] };
    
    state = {
        currentTabIndex: 0
      };

      handleButtonClick = (index) => {
        this.setState({ currentTabIndex: index })
      }

    renderButtons() {
        return this.props.tabs.map((tab, index) => (
          <button key={index} onClick={() => this.handleButtonClick(index)}>
            {tab.name}
          </button>
        ))
      }
      renderContent() {
        // const currentTab = this.props.tabs[0]
        const currentTab = this.props.tabs[this.state.currentTabIndex]
        return (
          <div className='content'>
            <p> {currentTab.content} </p>
          </div>
        )
      }

    render() {
            return (
            <div>
                <h1>This is a Event Handler and Conditionals Drill: Tabs</h1>
                {this.props.tabs.length && (
                    <div className='content'>
                    {this.renderButtons()}
                    {!!this.props.tabs.length && this.renderContent()}
                    </div>
                )}
            </div>
            )
    }
}
