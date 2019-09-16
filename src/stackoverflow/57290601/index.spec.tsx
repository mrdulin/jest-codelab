import React from 'react';
import { shallow } from 'enzyme';
import ConnectedTestComponent, { TestComponent } from './';
import configureMockStore from 'redux-mock-store';

const state = 1;
const mockStore = configureMockStore();
const store = mockStore(state);

describe('test', () => {
  it('t1', () => {
    const connetedTestComponentWrapper = shallow(<ConnectedTestComponent store={store} />);
    const testComponentWrapper = connetedTestComponentWrapper.find(TestComponent);
    expect(testComponentWrapper.prop('blah')).toBe(state);
    expect(testComponentWrapper.html()).toMatchSnapshot();
  });
});
