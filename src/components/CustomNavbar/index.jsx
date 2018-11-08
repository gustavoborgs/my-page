import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

class index extends Component {
    render() {
        return (
            <Navbar default fixedTop collapseOnSelect className="sticky-nav">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Gustavo Borges</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        {/* <NavItem eventKey={1} href="#home">
                            HOME
                        </NavItem> */}

                        <NavItem eventKey={1} href="#profile">
                            PERFIL
                        </NavItem>

                        <NavItem eventKey={2} href="#skills">
                            SKILLS
                        </NavItem>

                        <NavItem eventKey={3} href="#blog" >
                            BLOG
                        </NavItem>

                        <NavItem eventKey={4} href="#portfolio" >
                            PORTFÓLIO
                        </NavItem>

                         <NavItem eventKey={5} href="#about" >
                            INFORMAÇÕES
                        </NavItem>

                        <NavItem eventKey={6} href="#contact">
                            CONTATO
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default index;