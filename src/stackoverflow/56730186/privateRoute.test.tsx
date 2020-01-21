import PrivateRoute from './privateRoute';
import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Redirect } from 'react-router';

describe('56730186', () => {
  it('should render component if user has been authenticated', () => {
    const AComponent = () => <div>AComponent</div>;
    const props = { path: '/aprivatepath', component: AComponent };

    const enzymeWrapper = mount(
      <MemoryRouter initialEntries={[props.path]}>
        <PrivateRoute authenticated={true} ownProps={props} />
      </MemoryRouter>,
    );

    expect(enzymeWrapper.exists(AComponent)).toBe(true);
  });

  it('should redirect if user is not authenticated', () => {
    const AComponent = () => <div>AComponent</div>;
    const props = { path: '/aprivatepath', component: AComponent };

    const enzymeWrapper = mount(
      <MemoryRouter initialEntries={[props.path]}>
        <PrivateRoute authenticated={false} ownProps={props} />
      </MemoryRouter>,
    );
    const history: any = enzymeWrapper.find('Router').prop('history');
    expect(history.location.pathname).toBe('/');
  });
});
