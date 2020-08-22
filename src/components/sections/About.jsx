import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography, Link } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  card: theme.card,
  link: theme.link
}))

const About = ({ aboutContent }) => {
  const classes = useStyles()
  const { mainTitle, mainContent, whatElse, developerMessage, forMore } = aboutContent
  const links = forMore.links.map(link => {
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
        <Typography variant="subtitle1">{ whatElse.title }</Typography>
        <Typography variant="body2">{ whatElse.content }</Typography><br/>
        <Typography variant="subtitle1">{ developerMessage.title }</Typography>
        <Typography variant="body2">{ developerMessage.content }</Typography><br/>
        <Typography variant="subtitle1">{ forMore.title }</Typography>
        <ul style={{ marginBottom: 0 }}>{ links }</ul>
      </CardContent>
  </Card>
  )
}

export default About
