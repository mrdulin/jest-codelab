import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import DiceContainer from '.';

const mockStore = configureMockStore();

describe('Dice', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    const initialState = {
      lastRolledNumber: 1,
    };
    store = mockStore(initialState);
    wrapper = shallow(<DiceContainer store={store} />).dive();
  });

  it('should show previously rolled value', () => {
    expect(wrapper.props().lastRolledNumber).toBe(1);
  });

  it('should roll the dice again when button is clicked', () => {
    wrapper.simulate('rollDice');
    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'ROLL_DICE' }]);
  });
});
