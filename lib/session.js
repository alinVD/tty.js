var path = require('path'),
	pty = require('pty.js'),
	NSet = require('es6-set'),
	NMap = require('es6-map');

/* Helper functions
 */

var slice = Array.prototype.slice;

function sanitize(file) {
	if (!file) {
		return '';
	}
	file = file.split(' ')[0] || '';
	return path.basename(file) || '';
}

/**
 * Class representing a single session, which is a group of one or more
 * terminals.
 * 
 * @param {Server} server the Server instance this session is a part of
 */
function Session(server) {
	this.server = server;
	this.sockets = new NSet();
	this.terms = new NMap();

	this.id = Session.uid++ + '';
	this.name = this.id;
}

Session.uid = 0;

Session.prototype.log = function() {
	return this._log('log', slice.call(arguments));
};

Session.prototype.error = function() {
	return this._log('error', slice.call(arguments));
};

Session.prototype.warning = function() {
	return this._log('warning', slice.call(arguments));
};

Session.prototype._log = function(level, args) {
	if (typeof args[0] !== 'string'){
		args.unshift('');
	}
	args[0] = '\x1b[1m' + this.id + '\x1b[m' + args[0];
	return this.server._log(level, args);
};

/**
 * Attatches the given socket to the session
 * 
 * @param  {Socket} socket the socket to attach
 * @param  {Function} ack    the acknowledgement function
 */
Session.prototype.attach = function(socket, ack) {
	this.sockets.add(socket);

	ack(null, this.summary());

	this.sync();
};

/**
 * Detatches the given socket from the session, if it is not already
 * detatched.
 * 
 * @param  {Socket} socket the client connection to detatch
 */
Session.prototype.detatch = function(socket) {
	this.sockets.delete(socket);
};

/**
 * Handles a client connection dropping.
 *
 * @param {Socket} socket the client connection that has dropped.
 */
Session.prototype.handleDisconnect = function(socket) {
	this.detatch(socket);
};

/**
 * Sends an event to all attached sockets.
 *
 * @api private
 */
Session.prototype.broadcast = function() {
	// Splice the session ID as the first parameter of the event
	var ev = arguments[0];
	var args = slice.call(arguments, 1);
	args.unshift(this.id);
	args.unshift(ev);

	this.sockets.forEach(function(socket) {
		socket.emit.apply(socket, args);
	});
};

/**
 * Creates a short summary of the Session's characteristics
 *
 * @api public
 */
Session.prototype.summary = function() {
	return {
		id: this.id,
		name: this.name,
		nterms: this.terms.size
	};
};

/**
 * Synchronizes the session's state with all currently attached sockets
 *
 * @api private
 */
Session.prototype.sync = function() {
	var self = this,
		terms = {},
		queue = [];

	self.terms.forEach(function(term, key) {
		terms[key] = {
			id: term.pty,
			pty: term.pty,
			cols: term.cols,
			rows: term.rows,
			process: sanitize(term.process)
		};
	});

	self.terms.forEach(function(term) {
		var cols = term.cols,
			rows = term.rows;

		// Get processes to redraw by temporarily changing the size of the
		// terminal by 1 pixel on each side
		term.resize(cols + 1, rows + 1);
		queue.push(function() {
			term.resize(cols, rows);
		});
	});

	setTimeout(function() {
		queue.forEach(function(item) {
			item();
		});
	}, 30);

	this.broadcast('sync', terms);
};

/**
 * Handles a request to create a new terminal
 * 
 * @param  {Number} cols The width of the terminal in columns
 * @param  {Number} rows The height of the terminal in rows
 * @param  {Function} ack  The acknowledgement function
 */
Session.prototype.handleCreate = function(cols, rows, ack) {
	var self = this,
		terms = this.terms,
		conf = this.server.conf;

	var len = terms.size,
		term,
		id;

	if (len >= conf.limitPerUser || pty.total >= conf.limitGlobal) {
		this.warning('Terminal limit reached.');
		return ack({ error: 'Terminal limit.' });
	}

	var shell = typeof conf.shell === 'function' ?
		conf.shell(this) :
		conf.shell;

	var shellArgs = typeof conf.shellArgs === 'function' ?
		conf.shellArgs(this) :
		conf.shellArgs;

	term = pty.fork(shell, shellArgs, {
		name: conf.termName,
		cols: cols,
		rows: rows,
		cwd: conf.cwd || process.env.HOME
	});

	id = term.pty;
	terms.set(id, term);

	term.on('data', function(data) {
		self.broadcast('data', id, data);
	});

	term.on('close', function() {
		// Make sure it closes on the client side.
		self.broadcast('kill', id);

		terms.delete(id);

		self.log('Closed pty (%s): %d', term.pty, term.fd);
	});

	this.log('Created pty (id: %s, master: %d, pid: %d).',
		id, term.fd, term.pid);

	var termInfo = {
		id: id,
		pty: term.pty,
		process: sanitize(conf.shell)
	};

	// Notify the creating socket that there was no error
	ack(null, termInfo);

	// Broadcast creation to all listening sockets
	this.broadcast('created', termInfo);
};

/**
 * Handle data received from a client.
 * 
 * @param  {String} id   terminal ID
 * @param  {Buffer} data data to write to terminal
 */
Session.prototype.handleData = function(id, data) {
	var terms = this.terms;
	if (terms.has(id)) {
		terms.get(id).write(data);
	} else {
		this.warning('Client attempting to write to a non-existant terminal.' +
			' (id: %s)', id);
	}
};

/**
 * Handle request from a client to destroy a terminal.
 * 
 * @param  {String} id terminal ID
 */
Session.prototype.handlekill = function(id) {
	var terms = this.terms;
	if (terms.has(id)) {
		terms.get(id).destroy();
		terms.delete(id);
	}
};

/**
 * Handle a request from a client to resize a terminal.
 * 
 * @param  {String} id   terminal ID
 * @param  {Number} cols new terminal width in columns
 * @param  {Number} rows new terminal height in rows
 */
Session.prototype.handleResize = function(id, cols, rows) {
	var terms = this.terms;
	if (terms.has(id)) {
		terms.get(id).resize(cols, rows);
	}
};

/**
 * Handle a request from a client for the name of the process a terminal is
 * running.
 * 
 * @param  {String} id  terminal ID
 * @param  {Function} ack acknowledgement function
 */
Session.prototype.handleProcess = function(id, ack) {
	var terms = this.terms;
	if (terms.has(id)) {
		var name = terms.get(id).process;
		ack(null, sanitize(name));
	} else {
		ack({error: 'No such terminal', terminal: id});
	}
};

/**
 * Close the session, destroying all terminals.
 */
Session.prototype.close = function() {
	var self = this,
		terms = this.terms,
		server = this.server;

	self.log("Killing all pty's.");

	terms.forEach(function(term) {
		term.destroy();
	});
	terms.clear();

	// Notify all connected sockets that we are closing down
	self.broadcast('session closed');
	self.sockets.clear();

	// Notify server that we are closed
	server.handleSessionClosed(self.id);
};

/**
 * Handle a request from the client to get the contents of the clipboard.
 * @param  {Function} ack acknowledgement function
 */
Session.prototype.handlePaste = function(ack) {
	var execFile = require('child_process').execFile;

	function exec(args, func) {
		var file = args.shift();
		return execFile(file, args, function(err, stdout, stderr) {
			if (err) {
				return func(err);
			}
			if (stderr && !stdout) {
				return func(new Error(stderr));
			} 
			return func(null, stdout);
		});
	}

	return exec(['xsel', '-o', '-p'], function(err, text) {
		if (!err) { return ack(null, text); }
		return exec(['xclip', '-o', '-selection', 'primary'], function(err, text) {
			if (!err) { return ack(null, text); }
			// Mac:
			return exec(['pbpaste'], function(err, text) {
				if (!err) { return ack(null, text); }
				return ack(new Error('Failed to get clipboard contents'));
			});
		});
	});
};
