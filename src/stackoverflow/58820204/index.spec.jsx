import React from 'react';
import ReactDOM from 'react-dom';
import AutoComplete from './index';

describe('AutoComplete', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });
  it('render list', () => {
    const handleClick = jest.fn();
    const mockList = [
      { id: 1011322, name: 'Druig' },
      { id: 1009284, name: 'Dum Dum Dugan' },
      { id: 101078, name: 'Eddie Brock' }
    ];
    const div = document.createElement('div');
    ReactDOM.render(<AutoComplete match={mockList} className={'autocomplete-items'} onClick={handleClick} />, div);
    expect(div.querySelectorAll('.autocomplete-items li').length).toBe(3);
    ReactDOM.unmountComponentAtNode(div);
  });
});
