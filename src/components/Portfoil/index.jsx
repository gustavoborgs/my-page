import React, { Component } from 'react';
import {Grid, Row, Col, Image } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor'
import { SocialIcon } from 'react-social-icons';
import './Portfoil.css'

class index extends Component {
    render() {
        return (
            <ScrollableAnchor id={'portfolio'}>
            <section>
                
                    <Row>
                        <Col lg={12}>
                            <h1 className="text-center">Portfólio</h1>
                            <p className="text-center">Confira abaixo alguns dos meus trabalhos.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="padding-0" md={4}>
                            <Image responsive src="./assets/work1.png"/>
                        </Col>
                        <Col className="padding-0" md={4}>
                            <Image responsive src="./assets/work2.jpg"/>
                        </Col>
                        <Col className="padding-0" md={4}>
                            <Image responsive src="./assets/work3.jpg"/>
                        </Col>
                    </Row>
                
            </section>
            </ScrollableAnchor>
        );
    }
}

export default index;