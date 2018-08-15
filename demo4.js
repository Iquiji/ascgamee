"use strict";

var m3 = require('./m3.js')
var graphx = require('./graphx.js')
var sleep = require('./graphx.js').sleep;
var round = Math.round
var cos = Math.cos
var sin = Math.sin
var pi = Math.PI

var got = graphx.makebuffer(process.stdout.columns,process.stdout.rows," ")

var mond1 = graphx.nodeinit(2,0,1,0,".",[],m3.unit())
var mond2 = graphx.nodeinit(3,0,1,1,".",[],m3.unit())
var beta = graphx.nodeinit(30,0,1,0.5,"B",[],m3.unit())
var alpha = graphx.nodeinit(7,0,1,0,"A",[mond1,mond2],m3.unit())
var gamma = graphx.nodeinit(14,0,1,0,"G",[],m3.unit())
var delta = graphx.nodeinit(36,0,1,0,"D",[],m3.scale(1,1))
var sun = {x:0,y:0,scale:1,rot:0,char:"S",child:[alpha,beta,gamma,delta],pmat:m3.scale(1,1)}


function update(){
	sleep(1000/30)
	got.clear()
	alpha.rot += pi/25
	beta.rot -= pi/200
	gamma.rot += pi/75
	delta.rot += pi/277
	mond1.rot -= pi/50
	mond2.rot += pi/100
	graphx.renderall(sun,got,m3.mmul(m3.scale(1,0.5),m3.move(process.stdout.columns/2,process.stdout.rows)))
	got.print()
}
//setInterval(update,1000/30)