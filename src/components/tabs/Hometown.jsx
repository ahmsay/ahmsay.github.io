import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  card: theme.card
}))

const Hometown = () => {
  const classes = useStyles()
  return (
    <Card className={ classes.card } variant="outlined" align="justify">
      <CardMedia component="img" alt="Eskişehir" height="250" image="/static/images/cards/eskisehir.jpg" title="Eskişehir"/>
      <CardContent>
        <Typography gutterBottom variant="subtitle1">
          Eskişehir
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium quasi, sapiente, repellendus iste natus officiis ipsa, ad ipsam sunt placeat voluptatem? Natus, magni. Vero labore quaerat assumenda consequatur nostrum hic!
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Hometown
