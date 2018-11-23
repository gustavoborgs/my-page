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
        newSkillContent: '',
        skills: []
    }

    async componentDidMount(){
        const { data: skills} = await api.get('/skills');

        this.setState({ skills : skills});
    }

    handleSkillDelete = async (id) => {
        api.delete(`/skills/${id}`);
        this.setState({ skills: this.state.skills.filter(item => item.id !== id) })
    }

    handleSkillSave = async (e) =>{
        e.preventDefault();

        const { data: skill } = await api.post('/skills', { name: this.state.newSkillContent });
        this.setState({ skills: [ ...this.state.skills, skill], newSkillContent: '' }); 
    }

    
    render() {
        return (
            <ScrollableAnchor id={'contact'}>
            <section>
                <Grid className="center">
                <Row>
                    <Col lgOffset={2} lg={8}>
                        <h1 className="text-center">Minhas Skills</h1>
                        <p className="text-center">Gerencia aqui todas as suas skills</p>
                        <form style={{marginTop: 32}} onSubmit={ this.handleSkillSave }>
                        <FormGroup>
                            <InputGroup>
                            <FormControl 
                            placeholder="Escreva aqui sua skill" 
                            onChange={ e => this.setState({
                                newSkillContent: e.target.value
                            })}
                            value={this.state.newSkillContent}
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
                            { this.state.skills.map(skill => (
                                <li key={ skill.id }>{ skill.name } <Glyphicon glyph="trash" onClick={() => this.handleSkillDelete(skill.id) }/></li>      
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