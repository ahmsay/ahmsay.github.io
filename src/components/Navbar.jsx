import React, { Component } from 'react'
import { AppBar, Toolbar, Button, Typography, ButtonGroup } from '@material-ui/core'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'

const useStyles = () => ({
  toolBar: {
    minHeight: 75,
    paddingLeft: 0
  }
})

const CustomButton = withStyles((theme) => ({
  root: theme.button
}))(Button)

class Navbar extends Component {
  changeTab = (id) => {
    this.props.changeTab(id)
  }
  render() {
    const { classes, tabs, activeTabId } = this.props
    const buttons = tabs.map(tab => {
      const highLight = tab.id === activeTabId ? { backgroundColor: '#fff2' } : {}
      return (
        <CustomButton key={ tab.id } onClick={ () => this.changeTab(tab.id) } style={ highLight }>
          <Typography variant="subtitle1">
            { tab.title }
          </Typography>
        </CustomButton>
      )
    })
    return (
      <AppBar position="static" color="transparent" style={{ boxShadow: 'none' }}>
        <Toolbar className={ classes.toolBar }>
          <ButtonGroup variant="text">
            { buttons }
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tabs: state.tabs,
    activeTabId: state.activeTabId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTab: (id) => {
      dispatch({type: 'CHANGE_ACTIVE_TAB', id})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Navbar))
