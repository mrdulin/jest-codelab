import Map from './Map';
import React from 'react';
import { shallow } from 'enzyme';

describe('64635170', () => {
  it('should pass', () => {
    const props = {
      type: 'FeatureCollection',
      totalFeatures: 1,
      features: [
        {
          type: 'Feature',
          id: 'af1b8d1c_a186_4e72_8e9e_549a8065e970.1',
          geometry: {
            type: 'MultiPolygon',
            coordinates: [
              [
                [
                  [153.29237339772322, -27.897575560605485],
                  [153.29240999654635, -27.897600934719307],
                  [153.29243164508424, -27.897612892477547],
                  [153.29242807749804, -27.89762571619733],
                  [153.2924182348173, -27.897642434997323],
                  [153.29240518208437, -27.89764887031301],
                  [153.29238402481764, -27.897632940370542],
                  [153.29236010912982, -27.897619001393466],
                  [153.29233897564296, -27.8976119164061],
                  [153.29237339772322, -27.897575560605485],
                ],
              ],
            ],
          },
          geometry_name: 'geom',
          properties: {
            rec_id: 1598139,
            status: 'CURRENT',
            asset_numb: 'BOAR320',
            type: 'Boat Ramp',
            material: 'Gravel',
            number_lan: 1,
            add_improv: 'f',
            top_rl: 0,
            toe_rl: 0,
            area_: 36.079,
            comments: 'Council use only',
            documents: '../photos/31/j31p6.jpg',
            inspectors: null,
            inspection: '2009-09-23Z',
            constructi: null,
            record_cre: '2007-04-27Z',
            last_updat: null,
            update_dat: '2011-07-22Z',
            disposal_d: null,
            positional: 'GPS Corrected 1.0M',
            level_accu: null,
            owner: '251',
            project_nu: null,
            file_numbe: null,
            folder_num: null,
            drawing_nu: null,
            survey_num: null,
            condition: 4,
            historic_c: 0,
            funding_ba: 'Non GCCC',
            mi_symbolo: 'Pen (2, 2, 65535) Brush (1, 0, 16777215)',
            mi_prinx: 1598139,
            createuser: null,
            createdate: null,
            updateuser: null,
            updatedate: null,
            shape_leng: 25.1301720763,
            shape_area: 36.0791723381,
          },
        },
      ],
    };

    const updatedProps = {
      type: 'FeatureCollection',
      totalFeatures: 2, //value changed in updated props
      features: [
        {
          type: 'Feature',
          id: 'af1b8d1c_a186_4e72_8e9e_549a8065e970.1',
          geometry: {
            type: 'MultiPolygon',
            coordinates: [
              [
                [
                  [153.29237339772322, -27.897575560605485],
                  [153.29240999654635, -27.897600934719307],
                  [153.29243164508424, -27.897612892477547],
                  [153.29242807749804, -27.89762571619733],
                  [153.2924182348173, -27.897642434997323],
                  [153.29240518208437, -27.89764887031301],
                  [153.29238402481764, -27.897632940370542],
                  [153.29236010912982, -27.897619001393466],
                  [153.29233897564296, -27.8976119164061],
                  [153.29237339772322, -27.897575560605485],
                ],
              ],
            ],
          },
          geometry_name: 'geom',
          properties: {
            rec_id: 1598139,
            status: 'CURRENT',
            asset_numb: 'BOAR320',
            type: 'Boat Ramp',
            material: 'Gravel',
            number_lan: 1,
            add_improv: 'f',
            top_rl: 0,
            toe_rl: 0,
            area_: 36.079,
            comments: 'Council use only',
            documents: '../photos/31/j31p6.jpg',
            inspectors: null,
            inspection: '2009-09-23Z',
            constructi: null,
            record_cre: '2007-04-27Z',
            last_updat: null,
            update_dat: '2011-07-22Z',
            disposal_d: null,
            positional: 'GPS Corrected 1.0M',
            level_accu: null,
            owner: '251',
            project_nu: null,
            file_numbe: null,
            folder_num: null,
            drawing_nu: null,
            survey_num: null,
            condition: 4,
            historic_c: 0,
            funding_ba: 'Non GCCC',
            mi_symbolo: 'Pen (2, 2, 65535) Brush (1, 0, 16777215)',
            mi_prinx: 1598139,
            createuser: null,
            createdate: null,
            updateuser: null,
            updatedate: null,
            shape_leng: 25.1301720763,
            shape_area: 36.0791723381,
          },
        },
      ],
    };
    const map = { data: { addGeoJson: jest.fn() } };
    const google = { maps: { Map: jest.fn(() => map) } };
    window.google = google;
    document.getElementById = jest.fn().mockReturnValueOnce('el');
    const wrapper = shallow(<Map data={props}></Map>);
    const initMapSpy = jest.spyOn(wrapper.instance(), 'initMap');
    wrapper.setProps({ data: updatedProps });
    expect(initMapSpy).toBeCalledTimes(1);
    expect(document.getElementById).toBeCalledWith('map-js');
    expect(google.maps.Map).toBeCalledWith('el', {
      center: {
        lat: -27.9959656,
        lng: 153.2879044,
      },
      zoom: 9,
    });
    expect(map.data.addGeoJson).toBeCalledWith(updatedProps);
  });
});
