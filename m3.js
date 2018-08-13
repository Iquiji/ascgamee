var cos = Math.cos
var sin = Math.sin
var pi = Math.PI

function assert() {
	if (!arguments[0]) {
		console.log("Assertion failed: ", arguments)
		process.exit(1)
	}
}

function mmul(a,b) {
	var ret = [
		a[0]*b[0] + a[1]*b[3] + a[2]*b[6],
		a[3]*b[0] + a[4]*b[3] + a[5]*b[6],
		a[6]*b[0] + a[7]*b[3] + a[8]*b[6],

		a[0]*b[1] + a[1]*b[4] + a[2]*b[7],
		a[3]*b[1] + a[4]*b[4] + a[5]*b[7],
		a[6]*b[1] + a[7]*b[4] + a[8]*b[7],

		a[0]*b[2] + a[1]*b[5] + a[2]*b[8],
		a[3]*b[2] + a[4]*b[5] + a[5]*b[8],
		a[6]*b[2] + a[7]*b[5] + a[8]*b[8],
	];
	assert(ret[8] == 1, "last mmul result element is not one", a, b, ret);
	return ret;
}
exports.mmul = mmul;

exports.unit = function unit() {
	return [1,0,0,0,1,0,0,0,1]
}
exports.scale = function scale(k){
	return [k,0,0,0,k,0,0,0,1]
}

function move(x,y){
	return [1,0,x,0,1,y,0,0,1]
}
exports.move = move;

function rot(a){
	return [cos(a),-sin(a),0,sin(a),cos(a),0,0,0,1]
}
exports.rot = rot;

exports.rotp = function rotp(a,p){
	var x = p[0]
	var y = p[1]
	/*
	console.log("rot p", a, p, [cos(a),-sin(a),cos(a)*(-x) - sin(a)* -y +x,sin(a),cos(a),sin(a) * -x +sin(a) * -y +y,0,0,1])
	return [cos(a),-sin(a),cos(a)*(-x) - sin(a)* -y +x,sin(a),cos(a),sin(a) * -x +sin(a) * -y +y,0,0,1]
	*/
	var result = mmul(mmul(move(x, y), rot(a)), move(-x, -y))
	console.log("rot-p:", a, p, result, cos(a), sin(a))
	return result
}
/*
function mmul(a,b){
	var ans = []
	var t = 8
	console.log("a:",a,"b:",b)
	for (var i = 0; i<9; i++) {
		ans[i] = a[i]*b[i]+a[(i+1)%t]*b[(i+3)%t]+a[(i+2)%t]*b[(i+5)%t]					// doesn't work correct needs improvment
		console.log("i:",i,a[i]*b[i],a[(i+1)%t]*b[(i+3)%t],a[(i+2)%t]*b[(i+5)%t])
	}
	return ans
}*/
exports.pmul = function pmul(a,b){ // a = matrix ; b = point 
	var result = [
		a[0]*b[0]+a[1]*b[1]+a[2]*b[2],
		a[3]*b[0]+a[4]*b[1]+a[5]*b[2],
		a[6]*b[0]+a[7]*b[1]+a[8]*b[2],
	]

	assert(result[2] == 1, "last element is not one", a, b, result)
	return result
}

/*
console.log(mmul(unit(),unit()))
console.log(mmul([1,0,0,0,1,0,0,0,1],[0,-1,0,-1,0,0,0,0,1]))
console.log(pmul(unit(),[1,1,1]))
*/

assert(true, )






