import React from 'react';
import ConnectedBody, { Body } from './';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

const initialState = {
  data: {
    time: undefined,
    products: [],
    filteredProducts: [],
    search: undefined
  }
};
const mockStore = configureMockStore();
const store = mockStore(initialState);

describe('Body Component', () => {
  const props = {
    data: {
      time: undefined,
      products: [],
      filteredProducts: [],
      search: undefined
    }
  };

  describe('Body Component is loading', () => {
    it('Is loading', () => {
      const nextProps = {
        ...props,
        data: {
          products: [{}, {}],
          filteredProducts: [{ name: 'sdffd' }, { name: 'sdf' }],
          search: 'sdf'
        }
      };

      const wrapper = shallow(<ConnectedBody store={store} />);
      const BodyComponent = wrapper.find(Body);
      expect(BodyComponent.prop('products')).toEqual(props.data.products);
      expect(BodyComponent.prop('filteredProducts')).toEqual(props.data.filteredProducts);
      expect(BodyComponent.prop('search')).toEqual(props.data.search);
    });
  });
});
