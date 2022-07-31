// src/auth/protected-route.js

import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import LoadingGif from '../components/LoadingGIF';

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <LoadingGif />,
    })}
    {...args}
  />
);

export default ProtectedRoute;