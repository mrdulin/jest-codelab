const Component = require('.');

// const mockOpts = {
//   $: {
//     ajax: jest.fn()
//   }
// };

// jest.mock('jquery', () => {
//   return mockOpts;
// });

const component = new Component();

describe('Component', () => {
  it('t1', () => {
    const $ = require('jquery');
    component.componentDidMount();

    expect($.default.ajax).toBeCalledWith({
      url: '/reactApp/login',
      dataType: 'json',
      contentType: 'application/json;',
      type: 'POST',
      data: JSON.stringify({ userName: 'me', passWord: 'pass' }),
      success: expect.any(Function),
      error: expect.any(Function)
    });
  });
});
