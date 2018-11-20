import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem } from "react-bootstrap";
class Nav extends Component {

    render() {
        return(
        <div>


<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">React-Bootstrap</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="/fixtures">
      Link
    </NavItem>
    <NavItem eventKey={2} href="#">
      Link
    </NavItem>
  </Nav>
</Navbar>;







            <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/results/">Results</Link>
            </li>
            <li>
                <Link to="/fixtures/">Fixtures</Link>
            </li>
            </ul>
            </nav>

        </div>
            
        );
    }
}

export default Nav