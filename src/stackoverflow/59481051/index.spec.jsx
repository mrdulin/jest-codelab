import { shallow } from 'enzyme';
import Btn from './';

describe('59481051', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('test button click', () => {
    const props = { onClick: jest.fn() };
    const spyOnClick = jest.spyOn(Btn.prototype, 'toggleClick');
    const wrapper = shallow(<Btn {...props} />);
    wrapper.find('button').simulate('click');
    expect(spyOnClick).toHaveBeenCalled();
    expect(props.onClick).toHaveBeenCalled();
  });
});
