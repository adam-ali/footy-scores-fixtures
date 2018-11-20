import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem, Nav, Button, ButtonToolbar, NavbarHeader, NavbarBrand } from "react-bootstrap";
class NavigationBar extends Component {

    render() {
        return(
        <div>
            <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                <a href="#home">Footy Scores</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} >
                    <Link to="/">Home</Link>
                </NavItem>
                <NavItem eventKey={2} href="#">
                    <Link to="/results/">Results</Link>
                </NavItem>
                <NavItem eventKey={2} href="#">
                    <Link to="/fixtures/">Results</Link>
                </NavItem>
            </Nav>
            </Navbar>
        </div>
            
        );
    }
}

export default NavigationBar