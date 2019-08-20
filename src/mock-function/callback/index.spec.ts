import { toBeTested } from './toBeTested';

describe('toBeTested', () => {
  it('t1', () => {
    const id = 123;
    const values = {
      text: 'Hello world'
    };

    const mockCallback = jest.fn(vals => {
      return {
        type: 'foo',
        payload: {
          text: vals.text
        }
      };
    });

    const mockXyz = jest.fn();

    toBeTested(id, values, mockXyz, mockCallback);
    expect(mockXyz).toBeCalledWith(id, values, mockCallback);
    expect(mockXyz.mock.calls.length).toBe(1);
    expect(mockXyz.mock.calls[0][0]).toBe(id);
    expect(mockXyz.mock.calls[0][1]).toBe(values);
    expect(mockXyz.mock.calls[0][2]).toBe(mockCallback);
  });
});
