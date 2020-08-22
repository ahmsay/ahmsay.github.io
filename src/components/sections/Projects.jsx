import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { CardActions, ExpansionPanelActions, Button, Card, CardContent, Typography } from '@material-ui/core'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = (theme) => ({
  card: theme.card
})

const ExpansionPanel = withStyles({
  root: {
    backgroundColor: '#0001',
    color: '#fff',
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  },
  expanded: {}
})(MuiExpansionPanel)

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: '#fff2',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56
    }
  },
  content: {
    '&$expanded': {
      margin: '12px 0'
    }
  },
  expanded: {}
})(MuiExpansionPanelSummary)

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiExpansionPanelDetails)

class Projects extends Component {
  state = {
    expandedPanelIndex: '-',
    newExpanded: false
  }
  render() {
    const { classes } = this.props
    const { mainTitle, projectList } = this.props.projectsContent
    const handleChange = (index) => (event, newExpanded) => {
      this.setState({
        expandedPanelIndex: index,
        newExpanded
      })
    }
    const projectListProcessed = projectList.map((project, index) => {
      return (
        <ExpansionPanel key={ index } square expanded={ this.state.expandedPanelIndex === index && this.state.newExpanded } onChange={ handleChange(index) }>
          <ExpansionPanelSummary expandIcon={ <ExpandMoreIcon style={{ color: '#fff' }}/> }>
            <Typography variant="subtitle1">
              { project.title }
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant="body2">
              { project.detail }
            </Typography>
          </ExpansionPanelDetails>
          <ExpansionPanelActions style={{ paddingTop: 0 }}>
            <Button onClick={ () => { window.open( project.link, "_blank") } } style={{ color: '#ffffff' }} size="small">More</Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      )
    })
    return (
      <Card className={ classes.card } variant="outlined" align="justify">
        <CardContent>
          <Typography variant="h5">{ mainTitle }</Typography><br/>
          { projectListProcessed }
        </CardContent>
        <CardActions style={{ paddingTop: 0 }}>
          <Button onClick={ () => { window.open( "https://github.com/ahmsay?tab=repositories", "_blank") } } style={{ color: '#ffffff', marginLeft: 4 }} size="small">See Other Projects</Button>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(useStyles)(Projects)
