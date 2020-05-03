import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  card: theme.card
}))

const Hobbies = ({ tab }) => {
  const classes = useStyles()
  const hobbies = tab.card.body.map(hobby => {
    return (
      <div key={ hobby.title }>
        <Typography variant="subheading1" component="h3">
          { hobby.title }
        </Typography>
        <Typography variant="body2" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestias cum suscipit ducimus, perspiciatis ipsa eum architecto minus mollitia tempore a doloremque, non provident at id quasi corrupti sit inventore.
        </Typography>
      </div>
    )
  })
  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          { tab.card.title }
        </Typography><br/>
        { hobbies }
      </CardContent>
    </Card>
  )
}

export default Hobbies
