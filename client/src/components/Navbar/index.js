import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import "./navBar.css";
export default (props) => (

  <Menu className='NavBar' widths={5}>
    <Menu.Item as={Link} content='Contact' to='/Contact'/>
    <Menu.Item as={Link} content='About' to='/About'/>
    <Menu.Item as={Link} content='Portfolio' to='/'/>
  </Menu>






);
