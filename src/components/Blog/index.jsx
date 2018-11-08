import React, { Component } from 'react';
import {Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor'

class index extends Component {
    render() {
        return (
            <ScrollableAnchor id={'blog'}>
            <section className="bg-smoke">
                <Grid>
                    <Row>
                        <Col className="text-center" lg={12}>
                            <h1>BLOG</h1>
                        </Col>
                        <Col className="text-center" lg={12}>
                            <p>Veja algumas das minhas conquistas</p>
                        </Col>
                    </Row>
                    <Row style={{marginTop: 32}}>
                        <Col xs={12} md={6} lg={4}>
                            <Thumbnail src="assets/yazo.jpg" alt="242x200">
                            <h3>Lançamento da YAZO</h3>
                            <p>Tem lugar melhor para lançar uma Startup de Eventos do que em um Evento que tem Evento até no nome? Lançamento oficial da YAZO no Fórum Eventos 2018.</p>
                            <p className="text-right">
                                <Button bsStyle="primary">Acessar site</Button>
                            </p>
                            </Thumbnail>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Thumbnail src="assets/premio_caio.jpg" alt="242x200">
                            <h3>Jacaré de Prata</h3>
                            <p>Fomos prêmiados com o Jacaré de Prata no Prêmio Caio que é considerado o Oscar na area de eventos, tudo isso por trazermos soluções tecnologicas na area de eventos.</p>
                            <p className="text-right">
                                <Button bsStyle="primary">Button</Button>
                            </p>
                            </Thumbnail>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Thumbnail src="assets/ws2017.jpg">
                            <h3>Medalha de Ouro</h3>
                            <p>O dia em que medalhista de Ouro representando o estado do Paraná na Olímpiada do Conhecimento que aconteceu em Brasília,'</p>
                            <p className="text-right">
                                <Button bsStyle="primary">Ver reportagem</Button>
                            </p>
                            </Thumbnail>
                        </Col>
                    </Row>
                </Grid>
            </section>
            </ScrollableAnchor>
        );
    }
}

export default index;