import React, { Component } from 'react'
import Tab1 from './tabs/Tab1'
import Tab2 from './tabs/Tab2'
import Tab3 from './tabs/Tab3'
import Tab4 from './tabs/Tab4'
import { connect } from 'react-redux'

class TabList extends Component {
  render() {
    const { tabs, activeTabId } = this.props
    return (
      <div align="right">
        { activeTabId === 1 ? <Tab1 tab1={ tabs.tab1 }/> : null }
        { activeTabId === 2 ? <Tab2 tab2={ tabs.tab2 }/> : null }
        { activeTabId === 3 ? <Tab3 tab3={ tabs.tab3 }/> : null }
        { activeTabId === 4 ? <Tab4 tab4={ tabs.tab4 }/> : null }
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
