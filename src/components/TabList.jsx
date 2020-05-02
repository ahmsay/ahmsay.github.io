import React, { Component } from 'react'
import About from './tabs/About'
import Hobbies from './tabs/Hobbies'
import Hometown from './tabs/Hometown'
import Projects from './tabs/Projects'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

class TabList extends Component {
  render() {
    const { tabs, activeTabId } = this.props
    return (
      <Grid container justify="flex-end">
        <Grid item xs={12} sm={8} md={5}>
          <Box pr={8}>
            { activeTabId === tabs[0].id ? <About tab={ tabs[0] }/> : null }
            { activeTabId === tabs[1].id ? <Hobbies tab={ tabs[1] }/> : null }
            { activeTabId === tabs[2].id ? <Hometown tab={ tabs[2] }/> : null }
            { activeTabId === tabs[3].id ? <Projects tab={ tabs[3] }/> : null }
          </Box>
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
