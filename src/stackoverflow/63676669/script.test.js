const rewire = require('rewire');
const mod = rewire('./script');

describe('My Block', function() {
  test('My Test', async () => {
    mod.__set__('aMyVar', [{ Key: 'Test' }]);
    await mod.load(true);
  });
});
