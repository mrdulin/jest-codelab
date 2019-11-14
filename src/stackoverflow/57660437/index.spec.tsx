import React from 'react';
import { Header } from './';
import { shallow } from 'enzyme';
import * as requestService from './requestService';

jest.mock('./requestService.ts', () => {
  return {
    runningSince: jest.fn()
  };
});

describe('Header', () => {
  it('t1', done => {
    const mockedData = {
      data: {
        runningSince: new Date('2019-08-26T11:55:03.696Z').toISOString()
      }
    };
    (requestService.runningSince as jest.MockedFunction<typeof requestService.runningSince>).mockResolvedValueOnce(
      mockedData
    );
    const wrapper = shallow(<Header></Header>);
    setImmediate(() => {
      expect(wrapper.state()).toEqual({ startDate: mockedData.data.runningSince });
      expect(wrapper.text()).toEqual(mockedData.data.runningSince);
      expect(wrapper).toMatchSnapshot();
      done();
    });
  });
});
