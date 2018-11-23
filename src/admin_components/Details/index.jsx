import React, { Component } from 'react';
import {Grid, Row, Col, FormGroup, FormControl, InputGroup, Button, Glyphicon } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor'
import './Index.css'
import axios from 'axios';  

const api = axios.create({
    baseURL: 'https://admin-gustavo.herokuapp.com/',
    headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
    }
})

class index extends Component {
    state = {
        newInteressesContent: '',
        newIdiomasContent: '',
        newFormacaoContent: '',
        newAtividadesContent: '',
        data: []
    }

    async componentDidMount(){
        const { data } = await api.get('/admin/details');

        this.setState({ data : data});
    }

    handleItemDelete = async (id) => {
        api.delete(`/admin/details/${id}`);

        this.setState({ data: this.state.data.filter(item => item.id !== id) })
    }

    handleDetailSave = async (e, index) =>{
        e.preventDefault();

        var index = index
        var value = ''

        switch(index) {
            case 'interesses':
                value = this.state.newInteressesContent
            break

            case 'idiomas':
                value = this.state.newIdiomasContent
            break

            case 'formacao':
                value = this.state.newFormacaoContent
            break

            case 'atividades':
                value = this.state.newAtividadesContent
            break
            
        }

        console.log( index )

        const { data } = await api.post('/admin/details', { index: index, value: value });

        this.setState({ 
            data: [ ...this.state.data, data], 
            newInteressesContent: '',
            newIdiomasContent: '', 
            newFormacaoContent: '', 
            newAtividadesContent: ''
        }); 
    }

    
    render() {
        return (
            <section>
                <Grid className="center">
                <Row>
                    <Col lgOffset={2} lg={8}>
                        <h1 className="text-center">Detalhes sobre mim</h1>
                        <p className="text-center">Gerencia aqui todos os detalhes sobre você</p>
                    </Col>

                    <Col lgOffset={2} lg={8}>
                        <form style={{marginTop: 32}} onSubmit={ (e) => { this.handleDetailSave(e, 'interesses') }  }>
                        <FormGroup>
                            <h4>Interesses</h4>
                            <InputGroup>    
                                <FormControl placeholder="Escreva aqui sua interesse" 
                                    onChange={ e => this.setState({
                                        newInteressesContent: e.target.value
                                    })}
                                    value={this.state.newInteressesContent}
                                />
                                <InputGroup.Button>
                                    <Button className="btn btn-primary" type="submit">Adicionar</Button>
                                </InputGroup.Button>
                            </InputGroup>
                        </FormGroup>
                        </form>
                    </Col>

                    <Col lgOffset={2} lg={8}>
                        <form style={{marginTop: 32}} onSubmit={ (e) => { this.handleDetailSave(e, 'idiomas') }  }>
                        <FormGroup>
                            <h4>Idiomas</h4>
                            <InputGroup>    
                                <FormControl placeholder="Escreva aqui seu idioma" 
                                    onChange={ e => this.setState({
                                        newIdiomasContent: e.target.value
                                    })}
                                    value={this.state.newIdiomasContent}
                                />
                                <InputGroup.Button>
                                    <Button className="btn btn-primary" type="submit">Adicionar</Button>
                                </InputGroup.Button>
                            </InputGroup>
                        </FormGroup>
                        </form>
                    </Col>

                    <Col lgOffset={2} lg={8}>
                        <form style={{marginTop: 32}} onSubmit={ (e) => { this.handleDetailSave(e, 'formacao') }  }>
                        <FormGroup>
                            <h4>Formação </h4>
                            <InputGroup>    
                                <FormControl placeholder="Escreva aqui sua formação" 
                                    onChange={ e => this.setState({
                                        newFormacaoContent: e.target.value
                                    })}
                                    value={this.state.newFormacaoContent}
                                />
                                <InputGroup.Button>
                                    <Button className="btn btn-primary" type="submit">Adicionar</Button>
                                </InputGroup.Button>
                            </InputGroup>
                        </FormGroup>
                        </form>
                    </Col>

                    <Col lgOffset={2} lg={8}>
                        <form style={{marginTop: 32}} onSubmit={ (e) => { this.handleDetailSave(e, 'atividades') }  }>
                        <FormGroup>
                            <h4>Atividades </h4>
                            <InputGroup>    
                                <FormControl placeholder="Escreva aqui sua atividade" 
                                    onChange={ e => this.setState({
                                        newAtividadesContent: e.target.value
                                    })}
                                    value={this.state.newAtividadesContent}
                                />
                                <InputGroup.Button>
                                    <Button className="btn btn-primary" type="submit">Adicionar</Button>
                                </InputGroup.Button>
                            </InputGroup>
                        </FormGroup>
                        </form>
                    </Col>

                    <Col lgOffset={2} lg={8}>
                        <ul>
                            { this.state.data.map(item => (
                                <li key={ item.id }>[{ item.index }] { item.value } <Glyphicon glyph="trash" onClick={() => this.handleItemDelete(item.id) }/></li>      
                            ))}
                        </ul>
                    </Col>
                </Row>
                </Grid>
                
            </section>
        );
    }
}

export default index;