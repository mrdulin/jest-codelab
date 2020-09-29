import { shallow } from 'enzyme';
import React from 'react';
import MovieSummary from './';

describe('64026812', () => {
  it('simulate add movies onclick', () => {
    const movie = {
      imdbID: 2,
      Title: 'bola',
      Year: 1992,
      Poster: 'https://media1.giphy.com/media/rwzBCbqt1jqMw/1',
    };
    const disabled = [2];
    const mAddItem = jest.fn();
    const mHandleDisabled = jest.fn();
    const wrapper = shallow(<MovieSummary movie={movie} disabled={disabled} addItem={mAddItem} handleDisabled={mHandleDisabled} />);
    const btn = wrapper.find('#btn-click');
    btn.simulate('click');
    expect(btn.prop('disabled')).toBeTruthy();
    expect(mAddItem).toBeCalledWith({ title: 'bola', id: 2, year: 1992 });
    expect(mHandleDisabled).toBeCalledWith(2);
  });
});
