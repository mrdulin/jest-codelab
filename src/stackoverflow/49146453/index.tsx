import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore } from 'redux';

export const store = createStore(() => 0);

export const EstateList = () => <div>EstateList</div>;
export const ArticleList = () => <div>ArticleList</div>;
export const ArticleDetail = () => <div>ArticleDetail</div>;

function bootstrap() {
  if (document.getElementById('estateList')) {
    render(
      <Provider store={store}>
        <EstateList />
      </Provider>,
      window.document.getElementById('estateList'),
    );
  }

  if (document.getElementById('articleList')) {
    render(
      <Provider store={store}>
        <ArticleList />
      </Provider>,
      window.document.getElementById('articleList'),
    );
  }

  if (document.getElementById('articleDetail')) {
    render(
      <Provider store={store}>
        <ArticleDetail />
      </Provider>,
      window.document.getElementById('articleDetail'),
    );
  }
}

export { bootstrap };
