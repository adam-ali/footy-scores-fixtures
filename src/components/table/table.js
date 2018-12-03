import React, { Component } from "react";
import NavigationBar from '../nav/nav';
import { Jumbotron, Table } from "react-bootstrap";
const request = require('superagent');

class CurrentStandings extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = { 
            tableData: [],
        };
       
    }

    componentDidMount() {
        this._isMounted = true;

        request
        .get('https://api.football-data.org/v2/competitions/PL/standings?standingType=TOTAL')
        .set('X-Auth-Token', 'f9e9c780ab5b47f9a74f1655c871761d')
        .end((err, res) =>{
            if (err) {
                console.log(err)
            } else{
                if (this._isMounted) {
                    console.log(res.body.standings[0].table)
                    this.setState({
                        tableData:res.body.standings[0].table
                    });
                }
            }

        });
    }
    render() {
        console.log(this.state)
        return(
        <div>
            <NavigationBar></NavigationBar>
            <Jumbotron>
                <h1>Table Current Standings</h1>
                <p>Game week: </p>


                <Table striped bordered condensed hover>
    
                    <thead>
                        <tr>
                            <th>Positon</th>
                            <th>Name</th>
                            <th>Played</th>
                            <th>Won</th>
                            <th>Drawn</th>
                            <th>Lost</th>
                            <th>For</th>
                            <th>Against</th>
                            <th>GD</th>
                            <th>points</th>

                        </tr>
                    </thead>

                    <tbody>
                    {this.state.tableData.map((item,index) => {
                        console.log(item)
                        return (
                            <tr key={index}>
                                <td>{item.position}</td>
                                <td> <b>{item.team.name} </b></td>
                                <td>{item.playedGames}</td>
                                <td>{item.won}</td>
                                <td>{item.draw}</td>
                                <td>{item.lost}</td>
                                <td>{item.goalsFor}</td>
                                <td>{item.goalsAgainst}</td>
                                <td>{item.goalDifference}</td>
                                <td><b>{item.points}</b></td>

                            </tr>
                        );
                    })}
                    </tbody>
                </Table>
            </Jumbotron>

        </div>
            
        );
    }
}

export default CurrentStandings