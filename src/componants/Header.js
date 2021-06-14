import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends Component {
    render() {
        return (
           <>
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Digimon APP</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/favorite">My Digimon</Nav.Link>
    </Nav>
    </Navbar>
           
           
           
           
           </>
        )
    }
}

export default Header;
