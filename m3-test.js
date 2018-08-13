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
(function testmmul(){
	assertArrayEquals(m3.mmul([2,3,5,7,11,13,17,23,29],[31,37,41,43,47,53,59,61,67]),[486, 520, 576, 1457, 1569, 1741, 3227, 3479, 3859],"testmmul")
})();
