var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');


tests['m/l to m/l'] = function () {
  assert.strictEqual( convert(1).from('m/l').to('m/l') , 1);
};

tests['m/l to km/l'] = function () {
  assert.strictEqual( convert(100).from('m/l').to('km/l') , 0.1);
};

tests['mpg to km/l'] = function () {
  var expected = 4.251
    , actual = convert(10).from('mpg').to('km/l');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['mpg to m/l'] = function () {
  var expected = 2.352
    , actual = convert(1000).from('m/l').to('mpg');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['m/l to mpig'] = function () {
  var expected = 2.825
    , actual = convert(1000).from('m/l').to('mpig');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

module.exports = tests;
