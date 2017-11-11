import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import DownloadCSVItem, { IState, IStateProps } from '.';

const initlialState: IState = {
  global: {
    accountGuid: 'abcd-1234'
  },
  shipments: {
    shipmentsCSV: {
      itemsCount: 2,
      shipments: [
        {
          Courier: 'Hand Delivery',
          Note: 'Testing the data transfer request system. '
        },
        {
          Courier: null,
          Note: null
        }
      ]
    }
  }
};

const mockStore = configureStore<IState>();
const store = mockStore(initlialState);

describe('DownloadCSVItem', () => {
  const props = {
    t: k => k,
    accountGuid: '',
    shipmentsCSV: {
      itemsCount: 0,
      shipments: []
    }
  };
  it('t1', () => {
    const wrapper = shallow(<DownloadCSVItem.WrappedComponent {...props}></DownloadCSVItem.WrappedComponent>);
    expect(wrapper.is('div')).toBeTruthy();
    console.log(wrapper.instance().props);
    // expect((wrapper.instance().props as IStateProps).accountGuid).toBe('abcd-1234');
    // expect((wrapper.instance().props as IStateProps).shipmentsCSV).toEqual({
    //   itemsCount: 2,
    //   shipments: [
    //     {
    //       Courier: 'Hand Delivery',
    //       Note: 'Testing the data transfer request system. '
    //     },
    //     {
    //       Courier: null,
    //       Note: null
    //     }
    //   ]
    // });
  });
});
