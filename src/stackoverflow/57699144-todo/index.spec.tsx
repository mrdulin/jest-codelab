import React from 'react';
import ConnectedMyComponent, { MyComponent } from '.';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

describe('MyComponent', () => {
  function reducer(state = {}) {
    return state;
  }
  const store = createStore(reducer);
  test('should render', () => {
    const addEventListenerSpy = jest.spyOn(MyComponent.prototype.element.current!, 'addEventListener');
    const createRefSpy = jest.spyOn(React, 'createRef');
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedMyComponent></ConnectedMyComponent>)
      </Provider>
    );
    console.log(wrapper.find(MyComponent).instance()['element']);
    // const addEventListenerSpy = jest.spyOn(
    //   wrapper.find(MyComponent).instance()['element']['current'],
    //   'addEventListener'
    // );
    expect(wrapper.find('div').text()).toBe('test div');
    expect(createRefSpy).toBeCalledTimes(1);
    expect(addEventListenerSpy).toBeCalledWith('rowClicked', wrapper.find(MyComponent).instance()['onRowClicked']);
  });
});
