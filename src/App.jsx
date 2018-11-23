import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';


import Home from './components/Index';

import Admin_Nav from './admin_components/CustomNavbar';
import Admin_Home from './admin_components/Home';
import Admin_Login from './admin_components/Login';
import Admin_Skills from './admin_components/Skills';
import Admin_Profile from './admin_components/Profile';
import Admin_Details from './admin_components/Details';



class App extends Component {

  getAuth = () => {
    console.log(localStorage.getItem('token'))
    return localStorage.getItem('token') === null ? false : true
  }

  getRoutesAdmin = () => {
    if (this.getAuth()) {
      return <Fragment> 
        <Route path="/admin" except="/admin/login" component={Admin_Nav} />
        <Route exact path="/admin" component={Admin_Home} />
        <Route exact path="/admin/details" component={Admin_Details} />
        <Route exact path="/admin/skills" component={Admin_Skills} />
        <Route exact path="/admin/profile" component={Admin_Profile} />
      </Fragment>
    }
    else {
      return <Route path="/admin" component={Admin_Login} />
    }
  }
  
  render() {
    return (
      <Router>
        <Fragment>
          
        <Route exact path="/" component={Home} />

        { this.getRoutesAdmin() }
        
        </Fragment>
      </Router>
    );
  }
}

export default App;
