"use strict";

var assert = require('./assert.js').assert;
var arrayEquals = require('./assert.js').arrayEquals;
var assertArrayEquals = require('./assert.js').assertArrayEquals;
var m3 = require('./m3.js');

(function testUnit() {
	assertArrayEquals(m3.unit(), [1,0,0, 0,1,0, 0,0,1], "testUnit");
})();

(function testScale() {
	assertArrayEquals(m3.scale(3), [3,0,0, 0,3,0, 0,0,1], "testScale");
})();