import React, { Component } from "react";
import NavigationBar from '../nav/nav';
import { Jumbotron } from "react-bootstrap";

class Table extends Component {

    render() {
        return(
        <div>
            <NavigationBar></NavigationBar>
            <Jumbotron>
                <h1>Table Current Standings</h1>
                <p>jaskjcnckchwiub </p>
            </Jumbotron>

        </div>
            
        );
    }
}

export default Table