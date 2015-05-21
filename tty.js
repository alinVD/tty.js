(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.tty = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/map"), __esModule: true };
},{"core-js/library/fn/map":11}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":12}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":13}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-descriptor"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-descriptor":14}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":15}],6:[function(require,module,exports){
"use strict";

exports["default"] = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

exports.__esModule = true;
},{}],7:[function(require,module,exports){
"use strict";

var _Object$defineProperty = require("babel-runtime/core-js/object/define-property")["default"];

exports["default"] = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;

      _Object$defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

exports.__esModule = true;
},{"babel-runtime/core-js/object/define-property":3}],8:[function(require,module,exports){
"use strict";

var _Object$getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor")["default"];

exports["default"] = function get(_x, _x2, _x3) {
  var _again = true;

  _function: while (_again) {
    var object = _x,
        property = _x2,
        receiver = _x3;
    desc = parent = getter = undefined;
    _again = false;

    var desc = _Object$getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        _x = parent;
        _x2 = property;
        _x3 = receiver;
        _again = true;
        continue _function;
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  }
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/get-own-property-descriptor":4}],9:[function(require,module,exports){
"use strict";

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

exports["default"] = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) subClass.__proto__ = superClass;
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/create":2}],10:[function(require,module,exports){
"use strict";

exports["default"] = function (obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
};

exports.__esModule = true;
},{}],11:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.map');
require('../modules/es7.map.to-json');
module.exports = require('../modules/$').core.Map;
},{"../modules/$":29,"../modules/es6.map":38,"../modules/es6.object.to-string":40,"../modules/es6.string.iterator":41,"../modules/es7.map.to-json":42,"../modules/web.dom.iterable":43}],12:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function create(P, D){
  return $.create(P, D);
};
},{"../../modules/$":29}],13:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperty(it, key, desc){
  return $.setDesc(it, key, desc);
};
},{"../../modules/$":29}],14:[function(require,module,exports){
var $ = require('../../modules/$');
require('../../modules/es6.object.statics-accept-primitives');
module.exports = function getOwnPropertyDescriptor(it, key){
  return $.getDesc(it, key);
};
},{"../../modules/$":29,"../../modules/es6.object.statics-accept-primitives":39}],15:[function(require,module,exports){
require('../../modules/es6.object.statics-accept-primitives');
module.exports = require('../../modules/$').core.Object.keys;
},{"../../modules/$":29,"../../modules/es6.object.statics-accept-primitives":39}],16:[function(require,module,exports){
var $ = require('./$');
function assert(condition, msg1, msg2){
  if(!condition)throw TypeError(msg2 ? msg1 + msg2 : msg1);
}
assert.def = $.assertDefined;
assert.fn = function(it){
  if(!$.isFunction(it))throw TypeError(it + ' is not a function!');
  return it;
};
assert.obj = function(it){
  if(!$.isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
assert.inst = function(it, Constructor, name){
  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
  return it;
};
module.exports = assert;
},{"./$":29}],17:[function(require,module,exports){
var $        = require('./$')
  , TAG      = require('./$.wks')('toStringTag')
  , toString = {}.toString;
function cof(it){
  return toString.call(it).slice(8, -1);
}
cof.classof = function(it){
  var O, T;
  return it == undefined ? it === undefined ? 'Undefined' : 'Null'
    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T : cof(O);
};
cof.set = function(it, tag, stat){
  if(it && !$.has(it = stat ? it : it.prototype, TAG))$.hide(it, TAG, tag);
};
module.exports = cof;
},{"./$":29,"./$.wks":36}],18:[function(require,module,exports){
'use strict';
var $        = require('./$')
  , ctx      = require('./$.ctx')
  , safe     = require('./$.uid').safe
  , assert   = require('./$.assert')
  , forOf    = require('./$.for-of')
  , step     = require('./$.iter').step
  , has      = $.has
  , set      = $.set
  , isObject = $.isObject
  , hide     = $.hide
  , isExtensible = Object.isExtensible || isObject
  , ID       = safe('id')
  , O1       = safe('O1')
  , LAST     = safe('last')
  , FIRST    = safe('first')
  , ITER     = safe('iter')
  , SIZE     = $.DESC ? safe('size') : 'size'
  , id       = 0;

function fastKey(it, create){
  // return primitive with prefix
  if(!isObject(it))return (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, ID)){
    // can't set id to frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add id
    if(!create)return 'E';
    // add missing object id
    hide(it, ID, ++id);
  // return object id with prefix
  } return 'O' + it[ID];
}

function getEntry(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index != 'F')return that[O1][index];
  // frozen object case
  for(entry = that[FIRST]; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
}

module.exports = {
  getConstructor: function(NAME, IS_MAP, ADDER){
    function C(){
      var that     = assert.inst(this, C, NAME)
        , iterable = arguments[0];
      set(that, O1, $.create(null));
      set(that, SIZE, 0);
      set(that, LAST, undefined);
      set(that, FIRST, undefined);
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    }
    require('./$.mix')(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that[O1], entry = that[FIRST]; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that[FIRST] = that[LAST] = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that[O1][entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that[FIRST] == entry)that[FIRST] = next;
          if(that[LAST] == entry)that[LAST] = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        var f = ctx(callbackfn, arguments[1], 3)
          , entry;
        while(entry = entry ? entry.n : this[FIRST]){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if($.DESC)$.setDesc(C.prototype, 'size', {
      get: function(){
        return assert.def(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that[LAST] = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that[LAST],          // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that[FIRST])that[FIRST] = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index != 'F')that[O1][index] = entry;
    } return that;
  },
  getEntry: getEntry,
  // add .keys, .values, .entries, [@@iterator]
  // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
  setIter: function(C, NAME, IS_MAP){
    require('./$.iter-define')(C, NAME, function(iterated, kind){
      set(this, ITER, {o: iterated, k: kind});
    }, function(){
      var iter  = this[ITER]
        , kind  = iter.k
        , entry = iter.l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!iter.o || !(iter.l = entry = entry ? entry.n : iter.o[FIRST])){
        // or finish the iteration
        iter.o = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
  }
};
},{"./$":29,"./$.assert":16,"./$.ctx":21,"./$.for-of":23,"./$.iter":28,"./$.iter-define":26,"./$.mix":30,"./$.uid":34}],19:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $def  = require('./$.def')
  , forOf = require('./$.for-of');
module.exports = function(NAME){
  $def($def.P, NAME, {
    toJSON: function toJSON(){
      var arr = [];
      forOf(this, false, arr.push, arr);
      return arr;
    }
  });
};
},{"./$.def":22,"./$.for-of":23}],20:[function(require,module,exports){
'use strict';
var $     = require('./$')
  , $def  = require('./$.def')
  , BUGGY = require('./$.iter').BUGGY
  , forOf = require('./$.for-of')
  , species = require('./$.species')
  , assertInstance = require('./$.assert').inst;

module.exports = function(NAME, methods, common, IS_MAP, IS_WEAK){
  var Base  = $.g[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  function fixMethod(KEY, CHAIN){
    if($.FW){
      var method = proto[KEY];
      require('./$.redef')(proto, KEY, function(a, b){
        var result = method.call(this, a === 0 ? 0 : a, b);
        return CHAIN ? this : result;
      });
    }
  }
  if(!$.isFunction(C) || !(IS_WEAK || !BUGGY && proto.forEach && proto.entries)){
    // create collection constructor
    C = common.getConstructor(NAME, IS_MAP, ADDER);
    require('./$.mix')(C.prototype, methods);
  } else {
    var inst  = new C
      , chain = inst[ADDER](IS_WEAK ? {} : -0, 1)
      , buggyZero;
    // wrap for init collections from iterable
    if(!require('./$.iter-detect')(function(iter){ new C(iter); })){ // eslint-disable-line no-new
      C = function(){
        assertInstance(this, C, NAME);
        var that     = new Base
          , iterable = arguments[0];
        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      };
      C.prototype = proto;
      if($.FW)proto.constructor = C;
    }
    IS_WEAK || inst.forEach(function(val, key){
      buggyZero = 1 / key === -Infinity;
    });
    // fix converting -0 key to +0
    if(buggyZero){
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    // + fix .add & .set for chaining
    if(buggyZero || chain !== inst)fixMethod(ADDER, true);
  }

  require('./$.cof').set(C, NAME);

  O[NAME] = C;
  $def($def.G + $def.W + $def.F * (C != Base), O);
  species(C);
  species($.core[NAME]); // for wrapper

  if(!IS_WEAK)common.setIter(C, NAME, IS_MAP);

  return C;
};
},{"./$":29,"./$.assert":16,"./$.cof":17,"./$.def":22,"./$.for-of":23,"./$.iter":28,"./$.iter-detect":27,"./$.mix":30,"./$.redef":31,"./$.species":32}],21:[function(require,module,exports){
// Optional / simple context binding
var assertFunction = require('./$.assert').fn;
module.exports = function(fn, that, length){
  assertFunction(fn);
  if(~length && that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  } return function(/* ...args */){
      return fn.apply(that, arguments);
    };
};
},{"./$.assert":16}],22:[function(require,module,exports){
var $          = require('./$')
  , global     = $.g
  , core       = $.core
  , isFunction = $.isFunction;
function ctx(fn, that){
  return function(){
    return fn.apply(that, arguments);
  };
}
// type bitmap
$def.F = 1;  // forced
$def.G = 2;  // global
$def.S = 4;  // static
$def.P = 8;  // proto
$def.B = 16; // bind
$def.W = 32; // wrap
function $def(type, name, source){
  var key, own, out, exp
    , isGlobal = type & $def.G
    , isProto  = type & $def.P
    , target   = isGlobal ? global : type & $def.S
        ? global[name] : (global[name] || {}).prototype
    , exports  = isGlobal ? core : core[name] || (core[name] = {});
  if(isGlobal)source = name;
  for(key in source){
    // contains in native
    own = !(type & $def.F) && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    if(isGlobal && !isFunction(target[key]))exp = source[key];
    // bind timers to global for call from export context
    else if(type & $def.B && own)exp = ctx(out, global);
    // wrap global constructors for prevent change them in library
    else if(type & $def.W && target[key] == out)!function(C){
      exp = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      exp.prototype = C.prototype;
    }(out);
    else exp = isProto && isFunction(out) ? ctx(Function.call, out) : out;
    // export
    exports[key] = exp;
    if(isProto)(exports.prototype || (exports.prototype = {}))[key] = out;
  }
}
module.exports = $def;
},{"./$":29}],23:[function(require,module,exports){
var ctx  = require('./$.ctx')
  , get  = require('./$.iter').get
  , call = require('./$.iter-call');
module.exports = function(iterable, entries, fn, that){
  var iterator = get(iterable)
    , f        = ctx(fn, that, entries ? 2 : 1)
    , step;
  while(!(step = iterator.next()).done){
    if(call(iterator, f, step.value, entries) === false){
      return call.close(iterator);
    }
  }
};
},{"./$.ctx":21,"./$.iter":28,"./$.iter-call":25}],24:[function(require,module,exports){
module.exports = function($){
  $.FW   = false;
  $.path = $.core;
  return $;
};
},{}],25:[function(require,module,exports){
var assertObject = require('./$.assert').obj;
function close(iterator){
  var ret = iterator['return'];
  if(ret !== undefined)assertObject(ret.call(iterator));
}
function call(iterator, fn, value, entries){
  try {
    return entries ? fn(assertObject(value)[0], value[1]) : fn(value);
  } catch(e){
    close(iterator);
    throw e;
  }
}
call.close = close;
module.exports = call;
},{"./$.assert":16}],26:[function(require,module,exports){
var $def            = require('./$.def')
  , $redef          = require('./$.redef')
  , $               = require('./$')
  , cof             = require('./$.cof')
  , $iter           = require('./$.iter')
  , SYMBOL_ITERATOR = require('./$.wks')('iterator')
  , FF_ITERATOR     = '@@iterator'
  , KEYS            = 'keys'
  , VALUES          = 'values'
  , Iterators       = $iter.Iterators;
module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
  $iter.create(Constructor, NAME, next);
  function createMethod(kind){
    function $$(that){
      return new Constructor(that, kind);
    }
    switch(kind){
      case KEYS: return function keys(){ return $$(this); };
      case VALUES: return function values(){ return $$(this); };
    } return function entries(){ return $$(this); };
  }
  var TAG      = NAME + ' Iterator'
    , proto    = Base.prototype
    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , _default = _native || createMethod(DEFAULT)
    , methods, key;
  // Fix native
  if(_native){
    var IteratorPrototype = $.getProto(_default.call(new Base));
    // Set @@toStringTag to native iterators
    cof.set(IteratorPrototype, TAG, true);
    // FF fix
    if($.FW && $.has(proto, FF_ITERATOR))$iter.set(IteratorPrototype, $.that);
  }
  // Define iterator
  if($.FW)$iter.set(proto, _default);
  // Plug for library
  Iterators[NAME] = _default;
  Iterators[TAG]  = $.that;
  if(DEFAULT){
    methods = {
      keys:    IS_SET            ? _default : createMethod(KEYS),
      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
      entries: DEFAULT != VALUES ? _default : createMethod('entries')
    };
    if(FORCE)for(key in methods){
      if(!(key in proto))$redef(proto, key, methods[key]);
    } else $def($def.P + $def.F * $iter.BUGGY, NAME, methods);
  }
};
},{"./$":29,"./$.cof":17,"./$.def":22,"./$.iter":28,"./$.redef":31,"./$.wks":36}],27:[function(require,module,exports){
var SYMBOL_ITERATOR = require('./$.wks')('iterator')
  , SAFE_CLOSING    = false;
try {
  var riter = [7][SYMBOL_ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }
module.exports = function(exec){
  if(!SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[SYMBOL_ITERATOR]();
    iter.next = function(){ safe = true; };
    arr[SYMBOL_ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./$.wks":36}],28:[function(require,module,exports){
'use strict';
var $                 = require('./$')
  , cof               = require('./$.cof')
  , assertObject      = require('./$.assert').obj
  , SYMBOL_ITERATOR   = require('./$.wks')('iterator')
  , FF_ITERATOR       = '@@iterator'
  , Iterators         = {}
  , IteratorPrototype = {};
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
setIterator(IteratorPrototype, $.that);
function setIterator(O, value){
  $.hide(O, SYMBOL_ITERATOR, value);
  // Add iterator for FF iterator protocol
  if(FF_ITERATOR in [])$.hide(O, FF_ITERATOR, value);
}

module.exports = {
  // Safari has buggy iterators w/o `next`
  BUGGY: 'keys' in [] && !('next' in [].keys()),
  Iterators: Iterators,
  step: function(done, value){
    return {value: value, done: !!done};
  },
  is: function(it){
    var O      = Object(it)
      , Symbol = $.g.Symbol
      , SYM    = Symbol && Symbol.iterator || FF_ITERATOR;
    return SYM in O || SYMBOL_ITERATOR in O || $.has(Iterators, cof.classof(O));
  },
  get: function(it){
    var Symbol  = $.g.Symbol
      , ext     = it[Symbol && Symbol.iterator || FF_ITERATOR]
      , getIter = ext || it[SYMBOL_ITERATOR] || Iterators[cof.classof(it)];
    return assertObject(getIter.call(it));
  },
  set: setIterator,
  create: function(Constructor, NAME, next, proto){
    Constructor.prototype = $.create(proto || IteratorPrototype, {next: $.desc(1, next)});
    cof.set(Constructor, NAME + ' Iterator');
  }
};
},{"./$":29,"./$.assert":16,"./$.cof":17,"./$.wks":36}],29:[function(require,module,exports){
'use strict';
var global = typeof self != 'undefined' ? self : Function('return this')()
  , core   = {}
  , defineProperty = Object.defineProperty
  , hasOwnProperty = {}.hasOwnProperty
  , ceil  = Math.ceil
  , floor = Math.floor
  , max   = Math.max
  , min   = Math.min;
// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
var DESC = !!function(){
  try {
    return defineProperty({}, 'a', {get: function(){ return 2; }}).a == 2;
  } catch(e){ /* empty */ }
}();
var hide = createDefiner(1);
// 7.1.4 ToInteger
function toInteger(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
}
function desc(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
}
function simpleSet(object, key, value){
  object[key] = value;
  return object;
}
function createDefiner(bitmap){
  return DESC ? function(object, key, value){
    return $.setDesc(object, key, desc(bitmap, value));
  } : simpleSet;
}

function isObject(it){
  return it !== null && (typeof it == 'object' || typeof it == 'function');
}
function isFunction(it){
  return typeof it == 'function';
}
function assertDefined(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
}

var $ = module.exports = require('./$.fw')({
  g: global,
  core: core,
  html: global.document && document.documentElement,
  // http://jsperf.com/core-js-isobject
  isObject:   isObject,
  isFunction: isFunction,
  it: function(it){
    return it;
  },
  that: function(){
    return this;
  },
  // 7.1.4 ToInteger
  toInteger: toInteger,
  // 7.1.15 ToLength
  toLength: function(it){
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  },
  toIndex: function(index, length){
    index = toInteger(index);
    return index < 0 ? max(index + length, 0) : min(index, length);
  },
  has: function(it, key){
    return hasOwnProperty.call(it, key);
  },
  create:     Object.create,
  getProto:   Object.getPrototypeOf,
  DESC:       DESC,
  desc:       desc,
  getDesc:    Object.getOwnPropertyDescriptor,
  setDesc:    defineProperty,
  setDescs:   Object.defineProperties,
  getKeys:    Object.keys,
  getNames:   Object.getOwnPropertyNames,
  getSymbols: Object.getOwnPropertySymbols,
  assertDefined: assertDefined,
  // Dummy, fix for not array-like ES3 string in es5 module
  ES5Object: Object,
  toObject: function(it){
    return $.ES5Object(assertDefined(it));
  },
  hide: hide,
  def: createDefiner(0),
  set: global.Symbol ? simpleSet : hide,
  each: [].forEach
});
/* eslint-disable no-undef */
if(typeof __e != 'undefined')__e = core;
if(typeof __g != 'undefined')__g = global;
},{"./$.fw":24}],30:[function(require,module,exports){
var $redef = require('./$.redef');
module.exports = function(target, src){
  for(var key in src)$redef(target, key, src[key]);
  return target;
};
},{"./$.redef":31}],31:[function(require,module,exports){
module.exports = require('./$').hide;
},{"./$":29}],32:[function(require,module,exports){
var $       = require('./$')
  , SPECIES = require('./$.wks')('species');
module.exports = function(C){
  if($.DESC && !(SPECIES in C))$.setDesc(C, SPECIES, {
    configurable: true,
    get: $.that
  });
};
},{"./$":29,"./$.wks":36}],33:[function(require,module,exports){
// true  -> String#at
// false -> String#codePointAt
var $ = require('./$');
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String($.assertDefined(that))
      , i = $.toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l
      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
        ? TO_STRING ? s.charAt(i) : a
        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./$":29}],34:[function(require,module,exports){
var sid = 0;
function uid(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++sid + Math.random()).toString(36));
}
uid.safe = require('./$').g.Symbol || uid;
module.exports = uid;
},{"./$":29}],35:[function(require,module,exports){
// 22.1.3.31 Array.prototype[@@unscopables]
var $           = require('./$')
  , UNSCOPABLES = require('./$.wks')('unscopables');
if($.FW && !(UNSCOPABLES in []))$.hide(Array.prototype, UNSCOPABLES, {});
module.exports = function(key){
  if($.FW)[][UNSCOPABLES][key] = true;
};
},{"./$":29,"./$.wks":36}],36:[function(require,module,exports){
var global = require('./$').g
  , store  = {};
module.exports = function(name){
  return store[name] || (store[name] =
    global.Symbol && global.Symbol[name] || require('./$.uid').safe('Symbol.' + name));
};
},{"./$":29,"./$.uid":34}],37:[function(require,module,exports){
var $          = require('./$')
  , setUnscope = require('./$.unscope')
  , ITER       = require('./$.uid').safe('iter')
  , $iter      = require('./$.iter')
  , step       = $iter.step
  , Iterators  = $iter.Iterators;

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
require('./$.iter-define')(Array, 'Array', function(iterated, kind){
  $.set(this, ITER, {o: $.toObject(iterated), i: 0, k: kind});
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var iter  = this[ITER]
    , O     = iter.o
    , kind  = iter.k
    , index = iter.i++;
  if(!O || index >= O.length){
    iter.o = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

setUnscope('keys');
setUnscope('values');
setUnscope('entries');
},{"./$":29,"./$.iter":28,"./$.iter-define":26,"./$.uid":34,"./$.unscope":35}],38:[function(require,module,exports){
'use strict';
var strong = require('./$.collection-strong');

// 23.1 Map Objects
require('./$.collection')('Map', {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);
},{"./$.collection":20,"./$.collection-strong":18}],39:[function(require,module,exports){
var $        = require('./$')
  , $def     = require('./$.def')
  , isObject = $.isObject
  , toObject = $.toObject;
$.each.call(('freeze,seal,preventExtensions,isFrozen,isSealed,isExtensible,' +
  'getOwnPropertyDescriptor,getPrototypeOf,keys,getOwnPropertyNames').split(',')
, function(KEY, ID){
  var fn     = ($.core.Object || {})[KEY] || Object[KEY]
    , forced = 0
    , method = {};
  method[KEY] = ID == 0 ? function freeze(it){
    return isObject(it) ? fn(it) : it;
  } : ID == 1 ? function seal(it){
    return isObject(it) ? fn(it) : it;
  } : ID == 2 ? function preventExtensions(it){
    return isObject(it) ? fn(it) : it;
  } : ID == 3 ? function isFrozen(it){
    return isObject(it) ? fn(it) : true;
  } : ID == 4 ? function isSealed(it){
    return isObject(it) ? fn(it) : true;
  } : ID == 5 ? function isExtensible(it){
    return isObject(it) ? fn(it) : false;
  } : ID == 6 ? function getOwnPropertyDescriptor(it, key){
    return fn(toObject(it), key);
  } : ID == 7 ? function getPrototypeOf(it){
    return fn(Object($.assertDefined(it)));
  } : ID == 8 ? function keys(it){
    return fn(toObject(it));
  } : function getOwnPropertyNames(it){
    return fn(toObject(it));
  };
  try {
    fn('z');
  } catch(e){
    forced = 1;
  }
  $def($def.S + $def.F * forced, 'Object', method);
});
},{"./$":29,"./$.def":22}],40:[function(require,module,exports){
'use strict';
// 19.1.3.6 Object.prototype.toString()
var cof = require('./$.cof')
  , tmp = {};
tmp[require('./$.wks')('toStringTag')] = 'z';
if(require('./$').FW && cof(tmp) != 'z'){
  require('./$.redef')(Object.prototype, 'toString', function toString(){
    return '[object ' + cof.classof(this) + ']';
  }, true);
}
},{"./$":29,"./$.cof":17,"./$.redef":31,"./$.wks":36}],41:[function(require,module,exports){
var set   = require('./$').set
  , $at   = require('./$.string-at')(true)
  , ITER  = require('./$.uid').safe('iter')
  , $iter = require('./$.iter')
  , step  = $iter.step;

// 21.1.3.27 String.prototype[@@iterator]()
require('./$.iter-define')(String, 'String', function(iterated){
  set(this, ITER, {o: String(iterated), i: 0});
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var iter  = this[ITER]
    , O     = iter.o
    , index = iter.i
    , point;
  if(index >= O.length)return step(1);
  point = $at(O, index);
  iter.i += point.length;
  return step(0, point);
});
},{"./$":29,"./$.iter":28,"./$.iter-define":26,"./$.string-at":33,"./$.uid":34}],42:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
require('./$.collection-to-json')('Map');
},{"./$.collection-to-json":19}],43:[function(require,module,exports){
require('./es6.array.iterator');
var $           = require('./$')
  , Iterators   = require('./$.iter').Iterators
  , ITERATOR    = require('./$.wks')('iterator')
  , ArrayValues = Iterators.Array
  , NodeList    = $.g.NodeList;
if($.FW && NodeList && !(ITERATOR in NodeList.prototype)){
  $.hide(NodeList.prototype, ITERATOR, ArrayValues);
}
Iterators.NodeList = ArrayValues;
},{"./$":29,"./$.iter":28,"./$.wks":36,"./es6.array.iterator":37}],44:[function(require,module,exports){
'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
  value: true
});

var _window = require('./window');

var _window2 = _interopRequireDefault(_window);

var _tab = require('./tab');

var _tab2 = _interopRequireDefault(_tab);

var _tty = require('./tty');

var _tty2 = _interopRequireDefault(_tty);

exports.Window = _window2['default'];
exports.Tab = _tab2['default'];
exports.TTY = _tty2['default'];

},{"./tab":45,"./tty":46,"./window":48,"babel-runtime/core-js/object/define-property":3,"babel-runtime/helpers/interop-require-default":10}],45:[function(require,module,exports){
'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

_Object$defineProperty(exports, '__esModule', {
	value: true
});

var _utils = require('./utils');

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
	button.innerHTML = '•';

	(0, _utils.on)(button, 'click', function (ev) {
		if (ev.ctrlKey || ev.altKey || ev.metaKey || ev.shiftKey) {
			self.destroy();
		} else {
			self.focus();
		}

		return (0, _utils.cancel)(ev);
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

		this.socket.emit('create', this.session, cols, rows, function (err, data) {
			if (err) {
				return self._destroy();
			}
			self.pty = data.pty;
			self.id = data.id;

			self.setProcessName(data.process);

			self.emit('open');
		});
	}
}

// Inherit from Terminal
(0, _utils.inherits)(Tab, Terminal);

/**
 * Handle terminal data.
 * 
 * @param  {binary} data the data received from the terminal
 */
/*
 * Technically, we could hook in `tab.on('data', ...)` in the constructor,
 * but this is faster.
 */
Tab.prototype.handler = function (data) {
	this.socket.emit('data', this.session, this.id, data);
};

/*
 * We could just hook in `tab.on('title', ...)` in the constructor, but this is
 * faster.
 */
Tab.prototype.handleTitle = function (title) {
	if (!title) {
		return;
	}

	title = (0, _utils.sanitize)(title);
	this.title = title;
};

Tab.prototype._write = Tab.prototype.write;

Tab.prototype.write = function (data) {
	if (this.window.focused !== this) {
		// Notify user that this non-focused terminal has received new
		// data.
		this.button.style.color = 'red';
	}
	return this._write(data);
};

Tab.prototype._focus = Tab.prototype.focus;

Tab.prototype.focus = function () {
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

Tab.prototype.unfocus = function () {
	var button = this.button;

	button.style.fontWeight = '';
};

Tab.prototype._resize = Tab.prototype.resize;

Tab.prototype.resize = function (cols, rows) {
	var win = this.window,
	    tty = this.tty;

	this.socket.emit('resize', this.session, this.id, cols, rows);
	this._resize(cols, rows);

	this.emit('resize', cols, rows);
	win.emit('resize tab', this, cols, rows);
	tty.emit('resize tab', this, cols, rows);
};

Tab.prototype.__destroy = Tab.prototype.destroy;

Tab.prototype._destroy = function () {
	if (this.destroyed) {
		return;
	}
	this.destroyed = true;

	var win = this.window;

	this.button.parentNode.removeChild(this.button);
	if (this.element.parentNode) {
		this.element.parentNode.removeChild(this.element);
	}

	win.removeTab(this);

	this.__destroy();
};

Tab.prototype.destroy = function () {
	if (this.destroyed) {
		return;
	}

	this.socket.emit('kill', this.session, this.id);
	this._destroy();

	this.emit('close');
	this.window.emit('close tab', this);
	this.tty.emit('close tab', this);
};

Tab.prototype.hookKeys = function () {
	var self = this;

	// Alt-[jk] to quickly swap between windows
	this.on('key', function (key) {
		if (Terminal.focusKeys === false) {
			return;
		}

		var tty = self.tty,
		    windows = tty.windows;
		var offset, i;

		if (key === '\u001bj') {
			offset = -1;
		} else if (key === '\u001bk') {
			offset = +1;
		} else {
			return;
		}

		i = (0, _utils.indexOf)(self.tty.windows, self.window) + offset;

		self._ignoreNext();

		if (windows[i]) {
			return windows[i].highlight();
		}

		if (offset > 0) {
			if (windows[0]) {
				return windows[0].highlight();
			}
		} else {
			i = windows.length - 1;
			if (windows[i]) {
				return windows[i].highlight();
			}
		}

		return self.window.highlight();
	});

	this.on('request paste', function () {
		self.socket.emit('request paste', function (err, text) {
			if (err) {
				return;
			}
			self.send(text);
		});
	});

	this.on('request create', function () {
		self.window.createTab();
	});

	this.on('request term', function (key) {
		if (self.window.tabs[key]) {
			self.window.tabs[key].focus();
		}
	});

	this.on('request term next', function () {
		self.window.nextTab();
	});

	this.on('request term previous', function () {
		self.window.previousTab();
	});
};

Tab.prototype._ignoreNext = function () {
	// Don't send the next key
	var handler = this.handler;
	this.handler = function () {
		this.handler = handler;
	};

	var showCursor = this.showCursor;
	this.showCursor = function () {
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

Tab.prototype.bindMouse = function () {
	if (!Terminal.programFeatures) {
		return this._bindMouse();
	}

	var self = this;

	var wheelEvent = 'onmousewheel' in window ? 'mousewheel' : 'DOMMouseScroll';

	(0, _utils.on)(self.element, wheelEvent, function (ev) {
		if (self.mouseEvents) {
			return;
		}
		if (!Tab.scrollable[self.process]) {
			return;
		}

		if (ev.type === 'mousewheel' && ev.wheelDeltaY > 0 || ev.type === 'DOMMouseScroll' && ev.detail < 0) {
			// page up
			self.keyDown({ keyCode: 33 });
		} else {
			// page down
			self.keyDown({ keyCode: 34 });
		}

		return (0, _utils.cancel)(ev);
	});

	return this._bindMouse();
};

Tab.prototype.pollProcessName = function (func) {
	var self = this;
	this.socket.emit('process', this.session, this.id, function (err, name) {
		if (err) {
			return func && func(err);
		}

		self.setProcessName(name);
		return func && func(null, name);
	});
};

Tab.prototype.setProcessName = function (name) {
	name = (0, _utils.sanitize)(name);

	if (this.process !== name) {
		this.emit('process', name);
	}

	this.process = name;
	this.button.title = name;
};

/**
 * Exports
 */
exports['default'] = Tab;
module.exports = exports['default'];

},{"./utils":47,"babel-runtime/core-js/object/define-property":3}],46:[function(require,module,exports){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _get = require('babel-runtime/helpers/get')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _Map = require('babel-runtime/core-js/map')['default'];

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
	value: true
});

var _window = require('./window');

var _window2 = _interopRequireDefault(_window);

var _utils = require('./utils');

/**
 * Represents a connection to a remote machine.
 */

var TTY = (function (_EventEmitter) {
	function TTY(opts) {
		var _this = this;

		_classCallCheck(this, TTY);

		_get(Object.getPrototypeOf(TTY.prototype), 'constructor', this).call(this);
		var socket = this.socket = opts.socket;
		this.root = opts.root;

		this.sessions = new _Map();
		this.windows = new _Map();

		socket.on('connect', function () {
			_this.reset();
			_this.emit('connect');
		});

		socket.on('session created', function (session) {
			_this.sessions.set(session.id, session);
			_this.emit('session created', session);
		});

		socket.on('session closed', function (sessionID) {
			_this.sessions['delete'](sessionID);
			_this.emit('session closed', sessionID);

			if (_this.windows.has(sessionID)) {
				_this.windows.get(sessionID).destroy();
			}
		});

		socket.on('data', function (sid, tid, data) {
			if (_this.windows.has(sid)) {
				_this.windows.get(sid).write(tid, data);
			}
		});

		socket.on('kill', function (sid, tid) {
			if (_this.windows.has(sid)) {
				_this.windows.get(sid).kill(tid);
			}
		});

		socket.on('sync', function (sid, terms) {
			if (_this.windows.has(sid)) {
				_this.windows.get(sid).sync(terms);
			}
		});

		if (opts.autoPoll) {
			this.poller = setInterval(function () {
				_this.pollSessions();
			}, opts.autoPoll);
		}
	}

	_inherits(TTY, _EventEmitter);

	_createClass(TTY, [{
		key: 'destroy',
		value: function destroy() {
			if (this.destroyed) {
				return;
			}
			this.destroyed = true;

			if (this.poller) {
				clearInterval(this.poller);
				delete this.poller;
			}

			this.sessions.clear();
			this.windows.forEach(function (win) {
				win.destroy();
			});
		}
	}, {
		key: 'reset',
		value: function reset() {
			this.sessions.clear();
			this.windows.forEach(function (win) {
				win.destroy();
			});
			this.windows.clear();

			this.emit('reset');
		}
	}, {
		key: 'newSession',
		value: function newSession() {
			var _this2 = this;

			this.socket.emit('new session', function (err, session) {
				if (err) {
					_this2.emit('error', { action: 'newSession', error: err });
				} else {
					_this2.sessions.set(session.id, session);
					_this2.newWindow(session.id);
				}
			});
		}
	}, {
		key: 'newWindow',
		value: function newWindow(sessionID) {
			var _this3 = this;

			var sessions = this.sessions,
			    windows = this.windows;

			if (windows.has(sessionID) || !sessions.has(sessionID)) {
				return null;
			} else {
				this.socket.emit('attach', sessionID);
				var win = new _window2['default'](this, sessionID, this.socket);
				windows.set(sessionID, win);

				win.once('open', function () {
					_this3.emit('open window', win);
				});

				win.on('close', function () {
					windows['delete'](sessionID);
					_this3.socket.emit('detatch', sessionID);
				});

				return win;
			}
		}
	}, {
		key: 'pollSessions',
		value: function pollSessions() {
			var _this4 = this;

			this.socket.emit('list sessions', function (err, sessions) {
				if (err) {
					_this4.emit('error', { action: 'pollSessions', err: err });
					return;
				}

				_this4.sessions.clear();
				_Object$keys(sessions).forEach(function (sid) {
					_this4.sessions.set(sid, sessions[sid]);
				});

				_this4.emit('sessions list', sessions);
			});
		}
	}]);

	return TTY;
})(_utils.EventEmitter);

exports['default'] = TTY;
module.exports = exports['default'];

},{"./utils":47,"./window":48,"babel-runtime/core-js/map":1,"babel-runtime/core-js/object/define-property":3,"babel-runtime/core-js/object/keys":5,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9,"babel-runtime/helpers/interop-require-default":10}],47:[function(require,module,exports){
/**
 * Helper functions
 */

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

_Object$defineProperty(exports, '__esModule', {
	value: true
});

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

exports.indexOf = indexOf;
exports.splice = splice;
exports.sanitize = sanitize;

/**
 * Exports from other packages
 */
var EventEmitter = Terminal.EventEmitter;
exports.EventEmitter = EventEmitter;
var inherits = Terminal.inherits;
exports.inherits = inherits;
var on = Terminal.on;
exports.on = on;
var off = Terminal.off;
exports.off = off;
var cancel = Terminal.cancel;
exports.cancel = cancel;

},{"babel-runtime/core-js/object/define-property":3}],48:[function(require,module,exports){
'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _Map = require('babel-runtime/core-js/map')['default'];

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
	value: true
});

var _utils = require('./utils');

var _tab = require('./tab');

var _tab2 = _interopRequireDefault(_tab);

/**
 * Window
 */
function Window(tty, session, socket) {
	var self = this;

	_utils.EventEmitter.call(this);

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

	this.tabs = new _Map();
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

	firstTab.once('open', function () {
		self.emit('open');
	});
}

(0, _utils.inherits)(Window, _utils.EventEmitter);

Window.prototype.bind = function () {
	var self = this,
	    el = this.element,
	    bar = this.bar,
	    grip = this.grip,
	    button = this.button,
	    last = 0;

	(0, _utils.on)(button, 'click', function (ev) {
		if (ev.ctrlKey || ev.altKey || ev.metaKey || ev.shiftKey) {
			self.destroy();
		} else {
			self.createTab();
		}

		return (0, _utils.cancel)(ev);
	});

	(0, _utils.on)(grip, 'mousedown', function (ev) {
		self.focus();
		self.resizing(ev);
		return (0, _utils.cancel)(ev);
	});

	(0, _utils.on)(el, 'mousedown', function (ev) {
		if (ev.target !== el && ev.target !== bar) {
			return;
		}

		self.focus();

		(0, _utils.cancel)(ev);

		var now = new Date(Date.now());
		if (now - last < 600) {
			return self.maximize();
		}
		last = now;

		return (0, _utils.cancel)(ev);
	});
};

Window.prototype.focus = function () {
	// Restack
	var parent = this.element.parentNode;
	if (parent) {
		parent.removeChild(this.element);
		parent.appendChild(this.element);
	}

	this.emit('focus');
};

Window.prototype.destroy = function () {
	if (this.destroyed) {
		return;
	}
	this.destroyed = true;

	if (this.minimize) {
		this.minimize();
	}

	if (this.element.parentNode) {
		this.element.parentNode.removeChild(this.element);
	}

	this.each(function (term) {
		term.destroy();
	});

	this.emit('close');
};

Window.prototype.drag = function (ev) {
	var self = this,
	    el = this.element,
	    tty = this.tty,
	    root = tty.root;

	if (this.minimize) {
		return;
	}

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
		el.style.left = drag.left + ev.pageX - drag.pageX + 'px';
		el.style.top = drag.top + ev.pageY - drag.pageY + 'px';
	}

	function up() {
		el.style.opacity = '';
		el.style.cursor = '';
		root.style.cursor = '';

		(0, _utils.off)(document, 'mousemove', move);
		(0, _utils.off)(document, 'mouseup', up);

		var ev = {
			left: el.style.left.replace(/\w+/g, ''),
			top: el.style.top.replace(/\w+/g, '')
		};

		self.emit('drag', ev);
	}

	(0, _utils.on)(document, 'mousemove', move);
	(0, _utils.on)(document, 'mouseup', up);
};

Window.prototype.resizing = function () {
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
		y = ev.pageY - el.offsetTop - y;
		el.style.width = x + 'px';
		el.style.height = y + 'px';
	}

	function up() {
		var x, y;

		x = el.clientWidth / resize.w;
		y = el.clientHeight / resize.h;
		x = x * term.cols | 0;
		y = y * term.rows | 0;

		self.resize(x, y);

		el.style.width = '';
		el.style.height = '';

		el.style.overflow = '';
		el.style.opacity = '';
		el.style.cursor = '';
		root.style.cursor = '';
		term.element.style.height = '';

		(0, _utils.off)(document, 'mousemove', move);
		(0, _utils.off)(document, 'mouseup', up);
	}

	(0, _utils.on)(document, 'mousemove', move);
	(0, _utils.on)(document, 'mouseup', up);
};

Window.prototype.maximize = function () {
	if (this.minimize) {
		return this.minimize();
	}

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

	this.minimize = function () {
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
	x = x * term.cols | 0;
	y = y * term.rows | 0;

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

Window.prototype.resize = function (cols, rows) {
	this.cols = cols;
	this.rows = rows;

	this.each(function (term) {
		term.resize(cols, rows);
	});

	this.emit('resize', cols, rows);
};

Window.prototype.each = function (func) {
	var i = this.tabs.length;
	while (i--) {
		func(this.tabs[i], i);
	}
};

Window.prototype.createTab = function (term) {
	var self = this,
	    tab = new _tab2['default'](this, this.socket, term);

	this.bar.appendChild(tab.button);

	if (tab.id) {
		this.tabs.set(tab.id, tab);
	}

	// Change title if focused tab's process changes
	tab.on('process', function (name) {
		if (self.focused === tab) {
			self.window.title.innerHTML = name;
		}
	});

	tab.on('open', function () {
		self.tabs.set(tab.id, tab);
		self.emit('open tab', tab);
	});

	return tab;
};

Window.prototype.highlight = function () {
	var self = this;

	this.element.style.borderColor = 'orange';
	setTimeout(function () {
		self.element.style.borderColor = '';
	}, 200);

	this.focus();
};

Window.prototype.focusTab = function (tab) {
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

Window.prototype.nextTab = function () {
	var prev, next;

	var tabs = this.tabs,
	    focused = this.focused;

	tabs.forEach(function (tab) {
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

Window.prototype.previousTab = function () {
	var tabs = this.tabs,
	    focused = this.focused,
	    last,
	    found;

	tabs.forEach(function (tab) {
		if (tab === focused && last) {
			found = last;
		}

		last = tab;
	});

	if (found) {
		found.focus();
	} else if (last) {
		// Wrap around to end
		last.focus();
	}
};

Window.prototype.removeTab = function (tab) {
	if (this.tabs.has(tab.id)) {
		this.tabs['delete'](tab.id);
	}

	if (this.focused === tab) {
		this.previousTab();
	}

	if (!this.tabs.size && !this.syncing) {
		this.destroy();
	}
};

Window.prototype.write = function (tabID, data) {
	if (this.tabs.has(tabID)) {
		this.tabs.get(tabID).write(data);
	}
};

Window.prototype.kill = function (tabID) {
	if (this.tabs.has(tabID)) {
		this.tabs.get(tabID).destroy();
	}
};

Window.prototype.sync = function (terms) {
	var self = this,
	    first;

	this.syncing = true;

	// Destroy all current tabs without emitting any events
	this.tabs.forEach(function (tab) {
		tab._destroy();
	});
	this.tabs.clear();

	// Recreate all tabs
	_Object$keys(terms).forEach(function (termID) {
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
exports['default'] = Window;
module.exports = exports['default'];

},{"./tab":45,"./utils":47,"babel-runtime/core-js/map":1,"babel-runtime/core-js/object/define-property":3,"babel-runtime/core-js/object/keys":5,"babel-runtime/helpers/interop-require-default":10}]},{},[44])(44)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL21hcC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzLWNhbGwtY2hlY2suanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZS1jbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL21hcC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hc3NlcnQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvbGxlY3Rpb24tdG8tanNvbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvbGxlY3Rpb24uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jdHguanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZWYuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5mb3Itb2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5mdy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItY2FsbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1kZXRlY3QuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5taXguanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5yZWRlZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNwZWNpZXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zdHJpbmctYXQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC51aWQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC51bnNjb3BlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQud2tzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYubWFwLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc3RhdGljcy1hY2NlcHQtcHJpbWl0aXZlcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5tYXAudG8tanNvbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwiL2hvbWUvY2R1ZGxleS9wcm9qZWN0cy90dHkuanMvd2ViLWxpYi9leHBvcnRzLmpzIiwiL2hvbWUvY2R1ZGxleS9wcm9qZWN0cy90dHkuanMvd2ViLWxpYi90YWIuanMiLCIvaG9tZS9jZHVkbGV5L3Byb2plY3RzL3R0eS5qcy93ZWItbGliL3R0eS5qcyIsIi9ob21lL2NkdWRsZXkvcHJvamVjdHMvdHR5LmpzL3dlYi1saWIvdXRpbHMuanMiLCIvaG9tZS9jZHVkbGV5L3Byb2plY3RzL3R0eS5qcy93ZWItbGliL3dpbmRvdy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0FBQyxDQUFDOztBQUVILEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDOztBQUVyQixLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQzs7QUFFeEIsS0FBSSxLQUFLLEVBQUU7QUFDVixPQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7RUFDZDtDQUNELENBQUM7Ozs7O3FCQUthLE1BQU0iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL21hcFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5c1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX09iamVjdCRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKVtcImRlZmF1bHRcIl07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG5cbiAgICAgIF9PYmplY3QkZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfT2JqZWN0JGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKVtcImRlZmF1bHRcIl07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gZ2V0KF94LCBfeDIsIF94Mykge1xuICB2YXIgX2FnYWluID0gdHJ1ZTtcblxuICBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHtcbiAgICB2YXIgb2JqZWN0ID0gX3gsXG4gICAgICAgIHByb3BlcnR5ID0gX3gyLFxuICAgICAgICByZWNlaXZlciA9IF94MztcbiAgICBkZXNjID0gcGFyZW50ID0gZ2V0dGVyID0gdW5kZWZpbmVkO1xuICAgIF9hZ2FpbiA9IGZhbHNlO1xuXG4gICAgdmFyIGRlc2MgPSBfT2JqZWN0JGdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTtcblxuICAgIGlmIChkZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcblxuICAgICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3ggPSBwYXJlbnQ7XG4gICAgICAgIF94MiA9IHByb3BlcnR5O1xuICAgICAgICBfeDMgPSByZWNlaXZlcjtcbiAgICAgICAgX2FnYWluID0gdHJ1ZTtcbiAgICAgICAgY29udGludWUgX2Z1bmN0aW9uO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHtcbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9PYmplY3QkY3JlYXRlID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gX09iamVjdCRjcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXAnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3Lm1hcC50by1qc29uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvJCcpLmNvcmUuTWFwOyIsInZhciAkID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKXtcbiAgcmV0dXJuICQuY3JlYXRlKFAsIEQpO1xufTsiLCJ2YXIgJCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKXtcbiAgcmV0dXJuICQuc2V0RGVzYyhpdCwga2V5LCBkZXNjKTtcbn07IiwidmFyICQgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zdGF0aWNzLWFjY2VwdC1wcmltaXRpdmVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgcmV0dXJuICQuZ2V0RGVzYyhpdCwga2V5KTtcbn07IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnN0YXRpY3MtYWNjZXB0LXByaW1pdGl2ZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJykuY29yZS5PYmplY3Qua2V5czsiLCJ2YXIgJCA9IHJlcXVpcmUoJy4vJCcpO1xuZnVuY3Rpb24gYXNzZXJ0KGNvbmRpdGlvbiwgbXNnMSwgbXNnMil7XG4gIGlmKCFjb25kaXRpb24pdGhyb3cgVHlwZUVycm9yKG1zZzIgPyBtc2cxICsgbXNnMiA6IG1zZzEpO1xufVxuYXNzZXJ0LmRlZiA9ICQuYXNzZXJ0RGVmaW5lZDtcbmFzc2VydC5mbiA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoISQuaXNGdW5jdGlvbihpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbmFzc2VydC5vYmogPSBmdW5jdGlvbihpdCl7XG4gIGlmKCEkLmlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5hc3NlcnQuaW5zdCA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSl7XG4gIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpdGhyb3cgVHlwZUVycm9yKG5hbWUgKyBcIjogdXNlIHRoZSAnbmV3JyBvcGVyYXRvciFcIik7XG4gIHJldHVybiBpdDtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGFzc2VydDsiLCJ2YXIgJCAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIFRBRyAgICAgID0gcmVxdWlyZSgnLi8kLndrcycpKCd0b1N0cmluZ1RhZycpXG4gICwgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcbmZ1bmN0aW9uIGNvZihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59XG5jb2YuY2xhc3NvZiA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQ7XG4gIHJldHVybiBpdCA9PSB1bmRlZmluZWQgPyBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiAnTnVsbCdcbiAgICA6IHR5cGVvZiAoVCA9IChPID0gT2JqZWN0KGl0KSlbVEFHXSkgPT0gJ3N0cmluZycgPyBUIDogY29mKE8pO1xufTtcbmNvZi5zZXQgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgISQuaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSQuaGlkZShpdCwgVEFHLCB0YWcpO1xufTtcbm1vZHVsZS5leHBvcnRzID0gY29mOyIsIid1c2Ugc3RyaWN0JztcbnZhciAkICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgY3R4ICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCBzYWZlICAgICA9IHJlcXVpcmUoJy4vJC51aWQnKS5zYWZlXG4gICwgYXNzZXJ0ICAgPSByZXF1aXJlKCcuLyQuYXNzZXJ0JylcbiAgLCBmb3JPZiAgICA9IHJlcXVpcmUoJy4vJC5mb3Itb2YnKVxuICAsIHN0ZXAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXInKS5zdGVwXG4gICwgaGFzICAgICAgPSAkLmhhc1xuICAsIHNldCAgICAgID0gJC5zZXRcbiAgLCBpc09iamVjdCA9ICQuaXNPYmplY3RcbiAgLCBoaWRlICAgICA9ICQuaGlkZVxuICAsIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgaXNPYmplY3RcbiAgLCBJRCAgICAgICA9IHNhZmUoJ2lkJylcbiAgLCBPMSAgICAgICA9IHNhZmUoJ08xJylcbiAgLCBMQVNUICAgICA9IHNhZmUoJ2xhc3QnKVxuICAsIEZJUlNUICAgID0gc2FmZSgnZmlyc3QnKVxuICAsIElURVIgICAgID0gc2FmZSgnaXRlcicpXG4gICwgU0laRSAgICAgPSAkLkRFU0MgPyBzYWZlKCdzaXplJykgOiAnc2l6ZSdcbiAgLCBpZCAgICAgICA9IDA7XG5cbmZ1bmN0aW9uIGZhc3RLZXkoaXQsIGNyZWF0ZSl7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYoIWhhcyhpdCwgSUQpKXtcbiAgICAvLyBjYW4ndCBzZXQgaWQgdG8gZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgaWRcbiAgICBpZighY3JlYXRlKXJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3Npbmcgb2JqZWN0IGlkXG4gICAgaGlkZShpdCwgSUQsICsraWQpO1xuICAvLyByZXR1cm4gb2JqZWN0IGlkIHdpdGggcHJlZml4XG4gIH0gcmV0dXJuICdPJyArIGl0W0lEXTtcbn1cblxuZnVuY3Rpb24gZ2V0RW50cnkodGhhdCwga2V5KXtcbiAgLy8gZmFzdCBjYXNlXG4gIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KSwgZW50cnk7XG4gIGlmKGluZGV4ICE9ICdGJylyZXR1cm4gdGhhdFtPMV1baW5kZXhdO1xuICAvLyBmcm96ZW4gb2JqZWN0IGNhc2VcbiAgZm9yKGVudHJ5ID0gdGhhdFtGSVJTVF07IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuICAgIGlmKGVudHJ5LmsgPT0ga2V5KXJldHVybiBlbnRyeTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uKE5BTUUsIElTX01BUCwgQURERVIpe1xuICAgIGZ1bmN0aW9uIEMoKXtcbiAgICAgIHZhciB0aGF0ICAgICA9IGFzc2VydC5pbnN0KHRoaXMsIEMsIE5BTUUpXG4gICAgICAgICwgaXRlcmFibGUgPSBhcmd1bWVudHNbMF07XG4gICAgICBzZXQodGhhdCwgTzEsICQuY3JlYXRlKG51bGwpKTtcbiAgICAgIHNldCh0aGF0LCBTSVpFLCAwKTtcbiAgICAgIHNldCh0aGF0LCBMQVNULCB1bmRlZmluZWQpO1xuICAgICAgc2V0KHRoYXQsIEZJUlNULCB1bmRlZmluZWQpO1xuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICB9XG4gICAgcmVxdWlyZSgnLi8kLm1peCcpKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCl7XG4gICAgICAgIGZvcih2YXIgdGhhdCA9IHRoaXMsIGRhdGEgPSB0aGF0W08xXSwgZW50cnkgPSB0aGF0W0ZJUlNUXTsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYoZW50cnkucCllbnRyeS5wID0gZW50cnkucC5uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmldO1xuICAgICAgICB9XG4gICAgICAgIHRoYXRbRklSU1RdID0gdGhhdFtMQVNUXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhhdFtTSVpFXSA9IDA7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgdmFyIHRoYXQgID0gdGhpc1xuICAgICAgICAgICwgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgICBpZihlbnRyeSl7XG4gICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uXG4gICAgICAgICAgICAsIHByZXYgPSBlbnRyeS5wO1xuICAgICAgICAgIGRlbGV0ZSB0aGF0W08xXVtlbnRyeS5pXTtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZihwcmV2KXByZXYubiA9IG5leHQ7XG4gICAgICAgICAgaWYobmV4dCluZXh0LnAgPSBwcmV2O1xuICAgICAgICAgIGlmKHRoYXRbRklSU1RdID09IGVudHJ5KXRoYXRbRklSU1RdID0gbmV4dDtcbiAgICAgICAgICBpZih0aGF0W0xBU1RdID09IGVudHJ5KXRoYXRbTEFTVF0gPSBwcmV2O1xuICAgICAgICAgIHRoYXRbU0laRV0tLTtcbiAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcbiAgICAgICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdLCAzKVxuICAgICAgICAgICwgZW50cnk7XG4gICAgICAgIHdoaWxlKGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhpc1tGSVJTVF0pe1xuICAgICAgICAgIGYoZW50cnkudiwgZW50cnkuaywgdGhpcyk7XG4gICAgICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuNyBNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy4yLjMuNyBTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSl7XG4gICAgICAgIHJldHVybiAhIWdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYoJC5ERVNDKSQuc2V0RGVzYyhDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiBhc3NlcnQuZGVmKHRoaXNbU0laRV0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uKHRoYXQsIGtleSwgdmFsdWUpe1xuICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSlcbiAgICAgICwgcHJldiwgaW5kZXg7XG4gICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG4gICAgaWYoZW50cnkpe1xuICAgICAgZW50cnkudiA9IHZhbHVlO1xuICAgIC8vIGNyZWF0ZSBuZXcgZW50cnlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdFtMQVNUXSA9IGVudHJ5ID0ge1xuICAgICAgICBpOiBpbmRleCA9IGZhc3RLZXkoa2V5LCB0cnVlKSwgLy8gPC0gaW5kZXhcbiAgICAgICAgazoga2V5LCAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGtleVxuICAgICAgICB2OiB2YWx1ZSwgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcbiAgICAgICAgcDogcHJldiA9IHRoYXRbTEFTVF0sICAgICAgICAgIC8vIDwtIHByZXZpb3VzIGVudHJ5XG4gICAgICAgIG46IHVuZGVmaW5lZCwgICAgICAgICAgICAgICAgICAvLyA8LSBuZXh0IGVudHJ5XG4gICAgICAgIHI6IGZhbHNlICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSByZW1vdmVkXG4gICAgICB9O1xuICAgICAgaWYoIXRoYXRbRklSU1RdKXRoYXRbRklSU1RdID0gZW50cnk7XG4gICAgICBpZihwcmV2KXByZXYubiA9IGVudHJ5O1xuICAgICAgdGhhdFtTSVpFXSsrO1xuICAgICAgLy8gYWRkIHRvIGluZGV4XG4gICAgICBpZihpbmRleCAhPSAnRicpdGhhdFtPMV1baW5kZXhdID0gZW50cnk7XG4gICAgfSByZXR1cm4gdGhhdDtcbiAgfSxcbiAgZ2V0RW50cnk6IGdldEVudHJ5LFxuICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgLy8gMjMuMS4zLjQsIDIzLjEuMy44LCAyMy4xLjMuMTEsIDIzLjEuMy4xMiwgMjMuMi4zLjUsIDIzLjIuMy44LCAyMy4yLjMuMTAsIDIzLjIuMy4xMVxuICBzZXRJdGVyOiBmdW5jdGlvbihDLCBOQU1FLCBJU19NQVApe1xuICAgIHJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpKEMsIE5BTUUsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgICAgIHNldCh0aGlzLCBJVEVSLCB7bzogaXRlcmF0ZWQsIGs6IGtpbmR9KTtcbiAgICB9LCBmdW5jdGlvbigpe1xuICAgICAgdmFyIGl0ZXIgID0gdGhpc1tJVEVSXVxuICAgICAgICAsIGtpbmQgID0gaXRlci5rXG4gICAgICAgICwgZW50cnkgPSBpdGVyLmw7XG4gICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xuICAgICAgLy8gZ2V0IG5leHQgZW50cnlcbiAgICAgIGlmKCFpdGVyLm8gfHwgIShpdGVyLmwgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IGl0ZXIub1tGSVJTVF0pKXtcbiAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cbiAgICAgICAgaXRlci5vID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gc3RlcCgxKTtcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcbiAgICAgIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgZW50cnkuayk7XG4gICAgICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIGVudHJ5LnYpO1xuICAgICAgcmV0dXJuIHN0ZXAoMCwgW2VudHJ5LmssIGVudHJ5LnZdKTtcbiAgICB9LCBJU19NQVAgPyAnZW50cmllcycgOiAndmFsdWVzJyAsICFJU19NQVAsIHRydWUpO1xuICB9XG59OyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciAkZGVmICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxuICAsIGZvck9mID0gcmVxdWlyZSgnLi8kLmZvci1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FKXtcbiAgJGRlZigkZGVmLlAsIE5BTUUsIHtcbiAgICB0b0pTT046IGZ1bmN0aW9uIHRvSlNPTigpe1xuICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgZm9yT2YodGhpcywgZmFsc2UsIGFyci5wdXNoLCBhcnIpO1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG4gIH0pO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgJCAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsICRkZWYgID0gcmVxdWlyZSgnLi8kLmRlZicpXG4gICwgQlVHR1kgPSByZXF1aXJlKCcuLyQuaXRlcicpLkJVR0dZXG4gICwgZm9yT2YgPSByZXF1aXJlKCcuLyQuZm9yLW9mJylcbiAgLCBzcGVjaWVzID0gcmVxdWlyZSgnLi8kLnNwZWNpZXMnKVxuICAsIGFzc2VydEluc3RhbmNlID0gcmVxdWlyZSgnLi8kLmFzc2VydCcpLmluc3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSwgbWV0aG9kcywgY29tbW9uLCBJU19NQVAsIElTX1dFQUspe1xuICB2YXIgQmFzZSAgPSAkLmdbTkFNRV1cbiAgICAsIEMgICAgID0gQmFzZVxuICAgICwgQURERVIgPSBJU19NQVAgPyAnc2V0JyA6ICdhZGQnXG4gICAgLCBwcm90byA9IEMgJiYgQy5wcm90b3R5cGVcbiAgICAsIE8gICAgID0ge307XG4gIGZ1bmN0aW9uIGZpeE1ldGhvZChLRVksIENIQUlOKXtcbiAgICBpZigkLkZXKXtcbiAgICAgIHZhciBtZXRob2QgPSBwcm90b1tLRVldO1xuICAgICAgcmVxdWlyZSgnLi8kLnJlZGVmJykocHJvdG8sIEtFWSwgZnVuY3Rpb24oYSwgYil7XG4gICAgICAgIHZhciByZXN1bHQgPSBtZXRob2QuY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEsIGIpO1xuICAgICAgICByZXR1cm4gQ0hBSU4gPyB0aGlzIDogcmVzdWx0O1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGlmKCEkLmlzRnVuY3Rpb24oQykgfHwgIShJU19XRUFLIHx8ICFCVUdHWSAmJiBwcm90by5mb3JFYWNoICYmIHByb3RvLmVudHJpZXMpKXtcbiAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuICAgIEMgPSBjb21tb24uZ2V0Q29uc3RydWN0b3IoTkFNRSwgSVNfTUFQLCBBRERFUik7XG4gICAgcmVxdWlyZSgnLi8kLm1peCcpKEMucHJvdG90eXBlLCBtZXRob2RzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaW5zdCAgPSBuZXcgQ1xuICAgICAgLCBjaGFpbiA9IGluc3RbQURERVJdKElTX1dFQUsgPyB7fSA6IC0wLCAxKVxuICAgICAgLCBidWdneVplcm87XG4gICAgLy8gd3JhcCBmb3IgaW5pdCBjb2xsZWN0aW9ucyBmcm9tIGl0ZXJhYmxlXG4gICAgaWYoIXJlcXVpcmUoJy4vJC5pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpeyBuZXcgQyhpdGVyKTsgfSkpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgICAgQyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGFzc2VydEluc3RhbmNlKHRoaXMsIEMsIE5BTUUpO1xuICAgICAgICB2YXIgdGhhdCAgICAgPSBuZXcgQmFzZVxuICAgICAgICAgICwgaXRlcmFibGUgPSBhcmd1bWVudHNbMF07XG4gICAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgICAgIHJldHVybiB0aGF0O1xuICAgICAgfTtcbiAgICAgIEMucHJvdG90eXBlID0gcHJvdG87XG4gICAgICBpZigkLkZXKXByb3RvLmNvbnN0cnVjdG9yID0gQztcbiAgICB9XG4gICAgSVNfV0VBSyB8fCBpbnN0LmZvckVhY2goZnVuY3Rpb24odmFsLCBrZXkpe1xuICAgICAgYnVnZ3laZXJvID0gMSAvIGtleSA9PT0gLUluZmluaXR5O1xuICAgIH0pO1xuICAgIC8vIGZpeCBjb252ZXJ0aW5nIC0wIGtleSB0byArMFxuICAgIGlmKGJ1Z2d5WmVybyl7XG4gICAgICBmaXhNZXRob2QoJ2RlbGV0ZScpO1xuICAgICAgZml4TWV0aG9kKCdoYXMnKTtcbiAgICAgIElTX01BUCAmJiBmaXhNZXRob2QoJ2dldCcpO1xuICAgIH1cbiAgICAvLyArIGZpeCAuYWRkICYgLnNldCBmb3IgY2hhaW5pbmdcbiAgICBpZihidWdneVplcm8gfHwgY2hhaW4gIT09IGluc3QpZml4TWV0aG9kKEFEREVSLCB0cnVlKTtcbiAgfVxuXG4gIHJlcXVpcmUoJy4vJC5jb2YnKS5zZXQoQywgTkFNRSk7XG5cbiAgT1tOQU1FXSA9IEM7XG4gICRkZWYoJGRlZi5HICsgJGRlZi5XICsgJGRlZi5GICogKEMgIT0gQmFzZSksIE8pO1xuICBzcGVjaWVzKEMpO1xuICBzcGVjaWVzKCQuY29yZVtOQU1FXSk7IC8vIGZvciB3cmFwcGVyXG5cbiAgaWYoIUlTX1dFQUspY29tbW9uLnNldEl0ZXIoQywgTkFNRSwgSVNfTUFQKTtcblxuICByZXR1cm4gQztcbn07IiwiLy8gT3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYXNzZXJ0RnVuY3Rpb24gPSByZXF1aXJlKCcuLyQuYXNzZXJ0JykuZm47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhc3NlcnRGdW5jdGlvbihmbik7XG4gIGlmKH5sZW5ndGggJiYgdGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH0gcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn07IiwidmFyICQgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGdsb2JhbCAgICAgPSAkLmdcbiAgLCBjb3JlICAgICAgID0gJC5jb3JlXG4gICwgaXNGdW5jdGlvbiA9ICQuaXNGdW5jdGlvbjtcbmZ1bmN0aW9uIGN0eChmbiwgdGhhdCl7XG4gIHJldHVybiBmdW5jdGlvbigpe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufVxuLy8gdHlwZSBiaXRtYXBcbiRkZWYuRiA9IDE7ICAvLyBmb3JjZWRcbiRkZWYuRyA9IDI7ICAvLyBnbG9iYWxcbiRkZWYuUyA9IDQ7ICAvLyBzdGF0aWNcbiRkZWYuUCA9IDg7ICAvLyBwcm90b1xuJGRlZi5CID0gMTY7IC8vIGJpbmRcbiRkZWYuVyA9IDMyOyAvLyB3cmFwXG5mdW5jdGlvbiAkZGVmKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHBcbiAgICAsIGlzR2xvYmFsID0gdHlwZSAmICRkZWYuR1xuICAgICwgaXNQcm90byAgPSB0eXBlICYgJGRlZi5QXG4gICAgLCB0YXJnZXQgICA9IGlzR2xvYmFsID8gZ2xvYmFsIDogdHlwZSAmICRkZWYuU1xuICAgICAgICA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pLnByb3RvdHlwZVxuICAgICwgZXhwb3J0cyAgPSBpc0dsb2JhbCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICBpZihpc0dsb2JhbClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gISh0eXBlICYgJGRlZi5GKSAmJiB0YXJnZXQgJiYga2V5IGluIHRhcmdldDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGlmKGlzR2xvYmFsICYmICFpc0Z1bmN0aW9uKHRhcmdldFtrZXldKSlleHAgPSBzb3VyY2Vba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGVsc2UgaWYodHlwZSAmICRkZWYuQiAmJiBvd24pZXhwID0gY3R4KG91dCwgZ2xvYmFsKTtcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIGVsc2UgaWYodHlwZSAmICRkZWYuVyAmJiB0YXJnZXRba2V5XSA9PSBvdXQpIWZ1bmN0aW9uKEMpe1xuICAgICAgZXhwID0gZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIEMgPyBuZXcgQyhwYXJhbSkgOiBDKHBhcmFtKTtcbiAgICAgIH07XG4gICAgICBleHAucHJvdG90eXBlID0gQy5wcm90b3R5cGU7XG4gICAgfShvdXQpO1xuICAgIGVsc2UgZXhwID0gaXNQcm90byAmJiBpc0Z1bmN0aW9uKG91dCkgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnRcbiAgICBleHBvcnRzW2tleV0gPSBleHA7XG4gICAgaWYoaXNQcm90bykoZXhwb3J0cy5wcm90b3R5cGUgfHwgKGV4cG9ydHMucHJvdG90eXBlID0ge30pKVtrZXldID0gb3V0O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9ICRkZWY7IiwidmFyIGN0eCAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCBnZXQgID0gcmVxdWlyZSgnLi8kLml0ZXInKS5nZXRcbiAgLCBjYWxsID0gcmVxdWlyZSgnLi8kLml0ZXItY2FsbCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQpe1xuICB2YXIgaXRlcmF0b3IgPSBnZXQoaXRlcmFibGUpXG4gICAgLCBmICAgICAgICA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxuICAgICwgc3RlcDtcbiAgd2hpbGUoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKXtcbiAgICBpZihjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKSA9PT0gZmFsc2Upe1xuICAgICAgcmV0dXJuIGNhbGwuY2xvc2UoaXRlcmF0b3IpO1xuICAgIH1cbiAgfVxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCQpe1xuICAkLkZXICAgPSBmYWxzZTtcbiAgJC5wYXRoID0gJC5jb3JlO1xuICByZXR1cm4gJDtcbn07IiwidmFyIGFzc2VydE9iamVjdCA9IHJlcXVpcmUoJy4vJC5hc3NlcnQnKS5vYmo7XG5mdW5jdGlvbiBjbG9zZShpdGVyYXRvcil7XG4gIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFzc2VydE9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xufVxuZnVuY3Rpb24gY2FsbChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFzc2VydE9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgfSBjYXRjaChlKXtcbiAgICBjbG9zZShpdGVyYXRvcik7XG4gICAgdGhyb3cgZTtcbiAgfVxufVxuY2FsbC5jbG9zZSA9IGNsb3NlO1xubW9kdWxlLmV4cG9ydHMgPSBjYWxsOyIsInZhciAkZGVmICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuZGVmJylcbiAgLCAkcmVkZWYgICAgICAgICAgPSByZXF1aXJlKCcuLyQucmVkZWYnKVxuICAsICQgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgY29mICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmNvZicpXG4gICwgJGl0ZXIgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXInKVxuICAsIFNZTUJPTF9JVEVSQVRPUiA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEZGX0lURVJBVE9SICAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgICA9ICd2YWx1ZXMnXG4gICwgSXRlcmF0b3JzICAgICAgID0gJGl0ZXIuSXRlcmF0b3JzO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRSl7XG4gICRpdGVyLmNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIGZ1bmN0aW9uIGNyZWF0ZU1ldGhvZChraW5kKXtcbiAgICBmdW5jdGlvbiAkJCh0aGF0KXtcbiAgICAgIHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhhdCwga2luZCk7XG4gICAgfVxuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuICQkKHRoaXMpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICQkKHRoaXMpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuICQkKHRoaXMpOyB9O1xuICB9XG4gIHZhciBUQUcgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgcHJvdG8gICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgX25hdGl2ZSAgPSBwcm90b1tTWU1CT0xfSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCBfZGVmYXVsdCA9IF9uYXRpdmUgfHwgY3JlYXRlTWV0aG9kKERFRkFVTFQpXG4gICAgLCBtZXRob2RzLCBrZXk7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoX25hdGl2ZSl7XG4gICAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gJC5nZXRQcm90byhfZGVmYXVsdC5jYWxsKG5ldyBCYXNlKSk7XG4gICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgIGNvZi5zZXQoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgLy8gRkYgZml4XG4gICAgaWYoJC5GVyAmJiAkLmhhcyhwcm90bywgRkZfSVRFUkFUT1IpKSRpdGVyLnNldChJdGVyYXRvclByb3RvdHlwZSwgJC50aGF0KTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoJC5GVykkaXRlci5zZXQocHJvdG8sIF9kZWZhdWx0KTtcbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSBfZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gJC50aGF0O1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAga2V5czogICAgSVNfU0VUICAgICAgICAgICAgPyBfZGVmYXVsdCA6IGNyZWF0ZU1ldGhvZChLRVlTKSxcbiAgICAgIHZhbHVlczogIERFRkFVTFQgPT0gVkFMVUVTID8gX2RlZmF1bHQgOiBjcmVhdGVNZXRob2QoVkFMVUVTKSxcbiAgICAgIGVudHJpZXM6IERFRkFVTFQgIT0gVkFMVUVTID8gX2RlZmF1bHQgOiBjcmVhdGVNZXRob2QoJ2VudHJpZXMnKVxuICAgIH07XG4gICAgaWYoRk9SQ0UpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSkkcmVkZWYocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGRlZigkZGVmLlAgKyAkZGVmLkYgKiAkaXRlci5CVUdHWSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbn07IiwidmFyIFNZTUJPTF9JVEVSQVRPUiA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyAgICA9IGZhbHNlO1xudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW1NZTUJPTF9JVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICBpZighU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW1NZTUJPTF9JVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyBzYWZlID0gdHJ1ZTsgfTtcbiAgICBhcnJbU1lNQk9MX0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBjb2YgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5jb2YnKVxuICAsIGFzc2VydE9iamVjdCAgICAgID0gcmVxdWlyZSgnLi8kLmFzc2VydCcpLm9ialxuICAsIFNZTUJPTF9JVEVSQVRPUiAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgRkZfSVRFUkFUT1IgICAgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBJdGVyYXRvcnMgICAgICAgICA9IHt9XG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5zZXRJdGVyYXRvcihJdGVyYXRvclByb3RvdHlwZSwgJC50aGF0KTtcbmZ1bmN0aW9uIHNldEl0ZXJhdG9yKE8sIHZhbHVlKXtcbiAgJC5oaWRlKE8sIFNZTUJPTF9JVEVSQVRPUiwgdmFsdWUpO1xuICAvLyBBZGQgaXRlcmF0b3IgZm9yIEZGIGl0ZXJhdG9yIHByb3RvY29sXG4gIGlmKEZGX0lURVJBVE9SIGluIFtdKSQuaGlkZShPLCBGRl9JVEVSQVRPUiwgdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICBCVUdHWTogJ2tleXMnIGluIFtdICYmICEoJ25leHQnIGluIFtdLmtleXMoKSksXG4gIEl0ZXJhdG9yczogSXRlcmF0b3JzLFxuICBzdGVwOiBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gICAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG4gIH0sXG4gIGlzOiBmdW5jdGlvbihpdCl7XG4gICAgdmFyIE8gICAgICA9IE9iamVjdChpdClcbiAgICAgICwgU3ltYm9sID0gJC5nLlN5bWJvbFxuICAgICAgLCBTWU0gICAgPSBTeW1ib2wgJiYgU3ltYm9sLml0ZXJhdG9yIHx8IEZGX0lURVJBVE9SO1xuICAgIHJldHVybiBTWU0gaW4gTyB8fCBTWU1CT0xfSVRFUkFUT1IgaW4gTyB8fCAkLmhhcyhJdGVyYXRvcnMsIGNvZi5jbGFzc29mKE8pKTtcbiAgfSxcbiAgZ2V0OiBmdW5jdGlvbihpdCl7XG4gICAgdmFyIFN5bWJvbCAgPSAkLmcuU3ltYm9sXG4gICAgICAsIGV4dCAgICAgPSBpdFtTeW1ib2wgJiYgU3ltYm9sLml0ZXJhdG9yIHx8IEZGX0lURVJBVE9SXVxuICAgICAgLCBnZXRJdGVyID0gZXh0IHx8IGl0W1NZTUJPTF9JVEVSQVRPUl0gfHwgSXRlcmF0b3JzW2NvZi5jbGFzc29mKGl0KV07XG4gICAgcmV0dXJuIGFzc2VydE9iamVjdChnZXRJdGVyLmNhbGwoaXQpKTtcbiAgfSxcbiAgc2V0OiBzZXRJdGVyYXRvcixcbiAgY3JlYXRlOiBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCwgcHJvdG8pe1xuICAgIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9ICQuY3JlYXRlKHByb3RvIHx8IEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogJC5kZXNjKDEsIG5leHQpfSk7XG4gICAgY29mLnNldChDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbiAgfVxufTsiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKVxuICAsIGNvcmUgICA9IHt9XG4gICwgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHlcbiAgLCBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5XG4gICwgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3JcbiAgLCBtYXggICA9IE1hdGgubWF4XG4gICwgbWluICAgPSBNYXRoLm1pbjtcbi8vIFRoZSBlbmdpbmUgd29ya3MgZmluZSB3aXRoIGRlc2NyaXB0b3JzPyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5LlxudmFyIERFU0MgPSAhIWZ1bmN0aW9uKCl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiAyOyB9fSkuYSA9PSAyO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59KCk7XG52YXIgaGlkZSA9IGNyZWF0ZURlZmluZXIoMSk7XG4vLyA3LjEuNCBUb0ludGVnZXJcbmZ1bmN0aW9uIHRvSW50ZWdlcihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufVxuZnVuY3Rpb24gZGVzYyhiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59XG5mdW5jdGlvbiBzaW1wbGVTZXQob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZURlZmluZXIoYml0bWFwKXtcbiAgcmV0dXJuIERFU0MgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICAgIHJldHVybiAkLnNldERlc2Mob2JqZWN0LCBrZXksIGRlc2MoYml0bWFwLCB2YWx1ZSkpO1xuICB9IDogc2ltcGxlU2V0O1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChpdCl7XG4gIHJldHVybiBpdCAhPT0gbnVsbCAmJiAodHlwZW9mIGl0ID09ICdvYmplY3QnIHx8IHR5cGVvZiBpdCA9PSAnZnVuY3Rpb24nKTtcbn1cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBhc3NlcnREZWZpbmVkKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufVxuXG52YXIgJCA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmZ3Jykoe1xuICBnOiBnbG9iYWwsXG4gIGNvcmU6IGNvcmUsXG4gIGh0bWw6IGdsb2JhbC5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gIC8vIGh0dHA6Ly9qc3BlcmYuY29tL2NvcmUtanMtaXNvYmplY3RcbiAgaXNPYmplY3Q6ICAgaXNPYmplY3QsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGl0OiBmdW5jdGlvbihpdCl7XG4gICAgcmV0dXJuIGl0O1xuICB9LFxuICB0aGF0OiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICAvLyA3LjEuNCBUb0ludGVnZXJcbiAgdG9JbnRlZ2VyOiB0b0ludGVnZXIsXG4gIC8vIDcuMS4xNSBUb0xlbmd0aFxuICB0b0xlbmd0aDogZnVuY3Rpb24oaXQpe1xuICAgIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG4gIH0sXG4gIHRvSW5kZXg6IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICAgIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbiAgfSxcbiAgaGFzOiBmdW5jdGlvbihpdCwga2V5KXtcbiAgICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbiAgfSxcbiAgY3JlYXRlOiAgICAgT2JqZWN0LmNyZWF0ZSxcbiAgZ2V0UHJvdG86ICAgT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICBERVNDOiAgICAgICBERVNDLFxuICBkZXNjOiAgICAgICBkZXNjLFxuICBnZXREZXNjOiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICBzZXREZXNjOiAgICBkZWZpbmVQcm9wZXJ0eSxcbiAgc2V0RGVzY3M6ICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMsXG4gIGdldEtleXM6ICAgIE9iamVjdC5rZXlzLFxuICBnZXROYW1lczogICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgZ2V0U3ltYm9sczogT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcbiAgYXNzZXJ0RGVmaW5lZDogYXNzZXJ0RGVmaW5lZCxcbiAgLy8gRHVtbXksIGZpeCBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZyBpbiBlczUgbW9kdWxlXG4gIEVTNU9iamVjdDogT2JqZWN0LFxuICB0b09iamVjdDogZnVuY3Rpb24oaXQpe1xuICAgIHJldHVybiAkLkVTNU9iamVjdChhc3NlcnREZWZpbmVkKGl0KSk7XG4gIH0sXG4gIGhpZGU6IGhpZGUsXG4gIGRlZjogY3JlYXRlRGVmaW5lcigwKSxcbiAgc2V0OiBnbG9iYWwuU3ltYm9sID8gc2ltcGxlU2V0IDogaGlkZSxcbiAgZWFjaDogW10uZm9yRWFjaFxufSk7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuaWYodHlwZW9mIF9fZSAhPSAndW5kZWZpbmVkJylfX2UgPSBjb3JlO1xuaWYodHlwZW9mIF9fZyAhPSAndW5kZWZpbmVkJylfX2cgPSBnbG9iYWw7IiwidmFyICRyZWRlZiA9IHJlcXVpcmUoJy4vJC5yZWRlZicpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjKXtcclxuICBmb3IodmFyIGtleSBpbiBzcmMpJHJlZGVmKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJCcpLmhpZGU7IiwidmFyICQgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIFNQRUNJRVMgPSByZXF1aXJlKCcuLyQud2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQyl7XG4gIGlmKCQuREVTQyAmJiAhKFNQRUNJRVMgaW4gQykpJC5zZXREZXNjKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiAkLnRoYXRcbiAgfSk7XG59OyIsIi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG52YXIgJCA9IHJlcXVpcmUoJy4vJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZygkLmFzc2VydERlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSAkLnRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsXG4gICAgICB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59OyIsInZhciBzaWQgPSAwO1xuZnVuY3Rpb24gdWlkKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK3NpZCArIE1hdGgucmFuZG9tKCkpLnRvU3RyaW5nKDM2KSk7XG59XG51aWQuc2FmZSA9IHJlcXVpcmUoJy4vJCcpLmcuU3ltYm9sIHx8IHVpZDtcbm1vZHVsZS5leHBvcnRzID0gdWlkOyIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciAkICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgVU5TQ09QQUJMRVMgPSByZXF1aXJlKCcuLyQud2tzJykoJ3Vuc2NvcGFibGVzJyk7XG5pZigkLkZXICYmICEoVU5TQ09QQUJMRVMgaW4gW10pKSQuaGlkZShBcnJheS5wcm90b3R5cGUsIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIGlmKCQuRlcpW11bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTsiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi8kJykuZ1xuICAsIHN0b3JlICA9IHt9O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgZ2xvYmFsLlN5bWJvbCAmJiBnbG9iYWwuU3ltYm9sW25hbWVdIHx8IHJlcXVpcmUoJy4vJC51aWQnKS5zYWZlKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07IiwidmFyICQgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIHNldFVuc2NvcGUgPSByZXF1aXJlKCcuLyQudW5zY29wZScpXG4gICwgSVRFUiAgICAgICA9IHJlcXVpcmUoJy4vJC51aWQnKS5zYWZlKCdpdGVyJylcbiAgLCAkaXRlciAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXInKVxuICAsIHN0ZXAgICAgICAgPSAkaXRlci5zdGVwXG4gICwgSXRlcmF0b3JzICA9ICRpdGVyLkl0ZXJhdG9ycztcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi8kLml0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgJC5zZXQodGhpcywgSVRFUiwge286ICQudG9PYmplY3QoaXRlcmF0ZWQpLCBpOiAwLCBrOiBraW5kfSk7XG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBpdGVyICA9IHRoaXNbSVRFUl1cbiAgICAsIE8gICAgID0gaXRlci5vXG4gICAgLCBraW5kICA9IGl0ZXIua1xuICAgICwgaW5kZXggPSBpdGVyLmkrKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIGl0ZXIubyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuc2V0VW5zY29wZSgna2V5cycpO1xuc2V0VW5zY29wZSgndmFsdWVzJyk7XG5zZXRVbnNjb3BlKCdlbnRyaWVzJyk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uLXN0cm9uZycpO1xuXG4vLyAyMy4xIE1hcCBPYmplY3RzXG5yZXF1aXJlKCcuLyQuY29sbGVjdGlvbicpKCdNYXAnLCB7XG4gIC8vIDIzLjEuMy42IE1hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KXtcbiAgICB2YXIgZW50cnkgPSBzdHJvbmcuZ2V0RW50cnkodGhpcywga2V5KTtcbiAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudjtcbiAgfSxcbiAgLy8gMjMuMS4zLjkgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSl7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodGhpcywga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcsIHRydWUpOyIsInZhciAkICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgJGRlZiAgICAgPSByZXF1aXJlKCcuLyQuZGVmJylcbiAgLCBpc09iamVjdCA9ICQuaXNPYmplY3RcbiAgLCB0b09iamVjdCA9ICQudG9PYmplY3Q7XG4kLmVhY2guY2FsbCgoJ2ZyZWV6ZSxzZWFsLHByZXZlbnRFeHRlbnNpb25zLGlzRnJvemVuLGlzU2VhbGVkLGlzRXh0ZW5zaWJsZSwnICtcbiAgJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcixnZXRQcm90b3R5cGVPZixrZXlzLGdldE93blByb3BlcnR5TmFtZXMnKS5zcGxpdCgnLCcpXG4sIGZ1bmN0aW9uKEtFWSwgSUQpe1xuICB2YXIgZm4gICAgID0gKCQuY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cbiAgICAsIGZvcmNlZCA9IDBcbiAgICAsIG1ldGhvZCA9IHt9O1xuICBtZXRob2RbS0VZXSA9IElEID09IDAgPyBmdW5jdGlvbiBmcmVlemUoaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiBpdDtcbiAgfSA6IElEID09IDEgPyBmdW5jdGlvbiBzZWFsKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogaXQ7XG4gIH0gOiBJRCA9PSAyID8gZnVuY3Rpb24gcHJldmVudEV4dGVuc2lvbnMoaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiBpdDtcbiAgfSA6IElEID09IDMgPyBmdW5jdGlvbiBpc0Zyb3plbihpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IHRydWU7XG4gIH0gOiBJRCA9PSA0ID8gZnVuY3Rpb24gaXNTZWFsZWQoaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiB0cnVlO1xuICB9IDogSUQgPT0gNSA/IGZ1bmN0aW9uIGlzRXh0ZW5zaWJsZShpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IGZhbHNlO1xuICB9IDogSUQgPT0gNiA/IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgICByZXR1cm4gZm4odG9PYmplY3QoaXQpLCBrZXkpO1xuICB9IDogSUQgPT0gNyA/IGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KXtcbiAgICByZXR1cm4gZm4oT2JqZWN0KCQuYXNzZXJ0RGVmaW5lZChpdCkpKTtcbiAgfSA6IElEID09IDggPyBmdW5jdGlvbiBrZXlzKGl0KXtcbiAgICByZXR1cm4gZm4odG9PYmplY3QoaXQpKTtcbiAgfSA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICAgIHJldHVybiBmbih0b09iamVjdChpdCkpO1xuICB9O1xuICB0cnkge1xuICAgIGZuKCd6Jyk7XG4gIH0gY2F0Y2goZSl7XG4gICAgZm9yY2VkID0gMTtcbiAgfVxuICAkZGVmKCRkZWYuUyArICRkZWYuRiAqIGZvcmNlZCwgJ09iamVjdCcsIG1ldGhvZCk7XG59KTsiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuLyQuY29mJylcbiAgLCB0bXAgPSB7fTtcbnRtcFtyZXF1aXJlKCcuLyQud2tzJykoJ3RvU3RyaW5nVGFnJyldID0gJ3onO1xuaWYocmVxdWlyZSgnLi8kJykuRlcgJiYgY29mKHRtcCkgIT0gJ3onKXtcbiAgcmVxdWlyZSgnLi8kLnJlZGVmJykoT2JqZWN0LnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gJ1tvYmplY3QgJyArIGNvZi5jbGFzc29mKHRoaXMpICsgJ10nO1xuICB9LCB0cnVlKTtcbn0iLCJ2YXIgc2V0ICAgPSByZXF1aXJlKCcuLyQnKS5zZXRcbiAgLCAkYXQgICA9IHJlcXVpcmUoJy4vJC5zdHJpbmctYXQnKSh0cnVlKVxuICAsIElURVIgID0gcmVxdWlyZSgnLi8kLnVpZCcpLnNhZmUoJ2l0ZXInKVxuICAsICRpdGVyID0gcmVxdWlyZSgnLi8kLml0ZXInKVxuICAsIHN0ZXAgID0gJGl0ZXIuc3RlcDtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi8kLml0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICBzZXQodGhpcywgSVRFUiwge286IFN0cmluZyhpdGVyYXRlZCksIGk6IDB9KTtcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBpdGVyICA9IHRoaXNbSVRFUl1cbiAgICAsIE8gICAgID0gaXRlci5vXG4gICAgLCBpbmRleCA9IGl0ZXIuaVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiBzdGVwKDEpO1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIGl0ZXIuaSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiBzdGVwKDAsIHBvaW50KTtcbn0pOyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uLXRvLWpzb24nKSgnTWFwJyk7IiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciAkICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgSXRlcmF0b3JzICAgPSByZXF1aXJlKCcuLyQuaXRlcicpLkl0ZXJhdG9yc1xuICAsIElURVJBVE9SICAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlWYWx1ZXMgPSBJdGVyYXRvcnMuQXJyYXlcbiAgLCBOb2RlTGlzdCAgICA9ICQuZy5Ob2RlTGlzdDtcbmlmKCQuRlcgJiYgTm9kZUxpc3QgJiYgIShJVEVSQVRPUiBpbiBOb2RlTGlzdC5wcm90b3R5cGUpKXtcbiAgJC5oaWRlKE5vZGVMaXN0LnByb3RvdHlwZSwgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbn1cbkl0ZXJhdG9ycy5Ob2RlTGlzdCA9IEFycmF5VmFsdWVzOyIsImltcG9ydCBXaW5kb3cgZnJvbSAnLi93aW5kb3cnO1xuaW1wb3J0IFRhYiBmcm9tICcuL3RhYic7XG5pbXBvcnQgVFRZIGZyb20gJy4vdHR5JztcblxuZXhwb3J0IHsgV2luZG93LCBUYWIsIFRUWSB9OyIsImltcG9ydCB7XG5cdG9uLFxuXHRjYW5jZWwsXG5cdGluaGVyaXRzLFxuXHRzYW5pdGl6ZSxcblx0aW5kZXhPZlxufSBmcm9tICcuL3V0aWxzJztcblxuLyoqIFxuICogUmVwcmVzZW50cyBhIHNpbmdsZSB0ZXJtaW5hbCB0aGF0IGlzIHBhcnQgb2YgYSBzZXNzaW9uLlxuICpcbiAqIEBwYXJhbSB7V2luZG93fSBcdFx0d2luIFx0dGhlIFdpbmRvdyB0aGUgVGFiIGlzIGF0dGFjaGVkIHRvXG4gKiBAcGFyYW0ge1NvY2tldH0gXHRcdHNvY2tldCBcdHRoZSBzb2NrZXQgd2l0aCB3aGljaCB0byBzZW5kIG1lc2FnZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBcdFx0W3Rlcm1dIFx0aW5mb3JtYXRpb24gYWJvdXQgdGhlIHRlcm1pbmFsLCB1c2VkIHdoZW4gc3luY2luZ1xuICovXG5mdW5jdGlvbiBUYWIod2luLCBzb2NrZXQsIHRlcm0pIHtcblx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdHZhciBjb2xzID0gd2luLmNvbHMsXG5cdFx0cm93cyA9IHdpbi5yb3dzO1xuXG5cdC8vIEluaXRpYWxpemUgb3Vyc2VsdmVzIGFzIGEgdGVybWluYWxcblx0VGVybWluYWwuY2FsbCh0aGlzLCB7XG5cdFx0Y29sczogY29scyxcblx0XHRyb3dzOiByb3dzXG5cdH0pO1xuXG5cdC8vIFNldCB1cCB0aGUgRE9NIGVsZW1lbnRzLlxuXHR2YXIgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRFbGVtZW50KCdkaXYnKTtcblx0YnV0dG9uLmNsYXNzTmFtZSA9ICd0YWInO1xuXHRidXR0b24uaW5uZXJIVE1MID0gJ1xcdTIwMjInO1xuXG5cdG9uKGJ1dHRvbiwgJ2NsaWNrJywgZnVuY3Rpb24oZXYpIHtcblx0XHRpZiAoZXYuY3RybEtleSB8fCBldi5hbHRLZXkgfHwgZXYubWV0YUtleSB8fCBldi5zaGlmdEtleSkge1xuXHRcdFx0c2VsZi5kZXN0cm95KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNlbGYuZm9jdXMoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY2FuY2VsKGV2KTtcblx0fSk7XG5cblx0dGhpcy5zb2NrZXQgPSBzb2NrZXQ7XG5cdHRoaXMud2luZG93ID0gd2luO1xuXHR0aGlzLnNlc3Npb24gPSB3aW4uc2Vzc2lvbjtcblx0dGhpcy5idXR0b24gPSBidXR0b247XG5cdHRoaXMuZWxlbWVudCA9IG51bGw7XG5cblxuXHR0aGlzLm9wZW4oKTtcblx0dGhpcy5ob29rS2V5cygpO1xuXG5cdGlmICh0ZXJtKSB7XG5cdFx0Ly8gVGVybWluYWwgYWxyZWFkeSBvcGVuLCBqdXN0IGNoYW5nZSBzZWxmIHRvIG1hdGNoXG5cdFx0dGhpcy5pZCA9IHRlcm0uaWQ7XG5cdFx0dGhpcy5wdHkgPSB0ZXJtLnB0eTtcblx0XHR0aGlzLnNldFByb2Nlc3NOYW1lKHRlcm0ucHJvY2Vzcyk7XG5cdFx0dGhpcy5fcmVzaXplKHRlcm0uY29scywgdGVybS5yb3dzKTtcblx0fSBlbHNlIHtcblx0XHR0aGlzLmlkID0gJyc7XG5cdFx0dGhpcy5wcm9jZXNzID0gJyc7XG5cblx0XHR0aGlzLnNvY2tldC5lbWl0KCdjcmVhdGUnLCB0aGlzLnNlc3Npb24sIGNvbHMsIHJvd3MsIGZ1bmN0aW9uKGVyciwgZGF0YSkge1xuXHRcdFx0aWYgKGVycikgeyByZXR1cm4gc2VsZi5fZGVzdHJveSgpOyB9XG5cdFx0XHRzZWxmLnB0eSA9IGRhdGEucHR5O1xuXHRcdFx0c2VsZi5pZCA9IGRhdGEuaWQ7XG5cblx0XHRcdHNlbGYuc2V0UHJvY2Vzc05hbWUoZGF0YS5wcm9jZXNzKTtcblxuXHRcdFx0c2VsZi5lbWl0KCdvcGVuJyk7XG5cdFx0fSk7XG5cdH1cbn1cblxuLy8gSW5oZXJpdCBmcm9tIFRlcm1pbmFsXG5pbmhlcml0cyhUYWIsIFRlcm1pbmFsKTtcblxuLyoqXG4gKiBIYW5kbGUgdGVybWluYWwgZGF0YS5cbiAqIFxuICogQHBhcmFtICB7YmluYXJ5fSBkYXRhIHRoZSBkYXRhIHJlY2VpdmVkIGZyb20gdGhlIHRlcm1pbmFsXG4gKi9cbi8qXG4gKiBUZWNobmljYWxseSwgd2UgY291bGQgaG9vayBpbiBgdGFiLm9uKCdkYXRhJywgLi4uKWAgaW4gdGhlIGNvbnN0cnVjdG9yLFxuICogYnV0IHRoaXMgaXMgZmFzdGVyLlxuICovXG5UYWIucHJvdG90eXBlLmhhbmRsZXIgPSBmdW5jdGlvbihkYXRhKSB7XG5cdHRoaXMuc29ja2V0LmVtaXQoJ2RhdGEnLCB0aGlzLnNlc3Npb24sIHRoaXMuaWQsIGRhdGEpO1xufTtcblxuLypcbiAqIFdlIGNvdWxkIGp1c3QgaG9vayBpbiBgdGFiLm9uKCd0aXRsZScsIC4uLilgIGluIHRoZSBjb25zdHJ1Y3RvciwgYnV0IHRoaXMgaXNcbiAqIGZhc3Rlci5cbiAqL1xuVGFiLnByb3RvdHlwZS5oYW5kbGVUaXRsZSA9IGZ1bmN0aW9uKHRpdGxlKSB7XG5cdGlmICghdGl0bGUpIHsgcmV0dXJuOyB9XG5cblx0dGl0bGUgPSBzYW5pdGl6ZSh0aXRsZSk7XG5cdHRoaXMudGl0bGUgPSB0aXRsZTtcbn07XG5cblRhYi5wcm90b3R5cGUuX3dyaXRlID0gVGFiLnByb3RvdHlwZS53cml0ZTtcblxuVGFiLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0aWYgKHRoaXMud2luZG93LmZvY3VzZWQgIT09IHRoaXMpIHtcblx0XHQvLyBOb3RpZnkgdXNlciB0aGF0IHRoaXMgbm9uLWZvY3VzZWQgdGVybWluYWwgaGFzIHJlY2VpdmVkIG5ld1xuXHRcdC8vIGRhdGEuXG5cdFx0dGhpcy5idXR0b24uc3R5bGUuY29sb3IgPSAncmVkJztcblx0fVxuXHRyZXR1cm4gdGhpcy5fd3JpdGUoZGF0YSk7XG59O1xuXG5UYWIucHJvdG90eXBlLl9mb2N1cyA9IFRhYi5wcm90b3R5cGUuZm9jdXM7XG5cblRhYi5wcm90b3R5cGUuZm9jdXMgPSBmdW5jdGlvbigpIHtcblx0dmFyIGJ1dHRvbiA9IHRoaXMuYnV0dG9uLFxuXHRcdHdpbiA9IHRoaXMud2luZG93LFxuXHRcdHR0eSA9IHRoaXMudHR5O1xuXG5cdGJ1dHRvbi5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuXHRidXR0b24uc3R5bGUuY29sb3IgPSAnJztcblxuXHR0aGlzLmhhbmRsZVRpdGxlKHRoaXMudGl0bGUpO1xuXG5cdHRoaXMuX2ZvY3VzKCk7XG5cblx0d2luLmZvY3VzVGFiKHRoaXMpO1xuXG5cdHRoaXMuZW1pdCgnZm9jdXMnKTtcblx0d2luLmVtaXQoJ2ZvY3VzIHRhYicsIHRoaXMpO1xuXHR0dHkuZW1pdCgnZm9jdXMgdGFiJywgdGhpcyk7XG59O1xuXG5UYWIucHJvdG90eXBlLnVuZm9jdXMgPSBmdW5jdGlvbigpIHtcblx0dmFyIGJ1dHRvbiA9IHRoaXMuYnV0dG9uO1xuXG5cdGJ1dHRvbi5zdHlsZS5mb250V2VpZ2h0ID0gJyc7XG59O1xuXG5UYWIucHJvdG90eXBlLl9yZXNpemUgPSBUYWIucHJvdG90eXBlLnJlc2l6ZTtcblxuVGFiLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbihjb2xzLCByb3dzKSB7XG5cdHZhciB3aW4gPSB0aGlzLndpbmRvdyxcblx0XHR0dHkgPSB0aGlzLnR0eTtcblxuXHR0aGlzLnNvY2tldC5lbWl0KCdyZXNpemUnLCB0aGlzLnNlc3Npb24sIHRoaXMuaWQsIGNvbHMsIHJvd3MpO1xuXHR0aGlzLl9yZXNpemUoY29scywgcm93cyk7XG5cblx0dGhpcy5lbWl0KCdyZXNpemUnLCBjb2xzLCByb3dzKTtcblx0d2luLmVtaXQoJ3Jlc2l6ZSB0YWInLCB0aGlzLCBjb2xzLCByb3dzKTtcblx0dHR5LmVtaXQoJ3Jlc2l6ZSB0YWInLCB0aGlzLCBjb2xzLCByb3dzKTtcbn07XG5cblRhYi5wcm90b3R5cGUuX19kZXN0cm95ID0gVGFiLnByb3RvdHlwZS5kZXN0cm95O1xuXG5UYWIucHJvdG90eXBlLl9kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdGlmICh0aGlzLmRlc3Ryb3llZCkgeyByZXR1cm47IH1cblx0dGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuXG5cdHZhciB3aW4gPSB0aGlzLndpbmRvdztcblxuXHR0aGlzLmJ1dHRvbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuYnV0dG9uKTtcblx0aWYgKHRoaXMuZWxlbWVudC5wYXJlbnROb2RlKSB7XG5cdFx0dGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcblx0fVxuXG5cdHdpbi5yZW1vdmVUYWIodGhpcyk7XG5cblx0dGhpcy5fX2Rlc3Ryb3koKTtcbn07XG5cblRhYi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy5kZXN0cm95ZWQpIHsgcmV0dXJuOyB9XG5cblx0dGhpcy5zb2NrZXQuZW1pdCgna2lsbCcsIHRoaXMuc2Vzc2lvbiwgdGhpcy5pZCk7XG5cdHRoaXMuX2Rlc3Ryb3koKTtcblxuXHR0aGlzLmVtaXQoJ2Nsb3NlJyk7XG5cdHRoaXMud2luZG93LmVtaXQoJ2Nsb3NlIHRhYicsIHRoaXMpO1xuXHR0aGlzLnR0eS5lbWl0KCdjbG9zZSB0YWInLCB0aGlzKTtcbn07XG5cblRhYi5wcm90b3R5cGUuaG9va0tleXMgPSBmdW5jdGlvbigpIHtcblx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdC8vIEFsdC1bamtdIHRvIHF1aWNrbHkgc3dhcCBiZXR3ZWVuIHdpbmRvd3Ncblx0dGhpcy5vbigna2V5JywgZnVuY3Rpb24oa2V5KSB7XG5cdFx0aWYgKFRlcm1pbmFsLmZvY3VzS2V5cyA9PT0gZmFsc2UpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgdHR5ID0gc2VsZi50dHksXG5cdFx0XHR3aW5kb3dzID0gdHR5LndpbmRvd3M7XG5cdFx0dmFyIG9mZnNldCwgaTtcblxuXHRcdGlmIChrZXkgPT09ICdcXHgxYmonKSB7XG5cdFx0XHRvZmZzZXQgPSAtMTtcblx0XHR9IGVsc2UgaWYgKGtleSA9PT0gJ1xceDFiaycpIHtcblx0XHRcdG9mZnNldCA9ICsxO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aSA9IGluZGV4T2Yoc2VsZi50dHkud2luZG93cywgc2VsZi53aW5kb3cpICsgb2Zmc2V0O1xuXG5cdFx0c2VsZi5faWdub3JlTmV4dCgpO1xuXG5cdFx0aWYgKHdpbmRvd3NbaV0pIHtcblx0XHRcdHJldHVybiB3aW5kb3dzW2ldLmhpZ2hsaWdodCgpO1xuXHRcdH1cblxuXHRcdGlmIChvZmZzZXQgPiAwKSB7XG5cdFx0XHRpZiAod2luZG93c1swXSkgeyByZXR1cm4gd2luZG93c1swXS5oaWdobGlnaHQoKTsgfVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpID0gd2luZG93cy5sZW5ndGggLSAxO1xuXHRcdFx0aWYgKHdpbmRvd3NbaV0pIHsgcmV0dXJuIHdpbmRvd3NbaV0uaGlnaGxpZ2h0KCk7IH1cblx0XHR9XG5cblx0XHRyZXR1cm4gc2VsZi53aW5kb3cuaGlnaGxpZ2h0KCk7XG5cdH0pO1xuXG5cdHRoaXMub24oJ3JlcXVlc3QgcGFzdGUnLCBmdW5jdGlvbigpIHtcblx0XHRzZWxmLnNvY2tldC5lbWl0KCdyZXF1ZXN0IHBhc3RlJywgZnVuY3Rpb24oZXJyLCB0ZXh0KSB7XG5cdFx0XHRpZiAoZXJyKSB7IHJldHVybjsgfVxuXHRcdFx0c2VsZi5zZW5kKHRleHQpO1xuXHRcdH0pO1xuXHR9KTtcblxuXHR0aGlzLm9uKCdyZXF1ZXN0IGNyZWF0ZScsIGZ1bmN0aW9uKCkge1xuXHRcdHNlbGYud2luZG93LmNyZWF0ZVRhYigpO1xuXHR9KTtcblxuXHR0aGlzLm9uKCdyZXF1ZXN0IHRlcm0nLCBmdW5jdGlvbihrZXkpIHtcblx0XHRpZiAoc2VsZi53aW5kb3cudGFic1trZXldKSB7XG5cdFx0XHRzZWxmLndpbmRvdy50YWJzW2tleV0uZm9jdXMoKTtcblx0XHR9XG5cdH0pO1xuXG5cdHRoaXMub24oJ3JlcXVlc3QgdGVybSBuZXh0JywgZnVuY3Rpb24oKSB7XG5cdFx0c2VsZi53aW5kb3cubmV4dFRhYigpO1xuXHR9KTtcblxuXHR0aGlzLm9uKCdyZXF1ZXN0IHRlcm0gcHJldmlvdXMnLCBmdW5jdGlvbigpIHtcblx0XHRzZWxmLndpbmRvdy5wcmV2aW91c1RhYigpO1xuXHR9KTtcbn07XG5cblRhYi5wcm90b3R5cGUuX2lnbm9yZU5leHQgPSBmdW5jdGlvbigpIHtcblx0Ly8gRG9uJ3Qgc2VuZCB0aGUgbmV4dCBrZXlcblx0dmFyIGhhbmRsZXIgPSB0aGlzLmhhbmRsZXI7XG5cdHRoaXMuaGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG5cdH07XG5cblx0dmFyIHNob3dDdXJzb3IgPSB0aGlzLnNob3dDdXJzb3I7XG5cdHRoaXMuc2hvd0N1cnNvciA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuc2hvd0N1cnNvciA9IHNob3dDdXJzb3I7XG5cdH07XG59O1xuXG4vKipcbiAqIFByb2dyYW0tc3BlY2lmaWMgZmVhdHVyZXNcbiAqL1xuXG5UYWIuc2Nyb2xsYWJsZSA9IHtcblx0aXJzc2k6IHRydWUsXG5cdG1hbjogdHJ1ZSxcblx0bGVzczogdHJ1ZSxcblx0aHRvcDogdHJ1ZSxcblx0dG9wOiB0cnVlLFxuXHR3M206IHRydWUsXG5cdGx5bng6IHRydWUsXG5cdG1vY3A6IHRydWVcbn07XG5cblRhYi5wcm90b3R5cGUuX2JpbmRNb3VzZSA9IFRhYi5wcm90b3R5cGUuYmluZE1vdXNlO1xuXG5UYWIucHJvdG90eXBlLmJpbmRNb3VzZSA9IGZ1bmN0aW9uKCkge1xuXHRpZiAoIVRlcm1pbmFsLnByb2dyYW1GZWF0dXJlcykgeyByZXR1cm4gdGhpcy5fYmluZE1vdXNlKCk7IH1cblxuXHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0dmFyIHdoZWVsRXZlbnQgPSAnb25tb3VzZXdoZWVsJyBpbiB3aW5kb3cgP1xuXHRcdCdtb3VzZXdoZWVsJyA6XG5cdFx0J0RPTU1vdXNlU2Nyb2xsJztcblxuXHRvbihzZWxmLmVsZW1lbnQsIHdoZWVsRXZlbnQsIGZ1bmN0aW9uKGV2KSB7XG5cdFx0aWYgKHNlbGYubW91c2VFdmVudHMpIHsgcmV0dXJuOyB9XG5cdFx0aWYgKCFUYWIuc2Nyb2xsYWJsZVtzZWxmLnByb2Nlc3NdKSB7IHJldHVybjsgfVxuXG5cdFx0aWYgKChldi50eXBlID09PSAnbW91c2V3aGVlbCcgJiYgZXYud2hlZWxEZWx0YVkgPiAwKSB8fFxuXHRcdFx0KGV2LnR5cGUgPT09ICdET01Nb3VzZVNjcm9sbCcgJiYgZXYuZGV0YWlsIDwgMCkpIHtcblx0XHRcdC8vIHBhZ2UgdXBcblx0XHRcdHNlbGYua2V5RG93bih7a2V5Q29kZTogMzN9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGFnZSBkb3duXG5cdFx0XHRzZWxmLmtleURvd24oe2tleUNvZGU6IDM0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNhbmNlbChldik7XG5cdH0pO1xuXG5cdHJldHVybiB0aGlzLl9iaW5kTW91c2UoKTtcbn07XG5cblRhYi5wcm90b3R5cGUucG9sbFByb2Nlc3NOYW1lID0gZnVuY3Rpb24oZnVuYykge1xuXHR2YXIgc2VsZiA9IHRoaXM7XG5cdHRoaXMuc29ja2V0LmVtaXQoJ3Byb2Nlc3MnLCB0aGlzLnNlc3Npb24sIHRoaXMuaWQsIGZ1bmN0aW9uKGVyciwgbmFtZSkge1xuXHRcdGlmIChlcnIpIHtcblx0XHRcdHJldHVybiBmdW5jICYmIGZ1bmMoZXJyKTtcblx0XHR9XG5cblx0XHRzZWxmLnNldFByb2Nlc3NOYW1lKG5hbWUpO1xuXHRcdHJldHVybiBmdW5jICYmIGZ1bmMobnVsbCwgbmFtZSk7XG5cdH0pO1xufTtcblxuVGFiLnByb3RvdHlwZS5zZXRQcm9jZXNzTmFtZSA9IGZ1bmN0aW9uKG5hbWUpIHtcblx0bmFtZSA9IHNhbml0aXplKG5hbWUpO1xuXG5cdGlmICh0aGlzLnByb2Nlc3MgIT09IG5hbWUpIHtcblx0XHR0aGlzLmVtaXQoJ3Byb2Nlc3MnLCBuYW1lKTtcblx0fVxuXG5cdHRoaXMucHJvY2VzcyA9IG5hbWU7XG5cdHRoaXMuYnV0dG9uLnRpdGxlID0gbmFtZTtcbn07XG5cbi8qKlxuICogRXhwb3J0c1xuICovXG5leHBvcnQgZGVmYXVsdCBUYWI7IiwiaW1wb3J0IFdpbmRvdyBmcm9tICcuL3dpbmRvdyc7XG5pbXBvcnQge1xuXHRFdmVudEVtaXR0ZXJcbn0gZnJvbSAnLi91dGlscyc7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGNvbm5lY3Rpb24gdG8gYSByZW1vdGUgbWFjaGluZS5cbiAqL1xuY2xhc3MgVFRZIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcblx0Y29uc3RydWN0b3Iob3B0cykge1xuXHRcdHN1cGVyKCk7XG5cdFx0dmFyIHNvY2tldCA9IHRoaXMuc29ja2V0ID0gb3B0cy5zb2NrZXQ7XG5cdFx0dGhpcy5yb290ID0gb3B0cy5yb290O1xuXG5cdFx0dGhpcy5zZXNzaW9ucyA9IG5ldyBNYXAoKTtcblx0XHR0aGlzLndpbmRvd3MgPSBuZXcgTWFwKCk7XG5cblx0XHRzb2NrZXQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnJlc2V0KCk7XG5cdFx0XHR0aGlzLmVtaXQoJ2Nvbm5lY3QnKTtcblx0XHR9KTtcblxuXHRcdHNvY2tldC5vbignc2Vzc2lvbiBjcmVhdGVkJywgKHNlc3Npb24pID0+IHtcblx0XHRcdHRoaXMuc2Vzc2lvbnMuc2V0KHNlc3Npb24uaWQsIHNlc3Npb24pO1xuXHRcdFx0dGhpcy5lbWl0KCdzZXNzaW9uIGNyZWF0ZWQnLCBzZXNzaW9uKTtcblx0XHR9KTtcblxuXHRcdHNvY2tldC5vbignc2Vzc2lvbiBjbG9zZWQnLCAoc2Vzc2lvbklEKSA9PiB7XG5cdFx0XHR0aGlzLnNlc3Npb25zLmRlbGV0ZShzZXNzaW9uSUQpO1xuXHRcdFx0dGhpcy5lbWl0KCdzZXNzaW9uIGNsb3NlZCcsIHNlc3Npb25JRCk7XG5cblx0XHRcdGlmICh0aGlzLndpbmRvd3MuaGFzKHNlc3Npb25JRCkpIHtcblx0XHRcdFx0dGhpcy53aW5kb3dzLmdldChzZXNzaW9uSUQpLmRlc3Ryb3koKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHNvY2tldC5vbignZGF0YScsIChzaWQsIHRpZCwgZGF0YSkgPT4ge1xuXHRcdFx0aWYgKHRoaXMud2luZG93cy5oYXMoc2lkKSkge1xuXHRcdFx0XHR0aGlzLndpbmRvd3MuZ2V0KHNpZCkud3JpdGUodGlkLCBkYXRhKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHNvY2tldC5vbigna2lsbCcsIChzaWQsIHRpZCkgPT4ge1xuXHRcdFx0aWYgKHRoaXMud2luZG93cy5oYXMoc2lkKSkge1xuXHRcdFx0XHR0aGlzLndpbmRvd3MuZ2V0KHNpZCkua2lsbCh0aWQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0c29ja2V0Lm9uKCdzeW5jJywgKHNpZCwgdGVybXMpID0+IHtcblx0XHRcdGlmICh0aGlzLndpbmRvd3MuaGFzKHNpZCkpIHtcblx0XHRcdFx0dGhpcy53aW5kb3dzLmdldChzaWQpLnN5bmModGVybXMpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aWYgKG9wdHMuYXV0b1BvbGwpIHtcblx0XHRcdHRoaXMucG9sbGVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnBvbGxTZXNzaW9ucygpO1xuXHRcdFx0fSwgb3B0cy5hdXRvUG9sbCk7XG5cdFx0fVxuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHRpZiAodGhpcy5kZXN0cm95ZWQpIHsgcmV0dXJuOyB9XG5cdFx0dGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuXG5cdFx0aWYgKHRoaXMucG9sbGVyKSB7XG5cdFx0XHRjbGVhckludGVydmFsKHRoaXMucG9sbGVyKTtcblx0XHRcdGRlbGV0ZSB0aGlzLnBvbGxlcjtcblx0XHR9XG5cblx0XHR0aGlzLnNlc3Npb25zLmNsZWFyKCk7XG5cdFx0dGhpcy53aW5kb3dzLmZvckVhY2goKHdpbikgPT4ge1xuXHRcdFx0d2luLmRlc3Ryb3koKTtcblx0XHR9KTtcblx0fVxuXG5cdHJlc2V0KCkge1xuXHRcdHRoaXMuc2Vzc2lvbnMuY2xlYXIoKTtcblx0XHR0aGlzLndpbmRvd3MuZm9yRWFjaCgod2luKSA9PiB7XG5cdFx0XHR3aW4uZGVzdHJveSgpO1xuXHRcdH0pO1xuXHRcdHRoaXMud2luZG93cy5jbGVhcigpO1xuXG5cdFx0dGhpcy5lbWl0KCdyZXNldCcpO1xuXHR9XG5cblx0bmV3U2Vzc2lvbigpIHtcblx0XHR0aGlzLnNvY2tldC5lbWl0KCduZXcgc2Vzc2lvbicsIChlcnIsIHNlc3Npb24pID0+IHtcblx0XHRcdGlmIChlcnIpIHtcblx0XHRcdFx0dGhpcy5lbWl0KCdlcnJvcicsIHsgYWN0aW9uOiAnbmV3U2Vzc2lvbicsIGVycm9yOiBlcnJ9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2Vzc2lvbnMuc2V0KHNlc3Npb24uaWQsIHNlc3Npb24pO1xuXHRcdFx0XHR0aGlzLm5ld1dpbmRvdyhzZXNzaW9uLmlkKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdG5ld1dpbmRvdyhzZXNzaW9uSUQpIHtcblx0XHR2YXIgc2Vzc2lvbnMgPSB0aGlzLnNlc3Npb25zLFxuXHRcdFx0d2luZG93cyA9IHRoaXMud2luZG93cztcblxuXHRcdGlmICh3aW5kb3dzLmhhcyhzZXNzaW9uSUQpIHx8ICFzZXNzaW9ucy5oYXMoc2Vzc2lvbklEKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc29ja2V0LmVtaXQoJ2F0dGFjaCcsIHNlc3Npb25JRCk7XG5cdFx0XHR2YXIgd2luID0gbmV3IFdpbmRvdyh0aGlzLCBzZXNzaW9uSUQsIHRoaXMuc29ja2V0KTtcblx0XHRcdHdpbmRvd3Muc2V0KHNlc3Npb25JRCwgd2luKTtcblxuXHRcdFx0d2luLm9uY2UoJ29wZW4nLCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuZW1pdCgnb3BlbiB3aW5kb3cnLCB3aW4pO1xuXHRcdFx0fSk7XG5cblx0XHRcdHdpbi5vbignY2xvc2UnLCAoKSA9PiB7XG5cdFx0XHRcdHdpbmRvd3MuZGVsZXRlKHNlc3Npb25JRCk7XG5cdFx0XHRcdHRoaXMuc29ja2V0LmVtaXQoJ2RldGF0Y2gnLCBzZXNzaW9uSUQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiB3aW47XG5cdFx0fVxuXHR9XG5cblx0cG9sbFNlc3Npb25zKCkge1xuXHRcdHRoaXMuc29ja2V0LmVtaXQoJ2xpc3Qgc2Vzc2lvbnMnLCAoZXJyLCBzZXNzaW9ucykgPT4ge1xuXHRcdFx0aWYgKGVycikge1xuXHRcdFx0XHR0aGlzLmVtaXQoJ2Vycm9yJywge2FjdGlvbjogJ3BvbGxTZXNzaW9ucycsIGVycjogZXJyfSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zZXNzaW9ucy5jbGVhcigpO1xuXHRcdFx0T2JqZWN0LmtleXMoc2Vzc2lvbnMpLmZvckVhY2goKHNpZCkgPT4ge1xuXHRcdFx0XHR0aGlzLnNlc3Npb25zLnNldChzaWQsIHNlc3Npb25zW3NpZF0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuZW1pdCgnc2Vzc2lvbnMgbGlzdCcsIHNlc3Npb25zKTtcblx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBUVFk7IiwiLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb25zXG4gKi9cblxuZnVuY3Rpb24gaW5kZXhPZihvYmosIGVsKSB7XG5cdHZhciBpID0gb2JqLmxlbmd0aDtcblx0d2hpbGUgKGktLSkge1xuXHRcdGlmIChvYmpbaV0gPT09IGVsKSB7XG5cdFx0XHRyZXR1cm4gaTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIC0xO1xufVxuXG5mdW5jdGlvbiBzcGxpY2Uob2JqLCBlbCkge1xuXHR2YXIgaSA9IGluZGV4T2Yob2JqLCBlbCk7XG5cdGlmICh+aSkge1xuXHRcdG9iai5zcGxpY2UoaSwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gc2FuaXRpemUodGV4dCkge1xuXHRpZiAoIXRleHQpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRyZXR1cm4gKHRleHQgKyAnJykucmVwbGFjZSgvWyY8Pl0vZywgJycpO1xufVxuXG5leHBvcnQgeyBpbmRleE9mLCBzcGxpY2UsIHNhbml0aXplIH07XG5cbi8qKlxuICogRXhwb3J0cyBmcm9tIG90aGVyIHBhY2thZ2VzXG4gKi9cbmV4cG9ydCB2YXIgRXZlbnRFbWl0dGVyID0gVGVybWluYWwuRXZlbnRFbWl0dGVyO1xuZXhwb3J0IHZhciBpbmhlcml0cyA9IFRlcm1pbmFsLmluaGVyaXRzO1xuZXhwb3J0IHZhciBvbiA9IFRlcm1pbmFsLm9uO1xuZXhwb3J0IHZhciBvZmYgPSBUZXJtaW5hbC5vZmY7XG5leHBvcnQgdmFyIGNhbmNlbCA9IFRlcm1pbmFsLmNhbmNlbDsiLCJpbXBvcnQge1xuXHRFdmVudEVtaXR0ZXIsXG5cdGluaGVyaXRzLFxuXHRvbixcblx0b2ZmLFxuXHRjYW5jZWxcbn0gZnJvbSAnLi91dGlscyc7XG5cbmltcG9ydCBUYWIgZnJvbSAnLi90YWInO1xuXG4vKipcbiAqIFdpbmRvd1xuICovXG5mdW5jdGlvbiBXaW5kb3codHR5LCBzZXNzaW9uLCBzb2NrZXQpIHtcblx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdEV2ZW50RW1pdHRlci5jYWxsKHRoaXMpO1xuXG5cdHZhciBlbCwgZ3JpcCwgYmFyLCBidXR0b24sIHRpdGxlO1xuXG5cdGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGVsLmNsYXNzTmFtZSA9ICd3aW5kb3cnO1xuXG5cdGdyaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Z3JpcC5jbGFzc05hbWUgPSAnZ3JpcCc7XG5cblx0YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGJhci5jbGFzc05hbWUgPSAnYmFyJztcblxuXHRidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0YnV0dG9uLmlubmVySFRNTCA9ICd+Jztcblx0YnV0dG9uLnRpdGxlID0gJ25ldy9jbG9zZSc7XG5cdGJ1dHRvbi5jbGFzc05hbWUgPSAndGFiJztcblxuXHR0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR0aXRsZS5jbGFzc05hbWUgPSAndGl0bGUnO1xuXHR0aXRsZS5pbm5lckhUTUwgPSAnJztcblxuXHR0aGlzLnR0eSA9IHR0eTtcblx0dGhpcy5zZXNzaW9uID0gc2Vzc2lvbjtcblx0dGhpcy5zb2NrZXQgPSBzb2NrZXQ7XG5cdHRoaXMuZWxlbWVudCA9IGVsO1xuXHR0aGlzLmdyaXAgPSBncmlwO1xuXHR0aGlzLmJhciA9IGJhcjtcblx0dGhpcy5idXR0b24gPSBidXR0b247XG5cdHRoaXMudGl0bGUgPSB0aXRsZTtcblxuXHR0aGlzLnRhYnMgPSBuZXcgTWFwKCk7XG5cdHRoaXMuZm9jdXNlZCA9IG51bGw7XG5cblx0dGhpcy5jb2xzID0gVGVybWluYWwuZ2VvbWV0cnlbMF07XG5cdHRoaXMucm93cyA9IFRlcm1pbmFsLmdlb21ldHJ5WzFdO1xuXG5cdGVsLmFwcGVuZENoaWxkKGdyaXApO1xuXHRlbC5hcHBlbmRDaGlsZChiYXIpO1xuXHRiYXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblx0YmFyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuXHR2YXIgZmlyc3RUYWIgPSB0aGlzLmNyZWF0ZVRhYigpO1xuXHR0aGlzLmZvY3VzKCk7XG5cdHRoaXMuYmluZCgpO1xuXG5cdGZpcnN0VGFiLm9uY2UoJ29wZW4nLCBmdW5jdGlvbigpIHtcblx0XHRzZWxmLmVtaXQoJ29wZW4nKTtcblx0fSk7XG59XG5cbmluaGVyaXRzKFdpbmRvdywgRXZlbnRFbWl0dGVyKTtcblxuV2luZG93LnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24oKSB7XG5cdHZhciBzZWxmID0gdGhpcyxcblx0XHRlbCA9IHRoaXMuZWxlbWVudCxcblx0XHRiYXIgPSB0aGlzLmJhcixcblx0XHRncmlwID0gdGhpcy5ncmlwLFxuXHRcdGJ1dHRvbiA9IHRoaXMuYnV0dG9uLFxuXHRcdGxhc3QgPSAwO1xuXG5cdG9uKGJ1dHRvbiwgJ2NsaWNrJywgZnVuY3Rpb24oZXYpIHtcblx0XHRpZiAoZXYuY3RybEtleSB8fCBldi5hbHRLZXkgfHwgZXYubWV0YUtleSB8fCBldi5zaGlmdEtleSkge1xuXHRcdFx0c2VsZi5kZXN0cm95KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNlbGYuY3JlYXRlVGFiKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNhbmNlbChldik7XG5cdH0pO1xuXG5cdG9uKGdyaXAsICdtb3VzZWRvd24nLCBmdW5jdGlvbihldikge1xuXHRcdHNlbGYuZm9jdXMoKTtcblx0XHRzZWxmLnJlc2l6aW5nKGV2KTtcblx0XHRyZXR1cm4gY2FuY2VsKGV2KTtcblx0fSk7XG5cblx0b24oZWwsICdtb3VzZWRvd24nLCBmdW5jdGlvbihldikge1xuXHRcdGlmIChldi50YXJnZXQgIT09IGVsICYmIGV2LnRhcmdldCAhPT0gYmFyKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0c2VsZi5mb2N1cygpO1xuXG5cdFx0Y2FuY2VsKGV2KTtcblxuXHRcdHZhciBub3cgPSBuZXcgRGF0ZShEYXRlLm5vdygpKTtcblx0XHRpZiAobm93IC0gbGFzdCA8IDYwMCkge1xuXHRcdFx0cmV0dXJuIHNlbGYubWF4aW1pemUoKTtcblx0XHR9XG5cdFx0bGFzdCA9IG5vdztcblxuXHRcdHJldHVybiBjYW5jZWwoZXYpO1xuXHR9KTtcbn07XG5cbldpbmRvdy5wcm90b3R5cGUuZm9jdXMgPSBmdW5jdGlvbigpIHtcblx0Ly8gUmVzdGFja1xuXHR2YXIgcGFyZW50ID0gdGhpcy5lbGVtZW50LnBhcmVudE5vZGU7XG5cdGlmIChwYXJlbnQpIHtcblx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcblx0XHRwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcblx0fVxuXG5cdHRoaXMuZW1pdCgnZm9jdXMnKTtcbn07XG5cbldpbmRvdy5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy5kZXN0cm95ZWQpIHsgcmV0dXJuOyB9XG5cdHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcblxuXHRpZiAodGhpcy5taW5pbWl6ZSkgeyB0aGlzLm1pbmltaXplKCk7IH1cblxuXHRpZiAodGhpcy5lbGVtZW50LnBhcmVudE5vZGUpIHtcblx0XHR0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuXHR9XG5cblx0dGhpcy5lYWNoKGZ1bmN0aW9uKHRlcm0pIHtcblx0XHR0ZXJtLmRlc3Ryb3koKTtcblx0fSk7XG5cblx0dGhpcy5lbWl0KCdjbG9zZScpO1xufTtcblxuV2luZG93LnByb3RvdHlwZS5kcmFnID0gZnVuY3Rpb24oZXYpIHtcblx0dmFyIHNlbGYgPSB0aGlzLFxuXHRcdGVsID0gdGhpcy5lbGVtZW50LFxuXHRcdHR0eSA9IHRoaXMudHR5LFxuXHRcdHJvb3QgPSB0dHkucm9vdDtcblxuXHRpZiAodGhpcy5taW5pbWl6ZSkgeyByZXR1cm47IH1cblxuXHR2YXIgZHJhZyA9IHtcblx0XHRsZWZ0OiBlbC5vZmZzZXRMZWZ0LFxuXHRcdHRvcDogZWwub2Zmc2V0VG9wLFxuXHRcdHBhZ2VYOiBldi5wYWdlWCxcblx0XHRwYWdlWTogZXYucGFnZVlcblx0fTtcblxuXHRlbC5zdHlsZS5vcGFjaXR5ID0gJzAuNjAnO1xuXHRlbC5zdHlsZS5jdXJzb3IgPSAnbW92ZSc7XG5cdHJvb3Quc3R5bGUuY3Vyc29yID0gJ21vdmUnO1xuXG5cdGZ1bmN0aW9uIG1vdmUoZXYpIHtcblx0XHRlbC5zdHlsZS5sZWZ0ID1cblx0XHRcdChkcmFnLmxlZnQgKyBldi5wYWdlWCAtIGRyYWcucGFnZVgpICsgJ3B4Jztcblx0XHRlbC5zdHlsZS50b3AgPVxuXHRcdFx0KGRyYWcudG9wICsgZXYucGFnZVkgLSBkcmFnLnBhZ2VZKSArICdweCc7XG5cdH1cblxuXHRmdW5jdGlvbiB1cCgpIHtcblx0XHRlbC5zdHlsZS5vcGFjaXR5ID0gJyc7XG5cdFx0ZWwuc3R5bGUuY3Vyc29yID0gJyc7XG5cdFx0cm9vdC5zdHlsZS5jdXJzb3IgPSAnJztcblxuXHRcdG9mZihkb2N1bWVudCwgJ21vdXNlbW92ZScsIG1vdmUpO1xuXHRcdG9mZihkb2N1bWVudCwgJ21vdXNldXAnLCB1cCk7XG5cblx0XHR2YXIgZXYgPSB7XG5cdFx0XHRsZWZ0OiBlbC5zdHlsZS5sZWZ0LnJlcGxhY2UoL1xcdysvZywgJycpLFxuXHRcdFx0dG9wOiBlbC5zdHlsZS50b3AucmVwbGFjZSgvXFx3Ky9nLCAnJylcblx0XHR9O1xuXG5cdFx0c2VsZi5lbWl0KCdkcmFnJywgZXYpO1xuXHR9XG5cblx0b24oZG9jdW1lbnQsICdtb3VzZW1vdmUnLCBtb3ZlKTtcblx0b24oZG9jdW1lbnQsICdtb3VzZXVwJywgdXApO1xufTtcblxuV2luZG93LnByb3RvdHlwZS5yZXNpemluZyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0ZWwgPSB0aGlzLmVsZW1lbnQsXG5cdFx0dGVybSA9IHRoaXMuZm9jdXNlZCxcblx0XHR0dHkgPSB0aGlzLnR0eSxcblx0XHRyb290ID0gdHR5LnJvb3Q7XG5cblx0aWYgKHRoaXMubWluaW1pemUpIHtcblx0XHRkZWxldGUgdGhpcy5taW5pbWl6ZTtcblx0fVxuXG5cdHZhciByZXNpemUgPSB7XG5cdFx0dzogZWwuY2xpZW50V2lkdGgsXG5cdFx0aDogZWwuY2xpZW50SGVpZ2h0XG5cdH07XG5cblx0ZWwuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblx0ZWwuc3R5bGUub3BhY2l0eSA9ICcwLjcwJztcblx0ZWwuc3R5bGUuY3Vyc29yID0gJ3NlLXJlc2l6ZSc7XG5cdHJvb3Quc3R5bGUuY3Vyc29yID0gJ3NlLXJlc2l6ZSc7XG5cdHRlcm0uZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG5cblx0ZnVuY3Rpb24gbW92ZShldikge1xuXHRcdHZhciB4LCB5O1xuXHRcdHkgPSBlbC5vZmZzZXRIZWlnaHQgLSB0ZXJtLmVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXHRcdHggPSBldi5wYWdlWCAtIGVsLm9mZnNldExlZnQ7XG5cdFx0eSA9IChldi5wYWdlWSAtIGVsLm9mZnNldFRvcCkgLSB5O1xuXHRcdGVsLnN0eWxlLndpZHRoID0geCArICdweCc7XG5cdFx0ZWwuc3R5bGUuaGVpZ2h0ID0geSArICdweCc7XG5cdH1cblxuXHRmdW5jdGlvbiB1cCgpIHtcblx0XHR2YXIgeCwgeTtcblxuXHRcdHggPSBlbC5jbGllbnRXaWR0aCAvIHJlc2l6ZS53O1xuXHRcdHkgPSBlbC5jbGllbnRIZWlnaHQgLyByZXNpemUuaDtcblx0XHR4ID0gKHggKiB0ZXJtLmNvbHMpIHwgMDtcblx0XHR5ID0gKHkgKiB0ZXJtLnJvd3MpIHwgMDtcblxuXHRcdHNlbGYucmVzaXplKHgsIHkpO1xuXG5cdFx0ZWwuc3R5bGUud2lkdGggPSAnJztcblx0XHRlbC5zdHlsZS5oZWlnaHQgPSAnJztcblxuXHRcdGVsLnN0eWxlLm92ZXJmbG93ID0gJyc7XG5cdFx0ZWwuc3R5bGUub3BhY2l0eSA9ICcnO1xuXHRcdGVsLnN0eWxlLmN1cnNvciA9ICcnO1xuXHRcdHJvb3Quc3R5bGUuY3Vyc29yID0gJyc7XG5cdFx0dGVybS5lbGVtZW50LnN0eWxlLmhlaWdodCA9ICcnO1xuXG5cdFx0b2ZmKGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgbW92ZSk7XG5cdFx0b2ZmKGRvY3VtZW50LCAnbW91c2V1cCcsIHVwKTtcblx0fVxuXG5cdG9uKGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgbW92ZSk7XG5cdG9uKGRvY3VtZW50LCAnbW91c2V1cCcsIHVwKTtcbn07XG5cbldpbmRvdy5wcm90b3R5cGUubWF4aW1pemUgPSBmdW5jdGlvbigpIHtcblx0aWYgKHRoaXMubWluaW1pemUpIHsgcmV0dXJuIHRoaXMubWluaW1pemUoKTsgfVxuXG5cdHZhciBzZWxmID0gdGhpcyxcblx0XHRlbCA9IHRoaXMuZWxlbWVudCxcblx0XHR0ZXJtID0gdGhpcy5mb2N1c2VkLFxuXHRcdHR0eSA9IHRoaXMudHR5LFxuXHRcdHJvb3QgPSB0dHkucm9vdCxcblx0XHR4LFxuXHRcdHk7XG5cblx0dmFyIG0gPSB7XG5cdFx0Y29sczogdGVybS5jb2xzLFxuXHRcdHJvd3M6IHRlcm0ucm93cyxcblx0XHRsZWZ0OiBlbC5vZmZzZXRMZWZ0LFxuXHRcdHRvcDogZWwub2Zmc2V0VG9wLFxuXHRcdHJvb3Q6IHJvb3QuY2xhc3NOYW1lXG5cdH07XG5cblx0dGhpcy5taW5pbWl6ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdGRlbGV0ZSB0aGlzLm1pbmltaXplO1xuXG5cdFx0ZWwuc3R5bGUubGVmdCA9IG0ubGVmdCArICdweCc7XG5cdFx0ZWwuc3R5bGUudG9wID0gbS50b3AgKyAncHgnO1xuXHRcdGVsLnN0eWxlLndpZHRoID0gJyc7XG5cdFx0ZWwuc3R5bGUuaGVpZ2h0ID0gJyc7XG5cdFx0dGVybS5lbGVtZW50LnN0eWxlLndpZHRoID0gJyc7XG5cdFx0dGVybS5lbGVtZW50LnN0eWxlLmhlaWdodCA9ICcnO1xuXHRcdGVsLnN0eWxlLmJveFNpemluZyA9ICcnO1xuXHRcdHNlbGYuZ3JpcC5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0cm9vdC5jbGFzc05hbWUgPSBtLnJvb3Q7XG5cblx0XHRzZWxmLnJlc2l6ZShtLmNvbHMsIG0ucm93cyk7XG5cblx0XHRzZWxmLmVtaXQoJ21pbmltaXplJyk7XG5cdH07XG5cblx0Ly8gVE9ETzogUHJvYmFibHkgc2Nyb2xsIHJlbGF0aXZlIHRvIHJvb3Rcblx0d2luZG93LnNjcm9sbFRvKDAsIDApO1xuXG5cdHggPSByb290LmNsaWVudFdpZHRoIC8gdGVybS5lbGVtZW50Lm9mZnNldFdpZHRoO1xuXHR5ID0gcm9vdC5jbGllbnRIZWlnaHQgLyB0ZXJtLmVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXHR4ID0gKHggKiB0ZXJtLmNvbHMpIHwgMDtcblx0eSA9ICh5ICogdGVybS5yb3dzKSB8IDA7XG5cblx0ZWwuc3R5bGUubGVmdCA9ICcwcHgnO1xuXHRlbC5zdHlsZS50b3AgPSAnMHB4Jztcblx0ZWwuc3R5bGUud2lkdGggPSAnMTAwJSc7XG5cdGVsLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcblx0dGVybS5lbGVtZW50LnN0eWxlLndpZHRoID0gJzEwMCUnO1xuXHR0ZXJtLmVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuXHRlbC5zdHlsZS5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XG5cdHRoaXMuZ3JpcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRyb290LmNsYXNzTmFtZSA9ICdtYXhpbWl6ZWQnO1xuXG5cdHRoaXMucmVzaXplKHgsIHkpO1xuXG5cdHRoaXMuZW1pdCgnbWF4aW1pemUnKTtcbn07XG5cbldpbmRvdy5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oY29scywgcm93cykge1xuXHR0aGlzLmNvbHMgPSBjb2xzO1xuXHR0aGlzLnJvd3MgPSByb3dzO1xuXG5cdHRoaXMuZWFjaChmdW5jdGlvbih0ZXJtKSB7XG5cdFx0dGVybS5yZXNpemUoY29scywgcm93cyk7XG5cdH0pO1xuXG5cdHRoaXMuZW1pdCgncmVzaXplJywgY29scywgcm93cyk7XG59O1xuXG5XaW5kb3cucHJvdG90eXBlLmVhY2ggPSBmdW5jdGlvbihmdW5jKSB7XG5cdHZhciAgaSA9IHRoaXMudGFicy5sZW5ndGg7XG5cdHdoaWxlIChpLS0pIHtcblx0XHRmdW5jKHRoaXMudGFic1tpXSwgaSk7XG5cdH1cbn07XG5cbldpbmRvdy5wcm90b3R5cGUuY3JlYXRlVGFiID0gZnVuY3Rpb24odGVybSkge1xuXHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0dGFiID0gbmV3IFRhYih0aGlzLCB0aGlzLnNvY2tldCwgdGVybSk7XG5cblx0dGhpcy5iYXIuYXBwZW5kQ2hpbGQodGFiLmJ1dHRvbik7XG5cblx0aWYgKHRhYi5pZCkge1xuXHRcdHRoaXMudGFicy5zZXQodGFiLmlkLCB0YWIpO1xuXHR9XG5cblx0Ly8gQ2hhbmdlIHRpdGxlIGlmIGZvY3VzZWQgdGFiJ3MgcHJvY2VzcyBjaGFuZ2VzXG5cdHRhYi5vbigncHJvY2VzcycsIGZ1bmN0aW9uKG5hbWUpIHtcblx0XHRpZiAoc2VsZi5mb2N1c2VkID09PSB0YWIpIHtcblx0XHRcdHNlbGYud2luZG93LnRpdGxlLmlubmVySFRNTCA9IG5hbWU7XG5cdFx0fVxuXHR9KTtcblxuXHR0YWIub24oJ29wZW4nLCBmdW5jdGlvbigpIHtcblx0XHRzZWxmLnRhYnMuc2V0KHRhYi5pZCwgdGFiKTtcblx0XHRzZWxmLmVtaXQoJ29wZW4gdGFiJywgdGFiKTtcblx0fSk7XG5cblx0cmV0dXJuIHRhYjtcbn07XG5cbldpbmRvdy5wcm90b3R5cGUuaGlnaGxpZ2h0ID0gZnVuY3Rpb24oKSB7XG5cdHZhciBzZWxmID0gdGhpcztcblxuXHR0aGlzLmVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSAnb3JhbmdlJztcblx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRzZWxmLmVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSAnJztcblx0fSwgMjAwKTtcblxuXHR0aGlzLmZvY3VzKCk7XG59O1xuXG5XaW5kb3cucHJvdG90eXBlLmZvY3VzVGFiID0gZnVuY3Rpb24odGFiKSB7XG5cdHZhciB0aXRsZSA9IHRoaXMudGl0bGUsXG5cdFx0ZWwgPSB0aGlzLmVsZW1lbnQ7XG5cblx0Ly8gSWYgd2UgYXJlIGZvY3VzZWQgb24gYSBkaWZmZXJlbnQgdGFiLCB1bmZvY3VzIHRoYXQgdGFiLlxuXHRpZiAodGhpcy5mb2N1c2VkICYmIHRoaXMuZm9jdXNlZCAhPT0gdGFiKSB7XG5cdFx0dGhpcy5mb2N1c2VkLnVuZm9jdXMoKTtcblx0XHRlbC5yZW1vdmVDaGlsZCh0aGlzLmZvY3VzZWQuZWxlbWVudCk7XG5cdH1cblxuXHRpZiAoIXRoaXMuZm9jdXNlZCkge1xuXHRcdGVsLmFwcGVuZENoaWxkKHRhYi5lbGVtZW50KTtcblx0XHR0aGlzLmZvY3VzZWQgPSB0YWI7XG5cdH1cblxuXHR0aXRsZS5pbm5lckhUTUwgPSB0YWIucHJvY2VzcztcblxuXHQvLyBFbnN1cmUgdGhlIHdpbmRvdyBpdHNlbGYgaXMgZm9jdXNlZC5cblx0dGhpcy5mb2N1cygpO1xufTtcblxuV2luZG93LnByb3RvdHlwZS5uZXh0VGFiID0gZnVuY3Rpb24oKSB7XG5cdHZhciBwcmV2LFxuXHRcdG5leHQ7XG5cblx0dmFyIHRhYnMgPSB0aGlzLnRhYnMsXG5cdFx0Zm9jdXNlZCA9IHRoaXMuZm9jdXNlZDtcblxuXHR0YWJzLmZvckVhY2goZnVuY3Rpb24odGFiKSB7XG5cdFx0Ly8gVXNlIGZpcnN0IHRhYiBhcyBiYWNrdXBcblx0XHRpZiAoIW5leHQpIHtcblx0XHRcdG5leHQgPSB0YWI7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlIGxhc3QgdGFiIHdhcyB0aGUgY3VycmVudGx5IGZvY3VzZWQgb25lLCBzZXQgdGhlIG5ldyB0YWIgdG9cblx0XHQvLyBgdGFiYFxuXHRcdGlmIChwcmV2ICYmIHByZXYgPT09IGZvY3VzZWQpIHtcblx0XHRcdG5leHQgPSB0YWI7XG5cdFx0fVxuXG5cdFx0cHJldiA9IHRhYjtcblx0fSk7XG5cblx0aWYgKG5leHQpIHtcblx0XHRuZXh0LmZvY3VzKCk7XG5cdH1cbn07XG5cbldpbmRvdy5wcm90b3R5cGUucHJldmlvdXNUYWIgPSBmdW5jdGlvbigpIHtcblx0dmFyIHRhYnMgPSB0aGlzLnRhYnMsXG5cdFx0Zm9jdXNlZCA9IHRoaXMuZm9jdXNlZCxcblx0XHRsYXN0LFxuXHRcdGZvdW5kO1xuXG5cdHRhYnMuZm9yRWFjaChmdW5jdGlvbih0YWIpIHtcblx0XHRpZiAodGFiID09PSBmb2N1c2VkICYmIGxhc3QpIHtcblx0XHRcdGZvdW5kID0gbGFzdDtcblx0XHR9XG5cblx0XHRsYXN0ID0gdGFiO1xuXHR9KTtcblxuXHRpZiAoZm91bmQpIHtcblx0XHRmb3VuZC5mb2N1cygpO1xuXHR9IGVsc2UgaWYobGFzdCkge1xuXHRcdC8vIFdyYXAgYXJvdW5kIHRvIGVuZFxuXHRcdGxhc3QuZm9jdXMoKTtcblx0fVxufTtcblxuV2luZG93LnByb3RvdHlwZS5yZW1vdmVUYWIgPSBmdW5jdGlvbih0YWIpIHtcblx0aWYgKHRoaXMudGFicy5oYXModGFiLmlkKSkge1xuXHRcdHRoaXMudGFicy5kZWxldGUodGFiLmlkKTtcblx0fVxuXG5cdGlmICh0aGlzLmZvY3VzZWQgPT09IHRhYikge1xuXHRcdHRoaXMucHJldmlvdXNUYWIoKTtcblx0fVxuXG5cdGlmICghdGhpcy50YWJzLnNpemUgJiYgIXRoaXMuc3luY2luZykge1xuXHRcdHRoaXMuZGVzdHJveSgpO1xuXHR9XG59O1xuXG5XaW5kb3cucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24odGFiSUQsIGRhdGEpIHtcblx0aWYgKHRoaXMudGFicy5oYXModGFiSUQpKSB7XG5cdFx0dGhpcy50YWJzLmdldCh0YWJJRCkud3JpdGUoZGF0YSk7XG5cdH1cbn07XG5cbldpbmRvdy5wcm90b3R5cGUua2lsbCA9IGZ1bmN0aW9uKHRhYklEKSB7XG5cdGlmICh0aGlzLnRhYnMuaGFzKHRhYklEKSkge1xuXHRcdHRoaXMudGFicy5nZXQodGFiSUQpLmRlc3Ryb3koKTtcblx0fVxufTtcblxuV2luZG93LnByb3RvdHlwZS5zeW5jID0gZnVuY3Rpb24odGVybXMpIHtcblx0dmFyIHNlbGYgPSB0aGlzLFxuXHRcdGZpcnN0O1xuXG5cdHRoaXMuc3luY2luZyA9IHRydWU7XG5cblx0Ly8gRGVzdHJveSBhbGwgY3VycmVudCB0YWJzIHdpdGhvdXQgZW1pdHRpbmcgYW55IGV2ZW50c1xuXHR0aGlzLnRhYnMuZm9yRWFjaChmdW5jdGlvbih0YWIpIHtcblx0XHR0YWIuX2Rlc3Ryb3koKTtcblx0fSk7XG5cdHRoaXMudGFicy5jbGVhcigpO1xuXG5cdC8vIFJlY3JlYXRlIGFsbCB0YWJzXG5cdE9iamVjdC5rZXlzKHRlcm1zKS5mb3JFYWNoKGZ1bmN0aW9uKHRlcm1JRCkge1xuXHRcdHZhciB0ZXJtSW5mbyA9IHRlcm1zW3Rlcm1JRF07XG5cblx0XHR2YXIgdGFiID0gc2VsZi5jcmVhdGVUYWIodGVybUluZm8pO1xuXG5cdFx0aWYgKCFmaXJzdCkge1xuXHRcdFx0Zmlyc3QgPSB0YWI7XG5cdFx0fVxuXHR9KTtcblxuXHR0aGlzLnN5bmNpbmcgPSBmYWxzZTtcblxuXHR0aGlzLmVtaXQoJ3N5bmMnLCB0aGlzKTtcblxuXHRpZiAoZmlyc3QpIHtcblx0XHRmaXJzdC5mb2N1cygpO1xuXHR9XG59O1xuXG4vKipcbiAqIEV4cG9ydHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgV2luZG93OyJdfQ==
