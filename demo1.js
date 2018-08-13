var m3 = require('./m3.js')
var graphx = require('./graphx.js')
floor = Math.floor

var alpha = [process.stdout.columns/2+5,process.stdout.rows/2+0,1]

var got = graphx.makebuffer(process.stdout.columns,process.stdout.rows," ")
got.set(process.stdout.columns/2,process.stdout.rows/2,"X")
while(true){
	var d = new Date()
	while(d - new Date() <= 1000){
		//DO NOTHING
	}
	got.set(floor(alpha[0]),floor(alpha[1])," ")
	alpha = m3.pmul(m3.rot(1),alpha)
	got.set(floor(alpha[0]),floor(alpha[1]),"I")
	got.print()
}