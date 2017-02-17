var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['l possibilities'] = function () {
  var actual = convert().from('l').possibilities()
    , expected = [ 'mm3', 'cm3', 'ml', 'l', 'm3', 'km3', 'tsp', 'Tbs', 'in3', 'fl-oz', 'cup', 'pnt', 'qt', 'gal', 'ft3', 'yd3' ];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['kg possibilities'] = function () {
  var actual = convert().from('kg').possibilities()
    , expected = [ 'mcg', 'mg', 'g', 'kg', 'oz', 'lb' ];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['m possibilities'] = function () {
  var actual = convert().from('m').possibilities()
    , expected = [ 'mm', 'cm', 'm', 'km', 'in', 'yd', 'ft', 'mi' ];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['each possibilities'] = function () {
  var actual = convert().possibilities('each')
    , expected = [ 'ea' ];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['mass possibilities'] = function () {
  var actual = convert().possibilities('mass')
    , expected = [ 'mcg', 'mg', 'g', 'kg', 'oz', 'lb' ];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['volume possibilities'] = function () {
  var actual = convert().possibilities('volume')
    , expected = [ 'mm3', 'cm3', 'ml', 'l', 'm3', 'km3', 'tsp', 'Tbs', 'in3', 'fl-oz', 'cup', 'pnt', 'qt', 'gal', 'ft3', 'yd3' ];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['length possibilities'] = function () {
  var actual = convert().possibilities('length')
    , expected = [ 'mm', 'cm', 'm', 'km', 'in', 'yd', 'ft', 'mi' ];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['temperature possibilities'] = function () {
  var actual = convert().possibilities('temperature')
    , expected = ['C', 'K', 'F'];
  assert.deepEqual(actual.sort(), expected.sort())
}

tests['time possibilities'] = function () {
  var actual = convert().possibilities('time')
    , expected = ['ns', 'mu', 'ms', 's', 'min', 'h', 'd', 'week', 'month', 'year']
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['digital possibilities'] = function() {
  var actual = convert().possibilities('digital')
    , expected = [ 'b', 'Kb', 'Mb', 'Gb', 'Tb', 'B', 'KB', 'MB', 'GB', 'TB' ];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['partsPer possibilities'] = function() {
  var actual = convert().possibilities('partsPer')
    , expected = [ 'ppm', 'ppb', 'ppt', 'ppq' ];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['all possibilities'] = function () {
  var actual = convert().possibilities()
    , expected = [ 'mm', 'cm', 'm', 'km', 'in', 'yd', 'ft', 'mi', 'mm2', 'cm2', 'm2', 'ha', 'km2', 'in2', 'ft2', 'ac', 'mi2', 'mcg', 'mg', 'g', 'kg', 'oz', 'lb', 'mm3', 'cm3', 'ml', 'l', 'm3', 'km3', 'tsp', 'Tbs', 'in3', 'fl-oz', 'cup', 'pnt', 'qt', 'gal', 'ft3', 'yd3', 'ea', 'C', 'K', 'F', 'ns', 'mu', 'ms', 's', 'min', 'h','d', 'week', 'month', 'year', 'b', 'Kb', 'Mb', 'Gb', 'Tb', 'B', 'KB', 'MB', 'GB', 'TB', 'ppm', 'ppb', 'ppt', 'ppq' ];
  assert.deepEqual(actual.sort(), expected.sort());
};

module.exports = tests;
