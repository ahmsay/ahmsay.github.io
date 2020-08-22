import React, { Component } from 'react'
import { connect } from 'react-redux'
import About from './tabs/About'
import Hobbies from './tabs/Hobbies'
import Projects from './tabs/Projects'

class Home extends Component {
  render() {
    const { tabs } = this.props
    return (
      <div>
        <About card={ tabs[0].card }/>
        <Hobbies card={ tabs[1].card }/>
        <Projects card={ tabs[3].card }/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tabs: state.tabs
  }
}

export default connect(mapStateToProps)(Home)
