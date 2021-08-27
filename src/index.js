import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import ReactDOM from 'react-dom'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.render(
  <Auth0Provider
    domain="dev-s6u9qzkn.us.auth0.com"
    clientId="7TinBiGjwHcArdPgdHqT1PA5yRLpc1Jk"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root'),
)
