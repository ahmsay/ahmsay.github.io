import React from 'react'
import { Grid, Container, Box, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  footer: theme.footer,
  iconButton: theme.iconButton,
  image: theme.image
}))

const Footer = ({ footerContent }) => {
  const classes = useStyles()
  const icons = footerContent.accounts.map((account, index) => {
    return (
      <Grid item md={3} key={ index }>
        <Box display="flex" justifyContent="center">
          <IconButton className={ classes.iconButton } onClick={ () => { window.open(account.link, "_blank") } }>
            <img src={require('../images/' + account.icon)} alt={ account.name } className={ classes.image }/>
          </IconButton>
        </Box>
      </Grid>
    )
  })
  return (
    <div className={ classes.footer }>
      <br/><br/>
      <Container maxWidth="sm">
        <Grid container justify="center">
          { icons }
        </Grid>
      </Container>
      <br/><br/>
    </div>
  )
}

export default Footer
