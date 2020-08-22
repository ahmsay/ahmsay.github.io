import React, { Component } from 'react'
import { connect } from 'react-redux'
import About from './tabs/About'

class MainContent extends Component {
  render() {
    const { tabs } = this.props
    return (
      <div>
        <About card={ tabs[0].card }/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tabs: state.tabs
  }
}

export default connect(mapStateToProps)(MainContent)
