import React, { Component } from 'react'
import Navbar from './components/Navbar'
import TabList from './components/TabList'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  card: {
    borderWidth: 0,
    background: 'linear-gradient(45deg, #538699dd 30%, #b1755bdd 70%)',
    color: '#ffffff',
    padding: 7
  },
  button: {
    color: '#ffffff',
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
