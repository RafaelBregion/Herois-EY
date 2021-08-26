import React from 'react'

import './Nav.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

const Header = (handleLoginClick) => {
  const handleClick = () => {
    handleLoginClick()
  }

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
          <div>
            <button onClick={handleClick} className="logicon">
              Sign In
            </button>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default Header
