import React from 'react';
import { shallow } from 'enzyme';
import { SearchComponent } from '.';

describe('SearchComponent', () => {
  const jobs = {
    content: [
      {
        id: '5b7d4a566c5fd00507501051',
        companyId: null,
        jdName: 'Senior/ Lead UI Developer',
        jobDescription: null,
        technology: 'java'
      },
      {
        id: '5b7d4a566c5fd005075011',
        companyId: null,
        jdName: 'ead UI Developer',
        jobDescription: null,
        technology: 'angular'
      }
    ]
  };

  it('should search and filter job list correctly', () => {
    const wrapper = shallow(<SearchComponent jobs={jobs}></SearchComponent>);
    expect(wrapper.find('#searchJob')).toHaveLength(1);
    const mockedChangeEvent = { target: { value: 'Lead' } };
    expect(wrapper.state('search')).toBe('');
    wrapper.find('#searchJob').simulate('change', mockedChangeEvent);
    expect(wrapper.state('search')).toBe('Lead');
    expect(wrapper.find('.job-list').children()).toHaveLength(1);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
