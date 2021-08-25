import React, { Fragment } from 'react'

import Routes from './Routes.js'
import Nav from './Header/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'

const App = () => {
  return (
    <Fragment>
      <Nav />
      <br></br>
      <Routes />
    </Fragment>
  )
}
export default App
