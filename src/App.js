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
      <div class="alert alert-danger" role="alert">
        Você precisa estar logado para ter acesso as informações privilegiadas.
      </div>

      <LoginButton />
      <LogoutButton />
      <Profile />
    </>
  )
}

export default App
