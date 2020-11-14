import React from 'react';
import ReactDOM from 'react-dom';
import CardList from './CardList';

it('renders without crashing', () => {
  const cards = [{ id: 1, name: 'teresa teng' }];
  const div = document.createElement('div');
  ReactDOM.render(<CardList cards={cards} />, div);
});
