import React from 'react';
import { shallow } from 'enzyme';
import Main from './main';
import fetch from 'node-fetch';

const { Response } = jest.requireActual('node-fetch');

jest.mock('node-fetch');

describe('Main', () => {
  it('t1', done => {
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
      new Response(
        JSON.stringify({
          data: ['data1', 'data2']
        })
      )
    );
    const wrapper = shallow(<Main></Main>);
    expect(fetch).toBeCalledWith(`http://testurl.com/testData`);
    expect(wrapper).toMatchSnapshot();
    setImmediate(() => {
      expect(wrapper.state()).toEqual({
        testData: {
          data: ['data1', 'data2']
        }
      });
      expect(wrapper).toMatchSnapshot();
      done();
    });
  });
});
