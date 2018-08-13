"use strict";

var m3 = require('./m3.js')
var graphx = require('./graphx.js')
var round = Math.round
var cos = Math.cos
var sin = Math.sin
var pi = Math.PI

var alpha = [process.stdout.columns/2+8,process.stdout.rows/2+0,1]
var sun = [process.stdout.columns/2,process.stdout.rows/2,1]

var got = graphx.makebuffer(process.stdout.columns,process.stdout.rows," ")
got.set(process.stdout.columns/2,process.stdout.rows/2,"X")

function sleep(t){
	var d = new Date()
	while(-(d - new Date()) <= t){
		//DO NOTHING
	}
}

got.set(round(alpha[0]),round(alpha[1]),"I")
got.print()

while(true){
	sleep(500)
	console.log("x:",round(alpha[0]),"y:",round(alpha[1]),"alpha:",alpha)
	got.set(round(alpha[0]),round(alpha[1])," ")
	alpha = m3.pmul(m3.rotp(pi,sun),alpha)
	console.log("next pos at:",alpha)
	got.set(round(alpha[0]),round(alpha[1]),"I")
	got.print()
	return
}
