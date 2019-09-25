import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { SomeComponent, ISomeComponentState } from './';
import console = require('console');
import fetch from 'node-fetch';

const { Response } = jest.requireActual('node-fetch');

jest.mock('node-fetch', () => jest.fn());

describe('SomeComponent', () => {
  describe('#handleSubmit', () => {
    let wrapper: ShallowWrapper;
    let getFullNameSpy;
    let alertSpy;
    beforeEach(() => {
      alertSpy = jest.spyOn(window, 'alert');
      getFullNameSpy = jest.spyOn(SomeComponent.prototype as any, 'getFullName');
      wrapper = shallow(<SomeComponent></SomeComponent>);
    });
    afterEach(() => {
      jest.resetAllMocks();
      getFullNameSpy.mockRestore();
    });
    it('check submit', () => {
      expect(wrapper.find('form')).toHaveLength(1);
      getFullNameSpy.mockResolvedValueOnce('fullName');
      const formEventMocked = { preventDefault: jest.fn() };
      const state: ISomeComponentState = {
        firstName: 'Cel.du.on',
        lastName: 'lin.on',
        isDone: false
      };
      wrapper.setState(state);
      expect(wrapper).toMatchSnapshot();
      wrapper.find('form').simulate('submit', formEventMocked);
      expect(getFullNameSpy).toBeCalledTimes(1);
      expect(formEventMocked.preventDefault).toBeCalledTimes(1);
      expect(wrapper.state('isDone')).toBeTruthy();
    });

    it('should alert when first name is invalid', () => {
      expect(wrapper.find('form')).toHaveLength(1);
      const formEventMocked = { preventDefault: jest.fn() };
      const state: ISomeComponentState = {
        firstName: 'du',
        lastName: 'lin.on',
        isDone: false
      };
      wrapper.setState(state);
      expect(wrapper).toMatchSnapshot();
      wrapper.find('form').simulate('submit', formEventMocked);
      expect(alertSpy).toBeCalledWith('Please enter a valid name');
      expect(formEventMocked.preventDefault).toBeCalledTimes(1);
      expect(wrapper.state('isDone')).toBeTruthy();
    });

    it('should alert when last name is invalid', () => {
      expect(wrapper.find('form')).toHaveLength(1);
      const formEventMocked = { preventDefault: jest.fn() };
      const state: ISomeComponentState = {
        firstName: 'Cel.du.on',
        lastName: 'lin',
        isDone: false
      };
      wrapper.setState(state);
      expect(wrapper).toMatchSnapshot();
      wrapper.find('form').simulate('submit', formEventMocked);
      expect(alertSpy).toBeCalledWith('check lastname too');
      expect(formEventMocked.preventDefault).toBeCalledTimes(1);
      expect(wrapper.state('isDone')).toBeTruthy();
    });
  });

  describe('#getFullName', () => {
    let wrapper: ShallowWrapper;
    let alertSpy;
    beforeEach(() => {
      alertSpy = jest.spyOn(window, 'alert');
      wrapper = shallow(<SomeComponent></SomeComponent>);
    });
    it('should fetch data correctly', async () => {
      (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        new Response(JSON.stringify({ data: 'mocked data' }))
      );
      wrapper.setState({ firstName: 'du', lastName: 'lin' });
      const actualValue = await (wrapper.instance() as any).getFullName();
      expect(actualValue).toEqual({ data: 'mocked data' });
      expect(fetch).toBeCalledWith(`https://github.com/mrdulin?fistName=du&lastName=lin`);
    });

    it('should alert when fetch data error', async () => {
      const mockedFetchError = new Error('some error');
      (fetch as jest.MockedFunction<typeof fetch>).mockRejectedValueOnce(mockedFetchError);
      wrapper.setState({ firstName: 'lin', lastName: 'du' });
      const actualValue = await (wrapper.instance() as any).getFullName();
      expect(actualValue).toBeUndefined();
      expect(fetch).toBeCalledWith(`https://github.com/mrdulin?fistName=du&lastName=lin`);
      expect(alertSpy).toBeCalledWith('Please check the names and try again');
    });
  });
});
