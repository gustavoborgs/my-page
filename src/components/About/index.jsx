import React, { Component } from 'react';
import {Grid, Row, Col } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor'
import { SocialIcon } from 'react-social-icons';
import './About.css'

class index extends Component {
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
                            <p className="description-about">Meu nome é Gustavo, tenho 20 anos e hoje sou responsavel por todo o desenvolvimento dos aplicativos da Yazo.
Aos meus 12 anos comecei a criar meus primeiros codigos criando jogos e servidores, e ao 15 fiz um curso tecnico no Senai para me aperfeiçoar e a partir dali tive grandes oportunidades onde pude competir na Olimpiada do Conhecimento representando o estado do Paraná em uma competição nacional e trouxe para o Senai Londrina a medalha de ouro, e tambem na World Skills Curitiba, em que eu trouxe a medalha de bronze. Hoje estou cursando Engenharia de Software na Universidade Estadual do Paraná (UTFPR).</p>
                        </Col>
                        <Col md={5}>
                            <h3 className="titulo-about">PROFISSÃO</h3>
                            <p className="description-about">Meu nome é Gustavo, tenho 20 anos e hoje sou responsavel por todo o desenvolvimento dos aplicativos da Yazo.
Aos meus 12 anos comecei a criar meus primeiros codigos criando jogos e servidores, e ao 15 fiz um curso tecnico no Senai para me aperfeiçoar e a partir dali tive grandes oportunidades onde pude competir na Olimpiada do Conhecimento representando o estado do Paraná em uma competição nacional e trouxe para o Senai Londrina a medalha de ouro, e tambem na World Skills Curitiba, em que eu trouxe a medalha de bronze. Hoje estou cursando Engenharia de Software na Universidade Estadual do Paraná (UTFPR).</p>
                        </Col>
                    </Row>
                    <Row style={{marginTop: 50}}>
                        <Col className="text-center" lg={12}>
                            <SocialIcon url="https://github.com/gustavoborgs" color="#EEffffff" style={{width: 100, height: 100}} />
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