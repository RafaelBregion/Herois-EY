import React from 'react'

import './Login.css'

const Login = ({ isShowLogin }) => {
  return (
    <div className={`$!isShowLogin ? "active" : ""} show`}>
      <div className="login-form"></div>
    </div>
  )
}
//Abcde1234%¨&*