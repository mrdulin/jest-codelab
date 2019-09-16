import React from 'react';
import { shallow } from 'enzyme';
import { SomeComponent } from './';
import { DataService } from './DataService';

jest.mock('./DataService.ts');

DataService.getdata = jest.fn();

describe('SomeComponent', () => {
  const responseText = {
    name: 'test name',
    key: 'test_key',
    expiration: null
  };
  it('correct state update', done => {
    (DataService.getdata as jest.MockedFunction<typeof DataService.getdata>).mockResolvedValueOnce(responseText);
    const wrapper = shallow(<SomeComponent></SomeComponent>);
    setImmediate(() => {
      expect(wrapper.state('name')).toBe(responseText.name);
      done();
    });
  });
});
