import Login from './login';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

describe('59799196', () => {
  it.skip('test input onChange function', () => {
    const store = mockStore({});
    const wrapper = shallow(<Login store={store} />).dive();
    wrapper
      .find('Input')
      .at(1)
      .simulate('change', { target: { name: 'email', value: 50 } });
    wrapper.update();
    expect(
      wrapper
        .find('Input')
        .at(1)
        .props().value,
    ).toEqual(50);
  });
});
