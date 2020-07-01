import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item
          as={Link}
          content='Contact'
          name='Contact'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          to='/Contact'
        />
        <Menu.Item
          as={Link}
          name='About'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          name='friends'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}