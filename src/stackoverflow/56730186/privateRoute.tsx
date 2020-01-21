import React from 'react';
import { Route, Redirect } from 'react-router';

function PrivateRoute({ authenticated, ownProps }) {
  const { component: Component, ...rest } = ownProps;
  return <Route {...rest} render={() => (authenticated ? <Component /> : <Redirect to={{ pathname: '/' }} />)} />;
}

export default PrivateRoute;
