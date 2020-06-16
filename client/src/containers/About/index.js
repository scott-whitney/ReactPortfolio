import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { email, length, required } from 'redux-form-validators';
import axios from 'axios';

import { Button, Card, Container, Row, Col } from "react-bootstrap";


import { AUTH_USER, AUTH_USER_ERROR } from '../../actions/types';

class About extends Component {




 

  render() {

    return (
      <Card class="shadow p-3 mb-5 bg-white rounded" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://avatars2.githubusercontent.com/u/60905905?s=400&v=4" />
      <Card.Body>
        <Card.Title>Scott Whitney</Card.Title>
        <Card.Text>
          A full stack web Developer with a degree in creative writing and a love for simplistic design through function.
        </Card.Text>
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

export default reduxForm({ form: 'signup' })(About);
