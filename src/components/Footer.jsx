import React, { Component } from 'react'
import { Grid, Container, Box, IconButton } from '@material-ui/core'

class Footer extends Component {
  render() {
    const { footerContent } = this.props
    const icons = footerContent.accounts.map((account, index) => {
      return (
        <Grid item md={3} key={ index }>
          <Box display="flex" justifyContent="center">
            <IconButton style={{ color: '#fff' }} onClick={ () => { window.open(account.link, "_blank") } }>
              <img src={require('../images/' + account.icon)} alt={ account.name } width="30" height="30"/>
            </IconButton>
          </Box>
        </Grid>
      )
    })
    return (
      <div style={{ backgroundColor: '#000', color: '#fff' }}>
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
}

export default Footer
