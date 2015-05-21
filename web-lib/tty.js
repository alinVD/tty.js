import Window from './window';
import {
	EventEmitter
} from './utils';

/**
 * Represents a connection to a remote machine.
 */
class TTY extends EventEmitter {
	constructor(opts) {
		super();
		var socket = this.socket = opts.socket;
		this.root = opts.root;

		this.sessions = new Map();
		this.windows = new Map();

		socket.on('connect', () => {
			this.reset();
			this.emit('connect');
		});

		socket.on('session created', (session) => {
			this.sessions.set(session.id, session);
			this.emit('session created', session);
		});

		socket.on('session closed', (sessionID) => {
			this.sessions.delete(sessionID);
			this.emit('session closed', sessionID);

			if (this.windows.has(sessionID)) {
				this.windows.get(sessionID).destroy();
			}
		});

		socket.on('data', (sid, tid, data) => {
			if (this.windows.has(sid)) {
				this.windows.get(sid).write(tid, data);
			}
		});

		socket.on('kill', (sid, tid) => {
			if (this.windows.has(sid)) {
				this.windows.get(sid).kill(tid);
			}
		});

		socket.on('sync', (sid, terms) => {
			if (this.windows.has(sid)) {
				this.windows.get(sid).sync(terms);
			}
		});

		if (opts.autoPoll) {
			this.poller = setInterval(() => {
				this.pollSessions();
			}, opts.autoPoll);
		}
	}

	destroy() {
		if (this.destroyed) { return; }
		this.destroyed = true;

		if (this.poller) {
			clearInterval(this.poller);
			delete this.poller;
		}

		this.sessions.clear();
		this.windows.forEach((win) => {
			win.destroy();
		});
	}

	reset() {
		this.sessions.clear();
		this.windows.forEach((win) => {
			win.destroy();
		});
		this.windows.clear();

		this.emit('reset');
	}

	newSession() {
		this.socket.emit('new session', (err, session) => {
			if (err) {
				this.emit('error', { action: 'newSession', error: err});
			} else {
				this.sessions.set(session.id, session);
				this.newWindow(session.id);
			}
		});
	}

	newWindow(sessionID) {
		var sessions = this.sessions,
			windows = this.windows;

		if (windows.has(sessionID) || !sessions.has(sessionID)) {
			return null;
		} else {
			this.socket.emit('attach', sessionID);
			var win = new Window(this, sessionID, this.socket);
			windows.set(sessionID, win);

			win.once('open', () => {
				this.emit('open window', win);
			});

			win.on('close', () => {
				windows.delete(sessionID);
				this.socket.emit('detatch', sessionID);
			});

			return win;
		}
	}

	pollSessions() {
		this.socket.emit('list sessions', (err, sessions) => {
			if (err) {
				this.emit('error', {action: 'pollSessions', err: err});
				return;
			}

			this.sessions.clear();
			Object.keys(sessions).forEach((sid) => {
				this.sessions.set(sid, sessions[sid]);
			});

			this.emit('sessions list', sessions);
		});
	}
}

export default TTY;