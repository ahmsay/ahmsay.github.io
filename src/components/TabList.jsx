import React, { Component } from 'react'
import About from './tabs/About'
import Hobbies from './tabs/Hobbies'
import Hometown from './tabs/Hometown'
import Projects from './tabs/Projects'
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'

class TabList extends Component {
  render() {
    const { tabs, activeTabId } = this.props
    return (
      <Grid container>
        <Grid item xs={12} md={6}>
          { activeTabId === tabs[0].id ? <About card={ tabs[0].card }/> : null }
          { activeTabId === tabs[1].id ? <Hobbies card={ tabs[1].card }/> : null }
          { activeTabId === tabs[2].id ? <Hometown card={ tabs[2].card }/> : null }
          { activeTabId === tabs[3].id ? <Projects card={ tabs[3].card }/> : null }
        </Grid>
      </Grid>
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
