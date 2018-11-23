import React, { Component } from 'react';
import {Grid, Row, Col } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor'
import { SocialIcon } from 'react-social-icons';
import './About.css'

class index extends Component {
    getBio = () => {
        if(this.props.configs.length > 0 && this.props.configs.find(item => item.index === "bio") != null) {
            return <p className="description-about">{ this.props.configs.find(item => item.index === "bio").value }</p>
        }
        else {
            return "Loading..."
        }
    }

    getProf = () => {
        if(this.props.configs.length > 0 && this.props.configs.find(item => item.index === "prof") != null) {
            return <p className="description-about">{ this.props.configs.find(item => item.index === "prof").value }</p>
        }
        else {
            return "Loading..."
        }
    }

    getGithub = () => {
        if(this.props.configs.length > 0 && this.props.configs.find(item => item.index === "github-url") != null) {
            const gitUrl = this.props.configs.find(item => item.index === "github-url").value
            return <SocialIcon url={gitUrl} color="#EEffffff" style={{width: 100, height: 100}} />
        }
    }

    render() {
        return (
            <ScrollableAnchor id={'about'}>
            <section className="bg-primary">
                <Grid>
                    <Row>
                        <Col lg={12}>
                            <h1 className="text-center">Mais Informações</h1>
                        
                        </Col>
                        <Col mdOffset={1} md={5}>
                            <h3 className="titulo-about">BIOGRAFIA</h3>
                            { this.getBio() }
                        </Col>
                        <Col md={5}>
                            <h3 className="titulo-about">PROFISSÃO</h3>
                            { this.getProf() }
                        </Col>
                    </Row>
                    <Row style={{marginTop: 50}}>
                        <Col className="text-center" lg={12}>
                            { this.getGithub() }
                            {/* <SocialIcon url="https://github.com/gustavoborgs" color="#EEffffff" style={{width: 100, height: 100}} /> */}
                            <h4>GITHUB</h4>
                            <p>Veja alguns dos meus projetos no GitHub.</p>
                        </Col>
                    </Row>
                </Grid>
            </section>
            </ScrollableAnchor>
        );
    }
}

export default index;