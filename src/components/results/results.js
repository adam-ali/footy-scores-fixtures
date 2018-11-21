import React, {Component} from 'react';
import NavigationBar from '../nav/nav';
import { Jumbotron, Grid, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
const request = require('superagent');

class Results extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            matches: [],
            details: {
                competition: '',
                matchDay: ''
            }
        };

        request
        .get('https://api.football-data.org/v2/competitions/PL/matches/?matchday=13')
        .set('X-Auth-Token', 'f9e9c780ab5b47f9a74f1655c871761d')
        .end((err, res) =>{
          // Do something
          console.log(res.body);

          this.state = {
              matches: res.body.matches,
              details: {
                  competition: res.body.competition,
                  matchDay: res.body.filters.matchday
              }
          }
        });
    }
    changeMatchDay(action){
        let matchDay = 13;
        if(action === 'prev'){
            matchDay = +this.state.details.matchDay - 1;
        } else if (action === 'next'){
            matchDay = +this.state.details.matchDay + 1;            
        }
        console.log(matchDay)

        // this.state.details.matchDay = matchDay;
        // this.setState({
        //     details:{
        //         matchDay: matchDay
        //     }
        // })
        request
        .get(`https://api.football-data.org/v2/competitions/PL/matches/?matchday=${matchDay}`)
        .set('X-Auth-Token', 'f9e9c780ab5b47f9a74f1655c871761d')
        .end((err, res) => {
          // Do something
          console.log('change')
          console.log(res.body)

          this.setState({
              matches: res.body.matches,
              details: {
                  competition: res.body.competition.name,
                  matchDay: res.body.filters
              }
          });
        });
    }
    btnCLick(){

        console.log('---===-=-=');
        console.log(this.state);

        request
        .get(`https://api.football-data.org/v2/competitions/PL/matches/?matchday=14`)
        .set('X-Auth-Token', 'f9e9c780ab5b47f9a74f1655c871761d')
        .end((err, res) => {
          // Do something
          console.log('change')
          console.log(typeof res.body.matches)

          this.setState({
              matches: res.body.matches,
              details: {
                  competition: res.body.competition.name,
                  matchDay: res.body.filters
              }
          });
        });

    }
    render(){
        console.log(this.state.matches);

        return(
            <div>
                <NavigationBar></NavigationBar>
                <Jumbotron>


                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={12}>
                            <h1 className='center'>Results {this.state.details.matchDay}</h1>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={1} md={1}>
                            <p onClick={ ()=> this.changeMatchDay(12) }>Previous</p>
                        </Col>
                        <Col xs={10} md={10}>
                        
                            <ListGroup>
                            {this.state.matches.forEach(item=>{
                                            return(
                                <ListGroupItem href="#">
                                    <Grid>

                                        <Row className="show-grid">
                                            <Col xs={5} md={5}>
                                                <p className='center'>{item.homeTeam.name}</p>
                                            </Col>
                                            <Col xs={2} md={2}>
                                                <p className='center'>item</p>
                                            </Col>
                                            <Col xs={5} md={5}>
                                                <p className='center'>{item.awayTeam.name}</p>
                                            </Col>
                                        </Row>
                                       
                                    </Grid>
                                </ListGroupItem>
                                )})}  
                                <ListGroupItem href="#">Link 2</ListGroupItem>
                            </ListGroup>

                        </Col>
                        <Col xs={1} md={1}>
                            <p onClick={ ()=> this.changeMatchDay('prev') }>Next</p>
                        </Col>
                    </Row>
                </Grid>

                    <button className='center' onClick={this.btnCLick.bind(this)}>show state</button>

                </Jumbotron>
            </div>
        )
    }

}

export default Results;