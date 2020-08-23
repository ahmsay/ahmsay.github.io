import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography, Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  card: theme.card
}))

const About = ({ aboutContent }) => {
  const classes = useStyles()
  const { mainTitle, mainContent, whatElse, developerMessage } = aboutContent
  return (
    <Card className={ classes.card } variant="outlined" align="justify">
      <CardContent>
        <Typography variant="h5">
          { mainTitle }
        </Typography><br/>
        <Typography variant="body2">
          { mainContent }
        </Typography><br/>
        <Typography variant="subtitle1">
          <Box fontWeight="fontWeightMedium">{ whatElse.title }</Box>
        </Typography>
        <Typography variant="body2">
          { whatElse.content }
        </Typography><br/>
        <Typography variant="subtitle1">
          <Box fontWeight="fontWeightMedium">{ developerMessage.title }</Box>
        </Typography>
        <Typography variant="body2">
          { developerMessage.content }
        </Typography>
      </CardContent>
  </Card>
  )
}

export default About
