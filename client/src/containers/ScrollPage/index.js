import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "./style.css";
import Navigation from './../../components/TestThreeNavBar'
import { email, length, required } from "redux-form-validators";
import axios from "axios";

import { AUTH_USER, AUTH_USER_ERROR } from "../../actions/types";

import CardCharacter from "../CardCharacter";
// consider using card Columns from bootstrap react
class Home extends Component {
  componentDidMount() {

  }


  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Container fluid="lg">
                <Row>
                  <Col lg={6} md={12}>
                    <Card style={{ width: "18rem" }} >
                      <Card.Img
                        variant="top"
                        src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                      />
                      <Card.Body>
                        <Card.Title>Planet</Card.Title>
                        <Card.Text>
                          Event planning for the everday events. Now your friends
                          can't flake.
                        </Card.Text>
                        <Button
                          href="https://github.com/jngo2013/Planet"
                          variant="success"
                          target="_blank"
                        >
                          Github
                        </Button>
                        <Button
                          href="https://personal-planet.herokuapp.com/"
                          variant="primary"
                          target="_blank"
                        >
                          Project
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col lg={6} md={12}>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        variant="top"
                        src="https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                      />
                      <Card.Body>
                        <Card.Title>Blog Template</Card.Title>
                        <Card.Text>A simple blog template. Post Style Layout.</Card.Text>
                        <Button
                          href="https://github.com/Kerry-Jr/Project02"
                          variant="success"
                          target="_blank"
                        >
                          Github
                        </Button>
                        <Button
                          href="https://project02blog.herokuapp.com/"
                          variant="primary"
                          target="_blank"
                        >
                          Project
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default reduxForm({ form: "signup" })(Home);
