import React, { Component } from 'react'

class Greetings extends Component {
  constructor() {
    super();
    this.state = {}
    this.updateWindowHeight = this.updateWindowHeight.bind(this);
  }
  componentDidMount() {
      this.updateWindowHeight();
      window.addEventListener("resize", this.updateWindowHeight.bind(this));
  }
  componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowHeight.bind(this));
  }
  updateWindowHeight() {
      this.setState({ height: window.innerHeight });
  }
  render() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: this.state.height,
        backgroundColor: '#000',
        color: '#fff'
      }}>
        Hello there
      </div>
    )
  }
}

export default Greetings
