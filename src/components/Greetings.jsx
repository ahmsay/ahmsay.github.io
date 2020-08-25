import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = (theme) => ({
  greetings: theme.greetings
})

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
    const { classes } = this.props
    return (
      <div style={ { height: this.state.height } } className={ classes.greetings }>
        <Typography variant="h2">
          Hello there
        </Typography>
      </div>
    )
  }
}

export default withStyles(useStyles)(Greetings)
