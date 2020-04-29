import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { changeActiveTab } from '../actions/tabActions'

class Navbar extends Component {
  changeTab = (id) => {
    this.props.changeTab(id)
  }
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              This site is under construction.
            </Typography>
            <Button onClick={ () => this.changeTab(1) } color="inherit">Tab1</Button>
            <Button onClick={ () => this.changeTab(2) } color="inherit">Tab2</Button>
            <Button onClick={ () => this.changeTab(3) } color="inherit">Tab3</Button>
            <Button onClick={ () => this.changeTab(4) } color="inherit">Tab4</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTab: (id) => {
      dispatch(changeActiveTab(id))
    }
  }
}

export default connect(null, mapDispatchToProps)(Navbar)
