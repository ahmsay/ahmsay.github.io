import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, CardActions, Card, CardContent, CardMedia, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  card: theme.card
}))

const Hometown = ({ card }) => {
  const classes = useStyles()
  return (
    <Card className={ classes.card } variant="outlined" align="justify">
      <CardMedia title="Porsuk River, Eskişehir" style={{ height: 0, paddingTop: '55%' }} image={ require('../../images/eskisehir.jpg') }/>
      <CardContent>
        <Typography variant="subtitle1">
          { card.title }
        </Typography>
        <Typography variant="body2">
          { card.content }
        </Typography>
      </CardContent>
      <CardActions style={{ paddingTop: 0 }}>
        <Button onClick={ () => { window.open( card.source, "_blank") } } style={{ color: '#ffffff' }} size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default Hometown
