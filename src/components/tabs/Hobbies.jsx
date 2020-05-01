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

const Hobbies = ({ tab }) => {
  const classes = useStyles()
  const hobbies = tab.card.body.map(hobby => {
    return (
      <Card key={ hobby.title } className={classes.root}>
        <CardContent>
          <Typography variant="subheading1" component="h3">
            { hobby.title }
          </Typography>
          <Typography variant="body2" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestias cum suscipit ducimus, perspiciatis ipsa eum architecto minus mollitia tempore a doloremque, non provident at id quasi corrupti sit inventore.
          </Typography>
        </CardContent>
      </Card>
    )
  })
  return (
    <div>
      <Typography variant="h5" component="h2">
        { tab.card.title }
      </Typography>
      { hobbies }
    </div>
  )
}

export default Hobbies
