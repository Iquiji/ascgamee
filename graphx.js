"use strict";

/*
console.log(process.stdout.columns,process.stdout.rows)

var m3 = require('./m3.js')
console.log(m3.mmul(m3.unit(),m3.scale(3)))
var buf = []
function set_buf(char){
	for (i= 0; i< 64*24; i++){
		buf[i] = char                    //make world out of x :) 64x24 ascii
	}
}

function print_buf(){
	for (i= 0;i<buf.length;){
		var zeile = ""
		for(x= 0;x<64;x++){			 //print world :)
			zeile = zeile + buf[i]
			i += 1
		}
		console.log(zeile)
	}
}

function set_one(x,y,char){
	buf[(x+y*64)] = char
}
set_buf("#")
set_one(0,1,"Q")
print_buf()
*/
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
			}
		},
		print: function(){
			for(var i= 0;i < this.buf.length;){
				var zeile = ""
				for(var x= 0; x<this.width ; x++){
					zeile = zeile + this.buf[i]
					i++
				}
				console.log(zeile)
			}
		}
	}
}  