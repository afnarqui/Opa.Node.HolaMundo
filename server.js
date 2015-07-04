
var http = require('http'),
	config = require('./config.json'),
	expressServer = require('./app/expressServer.js');


var app = new expressServer();

var server = http.createServer(app.expressServer);

server.listen(config.port,function(){
	console.log('servidor ejecutandose por el puerto: ' + config.port);
});








