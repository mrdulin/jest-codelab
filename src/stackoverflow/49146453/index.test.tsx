import React from 'react';
import { render } from 'react-dom';
import { bootstrap, store, EstateList, ArticleList, ArticleDetail } from './';
import { Provider } from 'react-redux';

jest.mock('react-dom');
const mockedRender = render as jest.Mocked<typeof render>;

describe('49146453', () => {
  let oGetElementById;
  beforeAll(() => {
    oGetElementById = document.getElementById;
  });
  afterAll(() => {
    document.getElementById = oGetElementById;
  });
  it('should render estatelist', () => {
    document.getElementById = jest.fn().mockImplementation((id) => (id === 'estateList' ? 'estateList-dom' : null));
    bootstrap();
    expect(mockedRender).toBeCalledWith(
      <Provider store={store}>
        <EstateList />
      </Provider>,
      'estateList-dom',
    );
  });

  it('should render articleList', () => {
    document.getElementById = jest.fn().mockImplementation((id) => (id === 'articleList' ? 'articleList-dom' : null));
    bootstrap();
    expect(mockedRender).toBeCalledWith(
      <Provider store={store}>
        <ArticleList />
      </Provider>,
      'articleList-dom',
    );
  });

  it('should render articleDetail', () => {
    document.getElementById = jest.fn().mockImplementation((id) => (id === 'articleDetail' ? 'articleDetail-dom' : null));
    bootstrap();
    expect(mockedRender).toBeCalledWith(
      <Provider store={store}>
        <ArticleDetail />
      </Provider>,
      'articleDetail-dom',
    );
  });
});
