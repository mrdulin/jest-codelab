import App from './app';
import { shallow } from 'enzyme';

describe('59796928', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App></App>);
  });
  describe('#handleSubmit', () => {
    it('should pass', () => {
      expect(wrapper.exists()).toBeTruthy();
      wrapper.find('form').simulate('submit');
      expect(wrapper.state()).toEqual({ number: 21 });
    });
  });
  describe('#handleMultiply', () => {
    it('should pass', () => {
      const comp = wrapper.instance();
      const actual = comp.handleMultiply(2, 10);
      expect(actual).toBe(20);
    });
  });
});
