import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import { } from 'react-bootstrap';
import './Footer.css';

class index extends Component {
    render() {
        return (
            <footer>
                <div className="container text-center">
                    <div className="social-container">
                        <SocialIcon className="hehe" url="https://www.facebook.com/Sr.Borgs" color="#ffffff" />
                        <SocialIcon className="social-icon" url="https://github.com/gustavoborgs" color="#ffffff" />
                        <SocialIcon className="social-icon" url="https://www.linkedin.com/in/gustavo-cavalcante-borges-569b06123/" color="#ffffff" />
                    </div>
                    
                    <p className="footer-info"><b>Gustavo Borges</b> Desenvolvimento Mobile 2018</p>
                    <p className="footer-info">gustavo.cavalcante.borges@gmail.com</p>
                    <p className="footer-info">+55 (43) 996 880 638</p>
                </div>
            </footer>
        );
    }
}

export default index;