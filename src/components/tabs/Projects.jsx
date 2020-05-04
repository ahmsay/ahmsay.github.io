import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import StarIcon from '@material-ui/icons/Star'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles((theme) => ({
  card: theme.card
}))

const Projects = () => {
  const classes = useStyles();
  return (
    <Card className={ classes.card } variant="outlined" align="justify">
      <CardContent>
        <List component="nav" aria-label="contacts">
          <ListItem button>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Churnify" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Star Wars Quick Guide" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  )
}

export default Projects
