import Terminal from 'term.js/src/term';

/**
 * Helper functions
 */

function indexOf(obj, el) {
	var i = obj.length;
	while (i--) {
		if (obj[i] === el) {
			return i;
		}
	}
	return -1;
}

function splice(obj, el) {
	var i = indexOf(obj, el);
	if (~i) {
		obj.splice(i, 1);
	}
}

function sanitize(text) {
	if (!text) {
		return '';
	}

	return (text + '').replace(/[&<>]/g, '');
}

export { indexOf, splice, sanitize };

/**
 * Exports from other packages
 */
export var EventEmitter = Terminal.EventEmitter;
export var inherits = Terminal.inherits;
export var on = Terminal.on;
export var off = Terminal.off;
export var cancel = Terminal.cancel;