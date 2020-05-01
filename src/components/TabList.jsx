import React, { Component } from 'react'
import About from './tabs/About'
import Hobbies from './tabs/Hobbies'
import Hometown from './tabs/Hometown'
import Projects from './tabs/Projects'
import { connect } from 'react-redux'

class TabList extends Component {
  render() {
    const { tabs, activeTabId } = this.props
    return (
      <div align="right">
        { activeTabId === tabs[0].id ? <About tab={ tabs[0] }/> : null }
        { activeTabId === tabs[1].id ? <Hobbies tab={ tabs[1] }/> : null }
        { activeTabId === tabs[2].id ? <Hometown tab={ tabs[2] }/> : null }
        { activeTabId === tabs[3].id ? <Projects tab={ tabs[3] }/> : null }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tabs: state.tabs,
    activeTabId: state.activeTabId
  }
}

export default connect(mapStateToProps)(TabList)
