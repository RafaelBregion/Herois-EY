import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <h4>Cadastro de Heróis</h4>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/Cadastro">
            <Nav>Cadastro</Nav>
          </Link>
          <Link to="/Lista">
            <Nav> Lista </Nav>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default Header
