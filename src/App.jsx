import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
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
  greetings: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    color: '#fff'
  }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={ theme }>
        <Greetings/>
        <Container fixed>
          <Home/>
        </Container>
      </MuiThemeProvider>
    )
  }
}

export default App
