import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { List, ListItem, ListItemIcon, ListItemText, Card, CardContent, Icon } from '@material-ui/core'

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
            <Icon>star</Icon>
            </ListItemIcon>
            <ListItemText primary="Churnify" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Icon>star</Icon>
            </ListItemIcon>
            <ListItemText primary="Star Wars Quick Guide" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  )
}

export default Projects
