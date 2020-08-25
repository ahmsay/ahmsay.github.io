import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography, Grid, Icon, Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  card: theme.card
}))

const Hobbies = ({ hobbiesContent }) => {
  const classes = useStyles()
  const { mainTitle, hobbyList } = hobbiesContent
  const hobbies = hobbyList.map((hobby, index) => {
    let contentAtLeft = index %2 === 0
    let marginLeft = contentAtLeft ? 18 : 0
    let marginRight = contentAtLeft ? 0 : 18
    let endOfItems = index === hobbyList.length - 1
    let hobbyIcon = (
      <Grid item xs={3}>
        <Grid container justify="center">
          <Icon style={{ fontSize: 60, marginRight, marginLeft }}>{ hobby.icon }</Icon>
        </Grid>
      </Grid>
    )
    let hobbyContent = (
      <Grid item xs={9}>
        <Typography variant="body2">
          { hobby.content }
        </Typography>
      </Grid>
    )
    return (
      <div key={ index }>
        <Grid container alignItems="center">
          { contentAtLeft ? null : hobbyIcon }
          { hobbyContent }
          { contentAtLeft ? hobbyIcon : null }
        </Grid>
        { endOfItems ? null : <br/> }
      </div>
    )
  })
  return (
    <Container maxWidth="sm">
      <Card className={ classes.card } variant="outlined" align="justify">
        <CardContent>
          <Typography variant="h5">
            { mainTitle }
          </Typography><br/>
          { hobbies }
        </CardContent>
      </Card>
    </Container>
  )
}

export default Hobbies
