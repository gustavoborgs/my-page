import React, { Component } from 'react';
import {Grid, Row, Col } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor'
import './Skills.css';

import axios from 'axios';  

const api = axios.create({
    baseURL: 'https://admin-gustavo.herokuapp.com/',
    headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
    }
})

class index extends Component {

    state = {
        skills: []
    }

    async componentDidMount() {
        const {data: skills} = await api.get('/skills');
        this.setState({ skills: skills })
    }

    render() {
        
        return (
            <ScrollableAnchor id={'skills'}>
            <section>
                <div className="container">
                <Grid>
                    <Row>
                        <Col lg={12}> 
                            <h1 className="text-center title-page">SKILLS</h1>
                        </Col>
                        <Col lg={12}> 
                            <p className="text-center">Segue uma lista de algumas das minhas habilidas profissionais</p>
                        </Col>
                        <Col lgOffset={2} lg={8} xs={12}>
                            <ul className="my-skills">
                                {this.state.skills.map(skill => (
                                    <li key={ skill.id }>{skill.name}</li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                </Grid>
                </div>
            </section>
            </ScrollableAnchor>
        );
    }
}

export default index;