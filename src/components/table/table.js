import React, { Component } from "react";
import NavigationBar from '../nav/nav';
import { Jumbotron } from "react-bootstrap";
const request = require('superagent');

class Table extends Component {
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
                <p>jaskjcnckchwiu</p>


                <table striped bordered condensed hover>
    
                    <thead>
                        <tr>
                            <th>Positon</th>
                            <th>Name</th>
                            <th>points</th>
                            <th>Won</th>
                        </tr>
                    </thead>

                    <tbody>
                    {this.state.tableData.map((item,index) => {
                        console.log(item)
                        return (
                            <tr key={index}>
                                <td>{item.position}</td>
                                <td>{item.team.name}</td>
                                <td>{item.points}</td>
                                <td>{item.won}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </Jumbotron>

        </div>
            
        );
    }
}

export default Table