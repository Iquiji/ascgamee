var cos = Math.cos
var sin = Math.sin
var pi = Math.PI
function unit() {
	return [1,0,0,0,1,0,0,0,1]
}
function scale(k){
	return [k,0,0,0,k,0,0,0,1]
}
function move(x,y){
	return [1,0,x,0,1,y,0,0,1]
}
function rot(a){
	return [cos(a),-sin(a),0,sin(a),cos(a),0,0,0,1]
}
function rotp(a,p){
	return move(p[0],p[1]) * rot(a) * move(-p[0],-p[1])
}/*

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

function mmul(a,b) {
	return [
		a[0]*b[0] + a[1]*b[3] + a[2]*b[6],
		a[3]*b[0] + a[4]*b[3] + a[5]*b[6],
		a[6]*b[0] + a[7]*b[3] + a[8]*b[6],

		a[0]*b[1] + a[1]*b[4] + a[2]*b[7],
		a[3]*b[1] + a[4]*b[4] + a[5]*b[7],
		a[6]*b[1] + a[7]*b[4] + a[8]*b[7],

		a[0]*b[2] + a[1]*b[5] + a[2]*b[8],
		a[3]*b[2] + a[4]*b[5] + a[5]*b[8],
		a[6]*b[2] + a[7]*b[5] + a[8]*b[8],

	]
}

function pmul(a,b){ // a = matrix ; b = point 
	return [
		a[0]*b[0]+a[1]*b[1]+a[2]*b[2],
		a[3]*b[0]+a[4]*b[1]+a[5]*b[2],
		a[6]*b[0]+a[7]*b[1]+a[8]*b[2],
	]
}


/*
class Vector2D(x,y){
	this.x = x
	this.y = y
	this.z = 1
}*/

console.log(mmul(unit(),unit()))
console.log(mmul([1,0,0,0,1,0,0,0,1],[0,-1,0,-1,0,0,0,0,1]))
console.log(pmul(unit(),[1,1,1]))
