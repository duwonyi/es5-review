var assert = require('chai').assert;
var foo = null;
var bar;


describe('Primitive Types', () => {
  it('Typeof null is object', () => {
    assert.equal(typeof foo, 'object');
  });

  it('A undefined variable is undefined', () => {
    assert.equal(typeof bar, 'undefined');
  });

  it('There are five primitive types in JavaScript', () => {
    assert.isNumber(4, '4 is number');
    assert.isBoolean(true, 'true is boolean');
    assert.isString('str', 'str is string');
  });
});
