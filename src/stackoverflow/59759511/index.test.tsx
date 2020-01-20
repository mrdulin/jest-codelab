// import { HomePage } from './';
import HomePage from './';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';

describe('<Homepage/>', () => {
  let props, store, mockStore, initialState;

  beforeEach(() => {
    props = {
      getPoints: jest.fn(),
      estimatePoints: jest.fn(),
    };
    initialState = {
      homeReducer: {
        profile: {},
      },
      pointsReducer: {
        score: {
          points: {},
        },
      },
    };

    mockStore = configureStore();
    store = mockStore(initialState);
  });

  it('should call the componentDidMount lifecycle method', () => {
    const spy = jest.spyOn(HomePage.WrappedComponent.prototype, 'componentDidMount');
    const wrapper = mount(
      <Provider store={store}>
        <HomePage {...props} />
      </Provider>,
    );
    expect(spy).toHaveBeenCalled();
    wrapper.unmount();
  });
});
