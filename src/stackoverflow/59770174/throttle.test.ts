import { throttle } from 'lodash';
import assert from 'assert';

describe('throttle', function() {
  it('should throttle a function', function(done) {
    var callCount = 0,
      throttled = throttle(function() {
        callCount++;
      }, 32);

    throttled();
    throttled();
    throttled();

    var lastCount = callCount;
    assert.ok(callCount);
    console.log('lastCount: ', lastCount);

    setTimeout(function() {
      console.log('callCount: ', callCount);
      assert.ok(callCount > lastCount);
      done();
    }, 64);
  });
});
