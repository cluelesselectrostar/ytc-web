import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

/*
You can pass a configuration object to loginWithRedirect() to customize the login experience. 
For example, you can pass options to redirect users to an Auth0 Universal Login page 
optimized for signing up for your React application. See RedirectLoginOptions for more details on these options.
*/

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;