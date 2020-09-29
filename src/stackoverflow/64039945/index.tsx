import React from 'react';
import { Redirect } from 'react-router';

interface StoreParams {}
interface RouteItem {}

function isUnauthorized() {
  return false;
}
function needsRedirect() {
  return true;
}

function Error({ type }) {
  return <div>{type}</div>;
}

export const getComponent = (
  storeParams: StoreParams,
  routeItem: RouteItem,
  Component: React.FunctionComponent<{}> | React.ComponentClass<{}, any>,
): React.ReactNode => {
  if (isUnauthorized()) {
    return <Error type="auth" />;
  } else if (needsRedirect()) {
    return <Redirect to="/privacy" />;
  }
  return (
    <React.Fragment>
      <Component />
    </React.Fragment>
  );
};
