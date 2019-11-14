import util from './util';
import moduleName from './third_party_module';

jest.mock('./third_party_module', () => ({
  func1: jest.fn()
}));

describe('was mocked functions called', () => {
  test('was mocked functions called??', () => {
    util.simple_function();
    expect(moduleName.func1).toHaveBeenCalled();
  });
});
