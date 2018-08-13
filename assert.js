function assert() {
	if (!arguments[0]) {
		console.log("Assertion failed: ", arguments)
		process.exit(1)
	}
}

function arrayEquals(a, b) {
	if (a.length != b.length) {
		return false;
	}
	for(var i = 0; i < a.length; i++) {
		if (a[i] != b[i]) {
			return false;
		}
	}
	return true;
}

function assertArrayEquals() {
	assert(arrayEquals(arguments[0], arguments[1]), arguments)
}

exports.assert = assert;
exports.arrayEquals = arrayEquals;
exports.assertArrayEquals = assertArrayEquals;

assert(arrayEquals([1,2,3], [1,2,3]))
assert(!arrayEquals([1,2,3], [1,2]))
assert(!arrayEquals([1,3,3], [1,2,3]))
