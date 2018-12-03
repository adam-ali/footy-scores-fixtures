import React, { Component } from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';

class NavigationBar extends Component {

    render() {
        return(
        <div>
            <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <span>Footy updates</span>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <LinkContainer to="/" >
                    <NavItem eventKey={1} href="#">Home</NavItem>
                </LinkContainer>
                <LinkContainer to="/results/">
                    <NavItem eventKey={2} href="#">Results</NavItem>
                </LinkContainer>
                <LinkContainer to="/table/">
                    <NavItem eventKey={2} href="#">Table</NavItem>
                </LinkContainer>
            </Nav>
            </Navbar>
        </div>
            
        );
    }
}

export default NavigationBar