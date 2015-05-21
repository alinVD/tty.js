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
(function (global){
/**
 * term.js - an xterm emulator
 * Copyright (c) 2012-2013, Christopher Jeffrey (MIT License)
 * https://github.com/chjj/term.js
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * Originally forked from (with the author's permission):
 *   Fabrice Bellard's javascript vt100 for jslinux:
 *   http://bellard.org/jslinux/
 *   Copyright (c) 2011 Fabrice Bellard
 *   The original design remains. The terminal itself
 *   has been extended to include xterm CSI codes, among
 *   other features.
 */

;(function() {

/**
 * Terminal Emulation References:
 *   http://vt100.net/
 *   http://invisible-island.net/xterm/ctlseqs/ctlseqs.txt
 *   http://invisible-island.net/xterm/ctlseqs/ctlseqs.html
 *   http://invisible-island.net/vttest/
 *   http://www.inwap.com/pdp10/ansicode.txt
 *   http://linux.die.net/man/4/console_codes
 *   http://linux.die.net/man/7/urxvt
 */

'use strict';

/**
 * Shared
 */

var window = this
  , document = this.document;

/**
 * EventEmitter
 */

function EventEmitter() {
  this._events = this._events || {};
}

EventEmitter.prototype.addListener = function(type, listener) {
  this._events[type] = this._events[type] || [];
  this._events[type].push(listener);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.removeListener = function(type, listener) {
  if (!this._events[type]) return;

  var obj = this._events[type]
    , i = obj.length;

  while (i--) {
    if (obj[i] === listener || obj[i].listener === listener) {
      obj.splice(i, 1);
      return;
    }
  }
};

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners = function(type) {
  if (this._events[type]) delete this._events[type];
};

EventEmitter.prototype.once = function(type, listener) {
  function on() {
    var args = Array.prototype.slice.call(arguments);
    this.removeListener(type, on);
    return listener.apply(this, args);
  }
  on.listener = listener;
  return this.on(type, on);
};

EventEmitter.prototype.emit = function(type) {
  if (!this._events[type]) return;

  var args = Array.prototype.slice.call(arguments, 1)
    , obj = this._events[type]
    , l = obj.length
    , i = 0;

  for (; i < l; i++) {
    obj[i].apply(this, args);
  }
};

EventEmitter.prototype.listeners = function(type) {
  return this._events[type] = this._events[type] || [];
};

/**
 * States
 */

var normal = 0
  , escaped = 1
  , csi = 2
  , osc = 3
  , charset = 4
  , dcs = 5
  , ignore = 6;

/**
 * Terminal
 */

function Terminal(options) {
  var self = this;

  if (!(this instanceof Terminal)) {
    return new Terminal(arguments[0], arguments[1], arguments[2]);
  }

  EventEmitter.call(this);

  if (typeof options === 'number') {
    options = {
      cols: arguments[0],
      rows: arguments[1],
      handler: arguments[2]
    };
  }

  options = options || {};

  each(keys(Terminal.defaults), function(key) {
    if (options[key] == null) {
      options[key] = Terminal.options[key];
      // Legacy:
      if (Terminal[key] !== Terminal.defaults[key]) {
        options[key] = Terminal[key];
      }
    }
    self[key] = options[key];
  });

  if (options.colors.length === 8) {
    options.colors = options.colors.concat(Terminal._colors.slice(8));
  } else if (options.colors.length === 16) {
    options.colors = options.colors.concat(Terminal._colors.slice(16));
  } else if (options.colors.length === 10) {
    options.colors = options.colors.slice(0, -2).concat(
      Terminal._colors.slice(8, -2), options.colors.slice(-2));
  } else if (options.colors.length === 18) {
    options.colors = options.colors.concat(
      Terminal._colors.slice(16, -2), options.colors.slice(-2));
  }
  this.colors = options.colors;

  this.options = options;

  // this.context = options.context || window;
  // this.document = options.document || document;
  this.parent = options.body || options.parent
    || (document ? document.getElementsByTagName('body')[0] : null);

  this.cols = options.cols || options.geometry[0];
  this.rows = options.rows || options.geometry[1];

  if (options.handler) {
    this.on('data', options.handler);
  }

  this.ybase = 0;
  this.ydisp = 0;
  this.x = 0;
  this.y = 0;
  this.cursorState = 0;
  this.cursorHidden = false;
  this.convertEol;
  this.state = 0;
  this.queue = '';
  this.scrollTop = 0;
  this.scrollBottom = this.rows - 1;

  // modes
  this.applicationKeypad = false;
  this.applicationCursor = false;
  this.originMode = false;
  this.insertMode = false;
  this.wraparoundMode = false;
  this.normal = null;

  // select modes
  this.prefixMode = false;
  this.selectMode = false;
  this.visualMode = false;
  this.searchMode = false;
  this.searchDown;
  this.entry = '';
  this.entryPrefix = 'Search: ';
  this._real;
  this._selected;
  this._textarea;

  // charset
  this.charset = null;
  this.gcharset = null;
  this.glevel = 0;
  this.charsets = [null];

  // mouse properties
  this.decLocator;
  this.x10Mouse;
  this.vt200Mouse;
  this.vt300Mouse;
  this.normalMouse;
  this.mouseEvents;
  this.sendFocus;
  this.utfMouse;
  this.sgrMouse;
  this.urxvtMouse;

  // misc
  this.element;
  this.children;
  this.refreshStart;
  this.refreshEnd;
  this.savedX;
  this.savedY;
  this.savedCols;

  // stream
  this.readable = true;
  this.writable = true;

  this.defAttr = (0 << 18) | (257 << 9) | (256 << 0);
  this.curAttr = this.defAttr;

  this.params = [];
  this.currentParam = 0;
  this.prefix = '';
  this.postfix = '';

  this.lines = [];
  var i = this.rows;
  while (i--) {
    this.lines.push(this.blankLine());
  }

  this.tabs;
  this.setupStops();
}

inherits(Terminal, EventEmitter);

// back_color_erase feature for xterm.
Terminal.prototype.eraseAttr = function() {
  // if (this.is('screen')) return this.defAttr;
  return (this.defAttr & ~0x1ff) | (this.curAttr & 0x1ff);
};

/**
 * Colors
 */

// Colors 0-15
Terminal.tangoColors = [
  // dark:
  '#2e3436',
  '#cc0000',
  '#4e9a06',
  '#c4a000',
  '#3465a4',
  '#75507b',
  '#06989a',
  '#d3d7cf',
  // bright:
  '#555753',
  '#ef2929',
  '#8ae234',
  '#fce94f',
  '#729fcf',
  '#ad7fa8',
  '#34e2e2',
  '#eeeeec'
];

Terminal.xtermColors = [
  // dark:
  '#000000', // black
  '#cd0000', // red3
  '#00cd00', // green3
  '#cdcd00', // yellow3
  '#0000ee', // blue2
  '#cd00cd', // magenta3
  '#00cdcd', // cyan3
  '#e5e5e5', // gray90
  // bright:
  '#7f7f7f', // gray50
  '#ff0000', // red
  '#00ff00', // green
  '#ffff00', // yellow
  '#5c5cff', // rgb:5c/5c/ff
  '#ff00ff', // magenta
  '#00ffff', // cyan
  '#ffffff'  // white
];

// Colors 0-15 + 16-255
// Much thanks to TooTallNate for writing this.
Terminal.colors = (function() {
  var colors = Terminal.tangoColors.slice()
    , r = [0x00, 0x5f, 0x87, 0xaf, 0xd7, 0xff]
    , i;

  // 16-231
  i = 0;
  for (; i < 216; i++) {
    out(r[(i / 36) % 6 | 0], r[(i / 6) % 6 | 0], r[i % 6]);
  }

  // 232-255 (grey)
  i = 0;
  for (; i < 24; i++) {
    r = 8 + i * 10;
    out(r, r, r);
  }

  function out(r, g, b) {
    colors.push('#' + hex(r) + hex(g) + hex(b));
  }

  function hex(c) {
    c = c.toString(16);
    return c.length < 2 ? '0' + c : c;
  }

  return colors;
})();

// Default BG/FG
Terminal.colors[256] = '#000000';
Terminal.colors[257] = '#f0f0f0';

Terminal._colors = Terminal.colors.slice();

Terminal.vcolors = (function() {
  var out = []
    , colors = Terminal.colors
    , i = 0
    , color;

  for (; i < 256; i++) {
    color = parseInt(colors[i].substring(1), 16);
    out.push([
      (color >> 16) & 0xff,
      (color >> 8) & 0xff,
      color & 0xff
    ]);
  }

  return out;
})();

/**
 * Options
 */

Terminal.defaults = {
  colors: Terminal.colors,
  convertEol: false,
  termName: 'xterm',
  geometry: [80, 24],
  cursorBlink: true,
  visualBell: false,
  popOnBell: false,
  scrollback: 1000,
  screenKeys: false,
  debug: false,
  useStyle: false
  // programFeatures: false,
  // focusKeys: false,
};

Terminal.options = {};

each(keys(Terminal.defaults), function(key) {
  Terminal[key] = Terminal.defaults[key];
  Terminal.options[key] = Terminal.defaults[key];
});

/**
 * Focused Terminal
 */

Terminal.focus = null;

Terminal.prototype.focus = function() {
  if (Terminal.focus === this) return;

  if (Terminal.focus) {
    Terminal.focus.blur();
  }

  if (this.sendFocus) this.send('\x1b[I');
  this.showCursor();

  // try {
  //   this.element.focus();
  // } catch (e) {
  //   ;
  // }

  // this.emit('focus');

  Terminal.focus = this;
};

Terminal.prototype.blur = function() {
  if (Terminal.focus !== this) return;

  this.cursorState = 0;
  this.refresh(this.y, this.y);
  if (this.sendFocus) this.send('\x1b[O');

  // try {
  //   this.element.blur();
  // } catch (e) {
  //   ;
  // }

  // this.emit('blur');

  Terminal.focus = null;
};

/**
 * Initialize global behavior
 */

Terminal.prototype.initGlobal = function() {
  var document = this.document;

  Terminal._boundDocs = Terminal._boundDocs || [];
  if (~indexOf(Terminal._boundDocs, document)) {
    return;
  }
  Terminal._boundDocs.push(document);

  Terminal.bindPaste(document);

  Terminal.bindKeys(document);

  Terminal.bindCopy(document);

  if (this.isIpad || this.isIphone) {
    Terminal.fixIpad(document);
  }

  if (this.useStyle) {
    Terminal.insertStyle(document, this.colors[256], this.colors[257]);
  }
};

/**
 * Bind to paste event
 */

Terminal.bindPaste = function(document) {
  // This seems to work well for ctrl-V and middle-click,
  // even without the contentEditable workaround.
  var window = document.defaultView;
  on(window, 'paste', function(ev) {
    var term = Terminal.focus;
    if (!term) return;
    if (ev.clipboardData) {
      term.send(ev.clipboardData.getData('text/plain'));
    } else if (term.context.clipboardData) {
      term.send(term.context.clipboardData.getData('Text'));
    }
    // Not necessary. Do it anyway for good measure.
    term.element.contentEditable = 'inherit';
    return cancel(ev);
  });
};

/**
 * Global Events for key handling
 */

Terminal.bindKeys = function(document) {
  // We should only need to check `target === body` below,
  // but we can check everything for good measure.
  on(document, 'keydown', function(ev) {
    if (!Terminal.focus) return;
    var target = ev.target || ev.srcElement;
    if (!target) return;
    if (target === Terminal.focus.element
        || target === Terminal.focus.context
        || target === Terminal.focus.document
        || target === Terminal.focus.body
        || target === Terminal._textarea
        || target === Terminal.focus.parent) {
      return Terminal.focus.keyDown(ev);
    }
  }, true);

  on(document, 'keypress', function(ev) {
    if (!Terminal.focus) return;
    var target = ev.target || ev.srcElement;
    if (!target) return;
    if (target === Terminal.focus.element
        || target === Terminal.focus.context
        || target === Terminal.focus.document
        || target === Terminal.focus.body
        || target === Terminal._textarea
        || target === Terminal.focus.parent) {
      return Terminal.focus.keyPress(ev);
    }
  }, true);

  // If we click somewhere other than a
  // terminal, unfocus the terminal.
  on(document, 'mousedown', function(ev) {
    if (!Terminal.focus) return;

    var el = ev.target || ev.srcElement;
    if (!el) return;

    do {
      if (el === Terminal.focus.element) return;
    } while (el = el.parentNode);

    Terminal.focus.blur();
  });
};

/**
 * Copy Selection w/ Ctrl-C (Select Mode)
 */

Terminal.bindCopy = function(document) {
  var window = document.defaultView;

  // if (!('onbeforecopy' in document)) {
  //   // Copies to *only* the clipboard.
  //   on(window, 'copy', function fn(ev) {
  //     var term = Terminal.focus;
  //     if (!term) return;
  //     if (!term._selected) return;
  //     var text = term.grabText(
  //       term._selected.x1, term._selected.x2,
  //       term._selected.y1, term._selected.y2);
  //     term.emit('copy', text);
  //     ev.clipboardData.setData('text/plain', text);
  //   });
  //   return;
  // }

  // Copies to primary selection *and* clipboard.
  // NOTE: This may work better on capture phase,
  // or using the `beforecopy` event.
  on(window, 'copy', function(ev) {
    var term = Terminal.focus;
    if (!term) return;
    if (!term._selected) return;
    var textarea = term.getCopyTextarea();
    var text = term.grabText(
      term._selected.x1, term._selected.x2,
      term._selected.y1, term._selected.y2);
    term.emit('copy', text);
    textarea.focus();
    textarea.textContent = text;
    textarea.value = text;
    textarea.setSelectionRange(0, text.length);
    setTimeout(function() {
      term.element.focus();
      term.focus();
    }, 1);
  });
};

/**
 * Fix iPad - no idea if this works
 */

Terminal.fixIpad = function(document) {
  var textarea = document.createElement('textarea');
  textarea.style.position = 'absolute';
  textarea.style.left = '-32000px';
  textarea.style.top = '-32000px';
  textarea.style.width = '0px';
  textarea.style.height = '0px';
  textarea.style.opacity = '0';
  textarea.style.backgroundColor = 'transparent';
  textarea.style.borderStyle = 'none';
  textarea.style.outlineStyle = 'none';
  textarea.autocapitalize = 'none';
  textarea.autocorrect = 'off';

  document.getElementsByTagName('body')[0].appendChild(textarea);

  Terminal._textarea = textarea;

  setTimeout(function() {
    textarea.focus();
  }, 1000);
};

/**
 * Insert a default style
 */

Terminal.insertStyle = function(document, bg, fg) {
  var style = document.getElementById('term-style');
  if (style) return;

  var head = document.getElementsByTagName('head')[0];
  if (!head) return;

  var style = document.createElement('style');
  style.id = 'term-style';

  // textContent doesn't work well with IE for <style> elements.
  style.innerHTML = ''
    + '.terminal {\n'
    + '  float: left;\n'
    + '  border: ' + bg + ' solid 5px;\n'
    + '  font-family: "DejaVu Sans Mono", "Liberation Mono", monospace;\n'
    + '  font-size: 11px;\n'
    + '  color: ' + fg + ';\n'
    + '  background: ' + bg + ';\n'
    + '}\n'
    + '\n'
    + '.terminal-cursor {\n'
    + '  color: ' + bg + ';\n'
    + '  background: ' + fg + ';\n'
    + '}\n';

  // var out = '';
  // each(Terminal.colors, function(color, i) {
  //   if (i === 256) {
  //     out += '\n.term-bg-color-default { background-color: ' + color + '; }';
  //   }
  //   if (i === 257) {
  //     out += '\n.term-fg-color-default { color: ' + color + '; }';
  //   }
  //   out += '\n.term-bg-color-' + i + ' { background-color: ' + color + '; }';
  //   out += '\n.term-fg-color-' + i + ' { color: ' + color + '; }';
  // });
  // style.innerHTML += out + '\n';

  head.insertBefore(style, head.firstChild);
};

/**
 * Open Terminal
 */

Terminal.prototype.open = function(parent) {
  var self = this
    , i = 0
    , div;

  this.parent = parent || this.parent;

  if (!this.parent) {
    throw new Error('Terminal requires a parent element.');
  }

  // Grab global elements.
  this.context = this.parent.ownerDocument.defaultView;
  this.document = this.parent.ownerDocument;
  this.body = this.document.getElementsByTagName('body')[0];

  // Parse user-agent strings.
  if (this.context.navigator && this.context.navigator.userAgent) {
    this.isMac = !!~this.context.navigator.userAgent.indexOf('Mac');
    this.isIpad = !!~this.context.navigator.userAgent.indexOf('iPad');
    this.isIphone = !!~this.context.navigator.userAgent.indexOf('iPhone');
    this.isMSIE = !!~this.context.navigator.userAgent.indexOf('MSIE');
  }

  // Create our main terminal element.
  this.element = this.document.createElement('div');
  this.element.className = 'terminal';
  this.element.style.outline = 'none';
  this.element.setAttribute('tabindex', 0);
  this.element.style.backgroundColor = this.colors[256];
  this.element.style.color = this.colors[257];

  // Create the lines for our terminal.
  this.children = [];
  for (; i < this.rows; i++) {
    div = this.document.createElement('div');
    this.element.appendChild(div);
    this.children.push(div);
  }
  this.parent.appendChild(this.element);

  // Draw the screen.
  this.refresh(0, this.rows - 1);

  // Initialize global actions that
  // need to be taken on the document.
  this.initGlobal();

  // Ensure there is a Terminal.focus.
  this.focus();

  // Start blinking the cursor.
  this.startBlink();

  // Bind to DOM events related
  // to focus and paste behavior.
  on(this.element, 'focus', function() {
    self.focus();
    if (self.isIpad || self.isIphone) {
      Terminal._textarea.focus();
    }
  });

  // This causes slightly funky behavior.
  // on(this.element, 'blur', function() {
  //   self.blur();
  // });

  on(this.element, 'mousedown', function() {
    self.focus();
  });

  // Clickable paste workaround, using contentEditable.
  // This probably shouldn't work,
  // ... but it does. Firefox's paste
  // event seems to only work for textareas?
  on(this.element, 'mousedown', function(ev) {
    var button = ev.button != null
      ? +ev.button
      : ev.which != null
        ? ev.which - 1
        : null;

    // Does IE9 do this?
    if (self.isMSIE) {
      button = button === 1 ? 0 : button === 4 ? 1 : button;
    }

    if (button !== 2) return;

    self.element.contentEditable = 'true';
    setTimeout(function() {
      self.element.contentEditable = 'inherit'; // 'false';
    }, 1);
  }, true);

  // Listen for mouse events and translate
  // them into terminal mouse protocols.
  this.bindMouse();

  // Figure out whether boldness affects
  // the character width of monospace fonts.
  if (Terminal.brokenBold == null) {
    Terminal.brokenBold = isBoldBroken(this.document);
  }

  // this.emit('open');

  // This can be useful for pasting,
  // as well as the iPad fix.
  setTimeout(function() {
    self.element.focus();
  }, 100);
};

// XTerm mouse events
// http://invisible-island.net/xterm/ctlseqs/ctlseqs.html#Mouse%20Tracking
// To better understand these
// the xterm code is very helpful:
// Relevant files:
//   button.c, charproc.c, misc.c
// Relevant functions in xterm/button.c:
//   BtnCode, EmitButtonCode, EditorButton, SendMousePosition
Terminal.prototype.bindMouse = function() {
  var el = this.element
    , self = this
    , pressed = 32;

  var wheelEvent = 'onmousewheel' in this.context
    ? 'mousewheel'
    : 'DOMMouseScroll';

  // mouseup, mousedown, mousewheel
  // left click: ^[[M 3<^[[M#3<
  // mousewheel up: ^[[M`3>
  function sendButton(ev) {
    var button
      , pos;

    // get the xterm-style button
    button = getButton(ev);

    // get mouse coordinates
    pos = getCoords(ev);
    if (!pos) return;

    sendEvent(button, pos);

    switch (ev.type) {
      case 'mousedown':
        pressed = button;
        break;
      case 'mouseup':
        // keep it at the left
        // button, just in case.
        pressed = 32;
        break;
      case wheelEvent:
        // nothing. don't
        // interfere with
        // `pressed`.
        break;
    }
  }

  // motion example of a left click:
  // ^[[M 3<^[[M@4<^[[M@5<^[[M@6<^[[M@7<^[[M#7<
  function sendMove(ev) {
    var button = pressed
      , pos;

    pos = getCoords(ev);
    if (!pos) return;

    // buttons marked as motions
    // are incremented by 32
    button += 32;

    sendEvent(button, pos);
  }

  // encode button and
  // position to characters
  function encode(data, ch) {
    if (!self.utfMouse) {
      if (ch === 255) return data.push(0);
      if (ch > 127) ch = 127;
      data.push(ch);
    } else {
      if (ch === 2047) return data.push(0);
      if (ch < 127) {
        data.push(ch);
      } else {
        if (ch > 2047) ch = 2047;
        data.push(0xC0 | (ch >> 6));
        data.push(0x80 | (ch & 0x3F));
      }
    }
  }

  // send a mouse event:
  // regular/utf8: ^[[M Cb Cx Cy
  // urxvt: ^[[ Cb ; Cx ; Cy M
  // sgr: ^[[ Cb ; Cx ; Cy M/m
  // vt300: ^[[ 24(1/3/5)~ [ Cx , Cy ] \r
  // locator: CSI P e ; P b ; P r ; P c ; P p & w
  function sendEvent(button, pos) {
    // self.emit('mouse', {
    //   x: pos.x - 32,
    //   y: pos.x - 32,
    //   button: button
    // });

    if (self.vt300Mouse) {
      // NOTE: Unstable.
      // http://www.vt100.net/docs/vt3xx-gp/chapter15.html
      button &= 3;
      pos.x -= 32;
      pos.y -= 32;
      var data = '\x1b[24';
      if (button === 0) data += '1';
      else if (button === 1) data += '3';
      else if (button === 2) data += '5';
      else if (button === 3) return;
      else data += '0';
      data += '~[' + pos.x + ',' + pos.y + ']\r';
      self.send(data);
      return;
    }

    if (self.decLocator) {
      // NOTE: Unstable.
      button &= 3;
      pos.x -= 32;
      pos.y -= 32;
      if (button === 0) button = 2;
      else if (button === 1) button = 4;
      else if (button === 2) button = 6;
      else if (button === 3) button = 3;
      self.send('\x1b['
        + button
        + ';'
        + (button === 3 ? 4 : 0)
        + ';'
        + pos.y
        + ';'
        + pos.x
        + ';'
        + (pos.page || 0)
        + '&w');
      return;
    }

    if (self.urxvtMouse) {
      pos.x -= 32;
      pos.y -= 32;
      pos.x++;
      pos.y++;
      self.send('\x1b[' + button + ';' + pos.x + ';' + pos.y + 'M');
      return;
    }

    if (self.sgrMouse) {
      pos.x -= 32;
      pos.y -= 32;
      self.send('\x1b[<'
        + ((button & 3) === 3 ? button & ~3 : button)
        + ';'
        + pos.x
        + ';'
        + pos.y
        + ((button & 3) === 3 ? 'm' : 'M'));
      return;
    }

    var data = [];

    encode(data, button);
    encode(data, pos.x);
    encode(data, pos.y);

    self.send('\x1b[M' + String.fromCharCode.apply(String, data));
  }

  function getButton(ev) {
    var button
      , shift
      , meta
      , ctrl
      , mod;

    // two low bits:
    // 0 = left
    // 1 = middle
    // 2 = right
    // 3 = release
    // wheel up/down:
    // 1, and 2 - with 64 added
    switch (ev.type) {
      case 'mousedown':
        button = ev.button != null
          ? +ev.button
          : ev.which != null
            ? ev.which - 1
            : null;

        if (self.isMSIE) {
          button = button === 1 ? 0 : button === 4 ? 1 : button;
        }
        break;
      case 'mouseup':
        button = 3;
        break;
      case 'DOMMouseScroll':
        button = ev.detail < 0
          ? 64
          : 65;
        break;
      case 'mousewheel':
        button = ev.wheelDeltaY > 0
          ? 64
          : 65;
        break;
    }

    // next three bits are the modifiers:
    // 4 = shift, 8 = meta, 16 = control
    shift = ev.shiftKey ? 4 : 0;
    meta = ev.metaKey ? 8 : 0;
    ctrl = ev.ctrlKey ? 16 : 0;
    mod = shift | meta | ctrl;

    // no mods
    if (self.vt200Mouse) {
      // ctrl only
      mod &= ctrl;
    } else if (!self.normalMouse) {
      mod = 0;
    }

    // increment to SP
    button = (32 + (mod << 2)) + button;

    return button;
  }

  // mouse coordinates measured in cols/rows
  function getCoords(ev) {
    var x, y, w, h, el;

    // ignore browsers without pageX for now
    if (ev.pageX == null) return;

    x = ev.pageX;
    y = ev.pageY;
    el = self.element;

    // should probably check offsetParent
    // but this is more portable
    while (el && el !== self.document.documentElement) {
      x -= el.offsetLeft;
      y -= el.offsetTop;
      el = 'offsetParent' in el
        ? el.offsetParent
        : el.parentNode;
    }

    // convert to cols/rows
    w = self.element.clientWidth;
    h = self.element.clientHeight;
    x = Math.round((x / w) * self.cols);
    y = Math.round((y / h) * self.rows);

    // be sure to avoid sending
    // bad positions to the program
    if (x < 0) x = 0;
    if (x > self.cols) x = self.cols;
    if (y < 0) y = 0;
    if (y > self.rows) y = self.rows;

    // xterm sends raw bytes and
    // starts at 32 (SP) for each.
    x += 32;
    y += 32;

    return {
      x: x,
      y: y,
      type: ev.type === wheelEvent
        ? 'mousewheel'
        : ev.type
    };
  }

  on(el, 'mousedown', function(ev) {
    if (!self.mouseEvents) return;

    // send the button
    sendButton(ev);

    // ensure focus
    self.focus();

    // fix for odd bug
    //if (self.vt200Mouse && !self.normalMouse) {
    if (self.vt200Mouse) {
      sendButton({ __proto__: ev, type: 'mouseup' });
      return cancel(ev);
    }

    // bind events
    if (self.normalMouse) on(self.document, 'mousemove', sendMove);

    // x10 compatibility mode can't send button releases
    if (!self.x10Mouse) {
      on(self.document, 'mouseup', function up(ev) {
        sendButton(ev);
        if (self.normalMouse) off(self.document, 'mousemove', sendMove);
        off(self.document, 'mouseup', up);
        return cancel(ev);
      });
    }

    return cancel(ev);
  });

  //if (self.normalMouse) {
  //  on(self.document, 'mousemove', sendMove);
  //}

  on(el, wheelEvent, function(ev) {
    if (!self.mouseEvents) return;
    if (self.x10Mouse
        || self.vt300Mouse
        || self.decLocator) return;
    sendButton(ev);
    return cancel(ev);
  });

  // allow mousewheel scrolling in
  // the shell for example
  on(el, wheelEvent, function(ev) {
    if (self.mouseEvents) return;
    if (self.applicationKeypad) return;
    if (ev.type === 'DOMMouseScroll') {
      self.scrollDisp(ev.detail < 0 ? -5 : 5);
    } else {
      self.scrollDisp(ev.wheelDeltaY > 0 ? -5 : 5);
    }
    return cancel(ev);
  });
};

/**
 * Destroy Terminal
 */

Terminal.prototype.destroy = function() {
  this.readable = false;
  this.writable = false;
  this._events = {};
  this.handler = function() {};
  this.write = function() {};
  if (this.element.parentNode) {
    this.element.parentNode.removeChild(this.element);
  }
  //this.emit('close');
};

/**
 * Rendering Engine
 */

// In the screen buffer, each character
// is stored as a an array with a character
// and a 32-bit integer.
// First value: a utf-16 character.
// Second value:
// Next 9 bits: background color (0-511).
// Next 9 bits: foreground color (0-511).
// Next 14 bits: a mask for misc. flags:
//   1=bold, 2=underline, 4=blink, 8=inverse, 16=invisible

Terminal.prototype.refresh = function(start, end) {
  var x
    , y
    , i
    , line
    , out
    , ch
    , width
    , data
    , attr
    , bg
    , fg
    , flags
    , row
    , parent;

  if (end - start >= this.rows / 2) {
    parent = this.element.parentNode;
    if (parent) parent.removeChild(this.element);
  }

  width = this.cols;
  y = start;

  if (end >= this.lines.length) {
    this.log('`end` is too large. Most likely a bad CSR.');
    end = this.lines.length - 1;
  }

  for (; y <= end; y++) {
    row = y + this.ydisp;

    line = this.lines[row];
    out = '';

    if (y === this.y
        && this.cursorState
        && (this.ydisp === this.ybase || this.selectMode)
        && !this.cursorHidden) {
      x = this.x;
    } else {
      x = -1;
    }

    attr = this.defAttr;
    i = 0;

    for (; i < width; i++) {
      data = line[i][0];
      ch = line[i][1];

      if (i === x) data = -1;

      if (data !== attr) {
        if (attr !== this.defAttr) {
          out += '</span>';
        }
        if (data !== this.defAttr) {
          if (data === -1) {
            out += '<span class="reverse-video terminal-cursor">';
          } else {
            out += '<span style="';

            bg = data & 0x1ff;
            fg = (data >> 9) & 0x1ff;
            flags = data >> 18;

            // bold
            if (flags & 1) {
              if (!Terminal.brokenBold) {
                out += 'font-weight:bold;';
              }
              // See: XTerm*boldColors
              if (fg < 8) fg += 8;
            }

            // underline
            if (flags & 2) {
              out += 'text-decoration:underline;';
            }

            // blink
            if (flags & 4) {
              if (flags & 2) {
                out = out.slice(0, -1);
                out += ' blink;';
              } else {
                out += 'text-decoration:blink;';
              }
            }

            // inverse
            if (flags & 8) {
              bg = (data >> 9) & 0x1ff;
              fg = data & 0x1ff;
              // Should inverse just be before the
              // above boldColors effect instead?
              if ((flags & 1) && fg < 8) fg += 8;
            }

            // invisible
            if (flags & 16) {
              out += 'visibility:hidden;';
            }

            // out += '" class="'
            //   + 'term-bg-color-' + bg
            //   + ' '
            //   + 'term-fg-color-' + fg
            //   + '">';

            if (bg !== 256) {
              out += 'background-color:'
                + this.colors[bg]
                + ';';
            }

            if (fg !== 257) {
              out += 'color:'
                + this.colors[fg]
                + ';';
            }

            out += '">';
          }
        }
      }

      switch (ch) {
        case '&':
          out += '&amp;';
          break;
        case '<':
          out += '&lt;';
          break;
        case '>':
          out += '&gt;';
          break;
        default:
          if (ch <= ' ') {
            out += '&nbsp;';
          } else {
            if (isWide(ch)) i++;
            out += ch;
          }
          break;
      }

      attr = data;
    }

    if (attr !== this.defAttr) {
      out += '</span>';
    }

    this.children[y].innerHTML = out;
  }

  if (parent) parent.appendChild(this.element);
};

Terminal.prototype._cursorBlink = function() {
  if (Terminal.focus !== this) return;
  this.cursorState ^= 1;
  this.refresh(this.y, this.y);
};

Terminal.prototype.showCursor = function() {
  if (!this.cursorState) {
    this.cursorState = 1;
    this.refresh(this.y, this.y);
  } else {
    // Temporarily disabled:
    // this.refreshBlink();
  }
};

Terminal.prototype.startBlink = function() {
  if (!this.cursorBlink) return;
  var self = this;
  this._blinker = function() {
    self._cursorBlink();
  };
  this._blink = setInterval(this._blinker, 500);
};

Terminal.prototype.refreshBlink = function() {
  if (!this.cursorBlink) return;
  clearInterval(this._blink);
  this._blink = setInterval(this._blinker, 500);
};

Terminal.prototype.scroll = function() {
  var row;

  if (++this.ybase === this.scrollback) {
    this.ybase = this.ybase / 2 | 0;
    this.lines = this.lines.slice(-(this.ybase + this.rows) + 1);
  }

  this.ydisp = this.ybase;

  // last line
  row = this.ybase + this.rows - 1;

  // subtract the bottom scroll region
  row -= this.rows - 1 - this.scrollBottom;

  if (row === this.lines.length) {
    // potential optimization:
    // pushing is faster than splicing
    // when they amount to the same
    // behavior.
    this.lines.push(this.blankLine());
  } else {
    // add our new line
    this.lines.splice(row, 0, this.blankLine());
  }

  if (this.scrollTop !== 0) {
    if (this.ybase !== 0) {
      this.ybase--;
      this.ydisp = this.ybase;
    }
    this.lines.splice(this.ybase + this.scrollTop, 1);
  }

  // this.maxRange();
  this.updateRange(this.scrollTop);
  this.updateRange(this.scrollBottom);
};

Terminal.prototype.scrollDisp = function(disp) {
  this.ydisp += disp;

  if (this.ydisp > this.ybase) {
    this.ydisp = this.ybase;
  } else if (this.ydisp < 0) {
    this.ydisp = 0;
  }

  this.refresh(0, this.rows - 1);
};

Terminal.prototype.write = function(data) {
  var l = data.length
    , i = 0
    , j
    , cs
    , ch;

  this.refreshStart = this.y;
  this.refreshEnd = this.y;

  if (this.ybase !== this.ydisp) {
    this.ydisp = this.ybase;
    this.maxRange();
  }

  // this.log(JSON.stringify(data.replace(/\x1b/g, '^[')));

  for (; i < l; i++) {
    ch = data[i];
    switch (this.state) {
      case normal:
        switch (ch) {
          // '\0'
          // case '\0':
          // case '\200':
          //   break;

          // '\a'
          case '\x07':
            this.bell();
            break;

          // '\n', '\v', '\f'
          case '\n':
          case '\x0b':
          case '\x0c':
            if (this.convertEol) {
              this.x = 0;
            }
            // TODO: Implement eat_newline_glitch.
            // if (this.realX >= this.cols) break;
            // this.realX = 0;
            this.y++;
            if (this.y > this.scrollBottom) {
              this.y--;
              this.scroll();
            }
            break;

          // '\r'
          case '\r':
            this.x = 0;
            break;

          // '\b'
          case '\x08':
            if (this.x > 0) {
              this.x--;
            }
            break;

          // '\t'
          case '\t':
            this.x = this.nextStop();
            break;

          // shift out
          case '\x0e':
            this.setgLevel(1);
            break;

          // shift in
          case '\x0f':
            this.setgLevel(0);
            break;

          // '\e'
          case '\x1b':
            this.state = escaped;
            break;

          default:
            // ' '
            if (ch >= ' ') {
              if (this.charset && this.charset[ch]) {
                ch = this.charset[ch];
              }

              if (this.x >= this.cols) {
                this.x = 0;
                this.y++;
                if (this.y > this.scrollBottom) {
                  this.y--;
                  this.scroll();
                }
              }

              this.lines[this.y + this.ybase][this.x] = [this.curAttr, ch];
              this.x++;
              this.updateRange(this.y);

              if (isWide(ch)) {
                j = this.y + this.ybase;
                if (this.cols < 2 || this.x >= this.cols) {
                  this.lines[j][this.x - 1] = [this.curAttr, ' '];
                  break;
                }
                this.lines[j][this.x] = [this.curAttr, ' '];
                this.x++;
              }
            }
            break;
        }
        break;
      case escaped:
        switch (ch) {
          // ESC [ Control Sequence Introducer ( CSI is 0x9b).
          case '[':
            this.params = [];
            this.currentParam = 0;
            this.state = csi;
            break;

          // ESC ] Operating System Command ( OSC is 0x9d).
          case ']':
            this.params = [];
            this.currentParam = 0;
            this.state = osc;
            break;

          // ESC P Device Control String ( DCS is 0x90).
          case 'P':
            this.params = [];
            this.currentParam = 0;
            this.state = dcs;
            break;

          // ESC _ Application Program Command ( APC is 0x9f).
          case '_':
            this.state = ignore;
            break;

          // ESC ^ Privacy Message ( PM is 0x9e).
          case '^':
            this.state = ignore;
            break;

          // ESC c Full Reset (RIS).
          case 'c':
            this.reset();
            break;

          // ESC E Next Line ( NEL is 0x85).
          // ESC D Index ( IND is 0x84).
          case 'E':
            this.x = 0;
            ;
          case 'D':
            this.index();
            break;

          // ESC M Reverse Index ( RI is 0x8d).
          case 'M':
            this.reverseIndex();
            break;

          // ESC % Select default/utf-8 character set.
          // @ = default, G = utf-8
          case '%':
            //this.charset = null;
            this.setgLevel(0);
            this.setgCharset(0, Terminal.charsets.US);
            this.state = normal;
            i++;
            break;

          // ESC (,),*,+,-,. Designate G0-G2 Character Set.
          case '(': // <-- this seems to get all the attention
          case ')':
          case '*':
          case '+':
          case '-':
          case '.':
            switch (ch) {
              case '(':
                this.gcharset = 0;
                break;
              case ')':
                this.gcharset = 1;
                break;
              case '*':
                this.gcharset = 2;
                break;
              case '+':
                this.gcharset = 3;
                break;
              case '-':
                this.gcharset = 1;
                break;
              case '.':
                this.gcharset = 2;
                break;
            }
            this.state = charset;
            break;

          // Designate G3 Character Set (VT300).
          // A = ISO Latin-1 Supplemental.
          // Not implemented.
          case '/':
            this.gcharset = 3;
            this.state = charset;
            i--;
            break;

          // ESC N
          // Single Shift Select of G2 Character Set
          // ( SS2 is 0x8e). This affects next character only.
          case 'N':
            break;
          // ESC O
          // Single Shift Select of G3 Character Set
          // ( SS3 is 0x8f). This affects next character only.
          case 'O':
            break;
          // ESC n
          // Invoke the G2 Character Set as GL (LS2).
          case 'n':
            this.setgLevel(2);
            break;
          // ESC o
          // Invoke the G3 Character Set as GL (LS3).
          case 'o':
            this.setgLevel(3);
            break;
          // ESC |
          // Invoke the G3 Character Set as GR (LS3R).
          case '|':
            this.setgLevel(3);
            break;
          // ESC }
          // Invoke the G2 Character Set as GR (LS2R).
          case '}':
            this.setgLevel(2);
            break;
          // ESC ~
          // Invoke the G1 Character Set as GR (LS1R).
          case '~':
            this.setgLevel(1);
            break;

          // ESC 7 Save Cursor (DECSC).
          case '7':
            this.saveCursor();
            this.state = normal;
            break;

          // ESC 8 Restore Cursor (DECRC).
          case '8':
            this.restoreCursor();
            this.state = normal;
            break;

          // ESC # 3 DEC line height/width
          case '#':
            this.state = normal;
            i++;
            break;

          // ESC H Tab Set (HTS is 0x88).
          case 'H':
            this.tabSet();
            break;

          // ESC = Application Keypad (DECPAM).
          case '=':
            this.log('Serial port requested application keypad.');
            this.applicationKeypad = true;
            this.state = normal;
            break;

          // ESC > Normal Keypad (DECPNM).
          case '>':
            this.log('Switching back to normal keypad.');
            this.applicationKeypad = false;
            this.state = normal;
            break;

          default:
            this.state = normal;
            this.error('Unknown ESC control: %s.', ch);
            break;
        }
        break;

      case charset:
        switch (ch) {
          case '0': // DEC Special Character and Line Drawing Set.
            cs = Terminal.charsets.SCLD;
            break;
          case 'A': // UK
            cs = Terminal.charsets.UK;
            break;
          case 'B': // United States (USASCII).
            cs = Terminal.charsets.US;
            break;
          case '4': // Dutch
            cs = Terminal.charsets.Dutch;
            break;
          case 'C': // Finnish
          case '5':
            cs = Terminal.charsets.Finnish;
            break;
          case 'R': // French
            cs = Terminal.charsets.French;
            break;
          case 'Q': // FrenchCanadian
            cs = Terminal.charsets.FrenchCanadian;
            break;
          case 'K': // German
            cs = Terminal.charsets.German;
            break;
          case 'Y': // Italian
            cs = Terminal.charsets.Italian;
            break;
          case 'E': // NorwegianDanish
          case '6':
            cs = Terminal.charsets.NorwegianDanish;
            break;
          case 'Z': // Spanish
            cs = Terminal.charsets.Spanish;
            break;
          case 'H': // Swedish
          case '7':
            cs = Terminal.charsets.Swedish;
            break;
          case '=': // Swiss
            cs = Terminal.charsets.Swiss;
            break;
          case '/': // ISOLatin (actually /A)
            cs = Terminal.charsets.ISOLatin;
            i++;
            break;
          default: // Default
            cs = Terminal.charsets.US;
            break;
        }
        this.setgCharset(this.gcharset, cs);
        this.gcharset = null;
        this.state = normal;
        break;

      case osc:
        // OSC Ps ; Pt ST
        // OSC Ps ; Pt BEL
        //   Set Text Parameters.
        if (ch === '\x1b' || ch === '\x07') {
          if (ch === '\x1b') i++;

          this.params.push(this.currentParam);

          switch (this.params[0]) {
            case 0:
            case 1:
            case 2:
              if (this.params[1]) {
                this.title = this.params[1];
                this.handleTitle(this.title);
              }
              break;
            case 3:
              // set X property
              break;
            case 4:
            case 5:
              // change dynamic colors
              break;
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
              // change dynamic ui colors
              break;
            case 46:
              // change log file
              break;
            case 50:
              // dynamic font
              break;
            case 51:
              // emacs shell
              break;
            case 52:
              // manipulate selection data
              break;
            case 104:
            case 105:
            case 110:
            case 111:
            case 112:
            case 113:
            case 114:
            case 115:
            case 116:
            case 117:
            case 118:
              // reset colors
              break;
          }

          this.params = [];
          this.currentParam = 0;
          this.state = normal;
        } else {
          if (!this.params.length) {
            if (ch >= '0' && ch <= '9') {
              this.currentParam =
                this.currentParam * 10 + ch.charCodeAt(0) - 48;
            } else if (ch === ';') {
              this.params.push(this.currentParam);
              this.currentParam = '';
            }
          } else {
            this.currentParam += ch;
          }
        }
        break;

      case csi:
        // '?', '>', '!'
        if (ch === '?' || ch === '>' || ch === '!') {
          this.prefix = ch;
          break;
        }

        // 0 - 9
        if (ch >= '0' && ch <= '9') {
          this.currentParam = this.currentParam * 10 + ch.charCodeAt(0) - 48;
          break;
        }

        // '$', '"', ' ', '\''
        if (ch === '$' || ch === '"' || ch === ' ' || ch === '\'') {
          this.postfix = ch;
          break;
        }

        this.params.push(this.currentParam);
        this.currentParam = 0;

        // ';'
        if (ch === ';') break;

        this.state = normal;

        switch (ch) {
          // CSI Ps A
          // Cursor Up Ps Times (default = 1) (CUU).
          case 'A':
            this.cursorUp(this.params);
            break;

          // CSI Ps B
          // Cursor Down Ps Times (default = 1) (CUD).
          case 'B':
            this.cursorDown(this.params);
            break;

          // CSI Ps C
          // Cursor Forward Ps Times (default = 1) (CUF).
          case 'C':
            this.cursorForward(this.params);
            break;

          // CSI Ps D
          // Cursor Backward Ps Times (default = 1) (CUB).
          case 'D':
            this.cursorBackward(this.params);
            break;

          // CSI Ps ; Ps H
          // Cursor Position [row;column] (default = [1,1]) (CUP).
          case 'H':
            this.cursorPos(this.params);
            break;

          // CSI Ps J  Erase in Display (ED).
          case 'J':
            this.eraseInDisplay(this.params);
            break;

          // CSI Ps K  Erase in Line (EL).
          case 'K':
            this.eraseInLine(this.params);
            break;

          // CSI Pm m  Character Attributes (SGR).
          case 'm':
            if (!this.prefix) {
              this.charAttributes(this.params);
            }
            break;

          // CSI Ps n  Device Status Report (DSR).
          case 'n':
            if (!this.prefix) {
              this.deviceStatus(this.params);
            }
            break;

          /**
           * Additions
           */

          // CSI Ps @
          // Insert Ps (Blank) Character(s) (default = 1) (ICH).
          case '@':
            this.insertChars(this.params);
            break;

          // CSI Ps E
          // Cursor Next Line Ps Times (default = 1) (CNL).
          case 'E':
            this.cursorNextLine(this.params);
            break;

          // CSI Ps F
          // Cursor Preceding Line Ps Times (default = 1) (CNL).
          case 'F':
            this.cursorPrecedingLine(this.params);
            break;

          // CSI Ps G
          // Cursor Character Absolute  [column] (default = [row,1]) (CHA).
          case 'G':
            this.cursorCharAbsolute(this.params);
            break;

          // CSI Ps L
          // Insert Ps Line(s) (default = 1) (IL).
          case 'L':
            this.insertLines(this.params);
            break;

          // CSI Ps M
          // Delete Ps Line(s) (default = 1) (DL).
          case 'M':
            this.deleteLines(this.params);
            break;

          // CSI Ps P
          // Delete Ps Character(s) (default = 1) (DCH).
          case 'P':
            this.deleteChars(this.params);
            break;

          // CSI Ps X
          // Erase Ps Character(s) (default = 1) (ECH).
          case 'X':
            this.eraseChars(this.params);
            break;

          // CSI Pm `  Character Position Absolute
          //   [column] (default = [row,1]) (HPA).
          case '`':
            this.charPosAbsolute(this.params);
            break;

          // 141 61 a * HPR -
          // Horizontal Position Relative
          case 'a':
            this.HPositionRelative(this.params);
            break;

          // CSI P s c
          // Send Device Attributes (Primary DA).
          // CSI > P s c
          // Send Device Attributes (Secondary DA)
          case 'c':
            this.sendDeviceAttributes(this.params);
            break;

          // CSI Pm d
          // Line Position Absolute  [row] (default = [1,column]) (VPA).
          case 'd':
            this.linePosAbsolute(this.params);
            break;

          // 145 65 e * VPR - Vertical Position Relative
          case 'e':
            this.VPositionRelative(this.params);
            break;

          // CSI Ps ; Ps f
          //   Horizontal and Vertical Position [row;column] (default =
          //   [1,1]) (HVP).
          case 'f':
            this.HVPosition(this.params);
            break;

          // CSI Pm h  Set Mode (SM).
          // CSI ? Pm h - mouse escape codes, cursor escape codes
          case 'h':
            this.setMode(this.params);
            break;

          // CSI Pm l  Reset Mode (RM).
          // CSI ? Pm l
          case 'l':
            this.resetMode(this.params);
            break;

          // CSI Ps ; Ps r
          //   Set Scrolling Region [top;bottom] (default = full size of win-
          //   dow) (DECSTBM).
          // CSI ? Pm r
          case 'r':
            this.setScrollRegion(this.params);
            break;

          // CSI s
          //   Save cursor (ANSI.SYS).
          case 's':
            this.saveCursor(this.params);
            break;

          // CSI u
          //   Restore cursor (ANSI.SYS).
          case 'u':
            this.restoreCursor(this.params);
            break;

          /**
           * Lesser Used
           */

          // CSI Ps I
          // Cursor Forward Tabulation Ps tab stops (default = 1) (CHT).
          case 'I':
            this.cursorForwardTab(this.params);
            break;

          // CSI Ps S  Scroll up Ps lines (default = 1) (SU).
          case 'S':
            this.scrollUp(this.params);
            break;

          // CSI Ps T  Scroll down Ps lines (default = 1) (SD).
          // CSI Ps ; Ps ; Ps ; Ps ; Ps T
          // CSI > Ps; Ps T
          case 'T':
            // if (this.prefix === '>') {
            //   this.resetTitleModes(this.params);
            //   break;
            // }
            // if (this.params.length > 2) {
            //   this.initMouseTracking(this.params);
            //   break;
            // }
            if (this.params.length < 2 && !this.prefix) {
              this.scrollDown(this.params);
            }
            break;

          // CSI Ps Z
          // Cursor Backward Tabulation Ps tab stops (default = 1) (CBT).
          case 'Z':
            this.cursorBackwardTab(this.params);
            break;

          // CSI Ps b  Repeat the preceding graphic character Ps times (REP).
          case 'b':
            this.repeatPrecedingCharacter(this.params);
            break;

          // CSI Ps g  Tab Clear (TBC).
          case 'g':
            this.tabClear(this.params);
            break;

          // CSI Pm i  Media Copy (MC).
          // CSI ? Pm i
          // case 'i':
          //   this.mediaCopy(this.params);
          //   break;

          // CSI Pm m  Character Attributes (SGR).
          // CSI > Ps; Ps m
          // case 'm': // duplicate
          //   if (this.prefix === '>') {
          //     this.setResources(this.params);
          //   } else {
          //     this.charAttributes(this.params);
          //   }
          //   break;

          // CSI Ps n  Device Status Report (DSR).
          // CSI > Ps n
          // case 'n': // duplicate
          //   if (this.prefix === '>') {
          //     this.disableModifiers(this.params);
          //   } else {
          //     this.deviceStatus(this.params);
          //   }
          //   break;

          // CSI > Ps p  Set pointer mode.
          // CSI ! p   Soft terminal reset (DECSTR).
          // CSI Ps$ p
          //   Request ANSI mode (DECRQM).
          // CSI ? Ps$ p
          //   Request DEC private mode (DECRQM).
          // CSI Ps ; Ps " p
          case 'p':
            switch (this.prefix) {
              // case '>':
              //   this.setPointerMode(this.params);
              //   break;
              case '!':
                this.softReset(this.params);
                break;
              // case '?':
              //   if (this.postfix === '$') {
              //     this.requestPrivateMode(this.params);
              //   }
              //   break;
              // default:
              //   if (this.postfix === '"') {
              //     this.setConformanceLevel(this.params);
              //   } else if (this.postfix === '$') {
              //     this.requestAnsiMode(this.params);
              //   }
              //   break;
            }
            break;

          // CSI Ps q  Load LEDs (DECLL).
          // CSI Ps SP q
          // CSI Ps " q
          // case 'q':
          //   if (this.postfix === ' ') {
          //     this.setCursorStyle(this.params);
          //     break;
          //   }
          //   if (this.postfix === '"') {
          //     this.setCharProtectionAttr(this.params);
          //     break;
          //   }
          //   this.loadLEDs(this.params);
          //   break;

          // CSI Ps ; Ps r
          //   Set Scrolling Region [top;bottom] (default = full size of win-
          //   dow) (DECSTBM).
          // CSI ? Pm r
          // CSI Pt; Pl; Pb; Pr; Ps$ r
          // case 'r': // duplicate
          //   if (this.prefix === '?') {
          //     this.restorePrivateValues(this.params);
          //   } else if (this.postfix === '$') {
          //     this.setAttrInRectangle(this.params);
          //   } else {
          //     this.setScrollRegion(this.params);
          //   }
          //   break;

          // CSI s     Save cursor (ANSI.SYS).
          // CSI ? Pm s
          // case 's': // duplicate
          //   if (this.prefix === '?') {
          //     this.savePrivateValues(this.params);
          //   } else {
          //     this.saveCursor(this.params);
          //   }
          //   break;

          // CSI Ps ; Ps ; Ps t
          // CSI Pt; Pl; Pb; Pr; Ps$ t
          // CSI > Ps; Ps t
          // CSI Ps SP t
          // case 't':
          //   if (this.postfix === '$') {
          //     this.reverseAttrInRectangle(this.params);
          //   } else if (this.postfix === ' ') {
          //     this.setWarningBellVolume(this.params);
          //   } else {
          //     if (this.prefix === '>') {
          //       this.setTitleModeFeature(this.params);
          //     } else {
          //       this.manipulateWindow(this.params);
          //     }
          //   }
          //   break;

          // CSI u     Restore cursor (ANSI.SYS).
          // CSI Ps SP u
          // case 'u': // duplicate
          //   if (this.postfix === ' ') {
          //     this.setMarginBellVolume(this.params);
          //   } else {
          //     this.restoreCursor(this.params);
          //   }
          //   break;

          // CSI Pt; Pl; Pb; Pr; Pp; Pt; Pl; Pp$ v
          // case 'v':
          //   if (this.postfix === '$') {
          //     this.copyRectagle(this.params);
          //   }
          //   break;

          // CSI Pt ; Pl ; Pb ; Pr ' w
          // case 'w':
          //   if (this.postfix === '\'') {
          //     this.enableFilterRectangle(this.params);
          //   }
          //   break;

          // CSI Ps x  Request Terminal Parameters (DECREQTPARM).
          // CSI Ps x  Select Attribute Change Extent (DECSACE).
          // CSI Pc; Pt; Pl; Pb; Pr$ x
          // case 'x':
          //   if (this.postfix === '$') {
          //     this.fillRectangle(this.params);
          //   } else {
          //     this.requestParameters(this.params);
          //     //this.__(this.params);
          //   }
          //   break;

          // CSI Ps ; Pu ' z
          // CSI Pt; Pl; Pb; Pr$ z
          // case 'z':
          //   if (this.postfix === '\'') {
          //     this.enableLocatorReporting(this.params);
          //   } else if (this.postfix === '$') {
          //     this.eraseRectangle(this.params);
          //   }
          //   break;

          // CSI Pm ' {
          // CSI Pt; Pl; Pb; Pr$ {
          // case '{':
          //   if (this.postfix === '\'') {
          //     this.setLocatorEvents(this.params);
          //   } else if (this.postfix === '$') {
          //     this.selectiveEraseRectangle(this.params);
          //   }
          //   break;

          // CSI Ps ' |
          // case '|':
          //   if (this.postfix === '\'') {
          //     this.requestLocatorPosition(this.params);
          //   }
          //   break;

          // CSI P m SP }
          // Insert P s Column(s) (default = 1) (DECIC), VT420 and up.
          // case '}':
          //   if (this.postfix === ' ') {
          //     this.insertColumns(this.params);
          //   }
          //   break;

          // CSI P m SP ~
          // Delete P s Column(s) (default = 1) (DECDC), VT420 and up
          // case '~':
          //   if (this.postfix === ' ') {
          //     this.deleteColumns(this.params);
          //   }
          //   break;

          default:
            this.error('Unknown CSI code: %s.', ch);
            break;
        }

        this.prefix = '';
        this.postfix = '';
        break;

      case dcs:
        if (ch === '\x1b' || ch === '\x07') {
          if (ch === '\x1b') i++;

          switch (this.prefix) {
            // User-Defined Keys (DECUDK).
            case '':
              break;

            // Request Status String (DECRQSS).
            // test: echo -e '\eP$q"p\e\\'
            case '$q':
              var pt = this.currentParam
                , valid = false;

              switch (pt) {
                // DECSCA
                case '"q':
                  pt = '0"q';
                  break;

                // DECSCL
                case '"p':
                  pt = '61"p';
                  break;

                // DECSTBM
                case 'r':
                  pt = ''
                    + (this.scrollTop + 1)
                    + ';'
                    + (this.scrollBottom + 1)
                    + 'r';
                  break;

                // SGR
                case 'm':
                  pt = '0m';
                  break;

                default:
                  this.error('Unknown DCS Pt: %s.', pt);
                  pt = '';
                  break;
              }

              this.send('\x1bP' + +valid + '$r' + pt + '\x1b\\');
              break;

            // Set Termcap/Terminfo Data (xterm, experimental).
            case '+p':
              break;

            // Request Termcap/Terminfo String (xterm, experimental)
            // Regular xterm does not even respond to this sequence.
            // This can cause a small glitch in vim.
            // test: echo -ne '\eP+q6b64\e\\'
            case '+q':
              var pt = this.currentParam
                , valid = false;

              this.send('\x1bP' + +valid + '+r' + pt + '\x1b\\');
              break;

            default:
              this.error('Unknown DCS prefix: %s.', this.prefix);
              break;
          }

          this.currentParam = 0;
          this.prefix = '';
          this.state = normal;
        } else if (!this.currentParam) {
          if (!this.prefix && ch !== '$' && ch !== '+') {
            this.currentParam = ch;
          } else if (this.prefix.length === 2) {
            this.currentParam = ch;
          } else {
            this.prefix += ch;
          }
        } else {
          this.currentParam += ch;
        }
        break;

      case ignore:
        // For PM and APC.
        if (ch === '\x1b' || ch === '\x07') {
          if (ch === '\x1b') i++;
          this.state = normal;
        }
        break;
    }
  }

  this.updateRange(this.y);
  this.refresh(this.refreshStart, this.refreshEnd);
};

Terminal.prototype.writeln = function(data) {
  this.write(data + '\r\n');
};

// Key Resources:
// https://developer.mozilla.org/en-US/docs/DOM/KeyboardEvent
Terminal.prototype.keyDown = function(ev) {
  var self = this
    , key;

  switch (ev.keyCode) {
    // backspace
    case 8:
      if (ev.shiftKey) {
        key = '\x08'; // ^H
        break;
      }
      key = '\x7f'; // ^?
      break;
    // tab
    case 9:
      if (ev.shiftKey) {
        key = '\x1b[Z';
        break;
      }
      key = '\t';
      break;
    // return/enter
    case 13:
      key = '\r';
      break;
    // escape
    case 27:
      key = '\x1b';
      break;
    // left-arrow
    case 37:
      if (this.applicationCursor) {
        key = '\x1bOD'; // SS3 as ^[O for 7-bit
        //key = '\x8fD'; // SS3 as 0x8f for 8-bit
        break;
      }
      key = '\x1b[D';
      break;
    // right-arrow
    case 39:
      if (this.applicationCursor) {
        key = '\x1bOC';
        break;
      }
      key = '\x1b[C';
      break;
    // up-arrow
    case 38:
      if (this.applicationCursor) {
        key = '\x1bOA';
        break;
      }
      if (ev.ctrlKey) {
        this.scrollDisp(-1);
        return cancel(ev);
      } else {
        key = '\x1b[A';
      }
      break;
    // down-arrow
    case 40:
      if (this.applicationCursor) {
        key = '\x1bOB';
        break;
      }
      if (ev.ctrlKey) {
        this.scrollDisp(1);
        return cancel(ev);
      } else {
        key = '\x1b[B';
      }
      break;
    // delete
    case 46:
      key = '\x1b[3~';
      break;
    // insert
    case 45:
      key = '\x1b[2~';
      break;
    // home
    case 36:
      if (this.applicationKeypad) {
        key = '\x1bOH';
        break;
      }
      key = '\x1bOH';
      break;
    // end
    case 35:
      if (this.applicationKeypad) {
        key = '\x1bOF';
        break;
      }
      key = '\x1bOF';
      break;
    // page up
    case 33:
      if (ev.shiftKey) {
        this.scrollDisp(-(this.rows - 1));
        return cancel(ev);
      } else {
        key = '\x1b[5~';
      }
      break;
    // page down
    case 34:
      if (ev.shiftKey) {
        this.scrollDisp(this.rows - 1);
        return cancel(ev);
      } else {
        key = '\x1b[6~';
      }
      break;
    // F1
    case 112:
      key = '\x1bOP';
      break;
    // F2
    case 113:
      key = '\x1bOQ';
      break;
    // F3
    case 114:
      key = '\x1bOR';
      break;
    // F4
    case 115:
      key = '\x1bOS';
      break;
    // F5
    case 116:
      key = '\x1b[15~';
      break;
    // F6
    case 117:
      key = '\x1b[17~';
      break;
    // F7
    case 118:
      key = '\x1b[18~';
      break;
    // F8
    case 119:
      key = '\x1b[19~';
      break;
    // F9
    case 120:
      key = '\x1b[20~';
      break;
    // F10
    case 121:
      key = '\x1b[21~';
      break;
    // F11
    case 122:
      key = '\x1b[23~';
      break;
    // F12
    case 123:
      key = '\x1b[24~';
      break;
    default:
      // a-z and space
      if (ev.ctrlKey) {
        if (ev.keyCode >= 65 && ev.keyCode <= 90) {
          // Ctrl-A
          if (this.screenKeys) {
            if (!this.prefixMode && !this.selectMode && ev.keyCode === 65) {
              this.enterPrefix();
              return cancel(ev);
            }
          }
          // Ctrl-V
          if (this.prefixMode && ev.keyCode === 86) {
            this.leavePrefix();
            return;
          }
          // Ctrl-C
          if ((this.prefixMode || this.selectMode) && ev.keyCode === 67) {
            if (this.visualMode) {
              setTimeout(function() {
                self.leaveVisual();
              }, 1);
            }
            return;
          }
          key = String.fromCharCode(ev.keyCode - 64);
        } else if (ev.keyCode === 32) {
          // NUL
          key = String.fromCharCode(0);
        } else if (ev.keyCode >= 51 && ev.keyCode <= 55) {
          // escape, file sep, group sep, record sep, unit sep
          key = String.fromCharCode(ev.keyCode - 51 + 27);
        } else if (ev.keyCode === 56) {
          // delete
          key = String.fromCharCode(127);
        } else if (ev.keyCode === 219) {
          // ^[ - escape
          key = String.fromCharCode(27);
        } else if (ev.keyCode === 221) {
          // ^] - group sep
          key = String.fromCharCode(29);
        }
      } else if ((!this.isMac && ev.altKey) || (this.isMac && ev.metaKey)) {
        if (ev.keyCode >= 65 && ev.keyCode <= 90) {
          key = '\x1b' + String.fromCharCode(ev.keyCode + 32);
        } else if (ev.keyCode === 192) {
          key = '\x1b`';
        } else if (ev.keyCode >= 48 && ev.keyCode <= 57) {
          key = '\x1b' + (ev.keyCode - 48);
        }
      }
      break;
  }

  if (!key) return true;

  if (this.prefixMode) {
    this.leavePrefix();
    return cancel(ev);
  }

  if (this.selectMode) {
    this.keySelect(ev, key);
    return cancel(ev);
  }

  this.emit('keydown', ev);
  this.emit('key', key, ev);

  this.showCursor();
  this.handler(key);

  return cancel(ev);
};

Terminal.prototype.setgLevel = function(g) {
  this.glevel = g;
  this.charset = this.charsets[g];
};

Terminal.prototype.setgCharset = function(g, charset) {
  this.charsets[g] = charset;
  if (this.glevel === g) {
    this.charset = charset;
  }
};

Terminal.prototype.keyPress = function(ev) {
  var key;

  cancel(ev);

  if (ev.charCode) {
    key = ev.charCode;
  } else if (ev.which == null) {
    key = ev.keyCode;
  } else if (ev.which !== 0 && ev.charCode !== 0) {
    key = ev.which;
  } else {
    return false;
  }

  if (!key || ev.ctrlKey || ev.altKey || ev.metaKey) return false;

  key = String.fromCharCode(key);

  if (this.prefixMode) {
    this.leavePrefix();
    this.keyPrefix(ev, key);
    return false;
  }

  if (this.selectMode) {
    this.keySelect(ev, key);
    return false;
  }

  this.emit('keypress', key, ev);
  this.emit('key', key, ev);

  this.showCursor();
  this.handler(key);

  return false;
};

Terminal.prototype.send = function(data) {
  var self = this;

  if (!this.queue) {
    setTimeout(function() {
      self.handler(self.queue);
      self.queue = '';
    }, 1);
  }

  this.queue += data;
};

Terminal.prototype.bell = function() {
  if (!this.visualBell) return;
  var self = this;
  this.element.style.borderColor = 'white';
  setTimeout(function() {
    self.element.style.borderColor = '';
  }, 10);
  if (this.popOnBell) this.focus();
};

Terminal.prototype.log = function() {
  if (!this.debug) return;
  if (!this.context.console || !this.context.console.log) return;
  var args = Array.prototype.slice.call(arguments);
  this.context.console.log.apply(this.context.console, args);
};

Terminal.prototype.error = function() {
  if (!this.debug) return;
  if (!this.context.console || !this.context.console.error) return;
  var args = Array.prototype.slice.call(arguments);
  this.context.console.error.apply(this.context.console, args);
};

Terminal.prototype.resize = function(x, y) {
  var line
    , el
    , i
    , j
    , ch;

  if (x < 1) x = 1;
  if (y < 1) y = 1;

  // resize cols
  j = this.cols;
  if (j < x) {
    ch = [this.defAttr, ' ']; // does xterm use the default attr?
    i = this.lines.length;
    while (i--) {
      while (this.lines[i].length < x) {
        this.lines[i].push(ch);
      }
    }
  } else if (j > x) {
    i = this.lines.length;
    while (i--) {
      while (this.lines[i].length > x) {
        this.lines[i].pop();
      }
    }
  }
  this.setupStops(j);
  this.cols = x;

  // resize rows
  j = this.rows;
  if (j < y) {
    el = this.element;
    while (j++ < y) {
      if (this.lines.length < y + this.ybase) {
        this.lines.push(this.blankLine());
      }
      if (this.children.length < y) {
        line = this.document.createElement('div');
        el.appendChild(line);
        this.children.push(line);
      }
    }
  } else if (j > y) {
    while (j-- > y) {
      if (this.lines.length > y + this.ybase) {
        this.lines.pop();
      }
      if (this.children.length > y) {
        el = this.children.pop();
        if (!el) continue;
        el.parentNode.removeChild(el);
      }
    }
  }
  this.rows = y;

  // make sure the cursor stays on screen
  if (this.y >= y) this.y = y - 1;
  if (this.x >= x) this.x = x - 1;

  this.scrollTop = 0;
  this.scrollBottom = y - 1;

  this.refresh(0, this.rows - 1);

  // it's a real nightmare trying
  // to resize the original
  // screen buffer. just set it
  // to null for now.
  this.normal = null;
};

Terminal.prototype.updateRange = function(y) {
  if (y < this.refreshStart) this.refreshStart = y;
  if (y > this.refreshEnd) this.refreshEnd = y;
  // if (y > this.refreshEnd) {
  //   this.refreshEnd = y;
  //   if (y > this.rows - 1) {
  //     this.refreshEnd = this.rows - 1;
  //   }
  // }
};

Terminal.prototype.maxRange = function() {
  this.refreshStart = 0;
  this.refreshEnd = this.rows - 1;
};

Terminal.prototype.setupStops = function(i) {
  if (i != null) {
    if (!this.tabs[i]) {
      i = this.prevStop(i);
    }
  } else {
    this.tabs = {};
    i = 0;
  }

  for (; i < this.cols; i += 8) {
    this.tabs[i] = true;
  }
};

Terminal.prototype.prevStop = function(x) {
  if (x == null) x = this.x;
  while (!this.tabs[--x] && x > 0);
  return x >= this.cols
    ? this.cols - 1
    : x < 0 ? 0 : x;
};

Terminal.prototype.nextStop = function(x) {
  if (x == null) x = this.x;
  while (!this.tabs[++x] && x < this.cols);
  return x >= this.cols
    ? this.cols - 1
    : x < 0 ? 0 : x;
};

Terminal.prototype.eraseRight = function(x, y) {
  var line = this.lines[this.ybase + y]
    , ch = [this.eraseAttr(), ' ']; // xterm


  for (; x < this.cols; x++) {
    line[x] = ch;
  }

  this.updateRange(y);
};

Terminal.prototype.eraseLeft = function(x, y) {
  var line = this.lines[this.ybase + y]
    , ch = [this.eraseAttr(), ' ']; // xterm

  x++;
  while (x--) line[x] = ch;

  this.updateRange(y);
};

Terminal.prototype.eraseLine = function(y) {
  this.eraseRight(0, y);
};

Terminal.prototype.blankLine = function(cur) {
  var attr = cur
    ? this.eraseAttr()
    : this.defAttr;

  var ch = [attr, ' ']
    , line = []
    , i = 0;

  for (; i < this.cols; i++) {
    line[i] = ch;
  }

  return line;
};

Terminal.prototype.ch = function(cur) {
  return cur
    ? [this.eraseAttr(), ' ']
    : [this.defAttr, ' '];
};

Terminal.prototype.is = function(term) {
  var name = this.termName;
  return (name + '').indexOf(term) === 0;
};

Terminal.prototype.handler = function(data) {
  this.emit('data', data);
};

Terminal.prototype.handleTitle = function(title) {
  this.emit('title', title);
};

/**
 * ESC
 */

// ESC D Index (IND is 0x84).
Terminal.prototype.index = function() {
  this.y++;
  if (this.y > this.scrollBottom) {
    this.y--;
    this.scroll();
  }
  this.state = normal;
};

// ESC M Reverse Index (RI is 0x8d).
Terminal.prototype.reverseIndex = function() {
  var j;
  this.y--;
  if (this.y < this.scrollTop) {
    this.y++;
    // possibly move the code below to term.reverseScroll();
    // test: echo -ne '\e[1;1H\e[44m\eM\e[0m'
    // blankLine(true) is xterm/linux behavior
    this.lines.splice(this.y + this.ybase, 0, this.blankLine(true));
    j = this.rows - 1 - this.scrollBottom;
    this.lines.splice(this.rows - 1 + this.ybase - j + 1, 1);
    // this.maxRange();
    this.updateRange(this.scrollTop);
    this.updateRange(this.scrollBottom);
  }
  this.state = normal;
};

// ESC c Full Reset (RIS).
Terminal.prototype.reset = function() {
  this.options.rows = this.rows;
  this.options.cols = this.cols;
  Terminal.call(this, this.options);
  this.refresh(0, this.rows - 1);
};

// ESC H Tab Set (HTS is 0x88).
Terminal.prototype.tabSet = function() {
  this.tabs[this.x] = true;
  this.state = normal;
};

/**
 * CSI
 */

// CSI Ps A
// Cursor Up Ps Times (default = 1) (CUU).
Terminal.prototype.cursorUp = function(params) {
  var param = params[0];
  if (param < 1) param = 1;
  this.y -= param;
  if (this.y < 0) this.y = 0;
};

// CSI Ps B
// Cursor Down Ps Times (default = 1) (CUD).
Terminal.prototype.cursorDown = function(params) {
  var param = params[0];
  if (param < 1) param = 1;
  this.y += param;
  if (this.y >= this.rows) {
    this.y = this.rows - 1;
  }
};

// CSI Ps C
// Cursor Forward Ps Times (default = 1) (CUF).
Terminal.prototype.cursorForward = function(params) {
  var param = params[0];
  if (param < 1) param = 1;
  this.x += param;
  if (this.x >= this.cols) {
    this.x = this.cols - 1;
  }
};

// CSI Ps D
// Cursor Backward Ps Times (default = 1) (CUB).
Terminal.prototype.cursorBackward = function(params) {
  var param = params[0];
  if (param < 1) param = 1;
  this.x -= param;
  if (this.x < 0) this.x = 0;
};

// CSI Ps ; Ps H
// Cursor Position [row;column] (default = [1,1]) (CUP).
Terminal.prototype.cursorPos = function(params) {
  var row, col;

  row = params[0] - 1;

  if (params.length >= 2) {
    col = params[1] - 1;
  } else {
    col = 0;
  }

  if (row < 0) {
    row = 0;
  } else if (row >= this.rows) {
    row = this.rows - 1;
  }

  if (col < 0) {
    col = 0;
  } else if (col >= this.cols) {
    col = this.cols - 1;
  }

  this.x = col;
  this.y = row;
};

// CSI Ps J  Erase in Display (ED).
//     Ps = 0  -> Erase Below (default).
//     Ps = 1  -> Erase Above.
//     Ps = 2  -> Erase All.
//     Ps = 3  -> Erase Saved Lines (xterm).
// CSI ? Ps J
//   Erase in Display (DECSED).
//     Ps = 0  -> Selective Erase Below (default).
//     Ps = 1  -> Selective Erase Above.
//     Ps = 2  -> Selective Erase All.
Terminal.prototype.eraseInDisplay = function(params) {
  var j;
  switch (params[0]) {
    case 0:
      this.eraseRight(this.x, this.y);
      j = this.y + 1;
      for (; j < this.rows; j++) {
        this.eraseLine(j);
      }
      break;
    case 1:
      this.eraseLeft(this.x, this.y);
      j = this.y;
      while (j--) {
        this.eraseLine(j);
      }
      break;
    case 2:
      j = this.rows;
      while (j--) this.eraseLine(j);
      break;
    case 3:
      ; // no saved lines
      break;
  }
};

// CSI Ps K  Erase in Line (EL).
//     Ps = 0  -> Erase to Right (default).
//     Ps = 1  -> Erase to Left.
//     Ps = 2  -> Erase All.
// CSI ? Ps K
//   Erase in Line (DECSEL).
//     Ps = 0  -> Selective Erase to Right (default).
//     Ps = 1  -> Selective Erase to Left.
//     Ps = 2  -> Selective Erase All.
Terminal.prototype.eraseInLine = function(params) {
  switch (params[0]) {
    case 0:
      this.eraseRight(this.x, this.y);
      break;
    case 1:
      this.eraseLeft(this.x, this.y);
      break;
    case 2:
      this.eraseLine(this.y);
      break;
  }
};

// CSI Pm m  Character Attributes (SGR).
//     Ps = 0  -> Normal (default).
//     Ps = 1  -> Bold.
//     Ps = 4  -> Underlined.
//     Ps = 5  -> Blink (appears as Bold).
//     Ps = 7  -> Inverse.
//     Ps = 8  -> Invisible, i.e., hidden (VT300).
//     Ps = 2 2  -> Normal (neither bold nor faint).
//     Ps = 2 4  -> Not underlined.
//     Ps = 2 5  -> Steady (not blinking).
//     Ps = 2 7  -> Positive (not inverse).
//     Ps = 2 8  -> Visible, i.e., not hidden (VT300).
//     Ps = 3 0  -> Set foreground color to Black.
//     Ps = 3 1  -> Set foreground color to Red.
//     Ps = 3 2  -> Set foreground color to Green.
//     Ps = 3 3  -> Set foreground color to Yellow.
//     Ps = 3 4  -> Set foreground color to Blue.
//     Ps = 3 5  -> Set foreground color to Magenta.
//     Ps = 3 6  -> Set foreground color to Cyan.
//     Ps = 3 7  -> Set foreground color to White.
//     Ps = 3 9  -> Set foreground color to default (original).
//     Ps = 4 0  -> Set background color to Black.
//     Ps = 4 1  -> Set background color to Red.
//     Ps = 4 2  -> Set background color to Green.
//     Ps = 4 3  -> Set background color to Yellow.
//     Ps = 4 4  -> Set background color to Blue.
//     Ps = 4 5  -> Set background color to Magenta.
//     Ps = 4 6  -> Set background color to Cyan.
//     Ps = 4 7  -> Set background color to White.
//     Ps = 4 9  -> Set background color to default (original).

//   If 16-color support is compiled, the following apply.  Assume
//   that xterm's resources are set so that the ISO color codes are
//   the first 8 of a set of 16.  Then the aixterm colors are the
//   bright versions of the ISO colors:
//     Ps = 9 0  -> Set foreground color to Black.
//     Ps = 9 1  -> Set foreground color to Red.
//     Ps = 9 2  -> Set foreground color to Green.
//     Ps = 9 3  -> Set foreground color to Yellow.
//     Ps = 9 4  -> Set foreground color to Blue.
//     Ps = 9 5  -> Set foreground color to Magenta.
//     Ps = 9 6  -> Set foreground color to Cyan.
//     Ps = 9 7  -> Set foreground color to White.
//     Ps = 1 0 0  -> Set background color to Black.
//     Ps = 1 0 1  -> Set background color to Red.
//     Ps = 1 0 2  -> Set background color to Green.
//     Ps = 1 0 3  -> Set background color to Yellow.
//     Ps = 1 0 4  -> Set background color to Blue.
//     Ps = 1 0 5  -> Set background color to Magenta.
//     Ps = 1 0 6  -> Set background color to Cyan.
//     Ps = 1 0 7  -> Set background color to White.

//   If xterm is compiled with the 16-color support disabled, it
//   supports the following, from rxvt:
//     Ps = 1 0 0  -> Set foreground and background color to
//     default.

//   If 88- or 256-color support is compiled, the following apply.
//     Ps = 3 8  ; 5  ; Ps -> Set foreground color to the second
//     Ps.
//     Ps = 4 8  ; 5  ; Ps -> Set background color to the second
//     Ps.
Terminal.prototype.charAttributes = function(params) {
  // Optimize a single SGR0.
  if (params.length === 1 && params[0] === 0) {
    this.curAttr = this.defAttr;
    return;
  }

  var l = params.length
    , i = 0
    , flags = this.curAttr >> 18
    , fg = (this.curAttr >> 9) & 0x1ff
    , bg = this.curAttr & 0x1ff
    , p;

  for (; i < l; i++) {
    p = params[i];
    if (p >= 30 && p <= 37) {
      // fg color 8
      fg = p - 30;
    } else if (p >= 40 && p <= 47) {
      // bg color 8
      bg = p - 40;
    } else if (p >= 90 && p <= 97) {
      // fg color 16
      p += 8;
      fg = p - 90;
    } else if (p >= 100 && p <= 107) {
      // bg color 16
      p += 8;
      bg = p - 100;
    } else if (p === 0) {
      // default
      flags = this.defAttr >> 18;
      fg = (this.defAttr >> 9) & 0x1ff;
      bg = this.defAttr & 0x1ff;
      // flags = 0;
      // fg = 0x1ff;
      // bg = 0x1ff;
    } else if (p === 1) {
      // bold text
      flags |= 1;
    } else if (p === 4) {
      // underlined text
      flags |= 2;
    } else if (p === 5) {
      // blink
      flags |= 4;
    } else if (p === 7) {
      // inverse and positive
      // test with: echo -e '\e[31m\e[42mhello\e[7mworld\e[27mhi\e[m'
      flags |= 8;
    } else if (p === 8) {
      // invisible
      flags |= 16;
    } else if (p === 22) {
      // not bold
      flags &= ~1;
    } else if (p === 24) {
      // not underlined
      flags &= ~2;
    } else if (p === 25) {
      // not blink
      flags &= ~4;
    } else if (p === 27) {
      // not inverse
      flags &= ~8;
    } else if (p === 28) {
      // not invisible
      flags &= ~16;
    } else if (p === 39) {
      // reset fg
      fg = (this.defAttr >> 9) & 0x1ff;
    } else if (p === 49) {
      // reset bg
      bg = this.defAttr & 0x1ff;
    } else if (p === 38) {
      // fg color 256
      if (params[i + 1] === 2) {
        i += 2;
        fg = matchColor(
          params[i] & 0xff,
          params[i + 1] & 0xff,
          params[i + 2] & 0xff);
        if (fg === -1) fg = 0x1ff;
        i += 2;
      } else if (params[i + 1] === 5) {
        i += 2;
        p = params[i] & 0xff;
        fg = p;
      }
    } else if (p === 48) {
      // bg color 256
      if (params[i + 1] === 2) {
        i += 2;
        bg = matchColor(
          params[i] & 0xff,
          params[i + 1] & 0xff,
          params[i + 2] & 0xff);
        if (bg === -1) bg = 0x1ff;
        i += 2;
      } else if (params[i + 1] === 5) {
        i += 2;
        p = params[i] & 0xff;
        bg = p;
      }
    } else if (p === 100) {
      // reset fg/bg
      fg = (this.defAttr >> 9) & 0x1ff;
      bg = this.defAttr & 0x1ff;
    } else {
      this.error('Unknown SGR attribute: %d.', p);
    }
  }

  this.curAttr = (flags << 18) | (fg << 9) | bg;
};

// CSI Ps n  Device Status Report (DSR).
//     Ps = 5  -> Status Report.  Result (``OK'') is
//   CSI 0 n
//     Ps = 6  -> Report Cursor Position (CPR) [row;column].
//   Result is
//   CSI r ; c R
// CSI ? Ps n
//   Device Status Report (DSR, DEC-specific).
//     Ps = 6  -> Report Cursor Position (CPR) [row;column] as CSI
//     ? r ; c R (assumes page is zero).
//     Ps = 1 5  -> Report Printer status as CSI ? 1 0  n  (ready).
//     or CSI ? 1 1  n  (not ready).
//     Ps = 2 5  -> Report UDK status as CSI ? 2 0  n  (unlocked)
//     or CSI ? 2 1  n  (locked).
//     Ps = 2 6  -> Report Keyboard status as
//   CSI ? 2 7  ;  1  ;  0  ;  0  n  (North American).
//   The last two parameters apply to VT400 & up, and denote key-
//   board ready and LK01 respectively.
//     Ps = 5 3  -> Report Locator status as
//   CSI ? 5 3  n  Locator available, if compiled-in, or
//   CSI ? 5 0  n  No Locator, if not.
Terminal.prototype.deviceStatus = function(params) {
  if (!this.prefix) {
    switch (params[0]) {
      case 5:
        // status report
        this.send('\x1b[0n');
        break;
      case 6:
        // cursor position
        this.send('\x1b['
          + (this.y + 1)
          + ';'
          + (this.x + 1)
          + 'R');
        break;
    }
  } else if (this.prefix === '?') {
    // modern xterm doesnt seem to
    // respond to any of these except ?6, 6, and 5
    switch (params[0]) {
      case 6:
        // cursor position
        this.send('\x1b[?'
          + (this.y + 1)
          + ';'
          + (this.x + 1)
          + 'R');
        break;
      case 15:
        // no printer
        // this.send('\x1b[?11n');
        break;
      case 25:
        // dont support user defined keys
        // this.send('\x1b[?21n');
        break;
      case 26:
        // north american keyboard
        // this.send('\x1b[?27;1;0;0n');
        break;
      case 53:
        // no dec locator/mouse
        // this.send('\x1b[?50n');
        break;
    }
  }
};

/**
 * Additions
 */

// CSI Ps @
// Insert Ps (Blank) Character(s) (default = 1) (ICH).
Terminal.prototype.insertChars = function(params) {
  var param, row, j, ch;

  param = params[0];
  if (param < 1) param = 1;

  row = this.y + this.ybase;
  j = this.x;
  ch = [this.eraseAttr(), ' ']; // xterm

  while (param-- && j < this.cols) {
    this.lines[row].splice(j++, 0, ch);
    this.lines[row].pop();
  }
};

// CSI Ps E
// Cursor Next Line Ps Times (default = 1) (CNL).
// same as CSI Ps B ?
Terminal.prototype.cursorNextLine = function(params) {
  var param = params[0];
  if (param < 1) param = 1;
  this.y += param;
  if (this.y >= this.rows) {
    this.y = this.rows - 1;
  }
  this.x = 0;
};

// CSI Ps F
// Cursor Preceding Line Ps Times (default = 1) (CNL).
// reuse CSI Ps A ?
Terminal.prototype.cursorPrecedingLine = function(params) {
  var param = params[0];
  if (param < 1) param = 1;
  this.y -= param;
  if (this.y < 0) this.y = 0;
  this.x = 0;
};

// CSI Ps G
// Cursor Character Absolute  [column] (default = [row,1]) (CHA).
Terminal.prototype.cursorCharAbsolute = function(params) {
  var param = params[0];
  if (param < 1) param = 1;
  this.x = param - 1;
};

// CSI Ps L
// Insert Ps Line(s) (default = 1) (IL).
Terminal.prototype.insertLines = function(params) {
  var param, row, j;

  param = params[0];
  if (param < 1) param = 1;
  row = this.y + this.ybase;

  j = this.rows - 1 - this.scrollBottom;
  j = this.rows - 1 + this.ybase - j + 1;

  while (param--) {
    // test: echo -e '\e[44m\e[1L\e[0m'
    // blankLine(true) - xterm/linux behavior
    this.lines.splice(row, 0, this.blankLine(true));
    this.lines.splice(j, 1);
  }

  // this.maxRange();
  this.updateRange(this.y);
  this.updateRange(this.scrollBottom);
};

// CSI Ps M
// Delete Ps Line(s) (default = 1) (DL).
Terminal.prototype.deleteLines = function(params) {
  var param, row, j;

  param = params[0];
  if (param < 1) param = 1;
  row = this.y + this.ybase;

  j = this.rows - 1 - this.scrollBottom;
  j = this.rows - 1 + this.ybase - j;

  while (param--) {
    // test: echo -e '\e[44m\e[1M\e[0m'
    // blankLine(true) - xterm/linux behavior
    this.lines.splice(j + 1, 0, this.blankLine(true));
    this.lines.splice(row, 1);
  }

  // this.maxRange();
  this.updateRange(this.y);
  this.updateRange(this.scrollBottom);
};

// CSI Ps P
// Delete Ps Character(s) (default = 1) (DCH).
Terminal.prototype.deleteChars = function(params) {
  var param, row, ch;

  param = params[0];
  if (param < 1) param = 1;

  row = this.y + this.ybase;
  ch = [this.eraseAttr(), ' ']; // xterm

  while (param--) {
    this.lines[row].splice(this.x, 1);
    this.lines[row].push(ch);
  }
};

// CSI Ps X
// Erase Ps Character(s) (default = 1) (ECH).
Terminal.prototype.eraseChars = function(params) {
  var param, row, j, ch;

  param = params[0];
  if (param < 1) param = 1;

  row = this.y + this.ybase;
  j = this.x;
  ch = [this.eraseAttr(), ' ']; // xterm

  while (param-- && j < this.cols) {
    this.lines[row][j++] = ch;
  }
};

// CSI Pm `  Character Position Absolute
//   [column] (default = [row,1]) (HPA).
Terminal.prototype.charPosAbsolute = function(params) {
  var param = params[0];
  if (param < 1) param = 1;
  this.x = param - 1;
  if (this.x >= this.cols) {
    this.x = this.cols - 1;
  }
};

// 141 61 a * HPR -
// Horizontal Position Relative
// reuse CSI Ps C ?
Terminal.prototype.HPositionRelative = function(params) {
  var param = params[0];
  if (param < 1) param = 1;
  this.x += param;
  if (this.x >= this.cols) {
    this.x = this.cols - 1;
  }
};

// CSI Ps c  Send Device Attributes (Primary DA).
//     Ps = 0  or omitted -> request attributes from terminal.  The
//     response depends on the decTerminalID resource setting.
//     -> CSI ? 1 ; 2 c  (``VT100 with Advanced Video Option'')
//     -> CSI ? 1 ; 0 c  (``VT101 with No Options'')
//     -> CSI ? 6 c  (``VT102'')
//     -> CSI ? 6 0 ; 1 ; 2 ; 6 ; 8 ; 9 ; 1 5 ; c  (``VT220'')
//   The VT100-style response parameters do not mean anything by
//   themselves.  VT220 parameters do, telling the host what fea-
//   tures the terminal supports:
//     Ps = 1  -> 132-columns.
//     Ps = 2  -> Printer.
//     Ps = 6  -> Selective erase.
//     Ps = 8  -> User-defined keys.
//     Ps = 9  -> National replacement character sets.
//     Ps = 1 5  -> Technical characters.
//     Ps = 2 2  -> ANSI color, e.g., VT525.
//     Ps = 2 9  -> ANSI text locator (i.e., DEC Locator mode).
// CSI > Ps c
//   Send Device Attributes (Secondary DA).
//     Ps = 0  or omitted -> request the terminal's identification
//     code.  The response depends on the decTerminalID resource set-
//     ting.  It should apply only to VT220 and up, but xterm extends
//     this to VT100.
//     -> CSI  > Pp ; Pv ; Pc c
//   where Pp denotes the terminal type
//     Pp = 0  -> ``VT100''.
//     Pp = 1  -> ``VT220''.
//   and Pv is the firmware version (for xterm, this was originally
//   the XFree86 patch number, starting with 95).  In a DEC termi-
//   nal, Pc indicates the ROM cartridge registration number and is
//   always zero.
// More information:
//   xterm/charproc.c - line 2012, for more information.
//   vim responds with ^[[?0c or ^[[?1c after the terminal's response (?)
Terminal.prototype.sendDeviceAttributes = function(params) {
  if (params[0] > 0) return;

  if (!this.prefix) {
    if (this.is('xterm')
        || this.is('rxvt-unicode')
        || this.is('screen')) {
      this.send('\x1b[?1;2c');
    } else if (this.is('linux')) {
      this.send('\x1b[?6c');
    }
  } else if (this.prefix === '>') {
    // xterm and urxvt
    // seem to spit this
    // out around ~370 times (?).
    if (this.is('xterm')) {
      this.send('\x1b[>0;276;0c');
    } else if (this.is('rxvt-unicode')) {
      this.send('\x1b[>85;95;0c');
    } else if (this.is('linux')) {
      // not supported by linux console.
      // linux console echoes parameters.
      this.send(params[0] + 'c');
    } else if (this.is('screen')) {
      this.send('\x1b[>83;40003;0c');
    }
  }
};

// CSI Pm d
// Line Position Absolute  [row] (default = [1,column]) (VPA).
Terminal.prototype.linePosAbsolute = function(params) {
  var param = params[0];
  if (param < 1) param = 1;
  this.y = param - 1;
  if (this.y >= this.rows) {
    this.y = this.rows - 1;
  }
};

// 145 65 e * VPR - Vertical Position Relative
// reuse CSI Ps B ?
Terminal.prototype.VPositionRelative = function(params) {
  var param = params[0];
  if (param < 1) param = 1;
  this.y += param;
  if (this.y >= this.rows) {
    this.y = this.rows - 1;
  }
};

// CSI Ps ; Ps f
//   Horizontal and Vertical Position [row;column] (default =
//   [1,1]) (HVP).
Terminal.prototype.HVPosition = function(params) {
  if (params[0] < 1) params[0] = 1;
  if (params[1] < 1) params[1] = 1;

  this.y = params[0] - 1;
  if (this.y >= this.rows) {
    this.y = this.rows - 1;
  }

  this.x = params[1] - 1;
  if (this.x >= this.cols) {
    this.x = this.cols - 1;
  }
};

// CSI Pm h  Set Mode (SM).
//     Ps = 2  -> Keyboard Action Mode (AM).
//     Ps = 4  -> Insert Mode (IRM).
//     Ps = 1 2  -> Send/receive (SRM).
//     Ps = 2 0  -> Automatic Newline (LNM).
// CSI ? Pm h
//   DEC Private Mode Set (DECSET).
//     Ps = 1  -> Application Cursor Keys (DECCKM).
//     Ps = 2  -> Designate USASCII for character sets G0-G3
//     (DECANM), and set VT100 mode.
//     Ps = 3  -> 132 Column Mode (DECCOLM).
//     Ps = 4  -> Smooth (Slow) Scroll (DECSCLM).
//     Ps = 5  -> Reverse Video (DECSCNM).
//     Ps = 6  -> Origin Mode (DECOM).
//     Ps = 7  -> Wraparound Mode (DECAWM).
//     Ps = 8  -> Auto-repeat Keys (DECARM).
//     Ps = 9  -> Send Mouse X & Y on button press.  See the sec-
//     tion Mouse Tracking.
//     Ps = 1 0  -> Show toolbar (rxvt).
//     Ps = 1 2  -> Start Blinking Cursor (att610).
//     Ps = 1 8  -> Print form feed (DECPFF).
//     Ps = 1 9  -> Set print extent to full screen (DECPEX).
//     Ps = 2 5  -> Show Cursor (DECTCEM).
//     Ps = 3 0  -> Show scrollbar (rxvt).
//     Ps = 3 5  -> Enable font-shifting functions (rxvt).
//     Ps = 3 8  -> Enter Tektronix Mode (DECTEK).
//     Ps = 4 0  -> Allow 80 -> 132 Mode.
//     Ps = 4 1  -> more(1) fix (see curses resource).
//     Ps = 4 2  -> Enable Nation Replacement Character sets (DECN-
//     RCM).
//     Ps = 4 4  -> Turn On Margin Bell.
//     Ps = 4 5  -> Reverse-wraparound Mode.
//     Ps = 4 6  -> Start Logging.  This is normally disabled by a
//     compile-time option.
//     Ps = 4 7  -> Use Alternate Screen Buffer.  (This may be dis-
//     abled by the titeInhibit resource).
//     Ps = 6 6  -> Application keypad (DECNKM).
//     Ps = 6 7  -> Backarrow key sends backspace (DECBKM).
//     Ps = 1 0 0 0  -> Send Mouse X & Y on button press and
//     release.  See the section Mouse Tracking.
//     Ps = 1 0 0 1  -> Use Hilite Mouse Tracking.
//     Ps = 1 0 0 2  -> Use Cell Motion Mouse Tracking.
//     Ps = 1 0 0 3  -> Use All Motion Mouse Tracking.
//     Ps = 1 0 0 4  -> Send FocusIn/FocusOut events.
//     Ps = 1 0 0 5  -> Enable Extended Mouse Mode.
//     Ps = 1 0 1 0  -> Scroll to bottom on tty output (rxvt).
//     Ps = 1 0 1 1  -> Scroll to bottom on key press (rxvt).
//     Ps = 1 0 3 4  -> Interpret "meta" key, sets eighth bit.
//     (enables the eightBitInput resource).
//     Ps = 1 0 3 5  -> Enable special modifiers for Alt and Num-
//     Lock keys.  (This enables the numLock resource).
//     Ps = 1 0 3 6  -> Send ESC   when Meta modifies a key.  (This
//     enables the metaSendsEscape resource).
//     Ps = 1 0 3 7  -> Send DEL from the editing-keypad Delete
//     key.
//     Ps = 1 0 3 9  -> Send ESC  when Alt modifies a key.  (This
//     enables the altSendsEscape resource).
//     Ps = 1 0 4 0  -> Keep selection even if not highlighted.
//     (This enables the keepSelection resource).
//     Ps = 1 0 4 1  -> Use the CLIPBOARD selection.  (This enables
//     the selectToClipboard resource).
//     Ps = 1 0 4 2  -> Enable Urgency window manager hint when
//     Control-G is received.  (This enables the bellIsUrgent
//     resource).
//     Ps = 1 0 4 3  -> Enable raising of the window when Control-G
//     is received.  (enables the popOnBell resource).
//     Ps = 1 0 4 7  -> Use Alternate Screen Buffer.  (This may be
//     disabled by the titeInhibit resource).
//     Ps = 1 0 4 8  -> Save cursor as in DECSC.  (This may be dis-
//     abled by the titeInhibit resource).
//     Ps = 1 0 4 9  -> Save cursor as in DECSC and use Alternate
//     Screen Buffer, clearing it first.  (This may be disabled by
//     the titeInhibit resource).  This combines the effects of the 1
//     0 4 7  and 1 0 4 8  modes.  Use this with terminfo-based
//     applications rather than the 4 7  mode.
//     Ps = 1 0 5 0  -> Set terminfo/termcap function-key mode.
//     Ps = 1 0 5 1  -> Set Sun function-key mode.
//     Ps = 1 0 5 2  -> Set HP function-key mode.
//     Ps = 1 0 5 3  -> Set SCO function-key mode.
//     Ps = 1 0 6 0  -> Set legacy keyboard emulation (X11R6).
//     Ps = 1 0 6 1  -> Set VT220 keyboard emulation.
//     Ps = 2 0 0 4  -> Set bracketed paste mode.
// Modes:
//   http://vt100.net/docs/vt220-rm/chapter4.html
Terminal.prototype.setMode = function(params) {
  if (typeof params === 'object') {
    var l = params.length
      , i = 0;

    for (; i < l; i++) {
      this.setMode(params[i]);
    }

    return;
  }

  if (!this.prefix) {
    switch (params) {
      case 4:
        this.insertMode = true;
        break;
      case 20:
        //this.convertEol = true;
        break;
    }
  } else if (this.prefix === '?') {
    switch (params) {
      case 1:
        this.applicationCursor = true;
        break;
      case 2:
        this.setgCharset(0, Terminal.charsets.US);
        this.setgCharset(1, Terminal.charsets.US);
        this.setgCharset(2, Terminal.charsets.US);
        this.setgCharset(3, Terminal.charsets.US);
        // set VT100 mode here
        break;
      case 3: // 132 col mode
        this.savedCols = this.cols;
        this.resize(132, this.rows);
        break;
      case 6:
        this.originMode = true;
        break;
      case 7:
        this.wraparoundMode = true;
        break;
      case 12:
        // this.cursorBlink = true;
        break;
      case 66:
        this.log('Serial port requested application keypad.');
        this.applicationKeypad = true;
        break;
      case 9: // X10 Mouse
        // no release, no motion, no wheel, no modifiers.
      case 1000: // vt200 mouse
        // no motion.
        // no modifiers, except control on the wheel.
      case 1002: // button event mouse
      case 1003: // any event mouse
        // any event - sends motion events,
        // even if there is no button held down.
        this.x10Mouse = params === 9;
        this.vt200Mouse = params === 1000;
        this.normalMouse = params > 1000;
        this.mouseEvents = true;
        this.element.style.cursor = 'default';
        this.log('Binding to mouse events.');
        break;
      case 1004: // send focusin/focusout events
        // focusin: ^[[I
        // focusout: ^[[O
        this.sendFocus = true;
        break;
      case 1005: // utf8 ext mode mouse
        this.utfMouse = true;
        // for wide terminals
        // simply encodes large values as utf8 characters
        break;
      case 1006: // sgr ext mode mouse
        this.sgrMouse = true;
        // for wide terminals
        // does not add 32 to fields
        // press: ^[[<b;x;yM
        // release: ^[[<b;x;ym
        break;
      case 1015: // urxvt ext mode mouse
        this.urxvtMouse = true;
        // for wide terminals
        // numbers for fields
        // press: ^[[b;x;yM
        // motion: ^[[b;x;yT
        break;
      case 25: // show cursor
        this.cursorHidden = false;
        break;
      case 1049: // alt screen buffer cursor
        //this.saveCursor();
        ; // FALL-THROUGH
      case 47: // alt screen buffer
      case 1047: // alt screen buffer
        if (!this.normal) {
          var normal = {
            lines: this.lines,
            ybase: this.ybase,
            ydisp: this.ydisp,
            x: this.x,
            y: this.y,
            scrollTop: this.scrollTop,
            scrollBottom: this.scrollBottom,
            tabs: this.tabs
            // XXX save charset(s) here?
            // charset: this.charset,
            // glevel: this.glevel,
            // charsets: this.charsets
          };
          this.reset();
          this.normal = normal;
          this.showCursor();
        }
        break;
    }
  }
};

// CSI Pm l  Reset Mode (RM).
//     Ps = 2  -> Keyboard Action Mode (AM).
//     Ps = 4  -> Replace Mode (IRM).
//     Ps = 1 2  -> Send/receive (SRM).
//     Ps = 2 0  -> Normal Linefeed (LNM).
// CSI ? Pm l
//   DEC Private Mode Reset (DECRST).
//     Ps = 1  -> Normal Cursor Keys (DECCKM).
//     Ps = 2  -> Designate VT52 mode (DECANM).
//     Ps = 3  -> 80 Column Mode (DECCOLM).
//     Ps = 4  -> Jump (Fast) Scroll (DECSCLM).
//     Ps = 5  -> Normal Video (DECSCNM).
//     Ps = 6  -> Normal Cursor Mode (DECOM).
//     Ps = 7  -> No Wraparound Mode (DECAWM).
//     Ps = 8  -> No Auto-repeat Keys (DECARM).
//     Ps = 9  -> Don't send Mouse X & Y on button press.
//     Ps = 1 0  -> Hide toolbar (rxvt).
//     Ps = 1 2  -> Stop Blinking Cursor (att610).
//     Ps = 1 8  -> Don't print form feed (DECPFF).
//     Ps = 1 9  -> Limit print to scrolling region (DECPEX).
//     Ps = 2 5  -> Hide Cursor (DECTCEM).
//     Ps = 3 0  -> Don't show scrollbar (rxvt).
//     Ps = 3 5  -> Disable font-shifting functions (rxvt).
//     Ps = 4 0  -> Disallow 80 -> 132 Mode.
//     Ps = 4 1  -> No more(1) fix (see curses resource).
//     Ps = 4 2  -> Disable Nation Replacement Character sets (DEC-
//     NRCM).
//     Ps = 4 4  -> Turn Off Margin Bell.
//     Ps = 4 5  -> No Reverse-wraparound Mode.
//     Ps = 4 6  -> Stop Logging.  (This is normally disabled by a
//     compile-time option).
//     Ps = 4 7  -> Use Normal Screen Buffer.
//     Ps = 6 6  -> Numeric keypad (DECNKM).
//     Ps = 6 7  -> Backarrow key sends delete (DECBKM).
//     Ps = 1 0 0 0  -> Don't send Mouse X & Y on button press and
//     release.  See the section Mouse Tracking.
//     Ps = 1 0 0 1  -> Don't use Hilite Mouse Tracking.
//     Ps = 1 0 0 2  -> Don't use Cell Motion Mouse Tracking.
//     Ps = 1 0 0 3  -> Don't use All Motion Mouse Tracking.
//     Ps = 1 0 0 4  -> Don't send FocusIn/FocusOut events.
//     Ps = 1 0 0 5  -> Disable Extended Mouse Mode.
//     Ps = 1 0 1 0  -> Don't scroll to bottom on tty output
//     (rxvt).
//     Ps = 1 0 1 1  -> Don't scroll to bottom on key press (rxvt).
//     Ps = 1 0 3 4  -> Don't interpret "meta" key.  (This disables
//     the eightBitInput resource).
//     Ps = 1 0 3 5  -> Disable special modifiers for Alt and Num-
//     Lock keys.  (This disables the numLock resource).
//     Ps = 1 0 3 6  -> Don't send ESC  when Meta modifies a key.
//     (This disables the metaSendsEscape resource).
//     Ps = 1 0 3 7  -> Send VT220 Remove from the editing-keypad
//     Delete key.
//     Ps = 1 0 3 9  -> Don't send ESC  when Alt modifies a key.
//     (This disables the altSendsEscape resource).
//     Ps = 1 0 4 0  -> Do not keep selection when not highlighted.
//     (This disables the keepSelection resource).
//     Ps = 1 0 4 1  -> Use the PRIMARY selection.  (This disables
//     the selectToClipboard resource).
//     Ps = 1 0 4 2  -> Disable Urgency window manager hint when
//     Control-G is received.  (This disables the bellIsUrgent
//     resource).
//     Ps = 1 0 4 3  -> Disable raising of the window when Control-
//     G is received.  (This disables the popOnBell resource).
//     Ps = 1 0 4 7  -> Use Normal Screen Buffer, clearing screen
//     first if in the Alternate Screen.  (This may be disabled by
//     the titeInhibit resource).
//     Ps = 1 0 4 8  -> Restore cursor as in DECRC.  (This may be
//     disabled by the titeInhibit resource).
//     Ps = 1 0 4 9  -> Use Normal Screen Buffer and restore cursor
//     as in DECRC.  (This may be disabled by the titeInhibit
//     resource).  This combines the effects of the 1 0 4 7  and 1 0
//     4 8  modes.  Use this with terminfo-based applications rather
//     than the 4 7  mode.
//     Ps = 1 0 5 0  -> Reset terminfo/termcap function-key mode.
//     Ps = 1 0 5 1  -> Reset Sun function-key mode.
//     Ps = 1 0 5 2  -> Reset HP function-key mode.
//     Ps = 1 0 5 3  -> Reset SCO function-key mode.
//     Ps = 1 0 6 0  -> Reset legacy keyboard emulation (X11R6).
//     Ps = 1 0 6 1  -> Reset keyboard emulation to Sun/PC style.
//     Ps = 2 0 0 4  -> Reset bracketed paste mode.
Terminal.prototype.resetMode = function(params) {
  if (typeof params === 'object') {
    var l = params.length
      , i = 0;

    for (; i < l; i++) {
      this.resetMode(params[i]);
    }

    return;
  }

  if (!this.prefix) {
    switch (params) {
      case 4:
        this.insertMode = false;
        break;
      case 20:
        //this.convertEol = false;
        break;
    }
  } else if (this.prefix === '?') {
    switch (params) {
      case 1:
        this.applicationCursor = false;
        break;
      case 3:
        if (this.cols === 132 && this.savedCols) {
          this.resize(this.savedCols, this.rows);
        }
        delete this.savedCols;
        break;
      case 6:
        this.originMode = false;
        break;
      case 7:
        this.wraparoundMode = false;
        break;
      case 12:
        // this.cursorBlink = false;
        break;
      case 66:
        this.log('Switching back to normal keypad.');
        this.applicationKeypad = false;
        break;
      case 9: // X10 Mouse
      case 1000: // vt200 mouse
      case 1002: // button event mouse
      case 1003: // any event mouse
        this.x10Mouse = false;
        this.vt200Mouse = false;
        this.normalMouse = false;
        this.mouseEvents = false;
        this.element.style.cursor = '';
        break;
      case 1004: // send focusin/focusout events
        this.sendFocus = false;
        break;
      case 1005: // utf8 ext mode mouse
        this.utfMouse = false;
        break;
      case 1006: // sgr ext mode mouse
        this.sgrMouse = false;
        break;
      case 1015: // urxvt ext mode mouse
        this.urxvtMouse = false;
        break;
      case 25: // hide cursor
        this.cursorHidden = true;
        break;
      case 1049: // alt screen buffer cursor
        ; // FALL-THROUGH
      case 47: // normal screen buffer
      case 1047: // normal screen buffer - clearing it first
        if (this.normal) {
          this.lines = this.normal.lines;
          this.ybase = this.normal.ybase;
          this.ydisp = this.normal.ydisp;
          this.x = this.normal.x;
          this.y = this.normal.y;
          this.scrollTop = this.normal.scrollTop;
          this.scrollBottom = this.normal.scrollBottom;
          this.tabs = this.normal.tabs;
          this.normal = null;
          // if (params === 1049) {
          //   this.x = this.savedX;
          //   this.y = this.savedY;
          // }
          this.refresh(0, this.rows - 1);
          this.showCursor();
        }
        break;
    }
  }
};

// CSI Ps ; Ps r
//   Set Scrolling Region [top;bottom] (default = full size of win-
//   dow) (DECSTBM).
// CSI ? Pm r
Terminal.prototype.setScrollRegion = function(params) {
  if (this.prefix) return;
  this.scrollTop = (params[0] || 1) - 1;
  this.scrollBottom = (params[1] || this.rows) - 1;
  this.x = 0;
  this.y = 0;
};

// CSI s
//   Save cursor (ANSI.SYS).
Terminal.prototype.saveCursor = function(params) {
  this.savedX = this.x;
  this.savedY = this.y;
};

// CSI u
//   Restore cursor (ANSI.SYS).
Terminal.prototype.restoreCursor = function(params) {
  this.x = this.savedX || 0;
  this.y = this.savedY || 0;
};

/**
 * Lesser Used
 */

// CSI Ps I
//   Cursor Forward Tabulation Ps tab stops (default = 1) (CHT).
Terminal.prototype.cursorForwardTab = function(params) {
  var param = params[0] || 1;
  while (param--) {
    this.x = this.nextStop();
  }
};

// CSI Ps S  Scroll up Ps lines (default = 1) (SU).
Terminal.prototype.scrollUp = function(params) {
  var param = params[0] || 1;
  while (param--) {
    this.lines.splice(this.ybase + this.scrollTop, 1);
    this.lines.splice(this.ybase + this.scrollBottom, 0, this.blankLine());
  }
  // this.maxRange();
  this.updateRange(this.scrollTop);
  this.updateRange(this.scrollBottom);
};

// CSI Ps T  Scroll down Ps lines (default = 1) (SD).
Terminal.prototype.scrollDown = function(params) {
  var param = params[0] || 1;
  while (param--) {
    this.lines.splice(this.ybase + this.scrollBottom, 1);
    this.lines.splice(this.ybase + this.scrollTop, 0, this.blankLine());
  }
  // this.maxRange();
  this.updateRange(this.scrollTop);
  this.updateRange(this.scrollBottom);
};

// CSI Ps ; Ps ; Ps ; Ps ; Ps T
//   Initiate highlight mouse tracking.  Parameters are
//   [func;startx;starty;firstrow;lastrow].  See the section Mouse
//   Tracking.
Terminal.prototype.initMouseTracking = function(params) {
  // Relevant: DECSET 1001
};

// CSI > Ps; Ps T
//   Reset one or more features of the title modes to the default
//   value.  Normally, "reset" disables the feature.  It is possi-
//   ble to disable the ability to reset features by compiling a
//   different default for the title modes into xterm.
//     Ps = 0  -> Do not set window/icon labels using hexadecimal.
//     Ps = 1  -> Do not query window/icon labels using hexadeci-
//     mal.
//     Ps = 2  -> Do not set window/icon labels using UTF-8.
//     Ps = 3  -> Do not query window/icon labels using UTF-8.
//   (See discussion of "Title Modes").
Terminal.prototype.resetTitleModes = function(params) {
  ;
};

// CSI Ps Z  Cursor Backward Tabulation Ps tab stops (default = 1) (CBT).
Terminal.prototype.cursorBackwardTab = function(params) {
  var param = params[0] || 1;
  while (param--) {
    this.x = this.prevStop();
  }
};

// CSI Ps b  Repeat the preceding graphic character Ps times (REP).
Terminal.prototype.repeatPrecedingCharacter = function(params) {
  var param = params[0] || 1
    , line = this.lines[this.ybase + this.y]
    , ch = line[this.x - 1] || [this.defAttr, ' '];

  while (param--) line[this.x++] = ch;
};

// CSI Ps g  Tab Clear (TBC).
//     Ps = 0  -> Clear Current Column (default).
//     Ps = 3  -> Clear All.
// Potentially:
//   Ps = 2  -> Clear Stops on Line.
//   http://vt100.net/annarbor/aaa-ug/section6.html
Terminal.prototype.tabClear = function(params) {
  var param = params[0];
  if (param <= 0) {
    delete this.tabs[this.x];
  } else if (param === 3) {
    this.tabs = {};
  }
};

// CSI Pm i  Media Copy (MC).
//     Ps = 0  -> Print screen (default).
//     Ps = 4  -> Turn off printer controller mode.
//     Ps = 5  -> Turn on printer controller mode.
// CSI ? Pm i
//   Media Copy (MC, DEC-specific).
//     Ps = 1  -> Print line containing cursor.
//     Ps = 4  -> Turn off autoprint mode.
//     Ps = 5  -> Turn on autoprint mode.
//     Ps = 1  0  -> Print composed display, ignores DECPEX.
//     Ps = 1  1  -> Print all pages.
Terminal.prototype.mediaCopy = function(params) {
  ;
};

// CSI > Ps; Ps m
//   Set or reset resource-values used by xterm to decide whether
//   to construct escape sequences holding information about the
//   modifiers pressed with a given key.  The first parameter iden-
//   tifies the resource to set/reset.  The second parameter is the
//   value to assign to the resource.  If the second parameter is
//   omitted, the resource is reset to its initial value.
//     Ps = 1  -> modifyCursorKeys.
//     Ps = 2  -> modifyFunctionKeys.
//     Ps = 4  -> modifyOtherKeys.
//   If no parameters are given, all resources are reset to their
//   initial values.
Terminal.prototype.setResources = function(params) {
  ;
};

// CSI > Ps n
//   Disable modifiers which may be enabled via the CSI > Ps; Ps m
//   sequence.  This corresponds to a resource value of "-1", which
//   cannot be set with the other sequence.  The parameter identi-
//   fies the resource to be disabled:
//     Ps = 1  -> modifyCursorKeys.
//     Ps = 2  -> modifyFunctionKeys.
//     Ps = 4  -> modifyOtherKeys.
//   If the parameter is omitted, modifyFunctionKeys is disabled.
//   When modifyFunctionKeys is disabled, xterm uses the modifier
//   keys to make an extended sequence of functions rather than
//   adding a parameter to each function key to denote the modi-
//   fiers.
Terminal.prototype.disableModifiers = function(params) {
  ;
};

// CSI > Ps p
//   Set resource value pointerMode.  This is used by xterm to
//   decide whether to hide the pointer cursor as the user types.
//   Valid values for the parameter:
//     Ps = 0  -> never hide the pointer.
//     Ps = 1  -> hide if the mouse tracking mode is not enabled.
//     Ps = 2  -> always hide the pointer.  If no parameter is
//     given, xterm uses the default, which is 1 .
Terminal.prototype.setPointerMode = function(params) {
  ;
};

// CSI ! p   Soft terminal reset (DECSTR).
// http://vt100.net/docs/vt220-rm/table4-10.html
Terminal.prototype.softReset = function(params) {
  this.cursorHidden = false;
  this.insertMode = false;
  this.originMode = false;
  this.wraparoundMode = false; // autowrap
  this.applicationKeypad = false; // ?
  this.applicationCursor = false;
  this.scrollTop = 0;
  this.scrollBottom = this.rows - 1;
  this.curAttr = this.defAttr;
  this.x = this.y = 0; // ?
  this.charset = null;
  this.glevel = 0; // ??
  this.charsets = [null]; // ??
};

// CSI Ps$ p
//   Request ANSI mode (DECRQM).  For VT300 and up, reply is
//     CSI Ps; Pm$ y
//   where Ps is the mode number as in RM, and Pm is the mode
//   value:
//     0 - not recognized
//     1 - set
//     2 - reset
//     3 - permanently set
//     4 - permanently reset
Terminal.prototype.requestAnsiMode = function(params) {
  ;
};

// CSI ? Ps$ p
//   Request DEC private mode (DECRQM).  For VT300 and up, reply is
//     CSI ? Ps; Pm$ p
//   where Ps is the mode number as in DECSET, Pm is the mode value
//   as in the ANSI DECRQM.
Terminal.prototype.requestPrivateMode = function(params) {
  ;
};

// CSI Ps ; Ps " p
//   Set conformance level (DECSCL).  Valid values for the first
//   parameter:
//     Ps = 6 1  -> VT100.
//     Ps = 6 2  -> VT200.
//     Ps = 6 3  -> VT300.
//   Valid values for the second parameter:
//     Ps = 0  -> 8-bit controls.
//     Ps = 1  -> 7-bit controls (always set for VT100).
//     Ps = 2  -> 8-bit controls.
Terminal.prototype.setConformanceLevel = function(params) {
  ;
};

// CSI Ps q  Load LEDs (DECLL).
//     Ps = 0  -> Clear all LEDS (default).
//     Ps = 1  -> Light Num Lock.
//     Ps = 2  -> Light Caps Lock.
//     Ps = 3  -> Light Scroll Lock.
//     Ps = 2  1  -> Extinguish Num Lock.
//     Ps = 2  2  -> Extinguish Caps Lock.
//     Ps = 2  3  -> Extinguish Scroll Lock.
Terminal.prototype.loadLEDs = function(params) {
  ;
};

// CSI Ps SP q
//   Set cursor style (DECSCUSR, VT520).
//     Ps = 0  -> blinking block.
//     Ps = 1  -> blinking block (default).
//     Ps = 2  -> steady block.
//     Ps = 3  -> blinking underline.
//     Ps = 4  -> steady underline.
Terminal.prototype.setCursorStyle = function(params) {
  ;
};

// CSI Ps " q
//   Select character protection attribute (DECSCA).  Valid values
//   for the parameter:
//     Ps = 0  -> DECSED and DECSEL can erase (default).
//     Ps = 1  -> DECSED and DECSEL cannot erase.
//     Ps = 2  -> DECSED and DECSEL can erase.
Terminal.prototype.setCharProtectionAttr = function(params) {
  ;
};

// CSI ? Pm r
//   Restore DEC Private Mode Values.  The value of Ps previously
//   saved is restored.  Ps values are the same as for DECSET.
Terminal.prototype.restorePrivateValues = function(params) {
  ;
};

// CSI Pt; Pl; Pb; Pr; Ps$ r
//   Change Attributes in Rectangular Area (DECCARA), VT400 and up.
//     Pt; Pl; Pb; Pr denotes the rectangle.
//     Ps denotes the SGR attributes to change: 0, 1, 4, 5, 7.
// NOTE: xterm doesn't enable this code by default.
Terminal.prototype.setAttrInRectangle = function(params) {
  var t = params[0]
    , l = params[1]
    , b = params[2]
    , r = params[3]
    , attr = params[4];

  var line
    , i;

  for (; t < b + 1; t++) {
    line = this.lines[this.ybase + t];
    for (i = l; i < r; i++) {
      line[i] = [attr, line[i][1]];
    }
  }

  // this.maxRange();
  this.updateRange(params[0]);
  this.updateRange(params[2]);
};

// CSI ? Pm s
//   Save DEC Private Mode Values.  Ps values are the same as for
//   DECSET.
Terminal.prototype.savePrivateValues = function(params) {
  ;
};

// CSI Ps ; Ps ; Ps t
//   Window manipulation (from dtterm, as well as extensions).
//   These controls may be disabled using the allowWindowOps
//   resource.  Valid values for the first (and any additional
//   parameters) are:
//     Ps = 1  -> De-iconify window.
//     Ps = 2  -> Iconify window.
//     Ps = 3  ;  x ;  y -> Move window to [x, y].
//     Ps = 4  ;  height ;  width -> Resize the xterm window to
//     height and width in pixels.
//     Ps = 5  -> Raise the xterm window to the front of the stack-
//     ing order.
//     Ps = 6  -> Lower the xterm window to the bottom of the
//     stacking order.
//     Ps = 7  -> Refresh the xterm window.
//     Ps = 8  ;  height ;  width -> Resize the text area to
//     [height;width] in characters.
//     Ps = 9  ;  0  -> Restore maximized window.
//     Ps = 9  ;  1  -> Maximize window (i.e., resize to screen
//     size).
//     Ps = 1 0  ;  0  -> Undo full-screen mode.
//     Ps = 1 0  ;  1  -> Change to full-screen.
//     Ps = 1 1  -> Report xterm window state.  If the xterm window
//     is open (non-iconified), it returns CSI 1 t .  If the xterm
//     window is iconified, it returns CSI 2 t .
//     Ps = 1 3  -> Report xterm window position.  Result is CSI 3
//     ; x ; y t
//     Ps = 1 4  -> Report xterm window in pixels.  Result is CSI
//     4  ;  height ;  width t
//     Ps = 1 8  -> Report the size of the text area in characters.
//     Result is CSI  8  ;  height ;  width t
//     Ps = 1 9  -> Report the size of the screen in characters.
//     Result is CSI  9  ;  height ;  width t
//     Ps = 2 0  -> Report xterm window's icon label.  Result is
//     OSC  L  label ST
//     Ps = 2 1  -> Report xterm window's title.  Result is OSC  l
//     label ST
//     Ps = 2 2  ;  0  -> Save xterm icon and window title on
//     stack.
//     Ps = 2 2  ;  1  -> Save xterm icon title on stack.
//     Ps = 2 2  ;  2  -> Save xterm window title on stack.
//     Ps = 2 3  ;  0  -> Restore xterm icon and window title from
//     stack.
//     Ps = 2 3  ;  1  -> Restore xterm icon title from stack.
//     Ps = 2 3  ;  2  -> Restore xterm window title from stack.
//     Ps >= 2 4  -> Resize to Ps lines (DECSLPP).
Terminal.prototype.manipulateWindow = function(params) {
  ;
};

// CSI Pt; Pl; Pb; Pr; Ps$ t
//   Reverse Attributes in Rectangular Area (DECRARA), VT400 and
//   up.
//     Pt; Pl; Pb; Pr denotes the rectangle.
//     Ps denotes the attributes to reverse, i.e.,  1, 4, 5, 7.
// NOTE: xterm doesn't enable this code by default.
Terminal.prototype.reverseAttrInRectangle = function(params) {
  ;
};

// CSI > Ps; Ps t
//   Set one or more features of the title modes.  Each parameter
//   enables a single feature.
//     Ps = 0  -> Set window/icon labels using hexadecimal.
//     Ps = 1  -> Query window/icon labels using hexadecimal.
//     Ps = 2  -> Set window/icon labels using UTF-8.
//     Ps = 3  -> Query window/icon labels using UTF-8.  (See dis-
//     cussion of "Title Modes")
Terminal.prototype.setTitleModeFeature = function(params) {
  ;
};

// CSI Ps SP t
//   Set warning-bell volume (DECSWBV, VT520).
//     Ps = 0  or 1  -> off.
//     Ps = 2 , 3  or 4  -> low.
//     Ps = 5 , 6 , 7 , or 8  -> high.
Terminal.prototype.setWarningBellVolume = function(params) {
  ;
};

// CSI Ps SP u
//   Set margin-bell volume (DECSMBV, VT520).
//     Ps = 1  -> off.
//     Ps = 2 , 3  or 4  -> low.
//     Ps = 0 , 5 , 6 , 7 , or 8  -> high.
Terminal.prototype.setMarginBellVolume = function(params) {
  ;
};

// CSI Pt; Pl; Pb; Pr; Pp; Pt; Pl; Pp$ v
//   Copy Rectangular Area (DECCRA, VT400 and up).
//     Pt; Pl; Pb; Pr denotes the rectangle.
//     Pp denotes the source page.
//     Pt; Pl denotes the target location.
//     Pp denotes the target page.
// NOTE: xterm doesn't enable this code by default.
Terminal.prototype.copyRectangle = function(params) {
  ;
};

// CSI Pt ; Pl ; Pb ; Pr ' w
//   Enable Filter Rectangle (DECEFR), VT420 and up.
//   Parameters are [top;left;bottom;right].
//   Defines the coordinates of a filter rectangle and activates
//   it.  Anytime the locator is detected outside of the filter
//   rectangle, an outside rectangle event is generated and the
//   rectangle is disabled.  Filter rectangles are always treated
//   as "one-shot" events.  Any parameters that are omitted default
//   to the current locator position.  If all parameters are omit-
//   ted, any locator motion will be reported.  DECELR always can-
//   cels any prevous rectangle definition.
Terminal.prototype.enableFilterRectangle = function(params) {
  ;
};

// CSI Ps x  Request Terminal Parameters (DECREQTPARM).
//   if Ps is a "0" (default) or "1", and xterm is emulating VT100,
//   the control sequence elicits a response of the same form whose
//   parameters describe the terminal:
//     Ps -> the given Ps incremented by 2.
//     Pn = 1  <- no parity.
//     Pn = 1  <- eight bits.
//     Pn = 1  <- 2  8  transmit 38.4k baud.
//     Pn = 1  <- 2  8  receive 38.4k baud.
//     Pn = 1  <- clock multiplier.
//     Pn = 0  <- STP flags.
Terminal.prototype.requestParameters = function(params) {
  ;
};

// CSI Ps x  Select Attribute Change Extent (DECSACE).
//     Ps = 0  -> from start to end position, wrapped.
//     Ps = 1  -> from start to end position, wrapped.
//     Ps = 2  -> rectangle (exact).
Terminal.prototype.selectChangeExtent = function(params) {
  ;
};

// CSI Pc; Pt; Pl; Pb; Pr$ x
//   Fill Rectangular Area (DECFRA), VT420 and up.
//     Pc is the character to use.
//     Pt; Pl; Pb; Pr denotes the rectangle.
// NOTE: xterm doesn't enable this code by default.
Terminal.prototype.fillRectangle = function(params) {
  var ch = params[0]
    , t = params[1]
    , l = params[2]
    , b = params[3]
    , r = params[4];

  var line
    , i;

  for (; t < b + 1; t++) {
    line = this.lines[this.ybase + t];
    for (i = l; i < r; i++) {
      line[i] = [line[i][0], String.fromCharCode(ch)];
    }
  }

  // this.maxRange();
  this.updateRange(params[1]);
  this.updateRange(params[3]);
};

// CSI Ps ; Pu ' z
//   Enable Locator Reporting (DECELR).
//   Valid values for the first parameter:
//     Ps = 0  -> Locator disabled (default).
//     Ps = 1  -> Locator enabled.
//     Ps = 2  -> Locator enabled for one report, then disabled.
//   The second parameter specifies the coordinate unit for locator
//   reports.
//   Valid values for the second parameter:
//     Pu = 0  <- or omitted -> default to character cells.
//     Pu = 1  <- device physical pixels.
//     Pu = 2  <- character cells.
Terminal.prototype.enableLocatorReporting = function(params) {
  var val = params[0] > 0;
  //this.mouseEvents = val;
  //this.decLocator = val;
};

// CSI Pt; Pl; Pb; Pr$ z
//   Erase Rectangular Area (DECERA), VT400 and up.
//     Pt; Pl; Pb; Pr denotes the rectangle.
// NOTE: xterm doesn't enable this code by default.
Terminal.prototype.eraseRectangle = function(params) {
  var t = params[0]
    , l = params[1]
    , b = params[2]
    , r = params[3];

  var line
    , i
    , ch;

  ch = [this.eraseAttr(), ' ']; // xterm?

  for (; t < b + 1; t++) {
    line = this.lines[this.ybase + t];
    for (i = l; i < r; i++) {
      line[i] = ch;
    }
  }

  // this.maxRange();
  this.updateRange(params[0]);
  this.updateRange(params[2]);
};

// CSI Pm ' {
//   Select Locator Events (DECSLE).
//   Valid values for the first (and any additional parameters)
//   are:
//     Ps = 0  -> only respond to explicit host requests (DECRQLP).
//                (This is default).  It also cancels any filter
//   rectangle.
//     Ps = 1  -> report button down transitions.
//     Ps = 2  -> do not report button down transitions.
//     Ps = 3  -> report button up transitions.
//     Ps = 4  -> do not report button up transitions.
Terminal.prototype.setLocatorEvents = function(params) {
  ;
};

// CSI Pt; Pl; Pb; Pr$ {
//   Selective Erase Rectangular Area (DECSERA), VT400 and up.
//     Pt; Pl; Pb; Pr denotes the rectangle.
Terminal.prototype.selectiveEraseRectangle = function(params) {
  ;
};

// CSI Ps ' |
//   Request Locator Position (DECRQLP).
//   Valid values for the parameter are:
//     Ps = 0 , 1 or omitted -> transmit a single DECLRP locator
//     report.

//   If Locator Reporting has been enabled by a DECELR, xterm will
//   respond with a DECLRP Locator Report.  This report is also
//   generated on button up and down events if they have been
//   enabled with a DECSLE, or when the locator is detected outside
//   of a filter rectangle, if filter rectangles have been enabled
//   with a DECEFR.

//     -> CSI Pe ; Pb ; Pr ; Pc ; Pp &  w

//   Parameters are [event;button;row;column;page].
//   Valid values for the event:
//     Pe = 0  -> locator unavailable - no other parameters sent.
//     Pe = 1  -> request - xterm received a DECRQLP.
//     Pe = 2  -> left button down.
//     Pe = 3  -> left button up.
//     Pe = 4  -> middle button down.
//     Pe = 5  -> middle button up.
//     Pe = 6  -> right button down.
//     Pe = 7  -> right button up.
//     Pe = 8  -> M4 button down.
//     Pe = 9  -> M4 button up.
//     Pe = 1 0  -> locator outside filter rectangle.
//   ``button'' parameter is a bitmask indicating which buttons are
//     pressed:
//     Pb = 0  <- no buttons down.
//     Pb & 1  <- right button down.
//     Pb & 2  <- middle button down.
//     Pb & 4  <- left button down.
//     Pb & 8  <- M4 button down.
//   ``row'' and ``column'' parameters are the coordinates of the
//     locator position in the xterm window, encoded as ASCII deci-
//     mal.
//   The ``page'' parameter is not used by xterm, and will be omit-
//   ted.
Terminal.prototype.requestLocatorPosition = function(params) {
  ;
};

// CSI P m SP }
// Insert P s Column(s) (default = 1) (DECIC), VT420 and up.
// NOTE: xterm doesn't enable this code by default.
Terminal.prototype.insertColumns = function() {
  var param = params[0]
    , l = this.ybase + this.rows
    , ch = [this.eraseAttr(), ' '] // xterm?
    , i;

  while (param--) {
    for (i = this.ybase; i < l; i++) {
      this.lines[i].splice(this.x + 1, 0, ch);
      this.lines[i].pop();
    }
  }

  this.maxRange();
};

// CSI P m SP ~
// Delete P s Column(s) (default = 1) (DECDC), VT420 and up
// NOTE: xterm doesn't enable this code by default.
Terminal.prototype.deleteColumns = function() {
  var param = params[0]
    , l = this.ybase + this.rows
    , ch = [this.eraseAttr(), ' '] // xterm?
    , i;

  while (param--) {
    for (i = this.ybase; i < l; i++) {
      this.lines[i].splice(this.x, 1);
      this.lines[i].push(ch);
    }
  }

  this.maxRange();
};

/**
 * Prefix/Select/Visual/Search Modes
 */

Terminal.prototype.enterPrefix = function() {
  this.prefixMode = true;
};

Terminal.prototype.leavePrefix = function() {
  this.prefixMode = false;
};

Terminal.prototype.enterSelect = function() {
  this._real = {
    x: this.x,
    y: this.y,
    ydisp: this.ydisp,
    ybase: this.ybase,
    cursorHidden: this.cursorHidden,
    lines: this.copyBuffer(this.lines),
    write: this.write
  };
  this.write = function() {};
  this.selectMode = true;
  this.visualMode = false;
  this.cursorHidden = false;
  this.refresh(this.y, this.y);
};

Terminal.prototype.leaveSelect = function() {
  this.x = this._real.x;
  this.y = this._real.y;
  this.ydisp = this._real.ydisp;
  this.ybase = this._real.ybase;
  this.cursorHidden = this._real.cursorHidden;
  this.lines = this._real.lines;
  this.write = this._real.write;
  delete this._real;
  this.selectMode = false;
  this.visualMode = false;
  this.refresh(0, this.rows - 1);
};

Terminal.prototype.enterVisual = function() {
  this._real.preVisual = this.copyBuffer(this.lines);
  this.selectText(this.x, this.x, this.ydisp + this.y, this.ydisp + this.y);
  this.visualMode = true;
};

Terminal.prototype.leaveVisual = function() {
  this.lines = this._real.preVisual;
  delete this._real.preVisual;
  delete this._selected;
  this.visualMode = false;
  this.refresh(0, this.rows - 1);
};

Terminal.prototype.enterSearch = function(down) {
  this.entry = '';
  this.searchMode = true;
  this.searchDown = down;
  this._real.preSearch = this.copyBuffer(this.lines);
  this._real.preSearchX = this.x;
  this._real.preSearchY = this.y;

  var bottom = this.ydisp + this.rows - 1;
  for (var i = 0; i < this.entryPrefix.length; i++) {
    //this.lines[bottom][i][0] = (this.defAttr & ~0x1ff) | 4;
    //this.lines[bottom][i][1] = this.entryPrefix[i];
    this.lines[bottom][i] = [
      (this.defAttr & ~0x1ff) | 4,
      this.entryPrefix[i]
    ];
  }

  this.y = this.rows - 1;
  this.x = this.entryPrefix.length;

  this.refresh(this.rows - 1, this.rows - 1);
};

Terminal.prototype.leaveSearch = function() {
  this.searchMode = false;

  if (this._real.preSearch) {
    this.lines = this._real.preSearch;
    this.x = this._real.preSearchX;
    this.y = this._real.preSearchY;
    delete this._real.preSearch;
    delete this._real.preSearchX;
    delete this._real.preSearchY;
  }

  this.refresh(this.rows - 1, this.rows - 1);
};

Terminal.prototype.copyBuffer = function(lines) {
  var lines = lines || this.lines
    , out = [];

  for (var y = 0; y < lines.length; y++) {
    out[y] = [];
    for (var x = 0; x < lines[y].length; x++) {
      out[y][x] = [lines[y][x][0], lines[y][x][1]];
    }
  }

  return out;
};

Terminal.prototype.getCopyTextarea = function(text) {
  var textarea = this._copyTextarea
    , document = this.document;

  if (!textarea) {
    textarea = document.createElement('textarea');
    textarea.style.position = 'absolute';
    textarea.style.left = '-32000px';
    textarea.style.top = '-32000px';
    textarea.style.width = '0px';
    textarea.style.height = '0px';
    textarea.style.opacity = '0';
    textarea.style.backgroundColor = 'transparent';
    textarea.style.borderStyle = 'none';
    textarea.style.outlineStyle = 'none';

    document.getElementsByTagName('body')[0].appendChild(textarea);

    this._copyTextarea = textarea;
  }

  return textarea;
};

// NOTE: Only works for primary selection on X11.
// Non-X11 users should use Ctrl-C instead.
Terminal.prototype.copyText = function(text) {
  var self = this
    , textarea = this.getCopyTextarea();

  this.emit('copy', text);

  textarea.focus();
  textarea.textContent = text;
  textarea.value = text;
  textarea.setSelectionRange(0, text.length);

  setTimeout(function() {
    self.element.focus();
    self.focus();
  }, 1);
};

Terminal.prototype.selectText = function(x1, x2, y1, y2) {
  var ox1
    , ox2
    , oy1
    , oy2
    , tmp
    , x
    , y
    , xl
    , attr;

  if (this._selected) {
    ox1 = this._selected.x1;
    ox2 = this._selected.x2;
    oy1 = this._selected.y1;
    oy2 = this._selected.y2;

    if (oy2 < oy1) {
      tmp = ox2;
      ox2 = ox1;
      ox1 = tmp;
      tmp = oy2;
      oy2 = oy1;
      oy1 = tmp;
    }

    if (ox2 < ox1 && oy1 === oy2) {
      tmp = ox2;
      ox2 = ox1;
      ox1 = tmp;
    }

    for (y = oy1; y <= oy2; y++) {
      x = 0;
      xl = this.cols - 1;
      if (y === oy1) {
        x = ox1;
      }
      if (y === oy2) {
        xl = ox2;
      }
      for (; x <= xl; x++) {
        if (this.lines[y][x].old != null) {
          //this.lines[y][x][0] = this.lines[y][x].old;
          //delete this.lines[y][x].old;
          attr = this.lines[y][x].old;
          delete this.lines[y][x].old;
          this.lines[y][x] = [attr, this.lines[y][x][1]];
        }
      }
    }

    y1 = this._selected.y1;
    x1 = this._selected.x1;
  }

  y1 = Math.max(y1, 0);
  y1 = Math.min(y1, this.ydisp + this.rows - 1);

  y2 = Math.max(y2, 0);
  y2 = Math.min(y2, this.ydisp + this.rows - 1);

  this._selected = { x1: x1, x2: x2, y1: y1, y2: y2 };

  if (y2 < y1) {
    tmp = x2;
    x2 = x1;
    x1 = tmp;
    tmp = y2;
    y2 = y1;
    y1 = tmp;
  }

  if (x2 < x1 && y1 === y2) {
    tmp = x2;
    x2 = x1;
    x1 = tmp;
  }

  for (y = y1; y <= y2; y++) {
    x = 0;
    xl = this.cols - 1;
    if (y === y1) {
      x = x1;
    }
    if (y === y2) {
      xl = x2;
    }
    for (; x <= xl; x++) {
      //this.lines[y][x].old = this.lines[y][x][0];
      //this.lines[y][x][0] &= ~0x1ff;
      //this.lines[y][x][0] |= (0x1ff << 9) | 4;
      attr = this.lines[y][x][0];
      this.lines[y][x] = [
        (attr & ~0x1ff) | ((0x1ff << 9) | 4),
        this.lines[y][x][1]
      ];
      this.lines[y][x].old = attr;
    }
  }

  y1 = y1 - this.ydisp;
  y2 = y2 - this.ydisp;

  y1 = Math.max(y1, 0);
  y1 = Math.min(y1, this.rows - 1);

  y2 = Math.max(y2, 0);
  y2 = Math.min(y2, this.rows - 1);

  //this.refresh(y1, y2);
  this.refresh(0, this.rows - 1);
};

Terminal.prototype.grabText = function(x1, x2, y1, y2) {
  var out = ''
    , buf = ''
    , ch
    , x
    , y
    , xl
    , tmp;

  if (y2 < y1) {
    tmp = x2;
    x2 = x1;
    x1 = tmp;
    tmp = y2;
    y2 = y1;
    y1 = tmp;
  }

  if (x2 < x1 && y1 === y2) {
    tmp = x2;
    x2 = x1;
    x1 = tmp;
  }

  for (y = y1; y <= y2; y++) {
    x = 0;
    xl = this.cols - 1;
    if (y === y1) {
      x = x1;
    }
    if (y === y2) {
      xl = x2;
    }
    for (; x <= xl; x++) {
      ch = this.lines[y][x][1];
      if (ch === ' ') {
        buf += ch;
        continue;
      }
      if (buf) {
        out += buf;
        buf = '';
      }
      out += ch;
      if (isWide(ch)) x++;
    }
    buf = '';
    out += '\n';
  }

  // If we're not at the end of the
  // line, don't add a newline.
  for (x = x2, y = y2; x < this.cols; x++) {
    if (this.lines[y][x][1] !== ' ') {
      out = out.slice(0, -1);
      break;
    }
  }

  return out;
};

Terminal.prototype.keyPrefix = function(ev, key) {
  if (key === 'k' || key === '&') {
    this.destroy();
  } else if (key === 'p' || key === ']') {
    this.emit('request paste');
  } else if (key === 'c') {
    this.emit('request create');
  } else if (key >= '0' && key <= '9') {
    key = +key - 1;
    if (!~key) key = 9;
    this.emit('request term', key);
  } else if (key === 'n') {
    this.emit('request term next');
  } else if (key === 'P') {
    this.emit('request term previous');
  } else if (key === ':') {
    this.emit('request command mode');
  } else if (key === '[') {
    this.enterSelect();
  }
};

Terminal.prototype.keySelect = function(ev, key) {
  this.showCursor();

  if (this.searchMode || key === 'n' || key === 'N') {
    return this.keySearch(ev, key);
  }

  if (key === '\x04') { // ctrl-d
    var y = this.ydisp + this.y;
    if (this.ydisp === this.ybase) {
      // Mimic vim behavior
      this.y = Math.min(this.y + (this.rows - 1) / 2 | 0, this.rows - 1);
      this.refresh(0, this.rows - 1);
    } else {
      this.scrollDisp((this.rows - 1) / 2 | 0);
    }
    if (this.visualMode) {
      this.selectText(this.x, this.x, y, this.ydisp + this.y);
    }
    return;
  }

  if (key === '\x15') { // ctrl-u
    var y = this.ydisp + this.y;
    if (this.ydisp === 0) {
      // Mimic vim behavior
      this.y = Math.max(this.y - (this.rows - 1) / 2 | 0, 0);
      this.refresh(0, this.rows - 1);
    } else {
      this.scrollDisp(-(this.rows - 1) / 2 | 0);
    }
    if (this.visualMode) {
      this.selectText(this.x, this.x, y, this.ydisp + this.y);
    }
    return;
  }

  if (key === '\x06') { // ctrl-f
    var y = this.ydisp + this.y;
    this.scrollDisp(this.rows - 1);
    if (this.visualMode) {
      this.selectText(this.x, this.x, y, this.ydisp + this.y);
    }
    return;
  }

  if (key === '\x02') { // ctrl-b
    var y = this.ydisp + this.y;
    this.scrollDisp(-(this.rows - 1));
    if (this.visualMode) {
      this.selectText(this.x, this.x, y, this.ydisp + this.y);
    }
    return;
  }

  if (key === 'k' || key === '\x1b[A') {
    var y = this.ydisp + this.y;
    this.y--;
    if (this.y < 0) {
      this.y = 0;
      this.scrollDisp(-1);
    }
    if (this.visualMode) {
      this.selectText(this.x, this.x, y, this.ydisp + this.y);
    } else {
      this.refresh(this.y, this.y + 1);
    }
    return;
  }

  if (key === 'j' || key === '\x1b[B') {
    var y = this.ydisp + this.y;
    this.y++;
    if (this.y >= this.rows) {
      this.y = this.rows - 1;
      this.scrollDisp(1);
    }
    if (this.visualMode) {
      this.selectText(this.x, this.x, y, this.ydisp + this.y);
    } else {
      this.refresh(this.y - 1, this.y);
    }
    return;
  }

  if (key === 'h' || key === '\x1b[D') {
    var x = this.x;
    this.x--;
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.visualMode) {
      this.selectText(x, this.x, this.ydisp + this.y, this.ydisp + this.y);
    } else {
      this.refresh(this.y, this.y);
    }
    return;
  }

  if (key === 'l' || key === '\x1b[C') {
    var x = this.x;
    this.x++;
    if (this.x >= this.cols) {
      this.x = this.cols - 1;
    }
    if (this.visualMode) {
      this.selectText(x, this.x, this.ydisp + this.y, this.ydisp + this.y);
    } else {
      this.refresh(this.y, this.y);
    }
    return;
  }

  if (key === 'v' || key === ' ') {
    if (!this.visualMode) {
      this.enterVisual();
    } else {
      this.leaveVisual();
    }
    return;
  }

  if (key === 'y') {
    if (this.visualMode) {
      var text = this.grabText(
        this._selected.x1, this._selected.x2,
        this._selected.y1, this._selected.y2);
      this.copyText(text);
      this.leaveVisual();
      // this.leaveSelect();
    }
    return;
  }

  if (key === 'q' || key === '\x1b') {
    if (this.visualMode) {
      this.leaveVisual();
    } else {
      this.leaveSelect();
    }
    return;
  }

  if (key === 'w' || key === 'W') {
    var ox = this.x;
    var oy = this.y;
    var oyd = this.ydisp;

    var x = this.x;
    var y = this.y;
    var yb = this.ydisp;
    var saw_space = false;

    for (;;) {
      var line = this.lines[yb + y];
      while (x < this.cols) {
        if (line[x][1] <= ' ') {
          saw_space = true;
        } else if (saw_space) {
          break;
        }
        x++;
      }
      if (x >= this.cols) x = this.cols - 1;
      if (x === this.cols - 1 && line[x][1] <= ' ') {
        x = 0;
        if (++y >= this.rows) {
          y--;
          if (++yb > this.ybase) {
            yb = this.ybase;
            x = this.x;
            break;
          }
        }
        continue;
      }
      break;
    }

    this.x = x, this.y = y;
    this.scrollDisp(-this.ydisp + yb);

    if (this.visualMode) {
      this.selectText(ox, this.x, oy + oyd, this.ydisp + this.y);
    }
    return;
  }

  if (key === 'b' || key === 'B') {
    var ox = this.x;
    var oy = this.y;
    var oyd = this.ydisp;

    var x = this.x;
    var y = this.y;
    var yb = this.ydisp;

    for (;;) {
      var line = this.lines[yb + y];
      var saw_space = x > 0 && line[x][1] > ' ' && line[x - 1][1] > ' ';
      while (x >= 0) {
        if (line[x][1] <= ' ') {
          if (saw_space && (x + 1 < this.cols && line[x + 1][1] > ' ')) {
            x++;
            break;
          } else {
            saw_space = true;
          }
        }
        x--;
      }
      if (x < 0) x = 0;
      if (x === 0 && (line[x][1] <= ' ' || !saw_space)) {
        x = this.cols - 1;
        if (--y < 0) {
          y++;
          if (--yb < 0) {
            yb++;
            x = 0;
            break;
          }
        }
        continue;
      }
      break;
    }

    this.x = x, this.y = y;
    this.scrollDisp(-this.ydisp + yb);

    if (this.visualMode) {
      this.selectText(ox, this.x, oy + oyd, this.ydisp + this.y);
    }
    return;
  }

  if (key === 'e' || key === 'E') {
    var x = this.x + 1;
    var y = this.y;
    var yb = this.ydisp;
    if (x >= this.cols) x--;

    for (;;) {
      var line = this.lines[yb + y];
      while (x < this.cols) {
        if (line[x][1] <= ' ') {
          x++;
        } else {
          break;
        }
      }
      while (x < this.cols) {
        if (line[x][1] <= ' ') {
          if (x - 1 >= 0 && line[x - 1][1] > ' ') {
            x--;
            break;
          }
        }
        x++;
      }
      if (x >= this.cols) x = this.cols - 1;
      if (x === this.cols - 1 && line[x][1] <= ' ') {
        x = 0;
        if (++y >= this.rows) {
          y--;
          if (++yb > this.ybase) {
            yb = this.ybase;
            break;
          }
        }
        continue;
      }
      break;
    }

    this.x = x, this.y = y;
    this.scrollDisp(-this.ydisp + yb);

    if (this.visualMode) {
      this.selectText(ox, this.x, oy + oyd, this.ydisp + this.y);
    }
    return;
  }

  if (key === '^' || key === '0') {
    var ox = this.x;

    if (key === '0') {
      this.x = 0;
    } else if (key === '^') {
      var line = this.lines[this.ydisp + this.y];
      var x = 0;
      while (x < this.cols) {
        if (line[x][1] > ' ') {
          break;
        }
        x++;
      }
      if (x >= this.cols) x = this.cols - 1;
      this.x = x;
    }

    if (this.visualMode) {
      this.selectText(ox, this.x, this.ydisp + this.y, this.ydisp + this.y);
    } else {
      this.refresh(this.y, this.y);
    }
    return;
  }

  if (key === '$') {
    var ox = this.x;
    var line = this.lines[this.ydisp + this.y];
    var x = this.cols - 1;
    while (x >= 0) {
      if (line[x][1] > ' ') {
        if (this.visualMode && x < this.cols - 1) x++;
        break;
      }
      x--;
    }
    if (x < 0) x = 0;
    this.x = x;
    if (this.visualMode) {
      this.selectText(ox, this.x, this.ydisp + this.y, this.ydisp + this.y);
    } else {
      this.refresh(this.y, this.y);
    }
    return;
  }

  if (key === 'g' || key === 'G') {
    var ox = this.x;
    var oy = this.y;
    var oyd = this.ydisp;
    if (key === 'g') {
      this.x = 0, this.y = 0;
      this.scrollDisp(-this.ydisp);
    } else if (key === 'G') {
      this.x = 0, this.y = this.rows - 1;
      this.scrollDisp(this.ybase);
    }
    if (this.visualMode) {
      this.selectText(ox, this.x, oy + oyd, this.ydisp + this.y);
    }
    return;
  }

  if (key === 'H' || key === 'M' || key === 'L') {
    var ox = this.x;
    var oy = this.y;
    if (key === 'H') {
      this.x = 0, this.y = 0;
    } else if (key === 'M') {
      this.x = 0, this.y = this.rows / 2 | 0;
    } else if (key === 'L') {
      this.x = 0, this.y = this.rows - 1;
    }
    if (this.visualMode) {
      this.selectText(ox, this.x, this.ydisp + oy, this.ydisp + this.y);
    } else {
      this.refresh(oy, oy);
      this.refresh(this.y, this.y);
    }
    return;
  }

  if (key === '{' || key === '}') {
    var ox = this.x;
    var oy = this.y;
    var oyd = this.ydisp;

    var line;
    var saw_full = false;
    var found = false;
    var first_is_space = -1;
    var y = this.y + (key === '{' ? -1 : 1);
    var yb = this.ydisp;
    var i;

    if (key === '{') {
      if (y < 0) {
        y++;
        if (yb > 0) yb--;
      }
    } else if (key === '}') {
      if (y >= this.rows) {
        y--;
        if (yb < this.ybase) yb++;
      }
    }

    for (;;) {
      line = this.lines[yb + y];

      for (i = 0; i < this.cols; i++) {
        if (line[i][1] > ' ') {
          if (first_is_space === -1) {
            first_is_space = 0;
          }
          saw_full = true;
          break;
        } else if (i === this.cols - 1) {
          if (first_is_space === -1) {
            first_is_space = 1;
          } else if (first_is_space === 0) {
            found = true;
          } else if (first_is_space === 1) {
            if (saw_full) found = true;
          }
          break;
        }
      }

      if (found) break;

      if (key === '{') {
        y--;
        if (y < 0) {
          y++;
          if (yb > 0) yb--;
          else break;
        }
      } else if (key === '}') {
        y++;
        if (y >= this.rows) {
          y--;
          if (yb < this.ybase) yb++;
          else break;
        }
      }
    }

    if (!found) {
      if (key === '{') {
        y = 0;
        yb = 0;
      } else if (key === '}') {
        y = this.rows - 1;
        yb = this.ybase;
      }
    }

    this.x = 0, this.y = y;
    this.scrollDisp(-this.ydisp + yb);

    if (this.visualMode) {
      this.selectText(ox, this.x, oy + oyd, this.ydisp + this.y);
    }
    return;
  }

  if (key === '/' || key === '?') {
    if (!this.visualMode) {
      this.enterSearch(key === '/');
    }
    return;
  }

  return false;
};

Terminal.prototype.keySearch = function(ev, key) {
  if (key === '\x1b') {
    this.leaveSearch();
    return;
  }

  if (key === '\r' || (!this.searchMode && (key === 'n' || key === 'N'))) {
    this.leaveSearch();

    var entry = this.entry;

    if (!entry) {
      this.refresh(0, this.rows - 1);
      return;
    }

    var ox = this.x;
    var oy = this.y;
    var oyd = this.ydisp;

    var line;
    var found = false;
    var wrapped = false;
    var x = this.x + 1;
    var y = this.ydisp + this.y;
    var yb, i;
    var up = key === 'N'
      ? this.searchDown
      : !this.searchDown;

    for (;;) {
      line = this.lines[y];

      while (x < this.cols) {
        for (i = 0; i < entry.length; i++) {
          if (x + i >= this.cols) break;
          if (line[x + i][1] !== entry[i]) {
            break;
          } else if (line[x + i][1] === entry[i] && i === entry.length - 1) {
            found = true;
            break;
          }
        }
        if (found) break;
        x += i + 1;
      }
      if (found) break;

      x = 0;

      if (!up) {
        y++;
        if (y > this.ybase + this.rows - 1) {
          if (wrapped) break;
          // this.setMessage('Search wrapped. Continuing at TOP.');
          wrapped = true;
          y = 0;
        }
      } else {
        y--;
        if (y < 0) {
          if (wrapped) break;
          // this.setMessage('Search wrapped. Continuing at BOTTOM.');
          wrapped = true;
          y = this.ybase + this.rows - 1;
        }
      }
    }

    if (found) {
      if (y - this.ybase < 0) {
        yb = y;
        y = 0;
        if (yb > this.ybase) {
          y = yb - this.ybase;
          yb = this.ybase;
        }
      } else {
        yb = this.ybase;
        y -= this.ybase;
      }

      this.x = x, this.y = y;
      this.scrollDisp(-this.ydisp + yb);

      if (this.visualMode) {
        this.selectText(ox, this.x, oy + oyd, this.ydisp + this.y);
      }
      return;
    }

    // this.setMessage("No matches found.");
    this.refresh(0, this.rows - 1);

    return;
  }

  if (key === '\b' || key === '\x7f') {
    if (this.entry.length === 0) return;
    var bottom = this.ydisp + this.rows - 1;
    this.entry = this.entry.slice(0, -1);
    var i = this.entryPrefix.length + this.entry.length;
    //this.lines[bottom][i][1] = ' ';
    this.lines[bottom][i] = [
      this.lines[bottom][i][0],
      ' '
    ];
    this.x--;
    this.refresh(this.rows - 1, this.rows - 1);
    this.refresh(this.y, this.y);
    return;
  }

  if (key.length === 1 && key >= ' ' && key <= '~') {
    var bottom = this.ydisp + this.rows - 1;
    this.entry += key;
    var i = this.entryPrefix.length + this.entry.length - 1;
    //this.lines[bottom][i][0] = (this.defAttr & ~0x1ff) | 4;
    //this.lines[bottom][i][1] = key;
    this.lines[bottom][i] = [
      (this.defAttr & ~0x1ff) | 4,
      key
    ];
    this.x++;
    this.refresh(this.rows - 1, this.rows - 1);
    this.refresh(this.y, this.y);
    return;
  }

  return false;
};

/**
 * Character Sets
 */

Terminal.charsets = {};

// DEC Special Character and Line Drawing Set.
// http://vt100.net/docs/vt102-ug/table5-13.html
// A lot of curses apps use this if they see TERM=xterm.
// testing: echo -e '\e(0a\e(B'
// The xterm output sometimes seems to conflict with the
// reference above. xterm seems in line with the reference
// when running vttest however.
// The table below now uses xterm's output from vttest.
Terminal.charsets.SCLD = { // (0
  '`': '\u25c6', // '◆'
  'a': '\u2592', // '▒'
  'b': '\u0009', // '\t'
  'c': '\u000c', // '\f'
  'd': '\u000d', // '\r'
  'e': '\u000a', // '\n'
  'f': '\u00b0', // '°'
  'g': '\u00b1', // '±'
  'h': '\u2424', // '\u2424' (NL)
  'i': '\u000b', // '\v'
  'j': '\u2518', // '┘'
  'k': '\u2510', // '┐'
  'l': '\u250c', // '┌'
  'm': '\u2514', // '└'
  'n': '\u253c', // '┼'
  'o': '\u23ba', // '⎺'
  'p': '\u23bb', // '⎻'
  'q': '\u2500', // '─'
  'r': '\u23bc', // '⎼'
  's': '\u23bd', // '⎽'
  't': '\u251c', // '├'
  'u': '\u2524', // '┤'
  'v': '\u2534', // '┴'
  'w': '\u252c', // '┬'
  'x': '\u2502', // '│'
  'y': '\u2264', // '≤'
  'z': '\u2265', // '≥'
  '{': '\u03c0', // 'π'
  '|': '\u2260', // '≠'
  '}': '\u00a3', // '£'
  '~': '\u00b7'  // '·'
};

Terminal.charsets.UK = null; // (A
Terminal.charsets.US = null; // (B (USASCII)
Terminal.charsets.Dutch = null; // (4
Terminal.charsets.Finnish = null; // (C or (5
Terminal.charsets.French = null; // (R
Terminal.charsets.FrenchCanadian = null; // (Q
Terminal.charsets.German = null; // (K
Terminal.charsets.Italian = null; // (Y
Terminal.charsets.NorwegianDanish = null; // (E or (6
Terminal.charsets.Spanish = null; // (Z
Terminal.charsets.Swedish = null; // (H or (7
Terminal.charsets.Swiss = null; // (=
Terminal.charsets.ISOLatin = null; // /A

/**
 * Helpers
 */

function on(el, type, handler, capture) {
  el.addEventListener(type, handler, capture || false);
}

function off(el, type, handler, capture) {
  el.removeEventListener(type, handler, capture || false);
}

function cancel(ev) {
  if (ev.preventDefault) ev.preventDefault();
  ev.returnValue = false;
  if (ev.stopPropagation) ev.stopPropagation();
  ev.cancelBubble = true;
  return false;
}

function inherits(child, parent) {
  function f() {
    this.constructor = child;
  }
  f.prototype = parent.prototype;
  child.prototype = new f;
}

// if bold is broken, we can't
// use it in the terminal.
function isBoldBroken(document) {
  var body = document.getElementsByTagName('body')[0];
  var el = document.createElement('span');
  el.innerHTML = 'hello world';
  body.appendChild(el);
  var w1 = el.scrollWidth;
  el.style.fontWeight = 'bold';
  var w2 = el.scrollWidth;
  body.removeChild(el);
  return w1 !== w2;
}

var String = this.String;
var setTimeout = this.setTimeout;
var setInterval = this.setInterval;

function indexOf(obj, el) {
  var i = obj.length;
  while (i--) {
    if (obj[i] === el) return i;
  }
  return -1;
}

function isWide(ch) {
  if (ch <= '\uff00') return false;
  return (ch >= '\uff01' && ch <= '\uffbe')
      || (ch >= '\uffc2' && ch <= '\uffc7')
      || (ch >= '\uffca' && ch <= '\uffcf')
      || (ch >= '\uffd2' && ch <= '\uffd7')
      || (ch >= '\uffda' && ch <= '\uffdc')
      || (ch >= '\uffe0' && ch <= '\uffe6')
      || (ch >= '\uffe8' && ch <= '\uffee');
}

function matchColor(r1, g1, b1) {
  var hash = (r1 << 16) | (g1 << 8) | b1;

  if (matchColor._cache[hash] != null) {
    return matchColor._cache[hash];
  }

  var ldiff = Infinity
    , li = -1
    , i = 0
    , c
    , r2
    , g2
    , b2
    , diff;

  for (; i < Terminal.vcolors.length; i++) {
    c = Terminal.vcolors[i];
    r2 = c[0];
    g2 = c[1];
    b2 = c[2];

    diff = matchColor.distance(r1, g1, b1, r2, g2, b2);

    if (diff === 0) {
      li = i;
      break;
    }

    if (diff < ldiff) {
      ldiff = diff;
      li = i;
    }
  }

  return matchColor._cache[hash] = li;
}

matchColor._cache = {};

// http://stackoverflow.com/questions/1633828
matchColor.distance = function(r1, g1, b1, r2, g2, b2) {
  return Math.pow(30 * (r1 - r2), 2)
    + Math.pow(59 * (g1 - g2), 2)
    + Math.pow(11 * (b1 - b2), 2);
};

function each(obj, iter, con) {
  if (obj.forEach) return obj.forEach(iter, con);
  for (var i = 0; i < obj.length; i++) {
    iter.call(con, obj[i], i, obj);
  }
}

function keys(obj) {
  if (Object.keys) return Object.keys(obj);
  var key, keys = [];
  for (key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      keys.push(key);
    }
  }
  return keys;
}

/**
 * Expose
 */

Terminal.EventEmitter = EventEmitter;
Terminal.inherits = inherits;
Terminal.on = on;
Terminal.off = off;
Terminal.cancel = cancel;

if (typeof module !== 'undefined') {
  module.exports = Terminal;
} else {
  this.Terminal = Terminal;
}

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],45:[function(require,module,exports){
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

},{"./tab":46,"./tty":47,"./window":49,"babel-runtime/core-js/object/define-property":3,"babel-runtime/helpers/interop-require-default":10}],46:[function(require,module,exports){
'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
	value: true
});

var _utils = require('./utils');

var _termJsSrcTerm = require('term.js/src/term');

var _termJsSrcTerm2 = _interopRequireDefault(_termJsSrcTerm);

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
	_termJsSrcTerm2['default'].call(this, {
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
(0, _utils.inherits)(Tab, _termJsSrcTerm2['default']);

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
		if (_termJsSrcTerm2['default'].focusKeys === false) {
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
	if (!_termJsSrcTerm2['default'].programFeatures) {
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

},{"./utils":48,"babel-runtime/core-js/object/define-property":3,"babel-runtime/helpers/interop-require-default":10,"term.js/src/term":44}],47:[function(require,module,exports){
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

},{"./utils":48,"./window":49,"babel-runtime/core-js/map":1,"babel-runtime/core-js/object/define-property":3,"babel-runtime/core-js/object/keys":5,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9,"babel-runtime/helpers/interop-require-default":10}],48:[function(require,module,exports){
'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
	value: true
});

var _termJsSrcTerm = require('term.js/src/term');

var _termJsSrcTerm2 = _interopRequireDefault(_termJsSrcTerm);

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

exports.indexOf = indexOf;
exports.splice = splice;
exports.sanitize = sanitize;

/**
 * Exports from other packages
 */
var EventEmitter = _termJsSrcTerm2['default'].EventEmitter;
exports.EventEmitter = EventEmitter;
var inherits = _termJsSrcTerm2['default'].inherits;
exports.inherits = inherits;
var on = _termJsSrcTerm2['default'].on;
exports.on = on;
var off = _termJsSrcTerm2['default'].off;
exports.off = off;
var cancel = _termJsSrcTerm2['default'].cancel;
exports.cancel = cancel;

},{"babel-runtime/core-js/object/define-property":3,"babel-runtime/helpers/interop-require-default":10,"term.js/src/term":44}],49:[function(require,module,exports){
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

var _termJsSrcTerm = require('term.js/src/term');

var _termJsSrcTerm2 = _interopRequireDefault(_termJsSrcTerm);

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

	this.cols = _termJsSrcTerm2['default'].geometry[0];
	this.rows = _termJsSrcTerm2['default'].geometry[1];

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

},{"./tab":46,"./utils":48,"babel-runtime/core-js/map":1,"babel-runtime/core-js/object/define-property":3,"babel-runtime/core-js/object/keys":5,"babel-runtime/helpers/interop-require-default":10,"term.js/src/term":44}]},{},[45])(45)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL21hcC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzLWNhbGwtY2hlY2suanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZS1jbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL21hcC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hc3NlcnQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvbGxlY3Rpb24tdG8tanNvbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvbGxlY3Rpb24uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jdHguanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZWYuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5mb3Itb2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5mdy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItY2FsbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1kZXRlY3QuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5taXguanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5yZWRlZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNwZWNpZXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zdHJpbmctYXQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC51aWQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC51bnNjb3BlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQud2tzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYubWFwLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc3RhdGljcy1hY2NlcHQtcHJpbWl0aXZlcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5tYXAudG8tanNvbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL3Rlcm0uanMvc3JjL3Rlcm0uanMiLCIvaG9tZS9jZHVkbGV5L3Byb2plY3RzL3R0eS5qcy93ZWItbGliL2V4cG9ydHMuanMiLCIvaG9tZS9jZHVkbGV5L3Byb2plY3RzL3R0eS5qcy93ZWItbGliL3RhYi5qcyIsIi9ob21lL2NkdWRsZXkvcHJvamVjdHMvdHR5LmpzL3dlYi1saWIvdHR5LmpzIiwiL2hvbWUvY2R1ZGxleS9wcm9qZWN0cy90dHkuanMvd2ViLWxpYi91dGlscy5qcyIsIi9ob21lL2NkdWRsZXkvcHJvamVjdHMvdHR5LmpzL3dlYi1saWIvd2luZG93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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RUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDO0FBQzdCLEdBQUMsR0FBRyxBQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLFNBQVMsR0FBSSxDQUFDLENBQUM7QUFDbEMsSUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUMxQixJQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0VBQzNCOztBQUVELFVBQVMsRUFBRSxHQUFHO0FBQ2IsTUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztBQUVULEdBQUMsR0FBRyxFQUFFLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDOUIsR0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUMvQixHQUFDLEdBQUcsQUFBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBSSxDQUFDLENBQUM7QUFDeEIsR0FBQyxHQUFHLEFBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUksQ0FBQyxDQUFDOztBQUV4QixNQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7QUFFbEIsSUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLElBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzs7QUFFckIsSUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3ZCLElBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUN0QixJQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDckIsTUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ3ZCLE1BQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7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LFFBQUssR0FBRyxHQUFHLENBQUM7R0FDWjtFQUNELENBQUMsQ0FBQzs7QUFFSCxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzs7QUFFckIsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7O0FBRXhCLEtBQUksS0FBSyxFQUFFO0FBQ1YsT0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0VBQ2Q7Q0FDRCxDQUFDOzs7OztxQkFLYSxNQUFNIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9tYXBcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9PYmplY3QkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuXG4gICAgICBfT2JqZWN0JGRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KSgpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX09iamVjdCRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIGdldChfeCwgX3gyLCBfeDMpIHtcbiAgdmFyIF9hZ2FpbiA9IHRydWU7XG5cbiAgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7XG4gICAgdmFyIG9iamVjdCA9IF94LFxuICAgICAgICBwcm9wZXJ0eSA9IF94MixcbiAgICAgICAgcmVjZWl2ZXIgPSBfeDM7XG4gICAgZGVzYyA9IHBhcmVudCA9IGdldHRlciA9IHVuZGVmaW5lZDtcbiAgICBfYWdhaW4gPSBmYWxzZTtcblxuICAgIHZhciBkZXNjID0gX09iamVjdCRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7XG5cbiAgICBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7XG5cbiAgICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF94ID0gcGFyZW50O1xuICAgICAgICBfeDIgPSBwcm9wZXJ0eTtcbiAgICAgICAgX3gzID0gcmVjZWl2ZXI7XG4gICAgICAgIF9hZ2FpbiA9IHRydWU7XG4gICAgICAgIGNvbnRpbnVlIF9mdW5jdGlvbjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7XG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGdldHRlciA9IGRlc2MuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfT2JqZWN0JGNyZWF0ZSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZVwiKVtcImRlZmF1bHRcIl07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IF9PYmplY3QkY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWFwJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5tYXAudG8tanNvbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzLyQnKS5jb3JlLk1hcDsiLCJ2YXIgJCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCl7XG4gIHJldHVybiAkLmNyZWF0ZShQLCBEKTtcbn07IiwidmFyICQgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG4gIHJldHVybiAkLnNldERlc2MoaXQsIGtleSwgZGVzYyk7XG59OyIsInZhciAkID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc3RhdGljcy1hY2NlcHQtcHJpbWl0aXZlcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIHJldHVybiAkLmdldERlc2MoaXQsIGtleSk7XG59OyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zdGF0aWNzLWFjY2VwdC1wcmltaXRpdmVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpLmNvcmUuT2JqZWN0LmtleXM7IiwidmFyICQgPSByZXF1aXJlKCcuLyQnKTtcbmZ1bmN0aW9uIGFzc2VydChjb25kaXRpb24sIG1zZzEsIG1zZzIpe1xuICBpZighY29uZGl0aW9uKXRocm93IFR5cGVFcnJvcihtc2cyID8gbXNnMSArIG1zZzIgOiBtc2cxKTtcbn1cbmFzc2VydC5kZWYgPSAkLmFzc2VydERlZmluZWQ7XG5hc3NlcnQuZm4gPSBmdW5jdGlvbihpdCl7XG4gIGlmKCEkLmlzRnVuY3Rpb24oaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5hc3NlcnQub2JqID0gZnVuY3Rpb24oaXQpe1xuICBpZighJC5pc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuYXNzZXJ0Lmluc3QgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKXRocm93IFR5cGVFcnJvcihuYW1lICsgXCI6IHVzZSB0aGUgJ25ldycgb3BlcmF0b3IhXCIpO1xuICByZXR1cm4gaXQ7XG59O1xubW9kdWxlLmV4cG9ydHMgPSBhc3NlcnQ7IiwidmFyICQgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBUQUcgICAgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgndG9TdHJpbmdUYWcnKVxuICAsIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5mdW5jdGlvbiBjb2YoaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufVxuY29mLmNsYXNzb2YgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBUO1xuICByZXR1cm4gaXQgPT0gdW5kZWZpbmVkID8gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogJ051bGwnXG4gICAgOiB0eXBlb2YgKFQgPSAoTyA9IE9iamVjdChpdCkpW1RBR10pID09ICdzdHJpbmcnID8gVCA6IGNvZihPKTtcbn07XG5jb2Yuc2V0ID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICEkLmhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkkLmhpZGUoaXQsIFRBRywgdGFnKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGNvZjsiLCIndXNlIHN0cmljdCc7XG52YXIgJCAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGN0eCAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgc2FmZSAgICAgPSByZXF1aXJlKCcuLyQudWlkJykuc2FmZVxuICAsIGFzc2VydCAgID0gcmVxdWlyZSgnLi8kLmFzc2VydCcpXG4gICwgZm9yT2YgICAgPSByZXF1aXJlKCcuLyQuZm9yLW9mJylcbiAgLCBzdGVwICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyJykuc3RlcFxuICAsIGhhcyAgICAgID0gJC5oYXNcbiAgLCBzZXQgICAgICA9ICQuc2V0XG4gICwgaXNPYmplY3QgPSAkLmlzT2JqZWN0XG4gICwgaGlkZSAgICAgPSAkLmhpZGVcbiAgLCBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGlzT2JqZWN0XG4gICwgSUQgICAgICAgPSBzYWZlKCdpZCcpXG4gICwgTzEgICAgICAgPSBzYWZlKCdPMScpXG4gICwgTEFTVCAgICAgPSBzYWZlKCdsYXN0JylcbiAgLCBGSVJTVCAgICA9IHNhZmUoJ2ZpcnN0JylcbiAgLCBJVEVSICAgICA9IHNhZmUoJ2l0ZXInKVxuICAsIFNJWkUgICAgID0gJC5ERVNDID8gc2FmZSgnc2l6ZScpIDogJ3NpemUnXG4gICwgaWQgICAgICAgPSAwO1xuXG5mdW5jdGlvbiBmYXN0S2V5KGl0LCBjcmVhdGUpe1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmKCFoYXMoaXQsIElEKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IGlkIHRvIGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIGlkXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG9iamVjdCBpZFxuICAgIGhpZGUoaXQsIElELCArK2lkKTtcbiAgLy8gcmV0dXJuIG9iamVjdCBpZCB3aXRoIHByZWZpeFxuICB9IHJldHVybiAnTycgKyBpdFtJRF07XG59XG5cbmZ1bmN0aW9uIGdldEVudHJ5KHRoYXQsIGtleSl7XG4gIC8vIGZhc3QgY2FzZVxuICB2YXIgaW5kZXggPSBmYXN0S2V5KGtleSksIGVudHJ5O1xuICBpZihpbmRleCAhPSAnRicpcmV0dXJuIHRoYXRbTzFdW2luZGV4XTtcbiAgLy8gZnJvemVuIG9iamVjdCBjYXNlXG4gIGZvcihlbnRyeSA9IHRoYXRbRklSU1RdOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcbiAgICBpZihlbnRyeS5rID09IGtleSlyZXR1cm4gZW50cnk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbihOQU1FLCBJU19NQVAsIEFEREVSKXtcbiAgICBmdW5jdGlvbiBDKCl7XG4gICAgICB2YXIgdGhhdCAgICAgPSBhc3NlcnQuaW5zdCh0aGlzLCBDLCBOQU1FKVxuICAgICAgICAsIGl0ZXJhYmxlID0gYXJndW1lbnRzWzBdO1xuICAgICAgc2V0KHRoYXQsIE8xLCAkLmNyZWF0ZShudWxsKSk7XG4gICAgICBzZXQodGhhdCwgU0laRSwgMCk7XG4gICAgICBzZXQodGhhdCwgTEFTVCwgdW5kZWZpbmVkKTtcbiAgICAgIHNldCh0aGF0LCBGSVJTVCwgdW5kZWZpbmVkKTtcbiAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfVxuICAgIHJlcXVpcmUoJy4vJC5taXgnKShDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMS4zLjEgTWFwLnByb3RvdHlwZS5jbGVhcigpXG4gICAgICAvLyAyMy4yLjMuMiBTZXQucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpe1xuICAgICAgICBmb3IodmFyIHRoYXQgPSB0aGlzLCBkYXRhID0gdGhhdFtPMV0sIGVudHJ5ID0gdGhhdFtGSVJTVF07IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKGVudHJ5LnApZW50cnkucCA9IGVudHJ5LnAubiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBkZWxldGUgZGF0YVtlbnRyeS5pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0W0ZJUlNUXSA9IHRoYXRbTEFTVF0gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoYXRbU0laRV0gPSAwO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy4zIE1hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjIuMy40IFNldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIHZhciB0aGF0ICA9IHRoaXNcbiAgICAgICAgICAsIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICAgICAgaWYoZW50cnkpe1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkublxuICAgICAgICAgICAgLCBwcmV2ID0gZW50cnkucDtcbiAgICAgICAgICBkZWxldGUgdGhhdFtPMV1bZW50cnkuaV07XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYocHJldilwcmV2Lm4gPSBuZXh0O1xuICAgICAgICAgIGlmKG5leHQpbmV4dC5wID0gcHJldjtcbiAgICAgICAgICBpZih0aGF0W0ZJUlNUXSA9PSBlbnRyeSl0aGF0W0ZJUlNUXSA9IG5leHQ7XG4gICAgICAgICAgaWYodGhhdFtMQVNUXSA9PSBlbnRyeSl0aGF0W0xBU1RdID0gcHJldjtcbiAgICAgICAgICB0aGF0W1NJWkVdLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XG4gICAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50c1sxXSwgMylcbiAgICAgICAgICAsIGVudHJ5O1xuICAgICAgICB3aGlsZShlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoaXNbRklSU1RdKXtcbiAgICAgICAgICBmKGVudHJ5LnYsIGVudHJ5LmssIHRoaXMpO1xuICAgICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpe1xuICAgICAgICByZXR1cm4gISFnZXRFbnRyeSh0aGlzLCBrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmKCQuREVTQykkLnNldERlc2MoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gYXNzZXJ0LmRlZih0aGlzW1NJWkVdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbih0aGF0LCBrZXksIHZhbHVlKXtcbiAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpXG4gICAgICAsIHByZXYsIGluZGV4O1xuICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxuICAgIGlmKGVudHJ5KXtcbiAgICAgIGVudHJ5LnYgPSB2YWx1ZTtcbiAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXRbTEFTVF0gPSBlbnRyeSA9IHtcbiAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksIC8vIDwtIGluZGV4XG4gICAgICAgIGs6IGtleSwgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBrZXlcbiAgICAgICAgdjogdmFsdWUsICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG4gICAgICAgIHA6IHByZXYgPSB0aGF0W0xBU1RdLCAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxuICAgICAgICBuOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxuICAgICAgICByOiBmYWxzZSAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gcmVtb3ZlZFxuICAgICAgfTtcbiAgICAgIGlmKCF0aGF0W0ZJUlNUXSl0aGF0W0ZJUlNUXSA9IGVudHJ5O1xuICAgICAgaWYocHJldilwcmV2Lm4gPSBlbnRyeTtcbiAgICAgIHRoYXRbU0laRV0rKztcbiAgICAgIC8vIGFkZCB0byBpbmRleFxuICAgICAgaWYoaW5kZXggIT0gJ0YnKXRoYXRbTzFdW2luZGV4XSA9IGVudHJ5O1xuICAgIH0gcmV0dXJuIHRoYXQ7XG4gIH0sXG4gIGdldEVudHJ5OiBnZXRFbnRyeSxcbiAgLy8gYWRkIC5rZXlzLCAudmFsdWVzLCAuZW50cmllcywgW0BAaXRlcmF0b3JdXG4gIC8vIDIzLjEuMy40LCAyMy4xLjMuOCwgMjMuMS4zLjExLCAyMy4xLjMuMTIsIDIzLjIuMy41LCAyMy4yLjMuOCwgMjMuMi4zLjEwLCAyMy4yLjMuMTFcbiAgc2V0SXRlcjogZnVuY3Rpb24oQywgTkFNRSwgSVNfTUFQKXtcbiAgICByZXF1aXJlKCcuLyQuaXRlci1kZWZpbmUnKShDLCBOQU1FLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gICAgICBzZXQodGhpcywgSVRFUiwge286IGl0ZXJhdGVkLCBrOiBraW5kfSk7XG4gICAgfSwgZnVuY3Rpb24oKXtcbiAgICAgIHZhciBpdGVyICA9IHRoaXNbSVRFUl1cbiAgICAgICAgLCBraW5kICA9IGl0ZXIua1xuICAgICAgICAsIGVudHJ5ID0gaXRlci5sO1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZighaXRlci5vIHx8ICEoaXRlci5sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiBpdGVyLm9bRklSU1RdKSl7XG4gICAgICAgIC8vIG9yIGZpbmlzaCB0aGUgaXRlcmF0aW9uXG4gICAgICAgIGl0ZXIubyA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHN0ZXAoMSk7XG4gICAgICB9XG4gICAgICAvLyByZXR1cm4gc3RlcCBieSBraW5kXG4gICAgICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGVudHJ5LmspO1xuICAgICAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBlbnRyeS52KTtcbiAgICAgIHJldHVybiBzdGVwKDAsIFtlbnRyeS5rLCBlbnRyeS52XSk7XG4gICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycgLCAhSVNfTUFQLCB0cnVlKTtcbiAgfVxufTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgJGRlZiAgPSByZXF1aXJlKCcuLyQuZGVmJylcbiAgLCBmb3JPZiA9IHJlcXVpcmUoJy4vJC5mb3Itb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSl7XG4gICRkZWYoJGRlZi5QLCBOQU1FLCB7XG4gICAgdG9KU09OOiBmdW5jdGlvbiB0b0pTT04oKXtcbiAgICAgIHZhciBhcnIgPSBbXTtcbiAgICAgIGZvck9mKHRoaXMsIGZhbHNlLCBhcnIucHVzaCwgYXJyKTtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuICB9KTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCAkZGVmICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxuICAsIEJVR0dZID0gcmVxdWlyZSgnLi8kLml0ZXInKS5CVUdHWVxuICAsIGZvck9mID0gcmVxdWlyZSgnLi8kLmZvci1vZicpXG4gICwgc3BlY2llcyA9IHJlcXVpcmUoJy4vJC5zcGVjaWVzJylcbiAgLCBhc3NlcnRJbnN0YW5jZSA9IHJlcXVpcmUoJy4vJC5hc3NlcnQnKS5pbnN0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUsIG1ldGhvZHMsIGNvbW1vbiwgSVNfTUFQLCBJU19XRUFLKXtcbiAgdmFyIEJhc2UgID0gJC5nW05BTUVdXG4gICAgLCBDICAgICA9IEJhc2VcbiAgICAsIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJ1xuICAgICwgcHJvdG8gPSBDICYmIEMucHJvdG90eXBlXG4gICAgLCBPICAgICA9IHt9O1xuICBmdW5jdGlvbiBmaXhNZXRob2QoS0VZLCBDSEFJTil7XG4gICAgaWYoJC5GVyl7XG4gICAgICB2YXIgbWV0aG9kID0gcHJvdG9bS0VZXTtcbiAgICAgIHJlcXVpcmUoJy4vJC5yZWRlZicpKHByb3RvLCBLRVksIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgICB2YXIgcmVzdWx0ID0gbWV0aG9kLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhLCBiKTtcbiAgICAgICAgcmV0dXJuIENIQUlOID8gdGhpcyA6IHJlc3VsdDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBpZighJC5pc0Z1bmN0aW9uKEMpIHx8ICEoSVNfV0VBSyB8fCAhQlVHR1kgJiYgcHJvdG8uZm9yRWFjaCAmJiBwcm90by5lbnRyaWVzKSl7XG4gICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3JcbiAgICBDID0gY29tbW9uLmdldENvbnN0cnVjdG9yKE5BTUUsIElTX01BUCwgQURERVIpO1xuICAgIHJlcXVpcmUoJy4vJC5taXgnKShDLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGluc3QgID0gbmV3IENcbiAgICAgICwgY2hhaW4gPSBpbnN0W0FEREVSXShJU19XRUFLID8ge30gOiAtMCwgMSlcbiAgICAgICwgYnVnZ3laZXJvO1xuICAgIC8vIHdyYXAgZm9yIGluaXQgY29sbGVjdGlvbnMgZnJvbSBpdGVyYWJsZVxuICAgIGlmKCFyZXF1aXJlKCcuLyQuaXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXsgbmV3IEMoaXRlcik7IH0pKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICAgIEMgPSBmdW5jdGlvbigpe1xuICAgICAgICBhc3NlcnRJbnN0YW5jZSh0aGlzLCBDLCBOQU1FKTtcbiAgICAgICAgdmFyIHRoYXQgICAgID0gbmV3IEJhc2VcbiAgICAgICAgICAsIGl0ZXJhYmxlID0gYXJndW1lbnRzWzBdO1xuICAgICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgICAgICByZXR1cm4gdGhhdDtcbiAgICAgIH07XG4gICAgICBDLnByb3RvdHlwZSA9IHByb3RvO1xuICAgICAgaWYoJC5GVylwcm90by5jb25zdHJ1Y3RvciA9IEM7XG4gICAgfVxuICAgIElTX1dFQUsgfHwgaW5zdC5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwga2V5KXtcbiAgICAgIGJ1Z2d5WmVybyA9IDEgLyBrZXkgPT09IC1JbmZpbml0eTtcbiAgICB9KTtcbiAgICAvLyBmaXggY29udmVydGluZyAtMCBrZXkgdG8gKzBcbiAgICBpZihidWdneVplcm8pe1xuICAgICAgZml4TWV0aG9kKCdkZWxldGUnKTtcbiAgICAgIGZpeE1ldGhvZCgnaGFzJyk7XG4gICAgICBJU19NQVAgJiYgZml4TWV0aG9kKCdnZXQnKTtcbiAgICB9XG4gICAgLy8gKyBmaXggLmFkZCAmIC5zZXQgZm9yIGNoYWluaW5nXG4gICAgaWYoYnVnZ3laZXJvIHx8IGNoYWluICE9PSBpbnN0KWZpeE1ldGhvZChBRERFUiwgdHJ1ZSk7XG4gIH1cblxuICByZXF1aXJlKCcuLyQuY29mJykuc2V0KEMsIE5BTUUpO1xuXG4gIE9bTkFNRV0gPSBDO1xuICAkZGVmKCRkZWYuRyArICRkZWYuVyArICRkZWYuRiAqIChDICE9IEJhc2UpLCBPKTtcbiAgc3BlY2llcyhDKTtcbiAgc3BlY2llcygkLmNvcmVbTkFNRV0pOyAvLyBmb3Igd3JhcHBlclxuXG4gIGlmKCFJU19XRUFLKWNvbW1vbi5zZXRJdGVyKEMsIE5BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIEM7XG59OyIsIi8vIE9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFzc2VydEZ1bmN0aW9uID0gcmVxdWlyZSgnLi8kLmFzc2VydCcpLmZuO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYXNzZXJ0RnVuY3Rpb24oZm4pO1xuICBpZih+bGVuZ3RoICYmIHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9IHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICAgIH07XG59OyIsInZhciAkICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBnbG9iYWwgICAgID0gJC5nXG4gICwgY29yZSAgICAgICA9ICQuY29yZVxuICAsIGlzRnVuY3Rpb24gPSAkLmlzRnVuY3Rpb247XG5mdW5jdGlvbiBjdHgoZm4sIHRoYXQpe1xuICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn1cbi8vIHR5cGUgYml0bWFwXG4kZGVmLkYgPSAxOyAgLy8gZm9yY2VkXG4kZGVmLkcgPSAyOyAgLy8gZ2xvYmFsXG4kZGVmLlMgPSA0OyAgLy8gc3RhdGljXG4kZGVmLlAgPSA4OyAgLy8gcHJvdG9cbiRkZWYuQiA9IDE2OyAvLyBiaW5kXG4kZGVmLlcgPSAzMjsgLy8gd3JhcFxuZnVuY3Rpb24gJGRlZih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIga2V5LCBvd24sIG91dCwgZXhwXG4gICAgLCBpc0dsb2JhbCA9IHR5cGUgJiAkZGVmLkdcbiAgICAsIGlzUHJvdG8gID0gdHlwZSAmICRkZWYuUFxuICAgICwgdGFyZ2V0ICAgPSBpc0dsb2JhbCA/IGdsb2JhbCA6IHR5cGUgJiAkZGVmLlNcbiAgICAgICAgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KS5wcm90b3R5cGVcbiAgICAsIGV4cG9ydHMgID0gaXNHbG9iYWwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgaWYoaXNHbG9iYWwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICEodHlwZSAmICRkZWYuRikgJiYgdGFyZ2V0ICYmIGtleSBpbiB0YXJnZXQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBpZihpc0dsb2JhbCAmJiAhaXNGdW5jdGlvbih0YXJnZXRba2V5XSkpZXhwID0gc291cmNlW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBlbHNlIGlmKHR5cGUgJiAkZGVmLkIgJiYgb3duKWV4cCA9IGN0eChvdXQsIGdsb2JhbCk7XG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICBlbHNlIGlmKHR5cGUgJiAkZGVmLlcgJiYgdGFyZ2V0W2tleV0gPT0gb3V0KSFmdW5jdGlvbihDKXtcbiAgICAgIGV4cCA9IGZ1bmN0aW9uKHBhcmFtKXtcbiAgICAgICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBDID8gbmV3IEMocGFyYW0pIDogQyhwYXJhbSk7XG4gICAgICB9O1xuICAgICAgZXhwLnByb3RvdHlwZSA9IEMucHJvdG90eXBlO1xuICAgIH0ob3V0KTtcbiAgICBlbHNlIGV4cCA9IGlzUHJvdG8gJiYgaXNGdW5jdGlvbihvdXQpID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0XG4gICAgZXhwb3J0c1trZXldID0gZXhwO1xuICAgIGlmKGlzUHJvdG8pKGV4cG9ydHMucHJvdG90eXBlIHx8IChleHBvcnRzLnByb3RvdHlwZSA9IHt9KSlba2V5XSA9IG91dDtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSAkZGVmOyIsInZhciBjdHggID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgZ2V0ICA9IHJlcXVpcmUoJy4vJC5pdGVyJykuZ2V0XG4gICwgY2FsbCA9IHJlcXVpcmUoJy4vJC5pdGVyLWNhbGwnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0KXtcbiAgdmFyIGl0ZXJhdG9yID0gZ2V0KGl0ZXJhYmxlKVxuICAgICwgZiAgICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIHN0ZXA7XG4gIHdoaWxlKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSl7XG4gICAgaWYoY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcykgPT09IGZhbHNlKXtcbiAgICAgIHJldHVybiBjYWxsLmNsb3NlKGl0ZXJhdG9yKTtcbiAgICB9XG4gIH1cbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigkKXtcbiAgJC5GVyAgID0gZmFsc2U7XG4gICQucGF0aCA9ICQuY29yZTtcbiAgcmV0dXJuICQ7XG59OyIsInZhciBhc3NlcnRPYmplY3QgPSByZXF1aXJlKCcuLyQuYXNzZXJ0Jykub2JqO1xuZnVuY3Rpb24gY2xvc2UoaXRlcmF0b3Ipe1xuICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICBpZihyZXQgIT09IHVuZGVmaW5lZClhc3NlcnRPYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbn1cbmZ1bmN0aW9uIGNhbGwoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhc3NlcnRPYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIH0gY2F0Y2goZSl7XG4gICAgY2xvc2UoaXRlcmF0b3IpO1xuICAgIHRocm93IGU7XG4gIH1cbn1cbmNhbGwuY2xvc2UgPSBjbG9zZTtcbm1vZHVsZS5leHBvcnRzID0gY2FsbDsiLCJ2YXIgJGRlZiAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmRlZicpXG4gICwgJHJlZGVmICAgICAgICAgID0gcmVxdWlyZSgnLi8kLnJlZGVmJylcbiAgLCAkICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGNvZiAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5jb2YnKVxuICAsICRpdGVyICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyJylcbiAgLCBTWU1CT0xfSVRFUkFUT1IgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBGRl9JVEVSQVRPUiAgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICAgPSAndmFsdWVzJ1xuICAsIEl0ZXJhdG9ycyAgICAgICA9ICRpdGVyLkl0ZXJhdG9ycztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0Upe1xuICAkaXRlci5jcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICBmdW5jdGlvbiBjcmVhdGVNZXRob2Qoa2luZCl7XG4gICAgZnVuY3Rpb24gJCQodGhhdCl7XG4gICAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoYXQsIGtpbmQpO1xuICAgIH1cbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiAkJCh0aGlzKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkJCh0aGlzKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiAkJCh0aGlzKTsgfTtcbiAgfVxuICB2YXIgVEFHICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIHByb3RvICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsIF9uYXRpdmUgID0gcHJvdG9bU1lNQk9MX0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgX2RlZmF1bHQgPSBfbmF0aXZlIHx8IGNyZWF0ZU1ldGhvZChERUZBVUxUKVxuICAgICwgbWV0aG9kcywga2V5O1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKF9uYXRpdmUpe1xuICAgIHZhciBJdGVyYXRvclByb3RvdHlwZSA9ICQuZ2V0UHJvdG8oX2RlZmF1bHQuY2FsbChuZXcgQmFzZSkpO1xuICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICBjb2Yuc2V0KEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgIC8vIEZGIGZpeFxuICAgIGlmKCQuRlcgJiYgJC5oYXMocHJvdG8sIEZGX0lURVJBVE9SKSkkaXRlci5zZXQoSXRlcmF0b3JQcm90b3R5cGUsICQudGhhdCk7XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCQuRlcpJGl0ZXIuc2V0KHByb3RvLCBfZGVmYXVsdCk7XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gX2RlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9ICQudGhhdDtcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgICAgICAgID8gX2RlZmF1bHQgOiBjcmVhdGVNZXRob2QoS0VZUyksXG4gICAgICB2YWx1ZXM6ICBERUZBVUxUID09IFZBTFVFUyA/IF9kZWZhdWx0IDogY3JlYXRlTWV0aG9kKFZBTFVFUyksXG4gICAgICBlbnRyaWVzOiBERUZBVUxUICE9IFZBTFVFUyA/IF9kZWZhdWx0IDogY3JlYXRlTWV0aG9kKCdlbnRyaWVzJylcbiAgICB9O1xuICAgIGlmKEZPUkNFKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpJHJlZGVmKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRkZWYoJGRlZi5QICsgJGRlZi5GICogJGl0ZXIuQlVHR1ksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG59OyIsInZhciBTWU1CT0xfSVRFUkFUT1IgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgICAgPSBmYWxzZTtcbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtTWU1CT0xfSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgaWYoIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltTWU1CT0xfSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgc2FmZSA9IHRydWU7IH07XG4gICAgYXJyW1NZTUJPTF9JVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciAkICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgY29mICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuY29mJylcbiAgLCBhc3NlcnRPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vJC5hc3NlcnQnKS5vYmpcbiAgLCBTWU1CT0xfSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEZGX0lURVJBVE9SICAgICAgID0gJ0BAaXRlcmF0b3InXG4gICwgSXRlcmF0b3JzICAgICAgICAgPSB7fVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxuc2V0SXRlcmF0b3IoSXRlcmF0b3JQcm90b3R5cGUsICQudGhhdCk7XG5mdW5jdGlvbiBzZXRJdGVyYXRvcihPLCB2YWx1ZSl7XG4gICQuaGlkZShPLCBTWU1CT0xfSVRFUkFUT1IsIHZhbHVlKTtcbiAgLy8gQWRkIGl0ZXJhdG9yIGZvciBGRiBpdGVyYXRvciBwcm90b2NvbFxuICBpZihGRl9JVEVSQVRPUiBpbiBbXSkkLmhpZGUoTywgRkZfSVRFUkFUT1IsIHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgQlVHR1k6ICdrZXlzJyBpbiBbXSAmJiAhKCduZXh0JyBpbiBbXS5rZXlzKCkpLFxuICBJdGVyYXRvcnM6IEl0ZXJhdG9ycyxcbiAgc3RlcDogZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICAgIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xuICB9LFxuICBpczogZnVuY3Rpb24oaXQpe1xuICAgIHZhciBPICAgICAgPSBPYmplY3QoaXQpXG4gICAgICAsIFN5bWJvbCA9ICQuZy5TeW1ib2xcbiAgICAgICwgU1lNICAgID0gU3ltYm9sICYmIFN5bWJvbC5pdGVyYXRvciB8fCBGRl9JVEVSQVRPUjtcbiAgICByZXR1cm4gU1lNIGluIE8gfHwgU1lNQk9MX0lURVJBVE9SIGluIE8gfHwgJC5oYXMoSXRlcmF0b3JzLCBjb2YuY2xhc3NvZihPKSk7XG4gIH0sXG4gIGdldDogZnVuY3Rpb24oaXQpe1xuICAgIHZhciBTeW1ib2wgID0gJC5nLlN5bWJvbFxuICAgICAgLCBleHQgICAgID0gaXRbU3ltYm9sICYmIFN5bWJvbC5pdGVyYXRvciB8fCBGRl9JVEVSQVRPUl1cbiAgICAgICwgZ2V0SXRlciA9IGV4dCB8fCBpdFtTWU1CT0xfSVRFUkFUT1JdIHx8IEl0ZXJhdG9yc1tjb2YuY2xhc3NvZihpdCldO1xuICAgIHJldHVybiBhc3NlcnRPYmplY3QoZ2V0SXRlci5jYWxsKGl0KSk7XG4gIH0sXG4gIHNldDogc2V0SXRlcmF0b3IsXG4gIGNyZWF0ZTogZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQsIHByb3RvKXtcbiAgICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSAkLmNyZWF0ZShwcm90byB8fCBJdGVyYXRvclByb3RvdHlwZSwge25leHQ6ICQuZGVzYygxLCBuZXh0KX0pO1xuICAgIGNvZi5zZXQoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG4gIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKClcbiAgLCBjb3JlICAgPSB7fVxuICAsIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5XG4gICwgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eVxuICAsIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yXG4gICwgbWF4ICAgPSBNYXRoLm1heFxuICAsIG1pbiAgID0gTWF0aC5taW47XG4vLyBUaGUgZW5naW5lIHdvcmtzIGZpbmUgd2l0aCBkZXNjcmlwdG9ycz8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eS5cbnZhciBERVNDID0gISFmdW5jdGlvbigpe1xuICB0cnkge1xuICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gMjsgfX0pLmEgPT0gMjtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufSgpO1xudmFyIGhpZGUgPSBjcmVhdGVEZWZpbmVyKDEpO1xuLy8gNy4xLjQgVG9JbnRlZ2VyXG5mdW5jdGlvbiB0b0ludGVnZXIoaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn1cbmZ1bmN0aW9uIGRlc2MoYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufVxuZnVuY3Rpb24gc2ltcGxlU2V0KG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59XG5mdW5jdGlvbiBjcmVhdGVEZWZpbmVyKGJpdG1hcCl7XG4gIHJldHVybiBERVNDID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgICByZXR1cm4gJC5zZXREZXNjKG9iamVjdCwga2V5LCBkZXNjKGJpdG1hcCwgdmFsdWUpKTtcbiAgfSA6IHNpbXBsZVNldDtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoaXQpe1xuICByZXR1cm4gaXQgIT09IG51bGwgJiYgKHR5cGVvZiBpdCA9PSAnb2JqZWN0JyB8fCB0eXBlb2YgaXQgPT0gJ2Z1bmN0aW9uJyk7XG59XG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gYXNzZXJ0RGVmaW5lZChpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn1cblxudmFyICQgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5mdycpKHtcbiAgZzogZ2xvYmFsLFxuICBjb3JlOiBjb3JlLFxuICBodG1sOiBnbG9iYWwuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAvLyBodHRwOi8vanNwZXJmLmNvbS9jb3JlLWpzLWlzb2JqZWN0XG4gIGlzT2JqZWN0OiAgIGlzT2JqZWN0LFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpdDogZnVuY3Rpb24oaXQpe1xuICAgIHJldHVybiBpdDtcbiAgfSxcbiAgdGhhdDogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgLy8gNy4xLjQgVG9JbnRlZ2VyXG4gIHRvSW50ZWdlcjogdG9JbnRlZ2VyLFxuICAvLyA3LjEuMTUgVG9MZW5ndGhcbiAgdG9MZW5ndGg6IGZ1bmN0aW9uKGl0KXtcbiAgICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxuICB9LFxuICB0b0luZGV4OiBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gICAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG4gIH0sXG4gIGhhczogZnVuY3Rpb24oaXQsIGtleSl7XG4gICAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG4gIH0sXG4gIGNyZWF0ZTogICAgIE9iamVjdC5jcmVhdGUsXG4gIGdldFByb3RvOiAgIE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgREVTQzogICAgICAgREVTQyxcbiAgZGVzYzogICAgICAgZGVzYyxcbiAgZ2V0RGVzYzogICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgc2V0RGVzYzogICAgZGVmaW5lUHJvcGVydHksXG4gIHNldERlc2NzOiAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzLFxuICBnZXRLZXlzOiAgICBPYmplY3Qua2V5cyxcbiAgZ2V0TmFtZXM6ICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsXG4gIGdldFN5bWJvbHM6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG4gIGFzc2VydERlZmluZWQ6IGFzc2VydERlZmluZWQsXG4gIC8vIER1bW15LCBmaXggZm9yIG5vdCBhcnJheS1saWtlIEVTMyBzdHJpbmcgaW4gZXM1IG1vZHVsZVxuICBFUzVPYmplY3Q6IE9iamVjdCxcbiAgdG9PYmplY3Q6IGZ1bmN0aW9uKGl0KXtcbiAgICByZXR1cm4gJC5FUzVPYmplY3QoYXNzZXJ0RGVmaW5lZChpdCkpO1xuICB9LFxuICBoaWRlOiBoaWRlLFxuICBkZWY6IGNyZWF0ZURlZmluZXIoMCksXG4gIHNldDogZ2xvYmFsLlN5bWJvbCA/IHNpbXBsZVNldCA6IGhpZGUsXG4gIGVhY2g6IFtdLmZvckVhY2hcbn0pO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbmlmKHR5cGVvZiBfX2UgIT0gJ3VuZGVmaW5lZCcpX19lID0gY29yZTtcbmlmKHR5cGVvZiBfX2cgIT0gJ3VuZGVmaW5lZCcpX19nID0gZ2xvYmFsOyIsInZhciAkcmVkZWYgPSByZXF1aXJlKCcuLyQucmVkZWYnKTtcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYyl7XHJcbiAgZm9yKHZhciBrZXkgaW4gc3JjKSRyZWRlZih0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xyXG4gIHJldHVybiB0YXJnZXQ7XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQnKS5oaWRlOyIsInZhciAkICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBTUEVDSUVTID0gcmVxdWlyZSgnLi8kLndrcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEMpe1xuICBpZigkLkRFU0MgJiYgIShTUEVDSUVTIGluIEMpKSQuc2V0RGVzYyhDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogJC50aGF0XG4gIH0pO1xufTsiLCIvLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxudmFyICQgPSByZXF1aXJlKCcuLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoJC5hc3NlcnREZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gJC50b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbFxuICAgICAgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTsiLCJ2YXIgc2lkID0gMDtcbmZ1bmN0aW9uIHVpZChrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytzaWQgKyBNYXRoLnJhbmRvbSgpKS50b1N0cmluZygzNikpO1xufVxudWlkLnNhZmUgPSByZXF1aXJlKCcuLyQnKS5nLlN5bWJvbCB8fCB1aWQ7XG5tb2R1bGUuZXhwb3J0cyA9IHVpZDsiLCIvLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG52YXIgJCAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi8kLndrcycpKCd1bnNjb3BhYmxlcycpO1xuaWYoJC5GVyAmJiAhKFVOU0NPUEFCTEVTIGluIFtdKSkkLmhpZGUoQXJyYXkucHJvdG90eXBlLCBVTlNDT1BBQkxFUywge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICBpZigkLkZXKVtdW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vJCcpLmdcbiAgLCBzdG9yZSAgPSB7fTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIGdsb2JhbC5TeW1ib2wgJiYgZ2xvYmFsLlN5bWJvbFtuYW1lXSB8fCByZXF1aXJlKCcuLyQudWlkJykuc2FmZSgnU3ltYm9sLicgKyBuYW1lKSk7XG59OyIsInZhciAkICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBzZXRVbnNjb3BlID0gcmVxdWlyZSgnLi8kLnVuc2NvcGUnKVxuICAsIElURVIgICAgICAgPSByZXF1aXJlKCcuLyQudWlkJykuc2FmZSgnaXRlcicpXG4gICwgJGl0ZXIgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyJylcbiAgLCBzdGVwICAgICAgID0gJGl0ZXIuc3RlcFxuICAsIEl0ZXJhdG9ycyAgPSAkaXRlci5JdGVyYXRvcnM7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gICQuc2V0KHRoaXMsIElURVIsIHtvOiAkLnRvT2JqZWN0KGl0ZXJhdGVkKSwgaTogMCwgazoga2luZH0pO1xuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgaXRlciAgPSB0aGlzW0lURVJdXG4gICAgLCBPICAgICA9IGl0ZXIub1xuICAgICwga2luZCAgPSBpdGVyLmtcbiAgICAsIGluZGV4ID0gaXRlci5pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICBpdGVyLm8gPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbnNldFVuc2NvcGUoJ2tleXMnKTtcbnNldFVuc2NvcGUoJ3ZhbHVlcycpO1xuc2V0VW5zY29wZSgnZW50cmllcycpOyIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuLyQuY29sbGVjdGlvbi1zdHJvbmcnKTtcblxuLy8gMjMuMSBNYXAgT2JqZWN0c1xucmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24nKSgnTWFwJywge1xuICAvLyAyMy4xLjMuNiBNYXAucHJvdG90eXBlLmdldChrZXkpXG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSl7XG4gICAgdmFyIGVudHJ5ID0gc3Ryb25nLmdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnY7XG4gIH0sXG4gIC8vIDIzLjEuMy45IE1hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXG4gIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpe1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nLCB0cnVlKTsiLCJ2YXIgJCAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsICRkZWYgICAgID0gcmVxdWlyZSgnLi8kLmRlZicpXG4gICwgaXNPYmplY3QgPSAkLmlzT2JqZWN0XG4gICwgdG9PYmplY3QgPSAkLnRvT2JqZWN0O1xuJC5lYWNoLmNhbGwoKCdmcmVlemUsc2VhbCxwcmV2ZW50RXh0ZW5zaW9ucyxpc0Zyb3plbixpc1NlYWxlZCxpc0V4dGVuc2libGUsJyArXG4gICdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsZ2V0UHJvdG90eXBlT2Ysa2V5cyxnZXRPd25Qcm9wZXJ0eU5hbWVzJykuc3BsaXQoJywnKVxuLCBmdW5jdGlvbihLRVksIElEKXtcbiAgdmFyIGZuICAgICA9ICgkLmNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldXG4gICAgLCBmb3JjZWQgPSAwXG4gICAgLCBtZXRob2QgPSB7fTtcbiAgbWV0aG9kW0tFWV0gPSBJRCA9PSAwID8gZnVuY3Rpb24gZnJlZXplKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogaXQ7XG4gIH0gOiBJRCA9PSAxID8gZnVuY3Rpb24gc2VhbChpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IGl0O1xuICB9IDogSUQgPT0gMiA/IGZ1bmN0aW9uIHByZXZlbnRFeHRlbnNpb25zKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogaXQ7XG4gIH0gOiBJRCA9PSAzID8gZnVuY3Rpb24gaXNGcm96ZW4oaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiB0cnVlO1xuICB9IDogSUQgPT0gNCA/IGZ1bmN0aW9uIGlzU2VhbGVkKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogdHJ1ZTtcbiAgfSA6IElEID09IDUgPyBmdW5jdGlvbiBpc0V4dGVuc2libGUoaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiBmYWxzZTtcbiAgfSA6IElEID09IDYgPyBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gICAgcmV0dXJuIGZuKHRvT2JqZWN0KGl0KSwga2V5KTtcbiAgfSA6IElEID09IDcgPyBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCl7XG4gICAgcmV0dXJuIGZuKE9iamVjdCgkLmFzc2VydERlZmluZWQoaXQpKSk7XG4gIH0gOiBJRCA9PSA4ID8gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuIGZuKHRvT2JqZWN0KGl0KSk7XG4gIH0gOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgICByZXR1cm4gZm4odG9PYmplY3QoaXQpKTtcbiAgfTtcbiAgdHJ5IHtcbiAgICBmbigneicpO1xuICB9IGNhdGNoKGUpe1xuICAgIGZvcmNlZCA9IDE7XG4gIH1cbiAgJGRlZigkZGVmLlMgKyAkZGVmLkYgKiBmb3JjZWQsICdPYmplY3QnLCBtZXRob2QpO1xufSk7IiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi8kLmNvZicpXG4gICwgdG1wID0ge307XG50bXBbcmVxdWlyZSgnLi8kLndrcycpKCd0b1N0cmluZ1RhZycpXSA9ICd6JztcbmlmKHJlcXVpcmUoJy4vJCcpLkZXICYmIGNvZih0bXApICE9ICd6Jyl7XG4gIHJlcXVpcmUoJy4vJC5yZWRlZicpKE9iamVjdC5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuICdbb2JqZWN0ICcgKyBjb2YuY2xhc3NvZih0aGlzKSArICddJztcbiAgfSwgdHJ1ZSk7XG59IiwidmFyIHNldCAgID0gcmVxdWlyZSgnLi8kJykuc2V0XG4gICwgJGF0ICAgPSByZXF1aXJlKCcuLyQuc3RyaW5nLWF0JykodHJ1ZSlcbiAgLCBJVEVSICA9IHJlcXVpcmUoJy4vJC51aWQnKS5zYWZlKCdpdGVyJylcbiAgLCAkaXRlciA9IHJlcXVpcmUoJy4vJC5pdGVyJylcbiAgLCBzdGVwICA9ICRpdGVyLnN0ZXA7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgc2V0KHRoaXMsIElURVIsIHtvOiBTdHJpbmcoaXRlcmF0ZWQpLCBpOiAwfSk7XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgaXRlciAgPSB0aGlzW0lURVJdXG4gICAgLCBPICAgICA9IGl0ZXIub1xuICAgICwgaW5kZXggPSBpdGVyLmlcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4gc3RlcCgxKTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICBpdGVyLmkgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4gc3RlcCgwLCBwb2ludCk7XG59KTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG5yZXF1aXJlKCcuLyQuY29sbGVjdGlvbi10by1qc29uJykoJ01hcCcpOyIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgJCAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIEl0ZXJhdG9ycyAgID0gcmVxdWlyZSgnLi8kLml0ZXInKS5JdGVyYXRvcnNcbiAgLCBJVEVSQVRPUiAgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5VmFsdWVzID0gSXRlcmF0b3JzLkFycmF5XG4gICwgTm9kZUxpc3QgICAgPSAkLmcuTm9kZUxpc3Q7XG5pZigkLkZXICYmIE5vZGVMaXN0ICYmICEoSVRFUkFUT1IgaW4gTm9kZUxpc3QucHJvdG90eXBlKSl7XG4gICQuaGlkZShOb2RlTGlzdC5wcm90b3R5cGUsIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG59XG5JdGVyYXRvcnMuTm9kZUxpc3QgPSBBcnJheVZhbHVlczsiLCIvKipcbiAqIHRlcm0uanMgLSBhbiB4dGVybSBlbXVsYXRvclxuICogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTMsIENocmlzdG9waGVyIEplZmZyZXkgKE1JVCBMaWNlbnNlKVxuICogaHR0cHM6Ly9naXRodWIuY29tL2NoamovdGVybS5qc1xuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKlxuICogT3JpZ2luYWxseSBmb3JrZWQgZnJvbSAod2l0aCB0aGUgYXV0aG9yJ3MgcGVybWlzc2lvbik6XG4gKiAgIEZhYnJpY2UgQmVsbGFyZCdzIGphdmFzY3JpcHQgdnQxMDAgZm9yIGpzbGludXg6XG4gKiAgIGh0dHA6Ly9iZWxsYXJkLm9yZy9qc2xpbnV4L1xuICogICBDb3B5cmlnaHQgKGMpIDIwMTEgRmFicmljZSBCZWxsYXJkXG4gKiAgIFRoZSBvcmlnaW5hbCBkZXNpZ24gcmVtYWlucy4gVGhlIHRlcm1pbmFsIGl0c2VsZlxuICogICBoYXMgYmVlbiBleHRlbmRlZCB0byBpbmNsdWRlIHh0ZXJtIENTSSBjb2RlcywgYW1vbmdcbiAqICAgb3RoZXIgZmVhdHVyZXMuXG4gKi9cblxuOyhmdW5jdGlvbigpIHtcblxuLyoqXG4gKiBUZXJtaW5hbCBFbXVsYXRpb24gUmVmZXJlbmNlczpcbiAqICAgaHR0cDovL3Z0MTAwLm5ldC9cbiAqICAgaHR0cDovL2ludmlzaWJsZS1pc2xhbmQubmV0L3h0ZXJtL2N0bHNlcXMvY3Rsc2Vxcy50eHRcbiAqICAgaHR0cDovL2ludmlzaWJsZS1pc2xhbmQubmV0L3h0ZXJtL2N0bHNlcXMvY3Rsc2Vxcy5odG1sXG4gKiAgIGh0dHA6Ly9pbnZpc2libGUtaXNsYW5kLm5ldC92dHRlc3QvXG4gKiAgIGh0dHA6Ly93d3cuaW53YXAuY29tL3BkcDEwL2Fuc2ljb2RlLnR4dFxuICogICBodHRwOi8vbGludXguZGllLm5ldC9tYW4vNC9jb25zb2xlX2NvZGVzXG4gKiAgIGh0dHA6Ly9saW51eC5kaWUubmV0L21hbi83L3VyeHZ0XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFNoYXJlZFxuICovXG5cbnZhciB3aW5kb3cgPSB0aGlzXG4gICwgZG9jdW1lbnQgPSB0aGlzLmRvY3VtZW50O1xuXG4vKipcbiAqIEV2ZW50RW1pdHRlclxuICovXG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdGhpcy5fZXZlbnRzW3R5cGVdID0gdGhpcy5fZXZlbnRzW3R5cGVdIHx8IFtdO1xuICB0aGlzLl9ldmVudHNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGlmICghdGhpcy5fZXZlbnRzW3R5cGVdKSByZXR1cm47XG5cbiAgdmFyIG9iaiA9IHRoaXMuX2V2ZW50c1t0eXBlXVxuICAgICwgaSA9IG9iai5sZW5ndGg7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIGlmIChvYmpbaV0gPT09IGxpc3RlbmVyIHx8IG9ialtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgIG9iai5zcGxpY2UoaSwgMSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICBpZiAodGhpcy5fZXZlbnRzW3R5cGVdKSBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgZnVuY3Rpb24gb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgb24pO1xuICAgIHJldHVybiBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfVxuICBvbi5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICByZXR1cm4gdGhpcy5vbih0eXBlLCBvbik7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIGlmICghdGhpcy5fZXZlbnRzW3R5cGVdKSByZXR1cm47XG5cbiAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gICAgLCBvYmogPSB0aGlzLl9ldmVudHNbdHlwZV1cbiAgICAsIGwgPSBvYmoubGVuZ3RoXG4gICAgLCBpID0gMDtcblxuICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgIG9ialtpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfVxufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNbdHlwZV0gPSB0aGlzLl9ldmVudHNbdHlwZV0gfHwgW107XG59O1xuXG4vKipcbiAqIFN0YXRlc1xuICovXG5cbnZhciBub3JtYWwgPSAwXG4gICwgZXNjYXBlZCA9IDFcbiAgLCBjc2kgPSAyXG4gICwgb3NjID0gM1xuICAsIGNoYXJzZXQgPSA0XG4gICwgZGNzID0gNVxuICAsIGlnbm9yZSA9IDY7XG5cbi8qKlxuICogVGVybWluYWxcbiAqL1xuXG5mdW5jdGlvbiBUZXJtaW5hbChvcHRpb25zKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVGVybWluYWwpKSB7XG4gICAgcmV0dXJuIG5ldyBUZXJtaW5hbChhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgfVxuXG4gIEV2ZW50RW1pdHRlci5jYWxsKHRoaXMpO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ251bWJlcicpIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgY29sczogYXJndW1lbnRzWzBdLFxuICAgICAgcm93czogYXJndW1lbnRzWzFdLFxuICAgICAgaGFuZGxlcjogYXJndW1lbnRzWzJdXG4gICAgfTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGVhY2goa2V5cyhUZXJtaW5hbC5kZWZhdWx0cyksIGZ1bmN0aW9uKGtleSkge1xuICAgIGlmIChvcHRpb25zW2tleV0gPT0gbnVsbCkge1xuICAgICAgb3B0aW9uc1trZXldID0gVGVybWluYWwub3B0aW9uc1trZXldO1xuICAgICAgLy8gTGVnYWN5OlxuICAgICAgaWYgKFRlcm1pbmFsW2tleV0gIT09IFRlcm1pbmFsLmRlZmF1bHRzW2tleV0pIHtcbiAgICAgICAgb3B0aW9uc1trZXldID0gVGVybWluYWxba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2VsZltrZXldID0gb3B0aW9uc1trZXldO1xuICB9KTtcblxuICBpZiAob3B0aW9ucy5jb2xvcnMubGVuZ3RoID09PSA4KSB7XG4gICAgb3B0aW9ucy5jb2xvcnMgPSBvcHRpb25zLmNvbG9ycy5jb25jYXQoVGVybWluYWwuX2NvbG9ycy5zbGljZSg4KSk7XG4gIH0gZWxzZSBpZiAob3B0aW9ucy5jb2xvcnMubGVuZ3RoID09PSAxNikge1xuICAgIG9wdGlvbnMuY29sb3JzID0gb3B0aW9ucy5jb2xvcnMuY29uY2F0KFRlcm1pbmFsLl9jb2xvcnMuc2xpY2UoMTYpKTtcbiAgfSBlbHNlIGlmIChvcHRpb25zLmNvbG9ycy5sZW5ndGggPT09IDEwKSB7XG4gICAgb3B0aW9ucy5jb2xvcnMgPSBvcHRpb25zLmNvbG9ycy5zbGljZSgwLCAtMikuY29uY2F0KFxuICAgICAgVGVybWluYWwuX2NvbG9ycy5zbGljZSg4LCAtMiksIG9wdGlvbnMuY29sb3JzLnNsaWNlKC0yKSk7XG4gIH0gZWxzZSBpZiAob3B0aW9ucy5jb2xvcnMubGVuZ3RoID09PSAxOCkge1xuICAgIG9wdGlvbnMuY29sb3JzID0gb3B0aW9ucy5jb2xvcnMuY29uY2F0KFxuICAgICAgVGVybWluYWwuX2NvbG9ycy5zbGljZSgxNiwgLTIpLCBvcHRpb25zLmNvbG9ycy5zbGljZSgtMikpO1xuICB9XG4gIHRoaXMuY29sb3JzID0gb3B0aW9ucy5jb2xvcnM7XG5cbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAvLyB0aGlzLmNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQgfHwgd2luZG93O1xuICAvLyB0aGlzLmRvY3VtZW50ID0gb3B0aW9ucy5kb2N1bWVudCB8fCBkb2N1bWVudDtcbiAgdGhpcy5wYXJlbnQgPSBvcHRpb25zLmJvZHkgfHwgb3B0aW9ucy5wYXJlbnRcbiAgICB8fCAoZG9jdW1lbnQgPyBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdIDogbnVsbCk7XG5cbiAgdGhpcy5jb2xzID0gb3B0aW9ucy5jb2xzIHx8IG9wdGlvbnMuZ2VvbWV0cnlbMF07XG4gIHRoaXMucm93cyA9IG9wdGlvbnMucm93cyB8fCBvcHRpb25zLmdlb21ldHJ5WzFdO1xuXG4gIGlmIChvcHRpb25zLmhhbmRsZXIpIHtcbiAgICB0aGlzLm9uKCdkYXRhJywgb3B0aW9ucy5oYW5kbGVyKTtcbiAgfVxuXG4gIHRoaXMueWJhc2UgPSAwO1xuICB0aGlzLnlkaXNwID0gMDtcbiAgdGhpcy54ID0gMDtcbiAgdGhpcy55ID0gMDtcbiAgdGhpcy5jdXJzb3JTdGF0ZSA9IDA7XG4gIHRoaXMuY3Vyc29ySGlkZGVuID0gZmFsc2U7XG4gIHRoaXMuY29udmVydEVvbDtcbiAgdGhpcy5zdGF0ZSA9IDA7XG4gIHRoaXMucXVldWUgPSAnJztcbiAgdGhpcy5zY3JvbGxUb3AgPSAwO1xuICB0aGlzLnNjcm9sbEJvdHRvbSA9IHRoaXMucm93cyAtIDE7XG5cbiAgLy8gbW9kZXNcbiAgdGhpcy5hcHBsaWNhdGlvbktleXBhZCA9IGZhbHNlO1xuICB0aGlzLmFwcGxpY2F0aW9uQ3Vyc29yID0gZmFsc2U7XG4gIHRoaXMub3JpZ2luTW9kZSA9IGZhbHNlO1xuICB0aGlzLmluc2VydE1vZGUgPSBmYWxzZTtcbiAgdGhpcy53cmFwYXJvdW5kTW9kZSA9IGZhbHNlO1xuICB0aGlzLm5vcm1hbCA9IG51bGw7XG5cbiAgLy8gc2VsZWN0IG1vZGVzXG4gIHRoaXMucHJlZml4TW9kZSA9IGZhbHNlO1xuICB0aGlzLnNlbGVjdE1vZGUgPSBmYWxzZTtcbiAgdGhpcy52aXN1YWxNb2RlID0gZmFsc2U7XG4gIHRoaXMuc2VhcmNoTW9kZSA9IGZhbHNlO1xuICB0aGlzLnNlYXJjaERvd247XG4gIHRoaXMuZW50cnkgPSAnJztcbiAgdGhpcy5lbnRyeVByZWZpeCA9ICdTZWFyY2g6ICc7XG4gIHRoaXMuX3JlYWw7XG4gIHRoaXMuX3NlbGVjdGVkO1xuICB0aGlzLl90ZXh0YXJlYTtcblxuICAvLyBjaGFyc2V0XG4gIHRoaXMuY2hhcnNldCA9IG51bGw7XG4gIHRoaXMuZ2NoYXJzZXQgPSBudWxsO1xuICB0aGlzLmdsZXZlbCA9IDA7XG4gIHRoaXMuY2hhcnNldHMgPSBbbnVsbF07XG5cbiAgLy8gbW91c2UgcHJvcGVydGllc1xuICB0aGlzLmRlY0xvY2F0b3I7XG4gIHRoaXMueDEwTW91c2U7XG4gIHRoaXMudnQyMDBNb3VzZTtcbiAgdGhpcy52dDMwME1vdXNlO1xuICB0aGlzLm5vcm1hbE1vdXNlO1xuICB0aGlzLm1vdXNlRXZlbnRzO1xuICB0aGlzLnNlbmRGb2N1cztcbiAgdGhpcy51dGZNb3VzZTtcbiAgdGhpcy5zZ3JNb3VzZTtcbiAgdGhpcy51cnh2dE1vdXNlO1xuXG4gIC8vIG1pc2NcbiAgdGhpcy5lbGVtZW50O1xuICB0aGlzLmNoaWxkcmVuO1xuICB0aGlzLnJlZnJlc2hTdGFydDtcbiAgdGhpcy5yZWZyZXNoRW5kO1xuICB0aGlzLnNhdmVkWDtcbiAgdGhpcy5zYXZlZFk7XG4gIHRoaXMuc2F2ZWRDb2xzO1xuXG4gIC8vIHN0cmVhbVxuICB0aGlzLnJlYWRhYmxlID0gdHJ1ZTtcbiAgdGhpcy53cml0YWJsZSA9IHRydWU7XG5cbiAgdGhpcy5kZWZBdHRyID0gKDAgPDwgMTgpIHwgKDI1NyA8PCA5KSB8ICgyNTYgPDwgMCk7XG4gIHRoaXMuY3VyQXR0ciA9IHRoaXMuZGVmQXR0cjtcblxuICB0aGlzLnBhcmFtcyA9IFtdO1xuICB0aGlzLmN1cnJlbnRQYXJhbSA9IDA7XG4gIHRoaXMucHJlZml4ID0gJyc7XG4gIHRoaXMucG9zdGZpeCA9ICcnO1xuXG4gIHRoaXMubGluZXMgPSBbXTtcbiAgdmFyIGkgPSB0aGlzLnJvd3M7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB0aGlzLmxpbmVzLnB1c2godGhpcy5ibGFua0xpbmUoKSk7XG4gIH1cblxuICB0aGlzLnRhYnM7XG4gIHRoaXMuc2V0dXBTdG9wcygpO1xufVxuXG5pbmhlcml0cyhUZXJtaW5hbCwgRXZlbnRFbWl0dGVyKTtcblxuLy8gYmFja19jb2xvcl9lcmFzZSBmZWF0dXJlIGZvciB4dGVybS5cblRlcm1pbmFsLnByb3RvdHlwZS5lcmFzZUF0dHIgPSBmdW5jdGlvbigpIHtcbiAgLy8gaWYgKHRoaXMuaXMoJ3NjcmVlbicpKSByZXR1cm4gdGhpcy5kZWZBdHRyO1xuICByZXR1cm4gKHRoaXMuZGVmQXR0ciAmIH4weDFmZikgfCAodGhpcy5jdXJBdHRyICYgMHgxZmYpO1xufTtcblxuLyoqXG4gKiBDb2xvcnNcbiAqL1xuXG4vLyBDb2xvcnMgMC0xNVxuVGVybWluYWwudGFuZ29Db2xvcnMgPSBbXG4gIC8vIGRhcms6XG4gICcjMmUzNDM2JyxcbiAgJyNjYzAwMDAnLFxuICAnIzRlOWEwNicsXG4gICcjYzRhMDAwJyxcbiAgJyMzNDY1YTQnLFxuICAnIzc1NTA3YicsXG4gICcjMDY5ODlhJyxcbiAgJyNkM2Q3Y2YnLFxuICAvLyBicmlnaHQ6XG4gICcjNTU1NzUzJyxcbiAgJyNlZjI5MjknLFxuICAnIzhhZTIzNCcsXG4gICcjZmNlOTRmJyxcbiAgJyM3MjlmY2YnLFxuICAnI2FkN2ZhOCcsXG4gICcjMzRlMmUyJyxcbiAgJyNlZWVlZWMnXG5dO1xuXG5UZXJtaW5hbC54dGVybUNvbG9ycyA9IFtcbiAgLy8gZGFyazpcbiAgJyMwMDAwMDAnLCAvLyBibGFja1xuICAnI2NkMDAwMCcsIC8vIHJlZDNcbiAgJyMwMGNkMDAnLCAvLyBncmVlbjNcbiAgJyNjZGNkMDAnLCAvLyB5ZWxsb3czXG4gICcjMDAwMGVlJywgLy8gYmx1ZTJcbiAgJyNjZDAwY2QnLCAvLyBtYWdlbnRhM1xuICAnIzAwY2RjZCcsIC8vIGN5YW4zXG4gICcjZTVlNWU1JywgLy8gZ3JheTkwXG4gIC8vIGJyaWdodDpcbiAgJyM3ZjdmN2YnLCAvLyBncmF5NTBcbiAgJyNmZjAwMDAnLCAvLyByZWRcbiAgJyMwMGZmMDAnLCAvLyBncmVlblxuICAnI2ZmZmYwMCcsIC8vIHllbGxvd1xuICAnIzVjNWNmZicsIC8vIHJnYjo1Yy81Yy9mZlxuICAnI2ZmMDBmZicsIC8vIG1hZ2VudGFcbiAgJyMwMGZmZmYnLCAvLyBjeWFuXG4gICcjZmZmZmZmJyAgLy8gd2hpdGVcbl07XG5cbi8vIENvbG9ycyAwLTE1ICsgMTYtMjU1XG4vLyBNdWNoIHRoYW5rcyB0byBUb29UYWxsTmF0ZSBmb3Igd3JpdGluZyB0aGlzLlxuVGVybWluYWwuY29sb3JzID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgY29sb3JzID0gVGVybWluYWwudGFuZ29Db2xvcnMuc2xpY2UoKVxuICAgICwgciA9IFsweDAwLCAweDVmLCAweDg3LCAweGFmLCAweGQ3LCAweGZmXVxuICAgICwgaTtcblxuICAvLyAxNi0yMzFcbiAgaSA9IDA7XG4gIGZvciAoOyBpIDwgMjE2OyBpKyspIHtcbiAgICBvdXQoclsoaSAvIDM2KSAlIDYgfCAwXSwgclsoaSAvIDYpICUgNiB8IDBdLCByW2kgJSA2XSk7XG4gIH1cblxuICAvLyAyMzItMjU1IChncmV5KVxuICBpID0gMDtcbiAgZm9yICg7IGkgPCAyNDsgaSsrKSB7XG4gICAgciA9IDggKyBpICogMTA7XG4gICAgb3V0KHIsIHIsIHIpO1xuICB9XG5cbiAgZnVuY3Rpb24gb3V0KHIsIGcsIGIpIHtcbiAgICBjb2xvcnMucHVzaCgnIycgKyBoZXgocikgKyBoZXgoZykgKyBoZXgoYikpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGV4KGMpIHtcbiAgICBjID0gYy50b1N0cmluZygxNik7XG4gICAgcmV0dXJuIGMubGVuZ3RoIDwgMiA/ICcwJyArIGMgOiBjO1xuICB9XG5cbiAgcmV0dXJuIGNvbG9ycztcbn0pKCk7XG5cbi8vIERlZmF1bHQgQkcvRkdcblRlcm1pbmFsLmNvbG9yc1syNTZdID0gJyMwMDAwMDAnO1xuVGVybWluYWwuY29sb3JzWzI1N10gPSAnI2YwZjBmMCc7XG5cblRlcm1pbmFsLl9jb2xvcnMgPSBUZXJtaW5hbC5jb2xvcnMuc2xpY2UoKTtcblxuVGVybWluYWwudmNvbG9ycyA9IChmdW5jdGlvbigpIHtcbiAgdmFyIG91dCA9IFtdXG4gICAgLCBjb2xvcnMgPSBUZXJtaW5hbC5jb2xvcnNcbiAgICAsIGkgPSAwXG4gICAgLCBjb2xvcjtcblxuICBmb3IgKDsgaSA8IDI1NjsgaSsrKSB7XG4gICAgY29sb3IgPSBwYXJzZUludChjb2xvcnNbaV0uc3Vic3RyaW5nKDEpLCAxNik7XG4gICAgb3V0LnB1c2goW1xuICAgICAgKGNvbG9yID4+IDE2KSAmIDB4ZmYsXG4gICAgICAoY29sb3IgPj4gOCkgJiAweGZmLFxuICAgICAgY29sb3IgJiAweGZmXG4gICAgXSk7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufSkoKTtcblxuLyoqXG4gKiBPcHRpb25zXG4gKi9cblxuVGVybWluYWwuZGVmYXVsdHMgPSB7XG4gIGNvbG9yczogVGVybWluYWwuY29sb3JzLFxuICBjb252ZXJ0RW9sOiBmYWxzZSxcbiAgdGVybU5hbWU6ICd4dGVybScsXG4gIGdlb21ldHJ5OiBbODAsIDI0XSxcbiAgY3Vyc29yQmxpbms6IHRydWUsXG4gIHZpc3VhbEJlbGw6IGZhbHNlLFxuICBwb3BPbkJlbGw6IGZhbHNlLFxuICBzY3JvbGxiYWNrOiAxMDAwLFxuICBzY3JlZW5LZXlzOiBmYWxzZSxcbiAgZGVidWc6IGZhbHNlLFxuICB1c2VTdHlsZTogZmFsc2VcbiAgLy8gcHJvZ3JhbUZlYXR1cmVzOiBmYWxzZSxcbiAgLy8gZm9jdXNLZXlzOiBmYWxzZSxcbn07XG5cblRlcm1pbmFsLm9wdGlvbnMgPSB7fTtcblxuZWFjaChrZXlzKFRlcm1pbmFsLmRlZmF1bHRzKSwgZnVuY3Rpb24oa2V5KSB7XG4gIFRlcm1pbmFsW2tleV0gPSBUZXJtaW5hbC5kZWZhdWx0c1trZXldO1xuICBUZXJtaW5hbC5vcHRpb25zW2tleV0gPSBUZXJtaW5hbC5kZWZhdWx0c1trZXldO1xufSk7XG5cbi8qKlxuICogRm9jdXNlZCBUZXJtaW5hbFxuICovXG5cblRlcm1pbmFsLmZvY3VzID0gbnVsbDtcblxuVGVybWluYWwucHJvdG90eXBlLmZvY3VzID0gZnVuY3Rpb24oKSB7XG4gIGlmIChUZXJtaW5hbC5mb2N1cyA9PT0gdGhpcykgcmV0dXJuO1xuXG4gIGlmIChUZXJtaW5hbC5mb2N1cykge1xuICAgIFRlcm1pbmFsLmZvY3VzLmJsdXIoKTtcbiAgfVxuXG4gIGlmICh0aGlzLnNlbmRGb2N1cykgdGhpcy5zZW5kKCdcXHgxYltJJyk7XG4gIHRoaXMuc2hvd0N1cnNvcigpO1xuXG4gIC8vIHRyeSB7XG4gIC8vICAgdGhpcy5lbGVtZW50LmZvY3VzKCk7XG4gIC8vIH0gY2F0Y2ggKGUpIHtcbiAgLy8gICA7XG4gIC8vIH1cblxuICAvLyB0aGlzLmVtaXQoJ2ZvY3VzJyk7XG5cbiAgVGVybWluYWwuZm9jdXMgPSB0aGlzO1xufTtcblxuVGVybWluYWwucHJvdG90eXBlLmJsdXIgPSBmdW5jdGlvbigpIHtcbiAgaWYgKFRlcm1pbmFsLmZvY3VzICE9PSB0aGlzKSByZXR1cm47XG5cbiAgdGhpcy5jdXJzb3JTdGF0ZSA9IDA7XG4gIHRoaXMucmVmcmVzaCh0aGlzLnksIHRoaXMueSk7XG4gIGlmICh0aGlzLnNlbmRGb2N1cykgdGhpcy5zZW5kKCdcXHgxYltPJyk7XG5cbiAgLy8gdHJ5IHtcbiAgLy8gICB0aGlzLmVsZW1lbnQuYmx1cigpO1xuICAvLyB9IGNhdGNoIChlKSB7XG4gIC8vICAgO1xuICAvLyB9XG5cbiAgLy8gdGhpcy5lbWl0KCdibHVyJyk7XG5cbiAgVGVybWluYWwuZm9jdXMgPSBudWxsO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGdsb2JhbCBiZWhhdmlvclxuICovXG5cblRlcm1pbmFsLnByb3RvdHlwZS5pbml0R2xvYmFsID0gZnVuY3Rpb24oKSB7XG4gIHZhciBkb2N1bWVudCA9IHRoaXMuZG9jdW1lbnQ7XG5cbiAgVGVybWluYWwuX2JvdW5kRG9jcyA9IFRlcm1pbmFsLl9ib3VuZERvY3MgfHwgW107XG4gIGlmICh+aW5kZXhPZihUZXJtaW5hbC5fYm91bmREb2NzLCBkb2N1bWVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgVGVybWluYWwuX2JvdW5kRG9jcy5wdXNoKGRvY3VtZW50KTtcblxuICBUZXJtaW5hbC5iaW5kUGFzdGUoZG9jdW1lbnQpO1xuXG4gIFRlcm1pbmFsLmJpbmRLZXlzKGRvY3VtZW50KTtcblxuICBUZXJtaW5hbC5iaW5kQ29weShkb2N1bWVudCk7XG5cbiAgaWYgKHRoaXMuaXNJcGFkIHx8IHRoaXMuaXNJcGhvbmUpIHtcbiAgICBUZXJtaW5hbC5maXhJcGFkKGRvY3VtZW50KTtcbiAgfVxuXG4gIGlmICh0aGlzLnVzZVN0eWxlKSB7XG4gICAgVGVybWluYWwuaW5zZXJ0U3R5bGUoZG9jdW1lbnQsIHRoaXMuY29sb3JzWzI1Nl0sIHRoaXMuY29sb3JzWzI1N10pO1xuICB9XG59O1xuXG4vKipcbiAqIEJpbmQgdG8gcGFzdGUgZXZlbnRcbiAqL1xuXG5UZXJtaW5hbC5iaW5kUGFzdGUgPSBmdW5jdGlvbihkb2N1bWVudCkge1xuICAvLyBUaGlzIHNlZW1zIHRvIHdvcmsgd2VsbCBmb3IgY3RybC1WIGFuZCBtaWRkbGUtY2xpY2ssXG4gIC8vIGV2ZW4gd2l0aG91dCB0aGUgY29udGVudEVkaXRhYmxlIHdvcmthcm91bmQuXG4gIHZhciB3aW5kb3cgPSBkb2N1bWVudC5kZWZhdWx0VmlldztcbiAgb24od2luZG93LCAncGFzdGUnLCBmdW5jdGlvbihldikge1xuICAgIHZhciB0ZXJtID0gVGVybWluYWwuZm9jdXM7XG4gICAgaWYgKCF0ZXJtKSByZXR1cm47XG4gICAgaWYgKGV2LmNsaXBib2FyZERhdGEpIHtcbiAgICAgIHRlcm0uc2VuZChldi5jbGlwYm9hcmREYXRhLmdldERhdGEoJ3RleHQvcGxhaW4nKSk7XG4gICAgfSBlbHNlIGlmICh0ZXJtLmNvbnRleHQuY2xpcGJvYXJkRGF0YSkge1xuICAgICAgdGVybS5zZW5kKHRlcm0uY29udGV4dC5jbGlwYm9hcmREYXRhLmdldERhdGEoJ1RleHQnKSk7XG4gICAgfVxuICAgIC8vIE5vdCBuZWNlc3NhcnkuIERvIGl0IGFueXdheSBmb3IgZ29vZCBtZWFzdXJlLlxuICAgIHRlcm0uZWxlbWVudC5jb250ZW50RWRpdGFibGUgPSAnaW5oZXJpdCc7XG4gICAgcmV0dXJuIGNhbmNlbChldik7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBHbG9iYWwgRXZlbnRzIGZvciBrZXkgaGFuZGxpbmdcbiAqL1xuXG5UZXJtaW5hbC5iaW5kS2V5cyA9IGZ1bmN0aW9uKGRvY3VtZW50KSB7XG4gIC8vIFdlIHNob3VsZCBvbmx5IG5lZWQgdG8gY2hlY2sgYHRhcmdldCA9PT0gYm9keWAgYmVsb3csXG4gIC8vIGJ1dCB3ZSBjYW4gY2hlY2sgZXZlcnl0aGluZyBmb3IgZ29vZCBtZWFzdXJlLlxuICBvbihkb2N1bWVudCwgJ2tleWRvd24nLCBmdW5jdGlvbihldikge1xuICAgIGlmICghVGVybWluYWwuZm9jdXMpIHJldHVybjtcbiAgICB2YXIgdGFyZ2V0ID0gZXYudGFyZ2V0IHx8IGV2LnNyY0VsZW1lbnQ7XG4gICAgaWYgKCF0YXJnZXQpIHJldHVybjtcbiAgICBpZiAodGFyZ2V0ID09PSBUZXJtaW5hbC5mb2N1cy5lbGVtZW50XG4gICAgICAgIHx8IHRhcmdldCA9PT0gVGVybWluYWwuZm9jdXMuY29udGV4dFxuICAgICAgICB8fCB0YXJnZXQgPT09IFRlcm1pbmFsLmZvY3VzLmRvY3VtZW50XG4gICAgICAgIHx8IHRhcmdldCA9PT0gVGVybWluYWwuZm9jdXMuYm9keVxuICAgICAgICB8fCB0YXJnZXQgPT09IFRlcm1pbmFsLl90ZXh0YXJlYVxuICAgICAgICB8fCB0YXJnZXQgPT09IFRlcm1pbmFsLmZvY3VzLnBhcmVudCkge1xuICAgICAgcmV0dXJuIFRlcm1pbmFsLmZvY3VzLmtleURvd24oZXYpO1xuICAgIH1cbiAgfSwgdHJ1ZSk7XG5cbiAgb24oZG9jdW1lbnQsICdrZXlwcmVzcycsIGZ1bmN0aW9uKGV2KSB7XG4gICAgaWYgKCFUZXJtaW5hbC5mb2N1cykgcmV0dXJuO1xuICAgIHZhciB0YXJnZXQgPSBldi50YXJnZXQgfHwgZXYuc3JjRWxlbWVudDtcbiAgICBpZiAoIXRhcmdldCkgcmV0dXJuO1xuICAgIGlmICh0YXJnZXQgPT09IFRlcm1pbmFsLmZvY3VzLmVsZW1lbnRcbiAgICAgICAgfHwgdGFyZ2V0ID09PSBUZXJtaW5hbC5mb2N1cy5jb250ZXh0XG4gICAgICAgIHx8IHRhcmdldCA9PT0gVGVybWluYWwuZm9jdXMuZG9jdW1lbnRcbiAgICAgICAgfHwgdGFyZ2V0ID09PSBUZXJtaW5hbC5mb2N1cy5ib2R5XG4gICAgICAgIHx8IHRhcmdldCA9PT0gVGVybWluYWwuX3RleHRhcmVhXG4gICAgICAgIHx8IHRhcmdldCA9PT0gVGVybWluYWwuZm9jdXMucGFyZW50KSB7XG4gICAgICByZXR1cm4gVGVybWluYWwuZm9jdXMua2V5UHJlc3MoZXYpO1xuICAgIH1cbiAgfSwgdHJ1ZSk7XG5cbiAgLy8gSWYgd2UgY2xpY2sgc29tZXdoZXJlIG90aGVyIHRoYW4gYVxuICAvLyB0ZXJtaW5hbCwgdW5mb2N1cyB0aGUgdGVybWluYWwuXG4gIG9uKGRvY3VtZW50LCAnbW91c2Vkb3duJywgZnVuY3Rpb24oZXYpIHtcbiAgICBpZiAoIVRlcm1pbmFsLmZvY3VzKSByZXR1cm47XG5cbiAgICB2YXIgZWwgPSBldi50YXJnZXQgfHwgZXYuc3JjRWxlbWVudDtcbiAgICBpZiAoIWVsKSByZXR1cm47XG5cbiAgICBkbyB7XG4gICAgICBpZiAoZWwgPT09IFRlcm1pbmFsLmZvY3VzLmVsZW1lbnQpIHJldHVybjtcbiAgICB9IHdoaWxlIChlbCA9IGVsLnBhcmVudE5vZGUpO1xuXG4gICAgVGVybWluYWwuZm9jdXMuYmx1cigpO1xuICB9KTtcbn07XG5cbi8qKlxuICogQ29weSBTZWxlY3Rpb24gdy8gQ3RybC1DIChTZWxlY3QgTW9kZSlcbiAqL1xuXG5UZXJtaW5hbC5iaW5kQ29weSA9IGZ1bmN0aW9uKGRvY3VtZW50KSB7XG4gIHZhciB3aW5kb3cgPSBkb2N1bWVudC5kZWZhdWx0VmlldztcblxuICAvLyBpZiAoISgnb25iZWZvcmVjb3B5JyBpbiBkb2N1bWVudCkpIHtcbiAgLy8gICAvLyBDb3BpZXMgdG8gKm9ubHkqIHRoZSBjbGlwYm9hcmQuXG4gIC8vICAgb24od2luZG93LCAnY29weScsIGZ1bmN0aW9uIGZuKGV2KSB7XG4gIC8vICAgICB2YXIgdGVybSA9IFRlcm1pbmFsLmZvY3VzO1xuICAvLyAgICAgaWYgKCF0ZXJtKSByZXR1cm47XG4gIC8vICAgICBpZiAoIXRlcm0uX3NlbGVjdGVkKSByZXR1cm47XG4gIC8vICAgICB2YXIgdGV4dCA9IHRlcm0uZ3JhYlRleHQoXG4gIC8vICAgICAgIHRlcm0uX3NlbGVjdGVkLngxLCB0ZXJtLl9zZWxlY3RlZC54MixcbiAgLy8gICAgICAgdGVybS5fc2VsZWN0ZWQueTEsIHRlcm0uX3NlbGVjdGVkLnkyKTtcbiAgLy8gICAgIHRlcm0uZW1pdCgnY29weScsIHRleHQpO1xuICAvLyAgICAgZXYuY2xpcGJvYXJkRGF0YS5zZXREYXRhKCd0ZXh0L3BsYWluJywgdGV4dCk7XG4gIC8vICAgfSk7XG4gIC8vICAgcmV0dXJuO1xuICAvLyB9XG5cbiAgLy8gQ29waWVzIHRvIHByaW1hcnkgc2VsZWN0aW9uICphbmQqIGNsaXBib2FyZC5cbiAgLy8gTk9URTogVGhpcyBtYXkgd29yayBiZXR0ZXIgb24gY2FwdHVyZSBwaGFzZSxcbiAgLy8gb3IgdXNpbmcgdGhlIGBiZWZvcmVjb3B5YCBldmVudC5cbiAgb24od2luZG93LCAnY29weScsIGZ1bmN0aW9uKGV2KSB7XG4gICAgdmFyIHRlcm0gPSBUZXJtaW5hbC5mb2N1cztcbiAgICBpZiAoIXRlcm0pIHJldHVybjtcbiAgICBpZiAoIXRlcm0uX3NlbGVjdGVkKSByZXR1cm47XG4gICAgdmFyIHRleHRhcmVhID0gdGVybS5nZXRDb3B5VGV4dGFyZWEoKTtcbiAgICB2YXIgdGV4dCA9IHRlcm0uZ3JhYlRleHQoXG4gICAgICB0ZXJtLl9zZWxlY3RlZC54MSwgdGVybS5fc2VsZWN0ZWQueDIsXG4gICAgICB0ZXJtLl9zZWxlY3RlZC55MSwgdGVybS5fc2VsZWN0ZWQueTIpO1xuICAgIHRlcm0uZW1pdCgnY29weScsIHRleHQpO1xuICAgIHRleHRhcmVhLmZvY3VzKCk7XG4gICAgdGV4dGFyZWEudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHRleHRhcmVhLnZhbHVlID0gdGV4dDtcbiAgICB0ZXh0YXJlYS5zZXRTZWxlY3Rpb25SYW5nZSgwLCB0ZXh0Lmxlbmd0aCk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHRlcm0uZWxlbWVudC5mb2N1cygpO1xuICAgICAgdGVybS5mb2N1cygpO1xuICAgIH0sIDEpO1xuICB9KTtcbn07XG5cbi8qKlxuICogRml4IGlQYWQgLSBubyBpZGVhIGlmIHRoaXMgd29ya3NcbiAqL1xuXG5UZXJtaW5hbC5maXhJcGFkID0gZnVuY3Rpb24oZG9jdW1lbnQpIHtcbiAgdmFyIHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgdGV4dGFyZWEuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICB0ZXh0YXJlYS5zdHlsZS5sZWZ0ID0gJy0zMjAwMHB4JztcbiAgdGV4dGFyZWEuc3R5bGUudG9wID0gJy0zMjAwMHB4JztcbiAgdGV4dGFyZWEuc3R5bGUud2lkdGggPSAnMHB4JztcbiAgdGV4dGFyZWEuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gIHRleHRhcmVhLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gIHRleHRhcmVhLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gIHRleHRhcmVhLnN0eWxlLmJvcmRlclN0eWxlID0gJ25vbmUnO1xuICB0ZXh0YXJlYS5zdHlsZS5vdXRsaW5lU3R5bGUgPSAnbm9uZSc7XG4gIHRleHRhcmVhLmF1dG9jYXBpdGFsaXplID0gJ25vbmUnO1xuICB0ZXh0YXJlYS5hdXRvY29ycmVjdCA9ICdvZmYnO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xuXG4gIFRlcm1pbmFsLl90ZXh0YXJlYSA9IHRleHRhcmVhO1xuXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgdGV4dGFyZWEuZm9jdXMoKTtcbiAgfSwgMTAwMCk7XG59O1xuXG4vKipcbiAqIEluc2VydCBhIGRlZmF1bHQgc3R5bGVcbiAqL1xuXG5UZXJtaW5hbC5pbnNlcnRTdHlsZSA9IGZ1bmN0aW9uKGRvY3VtZW50LCBiZywgZmcpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlcm0tc3R5bGUnKTtcbiAgaWYgKHN0eWxlKSByZXR1cm47XG5cbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICBpZiAoIWhlYWQpIHJldHVybjtcblxuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZS5pZCA9ICd0ZXJtLXN0eWxlJztcblxuICAvLyB0ZXh0Q29udGVudCBkb2Vzbid0IHdvcmsgd2VsbCB3aXRoIElFIGZvciA8c3R5bGU+IGVsZW1lbnRzLlxuICBzdHlsZS5pbm5lckhUTUwgPSAnJ1xuICAgICsgJy50ZXJtaW5hbCB7XFxuJ1xuICAgICsgJyAgZmxvYXQ6IGxlZnQ7XFxuJ1xuICAgICsgJyAgYm9yZGVyOiAnICsgYmcgKyAnIHNvbGlkIDVweDtcXG4nXG4gICAgKyAnICBmb250LWZhbWlseTogXCJEZWphVnUgU2FucyBNb25vXCIsIFwiTGliZXJhdGlvbiBNb25vXCIsIG1vbm9zcGFjZTtcXG4nXG4gICAgKyAnICBmb250LXNpemU6IDExcHg7XFxuJ1xuICAgICsgJyAgY29sb3I6ICcgKyBmZyArICc7XFxuJ1xuICAgICsgJyAgYmFja2dyb3VuZDogJyArIGJnICsgJztcXG4nXG4gICAgKyAnfVxcbidcbiAgICArICdcXG4nXG4gICAgKyAnLnRlcm1pbmFsLWN1cnNvciB7XFxuJ1xuICAgICsgJyAgY29sb3I6ICcgKyBiZyArICc7XFxuJ1xuICAgICsgJyAgYmFja2dyb3VuZDogJyArIGZnICsgJztcXG4nXG4gICAgKyAnfVxcbic7XG5cbiAgLy8gdmFyIG91dCA9ICcnO1xuICAvLyBlYWNoKFRlcm1pbmFsLmNvbG9ycywgZnVuY3Rpb24oY29sb3IsIGkpIHtcbiAgLy8gICBpZiAoaSA9PT0gMjU2KSB7XG4gIC8vICAgICBvdXQgKz0gJ1xcbi50ZXJtLWJnLWNvbG9yLWRlZmF1bHQgeyBiYWNrZ3JvdW5kLWNvbG9yOiAnICsgY29sb3IgKyAnOyB9JztcbiAgLy8gICB9XG4gIC8vICAgaWYgKGkgPT09IDI1Nykge1xuICAvLyAgICAgb3V0ICs9ICdcXG4udGVybS1mZy1jb2xvci1kZWZhdWx0IHsgY29sb3I6ICcgKyBjb2xvciArICc7IH0nO1xuICAvLyAgIH1cbiAgLy8gICBvdXQgKz0gJ1xcbi50ZXJtLWJnLWNvbG9yLScgKyBpICsgJyB7IGJhY2tncm91bmQtY29sb3I6ICcgKyBjb2xvciArICc7IH0nO1xuICAvLyAgIG91dCArPSAnXFxuLnRlcm0tZmctY29sb3ItJyArIGkgKyAnIHsgY29sb3I6ICcgKyBjb2xvciArICc7IH0nO1xuICAvLyB9KTtcbiAgLy8gc3R5bGUuaW5uZXJIVE1MICs9IG91dCArICdcXG4nO1xuXG4gIGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBoZWFkLmZpcnN0Q2hpbGQpO1xufTtcblxuLyoqXG4gKiBPcGVuIFRlcm1pbmFsXG4gKi9cblxuVGVybWluYWwucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbihwYXJlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gICAgLCBpID0gMFxuICAgICwgZGl2O1xuXG4gIHRoaXMucGFyZW50ID0gcGFyZW50IHx8IHRoaXMucGFyZW50O1xuXG4gIGlmICghdGhpcy5wYXJlbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Rlcm1pbmFsIHJlcXVpcmVzIGEgcGFyZW50IGVsZW1lbnQuJyk7XG4gIH1cblxuICAvLyBHcmFiIGdsb2JhbCBlbGVtZW50cy5cbiAgdGhpcy5jb250ZXh0ID0gdGhpcy5wYXJlbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgdGhpcy5kb2N1bWVudCA9IHRoaXMucGFyZW50Lm93bmVyRG9jdW1lbnQ7XG4gIHRoaXMuYm9keSA9IHRoaXMuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcblxuICAvLyBQYXJzZSB1c2VyLWFnZW50IHN0cmluZ3MuXG4gIGlmICh0aGlzLmNvbnRleHQubmF2aWdhdG9yICYmIHRoaXMuY29udGV4dC5uYXZpZ2F0b3IudXNlckFnZW50KSB7XG4gICAgdGhpcy5pc01hYyA9ICEhfnRoaXMuY29udGV4dC5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ01hYycpO1xuICAgIHRoaXMuaXNJcGFkID0gISF+dGhpcy5jb250ZXh0Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBhZCcpO1xuICAgIHRoaXMuaXNJcGhvbmUgPSAhIX50aGlzLmNvbnRleHQubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUGhvbmUnKTtcbiAgICB0aGlzLmlzTVNJRSA9ICEhfnRoaXMuY29udGV4dC5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ01TSUUnKTtcbiAgfVxuXG4gIC8vIENyZWF0ZSBvdXIgbWFpbiB0ZXJtaW5hbCBlbGVtZW50LlxuICB0aGlzLmVsZW1lbnQgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gJ3Rlcm1pbmFsJztcbiAgdGhpcy5lbGVtZW50LnN0eWxlLm91dGxpbmUgPSAnbm9uZSc7XG4gIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XG4gIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmNvbG9yc1syNTZdO1xuICB0aGlzLmVsZW1lbnQuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yc1syNTddO1xuXG4gIC8vIENyZWF0ZSB0aGUgbGluZXMgZm9yIG91ciB0ZXJtaW5hbC5cbiAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICBmb3IgKDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgZGl2ID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goZGl2KTtcbiAgfVxuICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuXG4gIC8vIERyYXcgdGhlIHNjcmVlbi5cbiAgdGhpcy5yZWZyZXNoKDAsIHRoaXMucm93cyAtIDEpO1xuXG4gIC8vIEluaXRpYWxpemUgZ2xvYmFsIGFjdGlvbnMgdGhhdFxuICAvLyBuZWVkIHRvIGJlIHRha2VuIG9uIHRoZSBkb2N1bWVudC5cbiAgdGhpcy5pbml0R2xvYmFsKCk7XG5cbiAgLy8gRW5zdXJlIHRoZXJlIGlzIGEgVGVybWluYWwuZm9jdXMuXG4gIHRoaXMuZm9jdXMoKTtcblxuICAvLyBTdGFydCBibGlua2luZyB0aGUgY3Vyc29yLlxuICB0aGlzLnN0YXJ0QmxpbmsoKTtcblxuICAvLyBCaW5kIHRvIERPTSBldmVudHMgcmVsYXRlZFxuICAvLyB0byBmb2N1cyBhbmQgcGFzdGUgYmVoYXZpb3IuXG4gIG9uKHRoaXMuZWxlbWVudCwgJ2ZvY3VzJywgZnVuY3Rpb24oKSB7XG4gICAgc2VsZi5mb2N1cygpO1xuICAgIGlmIChzZWxmLmlzSXBhZCB8fCBzZWxmLmlzSXBob25lKSB7XG4gICAgICBUZXJtaW5hbC5fdGV4dGFyZWEuZm9jdXMoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFRoaXMgY2F1c2VzIHNsaWdodGx5IGZ1bmt5IGJlaGF2aW9yLlxuICAvLyBvbih0aGlzLmVsZW1lbnQsICdibHVyJywgZnVuY3Rpb24oKSB7XG4gIC8vICAgc2VsZi5ibHVyKCk7XG4gIC8vIH0pO1xuXG4gIG9uKHRoaXMuZWxlbWVudCwgJ21vdXNlZG93bicsIGZ1bmN0aW9uKCkge1xuICAgIHNlbGYuZm9jdXMoKTtcbiAgfSk7XG5cbiAgLy8gQ2xpY2thYmxlIHBhc3RlIHdvcmthcm91bmQsIHVzaW5nIGNvbnRlbnRFZGl0YWJsZS5cbiAgLy8gVGhpcyBwcm9iYWJseSBzaG91bGRuJ3Qgd29yayxcbiAgLy8gLi4uIGJ1dCBpdCBkb2VzLiBGaXJlZm94J3MgcGFzdGVcbiAgLy8gZXZlbnQgc2VlbXMgdG8gb25seSB3b3JrIGZvciB0ZXh0YXJlYXM/XG4gIG9uKHRoaXMuZWxlbWVudCwgJ21vdXNlZG93bicsIGZ1bmN0aW9uKGV2KSB7XG4gICAgdmFyIGJ1dHRvbiA9IGV2LmJ1dHRvbiAhPSBudWxsXG4gICAgICA/ICtldi5idXR0b25cbiAgICAgIDogZXYud2hpY2ggIT0gbnVsbFxuICAgICAgICA/IGV2LndoaWNoIC0gMVxuICAgICAgICA6IG51bGw7XG5cbiAgICAvLyBEb2VzIElFOSBkbyB0aGlzP1xuICAgIGlmIChzZWxmLmlzTVNJRSkge1xuICAgICAgYnV0dG9uID0gYnV0dG9uID09PSAxID8gMCA6IGJ1dHRvbiA9PT0gNCA/IDEgOiBidXR0b247XG4gICAgfVxuXG4gICAgaWYgKGJ1dHRvbiAhPT0gMikgcmV0dXJuO1xuXG4gICAgc2VsZi5lbGVtZW50LmNvbnRlbnRFZGl0YWJsZSA9ICd0cnVlJztcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5lbGVtZW50LmNvbnRlbnRFZGl0YWJsZSA9ICdpbmhlcml0JzsgLy8gJ2ZhbHNlJztcbiAgICB9LCAxKTtcbiAgfSwgdHJ1ZSk7XG5cbiAgLy8gTGlzdGVuIGZvciBtb3VzZSBldmVudHMgYW5kIHRyYW5zbGF0ZVxuICAvLyB0aGVtIGludG8gdGVybWluYWwgbW91c2UgcHJvdG9jb2xzLlxuICB0aGlzLmJpbmRNb3VzZSgpO1xuXG4gIC8vIEZpZ3VyZSBvdXQgd2hldGhlciBib2xkbmVzcyBhZmZlY3RzXG4gIC8vIHRoZSBjaGFyYWN0ZXIgd2lkdGggb2YgbW9ub3NwYWNlIGZvbnRzLlxuICBpZiAoVGVybWluYWwuYnJva2VuQm9sZCA9PSBudWxsKSB7XG4gICAgVGVybWluYWwuYnJva2VuQm9sZCA9IGlzQm9sZEJyb2tlbih0aGlzLmRvY3VtZW50KTtcbiAgfVxuXG4gIC8vIHRoaXMuZW1pdCgnb3BlbicpO1xuXG4gIC8vIFRoaXMgY2FuIGJlIHVzZWZ1bCBmb3IgcGFzdGluZyxcbiAgLy8gYXMgd2VsbCBhcyB0aGUgaVBhZCBmaXguXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgc2VsZi5lbGVtZW50LmZvY3VzKCk7XG4gIH0sIDEwMCk7XG59O1xuXG4vLyBYVGVybSBtb3VzZSBldmVudHNcbi8vIGh0dHA6Ly9pbnZpc2libGUtaXNsYW5kLm5ldC94dGVybS9jdGxzZXFzL2N0bHNlcXMuaHRtbCNNb3VzZSUyMFRyYWNraW5nXG4vLyBUbyBiZXR0ZXIgdW5kZXJzdGFuZCB0aGVzZVxuLy8gdGhlIHh0ZXJtIGNvZGUgaXMgdmVyeSBoZWxwZnVsOlxuLy8gUmVsZXZhbnQgZmlsZXM6XG4vLyAgIGJ1dHRvbi5jLCBjaGFycHJvYy5jLCBtaXNjLmNcbi8vIFJlbGV2YW50IGZ1bmN0aW9ucyBpbiB4dGVybS9idXR0b24uYzpcbi8vICAgQnRuQ29kZSwgRW1pdEJ1dHRvbkNvZGUsIEVkaXRvckJ1dHRvbiwgU2VuZE1vdXNlUG9zaXRpb25cblRlcm1pbmFsLnByb3RvdHlwZS5iaW5kTW91c2UgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGVsID0gdGhpcy5lbGVtZW50XG4gICAgLCBzZWxmID0gdGhpc1xuICAgICwgcHJlc3NlZCA9IDMyO1xuXG4gIHZhciB3aGVlbEV2ZW50ID0gJ29ubW91c2V3aGVlbCcgaW4gdGhpcy5jb250ZXh0XG4gICAgPyAnbW91c2V3aGVlbCdcbiAgICA6ICdET01Nb3VzZVNjcm9sbCc7XG5cbiAgLy8gbW91c2V1cCwgbW91c2Vkb3duLCBtb3VzZXdoZWVsXG4gIC8vIGxlZnQgY2xpY2s6IF5bW00gMzxeW1tNIzM8XG4gIC8vIG1vdXNld2hlZWwgdXA6IF5bW01gMz5cbiAgZnVuY3Rpb24gc2VuZEJ1dHRvbihldikge1xuICAgIHZhciBidXR0b25cbiAgICAgICwgcG9zO1xuXG4gICAgLy8gZ2V0IHRoZSB4dGVybS1zdHlsZSBidXR0b25cbiAgICBidXR0b24gPSBnZXRCdXR0b24oZXYpO1xuXG4gICAgLy8gZ2V0IG1vdXNlIGNvb3JkaW5hdGVzXG4gICAgcG9zID0gZ2V0Q29vcmRzKGV2KTtcbiAgICBpZiAoIXBvcykgcmV0dXJuO1xuXG4gICAgc2VuZEV2ZW50KGJ1dHRvbiwgcG9zKTtcblxuICAgIHN3aXRjaCAoZXYudHlwZSkge1xuICAgICAgY2FzZSAnbW91c2Vkb3duJzpcbiAgICAgICAgcHJlc3NlZCA9IGJ1dHRvbjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtb3VzZXVwJzpcbiAgICAgICAgLy8ga2VlcCBpdCBhdCB0aGUgbGVmdFxuICAgICAgICAvLyBidXR0b24sIGp1c3QgaW4gY2FzZS5cbiAgICAgICAgcHJlc3NlZCA9IDMyO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugd2hlZWxFdmVudDpcbiAgICAgICAgLy8gbm90aGluZy4gZG9uJ3RcbiAgICAgICAgLy8gaW50ZXJmZXJlIHdpdGhcbiAgICAgICAgLy8gYHByZXNzZWRgLlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvLyBtb3Rpb24gZXhhbXBsZSBvZiBhIGxlZnQgY2xpY2s6XG4gIC8vIF5bW00gMzxeW1tNQDQ8XltbTUA1PF5bW01ANjxeW1tNQDc8XltbTSM3PFxuICBmdW5jdGlvbiBzZW5kTW92ZShldikge1xuICAgIHZhciBidXR0b24gPSBwcmVzc2VkXG4gICAgICAsIHBvcztcblxuICAgIHBvcyA9IGdldENvb3Jkcyhldik7XG4gICAgaWYgKCFwb3MpIHJldHVybjtcblxuICAgIC8vIGJ1dHRvbnMgbWFya2VkIGFzIG1vdGlvbnNcbiAgICAvLyBhcmUgaW5jcmVtZW50ZWQgYnkgMzJcbiAgICBidXR0b24gKz0gMzI7XG5cbiAgICBzZW5kRXZlbnQoYnV0dG9uLCBwb3MpO1xuICB9XG5cbiAgLy8gZW5jb2RlIGJ1dHRvbiBhbmRcbiAgLy8gcG9zaXRpb24gdG8gY2hhcmFjdGVyc1xuICBmdW5jdGlvbiBlbmNvZGUoZGF0YSwgY2gpIHtcbiAgICBpZiAoIXNlbGYudXRmTW91c2UpIHtcbiAgICAgIGlmIChjaCA9PT0gMjU1KSByZXR1cm4gZGF0YS5wdXNoKDApO1xuICAgICAgaWYgKGNoID4gMTI3KSBjaCA9IDEyNztcbiAgICAgIGRhdGEucHVzaChjaCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjaCA9PT0gMjA0NykgcmV0dXJuIGRhdGEucHVzaCgwKTtcbiAgICAgIGlmIChjaCA8IDEyNykge1xuICAgICAgICBkYXRhLnB1c2goY2gpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNoID4gMjA0NykgY2ggPSAyMDQ3O1xuICAgICAgICBkYXRhLnB1c2goMHhDMCB8IChjaCA+PiA2KSk7XG4gICAgICAgIGRhdGEucHVzaCgweDgwIHwgKGNoICYgMHgzRikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHNlbmQgYSBtb3VzZSBldmVudDpcbiAgLy8gcmVndWxhci91dGY4OiBeW1tNIENiIEN4IEN5XG4gIC8vIHVyeHZ0OiBeW1sgQ2IgOyBDeCA7IEN5IE1cbiAgLy8gc2dyOiBeW1sgQ2IgOyBDeCA7IEN5IE0vbVxuICAvLyB2dDMwMDogXltbIDI0KDEvMy81KX4gWyBDeCAsIEN5IF0gXFxyXG4gIC8vIGxvY2F0b3I6IENTSSBQIGUgOyBQIGIgOyBQIHIgOyBQIGMgOyBQIHAgJiB3XG4gIGZ1bmN0aW9uIHNlbmRFdmVudChidXR0b24sIHBvcykge1xuICAgIC8vIHNlbGYuZW1pdCgnbW91c2UnLCB7XG4gICAgLy8gICB4OiBwb3MueCAtIDMyLFxuICAgIC8vICAgeTogcG9zLnggLSAzMixcbiAgICAvLyAgIGJ1dHRvbjogYnV0dG9uXG4gICAgLy8gfSk7XG5cbiAgICBpZiAoc2VsZi52dDMwME1vdXNlKSB7XG4gICAgICAvLyBOT1RFOiBVbnN0YWJsZS5cbiAgICAgIC8vIGh0dHA6Ly93d3cudnQxMDAubmV0L2RvY3MvdnQzeHgtZ3AvY2hhcHRlcjE1Lmh0bWxcbiAgICAgIGJ1dHRvbiAmPSAzO1xuICAgICAgcG9zLnggLT0gMzI7XG4gICAgICBwb3MueSAtPSAzMjtcbiAgICAgIHZhciBkYXRhID0gJ1xceDFiWzI0JztcbiAgICAgIGlmIChidXR0b24gPT09IDApIGRhdGEgKz0gJzEnO1xuICAgICAgZWxzZSBpZiAoYnV0dG9uID09PSAxKSBkYXRhICs9ICczJztcbiAgICAgIGVsc2UgaWYgKGJ1dHRvbiA9PT0gMikgZGF0YSArPSAnNSc7XG4gICAgICBlbHNlIGlmIChidXR0b24gPT09IDMpIHJldHVybjtcbiAgICAgIGVsc2UgZGF0YSArPSAnMCc7XG4gICAgICBkYXRhICs9ICd+WycgKyBwb3MueCArICcsJyArIHBvcy55ICsgJ11cXHInO1xuICAgICAgc2VsZi5zZW5kKGRhdGEpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzZWxmLmRlY0xvY2F0b3IpIHtcbiAgICAgIC8vIE5PVEU6IFVuc3RhYmxlLlxuICAgICAgYnV0dG9uICY9IDM7XG4gICAgICBwb3MueCAtPSAzMjtcbiAgICAgIHBvcy55IC09IDMyO1xuICAgICAgaWYgKGJ1dHRvbiA9PT0gMCkgYnV0dG9uID0gMjtcbiAgICAgIGVsc2UgaWYgKGJ1dHRvbiA9PT0gMSkgYnV0dG9uID0gNDtcbiAgICAgIGVsc2UgaWYgKGJ1dHRvbiA9PT0gMikgYnV0dG9uID0gNjtcbiAgICAgIGVsc2UgaWYgKGJ1dHRvbiA9PT0gMykgYnV0dG9uID0gMztcbiAgICAgIHNlbGYuc2VuZCgnXFx4MWJbJ1xuICAgICAgICArIGJ1dHRvblxuICAgICAgICArICc7J1xuICAgICAgICArIChidXR0b24gPT09IDMgPyA0IDogMClcbiAgICAgICAgKyAnOydcbiAgICAgICAgKyBwb3MueVxuICAgICAgICArICc7J1xuICAgICAgICArIHBvcy54XG4gICAgICAgICsgJzsnXG4gICAgICAgICsgKHBvcy5wYWdlIHx8IDApXG4gICAgICAgICsgJyZ3Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHNlbGYudXJ4dnRNb3VzZSkge1xuICAgICAgcG9zLnggLT0gMzI7XG4gICAgICBwb3MueSAtPSAzMjtcbiAgICAgIHBvcy54Kys7XG4gICAgICBwb3MueSsrO1xuICAgICAgc2VsZi5zZW5kKCdcXHgxYlsnICsgYnV0dG9uICsgJzsnICsgcG9zLnggKyAnOycgKyBwb3MueSArICdNJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHNlbGYuc2dyTW91c2UpIHtcbiAgICAgIHBvcy54IC09IDMyO1xuICAgICAgcG9zLnkgLT0gMzI7XG4gICAgICBzZWxmLnNlbmQoJ1xceDFiWzwnXG4gICAgICAgICsgKChidXR0b24gJiAzKSA9PT0gMyA/IGJ1dHRvbiAmIH4zIDogYnV0dG9uKVxuICAgICAgICArICc7J1xuICAgICAgICArIHBvcy54XG4gICAgICAgICsgJzsnXG4gICAgICAgICsgcG9zLnlcbiAgICAgICAgKyAoKGJ1dHRvbiAmIDMpID09PSAzID8gJ20nIDogJ00nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGRhdGEgPSBbXTtcblxuICAgIGVuY29kZShkYXRhLCBidXR0b24pO1xuICAgIGVuY29kZShkYXRhLCBwb3MueCk7XG4gICAgZW5jb2RlKGRhdGEsIHBvcy55KTtcblxuICAgIHNlbGYuc2VuZCgnXFx4MWJbTScgKyBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgZGF0YSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QnV0dG9uKGV2KSB7XG4gICAgdmFyIGJ1dHRvblxuICAgICAgLCBzaGlmdFxuICAgICAgLCBtZXRhXG4gICAgICAsIGN0cmxcbiAgICAgICwgbW9kO1xuXG4gICAgLy8gdHdvIGxvdyBiaXRzOlxuICAgIC8vIDAgPSBsZWZ0XG4gICAgLy8gMSA9IG1pZGRsZVxuICAgIC8vIDIgPSByaWdodFxuICAgIC8vIDMgPSByZWxlYXNlXG4gICAgLy8gd2hlZWwgdXAvZG93bjpcbiAgICAvLyAxLCBhbmQgMiAtIHdpdGggNjQgYWRkZWRcbiAgICBzd2l0Y2ggKGV2LnR5cGUpIHtcbiAgICAgIGNhc2UgJ21vdXNlZG93bic6XG4gICAgICAgIGJ1dHRvbiA9IGV2LmJ1dHRvbiAhPSBudWxsXG4gICAgICAgICAgPyArZXYuYnV0dG9uXG4gICAgICAgICAgOiBldi53aGljaCAhPSBudWxsXG4gICAgICAgICAgICA/IGV2LndoaWNoIC0gMVxuICAgICAgICAgICAgOiBudWxsO1xuXG4gICAgICAgIGlmIChzZWxmLmlzTVNJRSkge1xuICAgICAgICAgIGJ1dHRvbiA9IGJ1dHRvbiA9PT0gMSA/IDAgOiBidXR0b24gPT09IDQgPyAxIDogYnV0dG9uO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbW91c2V1cCc6XG4gICAgICAgIGJ1dHRvbiA9IDM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnRE9NTW91c2VTY3JvbGwnOlxuICAgICAgICBidXR0b24gPSBldi5kZXRhaWwgPCAwXG4gICAgICAgICAgPyA2NFxuICAgICAgICAgIDogNjU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbW91c2V3aGVlbCc6XG4gICAgICAgIGJ1dHRvbiA9IGV2LndoZWVsRGVsdGFZID4gMFxuICAgICAgICAgID8gNjRcbiAgICAgICAgICA6IDY1O1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvLyBuZXh0IHRocmVlIGJpdHMgYXJlIHRoZSBtb2RpZmllcnM6XG4gICAgLy8gNCA9IHNoaWZ0LCA4ID0gbWV0YSwgMTYgPSBjb250cm9sXG4gICAgc2hpZnQgPSBldi5zaGlmdEtleSA/IDQgOiAwO1xuICAgIG1ldGEgPSBldi5tZXRhS2V5ID8gOCA6IDA7XG4gICAgY3RybCA9IGV2LmN0cmxLZXkgPyAxNiA6IDA7XG4gICAgbW9kID0gc2hpZnQgfCBtZXRhIHwgY3RybDtcblxuICAgIC8vIG5vIG1vZHNcbiAgICBpZiAoc2VsZi52dDIwME1vdXNlKSB7XG4gICAgICAvLyBjdHJsIG9ubHlcbiAgICAgIG1vZCAmPSBjdHJsO1xuICAgIH0gZWxzZSBpZiAoIXNlbGYubm9ybWFsTW91c2UpIHtcbiAgICAgIG1vZCA9IDA7XG4gICAgfVxuXG4gICAgLy8gaW5jcmVtZW50IHRvIFNQXG4gICAgYnV0dG9uID0gKDMyICsgKG1vZCA8PCAyKSkgKyBidXR0b247XG5cbiAgICByZXR1cm4gYnV0dG9uO1xuICB9XG5cbiAgLy8gbW91c2UgY29vcmRpbmF0ZXMgbWVhc3VyZWQgaW4gY29scy9yb3dzXG4gIGZ1bmN0aW9uIGdldENvb3Jkcyhldikge1xuICAgIHZhciB4LCB5LCB3LCBoLCBlbDtcblxuICAgIC8vIGlnbm9yZSBicm93c2VycyB3aXRob3V0IHBhZ2VYIGZvciBub3dcbiAgICBpZiAoZXYucGFnZVggPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgeCA9IGV2LnBhZ2VYO1xuICAgIHkgPSBldi5wYWdlWTtcbiAgICBlbCA9IHNlbGYuZWxlbWVudDtcblxuICAgIC8vIHNob3VsZCBwcm9iYWJseSBjaGVjayBvZmZzZXRQYXJlbnRcbiAgICAvLyBidXQgdGhpcyBpcyBtb3JlIHBvcnRhYmxlXG4gICAgd2hpbGUgKGVsICYmIGVsICE9PSBzZWxmLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgeCAtPSBlbC5vZmZzZXRMZWZ0O1xuICAgICAgeSAtPSBlbC5vZmZzZXRUb3A7XG4gICAgICBlbCA9ICdvZmZzZXRQYXJlbnQnIGluIGVsXG4gICAgICAgID8gZWwub2Zmc2V0UGFyZW50XG4gICAgICAgIDogZWwucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICAvLyBjb252ZXJ0IHRvIGNvbHMvcm93c1xuICAgIHcgPSBzZWxmLmVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgaCA9IHNlbGYuZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgeCA9IE1hdGgucm91bmQoKHggLyB3KSAqIHNlbGYuY29scyk7XG4gICAgeSA9IE1hdGgucm91bmQoKHkgLyBoKSAqIHNlbGYucm93cyk7XG5cbiAgICAvLyBiZSBzdXJlIHRvIGF2b2lkIHNlbmRpbmdcbiAgICAvLyBiYWQgcG9zaXRpb25zIHRvIHRoZSBwcm9ncmFtXG4gICAgaWYgKHggPCAwKSB4ID0gMDtcbiAgICBpZiAoeCA+IHNlbGYuY29scykgeCA9IHNlbGYuY29scztcbiAgICBpZiAoeSA8IDApIHkgPSAwO1xuICAgIGlmICh5ID4gc2VsZi5yb3dzKSB5ID0gc2VsZi5yb3dzO1xuXG4gICAgLy8geHRlcm0gc2VuZHMgcmF3IGJ5dGVzIGFuZFxuICAgIC8vIHN0YXJ0cyBhdCAzMiAoU1ApIGZvciBlYWNoLlxuICAgIHggKz0gMzI7XG4gICAgeSArPSAzMjtcblxuICAgIHJldHVybiB7XG4gICAgICB4OiB4LFxuICAgICAgeTogeSxcbiAgICAgIHR5cGU6IGV2LnR5cGUgPT09IHdoZWVsRXZlbnRcbiAgICAgICAgPyAnbW91c2V3aGVlbCdcbiAgICAgICAgOiBldi50eXBlXG4gICAgfTtcbiAgfVxuXG4gIG9uKGVsLCAnbW91c2Vkb3duJywgZnVuY3Rpb24oZXYpIHtcbiAgICBpZiAoIXNlbGYubW91c2VFdmVudHMpIHJldHVybjtcblxuICAgIC8vIHNlbmQgdGhlIGJ1dHRvblxuICAgIHNlbmRCdXR0b24oZXYpO1xuXG4gICAgLy8gZW5zdXJlIGZvY3VzXG4gICAgc2VsZi5mb2N1cygpO1xuXG4gICAgLy8gZml4IGZvciBvZGQgYnVnXG4gICAgLy9pZiAoc2VsZi52dDIwME1vdXNlICYmICFzZWxmLm5vcm1hbE1vdXNlKSB7XG4gICAgaWYgKHNlbGYudnQyMDBNb3VzZSkge1xuICAgICAgc2VuZEJ1dHRvbih7IF9fcHJvdG9fXzogZXYsIHR5cGU6ICdtb3VzZXVwJyB9KTtcbiAgICAgIHJldHVybiBjYW5jZWwoZXYpO1xuICAgIH1cblxuICAgIC8vIGJpbmQgZXZlbnRzXG4gICAgaWYgKHNlbGYubm9ybWFsTW91c2UpIG9uKHNlbGYuZG9jdW1lbnQsICdtb3VzZW1vdmUnLCBzZW5kTW92ZSk7XG5cbiAgICAvLyB4MTAgY29tcGF0aWJpbGl0eSBtb2RlIGNhbid0IHNlbmQgYnV0dG9uIHJlbGVhc2VzXG4gICAgaWYgKCFzZWxmLngxME1vdXNlKSB7XG4gICAgICBvbihzZWxmLmRvY3VtZW50LCAnbW91c2V1cCcsIGZ1bmN0aW9uIHVwKGV2KSB7XG4gICAgICAgIHNlbmRCdXR0b24oZXYpO1xuICAgICAgICBpZiAoc2VsZi5ub3JtYWxNb3VzZSkgb2ZmKHNlbGYuZG9jdW1lbnQsICdtb3VzZW1vdmUnLCBzZW5kTW92ZSk7XG4gICAgICAgIG9mZihzZWxmLmRvY3VtZW50LCAnbW91c2V1cCcsIHVwKTtcbiAgICAgICAgcmV0dXJuIGNhbmNlbChldik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FuY2VsKGV2KTtcbiAgfSk7XG5cbiAgLy9pZiAoc2VsZi5ub3JtYWxNb3VzZSkge1xuICAvLyAgb24oc2VsZi5kb2N1bWVudCwgJ21vdXNlbW92ZScsIHNlbmRNb3ZlKTtcbiAgLy99XG5cbiAgb24oZWwsIHdoZWVsRXZlbnQsIGZ1bmN0aW9uKGV2KSB7XG4gICAgaWYgKCFzZWxmLm1vdXNlRXZlbnRzKSByZXR1cm47XG4gICAgaWYgKHNlbGYueDEwTW91c2VcbiAgICAgICAgfHwgc2VsZi52dDMwME1vdXNlXG4gICAgICAgIHx8IHNlbGYuZGVjTG9jYXRvcikgcmV0dXJuO1xuICAgIHNlbmRCdXR0b24oZXYpO1xuICAgIHJldHVybiBjYW5jZWwoZXYpO1xuICB9KTtcblxuICAvLyBhbGxvdyBtb3VzZXdoZWVsIHNjcm9sbGluZyBpblxuICAvLyB0aGUgc2hlbGwgZm9yIGV4YW1wbGVcbiAgb24oZWwsIHdoZWVsRXZlbnQsIGZ1bmN0aW9uKGV2KSB7XG4gICAgaWYgKHNlbGYubW91c2VFdmVudHMpIHJldHVybjtcbiAgICBpZiAoc2VsZi5hcHBsaWNhdGlvbktleXBhZCkgcmV0dXJuO1xuICAgIGlmIChldi50eXBlID09PSAnRE9NTW91c2VTY3JvbGwnKSB7XG4gICAgICBzZWxmLnNjcm9sbERpc3AoZXYuZGV0YWlsIDwgMCA/IC01IDogNSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYuc2Nyb2xsRGlzcChldi53aGVlbERlbHRhWSA+IDAgPyAtNSA6IDUpO1xuICAgIH1cbiAgICByZXR1cm4gY2FuY2VsKGV2KTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIERlc3Ryb3kgVGVybWluYWxcbiAqL1xuXG5UZXJtaW5hbC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnJlYWRhYmxlID0gZmFsc2U7XG4gIHRoaXMud3JpdGFibGUgPSBmYWxzZTtcbiAgdGhpcy5fZXZlbnRzID0ge307XG4gIHRoaXMuaGFuZGxlciA9IGZ1bmN0aW9uKCkge307XG4gIHRoaXMud3JpdGUgPSBmdW5jdGlvbigpIHt9O1xuICBpZiAodGhpcy5lbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICB9XG4gIC8vdGhpcy5lbWl0KCdjbG9zZScpO1xufTtcblxuLyoqXG4gKiBSZW5kZXJpbmcgRW5naW5lXG4gKi9cblxuLy8gSW4gdGhlIHNjcmVlbiBidWZmZXIsIGVhY2ggY2hhcmFjdGVyXG4vLyBpcyBzdG9yZWQgYXMgYSBhbiBhcnJheSB3aXRoIGEgY2hhcmFjdGVyXG4vLyBhbmQgYSAzMi1iaXQgaW50ZWdlci5cbi8vIEZpcnN0IHZhbHVlOiBhIHV0Zi0xNiBjaGFyYWN0ZXIuXG4vLyBTZWNvbmQgdmFsdWU6XG4vLyBOZXh0IDkgYml0czogYmFja2dyb3VuZCBjb2xvciAoMC01MTEpLlxuLy8gTmV4dCA5IGJpdHM6IGZvcmVncm91bmQgY29sb3IgKDAtNTExKS5cbi8vIE5leHQgMTQgYml0czogYSBtYXNrIGZvciBtaXNjLiBmbGFnczpcbi8vICAgMT1ib2xkLCAyPXVuZGVybGluZSwgND1ibGluaywgOD1pbnZlcnNlLCAxNj1pbnZpc2libGVcblxuVGVybWluYWwucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gIHZhciB4XG4gICAgLCB5XG4gICAgLCBpXG4gICAgLCBsaW5lXG4gICAgLCBvdXRcbiAgICAsIGNoXG4gICAgLCB3aWR0aFxuICAgICwgZGF0YVxuICAgICwgYXR0clxuICAgICwgYmdcbiAgICAsIGZnXG4gICAgLCBmbGFnc1xuICAgICwgcm93XG4gICAgLCBwYXJlbnQ7XG5cbiAgaWYgKGVuZCAtIHN0YXJ0ID49IHRoaXMucm93cyAvIDIpIHtcbiAgICBwYXJlbnQgPSB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIHdpZHRoID0gdGhpcy5jb2xzO1xuICB5ID0gc3RhcnQ7XG5cbiAgaWYgKGVuZCA+PSB0aGlzLmxpbmVzLmxlbmd0aCkge1xuICAgIHRoaXMubG9nKCdgZW5kYCBpcyB0b28gbGFyZ2UuIE1vc3QgbGlrZWx5IGEgYmFkIENTUi4nKTtcbiAgICBlbmQgPSB0aGlzLmxpbmVzLmxlbmd0aCAtIDE7XG4gIH1cblxuICBmb3IgKDsgeSA8PSBlbmQ7IHkrKykge1xuICAgIHJvdyA9IHkgKyB0aGlzLnlkaXNwO1xuXG4gICAgbGluZSA9IHRoaXMubGluZXNbcm93XTtcbiAgICBvdXQgPSAnJztcblxuICAgIGlmICh5ID09PSB0aGlzLnlcbiAgICAgICAgJiYgdGhpcy5jdXJzb3JTdGF0ZVxuICAgICAgICAmJiAodGhpcy55ZGlzcCA9PT0gdGhpcy55YmFzZSB8fCB0aGlzLnNlbGVjdE1vZGUpXG4gICAgICAgICYmICF0aGlzLmN1cnNvckhpZGRlbikge1xuICAgICAgeCA9IHRoaXMueDtcbiAgICB9IGVsc2Uge1xuICAgICAgeCA9IC0xO1xuICAgIH1cblxuICAgIGF0dHIgPSB0aGlzLmRlZkF0dHI7XG4gICAgaSA9IDA7XG5cbiAgICBmb3IgKDsgaSA8IHdpZHRoOyBpKyspIHtcbiAgICAgIGRhdGEgPSBsaW5lW2ldWzBdO1xuICAgICAgY2ggPSBsaW5lW2ldWzFdO1xuXG4gICAgICBpZiAoaSA9PT0geCkgZGF0YSA9IC0xO1xuXG4gICAgICBpZiAoZGF0YSAhPT0gYXR0cikge1xuICAgICAgICBpZiAoYXR0ciAhPT0gdGhpcy5kZWZBdHRyKSB7XG4gICAgICAgICAgb3V0ICs9ICc8L3NwYW4+JztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YSAhPT0gdGhpcy5kZWZBdHRyKSB7XG4gICAgICAgICAgaWYgKGRhdGEgPT09IC0xKSB7XG4gICAgICAgICAgICBvdXQgKz0gJzxzcGFuIGNsYXNzPVwicmV2ZXJzZS12aWRlbyB0ZXJtaW5hbC1jdXJzb3JcIj4nO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdXQgKz0gJzxzcGFuIHN0eWxlPVwiJztcblxuICAgICAgICAgICAgYmcgPSBkYXRhICYgMHgxZmY7XG4gICAgICAgICAgICBmZyA9IChkYXRhID4+IDkpICYgMHgxZmY7XG4gICAgICAgICAgICBmbGFncyA9IGRhdGEgPj4gMTg7XG5cbiAgICAgICAgICAgIC8vIGJvbGRcbiAgICAgICAgICAgIGlmIChmbGFncyAmIDEpIHtcbiAgICAgICAgICAgICAgaWYgKCFUZXJtaW5hbC5icm9rZW5Cb2xkKSB7XG4gICAgICAgICAgICAgICAgb3V0ICs9ICdmb250LXdlaWdodDpib2xkOyc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gU2VlOiBYVGVybSpib2xkQ29sb3JzXG4gICAgICAgICAgICAgIGlmIChmZyA8IDgpIGZnICs9IDg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHVuZGVybGluZVxuICAgICAgICAgICAgaWYgKGZsYWdzICYgMikge1xuICAgICAgICAgICAgICBvdXQgKz0gJ3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYmxpbmtcbiAgICAgICAgICAgIGlmIChmbGFncyAmIDQpIHtcbiAgICAgICAgICAgICAgaWYgKGZsYWdzICYgMikge1xuICAgICAgICAgICAgICAgIG91dCA9IG91dC5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgICAgICAgb3V0ICs9ICcgYmxpbms7JztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdXQgKz0gJ3RleHQtZGVjb3JhdGlvbjpibGluazsnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGludmVyc2VcbiAgICAgICAgICAgIGlmIChmbGFncyAmIDgpIHtcbiAgICAgICAgICAgICAgYmcgPSAoZGF0YSA+PiA5KSAmIDB4MWZmO1xuICAgICAgICAgICAgICBmZyA9IGRhdGEgJiAweDFmZjtcbiAgICAgICAgICAgICAgLy8gU2hvdWxkIGludmVyc2UganVzdCBiZSBiZWZvcmUgdGhlXG4gICAgICAgICAgICAgIC8vIGFib3ZlIGJvbGRDb2xvcnMgZWZmZWN0IGluc3RlYWQ/XG4gICAgICAgICAgICAgIGlmICgoZmxhZ3MgJiAxKSAmJiBmZyA8IDgpIGZnICs9IDg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGludmlzaWJsZVxuICAgICAgICAgICAgaWYgKGZsYWdzICYgMTYpIHtcbiAgICAgICAgICAgICAgb3V0ICs9ICd2aXNpYmlsaXR5OmhpZGRlbjsnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBvdXQgKz0gJ1wiIGNsYXNzPVwiJ1xuICAgICAgICAgICAgLy8gICArICd0ZXJtLWJnLWNvbG9yLScgKyBiZ1xuICAgICAgICAgICAgLy8gICArICcgJ1xuICAgICAgICAgICAgLy8gICArICd0ZXJtLWZnLWNvbG9yLScgKyBmZ1xuICAgICAgICAgICAgLy8gICArICdcIj4nO1xuXG4gICAgICAgICAgICBpZiAoYmcgIT09IDI1Nikge1xuICAgICAgICAgICAgICBvdXQgKz0gJ2JhY2tncm91bmQtY29sb3I6J1xuICAgICAgICAgICAgICAgICsgdGhpcy5jb2xvcnNbYmddXG4gICAgICAgICAgICAgICAgKyAnOyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmZyAhPT0gMjU3KSB7XG4gICAgICAgICAgICAgIG91dCArPSAnY29sb3I6J1xuICAgICAgICAgICAgICAgICsgdGhpcy5jb2xvcnNbZmddXG4gICAgICAgICAgICAgICAgKyAnOyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG91dCArPSAnXCI+JztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChjaCkge1xuICAgICAgICBjYXNlICcmJzpcbiAgICAgICAgICBvdXQgKz0gJyZhbXA7JztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgICAgb3V0ICs9ICcmbHQ7JztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnPic6XG4gICAgICAgICAgb3V0ICs9ICcmZ3Q7JztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpZiAoY2ggPD0gJyAnKSB7XG4gICAgICAgICAgICBvdXQgKz0gJyZuYnNwOyc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpc1dpZGUoY2gpKSBpKys7XG4gICAgICAgICAgICBvdXQgKz0gY2g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBhdHRyID0gZGF0YTtcbiAgICB9XG5cbiAgICBpZiAoYXR0ciAhPT0gdGhpcy5kZWZBdHRyKSB7XG4gICAgICBvdXQgKz0gJzwvc3Bhbj4nO1xuICAgIH1cblxuICAgIHRoaXMuY2hpbGRyZW5beV0uaW5uZXJIVE1MID0gb3V0O1xuICB9XG5cbiAgaWYgKHBhcmVudCkgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG59O1xuXG5UZXJtaW5hbC5wcm90b3R5cGUuX2N1cnNvckJsaW5rID0gZnVuY3Rpb24oKSB7XG4gIGlmIChUZXJtaW5hbC5mb2N1cyAhPT0gdGhpcykgcmV0dXJuO1xuICB0aGlzLmN1cnNvclN0YXRlIF49IDE7XG4gIHRoaXMucmVmcmVzaCh0aGlzLnksIHRoaXMueSk7XG59O1xuXG5UZXJtaW5hbC5wcm90b3R5cGUuc2hvd0N1cnNvciA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIXRoaXMuY3Vyc29yU3RhdGUpIHtcbiAgICB0aGlzLmN1cnNvclN0YXRlID0gMTtcbiAgICB0aGlzLnJlZnJlc2godGhpcy55LCB0aGlzLnkpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRlbXBvcmFyaWx5IGRpc2FibGVkOlxuICAgIC8vIHRoaXMucmVmcmVzaEJsaW5rKCk7XG4gIH1cbn07XG5cblRlcm1pbmFsLnByb3RvdHlwZS5zdGFydEJsaW5rID0gZnVuY3Rpb24oKSB7XG4gIGlmICghdGhpcy5jdXJzb3JCbGluaykgcmV0dXJuO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMuX2JsaW5rZXIgPSBmdW5jdGlvbigpIHtcbiAgICBzZWxmLl9jdXJzb3JCbGluaygpO1xuICB9O1xuICB0aGlzLl9ibGluayA9IHNldEludGVydmFsKHRoaXMuX2JsaW5rZXIsIDUwMCk7XG59O1xuXG5UZXJtaW5hbC5wcm90b3R5cGUucmVmcmVzaEJsaW5rID0gZnVuY3Rpb24oKSB7XG4gIGlmICghdGhpcy5jdXJzb3JCbGluaykgcmV0dXJuO1xuICBjbGVhckludGVydmFsKHRoaXMuX2JsaW5rKTtcbiAgdGhpcy5fYmxpbmsgPSBzZXRJbnRlcnZhbCh0aGlzLl9ibGlua2VyLCA1MDApO1xufTtcblxuVGVybWluYWwucHJvdG90eXBlLnNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcm93O1xuXG4gIGlmICgrK3RoaXMueWJhc2UgPT09IHRoaXMuc2Nyb2xsYmFjaykge1xuICAgIHRoaXMueWJhc2UgPSB0aGlzLnliYXNlIC8gMiB8IDA7XG4gICAgdGhpcy5saW5lcyA9IHRoaXMubGluZXMuc2xpY2UoLSh0aGlzLnliYXNlICsgdGhpcy5yb3dzKSArIDEpO1xuICB9XG5cbiAgdGhpcy55ZGlzcCA9IHRoaXMueWJhc2U7XG5cbiAgLy8gbGFzdCBsaW5lXG4gIHJvdyA9IHRoaXMueWJhc2UgKyB0aGlzLnJvd3MgLSAxO1xuXG4gIC8vIHN1YnRyYWN0IHRoZSBib3R0b20gc2Nyb2xsIHJlZ2lvblxuICByb3cgLT0gdGhpcy5yb3dzIC0gMSAtIHRoaXMuc2Nyb2xsQm90dG9tO1xuXG4gIGlmIChyb3cgPT09IHRoaXMubGluZXMubGVuZ3RoKSB7XG4gICAgLy8gcG90ZW50aWFsIG9wdGltaXphdGlvbjpcbiAgICAvLyBwdXNoaW5nIGlzIGZhc3RlciB0aGFuIHNwbGljaW5nXG4gICAgLy8gd2hlbiB0aGV5IGFtb3VudCB0byB0aGUgc2FtZVxuICAgIC8vIGJlaGF2aW9yLlxuICAgIHRoaXMubGluZXMucHVzaCh0aGlzLmJsYW5rTGluZSgpKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBhZGQgb3VyIG5ldyBsaW5lXG4gICAgdGhpcy5saW5lcy5zcGxpY2Uocm93LCAwLCB0aGlzLmJsYW5rTGluZSgpKTtcbiAgfVxuXG4gIGlmICh0aGlzLnNjcm9sbFRvcCAhPT0gMCkge1xuICAgIGlmICh0aGlzLnliYXNlICE9PSAwKSB7XG4gICAgICB0aGlzLnliYXNlLS07XG4gICAgICB0aGlzLnlkaXNwID0gdGhpcy55YmFzZTtcbiAgICB9XG4gICAgdGhpcy5saW5lcy5zcGxpY2UodGhpcy55YmFzZSArIHRoaXMuc2Nyb2xsVG9wLCAxKTtcbiAgfVxuXG4gIC8vIHRoaXMubWF4UmFuZ2UoKTtcbiAgdGhpcy51cGRhdGVSYW5nZSh0aGlzLnNjcm9sbFRvcCk7XG4gIHRoaXMudXBkYXRlUmFuZ2UodGhpcy5zY3JvbGxCb3R0b20pO1xufTtcblxuVGVybWluYWwucHJvdG90eXBlLnNjcm9sbERpc3AgPSBmdW5jdGlvbihkaXNwKSB7XG4gIHRoaXMueWRpc3AgKz0gZGlzcDtcblxuICBpZiAodGhpcy55ZGlzcCA+IHRoaXMueWJhc2UpIHtcbiAgICB0aGlzLnlkaXNwID0gdGhpcy55YmFzZTtcbiAgfSBlbHNlIGlmICh0aGlzLnlkaXNwIDwgMCkge1xuICAgIHRoaXMueWRpc3AgPSAwO1xuICB9XG5cbiAgdGhpcy5yZWZyZXNoKDAsIHRoaXMucm93cyAtIDEpO1xufTtcblxuVGVybWluYWwucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24oZGF0YSkge1xuICB2YXIgbCA9IGRhdGEubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgalxuICAgICwgY3NcbiAgICAsIGNoO1xuXG4gIHRoaXMucmVmcmVzaFN0YXJ0ID0gdGhpcy55O1xuICB0aGlzLnJlZnJlc2hFbmQgPSB0aGlzLnk7XG5cbiAgaWYgKHRoaXMueWJhc2UgIT09IHRoaXMueWRpc3ApIHtcbiAgICB0aGlzLnlkaXNwID0gdGhpcy55YmFzZTtcbiAgICB0aGlzLm1heFJhbmdlKCk7XG4gIH1cblxuICAvLyB0aGlzLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhLnJlcGxhY2UoL1xceDFiL2csICdeWycpKSk7XG5cbiAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICBjaCA9IGRhdGFbaV07XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICBjYXNlIG5vcm1hbDpcbiAgICAgICAgc3dpdGNoIChjaCkge1xuICAgICAgICAgIC8vICdcXDAnXG4gICAgICAgICAgLy8gY2FzZSAnXFwwJzpcbiAgICAgICAgICAvLyBjYXNlICdcXDIwMCc6XG4gICAgICAgICAgLy8gICBicmVhaztcblxuICAgICAgICAgIC8vICdcXGEnXG4gICAgICAgICAgY2FzZSAnXFx4MDcnOlxuICAgICAgICAgICAgdGhpcy5iZWxsKCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIC8vICdcXG4nLCAnXFx2JywgJ1xcZidcbiAgICAgICAgICBjYXNlICdcXG4nOlxuICAgICAgICAgIGNhc2UgJ1xceDBiJzpcbiAgICAgICAgICBjYXNlICdcXHgwYyc6XG4gICAgICAgICAgICBpZiAodGhpcy5jb252ZXJ0RW9sKSB7XG4gICAgICAgICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgZWF0X25ld2xpbmVfZ2xpdGNoLlxuICAgICAgICAgICAgLy8gaWYgKHRoaXMucmVhbFggPj0gdGhpcy5jb2xzKSBicmVhaztcbiAgICAgICAgICAgIC8vIHRoaXMucmVhbFggPSAwO1xuICAgICAgICAgICAgdGhpcy55Kys7XG4gICAgICAgICAgICBpZiAodGhpcy55ID4gdGhpcy5zY3JvbGxCb3R0b20pIHtcbiAgICAgICAgICAgICAgdGhpcy55LS07XG4gICAgICAgICAgICAgIHRoaXMuc2Nyb2xsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIC8vICdcXHInXG4gICAgICAgICAgY2FzZSAnXFxyJzpcbiAgICAgICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIC8vICdcXGInXG4gICAgICAgICAgY2FzZSAnXFx4MDgnOlxuICAgICAgICAgICAgaWYgKHRoaXMueCA+IDApIHtcbiAgICAgICAgICAgICAgdGhpcy54LS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIC8vICdcXHQnXG4gICAgICAgICAgY2FzZSAnXFx0JzpcbiAgICAgICAgICAgIHRoaXMueCA9IHRoaXMubmV4dFN0b3AoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgLy8gc2hpZnQgb3V0XG4gICAgICAgICAgY2FzZSAnXFx4MGUnOlxuICAgICAgICAgICAgdGhpcy5zZXRnTGV2ZWwoMSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIC8vIHNoaWZ0IGluXG4gICAgICAgICAgY2FzZSAnXFx4MGYnOlxuICAgICAgICAgICAgdGhpcy5zZXRnTGV2ZWwoMCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIC8vICdcXGUnXG4gICAgICAgICAgY2FzZSAnXFx4MWInOlxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IGVzY2FwZWQ7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyAnICdcbiAgICAgICAgICAgIGlmIChjaCA+PSAnICcpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuY2hhcnNldCAmJiB0aGlzLmNoYXJzZXRbY2hdKSB7XG4gICAgICAgICAgICAgICAgY2ggPSB0aGlzLmNoYXJzZXRbY2hdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMueCA+PSB0aGlzLmNvbHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMueSsrO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnkgPiB0aGlzLnNjcm9sbEJvdHRvbSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy55LS07XG4gICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRoaXMubGluZXNbdGhpcy55ICsgdGhpcy55YmFzZV1bdGhpcy54XSA9IFt0aGlzLmN1ckF0dHIsIGNoXTtcbiAgICAgICAgICAgICAgdGhpcy54Kys7XG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlUmFuZ2UodGhpcy55KTtcblxuICAgICAgICAgICAgICBpZiAoaXNXaWRlKGNoKSkge1xuICAgICAgICAgICAgICAgIGogPSB0aGlzLnkgKyB0aGlzLnliYXNlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbHMgPCAyIHx8IHRoaXMueCA+PSB0aGlzLmNvbHMpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMubGluZXNbal1bdGhpcy54IC0gMV0gPSBbdGhpcy5jdXJBdHRyLCAnICddO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubGluZXNbal1bdGhpcy54XSA9IFt0aGlzLmN1ckF0dHIsICcgJ107XG4gICAgICAgICAgICAgICAgdGhpcy54Kys7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBlc2NhcGVkOlxuICAgICAgICBzd2l0Y2ggKGNoKSB7XG4gICAgICAgICAgLy8gRVNDIFsgQ29udHJvbCBTZXF1ZW5jZSBJbnRyb2R1Y2VyICggQ1NJIGlzIDB4OWIpLlxuICAgICAgICAgIGNhc2UgJ1snOlxuICAgICAgICAgICAgdGhpcy5wYXJhbXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhcmFtID0gMDtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBjc2k7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIC8vIEVTQyBdIE9wZXJhdGluZyBTeXN0ZW0gQ29tbWFuZCAoIE9TQyBpcyAweDlkKS5cbiAgICAgICAgICBjYXNlICddJzpcbiAgICAgICAgICAgIHRoaXMucGFyYW1zID0gW107XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXJhbSA9IDA7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gb3NjO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAvLyBFU0MgUCBEZXZpY2UgQ29udHJvbCBTdHJpbmcgKCBEQ1MgaXMgMHg5MCkuXG4gICAgICAgICAgY2FzZSAnUCc6XG4gICAgICAgICAgICB0aGlzLnBhcmFtcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFyYW0gPSAwO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IGRjcztcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgLy8gRVNDIF8gQXBwbGljYXRpb24gUHJvZ3JhbSBDb21tYW5kICggQVBDIGlzIDB4OWYpLlxuICAgICAgICAgIGNhc2UgJ18nOlxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IGlnbm9yZTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgLy8gRVNDIF4gUHJpdmFjeSBNZXNzYWdlICggUE0gaXMgMHg5ZSkuXG4gICAgICAgICAgY2FzZSAnXic6XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gaWdub3JlO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAvLyBFU0MgYyBGdWxsIFJlc2V0IChSSVMpLlxuICAgICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAvLyBFU0MgRSBOZXh0IExpbmUgKCBORUwgaXMgMHg4NSkuXG4gICAgICAgICAgLy8gRVNDIEQgSW5kZXggKCBJTkQgaXMgMHg4NCkuXG4gICAgICAgICAgY2FzZSAnRSc6XG4gICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICAgICAgO1xuICAgICAgICAgIGNhc2UgJ0QnOlxuICAgICAgICAgICAgdGhpcy5pbmRleCgpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAvLyBFU0MgTSBSZXZlcnNlIEluZGV4ICggUkkgaXMgMHg4ZCkuXG4gICAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgICB0aGlzLnJldmVyc2VJbmRleCgpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAvLyBFU0MgJSBTZWxlY3QgZGVmYXVsdC91dGYtOCBjaGFyYWN0ZXIgc2V0LlxuICAgICAgICAgIC8vIEAgPSBkZWZhdWx0LCBHID0gdXRmLThcbiAgICAgICAgICBjYXNlICclJzpcbiAgICAgICAgICAgIC8vdGhpcy5jaGFyc2V0ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuc2V0Z0xldmVsKDApO1xuICAgICAgICAgICAgdGhpcy5zZXRnQ2hhcnNldCgwLCBUZXJtaW5hbC5jaGFyc2V0cy5VUyk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gbm9ybWFsO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAvLyBFU0MgKCwpLCosKywtLC4gRGVzaWduYXRlIEcwLUcyIENoYXJhY3RlciBTZXQuXG4gICAgICAgICAgY2FzZSAnKCc6IC8vIDwtLSB0aGlzIHNlZW1zIHRvIGdldCBhbGwgdGhlIGF0dGVudGlvblxuICAgICAgICAgIGNhc2UgJyknOlxuICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgIGNhc2UgJy4nOlxuICAgICAgICAgICAgc3dpdGNoIChjaCkge1xuICAgICAgICAgICAgICBjYXNlICcoJzpcbiAgICAgICAgICAgICAgICB0aGlzLmdjaGFyc2V0ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnKSc6XG4gICAgICAgICAgICAgICAgdGhpcy5nY2hhcnNldCA9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgICAgIHRoaXMuZ2NoYXJzZXQgPSAyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgICAgICB0aGlzLmdjaGFyc2V0ID0gMztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgdGhpcy5nY2hhcnNldCA9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJy4nOlxuICAgICAgICAgICAgICAgIHRoaXMuZ2NoYXJzZXQgPSAyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IGNoYXJzZXQ7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIC8vIERlc2lnbmF0ZSBHMyBDaGFyYWN0ZXIgU2V0IChWVDMwMCkuXG4gICAgICAgICAgLy8gQSA9IElTTyBMYXRpbi0xIFN1cHBsZW1lbnRhbC5cbiAgICAgICAgICAvLyBOb3QgaW1wbGVtZW50ZWQuXG4gICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICB0aGlzLmdjaGFyc2V0ID0gMztcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBjaGFyc2V0O1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAvLyBFU0MgTlxuICAgICAgICAgIC8vIFNpbmdsZSBTaGlmdCBTZWxlY3Qgb2YgRzIgQ2hhcmFjdGVyIFNldFxuICAgICAgICAgIC8vICggU1MyIGlzIDB4OGUpLiBUaGlzIGFmZmVjdHMgbmV4dCBjaGFyYWN0ZXIgb25seS5cbiAgICAgICAgICBjYXNlICdOJzpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8vIEVTQyBPXG4gICAgICAgICAgLy8gU2luZ2xlIFNoaWZ0IFNlbGVjdCBvZiBHMyBDaGFyYWN0ZXIgU2V0XG4gICAgICAgICAgLy8gKCBTUzMgaXMgMHg4ZikuIFRoaXMgYWZmZWN0cyBuZXh0IGNoYXJhY3RlciBvbmx5LlxuICAgICAgICAgIGNhc2UgJ08nOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgLy8gRVNDIG5cbiAgICAgICAgICAvLyBJbnZva2UgdGhlIEcyIENoYXJhY3RlciBTZXQgYXMgR0wgKExTMikuXG4gICAgICAgICAgY2FzZSAnbic6XG4gICAgICAgICAgICB0aGlzLnNldGdMZXZlbCgyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8vIEVTQyBvXG4gICAgICAgICAgLy8gSW52b2tlIHRoZSBHMyBDaGFyYWN0ZXIgU2V0IGFzIEdMIChMUzMpLlxuICAgICAgICAgIGNhc2UgJ28nOlxuICAgICAgICAgICAgdGhpcy5zZXRnTGV2ZWwoMyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAvLyBFU0MgfFxuICAgICAgICAgIC8vIEludm9rZSB0aGUgRzMgQ2hhcmFjdGVyIFNldCBhcyBHUiAoTFMzUikuXG4gICAgICAgICAgY2FzZSAnfCc6XG4gICAgICAgICAgICB0aGlzLnNldGdMZXZlbCgzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8vIEVTQyB9XG4gICAgICAgICAgLy8gSW52b2tlIHRoZSBHMiBDaGFyYWN0ZXIgU2V0IGFzIEdSIChMUzJSKS5cbiAgICAgICAgICBjYXNlICd9JzpcbiAgICAgICAgICAgIHRoaXMuc2V0Z0xldmVsKDIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgLy8gRVNDIH5cbiAgICAgICAgICAvLyBJbnZva2UgdGhlIEcxIENoYXJhY3RlciBTZXQgYXMgR1IgKExTMVIpLlxuICAgICAgICAgIGNhc2UgJ34nOlxuICAgICAgICAgICAgdGhpcy5zZXRnTGV2ZWwoMSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIC8vIEVTQyA3IFNhdmUgQ3Vyc29yIChERUNTQykuXG4gICAgICAgICAgY2FzZSAnNyc6XG4gICAgICAgICAgICB0aGlzLnNhdmVDdXJzb3IoKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBub3JtYWw7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIC8vIEVTQyA4IFJlc3RvcmUgQ3Vyc29yIChERUNSQykuXG4gICAgICAgICAgY2FzZSAnOCc6XG4gICAgICAgICAgICB0aGlzLnJlc3RvcmVDdXJzb3IoKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBub3JtYWw7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIC8vIEVTQyAjIDMgREVDIGxpbmUgaGVpZ2h0L3dpZHRoXG4gICAgICAgICAgY2FzZSAnIyc6XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gbm9ybWFsO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAvLyBFU0MgSCBUYWIgU2V0IChIVFMgaXMgMHg4OCkuXG4gICAgICAgICAgY2FzZSAnSCc6XG4gICAgICAgICAgICB0aGlzLnRhYlNldCgpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAvLyBFU0MgPSBBcHBsaWNhdGlvbiBLZXlwYWQgKERFQ1BBTSkuXG4gICAgICAgICAgY2FzZSAnPSc6XG4gICAgICAgICAgICB0aGlzLmxvZygnU2VyaWFsIHBvcnQgcmVxdWVzdGVkIGFwcGxpY2F0aW9uIGtleXBhZC4nKTtcbiAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb25LZXlwYWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IG5vcm1hbDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgLy8gRVNDID4gTm9ybWFsIEtleXBhZCAoREVDUE5NKS5cbiAgICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgICAgIHRoaXMubG9nKCdTd2l0Y2hpbmcgYmFjayB0byBub3JtYWwga2V5cGFkLicpO1xuICAgICAgICAgICAgdGhpcy5hcHBsaWNhdGlvbktleXBhZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IG5vcm1hbDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBub3JtYWw7XG4gICAgICAgICAgICB0aGlzLmVycm9yKCdVbmtub3duIEVTQyBjb250cm9sOiAlcy4nLCBjaCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBjaGFyc2V0OlxuICAgICAgICBzd2l0Y2ggKGNoKSB7XG4gICAgICAgICAgY2FzZSAnMCc6IC8vIERFQyBTcGVjaWFsIENoYXJhY3RlciBhbmQgTGluZSBEcmF3aW5nIFNldC5cbiAgICAgICAgICAgIGNzID0gVGVybWluYWwuY2hhcnNldHMuU0NMRDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0EnOiAvLyBVS1xuICAgICAgICAgICAgY3MgPSBUZXJtaW5hbC5jaGFyc2V0cy5VSztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0InOiAvLyBVbml0ZWQgU3RhdGVzIChVU0FTQ0lJKS5cbiAgICAgICAgICAgIGNzID0gVGVybWluYWwuY2hhcnNldHMuVVM7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICc0JzogLy8gRHV0Y2hcbiAgICAgICAgICAgIGNzID0gVGVybWluYWwuY2hhcnNldHMuRHV0Y2g7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdDJzogLy8gRmlubmlzaFxuICAgICAgICAgIGNhc2UgJzUnOlxuICAgICAgICAgICAgY3MgPSBUZXJtaW5hbC5jaGFyc2V0cy5GaW5uaXNoO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnUic6IC8vIEZyZW5jaFxuICAgICAgICAgICAgY3MgPSBUZXJtaW5hbC5jaGFyc2V0cy5GcmVuY2g7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdRJzogLy8gRnJlbmNoQ2FuYWRpYW5cbiAgICAgICAgICAgIGNzID0gVGVybWluYWwuY2hhcnNldHMuRnJlbmNoQ2FuYWRpYW47XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdLJzogLy8gR2VybWFuXG4gICAgICAgICAgICBjcyA9IFRlcm1pbmFsLmNoYXJzZXRzLkdlcm1hbjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ1knOiAvLyBJdGFsaWFuXG4gICAgICAgICAgICBjcyA9IFRlcm1pbmFsLmNoYXJzZXRzLkl0YWxpYW47XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdFJzogLy8gTm9yd2VnaWFuRGFuaXNoXG4gICAgICAgICAgY2FzZSAnNic6XG4gICAgICAgICAgICBjcyA9IFRlcm1pbmFsLmNoYXJzZXRzLk5vcndlZ2lhbkRhbmlzaDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ1onOiAvLyBTcGFuaXNoXG4gICAgICAgICAgICBjcyA9IFRlcm1pbmFsLmNoYXJzZXRzLlNwYW5pc2g7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdIJzogLy8gU3dlZGlzaFxuICAgICAgICAgIGNhc2UgJzcnOlxuICAgICAgICAgICAgY3MgPSBUZXJtaW5hbC5jaGFyc2V0cy5Td2VkaXNoO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnPSc6IC8vIFN3aXNzXG4gICAgICAgICAgICBjcyA9IFRlcm1pbmFsLmNoYXJzZXRzLlN3aXNzO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnLyc6IC8vIElTT0xhdGluIChhY3R1YWxseSAvQSlcbiAgICAgICAgICAgIGNzID0gVGVybWluYWwuY2hhcnNldHMuSVNPTGF0aW47XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OiAvLyBEZWZhdWx0XG4gICAgICAgICAgICBjcyA9IFRlcm1pbmFsLmNoYXJzZXRzLlVTO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRnQ2hhcnNldCh0aGlzLmdjaGFyc2V0LCBjcyk7XG4gICAgICAgIHRoaXMuZ2NoYXJzZXQgPSBudWxsO1xuICAgICAgICB0aGlzLnN0YXRlID0gbm9ybWFsO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBvc2M6XG4gICAgICAgIC8vIE9TQyBQcyA7IFB0IFNUXG4gICAgICAgIC8vIE9TQyBQcyA7IFB0IEJFTFxuICAgICAgICAvLyAgIFNldCBUZXh0IFBhcmFtZXRlcnMuXG4gICAgICAgIGlmIChjaCA9PT0gJ1xceDFiJyB8fCBjaCA9PT0gJ1xceDA3Jykge1xuICAgICAgICAgIGlmIChjaCA9PT0gJ1xceDFiJykgaSsrO1xuXG4gICAgICAgICAgdGhpcy5wYXJhbXMucHVzaCh0aGlzLmN1cnJlbnRQYXJhbSk7XG5cbiAgICAgICAgICBzd2l0Y2ggKHRoaXMucGFyYW1zWzBdKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtc1sxXSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aGlzLnBhcmFtc1sxXTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVRpdGxlKHRoaXMudGl0bGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAvLyBzZXQgWCBwcm9wZXJ0eVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgLy8gY2hhbmdlIGR5bmFtaWMgY29sb3JzXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgIGNhc2UgMTc6XG4gICAgICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgICAgLy8gY2hhbmdlIGR5bmFtaWMgdWkgY29sb3JzXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0NjpcbiAgICAgICAgICAgICAgLy8gY2hhbmdlIGxvZyBmaWxlXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1MDpcbiAgICAgICAgICAgICAgLy8gZHluYW1pYyBmb250XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1MTpcbiAgICAgICAgICAgICAgLy8gZW1hY3Mgc2hlbGxcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDUyOlxuICAgICAgICAgICAgICAvLyBtYW5pcHVsYXRlIHNlbGVjdGlvbiBkYXRhXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxMDQ6XG4gICAgICAgICAgICBjYXNlIDEwNTpcbiAgICAgICAgICAgIGNhc2UgMTEwOlxuICAgICAgICAgICAgY2FzZSAxMTE6XG4gICAgICAgICAgICBjYXNlIDExMjpcbiAgICAgICAgICAgIGNhc2UgMTEzOlxuICAgICAgICAgICAgY2FzZSAxMTQ6XG4gICAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgIGNhc2UgMTE2OlxuICAgICAgICAgICAgY2FzZSAxMTc6XG4gICAgICAgICAgICBjYXNlIDExODpcbiAgICAgICAgICAgICAgLy8gcmVzZXQgY29sb3JzXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMucGFyYW1zID0gW107XG4gICAgICAgICAgdGhpcy5jdXJyZW50UGFyYW0gPSAwO1xuICAgICAgICAgIHRoaXMuc3RhdGUgPSBub3JtYWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCF0aGlzLnBhcmFtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChjaCA+PSAnMCcgJiYgY2ggPD0gJzknKSB7XG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhcmFtID1cbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXJhbSAqIDEwICsgY2guY2hhckNvZGVBdCgwKSAtIDQ4O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJzsnKSB7XG4gICAgICAgICAgICAgIHRoaXMucGFyYW1zLnB1c2godGhpcy5jdXJyZW50UGFyYW0pO1xuICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXJhbSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXJhbSArPSBjaDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgY3NpOlxuICAgICAgICAvLyAnPycsICc+JywgJyEnXG4gICAgICAgIGlmIChjaCA9PT0gJz8nIHx8IGNoID09PSAnPicgfHwgY2ggPT09ICchJykge1xuICAgICAgICAgIHRoaXMucHJlZml4ID0gY2g7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAwIC0gOVxuICAgICAgICBpZiAoY2ggPj0gJzAnICYmIGNoIDw9ICc5Jykge1xuICAgICAgICAgIHRoaXMuY3VycmVudFBhcmFtID0gdGhpcy5jdXJyZW50UGFyYW0gKiAxMCArIGNoLmNoYXJDb2RlQXQoMCkgLSA0ODtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICckJywgJ1wiJywgJyAnLCAnXFwnJ1xuICAgICAgICBpZiAoY2ggPT09ICckJyB8fCBjaCA9PT0gJ1wiJyB8fCBjaCA9PT0gJyAnIHx8IGNoID09PSAnXFwnJykge1xuICAgICAgICAgIHRoaXMucG9zdGZpeCA9IGNoO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wYXJhbXMucHVzaCh0aGlzLmN1cnJlbnRQYXJhbSk7XG4gICAgICAgIHRoaXMuY3VycmVudFBhcmFtID0gMDtcblxuICAgICAgICAvLyAnOydcbiAgICAgICAgaWYgKGNoID09PSAnOycpIGJyZWFrO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBub3JtYWw7XG5cbiAgICAgICAgc3dpdGNoIChjaCkge1xuICAgICAgICAgIC8vIENTSSBQcyBBXG4gICAgICAgICAgLy8gQ3Vyc29yIFVwIFBzIFRpbWVzIChkZWZhdWx0ID0gMSkgKENVVSkuXG4gICAgICAgICAgY2FzZSAnQSc6XG4gICAgICAgICAgICB0aGlzLmN1cnNvclVwKHRoaXMucGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgLy8gQ1NJIFBzIEJcbiAgICAgICAgICAvLyBDdXJzb3IgRG93biBQcyBUaW1lcyAoZGVmYXVsdCA9IDEpIChDVUQpLlxuICAgICAgICAgIGNhc2UgJ0InOlxuICAgICAgICAgICAgdGhpcy5jdXJzb3JEb3duKHRoaXMucGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgLy8gQ1NJIFBzIENcbiAgICAgICAgICAvLyBDdXJzb3IgRm9yd2FyZCBQcyBUaW1lcyAoZGVmYXVsdCA9IDEpIChDVUYpLlxuICAgICAgICAgIGNhc2UgJ0MnOlxuICAgICAgICAgICAgdGhpcy5jdXJzb3JGb3J3YXJkKHRoaXMucGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgLy8gQ1NJIFBzIERcbiAgICAgICAgICAvLyBDdXJzb3IgQmFja3dhcmQgUHMgVGltZXMgKGRlZmF1bHQgPSAxKSAoQ1VCKS5cbiAgICAgICAgICBjYXNlICdEJzpcbiAgICAgICAgICAgIHRoaXMuY3Vyc29yQmFja3dhcmQodGhpcy5wYXJhbXMpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAvLyBDU0kgUHMgOyBQcyBIXG4gICAgICAgICAgLy8gQ3Vyc29yIFBvc2l0aW9uIFtyb3c7Y29sdW1uXSAoZGVmYXVsdCA9IFsxLDFdKSAoQ1VQKS5cbiAgICAgICAgICBjYXNlICdIJzpcbiAgICAgICAgICAgIHRoaXMuY3Vyc29yUG9zKHRoaXMucGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgLy8gQ1NJIFBzIEogIEVyYXNlIGluIERpc3BsYXkgKEVEKS5cbiAgICAgICAgICBjYXNlICdKJzpcbiAgICAgICAgICAgIHRoaXMuZXJhc2VJbkRpc3BsYXkodGhpcy5wYXJhbXMpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAvLyBDU0kgUHMgSyAgRXJhc2UgaW4gTGluZSAoRUwpLlxuICAgICAgICAgIGNhc2UgJ0snOlxuICAgICAgICAgICAgdGhpcy5lcmFzZUluTGluZSh0aGlzLnBhcmFtcyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIC8vIENTSSBQbSBtICBDaGFyYWN0ZXIgQXR0cmlidXRlcyAoU0dSKS5cbiAgICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgIGlmICghdGhpcy5wcmVmaXgpIHtcbiAgICAgICAgICAgICAgdGhpcy5jaGFyQXR0cmlidXRlcyh0aGlzLnBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIC8vIENTSSBQcyBuICBEZXZpY2UgU3RhdHVzIFJlcG9ydCAoRFNSKS5cbiAgICAgICAgICBjYXNlICduJzpcbiAgICAgICAgICAgIGlmICghdGhpcy5wcmVmaXgpIHtcbiAgICAgICAgICAgICAgdGhpcy5kZXZpY2VTdGF0dXModGhpcy5wYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBBZGRpdGlvbnNcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIC8vIENTSSBQcyBAXG4gICAgICAgICAgLy8gSW5zZXJ0IFBzIChCbGFuaykgQ2hhcmFjdGVyKHMpIChkZWZhdWx0ID0gMSkgKElDSCkuXG4gICAgICAgICAgY2FzZSAnQCc6XG4gICAgICAgICAgICB0aGlzLmluc2VydENoYXJzKHRoaXMucGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgLy8gQ1NJIFBzIEVcbiAgICAgICAgICAvLyBDdXJzb3IgTmV4dCBMaW5lIFBzIFRpbWVzIChkZWZhdWx0ID0gMSkgKENOTCkuXG4gICAgICAgICAgY2FzZSAnRSc6XG4gICAgICAgICAgICB0aGlzLmN1cnNvck5leHRMaW5lKHRoaXMucGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgLy8gQ1NJIFBzIEZcbiAgICAgICAgICAvLyBDdXJzb3IgUHJlY2VkaW5nIExpbmUgUHMgVGltZXMgKGRlZmF1bHQgPSAxKSAoQ05MKS5cbiAgICAgICAgICBjYXNlICdGJzpcbiAgICAgICAgICAgIHRoaXMuY3Vyc29yUHJlY2VkaW5nTGluZSh0aGlzLnBhcmFtcyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIC8vIENTSSBQcyBHXG4gICAgICAgICAgLy8gQ3Vyc29yIENoYXJhY3RlciBBYnNvbHV0ZSAgW2NvbHVtbl0gKGRlZmF1bHQgPSBbcm93LDFdKSAoQ0hBKS5cbiAgICAgICAgICBjYXNlICdHJzpcbiAgICAgICAgICAgIHRoaXMuY3Vyc29yQ2hhckFic29sdXRlKHRoaXMucGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgLy8gQ1NJIFBzIExcbiAgICAgICAgICAvLyBJbnNlcnQgUHMgTGluZShzKSAoZGVmYXVsdCA9IDEpIChJTCkuXG4gICAgICAgICAgY2FzZSAnTCc6XG4gICAgICAgICAgICB0aGlzLmluc2VydExpbmVzKHRoaXMucGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgLy8gQ1NJIFBzIE1cbiAgICAgICAgICAvLyBEZWxldGUgUHMgTGluZShzKSAoZGVmYXVsdCA9IDEpIChETCkuXG4gICAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUxpbmVzKHRoaXMucGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgLy8gQ1NJIFBzIFBcbiAgICAgICAgICAvLyBEZWxldGUgUHMgQ2hhcmFjdGVyKHMpIChkZWZhdWx0ID0gMSkgKERDSCkuXG4gICAgICAgICAgY2FzZSAnUCc6XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUNoYXJzKHRoaXMucGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgLy8gQ1NJIFBzIFhcbiAgICAgICAgICAvLyBFcmFzZSBQcyBDaGFyYWN0ZXIocykgKGRlZmF1bHQgPSAxKSAoRUNIKS5cbiAgICAgICAgICBjYXNlICdYJzpcbiAgICAgICAgICAgIHRoaXMuZXJhc2VDaGFycyh0aGlzLnBhcmFtcyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIC8vIENTSSBQbSBgICBDaGFyYWN0ZXIgUG9zaXRpb24gQWJzb2x1dGVcbiAgICAgICAgICAvLyAgIFtjb2x1bW5dIChkZWZhdWx0ID0gW3JvdywxXSkgKEhQQSkuXG4gICAgICAgICAgY2FzZSAnYCc6XG4gICAgICAgICAgICB0aGlzLmNoYXJQb3NBYnNvbHV0ZSh0aGlzLnBhcmFtcyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIC8vIDE0MSA2MSBhICogSFBSIC1cbiAgICAgICAgICAvLyBIb3Jpem9udGFsIFBvc2l0aW9uIFJlbGF0aXZlXG4gICAgICAgICAgY2FzZSAnYSc6XG4gICAgICAgICAgICB0aGlzLkhQb3NpdGlvblJlbGF0aXZlKHRoaXMucGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgLy8gQ1NJIFAgcyBjXG4gICAgICAgICAgLy8gU2VuZCBEZXZpY2UgQXR0cmlidXRlcyAoUHJpbWFyeSBEQSkuXG4gICAgICAgICAgLy8gQ1NJID4gUCBzIGNcbiAgICAgICAgICAvLyBTZW5kIERldmljZSBBdHRyaWJ1dGVzIChTZWNvbmRhcnkgREEpXG4gICAgICAgICAgY2FzZSAnYyc6XG4gICAgICAgICAgICB0aGlzLnNlbmREZXZpY2VBdHRyaWJ1dGVzKHRoaXMucGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgLy8gQ1NJIFBtIGRcbiAgICAgICAgICAvLyBMaW5lIFBvc2l0aW9uIEFic29sdXRlICBbcm93XSAoZGVmYXVsdCA9IFsxLGNvbHVtbl0pIChWUEEpLlxuICAgICAgICAgIGNhc2UgJ2QnOlxuICAgICAgICAgICAgdGhpcy5saW5lUG9zQWJzb2x1dGUodGhpcy5wYXJhbXMpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAvLyAxNDUgNjUgZSAqIFZQUiAtIFZlcnRpY2FsIFBvc2l0aW9uIFJlbGF0aXZlXG4gICAgICAgICAgY2FzZSAnZSc6XG4gICAgICAgICAgICB0aGlzLlZQb3NpdGlvblJlbGF0aXZlKHRoaXMucGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgLy8gQ1NJIFBzIDsgUHMgZlxuICAgICAgICAgIC8vICAgSG9yaXpvbnRhbCBhbmQgVmVydGljYWwgUG9zaXRpb24gW3Jvdztjb2x1bW5dIChkZWZhdWx0ID1cbiAgICAgICAgICAvLyAgIFsxLDFdKSAoSFZQKS5cbiAgICAgICAgICBjYXNlICdmJzpcbiAgICAgICAgICAgIHRoaXMuSFZQb3NpdGlvbih0aGlzLnBhcmFtcyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIC8vIENTSSBQbSBoICBTZXQgTW9kZSAoU00pLlxuICAgICAgICAgIC8vIENTSSA/IFBtIGggLSBtb3VzZSBlc2NhcGUgY29kZXMsIGN1cnNvciBlc2NhcGUgY29kZXNcbiAgICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICAgIHRoaXMuc2V0TW9kZSh0aGlzLnBhcmFtcyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIC8vIENTSSBQbSBsICBSZXNldCBNb2RlIChSTSkuXG4gICAgICAgICAgLy8gQ1NJID8gUG0gbFxuICAgICAgICAgIGNhc2UgJ2wnOlxuICAgICAgICAgICAgdGhpcy5yZXNldE1vZGUodGhpcy5wYXJhbXMpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAvLyBDU0kgUHMgOyBQcyByXG4gICAgICAgICAgLy8gICBTZXQgU2Nyb2xsaW5nIFJlZ2lvbiBbdG9wO2JvdHRvbV0gKGRlZmF1bHQgPSBmdWxsIHNpemUgb2Ygd2luLVxuICAgICAgICAgIC8vICAgZG93KSAoREVDU1RCTSkuXG4gICAgICAgICAgLy8gQ1NJID8gUG0gclxuICAgICAgICAgIGNhc2UgJ3InOlxuICAgICAgICAgICAgdGhpcy5zZXRTY3JvbGxSZWdpb24odGhpcy5wYXJhbXMpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAvLyBDU0kgc1xuICAgICAgICAgIC8vICAgU2F2ZSBjdXJzb3IgKEFOU0kuU1lTKS5cbiAgICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICAgIHRoaXMuc2F2ZUN1cnNvcih0aGlzLnBhcmFtcyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIC8vIENTSSB1XG4gICAgICAgICAgLy8gICBSZXN0b3JlIGN1cnNvciAoQU5TSS5TWVMpLlxuICAgICAgICAgIGNhc2UgJ3UnOlxuICAgICAgICAgICAgdGhpcy5yZXN0b3JlQ3Vyc29yKHRoaXMucGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogTGVzc2VyIFVzZWRcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIC8vIENTSSBQcyBJXG4gICAgICAgICAgLy8gQ3Vyc29yIEZvcndhcmQgVGFidWxhdGlvbiBQcyB0YWIgc3RvcHMgKGRlZmF1bHQgPSAxKSAoQ0hUKS5cbiAgICAgICAgICBjYXNlICdJJzpcbiAgICAgICAgICAgIHRoaXMuY3Vyc29yRm9yd2FyZFRhYih0aGlzLnBhcmFtcyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIC8vIENTSSBQcyBTICBTY3JvbGwgdXAgUHMgbGluZXMgKGRlZmF1bHQgPSAxKSAoU1UpLlxuICAgICAgICAgIGNhc2UgJ1MnOlxuICAgICAgICAgICAgdGhpcy5zY3JvbGxVcCh0aGlzLnBhcmFtcyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIC8vIENTSSBQcyBUICBTY3JvbGwgZG93biBQcyBsaW5lcyAoZGVmYXVsdCA9IDEpIChTRCkuXG4gICAgICAgICAgLy8gQ1NJIFBzIDsgUHMgOyBQcyA7IFBzIDsgUHMgVFxuICAgICAgICAgIC8vIENTSSA+IFBzOyBQcyBUXG4gICAgICAgICAgY2FzZSAnVCc6XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5wcmVmaXggPT09ICc+Jykge1xuICAgICAgICAgICAgLy8gICB0aGlzLnJlc2V0VGl0bGVNb2Rlcyh0aGlzLnBhcmFtcyk7XG4gICAgICAgICAgICAvLyAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gaWYgKHRoaXMucGFyYW1zLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIC8vICAgdGhpcy5pbml0TW91c2VUcmFja2luZyh0aGlzLnBhcmFtcyk7XG4gICAgICAgICAgICAvLyAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1zLmxlbmd0aCA8IDIgJiYgIXRoaXMucHJlZml4KSB7XG4gICAgICAgICAgICAgIHRoaXMuc2Nyb2xsRG93bih0aGlzLnBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIC8vIENTSSBQcyBaXG4gICAgICAgICAgLy8gQ3Vyc29yIEJhY2t3YXJkIFRhYnVsYXRpb24gUHMgdGFiIHN0b3BzIChkZWZhdWx0ID0gMSkgKENCVCkuXG4gICAgICAgICAgY2FzZSAnWic6XG4gICAgICAgICAgICB0aGlzLmN1cnNvckJhY2t3YXJkVGFiKHRoaXMucGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgLy8gQ1NJIFBzIGIgIFJlcGVhdCB0aGUgcHJlY2VkaW5nIGdyYXBoaWMgY2hhcmFjdGVyIFBzIHRpbWVzIChSRVApLlxuICAgICAgICAgIGNhc2UgJ2InOlxuICAgICAgICAgICAgdGhpcy5yZXBlYXRQcmVjZWRpbmdDaGFyYWN0ZXIodGhpcy5wYXJhbXMpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAvLyBDU0kgUHMgZyAgVGFiIENsZWFyIChUQkMpLlxuICAgICAgICAgIGNhc2UgJ2cnOlxuICAgICAgICAgICAgdGhpcy50YWJDbGVhcih0aGlzLnBhcmFtcyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIC8vIENTSSBQbSBpICBNZWRpYSBDb3B5IChNQykuXG4gICAgICAgICAgLy8gQ1NJID8gUG0gaVxuICAgICAgICAgIC8vIGNhc2UgJ2knOlxuICAgICAgICAgIC8vICAgdGhpcy5tZWRpYUNvcHkodGhpcy5wYXJhbXMpO1xuICAgICAgICAgIC8vICAgYnJlYWs7XG5cbiAgICAgICAgICAvLyBDU0kgUG0gbSAgQ2hhcmFjdGVyIEF0dHJpYnV0ZXMgKFNHUikuXG4gICAgICAgICAgLy8gQ1NJID4gUHM7IFBzIG1cbiAgICAgICAgICAvLyBjYXNlICdtJzogLy8gZHVwbGljYXRlXG4gICAgICAgICAgLy8gICBpZiAodGhpcy5wcmVmaXggPT09ICc+Jykge1xuICAgICAgICAgIC8vICAgICB0aGlzLnNldFJlc291cmNlcyh0aGlzLnBhcmFtcyk7XG4gICAgICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgICAgIC8vICAgICB0aGlzLmNoYXJBdHRyaWJ1dGVzKHRoaXMucGFyYW1zKTtcbiAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAvLyAgIGJyZWFrO1xuXG4gICAgICAgICAgLy8gQ1NJIFBzIG4gIERldmljZSBTdGF0dXMgUmVwb3J0IChEU1IpLlxuICAgICAgICAgIC8vIENTSSA+IFBzIG5cbiAgICAgICAgICAvLyBjYXNlICduJzogLy8gZHVwbGljYXRlXG4gICAgICAgICAgLy8gICBpZiAodGhpcy5wcmVmaXggPT09ICc+Jykge1xuICAgICAgICAgIC8vICAgICB0aGlzLmRpc2FibGVNb2RpZmllcnModGhpcy5wYXJhbXMpO1xuICAgICAgICAgIC8vICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyAgICAgdGhpcy5kZXZpY2VTdGF0dXModGhpcy5wYXJhbXMpO1xuICAgICAgICAgIC8vICAgfVxuICAgICAgICAgIC8vICAgYnJlYWs7XG5cbiAgICAgICAgICAvLyBDU0kgPiBQcyBwICBTZXQgcG9pbnRlciBtb2RlLlxuICAgICAgICAgIC8vIENTSSAhIHAgICBTb2Z0IHRlcm1pbmFsIHJlc2V0IChERUNTVFIpLlxuICAgICAgICAgIC8vIENTSSBQcyQgcFxuICAgICAgICAgIC8vICAgUmVxdWVzdCBBTlNJIG1vZGUgKERFQ1JRTSkuXG4gICAgICAgICAgLy8gQ1NJID8gUHMkIHBcbiAgICAgICAgICAvLyAgIFJlcXVlc3QgREVDIHByaXZhdGUgbW9kZSAoREVDUlFNKS5cbiAgICAgICAgICAvLyBDU0kgUHMgOyBQcyBcIiBwXG4gICAgICAgICAgY2FzZSAncCc6XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMucHJlZml4KSB7XG4gICAgICAgICAgICAgIC8vIGNhc2UgJz4nOlxuICAgICAgICAgICAgICAvLyAgIHRoaXMuc2V0UG9pbnRlck1vZGUodGhpcy5wYXJhbXMpO1xuICAgICAgICAgICAgICAvLyAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICchJzpcbiAgICAgICAgICAgICAgICB0aGlzLnNvZnRSZXNldCh0aGlzLnBhcmFtcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIC8vIGNhc2UgJz8nOlxuICAgICAgICAgICAgICAvLyAgIGlmICh0aGlzLnBvc3RmaXggPT09ICckJykge1xuICAgICAgICAgICAgICAvLyAgICAgdGhpcy5yZXF1ZXN0UHJpdmF0ZU1vZGUodGhpcy5wYXJhbXMpO1xuICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgLy8gICBicmVhaztcbiAgICAgICAgICAgICAgLy8gZGVmYXVsdDpcbiAgICAgICAgICAgICAgLy8gICBpZiAodGhpcy5wb3N0Zml4ID09PSAnXCInKSB7XG4gICAgICAgICAgICAgIC8vICAgICB0aGlzLnNldENvbmZvcm1hbmNlTGV2ZWwodGhpcy5wYXJhbXMpO1xuICAgICAgICAgICAgICAvLyAgIH0gZWxzZSBpZiAodGhpcy5wb3N0Zml4ID09PSAnJCcpIHtcbiAgICAgICAgICAgICAgLy8gICAgIHRoaXMucmVxdWVzdEFuc2lNb2RlKHRoaXMucGFyYW1zKTtcbiAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgIC8vICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIC8vIENTSSBQcyBxICBMb2FkIExFRHMgKERFQ0xMKS5cbiAgICAgICAgICAvLyBDU0kgUHMgU1AgcVxuICAgICAgICAgIC8vIENTSSBQcyBcIiBxXG4gICAgICAgICAgLy8gY2FzZSAncSc6XG4gICAgICAgICAgLy8gICBpZiAodGhpcy5wb3N0Zml4ID09PSAnICcpIHtcbiAgICAgICAgICAvLyAgICAgdGhpcy5zZXRDdXJzb3JTdHlsZSh0aGlzLnBhcmFtcyk7XG4gICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgIC8vICAgfVxuICAgICAgICAgIC8vICAgaWYgKHRoaXMucG9zdGZpeCA9PT0gJ1wiJykge1xuICAgICAgICAgIC8vICAgICB0aGlzLnNldENoYXJQcm90ZWN0aW9uQXR0cih0aGlzLnBhcmFtcyk7XG4gICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgIC8vICAgfVxuICAgICAgICAgIC8vICAgdGhpcy5sb2FkTEVEcyh0aGlzLnBhcmFtcyk7XG4gICAgICAgICAgLy8gICBicmVhaztcblxuICAgICAgICAgIC8vIENTSSBQcyA7IFBzIHJcbiAgICAgICAgICAvLyAgIFNldCBTY3JvbGxpbmcgUmVnaW9uIFt0b3A7Ym90dG9tXSAoZGVmYXVsdCA9IGZ1bGwgc2l6ZSBvZiB3aW4tXG4gICAgICAgICAgLy8gICBkb3cpIChERUNTVEJNKS5cbiAgICAgICAgICAvLyBDU0kgPyBQbSByXG4gICAgICAgICAgLy8gQ1NJIFB0OyBQbDsgUGI7IFByOyBQcyQgclxuICAgICAgICAgIC8vIGNhc2UgJ3InOiAvLyBkdXBsaWNhdGVcbiAgICAgICAgICAvLyAgIGlmICh0aGlzLnByZWZpeCA9PT0gJz8nKSB7XG4gICAgICAgICAgLy8gICAgIHRoaXMucmVzdG9yZVByaXZhdGVWYWx1ZXModGhpcy5wYXJhbXMpO1xuICAgICAgICAgIC8vICAgfSBlbHNlIGlmICh0aGlzLnBvc3RmaXggPT09ICckJykge1xuICAgICAgICAgIC8vICAgICB0aGlzLnNldEF0dHJJblJlY3RhbmdsZSh0aGlzLnBhcmFtcyk7XG4gICAgICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgICAgIC8vICAgICB0aGlzLnNldFNjcm9sbFJlZ2lvbih0aGlzLnBhcmFtcyk7XG4gICAgICAgICAgLy8gICB9XG4gICAgICAgICAgLy8gICBicmVhaztcblxuICAgICAgICAgIC8vIENTSSBzICAgICBTYXZlIGN1cnNvciAoQU5TSS5TWVMpLlxuICAgICAgICAgIC8vIENTSSA/IFBtIHNcbiAgICAgICAgICAvLyBjYXNlICdzJzogLy8gZHVwbGljYXRlXG4gICAgICAgICAgLy8gICBpZiAodGhpcy5wcmVmaXggPT09ICc/Jykge1xuICAgICAgICAgIC8vICAgICB0aGlzLnNhdmVQcml2YXRlVmFsdWVzKHRoaXMucGFyYW1zKTtcbiAgICAgICAgICAvLyAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gICAgIHRoaXMuc2F2ZUN1cnNvcih0aGlzLnBhcmFtcyk7XG4gICAgICAgICAgLy8gICB9XG4gICAgICAgICAgLy8gICBicmVhaztcblxuICAgICAgICAgIC8vIENTSSBQcyA7IFBzIDsgUHMgdFxuICAgICAgICAgIC8vIENTSSBQdDsgUGw7IFBiOyBQcjsgUHMkIHRcbiAgICAgICAgICAvLyBDU0kgPiBQczsgUHMgdFxuICAgICAgICAgIC8vIENTSSBQcyBTUCB0XG4gICAgICAgICAgLy8gY2FzZSAndCc6XG4gICAgICAgICAgLy8gICBpZiAodGhpcy5wb3N0Zml4ID09PSAnJCcpIHtcbiAgICAgICAgICAvLyAgICAgdGhpcy5yZXZlcnNlQXR0ckluUmVjdGFuZ2xlKHRoaXMucGFyYW1zKTtcbiAgICAgICAgICAvLyAgIH0gZWxzZSBpZiAodGhpcy5wb3N0Zml4ID09PSAnICcpIHtcbiAgICAgICAgICAvLyAgICAgdGhpcy5zZXRXYXJuaW5nQmVsbFZvbHVtZSh0aGlzLnBhcmFtcyk7XG4gICAgICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgICAgIC8vICAgICBpZiAodGhpcy5wcmVmaXggPT09ICc+Jykge1xuICAgICAgICAgIC8vICAgICAgIHRoaXMuc2V0VGl0bGVNb2RlRmVhdHVyZSh0aGlzLnBhcmFtcyk7XG4gICAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gICAgICAgdGhpcy5tYW5pcHVsYXRlV2luZG93KHRoaXMucGFyYW1zKTtcbiAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgIC8vICAgfVxuICAgICAgICAgIC8vICAgYnJlYWs7XG5cbiAgICAgICAgICAvLyBDU0kgdSAgICAgUmVzdG9yZSBjdXJzb3IgKEFOU0kuU1lTKS5cbiAgICAgICAgICAvLyBDU0kgUHMgU1AgdVxuICAgICAgICAgIC8vIGNhc2UgJ3UnOiAvLyBkdXBsaWNhdGVcbiAgICAgICAgICAvLyAgIGlmICh0aGlzLnBvc3RmaXggPT09ICcgJykge1xuICAgICAgICAgIC8vICAgICB0aGlzLnNldE1hcmdpbkJlbGxWb2x1bWUodGhpcy5wYXJhbXMpO1xuICAgICAgICAgIC8vICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyAgICAgdGhpcy5yZXN0b3JlQ3Vyc29yKHRoaXMucGFyYW1zKTtcbiAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAvLyAgIGJyZWFrO1xuXG4gICAgICAgICAgLy8gQ1NJIFB0OyBQbDsgUGI7IFByOyBQcDsgUHQ7IFBsOyBQcCQgdlxuICAgICAgICAgIC8vIGNhc2UgJ3YnOlxuICAgICAgICAgIC8vICAgaWYgKHRoaXMucG9zdGZpeCA9PT0gJyQnKSB7XG4gICAgICAgICAgLy8gICAgIHRoaXMuY29weVJlY3RhZ2xlKHRoaXMucGFyYW1zKTtcbiAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAvLyAgIGJyZWFrO1xuXG4gICAgICAgICAgLy8gQ1NJIFB0IDsgUGwgOyBQYiA7IFByICcgd1xuICAgICAgICAgIC8vIGNhc2UgJ3cnOlxuICAgICAgICAgIC8vICAgaWYgKHRoaXMucG9zdGZpeCA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAvLyAgICAgdGhpcy5lbmFibGVGaWx0ZXJSZWN0YW5nbGUodGhpcy5wYXJhbXMpO1xuICAgICAgICAgIC8vICAgfVxuICAgICAgICAgIC8vICAgYnJlYWs7XG5cbiAgICAgICAgICAvLyBDU0kgUHMgeCAgUmVxdWVzdCBUZXJtaW5hbCBQYXJhbWV0ZXJzIChERUNSRVFUUEFSTSkuXG4gICAgICAgICAgLy8gQ1NJIFBzIHggIFNlbGVjdCBBdHRyaWJ1dGUgQ2hhbmdlIEV4dGVudCAoREVDU0FDRSkuXG4gICAgICAgICAgLy8gQ1NJIFBjOyBQdDsgUGw7IFBiOyBQciQgeFxuICAgICAgICAgIC8vIGNhc2UgJ3gnOlxuICAgICAgICAgIC8vICAgaWYgKHRoaXMucG9zdGZpeCA9PT0gJyQnKSB7XG4gICAgICAgICAgLy8gICAgIHRoaXMuZmlsbFJlY3RhbmdsZSh0aGlzLnBhcmFtcyk7XG4gICAgICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgICAgIC8vICAgICB0aGlzLnJlcXVlc3RQYXJhbWV0ZXJzKHRoaXMucGFyYW1zKTtcbiAgICAgICAgICAvLyAgICAgLy90aGlzLl9fKHRoaXMucGFyYW1zKTtcbiAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAvLyAgIGJyZWFrO1xuXG4gICAgICAgICAgLy8gQ1NJIFBzIDsgUHUgJyB6XG4gICAgICAgICAgLy8gQ1NJIFB0OyBQbDsgUGI7IFByJCB6XG4gICAgICAgICAgLy8gY2FzZSAneic6XG4gICAgICAgICAgLy8gICBpZiAodGhpcy5wb3N0Zml4ID09PSAnXFwnJykge1xuICAgICAgICAgIC8vICAgICB0aGlzLmVuYWJsZUxvY2F0b3JSZXBvcnRpbmcodGhpcy5wYXJhbXMpO1xuICAgICAgICAgIC8vICAgfSBlbHNlIGlmICh0aGlzLnBvc3RmaXggPT09ICckJykge1xuICAgICAgICAgIC8vICAgICB0aGlzLmVyYXNlUmVjdGFuZ2xlKHRoaXMucGFyYW1zKTtcbiAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAvLyAgIGJyZWFrO1xuXG4gICAgICAgICAgLy8gQ1NJIFBtICcge1xuICAgICAgICAgIC8vIENTSSBQdDsgUGw7IFBiOyBQciQge1xuICAgICAgICAgIC8vIGNhc2UgJ3snOlxuICAgICAgICAgIC8vICAgaWYgKHRoaXMucG9zdGZpeCA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAvLyAgICAgdGhpcy5zZXRMb2NhdG9yRXZlbnRzKHRoaXMucGFyYW1zKTtcbiAgICAgICAgICAvLyAgIH0gZWxzZSBpZiAodGhpcy5wb3N0Zml4ID09PSAnJCcpIHtcbiAgICAgICAgICAvLyAgICAgdGhpcy5zZWxlY3RpdmVFcmFzZVJlY3RhbmdsZSh0aGlzLnBhcmFtcyk7XG4gICAgICAgICAgLy8gICB9XG4gICAgICAgICAgLy8gICBicmVhaztcblxuICAgICAgICAgIC8vIENTSSBQcyAnIHxcbiAgICAgICAgICAvLyBjYXNlICd8JzpcbiAgICAgICAgICAvLyAgIGlmICh0aGlzLnBvc3RmaXggPT09ICdcXCcnKSB7XG4gICAgICAgICAgLy8gICAgIHRoaXMucmVxdWVzdExvY2F0b3JQb3NpdGlvbih0aGlzLnBhcmFtcyk7XG4gICAgICAgICAgLy8gICB9XG4gICAgICAgICAgLy8gICBicmVhaztcblxuICAgICAgICAgIC8vIENTSSBQIG0gU1AgfVxuICAgICAgICAgIC8vIEluc2VydCBQIHMgQ29sdW1uKHMpIChkZWZhdWx0ID0gMSkgKERFQ0lDKSwgVlQ0MjAgYW5kIHVwLlxuICAgICAgICAgIC8vIGNhc2UgJ30nOlxuICAgICAgICAgIC8vICAgaWYgKHRoaXMucG9zdGZpeCA9PT0gJyAnKSB7XG4gICAgICAgICAgLy8gICAgIHRoaXMuaW5zZXJ0Q29sdW1ucyh0aGlzLnBhcmFtcyk7XG4gICAgICAgICAgLy8gICB9XG4gICAgICAgICAgLy8gICBicmVhaztcblxuICAgICAgICAgIC8vIENTSSBQIG0gU1AgflxuICAgICAgICAgIC8vIERlbGV0ZSBQIHMgQ29sdW1uKHMpIChkZWZhdWx0ID0gMSkgKERFQ0RDKSwgVlQ0MjAgYW5kIHVwXG4gICAgICAgICAgLy8gY2FzZSAnfic6XG4gICAgICAgICAgLy8gICBpZiAodGhpcy5wb3N0Zml4ID09PSAnICcpIHtcbiAgICAgICAgICAvLyAgICAgdGhpcy5kZWxldGVDb2x1bW5zKHRoaXMucGFyYW1zKTtcbiAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAvLyAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoJ1Vua25vd24gQ1NJIGNvZGU6ICVzLicsIGNoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmVmaXggPSAnJztcbiAgICAgICAgdGhpcy5wb3N0Zml4ID0gJyc7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIGRjczpcbiAgICAgICAgaWYgKGNoID09PSAnXFx4MWInIHx8IGNoID09PSAnXFx4MDcnKSB7XG4gICAgICAgICAgaWYgKGNoID09PSAnXFx4MWInKSBpKys7XG5cbiAgICAgICAgICBzd2l0Y2ggKHRoaXMucHJlZml4KSB7XG4gICAgICAgICAgICAvLyBVc2VyLURlZmluZWQgS2V5cyAoREVDVURLKS5cbiAgICAgICAgICAgIGNhc2UgJyc6XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBSZXF1ZXN0IFN0YXR1cyBTdHJpbmcgKERFQ1JRU1MpLlxuICAgICAgICAgICAgLy8gdGVzdDogZWNobyAtZSAnXFxlUCRxXCJwXFxlXFxcXCdcbiAgICAgICAgICAgIGNhc2UgJyRxJzpcbiAgICAgICAgICAgICAgdmFyIHB0ID0gdGhpcy5jdXJyZW50UGFyYW1cbiAgICAgICAgICAgICAgICAsIHZhbGlkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgc3dpdGNoIChwdCkge1xuICAgICAgICAgICAgICAgIC8vIERFQ1NDQVxuICAgICAgICAgICAgICAgIGNhc2UgJ1wicSc6XG4gICAgICAgICAgICAgICAgICBwdCA9ICcwXCJxJztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgLy8gREVDU0NMXG4gICAgICAgICAgICAgICAgY2FzZSAnXCJwJzpcbiAgICAgICAgICAgICAgICAgIHB0ID0gJzYxXCJwJztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgLy8gREVDU1RCTVxuICAgICAgICAgICAgICAgIGNhc2UgJ3InOlxuICAgICAgICAgICAgICAgICAgcHQgPSAnJ1xuICAgICAgICAgICAgICAgICAgICArICh0aGlzLnNjcm9sbFRvcCArIDEpXG4gICAgICAgICAgICAgICAgICAgICsgJzsnXG4gICAgICAgICAgICAgICAgICAgICsgKHRoaXMuc2Nyb2xsQm90dG9tICsgMSlcbiAgICAgICAgICAgICAgICAgICAgKyAncic7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIC8vIFNHUlxuICAgICAgICAgICAgICAgIGNhc2UgJ20nOlxuICAgICAgICAgICAgICAgICAgcHQgPSAnMG0nO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcignVW5rbm93biBEQ1MgUHQ6ICVzLicsIHB0KTtcbiAgICAgICAgICAgICAgICAgIHB0ID0gJyc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRoaXMuc2VuZCgnXFx4MWJQJyArICt2YWxpZCArICckcicgKyBwdCArICdcXHgxYlxcXFwnKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIFNldCBUZXJtY2FwL1Rlcm1pbmZvIERhdGEgKHh0ZXJtLCBleHBlcmltZW50YWwpLlxuICAgICAgICAgICAgY2FzZSAnK3AnOlxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gUmVxdWVzdCBUZXJtY2FwL1Rlcm1pbmZvIFN0cmluZyAoeHRlcm0sIGV4cGVyaW1lbnRhbClcbiAgICAgICAgICAgIC8vIFJlZ3VsYXIgeHRlcm0gZG9lcyBub3QgZXZlbiByZXNwb25kIHRvIHRoaXMgc2VxdWVuY2UuXG4gICAgICAgICAgICAvLyBUaGlzIGNhbiBjYXVzZSBhIHNtYWxsIGdsaXRjaCBpbiB2aW0uXG4gICAgICAgICAgICAvLyB0ZXN0OiBlY2hvIC1uZSAnXFxlUCtxNmI2NFxcZVxcXFwnXG4gICAgICAgICAgICBjYXNlICcrcSc6XG4gICAgICAgICAgICAgIHZhciBwdCA9IHRoaXMuY3VycmVudFBhcmFtXG4gICAgICAgICAgICAgICAgLCB2YWxpZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgIHRoaXMuc2VuZCgnXFx4MWJQJyArICt2YWxpZCArICcrcicgKyBwdCArICdcXHgxYlxcXFwnKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHRoaXMuZXJyb3IoJ1Vua25vd24gRENTIHByZWZpeDogJXMuJywgdGhpcy5wcmVmaXgpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmN1cnJlbnRQYXJhbSA9IDA7XG4gICAgICAgICAgdGhpcy5wcmVmaXggPSAnJztcbiAgICAgICAgICB0aGlzLnN0YXRlID0gbm9ybWFsO1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmN1cnJlbnRQYXJhbSkge1xuICAgICAgICAgIGlmICghdGhpcy5wcmVmaXggJiYgY2ggIT09ICckJyAmJiBjaCAhPT0gJysnKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXJhbSA9IGNoO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmVmaXgubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXJhbSA9IGNoO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByZWZpeCArPSBjaDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50UGFyYW0gKz0gY2g7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgaWdub3JlOlxuICAgICAgICAvLyBGb3IgUE0gYW5kIEFQQy5cbiAgICAgICAgaWYgKGNoID09PSAnXFx4MWInIHx8IGNoID09PSAnXFx4MDcnKSB7XG4gICAgICAgICAgaWYgKGNoID09PSAnXFx4MWInKSBpKys7XG4gICAgICAgICAgdGhpcy5zdGF0ZSA9IG5vcm1hbDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB0aGlzLnVwZGF0ZVJhbmdlKHRoaXMueSk7XG4gIHRoaXMucmVmcmVzaCh0aGlzLnJlZnJlc2hTdGFydCwgdGhpcy5yZWZyZXNoRW5kKTtcbn07XG5cblRlcm1pbmFsLnByb3RvdHlwZS53cml0ZWxuID0gZnVuY3Rpb24oZGF0YSkge1xuICB0aGlzLndyaXRlKGRhdGEgKyAnXFxyXFxuJyk7XG59O1xuXG4vLyBLZXkgUmVzb3VyY2VzOlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9ET00vS2V5Ym9hcmRFdmVudFxuVGVybWluYWwucHJvdG90eXBlLmtleURvd24gPSBmdW5jdGlvbihldikge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgICAsIGtleTtcblxuICBzd2l0Y2ggKGV2LmtleUNvZGUpIHtcbiAgICAvLyBiYWNrc3BhY2VcbiAgICBjYXNlIDg6XG4gICAgICBpZiAoZXYuc2hpZnRLZXkpIHtcbiAgICAgICAga2V5ID0gJ1xceDA4JzsgLy8gXkhcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBrZXkgPSAnXFx4N2YnOyAvLyBeP1xuICAgICAgYnJlYWs7XG4gICAgLy8gdGFiXG4gICAgY2FzZSA5OlxuICAgICAgaWYgKGV2LnNoaWZ0S2V5KSB7XG4gICAgICAgIGtleSA9ICdcXHgxYltaJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBrZXkgPSAnXFx0JztcbiAgICAgIGJyZWFrO1xuICAgIC8vIHJldHVybi9lbnRlclxuICAgIGNhc2UgMTM6XG4gICAgICBrZXkgPSAnXFxyJztcbiAgICAgIGJyZWFrO1xuICAgIC8vIGVzY2FwZVxuICAgIGNhc2UgMjc6XG4gICAgICBrZXkgPSAnXFx4MWInO1xuICAgICAgYnJlYWs7XG4gICAgLy8gbGVmdC1hcnJvd1xuICAgIGNhc2UgMzc6XG4gICAgICBpZiAodGhpcy5hcHBsaWNhdGlvbkN1cnNvcikge1xuICAgICAgICBrZXkgPSAnXFx4MWJPRCc7IC8vIFNTMyBhcyBeW08gZm9yIDctYml0XG4gICAgICAgIC8va2V5ID0gJ1xceDhmRCc7IC8vIFNTMyBhcyAweDhmIGZvciA4LWJpdFxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGtleSA9ICdcXHgxYltEJztcbiAgICAgIGJyZWFrO1xuICAgIC8vIHJpZ2h0LWFycm93XG4gICAgY2FzZSAzOTpcbiAgICAgIGlmICh0aGlzLmFwcGxpY2F0aW9uQ3Vyc29yKSB7XG4gICAgICAgIGtleSA9ICdcXHgxYk9DJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBrZXkgPSAnXFx4MWJbQyc7XG4gICAgICBicmVhaztcbiAgICAvLyB1cC1hcnJvd1xuICAgIGNhc2UgMzg6XG4gICAgICBpZiAodGhpcy5hcHBsaWNhdGlvbkN1cnNvcikge1xuICAgICAgICBrZXkgPSAnXFx4MWJPQSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKGV2LmN0cmxLZXkpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxEaXNwKC0xKTtcbiAgICAgICAgcmV0dXJuIGNhbmNlbChldik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrZXkgPSAnXFx4MWJbQSc7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICAvLyBkb3duLWFycm93XG4gICAgY2FzZSA0MDpcbiAgICAgIGlmICh0aGlzLmFwcGxpY2F0aW9uQ3Vyc29yKSB7XG4gICAgICAgIGtleSA9ICdcXHgxYk9CJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAoZXYuY3RybEtleSkge1xuICAgICAgICB0aGlzLnNjcm9sbERpc3AoMSk7XG4gICAgICAgIHJldHVybiBjYW5jZWwoZXYpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAga2V5ID0gJ1xceDFiW0InO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgLy8gZGVsZXRlXG4gICAgY2FzZSA0NjpcbiAgICAgIGtleSA9ICdcXHgxYlszfic7XG4gICAgICBicmVhaztcbiAgICAvLyBpbnNlcnRcbiAgICBjYXNlIDQ1OlxuICAgICAga2V5ID0gJ1xceDFiWzJ+JztcbiAgICAgIGJyZWFrO1xuICAgIC8vIGhvbWVcbiAgICBjYXNlIDM2OlxuICAgICAgaWYgKHRoaXMuYXBwbGljYXRpb25LZXlwYWQpIHtcbiAgICAgICAga2V5ID0gJ1xceDFiT0gnO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGtleSA9ICdcXHgxYk9IJztcbiAgICAgIGJyZWFrO1xuICAgIC8vIGVuZFxuICAgIGNhc2UgMzU6XG4gICAgICBpZiAodGhpcy5hcHBsaWNhdGlvbktleXBhZCkge1xuICAgICAgICBrZXkgPSAnXFx4MWJPRic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAga2V5ID0gJ1xceDFiT0YnO1xuICAgICAgYnJlYWs7XG4gICAgLy8gcGFnZSB1cFxuICAgIGNhc2UgMzM6XG4gICAgICBpZiAoZXYuc2hpZnRLZXkpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxEaXNwKC0odGhpcy5yb3dzIC0gMSkpO1xuICAgICAgICByZXR1cm4gY2FuY2VsKGV2KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtleSA9ICdcXHgxYls1fic7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICAvLyBwYWdlIGRvd25cbiAgICBjYXNlIDM0OlxuICAgICAgaWYgKGV2LnNoaWZ0S2V5KSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsRGlzcCh0aGlzLnJvd3MgLSAxKTtcbiAgICAgICAgcmV0dXJuIGNhbmNlbChldik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrZXkgPSAnXFx4MWJbNn4nO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgLy8gRjFcbiAgICBjYXNlIDExMjpcbiAgICAgIGtleSA9ICdcXHgxYk9QJztcbiAgICAgIGJyZWFrO1xuICAgIC8vIEYyXG4gICAgY2FzZSAxMTM6XG4gICAgICBrZXkgPSAnXFx4MWJPUSc7XG4gICAgICBicmVhaztcbiAgICAvLyBGM1xuICAgIGNhc2UgMTE0OlxuICAgICAga2V5ID0gJ1xceDFiT1InO1xuICAgICAgYnJlYWs7XG4gICAgLy8gRjRcbiAgICBjYXNlIDExNTpcbiAgICAgIGtleSA9ICdcXHgxYk9TJztcbiAgICAgIGJyZWFrO1xuICAgIC8vIEY1XG4gICAgY2FzZSAxMTY6XG4gICAgICBrZXkgPSAnXFx4MWJbMTV+JztcbiAgICAgIGJyZWFrO1xuICAgIC8vIEY2XG4gICAgY2FzZSAxMTc6XG4gICAgICBrZXkgPSAnXFx4MWJbMTd+JztcbiAgICAgIGJyZWFrO1xuICAgIC8vIEY3XG4gICAgY2FzZSAxMTg6XG4gICAgICBrZXkgPSAnXFx4MWJbMTh+JztcbiAgICAgIGJyZWFrO1xuICAgIC8vIEY4XG4gICAgY2FzZSAxMTk6XG4gICAgICBrZXkgPSAnXFx4MWJbMTl+JztcbiAgICAgIGJyZWFrO1xuICAgIC8vIEY5XG4gICAgY2FzZSAxMjA6XG4gICAgICBrZXkgPSAnXFx4MWJbMjB+JztcbiAgICAgIGJyZWFrO1xuICAgIC8vIEYxMFxuICAgIGNhc2UgMTIxOlxuICAgICAga2V5ID0gJ1xceDFiWzIxfic7XG4gICAgICBicmVhaztcbiAgICAvLyBGMTFcbiAgICBjYXNlIDEyMjpcbiAgICAgIGtleSA9ICdcXHgxYlsyM34nO1xuICAgICAgYnJlYWs7XG4gICAgLy8gRjEyXG4gICAgY2FzZSAxMjM6XG4gICAgICBrZXkgPSAnXFx4MWJbMjR+JztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBhLXogYW5kIHNwYWNlXG4gICAgICBpZiAoZXYuY3RybEtleSkge1xuICAgICAgICBpZiAoZXYua2V5Q29kZSA+PSA2NSAmJiBldi5rZXlDb2RlIDw9IDkwKSB7XG4gICAgICAgICAgLy8gQ3RybC1BXG4gICAgICAgICAgaWYgKHRoaXMuc2NyZWVuS2V5cykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnByZWZpeE1vZGUgJiYgIXRoaXMuc2VsZWN0TW9kZSAmJiBldi5rZXlDb2RlID09PSA2NSkge1xuICAgICAgICAgICAgICB0aGlzLmVudGVyUHJlZml4KCk7XG4gICAgICAgICAgICAgIHJldHVybiBjYW5jZWwoZXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBDdHJsLVZcbiAgICAgICAgICBpZiAodGhpcy5wcmVmaXhNb2RlICYmIGV2LmtleUNvZGUgPT09IDg2KSB7XG4gICAgICAgICAgICB0aGlzLmxlYXZlUHJlZml4KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEN0cmwtQ1xuICAgICAgICAgIGlmICgodGhpcy5wcmVmaXhNb2RlIHx8IHRoaXMuc2VsZWN0TW9kZSkgJiYgZXYua2V5Q29kZSA9PT0gNjcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZpc3VhbE1vZGUpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmxlYXZlVmlzdWFsKCk7XG4gICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBrZXkgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2LmtleUNvZGUgLSA2NCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXYua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgICAgICAvLyBOVUxcbiAgICAgICAgICBrZXkgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDApO1xuICAgICAgICB9IGVsc2UgaWYgKGV2LmtleUNvZGUgPj0gNTEgJiYgZXYua2V5Q29kZSA8PSA1NSkge1xuICAgICAgICAgIC8vIGVzY2FwZSwgZmlsZSBzZXAsIGdyb3VwIHNlcCwgcmVjb3JkIHNlcCwgdW5pdCBzZXBcbiAgICAgICAgICBrZXkgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2LmtleUNvZGUgLSA1MSArIDI3KTtcbiAgICAgICAgfSBlbHNlIGlmIChldi5rZXlDb2RlID09PSA1Nikge1xuICAgICAgICAgIC8vIGRlbGV0ZVxuICAgICAgICAgIGtleSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMTI3KTtcbiAgICAgICAgfSBlbHNlIGlmIChldi5rZXlDb2RlID09PSAyMTkpIHtcbiAgICAgICAgICAvLyBeWyAtIGVzY2FwZVxuICAgICAgICAgIGtleSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMjcpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2LmtleUNvZGUgPT09IDIyMSkge1xuICAgICAgICAgIC8vIF5dIC0gZ3JvdXAgc2VwXG4gICAgICAgICAga2V5ID0gU3RyaW5nLmZyb21DaGFyQ29kZSgyOSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoKCF0aGlzLmlzTWFjICYmIGV2LmFsdEtleSkgfHwgKHRoaXMuaXNNYWMgJiYgZXYubWV0YUtleSkpIHtcbiAgICAgICAgaWYgKGV2LmtleUNvZGUgPj0gNjUgJiYgZXYua2V5Q29kZSA8PSA5MCkge1xuICAgICAgICAgIGtleSA9ICdcXHgxYicgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2LmtleUNvZGUgKyAzMik7XG4gICAgICAgIH0gZWxzZSBpZiAoZXYua2V5Q29kZSA9PT0gMTkyKSB7XG4gICAgICAgICAga2V5ID0gJ1xceDFiYCc7XG4gICAgICAgIH0gZWxzZSBpZiAoZXYua2V5Q29kZSA+PSA0OCAmJiBldi5rZXlDb2RlIDw9IDU3KSB7XG4gICAgICAgICAga2V5ID0gJ1xceDFiJyArIChldi5rZXlDb2RlIC0gNDgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGlmICgha2V5KSByZXR1cm4gdHJ1ZTtcblxuICBpZiAodGhpcy5wcmVmaXhNb2RlKSB7XG4gICAgdGhpcy5sZWF2ZVByZWZpeCgpO1xuICAgIHJldHVybiBjYW5jZWwoZXYpO1xuICB9XG5cbiAgaWYgKHRoaXMuc2VsZWN0TW9kZSkge1xuICAgIHRoaXMua2V5U2VsZWN0KGV2LCBrZXkpO1xuICAgIHJldHVybiBjYW5jZWwoZXYpO1xuICB9XG5cbiAgdGhpcy5lbWl0KCdrZXlkb3duJywgZXYpO1xuICB0aGlzLmVtaXQoJ2tleScsIGtleSwgZXYpO1xuXG4gIHRoaXMuc2hvd0N1cnNvcigpO1xuICB0aGlzLmhhbmRsZXIoa2V5KTtcblxuICByZXR1cm4gY2FuY2VsKGV2KTtcbn07XG5cblRlcm1pbmFsLnByb3RvdHlwZS5zZXRnTGV2ZWwgPSBmdW5jdGlvbihnKSB7XG4gIHRoaXMuZ2xldmVsID0gZztcbiAgdGhpcy5jaGFyc2V0ID0gdGhpcy5jaGFyc2V0c1tnXTtcbn07XG5cblRlcm1pbmFsLnByb3RvdHlwZS5zZXRnQ2hhcnNldCA9IGZ1bmN0aW9uKGcsIGNoYXJzZXQpIHtcbiAgdGhpcy5jaGFyc2V0c1tnXSA9IGNoYXJzZXQ7XG4gIGlmICh0aGlzLmdsZXZlbCA9PT0gZykge1xuICAgIHRoaXMuY2hhcnNldCA9IGNoYXJzZXQ7XG4gIH1cbn07XG5cblRlcm1pbmFsLnByb3RvdHlwZS5rZXlQcmVzcyA9IGZ1bmN0aW9uKGV2KSB7XG4gIHZhciBrZXk7XG5cbiAgY2FuY2VsKGV2KTtcblxuICBpZiAoZXYuY2hhckNvZGUpIHtcbiAgICBrZXkgPSBldi5jaGFyQ29kZTtcbiAgfSBlbHNlIGlmIChldi53aGljaCA9PSBudWxsKSB7XG4gICAga2V5ID0gZXYua2V5Q29kZTtcbiAgfSBlbHNlIGlmIChldi53aGljaCAhPT0gMCAmJiBldi5jaGFyQ29kZSAhPT0gMCkge1xuICAgIGtleSA9IGV2LndoaWNoO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICgha2V5IHx8IGV2LmN0cmxLZXkgfHwgZXYuYWx0S2V5IHx8IGV2Lm1ldGFLZXkpIHJldHVybiBmYWxzZTtcblxuICBrZXkgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGtleSk7XG5cbiAgaWYgKHRoaXMucHJlZml4TW9kZSkge1xuICAgIHRoaXMubGVhdmVQcmVmaXgoKTtcbiAgICB0aGlzLmtleVByZWZpeChldiwga2V5KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodGhpcy5zZWxlY3RNb2RlKSB7XG4gICAgdGhpcy5rZXlTZWxlY3QoZXYsIGtleSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdGhpcy5lbWl0KCdrZXlwcmVzcycsIGtleSwgZXYpO1xuICB0aGlzLmVtaXQoJ2tleScsIGtleSwgZXYpO1xuXG4gIHRoaXMuc2hvd0N1cnNvcigpO1xuICB0aGlzLmhhbmRsZXIoa2V5KTtcblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5UZXJtaW5hbC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIGlmICghdGhpcy5xdWV1ZSkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBzZWxmLmhhbmRsZXIoc2VsZi5xdWV1ZSk7XG4gICAgICBzZWxmLnF1ZXVlID0gJyc7XG4gICAgfSwgMSk7XG4gIH1cblxuICB0aGlzLnF1ZXVlICs9IGRhdGE7XG59O1xuXG5UZXJtaW5hbC5wcm90b3R5cGUuYmVsbCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIXRoaXMudmlzdWFsQmVsbCkgcmV0dXJuO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9ICd3aGl0ZSc7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgc2VsZi5lbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gJyc7XG4gIH0sIDEwKTtcbiAgaWYgKHRoaXMucG9wT25CZWxsKSB0aGlzLmZvY3VzKCk7XG59O1xuXG5UZXJtaW5hbC5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24oKSB7XG4gIGlmICghdGhpcy5kZWJ1ZykgcmV0dXJuO1xuICBpZiAoIXRoaXMuY29udGV4dC5jb25zb2xlIHx8ICF0aGlzLmNvbnRleHQuY29uc29sZS5sb2cpIHJldHVybjtcbiAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICB0aGlzLmNvbnRleHQuY29uc29sZS5sb2cuYXBwbHkodGhpcy5jb250ZXh0LmNvbnNvbGUsIGFyZ3MpO1xufTtcblxuVGVybWluYWwucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24oKSB7XG4gIGlmICghdGhpcy5kZWJ1ZykgcmV0dXJuO1xuICBpZiAoIXRoaXMuY29udGV4dC5jb25zb2xlIHx8ICF0aGlzLmNvbnRleHQuY29uc29sZS5lcnJvcikgcmV0dXJuO1xuICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gIHRoaXMuY29udGV4dC5jb25zb2xlLmVycm9yLmFwcGx5KHRoaXMuY29udGV4dC5jb25zb2xlLCBhcmdzKTtcbn07XG5cblRlcm1pbmFsLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbih4LCB5KSB7XG4gIHZhciBsaW5lXG4gICAgLCBlbFxuICAgICwgaVxuICAgICwgalxuICAgICwgY2g7XG5cbiAgaWYgKHggPCAxKSB4ID0gMTtcbiAgaWYgKHkgPCAxKSB5ID0gMTtcblxuICAvLyByZXNpemUgY29sc1xuICBqID0gdGhpcy5jb2xzO1xuICBpZiAoaiA8IHgpIHtcbiAgICBjaCA9IFt0aGlzLmRlZkF0dHIsICcgJ107IC8vIGRvZXMgeHRlcm0gdXNlIHRoZSBkZWZhdWx0IGF0dHI/XG4gICAgaSA9IHRoaXMubGluZXMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHdoaWxlICh0aGlzLmxpbmVzW2ldLmxlbmd0aCA8IHgpIHtcbiAgICAgICAgdGhpcy5saW5lc1tpXS5wdXNoKGNoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaiA+IHgpIHtcbiAgICBpID0gdGhpcy5saW5lcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgd2hpbGUgKHRoaXMubGluZXNbaV0ubGVuZ3RoID4geCkge1xuICAgICAgICB0aGlzLmxpbmVzW2ldLnBvcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB0aGlzLnNldHVwU3RvcHMoaik7XG4gIHRoaXMuY29scyA9IHg7XG5cbiAgLy8gcmVzaXplIHJvd3NcbiAgaiA9IHRoaXMucm93cztcbiAgaWYgKGogPCB5KSB7XG4gICAgZWwgPSB0aGlzLmVsZW1lbnQ7XG4gICAgd2hpbGUgKGorKyA8IHkpIHtcbiAgICAgIGlmICh0aGlzLmxpbmVzLmxlbmd0aCA8IHkgKyB0aGlzLnliYXNlKSB7XG4gICAgICAgIHRoaXMubGluZXMucHVzaCh0aGlzLmJsYW5rTGluZSgpKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA8IHkpIHtcbiAgICAgICAgbGluZSA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsLmFwcGVuZENoaWxkKGxpbmUpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2gobGluZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGogPiB5KSB7XG4gICAgd2hpbGUgKGotLSA+IHkpIHtcbiAgICAgIGlmICh0aGlzLmxpbmVzLmxlbmd0aCA+IHkgKyB0aGlzLnliYXNlKSB7XG4gICAgICAgIHRoaXMubGluZXMucG9wKCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jaGlsZHJlbi5sZW5ndGggPiB5KSB7XG4gICAgICAgIGVsID0gdGhpcy5jaGlsZHJlbi5wb3AoKTtcbiAgICAgICAgaWYgKCFlbCkgY29udGludWU7XG4gICAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB0aGlzLnJvd3MgPSB5O1xuXG4gIC8vIG1ha2Ugc3VyZSB0aGUgY3Vyc29yIHN0YXlzIG9uIHNjcmVlblxuICBpZiAodGhpcy55ID49IHkpIHRoaXMueSA9IHkgLSAxO1xuICBpZiAodGhpcy54ID49IHgpIHRoaXMueCA9IHggLSAxO1xuXG4gIHRoaXMuc2Nyb2xsVG9wID0gMDtcbiAgdGhpcy5zY3JvbGxCb3R0b20gPSB5IC0gMTtcblxuICB0aGlzLnJlZnJlc2goMCwgdGhpcy5yb3dzIC0gMSk7XG5cbiAgLy8gaXQncyBhIHJlYWwgbmlnaHRtYXJlIHRyeWluZ1xuICAvLyB0byByZXNpemUgdGhlIG9yaWdpbmFsXG4gIC8vIHNjcmVlbiBidWZmZXIuIGp1c3Qgc2V0IGl0XG4gIC8vIHRvIG51bGwgZm9yIG5vdy5cbiAgdGhpcy5ub3JtYWwgPSBudWxsO1xufTtcblxuVGVybWluYWwucHJvdG90eXBlLnVwZGF0ZVJhbmdlID0gZnVuY3Rpb24oeSkge1xuICBpZiAoeSA8IHRoaXMucmVmcmVzaFN0YXJ0KSB0aGlzLnJlZnJlc2hTdGFydCA9IHk7XG4gIGlmICh5ID4gdGhpcy5yZWZyZXNoRW5kKSB0aGlzLnJlZnJlc2hFbmQgPSB5O1xuICAvLyBpZiAoeSA+IHRoaXMucmVmcmVzaEVuZCkge1xuICAvLyAgIHRoaXMucmVmcmVzaEVuZCA9IHk7XG4gIC8vICAgaWYgKHkgPiB0aGlzLnJvd3MgLSAxKSB7XG4gIC8vICAgICB0aGlzLnJlZnJlc2hFbmQgPSB0aGlzLnJvd3MgLSAxO1xuICAvLyAgIH1cbiAgLy8gfVxufTtcblxuVGVybWluYWwucHJvdG90eXBlLm1heFJhbmdlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucmVmcmVzaFN0YXJ0ID0gMDtcbiAgdGhpcy5yZWZyZXNoRW5kID0gdGhpcy5yb3dzIC0gMTtcbn07XG5cblRlcm1pbmFsLnByb3RvdHlwZS5zZXR1cFN0b3BzID0gZnVuY3Rpb24oaSkge1xuICBpZiAoaSAhPSBudWxsKSB7XG4gICAgaWYgKCF0aGlzLnRhYnNbaV0pIHtcbiAgICAgIGkgPSB0aGlzLnByZXZTdG9wKGkpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLnRhYnMgPSB7fTtcbiAgICBpID0gMDtcbiAgfVxuXG4gIGZvciAoOyBpIDwgdGhpcy5jb2xzOyBpICs9IDgpIHtcbiAgICB0aGlzLnRhYnNbaV0gPSB0cnVlO1xuICB9XG59O1xuXG5UZXJtaW5hbC5wcm90b3R5cGUucHJldlN0b3AgPSBmdW5jdGlvbih4KSB7XG4gIGlmICh4ID09IG51bGwpIHggPSB0aGlzLng7XG4gIHdoaWxlICghdGhpcy50YWJzWy0teF0gJiYgeCA+IDApO1xuICByZXR1cm4geCA+PSB0aGlzLmNvbHNcbiAgICA/IHRoaXMuY29scyAtIDFcbiAgICA6IHggPCAwID8gMCA6IHg7XG59O1xuXG5UZXJtaW5hbC5wcm90b3R5cGUubmV4dFN0b3AgPSBmdW5jdGlvbih4KSB7XG4gIGlmICh4ID09IG51bGwpIHggPSB0aGlzLng7XG4gIHdoaWxlICghdGhpcy50YWJzWysreF0gJiYgeCA8IHRoaXMuY29scyk7XG4gIHJldHVybiB4ID49IHRoaXMuY29sc1xuICAgID8gdGhpcy5jb2xzIC0gMVxuICAgIDogeCA8IDAgPyAwIDogeDtcbn07XG5cblRlcm1pbmFsLnByb3RvdHlwZS5lcmFzZVJpZ2h0ID0gZnVuY3Rpb24oeCwgeSkge1xuICB2YXIgbGluZSA9IHRoaXMubGluZXNbdGhpcy55YmFzZSArIHldXG4gICAgLCBjaCA9IFt0aGlzLmVyYXNlQXR0cigpLCAnICddOyAvLyB4dGVybVxuXG5cbiAgZm9yICg7IHggPCB0aGlzLmNvbHM7IHgrKykge1xuICAgIGxpbmVbeF0gPSBjaDtcbiAgfVxuXG4gIHRoaXMudXBkYXRlUmFuZ2UoeSk7XG59O1xuXG5UZXJtaW5hbC5wcm90b3R5cGUuZXJhc2VMZWZ0ID0gZnVuY3Rpb24oeCwgeSkge1xuICB2YXIgbGluZSA9IHRoaXMubGluZXNbdGhpcy55YmFzZSArIHldXG4gICAgLCBjaCA9IFt0aGlzLmVyYXNlQXR0cigpLCAnICddOyAvLyB4dGVybVxuXG4gIHgrKztcbiAgd2hpbGUgKHgtLSkgbGluZVt4XSA9IGNoO1xuXG4gIHRoaXMudXBkYXRlUmFuZ2UoeSk7XG59O1xuXG5UZXJtaW5hbC5wcm90b3R5cGUuZXJhc2VMaW5lID0gZnVuY3Rpb24oeSkge1xuICB0aGlzLmVyYXNlUmlnaHQoMCwgeSk7XG59O1xuXG5UZXJtaW5hbC5wcm90b3R5cGUuYmxhbmtMaW5lID0gZnVuY3Rpb24oY3VyKSB7XG4gIHZhciBhdHRyID0gY3VyXG4gICAgPyB0aGlzLmVyYXNlQXR0cigpXG4gICAgOiB0aGlzLmRlZkF0dHI7XG5cbiAgdmFyIGNoID0gW2F0dHIsICcgJ11cbiAgICAsIGxpbmUgPSBbXVxuICAgICwgaSA9IDA7XG5cbiAgZm9yICg7IGkgPCB0aGlzLmNvbHM7IGkrKykge1xuICAgIGxpbmVbaV0gPSBjaDtcbiAgfVxuXG4gIHJldHVybiBsaW5lO1xufTtcblxuVGVybWluYWwucHJvdG90eXBlLmNoID0gZnVuY3Rpb24oY3VyKSB7XG4gIHJldHVybiBjdXJcbiAgICA/IFt0aGlzLmVyYXNlQXR0cigpLCAnICddXG4gICAgOiBbdGhpcy5kZWZBdHRyLCAnICddO1xufTtcblxuVGVybWluYWwucHJvdG90eXBlLmlzID0gZnVuY3Rpb24odGVybSkge1xuICB2YXIgbmFtZSA9IHRoaXMudGVybU5hbWU7XG4gIHJldHVybiAobmFtZSArICcnKS5pbmRleE9mKHRlcm0pID09PSAwO1xufTtcblxuVGVybWluYWwucHJvdG90eXBlLmhhbmRsZXIgPSBmdW5jdGlvbihkYXRhKSB7XG4gIHRoaXMuZW1pdCgnZGF0YScsIGRhdGEpO1xufTtcblxuVGVybWluYWwucHJvdG90eXBlLmhhbmRsZVRpdGxlID0gZnVuY3Rpb24odGl0bGUpIHtcbiAgdGhpcy5lbWl0KCd0aXRsZScsIHRpdGxlKTtcbn07XG5cbi8qKlxuICogRVNDXG4gKi9cblxuLy8gRVNDIEQgSW5kZXggKElORCBpcyAweDg0KS5cblRlcm1pbmFsLnByb3RvdHlwZS5pbmRleCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnkrKztcbiAgaWYgKHRoaXMueSA+IHRoaXMuc2Nyb2xsQm90dG9tKSB7XG4gICAgdGhpcy55LS07XG4gICAgdGhpcy5zY3JvbGwoKTtcbiAgfVxuICB0aGlzLnN0YXRlID0gbm9ybWFsO1xufTtcblxuLy8gRVNDIE0gUmV2ZXJzZSBJbmRleCAoUkkgaXMgMHg4ZCkuXG5UZXJtaW5hbC5wcm90b3R5cGUucmV2ZXJzZUluZGV4ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBqO1xuICB0aGlzLnktLTtcbiAgaWYgKHRoaXMueSA8IHRoaXMuc2Nyb2xsVG9wKSB7XG4gICAgdGhpcy55Kys7XG4gICAgLy8gcG9zc2libHkgbW92ZSB0aGUgY29kZSBiZWxvdyB0byB0ZXJtLnJldmVyc2VTY3JvbGwoKTtcbiAgICAvLyB0ZXN0OiBlY2hvIC1uZSAnXFxlWzE7MUhcXGVbNDRtXFxlTVxcZVswbSdcbiAgICAvLyBibGFua0xpbmUodHJ1ZSkgaXMgeHRlcm0vbGludXggYmVoYXZpb3JcbiAgICB0aGlzLmxpbmVzLnNwbGljZSh0aGlzLnkgKyB0aGlzLnliYXNlLCAwLCB0aGlzLmJsYW5rTGluZSh0cnVlKSk7XG4gICAgaiA9IHRoaXMucm93cyAtIDEgLSB0aGlzLnNjcm9sbEJvdHRvbTtcbiAgICB0aGlzLmxpbmVzLnNwbGljZSh0aGlzLnJvd3MgLSAxICsgdGhpcy55YmFzZSAtIGogKyAxLCAxKTtcbiAgICAvLyB0aGlzLm1heFJhbmdlKCk7XG4gICAgdGhpcy51cGRhdGVSYW5nZSh0aGlzLnNjcm9sbFRvcCk7XG4gICAgdGhpcy51cGRhdGVSYW5nZSh0aGlzLnNjcm9sbEJvdHRvbSk7XG4gIH1cbiAgdGhpcy5zdGF0ZSA9IG5vcm1hbDtcbn07XG5cbi8vIEVTQyBjIEZ1bGwgUmVzZXQgKFJJUykuXG5UZXJtaW5hbC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5vcHRpb25zLnJvd3MgPSB0aGlzLnJvd3M7XG4gIHRoaXMub3B0aW9ucy5jb2xzID0gdGhpcy5jb2xzO1xuICBUZXJtaW5hbC5jYWxsKHRoaXMsIHRoaXMub3B0aW9ucyk7XG4gIHRoaXMucmVmcmVzaCgwLCB0aGlzLnJvd3MgLSAxKTtcbn07XG5cbi8vIEVTQyBIIFRhYiBTZXQgKEhUUyBpcyAweDg4KS5cblRlcm1pbmFsLnByb3RvdHlwZS50YWJTZXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy50YWJzW3RoaXMueF0gPSB0cnVlO1xuICB0aGlzLnN0YXRlID0gbm9ybWFsO1xufTtcblxuLyoqXG4gKiBDU0lcbiAqL1xuXG4vLyBDU0kgUHMgQVxuLy8gQ3Vyc29yIFVwIFBzIFRpbWVzIChkZWZhdWx0ID0gMSkgKENVVSkuXG5UZXJtaW5hbC5wcm90b3R5cGUuY3Vyc29yVXAgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgdmFyIHBhcmFtID0gcGFyYW1zWzBdO1xuICBpZiAocGFyYW0gPCAxKSBwYXJhbSA9IDE7XG4gIHRoaXMueSAtPSBwYXJhbTtcbiAgaWYgKHRoaXMueSA8IDApIHRoaXMueSA9IDA7XG59O1xuXG4vLyBDU0kgUHMgQlxuLy8gQ3Vyc29yIERvd24gUHMgVGltZXMgKGRlZmF1bHQgPSAxKSAoQ1VEKS5cblRlcm1pbmFsLnByb3RvdHlwZS5jdXJzb3JEb3duID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gIHZhciBwYXJhbSA9IHBhcmFtc1swXTtcbiAgaWYgKHBhcmFtIDwgMSkgcGFyYW0gPSAxO1xuICB0aGlzLnkgKz0gcGFyYW07XG4gIGlmICh0aGlzLnkgPj0gdGhpcy5yb3dzKSB7XG4gICAgdGhpcy55ID0gdGhpcy5yb3dzIC0gMTtcbiAgfVxufTtcblxuLy8gQ1NJIFBzIENcbi8vIEN1cnNvciBGb3J3YXJkIFBzIFRpbWVzIChkZWZhdWx0ID0gMSkgKENVRikuXG5UZXJtaW5hbC5wcm90b3R5cGUuY3Vyc29yRm9yd2FyZCA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICB2YXIgcGFyYW0gPSBwYXJhbXNbMF07XG4gIGlmIChwYXJhbSA8IDEpIHBhcmFtID0gMTtcbiAgdGhpcy54ICs9IHBhcmFtO1xuICBpZiAodGhpcy54ID49IHRoaXMuY29scykge1xuICAgIHRoaXMueCA9IHRoaXMuY29scyAtIDE7XG4gIH1cbn07XG5cbi8vIENTSSBQcyBEXG4vLyBDdXJzb3IgQmFja3dhcmQgUHMgVGltZXMgKGRlZmF1bHQgPSAxKSAoQ1VCKS5cblRlcm1pbmFsLnByb3RvdHlwZS5jdXJzb3JCYWNrd2FyZCA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICB2YXIgcGFyYW0gPSBwYXJhbXNbMF07XG4gIGlmIChwYXJhbSA8IDEpIHBhcmFtID0gMTtcbiAgdGhpcy54IC09IHBhcmFtO1xuICBpZiAodGhpcy54IDwgMCkgdGhpcy54ID0gMDtcbn07XG5cbi8vIENTSSBQcyA7IFBzIEhcbi8vIEN1cnNvciBQb3NpdGlvbiBbcm93O2NvbHVtbl0gKGRlZmF1bHQgPSBbMSwxXSkgKENVUCkuXG5UZXJtaW5hbC5wcm90b3R5cGUuY3Vyc29yUG9zID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gIHZhciByb3csIGNvbDtcblxuICByb3cgPSBwYXJhbXNbMF0gLSAxO1xuXG4gIGlmIChwYXJhbXMubGVuZ3RoID49IDIpIHtcbiAgICBjb2wgPSBwYXJhbXNbMV0gLSAxO1xuICB9IGVsc2Uge1xuICAgIGNvbCA9IDA7XG4gIH1cblxuICBpZiAocm93IDwgMCkge1xuICAgIHJvdyA9IDA7XG4gIH0gZWxzZSBpZiAocm93ID49IHRoaXMucm93cykge1xuICAgIHJvdyA9IHRoaXMucm93cyAtIDE7XG4gIH1cblxuICBpZiAoY29sIDwgMCkge1xuICAgIGNvbCA9IDA7XG4gIH0gZWxzZSBpZiAoY29sID49IHRoaXMuY29scykge1xuICAgIGNvbCA9IHRoaXMuY29scyAtIDE7XG4gIH1cblxuICB0aGlzLnggPSBjb2w7XG4gIHRoaXMueSA9IHJvdztcbn07XG5cbi8vIENTSSBQcyBKICBFcmFzZSBpbiBEaXNwbGF5IChFRCkuXG4vLyAgICAgUHMgPSAwICAtPiBFcmFzZSBCZWxvdyAoZGVmYXVsdCkuXG4vLyAgICAgUHMgPSAxICAtPiBFcmFzZSBBYm92ZS5cbi8vICAgICBQcyA9IDIgIC0+IEVyYXNlIEFsbC5cbi8vICAgICBQcyA9IDMgIC0+IEVyYXNlIFNhdmVkIExpbmVzICh4dGVybSkuXG4vLyBDU0kgPyBQcyBKXG4vLyAgIEVyYXNlIGluIERpc3BsYXkgKERFQ1NFRCkuXG4vLyAgICAgUHMgPSAwICAtPiBTZWxlY3RpdmUgRXJhc2UgQmVsb3cgKGRlZmF1bHQpLlxuLy8gICAgIFBzID0gMSAgLT4gU2VsZWN0aXZlIEVyYXNlIEFib3ZlLlxuLy8gICAgIFBzID0gMiAgLT4gU2VsZWN0aXZlIEVyYXNlIEFsbC5cblRlcm1pbmFsLnByb3RvdHlwZS5lcmFzZUluRGlzcGxheSA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICB2YXIgajtcbiAgc3dpdGNoIChwYXJhbXNbMF0pIHtcbiAgICBjYXNlIDA6XG4gICAgICB0aGlzLmVyYXNlUmlnaHQodGhpcy54LCB0aGlzLnkpO1xuICAgICAgaiA9IHRoaXMueSArIDE7XG4gICAgICBmb3IgKDsgaiA8IHRoaXMucm93czsgaisrKSB7XG4gICAgICAgIHRoaXMuZXJhc2VMaW5lKGopO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAxOlxuICAgICAgdGhpcy5lcmFzZUxlZnQodGhpcy54LCB0aGlzLnkpO1xuICAgICAgaiA9IHRoaXMueTtcbiAgICAgIHdoaWxlIChqLS0pIHtcbiAgICAgICAgdGhpcy5lcmFzZUxpbmUoaik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICBqID0gdGhpcy5yb3dzO1xuICAgICAgd2hpbGUgKGotLSkgdGhpcy5lcmFzZUxpbmUoaik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICA7IC8vIG5vIHNhdmVkIGxpbmVzXG4gICAgICBicmVhaztcbiAgfVxufTtcblxuLy8gQ1NJIFBzIEsgIEVyYXNlIGluIExpbmUgKEVMKS5cbi8vICAgICBQcyA9IDAgIC0+IEVyYXNlIHRvIFJpZ2h0IChkZWZhdWx0KS5cbi8vICAgICBQcyA9IDEgIC0+IEVyYXNlIHRvIExlZnQuXG4vLyAgICAgUHMgPSAyICAtPiBFcmFzZSBBbGwuXG4vLyBDU0kgPyBQcyBLXG4vLyAgIEVyYXNlIGluIExpbmUgKERFQ1NFTCkuXG4vLyAgICAgUHMgPSAwICAtPiBTZWxlY3RpdmUgRXJhc2UgdG8gUmlnaHQgKGRlZmF1bHQpLlxuLy8gICAgIFBzID0gMSAgLT4gU2VsZWN0aXZlIEVyYXNlIHRvIExlZnQuXG4vLyAgICAgUHMgPSAyICAtPiBTZWxlY3RpdmUgRXJhc2UgQWxsLlxuVGVybWluYWwucHJvdG90eXBlLmVyYXNlSW5MaW5lID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gIHN3aXRjaCAocGFyYW1zWzBdKSB7XG4gICAgY2FzZSAwOlxuICAgICAgdGhpcy5lcmFzZVJpZ2h0KHRoaXMueCwgdGhpcy55KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTpcbiAgICAgIHRoaXMuZXJhc2VMZWZ0KHRoaXMueCwgdGhpcy55KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHRoaXMuZXJhc2VMaW5lKHRoaXMueSk7XG4gICAgICBicmVhaztcbiAgfVxufTtcblxuLy8gQ1NJIFBtIG0gIENoYXJhY3RlciBBdHRyaWJ1dGVzIChTR1IpLlxuLy8gICAgIFBzID0gMCAgLT4gTm9ybWFsIChkZWZhdWx0KS5cbi8vICAgICBQcyA9IDEgIC0+IEJvbGQuXG4vLyAgICAgUHMgPSA0ICAtPiBVbmRlcmxpbmVkLlxuLy8gICAgIFBzID0gNSAgLT4gQmxpbmsgKGFwcGVhcnMgYXMgQm9sZCkuXG4vLyAgICAgUHMgPSA3ICAtPiBJbnZlcnNlLlxuLy8gICAgIFBzID0gOCAgLT4gSW52aXNpYmxlLCBpLmUuLCBoaWRkZW4gKFZUMzAwKS5cbi8vICAgICBQcyA9IDIgMiAgLT4gTm9ybWFsIChuZWl0aGVyIGJvbGQgbm9yIGZhaW50KS5cbi8vICAgICBQcyA9IDIgNCAgLT4gTm90IHVuZGVybGluZWQuXG4vLyAgICAgUHMgPSAyIDUgIC0+IFN0ZWFkeSAobm90IGJsaW5raW5nKS5cbi8vICAgICBQcyA9IDIgNyAgLT4gUG9zaXRpdmUgKG5vdCBpbnZlcnNlKS5cbi8vICAgICBQcyA9IDIgOCAgLT4gVmlzaWJsZSwgaS5lLiwgbm90IGhpZGRlbiAoVlQzMDApLlxuLy8gICAgIFBzID0gMyAwICAtPiBTZXQgZm9yZWdyb3VuZCBjb2xvciB0byBCbGFjay5cbi8vICAgICBQcyA9IDMgMSAgLT4gU2V0IGZvcmVncm91bmQgY29sb3IgdG8gUmVkLlxuLy8gICAgIFBzID0gMyAyICAtPiBTZXQgZm9yZWdyb3VuZCBjb2xvciB0byBHcmVlbi5cbi8vICAgICBQcyA9IDMgMyAgLT4gU2V0IGZvcmVncm91bmQgY29sb3IgdG8gWWVsbG93LlxuLy8gICAgIFBzID0gMyA0ICAtPiBTZXQgZm9yZWdyb3VuZCBjb2xvciB0byBCbHVlLlxuLy8gICAgIFBzID0gMyA1ICAtPiBTZXQgZm9yZWdyb3VuZCBjb2xvciB0byBNYWdlbnRhLlxuLy8gICAgIFBzID0gMyA2ICAtPiBTZXQgZm9yZWdyb3VuZCBjb2xvciB0byBDeWFuLlxuLy8gICAgIFBzID0gMyA3ICAtPiBTZXQgZm9yZWdyb3VuZCBjb2xvciB0byBXaGl0ZS5cbi8vICAgICBQcyA9IDMgOSAgLT4gU2V0IGZvcmVncm91bmQgY29sb3IgdG8gZGVmYXVsdCAob3JpZ2luYWwpLlxuLy8gICAgIFBzID0gNCAwICAtPiBTZXQgYmFja2dyb3VuZCBjb2xvciB0byBCbGFjay5cbi8vICAgICBQcyA9IDQgMSAgLT4gU2V0IGJhY2tncm91bmQgY29sb3IgdG8gUmVkLlxuLy8gICAgIFBzID0gNCAyICAtPiBTZXQgYmFja2dyb3VuZCBjb2xvciB0byBHcmVlbi5cbi8vICAgICBQcyA9IDQgMyAgLT4gU2V0IGJhY2tncm91bmQgY29sb3IgdG8gWWVsbG93LlxuLy8gICAgIFBzID0gNCA0ICAtPiBTZXQgYmFja2dyb3VuZCBjb2xvciB0byBCbHVlLlxuLy8gICAgIFBzID0gNCA1ICAtPiBTZXQgYmFja2dyb3VuZCBjb2xvciB0byBNYWdlbnRhLlxuLy8gICAgIFBzID0gNCA2ICAtPiBTZXQgYmFja2dyb3VuZCBjb2xvciB0byBDeWFuLlxuLy8gICAgIFBzID0gNCA3ICAtPiBTZXQgYmFja2dyb3VuZCBjb2xvciB0byBXaGl0ZS5cbi8vICAgICBQcyA9IDQgOSAgLT4gU2V0IGJhY2tncm91bmQgY29sb3IgdG8gZGVmYXVsdCAob3JpZ2luYWwpLlxuXG4vLyAgIElmIDE2LWNvbG9yIHN1cHBvcnQgaXMgY29tcGlsZWQsIHRoZSBmb2xsb3dpbmcgYXBwbHkuICBBc3N1bWVcbi8vICAgdGhhdCB4dGVybSdzIHJlc291cmNlcyBhcmUgc2V0IHNvIHRoYXQgdGhlIElTTyBjb2xvciBjb2RlcyBhcmVcbi8vICAgdGhlIGZpcnN0IDggb2YgYSBzZXQgb2YgMTYuICBUaGVuIHRoZSBhaXh0ZXJtIGNvbG9ycyBhcmUgdGhlXG4vLyAgIGJyaWdodCB2ZXJzaW9ucyBvZiB0aGUgSVNPIGNvbG9yczpcbi8vICAgICBQcyA9IDkgMCAgLT4gU2V0IGZvcmVncm91bmQgY29sb3IgdG8gQmxhY2suXG4vLyAgICAgUHMgPSA5IDEgIC0+IFNldCBmb3JlZ3JvdW5kIGNvbG9yIHRvIFJlZC5cbi8vICAgICBQcyA9IDkgMiAgLT4gU2V0IGZvcmVncm91bmQgY29sb3IgdG8gR3JlZW4uXG4vLyAgICAgUHMgPSA5IDMgIC0+IFNldCBmb3JlZ3JvdW5kIGNvbG9yIHRvIFllbGxvdy5cbi8vICAgICBQcyA9IDkgNCAgLT4gU2V0IGZvcmVncm91bmQgY29sb3IgdG8gQmx1ZS5cbi8vICAgICBQcyA9IDkgNSAgLT4gU2V0IGZvcmVncm91bmQgY29sb3IgdG8gTWFnZW50YS5cbi8vICAgICBQcyA9IDkgNiAgLT4gU2V0IGZvcmVncm91bmQgY29sb3IgdG8gQ3lhbi5cbi8vICAgICBQcyA9IDkgNyAgLT4gU2V0IGZvcmVncm91bmQgY29sb3IgdG8gV2hpdGUuXG4vLyAgICAgUHMgPSAxIDAgMCAgLT4gU2V0IGJhY2tncm91bmQgY29sb3IgdG8gQmxhY2suXG4vLyAgICAgUHMgPSAxIDAgMSAgLT4gU2V0IGJhY2tncm91bmQgY29sb3IgdG8gUmVkLlxuLy8gICAgIFBzID0gMSAwIDIgIC0+IFNldCBiYWNrZ3JvdW5kIGNvbG9yIHRvIEdyZWVuLlxuLy8gICAgIFBzID0gMSAwIDMgIC0+IFNldCBiYWNrZ3JvdW5kIGNvbG9yIHRvIFllbGxvdy5cbi8vICAgICBQcyA9IDEgMCA0ICAtPiBTZXQgYmFja2dyb3VuZCBjb2xvciB0byBCbHVlLlxuLy8gICAgIFBzID0gMSAwIDUgIC0+IFNldCBiYWNrZ3JvdW5kIGNvbG9yIHRvIE1hZ2VudGEuXG4vLyAgICAgUHMgPSAxIDAgNiAgLT4gU2V0IGJhY2tncm91bmQgY29sb3IgdG8gQ3lhbi5cbi8vICAgICBQcyA9IDEgMCA3ICAtPiBTZXQgYmFja2dyb3VuZCBjb2xvciB0byBXaGl0ZS5cblxuLy8gICBJZiB4dGVybSBpcyBjb21waWxlZCB3aXRoIHRoZSAxNi1jb2xvciBzdXBwb3J0IGRpc2FibGVkLCBpdFxuLy8gICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nLCBmcm9tIHJ4dnQ6XG4vLyAgICAgUHMgPSAxIDAgMCAgLT4gU2V0IGZvcmVncm91bmQgYW5kIGJhY2tncm91bmQgY29sb3IgdG9cbi8vICAgICBkZWZhdWx0LlxuXG4vLyAgIElmIDg4LSBvciAyNTYtY29sb3Igc3VwcG9ydCBpcyBjb21waWxlZCwgdGhlIGZvbGxvd2luZyBhcHBseS5cbi8vICAgICBQcyA9IDMgOCAgOyA1ICA7IFBzIC0+IFNldCBmb3JlZ3JvdW5kIGNvbG9yIHRvIHRoZSBzZWNvbmRcbi8vICAgICBQcy5cbi8vICAgICBQcyA9IDQgOCAgOyA1ICA7IFBzIC0+IFNldCBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSBzZWNvbmRcbi8vICAgICBQcy5cblRlcm1pbmFsLnByb3RvdHlwZS5jaGFyQXR0cmlidXRlcyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICAvLyBPcHRpbWl6ZSBhIHNpbmdsZSBTR1IwLlxuICBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMSAmJiBwYXJhbXNbMF0gPT09IDApIHtcbiAgICB0aGlzLmN1ckF0dHIgPSB0aGlzLmRlZkF0dHI7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGwgPSBwYXJhbXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgZmxhZ3MgPSB0aGlzLmN1ckF0dHIgPj4gMThcbiAgICAsIGZnID0gKHRoaXMuY3VyQXR0ciA+PiA5KSAmIDB4MWZmXG4gICAgLCBiZyA9IHRoaXMuY3VyQXR0ciAmIDB4MWZmXG4gICAgLCBwO1xuXG4gIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgcCA9IHBhcmFtc1tpXTtcbiAgICBpZiAocCA+PSAzMCAmJiBwIDw9IDM3KSB7XG4gICAgICAvLyBmZyBjb2xvciA4XG4gICAgICBmZyA9IHAgLSAzMDtcbiAgICB9IGVsc2UgaWYgKHAgPj0gNDAgJiYgcCA8PSA0Nykge1xuICAgICAgLy8gYmcgY29sb3IgOFxuICAgICAgYmcgPSBwIC0gNDA7XG4gICAgfSBlbHNlIGlmIChwID49IDkwICYmIHAgPD0gOTcpIHtcbiAgICAgIC8vIGZnIGNvbG9yIDE2XG4gICAgICBwICs9IDg7XG4gICAgICBmZyA9IHAgLSA5MDtcbiAgICB9IGVsc2UgaWYgKHAgPj0gMTAwICYmIHAgPD0gMTA3KSB7XG4gICAgICAvLyBiZyBjb2xvciAxNlxuICAgICAgcCArPSA4O1xuICAgICAgYmcgPSBwIC0gMTAwO1xuICAgIH0gZWxzZSBpZiAocCA9PT0gMCkge1xuICAgICAgLy8gZGVmYXVsdFxuICAgICAgZmxhZ3MgPSB0aGlzLmRlZkF0dHIgPj4gMTg7XG4gICAgICBmZyA9ICh0aGlzLmRlZkF0dHIgPj4gOSkgJiAweDFmZjtcbiAgICAgIGJnID0gdGhpcy5kZWZBdHRyICYgMHgxZmY7XG4gICAgICAvLyBmbGFncyA9IDA7XG4gICAgICAvLyBmZyA9IDB4MWZmO1xuICAgICAgLy8gYmcgPSAweDFmZjtcbiAgICB9IGVsc2UgaWYgKHAgPT09IDEpIHtcbiAgICAgIC8vIGJvbGQgdGV4dFxuICAgICAgZmxhZ3MgfD0gMTtcbiAgICB9IGVsc2UgaWYgKHAgPT09IDQpIHtcbiAgICAgIC8vIHVuZGVybGluZWQgdGV4dFxuICAgICAgZmxhZ3MgfD0gMjtcbiAgICB9IGVsc2UgaWYgKHAgPT09IDUpIHtcbiAgICAgIC8vIGJsaW5rXG4gICAgICBmbGFncyB8PSA0O1xuICAgIH0gZWxzZSBpZiAocCA9PT0gNykge1xuICAgICAgLy8gaW52ZXJzZSBhbmQgcG9zaXRpdmVcbiAgICAgIC8vIHRlc3Qgd2l0aDogZWNobyAtZSAnXFxlWzMxbVxcZVs0Mm1oZWxsb1xcZVs3bXdvcmxkXFxlWzI3bWhpXFxlW20nXG4gICAgICBmbGFncyB8PSA4O1xuICAgIH0gZWxzZSBpZiAocCA9PT0gOCkge1xuICAgICAgLy8gaW52aXNpYmxlXG4gICAgICBmbGFncyB8PSAxNjtcbiAgICB9IGVsc2UgaWYgKHAgPT09IDIyKSB7XG4gICAgICAvLyBub3QgYm9sZFxuICAgICAgZmxhZ3MgJj0gfjE7XG4gICAgfSBlbHNlIGlmIChwID09PSAyNCkge1xuICAgICAgLy8gbm90IHVuZGVybGluZWRcbiAgICAgIGZsYWdzICY9IH4yO1xuICAgIH0gZWxzZSBpZiAocCA9PT0gMjUpIHtcbiAgICAgIC8vIG5vdCBibGlua1xuICAgICAgZmxhZ3MgJj0gfjQ7XG4gICAgfSBlbHNlIGlmIChwID09PSAyNykge1xuICAgICAgLy8gbm90IGludmVyc2VcbiAgICAgIGZsYWdzICY9IH44O1xuICAgIH0gZWxzZSBpZiAocCA9PT0gMjgpIHtcbiAgICAgIC8vIG5vdCBpbnZpc2libGVcbiAgICAgIGZsYWdzICY9IH4xNjtcbiAgICB9IGVsc2UgaWYgKHAgPT09IDM5KSB7XG4gICAgICAvLyByZXNldCBmZ1xuICAgICAgZmcgPSAodGhpcy5kZWZBdHRyID4+IDkpICYgMHgxZmY7XG4gICAgfSBlbHNlIGlmIChwID09PSA0OSkge1xuICAgICAgLy8gcmVzZXQgYmdcbiAgICAgIGJnID0gdGhpcy5kZWZBdHRyICYgMHgxZmY7XG4gICAgfSBlbHNlIGlmIChwID09PSAzOCkge1xuICAgICAgLy8gZmcgY29sb3IgMjU2XG4gICAgICBpZiAocGFyYW1zW2kgKyAxXSA9PT0gMikge1xuICAgICAgICBpICs9IDI7XG4gICAgICAgIGZnID0gbWF0Y2hDb2xvcihcbiAgICAgICAgICBwYXJhbXNbaV0gJiAweGZmLFxuICAgICAgICAgIHBhcmFtc1tpICsgMV0gJiAweGZmLFxuICAgICAgICAgIHBhcmFtc1tpICsgMl0gJiAweGZmKTtcbiAgICAgICAgaWYgKGZnID09PSAtMSkgZmcgPSAweDFmZjtcbiAgICAgICAgaSArPSAyO1xuICAgICAgfSBlbHNlIGlmIChwYXJhbXNbaSArIDFdID09PSA1KSB7XG4gICAgICAgIGkgKz0gMjtcbiAgICAgICAgcCA9IHBhcmFtc1tpXSAmIDB4ZmY7XG4gICAgICAgIGZnID0gcDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHAgPT09IDQ4KSB7XG4gICAgICAvLyBiZyBjb2xvciAyNTZcbiAgICAgIGlmIChwYXJhbXNbaSArIDFdID09PSAyKSB7XG4gICAgICAgIGkgKz0gMjtcbiAgICAgICAgYmcgPSBtYXRjaENvbG9yKFxuICAgICAgICAgIHBhcmFtc1tpXSAmIDB4ZmYsXG4gICAgICAgICAgcGFyYW1zW2kgKyAxXSAmIDB4ZmYsXG4gICAgICAgICAgcGFyYW1zW2kgKyAyXSAmIDB4ZmYpO1xuICAgICAgICBpZiAoYmcgPT09IC0xKSBiZyA9IDB4MWZmO1xuICAgICAgICBpICs9IDI7XG4gICAgICB9IGVsc2UgaWYgKHBhcmFtc1tpICsgMV0gPT09IDUpIHtcbiAgICAgICAgaSArPSAyO1xuICAgICAgICBwID0gcGFyYW1zW2ldICYgMHhmZjtcbiAgICAgICAgYmcgPSBwO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocCA9PT0gMTAwKSB7XG4gICAgICAvLyByZXNldCBmZy9iZ1xuICAgICAgZmcgPSAodGhpcy5kZWZBdHRyID4+IDkpICYgMHgxZmY7XG4gICAgICBiZyA9IHRoaXMuZGVmQXR0ciAmIDB4MWZmO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVycm9yKCdVbmtub3duIFNHUiBhdHRyaWJ1dGU6ICVkLicsIHApO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMuY3VyQXR0ciA9IChmbGFncyA8PCAxOCkgfCAoZmcgPDwgOSkgfCBiZztcbn07XG5cbi8vIENTSSBQcyBuICBEZXZpY2UgU3RhdHVzIFJlcG9ydCAoRFNSKS5cbi8vICAgICBQcyA9IDUgIC0+IFN0YXR1cyBSZXBvcnQuICBSZXN1bHQgKGBgT0snJykgaXNcbi8vICAgQ1NJIDAgblxuLy8gICAgIFBzID0gNiAgLT4gUmVwb3J0IEN1cnNvciBQb3NpdGlvbiAoQ1BSKSBbcm93O2NvbHVtbl0uXG4vLyAgIFJlc3VsdCBpc1xuLy8gICBDU0kgciA7IGMgUlxuLy8gQ1NJID8gUHMgblxuLy8gICBEZXZpY2UgU3RhdHVzIFJlcG9ydCAoRFNSLCBERUMtc3BlY2lmaWMpLlxuLy8gICAgIFBzID0gNiAgLT4gUmVwb3J0IEN1cnNvciBQb3NpdGlvbiAoQ1BSKSBbcm93O2NvbHVtbl0gYXMgQ1NJXG4vLyAgICAgPyByIDsgYyBSIChhc3N1bWVzIHBhZ2UgaXMgemVybykuXG4vLyAgICAgUHMgPSAxIDUgIC0+IFJlcG9ydCBQcmludGVyIHN0YXR1cyBhcyBDU0kgPyAxIDAgIG4gIChyZWFkeSkuXG4vLyAgICAgb3IgQ1NJID8gMSAxICBuICAobm90IHJlYWR5KS5cbi8vICAgICBQcyA9IDIgNSAgLT4gUmVwb3J0IFVESyBzdGF0dXMgYXMgQ1NJID8gMiAwICBuICAodW5sb2NrZWQpXG4vLyAgICAgb3IgQ1NJID8gMiAxICBuICAobG9ja2VkKS5cbi8vICAgICBQcyA9IDIgNiAgLT4gUmVwb3J0IEtleWJvYXJkIHN0YXR1cyBhc1xuLy8gICBDU0kgPyAyIDcgIDsgIDEgIDsgIDAgIDsgIDAgIG4gIChOb3J0aCBBbWVyaWNhbikuXG4vLyAgIFRoZSBsYXN0IHR3byBwYXJhbWV0ZXJzIGFwcGx5IHRvIFZUNDAwICYgdXAsIGFuZCBkZW5vdGUga2V5LVxuLy8gICBib2FyZCByZWFkeSBhbmQgTEswMSByZXNwZWN0aXZlbHkuXG4vLyAgICAgUHMgPSA1IDMgIC0+IFJlcG9ydCBMb2NhdG9yIHN0YXR1cyBhc1xuLy8gICBDU0kgPyA1IDMgIG4gIExvY2F0b3IgYXZhaWxhYmxlLCBpZiBjb21waWxlZC1pbiwgb3Jcbi8vICAgQ1NJID8gNSAwICBuICBObyBMb2NhdG9yLCBpZiBub3QuXG5UZXJtaW5hbC5wcm90b3R5cGUuZGV2aWNlU3RhdHVzID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gIGlmICghdGhpcy5wcmVmaXgpIHtcbiAgICBzd2l0Y2ggKHBhcmFtc1swXSkge1xuICAgICAgY2FzZSA1OlxuICAgICAgICAvLyBzdGF0dXMgcmVwb3J0XG4gICAgICAgIHRoaXMuc2VuZCgnXFx4MWJbMG4nKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIC8vIGN1cnNvciBwb3NpdGlvblxuICAgICAgICB0aGlzLnNlbmQoJ1xceDFiWydcbiAgICAgICAgICArICh0aGlzLnkgKyAxKVxuICAgICAgICAgICsgJzsnXG4gICAgICAgICAgKyAodGhpcy54ICsgMSlcbiAgICAgICAgICArICdSJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0aGlzLnByZWZpeCA9PT0gJz8nKSB7XG4gICAgLy8gbW9kZXJuIHh0ZXJtIGRvZXNudCBzZWVtIHRvXG4gICAgLy8gcmVzcG9uZCB0byBhbnkgb2YgdGhlc2UgZXhjZXB0ID82LCA2LCBhbmQgNVxuICAgIHN3aXRjaCAocGFyYW1zWzBdKSB7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIC8vIGN1cnNvciBwb3NpdGlvblxuICAgICAgICB0aGlzLnNlbmQoJ1xceDFiWz8nXG4gICAgICAgICAgKyAodGhpcy55ICsgMSlcbiAgICAgICAgICArICc7J1xuICAgICAgICAgICsgKHRoaXMueCArIDEpXG4gICAgICAgICAgKyAnUicpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTU6XG4gICAgICAgIC8vIG5vIHByaW50ZXJcbiAgICAgICAgLy8gdGhpcy5zZW5kKCdcXHgxYls/MTFuJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyNTpcbiAgICAgICAgLy8gZG9udCBzdXBwb3J0IHVzZXIgZGVmaW5lZCBrZXlzXG4gICAgICAgIC8vIHRoaXMuc2VuZCgnXFx4MWJbPzIxbicpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjY6XG4gICAgICAgIC8vIG5vcnRoIGFtZXJpY2FuIGtleWJvYXJkXG4gICAgICAgIC8vIHRoaXMuc2VuZCgnXFx4MWJbPzI3OzE7MDswbicpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTM6XG4gICAgICAgIC8vIG5vIGRlYyBsb2NhdG9yL21vdXNlXG4gICAgICAgIC8vIHRoaXMuc2VuZCgnXFx4MWJbPzUwbicpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQWRkaXRpb25zXG4gKi9cblxuLy8gQ1NJIFBzIEBcbi8vIEluc2VydCBQcyAoQmxhbmspIENoYXJhY3RlcihzKSAoZGVmYXVsdCA9IDEpIChJQ0gpLlxuVGVybWluYWwucHJvdG90eXBlLmluc2VydENoYXJzID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gIHZhciBwYXJhbSwgcm93LCBqLCBjaDtcblxuICBwYXJhbSA9IHBhcmFtc1swXTtcbiAgaWYgKHBhcmFtIDwgMSkgcGFyYW0gPSAxO1xuXG4gIHJvdyA9IHRoaXMueSArIHRoaXMueWJhc2U7XG4gIGogPSB0aGlzLng7XG4gIGNoID0gW3RoaXMuZXJhc2VBdHRyKCksICcgJ107IC8vIHh0ZXJtXG5cbiAgd2hpbGUgKHBhcmFtLS0gJiYgaiA8IHRoaXMuY29scykge1xuICAgIHRoaXMubGluZXNbcm93XS5zcGxpY2UoaisrLCAwLCBjaCk7XG4gICAgdGhpcy5saW5lc1tyb3ddLnBvcCgpO1xuICB9XG59O1xuXG4vLyBDU0kgUHMgRVxuLy8gQ3Vyc29yIE5leHQgTGluZSBQcyBUaW1lcyAoZGVmYXVsdCA9IDEpIChDTkwpLlxuLy8gc2FtZSBhcyBDU0kgUHMgQiA/XG5UZXJtaW5hbC5wcm90b3R5cGUuY3Vyc29yTmV4dExpbmUgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgdmFyIHBhcmFtID0gcGFyYW1zWzBdO1xuICBpZiAocGFyYW0gPCAxKSBwYXJhbSA9IDE7XG4gIHRoaXMueSArPSBwYXJhbTtcbiAgaWYgKHRoaXMueSA+PSB0aGlzLnJvd3MpIHtcbiAgICB0aGlzLnkgPSB0aGlzLnJvd3MgLSAxO1xuICB9XG4gIHRoaXMueCA9IDA7XG59O1xuXG4vLyBDU0kgUHMgRlxuLy8gQ3Vyc29yIFByZWNlZGluZyBMaW5lIFBzIFRpbWVzIChkZWZhdWx0ID0gMSkgKENOTCkuXG4vLyByZXVzZSBDU0kgUHMgQSA/XG5UZXJtaW5hbC5wcm90b3R5cGUuY3Vyc29yUHJlY2VkaW5nTGluZSA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICB2YXIgcGFyYW0gPSBwYXJhbXNbMF07XG4gIGlmIChwYXJhbSA8IDEpIHBhcmFtID0gMTtcbiAgdGhpcy55IC09IHBhcmFtO1xuICBpZiAodGhpcy55IDwgMCkgdGhpcy55ID0gMDtcbiAgdGhpcy54ID0gMDtcbn07XG5cbi8vIENTSSBQcyBHXG4vLyBDdXJzb3IgQ2hhcmFjdGVyIEFic29sdXRlICBbY29sdW1uXSAoZGVmYXVsdCA9IFtyb3csMV0pIChDSEEpLlxuVGVybWluYWwucHJvdG90eXBlLmN1cnNvckNoYXJBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICB2YXIgcGFyYW0gPSBwYXJhbXNbMF07XG4gIGlmIChwYXJhbSA8IDEpIHBhcmFtID0gMTtcbiAgdGhpcy54ID0gcGFyYW0gLSAxO1xufTtcblxuLy8gQ1NJIFBzIExcbi8vIEluc2VydCBQcyBMaW5lKHMpIChkZWZhdWx0ID0gMSkgKElMKS5cblRlcm1pbmFsLnByb3RvdHlwZS5pbnNlcnRMaW5lcyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICB2YXIgcGFyYW0sIHJvdywgajtcblxuICBwYXJhbSA9IHBhcmFtc1swXTtcbiAgaWYgKHBhcmFtIDwgMSkgcGFyYW0gPSAxO1xuICByb3cgPSB0aGlzLnkgKyB0aGlzLnliYXNlO1xuXG4gIGogPSB0aGlzLnJvd3MgLSAxIC0gdGhpcy5zY3JvbGxCb3R0b207XG4gIGogPSB0aGlzLnJvd3MgLSAxICsgdGhpcy55YmFzZSAtIGogKyAxO1xuXG4gIHdoaWxlIChwYXJhbS0tKSB7XG4gICAgLy8gdGVzdDogZWNobyAtZSAnXFxlWzQ0bVxcZVsxTFxcZVswbSdcbiAgICAvLyBibGFua0xpbmUodHJ1ZSkgLSB4dGVybS9saW51eCBiZWhhdmlvclxuICAgIHRoaXMubGluZXMuc3BsaWNlKHJvdywgMCwgdGhpcy5ibGFua0xpbmUodHJ1ZSkpO1xuICAgIHRoaXMubGluZXMuc3BsaWNlKGosIDEpO1xuICB9XG5cbiAgLy8gdGhpcy5tYXhSYW5nZSgpO1xuICB0aGlzLnVwZGF0ZVJhbmdlKHRoaXMueSk7XG4gIHRoaXMudXBkYXRlUmFuZ2UodGhpcy5zY3JvbGxCb3R0b20pO1xufTtcblxuLy8gQ1NJIFBzIE1cbi8vIERlbGV0ZSBQcyBMaW5lKHMpIChkZWZhdWx0ID0gMSkgKERMKS5cblRlcm1pbmFsLnByb3RvdHlwZS5kZWxldGVMaW5lcyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICB2YXIgcGFyYW0sIHJvdywgajtcblxuICBwYXJhbSA9IHBhcmFtc1swXTtcbiAgaWYgKHBhcmFtIDwgMSkgcGFyYW0gPSAxO1xuICByb3cgPSB0aGlzLnkgKyB0aGlzLnliYXNlO1xuXG4gIGogPSB0aGlzLnJvd3MgLSAxIC0gdGhpcy5zY3JvbGxCb3R0b207XG4gIGogPSB0aGlzLnJvd3MgLSAxICsgdGhpcy55YmFzZSAtIGo7XG5cbiAgd2hpbGUgKHBhcmFtLS0pIHtcbiAgICAvLyB0ZXN0OiBlY2hvIC1lICdcXGVbNDRtXFxlWzFNXFxlWzBtJ1xuICAgIC8vIGJsYW5rTGluZSh0cnVlKSAtIHh0ZXJtL2xpbnV4IGJlaGF2aW9yXG4gICAgdGhpcy5saW5lcy5zcGxpY2UoaiArIDEsIDAsIHRoaXMuYmxhbmtMaW5lKHRydWUpKTtcbiAgICB0aGlzLmxpbmVzLnNwbGljZShyb3csIDEpO1xuICB9XG5cbiAgLy8gdGhpcy5tYXhSYW5nZSgpO1xuICB0aGlzLnVwZGF0ZVJhbmdlKHRoaXMueSk7XG4gIHRoaXMudXBkYXRlUmFuZ2UodGhpcy5zY3JvbGxCb3R0b20pO1xufTtcblxuLy8gQ1NJIFBzIFBcbi8vIERlbGV0ZSBQcyBDaGFyYWN0ZXIocykgKGRlZmF1bHQgPSAxKSAoRENIKS5cblRlcm1pbmFsLnByb3RvdHlwZS5kZWxldGVDaGFycyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICB2YXIgcGFyYW0sIHJvdywgY2g7XG5cbiAgcGFyYW0gPSBwYXJhbXNbMF07XG4gIGlmIChwYXJhbSA8IDEpIHBhcmFtID0gMTtcblxuICByb3cgPSB0aGlzLnkgKyB0aGlzLnliYXNlO1xuICBjaCA9IFt0aGlzLmVyYXNlQXR0cigpLCAnICddOyAvLyB4dGVybVxuXG4gIHdoaWxlIChwYXJhbS0tKSB7XG4gICAgdGhpcy5saW5lc1tyb3ddLnNwbGljZSh0aGlzLngsIDEpO1xuICAgIHRoaXMubGluZXNbcm93XS5wdXNoKGNoKTtcbiAgfVxufTtcblxuLy8gQ1NJIFBzIFhcbi8vIEVyYXNlIFBzIENoYXJhY3RlcihzKSAoZGVmYXVsdCA9IDEpIChFQ0gpLlxuVGVybWluYWwucHJvdG90eXBlLmVyYXNlQ2hhcnMgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgdmFyIHBhcmFtLCByb3csIGosIGNoO1xuXG4gIHBhcmFtID0gcGFyYW1zWzBdO1xuICBpZiAocGFyYW0gPCAxKSBwYXJhbSA9IDE7XG5cbiAgcm93ID0gdGhpcy55ICsgdGhpcy55YmFzZTtcbiAgaiA9IHRoaXMueDtcbiAgY2ggPSBbdGhpcy5lcmFzZUF0dHIoKSwgJyAnXTsgLy8geHRlcm1cblxuICB3aGlsZSAocGFyYW0tLSAmJiBqIDwgdGhpcy5jb2xzKSB7XG4gICAgdGhpcy5saW5lc1tyb3ddW2orK10gPSBjaDtcbiAgfVxufTtcblxuLy8gQ1NJIFBtIGAgIENoYXJhY3RlciBQb3NpdGlvbiBBYnNvbHV0ZVxuLy8gICBbY29sdW1uXSAoZGVmYXVsdCA9IFtyb3csMV0pIChIUEEpLlxuVGVybWluYWwucHJvdG90eXBlLmNoYXJQb3NBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICB2YXIgcGFyYW0gPSBwYXJhbXNbMF07XG4gIGlmIChwYXJhbSA8IDEpIHBhcmFtID0gMTtcbiAgdGhpcy54ID0gcGFyYW0gLSAxO1xuICBpZiAodGhpcy54ID49IHRoaXMuY29scykge1xuICAgIHRoaXMueCA9IHRoaXMuY29scyAtIDE7XG4gIH1cbn07XG5cbi8vIDE0MSA2MSBhICogSFBSIC1cbi8vIEhvcml6b250YWwgUG9zaXRpb24gUmVsYXRpdmVcbi8vIHJldXNlIENTSSBQcyBDID9cblRlcm1pbmFsLnByb3RvdHlwZS5IUG9zaXRpb25SZWxhdGl2ZSA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICB2YXIgcGFyYW0gPSBwYXJhbXNbMF07XG4gIGlmIChwYXJhbSA8IDEpIHBhcmFtID0gMTtcbiAgdGhpcy54ICs9IHBhcmFtO1xuICBpZiAodGhpcy54ID49IHRoaXMuY29scykge1xuICAgIHRoaXMueCA9IHRoaXMuY29scyAtIDE7XG4gIH1cbn07XG5cbi8vIENTSSBQcyBjICBTZW5kIERldmljZSBBdHRyaWJ1dGVzIChQcmltYXJ5IERBKS5cbi8vICAgICBQcyA9IDAgIG9yIG9taXR0ZWQgLT4gcmVxdWVzdCBhdHRyaWJ1dGVzIGZyb20gdGVybWluYWwuICBUaGVcbi8vICAgICByZXNwb25zZSBkZXBlbmRzIG9uIHRoZSBkZWNUZXJtaW5hbElEIHJlc291cmNlIHNldHRpbmcuXG4vLyAgICAgLT4gQ1NJID8gMSA7IDIgYyAgKGBgVlQxMDAgd2l0aCBBZHZhbmNlZCBWaWRlbyBPcHRpb24nJylcbi8vICAgICAtPiBDU0kgPyAxIDsgMCBjICAoYGBWVDEwMSB3aXRoIE5vIE9wdGlvbnMnJylcbi8vICAgICAtPiBDU0kgPyA2IGMgIChgYFZUMTAyJycpXG4vLyAgICAgLT4gQ1NJID8gNiAwIDsgMSA7IDIgOyA2IDsgOCA7IDkgOyAxIDUgOyBjICAoYGBWVDIyMCcnKVxuLy8gICBUaGUgVlQxMDAtc3R5bGUgcmVzcG9uc2UgcGFyYW1ldGVycyBkbyBub3QgbWVhbiBhbnl0aGluZyBieVxuLy8gICB0aGVtc2VsdmVzLiAgVlQyMjAgcGFyYW1ldGVycyBkbywgdGVsbGluZyB0aGUgaG9zdCB3aGF0IGZlYS1cbi8vICAgdHVyZXMgdGhlIHRlcm1pbmFsIHN1cHBvcnRzOlxuLy8gICAgIFBzID0gMSAgLT4gMTMyLWNvbHVtbnMuXG4vLyAgICAgUHMgPSAyICAtPiBQcmludGVyLlxuLy8gICAgIFBzID0gNiAgLT4gU2VsZWN0aXZlIGVyYXNlLlxuLy8gICAgIFBzID0gOCAgLT4gVXNlci1kZWZpbmVkIGtleXMuXG4vLyAgICAgUHMgPSA5ICAtPiBOYXRpb25hbCByZXBsYWNlbWVudCBjaGFyYWN0ZXIgc2V0cy5cbi8vICAgICBQcyA9IDEgNSAgLT4gVGVjaG5pY2FsIGNoYXJhY3RlcnMuXG4vLyAgICAgUHMgPSAyIDIgIC0+IEFOU0kgY29sb3IsIGUuZy4sIFZUNTI1LlxuLy8gICAgIFBzID0gMiA5ICAtPiBBTlNJIHRleHQgbG9jYXRvciAoaS5lLiwgREVDIExvY2F0b3IgbW9kZSkuXG4vLyBDU0kgPiBQcyBjXG4vLyAgIFNlbmQgRGV2aWNlIEF0dHJpYnV0ZXMgKFNlY29uZGFyeSBEQSkuXG4vLyAgICAgUHMgPSAwICBvciBvbWl0dGVkIC0+IHJlcXVlc3QgdGhlIHRlcm1pbmFsJ3MgaWRlbnRpZmljYXRpb25cbi8vICAgICBjb2RlLiAgVGhlIHJlc3BvbnNlIGRlcGVuZHMgb24gdGhlIGRlY1Rlcm1pbmFsSUQgcmVzb3VyY2Ugc2V0LVxuLy8gICAgIHRpbmcuICBJdCBzaG91bGQgYXBwbHkgb25seSB0byBWVDIyMCBhbmQgdXAsIGJ1dCB4dGVybSBleHRlbmRzXG4vLyAgICAgdGhpcyB0byBWVDEwMC5cbi8vICAgICAtPiBDU0kgID4gUHAgOyBQdiA7IFBjIGNcbi8vICAgd2hlcmUgUHAgZGVub3RlcyB0aGUgdGVybWluYWwgdHlwZVxuLy8gICAgIFBwID0gMCAgLT4gYGBWVDEwMCcnLlxuLy8gICAgIFBwID0gMSAgLT4gYGBWVDIyMCcnLlxuLy8gICBhbmQgUHYgaXMgdGhlIGZpcm13YXJlIHZlcnNpb24gKGZvciB4dGVybSwgdGhpcyB3YXMgb3JpZ2luYWxseVxuLy8gICB0aGUgWEZyZWU4NiBwYXRjaCBudW1iZXIsIHN0YXJ0aW5nIHdpdGggOTUpLiAgSW4gYSBERUMgdGVybWktXG4vLyAgIG5hbCwgUGMgaW5kaWNhdGVzIHRoZSBST00gY2FydHJpZGdlIHJlZ2lzdHJhdGlvbiBudW1iZXIgYW5kIGlzXG4vLyAgIGFsd2F5cyB6ZXJvLlxuLy8gTW9yZSBpbmZvcm1hdGlvbjpcbi8vICAgeHRlcm0vY2hhcnByb2MuYyAtIGxpbmUgMjAxMiwgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4vLyAgIHZpbSByZXNwb25kcyB3aXRoIF5bWz8wYyBvciBeW1s/MWMgYWZ0ZXIgdGhlIHRlcm1pbmFsJ3MgcmVzcG9uc2UgKD8pXG5UZXJtaW5hbC5wcm90b3R5cGUuc2VuZERldmljZUF0dHJpYnV0ZXMgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgaWYgKHBhcmFtc1swXSA+IDApIHJldHVybjtcblxuICBpZiAoIXRoaXMucHJlZml4KSB7XG4gICAgaWYgKHRoaXMuaXMoJ3h0ZXJtJylcbiAgICAgICAgfHwgdGhpcy5pcygncnh2dC11bmljb2RlJylcbiAgICAgICAgfHwgdGhpcy5pcygnc2NyZWVuJykpIHtcbiAgICAgIHRoaXMuc2VuZCgnXFx4MWJbPzE7MmMnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXMoJ2xpbnV4JykpIHtcbiAgICAgIHRoaXMuc2VuZCgnXFx4MWJbPzZjJyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHRoaXMucHJlZml4ID09PSAnPicpIHtcbiAgICAvLyB4dGVybSBhbmQgdXJ4dnRcbiAgICAvLyBzZWVtIHRvIHNwaXQgdGhpc1xuICAgIC8vIG91dCBhcm91bmQgfjM3MCB0aW1lcyAoPykuXG4gICAgaWYgKHRoaXMuaXMoJ3h0ZXJtJykpIHtcbiAgICAgIHRoaXMuc2VuZCgnXFx4MWJbPjA7Mjc2OzBjJyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzKCdyeHZ0LXVuaWNvZGUnKSkge1xuICAgICAgdGhpcy5zZW5kKCdcXHgxYls+ODU7OTU7MGMnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXMoJ2xpbnV4JykpIHtcbiAgICAgIC8vIG5vdCBzdXBwb3J0ZWQgYnkgbGludXggY29uc29sZS5cbiAgICAgIC8vIGxpbnV4IGNvbnNvbGUgZWNob2VzIHBhcmFtZXRlcnMuXG4gICAgICB0aGlzLnNlbmQocGFyYW1zWzBdICsgJ2MnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXMoJ3NjcmVlbicpKSB7XG4gICAgICB0aGlzLnNlbmQoJ1xceDFiWz44Mzs0MDAwMzswYycpO1xuICAgIH1cbiAgfVxufTtcblxuLy8gQ1NJIFBtIGRcbi8vIExpbmUgUG9zaXRpb24gQWJzb2x1dGUgIFtyb3ddIChkZWZhdWx0ID0gWzEsY29sdW1uXSkgKFZQQSkuXG5UZXJtaW5hbC5wcm90b3R5cGUubGluZVBvc0Fic29sdXRlID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gIHZhciBwYXJhbSA9IHBhcmFtc1swXTtcbiAgaWYgKHBhcmFtIDwgMSkgcGFyYW0gPSAxO1xuICB0aGlzLnkgPSBwYXJhbSAtIDE7XG4gIGlmICh0aGlzLnkgPj0gdGhpcy5yb3dzKSB7XG4gICAgdGhpcy55ID0gdGhpcy5yb3dzIC0gMTtcbiAgfVxufTtcblxuLy8gMTQ1IDY1IGUgKiBWUFIgLSBWZXJ0aWNhbCBQb3NpdGlvbiBSZWxhdGl2ZVxuLy8gcmV1c2UgQ1NJIFBzIEIgP1xuVGVybWluYWwucHJvdG90eXBlLlZQb3NpdGlvblJlbGF0aXZlID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gIHZhciBwYXJhbSA9IHBhcmFtc1swXTtcbiAgaWYgKHBhcmFtIDwgMSkgcGFyYW0gPSAxO1xuICB0aGlzLnkgKz0gcGFyYW07XG4gIGlmICh0aGlzLnkgPj0gdGhpcy5yb3dzKSB7XG4gICAgdGhpcy55ID0gdGhpcy5yb3dzIC0gMTtcbiAgfVxufTtcblxuLy8gQ1NJIFBzIDsgUHMgZlxuLy8gICBIb3Jpem9udGFsIGFuZCBWZXJ0aWNhbCBQb3NpdGlvbiBbcm93O2NvbHVtbl0gKGRlZmF1bHQgPVxuLy8gICBbMSwxXSkgKEhWUCkuXG5UZXJtaW5hbC5wcm90b3R5cGUuSFZQb3NpdGlvbiA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICBpZiAocGFyYW1zWzBdIDwgMSkgcGFyYW1zWzBdID0gMTtcbiAgaWYgKHBhcmFtc1sxXSA8IDEpIHBhcmFtc1sxXSA9IDE7XG5cbiAgdGhpcy55ID0gcGFyYW1zWzBdIC0gMTtcbiAgaWYgKHRoaXMueSA+PSB0aGlzLnJvd3MpIHtcbiAgICB0aGlzLnkgPSB0aGlzLnJvd3MgLSAxO1xuICB9XG5cbiAgdGhpcy54ID0gcGFyYW1zWzFdIC0gMTtcbiAgaWYgKHRoaXMueCA+PSB0aGlzLmNvbHMpIHtcbiAgICB0aGlzLnggPSB0aGlzLmNvbHMgLSAxO1xuICB9XG59O1xuXG4vLyBDU0kgUG0gaCAgU2V0IE1vZGUgKFNNKS5cbi8vICAgICBQcyA9IDIgIC0+IEtleWJvYXJkIEFjdGlvbiBNb2RlIChBTSkuXG4vLyAgICAgUHMgPSA0ICAtPiBJbnNlcnQgTW9kZSAoSVJNKS5cbi8vICAgICBQcyA9IDEgMiAgLT4gU2VuZC9yZWNlaXZlIChTUk0pLlxuLy8gICAgIFBzID0gMiAwICAtPiBBdXRvbWF0aWMgTmV3bGluZSAoTE5NKS5cbi8vIENTSSA/IFBtIGhcbi8vICAgREVDIFByaXZhdGUgTW9kZSBTZXQgKERFQ1NFVCkuXG4vLyAgICAgUHMgPSAxICAtPiBBcHBsaWNhdGlvbiBDdXJzb3IgS2V5cyAoREVDQ0tNKS5cbi8vICAgICBQcyA9IDIgIC0+IERlc2lnbmF0ZSBVU0FTQ0lJIGZvciBjaGFyYWN0ZXIgc2V0cyBHMC1HM1xuLy8gICAgIChERUNBTk0pLCBhbmQgc2V0IFZUMTAwIG1vZGUuXG4vLyAgICAgUHMgPSAzICAtPiAxMzIgQ29sdW1uIE1vZGUgKERFQ0NPTE0pLlxuLy8gICAgIFBzID0gNCAgLT4gU21vb3RoIChTbG93KSBTY3JvbGwgKERFQ1NDTE0pLlxuLy8gICAgIFBzID0gNSAgLT4gUmV2ZXJzZSBWaWRlbyAoREVDU0NOTSkuXG4vLyAgICAgUHMgPSA2ICAtPiBPcmlnaW4gTW9kZSAoREVDT00pLlxuLy8gICAgIFBzID0gNyAgLT4gV3JhcGFyb3VuZCBNb2RlIChERUNBV00pLlxuLy8gICAgIFBzID0gOCAgLT4gQXV0by1yZXBlYXQgS2V5cyAoREVDQVJNKS5cbi8vICAgICBQcyA9IDkgIC0+IFNlbmQgTW91c2UgWCAmIFkgb24gYnV0dG9uIHByZXNzLiAgU2VlIHRoZSBzZWMtXG4vLyAgICAgdGlvbiBNb3VzZSBUcmFja2luZy5cbi8vICAgICBQcyA9IDEgMCAgLT4gU2hvdyB0b29sYmFyIChyeHZ0KS5cbi8vICAgICBQcyA9IDEgMiAgLT4gU3RhcnQgQmxpbmtpbmcgQ3Vyc29yIChhdHQ2MTApLlxuLy8gICAgIFBzID0gMSA4ICAtPiBQcmludCBmb3JtIGZlZWQgKERFQ1BGRikuXG4vLyAgICAgUHMgPSAxIDkgIC0+IFNldCBwcmludCBleHRlbnQgdG8gZnVsbCBzY3JlZW4gKERFQ1BFWCkuXG4vLyAgICAgUHMgPSAyIDUgIC0+IFNob3cgQ3Vyc29yIChERUNUQ0VNKS5cbi8vICAgICBQcyA9IDMgMCAgLT4gU2hvdyBzY3JvbGxiYXIgKHJ4dnQpLlxuLy8gICAgIFBzID0gMyA1ICAtPiBFbmFibGUgZm9udC1zaGlmdGluZyBmdW5jdGlvbnMgKHJ4dnQpLlxuLy8gICAgIFBzID0gMyA4ICAtPiBFbnRlciBUZWt0cm9uaXggTW9kZSAoREVDVEVLKS5cbi8vICAgICBQcyA9IDQgMCAgLT4gQWxsb3cgODAgLT4gMTMyIE1vZGUuXG4vLyAgICAgUHMgPSA0IDEgIC0+IG1vcmUoMSkgZml4IChzZWUgY3Vyc2VzIHJlc291cmNlKS5cbi8vICAgICBQcyA9IDQgMiAgLT4gRW5hYmxlIE5hdGlvbiBSZXBsYWNlbWVudCBDaGFyYWN0ZXIgc2V0cyAoREVDTi1cbi8vICAgICBSQ00pLlxuLy8gICAgIFBzID0gNCA0ICAtPiBUdXJuIE9uIE1hcmdpbiBCZWxsLlxuLy8gICAgIFBzID0gNCA1ICAtPiBSZXZlcnNlLXdyYXBhcm91bmQgTW9kZS5cbi8vICAgICBQcyA9IDQgNiAgLT4gU3RhcnQgTG9nZ2luZy4gIFRoaXMgaXMgbm9ybWFsbHkgZGlzYWJsZWQgYnkgYVxuLy8gICAgIGNvbXBpbGUtdGltZSBvcHRpb24uXG4vLyAgICAgUHMgPSA0IDcgIC0+IFVzZSBBbHRlcm5hdGUgU2NyZWVuIEJ1ZmZlci4gIChUaGlzIG1heSBiZSBkaXMtXG4vLyAgICAgYWJsZWQgYnkgdGhlIHRpdGVJbmhpYml0IHJlc291cmNlKS5cbi8vICAgICBQcyA9IDYgNiAgLT4gQXBwbGljYXRpb24ga2V5cGFkIChERUNOS00pLlxuLy8gICAgIFBzID0gNiA3ICAtPiBCYWNrYXJyb3cga2V5IHNlbmRzIGJhY2tzcGFjZSAoREVDQktNKS5cbi8vICAgICBQcyA9IDEgMCAwIDAgIC0+IFNlbmQgTW91c2UgWCAmIFkgb24gYnV0dG9uIHByZXNzIGFuZFxuLy8gICAgIHJlbGVhc2UuICBTZWUgdGhlIHNlY3Rpb24gTW91c2UgVHJhY2tpbmcuXG4vLyAgICAgUHMgPSAxIDAgMCAxICAtPiBVc2UgSGlsaXRlIE1vdXNlIFRyYWNraW5nLlxuLy8gICAgIFBzID0gMSAwIDAgMiAgLT4gVXNlIENlbGwgTW90aW9uIE1vdXNlIFRyYWNraW5nLlxuLy8gICAgIFBzID0gMSAwIDAgMyAgLT4gVXNlIEFsbCBNb3Rpb24gTW91c2UgVHJhY2tpbmcuXG4vLyAgICAgUHMgPSAxIDAgMCA0ICAtPiBTZW5kIEZvY3VzSW4vRm9jdXNPdXQgZXZlbnRzLlxuLy8gICAgIFBzID0gMSAwIDAgNSAgLT4gRW5hYmxlIEV4dGVuZGVkIE1vdXNlIE1vZGUuXG4vLyAgICAgUHMgPSAxIDAgMSAwICAtPiBTY3JvbGwgdG8gYm90dG9tIG9uIHR0eSBvdXRwdXQgKHJ4dnQpLlxuLy8gICAgIFBzID0gMSAwIDEgMSAgLT4gU2Nyb2xsIHRvIGJvdHRvbSBvbiBrZXkgcHJlc3MgKHJ4dnQpLlxuLy8gICAgIFBzID0gMSAwIDMgNCAgLT4gSW50ZXJwcmV0IFwibWV0YVwiIGtleSwgc2V0cyBlaWdodGggYml0LlxuLy8gICAgIChlbmFibGVzIHRoZSBlaWdodEJpdElucHV0IHJlc291cmNlKS5cbi8vICAgICBQcyA9IDEgMCAzIDUgIC0+IEVuYWJsZSBzcGVjaWFsIG1vZGlmaWVycyBmb3IgQWx0IGFuZCBOdW0tXG4vLyAgICAgTG9jayBrZXlzLiAgKFRoaXMgZW5hYmxlcyB0aGUgbnVtTG9jayByZXNvdXJjZSkuXG4vLyAgICAgUHMgPSAxIDAgMyA2ICAtPiBTZW5kIEVTQyAgIHdoZW4gTWV0YSBtb2RpZmllcyBhIGtleS4gIChUaGlzXG4vLyAgICAgZW5hYmxlcyB0aGUgbWV0YVNlbmRzRXNjYXBlIHJlc291cmNlKS5cbi8vICAgICBQcyA9IDEgMCAzIDcgIC0+IFNlbmQgREVMIGZyb20gdGhlIGVkaXRpbmcta2V5cGFkIERlbGV0ZVxuLy8gICAgIGtleS5cbi8vICAgICBQcyA9IDEgMCAzIDkgIC0+IFNlbmQgRVNDICB3aGVuIEFsdCBtb2RpZmllcyBhIGtleS4gIChUaGlzXG4vLyAgICAgZW5hYmxlcyB0aGUgYWx0U2VuZHNFc2NhcGUgcmVzb3VyY2UpLlxuLy8gICAgIFBzID0gMSAwIDQgMCAgLT4gS2VlcCBzZWxlY3Rpb24gZXZlbiBpZiBub3QgaGlnaGxpZ2h0ZWQuXG4vLyAgICAgKFRoaXMgZW5hYmxlcyB0aGUga2VlcFNlbGVjdGlvbiByZXNvdXJjZSkuXG4vLyAgICAgUHMgPSAxIDAgNCAxICAtPiBVc2UgdGhlIENMSVBCT0FSRCBzZWxlY3Rpb24uICAoVGhpcyBlbmFibGVzXG4vLyAgICAgdGhlIHNlbGVjdFRvQ2xpcGJvYXJkIHJlc291cmNlKS5cbi8vICAgICBQcyA9IDEgMCA0IDIgIC0+IEVuYWJsZSBVcmdlbmN5IHdpbmRvdyBtYW5hZ2VyIGhpbnQgd2hlblxuLy8gICAgIENvbnRyb2wtRyBpcyByZWNlaXZlZC4gIChUaGlzIGVuYWJsZXMgdGhlIGJlbGxJc1VyZ2VudFxuLy8gICAgIHJlc291cmNlKS5cbi8vICAgICBQcyA9IDEgMCA0IDMgIC0+IEVuYWJsZSByYWlzaW5nIG9mIHRoZSB3aW5kb3cgd2hlbiBDb250cm9sLUdcbi8vICAgICBpcyByZWNlaXZlZC4gIChlbmFibGVzIHRoZSBwb3BPbkJlbGwgcmVzb3VyY2UpLlxuLy8gICAgIFBzID0gMSAwIDQgNyAgLT4gVXNlIEFsdGVybmF0ZSBTY3JlZW4gQnVmZmVyLiAgKFRoaXMgbWF5IGJlXG4vLyAgICAgZGlzYWJsZWQgYnkgdGhlIHRpdGVJbmhpYml0IHJlc291cmNlKS5cbi8vICAgICBQcyA9IDEgMCA0IDggIC0+IFNhdmUgY3Vyc29yIGFzIGluIERFQ1NDLiAgKFRoaXMgbWF5IGJlIGRpcy1cbi8vICAgICBhYmxlZCBieSB0aGUgdGl0ZUluaGliaXQgcmVzb3VyY2UpLlxuLy8gICAgIFBzID0gMSAwIDQgOSAgLT4gU2F2ZSBjdXJzb3IgYXMgaW4gREVDU0MgYW5kIHVzZSBBbHRlcm5hdGVcbi8vICAgICBTY3JlZW4gQnVmZmVyLCBjbGVhcmluZyBpdCBmaXJzdC4gIChUaGlzIG1heSBiZSBkaXNhYmxlZCBieVxuLy8gICAgIHRoZSB0aXRlSW5oaWJpdCByZXNvdXJjZSkuICBUaGlzIGNvbWJpbmVzIHRoZSBlZmZlY3RzIG9mIHRoZSAxXG4vLyAgICAgMCA0IDcgIGFuZCAxIDAgNCA4ICBtb2Rlcy4gIFVzZSB0aGlzIHdpdGggdGVybWluZm8tYmFzZWRcbi8vICAgICBhcHBsaWNhdGlvbnMgcmF0aGVyIHRoYW4gdGhlIDQgNyAgbW9kZS5cbi8vICAgICBQcyA9IDEgMCA1IDAgIC0+IFNldCB0ZXJtaW5mby90ZXJtY2FwIGZ1bmN0aW9uLWtleSBtb2RlLlxuLy8gICAgIFBzID0gMSAwIDUgMSAgLT4gU2V0IFN1biBmdW5jdGlvbi1rZXkgbW9kZS5cbi8vICAgICBQcyA9IDEgMCA1IDIgIC0+IFNldCBIUCBmdW5jdGlvbi1rZXkgbW9kZS5cbi8vICAgICBQcyA9IDEgMCA1IDMgIC0+IFNldCBTQ08gZnVuY3Rpb24ta2V5IG1vZGUuXG4vLyAgICAgUHMgPSAxIDAgNiAwICAtPiBTZXQgbGVnYWN5IGtleWJvYXJkIGVtdWxhdGlvbiAoWDExUjYpLlxuLy8gICAgIFBzID0gMSAwIDYgMSAgLT4gU2V0IFZUMjIwIGtleWJvYXJkIGVtdWxhdGlvbi5cbi8vICAgICBQcyA9IDIgMCAwIDQgIC0+IFNldCBicmFja2V0ZWQgcGFzdGUgbW9kZS5cbi8vIE1vZGVzOlxuLy8gICBodHRwOi8vdnQxMDAubmV0L2RvY3MvdnQyMjAtcm0vY2hhcHRlcjQuaHRtbFxuVGVybWluYWwucHJvdG90eXBlLnNldE1vZGUgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgaWYgKHR5cGVvZiBwYXJhbXMgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIGwgPSBwYXJhbXMubGVuZ3RoXG4gICAgICAsIGkgPSAwO1xuXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRoaXMuc2V0TW9kZShwYXJhbXNbaV0pO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghdGhpcy5wcmVmaXgpIHtcbiAgICBzd2l0Y2ggKHBhcmFtcykge1xuICAgICAgY2FzZSA0OlxuICAgICAgICB0aGlzLmluc2VydE1vZGUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjA6XG4gICAgICAgIC8vdGhpcy5jb252ZXJ0RW9sID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9IGVsc2UgaWYgKHRoaXMucHJlZml4ID09PSAnPycpIHtcbiAgICBzd2l0Y2ggKHBhcmFtcykge1xuICAgICAgY2FzZSAxOlxuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uQ3Vyc29yID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHRoaXMuc2V0Z0NoYXJzZXQoMCwgVGVybWluYWwuY2hhcnNldHMuVVMpO1xuICAgICAgICB0aGlzLnNldGdDaGFyc2V0KDEsIFRlcm1pbmFsLmNoYXJzZXRzLlVTKTtcbiAgICAgICAgdGhpcy5zZXRnQ2hhcnNldCgyLCBUZXJtaW5hbC5jaGFyc2V0cy5VUyk7XG4gICAgICAgIHRoaXMuc2V0Z0NoYXJzZXQoMywgVGVybWluYWwuY2hhcnNldHMuVVMpO1xuICAgICAgICAvLyBzZXQgVlQxMDAgbW9kZSBoZXJlXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOiAvLyAxMzIgY29sIG1vZGVcbiAgICAgICAgdGhpcy5zYXZlZENvbHMgPSB0aGlzLmNvbHM7XG4gICAgICAgIHRoaXMucmVzaXplKDEzMiwgdGhpcy5yb3dzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIHRoaXMub3JpZ2luTW9kZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA3OlxuICAgICAgICB0aGlzLndyYXBhcm91bmRNb2RlID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDEyOlxuICAgICAgICAvLyB0aGlzLmN1cnNvckJsaW5rID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDY2OlxuICAgICAgICB0aGlzLmxvZygnU2VyaWFsIHBvcnQgcmVxdWVzdGVkIGFwcGxpY2F0aW9uIGtleXBhZC4nKTtcbiAgICAgICAgdGhpcy5hcHBsaWNhdGlvbktleXBhZCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA5OiAvLyBYMTAgTW91c2VcbiAgICAgICAgLy8gbm8gcmVsZWFzZSwgbm8gbW90aW9uLCBubyB3aGVlbCwgbm8gbW9kaWZpZXJzLlxuICAgICAgY2FzZSAxMDAwOiAvLyB2dDIwMCBtb3VzZVxuICAgICAgICAvLyBubyBtb3Rpb24uXG4gICAgICAgIC8vIG5vIG1vZGlmaWVycywgZXhjZXB0IGNvbnRyb2wgb24gdGhlIHdoZWVsLlxuICAgICAgY2FzZSAxMDAyOiAvLyBidXR0b24gZXZlbnQgbW91c2VcbiAgICAgIGNhc2UgMTAwMzogLy8gYW55IGV2ZW50IG1vdXNlXG4gICAgICAgIC8vIGFueSBldmVudCAtIHNlbmRzIG1vdGlvbiBldmVudHMsXG4gICAgICAgIC8vIGV2ZW4gaWYgdGhlcmUgaXMgbm8gYnV0dG9uIGhlbGQgZG93bi5cbiAgICAgICAgdGhpcy54MTBNb3VzZSA9IHBhcmFtcyA9PT0gOTtcbiAgICAgICAgdGhpcy52dDIwME1vdXNlID0gcGFyYW1zID09PSAxMDAwO1xuICAgICAgICB0aGlzLm5vcm1hbE1vdXNlID0gcGFyYW1zID4gMTAwMDtcbiAgICAgICAgdGhpcy5tb3VzZUV2ZW50cyA9IHRydWU7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XG4gICAgICAgIHRoaXMubG9nKCdCaW5kaW5nIHRvIG1vdXNlIGV2ZW50cy4nKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDEwMDQ6IC8vIHNlbmQgZm9jdXNpbi9mb2N1c291dCBldmVudHNcbiAgICAgICAgLy8gZm9jdXNpbjogXltbSVxuICAgICAgICAvLyBmb2N1c291dDogXltbT1xuICAgICAgICB0aGlzLnNlbmRGb2N1cyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMDA1OiAvLyB1dGY4IGV4dCBtb2RlIG1vdXNlXG4gICAgICAgIHRoaXMudXRmTW91c2UgPSB0cnVlO1xuICAgICAgICAvLyBmb3Igd2lkZSB0ZXJtaW5hbHNcbiAgICAgICAgLy8gc2ltcGx5IGVuY29kZXMgbGFyZ2UgdmFsdWVzIGFzIHV0ZjggY2hhcmFjdGVyc1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTAwNjogLy8gc2dyIGV4dCBtb2RlIG1vdXNlXG4gICAgICAgIHRoaXMuc2dyTW91c2UgPSB0cnVlO1xuICAgICAgICAvLyBmb3Igd2lkZSB0ZXJtaW5hbHNcbiAgICAgICAgLy8gZG9lcyBub3QgYWRkIDMyIHRvIGZpZWxkc1xuICAgICAgICAvLyBwcmVzczogXltbPGI7eDt5TVxuICAgICAgICAvLyByZWxlYXNlOiBeW1s8Yjt4O3ltXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMDE1OiAvLyB1cnh2dCBleHQgbW9kZSBtb3VzZVxuICAgICAgICB0aGlzLnVyeHZ0TW91c2UgPSB0cnVlO1xuICAgICAgICAvLyBmb3Igd2lkZSB0ZXJtaW5hbHNcbiAgICAgICAgLy8gbnVtYmVycyBmb3IgZmllbGRzXG4gICAgICAgIC8vIHByZXNzOiBeW1tiO3g7eU1cbiAgICAgICAgLy8gbW90aW9uOiBeW1tiO3g7eVRcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI1OiAvLyBzaG93IGN1cnNvclxuICAgICAgICB0aGlzLmN1cnNvckhpZGRlbiA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTA0OTogLy8gYWx0IHNjcmVlbiBidWZmZXIgY3Vyc29yXG4gICAgICAgIC8vdGhpcy5zYXZlQ3Vyc29yKCk7XG4gICAgICAgIDsgLy8gRkFMTC1USFJPVUdIXG4gICAgICBjYXNlIDQ3OiAvLyBhbHQgc2NyZWVuIGJ1ZmZlclxuICAgICAgY2FzZSAxMDQ3OiAvLyBhbHQgc2NyZWVuIGJ1ZmZlclxuICAgICAgICBpZiAoIXRoaXMubm9ybWFsKSB7XG4gICAgICAgICAgdmFyIG5vcm1hbCA9IHtcbiAgICAgICAgICAgIGxpbmVzOiB0aGlzLmxpbmVzLFxuICAgICAgICAgICAgeWJhc2U6IHRoaXMueWJhc2UsXG4gICAgICAgICAgICB5ZGlzcDogdGhpcy55ZGlzcCxcbiAgICAgICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgICAgIHk6IHRoaXMueSxcbiAgICAgICAgICAgIHNjcm9sbFRvcDogdGhpcy5zY3JvbGxUb3AsXG4gICAgICAgICAgICBzY3JvbGxCb3R0b206IHRoaXMuc2Nyb2xsQm90dG9tLFxuICAgICAgICAgICAgdGFiczogdGhpcy50YWJzXG4gICAgICAgICAgICAvLyBYWFggc2F2ZSBjaGFyc2V0KHMpIGhlcmU/XG4gICAgICAgICAgICAvLyBjaGFyc2V0OiB0aGlzLmNoYXJzZXQsXG4gICAgICAgICAgICAvLyBnbGV2ZWw6IHRoaXMuZ2xldmVsLFxuICAgICAgICAgICAgLy8gY2hhcnNldHM6IHRoaXMuY2hhcnNldHNcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICB0aGlzLm5vcm1hbCA9IG5vcm1hbDtcbiAgICAgICAgICB0aGlzLnNob3dDdXJzb3IoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn07XG5cbi8vIENTSSBQbSBsICBSZXNldCBNb2RlIChSTSkuXG4vLyAgICAgUHMgPSAyICAtPiBLZXlib2FyZCBBY3Rpb24gTW9kZSAoQU0pLlxuLy8gICAgIFBzID0gNCAgLT4gUmVwbGFjZSBNb2RlIChJUk0pLlxuLy8gICAgIFBzID0gMSAyICAtPiBTZW5kL3JlY2VpdmUgKFNSTSkuXG4vLyAgICAgUHMgPSAyIDAgIC0+IE5vcm1hbCBMaW5lZmVlZCAoTE5NKS5cbi8vIENTSSA/IFBtIGxcbi8vICAgREVDIFByaXZhdGUgTW9kZSBSZXNldCAoREVDUlNUKS5cbi8vICAgICBQcyA9IDEgIC0+IE5vcm1hbCBDdXJzb3IgS2V5cyAoREVDQ0tNKS5cbi8vICAgICBQcyA9IDIgIC0+IERlc2lnbmF0ZSBWVDUyIG1vZGUgKERFQ0FOTSkuXG4vLyAgICAgUHMgPSAzICAtPiA4MCBDb2x1bW4gTW9kZSAoREVDQ09MTSkuXG4vLyAgICAgUHMgPSA0ICAtPiBKdW1wIChGYXN0KSBTY3JvbGwgKERFQ1NDTE0pLlxuLy8gICAgIFBzID0gNSAgLT4gTm9ybWFsIFZpZGVvIChERUNTQ05NKS5cbi8vICAgICBQcyA9IDYgIC0+IE5vcm1hbCBDdXJzb3IgTW9kZSAoREVDT00pLlxuLy8gICAgIFBzID0gNyAgLT4gTm8gV3JhcGFyb3VuZCBNb2RlIChERUNBV00pLlxuLy8gICAgIFBzID0gOCAgLT4gTm8gQXV0by1yZXBlYXQgS2V5cyAoREVDQVJNKS5cbi8vICAgICBQcyA9IDkgIC0+IERvbid0IHNlbmQgTW91c2UgWCAmIFkgb24gYnV0dG9uIHByZXNzLlxuLy8gICAgIFBzID0gMSAwICAtPiBIaWRlIHRvb2xiYXIgKHJ4dnQpLlxuLy8gICAgIFBzID0gMSAyICAtPiBTdG9wIEJsaW5raW5nIEN1cnNvciAoYXR0NjEwKS5cbi8vICAgICBQcyA9IDEgOCAgLT4gRG9uJ3QgcHJpbnQgZm9ybSBmZWVkIChERUNQRkYpLlxuLy8gICAgIFBzID0gMSA5ICAtPiBMaW1pdCBwcmludCB0byBzY3JvbGxpbmcgcmVnaW9uIChERUNQRVgpLlxuLy8gICAgIFBzID0gMiA1ICAtPiBIaWRlIEN1cnNvciAoREVDVENFTSkuXG4vLyAgICAgUHMgPSAzIDAgIC0+IERvbid0IHNob3cgc2Nyb2xsYmFyIChyeHZ0KS5cbi8vICAgICBQcyA9IDMgNSAgLT4gRGlzYWJsZSBmb250LXNoaWZ0aW5nIGZ1bmN0aW9ucyAocnh2dCkuXG4vLyAgICAgUHMgPSA0IDAgIC0+IERpc2FsbG93IDgwIC0+IDEzMiBNb2RlLlxuLy8gICAgIFBzID0gNCAxICAtPiBObyBtb3JlKDEpIGZpeCAoc2VlIGN1cnNlcyByZXNvdXJjZSkuXG4vLyAgICAgUHMgPSA0IDIgIC0+IERpc2FibGUgTmF0aW9uIFJlcGxhY2VtZW50IENoYXJhY3RlciBzZXRzIChERUMtXG4vLyAgICAgTlJDTSkuXG4vLyAgICAgUHMgPSA0IDQgIC0+IFR1cm4gT2ZmIE1hcmdpbiBCZWxsLlxuLy8gICAgIFBzID0gNCA1ICAtPiBObyBSZXZlcnNlLXdyYXBhcm91bmQgTW9kZS5cbi8vICAgICBQcyA9IDQgNiAgLT4gU3RvcCBMb2dnaW5nLiAgKFRoaXMgaXMgbm9ybWFsbHkgZGlzYWJsZWQgYnkgYVxuLy8gICAgIGNvbXBpbGUtdGltZSBvcHRpb24pLlxuLy8gICAgIFBzID0gNCA3ICAtPiBVc2UgTm9ybWFsIFNjcmVlbiBCdWZmZXIuXG4vLyAgICAgUHMgPSA2IDYgIC0+IE51bWVyaWMga2V5cGFkIChERUNOS00pLlxuLy8gICAgIFBzID0gNiA3ICAtPiBCYWNrYXJyb3cga2V5IHNlbmRzIGRlbGV0ZSAoREVDQktNKS5cbi8vICAgICBQcyA9IDEgMCAwIDAgIC0+IERvbid0IHNlbmQgTW91c2UgWCAmIFkgb24gYnV0dG9uIHByZXNzIGFuZFxuLy8gICAgIHJlbGVhc2UuICBTZWUgdGhlIHNlY3Rpb24gTW91c2UgVHJhY2tpbmcuXG4vLyAgICAgUHMgPSAxIDAgMCAxICAtPiBEb24ndCB1c2UgSGlsaXRlIE1vdXNlIFRyYWNraW5nLlxuLy8gICAgIFBzID0gMSAwIDAgMiAgLT4gRG9uJ3QgdXNlIENlbGwgTW90aW9uIE1vdXNlIFRyYWNraW5nLlxuLy8gICAgIFBzID0gMSAwIDAgMyAgLT4gRG9uJ3QgdXNlIEFsbCBNb3Rpb24gTW91c2UgVHJhY2tpbmcuXG4vLyAgICAgUHMgPSAxIDAgMCA0ICAtPiBEb24ndCBzZW5kIEZvY3VzSW4vRm9jdXNPdXQgZXZlbnRzLlxuLy8gICAgIFBzID0gMSAwIDAgNSAgLT4gRGlzYWJsZSBFeHRlbmRlZCBNb3VzZSBNb2RlLlxuLy8gICAgIFBzID0gMSAwIDEgMCAgLT4gRG9uJ3Qgc2Nyb2xsIHRvIGJvdHRvbSBvbiB0dHkgb3V0cHV0XG4vLyAgICAgKHJ4dnQpLlxuLy8gICAgIFBzID0gMSAwIDEgMSAgLT4gRG9uJ3Qgc2Nyb2xsIHRvIGJvdHRvbSBvbiBrZXkgcHJlc3MgKHJ4dnQpLlxuLy8gICAgIFBzID0gMSAwIDMgNCAgLT4gRG9uJ3QgaW50ZXJwcmV0IFwibWV0YVwiIGtleS4gIChUaGlzIGRpc2FibGVzXG4vLyAgICAgdGhlIGVpZ2h0Qml0SW5wdXQgcmVzb3VyY2UpLlxuLy8gICAgIFBzID0gMSAwIDMgNSAgLT4gRGlzYWJsZSBzcGVjaWFsIG1vZGlmaWVycyBmb3IgQWx0IGFuZCBOdW0tXG4vLyAgICAgTG9jayBrZXlzLiAgKFRoaXMgZGlzYWJsZXMgdGhlIG51bUxvY2sgcmVzb3VyY2UpLlxuLy8gICAgIFBzID0gMSAwIDMgNiAgLT4gRG9uJ3Qgc2VuZCBFU0MgIHdoZW4gTWV0YSBtb2RpZmllcyBhIGtleS5cbi8vICAgICAoVGhpcyBkaXNhYmxlcyB0aGUgbWV0YVNlbmRzRXNjYXBlIHJlc291cmNlKS5cbi8vICAgICBQcyA9IDEgMCAzIDcgIC0+IFNlbmQgVlQyMjAgUmVtb3ZlIGZyb20gdGhlIGVkaXRpbmcta2V5cGFkXG4vLyAgICAgRGVsZXRlIGtleS5cbi8vICAgICBQcyA9IDEgMCAzIDkgIC0+IERvbid0IHNlbmQgRVNDICB3aGVuIEFsdCBtb2RpZmllcyBhIGtleS5cbi8vICAgICAoVGhpcyBkaXNhYmxlcyB0aGUgYWx0U2VuZHNFc2NhcGUgcmVzb3VyY2UpLlxuLy8gICAgIFBzID0gMSAwIDQgMCAgLT4gRG8gbm90IGtlZXAgc2VsZWN0aW9uIHdoZW4gbm90IGhpZ2hsaWdodGVkLlxuLy8gICAgIChUaGlzIGRpc2FibGVzIHRoZSBrZWVwU2VsZWN0aW9uIHJlc291cmNlKS5cbi8vICAgICBQcyA9IDEgMCA0IDEgIC0+IFVzZSB0aGUgUFJJTUFSWSBzZWxlY3Rpb24uICAoVGhpcyBkaXNhYmxlc1xuLy8gICAgIHRoZSBzZWxlY3RUb0NsaXBib2FyZCByZXNvdXJjZSkuXG4vLyAgICAgUHMgPSAxIDAgNCAyICAtPiBEaXNhYmxlIFVyZ2VuY3kgd2luZG93IG1hbmFnZXIgaGludCB3aGVuXG4vLyAgICAgQ29udHJvbC1HIGlzIHJlY2VpdmVkLiAgKFRoaXMgZGlzYWJsZXMgdGhlIGJlbGxJc1VyZ2VudFxuLy8gICAgIHJlc291cmNlKS5cbi8vICAgICBQcyA9IDEgMCA0IDMgIC0+IERpc2FibGUgcmFpc2luZyBvZiB0aGUgd2luZG93IHdoZW4gQ29udHJvbC1cbi8vICAgICBHIGlzIHJlY2VpdmVkLiAgKFRoaXMgZGlzYWJsZXMgdGhlIHBvcE9uQmVsbCByZXNvdXJjZSkuXG4vLyAgICAgUHMgPSAxIDAgNCA3ICAtPiBVc2UgTm9ybWFsIFNjcmVlbiBCdWZmZXIsIGNsZWFyaW5nIHNjcmVlblxuLy8gICAgIGZpcnN0IGlmIGluIHRoZSBBbHRlcm5hdGUgU2NyZWVuLiAgKFRoaXMgbWF5IGJlIGRpc2FibGVkIGJ5XG4vLyAgICAgdGhlIHRpdGVJbmhpYml0IHJlc291cmNlKS5cbi8vICAgICBQcyA9IDEgMCA0IDggIC0+IFJlc3RvcmUgY3Vyc29yIGFzIGluIERFQ1JDLiAgKFRoaXMgbWF5IGJlXG4vLyAgICAgZGlzYWJsZWQgYnkgdGhlIHRpdGVJbmhpYml0IHJlc291cmNlKS5cbi8vICAgICBQcyA9IDEgMCA0IDkgIC0+IFVzZSBOb3JtYWwgU2NyZWVuIEJ1ZmZlciBhbmQgcmVzdG9yZSBjdXJzb3Jcbi8vICAgICBhcyBpbiBERUNSQy4gIChUaGlzIG1heSBiZSBkaXNhYmxlZCBieSB0aGUgdGl0ZUluaGliaXRcbi8vICAgICByZXNvdXJjZSkuICBUaGlzIGNvbWJpbmVzIHRoZSBlZmZlY3RzIG9mIHRoZSAxIDAgNCA3ICBhbmQgMSAwXG4vLyAgICAgNCA4ICBtb2Rlcy4gIFVzZSB0aGlzIHdpdGggdGVybWluZm8tYmFzZWQgYXBwbGljYXRpb25zIHJhdGhlclxuLy8gICAgIHRoYW4gdGhlIDQgNyAgbW9kZS5cbi8vICAgICBQcyA9IDEgMCA1IDAgIC0+IFJlc2V0IHRlcm1pbmZvL3Rlcm1jYXAgZnVuY3Rpb24ta2V5IG1vZGUuXG4vLyAgICAgUHMgPSAxIDAgNSAxICAtPiBSZXNldCBTdW4gZnVuY3Rpb24ta2V5IG1vZGUuXG4vLyAgICAgUHMgPSAxIDAgNSAyICAtPiBSZXNldCBIUCBmdW5jdGlvbi1rZXkgbW9kZS5cbi8vICAgICBQcyA9IDEgMCA1IDMgIC0+IFJlc2V0IFNDTyBmdW5jdGlvbi1rZXkgbW9kZS5cbi8vICAgICBQcyA9IDEgMCA2IDAgIC0+IFJlc2V0IGxlZ2FjeSBrZXlib2FyZCBlbXVsYXRpb24gKFgxMVI2KS5cbi8vICAgICBQcyA9IDEgMCA2IDEgIC0+IFJlc2V0IGtleWJvYXJkIGVtdWxhdGlvbiB0byBTdW4vUEMgc3R5bGUuXG4vLyAgICAgUHMgPSAyIDAgMCA0ICAtPiBSZXNldCBicmFja2V0ZWQgcGFzdGUgbW9kZS5cblRlcm1pbmFsLnByb3RvdHlwZS5yZXNldE1vZGUgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgaWYgKHR5cGVvZiBwYXJhbXMgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIGwgPSBwYXJhbXMubGVuZ3RoXG4gICAgICAsIGkgPSAwO1xuXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRoaXMucmVzZXRNb2RlKHBhcmFtc1tpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCF0aGlzLnByZWZpeCkge1xuICAgIHN3aXRjaCAocGFyYW1zKSB7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIHRoaXMuaW5zZXJ0TW9kZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjA6XG4gICAgICAgIC8vdGhpcy5jb252ZXJ0RW9sID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0aGlzLnByZWZpeCA9PT0gJz8nKSB7XG4gICAgc3dpdGNoIChwYXJhbXMpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdGhpcy5hcHBsaWNhdGlvbkN1cnNvciA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaWYgKHRoaXMuY29scyA9PT0gMTMyICYmIHRoaXMuc2F2ZWRDb2xzKSB7XG4gICAgICAgICAgdGhpcy5yZXNpemUodGhpcy5zYXZlZENvbHMsIHRoaXMucm93cyk7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHRoaXMuc2F2ZWRDb2xzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgdGhpcy5vcmlnaW5Nb2RlID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA3OlxuICAgICAgICB0aGlzLndyYXBhcm91bmRNb2RlID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMjpcbiAgICAgICAgLy8gdGhpcy5jdXJzb3JCbGluayA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNjY6XG4gICAgICAgIHRoaXMubG9nKCdTd2l0Y2hpbmcgYmFjayB0byBub3JtYWwga2V5cGFkLicpO1xuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uS2V5cGFkID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA5OiAvLyBYMTAgTW91c2VcbiAgICAgIGNhc2UgMTAwMDogLy8gdnQyMDAgbW91c2VcbiAgICAgIGNhc2UgMTAwMjogLy8gYnV0dG9uIGV2ZW50IG1vdXNlXG4gICAgICBjYXNlIDEwMDM6IC8vIGFueSBldmVudCBtb3VzZVxuICAgICAgICB0aGlzLngxME1vdXNlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudnQyMDBNb3VzZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vcm1hbE1vdXNlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubW91c2VFdmVudHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmN1cnNvciA9ICcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTAwNDogLy8gc2VuZCBmb2N1c2luL2ZvY3Vzb3V0IGV2ZW50c1xuICAgICAgICB0aGlzLnNlbmRGb2N1cyA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTAwNTogLy8gdXRmOCBleHQgbW9kZSBtb3VzZVxuICAgICAgICB0aGlzLnV0Zk1vdXNlID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMDA2OiAvLyBzZ3IgZXh0IG1vZGUgbW91c2VcbiAgICAgICAgdGhpcy5zZ3JNb3VzZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTAxNTogLy8gdXJ4dnQgZXh0IG1vZGUgbW91c2VcbiAgICAgICAgdGhpcy51cnh2dE1vdXNlID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyNTogLy8gaGlkZSBjdXJzb3JcbiAgICAgICAgdGhpcy5jdXJzb3JIaWRkZW4gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTA0OTogLy8gYWx0IHNjcmVlbiBidWZmZXIgY3Vyc29yXG4gICAgICAgIDsgLy8gRkFMTC1USFJPVUdIXG4gICAgICBjYXNlIDQ3OiAvLyBub3JtYWwgc2NyZWVuIGJ1ZmZlclxuICAgICAgY2FzZSAxMDQ3OiAvLyBub3JtYWwgc2NyZWVuIGJ1ZmZlciAtIGNsZWFyaW5nIGl0IGZpcnN0XG4gICAgICAgIGlmICh0aGlzLm5vcm1hbCkge1xuICAgICAgICAgIHRoaXMubGluZXMgPSB0aGlzLm5vcm1hbC5saW5lcztcbiAgICAgICAgICB0aGlzLnliYXNlID0gdGhpcy5ub3JtYWwueWJhc2U7XG4gICAgICAgICAgdGhpcy55ZGlzcCA9IHRoaXMubm9ybWFsLnlkaXNwO1xuICAgICAgICAgIHRoaXMueCA9IHRoaXMubm9ybWFsLng7XG4gICAgICAgICAgdGhpcy55ID0gdGhpcy5ub3JtYWwueTtcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvcCA9IHRoaXMubm9ybWFsLnNjcm9sbFRvcDtcbiAgICAgICAgICB0aGlzLnNjcm9sbEJvdHRvbSA9IHRoaXMubm9ybWFsLnNjcm9sbEJvdHRvbTtcbiAgICAgICAgICB0aGlzLnRhYnMgPSB0aGlzLm5vcm1hbC50YWJzO1xuICAgICAgICAgIHRoaXMubm9ybWFsID0gbnVsbDtcbiAgICAgICAgICAvLyBpZiAocGFyYW1zID09PSAxMDQ5KSB7XG4gICAgICAgICAgLy8gICB0aGlzLnggPSB0aGlzLnNhdmVkWDtcbiAgICAgICAgICAvLyAgIHRoaXMueSA9IHRoaXMuc2F2ZWRZO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgICB0aGlzLnJlZnJlc2goMCwgdGhpcy5yb3dzIC0gMSk7XG4gICAgICAgICAgdGhpcy5zaG93Q3Vyc29yKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59O1xuXG4vLyBDU0kgUHMgOyBQcyByXG4vLyAgIFNldCBTY3JvbGxpbmcgUmVnaW9uIFt0b3A7Ym90dG9tXSAoZGVmYXVsdCA9IGZ1bGwgc2l6ZSBvZiB3aW4tXG4vLyAgIGRvdykgKERFQ1NUQk0pLlxuLy8gQ1NJID8gUG0gclxuVGVybWluYWwucHJvdG90eXBlLnNldFNjcm9sbFJlZ2lvbiA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICBpZiAodGhpcy5wcmVmaXgpIHJldHVybjtcbiAgdGhpcy5zY3JvbGxUb3AgPSAocGFyYW1zWzBdIHx8IDEpIC0gMTtcbiAgdGhpcy5zY3JvbGxCb3R0b20gPSAocGFyYW1zWzFdIHx8IHRoaXMucm93cykgLSAxO1xuICB0aGlzLnggPSAwO1xuICB0aGlzLnkgPSAwO1xufTtcblxuLy8gQ1NJIHNcbi8vICAgU2F2ZSBjdXJzb3IgKEFOU0kuU1lTKS5cblRlcm1pbmFsLnByb3RvdHlwZS5zYXZlQ3Vyc29yID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gIHRoaXMuc2F2ZWRYID0gdGhpcy54O1xuICB0aGlzLnNhdmVkWSA9IHRoaXMueTtcbn07XG5cbi8vIENTSSB1XG4vLyAgIFJlc3RvcmUgY3Vyc29yIChBTlNJLlNZUykuXG5UZXJtaW5hbC5wcm90b3R5cGUucmVzdG9yZUN1cnNvciA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICB0aGlzLnggPSB0aGlzLnNhdmVkWCB8fCAwO1xuICB0aGlzLnkgPSB0aGlzLnNhdmVkWSB8fCAwO1xufTtcblxuLyoqXG4gKiBMZXNzZXIgVXNlZFxuICovXG5cbi8vIENTSSBQcyBJXG4vLyAgIEN1cnNvciBGb3J3YXJkIFRhYnVsYXRpb24gUHMgdGFiIHN0b3BzIChkZWZhdWx0ID0gMSkgKENIVCkuXG5UZXJtaW5hbC5wcm90b3R5cGUuY3Vyc29yRm9yd2FyZFRhYiA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICB2YXIgcGFyYW0gPSBwYXJhbXNbMF0gfHwgMTtcbiAgd2hpbGUgKHBhcmFtLS0pIHtcbiAgICB0aGlzLnggPSB0aGlzLm5leHRTdG9wKCk7XG4gIH1cbn07XG5cbi8vIENTSSBQcyBTICBTY3JvbGwgdXAgUHMgbGluZXMgKGRlZmF1bHQgPSAxKSAoU1UpLlxuVGVybWluYWwucHJvdG90eXBlLnNjcm9sbFVwID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gIHZhciBwYXJhbSA9IHBhcmFtc1swXSB8fCAxO1xuICB3aGlsZSAocGFyYW0tLSkge1xuICAgIHRoaXMubGluZXMuc3BsaWNlKHRoaXMueWJhc2UgKyB0aGlzLnNjcm9sbFRvcCwgMSk7XG4gICAgdGhpcy5saW5lcy5zcGxpY2UodGhpcy55YmFzZSArIHRoaXMuc2Nyb2xsQm90dG9tLCAwLCB0aGlzLmJsYW5rTGluZSgpKTtcbiAgfVxuICAvLyB0aGlzLm1heFJhbmdlKCk7XG4gIHRoaXMudXBkYXRlUmFuZ2UodGhpcy5zY3JvbGxUb3ApO1xuICB0aGlzLnVwZGF0ZVJhbmdlKHRoaXMuc2Nyb2xsQm90dG9tKTtcbn07XG5cbi8vIENTSSBQcyBUICBTY3JvbGwgZG93biBQcyBsaW5lcyAoZGVmYXVsdCA9IDEpIChTRCkuXG5UZXJtaW5hbC5wcm90b3R5cGUuc2Nyb2xsRG93biA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICB2YXIgcGFyYW0gPSBwYXJhbXNbMF0gfHwgMTtcbiAgd2hpbGUgKHBhcmFtLS0pIHtcbiAgICB0aGlzLmxpbmVzLnNwbGljZSh0aGlzLnliYXNlICsgdGhpcy5zY3JvbGxCb3R0b20sIDEpO1xuICAgIHRoaXMubGluZXMuc3BsaWNlKHRoaXMueWJhc2UgKyB0aGlzLnNjcm9sbFRvcCwgMCwgdGhpcy5ibGFua0xpbmUoKSk7XG4gIH1cbiAgLy8gdGhpcy5tYXhSYW5nZSgpO1xuICB0aGlzLnVwZGF0ZVJhbmdlKHRoaXMuc2Nyb2xsVG9wKTtcbiAgdGhpcy51cGRhdGVSYW5nZSh0aGlzLnNjcm9sbEJvdHRvbSk7XG59O1xuXG4vLyBDU0kgUHMgOyBQcyA7IFBzIDsgUHMgOyBQcyBUXG4vLyAgIEluaXRpYXRlIGhpZ2hsaWdodCBtb3VzZSB0cmFja2luZy4gIFBhcmFtZXRlcnMgYXJlXG4vLyAgIFtmdW5jO3N0YXJ0eDtzdGFydHk7Zmlyc3Ryb3c7bGFzdHJvd10uICBTZWUgdGhlIHNlY3Rpb24gTW91c2Vcbi8vICAgVHJhY2tpbmcuXG5UZXJtaW5hbC5wcm90b3R5cGUuaW5pdE1vdXNlVHJhY2tpbmcgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgLy8gUmVsZXZhbnQ6IERFQ1NFVCAxMDAxXG59O1xuXG4vLyBDU0kgPiBQczsgUHMgVFxuLy8gICBSZXNldCBvbmUgb3IgbW9yZSBmZWF0dXJlcyBvZiB0aGUgdGl0bGUgbW9kZXMgdG8gdGhlIGRlZmF1bHRcbi8vICAgdmFsdWUuICBOb3JtYWxseSwgXCJyZXNldFwiIGRpc2FibGVzIHRoZSBmZWF0dXJlLiAgSXQgaXMgcG9zc2ktXG4vLyAgIGJsZSB0byBkaXNhYmxlIHRoZSBhYmlsaXR5IHRvIHJlc2V0IGZlYXR1cmVzIGJ5IGNvbXBpbGluZyBhXG4vLyAgIGRpZmZlcmVudCBkZWZhdWx0IGZvciB0aGUgdGl0bGUgbW9kZXMgaW50byB4dGVybS5cbi8vICAgICBQcyA9IDAgIC0+IERvIG5vdCBzZXQgd2luZG93L2ljb24gbGFiZWxzIHVzaW5nIGhleGFkZWNpbWFsLlxuLy8gICAgIFBzID0gMSAgLT4gRG8gbm90IHF1ZXJ5IHdpbmRvdy9pY29uIGxhYmVscyB1c2luZyBoZXhhZGVjaS1cbi8vICAgICBtYWwuXG4vLyAgICAgUHMgPSAyICAtPiBEbyBub3Qgc2V0IHdpbmRvdy9pY29uIGxhYmVscyB1c2luZyBVVEYtOC5cbi8vICAgICBQcyA9IDMgIC0+IERvIG5vdCBxdWVyeSB3aW5kb3cvaWNvbiBsYWJlbHMgdXNpbmcgVVRGLTguXG4vLyAgIChTZWUgZGlzY3Vzc2lvbiBvZiBcIlRpdGxlIE1vZGVzXCIpLlxuVGVybWluYWwucHJvdG90eXBlLnJlc2V0VGl0bGVNb2RlcyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICA7XG59O1xuXG4vLyBDU0kgUHMgWiAgQ3Vyc29yIEJhY2t3YXJkIFRhYnVsYXRpb24gUHMgdGFiIHN0b3BzIChkZWZhdWx0ID0gMSkgKENCVCkuXG5UZXJtaW5hbC5wcm90b3R5cGUuY3Vyc29yQmFja3dhcmRUYWIgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgdmFyIHBhcmFtID0gcGFyYW1zWzBdIHx8IDE7XG4gIHdoaWxlIChwYXJhbS0tKSB7XG4gICAgdGhpcy54ID0gdGhpcy5wcmV2U3RvcCgpO1xuICB9XG59O1xuXG4vLyBDU0kgUHMgYiAgUmVwZWF0IHRoZSBwcmVjZWRpbmcgZ3JhcGhpYyBjaGFyYWN0ZXIgUHMgdGltZXMgKFJFUCkuXG5UZXJtaW5hbC5wcm90b3R5cGUucmVwZWF0UHJlY2VkaW5nQ2hhcmFjdGVyID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gIHZhciBwYXJhbSA9IHBhcmFtc1swXSB8fCAxXG4gICAgLCBsaW5lID0gdGhpcy5saW5lc1t0aGlzLnliYXNlICsgdGhpcy55XVxuICAgICwgY2ggPSBsaW5lW3RoaXMueCAtIDFdIHx8IFt0aGlzLmRlZkF0dHIsICcgJ107XG5cbiAgd2hpbGUgKHBhcmFtLS0pIGxpbmVbdGhpcy54KytdID0gY2g7XG59O1xuXG4vLyBDU0kgUHMgZyAgVGFiIENsZWFyIChUQkMpLlxuLy8gICAgIFBzID0gMCAgLT4gQ2xlYXIgQ3VycmVudCBDb2x1bW4gKGRlZmF1bHQpLlxuLy8gICAgIFBzID0gMyAgLT4gQ2xlYXIgQWxsLlxuLy8gUG90ZW50aWFsbHk6XG4vLyAgIFBzID0gMiAgLT4gQ2xlYXIgU3RvcHMgb24gTGluZS5cbi8vICAgaHR0cDovL3Z0MTAwLm5ldC9hbm5hcmJvci9hYWEtdWcvc2VjdGlvbjYuaHRtbFxuVGVybWluYWwucHJvdG90eXBlLnRhYkNsZWFyID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gIHZhciBwYXJhbSA9IHBhcmFtc1swXTtcbiAgaWYgKHBhcmFtIDw9IDApIHtcbiAgICBkZWxldGUgdGhpcy50YWJzW3RoaXMueF07XG4gIH0gZWxzZSBpZiAocGFyYW0gPT09IDMpIHtcbiAgICB0aGlzLnRhYnMgPSB7fTtcbiAgfVxufTtcblxuLy8gQ1NJIFBtIGkgIE1lZGlhIENvcHkgKE1DKS5cbi8vICAgICBQcyA9IDAgIC0+IFByaW50IHNjcmVlbiAoZGVmYXVsdCkuXG4vLyAgICAgUHMgPSA0ICAtPiBUdXJuIG9mZiBwcmludGVyIGNvbnRyb2xsZXIgbW9kZS5cbi8vICAgICBQcyA9IDUgIC0+IFR1cm4gb24gcHJpbnRlciBjb250cm9sbGVyIG1vZGUuXG4vLyBDU0kgPyBQbSBpXG4vLyAgIE1lZGlhIENvcHkgKE1DLCBERUMtc3BlY2lmaWMpLlxuLy8gICAgIFBzID0gMSAgLT4gUHJpbnQgbGluZSBjb250YWluaW5nIGN1cnNvci5cbi8vICAgICBQcyA9IDQgIC0+IFR1cm4gb2ZmIGF1dG9wcmludCBtb2RlLlxuLy8gICAgIFBzID0gNSAgLT4gVHVybiBvbiBhdXRvcHJpbnQgbW9kZS5cbi8vICAgICBQcyA9IDEgIDAgIC0+IFByaW50IGNvbXBvc2VkIGRpc3BsYXksIGlnbm9yZXMgREVDUEVYLlxuLy8gICAgIFBzID0gMSAgMSAgLT4gUHJpbnQgYWxsIHBhZ2VzLlxuVGVybWluYWwucHJvdG90eXBlLm1lZGlhQ29weSA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICA7XG59O1xuXG4vLyBDU0kgPiBQczsgUHMgbVxuLy8gICBTZXQgb3IgcmVzZXQgcmVzb3VyY2UtdmFsdWVzIHVzZWQgYnkgeHRlcm0gdG8gZGVjaWRlIHdoZXRoZXJcbi8vICAgdG8gY29uc3RydWN0IGVzY2FwZSBzZXF1ZW5jZXMgaG9sZGluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGVcbi8vICAgbW9kaWZpZXJzIHByZXNzZWQgd2l0aCBhIGdpdmVuIGtleS4gIFRoZSBmaXJzdCBwYXJhbWV0ZXIgaWRlbi1cbi8vICAgdGlmaWVzIHRoZSByZXNvdXJjZSB0byBzZXQvcmVzZXQuICBUaGUgc2Vjb25kIHBhcmFtZXRlciBpcyB0aGVcbi8vICAgdmFsdWUgdG8gYXNzaWduIHRvIHRoZSByZXNvdXJjZS4gIElmIHRoZSBzZWNvbmQgcGFyYW1ldGVyIGlzXG4vLyAgIG9taXR0ZWQsIHRoZSByZXNvdXJjZSBpcyByZXNldCB0byBpdHMgaW5pdGlhbCB2YWx1ZS5cbi8vICAgICBQcyA9IDEgIC0+IG1vZGlmeUN1cnNvcktleXMuXG4vLyAgICAgUHMgPSAyICAtPiBtb2RpZnlGdW5jdGlvbktleXMuXG4vLyAgICAgUHMgPSA0ICAtPiBtb2RpZnlPdGhlcktleXMuXG4vLyAgIElmIG5vIHBhcmFtZXRlcnMgYXJlIGdpdmVuLCBhbGwgcmVzb3VyY2VzIGFyZSByZXNldCB0byB0aGVpclxuLy8gICBpbml0aWFsIHZhbHVlcy5cblRlcm1pbmFsLnByb3RvdHlwZS5zZXRSZXNvdXJjZXMgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgO1xufTtcblxuLy8gQ1NJID4gUHMgblxuLy8gICBEaXNhYmxlIG1vZGlmaWVycyB3aGljaCBtYXkgYmUgZW5hYmxlZCB2aWEgdGhlIENTSSA+IFBzOyBQcyBtXG4vLyAgIHNlcXVlbmNlLiAgVGhpcyBjb3JyZXNwb25kcyB0byBhIHJlc291cmNlIHZhbHVlIG9mIFwiLTFcIiwgd2hpY2hcbi8vICAgY2Fubm90IGJlIHNldCB3aXRoIHRoZSBvdGhlciBzZXF1ZW5jZS4gIFRoZSBwYXJhbWV0ZXIgaWRlbnRpLVxuLy8gICBmaWVzIHRoZSByZXNvdXJjZSB0byBiZSBkaXNhYmxlZDpcbi8vICAgICBQcyA9IDEgIC0+IG1vZGlmeUN1cnNvcktleXMuXG4vLyAgICAgUHMgPSAyICAtPiBtb2RpZnlGdW5jdGlvbktleXMuXG4vLyAgICAgUHMgPSA0ICAtPiBtb2RpZnlPdGhlcktleXMuXG4vLyAgIElmIHRoZSBwYXJhbWV0ZXIgaXMgb21pdHRlZCwgbW9kaWZ5RnVuY3Rpb25LZXlzIGlzIGRpc2FibGVkLlxuLy8gICBXaGVuIG1vZGlmeUZ1bmN0aW9uS2V5cyBpcyBkaXNhYmxlZCwgeHRlcm0gdXNlcyB0aGUgbW9kaWZpZXJcbi8vICAga2V5cyB0byBtYWtlIGFuIGV4dGVuZGVkIHNlcXVlbmNlIG9mIGZ1bmN0aW9ucyByYXRoZXIgdGhhblxuLy8gICBhZGRpbmcgYSBwYXJhbWV0ZXIgdG8gZWFjaCBmdW5jdGlvbiBrZXkgdG8gZGVub3RlIHRoZSBtb2RpLVxuLy8gICBmaWVycy5cblRlcm1pbmFsLnByb3RvdHlwZS5kaXNhYmxlTW9kaWZpZXJzID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gIDtcbn07XG5cbi8vIENTSSA+IFBzIHBcbi8vICAgU2V0IHJlc291cmNlIHZhbHVlIHBvaW50ZXJNb2RlLiAgVGhpcyBpcyB1c2VkIGJ5IHh0ZXJtIHRvXG4vLyAgIGRlY2lkZSB3aGV0aGVyIHRvIGhpZGUgdGhlIHBvaW50ZXIgY3Vyc29yIGFzIHRoZSB1c2VyIHR5cGVzLlxuLy8gICBWYWxpZCB2YWx1ZXMgZm9yIHRoZSBwYXJhbWV0ZXI6XG4vLyAgICAgUHMgPSAwICAtPiBuZXZlciBoaWRlIHRoZSBwb2ludGVyLlxuLy8gICAgIFBzID0gMSAgLT4gaGlkZSBpZiB0aGUgbW91c2UgdHJhY2tpbmcgbW9kZSBpcyBub3QgZW5hYmxlZC5cbi8vICAgICBQcyA9IDIgIC0+IGFsd2F5cyBoaWRlIHRoZSBwb2ludGVyLiAgSWYgbm8gcGFyYW1ldGVyIGlzXG4vLyAgICAgZ2l2ZW4sIHh0ZXJtIHVzZXMgdGhlIGRlZmF1bHQsIHdoaWNoIGlzIDEgLlxuVGVybWluYWwucHJvdG90eXBlLnNldFBvaW50ZXJNb2RlID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gIDtcbn07XG5cbi8vIENTSSAhIHAgICBTb2Z0IHRlcm1pbmFsIHJlc2V0IChERUNTVFIpLlxuLy8gaHR0cDovL3Z0MTAwLm5ldC9kb2NzL3Z0MjIwLXJtL3RhYmxlNC0xMC5odG1sXG5UZXJtaW5hbC5wcm90b3R5cGUuc29mdFJlc2V0ID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gIHRoaXMuY3Vyc29ySGlkZGVuID0gZmFsc2U7XG4gIHRoaXMuaW5zZXJ0TW9kZSA9IGZhbHNlO1xuICB0aGlzLm9yaWdpbk1vZGUgPSBmYWxzZTtcbiAgdGhpcy53cmFwYXJvdW5kTW9kZSA9IGZhbHNlOyAvLyBhdXRvd3JhcFxuICB0aGlzLmFwcGxpY2F0aW9uS2V5cGFkID0gZmFsc2U7IC8vID9cbiAgdGhpcy5hcHBsaWNhdGlvbkN1cnNvciA9IGZhbHNlO1xuICB0aGlzLnNjcm9sbFRvcCA9IDA7XG4gIHRoaXMuc2Nyb2xsQm90dG9tID0gdGhpcy5yb3dzIC0gMTtcbiAgdGhpcy5jdXJBdHRyID0gdGhpcy5kZWZBdHRyO1xuICB0aGlzLnggPSB0aGlzLnkgPSAwOyAvLyA/XG4gIHRoaXMuY2hhcnNldCA9IG51bGw7XG4gIHRoaXMuZ2xldmVsID0gMDsgLy8gPz9cbiAgdGhpcy5jaGFyc2V0cyA9IFtudWxsXTsgLy8gPz9cbn07XG5cbi8vIENTSSBQcyQgcFxuLy8gICBSZXF1ZXN0IEFOU0kgbW9kZSAoREVDUlFNKS4gIEZvciBWVDMwMCBhbmQgdXAsIHJlcGx5IGlzXG4vLyAgICAgQ1NJIFBzOyBQbSQgeVxuLy8gICB3aGVyZSBQcyBpcyB0aGUgbW9kZSBudW1iZXIgYXMgaW4gUk0sIGFuZCBQbSBpcyB0aGUgbW9kZVxuLy8gICB2YWx1ZTpcbi8vICAgICAwIC0gbm90IHJlY29nbml6ZWRcbi8vICAgICAxIC0gc2V0XG4vLyAgICAgMiAtIHJlc2V0XG4vLyAgICAgMyAtIHBlcm1hbmVudGx5IHNldFxuLy8gICAgIDQgLSBwZXJtYW5lbnRseSByZXNldFxuVGVybWluYWwucHJvdG90eXBlLnJlcXVlc3RBbnNpTW9kZSA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICA7XG59O1xuXG4vLyBDU0kgPyBQcyQgcFxuLy8gICBSZXF1ZXN0IERFQyBwcml2YXRlIG1vZGUgKERFQ1JRTSkuICBGb3IgVlQzMDAgYW5kIHVwLCByZXBseSBpc1xuLy8gICAgIENTSSA/IFBzOyBQbSQgcFxuLy8gICB3aGVyZSBQcyBpcyB0aGUgbW9kZSBudW1iZXIgYXMgaW4gREVDU0VULCBQbSBpcyB0aGUgbW9kZSB2YWx1ZVxuLy8gICBhcyBpbiB0aGUgQU5TSSBERUNSUU0uXG5UZXJtaW5hbC5wcm90b3R5cGUucmVxdWVzdFByaXZhdGVNb2RlID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gIDtcbn07XG5cbi8vIENTSSBQcyA7IFBzIFwiIHBcbi8vICAgU2V0IGNvbmZvcm1hbmNlIGxldmVsIChERUNTQ0wpLiAgVmFsaWQgdmFsdWVzIGZvciB0aGUgZmlyc3Rcbi8vICAgcGFyYW1ldGVyOlxuLy8gICAgIFBzID0gNiAxICAtPiBWVDEwMC5cbi8vICAgICBQcyA9IDYgMiAgLT4gVlQyMDAuXG4vLyAgICAgUHMgPSA2IDMgIC0+IFZUMzAwLlxuLy8gICBWYWxpZCB2YWx1ZXMgZm9yIHRoZSBzZWNvbmQgcGFyYW1ldGVyOlxuLy8gICAgIFBzID0gMCAgLT4gOC1iaXQgY29udHJvbHMuXG4vLyAgICAgUHMgPSAxICAtPiA3LWJpdCBjb250cm9scyAoYWx3YXlzIHNldCBmb3IgVlQxMDApLlxuLy8gICAgIFBzID0gMiAgLT4gOC1iaXQgY29udHJvbHMuXG5UZXJtaW5hbC5wcm90b3R5cGUuc2V0Q29uZm9ybWFuY2VMZXZlbCA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICA7XG59O1xuXG4vLyBDU0kgUHMgcSAgTG9hZCBMRURzIChERUNMTCkuXG4vLyAgICAgUHMgPSAwICAtPiBDbGVhciBhbGwgTEVEUyAoZGVmYXVsdCkuXG4vLyAgICAgUHMgPSAxICAtPiBMaWdodCBOdW0gTG9jay5cbi8vICAgICBQcyA9IDIgIC0+IExpZ2h0IENhcHMgTG9jay5cbi8vICAgICBQcyA9IDMgIC0+IExpZ2h0IFNjcm9sbCBMb2NrLlxuLy8gICAgIFBzID0gMiAgMSAgLT4gRXh0aW5ndWlzaCBOdW0gTG9jay5cbi8vICAgICBQcyA9IDIgIDIgIC0+IEV4dGluZ3Vpc2ggQ2FwcyBMb2NrLlxuLy8gICAgIFBzID0gMiAgMyAgLT4gRXh0aW5ndWlzaCBTY3JvbGwgTG9jay5cblRlcm1pbmFsLnByb3RvdHlwZS5sb2FkTEVEcyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICA7XG59O1xuXG4vLyBDU0kgUHMgU1AgcVxuLy8gICBTZXQgY3Vyc29yIHN0eWxlIChERUNTQ1VTUiwgVlQ1MjApLlxuLy8gICAgIFBzID0gMCAgLT4gYmxpbmtpbmcgYmxvY2suXG4vLyAgICAgUHMgPSAxICAtPiBibGlua2luZyBibG9jayAoZGVmYXVsdCkuXG4vLyAgICAgUHMgPSAyICAtPiBzdGVhZHkgYmxvY2suXG4vLyAgICAgUHMgPSAzICAtPiBibGlua2luZyB1bmRlcmxpbmUuXG4vLyAgICAgUHMgPSA0ICAtPiBzdGVhZHkgdW5kZXJsaW5lLlxuVGVybWluYWwucHJvdG90eXBlLnNldEN1cnNvclN0eWxlID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gIDtcbn07XG5cbi8vIENTSSBQcyBcIiBxXG4vLyAgIFNlbGVjdCBjaGFyYWN0ZXIgcHJvdGVjdGlvbiBhdHRyaWJ1dGUgKERFQ1NDQSkuICBWYWxpZCB2YWx1ZXNcbi8vICAgZm9yIHRoZSBwYXJhbWV0ZXI6XG4vLyAgICAgUHMgPSAwICAtPiBERUNTRUQgYW5kIERFQ1NFTCBjYW4gZXJhc2UgKGRlZmF1bHQpLlxuLy8gICAgIFBzID0gMSAgLT4gREVDU0VEIGFuZCBERUNTRUwgY2Fubm90IGVyYXNlLlxuLy8gICAgIFBzID0gMiAgLT4gREVDU0VEIGFuZCBERUNTRUwgY2FuIGVyYXNlLlxuVGVybWluYWwucHJvdG90eXBlLnNldENoYXJQcm90ZWN0aW9uQXR0ciA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICA7XG59O1xuXG4vLyBDU0kgPyBQbSByXG4vLyAgIFJlc3RvcmUgREVDIFByaXZhdGUgTW9kZSBWYWx1ZXMuICBUaGUgdmFsdWUgb2YgUHMgcHJldmlvdXNseVxuLy8gICBzYXZlZCBpcyByZXN0b3JlZC4gIFBzIHZhbHVlcyBhcmUgdGhlIHNhbWUgYXMgZm9yIERFQ1NFVC5cblRlcm1pbmFsLnByb3RvdHlwZS5yZXN0b3JlUHJpdmF0ZVZhbHVlcyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICA7XG59O1xuXG4vLyBDU0kgUHQ7IFBsOyBQYjsgUHI7IFBzJCByXG4vLyAgIENoYW5nZSBBdHRyaWJ1dGVzIGluIFJlY3Rhbmd1bGFyIEFyZWEgKERFQ0NBUkEpLCBWVDQwMCBhbmQgdXAuXG4vLyAgICAgUHQ7IFBsOyBQYjsgUHIgZGVub3RlcyB0aGUgcmVjdGFuZ2xlLlxuLy8gICAgIFBzIGRlbm90ZXMgdGhlIFNHUiBhdHRyaWJ1dGVzIHRvIGNoYW5nZTogMCwgMSwgNCwgNSwgNy5cbi8vIE5PVEU6IHh0ZXJtIGRvZXNuJ3QgZW5hYmxlIHRoaXMgY29kZSBieSBkZWZhdWx0LlxuVGVybWluYWwucHJvdG90eXBlLnNldEF0dHJJblJlY3RhbmdsZSA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICB2YXIgdCA9IHBhcmFtc1swXVxuICAgICwgbCA9IHBhcmFtc1sxXVxuICAgICwgYiA9IHBhcmFtc1syXVxuICAgICwgciA9IHBhcmFtc1szXVxuICAgICwgYXR0ciA9IHBhcmFtc1s0XTtcblxuICB2YXIgbGluZVxuICAgICwgaTtcblxuICBmb3IgKDsgdCA8IGIgKyAxOyB0KyspIHtcbiAgICBsaW5lID0gdGhpcy5saW5lc1t0aGlzLnliYXNlICsgdF07XG4gICAgZm9yIChpID0gbDsgaSA8IHI7IGkrKykge1xuICAgICAgbGluZVtpXSA9IFthdHRyLCBsaW5lW2ldWzFdXTtcbiAgICB9XG4gIH1cblxuICAvLyB0aGlzLm1heFJhbmdlKCk7XG4gIHRoaXMudXBkYXRlUmFuZ2UocGFyYW1zWzBdKTtcbiAgdGhpcy51cGRhdGVSYW5nZShwYXJhbXNbMl0pO1xufTtcblxuLy8gQ1NJID8gUG0gc1xuLy8gICBTYXZlIERFQyBQcml2YXRlIE1vZGUgVmFsdWVzLiAgUHMgdmFsdWVzIGFyZSB0aGUgc2FtZSBhcyBmb3Jcbi8vICAgREVDU0VULlxuVGVybWluYWwucHJvdG90eXBlLnNhdmVQcml2YXRlVmFsdWVzID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gIDtcbn07XG5cbi8vIENTSSBQcyA7IFBzIDsgUHMgdFxuLy8gICBXaW5kb3cgbWFuaXB1bGF0aW9uIChmcm9tIGR0dGVybSwgYXMgd2VsbCBhcyBleHRlbnNpb25zKS5cbi8vICAgVGhlc2UgY29udHJvbHMgbWF5IGJlIGRpc2FibGVkIHVzaW5nIHRoZSBhbGxvd1dpbmRvd09wc1xuLy8gICByZXNvdXJjZS4gIFZhbGlkIHZhbHVlcyBmb3IgdGhlIGZpcnN0IChhbmQgYW55IGFkZGl0aW9uYWxcbi8vICAgcGFyYW1ldGVycykgYXJlOlxuLy8gICAgIFBzID0gMSAgLT4gRGUtaWNvbmlmeSB3aW5kb3cuXG4vLyAgICAgUHMgPSAyICAtPiBJY29uaWZ5IHdpbmRvdy5cbi8vICAgICBQcyA9IDMgIDsgIHggOyAgeSAtPiBNb3ZlIHdpbmRvdyB0byBbeCwgeV0uXG4vLyAgICAgUHMgPSA0ICA7ICBoZWlnaHQgOyAgd2lkdGggLT4gUmVzaXplIHRoZSB4dGVybSB3aW5kb3cgdG9cbi8vICAgICBoZWlnaHQgYW5kIHdpZHRoIGluIHBpeGVscy5cbi8vICAgICBQcyA9IDUgIC0+IFJhaXNlIHRoZSB4dGVybSB3aW5kb3cgdG8gdGhlIGZyb250IG9mIHRoZSBzdGFjay1cbi8vICAgICBpbmcgb3JkZXIuXG4vLyAgICAgUHMgPSA2ICAtPiBMb3dlciB0aGUgeHRlcm0gd2luZG93IHRvIHRoZSBib3R0b20gb2YgdGhlXG4vLyAgICAgc3RhY2tpbmcgb3JkZXIuXG4vLyAgICAgUHMgPSA3ICAtPiBSZWZyZXNoIHRoZSB4dGVybSB3aW5kb3cuXG4vLyAgICAgUHMgPSA4ICA7ICBoZWlnaHQgOyAgd2lkdGggLT4gUmVzaXplIHRoZSB0ZXh0IGFyZWEgdG9cbi8vICAgICBbaGVpZ2h0O3dpZHRoXSBpbiBjaGFyYWN0ZXJzLlxuLy8gICAgIFBzID0gOSAgOyAgMCAgLT4gUmVzdG9yZSBtYXhpbWl6ZWQgd2luZG93LlxuLy8gICAgIFBzID0gOSAgOyAgMSAgLT4gTWF4aW1pemUgd2luZG93IChpLmUuLCByZXNpemUgdG8gc2NyZWVuXG4vLyAgICAgc2l6ZSkuXG4vLyAgICAgUHMgPSAxIDAgIDsgIDAgIC0+IFVuZG8gZnVsbC1zY3JlZW4gbW9kZS5cbi8vICAgICBQcyA9IDEgMCAgOyAgMSAgLT4gQ2hhbmdlIHRvIGZ1bGwtc2NyZWVuLlxuLy8gICAgIFBzID0gMSAxICAtPiBSZXBvcnQgeHRlcm0gd2luZG93IHN0YXRlLiAgSWYgdGhlIHh0ZXJtIHdpbmRvd1xuLy8gICAgIGlzIG9wZW4gKG5vbi1pY29uaWZpZWQpLCBpdCByZXR1cm5zIENTSSAxIHQgLiAgSWYgdGhlIHh0ZXJtXG4vLyAgICAgd2luZG93IGlzIGljb25pZmllZCwgaXQgcmV0dXJucyBDU0kgMiB0IC5cbi8vICAgICBQcyA9IDEgMyAgLT4gUmVwb3J0IHh0ZXJtIHdpbmRvdyBwb3NpdGlvbi4gIFJlc3VsdCBpcyBDU0kgM1xuLy8gICAgIDsgeCA7IHkgdFxuLy8gICAgIFBzID0gMSA0ICAtPiBSZXBvcnQgeHRlcm0gd2luZG93IGluIHBpeGVscy4gIFJlc3VsdCBpcyBDU0lcbi8vICAgICA0ICA7ICBoZWlnaHQgOyAgd2lkdGggdFxuLy8gICAgIFBzID0gMSA4ICAtPiBSZXBvcnQgdGhlIHNpemUgb2YgdGhlIHRleHQgYXJlYSBpbiBjaGFyYWN0ZXJzLlxuLy8gICAgIFJlc3VsdCBpcyBDU0kgIDggIDsgIGhlaWdodCA7ICB3aWR0aCB0XG4vLyAgICAgUHMgPSAxIDkgIC0+IFJlcG9ydCB0aGUgc2l6ZSBvZiB0aGUgc2NyZWVuIGluIGNoYXJhY3RlcnMuXG4vLyAgICAgUmVzdWx0IGlzIENTSSAgOSAgOyAgaGVpZ2h0IDsgIHdpZHRoIHRcbi8vICAgICBQcyA9IDIgMCAgLT4gUmVwb3J0IHh0ZXJtIHdpbmRvdydzIGljb24gbGFiZWwuICBSZXN1bHQgaXNcbi8vICAgICBPU0MgIEwgIGxhYmVsIFNUXG4vLyAgICAgUHMgPSAyIDEgIC0+IFJlcG9ydCB4dGVybSB3aW5kb3cncyB0aXRsZS4gIFJlc3VsdCBpcyBPU0MgIGxcbi8vICAgICBsYWJlbCBTVFxuLy8gICAgIFBzID0gMiAyICA7ICAwICAtPiBTYXZlIHh0ZXJtIGljb24gYW5kIHdpbmRvdyB0aXRsZSBvblxuLy8gICAgIHN0YWNrLlxuLy8gICAgIFBzID0gMiAyICA7ICAxICAtPiBTYXZlIHh0ZXJtIGljb24gdGl0bGUgb24gc3RhY2suXG4vLyAgICAgUHMgPSAyIDIgIDsgIDIgIC0+IFNhdmUgeHRlcm0gd2luZG93IHRpdGxlIG9uIHN0YWNrLlxuLy8gICAgIFBzID0gMiAzICA7ICAwICAtPiBSZXN0b3JlIHh0ZXJtIGljb24gYW5kIHdpbmRvdyB0aXRsZSBmcm9tXG4vLyAgICAgc3RhY2suXG4vLyAgICAgUHMgPSAyIDMgIDsgIDEgIC0+IFJlc3RvcmUgeHRlcm0gaWNvbiB0aXRsZSBmcm9tIHN0YWNrLlxuLy8gICAgIFBzID0gMiAzICA7ICAyICAtPiBSZXN0b3JlIHh0ZXJtIHdpbmRvdyB0aXRsZSBmcm9tIHN0YWNrLlxuLy8gICAgIFBzID49IDIgNCAgLT4gUmVzaXplIHRvIFBzIGxpbmVzIChERUNTTFBQKS5cblRlcm1pbmFsLnByb3RvdHlwZS5tYW5pcHVsYXRlV2luZG93ID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gIDtcbn07XG5cbi8vIENTSSBQdDsgUGw7IFBiOyBQcjsgUHMkIHRcbi8vICAgUmV2ZXJzZSBBdHRyaWJ1dGVzIGluIFJlY3Rhbmd1bGFyIEFyZWEgKERFQ1JBUkEpLCBWVDQwMCBhbmRcbi8vICAgdXAuXG4vLyAgICAgUHQ7IFBsOyBQYjsgUHIgZGVub3RlcyB0aGUgcmVjdGFuZ2xlLlxuLy8gICAgIFBzIGRlbm90ZXMgdGhlIGF0dHJpYnV0ZXMgdG8gcmV2ZXJzZSwgaS5lLiwgIDEsIDQsIDUsIDcuXG4vLyBOT1RFOiB4dGVybSBkb2Vzbid0IGVuYWJsZSB0aGlzIGNvZGUgYnkgZGVmYXVsdC5cblRlcm1pbmFsLnByb3RvdHlwZS5yZXZlcnNlQXR0ckluUmVjdGFuZ2xlID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gIDtcbn07XG5cbi8vIENTSSA+IFBzOyBQcyB0XG4vLyAgIFNldCBvbmUgb3IgbW9yZSBmZWF0dXJlcyBvZiB0aGUgdGl0bGUgbW9kZXMuICBFYWNoIHBhcmFtZXRlclxuLy8gICBlbmFibGVzIGEgc2luZ2xlIGZlYXR1cmUuXG4vLyAgICAgUHMgPSAwICAtPiBTZXQgd2luZG93L2ljb24gbGFiZWxzIHVzaW5nIGhleGFkZWNpbWFsLlxuLy8gICAgIFBzID0gMSAgLT4gUXVlcnkgd2luZG93L2ljb24gbGFiZWxzIHVzaW5nIGhleGFkZWNpbWFsLlxuLy8gICAgIFBzID0gMiAgLT4gU2V0IHdpbmRvdy9pY29uIGxhYmVscyB1c2luZyBVVEYtOC5cbi8vICAgICBQcyA9IDMgIC0+IFF1ZXJ5IHdpbmRvdy9pY29uIGxhYmVscyB1c2luZyBVVEYtOC4gIChTZWUgZGlzLVxuLy8gICAgIGN1c3Npb24gb2YgXCJUaXRsZSBNb2Rlc1wiKVxuVGVybWluYWwucHJvdG90eXBlLnNldFRpdGxlTW9kZUZlYXR1cmUgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgO1xufTtcblxuLy8gQ1NJIFBzIFNQIHRcbi8vICAgU2V0IHdhcm5pbmctYmVsbCB2b2x1bWUgKERFQ1NXQlYsIFZUNTIwKS5cbi8vICAgICBQcyA9IDAgIG9yIDEgIC0+IG9mZi5cbi8vICAgICBQcyA9IDIgLCAzICBvciA0ICAtPiBsb3cuXG4vLyAgICAgUHMgPSA1ICwgNiAsIDcgLCBvciA4ICAtPiBoaWdoLlxuVGVybWluYWwucHJvdG90eXBlLnNldFdhcm5pbmdCZWxsVm9sdW1lID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gIDtcbn07XG5cbi8vIENTSSBQcyBTUCB1XG4vLyAgIFNldCBtYXJnaW4tYmVsbCB2b2x1bWUgKERFQ1NNQlYsIFZUNTIwKS5cbi8vICAgICBQcyA9IDEgIC0+IG9mZi5cbi8vICAgICBQcyA9IDIgLCAzICBvciA0ICAtPiBsb3cuXG4vLyAgICAgUHMgPSAwICwgNSAsIDYgLCA3ICwgb3IgOCAgLT4gaGlnaC5cblRlcm1pbmFsLnByb3RvdHlwZS5zZXRNYXJnaW5CZWxsVm9sdW1lID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gIDtcbn07XG5cbi8vIENTSSBQdDsgUGw7IFBiOyBQcjsgUHA7IFB0OyBQbDsgUHAkIHZcbi8vICAgQ29weSBSZWN0YW5ndWxhciBBcmVhIChERUNDUkEsIFZUNDAwIGFuZCB1cCkuXG4vLyAgICAgUHQ7IFBsOyBQYjsgUHIgZGVub3RlcyB0aGUgcmVjdGFuZ2xlLlxuLy8gICAgIFBwIGRlbm90ZXMgdGhlIHNvdXJjZSBwYWdlLlxuLy8gICAgIFB0OyBQbCBkZW5vdGVzIHRoZSB0YXJnZXQgbG9jYXRpb24uXG4vLyAgICAgUHAgZGVub3RlcyB0aGUgdGFyZ2V0IHBhZ2UuXG4vLyBOT1RFOiB4dGVybSBkb2Vzbid0IGVuYWJsZSB0aGlzIGNvZGUgYnkgZGVmYXVsdC5cblRlcm1pbmFsLnByb3RvdHlwZS5jb3B5UmVjdGFuZ2xlID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gIDtcbn07XG5cbi8vIENTSSBQdCA7IFBsIDsgUGIgOyBQciAnIHdcbi8vICAgRW5hYmxlIEZpbHRlciBSZWN0YW5nbGUgKERFQ0VGUiksIFZUNDIwIGFuZCB1cC5cbi8vICAgUGFyYW1ldGVycyBhcmUgW3RvcDtsZWZ0O2JvdHRvbTtyaWdodF0uXG4vLyAgIERlZmluZXMgdGhlIGNvb3JkaW5hdGVzIG9mIGEgZmlsdGVyIHJlY3RhbmdsZSBhbmQgYWN0aXZhdGVzXG4vLyAgIGl0LiAgQW55dGltZSB0aGUgbG9jYXRvciBpcyBkZXRlY3RlZCBvdXRzaWRlIG9mIHRoZSBmaWx0ZXJcbi8vICAgcmVjdGFuZ2xlLCBhbiBvdXRzaWRlIHJlY3RhbmdsZSBldmVudCBpcyBnZW5lcmF0ZWQgYW5kIHRoZVxuLy8gICByZWN0YW5nbGUgaXMgZGlzYWJsZWQuICBGaWx0ZXIgcmVjdGFuZ2xlcyBhcmUgYWx3YXlzIHRyZWF0ZWRcbi8vICAgYXMgXCJvbmUtc2hvdFwiIGV2ZW50cy4gIEFueSBwYXJhbWV0ZXJzIHRoYXQgYXJlIG9taXR0ZWQgZGVmYXVsdFxuLy8gICB0byB0aGUgY3VycmVudCBsb2NhdG9yIHBvc2l0aW9uLiAgSWYgYWxsIHBhcmFtZXRlcnMgYXJlIG9taXQtXG4vLyAgIHRlZCwgYW55IGxvY2F0b3IgbW90aW9uIHdpbGwgYmUgcmVwb3J0ZWQuICBERUNFTFIgYWx3YXlzIGNhbi1cbi8vICAgY2VscyBhbnkgcHJldm91cyByZWN0YW5nbGUgZGVmaW5pdGlvbi5cblRlcm1pbmFsLnByb3RvdHlwZS5lbmFibGVGaWx0ZXJSZWN0YW5nbGUgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgO1xufTtcblxuLy8gQ1NJIFBzIHggIFJlcXVlc3QgVGVybWluYWwgUGFyYW1ldGVycyAoREVDUkVRVFBBUk0pLlxuLy8gICBpZiBQcyBpcyBhIFwiMFwiIChkZWZhdWx0KSBvciBcIjFcIiwgYW5kIHh0ZXJtIGlzIGVtdWxhdGluZyBWVDEwMCxcbi8vICAgdGhlIGNvbnRyb2wgc2VxdWVuY2UgZWxpY2l0cyBhIHJlc3BvbnNlIG9mIHRoZSBzYW1lIGZvcm0gd2hvc2Vcbi8vICAgcGFyYW1ldGVycyBkZXNjcmliZSB0aGUgdGVybWluYWw6XG4vLyAgICAgUHMgLT4gdGhlIGdpdmVuIFBzIGluY3JlbWVudGVkIGJ5IDIuXG4vLyAgICAgUG4gPSAxICA8LSBubyBwYXJpdHkuXG4vLyAgICAgUG4gPSAxICA8LSBlaWdodCBiaXRzLlxuLy8gICAgIFBuID0gMSAgPC0gMiAgOCAgdHJhbnNtaXQgMzguNGsgYmF1ZC5cbi8vICAgICBQbiA9IDEgIDwtIDIgIDggIHJlY2VpdmUgMzguNGsgYmF1ZC5cbi8vICAgICBQbiA9IDEgIDwtIGNsb2NrIG11bHRpcGxpZXIuXG4vLyAgICAgUG4gPSAwICA8LSBTVFAgZmxhZ3MuXG5UZXJtaW5hbC5wcm90b3R5cGUucmVxdWVzdFBhcmFtZXRlcnMgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgO1xufTtcblxuLy8gQ1NJIFBzIHggIFNlbGVjdCBBdHRyaWJ1dGUgQ2hhbmdlIEV4dGVudCAoREVDU0FDRSkuXG4vLyAgICAgUHMgPSAwICAtPiBmcm9tIHN0YXJ0IHRvIGVuZCBwb3NpdGlvbiwgd3JhcHBlZC5cbi8vICAgICBQcyA9IDEgIC0+IGZyb20gc3RhcnQgdG8gZW5kIHBvc2l0aW9uLCB3cmFwcGVkLlxuLy8gICAgIFBzID0gMiAgLT4gcmVjdGFuZ2xlIChleGFjdCkuXG5UZXJtaW5hbC5wcm90b3R5cGUuc2VsZWN0Q2hhbmdlRXh0ZW50ID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gIDtcbn07XG5cbi8vIENTSSBQYzsgUHQ7IFBsOyBQYjsgUHIkIHhcbi8vICAgRmlsbCBSZWN0YW5ndWxhciBBcmVhIChERUNGUkEpLCBWVDQyMCBhbmQgdXAuXG4vLyAgICAgUGMgaXMgdGhlIGNoYXJhY3RlciB0byB1c2UuXG4vLyAgICAgUHQ7IFBsOyBQYjsgUHIgZGVub3RlcyB0aGUgcmVjdGFuZ2xlLlxuLy8gTk9URTogeHRlcm0gZG9lc24ndCBlbmFibGUgdGhpcyBjb2RlIGJ5IGRlZmF1bHQuXG5UZXJtaW5hbC5wcm90b3R5cGUuZmlsbFJlY3RhbmdsZSA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICB2YXIgY2ggPSBwYXJhbXNbMF1cbiAgICAsIHQgPSBwYXJhbXNbMV1cbiAgICAsIGwgPSBwYXJhbXNbMl1cbiAgICAsIGIgPSBwYXJhbXNbM11cbiAgICAsIHIgPSBwYXJhbXNbNF07XG5cbiAgdmFyIGxpbmVcbiAgICAsIGk7XG5cbiAgZm9yICg7IHQgPCBiICsgMTsgdCsrKSB7XG4gICAgbGluZSA9IHRoaXMubGluZXNbdGhpcy55YmFzZSArIHRdO1xuICAgIGZvciAoaSA9IGw7IGkgPCByOyBpKyspIHtcbiAgICAgIGxpbmVbaV0gPSBbbGluZVtpXVswXSwgU3RyaW5nLmZyb21DaGFyQ29kZShjaCldO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRoaXMubWF4UmFuZ2UoKTtcbiAgdGhpcy51cGRhdGVSYW5nZShwYXJhbXNbMV0pO1xuICB0aGlzLnVwZGF0ZVJhbmdlKHBhcmFtc1szXSk7XG59O1xuXG4vLyBDU0kgUHMgOyBQdSAnIHpcbi8vICAgRW5hYmxlIExvY2F0b3IgUmVwb3J0aW5nIChERUNFTFIpLlxuLy8gICBWYWxpZCB2YWx1ZXMgZm9yIHRoZSBmaXJzdCBwYXJhbWV0ZXI6XG4vLyAgICAgUHMgPSAwICAtPiBMb2NhdG9yIGRpc2FibGVkIChkZWZhdWx0KS5cbi8vICAgICBQcyA9IDEgIC0+IExvY2F0b3IgZW5hYmxlZC5cbi8vICAgICBQcyA9IDIgIC0+IExvY2F0b3IgZW5hYmxlZCBmb3Igb25lIHJlcG9ydCwgdGhlbiBkaXNhYmxlZC5cbi8vICAgVGhlIHNlY29uZCBwYXJhbWV0ZXIgc3BlY2lmaWVzIHRoZSBjb29yZGluYXRlIHVuaXQgZm9yIGxvY2F0b3Jcbi8vICAgcmVwb3J0cy5cbi8vICAgVmFsaWQgdmFsdWVzIGZvciB0aGUgc2Vjb25kIHBhcmFtZXRlcjpcbi8vICAgICBQdSA9IDAgIDwtIG9yIG9taXR0ZWQgLT4gZGVmYXVsdCB0byBjaGFyYWN0ZXIgY2VsbHMuXG4vLyAgICAgUHUgPSAxICA8LSBkZXZpY2UgcGh5c2ljYWwgcGl4ZWxzLlxuLy8gICAgIFB1ID0gMiAgPC0gY2hhcmFjdGVyIGNlbGxzLlxuVGVybWluYWwucHJvdG90eXBlLmVuYWJsZUxvY2F0b3JSZXBvcnRpbmcgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgdmFyIHZhbCA9IHBhcmFtc1swXSA+IDA7XG4gIC8vdGhpcy5tb3VzZUV2ZW50cyA9IHZhbDtcbiAgLy90aGlzLmRlY0xvY2F0b3IgPSB2YWw7XG59O1xuXG4vLyBDU0kgUHQ7IFBsOyBQYjsgUHIkIHpcbi8vICAgRXJhc2UgUmVjdGFuZ3VsYXIgQXJlYSAoREVDRVJBKSwgVlQ0MDAgYW5kIHVwLlxuLy8gICAgIFB0OyBQbDsgUGI7IFByIGRlbm90ZXMgdGhlIHJlY3RhbmdsZS5cbi8vIE5PVEU6IHh0ZXJtIGRvZXNuJ3QgZW5hYmxlIHRoaXMgY29kZSBieSBkZWZhdWx0LlxuVGVybWluYWwucHJvdG90eXBlLmVyYXNlUmVjdGFuZ2xlID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gIHZhciB0ID0gcGFyYW1zWzBdXG4gICAgLCBsID0gcGFyYW1zWzFdXG4gICAgLCBiID0gcGFyYW1zWzJdXG4gICAgLCByID0gcGFyYW1zWzNdO1xuXG4gIHZhciBsaW5lXG4gICAgLCBpXG4gICAgLCBjaDtcblxuICBjaCA9IFt0aGlzLmVyYXNlQXR0cigpLCAnICddOyAvLyB4dGVybT9cblxuICBmb3IgKDsgdCA8IGIgKyAxOyB0KyspIHtcbiAgICBsaW5lID0gdGhpcy5saW5lc1t0aGlzLnliYXNlICsgdF07XG4gICAgZm9yIChpID0gbDsgaSA8IHI7IGkrKykge1xuICAgICAgbGluZVtpXSA9IGNoO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRoaXMubWF4UmFuZ2UoKTtcbiAgdGhpcy51cGRhdGVSYW5nZShwYXJhbXNbMF0pO1xuICB0aGlzLnVwZGF0ZVJhbmdlKHBhcmFtc1syXSk7XG59O1xuXG4vLyBDU0kgUG0gJyB7XG4vLyAgIFNlbGVjdCBMb2NhdG9yIEV2ZW50cyAoREVDU0xFKS5cbi8vICAgVmFsaWQgdmFsdWVzIGZvciB0aGUgZmlyc3QgKGFuZCBhbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXJzKVxuLy8gICBhcmU6XG4vLyAgICAgUHMgPSAwICAtPiBvbmx5IHJlc3BvbmQgdG8gZXhwbGljaXQgaG9zdCByZXF1ZXN0cyAoREVDUlFMUCkuXG4vLyAgICAgICAgICAgICAgICAoVGhpcyBpcyBkZWZhdWx0KS4gIEl0IGFsc28gY2FuY2VscyBhbnkgZmlsdGVyXG4vLyAgIHJlY3RhbmdsZS5cbi8vICAgICBQcyA9IDEgIC0+IHJlcG9ydCBidXR0b24gZG93biB0cmFuc2l0aW9ucy5cbi8vICAgICBQcyA9IDIgIC0+IGRvIG5vdCByZXBvcnQgYnV0dG9uIGRvd24gdHJhbnNpdGlvbnMuXG4vLyAgICAgUHMgPSAzICAtPiByZXBvcnQgYnV0dG9uIHVwIHRyYW5zaXRpb25zLlxuLy8gICAgIFBzID0gNCAgLT4gZG8gbm90IHJlcG9ydCBidXR0b24gdXAgdHJhbnNpdGlvbnMuXG5UZXJtaW5hbC5wcm90b3R5cGUuc2V0TG9jYXRvckV2ZW50cyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICA7XG59O1xuXG4vLyBDU0kgUHQ7IFBsOyBQYjsgUHIkIHtcbi8vICAgU2VsZWN0aXZlIEVyYXNlIFJlY3Rhbmd1bGFyIEFyZWEgKERFQ1NFUkEpLCBWVDQwMCBhbmQgdXAuXG4vLyAgICAgUHQ7IFBsOyBQYjsgUHIgZGVub3RlcyB0aGUgcmVjdGFuZ2xlLlxuVGVybWluYWwucHJvdG90eXBlLnNlbGVjdGl2ZUVyYXNlUmVjdGFuZ2xlID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gIDtcbn07XG5cbi8vIENTSSBQcyAnIHxcbi8vICAgUmVxdWVzdCBMb2NhdG9yIFBvc2l0aW9uIChERUNSUUxQKS5cbi8vICAgVmFsaWQgdmFsdWVzIGZvciB0aGUgcGFyYW1ldGVyIGFyZTpcbi8vICAgICBQcyA9IDAgLCAxIG9yIG9taXR0ZWQgLT4gdHJhbnNtaXQgYSBzaW5nbGUgREVDTFJQIGxvY2F0b3Jcbi8vICAgICByZXBvcnQuXG5cbi8vICAgSWYgTG9jYXRvciBSZXBvcnRpbmcgaGFzIGJlZW4gZW5hYmxlZCBieSBhIERFQ0VMUiwgeHRlcm0gd2lsbFxuLy8gICByZXNwb25kIHdpdGggYSBERUNMUlAgTG9jYXRvciBSZXBvcnQuICBUaGlzIHJlcG9ydCBpcyBhbHNvXG4vLyAgIGdlbmVyYXRlZCBvbiBidXR0b24gdXAgYW5kIGRvd24gZXZlbnRzIGlmIHRoZXkgaGF2ZSBiZWVuXG4vLyAgIGVuYWJsZWQgd2l0aCBhIERFQ1NMRSwgb3Igd2hlbiB0aGUgbG9jYXRvciBpcyBkZXRlY3RlZCBvdXRzaWRlXG4vLyAgIG9mIGEgZmlsdGVyIHJlY3RhbmdsZSwgaWYgZmlsdGVyIHJlY3RhbmdsZXMgaGF2ZSBiZWVuIGVuYWJsZWRcbi8vICAgd2l0aCBhIERFQ0VGUi5cblxuLy8gICAgIC0+IENTSSBQZSA7IFBiIDsgUHIgOyBQYyA7IFBwICYgIHdcblxuLy8gICBQYXJhbWV0ZXJzIGFyZSBbZXZlbnQ7YnV0dG9uO3Jvdztjb2x1bW47cGFnZV0uXG4vLyAgIFZhbGlkIHZhbHVlcyBmb3IgdGhlIGV2ZW50OlxuLy8gICAgIFBlID0gMCAgLT4gbG9jYXRvciB1bmF2YWlsYWJsZSAtIG5vIG90aGVyIHBhcmFtZXRlcnMgc2VudC5cbi8vICAgICBQZSA9IDEgIC0+IHJlcXVlc3QgLSB4dGVybSByZWNlaXZlZCBhIERFQ1JRTFAuXG4vLyAgICAgUGUgPSAyICAtPiBsZWZ0IGJ1dHRvbiBkb3duLlxuLy8gICAgIFBlID0gMyAgLT4gbGVmdCBidXR0b24gdXAuXG4vLyAgICAgUGUgPSA0ICAtPiBtaWRkbGUgYnV0dG9uIGRvd24uXG4vLyAgICAgUGUgPSA1ICAtPiBtaWRkbGUgYnV0dG9uIHVwLlxuLy8gICAgIFBlID0gNiAgLT4gcmlnaHQgYnV0dG9uIGRvd24uXG4vLyAgICAgUGUgPSA3ICAtPiByaWdodCBidXR0b24gdXAuXG4vLyAgICAgUGUgPSA4ICAtPiBNNCBidXR0b24gZG93bi5cbi8vICAgICBQZSA9IDkgIC0+IE00IGJ1dHRvbiB1cC5cbi8vICAgICBQZSA9IDEgMCAgLT4gbG9jYXRvciBvdXRzaWRlIGZpbHRlciByZWN0YW5nbGUuXG4vLyAgIGBgYnV0dG9uJycgcGFyYW1ldGVyIGlzIGEgYml0bWFzayBpbmRpY2F0aW5nIHdoaWNoIGJ1dHRvbnMgYXJlXG4vLyAgICAgcHJlc3NlZDpcbi8vICAgICBQYiA9IDAgIDwtIG5vIGJ1dHRvbnMgZG93bi5cbi8vICAgICBQYiAmIDEgIDwtIHJpZ2h0IGJ1dHRvbiBkb3duLlxuLy8gICAgIFBiICYgMiAgPC0gbWlkZGxlIGJ1dHRvbiBkb3duLlxuLy8gICAgIFBiICYgNCAgPC0gbGVmdCBidXR0b24gZG93bi5cbi8vICAgICBQYiAmIDggIDwtIE00IGJ1dHRvbiBkb3duLlxuLy8gICBgYHJvdycnIGFuZCBgYGNvbHVtbicnIHBhcmFtZXRlcnMgYXJlIHRoZSBjb29yZGluYXRlcyBvZiB0aGVcbi8vICAgICBsb2NhdG9yIHBvc2l0aW9uIGluIHRoZSB4dGVybSB3aW5kb3csIGVuY29kZWQgYXMgQVNDSUkgZGVjaS1cbi8vICAgICBtYWwuXG4vLyAgIFRoZSBgYHBhZ2UnJyBwYXJhbWV0ZXIgaXMgbm90IHVzZWQgYnkgeHRlcm0sIGFuZCB3aWxsIGJlIG9taXQtXG4vLyAgIHRlZC5cblRlcm1pbmFsLnByb3RvdHlwZS5yZXF1ZXN0TG9jYXRvclBvc2l0aW9uID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gIDtcbn07XG5cbi8vIENTSSBQIG0gU1AgfVxuLy8gSW5zZXJ0IFAgcyBDb2x1bW4ocykgKGRlZmF1bHQgPSAxKSAoREVDSUMpLCBWVDQyMCBhbmQgdXAuXG4vLyBOT1RFOiB4dGVybSBkb2Vzbid0IGVuYWJsZSB0aGlzIGNvZGUgYnkgZGVmYXVsdC5cblRlcm1pbmFsLnByb3RvdHlwZS5pbnNlcnRDb2x1bW5zID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwYXJhbSA9IHBhcmFtc1swXVxuICAgICwgbCA9IHRoaXMueWJhc2UgKyB0aGlzLnJvd3NcbiAgICAsIGNoID0gW3RoaXMuZXJhc2VBdHRyKCksICcgJ10gLy8geHRlcm0/XG4gICAgLCBpO1xuXG4gIHdoaWxlIChwYXJhbS0tKSB7XG4gICAgZm9yIChpID0gdGhpcy55YmFzZTsgaSA8IGw7IGkrKykge1xuICAgICAgdGhpcy5saW5lc1tpXS5zcGxpY2UodGhpcy54ICsgMSwgMCwgY2gpO1xuICAgICAgdGhpcy5saW5lc1tpXS5wb3AoKTtcbiAgICB9XG4gIH1cblxuICB0aGlzLm1heFJhbmdlKCk7XG59O1xuXG4vLyBDU0kgUCBtIFNQIH5cbi8vIERlbGV0ZSBQIHMgQ29sdW1uKHMpIChkZWZhdWx0ID0gMSkgKERFQ0RDKSwgVlQ0MjAgYW5kIHVwXG4vLyBOT1RFOiB4dGVybSBkb2Vzbid0IGVuYWJsZSB0aGlzIGNvZGUgYnkgZGVmYXVsdC5cblRlcm1pbmFsLnByb3RvdHlwZS5kZWxldGVDb2x1bW5zID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwYXJhbSA9IHBhcmFtc1swXVxuICAgICwgbCA9IHRoaXMueWJhc2UgKyB0aGlzLnJvd3NcbiAgICAsIGNoID0gW3RoaXMuZXJhc2VBdHRyKCksICcgJ10gLy8geHRlcm0/XG4gICAgLCBpO1xuXG4gIHdoaWxlIChwYXJhbS0tKSB7XG4gICAgZm9yIChpID0gdGhpcy55YmFzZTsgaSA8IGw7IGkrKykge1xuICAgICAgdGhpcy5saW5lc1tpXS5zcGxpY2UodGhpcy54LCAxKTtcbiAgICAgIHRoaXMubGluZXNbaV0ucHVzaChjaCk7XG4gICAgfVxuICB9XG5cbiAgdGhpcy5tYXhSYW5nZSgpO1xufTtcblxuLyoqXG4gKiBQcmVmaXgvU2VsZWN0L1Zpc3VhbC9TZWFyY2ggTW9kZXNcbiAqL1xuXG5UZXJtaW5hbC5wcm90b3R5cGUuZW50ZXJQcmVmaXggPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wcmVmaXhNb2RlID0gdHJ1ZTtcbn07XG5cblRlcm1pbmFsLnByb3RvdHlwZS5sZWF2ZVByZWZpeCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnByZWZpeE1vZGUgPSBmYWxzZTtcbn07XG5cblRlcm1pbmFsLnByb3RvdHlwZS5lbnRlclNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9yZWFsID0ge1xuICAgIHg6IHRoaXMueCxcbiAgICB5OiB0aGlzLnksXG4gICAgeWRpc3A6IHRoaXMueWRpc3AsXG4gICAgeWJhc2U6IHRoaXMueWJhc2UsXG4gICAgY3Vyc29ySGlkZGVuOiB0aGlzLmN1cnNvckhpZGRlbixcbiAgICBsaW5lczogdGhpcy5jb3B5QnVmZmVyKHRoaXMubGluZXMpLFxuICAgIHdyaXRlOiB0aGlzLndyaXRlXG4gIH07XG4gIHRoaXMud3JpdGUgPSBmdW5jdGlvbigpIHt9O1xuICB0aGlzLnNlbGVjdE1vZGUgPSB0cnVlO1xuICB0aGlzLnZpc3VhbE1vZGUgPSBmYWxzZTtcbiAgdGhpcy5jdXJzb3JIaWRkZW4gPSBmYWxzZTtcbiAgdGhpcy5yZWZyZXNoKHRoaXMueSwgdGhpcy55KTtcbn07XG5cblRlcm1pbmFsLnByb3RvdHlwZS5sZWF2ZVNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnggPSB0aGlzLl9yZWFsLng7XG4gIHRoaXMueSA9IHRoaXMuX3JlYWwueTtcbiAgdGhpcy55ZGlzcCA9IHRoaXMuX3JlYWwueWRpc3A7XG4gIHRoaXMueWJhc2UgPSB0aGlzLl9yZWFsLnliYXNlO1xuICB0aGlzLmN1cnNvckhpZGRlbiA9IHRoaXMuX3JlYWwuY3Vyc29ySGlkZGVuO1xuICB0aGlzLmxpbmVzID0gdGhpcy5fcmVhbC5saW5lcztcbiAgdGhpcy53cml0ZSA9IHRoaXMuX3JlYWwud3JpdGU7XG4gIGRlbGV0ZSB0aGlzLl9yZWFsO1xuICB0aGlzLnNlbGVjdE1vZGUgPSBmYWxzZTtcbiAgdGhpcy52aXN1YWxNb2RlID0gZmFsc2U7XG4gIHRoaXMucmVmcmVzaCgwLCB0aGlzLnJvd3MgLSAxKTtcbn07XG5cblRlcm1pbmFsLnByb3RvdHlwZS5lbnRlclZpc3VhbCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9yZWFsLnByZVZpc3VhbCA9IHRoaXMuY29weUJ1ZmZlcih0aGlzLmxpbmVzKTtcbiAgdGhpcy5zZWxlY3RUZXh0KHRoaXMueCwgdGhpcy54LCB0aGlzLnlkaXNwICsgdGhpcy55LCB0aGlzLnlkaXNwICsgdGhpcy55KTtcbiAgdGhpcy52aXN1YWxNb2RlID0gdHJ1ZTtcbn07XG5cblRlcm1pbmFsLnByb3RvdHlwZS5sZWF2ZVZpc3VhbCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmxpbmVzID0gdGhpcy5fcmVhbC5wcmVWaXN1YWw7XG4gIGRlbGV0ZSB0aGlzLl9yZWFsLnByZVZpc3VhbDtcbiAgZGVsZXRlIHRoaXMuX3NlbGVjdGVkO1xuICB0aGlzLnZpc3VhbE1vZGUgPSBmYWxzZTtcbiAgdGhpcy5yZWZyZXNoKDAsIHRoaXMucm93cyAtIDEpO1xufTtcblxuVGVybWluYWwucHJvdG90eXBlLmVudGVyU2VhcmNoID0gZnVuY3Rpb24oZG93bikge1xuICB0aGlzLmVudHJ5ID0gJyc7XG4gIHRoaXMuc2VhcmNoTW9kZSA9IHRydWU7XG4gIHRoaXMuc2VhcmNoRG93biA9IGRvd247XG4gIHRoaXMuX3JlYWwucHJlU2VhcmNoID0gdGhpcy5jb3B5QnVmZmVyKHRoaXMubGluZXMpO1xuICB0aGlzLl9yZWFsLnByZVNlYXJjaFggPSB0aGlzLng7XG4gIHRoaXMuX3JlYWwucHJlU2VhcmNoWSA9IHRoaXMueTtcblxuICB2YXIgYm90dG9tID0gdGhpcy55ZGlzcCArIHRoaXMucm93cyAtIDE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5lbnRyeVByZWZpeC5sZW5ndGg7IGkrKykge1xuICAgIC8vdGhpcy5saW5lc1tib3R0b21dW2ldWzBdID0gKHRoaXMuZGVmQXR0ciAmIH4weDFmZikgfCA0O1xuICAgIC8vdGhpcy5saW5lc1tib3R0b21dW2ldWzFdID0gdGhpcy5lbnRyeVByZWZpeFtpXTtcbiAgICB0aGlzLmxpbmVzW2JvdHRvbV1baV0gPSBbXG4gICAgICAodGhpcy5kZWZBdHRyICYgfjB4MWZmKSB8IDQsXG4gICAgICB0aGlzLmVudHJ5UHJlZml4W2ldXG4gICAgXTtcbiAgfVxuXG4gIHRoaXMueSA9IHRoaXMucm93cyAtIDE7XG4gIHRoaXMueCA9IHRoaXMuZW50cnlQcmVmaXgubGVuZ3RoO1xuXG4gIHRoaXMucmVmcmVzaCh0aGlzLnJvd3MgLSAxLCB0aGlzLnJvd3MgLSAxKTtcbn07XG5cblRlcm1pbmFsLnByb3RvdHlwZS5sZWF2ZVNlYXJjaCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNlYXJjaE1vZGUgPSBmYWxzZTtcblxuICBpZiAodGhpcy5fcmVhbC5wcmVTZWFyY2gpIHtcbiAgICB0aGlzLmxpbmVzID0gdGhpcy5fcmVhbC5wcmVTZWFyY2g7XG4gICAgdGhpcy54ID0gdGhpcy5fcmVhbC5wcmVTZWFyY2hYO1xuICAgIHRoaXMueSA9IHRoaXMuX3JlYWwucHJlU2VhcmNoWTtcbiAgICBkZWxldGUgdGhpcy5fcmVhbC5wcmVTZWFyY2g7XG4gICAgZGVsZXRlIHRoaXMuX3JlYWwucHJlU2VhcmNoWDtcbiAgICBkZWxldGUgdGhpcy5fcmVhbC5wcmVTZWFyY2hZO1xuICB9XG5cbiAgdGhpcy5yZWZyZXNoKHRoaXMucm93cyAtIDEsIHRoaXMucm93cyAtIDEpO1xufTtcblxuVGVybWluYWwucHJvdG90eXBlLmNvcHlCdWZmZXIgPSBmdW5jdGlvbihsaW5lcykge1xuICB2YXIgbGluZXMgPSBsaW5lcyB8fCB0aGlzLmxpbmVzXG4gICAgLCBvdXQgPSBbXTtcblxuICBmb3IgKHZhciB5ID0gMDsgeSA8IGxpbmVzLmxlbmd0aDsgeSsrKSB7XG4gICAgb3V0W3ldID0gW107XG4gICAgZm9yICh2YXIgeCA9IDA7IHggPCBsaW5lc1t5XS5sZW5ndGg7IHgrKykge1xuICAgICAgb3V0W3ldW3hdID0gW2xpbmVzW3ldW3hdWzBdLCBsaW5lc1t5XVt4XVsxXV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG91dDtcbn07XG5cblRlcm1pbmFsLnByb3RvdHlwZS5nZXRDb3B5VGV4dGFyZWEgPSBmdW5jdGlvbih0ZXh0KSB7XG4gIHZhciB0ZXh0YXJlYSA9IHRoaXMuX2NvcHlUZXh0YXJlYVxuICAgICwgZG9jdW1lbnQgPSB0aGlzLmRvY3VtZW50O1xuXG4gIGlmICghdGV4dGFyZWEpIHtcbiAgICB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgdGV4dGFyZWEuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHRleHRhcmVhLnN0eWxlLmxlZnQgPSAnLTMyMDAwcHgnO1xuICAgIHRleHRhcmVhLnN0eWxlLnRvcCA9ICctMzIwMDBweCc7XG4gICAgdGV4dGFyZWEuc3R5bGUud2lkdGggPSAnMHB4JztcbiAgICB0ZXh0YXJlYS5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICB0ZXh0YXJlYS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgIHRleHRhcmVhLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgdGV4dGFyZWEuc3R5bGUuYm9yZGVyU3R5bGUgPSAnbm9uZSc7XG4gICAgdGV4dGFyZWEuc3R5bGUub3V0bGluZVN0eWxlID0gJ25vbmUnO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5hcHBlbmRDaGlsZCh0ZXh0YXJlYSk7XG5cbiAgICB0aGlzLl9jb3B5VGV4dGFyZWEgPSB0ZXh0YXJlYTtcbiAgfVxuXG4gIHJldHVybiB0ZXh0YXJlYTtcbn07XG5cbi8vIE5PVEU6IE9ubHkgd29ya3MgZm9yIHByaW1hcnkgc2VsZWN0aW9uIG9uIFgxMS5cbi8vIE5vbi1YMTEgdXNlcnMgc2hvdWxkIHVzZSBDdHJsLUMgaW5zdGVhZC5cblRlcm1pbmFsLnByb3RvdHlwZS5jb3B5VGV4dCA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gICAgLCB0ZXh0YXJlYSA9IHRoaXMuZ2V0Q29weVRleHRhcmVhKCk7XG5cbiAgdGhpcy5lbWl0KCdjb3B5JywgdGV4dCk7XG5cbiAgdGV4dGFyZWEuZm9jdXMoKTtcbiAgdGV4dGFyZWEudGV4dENvbnRlbnQgPSB0ZXh0O1xuICB0ZXh0YXJlYS52YWx1ZSA9IHRleHQ7XG4gIHRleHRhcmVhLnNldFNlbGVjdGlvblJhbmdlKDAsIHRleHQubGVuZ3RoKTtcblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIHNlbGYuZWxlbWVudC5mb2N1cygpO1xuICAgIHNlbGYuZm9jdXMoKTtcbiAgfSwgMSk7XG59O1xuXG5UZXJtaW5hbC5wcm90b3R5cGUuc2VsZWN0VGV4dCA9IGZ1bmN0aW9uKHgxLCB4MiwgeTEsIHkyKSB7XG4gIHZhciBveDFcbiAgICAsIG94MlxuICAgICwgb3kxXG4gICAgLCBveTJcbiAgICAsIHRtcFxuICAgICwgeFxuICAgICwgeVxuICAgICwgeGxcbiAgICAsIGF0dHI7XG5cbiAgaWYgKHRoaXMuX3NlbGVjdGVkKSB7XG4gICAgb3gxID0gdGhpcy5fc2VsZWN0ZWQueDE7XG4gICAgb3gyID0gdGhpcy5fc2VsZWN0ZWQueDI7XG4gICAgb3kxID0gdGhpcy5fc2VsZWN0ZWQueTE7XG4gICAgb3kyID0gdGhpcy5fc2VsZWN0ZWQueTI7XG5cbiAgICBpZiAob3kyIDwgb3kxKSB7XG4gICAgICB0bXAgPSBveDI7XG4gICAgICBveDIgPSBveDE7XG4gICAgICBveDEgPSB0bXA7XG4gICAgICB0bXAgPSBveTI7XG4gICAgICBveTIgPSBveTE7XG4gICAgICBveTEgPSB0bXA7XG4gICAgfVxuXG4gICAgaWYgKG94MiA8IG94MSAmJiBveTEgPT09IG95Mikge1xuICAgICAgdG1wID0gb3gyO1xuICAgICAgb3gyID0gb3gxO1xuICAgICAgb3gxID0gdG1wO1xuICAgIH1cblxuICAgIGZvciAoeSA9IG95MTsgeSA8PSBveTI7IHkrKykge1xuICAgICAgeCA9IDA7XG4gICAgICB4bCA9IHRoaXMuY29scyAtIDE7XG4gICAgICBpZiAoeSA9PT0gb3kxKSB7XG4gICAgICAgIHggPSBveDE7XG4gICAgICB9XG4gICAgICBpZiAoeSA9PT0gb3kyKSB7XG4gICAgICAgIHhsID0gb3gyO1xuICAgICAgfVxuICAgICAgZm9yICg7IHggPD0geGw7IHgrKykge1xuICAgICAgICBpZiAodGhpcy5saW5lc1t5XVt4XS5vbGQgIT0gbnVsbCkge1xuICAgICAgICAgIC8vdGhpcy5saW5lc1t5XVt4XVswXSA9IHRoaXMubGluZXNbeV1beF0ub2xkO1xuICAgICAgICAgIC8vZGVsZXRlIHRoaXMubGluZXNbeV1beF0ub2xkO1xuICAgICAgICAgIGF0dHIgPSB0aGlzLmxpbmVzW3ldW3hdLm9sZDtcbiAgICAgICAgICBkZWxldGUgdGhpcy5saW5lc1t5XVt4XS5vbGQ7XG4gICAgICAgICAgdGhpcy5saW5lc1t5XVt4XSA9IFthdHRyLCB0aGlzLmxpbmVzW3ldW3hdWzFdXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHkxID0gdGhpcy5fc2VsZWN0ZWQueTE7XG4gICAgeDEgPSB0aGlzLl9zZWxlY3RlZC54MTtcbiAgfVxuXG4gIHkxID0gTWF0aC5tYXgoeTEsIDApO1xuICB5MSA9IE1hdGgubWluKHkxLCB0aGlzLnlkaXNwICsgdGhpcy5yb3dzIC0gMSk7XG5cbiAgeTIgPSBNYXRoLm1heCh5MiwgMCk7XG4gIHkyID0gTWF0aC5taW4oeTIsIHRoaXMueWRpc3AgKyB0aGlzLnJvd3MgLSAxKTtcblxuICB0aGlzLl9zZWxlY3RlZCA9IHsgeDE6IHgxLCB4MjogeDIsIHkxOiB5MSwgeTI6IHkyIH07XG5cbiAgaWYgKHkyIDwgeTEpIHtcbiAgICB0bXAgPSB4MjtcbiAgICB4MiA9IHgxO1xuICAgIHgxID0gdG1wO1xuICAgIHRtcCA9IHkyO1xuICAgIHkyID0geTE7XG4gICAgeTEgPSB0bXA7XG4gIH1cblxuICBpZiAoeDIgPCB4MSAmJiB5MSA9PT0geTIpIHtcbiAgICB0bXAgPSB4MjtcbiAgICB4MiA9IHgxO1xuICAgIHgxID0gdG1wO1xuICB9XG5cbiAgZm9yICh5ID0geTE7IHkgPD0geTI7IHkrKykge1xuICAgIHggPSAwO1xuICAgIHhsID0gdGhpcy5jb2xzIC0gMTtcbiAgICBpZiAoeSA9PT0geTEpIHtcbiAgICAgIHggPSB4MTtcbiAgICB9XG4gICAgaWYgKHkgPT09IHkyKSB7XG4gICAgICB4bCA9IHgyO1xuICAgIH1cbiAgICBmb3IgKDsgeCA8PSB4bDsgeCsrKSB7XG4gICAgICAvL3RoaXMubGluZXNbeV1beF0ub2xkID0gdGhpcy5saW5lc1t5XVt4XVswXTtcbiAgICAgIC8vdGhpcy5saW5lc1t5XVt4XVswXSAmPSB+MHgxZmY7XG4gICAgICAvL3RoaXMubGluZXNbeV1beF1bMF0gfD0gKDB4MWZmIDw8IDkpIHwgNDtcbiAgICAgIGF0dHIgPSB0aGlzLmxpbmVzW3ldW3hdWzBdO1xuICAgICAgdGhpcy5saW5lc1t5XVt4XSA9IFtcbiAgICAgICAgKGF0dHIgJiB+MHgxZmYpIHwgKCgweDFmZiA8PCA5KSB8IDQpLFxuICAgICAgICB0aGlzLmxpbmVzW3ldW3hdWzFdXG4gICAgICBdO1xuICAgICAgdGhpcy5saW5lc1t5XVt4XS5vbGQgPSBhdHRyO1xuICAgIH1cbiAgfVxuXG4gIHkxID0geTEgLSB0aGlzLnlkaXNwO1xuICB5MiA9IHkyIC0gdGhpcy55ZGlzcDtcblxuICB5MSA9IE1hdGgubWF4KHkxLCAwKTtcbiAgeTEgPSBNYXRoLm1pbih5MSwgdGhpcy5yb3dzIC0gMSk7XG5cbiAgeTIgPSBNYXRoLm1heCh5MiwgMCk7XG4gIHkyID0gTWF0aC5taW4oeTIsIHRoaXMucm93cyAtIDEpO1xuXG4gIC8vdGhpcy5yZWZyZXNoKHkxLCB5Mik7XG4gIHRoaXMucmVmcmVzaCgwLCB0aGlzLnJvd3MgLSAxKTtcbn07XG5cblRlcm1pbmFsLnByb3RvdHlwZS5ncmFiVGV4dCA9IGZ1bmN0aW9uKHgxLCB4MiwgeTEsIHkyKSB7XG4gIHZhciBvdXQgPSAnJ1xuICAgICwgYnVmID0gJydcbiAgICAsIGNoXG4gICAgLCB4XG4gICAgLCB5XG4gICAgLCB4bFxuICAgICwgdG1wO1xuXG4gIGlmICh5MiA8IHkxKSB7XG4gICAgdG1wID0geDI7XG4gICAgeDIgPSB4MTtcbiAgICB4MSA9IHRtcDtcbiAgICB0bXAgPSB5MjtcbiAgICB5MiA9IHkxO1xuICAgIHkxID0gdG1wO1xuICB9XG5cbiAgaWYgKHgyIDwgeDEgJiYgeTEgPT09IHkyKSB7XG4gICAgdG1wID0geDI7XG4gICAgeDIgPSB4MTtcbiAgICB4MSA9IHRtcDtcbiAgfVxuXG4gIGZvciAoeSA9IHkxOyB5IDw9IHkyOyB5KyspIHtcbiAgICB4ID0gMDtcbiAgICB4bCA9IHRoaXMuY29scyAtIDE7XG4gICAgaWYgKHkgPT09IHkxKSB7XG4gICAgICB4ID0geDE7XG4gICAgfVxuICAgIGlmICh5ID09PSB5Mikge1xuICAgICAgeGwgPSB4MjtcbiAgICB9XG4gICAgZm9yICg7IHggPD0geGw7IHgrKykge1xuICAgICAgY2ggPSB0aGlzLmxpbmVzW3ldW3hdWzFdO1xuICAgICAgaWYgKGNoID09PSAnICcpIHtcbiAgICAgICAgYnVmICs9IGNoO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChidWYpIHtcbiAgICAgICAgb3V0ICs9IGJ1ZjtcbiAgICAgICAgYnVmID0gJyc7XG4gICAgICB9XG4gICAgICBvdXQgKz0gY2g7XG4gICAgICBpZiAoaXNXaWRlKGNoKSkgeCsrO1xuICAgIH1cbiAgICBidWYgPSAnJztcbiAgICBvdXQgKz0gJ1xcbic7XG4gIH1cblxuICAvLyBJZiB3ZSdyZSBub3QgYXQgdGhlIGVuZCBvZiB0aGVcbiAgLy8gbGluZSwgZG9uJ3QgYWRkIGEgbmV3bGluZS5cbiAgZm9yICh4ID0geDIsIHkgPSB5MjsgeCA8IHRoaXMuY29sczsgeCsrKSB7XG4gICAgaWYgKHRoaXMubGluZXNbeV1beF1bMV0gIT09ICcgJykge1xuICAgICAgb3V0ID0gb3V0LnNsaWNlKDAsIC0xKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59O1xuXG5UZXJtaW5hbC5wcm90b3R5cGUua2V5UHJlZml4ID0gZnVuY3Rpb24oZXYsIGtleSkge1xuICBpZiAoa2V5ID09PSAnaycgfHwga2V5ID09PSAnJicpIHtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfSBlbHNlIGlmIChrZXkgPT09ICdwJyB8fCBrZXkgPT09ICddJykge1xuICAgIHRoaXMuZW1pdCgncmVxdWVzdCBwYXN0ZScpO1xuICB9IGVsc2UgaWYgKGtleSA9PT0gJ2MnKSB7XG4gICAgdGhpcy5lbWl0KCdyZXF1ZXN0IGNyZWF0ZScpO1xuICB9IGVsc2UgaWYgKGtleSA+PSAnMCcgJiYga2V5IDw9ICc5Jykge1xuICAgIGtleSA9ICtrZXkgLSAxO1xuICAgIGlmICghfmtleSkga2V5ID0gOTtcbiAgICB0aGlzLmVtaXQoJ3JlcXVlc3QgdGVybScsIGtleSk7XG4gIH0gZWxzZSBpZiAoa2V5ID09PSAnbicpIHtcbiAgICB0aGlzLmVtaXQoJ3JlcXVlc3QgdGVybSBuZXh0Jyk7XG4gIH0gZWxzZSBpZiAoa2V5ID09PSAnUCcpIHtcbiAgICB0aGlzLmVtaXQoJ3JlcXVlc3QgdGVybSBwcmV2aW91cycpO1xuICB9IGVsc2UgaWYgKGtleSA9PT0gJzonKSB7XG4gICAgdGhpcy5lbWl0KCdyZXF1ZXN0IGNvbW1hbmQgbW9kZScpO1xuICB9IGVsc2UgaWYgKGtleSA9PT0gJ1snKSB7XG4gICAgdGhpcy5lbnRlclNlbGVjdCgpO1xuICB9XG59O1xuXG5UZXJtaW5hbC5wcm90b3R5cGUua2V5U2VsZWN0ID0gZnVuY3Rpb24oZXYsIGtleSkge1xuICB0aGlzLnNob3dDdXJzb3IoKTtcblxuICBpZiAodGhpcy5zZWFyY2hNb2RlIHx8IGtleSA9PT0gJ24nIHx8IGtleSA9PT0gJ04nKSB7XG4gICAgcmV0dXJuIHRoaXMua2V5U2VhcmNoKGV2LCBrZXkpO1xuICB9XG5cbiAgaWYgKGtleSA9PT0gJ1xceDA0JykgeyAvLyBjdHJsLWRcbiAgICB2YXIgeSA9IHRoaXMueWRpc3AgKyB0aGlzLnk7XG4gICAgaWYgKHRoaXMueWRpc3AgPT09IHRoaXMueWJhc2UpIHtcbiAgICAgIC8vIE1pbWljIHZpbSBiZWhhdmlvclxuICAgICAgdGhpcy55ID0gTWF0aC5taW4odGhpcy55ICsgKHRoaXMucm93cyAtIDEpIC8gMiB8IDAsIHRoaXMucm93cyAtIDEpO1xuICAgICAgdGhpcy5yZWZyZXNoKDAsIHRoaXMucm93cyAtIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNjcm9sbERpc3AoKHRoaXMucm93cyAtIDEpIC8gMiB8IDApO1xuICAgIH1cbiAgICBpZiAodGhpcy52aXN1YWxNb2RlKSB7XG4gICAgICB0aGlzLnNlbGVjdFRleHQodGhpcy54LCB0aGlzLngsIHksIHRoaXMueWRpc3AgKyB0aGlzLnkpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoa2V5ID09PSAnXFx4MTUnKSB7IC8vIGN0cmwtdVxuICAgIHZhciB5ID0gdGhpcy55ZGlzcCArIHRoaXMueTtcbiAgICBpZiAodGhpcy55ZGlzcCA9PT0gMCkge1xuICAgICAgLy8gTWltaWMgdmltIGJlaGF2aW9yXG4gICAgICB0aGlzLnkgPSBNYXRoLm1heCh0aGlzLnkgLSAodGhpcy5yb3dzIC0gMSkgLyAyIHwgMCwgMCk7XG4gICAgICB0aGlzLnJlZnJlc2goMCwgdGhpcy5yb3dzIC0gMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2Nyb2xsRGlzcCgtKHRoaXMucm93cyAtIDEpIC8gMiB8IDApO1xuICAgIH1cbiAgICBpZiAodGhpcy52aXN1YWxNb2RlKSB7XG4gICAgICB0aGlzLnNlbGVjdFRleHQodGhpcy54LCB0aGlzLngsIHksIHRoaXMueWRpc3AgKyB0aGlzLnkpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoa2V5ID09PSAnXFx4MDYnKSB7IC8vIGN0cmwtZlxuICAgIHZhciB5ID0gdGhpcy55ZGlzcCArIHRoaXMueTtcbiAgICB0aGlzLnNjcm9sbERpc3AodGhpcy5yb3dzIC0gMSk7XG4gICAgaWYgKHRoaXMudmlzdWFsTW9kZSkge1xuICAgICAgdGhpcy5zZWxlY3RUZXh0KHRoaXMueCwgdGhpcy54LCB5LCB0aGlzLnlkaXNwICsgdGhpcy55KTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGtleSA9PT0gJ1xceDAyJykgeyAvLyBjdHJsLWJcbiAgICB2YXIgeSA9IHRoaXMueWRpc3AgKyB0aGlzLnk7XG4gICAgdGhpcy5zY3JvbGxEaXNwKC0odGhpcy5yb3dzIC0gMSkpO1xuICAgIGlmICh0aGlzLnZpc3VhbE1vZGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0VGV4dCh0aGlzLngsIHRoaXMueCwgeSwgdGhpcy55ZGlzcCArIHRoaXMueSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChrZXkgPT09ICdrJyB8fCBrZXkgPT09ICdcXHgxYltBJykge1xuICAgIHZhciB5ID0gdGhpcy55ZGlzcCArIHRoaXMueTtcbiAgICB0aGlzLnktLTtcbiAgICBpZiAodGhpcy55IDwgMCkge1xuICAgICAgdGhpcy55ID0gMDtcbiAgICAgIHRoaXMuc2Nyb2xsRGlzcCgtMSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnZpc3VhbE1vZGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0VGV4dCh0aGlzLngsIHRoaXMueCwgeSwgdGhpcy55ZGlzcCArIHRoaXMueSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVmcmVzaCh0aGlzLnksIHRoaXMueSArIDEpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoa2V5ID09PSAnaicgfHwga2V5ID09PSAnXFx4MWJbQicpIHtcbiAgICB2YXIgeSA9IHRoaXMueWRpc3AgKyB0aGlzLnk7XG4gICAgdGhpcy55Kys7XG4gICAgaWYgKHRoaXMueSA+PSB0aGlzLnJvd3MpIHtcbiAgICAgIHRoaXMueSA9IHRoaXMucm93cyAtIDE7XG4gICAgICB0aGlzLnNjcm9sbERpc3AoMSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnZpc3VhbE1vZGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0VGV4dCh0aGlzLngsIHRoaXMueCwgeSwgdGhpcy55ZGlzcCArIHRoaXMueSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVmcmVzaCh0aGlzLnkgLSAxLCB0aGlzLnkpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoa2V5ID09PSAnaCcgfHwga2V5ID09PSAnXFx4MWJbRCcpIHtcbiAgICB2YXIgeCA9IHRoaXMueDtcbiAgICB0aGlzLngtLTtcbiAgICBpZiAodGhpcy54IDwgMCkge1xuICAgICAgdGhpcy54ID0gMDtcbiAgICB9XG4gICAgaWYgKHRoaXMudmlzdWFsTW9kZSkge1xuICAgICAgdGhpcy5zZWxlY3RUZXh0KHgsIHRoaXMueCwgdGhpcy55ZGlzcCArIHRoaXMueSwgdGhpcy55ZGlzcCArIHRoaXMueSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVmcmVzaCh0aGlzLnksIHRoaXMueSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChrZXkgPT09ICdsJyB8fCBrZXkgPT09ICdcXHgxYltDJykge1xuICAgIHZhciB4ID0gdGhpcy54O1xuICAgIHRoaXMueCsrO1xuICAgIGlmICh0aGlzLnggPj0gdGhpcy5jb2xzKSB7XG4gICAgICB0aGlzLnggPSB0aGlzLmNvbHMgLSAxO1xuICAgIH1cbiAgICBpZiAodGhpcy52aXN1YWxNb2RlKSB7XG4gICAgICB0aGlzLnNlbGVjdFRleHQoeCwgdGhpcy54LCB0aGlzLnlkaXNwICsgdGhpcy55LCB0aGlzLnlkaXNwICsgdGhpcy55KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZWZyZXNoKHRoaXMueSwgdGhpcy55KTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGtleSA9PT0gJ3YnIHx8IGtleSA9PT0gJyAnKSB7XG4gICAgaWYgKCF0aGlzLnZpc3VhbE1vZGUpIHtcbiAgICAgIHRoaXMuZW50ZXJWaXN1YWwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sZWF2ZVZpc3VhbCgpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoa2V5ID09PSAneScpIHtcbiAgICBpZiAodGhpcy52aXN1YWxNb2RlKSB7XG4gICAgICB2YXIgdGV4dCA9IHRoaXMuZ3JhYlRleHQoXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkLngxLCB0aGlzLl9zZWxlY3RlZC54MixcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQueTEsIHRoaXMuX3NlbGVjdGVkLnkyKTtcbiAgICAgIHRoaXMuY29weVRleHQodGV4dCk7XG4gICAgICB0aGlzLmxlYXZlVmlzdWFsKCk7XG4gICAgICAvLyB0aGlzLmxlYXZlU2VsZWN0KCk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChrZXkgPT09ICdxJyB8fCBrZXkgPT09ICdcXHgxYicpIHtcbiAgICBpZiAodGhpcy52aXN1YWxNb2RlKSB7XG4gICAgICB0aGlzLmxlYXZlVmlzdWFsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGVhdmVTZWxlY3QoKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGtleSA9PT0gJ3cnIHx8IGtleSA9PT0gJ1cnKSB7XG4gICAgdmFyIG94ID0gdGhpcy54O1xuICAgIHZhciBveSA9IHRoaXMueTtcbiAgICB2YXIgb3lkID0gdGhpcy55ZGlzcDtcblxuICAgIHZhciB4ID0gdGhpcy54O1xuICAgIHZhciB5ID0gdGhpcy55O1xuICAgIHZhciB5YiA9IHRoaXMueWRpc3A7XG4gICAgdmFyIHNhd19zcGFjZSA9IGZhbHNlO1xuXG4gICAgZm9yICg7Oykge1xuICAgICAgdmFyIGxpbmUgPSB0aGlzLmxpbmVzW3liICsgeV07XG4gICAgICB3aGlsZSAoeCA8IHRoaXMuY29scykge1xuICAgICAgICBpZiAobGluZVt4XVsxXSA8PSAnICcpIHtcbiAgICAgICAgICBzYXdfc3BhY2UgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHNhd19zcGFjZSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHgrKztcbiAgICAgIH1cbiAgICAgIGlmICh4ID49IHRoaXMuY29scykgeCA9IHRoaXMuY29scyAtIDE7XG4gICAgICBpZiAoeCA9PT0gdGhpcy5jb2xzIC0gMSAmJiBsaW5lW3hdWzFdIDw9ICcgJykge1xuICAgICAgICB4ID0gMDtcbiAgICAgICAgaWYgKCsreSA+PSB0aGlzLnJvd3MpIHtcbiAgICAgICAgICB5LS07XG4gICAgICAgICAgaWYgKCsreWIgPiB0aGlzLnliYXNlKSB7XG4gICAgICAgICAgICB5YiA9IHRoaXMueWJhc2U7XG4gICAgICAgICAgICB4ID0gdGhpcy54O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy54ID0geCwgdGhpcy55ID0geTtcbiAgICB0aGlzLnNjcm9sbERpc3AoLXRoaXMueWRpc3AgKyB5Yik7XG5cbiAgICBpZiAodGhpcy52aXN1YWxNb2RlKSB7XG4gICAgICB0aGlzLnNlbGVjdFRleHQob3gsIHRoaXMueCwgb3kgKyBveWQsIHRoaXMueWRpc3AgKyB0aGlzLnkpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoa2V5ID09PSAnYicgfHwga2V5ID09PSAnQicpIHtcbiAgICB2YXIgb3ggPSB0aGlzLng7XG4gICAgdmFyIG95ID0gdGhpcy55O1xuICAgIHZhciBveWQgPSB0aGlzLnlkaXNwO1xuXG4gICAgdmFyIHggPSB0aGlzLng7XG4gICAgdmFyIHkgPSB0aGlzLnk7XG4gICAgdmFyIHliID0gdGhpcy55ZGlzcDtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIHZhciBsaW5lID0gdGhpcy5saW5lc1t5YiArIHldO1xuICAgICAgdmFyIHNhd19zcGFjZSA9IHggPiAwICYmIGxpbmVbeF1bMV0gPiAnICcgJiYgbGluZVt4IC0gMV1bMV0gPiAnICc7XG4gICAgICB3aGlsZSAoeCA+PSAwKSB7XG4gICAgICAgIGlmIChsaW5lW3hdWzFdIDw9ICcgJykge1xuICAgICAgICAgIGlmIChzYXdfc3BhY2UgJiYgKHggKyAxIDwgdGhpcy5jb2xzICYmIGxpbmVbeCArIDFdWzFdID4gJyAnKSkge1xuICAgICAgICAgICAgeCsrO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNhd19zcGFjZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHgtLTtcbiAgICAgIH1cbiAgICAgIGlmICh4IDwgMCkgeCA9IDA7XG4gICAgICBpZiAoeCA9PT0gMCAmJiAobGluZVt4XVsxXSA8PSAnICcgfHwgIXNhd19zcGFjZSkpIHtcbiAgICAgICAgeCA9IHRoaXMuY29scyAtIDE7XG4gICAgICAgIGlmICgtLXkgPCAwKSB7XG4gICAgICAgICAgeSsrO1xuICAgICAgICAgIGlmICgtLXliIDwgMCkge1xuICAgICAgICAgICAgeWIrKztcbiAgICAgICAgICAgIHggPSAwO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy54ID0geCwgdGhpcy55ID0geTtcbiAgICB0aGlzLnNjcm9sbERpc3AoLXRoaXMueWRpc3AgKyB5Yik7XG5cbiAgICBpZiAodGhpcy52aXN1YWxNb2RlKSB7XG4gICAgICB0aGlzLnNlbGVjdFRleHQob3gsIHRoaXMueCwgb3kgKyBveWQsIHRoaXMueWRpc3AgKyB0aGlzLnkpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoa2V5ID09PSAnZScgfHwga2V5ID09PSAnRScpIHtcbiAgICB2YXIgeCA9IHRoaXMueCArIDE7XG4gICAgdmFyIHkgPSB0aGlzLnk7XG4gICAgdmFyIHliID0gdGhpcy55ZGlzcDtcbiAgICBpZiAoeCA+PSB0aGlzLmNvbHMpIHgtLTtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIHZhciBsaW5lID0gdGhpcy5saW5lc1t5YiArIHldO1xuICAgICAgd2hpbGUgKHggPCB0aGlzLmNvbHMpIHtcbiAgICAgICAgaWYgKGxpbmVbeF1bMV0gPD0gJyAnKSB7XG4gICAgICAgICAgeCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB3aGlsZSAoeCA8IHRoaXMuY29scykge1xuICAgICAgICBpZiAobGluZVt4XVsxXSA8PSAnICcpIHtcbiAgICAgICAgICBpZiAoeCAtIDEgPj0gMCAmJiBsaW5lW3ggLSAxXVsxXSA+ICcgJykge1xuICAgICAgICAgICAgeC0tO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHgrKztcbiAgICAgIH1cbiAgICAgIGlmICh4ID49IHRoaXMuY29scykgeCA9IHRoaXMuY29scyAtIDE7XG4gICAgICBpZiAoeCA9PT0gdGhpcy5jb2xzIC0gMSAmJiBsaW5lW3hdWzFdIDw9ICcgJykge1xuICAgICAgICB4ID0gMDtcbiAgICAgICAgaWYgKCsreSA+PSB0aGlzLnJvd3MpIHtcbiAgICAgICAgICB5LS07XG4gICAgICAgICAgaWYgKCsreWIgPiB0aGlzLnliYXNlKSB7XG4gICAgICAgICAgICB5YiA9IHRoaXMueWJhc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLnggPSB4LCB0aGlzLnkgPSB5O1xuICAgIHRoaXMuc2Nyb2xsRGlzcCgtdGhpcy55ZGlzcCArIHliKTtcblxuICAgIGlmICh0aGlzLnZpc3VhbE1vZGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0VGV4dChveCwgdGhpcy54LCBveSArIG95ZCwgdGhpcy55ZGlzcCArIHRoaXMueSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChrZXkgPT09ICdeJyB8fCBrZXkgPT09ICcwJykge1xuICAgIHZhciBveCA9IHRoaXMueDtcblxuICAgIGlmIChrZXkgPT09ICcwJykge1xuICAgICAgdGhpcy54ID0gMDtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ14nKSB7XG4gICAgICB2YXIgbGluZSA9IHRoaXMubGluZXNbdGhpcy55ZGlzcCArIHRoaXMueV07XG4gICAgICB2YXIgeCA9IDA7XG4gICAgICB3aGlsZSAoeCA8IHRoaXMuY29scykge1xuICAgICAgICBpZiAobGluZVt4XVsxXSA+ICcgJykge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHgrKztcbiAgICAgIH1cbiAgICAgIGlmICh4ID49IHRoaXMuY29scykgeCA9IHRoaXMuY29scyAtIDE7XG4gICAgICB0aGlzLnggPSB4O1xuICAgIH1cblxuICAgIGlmICh0aGlzLnZpc3VhbE1vZGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0VGV4dChveCwgdGhpcy54LCB0aGlzLnlkaXNwICsgdGhpcy55LCB0aGlzLnlkaXNwICsgdGhpcy55KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZWZyZXNoKHRoaXMueSwgdGhpcy55KTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGtleSA9PT0gJyQnKSB7XG4gICAgdmFyIG94ID0gdGhpcy54O1xuICAgIHZhciBsaW5lID0gdGhpcy5saW5lc1t0aGlzLnlkaXNwICsgdGhpcy55XTtcbiAgICB2YXIgeCA9IHRoaXMuY29scyAtIDE7XG4gICAgd2hpbGUgKHggPj0gMCkge1xuICAgICAgaWYgKGxpbmVbeF1bMV0gPiAnICcpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzdWFsTW9kZSAmJiB4IDwgdGhpcy5jb2xzIC0gMSkgeCsrO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHgtLTtcbiAgICB9XG4gICAgaWYgKHggPCAwKSB4ID0gMDtcbiAgICB0aGlzLnggPSB4O1xuICAgIGlmICh0aGlzLnZpc3VhbE1vZGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0VGV4dChveCwgdGhpcy54LCB0aGlzLnlkaXNwICsgdGhpcy55LCB0aGlzLnlkaXNwICsgdGhpcy55KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZWZyZXNoKHRoaXMueSwgdGhpcy55KTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGtleSA9PT0gJ2cnIHx8IGtleSA9PT0gJ0cnKSB7XG4gICAgdmFyIG94ID0gdGhpcy54O1xuICAgIHZhciBveSA9IHRoaXMueTtcbiAgICB2YXIgb3lkID0gdGhpcy55ZGlzcDtcbiAgICBpZiAoa2V5ID09PSAnZycpIHtcbiAgICAgIHRoaXMueCA9IDAsIHRoaXMueSA9IDA7XG4gICAgICB0aGlzLnNjcm9sbERpc3AoLXRoaXMueWRpc3ApO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnRycpIHtcbiAgICAgIHRoaXMueCA9IDAsIHRoaXMueSA9IHRoaXMucm93cyAtIDE7XG4gICAgICB0aGlzLnNjcm9sbERpc3AodGhpcy55YmFzZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnZpc3VhbE1vZGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0VGV4dChveCwgdGhpcy54LCBveSArIG95ZCwgdGhpcy55ZGlzcCArIHRoaXMueSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChrZXkgPT09ICdIJyB8fCBrZXkgPT09ICdNJyB8fCBrZXkgPT09ICdMJykge1xuICAgIHZhciBveCA9IHRoaXMueDtcbiAgICB2YXIgb3kgPSB0aGlzLnk7XG4gICAgaWYgKGtleSA9PT0gJ0gnKSB7XG4gICAgICB0aGlzLnggPSAwLCB0aGlzLnkgPSAwO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnTScpIHtcbiAgICAgIHRoaXMueCA9IDAsIHRoaXMueSA9IHRoaXMucm93cyAvIDIgfCAwO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnTCcpIHtcbiAgICAgIHRoaXMueCA9IDAsIHRoaXMueSA9IHRoaXMucm93cyAtIDE7XG4gICAgfVxuICAgIGlmICh0aGlzLnZpc3VhbE1vZGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0VGV4dChveCwgdGhpcy54LCB0aGlzLnlkaXNwICsgb3ksIHRoaXMueWRpc3AgKyB0aGlzLnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlZnJlc2gob3ksIG95KTtcbiAgICAgIHRoaXMucmVmcmVzaCh0aGlzLnksIHRoaXMueSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChrZXkgPT09ICd7JyB8fCBrZXkgPT09ICd9Jykge1xuICAgIHZhciBveCA9IHRoaXMueDtcbiAgICB2YXIgb3kgPSB0aGlzLnk7XG4gICAgdmFyIG95ZCA9IHRoaXMueWRpc3A7XG5cbiAgICB2YXIgbGluZTtcbiAgICB2YXIgc2F3X2Z1bGwgPSBmYWxzZTtcbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcbiAgICB2YXIgZmlyc3RfaXNfc3BhY2UgPSAtMTtcbiAgICB2YXIgeSA9IHRoaXMueSArIChrZXkgPT09ICd7JyA/IC0xIDogMSk7XG4gICAgdmFyIHliID0gdGhpcy55ZGlzcDtcbiAgICB2YXIgaTtcblxuICAgIGlmIChrZXkgPT09ICd7Jykge1xuICAgICAgaWYgKHkgPCAwKSB7XG4gICAgICAgIHkrKztcbiAgICAgICAgaWYgKHliID4gMCkgeWItLTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ30nKSB7XG4gICAgICBpZiAoeSA+PSB0aGlzLnJvd3MpIHtcbiAgICAgICAgeS0tO1xuICAgICAgICBpZiAoeWIgPCB0aGlzLnliYXNlKSB5YisrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoOzspIHtcbiAgICAgIGxpbmUgPSB0aGlzLmxpbmVzW3liICsgeV07XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmNvbHM7IGkrKykge1xuICAgICAgICBpZiAobGluZVtpXVsxXSA+ICcgJykge1xuICAgICAgICAgIGlmIChmaXJzdF9pc19zcGFjZSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGZpcnN0X2lzX3NwYWNlID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2F3X2Z1bGwgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IHRoaXMuY29scyAtIDEpIHtcbiAgICAgICAgICBpZiAoZmlyc3RfaXNfc3BhY2UgPT09IC0xKSB7XG4gICAgICAgICAgICBmaXJzdF9pc19zcGFjZSA9IDE7XG4gICAgICAgICAgfSBlbHNlIGlmIChmaXJzdF9pc19zcGFjZSA9PT0gMCkge1xuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZmlyc3RfaXNfc3BhY2UgPT09IDEpIHtcbiAgICAgICAgICAgIGlmIChzYXdfZnVsbCkgZm91bmQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZm91bmQpIGJyZWFrO1xuXG4gICAgICBpZiAoa2V5ID09PSAneycpIHtcbiAgICAgICAgeS0tO1xuICAgICAgICBpZiAoeSA8IDApIHtcbiAgICAgICAgICB5Kys7XG4gICAgICAgICAgaWYgKHliID4gMCkgeWItLTtcbiAgICAgICAgICBlbHNlIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ30nKSB7XG4gICAgICAgIHkrKztcbiAgICAgICAgaWYgKHkgPj0gdGhpcy5yb3dzKSB7XG4gICAgICAgICAgeS0tO1xuICAgICAgICAgIGlmICh5YiA8IHRoaXMueWJhc2UpIHliKys7XG4gICAgICAgICAgZWxzZSBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghZm91bmQpIHtcbiAgICAgIGlmIChrZXkgPT09ICd7Jykge1xuICAgICAgICB5ID0gMDtcbiAgICAgICAgeWIgPSAwO1xuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICd9Jykge1xuICAgICAgICB5ID0gdGhpcy5yb3dzIC0gMTtcbiAgICAgICAgeWIgPSB0aGlzLnliYXNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMueCA9IDAsIHRoaXMueSA9IHk7XG4gICAgdGhpcy5zY3JvbGxEaXNwKC10aGlzLnlkaXNwICsgeWIpO1xuXG4gICAgaWYgKHRoaXMudmlzdWFsTW9kZSkge1xuICAgICAgdGhpcy5zZWxlY3RUZXh0KG94LCB0aGlzLngsIG95ICsgb3lkLCB0aGlzLnlkaXNwICsgdGhpcy55KTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGtleSA9PT0gJy8nIHx8IGtleSA9PT0gJz8nKSB7XG4gICAgaWYgKCF0aGlzLnZpc3VhbE1vZGUpIHtcbiAgICAgIHRoaXMuZW50ZXJTZWFyY2goa2V5ID09PSAnLycpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5UZXJtaW5hbC5wcm90b3R5cGUua2V5U2VhcmNoID0gZnVuY3Rpb24oZXYsIGtleSkge1xuICBpZiAoa2V5ID09PSAnXFx4MWInKSB7XG4gICAgdGhpcy5sZWF2ZVNlYXJjaCgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChrZXkgPT09ICdcXHInIHx8ICghdGhpcy5zZWFyY2hNb2RlICYmIChrZXkgPT09ICduJyB8fCBrZXkgPT09ICdOJykpKSB7XG4gICAgdGhpcy5sZWF2ZVNlYXJjaCgpO1xuXG4gICAgdmFyIGVudHJ5ID0gdGhpcy5lbnRyeTtcblxuICAgIGlmICghZW50cnkpIHtcbiAgICAgIHRoaXMucmVmcmVzaCgwLCB0aGlzLnJvd3MgLSAxKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgb3ggPSB0aGlzLng7XG4gICAgdmFyIG95ID0gdGhpcy55O1xuICAgIHZhciBveWQgPSB0aGlzLnlkaXNwO1xuXG4gICAgdmFyIGxpbmU7XG4gICAgdmFyIGZvdW5kID0gZmFsc2U7XG4gICAgdmFyIHdyYXBwZWQgPSBmYWxzZTtcbiAgICB2YXIgeCA9IHRoaXMueCArIDE7XG4gICAgdmFyIHkgPSB0aGlzLnlkaXNwICsgdGhpcy55O1xuICAgIHZhciB5YiwgaTtcbiAgICB2YXIgdXAgPSBrZXkgPT09ICdOJ1xuICAgICAgPyB0aGlzLnNlYXJjaERvd25cbiAgICAgIDogIXRoaXMuc2VhcmNoRG93bjtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIGxpbmUgPSB0aGlzLmxpbmVzW3ldO1xuXG4gICAgICB3aGlsZSAoeCA8IHRoaXMuY29scykge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZW50cnkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoeCArIGkgPj0gdGhpcy5jb2xzKSBicmVhaztcbiAgICAgICAgICBpZiAobGluZVt4ICsgaV1bMV0gIT09IGVudHJ5W2ldKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IGVsc2UgaWYgKGxpbmVbeCArIGldWzFdID09PSBlbnRyeVtpXSAmJiBpID09PSBlbnRyeS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvdW5kKSBicmVhaztcbiAgICAgICAgeCArPSBpICsgMTtcbiAgICAgIH1cbiAgICAgIGlmIChmb3VuZCkgYnJlYWs7XG5cbiAgICAgIHggPSAwO1xuXG4gICAgICBpZiAoIXVwKSB7XG4gICAgICAgIHkrKztcbiAgICAgICAgaWYgKHkgPiB0aGlzLnliYXNlICsgdGhpcy5yb3dzIC0gMSkge1xuICAgICAgICAgIGlmICh3cmFwcGVkKSBicmVhaztcbiAgICAgICAgICAvLyB0aGlzLnNldE1lc3NhZ2UoJ1NlYXJjaCB3cmFwcGVkLiBDb250aW51aW5nIGF0IFRPUC4nKTtcbiAgICAgICAgICB3cmFwcGVkID0gdHJ1ZTtcbiAgICAgICAgICB5ID0gMDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeS0tO1xuICAgICAgICBpZiAoeSA8IDApIHtcbiAgICAgICAgICBpZiAod3JhcHBlZCkgYnJlYWs7XG4gICAgICAgICAgLy8gdGhpcy5zZXRNZXNzYWdlKCdTZWFyY2ggd3JhcHBlZC4gQ29udGludWluZyBhdCBCT1RUT00uJyk7XG4gICAgICAgICAgd3JhcHBlZCA9IHRydWU7XG4gICAgICAgICAgeSA9IHRoaXMueWJhc2UgKyB0aGlzLnJvd3MgLSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBpZiAoeSAtIHRoaXMueWJhc2UgPCAwKSB7XG4gICAgICAgIHliID0geTtcbiAgICAgICAgeSA9IDA7XG4gICAgICAgIGlmICh5YiA+IHRoaXMueWJhc2UpIHtcbiAgICAgICAgICB5ID0geWIgLSB0aGlzLnliYXNlO1xuICAgICAgICAgIHliID0gdGhpcy55YmFzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeWIgPSB0aGlzLnliYXNlO1xuICAgICAgICB5IC09IHRoaXMueWJhc2U7XG4gICAgICB9XG5cbiAgICAgIHRoaXMueCA9IHgsIHRoaXMueSA9IHk7XG4gICAgICB0aGlzLnNjcm9sbERpc3AoLXRoaXMueWRpc3AgKyB5Yik7XG5cbiAgICAgIGlmICh0aGlzLnZpc3VhbE1vZGUpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RUZXh0KG94LCB0aGlzLngsIG95ICsgb3lkLCB0aGlzLnlkaXNwICsgdGhpcy55KTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyB0aGlzLnNldE1lc3NhZ2UoXCJObyBtYXRjaGVzIGZvdW5kLlwiKTtcbiAgICB0aGlzLnJlZnJlc2goMCwgdGhpcy5yb3dzIC0gMSk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoa2V5ID09PSAnXFxiJyB8fCBrZXkgPT09ICdcXHg3ZicpIHtcbiAgICBpZiAodGhpcy5lbnRyeS5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICB2YXIgYm90dG9tID0gdGhpcy55ZGlzcCArIHRoaXMucm93cyAtIDE7XG4gICAgdGhpcy5lbnRyeSA9IHRoaXMuZW50cnkuc2xpY2UoMCwgLTEpO1xuICAgIHZhciBpID0gdGhpcy5lbnRyeVByZWZpeC5sZW5ndGggKyB0aGlzLmVudHJ5Lmxlbmd0aDtcbiAgICAvL3RoaXMubGluZXNbYm90dG9tXVtpXVsxXSA9ICcgJztcbiAgICB0aGlzLmxpbmVzW2JvdHRvbV1baV0gPSBbXG4gICAgICB0aGlzLmxpbmVzW2JvdHRvbV1baV1bMF0sXG4gICAgICAnICdcbiAgICBdO1xuICAgIHRoaXMueC0tO1xuICAgIHRoaXMucmVmcmVzaCh0aGlzLnJvd3MgLSAxLCB0aGlzLnJvd3MgLSAxKTtcbiAgICB0aGlzLnJlZnJlc2godGhpcy55LCB0aGlzLnkpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChrZXkubGVuZ3RoID09PSAxICYmIGtleSA+PSAnICcgJiYga2V5IDw9ICd+Jykge1xuICAgIHZhciBib3R0b20gPSB0aGlzLnlkaXNwICsgdGhpcy5yb3dzIC0gMTtcbiAgICB0aGlzLmVudHJ5ICs9IGtleTtcbiAgICB2YXIgaSA9IHRoaXMuZW50cnlQcmVmaXgubGVuZ3RoICsgdGhpcy5lbnRyeS5sZW5ndGggLSAxO1xuICAgIC8vdGhpcy5saW5lc1tib3R0b21dW2ldWzBdID0gKHRoaXMuZGVmQXR0ciAmIH4weDFmZikgfCA0O1xuICAgIC8vdGhpcy5saW5lc1tib3R0b21dW2ldWzFdID0ga2V5O1xuICAgIHRoaXMubGluZXNbYm90dG9tXVtpXSA9IFtcbiAgICAgICh0aGlzLmRlZkF0dHIgJiB+MHgxZmYpIHwgNCxcbiAgICAgIGtleVxuICAgIF07XG4gICAgdGhpcy54Kys7XG4gICAgdGhpcy5yZWZyZXNoKHRoaXMucm93cyAtIDEsIHRoaXMucm93cyAtIDEpO1xuICAgIHRoaXMucmVmcmVzaCh0aGlzLnksIHRoaXMueSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBDaGFyYWN0ZXIgU2V0c1xuICovXG5cblRlcm1pbmFsLmNoYXJzZXRzID0ge307XG5cbi8vIERFQyBTcGVjaWFsIENoYXJhY3RlciBhbmQgTGluZSBEcmF3aW5nIFNldC5cbi8vIGh0dHA6Ly92dDEwMC5uZXQvZG9jcy92dDEwMi11Zy90YWJsZTUtMTMuaHRtbFxuLy8gQSBsb3Qgb2YgY3Vyc2VzIGFwcHMgdXNlIHRoaXMgaWYgdGhleSBzZWUgVEVSTT14dGVybS5cbi8vIHRlc3Rpbmc6IGVjaG8gLWUgJ1xcZSgwYVxcZShCJ1xuLy8gVGhlIHh0ZXJtIG91dHB1dCBzb21ldGltZXMgc2VlbXMgdG8gY29uZmxpY3Qgd2l0aCB0aGVcbi8vIHJlZmVyZW5jZSBhYm92ZS4geHRlcm0gc2VlbXMgaW4gbGluZSB3aXRoIHRoZSByZWZlcmVuY2Vcbi8vIHdoZW4gcnVubmluZyB2dHRlc3QgaG93ZXZlci5cbi8vIFRoZSB0YWJsZSBiZWxvdyBub3cgdXNlcyB4dGVybSdzIG91dHB1dCBmcm9tIHZ0dGVzdC5cblRlcm1pbmFsLmNoYXJzZXRzLlNDTEQgPSB7IC8vICgwXG4gICdgJzogJ1xcdTI1YzYnLCAvLyAn4peGJ1xuICAnYSc6ICdcXHUyNTkyJywgLy8gJ+KWkidcbiAgJ2InOiAnXFx1MDAwOScsIC8vICdcXHQnXG4gICdjJzogJ1xcdTAwMGMnLCAvLyAnXFxmJ1xuICAnZCc6ICdcXHUwMDBkJywgLy8gJ1xccidcbiAgJ2UnOiAnXFx1MDAwYScsIC8vICdcXG4nXG4gICdmJzogJ1xcdTAwYjAnLCAvLyAnwrAnXG4gICdnJzogJ1xcdTAwYjEnLCAvLyAnwrEnXG4gICdoJzogJ1xcdTI0MjQnLCAvLyAnXFx1MjQyNCcgKE5MKVxuICAnaSc6ICdcXHUwMDBiJywgLy8gJ1xcdidcbiAgJ2onOiAnXFx1MjUxOCcsIC8vICfilJgnXG4gICdrJzogJ1xcdTI1MTAnLCAvLyAn4pSQJ1xuICAnbCc6ICdcXHUyNTBjJywgLy8gJ+KUjCdcbiAgJ20nOiAnXFx1MjUxNCcsIC8vICfilJQnXG4gICduJzogJ1xcdTI1M2MnLCAvLyAn4pS8J1xuICAnbyc6ICdcXHUyM2JhJywgLy8gJ+KOuidcbiAgJ3AnOiAnXFx1MjNiYicsIC8vICfijrsnXG4gICdxJzogJ1xcdTI1MDAnLCAvLyAn4pSAJ1xuICAncic6ICdcXHUyM2JjJywgLy8gJ+KOvCdcbiAgJ3MnOiAnXFx1MjNiZCcsIC8vICfijr0nXG4gICd0JzogJ1xcdTI1MWMnLCAvLyAn4pScJ1xuICAndSc6ICdcXHUyNTI0JywgLy8gJ+KUpCdcbiAgJ3YnOiAnXFx1MjUzNCcsIC8vICfilLQnXG4gICd3JzogJ1xcdTI1MmMnLCAvLyAn4pSsJ1xuICAneCc6ICdcXHUyNTAyJywgLy8gJ+KUgidcbiAgJ3knOiAnXFx1MjI2NCcsIC8vICfiiaQnXG4gICd6JzogJ1xcdTIyNjUnLCAvLyAn4omlJ1xuICAneyc6ICdcXHUwM2MwJywgLy8gJ8+AJ1xuICAnfCc6ICdcXHUyMjYwJywgLy8gJ+KJoCdcbiAgJ30nOiAnXFx1MDBhMycsIC8vICfCoydcbiAgJ34nOiAnXFx1MDBiNycgIC8vICfCtydcbn07XG5cblRlcm1pbmFsLmNoYXJzZXRzLlVLID0gbnVsbDsgLy8gKEFcblRlcm1pbmFsLmNoYXJzZXRzLlVTID0gbnVsbDsgLy8gKEIgKFVTQVNDSUkpXG5UZXJtaW5hbC5jaGFyc2V0cy5EdXRjaCA9IG51bGw7IC8vICg0XG5UZXJtaW5hbC5jaGFyc2V0cy5GaW5uaXNoID0gbnVsbDsgLy8gKEMgb3IgKDVcblRlcm1pbmFsLmNoYXJzZXRzLkZyZW5jaCA9IG51bGw7IC8vIChSXG5UZXJtaW5hbC5jaGFyc2V0cy5GcmVuY2hDYW5hZGlhbiA9IG51bGw7IC8vIChRXG5UZXJtaW5hbC5jaGFyc2V0cy5HZXJtYW4gPSBudWxsOyAvLyAoS1xuVGVybWluYWwuY2hhcnNldHMuSXRhbGlhbiA9IG51bGw7IC8vIChZXG5UZXJtaW5hbC5jaGFyc2V0cy5Ob3J3ZWdpYW5EYW5pc2ggPSBudWxsOyAvLyAoRSBvciAoNlxuVGVybWluYWwuY2hhcnNldHMuU3BhbmlzaCA9IG51bGw7IC8vIChaXG5UZXJtaW5hbC5jaGFyc2V0cy5Td2VkaXNoID0gbnVsbDsgLy8gKEggb3IgKDdcblRlcm1pbmFsLmNoYXJzZXRzLlN3aXNzID0gbnVsbDsgLy8gKD1cblRlcm1pbmFsLmNoYXJzZXRzLklTT0xhdGluID0gbnVsbDsgLy8gL0FcblxuLyoqXG4gKiBIZWxwZXJzXG4gKi9cblxuZnVuY3Rpb24gb24oZWwsIHR5cGUsIGhhbmRsZXIsIGNhcHR1cmUpIHtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBjYXB0dXJlIHx8IGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gb2ZmKGVsLCB0eXBlLCBoYW5kbGVyLCBjYXB0dXJlKSB7XG4gIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgY2FwdHVyZSB8fCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIGNhbmNlbChldikge1xuICBpZiAoZXYucHJldmVudERlZmF1bHQpIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIGV2LnJldHVyblZhbHVlID0gZmFsc2U7XG4gIGlmIChldi5zdG9wUHJvcGFnYXRpb24pIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICBldi5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGluaGVyaXRzKGNoaWxkLCBwYXJlbnQpIHtcbiAgZnVuY3Rpb24gZigpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7XG4gIH1cbiAgZi5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlO1xuICBjaGlsZC5wcm90b3R5cGUgPSBuZXcgZjtcbn1cblxuLy8gaWYgYm9sZCBpcyBicm9rZW4sIHdlIGNhbid0XG4vLyB1c2UgaXQgaW4gdGhlIHRlcm1pbmFsLlxuZnVuY3Rpb24gaXNCb2xkQnJva2VuKGRvY3VtZW50KSB7XG4gIHZhciBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcbiAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBlbC5pbm5lckhUTUwgPSAnaGVsbG8gd29ybGQnO1xuICBib2R5LmFwcGVuZENoaWxkKGVsKTtcbiAgdmFyIHcxID0gZWwuc2Nyb2xsV2lkdGg7XG4gIGVsLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gIHZhciB3MiA9IGVsLnNjcm9sbFdpZHRoO1xuICBib2R5LnJlbW92ZUNoaWxkKGVsKTtcbiAgcmV0dXJuIHcxICE9PSB3Mjtcbn1cblxudmFyIFN0cmluZyA9IHRoaXMuU3RyaW5nO1xudmFyIHNldFRpbWVvdXQgPSB0aGlzLnNldFRpbWVvdXQ7XG52YXIgc2V0SW50ZXJ2YWwgPSB0aGlzLnNldEludGVydmFsO1xuXG5mdW5jdGlvbiBpbmRleE9mKG9iaiwgZWwpIHtcbiAgdmFyIGkgPSBvYmoubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgaWYgKG9ialtpXSA9PT0gZWwpIHJldHVybiBpO1xuICB9XG4gIHJldHVybiAtMTtcbn1cblxuZnVuY3Rpb24gaXNXaWRlKGNoKSB7XG4gIGlmIChjaCA8PSAnXFx1ZmYwMCcpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIChjaCA+PSAnXFx1ZmYwMScgJiYgY2ggPD0gJ1xcdWZmYmUnKVxuICAgICAgfHwgKGNoID49ICdcXHVmZmMyJyAmJiBjaCA8PSAnXFx1ZmZjNycpXG4gICAgICB8fCAoY2ggPj0gJ1xcdWZmY2EnICYmIGNoIDw9ICdcXHVmZmNmJylcbiAgICAgIHx8IChjaCA+PSAnXFx1ZmZkMicgJiYgY2ggPD0gJ1xcdWZmZDcnKVxuICAgICAgfHwgKGNoID49ICdcXHVmZmRhJyAmJiBjaCA8PSAnXFx1ZmZkYycpXG4gICAgICB8fCAoY2ggPj0gJ1xcdWZmZTAnICYmIGNoIDw9ICdcXHVmZmU2JylcbiAgICAgIHx8IChjaCA+PSAnXFx1ZmZlOCcgJiYgY2ggPD0gJ1xcdWZmZWUnKTtcbn1cblxuZnVuY3Rpb24gbWF0Y2hDb2xvcihyMSwgZzEsIGIxKSB7XG4gIHZhciBoYXNoID0gKHIxIDw8IDE2KSB8IChnMSA8PCA4KSB8IGIxO1xuXG4gIGlmIChtYXRjaENvbG9yLl9jYWNoZVtoYXNoXSAhPSBudWxsKSB7XG4gICAgcmV0dXJuIG1hdGNoQ29sb3IuX2NhY2hlW2hhc2hdO1xuICB9XG5cbiAgdmFyIGxkaWZmID0gSW5maW5pdHlcbiAgICAsIGxpID0gLTFcbiAgICAsIGkgPSAwXG4gICAgLCBjXG4gICAgLCByMlxuICAgICwgZzJcbiAgICAsIGIyXG4gICAgLCBkaWZmO1xuXG4gIGZvciAoOyBpIDwgVGVybWluYWwudmNvbG9ycy5sZW5ndGg7IGkrKykge1xuICAgIGMgPSBUZXJtaW5hbC52Y29sb3JzW2ldO1xuICAgIHIyID0gY1swXTtcbiAgICBnMiA9IGNbMV07XG4gICAgYjIgPSBjWzJdO1xuXG4gICAgZGlmZiA9IG1hdGNoQ29sb3IuZGlzdGFuY2UocjEsIGcxLCBiMSwgcjIsIGcyLCBiMik7XG5cbiAgICBpZiAoZGlmZiA9PT0gMCkge1xuICAgICAgbGkgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGRpZmYgPCBsZGlmZikge1xuICAgICAgbGRpZmYgPSBkaWZmO1xuICAgICAgbGkgPSBpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYXRjaENvbG9yLl9jYWNoZVtoYXNoXSA9IGxpO1xufVxuXG5tYXRjaENvbG9yLl9jYWNoZSA9IHt9O1xuXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE2MzM4Mjhcbm1hdGNoQ29sb3IuZGlzdGFuY2UgPSBmdW5jdGlvbihyMSwgZzEsIGIxLCByMiwgZzIsIGIyKSB7XG4gIHJldHVybiBNYXRoLnBvdygzMCAqIChyMSAtIHIyKSwgMilcbiAgICArIE1hdGgucG93KDU5ICogKGcxIC0gZzIpLCAyKVxuICAgICsgTWF0aC5wb3coMTEgKiAoYjEgLSBiMiksIDIpO1xufTtcblxuZnVuY3Rpb24gZWFjaChvYmosIGl0ZXIsIGNvbikge1xuICBpZiAob2JqLmZvckVhY2gpIHJldHVybiBvYmouZm9yRWFjaChpdGVyLCBjb24pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgIGl0ZXIuY2FsbChjb24sIG9ialtpXSwgaSwgb2JqKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBrZXlzKG9iaikge1xuICBpZiAoT2JqZWN0LmtleXMpIHJldHVybiBPYmplY3Qua2V5cyhvYmopO1xuICB2YXIga2V5LCBrZXlzID0gW107XG4gIGZvciAoa2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGtleXM7XG59XG5cbi8qKlxuICogRXhwb3NlXG4gKi9cblxuVGVybWluYWwuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuVGVybWluYWwuaW5oZXJpdHMgPSBpbmhlcml0cztcblRlcm1pbmFsLm9uID0gb247XG5UZXJtaW5hbC5vZmYgPSBvZmY7XG5UZXJtaW5hbC5jYW5jZWwgPSBjYW5jZWw7XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsO1xufSBlbHNlIHtcbiAgdGhpcy5UZXJtaW5hbCA9IFRlcm1pbmFsO1xufVxuXG59KS5jYWxsKGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcyB8fCAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWwpO1xufSgpKTtcbiIsImltcG9ydCBXaW5kb3cgZnJvbSAnLi93aW5kb3cnO1xuaW1wb3J0IFRhYiBmcm9tICcuL3RhYic7XG5pbXBvcnQgVFRZIGZyb20gJy4vdHR5JztcblxuZXhwb3J0IHsgV2luZG93LCBUYWIsIFRUWSB9OyIsImltcG9ydCB7XG5cdG9uLFxuXHRjYW5jZWwsXG5cdGluaGVyaXRzLFxuXHRzYW5pdGl6ZSxcblx0aW5kZXhPZlxufSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBUZXJtaW5hbCBmcm9tICd0ZXJtLmpzL3NyYy90ZXJtJztcblxuLyoqIFxuICogUmVwcmVzZW50cyBhIHNpbmdsZSB0ZXJtaW5hbCB0aGF0IGlzIHBhcnQgb2YgYSBzZXNzaW9uLlxuICpcbiAqIEBwYXJhbSB7V2luZG93fSBcdFx0d2luIFx0dGhlIFdpbmRvdyB0aGUgVGFiIGlzIGF0dGFjaGVkIHRvXG4gKiBAcGFyYW0ge1NvY2tldH0gXHRcdHNvY2tldCBcdHRoZSBzb2NrZXQgd2l0aCB3aGljaCB0byBzZW5kIG1lc2FnZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBcdFx0W3Rlcm1dIFx0aW5mb3JtYXRpb24gYWJvdXQgdGhlIHRlcm1pbmFsLCB1c2VkIHdoZW4gc3luY2luZ1xuICovXG5mdW5jdGlvbiBUYWIod2luLCBzb2NrZXQsIHRlcm0pIHtcblx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdHZhciBjb2xzID0gd2luLmNvbHMsXG5cdFx0cm93cyA9IHdpbi5yb3dzO1xuXG5cdC8vIEluaXRpYWxpemUgb3Vyc2VsdmVzIGFzIGEgdGVybWluYWxcblx0VGVybWluYWwuY2FsbCh0aGlzLCB7XG5cdFx0Y29sczogY29scyxcblx0XHRyb3dzOiByb3dzXG5cdH0pO1xuXG5cdC8vIFNldCB1cCB0aGUgRE9NIGVsZW1lbnRzLlxuXHR2YXIgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRFbGVtZW50KCdkaXYnKTtcblx0YnV0dG9uLmNsYXNzTmFtZSA9ICd0YWInO1xuXHRidXR0b24uaW5uZXJIVE1MID0gJ1xcdTIwMjInO1xuXG5cdG9uKGJ1dHRvbiwgJ2NsaWNrJywgZnVuY3Rpb24oZXYpIHtcblx0XHRpZiAoZXYuY3RybEtleSB8fCBldi5hbHRLZXkgfHwgZXYubWV0YUtleSB8fCBldi5zaGlmdEtleSkge1xuXHRcdFx0c2VsZi5kZXN0cm95KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNlbGYuZm9jdXMoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY2FuY2VsKGV2KTtcblx0fSk7XG5cblx0dGhpcy5zb2NrZXQgPSBzb2NrZXQ7XG5cdHRoaXMud2luZG93ID0gd2luO1xuXHR0aGlzLnNlc3Npb24gPSB3aW4uc2Vzc2lvbjtcblx0dGhpcy5idXR0b24gPSBidXR0b247XG5cdHRoaXMuZWxlbWVudCA9IG51bGw7XG5cblxuXHR0aGlzLm9wZW4oKTtcblx0dGhpcy5ob29rS2V5cygpO1xuXG5cdGlmICh0ZXJtKSB7XG5cdFx0Ly8gVGVybWluYWwgYWxyZWFkeSBvcGVuLCBqdXN0IGNoYW5nZSBzZWxmIHRvIG1hdGNoXG5cdFx0dGhpcy5pZCA9IHRlcm0uaWQ7XG5cdFx0dGhpcy5wdHkgPSB0ZXJtLnB0eTtcblx0XHR0aGlzLnNldFByb2Nlc3NOYW1lKHRlcm0ucHJvY2Vzcyk7XG5cdFx0dGhpcy5fcmVzaXplKHRlcm0uY29scywgdGVybS5yb3dzKTtcblx0fSBlbHNlIHtcblx0XHR0aGlzLmlkID0gJyc7XG5cdFx0dGhpcy5wcm9jZXNzID0gJyc7XG5cblx0XHR0aGlzLnNvY2tldC5lbWl0KCdjcmVhdGUnLCB0aGlzLnNlc3Npb24sIGNvbHMsIHJvd3MsIGZ1bmN0aW9uKGVyciwgZGF0YSkge1xuXHRcdFx0aWYgKGVycikgeyByZXR1cm4gc2VsZi5fZGVzdHJveSgpOyB9XG5cdFx0XHRzZWxmLnB0eSA9IGRhdGEucHR5O1xuXHRcdFx0c2VsZi5pZCA9IGRhdGEuaWQ7XG5cblx0XHRcdHNlbGYuc2V0UHJvY2Vzc05hbWUoZGF0YS5wcm9jZXNzKTtcblxuXHRcdFx0c2VsZi5lbWl0KCdvcGVuJyk7XG5cdFx0fSk7XG5cdH1cbn1cblxuLy8gSW5oZXJpdCBmcm9tIFRlcm1pbmFsXG5pbmhlcml0cyhUYWIsIFRlcm1pbmFsKTtcblxuLyoqXG4gKiBIYW5kbGUgdGVybWluYWwgZGF0YS5cbiAqIFxuICogQHBhcmFtICB7YmluYXJ5fSBkYXRhIHRoZSBkYXRhIHJlY2VpdmVkIGZyb20gdGhlIHRlcm1pbmFsXG4gKi9cbi8qXG4gKiBUZWNobmljYWxseSwgd2UgY291bGQgaG9vayBpbiBgdGFiLm9uKCdkYXRhJywgLi4uKWAgaW4gdGhlIGNvbnN0cnVjdG9yLFxuICogYnV0IHRoaXMgaXMgZmFzdGVyLlxuICovXG5UYWIucHJvdG90eXBlLmhhbmRsZXIgPSBmdW5jdGlvbihkYXRhKSB7XG5cdHRoaXMuc29ja2V0LmVtaXQoJ2RhdGEnLCB0aGlzLnNlc3Npb24sIHRoaXMuaWQsIGRhdGEpO1xufTtcblxuLypcbiAqIFdlIGNvdWxkIGp1c3QgaG9vayBpbiBgdGFiLm9uKCd0aXRsZScsIC4uLilgIGluIHRoZSBjb25zdHJ1Y3RvciwgYnV0IHRoaXMgaXNcbiAqIGZhc3Rlci5cbiAqL1xuVGFiLnByb3RvdHlwZS5oYW5kbGVUaXRsZSA9IGZ1bmN0aW9uKHRpdGxlKSB7XG5cdGlmICghdGl0bGUpIHsgcmV0dXJuOyB9XG5cblx0dGl0bGUgPSBzYW5pdGl6ZSh0aXRsZSk7XG5cdHRoaXMudGl0bGUgPSB0aXRsZTtcbn07XG5cblRhYi5wcm90b3R5cGUuX3dyaXRlID0gVGFiLnByb3RvdHlwZS53cml0ZTtcblxuVGFiLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0aWYgKHRoaXMud2luZG93LmZvY3VzZWQgIT09IHRoaXMpIHtcblx0XHQvLyBOb3RpZnkgdXNlciB0aGF0IHRoaXMgbm9uLWZvY3VzZWQgdGVybWluYWwgaGFzIHJlY2VpdmVkIG5ld1xuXHRcdC8vIGRhdGEuXG5cdFx0dGhpcy5idXR0b24uc3R5bGUuY29sb3IgPSAncmVkJztcblx0fVxuXHRyZXR1cm4gdGhpcy5fd3JpdGUoZGF0YSk7XG59O1xuXG5UYWIucHJvdG90eXBlLl9mb2N1cyA9IFRhYi5wcm90b3R5cGUuZm9jdXM7XG5cblRhYi5wcm90b3R5cGUuZm9jdXMgPSBmdW5jdGlvbigpIHtcblx0dmFyIGJ1dHRvbiA9IHRoaXMuYnV0dG9uLFxuXHRcdHdpbiA9IHRoaXMud2luZG93LFxuXHRcdHR0eSA9IHRoaXMudHR5O1xuXG5cdGJ1dHRvbi5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuXHRidXR0b24uc3R5bGUuY29sb3IgPSAnJztcblxuXHR0aGlzLmhhbmRsZVRpdGxlKHRoaXMudGl0bGUpO1xuXG5cdHRoaXMuX2ZvY3VzKCk7XG5cblx0d2luLmZvY3VzVGFiKHRoaXMpO1xuXG5cdHRoaXMuZW1pdCgnZm9jdXMnKTtcblx0d2luLmVtaXQoJ2ZvY3VzIHRhYicsIHRoaXMpO1xuXHR0dHkuZW1pdCgnZm9jdXMgdGFiJywgdGhpcyk7XG59O1xuXG5UYWIucHJvdG90eXBlLnVuZm9jdXMgPSBmdW5jdGlvbigpIHtcblx0dmFyIGJ1dHRvbiA9IHRoaXMuYnV0dG9uO1xuXG5cdGJ1dHRvbi5zdHlsZS5mb250V2VpZ2h0ID0gJyc7XG59O1xuXG5UYWIucHJvdG90eXBlLl9yZXNpemUgPSBUYWIucHJvdG90eXBlLnJlc2l6ZTtcblxuVGFiLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbihjb2xzLCByb3dzKSB7XG5cdHZhciB3aW4gPSB0aGlzLndpbmRvdyxcblx0XHR0dHkgPSB0aGlzLnR0eTtcblxuXHR0aGlzLnNvY2tldC5lbWl0KCdyZXNpemUnLCB0aGlzLnNlc3Npb24sIHRoaXMuaWQsIGNvbHMsIHJvd3MpO1xuXHR0aGlzLl9yZXNpemUoY29scywgcm93cyk7XG5cblx0dGhpcy5lbWl0KCdyZXNpemUnLCBjb2xzLCByb3dzKTtcblx0d2luLmVtaXQoJ3Jlc2l6ZSB0YWInLCB0aGlzLCBjb2xzLCByb3dzKTtcblx0dHR5LmVtaXQoJ3Jlc2l6ZSB0YWInLCB0aGlzLCBjb2xzLCByb3dzKTtcbn07XG5cblRhYi5wcm90b3R5cGUuX19kZXN0cm95ID0gVGFiLnByb3RvdHlwZS5kZXN0cm95O1xuXG5UYWIucHJvdG90eXBlLl9kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdGlmICh0aGlzLmRlc3Ryb3llZCkgeyByZXR1cm47IH1cblx0dGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuXG5cdHZhciB3aW4gPSB0aGlzLndpbmRvdztcblxuXHR0aGlzLmJ1dHRvbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuYnV0dG9uKTtcblx0aWYgKHRoaXMuZWxlbWVudC5wYXJlbnROb2RlKSB7XG5cdFx0dGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcblx0fVxuXG5cdHdpbi5yZW1vdmVUYWIodGhpcyk7XG5cblx0dGhpcy5fX2Rlc3Ryb3koKTtcbn07XG5cblRhYi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy5kZXN0cm95ZWQpIHsgcmV0dXJuOyB9XG5cblx0dGhpcy5zb2NrZXQuZW1pdCgna2lsbCcsIHRoaXMuc2Vzc2lvbiwgdGhpcy5pZCk7XG5cdHRoaXMuX2Rlc3Ryb3koKTtcblxuXHR0aGlzLmVtaXQoJ2Nsb3NlJyk7XG5cdHRoaXMud2luZG93LmVtaXQoJ2Nsb3NlIHRhYicsIHRoaXMpO1xuXHR0aGlzLnR0eS5lbWl0KCdjbG9zZSB0YWInLCB0aGlzKTtcbn07XG5cblRhYi5wcm90b3R5cGUuaG9va0tleXMgPSBmdW5jdGlvbigpIHtcblx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdC8vIEFsdC1bamtdIHRvIHF1aWNrbHkgc3dhcCBiZXR3ZWVuIHdpbmRvd3Ncblx0dGhpcy5vbigna2V5JywgZnVuY3Rpb24oa2V5KSB7XG5cdFx0aWYgKFRlcm1pbmFsLmZvY3VzS2V5cyA9PT0gZmFsc2UpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgdHR5ID0gc2VsZi50dHksXG5cdFx0XHR3aW5kb3dzID0gdHR5LndpbmRvd3M7XG5cdFx0dmFyIG9mZnNldCwgaTtcblxuXHRcdGlmIChrZXkgPT09ICdcXHgxYmonKSB7XG5cdFx0XHRvZmZzZXQgPSAtMTtcblx0XHR9IGVsc2UgaWYgKGtleSA9PT0gJ1xceDFiaycpIHtcblx0XHRcdG9mZnNldCA9ICsxO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aSA9IGluZGV4T2Yoc2VsZi50dHkud2luZG93cywgc2VsZi53aW5kb3cpICsgb2Zmc2V0O1xuXG5cdFx0c2VsZi5faWdub3JlTmV4dCgpO1xuXG5cdFx0aWYgKHdpbmRvd3NbaV0pIHtcblx0XHRcdHJldHVybiB3aW5kb3dzW2ldLmhpZ2hsaWdodCgpO1xuXHRcdH1cblxuXHRcdGlmIChvZmZzZXQgPiAwKSB7XG5cdFx0XHRpZiAod2luZG93c1swXSkgeyByZXR1cm4gd2luZG93c1swXS5oaWdobGlnaHQoKTsgfVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpID0gd2luZG93cy5sZW5ndGggLSAxO1xuXHRcdFx0aWYgKHdpbmRvd3NbaV0pIHsgcmV0dXJuIHdpbmRvd3NbaV0uaGlnaGxpZ2h0KCk7IH1cblx0XHR9XG5cblx0XHRyZXR1cm4gc2VsZi53aW5kb3cuaGlnaGxpZ2h0KCk7XG5cdH0pO1xuXG5cdHRoaXMub24oJ3JlcXVlc3QgcGFzdGUnLCBmdW5jdGlvbigpIHtcblx0XHRzZWxmLnNvY2tldC5lbWl0KCdyZXF1ZXN0IHBhc3RlJywgZnVuY3Rpb24oZXJyLCB0ZXh0KSB7XG5cdFx0XHRpZiAoZXJyKSB7IHJldHVybjsgfVxuXHRcdFx0c2VsZi5zZW5kKHRleHQpO1xuXHRcdH0pO1xuXHR9KTtcblxuXHR0aGlzLm9uKCdyZXF1ZXN0IGNyZWF0ZScsIGZ1bmN0aW9uKCkge1xuXHRcdHNlbGYud2luZG93LmNyZWF0ZVRhYigpO1xuXHR9KTtcblxuXHR0aGlzLm9uKCdyZXF1ZXN0IHRlcm0nLCBmdW5jdGlvbihrZXkpIHtcblx0XHRpZiAoc2VsZi53aW5kb3cudGFic1trZXldKSB7XG5cdFx0XHRzZWxmLndpbmRvdy50YWJzW2tleV0uZm9jdXMoKTtcblx0XHR9XG5cdH0pO1xuXG5cdHRoaXMub24oJ3JlcXVlc3QgdGVybSBuZXh0JywgZnVuY3Rpb24oKSB7XG5cdFx0c2VsZi53aW5kb3cubmV4dFRhYigpO1xuXHR9KTtcblxuXHR0aGlzLm9uKCdyZXF1ZXN0IHRlcm0gcHJldmlvdXMnLCBmdW5jdGlvbigpIHtcblx0XHRzZWxmLndpbmRvdy5wcmV2aW91c1RhYigpO1xuXHR9KTtcbn07XG5cblRhYi5wcm90b3R5cGUuX2lnbm9yZU5leHQgPSBmdW5jdGlvbigpIHtcblx0Ly8gRG9uJ3Qgc2VuZCB0aGUgbmV4dCBrZXlcblx0dmFyIGhhbmRsZXIgPSB0aGlzLmhhbmRsZXI7XG5cdHRoaXMuaGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG5cdH07XG5cblx0dmFyIHNob3dDdXJzb3IgPSB0aGlzLnNob3dDdXJzb3I7XG5cdHRoaXMuc2hvd0N1cnNvciA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuc2hvd0N1cnNvciA9IHNob3dDdXJzb3I7XG5cdH07XG59O1xuXG4vKipcbiAqIFByb2dyYW0tc3BlY2lmaWMgZmVhdHVyZXNcbiAqL1xuXG5UYWIuc2Nyb2xsYWJsZSA9IHtcblx0aXJzc2k6IHRydWUsXG5cdG1hbjogdHJ1ZSxcblx0bGVzczogdHJ1ZSxcblx0aHRvcDogdHJ1ZSxcblx0dG9wOiB0cnVlLFxuXHR3M206IHRydWUsXG5cdGx5bng6IHRydWUsXG5cdG1vY3A6IHRydWVcbn07XG5cblRhYi5wcm90b3R5cGUuX2JpbmRNb3VzZSA9IFRhYi5wcm90b3R5cGUuYmluZE1vdXNlO1xuXG5UYWIucHJvdG90eXBlLmJpbmRNb3VzZSA9IGZ1bmN0aW9uKCkge1xuXHRpZiAoIVRlcm1pbmFsLnByb2dyYW1GZWF0dXJlcykgeyByZXR1cm4gdGhpcy5fYmluZE1vdXNlKCk7IH1cblxuXHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0dmFyIHdoZWVsRXZlbnQgPSAnb25tb3VzZXdoZWVsJyBpbiB3aW5kb3cgP1xuXHRcdCdtb3VzZXdoZWVsJyA6XG5cdFx0J0RPTU1vdXNlU2Nyb2xsJztcblxuXHRvbihzZWxmLmVsZW1lbnQsIHdoZWVsRXZlbnQsIGZ1bmN0aW9uKGV2KSB7XG5cdFx0aWYgKHNlbGYubW91c2VFdmVudHMpIHsgcmV0dXJuOyB9XG5cdFx0aWYgKCFUYWIuc2Nyb2xsYWJsZVtzZWxmLnByb2Nlc3NdKSB7IHJldHVybjsgfVxuXG5cdFx0aWYgKChldi50eXBlID09PSAnbW91c2V3aGVlbCcgJiYgZXYud2hlZWxEZWx0YVkgPiAwKSB8fFxuXHRcdFx0KGV2LnR5cGUgPT09ICdET01Nb3VzZVNjcm9sbCcgJiYgZXYuZGV0YWlsIDwgMCkpIHtcblx0XHRcdC8vIHBhZ2UgdXBcblx0XHRcdHNlbGYua2V5RG93bih7a2V5Q29kZTogMzN9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGFnZSBkb3duXG5cdFx0XHRzZWxmLmtleURvd24oe2tleUNvZGU6IDM0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNhbmNlbChldik7XG5cdH0pO1xuXG5cdHJldHVybiB0aGlzLl9iaW5kTW91c2UoKTtcbn07XG5cblRhYi5wcm90b3R5cGUucG9sbFByb2Nlc3NOYW1lID0gZnVuY3Rpb24oZnVuYykge1xuXHR2YXIgc2VsZiA9IHRoaXM7XG5cdHRoaXMuc29ja2V0LmVtaXQoJ3Byb2Nlc3MnLCB0aGlzLnNlc3Npb24sIHRoaXMuaWQsIGZ1bmN0aW9uKGVyciwgbmFtZSkge1xuXHRcdGlmIChlcnIpIHtcblx0XHRcdHJldHVybiBmdW5jICYmIGZ1bmMoZXJyKTtcblx0XHR9XG5cblx0XHRzZWxmLnNldFByb2Nlc3NOYW1lKG5hbWUpO1xuXHRcdHJldHVybiBmdW5jICYmIGZ1bmMobnVsbCwgbmFtZSk7XG5cdH0pO1xufTtcblxuVGFiLnByb3RvdHlwZS5zZXRQcm9jZXNzTmFtZSA9IGZ1bmN0aW9uKG5hbWUpIHtcblx0bmFtZSA9IHNhbml0aXplKG5hbWUpO1xuXG5cdGlmICh0aGlzLnByb2Nlc3MgIT09IG5hbWUpIHtcblx0XHR0aGlzLmVtaXQoJ3Byb2Nlc3MnLCBuYW1lKTtcblx0fVxuXG5cdHRoaXMucHJvY2VzcyA9IG5hbWU7XG5cdHRoaXMuYnV0dG9uLnRpdGxlID0gbmFtZTtcbn07XG5cbi8qKlxuICogRXhwb3J0c1xuICovXG5leHBvcnQgZGVmYXVsdCBUYWI7IiwiaW1wb3J0IFdpbmRvdyBmcm9tICcuL3dpbmRvdyc7XG5pbXBvcnQge1xuXHRFdmVudEVtaXR0ZXJcbn0gZnJvbSAnLi91dGlscyc7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGNvbm5lY3Rpb24gdG8gYSByZW1vdGUgbWFjaGluZS5cbiAqL1xuY2xhc3MgVFRZIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcblx0Y29uc3RydWN0b3Iob3B0cykge1xuXHRcdHN1cGVyKCk7XG5cdFx0dmFyIHNvY2tldCA9IHRoaXMuc29ja2V0ID0gb3B0cy5zb2NrZXQ7XG5cdFx0dGhpcy5yb290ID0gb3B0cy5yb290O1xuXG5cdFx0dGhpcy5zZXNzaW9ucyA9IG5ldyBNYXAoKTtcblx0XHR0aGlzLndpbmRvd3MgPSBuZXcgTWFwKCk7XG5cblx0XHRzb2NrZXQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnJlc2V0KCk7XG5cdFx0XHR0aGlzLmVtaXQoJ2Nvbm5lY3QnKTtcblx0XHR9KTtcblxuXHRcdHNvY2tldC5vbignc2Vzc2lvbiBjcmVhdGVkJywgKHNlc3Npb24pID0+IHtcblx0XHRcdHRoaXMuc2Vzc2lvbnMuc2V0KHNlc3Npb24uaWQsIHNlc3Npb24pO1xuXHRcdFx0dGhpcy5lbWl0KCdzZXNzaW9uIGNyZWF0ZWQnLCBzZXNzaW9uKTtcblx0XHR9KTtcblxuXHRcdHNvY2tldC5vbignc2Vzc2lvbiBjbG9zZWQnLCAoc2Vzc2lvbklEKSA9PiB7XG5cdFx0XHR0aGlzLnNlc3Npb25zLmRlbGV0ZShzZXNzaW9uSUQpO1xuXHRcdFx0dGhpcy5lbWl0KCdzZXNzaW9uIGNsb3NlZCcsIHNlc3Npb25JRCk7XG5cblx0XHRcdGlmICh0aGlzLndpbmRvd3MuaGFzKHNlc3Npb25JRCkpIHtcblx0XHRcdFx0dGhpcy53aW5kb3dzLmdldChzZXNzaW9uSUQpLmRlc3Ryb3koKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHNvY2tldC5vbignZGF0YScsIChzaWQsIHRpZCwgZGF0YSkgPT4ge1xuXHRcdFx0aWYgKHRoaXMud2luZG93cy5oYXMoc2lkKSkge1xuXHRcdFx0XHR0aGlzLndpbmRvd3MuZ2V0KHNpZCkud3JpdGUodGlkLCBkYXRhKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHNvY2tldC5vbigna2lsbCcsIChzaWQsIHRpZCkgPT4ge1xuXHRcdFx0aWYgKHRoaXMud2luZG93cy5oYXMoc2lkKSkge1xuXHRcdFx0XHR0aGlzLndpbmRvd3MuZ2V0KHNpZCkua2lsbCh0aWQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0c29ja2V0Lm9uKCdzeW5jJywgKHNpZCwgdGVybXMpID0+IHtcblx0XHRcdGlmICh0aGlzLndpbmRvd3MuaGFzKHNpZCkpIHtcblx0XHRcdFx0dGhpcy53aW5kb3dzLmdldChzaWQpLnN5bmModGVybXMpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aWYgKG9wdHMuYXV0b1BvbGwpIHtcblx0XHRcdHRoaXMucG9sbGVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnBvbGxTZXNzaW9ucygpO1xuXHRcdFx0fSwgb3B0cy5hdXRvUG9sbCk7XG5cdFx0fVxuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHRpZiAodGhpcy5kZXN0cm95ZWQpIHsgcmV0dXJuOyB9XG5cdFx0dGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuXG5cdFx0aWYgKHRoaXMucG9sbGVyKSB7XG5cdFx0XHRjbGVhckludGVydmFsKHRoaXMucG9sbGVyKTtcblx0XHRcdGRlbGV0ZSB0aGlzLnBvbGxlcjtcblx0XHR9XG5cblx0XHR0aGlzLnNlc3Npb25zLmNsZWFyKCk7XG5cdFx0dGhpcy53aW5kb3dzLmZvckVhY2goKHdpbikgPT4ge1xuXHRcdFx0d2luLmRlc3Ryb3koKTtcblx0XHR9KTtcblx0fVxuXG5cdHJlc2V0KCkge1xuXHRcdHRoaXMuc2Vzc2lvbnMuY2xlYXIoKTtcblx0XHR0aGlzLndpbmRvd3MuZm9yRWFjaCgod2luKSA9PiB7XG5cdFx0XHR3aW4uZGVzdHJveSgpO1xuXHRcdH0pO1xuXHRcdHRoaXMud2luZG93cy5jbGVhcigpO1xuXG5cdFx0dGhpcy5lbWl0KCdyZXNldCcpO1xuXHR9XG5cblx0bmV3U2Vzc2lvbigpIHtcblx0XHR0aGlzLnNvY2tldC5lbWl0KCduZXcgc2Vzc2lvbicsIChlcnIsIHNlc3Npb24pID0+IHtcblx0XHRcdGlmIChlcnIpIHtcblx0XHRcdFx0dGhpcy5lbWl0KCdlcnJvcicsIHsgYWN0aW9uOiAnbmV3U2Vzc2lvbicsIGVycm9yOiBlcnJ9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2Vzc2lvbnMuc2V0KHNlc3Npb24uaWQsIHNlc3Npb24pO1xuXHRcdFx0XHR0aGlzLm5ld1dpbmRvdyhzZXNzaW9uLmlkKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdG5ld1dpbmRvdyhzZXNzaW9uSUQpIHtcblx0XHR2YXIgc2Vzc2lvbnMgPSB0aGlzLnNlc3Npb25zLFxuXHRcdFx0d2luZG93cyA9IHRoaXMud2luZG93cztcblxuXHRcdGlmICh3aW5kb3dzLmhhcyhzZXNzaW9uSUQpIHx8ICFzZXNzaW9ucy5oYXMoc2Vzc2lvbklEKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc29ja2V0LmVtaXQoJ2F0dGFjaCcsIHNlc3Npb25JRCk7XG5cdFx0XHR2YXIgd2luID0gbmV3IFdpbmRvdyh0aGlzLCBzZXNzaW9uSUQsIHRoaXMuc29ja2V0KTtcblx0XHRcdHdpbmRvd3Muc2V0KHNlc3Npb25JRCwgd2luKTtcblxuXHRcdFx0d2luLm9uY2UoJ29wZW4nLCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuZW1pdCgnb3BlbiB3aW5kb3cnLCB3aW4pO1xuXHRcdFx0fSk7XG5cblx0XHRcdHdpbi5vbignY2xvc2UnLCAoKSA9PiB7XG5cdFx0XHRcdHdpbmRvd3MuZGVsZXRlKHNlc3Npb25JRCk7XG5cdFx0XHRcdHRoaXMuc29ja2V0LmVtaXQoJ2RldGF0Y2gnLCBzZXNzaW9uSUQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiB3aW47XG5cdFx0fVxuXHR9XG5cblx0cG9sbFNlc3Npb25zKCkge1xuXHRcdHRoaXMuc29ja2V0LmVtaXQoJ2xpc3Qgc2Vzc2lvbnMnLCAoZXJyLCBzZXNzaW9ucykgPT4ge1xuXHRcdFx0aWYgKGVycikge1xuXHRcdFx0XHR0aGlzLmVtaXQoJ2Vycm9yJywge2FjdGlvbjogJ3BvbGxTZXNzaW9ucycsIGVycjogZXJyfSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zZXNzaW9ucy5jbGVhcigpO1xuXHRcdFx0T2JqZWN0LmtleXMoc2Vzc2lvbnMpLmZvckVhY2goKHNpZCkgPT4ge1xuXHRcdFx0XHR0aGlzLnNlc3Npb25zLnNldChzaWQsIHNlc3Npb25zW3NpZF0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuZW1pdCgnc2Vzc2lvbnMgbGlzdCcsIHNlc3Npb25zKTtcblx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBUVFk7IiwiaW1wb3J0IFRlcm1pbmFsIGZyb20gJ3Rlcm0uanMvc3JjL3Rlcm0nO1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBpbmRleE9mKG9iaiwgZWwpIHtcblx0dmFyIGkgPSBvYmoubGVuZ3RoO1xuXHR3aGlsZSAoaS0tKSB7XG5cdFx0aWYgKG9ialtpXSA9PT0gZWwpIHtcblx0XHRcdHJldHVybiBpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gLTE7XG59XG5cbmZ1bmN0aW9uIHNwbGljZShvYmosIGVsKSB7XG5cdHZhciBpID0gaW5kZXhPZihvYmosIGVsKTtcblx0aWYgKH5pKSB7XG5cdFx0b2JqLnNwbGljZShpLCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBzYW5pdGl6ZSh0ZXh0KSB7XG5cdGlmICghdGV4dCkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHJldHVybiAodGV4dCArICcnKS5yZXBsYWNlKC9bJjw+XS9nLCAnJyk7XG59XG5cbmV4cG9ydCB7IGluZGV4T2YsIHNwbGljZSwgc2FuaXRpemUgfTtcblxuLyoqXG4gKiBFeHBvcnRzIGZyb20gb3RoZXIgcGFja2FnZXNcbiAqL1xuZXhwb3J0IHZhciBFdmVudEVtaXR0ZXIgPSBUZXJtaW5hbC5FdmVudEVtaXR0ZXI7XG5leHBvcnQgdmFyIGluaGVyaXRzID0gVGVybWluYWwuaW5oZXJpdHM7XG5leHBvcnQgdmFyIG9uID0gVGVybWluYWwub247XG5leHBvcnQgdmFyIG9mZiA9IFRlcm1pbmFsLm9mZjtcbmV4cG9ydCB2YXIgY2FuY2VsID0gVGVybWluYWwuY2FuY2VsOyIsImltcG9ydCB7XG5cdEV2ZW50RW1pdHRlcixcblx0aW5oZXJpdHMsXG5cdG9uLFxuXHRvZmYsXG5cdGNhbmNlbFxufSBmcm9tICcuL3V0aWxzJztcblxuaW1wb3J0IFRhYiBmcm9tICcuL3RhYic7XG5cbmltcG9ydCBUZXJtaW5hbCBmcm9tICd0ZXJtLmpzL3NyYy90ZXJtJztcblxuLyoqXG4gKiBXaW5kb3dcbiAqL1xuZnVuY3Rpb24gV2luZG93KHR0eSwgc2Vzc2lvbiwgc29ja2V0KSB7XG5cdHZhciBzZWxmID0gdGhpcztcblxuXHRFdmVudEVtaXR0ZXIuY2FsbCh0aGlzKTtcblxuXHR2YXIgZWwsIGdyaXAsIGJhciwgYnV0dG9uLCB0aXRsZTtcblxuXHRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRlbC5jbGFzc05hbWUgPSAnd2luZG93JztcblxuXHRncmlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGdyaXAuY2xhc3NOYW1lID0gJ2dyaXAnO1xuXG5cdGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRiYXIuY2xhc3NOYW1lID0gJ2Jhcic7XG5cblx0YnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGJ1dHRvbi5pbm5lckhUTUwgPSAnfic7XG5cdGJ1dHRvbi50aXRsZSA9ICduZXcvY2xvc2UnO1xuXHRidXR0b24uY2xhc3NOYW1lID0gJ3RhYic7XG5cblx0dGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dGl0bGUuY2xhc3NOYW1lID0gJ3RpdGxlJztcblx0dGl0bGUuaW5uZXJIVE1MID0gJyc7XG5cblx0dGhpcy50dHkgPSB0dHk7XG5cdHRoaXMuc2Vzc2lvbiA9IHNlc3Npb247XG5cdHRoaXMuc29ja2V0ID0gc29ja2V0O1xuXHR0aGlzLmVsZW1lbnQgPSBlbDtcblx0dGhpcy5ncmlwID0gZ3JpcDtcblx0dGhpcy5iYXIgPSBiYXI7XG5cdHRoaXMuYnV0dG9uID0gYnV0dG9uO1xuXHR0aGlzLnRpdGxlID0gdGl0bGU7XG5cblx0dGhpcy50YWJzID0gbmV3IE1hcCgpO1xuXHR0aGlzLmZvY3VzZWQgPSBudWxsO1xuXG5cdHRoaXMuY29scyA9IFRlcm1pbmFsLmdlb21ldHJ5WzBdO1xuXHR0aGlzLnJvd3MgPSBUZXJtaW5hbC5nZW9tZXRyeVsxXTtcblxuXHRlbC5hcHBlbmRDaGlsZChncmlwKTtcblx0ZWwuYXBwZW5kQ2hpbGQoYmFyKTtcblx0YmFyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cdGJhci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cblx0dmFyIGZpcnN0VGFiID0gdGhpcy5jcmVhdGVUYWIoKTtcblx0dGhpcy5mb2N1cygpO1xuXHR0aGlzLmJpbmQoKTtcblxuXHRmaXJzdFRhYi5vbmNlKCdvcGVuJywgZnVuY3Rpb24oKSB7XG5cdFx0c2VsZi5lbWl0KCdvcGVuJyk7XG5cdH0pO1xufVxuXG5pbmhlcml0cyhXaW5kb3csIEV2ZW50RW1pdHRlcik7XG5cbldpbmRvdy5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0ZWwgPSB0aGlzLmVsZW1lbnQsXG5cdFx0YmFyID0gdGhpcy5iYXIsXG5cdFx0Z3JpcCA9IHRoaXMuZ3JpcCxcblx0XHRidXR0b24gPSB0aGlzLmJ1dHRvbixcblx0XHRsYXN0ID0gMDtcblxuXHRvbihidXR0b24sICdjbGljaycsIGZ1bmN0aW9uKGV2KSB7XG5cdFx0aWYgKGV2LmN0cmxLZXkgfHwgZXYuYWx0S2V5IHx8IGV2Lm1ldGFLZXkgfHwgZXYuc2hpZnRLZXkpIHtcblx0XHRcdHNlbGYuZGVzdHJveSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZWxmLmNyZWF0ZVRhYigpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjYW5jZWwoZXYpO1xuXHR9KTtcblxuXHRvbihncmlwLCAnbW91c2Vkb3duJywgZnVuY3Rpb24oZXYpIHtcblx0XHRzZWxmLmZvY3VzKCk7XG5cdFx0c2VsZi5yZXNpemluZyhldik7XG5cdFx0cmV0dXJuIGNhbmNlbChldik7XG5cdH0pO1xuXG5cdG9uKGVsLCAnbW91c2Vkb3duJywgZnVuY3Rpb24oZXYpIHtcblx0XHRpZiAoZXYudGFyZ2V0ICE9PSBlbCAmJiBldi50YXJnZXQgIT09IGJhcikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHNlbGYuZm9jdXMoKTtcblxuXHRcdGNhbmNlbChldik7XG5cblx0XHR2YXIgbm93ID0gbmV3IERhdGUoRGF0ZS5ub3coKSk7XG5cdFx0aWYgKG5vdyAtIGxhc3QgPCA2MDApIHtcblx0XHRcdHJldHVybiBzZWxmLm1heGltaXplKCk7XG5cdFx0fVxuXHRcdGxhc3QgPSBub3c7XG5cblx0XHRyZXR1cm4gY2FuY2VsKGV2KTtcblx0fSk7XG59O1xuXG5XaW5kb3cucHJvdG90eXBlLmZvY3VzID0gZnVuY3Rpb24oKSB7XG5cdC8vIFJlc3RhY2tcblx0dmFyIHBhcmVudCA9IHRoaXMuZWxlbWVudC5wYXJlbnROb2RlO1xuXHRpZiAocGFyZW50KSB7XG5cdFx0cGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG5cdFx0cGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG5cdH1cblxuXHR0aGlzLmVtaXQoJ2ZvY3VzJyk7XG59O1xuXG5XaW5kb3cucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0aWYgKHRoaXMuZGVzdHJveWVkKSB7IHJldHVybjsgfVxuXHR0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG5cblx0aWYgKHRoaXMubWluaW1pemUpIHsgdGhpcy5taW5pbWl6ZSgpOyB9XG5cblx0aWYgKHRoaXMuZWxlbWVudC5wYXJlbnROb2RlKSB7XG5cdFx0dGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcblx0fVxuXG5cdHRoaXMuZWFjaChmdW5jdGlvbih0ZXJtKSB7XG5cdFx0dGVybS5kZXN0cm95KCk7XG5cdH0pO1xuXG5cdHRoaXMuZW1pdCgnY2xvc2UnKTtcbn07XG5cbldpbmRvdy5wcm90b3R5cGUuZHJhZyA9IGZ1bmN0aW9uKGV2KSB7XG5cdHZhciBzZWxmID0gdGhpcyxcblx0XHRlbCA9IHRoaXMuZWxlbWVudCxcblx0XHR0dHkgPSB0aGlzLnR0eSxcblx0XHRyb290ID0gdHR5LnJvb3Q7XG5cblx0aWYgKHRoaXMubWluaW1pemUpIHsgcmV0dXJuOyB9XG5cblx0dmFyIGRyYWcgPSB7XG5cdFx0bGVmdDogZWwub2Zmc2V0TGVmdCxcblx0XHR0b3A6IGVsLm9mZnNldFRvcCxcblx0XHRwYWdlWDogZXYucGFnZVgsXG5cdFx0cGFnZVk6IGV2LnBhZ2VZXG5cdH07XG5cblx0ZWwuc3R5bGUub3BhY2l0eSA9ICcwLjYwJztcblx0ZWwuc3R5bGUuY3Vyc29yID0gJ21vdmUnO1xuXHRyb290LnN0eWxlLmN1cnNvciA9ICdtb3ZlJztcblxuXHRmdW5jdGlvbiBtb3ZlKGV2KSB7XG5cdFx0ZWwuc3R5bGUubGVmdCA9XG5cdFx0XHQoZHJhZy5sZWZ0ICsgZXYucGFnZVggLSBkcmFnLnBhZ2VYKSArICdweCc7XG5cdFx0ZWwuc3R5bGUudG9wID1cblx0XHRcdChkcmFnLnRvcCArIGV2LnBhZ2VZIC0gZHJhZy5wYWdlWSkgKyAncHgnO1xuXHR9XG5cblx0ZnVuY3Rpb24gdXAoKSB7XG5cdFx0ZWwuc3R5bGUub3BhY2l0eSA9ICcnO1xuXHRcdGVsLnN0eWxlLmN1cnNvciA9ICcnO1xuXHRcdHJvb3Quc3R5bGUuY3Vyc29yID0gJyc7XG5cblx0XHRvZmYoZG9jdW1lbnQsICdtb3VzZW1vdmUnLCBtb3ZlKTtcblx0XHRvZmYoZG9jdW1lbnQsICdtb3VzZXVwJywgdXApO1xuXG5cdFx0dmFyIGV2ID0ge1xuXHRcdFx0bGVmdDogZWwuc3R5bGUubGVmdC5yZXBsYWNlKC9cXHcrL2csICcnKSxcblx0XHRcdHRvcDogZWwuc3R5bGUudG9wLnJlcGxhY2UoL1xcdysvZywgJycpXG5cdFx0fTtcblxuXHRcdHNlbGYuZW1pdCgnZHJhZycsIGV2KTtcblx0fVxuXG5cdG9uKGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgbW92ZSk7XG5cdG9uKGRvY3VtZW50LCAnbW91c2V1cCcsIHVwKTtcbn07XG5cbldpbmRvdy5wcm90b3R5cGUucmVzaXppbmcgPSBmdW5jdGlvbigpIHtcblx0dmFyIHNlbGYgPSB0aGlzLFxuXHRcdGVsID0gdGhpcy5lbGVtZW50LFxuXHRcdHRlcm0gPSB0aGlzLmZvY3VzZWQsXG5cdFx0dHR5ID0gdGhpcy50dHksXG5cdFx0cm9vdCA9IHR0eS5yb290O1xuXG5cdGlmICh0aGlzLm1pbmltaXplKSB7XG5cdFx0ZGVsZXRlIHRoaXMubWluaW1pemU7XG5cdH1cblxuXHR2YXIgcmVzaXplID0ge1xuXHRcdHc6IGVsLmNsaWVudFdpZHRoLFxuXHRcdGg6IGVsLmNsaWVudEhlaWdodFxuXHR9O1xuXG5cdGVsLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cdGVsLnN0eWxlLm9wYWNpdHkgPSAnMC43MCc7XG5cdGVsLnN0eWxlLmN1cnNvciA9ICdzZS1yZXNpemUnO1xuXHRyb290LnN0eWxlLmN1cnNvciA9ICdzZS1yZXNpemUnO1xuXHR0ZXJtLmVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuXG5cdGZ1bmN0aW9uIG1vdmUoZXYpIHtcblx0XHR2YXIgeCwgeTtcblx0XHR5ID0gZWwub2Zmc2V0SGVpZ2h0IC0gdGVybS5lbGVtZW50LmNsaWVudEhlaWdodDtcblx0XHR4ID0gZXYucGFnZVggLSBlbC5vZmZzZXRMZWZ0O1xuXHRcdHkgPSAoZXYucGFnZVkgLSBlbC5vZmZzZXRUb3ApIC0geTtcblx0XHRlbC5zdHlsZS53aWR0aCA9IHggKyAncHgnO1xuXHRcdGVsLnN0eWxlLmhlaWdodCA9IHkgKyAncHgnO1xuXHR9XG5cblx0ZnVuY3Rpb24gdXAoKSB7XG5cdFx0dmFyIHgsIHk7XG5cblx0XHR4ID0gZWwuY2xpZW50V2lkdGggLyByZXNpemUudztcblx0XHR5ID0gZWwuY2xpZW50SGVpZ2h0IC8gcmVzaXplLmg7XG5cdFx0eCA9ICh4ICogdGVybS5jb2xzKSB8IDA7XG5cdFx0eSA9ICh5ICogdGVybS5yb3dzKSB8IDA7XG5cblx0XHRzZWxmLnJlc2l6ZSh4LCB5KTtcblxuXHRcdGVsLnN0eWxlLndpZHRoID0gJyc7XG5cdFx0ZWwuc3R5bGUuaGVpZ2h0ID0gJyc7XG5cblx0XHRlbC5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuXHRcdGVsLnN0eWxlLm9wYWNpdHkgPSAnJztcblx0XHRlbC5zdHlsZS5jdXJzb3IgPSAnJztcblx0XHRyb290LnN0eWxlLmN1cnNvciA9ICcnO1xuXHRcdHRlcm0uZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnJztcblxuXHRcdG9mZihkb2N1bWVudCwgJ21vdXNlbW92ZScsIG1vdmUpO1xuXHRcdG9mZihkb2N1bWVudCwgJ21vdXNldXAnLCB1cCk7XG5cdH1cblxuXHRvbihkb2N1bWVudCwgJ21vdXNlbW92ZScsIG1vdmUpO1xuXHRvbihkb2N1bWVudCwgJ21vdXNldXAnLCB1cCk7XG59O1xuXG5XaW5kb3cucHJvdG90eXBlLm1heGltaXplID0gZnVuY3Rpb24oKSB7XG5cdGlmICh0aGlzLm1pbmltaXplKSB7IHJldHVybiB0aGlzLm1pbmltaXplKCk7IH1cblxuXHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0ZWwgPSB0aGlzLmVsZW1lbnQsXG5cdFx0dGVybSA9IHRoaXMuZm9jdXNlZCxcblx0XHR0dHkgPSB0aGlzLnR0eSxcblx0XHRyb290ID0gdHR5LnJvb3QsXG5cdFx0eCxcblx0XHR5O1xuXG5cdHZhciBtID0ge1xuXHRcdGNvbHM6IHRlcm0uY29scyxcblx0XHRyb3dzOiB0ZXJtLnJvd3MsXG5cdFx0bGVmdDogZWwub2Zmc2V0TGVmdCxcblx0XHR0b3A6IGVsLm9mZnNldFRvcCxcblx0XHRyb290OiByb290LmNsYXNzTmFtZVxuXHR9O1xuXG5cdHRoaXMubWluaW1pemUgPSBmdW5jdGlvbigpIHtcblx0XHRkZWxldGUgdGhpcy5taW5pbWl6ZTtcblxuXHRcdGVsLnN0eWxlLmxlZnQgPSBtLmxlZnQgKyAncHgnO1xuXHRcdGVsLnN0eWxlLnRvcCA9IG0udG9wICsgJ3B4Jztcblx0XHRlbC5zdHlsZS53aWR0aCA9ICcnO1xuXHRcdGVsLnN0eWxlLmhlaWdodCA9ICcnO1xuXHRcdHRlcm0uZWxlbWVudC5zdHlsZS53aWR0aCA9ICcnO1xuXHRcdHRlcm0uZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnJztcblx0XHRlbC5zdHlsZS5ib3hTaXppbmcgPSAnJztcblx0XHRzZWxmLmdyaXAuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdHJvb3QuY2xhc3NOYW1lID0gbS5yb290O1xuXG5cdFx0c2VsZi5yZXNpemUobS5jb2xzLCBtLnJvd3MpO1xuXG5cdFx0c2VsZi5lbWl0KCdtaW5pbWl6ZScpO1xuXHR9O1xuXG5cdC8vIFRPRE86IFByb2JhYmx5IHNjcm9sbCByZWxhdGl2ZSB0byByb290XG5cdHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcblxuXHR4ID0gcm9vdC5jbGllbnRXaWR0aCAvIHRlcm0uZWxlbWVudC5vZmZzZXRXaWR0aDtcblx0eSA9IHJvb3QuY2xpZW50SGVpZ2h0IC8gdGVybS5lbGVtZW50Lm9mZnNldEhlaWdodDtcblx0eCA9ICh4ICogdGVybS5jb2xzKSB8IDA7XG5cdHkgPSAoeSAqIHRlcm0ucm93cykgfCAwO1xuXG5cdGVsLnN0eWxlLmxlZnQgPSAnMHB4Jztcblx0ZWwuc3R5bGUudG9wID0gJzBweCc7XG5cdGVsLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuXHRlbC5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG5cdHRlcm0uZWxlbWVudC5zdHlsZS53aWR0aCA9ICcxMDAlJztcblx0dGVybS5lbGVtZW50LnN0eWxlLmhlaWdodCA9ICcxMDAlJztcblx0ZWwuc3R5bGUuYm94U2l6aW5nID0gJ2JvcmRlci1ib3gnO1xuXHR0aGlzLmdyaXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0cm9vdC5jbGFzc05hbWUgPSAnbWF4aW1pemVkJztcblxuXHR0aGlzLnJlc2l6ZSh4LCB5KTtcblxuXHR0aGlzLmVtaXQoJ21heGltaXplJyk7XG59O1xuXG5XaW5kb3cucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKGNvbHMsIHJvd3MpIHtcblx0dGhpcy5jb2xzID0gY29scztcblx0dGhpcy5yb3dzID0gcm93cztcblxuXHR0aGlzLmVhY2goZnVuY3Rpb24odGVybSkge1xuXHRcdHRlcm0ucmVzaXplKGNvbHMsIHJvd3MpO1xuXHR9KTtcblxuXHR0aGlzLmVtaXQoJ3Jlc2l6ZScsIGNvbHMsIHJvd3MpO1xufTtcblxuV2luZG93LnByb3RvdHlwZS5lYWNoID0gZnVuY3Rpb24oZnVuYykge1xuXHR2YXIgIGkgPSB0aGlzLnRhYnMubGVuZ3RoO1xuXHR3aGlsZSAoaS0tKSB7XG5cdFx0ZnVuYyh0aGlzLnRhYnNbaV0sIGkpO1xuXHR9XG59O1xuXG5XaW5kb3cucHJvdG90eXBlLmNyZWF0ZVRhYiA9IGZ1bmN0aW9uKHRlcm0pIHtcblx0dmFyIHNlbGYgPSB0aGlzLFxuXHRcdHRhYiA9IG5ldyBUYWIodGhpcywgdGhpcy5zb2NrZXQsIHRlcm0pO1xuXG5cdHRoaXMuYmFyLmFwcGVuZENoaWxkKHRhYi5idXR0b24pO1xuXG5cdGlmICh0YWIuaWQpIHtcblx0XHR0aGlzLnRhYnMuc2V0KHRhYi5pZCwgdGFiKTtcblx0fVxuXG5cdC8vIENoYW5nZSB0aXRsZSBpZiBmb2N1c2VkIHRhYidzIHByb2Nlc3MgY2hhbmdlc1xuXHR0YWIub24oJ3Byb2Nlc3MnLCBmdW5jdGlvbihuYW1lKSB7XG5cdFx0aWYgKHNlbGYuZm9jdXNlZCA9PT0gdGFiKSB7XG5cdFx0XHRzZWxmLndpbmRvdy50aXRsZS5pbm5lckhUTUwgPSBuYW1lO1xuXHRcdH1cblx0fSk7XG5cblx0dGFiLm9uKCdvcGVuJywgZnVuY3Rpb24oKSB7XG5cdFx0c2VsZi50YWJzLnNldCh0YWIuaWQsIHRhYik7XG5cdFx0c2VsZi5lbWl0KCdvcGVuIHRhYicsIHRhYik7XG5cdH0pO1xuXG5cdHJldHVybiB0YWI7XG59O1xuXG5XaW5kb3cucHJvdG90eXBlLmhpZ2hsaWdodCA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0dGhpcy5lbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gJ29yYW5nZSc7XG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0c2VsZi5lbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gJyc7XG5cdH0sIDIwMCk7XG5cblx0dGhpcy5mb2N1cygpO1xufTtcblxuV2luZG93LnByb3RvdHlwZS5mb2N1c1RhYiA9IGZ1bmN0aW9uKHRhYikge1xuXHR2YXIgdGl0bGUgPSB0aGlzLnRpdGxlLFxuXHRcdGVsID0gdGhpcy5lbGVtZW50O1xuXG5cdC8vIElmIHdlIGFyZSBmb2N1c2VkIG9uIGEgZGlmZmVyZW50IHRhYiwgdW5mb2N1cyB0aGF0IHRhYi5cblx0aWYgKHRoaXMuZm9jdXNlZCAmJiB0aGlzLmZvY3VzZWQgIT09IHRhYikge1xuXHRcdHRoaXMuZm9jdXNlZC51bmZvY3VzKCk7XG5cdFx0ZWwucmVtb3ZlQ2hpbGQodGhpcy5mb2N1c2VkLmVsZW1lbnQpO1xuXHR9XG5cblx0aWYgKCF0aGlzLmZvY3VzZWQpIHtcblx0XHRlbC5hcHBlbmRDaGlsZCh0YWIuZWxlbWVudCk7XG5cdFx0dGhpcy5mb2N1c2VkID0gdGFiO1xuXHR9XG5cblx0dGl0bGUuaW5uZXJIVE1MID0gdGFiLnByb2Nlc3M7XG5cblx0Ly8gRW5zdXJlIHRoZSB3aW5kb3cgaXRzZWxmIGlzIGZvY3VzZWQuXG5cdHRoaXMuZm9jdXMoKTtcbn07XG5cbldpbmRvdy5wcm90b3R5cGUubmV4dFRhYiA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgcHJldixcblx0XHRuZXh0O1xuXG5cdHZhciB0YWJzID0gdGhpcy50YWJzLFxuXHRcdGZvY3VzZWQgPSB0aGlzLmZvY3VzZWQ7XG5cblx0dGFicy5mb3JFYWNoKGZ1bmN0aW9uKHRhYikge1xuXHRcdC8vIFVzZSBmaXJzdCB0YWIgYXMgYmFja3VwXG5cdFx0aWYgKCFuZXh0KSB7XG5cdFx0XHRuZXh0ID0gdGFiO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZSBsYXN0IHRhYiB3YXMgdGhlIGN1cnJlbnRseSBmb2N1c2VkIG9uZSwgc2V0IHRoZSBuZXcgdGFiIHRvXG5cdFx0Ly8gYHRhYmBcblx0XHRpZiAocHJldiAmJiBwcmV2ID09PSBmb2N1c2VkKSB7XG5cdFx0XHRuZXh0ID0gdGFiO1xuXHRcdH1cblxuXHRcdHByZXYgPSB0YWI7XG5cdH0pO1xuXG5cdGlmIChuZXh0KSB7XG5cdFx0bmV4dC5mb2N1cygpO1xuXHR9XG59O1xuXG5XaW5kb3cucHJvdG90eXBlLnByZXZpb3VzVGFiID0gZnVuY3Rpb24oKSB7XG5cdHZhciB0YWJzID0gdGhpcy50YWJzLFxuXHRcdGZvY3VzZWQgPSB0aGlzLmZvY3VzZWQsXG5cdFx0bGFzdCxcblx0XHRmb3VuZDtcblxuXHR0YWJzLmZvckVhY2goZnVuY3Rpb24odGFiKSB7XG5cdFx0aWYgKHRhYiA9PT0gZm9jdXNlZCAmJiBsYXN0KSB7XG5cdFx0XHRmb3VuZCA9IGxhc3Q7XG5cdFx0fVxuXG5cdFx0bGFzdCA9IHRhYjtcblx0fSk7XG5cblx0aWYgKGZvdW5kKSB7XG5cdFx0Zm91bmQuZm9jdXMoKTtcblx0fSBlbHNlIGlmKGxhc3QpIHtcblx0XHQvLyBXcmFwIGFyb3VuZCB0byBlbmRcblx0XHRsYXN0LmZvY3VzKCk7XG5cdH1cbn07XG5cbldpbmRvdy5wcm90b3R5cGUucmVtb3ZlVGFiID0gZnVuY3Rpb24odGFiKSB7XG5cdGlmICh0aGlzLnRhYnMuaGFzKHRhYi5pZCkpIHtcblx0XHR0aGlzLnRhYnMuZGVsZXRlKHRhYi5pZCk7XG5cdH1cblxuXHRpZiAodGhpcy5mb2N1c2VkID09PSB0YWIpIHtcblx0XHR0aGlzLnByZXZpb3VzVGFiKCk7XG5cdH1cblxuXHRpZiAoIXRoaXMudGFicy5zaXplICYmICF0aGlzLnN5bmNpbmcpIHtcblx0XHR0aGlzLmRlc3Ryb3koKTtcblx0fVxufTtcblxuV2luZG93LnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uKHRhYklELCBkYXRhKSB7XG5cdGlmICh0aGlzLnRhYnMuaGFzKHRhYklEKSkge1xuXHRcdHRoaXMudGFicy5nZXQodGFiSUQpLndyaXRlKGRhdGEpO1xuXHR9XG59O1xuXG5XaW5kb3cucHJvdG90eXBlLmtpbGwgPSBmdW5jdGlvbih0YWJJRCkge1xuXHRpZiAodGhpcy50YWJzLmhhcyh0YWJJRCkpIHtcblx0XHR0aGlzLnRhYnMuZ2V0KHRhYklEKS5kZXN0cm95KCk7XG5cdH1cbn07XG5cbldpbmRvdy5wcm90b3R5cGUuc3luYyA9IGZ1bmN0aW9uKHRlcm1zKSB7XG5cdHZhciBzZWxmID0gdGhpcyxcblx0XHRmaXJzdDtcblxuXHR0aGlzLnN5bmNpbmcgPSB0cnVlO1xuXG5cdC8vIERlc3Ryb3kgYWxsIGN1cnJlbnQgdGFicyB3aXRob3V0IGVtaXR0aW5nIGFueSBldmVudHNcblx0dGhpcy50YWJzLmZvckVhY2goZnVuY3Rpb24odGFiKSB7XG5cdFx0dGFiLl9kZXN0cm95KCk7XG5cdH0pO1xuXHR0aGlzLnRhYnMuY2xlYXIoKTtcblxuXHQvLyBSZWNyZWF0ZSBhbGwgdGFic1xuXHRPYmplY3Qua2V5cyh0ZXJtcykuZm9yRWFjaChmdW5jdGlvbih0ZXJtSUQpIHtcblx0XHR2YXIgdGVybUluZm8gPSB0ZXJtc1t0ZXJtSURdO1xuXG5cdFx0dmFyIHRhYiA9IHNlbGYuY3JlYXRlVGFiKHRlcm1JbmZvKTtcblxuXHRcdGlmICghZmlyc3QpIHtcblx0XHRcdGZpcnN0ID0gdGFiO1xuXHRcdH1cblx0fSk7XG5cblx0dGhpcy5zeW5jaW5nID0gZmFsc2U7XG5cblx0dGhpcy5lbWl0KCdzeW5jJywgdGhpcyk7XG5cblx0aWYgKGZpcnN0KSB7XG5cdFx0Zmlyc3QuZm9jdXMoKTtcblx0fVxufTtcblxuLyoqXG4gKiBFeHBvcnRzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IFdpbmRvdzsiXX0=
