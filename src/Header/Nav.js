import React from 'react'

import { Navbar, Nav } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import LogoutButton from '../Login/LogoutButton'

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand>
        <h4> Cadastro de Heróis</h4>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/">
            <Nav.Link href="/">Cadastro</Nav.Link>
          </Link>

          <Link to="/Lista">
            <Nav.Link href="/Lista">Lista</Nav.Link>
          </Link>
          <Link to="/Update">
            <Nav.Link href="/Update">Atualizar</Nav.Link>
          </Link>
        </Nav>
        <LogoutButton />
      </Navbar.Collapse>
    </Navbar>
  )
}
export default Header
