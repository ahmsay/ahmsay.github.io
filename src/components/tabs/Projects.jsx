import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography } from '@material-ui/core'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'

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
    const { mainTitle, projects } = this.props.card
    const handleChange = (index) => (event, newExpanded) => {
      this.setState({
        expandedPanelIndex: index,
        newExpanded
      })
    }
    const projectList = projects.map((project, index) => {
      return (
        <ExpansionPanel key={ index } square expanded={ this.state.expandedPanelIndex === index && this.state.newExpanded } onChange={ handleChange(index) }>
          <ExpansionPanelSummary>
            <Typography>{ project.title }</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              { project.detail }
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      )
    })
    return (
      <Card className={ classes.card } variant="outlined" align="justify">
        <CardContent>
          <Typography variant="h5">{ mainTitle }</Typography><br/>
          { projectList }
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(useStyles)(Projects)
