"use strict";

var m3 = require('./m3.js')
var graphx = require('./graphx.js')
var sleep = require('./graphx.js').sleep;
var round = Math.round
var cos = Math.cos
var sin = Math.sin
var pi = Math.PI

var got = graphx.makebuffer(process.stdout.columns,process.stdout.rows," ")

var sun = {x:process.stdout.columns/2,y:process.stdout.rows/2,scale:1,rot:0,char:"X",child:[]}
var findsun = [1,0,process.stdout.columns/2,0,1,process.stdout.rows/2,0,0,1]
var alpha = graphx.nodeinit(10,0,1,0,"I",[])

graphx.render([1,0,0,0,1,0,0,0,1],sun,got,false)
while(true){
	sleep(500)
	alpha.rot += pi/25
	graphx.render(findsun,alpha,got,false)
	got.print()
}