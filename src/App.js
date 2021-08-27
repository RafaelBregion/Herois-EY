import React, { Fragment } from 'react'

import './App.css'
import { useAuth0 } from '@auth0/auth0-react'

import LoginButton from './Login/LoginButton.js'
import LogoutButton from './Login/LogoutButton.js'
import Profile from './Login/Profile'
// import NavDropdown from 'react-bootstrap/NavDropdown'

const App = () => {
  return (
    <>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </>
  )
}

export default App
