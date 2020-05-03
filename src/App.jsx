import React, { Component } from 'react'
import Navbar from './components/Navbar'
import TabList from './components/TabList'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { deepPurple } from '@material-ui/core/colors'

const theme = createMuiTheme({
  card: {
    borderWidth: 0,
    borderRadius: 0,
    background: '#00003366',
    color: '#ffffff',
    padding: 7
  },
  button: {
    color: deepPurple[500],
    borderRadius: 50,
    textTransform: 'none',
    paddingLeft: 12,
    paddingRight: 12
  }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={ theme }>
        <Navbar/>
        <TabList/>
      </MuiThemeProvider>
    )
  }
}

export default App
