import React, { Component } from 'react'
import { Grid, Container, Box } from '@material-ui/core'

class Footer extends Component {
  render() {
    const { footerContent } = this.props
    const links = footerContent.accounts.map((account, index) => {
      return (
        <Grid item md={3} key={ index }>
          <Box display="flex" justifyContent="center">
            { account.name }
          </Box>
        </Grid>
      )
    })
    return (
      <div style={{ backgroundColor: '#000', color: '#fff' }}>
        <Container fixed>
          <Grid container spacing={4}>
            { links }
          </Grid>
        </Container>
      </div>
    )
  }
}

export default Footer
