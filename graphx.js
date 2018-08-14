"use strict";
var m3 = require('./m3.js')
var assert = require('./assert.js').assert
var round = Math.round
var util = require('util')
exports.render = function(p,node,buf,test){
	var xy = m3.mmul(m3.mmul(m3.mmul(p,m3.rot(node.rot)),m3.scale(node.scale)),m3.move(-0.5,-0.5))
	node.parent = xy
	if(test){
		return xy
	}
	xy = m3.pmul(xy,[node.x,node.y,1])
	buf.set(round(xy[0]),round(xy[1]),node.char)
	console.log(xy)
}

exports.makebuffer = function(width,height,char) {
	var shit = []
	for (var i = 0;i < width*height;i++) {
		shit[i] = char
	}
	return {
		width:width,
		height:height,
		buf:shit,

		set: function(x,y,char){
			if (x >= 0 && y >= 0 && x <= this.width-1 && y <= this.height -1) {
				this.buf[(x+this.width*y)] = char
				console.log("set on x y",x,y,"char: ",char)
			}else {
				//assert(false,"not in parameters",x,y,char,"set of",this)
			}
		},
		print: function(){
			console.log("\n")
			for(var i= 0;i < this.buf.length;){
				var zeile = ""
				for(var x= 0; x<this.width ; x++){
					zeile = zeile + this.buf[i]
					i++
				}
				util.print(zeile)
			}
		}
	}
}  
function sleep(t){
	var d = new Date()
	while(-(d - new Date()) <= t){
		//DO NOTHING
	}
}
exports.sleep = sleep;