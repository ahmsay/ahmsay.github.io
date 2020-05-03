import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  card: theme.card
}))

const About = ({ tab }) => {
  const classes = useStyles()
  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          { tab.card.title }
        </Typography><br/>
        <Typography variant="body2" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veniam reprehenderit rerum. Quis error labore nihil numquam in perferendis incidunt veniam facere assumenda, facilis distinctio
        </Typography><br/>
        <Typography variant="subtitle1" component="h2">
          Lorem Ipsum
        </Typography>
        <Typography variant="body2" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veniam reprehenderit rerum. Quis error labore nihil numquam in perferendis incidunt veniam facere assumenda, facilis distinctio, beatae minima tempora magnam reprehenderit?
        </Typography><br/>
        <Typography variant="subtitle1" component="h2">
          Dolor sit
        </Typography>
        <Typography variant="body2" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veniam reprehenderit rerum. Quis error labore nihil numquam in perferendis incidunt veniam facere assumenda, facilis distinctio, beatae minima tempora magnam reprehenderit?
        </Typography><br/>
        <Typography variant="body1">
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Ipsum lorem sit</li>
            <li>Dolor</li>
            <li>Lorem dolor sit ipsum</li>
          </ul>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default About
