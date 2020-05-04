import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography, Link } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  card: theme.card,
  link: {
    color: '#ffffff'
  }
}))

const About = ({ card }) => {
  const classes = useStyles()
  const { mainTitle, mainContent, section1, section2, section3 } = card
  const links = section3.links.map(link => {
    return (
      <li key={ link.name }>
        <Link href={ link.href } target="_blank" rel="noopener" className={ classes.link }>
          { link.name }
        </Link>
      </li>
    )
  })
  return (
    <Card className={ classes.card } variant="outlined" align="justify">
      <CardContent>
        <Typography variant="h5">{ mainTitle }</Typography><br/>
        <Typography variant="body2">{ mainContent }</Typography><br/>
        <Typography variant="subtitle1">{ section1.title }</Typography>
        <Typography variant="body2">{ section1.content }</Typography><br/>
        <Typography variant="subtitle1">{ section2.title }</Typography>
        <Typography variant="body2">{ section2.content }</Typography><br/>
        <Typography variant="subtitle1">{ section3.title }</Typography>
        <ul style={{ marginBottom: 0 }}>{ links }</ul>
      </CardContent>
    </Card>
  )
}

export default About
