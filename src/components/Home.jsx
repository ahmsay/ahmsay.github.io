import React, { Component } from 'react'
import { connect } from 'react-redux'
import About from './tabs/About'
import Hobbies from './tabs/Hobbies'
import Projects from './tabs/Projects'

class Home extends Component {
  render() {
    const { sections } = this.props
    return (
      <div>
        <About aboutContent={ sections.about }/>
        <Hobbies hobbiesContent={ sections.hobbies }/>
        <Projects projectsContent={ sections.projects }/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sections: state.sections
  }
}

export default connect(mapStateToProps)(Home)
