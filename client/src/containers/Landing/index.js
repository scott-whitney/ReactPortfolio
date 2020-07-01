import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "./style.css";

import { email, length, required } from "redux-form-validators";
import axios from "axios";

import { AUTH_USER, AUTH_USER_ERROR } from "../../actions/types";

import CardCharacter from "../CardCharacter";
// consider using card Columns from bootstrap react
export default class Landing extends Component {
  state = {
    liftOff: true,
    blastOff: "",
  };
  componentDidMount() {
    this.setState({ liftOff: false });
  }

  liftOffButton = (date) => {
    this.setState({ liftOff: true });
    this.setState({ blastOff: "blastOff" });
    setTimeout(this.handleRedirect, 6000);
  };

  handleRedirect = (date) => {
    {
      this.props.history.push("/Contact");
    }
  };

  render() {
    return (
      <div className={this.state.blastOff}>
        <a className="space" onClick={this.liftOffButton}>
          
          <div className="rocket">
            <div className="fuselage">
              <div className="nose"></div>
              <div className="head">
                <span className="window"></span>
              </div>
              <div className="neck"></div>
              <div className="body"></div>
              <div className="reactor"></div>
              {this.state.liftOff ? (
                <div className="fire">
                  <div className="spark1"></div>
                  <div className="spark2"></div>
                  <div className="spark3"></div>
                  <div className="spark4"></div>
                  <div className="spark5"></div>
                  <div className="spark6"></div>
                </div>
              ) : null}
            </div>
            <div class="left-fin"></div>
            <div class="left-fin-end"></div>
            <div class="right-fin"></div>
            <div class="right-fin-end"></div>
          </div>
        </a>
        {!this.state.liftOff ? <p>Click the ship!</p> : null}
        
      </div>
    );
  }
}

// export default reduxForm({ form: "none" })(Landing);
