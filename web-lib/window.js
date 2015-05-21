import {
	EventEmitter,
	inherits,
	on,
	off,
	cancel
} from './utils';

import Tab from './tab';

import Terminal from 'term.js/src/term';

/**
 * Window
 */
function Window(tty, session, socket) {
	var self = this;

	EventEmitter.call(this);

	var el, grip, bar, button, title;

	el = document.createElement('div');
	el.className = 'window';

	grip = document.createElement('div');
	grip.className = 'grip';

	bar = document.createElement('div');
	bar.className = 'bar';

	button = document.createElement('div');
	button.innerHTML = '~';
	button.title = 'new/close';
	button.className = 'tab';

	title = document.createElement('div');
	title.className = 'title';
	title.innerHTML = '';

	this.tty = tty;
	this.session = session;
	this.socket = socket;
	this.element = el;
	this.grip = grip;
	this.bar = bar;
	this.button = button;
	this.title = title;

	this.tabs = new Map();
	this.focused = null;

	this.cols = Terminal.geometry[0];
	this.rows = Terminal.geometry[1];

	el.appendChild(grip);
	el.appendChild(bar);
	bar.appendChild(button);
	bar.appendChild(title);

	var firstTab = this.createTab();
	this.focus();
	this.bind();

	firstTab.once('open', function() {
		self.emit('open');
	});
}

inherits(Window, EventEmitter);

Window.prototype.bind = function() {
	var self = this,
		el = this.element,
		bar = this.bar,
		grip = this.grip,
		button = this.button,
		last = 0;

	on(button, 'click', function(ev) {
		if (ev.ctrlKey || ev.altKey || ev.metaKey || ev.shiftKey) {
			self.destroy();
		} else {
			self.createTab();
		}

		return cancel(ev);
	});

	on(grip, 'mousedown', function(ev) {
		self.focus();
		self.resizing(ev);
		return cancel(ev);
	});

	on(el, 'mousedown', function(ev) {
		if (ev.target !== el && ev.target !== bar) {
			return;
		}

		self.focus();

		cancel(ev);

		var now = new Date(Date.now());
		if (now - last < 600) {
			return self.maximize();
		}
		last = now;

		return cancel(ev);
	});
};

Window.prototype.focus = function() {
	// Restack
	var parent = this.element.parentNode;
	if (parent) {
		parent.removeChild(this.element);
		parent.appendChild(this.element);
	}

	this.emit('focus');
};

Window.prototype.destroy = function() {
	if (this.destroyed) { return; }
	this.destroyed = true;

	if (this.minimize) { this.minimize(); }

	if (this.element.parentNode) {
		this.element.parentNode.removeChild(this.element);
	}

	this.each(function(term) {
		term.destroy();
	});

	this.emit('close');
};

Window.prototype.drag = function(ev) {
	var self = this,
		el = this.element,
		tty = this.tty,
		root = tty.root;

	if (this.minimize) { return; }

	var drag = {
		left: el.offsetLeft,
		top: el.offsetTop,
		pageX: ev.pageX,
		pageY: ev.pageY
	};

	el.style.opacity = '0.60';
	el.style.cursor = 'move';
	root.style.cursor = 'move';

	function move(ev) {
		el.style.left =
			(drag.left + ev.pageX - drag.pageX) + 'px';
		el.style.top =
			(drag.top + ev.pageY - drag.pageY) + 'px';
	}

	function up() {
		el.style.opacity = '';
		el.style.cursor = '';
		root.style.cursor = '';

		off(document, 'mousemove', move);
		off(document, 'mouseup', up);

		var ev = {
			left: el.style.left.replace(/\w+/g, ''),
			top: el.style.top.replace(/\w+/g, '')
		};

		self.emit('drag', ev);
	}

	on(document, 'mousemove', move);
	on(document, 'mouseup', up);
};

Window.prototype.resizing = function() {
	var self = this,
		el = this.element,
		term = this.focused,
		tty = this.tty,
		root = tty.root;

	if (this.minimize) {
		delete this.minimize;
	}

	var resize = {
		w: el.clientWidth,
		h: el.clientHeight
	};

	el.style.overflow = 'hidden';
	el.style.opacity = '0.70';
	el.style.cursor = 'se-resize';
	root.style.cursor = 'se-resize';
	term.element.style.height = '100%';

	function move(ev) {
		var x, y;
		y = el.offsetHeight - term.element.clientHeight;
		x = ev.pageX - el.offsetLeft;
		y = (ev.pageY - el.offsetTop) - y;
		el.style.width = x + 'px';
		el.style.height = y + 'px';
	}

	function up() {
		var x, y;

		x = el.clientWidth / resize.w;
		y = el.clientHeight / resize.h;
		x = (x * term.cols) | 0;
		y = (y * term.rows) | 0;

		self.resize(x, y);

		el.style.width = '';
		el.style.height = '';

		el.style.overflow = '';
		el.style.opacity = '';
		el.style.cursor = '';
		root.style.cursor = '';
		term.element.style.height = '';

		off(document, 'mousemove', move);
		off(document, 'mouseup', up);
	}

	on(document, 'mousemove', move);
	on(document, 'mouseup', up);
};

Window.prototype.maximize = function() {
	if (this.minimize) { return this.minimize(); }

	var self = this,
		el = this.element,
		term = this.focused,
		tty = this.tty,
		root = tty.root,
		x,
		y;

	var m = {
		cols: term.cols,
		rows: term.rows,
		left: el.offsetLeft,
		top: el.offsetTop,
		root: root.className
	};

	this.minimize = function() {
		delete this.minimize;

		el.style.left = m.left + 'px';
		el.style.top = m.top + 'px';
		el.style.width = '';
		el.style.height = '';
		term.element.style.width = '';
		term.element.style.height = '';
		el.style.boxSizing = '';
		self.grip.style.display = '';
		root.className = m.root;

		self.resize(m.cols, m.rows);

		self.emit('minimize');
	};

	// TODO: Probably scroll relative to root
	window.scrollTo(0, 0);

	x = root.clientWidth / term.element.offsetWidth;
	y = root.clientHeight / term.element.offsetHeight;
	x = (x * term.cols) | 0;
	y = (y * term.rows) | 0;

	el.style.left = '0px';
	el.style.top = '0px';
	el.style.width = '100%';
	el.style.height = '100%';
	term.element.style.width = '100%';
	term.element.style.height = '100%';
	el.style.boxSizing = 'border-box';
	this.grip.style.display = 'none';
	root.className = 'maximized';

	this.resize(x, y);

	this.emit('maximize');
};

Window.prototype.resize = function(cols, rows) {
	this.cols = cols;
	this.rows = rows;

	this.each(function(term) {
		term.resize(cols, rows);
	});

	this.emit('resize', cols, rows);
};

Window.prototype.each = function(func) {
	var  i = this.tabs.length;
	while (i--) {
		func(this.tabs[i], i);
	}
};

Window.prototype.createTab = function(term) {
	var self = this,
		tab = new Tab(this, this.socket, term);

	this.bar.appendChild(tab.button);

	if (tab.id) {
		this.tabs.set(tab.id, tab);
	}

	// Change title if focused tab's process changes
	tab.on('process', function(name) {
		if (self.focused === tab) {
			self.window.title.innerHTML = name;
		}
	});

	tab.on('open', function() {
		self.tabs.set(tab.id, tab);
		self.emit('open tab', tab);
	});

	return tab;
};

Window.prototype.highlight = function() {
	var self = this;

	this.element.style.borderColor = 'orange';
	setTimeout(function() {
		self.element.style.borderColor = '';
	}, 200);

	this.focus();
};

Window.prototype.focusTab = function(tab) {
	var title = this.title,
		el = this.element;

	// If we are focused on a different tab, unfocus that tab.
	if (this.focused && this.focused !== tab) {
		this.focused.unfocus();
		el.removeChild(this.focused.element);
	}

	if (!this.focused) {
		el.appendChild(tab.element);
		this.focused = tab;
	}

	title.innerHTML = tab.process;

	// Ensure the window itself is focused.
	this.focus();
};

Window.prototype.nextTab = function() {
	var prev,
		next;

	var tabs = this.tabs,
		focused = this.focused;

	tabs.forEach(function(tab) {
		// Use first tab as backup
		if (!next) {
			next = tab;
		}

		// If the last tab was the currently focused one, set the new tab to
		// `tab`
		if (prev && prev === focused) {
			next = tab;
		}

		prev = tab;
	});

	if (next) {
		next.focus();
	}
};

Window.prototype.previousTab = function() {
	var tabs = this.tabs,
		focused = this.focused,
		last,
		found;

	tabs.forEach(function(tab) {
		if (tab === focused && last) {
			found = last;
		}

		last = tab;
	});

	if (found) {
		found.focus();
	} else if(last) {
		// Wrap around to end
		last.focus();
	}
};

Window.prototype.removeTab = function(tab) {
	if (this.tabs.has(tab.id)) {
		this.tabs.delete(tab.id);
	}

	if (this.focused === tab) {
		this.previousTab();
	}

	if (!this.tabs.size && !this.syncing) {
		this.destroy();
	}
};

Window.prototype.write = function(tabID, data) {
	if (this.tabs.has(tabID)) {
		this.tabs.get(tabID).write(data);
	}
};

Window.prototype.kill = function(tabID) {
	if (this.tabs.has(tabID)) {
		this.tabs.get(tabID).destroy();
	}
};

Window.prototype.sync = function(terms) {
	var self = this,
		first;

	this.syncing = true;

	// Destroy all current tabs without emitting any events
	this.tabs.forEach(function(tab) {
		tab._destroy();
	});
	this.tabs.clear();

	// Recreate all tabs
	Object.keys(terms).forEach(function(termID) {
		var termInfo = terms[termID];

		var tab = self.createTab(termInfo);

		if (!first) {
			first = tab;
		}
	});

	this.syncing = false;

	this.emit('sync', this);

	if (first) {
		first.focus();
	}
};

/**
 * Exports
 */
export default Window;