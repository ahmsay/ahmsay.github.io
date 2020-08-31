import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Grid, Card, CardContent } from '@material-ui/core'
import withWidth from '@material-ui/core/withWidth'

const useStyles = (theme) => ({
  greetingsCard: theme.greetingsCard
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
    const { classes, width } = this.props
    const background = require('../images/background.jpg')
    const greetingsStyle = {
      height: this.state.height,
      backgroundImage: "url(" + background + ")",
      backgroundSize: 'cover'
    }
    const variant = width === 'xs' ? 'h3' : 'h2'
    return (
      <Grid style={ greetingsStyle } container justify="center" alignItems="center">
        <Card variant="outlined" className={ classes.greetingsCard }>
          <CardContent>
            <Typography variant={ variant } align="center">
              Hello there
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  }
}

export default withWidth()(withStyles(useStyles)(Greetings))
