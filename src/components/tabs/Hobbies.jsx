import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  card: theme.card
}))

const Hobbies = ({ card }) => {
  const classes = useStyles()
  const hobbies = card.hobbies.map((hobby, index) => {
    let hobbyIcon = (
      <Grid item xs={3}>
        <Grid container justify="center">
          <Icon style={{ fontSize: 60, marginRight: 18 }}>{ hobby.icon }</Icon>
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
      <div key={ hobby.title }>
        <Grid container alignItems="center">
          { index %2 === 0 ? null : hobbyIcon }
          { hobbyContent }
          { index %2 === 0 ? hobbyIcon : null }
        </Grid>
        <br/>
      </div>
    )
  })
  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography variant="h5">
          { card.title }
        </Typography><br/>
        { hobbies }
      </CardContent>
    </Card>
  )
}

export default Hobbies
