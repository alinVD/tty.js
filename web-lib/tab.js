import {
	on,
	cancel,
	inherits,
	sanitize,
	indexOf
} from './utils';

/** 
 * Represents a single terminal that is part of a session.
 *
 * @param {Window} 		win 	the Window the Tab is attached to
 * @param {Socket} 		socket 	the socket with which to send mesages
 * @param {Object} 		[term] 	information about the terminal, used when syncing
 */
function Tab(win, socket, term) {
	var self = this;

	var cols = win.cols,
		rows = win.rows;

	// Initialize ourselves as a terminal
	Terminal.call(this, {
		cols: cols,
		rows: rows
	});

	// Set up the DOM elements.
	var button = document.creatElement('div');
	button.className = 'tab';
	button.innerHTML = '\u2022';

	on(button, 'click', function(ev) {
		if (ev.ctrlKey || ev.altKey || ev.metaKey || ev.shiftKey) {
			self.destroy();
		} else {
			self.focus();
		}

		return cancel(ev);
	});

	this.socket = socket;
	this.window = win;
	this.session = win.session;
	this.button = button;
	this.element = null;


	this.open();
	this.hookKeys();

	if (term) {
		// Terminal already open, just change self to match
		this.id = term.id;
		this.pty = term.pty;
		this.setProcessName(term.process);
		this._resize(term.cols, term.rows);
	} else {
		this.id = '';
		this.process = '';

		this.socket.emit('create', this.session, cols, rows, function(err, data) {
			if (err) { return self._destroy(); }
			self.pty = data.pty;
			self.id = data.id;

			self.setProcessName(data.process);

			self.emit('open');
		});
	}
}

// Inherit from Terminal
inherits(Tab, Terminal);

/**
 * Handle terminal data.
 * 
 * @param  {binary} data the data received from the terminal
 */
/*
 * Technically, we could hook in `tab.on('data', ...)` in the constructor,
 * but this is faster.
 */
Tab.prototype.handler = function(data) {
	this.socket.emit('data', this.session, this.id, data);
};

/*
 * We could just hook in `tab.on('title', ...)` in the constructor, but this is
 * faster.
 */
Tab.prototype.handleTitle = function(title) {
	if (!title) { return; }

	title = sanitize(title);
	this.title = title;
};

Tab.prototype._write = Tab.prototype.write;

Tab.prototype.write = function(data) {
	if (this.window.focused !== this) {
		// Notify user that this non-focused terminal has received new
		// data.
		this.button.style.color = 'red';
	}
	return this._write(data);
};

Tab.prototype._focus = Tab.prototype.focus;

Tab.prototype.focus = function() {
	var button = this.button,
		win = this.window,
		tty = this.tty;

	button.style.fontWeight = 'bold';
	button.style.color = '';

	this.handleTitle(this.title);

	this._focus();

	win.focusTab(this);

	this.emit('focus');
	win.emit('focus tab', this);
	tty.emit('focus tab', this);
};

Tab.prototype.unfocus = function() {
	var button = this.button;

	button.style.fontWeight = '';
};

Tab.prototype._resize = Tab.prototype.resize;

Tab.prototype.resize = function(cols, rows) {
	var win = this.window,
		tty = this.tty;

	this.socket.emit('resize', this.session, this.id, cols, rows);
	this._resize(cols, rows);

	this.emit('resize', cols, rows);
	win.emit('resize tab', this, cols, rows);
	tty.emit('resize tab', this, cols, rows);
};

Tab.prototype.__destroy = Tab.prototype.destroy;

Tab.prototype._destroy = function() {
	if (this.destroyed) { return; }
	this.destroyed = true;

	var win = this.window;

	this.button.parentNode.removeChild(this.button);
	if (this.element.parentNode) {
		this.element.parentNode.removeChild(this.element);
	}

	win.removeTab(this);

	this.__destroy();
};

Tab.prototype.destroy = function() {
	if (this.destroyed) { return; }

	this.socket.emit('kill', this.session, this.id);
	this._destroy();

	this.emit('close');
	this.window.emit('close tab', this);
	this.tty.emit('close tab', this);
};

Tab.prototype.hookKeys = function() {
	var self = this;

	// Alt-[jk] to quickly swap between windows
	this.on('key', function(key) {
		if (Terminal.focusKeys === false) {
			return;
		}

		var tty = self.tty,
			windows = tty.windows;
		var offset, i;

		if (key === '\x1bj') {
			offset = -1;
		} else if (key === '\x1bk') {
			offset = +1;
		} else {
			return;
		}

		i = indexOf(self.tty.windows, self.window) + offset;

		self._ignoreNext();

		if (windows[i]) {
			return windows[i].highlight();
		}

		if (offset > 0) {
			if (windows[0]) { return windows[0].highlight(); }
		} else {
			i = windows.length - 1;
			if (windows[i]) { return windows[i].highlight(); }
		}

		return self.window.highlight();
	});

	this.on('request paste', function() {
		self.socket.emit('request paste', function(err, text) {
			if (err) { return; }
			self.send(text);
		});
	});

	this.on('request create', function() {
		self.window.createTab();
	});

	this.on('request term', function(key) {
		if (self.window.tabs[key]) {
			self.window.tabs[key].focus();
		}
	});

	this.on('request term next', function() {
		self.window.nextTab();
	});

	this.on('request term previous', function() {
		self.window.previousTab();
	});
};

Tab.prototype._ignoreNext = function() {
	// Don't send the next key
	var handler = this.handler;
	this.handler = function() {
		this.handler = handler;
	};

	var showCursor = this.showCursor;
	this.showCursor = function() {
		this.showCursor = showCursor;
	};
};

/**
 * Program-specific features
 */

Tab.scrollable = {
	irssi: true,
	man: true,
	less: true,
	htop: true,
	top: true,
	w3m: true,
	lynx: true,
	mocp: true
};

Tab.prototype._bindMouse = Tab.prototype.bindMouse;

Tab.prototype.bindMouse = function() {
	if (!Terminal.programFeatures) { return this._bindMouse(); }

	var self = this;

	var wheelEvent = 'onmousewheel' in window ?
		'mousewheel' :
		'DOMMouseScroll';

	on(self.element, wheelEvent, function(ev) {
		if (self.mouseEvents) { return; }
		if (!Tab.scrollable[self.process]) { return; }

		if ((ev.type === 'mousewheel' && ev.wheelDeltaY > 0) ||
			(ev.type === 'DOMMouseScroll' && ev.detail < 0)) {
			// page up
			self.keyDown({keyCode: 33});
		} else {
			// page down
			self.keyDown({keyCode: 34});
		}

		return cancel(ev);
	});

	return this._bindMouse();
};

Tab.prototype.pollProcessName = function(func) {
	var self = this;
	this.socket.emit('process', this.session, this.id, function(err, name) {
		if (err) {
			return func && func(err);
		}

		self.setProcessName(name);
		return func && func(null, name);
	});
};

Tab.prototype.setProcessName = function(name) {
	name = sanitize(name);

	if (this.process !== name) {
		this.emit('process', name);
	}

	this.process = name;
	this.button.title = name;
};

/**
 * Exports
 */
export default Tab;