const tests = require('./test_file.js');
console.log('000');

describe.skip('test block 1', function() {
  let input;
  console.log('111');
  beforeAll(() => {
    console.log('222');
    input = true;
  });
  tests(input);
});
