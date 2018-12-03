import React, { Component } from 'react';
import './App.css';
import ResultsAndFixtures from './results&fixtures/results&fixtures'
import CurrentStandings from './table/table'
import Home from './home/home'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {

  render() {
    console.log("This is the process.env", process.env.PUBLIC_URL)
    
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/results/" component={ResultsAndFixtures} />
          <Route path="/table/" component={CurrentStandings} />
        </div>
      </Router>
    );
  }
}

export default App;
