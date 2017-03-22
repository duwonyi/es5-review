var assert = require('chai').assert;
describe.skip('Array', function() {
  before('before desc', function(){
    console.log('test');
  });

  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
      assert.equal('[]', [1,2,3].toString());
    });

    it.skip('should return -1 when the value is not present2', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
      assert.equal(3, [1,2,3].length);
    });
  });

  describe('#push()', function() {
    it('should add item to array');
  });
});
