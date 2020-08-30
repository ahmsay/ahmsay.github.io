import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography, Grid, Icon, Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  mainCard: theme.mainCard
}))

const Hobbies = ({ hobbiesContent }) => {
  const classes = useStyles()
  const { mainTitle, hobbyList } = hobbiesContent
  const hobbies = hobbyList.map((hobby, index) => {
    const contentAtLeft = index %2 === 0
    const marginLeft = contentAtLeft ? 18 : 0
    const marginRight = contentAtLeft ? 0 : 18
    const endOfItems = index === hobbyList.length - 1
    const iconStyle = {
      fontSize: 60,
      marginRight,
      marginLeft
    }
    const hobbyIcon = (
      <Grid item xs={3}>
        <Grid container justify="center">
          <Icon style={ iconStyle }>{ hobby.icon }</Icon>
        </Grid>
      </Grid>
    )
    const hobbyContent = (
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
      <Card className={ classes.mainCard } variant="outlined" align="justify">
        <CardContent>
          <Typography variant="h4" align="center">{ mainTitle }</Typography>
          <br/>
          { hobbies }
        </CardContent>
      </Card>
    </Container>
  )
}

export default Hobbies
