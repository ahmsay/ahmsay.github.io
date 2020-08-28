import React, { Component } from 'react'
import { Grid, Container, Box, IconButton } from '@material-ui/core'
import AlarmIcon from '@material-ui/icons/Alarm'

class Footer extends Component {
  render() {
    const { footerContent } = this.props
    const icons = footerContent.accounts.map((account, index) => {
      return (
        <Grid item md={3} key={ index }>
          <Box display="flex" justifyContent="center">
            <IconButton style={{ color: '#fff' }}>
              <AlarmIcon onClick={ () => { window.open(account.link, "_blank") } }/>
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
