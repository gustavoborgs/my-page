import React, { Component } from 'react';
import {Grid, Row, Col, Image, Button } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor'
import './Profile.css'

import axios from 'axios';  

const api = axios.create({
    baseURL: 'http://localhost:3333/'
})

class index extends Component {

    state = {
        configs : [
            {
                index : "interesses",
                details : []
            },
            {
                index : "idiomas",
                details : []
            },
            {
                index : "formacao",
                details : []
            },
            {
                index : "atividades",
                details : []
            }
        ] 
    }
          
    

    async componentDidMount() {
        const { data } = await api.get('admin/keys_details')

        this.setState({ configs: [...data] })
    }
    
    getName = () => {
        if(this.props.configs.length > 0) {
            return <h2 className="nome">{ this.props.configs.find(item => item.index === "my-name").value }</h2>
        }
        else {
            return "Loading..."
        }
    }

    getAboutMe = () => {
        if(this.props.configs.length > 0) {
            return <p className="sobre_mim">{ this.props.configs.find(item => item.index === "about-me").value }</p>
        }
        else {
            return "Loading..."
        }
    }

    getPicture = () => {
        if(this.props.configs.length > 0 && this.props.configs.find(item => item.index === "picture") != null) { 
            return <Image src={ this.props.configs.find(item => item.index === "picture").value } circle className="img-fluid" />
        }
        else {
            return <Image src="assets/nopicture.png" circle className="img-fluid" />
        }
    }

    render() {
        return (
            <ScrollableAnchor id={'profile'}>
            <section className="bg-smoke">
                <Grid>
                    <Row>
                        <Col className="text-center" lg={6}>
                            { this.getPicture() }
                            { this.getAboutMe() }
                            <Button className="btn_curriculo" bsStyle="primary">CURRÍCULO COMPLETO</Button>
                        </Col>
                        <Col lg={6}>
                            
                            { this.getName() }

                            <h3 className="titulo">Interesses</h3>
                            <ul>
                                { this.state.configs.find(item => item.index === "interesses").details.map(detail => (
                                    <li key={ detail.index }> { detail.value } </li>
                                ))}
                            </ul>

                            <h3 className="titulo">Idiomas</h3>
                            <ul>
                                { this.state.configs.find(item => item.index === "idiomas").details.map(detail => (
                                    <li key={ detail.index }> { detail.value } </li>
                                ))}
                            </ul>

                            <h3 className="titulo">Formação</h3>
                            <ul>
                                { this.state.configs.find(item => item.index === "formacao").details.map(detail => (
                                    <li key={ detail.index }> { detail.value } </li>
                                ))}
                            </ul>

                            <h3 className="titulo">Atividades</h3>
                            <ul>
                                { this.state.configs.find(item => item.index === "atividades").details.map(detail => (
                                    <li key={ detail.index }> { detail.value } </li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                </Grid>
            </section>
            </ScrollableAnchor>
        );
    }
}

export default index;