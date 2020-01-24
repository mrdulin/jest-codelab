import React from 'react';
import { shallow } from 'enzyme';
import LocationFinderSearch from './';

describe.skip('<LocationFinderSearch />', () => {
  it('should render', () => {
    const noop = () => null;
    expect(
      shallow(<LocationFinderSearch onLocationChange={noop} onSearchClick={noop} inputValue="" />).contains(
        <form>
          <input type="text" placeholder="Location" onChange={noop} />
          <input type="submit" value="Search" onClick={noop} />
        </form>,
      ),
    ).toBeTruthy();
  });
});
