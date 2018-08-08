var m3 = require('./m3.js')
var graphx = require('./graphx.js')

var got = graphx.makebuffer(process.stdout.columns,process.stdout.rows," ")
got.set(process.stdout.columns/2,process.stdout.rows/2,"X")
got.print()
while(true){
	//do something
}