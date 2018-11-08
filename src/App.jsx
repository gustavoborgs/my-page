import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Profile from './components/Profile'
import Portfolio from './components/Portfoil'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Navbar from './components/CustomNavbar';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          
          <Route component={Profile}/>
          <Route component={Skills}/>
          <Route component={Blog}/>
          <Route component={Portfolio}/>
          <Route component={About}/>
          <Route component={Contact}/>
          <Route component={Footer}/>
        </div>
      </Router>
    );
  }
}

export default App;
