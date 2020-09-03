import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Greetings from './components/Greetings'
import Home from './components/Home'
import Footer from './components/Footer'
import { connect } from 'react-redux'

const primary = '#00063d'
const secondary = '#fff'

const theme = createMuiTheme({
  mainCard: {
    borderWidth: 0,
    padding: 7,
    color: primary
  },
  projectCard: {
    borderWidth: 0,
    height: '100%',
    color: primary
  },
  greetingsCard: {
    borderWidth: 0,
    backgroundColor: '#0000',
    color: secondary
  },
  hobbiesCard: {
    borderWidth: 0,
    backgroundColor: primary,
    color: secondary
  },
  about: {
    paddingTop: '84px',
    paddingBottom: '42px'
  },
  projects: {
    paddingTop: '42px',
    paddingBottom: '42px'
  },
  hobbies: {
    backgroundColor: primary,
    color: secondary,
    paddingTop: '42px',
    paddingBottom: '42px'
  },
  footer: {
    backgroundColor: primary,
    color: secondary,
    paddingTop: '42px',
    paddingBottom: '42px'
  },
  iconButton: {
    color: secondary
  },
  button: {
    color: primary
  },
  image: {
    width: 30,
    height: 30,
    pointerEvents: 'none'
  }
})

const App = ({ footerContent }) => {
  return (
    <MuiThemeProvider theme={ theme }>
      <Greetings/>
      <Home/>
      <Footer footerContent={ footerContent }/>
    </MuiThemeProvider>
  )
}

const mapStateToProps = (state) => {
  return {
    footerContent: state.footer
  }
}

export default connect(mapStateToProps)(App)
