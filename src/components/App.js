import React, { Component } from 'react';
import './App.css';
import Results from './results/results'
import Table from './table/table'
import Home from './home/home'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {

  render() {
    console.log("This is the process.env", process.env.PUBLIC_URL)
    
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/results/" component={Results} />
          <Route path="/table/" component={Table} />
        </div>
      </Router>
    );
  }
}

export default App;
