import React, { Fragment } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import 'bootstrap/dist/css/bootstrap.min.css'

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()

  return (
    !isAuthenticated && (
      <div>
        <div class="alert alert-danger" role="alert">
          Você precisa estar logado para ter acesso as informações
          privilegiadas.
        </div>
        <button onClick={() => loginWithRedirect()}>Log In</button>
      </div>
    )
  )
}

export default LoginButton
