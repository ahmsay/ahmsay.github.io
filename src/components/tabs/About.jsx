import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  }
})

const About = ({ tab }) => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          { tab.card.title }
        </Typography>
        <Typography variant="body2" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veniam reprehenderit rerum. Quis error labore nihil numquam in perferendis incidunt veniam facere assumenda, facilis distinctio, beatae minima tempora magnam reprehenderit?
        </Typography>
        <Typography variant="subtitle1" component="h2">
          { tab.card.title }
        </Typography>
        <Typography variant="body2" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veniam reprehenderit rerum. Quis error labore nihil numquam in perferendis incidunt veniam facere assumenda, facilis distinctio, beatae minima tempora magnam reprehenderit?
        </Typography>
        <Typography variant="subtitle1" component="h2">
          { tab.card.title }
        </Typography>
        <Typography variant="body2" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veniam reprehenderit rerum. Quis error labore nihil numquam in perferendis incidunt veniam facere assumenda, facilis distinctio, beatae minima tempora magnam reprehenderit?
        </Typography>
      </CardContent>
    </Card>
  )
}

export default About
