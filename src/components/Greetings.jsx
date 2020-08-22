import React, { Component } from 'react'

class Greetings extends Component {
  constructor() {
    super();
    this.state = {asd: 'lol'};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener("resize", this.updateWindowDimensions.bind(this));
  }
  componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
  }
  updateWindowDimensions() {
      this.setState({width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: this.state.height}}>
        Hello there<br/>
      </div>
    )
  }
}

export default Greetings
