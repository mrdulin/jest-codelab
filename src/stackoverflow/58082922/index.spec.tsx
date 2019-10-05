import React from 'react';
import XComponent from './';
import { api } from './api';
import { shallow } from 'enzyme';

jest.mock('./api.ts');
window.scrollTo = jest.fn();

const motoResponse = {
  name: 'Honda'
};

const autoResponse = {
  vehicles: []
};

describe('<Component /> Component render', () => {
  let wrapper;

  beforeEach(() => {
    (api.getVehicles as any).mockResolvedValueOnce(autoResponse);
    (api.getCurrentMoto as any).mockResolvedValueOnce(motoResponse);

    wrapper = shallow(<XComponent />);
  });

  test('correct data passed from endpoint to state in componentDidMount', done => {
    expect.assertions(5);
    expect(wrapper.text()).toBe('58082922');
    setImmediate(() => {
      expect(api.getVehicles).toBeCalledTimes(1);
      expect(api.getCurrentMoto).toBeCalledTimes(1);
      expect(window.scrollTo).toBeCalledWith(0, 0);
      expect(wrapper.state().name).toBe('Honda');
      done();
    });
  });
});
