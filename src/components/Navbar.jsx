import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { changeActiveTab } from '../actions/tabActions'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = () => ({
  title: {
    flexGrow: 1
  },
  toolBar: {
    minHeight: 75
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
    const { classes, tabs } = this.props
    const buttons = tabs.map(tab => {
      return (
        <CustomButton key={ tab.id } onClick={ () => this.changeTab(tab.id) }>
          <Typography variant="subtitle1">
            { tab.title }
          </Typography>
        </CustomButton>
      )
    })
    return (
      <div>
        <AppBar position="static" color="transparent" style={{ boxShadow: 'none' }}>
          <Toolbar className={ classes.toolBar }>
            <div className={ classes.title }/>
            { buttons }
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { tabs: state.tabs }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTab: (id) => {
      dispatch(changeActiveTab(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Navbar))
