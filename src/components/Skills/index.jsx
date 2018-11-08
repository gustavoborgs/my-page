import React, { Component } from 'react';
import {Grid, Row, Col } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor'
import './Skills.css';

class index extends Component {
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
                                <li>Java</li>
                                <li>C#</li>
                                <li>Android Studio</li>
                                <li>XCode</li>
                                <li>MySql</li>
                                <li>SQLServer</li>
                                <li>CSS</li>
                                <li>Realidade Aumentada</li>
                                <li>Ruby</li>
                                <li>Rails</li>
                                <li>JSON</li>
                                <li>UML</li>
                                <li>PHP</li>
                                <li>Vuforia</li>
                                <li>Swift</li>
                                <li>React</li>
                                <li>Asp.Net</li>
                                <li>HTML</li>
                                <li>PostGreSQL</li>
                                <li>Wamp</li>
                                <li>Firebase</li>
                                <li>SQLite</li>
                                <li>Heroku</li>
                                <li>API</li>
                                <li>Git</li>
                                <li>XML</li>
                                <li>NPM</li>
                                <li>Visual Studio</li>
                                <li>Photoshop</li>
                                <li>MVC</li>
                                <li>TCP/UDP</li>
                                <li>Windows</li>
                                <li>Socket</li>
                                <li>Web Server</li>
                                <li>JavaScript</li>
                                <li>Adobe XD</li>
                                <li>Xampp</li>
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