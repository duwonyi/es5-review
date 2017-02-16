var assert = require('chai').assert;
var index = require('../src/index');

describe('index.js', () => {
  it('foo', () => {
    assert.equal(index.foo, 'foo');
  });

  it('bar', () => {
    assert.equal(index.bar, 'bar');
  });

  it('hello', () => {
    assert.equal(index.hello(), 'hello');
  });
});


