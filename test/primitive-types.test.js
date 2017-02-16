var assert = require('chai').assert;
var foo;

describe.only('Primitive Types', () => {
  it('test', () => {
    assert.equal(typeof foo, 'undefined');
  });
});
