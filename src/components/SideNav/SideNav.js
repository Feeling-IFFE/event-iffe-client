import { Nav, NavItem, Button, Glyphicon } from 'react-bootstrap'

import React, { Component } from 'react'
import Sidebar from 'react-bootstrap-sidebar'

class SideNavPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isVisible: false
    }
  }

  updateModal (isVisible) {
    this.useState.isVisible = isVisible
    this.forceUpdate()
  }

  render () {
    return (
      <div>
        <Button bsStyle="primary" onClick={ () => this.updateModal(true) }><Glyphicon glyph="menu-hamburger"/></Button>
        <Sidebar side='left' isVisible={ this.state.isVisible } onHide={ () => this.updateModal(false) }>
          <Nav>
            <NavItem href="#">Link 1</NavItem>
            <NavItem href="#">Link 2</NavItem>
            <NavItem href="#">Link 3</NavItem>
            <NavItem href="#">Link 4</NavItem>
          </Nav>
        </Sidebar>
      </div>
    )
  }
}

export default SideNavPage