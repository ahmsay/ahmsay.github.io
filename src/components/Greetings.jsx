import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Grid, Card, CardContent } from '@material-ui/core'

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
    const { classes } = this.props
    return (
      <Grid style={ { height: this.state.height, backgroundColor: '#000' } } container justify="center" alignItems="center">
        <Card variant="outlined" className={ classes.greetingsCard }>
          <CardContent>
            <Typography variant="h2" align="center">
              Hello there
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  }
}

export default withStyles(useStyles)(Greetings)
