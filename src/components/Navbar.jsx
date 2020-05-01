import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { changeActiveTab } from '../actions/tabActions'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import AppsIcon from '@material-ui/icons/Apps'

const useStyles = (theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  toolBar: {
    minHeight: 75
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
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
        <AppBar position="static" color="transparent" style={{ boxShadow: 'none' }}>
          <Toolbar className={ classes.toolBar }>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <AppsIcon/>
            </IconButton>
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
