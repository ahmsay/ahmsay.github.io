import React from 'react'
import Navbar from './components/Navbar'
import TabList from './components/TabList'
import Container from '@material-ui/core/Container'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Container maxWidth="sm">
        <TabList/>
      </Container>
    </div>
  );
}
