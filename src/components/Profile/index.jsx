import React, { Component } from 'react';
import {Grid, Row, Col, Image, Button } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor'
import './Profile.css'

class index extends Component {
    render() {
        return (
            <ScrollableAnchor id={'profile'}>
            <section className="bg-smoke">
                <Grid>
                    <Row>
                        <Col className="text-center" lg={6}>
                            <Image src="assets/profile.png" circle className="img-fluid" />
                            <p className="sobre_mim">Olá, eu sou o Gustavo Cavalcante sou desenvenvolvedor full-stack mas atualmente tenho me focado no desenvolvimento de aplicativos mobile nativos e na minha Startup que atua na area de eventos.</p>
                            <Button className="btn_curriculo" bsStyle="primary">CURRÍCULO COMPLETO</Button>
                        </Col>
                        <Col lg={6}>
                            <h2 className="nome">Gustavo Cavalcante Borges</h2>
                            <h3 className="titulo">Interesses</h3>
                            <ul>
                                <li>Aplicativos Mobile</li>
                                <li>Aplicativos Web</li>
                                <li>Realidade Aumentada</li>
                            </ul>

                            <h3 className="titulo">Idiomas</h3>
                            <ul>
                                <li>Português - Nativo</li>
                                <li>Inglês - Tecnico</li>
                            </ul>

                            <h3 className="titulo">Formação</h3>
                            <ul>
                                <li>UTFPR - Cursando Engenharia Software</li>
                                <li>Senai - Técnico em Informatica</li>
                                <li>Ensino Médio</li>
                            </ul>

                            <h3 className="titulo">Atividades</h3>
                            <ul>
                                <li>Desenvolvimento Android Nativo</li>
                                <li>Desenvolvimento iOS Nativo</li>
                                <li>Co-Founder Startup</li>
                                <li>Professor - Senai Londrina</li>
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