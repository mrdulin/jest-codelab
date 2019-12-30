console.log('333');
function tests(input) {
  console.log('444');
  it('should pass', function() {
    console.log('555');
    expect(input).toBeTruthy();
  });
}
module.exports = tests;
