jest.unmock('axios');

const axios = require('axios');

describe.skip('a request to the API POST /order', () => {
  test('with a correct body - 1', () => {
    return axios.post('http://localhost:3000/order', {}).catch(function(error) {
      expect(1 + 4).toBe(3);
    });
  });

  test('with a correct body - 2', done => {
    axios.post('http://localhost:3000/order', {}).catch(function(error) {
      expect(1 + 4).toBe(3);
      done();
    });
  });
});
