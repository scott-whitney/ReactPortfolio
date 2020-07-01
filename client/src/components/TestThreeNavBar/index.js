import "./navBar.css";
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import "./navBar.css"
import CustomLink from './../CustomLink'

export default class Navigation extends Component {
  state = {
    headerClass: '',
  }

  handleButton = date => {
    if(this.state.headerClass === ''){
      this.setState({headerClass: 'active' })
    } else {
      this.setState({headerClass: '' })
    }
    
  };

  
  render() {
    return (
      <header className={this.state.headerClass}>
		  <button onClick={this.handleButton} className="toggle-nav">
			    <span>></span>
		  </button>
		  <ul className="nav">

      <li className="loud"><CustomLink tag='div' to='/Contact' className='NavButton'>Contact</CustomLink></li>
      <li className="loud"><CustomLink tag='div' to='/About' className='NavButton'>About</CustomLink></li>
      <li className="loud"><CustomLink tag='div' to='/Portfolio' className='NavButton'>Portfolio</CustomLink></li>

		  </ul>
	    </header>
    )

  }

}