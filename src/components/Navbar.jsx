import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { changeActiveTab } from '../actions/tabActions'
import { withStyles } from '@material-ui/core/styles'

const useStyles = () => ({
  root: { flexGrow: 1 },
  title: { flexGrow: 1 }
})

class Navbar extends Component {
  changeTab = (id) => {
    this.props.changeTab(id)
  }
  render() {
    const { classes, tabs } = this.props
    const buttons = tabs.map(tab => {
      return <Button key={ tab.id } onClick={ () => this.changeTab(tab.id) } color="inherit">{ tab.title }</Button>
    })
    return (
      <div className={ classes.root }>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={ classes.title }>
              This site is under construction.
            </Typography>
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
