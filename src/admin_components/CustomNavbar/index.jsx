import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import './CustomNavbar.css';

class index extends Component {

    handleLogout = (e) => {
        localStorage.clear()
        this.props.history.push('/admin')
        window.location.reload()
    }

    render() {
        return (
            <Navbar default fixedTop collapseOnSelect className="sticky-nav">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/admin">Administrador</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>

                        <NavItem eventKey={1} to="/admin/profile" href="/admin/profile">
                            PERFIL
                        </NavItem>

                        <NavItem eventKey={2} to="/admin/details" href="/admin/details">
                            DETAILS
                        </NavItem>

                        <NavItem eventKey={2} to="/admin/skills" href="/admin/skills">
                            SKILLS
                        </NavItem>

                        <NavItem eventKey={6} onClick={this.handleLogout}>
                            LOGOUT
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default withRouter(index);