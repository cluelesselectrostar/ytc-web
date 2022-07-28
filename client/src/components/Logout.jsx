// src/components/logout-button.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      className="btn btn-danger btn-block"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;

/*
The logout() method exposed by Auth0Context clears the application session and 
redirects to the Auth0 /v2/logout endpoint to clear the Auth0 session. 
As with the login methods, you can pass an object argument to logout() 
to define parameters for the /v2/logout call. 
This process is fairly invisible to the user. See LogoutOptions for more details.

Here, you pass the returnTo option to specify the URL 
where Auth0 should redirect your users after they logout. 
Right now, you are working locally, and your Auth0 application's "Allowed Logout URLs" point to http://localhost:3000.

However, if you were to deploy your React application to production, 
you need to add the production logout URL to the "Allowed Logout URLs" list 
and ensure that Auth0 redirects your users to that production URL and not localhost. 
Setting returnTo to window.location.origin will do just that.
*/