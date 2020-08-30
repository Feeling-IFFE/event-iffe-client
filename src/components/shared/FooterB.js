import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Footer = () => (
  <Navbar sticky="bottom" bg="primary" variant="dark" expand="md" className="footer-repo">
    <Navbar.Brand>Group gitHub repos
    </Navbar.Brand>
    <Nav></Nav>
  </Navbar>
)

export default Footer
