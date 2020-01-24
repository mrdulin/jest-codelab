import React from 'react';

const LocationFinderSearch = ({ onLocationChange, onSearchClick, inputValue }) => (
  <form>
    <input type="text" placeholder="Location" onChange={onLocationChange} />
    <input type="submit" value="Search" onClick={onSearchClick} />
  </form>
);

export default LocationFinderSearch;
