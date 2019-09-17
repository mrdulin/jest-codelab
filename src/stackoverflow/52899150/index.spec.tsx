import React from 'react';
import { SomeComponent } from './';
import { shallow, ShallowWrapper } from 'enzyme';
import fetch from 'node-fetch';

const { Response } = jest.requireActual('node-fetch');

jest.mock('node-fetch');

describe('SomeComponent', () => {
  let component: ShallowWrapper;
  beforeEach(() => {
    component = shallow(<SomeComponent></SomeComponent>);
  });

  it('snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should not fetch api', async () => {
    const mockedState = { state1: '', state2: '' };
    component.setState(mockedState);
    expect(component.state()).toEqual(mockedState);
    await (component.instance() as SomeComponent).method1();
    expect(fetch).not.toBeCalled();
    expect(component.state()).toEqual(mockedState);
  });

  it('should fetch api correctly', async () => {
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(new Response(JSON.stringify('mocked data')));
    expect(component.state()).toEqual({ state1: 'jest', state2: '' });
    await (component.instance() as SomeComponent).method1();
    expect(fetch).toBeCalledWith('api');
    expect(component.state()).toEqual({ state1: 'jest', state2: 'mocked data' });
  });

  it('will fetch error', async () => {
    const mockedError = new Error('some error');
    const consoleLogSpyOn = jest.spyOn(console, 'log');
    (fetch as jest.MockedFunction<typeof fetch>).mockRejectedValueOnce(mockedError);
    await (component.instance() as SomeComponent).method1();
    expect(fetch).toBeCalledWith('api');
    expect(consoleLogSpyOn).toBeCalledWith(mockedError);
    expect(component.state()).toEqual({ state1: 'jest', state2: '' });
  });
});
