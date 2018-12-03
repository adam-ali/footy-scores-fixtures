import React, { Component } from "react";
import NavigationBar from '../nav/nav';
import { Jumbotron } from "react-bootstrap";

class Home extends Component {

    render() {
        console.log('HOme pge renderedd')
        return(
        <div>
            <NavigationBar></NavigationBar>
            <Jumbotron>
                <h1>Home </h1>
                <p>Welcome to the home of football updates ... </p>
            </Jumbotron>
        </div>
            
        );
    }
}

export default Home