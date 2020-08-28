import React, { Component } from 'react'
import { connect } from 'react-redux'
import About from './sections/About'
import Hobbies from './sections/Hobbies'
import Projects from './sections/Projects'
import Footer from './Footer'

class Home extends Component {
  render() {
    const { sections, footerContent } = this.props
    return (
      <div>
        <br/><br/><br/><br/>
        <About aboutContent={ sections.about }/>
        <br/><br/><br/><br/>
        <Hobbies hobbiesContent={ sections.hobbies }/>
        <br/><br/><br/><br/>
        <Projects projectsContent={ sections.projects }/>
        <br/><br/>
        <Footer footerContent={ footerContent }/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sections: state.sections,
    footerContent: state.footer
  }
}

export default connect(mapStateToProps)(Home)
