import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import Greetings from './components/Greetings'

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
          
        </Container>
      </MuiThemeProvider>
    )
  }
}

export default App
