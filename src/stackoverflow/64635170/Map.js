import React, { Component } from 'react';

class Map extends Component {
  initMap = () => {
    const el = document.getElementById('map-js');
    const options = {
      center: {
        lat: -27.9959656,
        lng: 153.2879044,
      },
      zoom: 9,
    };

    const map = new window.google.maps.Map(el, options);
    map.data.addGeoJson(this.props.data);
  };

  componentDidUpdate() {
    this.initMap();
  }

  render() {
    return (
      <div className="map__holder">
        <div id="map-js"></div>
      </div>
    );
  }
}

export default Map;
