import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CardActions, Button, Card, CardContent, Typography, Grid, Container, Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  mainCard: theme.mainCard,
  projectCard: theme.projectCard
}))

const Projects = ({ projectsContent }) => {
  const classes = useStyles()
  const { mainTitle, projectList } = projectsContent
  const projectListProcessed = projectList.map((project, index) => {
    return (
      <Grid item xs={12} sm={6} md={3} key={ index }>
        <Card align="justify" variant="outlined" className={ classes.projectCard }>
          <CardContent>
            <Typography variant="subtitle1">
              <Box fontWeight="fontWeightMedium">{ project.title }</Box>
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
    <Container fixed>
      <Card className={ classes.mainCard } variant="outlined">
        <CardContent>
          <Typography variant="h4" align="center">
            { mainTitle }
          </Typography><br/>
          <Grid container spacing={4}>
            { projectListProcessed }
          </Grid>
        </CardContent>
      </Card>
      <Box display="flex" justifyContent="center">
        <Button onClick={ () => { window.open( "https://github.com/ahmsay?tab=repositories", "_blank") } }>
          See Other Projects
        </Button>
      </Box>
    </Container>
  )
}

export default Projects
