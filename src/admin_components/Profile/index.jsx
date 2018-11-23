import React, { Component } from 'react';
import {Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import NavBar from '../CustomNavbar'
import './Index.css'

import axios from 'axios';  

const api = axios.create({
    baseURL: 'https://admin-gustavo.herokuapp.com/',
    headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
    }
})

class index extends Component {

    async componentDidMount() {
        const { data } = await api.get('/admin/configs')

        const stateConfig = this.state.config
        data.map( item => (
            stateConfig.find(x => x.index === item.index) == null ? "" : stateConfig.find(x => x.index === item.index).value = item.value
        ))

        this.setState({ config: stateConfig })
    }

    state = {
        config: [
            {
                index: "my-name",
                value: ""
            },
            {
                index: "picture",
                value: ""
            },
            {
                index: "github-url",
                value: ""
            },
            {
                index: "about-me",
                value: ""
            },
            {
                index: "bio",
                value: ""
            },
            {
                index: "prof",
                value: ""
            },
        ]
    }

    handleUpdateValue = (e) => {
        const mState = this.state.config
        mState.find(x => x.index === e.target.name).value = e.target.value

        this.setState({ config: mState})
    }

    handleConfigsSave = (e) => {
        e.preventDefault();

        api.post('admin/configs', this.state.config)
    }

    render() {
        return (
            <div>
            <NavBar />
            <section>
                <Grid className="center">
                <Row>
                    <Col lgOffset={2} lg={8}>
                    <h1 className="text-center">Contato</h1>
                    <p className="text-center">Entre em contato comigo para um orçamento</p>
                    <form style={{marginTop: 32}} onSubmit={ this.handleConfigsSave }>
                        <FormGroup>
                            <ControlLabel>Nome completo</ControlLabel>
                            <FormControl
                            name="my-name"
                            type="name" 
                            placeholder="Digite seu nome completo"
                            onChange={ this.handleUpdateValue }
                            value={ this.state.config.find(item => item.index === "my-name").value }
                            />
                        </FormGroup>

                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Foto de perfil</ControlLabel>
                            <FormControl 
                            componentClass="textarea" 
                            name="picture"
                            placeholder="Insira a URL de uma foto sua" 
                            onChange={ this.handleUpdateValue }
                            value={ this.state.config.find(item => item.index === "picture").value }
                            />
                        </FormGroup>

                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>GitHub</ControlLabel>
                            <FormControl 
                            componentClass="textarea" 
                            name="github-url"
                            placeholder="Insira a URL do seu Git" 
                            onChange={ this.handleUpdateValue }
                            value={ this.state.config.find(item => item.index === "github-url").value }
                            />
                        </FormGroup>
                       
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Sobre mim</ControlLabel>
                            <FormControl 
                            componentClass="textarea" 
                            name="about-me"
                            placeholder="Escreva aqui um pouco sobre você" 
                            onChange={ this.handleUpdateValue }
                            value={ this.state.config.find(item => item.index === "about-me").value }
                            />
                        </FormGroup>

                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Biografia</ControlLabel>
                            <FormControl 
                            componentClass="textarea" 
                            name="bio"
                            placeholder="Escreva aqui a sua biografia" 
                            onChange={ this.handleUpdateValue }
                            value={ this.state.config.find(item => item.index === "bio").value }
                            />
                        </FormGroup>

                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Profissão</ControlLabel>
                            <FormControl 
                            componentClass="textarea" 
                            name="prof"
                            placeholder="Escreva aqui a sobre sua profissão"
                            onChange={ this.handleUpdateValue }
                            value={ this.state.config.find(item => item.index === "prof").value }
                            />
                        </FormGroup>

                        <Button className="btn btn-primary pull-right" type="submit">Enviar</Button>
                    </form>
                    </Col>
                </Row>
                </Grid>
            </section>
            </div>
        );
    }
}

export default index;