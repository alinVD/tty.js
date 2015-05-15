/*
tty.js
Copyright (c) 2012-2014, Christopher Jeffery (MIT License)
Copyright (c) 2015 Tera Insights, LLC (MIT License)
 */

var NSet = require('es6-set'),
	NMap = require('es6-map');

var config = require('./config'),
	logger = require('./logger'),
	Session = require('./session');

/* Helper functions
 */

var slice = Array.prototype.slice;

/** 
 * Class representing a terminal server.
 *
 * @param {object|string} conf the server configuration, or path to a file
 *                             containing the configuration
 * @param {EventEmitter} sockServ the socket server that accepts new
 *                                connections.
 */
function Server(conf, sockServ) {
	this.conf = config.checkConfig(conf);
	this.socketServer = sockServ;

	this.connections = new NSet();
	this.sessions = new NMap();

	var self = this;

	sockServ.on('connected', function(socket) {
		self.handleConnection(socket);
	});
}

Server.prototype.log = function() {
  return this._log('log', slice.call(arguments));
};

Server.prototype.error = function() {
  return this._log('error', slice.call(arguments));
};

Server.prototype.warning = function() {
  return this._log('warning', slice.call(arguments));
};

Server.prototype._log = function(level, args) {
	if (this.conf.log === false) {
		return;
	}
	args.unshift(level);
	return logger.apply(null, args);
};

/**
 * Handle receiving a new connection.
 * 
 * @param  {Socket} socket the new socket
 * @api private
 */
Server.prototype.handleConnection = function(socket) {
	var self = this,
		sessions = this.sessions;

	this.connections.add(socket);

	function dispatch(ev, f) {
		socket.on(ev, function(sid) {
			var args = slice(arguments, 1);

			if (sessions.has(sid)) {
				args.unshift(sessions.get(sid));
				f.apply(null, args);
			} else if ('function' === typeof args[args.length - 1]) {
				var ack = args[args.length - 1];
				ack({error: 'No such session', session: sid});
			}
		});
	}

	socket.on('new session', function(ack) {
		self.newSession(socket, ack);
	});

	socket.on('list sessions', function(ack) {
		self.handleListSessions(socket, ack);
	});

	socket.on('attach', function(sessionID, ack) {
		self.handleAttach(socket, sessionID, ack);
	});

	socket.on('detatch', function(sessionID) {
		self.handleDetatch(socket, sessionID);
	});

	socket.on('disconnect', function(reason) {
		self.handleDisconnect(socket, reason);
	});

	// Dispatch per-session events
	dispatch('create', function(session, cols, rows, func) {
		session.handleCreate(cols, rows, func);
	});

	dispatch('data', function(session, id, data) {
		session.handleData(id, data);
	});

	dispatch('kill', function(session, id) {
		session.handleKill(id);
	});

	dispatch('resize', function(session, id, cols, rows) {
		session.handleResize(id, cols, rows);
	});

	dispatch('process', function(session, id, func) {
		session.handleProcess(id, func);
	});

	dispatch('request paste', function(session, func) {
		session.handlePaste(func);
	});

	dispatch('close session', function(session) {
		session.close();
	});
};

/**
 * Handle a client disconnecting.
 *
 * @param {Socket} socket the socket of the disconnected client
 * @param {String} reason a message given for the disconnection
 *
 * @api private
 */
Server.prototype.handleDisconnect = function(socket, reason) {
	var sessions = this.sessions;

	this.log('Client disconnected. (id: %s, reason: %s)',
		socket.id, reason);

	this.connections.delete(socket);
	sessions.forEach(function(session) {
		session.handleDisconnect(socket);
	});
};

/**
 * Handle a client requesting a new session.
 * 
 * @param  {Socket} socket the socket of the client
 * @param  {Function} ack  the acknowledgement function
 *
 * @api private
 */
Server.prototype.newSession = function(socket, ack) {
	var session = new Session(this);
	session.attach(socket, ack);
	this.sessions.set(session.id, session);
};

Server.prototype.handleListSessions = function(socket, ack) {
	var ret = [];
	this.sessions.forEach(function(session) {
		ret.push(session.summary());
	});

	ack(null, ret);
};

Server.prototype.handleAttach = function(socket, sessionID, ack) {
	if (this.sessions.has(sessionID)) {
		this.sessions.get(sessionID).attach(socket, ack);
	} else {
		ack({error: "No such session", session: sessionID});
	}
};

Server.prototype.handleDetatch = function(socket, sessionID) {
	if (this.sessions.has(sessionID)) {
		this.sessions.get(sessionID).detatch(socket);
	}
};

Server.prototype.handleSessionClose = function(sid) {
	if (this.sessions.has(sid)) {
		this.sessions.delete(sid);
	}
};