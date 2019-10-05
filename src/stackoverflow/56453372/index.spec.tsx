import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { XComponent, IXComponentProps } from './';

describe('XComponent', () => {
  let wrapper: ShallowWrapper;
  const mockedProps: IXComponentProps = {
    years: [{ date: '2019-01-01' }],
    tours: [{ id: '1' }],
    songs: [{ id: '2' }],
    shows: [{ id: '3' }],
    venues: [{ id: '4' }],
    currentPath: ''
  };
  beforeEach(() => {
    wrapper = shallow(<XComponent {...mockedProps}></XComponent>);
  });
  it.each`
    currentPath     | componentToRender
    ${'/'}          | ${'HomePage'}
    ${'/UserStats'} | ${'UserStats'}
    ${'/SetList'}   | ${'SetLists'}
    ${'/Shows'}     | ${'Shows'}
    ${'/Venues'}    | ${'Venues'}
    ${'/Songs'}     | ${'Songs'}
    ${'/Tours'}     | ${'Tours'}
    ${'/Years'}     | ${'Years'}
  `(
    'should render $componentToRender component by current path $currentPath correctly',
    ({ currentPath, componentToRender }) => {
      wrapper.setProps({ currentPath });
      expect(wrapper.find(componentToRender)).toHaveLength(1);
    }
  );
});
