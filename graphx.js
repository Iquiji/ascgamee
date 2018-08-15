"use strict";

var m3 = require('./m3.js')
var assert = require('./assert.js').assert
var round = Math.round
var util = require('util')

function render(p,node,buf,test){
	var xy = m3.mmul(m3.mmul(m3.mmul(p,m3.rot(node.rot)),m3.scale(node.scale,node.scale)),m3.move(node.x,node.y))
	node.pmat = xy
	if(test){
		return xy
	}
	xy = m3.pmul(xy,[0,0,1])
	buf.set(round(xy[0]),round(xy[1]),node.char)
	//console.log(xy)
}
exports.render = render;

function renderall(stacknode,buf,pmat){
	render(pmat,stacknode,buf,false)
	for(var idx = 0; idx < stacknode.child.length; idx ++){
		//console.log("render next item",stacknode.child)
		renderall(stacknode.child[idx],buf,stacknode.pmat)
	}
}
exports.renderall = renderall;

exports.nodeinit = function(x,y,scale,rot,char,children){
	return {x:x,y:y,scale:scale,rot:rot,char:char,child:children,pmat:m3.unit()}
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
		char:char,

		set: function(x,y,char){
			if (x >= 0 && y >= 0 && x <= this.width-1 && y <= this.height -1) {
				this.buf[(x+this.width*y)] = char
				//console.log("set on x y",x,y,"char: ",char)
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
		},
		clear:  function(){
			for (var i = 0;i < this.width*this.height;i++) {
				this.buf[i] = this.char
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