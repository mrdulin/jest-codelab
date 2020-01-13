import SomeComponent from './';
import React from 'react';
import { mount, ReactWrapper, shallow } from 'enzyme';
import * as templateService from './templateService';
import { act } from 'react-dom/test-utils';

const whenStable = async () => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
};

describe('59715038', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SomeComponent></SomeComponent>);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  describe('#downloadExcel', () => {
    it('should download excel correctly', async () => {
      const url = 'https://github.com';
      const mResponse = { data: 'fake data' };
      jest.spyOn(templateService, 'getTemplate').mockResolvedValueOnce(mResponse);
      window.URL.createObjectURL = jest.fn().mockReturnValueOnce(url);
      const mLink = { href: '', setAttribute: jest.fn(), click: jest.fn() };
      document.createElement = jest.fn().mockReturnValueOnce(mLink);
      document.body.appendChild = jest.fn();
      wrapper.find('button').simulate('click');
      await whenStable();
      expect(window.URL.createObjectURL).toBeCalledWith(new Blob([mResponse.data]));
      expect(document.createElement).toBeCalledWith('a');
      expect(mLink.href).toBe(url);
      expect(mLink.setAttribute).toBeCalledWith('download', 'Project_register_template_PMB.xlsx');
      expect(document.body.appendChild).toBeCalledWith(mLink);
      expect(mLink.click).toBeCalledTimes(1);
    });

    it('should set errors if get template failure', async () => {
      const mError = new Error('some error');
      jest.spyOn(templateService, 'getTemplate').mockRejectedValueOnce(mError);
      wrapper.find('button').simulate('click');
      await whenStable();
      expect(wrapper.state()).toEqual({ errors: { api: `API error:${mError}, please contact an administrator` } });
    });
  });
});
