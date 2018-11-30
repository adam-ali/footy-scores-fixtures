import React, {Component} from 'react';
import { Grid, Row, Col, ListGroupItem } from "react-bootstrap";

class played extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {};
    }

    render(){
        let homeTeamScore = this.props.matches.score.fullTime.homeTeam;
        let awayTeamScore = this.props.matches.score.fullTime.awayTeam;

        return(
            <div >
                <ListGroupItem href="#" >
                    <Grid>

                        <Row className="show-grid">
                            <Col xs={5} md={5}>
                                <p className='center'>{this.props.matches.homeTeam.name}</p>
                            </Col>
                            <Col xs={2} md={2}>
                                <p className='center'>{homeTeamScore}-{awayTeamScore}</p>
                            </Col>
                            <Col xs={5} md={5}>
                                <p className='center'>{this.props.matches.awayTeam.name}</p>
                            </Col>
                        </Row>
                    
                    </Grid>
                </ListGroupItem>
            </div>
        )

    }
}

export default played;
