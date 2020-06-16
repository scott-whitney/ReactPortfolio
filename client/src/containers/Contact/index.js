import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { email, length, required } from 'redux-form-validators';
import axios from 'axios';

import { Button, Card, Container, Row, Col, Form, } from "react-bootstrap";
import { Icon } from 'semantic-ui-react'

import { AUTH_USER, AUTH_USER_ERROR } from '../../actions/types';

class Contact extends Component {




 

  render() {

    return (
      <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Contact Me</Card.Title>
        <a href='https://www.linkedin.com/in/scott-whitney-49b8a6181/'><Icon name='linkedin' size='big'/></a>
        <a href='https://github.com/scott-whitney'><Icon name='github' size='big'/></a>   
      </Card.Body>
    </Card>
    );
  }
}


// const asyncValidate = async formValues => {
//   try {
//     const { data } = await axios.get(`/api/user/emails?email=${formValues.email}`);
//     if (data) {
//       throw new Error();
//     }
//   } catch (e) {
//     throw { email: 'Email already exists, please sign up with a different email' };
//   }
// }

export default reduxForm({ form: 'signup' })(Contact);
