
var express = require('express'),
	swig = require('swig'),
	middlewares = require('./middlewares/admin.js');


var ExpressServer = function(config){
	config = config || {};


	this.expressServer = express();


	for(var middleware in middlewares)
	{
		this.expressServer.set(middlewares[middleware]);
	}


		this.expressServer.engine('html',swig.renderFile);
		this.expressServer.set('view engine','html');
		this.expressServer.set('views',__dirname + '/negocio/vistas');


		this.expressServer.get('/persona',function(req,res,next){
			res.render('index',{});
		});
}


module.exports = ExpressServer;

