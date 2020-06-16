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
import Contacts from '../Contact';

import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

// import io from 'socket.io-client';



import Navbar from './../../components/Navbar';


class App extends Component {
  render () {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 700 }}>
          <Navbar isLoggedIn={this.props.authenticated}/>
          <Route exact path='/About' component={About}/>
          <Route exact path='/portfolio' component={Portfolio}/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/Contact' component={Contacts}/>
          
        </Grid.Column>
      </Grid>
    );
  }
}


function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(App);
