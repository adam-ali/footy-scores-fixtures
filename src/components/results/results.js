import React, {Component} from 'react';
import NavigationBar from '../nav/nav';
import { Jumbotron } from "react-bootstrap";
const request = require('superagent');

class Results extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { counter: 0 };

        request
        .get('https://api.football-data.org/v2/competitions/PL/matches/?matchday=13')
        .set('X-Auth-Token', 'f9e9c780ab5b47f9a74f1655c871761d')
        .end((err, res) => {
          // Do something
          console.log(res.body);

          this.state = {
              matches: res.body.matches,
              details: {
                  competition: res.body.competition.name,
                  matchDay: res.body.filters.matchday
              }
          }
        });
    }
    btnCLick(){

        console.log('---===-=-=');
        console.log(this.state);
    }
    render(){
        return(
            <div>
                <NavigationBar></NavigationBar>
                <Jumbotron>
                    <h1>Results</h1>
                    <p>ljdcbkbdcsbjhb</p>
                    <button onClick={this.btnCLick.bind(this)}>show state</button>
                </Jumbotron>
            </div>
        )
    }

}

export default Results;