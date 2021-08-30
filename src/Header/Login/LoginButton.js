import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
 
  return (
    !isAuthenticated && (
      <div>
        <div className="alert alert-danger" role="alert">
          Você precisa estar logado para ter acesso as informações
          privilegiadas.
        </div>
        <Button style={{ margin: '30px', float: 'right' }} onClick={() => loginWithRedirect()}>Log In</Button >
      </div>
    )
  );

};

export default LoginButton;
