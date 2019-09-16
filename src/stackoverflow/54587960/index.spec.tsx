import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import SearchFilter from './';
import { SetFiltersValue } from './actionCreators';

const initialState = { filtersParams: {} };
type State = typeof initialState;
const mockStore = configureStore<State>();

describe('SearchFilter', () => {
  let store;
  beforeEach(() => {
    store = mockStore(initialState);
  });
  it('t1', () => {
    const searchFilter = shallow(<SearchFilter store={store}></SearchFilter>).dive();
    const searchInputWrapper = searchFilter.dive();
    const searchInput = searchInputWrapper.find('input.bp3-input').first();
    expect(searchInputWrapper.state('keyword')).toBe('');

    const mockedEvent = {
      preventDefault: jest.fn(),
      target: { value: 'foo' }
    };
    searchInput.simulate('change', mockedEvent);
    expect(searchInputWrapper.state('keyword')).toBe('foo');
    expect(store.getActions()).toEqual([SetFiltersValue()]);
    expect(searchInputWrapper.html()).toMatchSnapshot();
  });
});
