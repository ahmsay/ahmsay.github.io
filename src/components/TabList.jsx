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
        { activeTabId === tabs[0].id ? <Tab1 tab1={ tabs[0] }/> : null }
        { activeTabId === tabs[1].id ? <Tab2 tab2={ tabs[1] }/> : null }
        { activeTabId === tabs[2].id ? <Tab3 tab3={ tabs[2] }/> : null }
        { activeTabId === tabs[3].id ? <Tab4 tab4={ tabs[3] }/> : null }
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
