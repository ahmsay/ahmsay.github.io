import React, { Component } from 'react'
import Tab1 from './tabs/Tab1'
import Tab2 from './tabs/Tab2'
import Tab3 from './tabs/Tab3'
import Tab4 from './tabs/Tab4'

export default class TabList extends Component {
  render() {
    return (
      <div>
        <Tab1/>
        <Tab2/>
        <Tab3/>
        <Tab4/>
      </div>
    )
  }
}
