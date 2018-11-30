import React, {Component} from 'react';
import NavigationBar from '../nav/nav';
import { Jumbotron, Grid, Row, Col, ListGroup } from "react-bootstrap";
import ToCome from './matches-to-come';
import Played from './matches-played';

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

       
    }
    componentDidMount() {
        request
        .get('https://api.football-data.org/v2/competitions/PL/matches/?matchday=13')
        .set('X-Auth-Token', 'f9e9c780ab5b47f9a74f1655c871761d')
        .end((err, res) =>{
          // Do something
          if (err) {
              console.log(err)
          } else{
            this.setState({
                matches: res.body.matches,
                details: {
                    competition: res.body.competition,
                    matchDay: res.body.filters.matchday
                }
            });
          }
        });
    }
    changeMatchDay(matchDay) {
        if (matchDay > 0 && matchDay < 39) {
            request
            .get(`https://api.football-data.org/v2/competitions/PL/matches/?matchday=${matchDay}`)
            .set('X-Auth-Token', 'f9e9c780ab5b47f9a74f1655c871761d')
            .end((err, res) => {
                if (err) {
                    console.log(err)
                }
              this.setState({
                matches: res.body.matches,
                details: {
                    competition: res.body.competition,
                    matchDay: res.body.filters.matchday
                }
                });
            });
        }

    }
    btnCLick(){

        console.log('---===-=-=');
        console.log(this.state);

        request
        .get(`https://api.football-data.org/v2/competitions/PL/matches/?matchday=15`)
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
        let matchDay = this.state.details.matchDay;
        return(
            <div>
                <NavigationBar></NavigationBar>
                <Jumbotron>


                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={12}>
                            <h1 className='center'>MatchDay {this.state.details.matchDay}</h1>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={1} md={1}>
                            <p onClick={ ()=> this.changeMatchDay(matchDay-1) }>Previous</p>
                        </Col>
                        <Col xs={10} md={10}>    
                            <ListGroup>
                    
                            {this.state.matches.map((item,index)=>{
                                if (item.score.winner) { //check if the match has been played
                                    return(
                                        <Played matches={item} key={index}></Played>
                                    )
                                } else {
                                    return(
                                        <ToCome matches={item} key={index}></ToCome>
                                    )
                                }
                            })}  
                            </ListGroup>

                        </Col>
                        <Col xs={1} md={1}>
                            <p onClick={ ()=> this.changeMatchDay(+matchDay+1) }>Next</p>
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