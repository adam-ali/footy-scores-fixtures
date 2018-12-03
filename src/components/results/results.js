import React, {Component} from 'react';
import NavigationBar from '../nav/nav';
import { Jumbotron, Grid, Row, Col, ListGroup, Button } from "react-bootstrap";
import ToCome from './matches-to-come';
import Played from './matches-played';

const request = require('superagent');

class Results extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = { 
            allMatches: [],
            competitionName: '',
            currentMatchDay: 1,
            matchDayMatches: [],
        };
       
    }
    componentDidMount() {
        this._isMounted = true;

        request
        .get('https://api.football-data.org/v2/competitions/PL/matches/')
        .set('X-Auth-Token', 'f9e9c780ab5b47f9a74f1655c871761d')
        .end((err, res) =>{
          if (err) {
              console.log(err)
          } else {
            if (this._isMounted) {
                this.setState({
                    allMatches: res.body.matches,
                    competitionName: res.body.competition.name
                });
                this.getCurrentMatchday();
            }
          }
        });
    }
    componentWillUnmount() {
        this._isMounted = false;
      }
    getCurrentMatchday(){
        request
        .get('https://api.football-data.org/v2/competitions/PL/standings/')
        .set('X-Auth-Token', 'f9e9c780ab5b47f9a74f1655c871761d')
        .end((err, res) =>{
            if (err) {
                console.log(err)
            } else{
                if (this._isMounted) {

                    this.setState({
                        currentMatchDay: res.body.season.currentMatchday,
                        selectedMatchDay: res.body.season.currentMatchday
                    });
                    this.setCurrentMatches()
                }
            }

        });
    }
    setCurrentMatches(matchDay){
        let currentMatches = this.state.allMatches.filter((item)=>{
            return item.matchday === (matchDay ? matchDay: this.state.selectedMatchDay)
        })
        this.setState({
            matchDayMatches: currentMatches
        })
    }
    changeMatchDay(matchDay) {
        if (matchDay > 0 && matchDay < 39) {
            this.setState({
                selectedMatchDay: matchDay
            })
            this.setCurrentMatches(matchDay);
        }

    }
    render(){
        console.log(this.state)
        let matchDay = this.state.selectedMatchDay;
        return(
            <div>
                <NavigationBar></NavigationBar>
                <Jumbotron>


                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={12}>
                            <p className='center'>{this.state.competitionName}</p>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={1} md={2}>
                            <Button onClick={ ()=> this.changeMatchDay(matchDay-1) } bsStyle="success" bsSize="large" block> &lt; Previous </Button>
                        </Col>

                        <Col xs={10} md={8}>
                            <h2 className='center'>MatchDay {this.state.selectedMatchDay}</h2>
                        </Col>

                         <Col xs={1} md={2}>
                            <Button onClick={ ()=> this.changeMatchDay(+matchDay+1) } bsStyle="success" bsSize="large" block>Next &gt; </Button>
                        </Col>

                    </Row>
                    <Row className="show-grid">
                        <Col xs={12} md={12}>    
                            <ListGroup>
                    
                            {this.state.matchDayMatches.map((item,index)=>{
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
                    </Row>
                </Grid>

                </Jumbotron>
            </div>
        )
    }

}

export default Results;