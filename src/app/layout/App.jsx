import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import NavBar from '../../features/event/EventDashboard/EventDashboard'
import EventDashboard from '../../features/nav/NavBar/NavBar'

class App extends Component {
  render() {
    return (
      <div>
          <NavBar/>
          <Container className="main">
            <EventDashboard/>
          </Container>
      </div>
    );
  }
}

export default App;
