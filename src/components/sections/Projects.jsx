import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { CardActions, Button, Card, CardContent, Typography, Grid } from '@material-ui/core'

const useStyles = (theme) => ({
  card: theme.card
})

class Projects extends Component {
  state = {}
  render() {
    const { classes } = this.props
    const { mainTitle, projectList } = this.props.projectsContent
    const projectListProcessed = projectList.map((project, index) => {
      return (
        <Grid item xs={12} sm={6} md={3} key={ index }>
          <Card>
            <CardContent>
              <Typography variant="subtitle1">
                { project.title }
              </Typography>
              <Typography variant="body2">
                { project.detail }
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={ () => { window.open( project.link, "_blank") } } size="small">More</Button>
            </CardActions>
          </Card>
        </Grid>
      )
    })
    return (
      <Card className={ classes.card } variant="outlined" align="justify">
        <CardContent>
          <Typography variant="h5">{ mainTitle }</Typography><br/>
          <Grid container spacing={3}>
            { projectListProcessed }
          </Grid>
        </CardContent>
        <CardActions style={{ paddingTop: 0 }}>
          <Button onClick={ () => { window.open( "https://github.com/ahmsay?tab=repositories", "_blank") } } style={{ marginLeft: 4 }} size="small">See Other Projects</Button>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(useStyles)(Projects)
