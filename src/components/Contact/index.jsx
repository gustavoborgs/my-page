import React, { Component } from 'react';
import {Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor'
import './Contact.css'

class index extends Component {
    render() {
        return (
            <ScrollableAnchor id={'contact'}>
            <section>
                <Grid className="center">
                <Row>
                    <Col lgOffset={2} lg={8}>
                    <h1 className="text-center">Contato</h1>
                    <p className="text-center">Entre em contato comigo para um orçamento</p>
                    <form style={{marginTop: 32}}>
                        <FormGroup>
                            <ControlLabel>Nome</ControlLabel>
                            <FormControl type="name" placeholder="Digite seu nome completo"/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>E-mail</ControlLabel>
                            <FormControl type="email" placeholder="Insira o seu email para contato"/>
                        </FormGroup>

                        <FormGroup>
                            <ControlLabel>Assunto</ControlLabel>
                            <FormControl type="text" placeholder="Insira o assunto do email"/>
                        </FormGroup>

                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Mensagem</ControlLabel>
                            <FormControl componentClass="textarea" placeholder="Escreva aqui a sua mensagem" />
                        </FormGroup>
                        <Button className="btn btn-primary pull-right" type="submit">Enviar</Button>
                        <Button className="btn btn-default pull-right margin_right" type="reset">Limpar</Button>
                    </form>
                    </Col>
                </Row>
                </Grid>
            </section>
            </ScrollableAnchor>
        );
    }
}

export default index;