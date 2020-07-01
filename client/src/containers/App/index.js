import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';



import SignUp from '../SignUp';
import SignOut from '../SignOut';
import SignIn from '../SignIn';
import Chat from '../chatComponent';
import About from '../About';
import Portfolio from '../Portfolio';
import Home from '../ScrollPage';
import Landing from '../Landing';
import Contacts from '../Contact';
import Navigation from './../../components/TestThreeNavBar'

import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

// import io from 'socket.io-client';
import "./background.css";


import Navbar from './../../components/Navbar';


class App extends Component {
 
  


  render () {
    return (
      <div>
        <div className='background-container'>
          <img className='background-image' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt=""/>
          <div className="stars"></div>
          <div className="twinkling"></div>
          <div className="clouds"></div>
        </div>
      <Navigation/>
        
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 700 }}>
          <Route exact path='/About' component={About}/>
          <Route exact path='/Portfolio' component={Home}/>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/Contact' component={Contacts}/>
        </Grid.Column>
      </Grid>
      </div>

    );
  }
}


function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(App);
