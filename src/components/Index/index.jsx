import React, { Component } from 'react';

import About from '../About';
import Blog from '../Blog';
import Contact from '../Contact';
import Profile from '../Profile'
import Portfolio from '../Portfoil'
import Skills from '../Skills'
import Footer from '../Footer'
import Navbar from '../CustomNavbar';

import './Index.css'

import axios from 'axios';  

const api = axios.create({
    baseURL: 'https://admin-gustavo.herokuapp.com/'
})


class index extends Component {
    state = {
        "configs" : [
        ]    
    }

    async componentDidMount(){
        const { data: configs } = await api.get('/admin/configs');
        this.setState({ configs : configs});

        console.log(configs)
    }

    render() {

        return (
            <div>            
                <Navbar/>
                <Profile configs={ this.state.configs }/>
                <Skills/>
                <Blog/>
                <Portfolio/>
                <About configs={ this.state.configs }/>
                <Contact/>
                <Footer/>    
            </div>
        );
    }
}

export default index;