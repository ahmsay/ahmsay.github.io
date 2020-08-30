import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Greetings from './components/Greetings'
import Home from './components/Home'

const theme = createMuiTheme({
  card: {
    borderRadius: 0,
    background: '#fff',
    borderWidth: 0,
    padding: 7,
  },
  link: {
    color: '#000'
  },
  button: {
    textTransform: 'none',
    paddingLeft: 12,
    paddingRight: 12 
  },
  greetingsCard: {
    backgroundColor: '#0000',
    color: '#fff',
    borderWidth: 0
  }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={ theme }>
        <Greetings/>
        <Home/>
      </MuiThemeProvider>
    )
  }
}

export default App
