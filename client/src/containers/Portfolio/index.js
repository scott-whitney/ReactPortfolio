import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Segment, Button } from 'semantic-ui-react';
import { email, length, required } from 'redux-form-validators';
import axios from 'axios';

import { AUTH_USER, AUTH_USER_ERROR } from '../../actions/types';

import CardCharacter from '../CardCharacter'

class Portfolio extends Component {







  render() {
    return (
      <div>
        <CardCharacter
        title='Project-02'
        github='https://github.com/Kerry-Jr/Project02'
        projectUrl=''
        projectImg=''
        Description=''
        />

        <CardCharacter
        title='Planet'
        github='https://github.com/jngo2013/Planet'
        projectUrl='https://blooming-atoll-78659.herokuapp.com'
        projectImg=''
        Description='Event planner for the everyday things'
        />
      </div>
    )
  }
}




export default reduxForm({ form: 'signup' })(Portfolio);
