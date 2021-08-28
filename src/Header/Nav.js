import React from 'react'
import { Button } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar bg="yellow" expand="lg">
      <Navbar.Brand>
        <h4> Cadastro de Heróis</h4>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">
            <Button>Cadastro </Button>
          </Link>
          </Nav>
          <Nav className="mr-auto">
          <Link to="/Lista">
            <Button style={{ margin: '15px'}}> Lista </Button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default Header
