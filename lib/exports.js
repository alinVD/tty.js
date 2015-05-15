var Server = require('./server'),
	Session = require('./session'),
	config = require('./config'),
	logger = require('./logger');

module.exports = exports = Server;

exports.Server = Server;
exports.Session = Session;
exports.config = config;
exports.logger = logger;
exports.createServer = Server;