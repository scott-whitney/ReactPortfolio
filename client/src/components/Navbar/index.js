import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Card } from 'semantic-ui-react';
import CardCharacter from '../../containers/CardCharacter'


export default (props) => (

  <Menu widths={5}>
    { props.isLoggedIn ? null : <Menu.Item as={Link} to='/Contact' content='Contact'/> }
    <Menu.Item as={Link} content='About' to='/About'/>
    {/* { props.isLoggedIn ? <Menu.Item as={Link} to='/portfolio' content='Portfolio'/> : <Menu.Item as={Link} to='/portfolio' content='Portfolio'/>} */}
    <Menu.Item as={Link} content='Portfolio' to='/'/>
  </Menu>




);
