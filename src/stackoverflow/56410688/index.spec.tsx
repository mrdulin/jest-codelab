import React from 'react';
import { DisplayData } from './';
import axios from 'axios';
import renderer, { act } from 'react-test-renderer';

describe('DisplayData', () => {
  it('should show new entries when query is set', async () => {
    const mProps = {
      query: 'pippo',
      onQueryChange: jest.fn()
    };
    const FAKE_HITS = [{ objectID: 1, url: 'haha.com', title: 'haha' }];
    const axiosGetSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: { hits: FAKE_HITS } });
    let component;
    await act(async () => {
      component = renderer.create(<DisplayData {...mProps}></DisplayData>);
    });
    expect(axiosGetSpy).toBeCalledWith('http://hn.algolia.com/api/v1/search?query=pippo');
    expect(component.toJSON()).toMatchSnapshot();
    axiosGetSpy.mockRestore();
  });

  it('should not fetch data when query is empty string', async () => {
    const mProps = {
      query: '',
      onQueryChange: jest.fn()
    };
    const axiosGetSpy = jest.spyOn(axios, 'get');
    let component;
    await act(async () => {
      component = renderer.create(<DisplayData {...mProps}></DisplayData>);
    });
    expect(axiosGetSpy).not.toBeCalled();
    expect(component.toJSON()).toMatchSnapshot();
    axiosGetSpy.mockRestore();
  });
});
