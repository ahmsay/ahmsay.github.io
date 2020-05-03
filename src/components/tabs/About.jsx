import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
  card: theme.card,
  link: {
    color: '#ffffff'
  }
}))

const About = () => {
  const classes = useStyles()
  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Hello There !
        </Typography><br/>
        <Typography variant="body2" component="p">
          My name is Ahmet. I was born in Eskişehir. I am graduated from Anadolu University and living in Ankara, Turkey. I work at TÜBİTAK (Scientific and Technological Research Council of Turkey) as a software developer. I am interested in devops and microservices architecture.
        </Typography><br/>
        <Typography variant="subtitle1" component="h2">
          What Else ?
        </Typography>
        <Typography variant="body2" component="p">
          I like go kart, watching movies and tv series, listening eurobeat, playing video games, table football, billiard, drawing, drinking tea. I am really interested in space related topics and wild nature. Tiger is my favorite animal. Besides work, I also code some stuff to learn and improve myself.
        </Typography><br/>
        <Typography variant="subtitle1" component="h2">
          For Those Who Wants to be a Software Developer
        </Typography>
        <Typography variant="body2" component="p">
          There are tons of materials on internet that can guide you, help you to solve the problem you stuck and improve your skills. All you need is a desire to learn. I know this sounds like a cliche but it is the truth.
        </Typography><br/>
        <Typography variant="body1">
          For More
          <ul>
            <li>
              <Link href="https://tr.linkedin.com/in/ahmet-say-769485120" target="_blank" rel="noopener" className={ classes.link }>
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href="https://github.com/ahmsay" target="_blank" rel="noopener" className={ classes.link }>
                GitHub
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/ahmsay26/" target="_blank" rel="noopener" className={ classes.link }>
                Instagram
              </Link>
            </li>
          </ul>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default About
