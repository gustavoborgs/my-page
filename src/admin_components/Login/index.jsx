import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'

import './Index.css'

import axios from 'axios';  

const api = axios.create({
    baseURL: 'https://admin-gustavo.herokuapp.com/'
})

class index extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: ""
        };
    }
    
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }
    
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    
    handleSubmit = async (event) => {
        event.preventDefault();

        const result = await api.post('/auth', {email: this.state.email, password: this.state.password})
        
        localStorage.setItem("token", result.data.token);

        this.props.history.push('/admin')
        window.location.reload()
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                    autoFocus
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                    />
                </FormGroup>
                <Button
                    block
                    bsSize="large"
                    disabled={!this.validateForm()}
                    type="submit">
                    Login
                </Button>
                </form>
            </div>
        );
    }
}

export default withRouter(index);