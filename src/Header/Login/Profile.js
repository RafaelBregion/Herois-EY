import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Routes from '../Routes'

const Profile = () => {
  const { user, isAuthenticated } = useAuth0()

  return isAuthenticated && <Routes />
}

export default Profile
