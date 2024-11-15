(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/namespace-emitter/index.js
  var require_namespace_emitter = __commonJS({
    "node_modules/namespace-emitter/index.js"(exports, module) {
      module.exports = function createNamespaceEmitter() {
        var emitter = {};
        var _fns = emitter._fns = {};
        emitter.emit = function emit(event, arg1, arg2, arg3, arg4, arg5, arg6) {
          var toEmit = getListeners(event);
          if (toEmit.length) {
            emitAll(event, toEmit, [arg1, arg2, arg3, arg4, arg5, arg6]);
          }
        };
        emitter.on = function on(event, fn) {
          if (!_fns[event]) {
            _fns[event] = [];
          }
          _fns[event].push(fn);
        };
        emitter.once = function once(event, fn) {
          function one() {
            fn.apply(this, arguments);
            emitter.off(event, one);
          }
          this.on(event, one);
        };
        emitter.off = function off(event, fn) {
          var keep = [];
          if (event && fn) {
            var fns = this._fns[event];
            var i2 = 0;
            var l2 = fns ? fns.length : 0;
            for (i2; i2 < l2; i2++) {
              if (fns[i2] !== fn) {
                keep.push(fns[i2]);
              }
            }
          }
          keep.length ? this._fns[event] = keep : delete this._fns[event];
        };
        function getListeners(e2) {
          var out = _fns[e2] ? _fns[e2] : [];
          var idx = e2.indexOf(":");
          var args = idx === -1 ? [e2] : [e2.substring(0, idx), e2.substring(idx + 1)];
          var keys = Object.keys(_fns);
          var i2 = 0;
          var l2 = keys.length;
          for (i2; i2 < l2; i2++) {
            var key = keys[i2];
            if (key === "*") {
              out = out.concat(_fns[key]);
            }
            if (args.length === 2 && args[0] === key) {
              out = out.concat(_fns[key]);
              break;
            }
          }
          return out;
        }
        function emitAll(e2, fns, args) {
          var i2 = 0;
          var l2 = fns.length;
          for (i2; i2 < l2; i2++) {
            if (!fns[i2]) break;
            fns[i2].event = e2;
            fns[i2].apply(fns[i2], args);
          }
        }
        return emitter;
      };
    }
  });

  // node_modules/lodash/isObject.js
  var require_isObject = __commonJS({
    "node_modules/lodash/isObject.js"(exports, module) {
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      module.exports = isObject;
    }
  });

  // node_modules/lodash/_freeGlobal.js
  var require_freeGlobal = __commonJS({
    "node_modules/lodash/_freeGlobal.js"(exports, module) {
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      module.exports = freeGlobal;
    }
  });

  // node_modules/lodash/_root.js
  var require_root = __commonJS({
    "node_modules/lodash/_root.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      module.exports = root;
    }
  });

  // node_modules/lodash/now.js
  var require_now = __commonJS({
    "node_modules/lodash/now.js"(exports, module) {
      var root = require_root();
      var now = function() {
        return root.Date.now();
      };
      module.exports = now;
    }
  });

  // node_modules/lodash/_trimmedEndIndex.js
  var require_trimmedEndIndex = __commonJS({
    "node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
      var reWhitespace = /\s/;
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      module.exports = trimmedEndIndex;
    }
  });

  // node_modules/lodash/_baseTrim.js
  var require_baseTrim = __commonJS({
    "node_modules/lodash/_baseTrim.js"(exports, module) {
      var trimmedEndIndex = require_trimmedEndIndex();
      var reTrimStart = /^\s+/;
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      module.exports = baseTrim;
    }
  });

  // node_modules/lodash/_Symbol.js
  var require_Symbol = __commonJS({
    "node_modules/lodash/_Symbol.js"(exports, module) {
      var root = require_root();
      var Symbol2 = root.Symbol;
      module.exports = Symbol2;
    }
  });

  // node_modules/lodash/_getRawTag.js
  var require_getRawTag = __commonJS({
    "node_modules/lodash/_getRawTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var nativeObjectToString = objectProto.toString;
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = void 0;
          var unmasked = true;
        } catch (e2) {
        }
        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }
      module.exports = getRawTag;
    }
  });

  // node_modules/lodash/_objectToString.js
  var require_objectToString = __commonJS({
    "node_modules/lodash/_objectToString.js"(exports, module) {
      var objectProto = Object.prototype;
      var nativeObjectToString = objectProto.toString;
      function objectToString2(value) {
        return nativeObjectToString.call(value);
      }
      module.exports = objectToString2;
    }
  });

  // node_modules/lodash/_baseGetTag.js
  var require_baseGetTag = __commonJS({
    "node_modules/lodash/_baseGetTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var getRawTag = require_getRawTag();
      var objectToString2 = require_objectToString();
      var nullTag = "[object Null]";
      var undefinedTag = "[object Undefined]";
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString2(value);
      }
      module.exports = baseGetTag;
    }
  });

  // node_modules/lodash/isObjectLike.js
  var require_isObjectLike = __commonJS({
    "node_modules/lodash/isObjectLike.js"(exports, module) {
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      module.exports = isObjectLike;
    }
  });

  // node_modules/lodash/isSymbol.js
  var require_isSymbol = __commonJS({
    "node_modules/lodash/isSymbol.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var symbolTag = "[object Symbol]";
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }
      module.exports = isSymbol;
    }
  });

  // node_modules/lodash/toNumber.js
  var require_toNumber = __commonJS({
    "node_modules/lodash/toNumber.js"(exports, module) {
      var baseTrim = require_baseTrim();
      var isObject = require_isObject();
      var isSymbol = require_isSymbol();
      var NAN = 0 / 0;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsOctal = /^0o[0-7]+$/i;
      var freeParseInt = parseInt;
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = baseTrim(value);
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      module.exports = toNumber;
    }
  });

  // node_modules/lodash/debounce.js
  var require_debounce = __commonJS({
    "node_modules/lodash/debounce.js"(exports, module) {
      var isObject = require_isObject();
      var now = require_now();
      var toNumber = require_toNumber();
      var FUNC_ERROR_TEXT = "Expected a function";
      var nativeMax = Math.max;
      var nativeMin = Math.min;
      function debounce2(func, wait, options) {
        var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = void 0;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
          return result;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout(timerExpired, wait);
          return leading ? invokeFunc(time) : result;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
          return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = void 0;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = void 0;
          return result;
        }
        function cancel() {
          if (timerId !== void 0) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = void 0;
        }
        function flush() {
          return timerId === void 0 ? result : trailingEdge(now());
        }
        function debounced() {
          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === void 0) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              clearTimeout(timerId);
              timerId = setTimeout(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === void 0) {
            timerId = setTimeout(timerExpired, wait);
          }
          return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      module.exports = debounce2;
    }
  });

  // node_modules/lodash/throttle.js
  var require_throttle = __commonJS({
    "node_modules/lodash/throttle.js"(exports, module) {
      var debounce2 = require_debounce();
      var isObject = require_isObject();
      var FUNC_ERROR_TEXT = "Expected a function";
      function throttle3(func, wait, options) {
        var leading = true, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        if (isObject(options)) {
          leading = "leading" in options ? !!options.leading : leading;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        return debounce2(func, wait, {
          "leading": leading,
          "maxWait": wait,
          "trailing": trailing
        });
      }
      module.exports = throttle3;
    }
  });

  // node_modules/@transloadit/prettier-bytes/dist/prettierBytes.js
  var require_prettierBytes = __commonJS({
    "node_modules/@transloadit/prettier-bytes/dist/prettierBytes.js"(exports, module) {
      "use strict";
      module.exports = function prettierBytes3(num) {
        if (typeof num !== "number" || Number.isNaN(num)) {
          throw new TypeError(`Expected a number, got ${typeof num}`);
        }
        const neg = num < 0;
        const units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
        if (neg) {
          num = -num;
        }
        if (num < 1) {
          return `${(neg ? "-" : "") + num} B`;
        }
        const exponent = Math.min(Math.floor(Math.log(num) / Math.log(1024)), units.length - 1);
        num = Number(num / 1024 ** exponent);
        const unit = units[exponent];
        if (num >= 10 || num % 1 === 0) {
          return `${(neg ? "-" : "") + num.toFixed(0)} ${unit}`;
        }
        return `${(neg ? "-" : "") + num.toFixed(1)} ${unit}`;
      };
    }
  });

  // node_modules/wildcard/index.js
  var require_wildcard = __commonJS({
    "node_modules/wildcard/index.js"(exports, module) {
      "use strict";
      function WildcardMatcher(text, separator) {
        this.text = text = text || "";
        this.hasWild = ~text.indexOf("*");
        this.separator = separator;
        this.parts = text.split(separator);
      }
      WildcardMatcher.prototype.match = function(input) {
        var matches = true;
        var parts = this.parts;
        var ii;
        var partsCount = parts.length;
        var testParts;
        if (typeof input == "string" || input instanceof String) {
          if (!this.hasWild && this.text != input) {
            matches = false;
          } else {
            testParts = (input || "").split(this.separator);
            for (ii = 0; matches && ii < partsCount; ii++) {
              if (parts[ii] === "*") {
                continue;
              } else if (ii < testParts.length) {
                matches = parts[ii] === testParts[ii];
              } else {
                matches = false;
              }
            }
            matches = matches && testParts;
          }
        } else if (typeof input.splice == "function") {
          matches = [];
          for (ii = input.length; ii--; ) {
            if (this.match(input[ii])) {
              matches[matches.length] = input[ii];
            }
          }
        } else if (typeof input == "object") {
          matches = {};
          for (var key in input) {
            if (this.match(key)) {
              matches[key] = input[key];
            }
          }
        }
        return matches;
      };
      module.exports = function(text, test, separator) {
        var matcher = new WildcardMatcher(text, separator || /[\/\.]/);
        if (typeof test != "undefined") {
          return matcher.match(test);
        }
        return matcher;
      };
    }
  });

  // node_modules/mime-match/index.js
  var require_mime_match = __commonJS({
    "node_modules/mime-match/index.js"(exports, module) {
      var wildcard = require_wildcard();
      var reMimePartSplit = /[\/\+\.]/;
      module.exports = function(target, pattern) {
        function test(pattern2) {
          var result = wildcard(pattern2, target, reMimePartSplit);
          return result && result.length >= 2;
        }
        return pattern ? test(pattern.split(";")[0]) : test;
      };
    }
  });

  // node_modules/retry/lib/retry_operation.js
  var require_retry_operation = __commonJS({
    "node_modules/retry/lib/retry_operation.js"(exports, module) {
      function RetryOperation(timeouts, options) {
        if (typeof options === "boolean") {
          options = { forever: options };
        }
        this._originalTimeouts = JSON.parse(JSON.stringify(timeouts));
        this._timeouts = timeouts;
        this._options = options || {};
        this._maxRetryTime = options && options.maxRetryTime || Infinity;
        this._fn = null;
        this._errors = [];
        this._attempts = 1;
        this._operationTimeout = null;
        this._operationTimeoutCb = null;
        this._timeout = null;
        this._operationStart = null;
        this._timer = null;
        if (this._options.forever) {
          this._cachedTimeouts = this._timeouts.slice(0);
        }
      }
      module.exports = RetryOperation;
      RetryOperation.prototype.reset = function() {
        this._attempts = 1;
        this._timeouts = this._originalTimeouts.slice(0);
      };
      RetryOperation.prototype.stop = function() {
        if (this._timeout) {
          clearTimeout(this._timeout);
        }
        if (this._timer) {
          clearTimeout(this._timer);
        }
        this._timeouts = [];
        this._cachedTimeouts = null;
      };
      RetryOperation.prototype.retry = function(err) {
        if (this._timeout) {
          clearTimeout(this._timeout);
        }
        if (!err) {
          return false;
        }
        var currentTime = (/* @__PURE__ */ new Date()).getTime();
        if (err && currentTime - this._operationStart >= this._maxRetryTime) {
          this._errors.push(err);
          this._errors.unshift(new Error("RetryOperation timeout occurred"));
          return false;
        }
        this._errors.push(err);
        var timeout = this._timeouts.shift();
        if (timeout === void 0) {
          if (this._cachedTimeouts) {
            this._errors.splice(0, this._errors.length - 1);
            timeout = this._cachedTimeouts.slice(-1);
          } else {
            return false;
          }
        }
        var self2 = this;
        this._timer = setTimeout(function() {
          self2._attempts++;
          if (self2._operationTimeoutCb) {
            self2._timeout = setTimeout(function() {
              self2._operationTimeoutCb(self2._attempts);
            }, self2._operationTimeout);
            if (self2._options.unref) {
              self2._timeout.unref();
            }
          }
          self2._fn(self2._attempts);
        }, timeout);
        if (this._options.unref) {
          this._timer.unref();
        }
        return true;
      };
      RetryOperation.prototype.attempt = function(fn, timeoutOps) {
        this._fn = fn;
        if (timeoutOps) {
          if (timeoutOps.timeout) {
            this._operationTimeout = timeoutOps.timeout;
          }
          if (timeoutOps.cb) {
            this._operationTimeoutCb = timeoutOps.cb;
          }
        }
        var self2 = this;
        if (this._operationTimeoutCb) {
          this._timeout = setTimeout(function() {
            self2._operationTimeoutCb();
          }, self2._operationTimeout);
        }
        this._operationStart = (/* @__PURE__ */ new Date()).getTime();
        this._fn(this._attempts);
      };
      RetryOperation.prototype.try = function(fn) {
        console.log("Using RetryOperation.try() is deprecated");
        this.attempt(fn);
      };
      RetryOperation.prototype.start = function(fn) {
        console.log("Using RetryOperation.start() is deprecated");
        this.attempt(fn);
      };
      RetryOperation.prototype.start = RetryOperation.prototype.try;
      RetryOperation.prototype.errors = function() {
        return this._errors;
      };
      RetryOperation.prototype.attempts = function() {
        return this._attempts;
      };
      RetryOperation.prototype.mainError = function() {
        if (this._errors.length === 0) {
          return null;
        }
        var counts = {};
        var mainError = null;
        var mainErrorCount = 0;
        for (var i2 = 0; i2 < this._errors.length; i2++) {
          var error = this._errors[i2];
          var message = error.message;
          var count = (counts[message] || 0) + 1;
          counts[message] = count;
          if (count >= mainErrorCount) {
            mainError = error;
            mainErrorCount = count;
          }
        }
        return mainError;
      };
    }
  });

  // node_modules/retry/lib/retry.js
  var require_retry = __commonJS({
    "node_modules/retry/lib/retry.js"(exports) {
      var RetryOperation = require_retry_operation();
      exports.operation = function(options) {
        var timeouts = exports.timeouts(options);
        return new RetryOperation(timeouts, {
          forever: options && (options.forever || options.retries === Infinity),
          unref: options && options.unref,
          maxRetryTime: options && options.maxRetryTime
        });
      };
      exports.timeouts = function(options) {
        if (options instanceof Array) {
          return [].concat(options);
        }
        var opts = {
          retries: 10,
          factor: 2,
          minTimeout: 1 * 1e3,
          maxTimeout: Infinity,
          randomize: false
        };
        for (var key in options) {
          opts[key] = options[key];
        }
        if (opts.minTimeout > opts.maxTimeout) {
          throw new Error("minTimeout is greater than maxTimeout");
        }
        var timeouts = [];
        for (var i2 = 0; i2 < opts.retries; i2++) {
          timeouts.push(this.createTimeout(i2, opts));
        }
        if (options && options.forever && !timeouts.length) {
          timeouts.push(this.createTimeout(i2, opts));
        }
        timeouts.sort(function(a2, b2) {
          return a2 - b2;
        });
        return timeouts;
      };
      exports.createTimeout = function(attempt, opts) {
        var random = opts.randomize ? Math.random() + 1 : 1;
        var timeout = Math.round(random * Math.max(opts.minTimeout, 1) * Math.pow(opts.factor, attempt));
        timeout = Math.min(timeout, opts.maxTimeout);
        return timeout;
      };
      exports.wrap = function(obj, options, methods) {
        if (options instanceof Array) {
          methods = options;
          options = null;
        }
        if (!methods) {
          methods = [];
          for (var key in obj) {
            if (typeof obj[key] === "function") {
              methods.push(key);
            }
          }
        }
        for (var i2 = 0; i2 < methods.length; i2++) {
          var method = methods[i2];
          var original = obj[method];
          obj[method] = function retryWrapper(original2) {
            var op = exports.operation(options);
            var args = Array.prototype.slice.call(arguments, 1);
            var callback = args.pop();
            args.push(function(err) {
              if (op.retry(err)) {
                return;
              }
              if (err) {
                arguments[0] = op.mainError();
              }
              callback.apply(this, arguments);
            });
            op.attempt(function() {
              original2.apply(obj, args);
            });
          }.bind(obj, original);
          obj[method].options = options;
        }
      };
    }
  });

  // node_modules/retry/index.js
  var require_retry2 = __commonJS({
    "node_modules/retry/index.js"(exports, module) {
      module.exports = require_retry();
    }
  });

  // node_modules/@uppy/utils/lib/Translator.js
  function _classPrivateFieldLooseBase(e2, t2) {
    if (!{}.hasOwnProperty.call(e2, t2)) throw new TypeError("attempted to use private field on non-instance");
    return e2;
  }
  var id = 0;
  function _classPrivateFieldLooseKey(e2) {
    return "__private_" + id++ + "_" + e2;
  }
  function insertReplacement(source, rx, replacement) {
    const newParts = [];
    source.forEach((chunk) => {
      if (typeof chunk !== "string") {
        return newParts.push(chunk);
      }
      return rx[Symbol.split](chunk).forEach((raw, i2, list) => {
        if (raw !== "") {
          newParts.push(raw);
        }
        if (i2 < list.length - 1) {
          newParts.push(replacement);
        }
      });
    });
    return newParts;
  }
  function interpolate(phrase, options) {
    const dollarRegex = /\$/g;
    const dollarBillsYall = "$$$$";
    let interpolated = [phrase];
    if (options == null) return interpolated;
    for (const arg of Object.keys(options)) {
      if (arg !== "_") {
        let replacement = options[arg];
        if (typeof replacement === "string") {
          replacement = dollarRegex[Symbol.replace](replacement, dollarBillsYall);
        }
        interpolated = insertReplacement(interpolated, new RegExp(`%\\{${arg}\\}`, "g"), replacement);
      }
    }
    return interpolated;
  }
  var defaultOnMissingKey = (key) => {
    throw new Error(`missing string: ${key}`);
  };
  var _onMissingKey = /* @__PURE__ */ _classPrivateFieldLooseKey("onMissingKey");
  var _apply = /* @__PURE__ */ _classPrivateFieldLooseKey("apply");
  var Translator = class {
    constructor(locales, _temp) {
      let {
        onMissingKey = defaultOnMissingKey
      } = _temp === void 0 ? {} : _temp;
      Object.defineProperty(this, _apply, {
        value: _apply2
      });
      Object.defineProperty(this, _onMissingKey, {
        writable: true,
        value: void 0
      });
      this.locale = {
        strings: {},
        pluralize(n2) {
          if (n2 === 1) {
            return 0;
          }
          return 1;
        }
      };
      if (Array.isArray(locales)) {
        locales.forEach(_classPrivateFieldLooseBase(this, _apply)[_apply], this);
      } else {
        _classPrivateFieldLooseBase(this, _apply)[_apply](locales);
      }
      _classPrivateFieldLooseBase(this, _onMissingKey)[_onMissingKey] = onMissingKey;
    }
    /**
     * Public translate method
     *
     * @param key
     * @param options with values that will be used later to replace placeholders in string
     * @returns string translated (and interpolated)
     */
    translate(key, options) {
      return this.translateArray(key, options).join("");
    }
    /**
     * Get a translation and return the translated and interpolated parts as an array.
     *
     * @returns The translated and interpolated parts, in order.
     */
    translateArray(key, options) {
      let string = this.locale.strings[key];
      if (string == null) {
        _classPrivateFieldLooseBase(this, _onMissingKey)[_onMissingKey](key);
        string = key;
      }
      const hasPluralForms = typeof string === "object";
      if (hasPluralForms) {
        if (options && typeof options.smart_count !== "undefined") {
          const plural = this.locale.pluralize(options.smart_count);
          return interpolate(string[plural], options);
        }
        throw new Error("Attempted to use a string with plural forms, but no value was given for %{smart_count}");
      }
      if (typeof string !== "string") {
        throw new Error(`string was not a string`);
      }
      return interpolate(string, options);
    }
  };
  function _apply2(locale) {
    if (!(locale != null && locale.strings)) {
      return;
    }
    const prevLocale = this.locale;
    Object.assign(this.locale, {
      strings: {
        ...prevLocale.strings,
        ...locale.strings
      },
      pluralize: locale.pluralize || prevLocale.pluralize
    });
  }

  // node_modules/@uppy/core/lib/Uppy.js
  var import_namespace_emitter = __toESM(require_namespace_emitter(), 1);

  // node_modules/nanoid/non-secure/index.js
  var urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
  var nanoid = (size = 21) => {
    let id11 = "";
    let i2 = size;
    while (i2--) {
      id11 += urlAlphabet[Math.random() * 64 | 0];
    }
    return id11;
  };

  // node_modules/@uppy/core/lib/Uppy.js
  var import_throttle = __toESM(require_throttle(), 1);

  // node_modules/@uppy/store-default/lib/index.js
  function _classPrivateFieldLooseBase2(e2, t2) {
    if (!{}.hasOwnProperty.call(e2, t2)) throw new TypeError("attempted to use private field on non-instance");
    return e2;
  }
  var id2 = 0;
  function _classPrivateFieldLooseKey2(e2) {
    return "__private_" + id2++ + "_" + e2;
  }
  var packageJson = {
    "version": "4.1.0"
  };
  var _callbacks = /* @__PURE__ */ _classPrivateFieldLooseKey2("callbacks");
  var _publish = /* @__PURE__ */ _classPrivateFieldLooseKey2("publish");
  var DefaultStore = class {
    constructor() {
      Object.defineProperty(this, _publish, {
        value: _publish2
      });
      this.state = {};
      Object.defineProperty(this, _callbacks, {
        writable: true,
        value: /* @__PURE__ */ new Set()
      });
    }
    getState() {
      return this.state;
    }
    setState(patch) {
      const prevState = {
        ...this.state
      };
      const nextState = {
        ...this.state,
        ...patch
      };
      this.state = nextState;
      _classPrivateFieldLooseBase2(this, _publish)[_publish](prevState, nextState, patch);
    }
    subscribe(listener) {
      _classPrivateFieldLooseBase2(this, _callbacks)[_callbacks].add(listener);
      return () => {
        _classPrivateFieldLooseBase2(this, _callbacks)[_callbacks].delete(listener);
      };
    }
  };
  function _publish2() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _classPrivateFieldLooseBase2(this, _callbacks)[_callbacks].forEach((listener) => {
      listener(...args);
    });
  }
  DefaultStore.VERSION = packageJson.version;
  var lib_default = DefaultStore;

  // node_modules/@uppy/utils/lib/getFileNameAndExtension.js
  function getFileNameAndExtension(fullFileName) {
    const lastDot = fullFileName.lastIndexOf(".");
    if (lastDot === -1 || lastDot === fullFileName.length - 1) {
      return {
        name: fullFileName,
        extension: void 0
      };
    }
    return {
      name: fullFileName.slice(0, lastDot),
      extension: fullFileName.slice(lastDot + 1)
    };
  }

  // node_modules/@uppy/utils/lib/mimeTypes.js
  var mimeTypes_default = {
    __proto__: null,
    md: "text/markdown",
    markdown: "text/markdown",
    mp4: "video/mp4",
    mp3: "audio/mp3",
    svg: "image/svg+xml",
    jpg: "image/jpeg",
    png: "image/png",
    webp: "image/webp",
    gif: "image/gif",
    heic: "image/heic",
    heif: "image/heif",
    yaml: "text/yaml",
    yml: "text/yaml",
    csv: "text/csv",
    tsv: "text/tab-separated-values",
    tab: "text/tab-separated-values",
    avi: "video/x-msvideo",
    mks: "video/x-matroska",
    mkv: "video/x-matroska",
    mov: "video/quicktime",
    dicom: "application/dicom",
    doc: "application/msword",
    docm: "application/vnd.ms-word.document.macroenabled.12",
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    dot: "application/msword",
    dotm: "application/vnd.ms-word.template.macroenabled.12",
    dotx: "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
    xla: "application/vnd.ms-excel",
    xlam: "application/vnd.ms-excel.addin.macroenabled.12",
    xlc: "application/vnd.ms-excel",
    xlf: "application/x-xliff+xml",
    xlm: "application/vnd.ms-excel",
    xls: "application/vnd.ms-excel",
    xlsb: "application/vnd.ms-excel.sheet.binary.macroenabled.12",
    xlsm: "application/vnd.ms-excel.sheet.macroenabled.12",
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    xlt: "application/vnd.ms-excel",
    xltm: "application/vnd.ms-excel.template.macroenabled.12",
    xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
    xlw: "application/vnd.ms-excel",
    txt: "text/plain",
    text: "text/plain",
    conf: "text/plain",
    log: "text/plain",
    pdf: "application/pdf",
    zip: "application/zip",
    "7z": "application/x-7z-compressed",
    rar: "application/x-rar-compressed",
    tar: "application/x-tar",
    gz: "application/gzip",
    dmg: "application/x-apple-diskimage"
  };

  // node_modules/@uppy/utils/lib/getFileType.js
  function getFileType(file) {
    var _getFileNameAndExtens;
    if (file.type) return file.type;
    const fileExtension = file.name ? (_getFileNameAndExtens = getFileNameAndExtension(file.name).extension) == null ? void 0 : _getFileNameAndExtens.toLowerCase() : null;
    if (fileExtension && fileExtension in mimeTypes_default) {
      return mimeTypes_default[fileExtension];
    }
    return "application/octet-stream";
  }

  // node_modules/@uppy/utils/lib/generateFileID.js
  function encodeCharacter(character) {
    return character.charCodeAt(0).toString(32);
  }
  function encodeFilename(name) {
    let suffix = "";
    return name.replace(/[^A-Z0-9]/gi, (character) => {
      suffix += `-${encodeCharacter(character)}`;
      return "/";
    }) + suffix;
  }
  function generateFileID(file, instanceId) {
    let id11 = instanceId || "uppy";
    if (typeof file.name === "string") {
      id11 += `-${encodeFilename(file.name.toLowerCase())}`;
    }
    if (file.type !== void 0) {
      id11 += `-${file.type}`;
    }
    if (file.meta && typeof file.meta.relativePath === "string") {
      id11 += `-${encodeFilename(file.meta.relativePath.toLowerCase())}`;
    }
    if (file.data.size !== void 0) {
      id11 += `-${file.data.size}`;
    }
    if (file.data.lastModified !== void 0) {
      id11 += `-${file.data.lastModified}`;
    }
    return id11;
  }
  function hasFileStableId(file) {
    if (!file.isRemote || !file.remote) return false;
    const stableIdProviders = /* @__PURE__ */ new Set(["box", "dropbox", "drive", "facebook", "unsplash"]);
    return stableIdProviders.has(file.remote.provider);
  }
  function getSafeFileId(file, instanceId) {
    if (hasFileStableId(file)) return file.id;
    const fileType = getFileType(file);
    return generateFileID({
      ...file,
      type: fileType
    }, instanceId);
  }

  // node_modules/@uppy/core/lib/supportsUploadProgress.js
  function supportsUploadProgress(userAgent) {
    if (userAgent == null && typeof navigator !== "undefined") {
      userAgent = navigator.userAgent;
    }
    if (!userAgent) return true;
    const m = /Edge\/(\d+\.\d+)/.exec(userAgent);
    if (!m) return true;
    const edgeVersion = m[1];
    const version = edgeVersion.split(".", 2);
    const major = parseInt(version[0], 10);
    const minor = parseInt(version[1], 10);
    if (major < 15 || major === 15 && minor < 15063) {
      return true;
    }
    if (major > 18 || major === 18 && minor >= 18218) {
      return true;
    }
    return false;
  }

  // node_modules/@uppy/core/lib/getFileName.js
  function getFileName(fileType, fileDescriptor) {
    if (fileDescriptor.name) {
      return fileDescriptor.name;
    }
    if (fileType.split("/")[0] === "image") {
      return `${fileType.split("/")[0]}.${fileType.split("/")[1]}`;
    }
    return "noname";
  }

  // node_modules/@uppy/utils/lib/getTimeStamp.js
  function pad(number) {
    return number < 10 ? `0${number}` : number.toString();
  }
  function getTimeStamp() {
    const date = /* @__PURE__ */ new Date();
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());
    return `${hours}:${minutes}:${seconds}`;
  }

  // node_modules/@uppy/core/lib/loggers.js
  var justErrorsLogger = {
    debug: () => {
    },
    warn: () => {
    },
    error: function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return console.error(`[Uppy] [${getTimeStamp()}]`, ...args);
    }
  };
  var debugLogger = {
    debug: function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return console.debug(`[Uppy] [${getTimeStamp()}]`, ...args);
    },
    warn: function() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      return console.warn(`[Uppy] [${getTimeStamp()}]`, ...args);
    },
    error: function() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return console.error(`[Uppy] [${getTimeStamp()}]`, ...args);
    }
  };

  // node_modules/@uppy/core/lib/Restricter.js
  var import_prettier_bytes = __toESM(require_prettierBytes(), 1);
  var import_mime_match = __toESM(require_mime_match(), 1);
  var defaultOptions = {
    maxFileSize: null,
    minFileSize: null,
    maxTotalFileSize: null,
    maxNumberOfFiles: null,
    minNumberOfFiles: null,
    allowedFileTypes: null,
    requiredMetaFields: []
  };
  var RestrictionError = class extends Error {
    constructor(message, opts) {
      var _opts$isUserFacing;
      super(message);
      this.isRestriction = true;
      this.isUserFacing = (_opts$isUserFacing = opts == null ? void 0 : opts.isUserFacing) != null ? _opts$isUserFacing : true;
      if (opts != null && opts.file) {
        this.file = opts.file;
      }
    }
  };
  var Restricter = class {
    constructor(getOpts, getI18n) {
      this.getI18n = getI18n;
      this.getOpts = () => {
        var _opts$restrictions;
        const opts = getOpts();
        if (((_opts$restrictions = opts.restrictions) == null ? void 0 : _opts$restrictions.allowedFileTypes) != null && !Array.isArray(opts.restrictions.allowedFileTypes)) {
          throw new TypeError("`restrictions.allowedFileTypes` must be an array");
        }
        return opts;
      };
    }
    // Because these operations are slow, we cannot run them for every file (if we are adding multiple files)
    validateAggregateRestrictions(existingFiles, addingFiles) {
      const {
        maxTotalFileSize,
        maxNumberOfFiles
      } = this.getOpts().restrictions;
      if (maxNumberOfFiles) {
        const nonGhostFiles = existingFiles.filter((f2) => !f2.isGhost);
        if (nonGhostFiles.length + addingFiles.length > maxNumberOfFiles) {
          throw new RestrictionError(`${this.getI18n()("youCanOnlyUploadX", {
            smart_count: maxNumberOfFiles
          })}`);
        }
      }
      if (maxTotalFileSize) {
        const totalFilesSize = [...existingFiles, ...addingFiles].reduce((total, f2) => {
          var _f$size;
          return total + ((_f$size = f2.size) != null ? _f$size : 0);
        }, 0);
        if (totalFilesSize > maxTotalFileSize) {
          throw new RestrictionError(this.getI18n()("aggregateExceedsSize", {
            sizeAllowed: (0, import_prettier_bytes.default)(maxTotalFileSize),
            size: (0, import_prettier_bytes.default)(totalFilesSize)
          }));
        }
      }
    }
    validateSingleFile(file) {
      const {
        maxFileSize,
        minFileSize,
        allowedFileTypes
      } = this.getOpts().restrictions;
      if (allowedFileTypes) {
        const isCorrectFileType = allowedFileTypes.some((type) => {
          if (type.includes("/")) {
            if (!file.type) return false;
            return (0, import_mime_match.default)(file.type.replace(/;.*?$/, ""), type);
          }
          if (type[0] === "." && file.extension) {
            return file.extension.toLowerCase() === type.slice(1).toLowerCase();
          }
          return false;
        });
        if (!isCorrectFileType) {
          const allowedFileTypesString = allowedFileTypes.join(", ");
          throw new RestrictionError(this.getI18n()("youCanOnlyUploadFileTypes", {
            types: allowedFileTypesString
          }), {
            file
          });
        }
      }
      if (maxFileSize && file.size != null && file.size > maxFileSize) {
        var _file$name;
        throw new RestrictionError(this.getI18n()("exceedsSize", {
          size: (0, import_prettier_bytes.default)(maxFileSize),
          file: (_file$name = file.name) != null ? _file$name : this.getI18n()("unnamed")
        }), {
          file
        });
      }
      if (minFileSize && file.size != null && file.size < minFileSize) {
        throw new RestrictionError(this.getI18n()("inferiorSize", {
          size: (0, import_prettier_bytes.default)(minFileSize)
        }), {
          file
        });
      }
    }
    validate(existingFiles, addingFiles) {
      addingFiles.forEach((addingFile) => {
        this.validateSingleFile(addingFile);
      });
      this.validateAggregateRestrictions(existingFiles, addingFiles);
    }
    validateMinNumberOfFiles(files) {
      const {
        minNumberOfFiles
      } = this.getOpts().restrictions;
      if (minNumberOfFiles && Object.keys(files).length < minNumberOfFiles) {
        throw new RestrictionError(this.getI18n()("youHaveToAtLeastSelectX", {
          smart_count: minNumberOfFiles
        }));
      }
    }
    getMissingRequiredMetaFields(file) {
      var _file$name2;
      const error = new RestrictionError(this.getI18n()("missingRequiredMetaFieldOnFile", {
        fileName: (_file$name2 = file.name) != null ? _file$name2 : this.getI18n()("unnamed")
      }));
      const {
        requiredMetaFields
      } = this.getOpts().restrictions;
      const missingFields = [];
      for (const field of requiredMetaFields) {
        if (!Object.hasOwn(file.meta, field) || file.meta[field] === "") {
          missingFields.push(field);
        }
      }
      return {
        missingFields,
        error
      };
    }
  };

  // node_modules/@uppy/core/lib/locale.js
  var locale_default = {
    strings: {
      addBulkFilesFailed: {
        0: "Failed to add %{smart_count} file due to an internal error",
        1: "Failed to add %{smart_count} files due to internal errors"
      },
      youCanOnlyUploadX: {
        0: "You can only upload %{smart_count} file",
        1: "You can only upload %{smart_count} files"
      },
      youHaveToAtLeastSelectX: {
        0: "You have to select at least %{smart_count} file",
        1: "You have to select at least %{smart_count} files"
      },
      aggregateExceedsSize: "You selected %{size} of files, but maximum allowed size is %{sizeAllowed}",
      exceedsSize: "%{file} exceeds maximum allowed size of %{size}",
      missingRequiredMetaField: "Missing required meta fields",
      missingRequiredMetaFieldOnFile: "Missing required meta fields in %{fileName}",
      inferiorSize: "This file is smaller than the allowed size of %{size}",
      youCanOnlyUploadFileTypes: "You can only upload: %{types}",
      noMoreFilesAllowed: "Cannot add more files",
      noDuplicates: "Cannot add the duplicate file '%{fileName}', it already exists",
      companionError: "Connection with Companion failed",
      authAborted: "Authentication aborted",
      companionUnauthorizeHint: "To unauthorize to your %{provider} account, please go to %{url}",
      failedToUpload: "Failed to upload %{file}",
      noInternetConnection: "No Internet connection",
      connectedToInternet: "Connected to the Internet",
      // Strings for remote providers
      noFilesFound: "You have no files or folders here",
      noSearchResults: "Unfortunately, there are no results for this search",
      selectX: {
        0: "Select %{smart_count}",
        1: "Select %{smart_count}"
      },
      allFilesFromFolderNamed: "All files from folder %{name}",
      openFolderNamed: "Open folder %{name}",
      cancel: "Cancel",
      logOut: "Log out",
      filter: "Filter",
      resetFilter: "Reset filter",
      loading: "Loading...",
      loadedXFiles: "Loaded %{numFiles} files",
      authenticateWithTitle: "Please authenticate with %{pluginName} to select files",
      authenticateWith: "Connect to %{pluginName}",
      signInWithGoogle: "Sign in with Google",
      searchImages: "Search for images",
      enterTextToSearch: "Enter text to search for images",
      search: "Search",
      resetSearch: "Reset search",
      emptyFolderAdded: "No files were added from empty folder",
      addedNumFiles: "Added %{numFiles} file(s)",
      folderAlreadyAdded: 'The folder "%{folder}" was already added',
      folderAdded: {
        0: "Added %{smart_count} file from %{folder}",
        1: "Added %{smart_count} files from %{folder}"
      },
      additionalRestrictionsFailed: "%{count} additional restrictions were not fulfilled",
      unnamed: "Unnamed"
    }
  };

  // node_modules/@uppy/core/lib/Uppy.js
  function _classPrivateFieldLooseBase3(e2, t2) {
    if (!{}.hasOwnProperty.call(e2, t2)) throw new TypeError("attempted to use private field on non-instance");
    return e2;
  }
  var id3 = 0;
  function _classPrivateFieldLooseKey3(e2) {
    return "__private_" + id3++ + "_" + e2;
  }
  var packageJson2 = {
    "version": "4.1.2"
  };
  var defaultUploadState = {
    totalProgress: 0,
    allowNewUpload: true,
    error: null,
    recoveredState: null
  };
  var _plugins = /* @__PURE__ */ _classPrivateFieldLooseKey3("plugins");
  var _restricter = /* @__PURE__ */ _classPrivateFieldLooseKey3("restricter");
  var _storeUnsubscribe = /* @__PURE__ */ _classPrivateFieldLooseKey3("storeUnsubscribe");
  var _emitter = /* @__PURE__ */ _classPrivateFieldLooseKey3("emitter");
  var _preProcessors = /* @__PURE__ */ _classPrivateFieldLooseKey3("preProcessors");
  var _uploaders = /* @__PURE__ */ _classPrivateFieldLooseKey3("uploaders");
  var _postProcessors = /* @__PURE__ */ _classPrivateFieldLooseKey3("postProcessors");
  var _informAndEmit = /* @__PURE__ */ _classPrivateFieldLooseKey3("informAndEmit");
  var _checkRequiredMetaFieldsOnFile = /* @__PURE__ */ _classPrivateFieldLooseKey3("checkRequiredMetaFieldsOnFile");
  var _checkRequiredMetaFields = /* @__PURE__ */ _classPrivateFieldLooseKey3("checkRequiredMetaFields");
  var _assertNewUploadAllowed = /* @__PURE__ */ _classPrivateFieldLooseKey3("assertNewUploadAllowed");
  var _transformFile = /* @__PURE__ */ _classPrivateFieldLooseKey3("transformFile");
  var _startIfAutoProceed = /* @__PURE__ */ _classPrivateFieldLooseKey3("startIfAutoProceed");
  var _checkAndUpdateFileState = /* @__PURE__ */ _classPrivateFieldLooseKey3("checkAndUpdateFileState");
  var _addListeners = /* @__PURE__ */ _classPrivateFieldLooseKey3("addListeners");
  var _updateOnlineStatus = /* @__PURE__ */ _classPrivateFieldLooseKey3("updateOnlineStatus");
  var _requestClientById = /* @__PURE__ */ _classPrivateFieldLooseKey3("requestClientById");
  var _createUpload = /* @__PURE__ */ _classPrivateFieldLooseKey3("createUpload");
  var _getUpload = /* @__PURE__ */ _classPrivateFieldLooseKey3("getUpload");
  var _removeUpload = /* @__PURE__ */ _classPrivateFieldLooseKey3("removeUpload");
  var _runUpload = /* @__PURE__ */ _classPrivateFieldLooseKey3("runUpload");
  var Uppy = class _Uppy {
    /**
     * Instantiate Uppy
     */
    constructor(_opts) {
      Object.defineProperty(this, _runUpload, {
        value: _runUpload2
      });
      Object.defineProperty(this, _removeUpload, {
        value: _removeUpload2
      });
      Object.defineProperty(this, _getUpload, {
        value: _getUpload2
      });
      Object.defineProperty(this, _createUpload, {
        value: _createUpload2
      });
      Object.defineProperty(this, _addListeners, {
        value: _addListeners2
      });
      Object.defineProperty(this, _checkAndUpdateFileState, {
        value: _checkAndUpdateFileState2
      });
      Object.defineProperty(this, _startIfAutoProceed, {
        value: _startIfAutoProceed2
      });
      Object.defineProperty(this, _transformFile, {
        value: _transformFile2
      });
      Object.defineProperty(this, _assertNewUploadAllowed, {
        value: _assertNewUploadAllowed2
      });
      Object.defineProperty(this, _checkRequiredMetaFields, {
        value: _checkRequiredMetaFields2
      });
      Object.defineProperty(this, _checkRequiredMetaFieldsOnFile, {
        value: _checkRequiredMetaFieldsOnFile2
      });
      Object.defineProperty(this, _informAndEmit, {
        value: _informAndEmit2
      });
      Object.defineProperty(this, _plugins, {
        writable: true,
        value: /* @__PURE__ */ Object.create(null)
      });
      Object.defineProperty(this, _restricter, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _storeUnsubscribe, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _emitter, {
        writable: true,
        value: (0, import_namespace_emitter.default)()
      });
      Object.defineProperty(this, _preProcessors, {
        writable: true,
        value: /* @__PURE__ */ new Set()
      });
      Object.defineProperty(this, _uploaders, {
        writable: true,
        value: /* @__PURE__ */ new Set()
      });
      Object.defineProperty(this, _postProcessors, {
        writable: true,
        value: /* @__PURE__ */ new Set()
      });
      this.scheduledAutoProceed = null;
      this.wasOffline = false;
      this.calculateProgress = (0, import_throttle.default)((file, data) => {
        const fileInState = this.getFile(file == null ? void 0 : file.id);
        if (file == null || !fileInState) {
          this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
          return;
        }
        if (fileInState.progress.percentage === 100) {
          this.log(`Not setting progress for a file that has been already uploaded: ${file.id}`);
          return;
        }
        const canHavePercentage = Number.isFinite(data.bytesTotal) && data.bytesTotal > 0;
        this.setFileState(file.id, {
          progress: {
            ...fileInState.progress,
            bytesUploaded: data.bytesUploaded,
            bytesTotal: data.bytesTotal,
            percentage: canHavePercentage ? Math.round(data.bytesUploaded / data.bytesTotal * 100) : 0
          }
        });
        this.calculateTotalProgress();
      }, 500, {
        leading: true,
        trailing: true
      });
      Object.defineProperty(this, _updateOnlineStatus, {
        writable: true,
        value: this.updateOnlineStatus.bind(this)
      });
      Object.defineProperty(this, _requestClientById, {
        writable: true,
        value: /* @__PURE__ */ new Map()
      });
      this.defaultLocale = locale_default;
      const defaultOptions5 = {
        id: "uppy",
        autoProceed: false,
        allowMultipleUploadBatches: true,
        debug: false,
        restrictions: defaultOptions,
        meta: {},
        onBeforeFileAdded: (file, files) => !Object.hasOwn(files, file.id),
        onBeforeUpload: (files) => files,
        store: new lib_default(),
        logger: justErrorsLogger,
        infoTimeout: 5e3
      };
      const merged = {
        ...defaultOptions5,
        ..._opts
      };
      this.opts = {
        ...merged,
        restrictions: {
          ...defaultOptions5.restrictions,
          ..._opts && _opts.restrictions
        }
      };
      if (_opts && _opts.logger && _opts.debug) {
        this.log("You are using a custom `logger`, but also set `debug: true`, which uses built-in logger to output logs to console. Ignoring `debug: true` and using your custom `logger`.", "warning");
      } else if (_opts && _opts.debug) {
        this.opts.logger = debugLogger;
      }
      this.log(`Using Core v${_Uppy.VERSION}`);
      this.i18nInit();
      this.store = this.opts.store;
      this.setState({
        ...defaultUploadState,
        plugins: {},
        files: {},
        currentUploads: {},
        capabilities: {
          uploadProgress: supportsUploadProgress(),
          individualCancellation: true,
          resumableUploads: false
        },
        meta: {
          ...this.opts.meta
        },
        info: []
      });
      _classPrivateFieldLooseBase3(this, _restricter)[_restricter] = new Restricter(() => this.opts, () => this.i18n);
      _classPrivateFieldLooseBase3(this, _storeUnsubscribe)[_storeUnsubscribe] = this.store.subscribe((prevState, nextState, patch) => {
        this.emit("state-update", prevState, nextState, patch);
        this.updateAll(nextState);
      });
      if (this.opts.debug && typeof window !== "undefined") {
        window[this.opts.id] = this;
      }
      _classPrivateFieldLooseBase3(this, _addListeners)[_addListeners]();
    }
    emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      _classPrivateFieldLooseBase3(this, _emitter)[_emitter].emit(event, ...args);
    }
    on(event, callback) {
      _classPrivateFieldLooseBase3(this, _emitter)[_emitter].on(event, callback);
      return this;
    }
    once(event, callback) {
      _classPrivateFieldLooseBase3(this, _emitter)[_emitter].once(event, callback);
      return this;
    }
    off(event, callback) {
      _classPrivateFieldLooseBase3(this, _emitter)[_emitter].off(event, callback);
      return this;
    }
    /**
     * Iterate on all plugins and run `update` on them.
     * Called each time state changes.
     *
     */
    updateAll(state) {
      this.iteratePlugins((plugin) => {
        plugin.update(state);
      });
    }
    /**
     * Updates state with a patch
     */
    setState(patch) {
      this.store.setState(patch);
    }
    /**
     * Returns current state.
     */
    getState() {
      return this.store.getState();
    }
    patchFilesState(filesWithNewState) {
      const existingFilesState = this.getState().files;
      this.setState({
        files: {
          ...existingFilesState,
          ...Object.fromEntries(Object.entries(filesWithNewState).map((_ref) => {
            let [fileID, newFileState] = _ref;
            return [fileID, {
              ...existingFilesState[fileID],
              ...newFileState
            }];
          }))
        }
      });
    }
    /**
     * Shorthand to set state for a specific file.
     */
    setFileState(fileID, state) {
      if (!this.getState().files[fileID]) {
        throw new Error(`Can\u2019t set state for ${fileID} (the file could have been removed)`);
      }
      this.patchFilesState({
        [fileID]: state
      });
    }
    i18nInit() {
      const onMissingKey = (key) => this.log(`Missing i18n string: ${key}`, "error");
      const translator = new Translator([this.defaultLocale, this.opts.locale], {
        onMissingKey
      });
      this.i18n = translator.translate.bind(translator);
      this.i18nArray = translator.translateArray.bind(translator);
      this.locale = translator.locale;
    }
    setOptions(newOpts) {
      this.opts = {
        ...this.opts,
        ...newOpts,
        restrictions: {
          ...this.opts.restrictions,
          ...newOpts == null ? void 0 : newOpts.restrictions
        }
      };
      if (newOpts.meta) {
        this.setMeta(newOpts.meta);
      }
      this.i18nInit();
      if (newOpts.locale) {
        this.iteratePlugins((plugin) => {
          plugin.setOptions(newOpts);
        });
      }
      this.setState(void 0);
    }
    resetProgress() {
      const defaultProgress = {
        percentage: 0,
        bytesUploaded: false,
        uploadComplete: false,
        uploadStarted: null
      };
      const files = {
        ...this.getState().files
      };
      const updatedFiles = /* @__PURE__ */ Object.create(null);
      Object.keys(files).forEach((fileID) => {
        updatedFiles[fileID] = {
          ...files[fileID],
          progress: {
            ...files[fileID].progress,
            ...defaultProgress
          }
        };
      });
      this.setState({
        files: updatedFiles,
        ...defaultUploadState
      });
    }
    clear() {
      const {
        capabilities,
        currentUploads
      } = this.getState();
      if (Object.keys(currentUploads).length > 0 && !capabilities.individualCancellation) {
        throw new Error("The installed uploader plugin does not allow removing files during an upload.");
      }
      this.setState({
        ...defaultUploadState,
        files: {}
      });
    }
    addPreProcessor(fn) {
      _classPrivateFieldLooseBase3(this, _preProcessors)[_preProcessors].add(fn);
    }
    removePreProcessor(fn) {
      return _classPrivateFieldLooseBase3(this, _preProcessors)[_preProcessors].delete(fn);
    }
    addPostProcessor(fn) {
      _classPrivateFieldLooseBase3(this, _postProcessors)[_postProcessors].add(fn);
    }
    removePostProcessor(fn) {
      return _classPrivateFieldLooseBase3(this, _postProcessors)[_postProcessors].delete(fn);
    }
    addUploader(fn) {
      _classPrivateFieldLooseBase3(this, _uploaders)[_uploaders].add(fn);
    }
    removeUploader(fn) {
      return _classPrivateFieldLooseBase3(this, _uploaders)[_uploaders].delete(fn);
    }
    setMeta(data) {
      const updatedMeta = {
        ...this.getState().meta,
        ...data
      };
      const updatedFiles = {
        ...this.getState().files
      };
      Object.keys(updatedFiles).forEach((fileID) => {
        updatedFiles[fileID] = {
          ...updatedFiles[fileID],
          meta: {
            ...updatedFiles[fileID].meta,
            ...data
          }
        };
      });
      this.log("Adding metadata:");
      this.log(data);
      this.setState({
        meta: updatedMeta,
        files: updatedFiles
      });
    }
    setFileMeta(fileID, data) {
      const updatedFiles = {
        ...this.getState().files
      };
      if (!updatedFiles[fileID]) {
        this.log("Was trying to set metadata for a file that has been removed: ", fileID);
        return;
      }
      const newMeta = {
        ...updatedFiles[fileID].meta,
        ...data
      };
      updatedFiles[fileID] = {
        ...updatedFiles[fileID],
        meta: newMeta
      };
      this.setState({
        files: updatedFiles
      });
    }
    /**
     * Get a file object.
     */
    getFile(fileID) {
      return this.getState().files[fileID];
    }
    /**
     * Get all files in an array.
     */
    getFiles() {
      const {
        files
      } = this.getState();
      return Object.values(files);
    }
    getFilesByIds(ids) {
      return ids.map((id11) => this.getFile(id11));
    }
    getObjectOfFilesPerState() {
      const {
        files: filesObject,
        totalProgress,
        error
      } = this.getState();
      const files = Object.values(filesObject);
      const inProgressFiles = [];
      const newFiles = [];
      const startedFiles = [];
      const uploadStartedFiles = [];
      const pausedFiles = [];
      const completeFiles = [];
      const erroredFiles = [];
      const inProgressNotPausedFiles = [];
      const processingFiles = [];
      for (const file of files) {
        const {
          progress
        } = file;
        if (!progress.uploadComplete && progress.uploadStarted) {
          inProgressFiles.push(file);
          if (!file.isPaused) {
            inProgressNotPausedFiles.push(file);
          }
        }
        if (!progress.uploadStarted) {
          newFiles.push(file);
        }
        if (progress.uploadStarted || progress.preprocess || progress.postprocess) {
          startedFiles.push(file);
        }
        if (progress.uploadStarted) {
          uploadStartedFiles.push(file);
        }
        if (file.isPaused) {
          pausedFiles.push(file);
        }
        if (progress.uploadComplete) {
          completeFiles.push(file);
        }
        if (file.error) {
          erroredFiles.push(file);
        }
        if (progress.preprocess || progress.postprocess) {
          processingFiles.push(file);
        }
      }
      return {
        newFiles,
        startedFiles,
        uploadStartedFiles,
        pausedFiles,
        completeFiles,
        erroredFiles,
        inProgressFiles,
        inProgressNotPausedFiles,
        processingFiles,
        isUploadStarted: uploadStartedFiles.length > 0,
        isAllComplete: totalProgress === 100 && completeFiles.length === files.length && processingFiles.length === 0,
        isAllErrored: !!error && erroredFiles.length === files.length,
        isAllPaused: inProgressFiles.length !== 0 && pausedFiles.length === inProgressFiles.length,
        isUploadInProgress: inProgressFiles.length > 0,
        isSomeGhost: files.some((file) => file.isGhost)
      };
    }
    validateSingleFile(file) {
      try {
        _classPrivateFieldLooseBase3(this, _restricter)[_restricter].validateSingleFile(file);
      } catch (err) {
        return err.message;
      }
      return null;
    }
    validateAggregateRestrictions(files) {
      const existingFiles = this.getFiles();
      try {
        _classPrivateFieldLooseBase3(this, _restricter)[_restricter].validateAggregateRestrictions(existingFiles, files);
      } catch (err) {
        return err.message;
      }
      return null;
    }
    checkIfFileAlreadyExists(fileID) {
      const {
        files
      } = this.getState();
      if (files[fileID] && !files[fileID].isGhost) {
        return true;
      }
      return false;
    }
    /**
     * Add a new file to `state.files`. This will run `onBeforeFileAdded`,
     * try to guess file type in a clever way, check file against restrictions,
     * and start an upload if `autoProceed === true`.
     */
    addFile(file) {
      _classPrivateFieldLooseBase3(this, _assertNewUploadAllowed)[_assertNewUploadAllowed](file);
      const {
        nextFilesState,
        validFilesToAdd,
        errors
      } = _classPrivateFieldLooseBase3(this, _checkAndUpdateFileState)[_checkAndUpdateFileState]([file]);
      const restrictionErrors = errors.filter((error) => error.isRestriction);
      _classPrivateFieldLooseBase3(this, _informAndEmit)[_informAndEmit](restrictionErrors);
      if (errors.length > 0) throw errors[0];
      this.setState({
        files: nextFilesState
      });
      const [firstValidFileToAdd] = validFilesToAdd;
      this.emit("file-added", firstValidFileToAdd);
      this.emit("files-added", validFilesToAdd);
      this.log(`Added file: ${firstValidFileToAdd.name}, ${firstValidFileToAdd.id}, mime type: ${firstValidFileToAdd.type}`);
      _classPrivateFieldLooseBase3(this, _startIfAutoProceed)[_startIfAutoProceed]();
      return firstValidFileToAdd.id;
    }
    /**
     * Add multiple files to `state.files`. See the `addFile()` documentation.
     *
     * If an error occurs while adding a file, it is logged and the user is notified.
     * This is good for UI plugins, but not for programmatic use.
     * Programmatic users should usually still use `addFile()` on individual files.
     */
    addFiles(fileDescriptors) {
      _classPrivateFieldLooseBase3(this, _assertNewUploadAllowed)[_assertNewUploadAllowed]();
      const {
        nextFilesState,
        validFilesToAdd,
        errors
      } = _classPrivateFieldLooseBase3(this, _checkAndUpdateFileState)[_checkAndUpdateFileState](fileDescriptors);
      const restrictionErrors = errors.filter((error) => error.isRestriction);
      _classPrivateFieldLooseBase3(this, _informAndEmit)[_informAndEmit](restrictionErrors);
      const nonRestrictionErrors = errors.filter((error) => !error.isRestriction);
      if (nonRestrictionErrors.length > 0) {
        let message = "Multiple errors occurred while adding files:\n";
        nonRestrictionErrors.forEach((subError) => {
          message += `
 * ${subError.message}`;
        });
        this.info({
          message: this.i18n("addBulkFilesFailed", {
            smart_count: nonRestrictionErrors.length
          }),
          details: message
        }, "error", this.opts.infoTimeout);
        if (typeof AggregateError === "function") {
          throw new AggregateError(nonRestrictionErrors, message);
        } else {
          const err = new Error(message);
          err.errors = nonRestrictionErrors;
          throw err;
        }
      }
      this.setState({
        files: nextFilesState
      });
      validFilesToAdd.forEach((file) => {
        this.emit("file-added", file);
      });
      this.emit("files-added", validFilesToAdd);
      if (validFilesToAdd.length > 5) {
        this.log(`Added batch of ${validFilesToAdd.length} files`);
      } else {
        Object.values(validFilesToAdd).forEach((file) => {
          this.log(`Added file: ${file.name}
 id: ${file.id}
 type: ${file.type}`);
        });
      }
      if (validFilesToAdd.length > 0) {
        _classPrivateFieldLooseBase3(this, _startIfAutoProceed)[_startIfAutoProceed]();
      }
    }
    removeFiles(fileIDs) {
      const {
        files,
        currentUploads
      } = this.getState();
      const updatedFiles = {
        ...files
      };
      const updatedUploads = {
        ...currentUploads
      };
      const removedFiles = /* @__PURE__ */ Object.create(null);
      fileIDs.forEach((fileID) => {
        if (files[fileID]) {
          removedFiles[fileID] = files[fileID];
          delete updatedFiles[fileID];
        }
      });
      function fileIsNotRemoved(uploadFileID) {
        return removedFiles[uploadFileID] === void 0;
      }
      Object.keys(updatedUploads).forEach((uploadID) => {
        const newFileIDs = currentUploads[uploadID].fileIDs.filter(fileIsNotRemoved);
        if (newFileIDs.length === 0) {
          delete updatedUploads[uploadID];
          return;
        }
        const {
          capabilities
        } = this.getState();
        if (newFileIDs.length !== currentUploads[uploadID].fileIDs.length && !capabilities.individualCancellation) {
          throw new Error("The installed uploader plugin does not allow removing files during an upload.");
        }
        updatedUploads[uploadID] = {
          ...currentUploads[uploadID],
          fileIDs: newFileIDs
        };
      });
      const stateUpdate = {
        currentUploads: updatedUploads,
        files: updatedFiles
      };
      if (Object.keys(updatedFiles).length === 0) {
        stateUpdate.allowNewUpload = true;
        stateUpdate.error = null;
        stateUpdate.recoveredState = null;
      }
      this.setState(stateUpdate);
      this.calculateTotalProgress();
      const removedFileIDs = Object.keys(removedFiles);
      removedFileIDs.forEach((fileID) => {
        this.emit("file-removed", removedFiles[fileID]);
      });
      if (removedFileIDs.length > 5) {
        this.log(`Removed ${removedFileIDs.length} files`);
      } else {
        this.log(`Removed files: ${removedFileIDs.join(", ")}`);
      }
    }
    removeFile(fileID) {
      this.removeFiles([fileID]);
    }
    pauseResume(fileID) {
      if (!this.getState().capabilities.resumableUploads || this.getFile(fileID).progress.uploadComplete) {
        return void 0;
      }
      const file = this.getFile(fileID);
      const wasPaused = file.isPaused || false;
      const isPaused = !wasPaused;
      this.setFileState(fileID, {
        isPaused
      });
      this.emit("upload-pause", file, isPaused);
      return isPaused;
    }
    pauseAll() {
      const updatedFiles = {
        ...this.getState().files
      };
      const inProgressUpdatedFiles = Object.keys(updatedFiles).filter((file) => {
        return !updatedFiles[file].progress.uploadComplete && updatedFiles[file].progress.uploadStarted;
      });
      inProgressUpdatedFiles.forEach((file) => {
        const updatedFile = {
          ...updatedFiles[file],
          isPaused: true
        };
        updatedFiles[file] = updatedFile;
      });
      this.setState({
        files: updatedFiles
      });
      this.emit("pause-all");
    }
    resumeAll() {
      const updatedFiles = {
        ...this.getState().files
      };
      const inProgressUpdatedFiles = Object.keys(updatedFiles).filter((file) => {
        return !updatedFiles[file].progress.uploadComplete && updatedFiles[file].progress.uploadStarted;
      });
      inProgressUpdatedFiles.forEach((file) => {
        const updatedFile = {
          ...updatedFiles[file],
          isPaused: false,
          error: null
        };
        updatedFiles[file] = updatedFile;
      });
      this.setState({
        files: updatedFiles
      });
      this.emit("resume-all");
    }
    retryAll() {
      const updatedFiles = {
        ...this.getState().files
      };
      const filesToRetry = Object.keys(updatedFiles).filter((file) => {
        return updatedFiles[file].error;
      });
      filesToRetry.forEach((file) => {
        const updatedFile = {
          ...updatedFiles[file],
          isPaused: false,
          error: null
        };
        updatedFiles[file] = updatedFile;
      });
      this.setState({
        files: updatedFiles,
        error: null
      });
      this.emit("retry-all", Object.values(updatedFiles));
      if (filesToRetry.length === 0) {
        return Promise.resolve({
          successful: [],
          failed: []
        });
      }
      const uploadID = _classPrivateFieldLooseBase3(this, _createUpload)[_createUpload](filesToRetry, {
        forceAllowNewUpload: true
        // create new upload even if allowNewUpload: false
      });
      return _classPrivateFieldLooseBase3(this, _runUpload)[_runUpload](uploadID);
    }
    cancelAll() {
      this.emit("cancel-all");
      const {
        files
      } = this.getState();
      const fileIDs = Object.keys(files);
      if (fileIDs.length) {
        this.removeFiles(fileIDs);
      }
      this.setState(defaultUploadState);
    }
    retryUpload(fileID) {
      this.setFileState(fileID, {
        error: null,
        isPaused: false
      });
      this.emit("upload-retry", this.getFile(fileID));
      const uploadID = _classPrivateFieldLooseBase3(this, _createUpload)[_createUpload]([fileID], {
        forceAllowNewUpload: true
        // create new upload even if allowNewUpload: false
      });
      return _classPrivateFieldLooseBase3(this, _runUpload)[_runUpload](uploadID);
    }
    logout() {
      this.iteratePlugins((plugin) => {
        var _provider;
        ;
        (_provider = plugin.provider) == null || _provider.logout == null || _provider.logout();
      });
    }
    calculateTotalProgress() {
      const files = this.getFiles();
      const inProgress = files.filter((file) => {
        return file.progress.uploadStarted || file.progress.preprocess || file.progress.postprocess;
      });
      if (inProgress.length === 0) {
        this.emit("progress", 0);
        this.setState({
          totalProgress: 0
        });
        return;
      }
      const sizedFiles = inProgress.filter((file) => file.progress.bytesTotal != null);
      const unsizedFiles = inProgress.filter((file) => file.progress.bytesTotal == null);
      if (sizedFiles.length === 0) {
        const progressMax = inProgress.length * 100;
        const currentProgress = unsizedFiles.reduce((acc, file) => {
          return acc + file.progress.percentage;
        }, 0);
        const totalProgress2 = Math.round(currentProgress / progressMax * 100);
        this.setState({
          totalProgress: totalProgress2
        });
        return;
      }
      let totalSize = sizedFiles.reduce((acc, file) => {
        var _file$progress$bytesT;
        return acc + ((_file$progress$bytesT = file.progress.bytesTotal) != null ? _file$progress$bytesT : 0);
      }, 0);
      const averageSize = totalSize / sizedFiles.length;
      totalSize += averageSize * unsizedFiles.length;
      let uploadedSize = 0;
      sizedFiles.forEach((file) => {
        uploadedSize += file.progress.bytesUploaded;
      });
      unsizedFiles.forEach((file) => {
        uploadedSize += averageSize * (file.progress.percentage || 0) / 100;
      });
      let totalProgress = totalSize === 0 ? 0 : Math.round(uploadedSize / totalSize * 100);
      if (totalProgress > 100) {
        totalProgress = 100;
      }
      this.setState({
        totalProgress
      });
      this.emit("progress", totalProgress);
    }
    updateOnlineStatus() {
      var _window$navigator$onL;
      const online = (_window$navigator$onL = window.navigator.onLine) != null ? _window$navigator$onL : true;
      if (!online) {
        this.emit("is-offline");
        this.info(this.i18n("noInternetConnection"), "error", 0);
        this.wasOffline = true;
      } else {
        this.emit("is-online");
        if (this.wasOffline) {
          this.emit("back-online");
          this.info(this.i18n("connectedToInternet"), "success", 3e3);
          this.wasOffline = false;
        }
      }
    }
    getID() {
      return this.opts.id;
    }
    /**
     * Registers a plugin with Core.
     */
    use(Plugin) {
      if (typeof Plugin !== "function") {
        const msg = `Expected a plugin class, but got ${Plugin === null ? "null" : typeof Plugin}. Please verify that the plugin was imported and spelled correctly.`;
        throw new TypeError(msg);
      }
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      const plugin = new Plugin(this, ...args);
      const pluginId = plugin.id;
      if (!pluginId) {
        throw new Error("Your plugin must have an id");
      }
      if (!plugin.type) {
        throw new Error("Your plugin must have a type");
      }
      const existsPluginAlready = this.getPlugin(pluginId);
      if (existsPluginAlready) {
        const msg = `Already found a plugin named '${existsPluginAlready.id}'. Tried to use: '${pluginId}'.
Uppy plugins must have unique \`id\` options.`;
        throw new Error(msg);
      }
      if (Plugin.VERSION) {
        this.log(`Using ${pluginId} v${Plugin.VERSION}`);
      }
      if (plugin.type in _classPrivateFieldLooseBase3(this, _plugins)[_plugins]) {
        _classPrivateFieldLooseBase3(this, _plugins)[_plugins][plugin.type].push(plugin);
      } else {
        _classPrivateFieldLooseBase3(this, _plugins)[_plugins][plugin.type] = [plugin];
      }
      plugin.install();
      this.emit("plugin-added", plugin);
      return this;
    }
    /**
     * Find one Plugin by name.
     */
    getPlugin(id11) {
      for (const plugins of Object.values(_classPrivateFieldLooseBase3(this, _plugins)[_plugins])) {
        const foundPlugin = plugins.find((plugin) => plugin.id === id11);
        if (foundPlugin != null) return foundPlugin;
      }
      return void 0;
    }
    [Symbol.for("uppy test: getPlugins")](type) {
      return _classPrivateFieldLooseBase3(this, _plugins)[_plugins][type];
    }
    /**
     * Iterate through all `use`d plugins.
     *
     */
    iteratePlugins(method) {
      Object.values(_classPrivateFieldLooseBase3(this, _plugins)[_plugins]).flat(1).forEach(method);
    }
    /**
     * Uninstall and remove a plugin.
     *
     * @param {object} instance The plugin instance to remove.
     */
    removePlugin(instance) {
      this.log(`Removing plugin ${instance.id}`);
      this.emit("plugin-remove", instance);
      if (instance.uninstall) {
        instance.uninstall();
      }
      const list = _classPrivateFieldLooseBase3(this, _plugins)[_plugins][instance.type];
      const index = list.findIndex((item) => item.id === instance.id);
      if (index !== -1) {
        list.splice(index, 1);
      }
      const state = this.getState();
      const updatedState = {
        plugins: {
          ...state.plugins,
          [instance.id]: void 0
        }
      };
      this.setState(updatedState);
    }
    /**
     * Uninstall all plugins and close down this Uppy instance.
     */
    destroy() {
      this.log(`Closing Uppy instance ${this.opts.id}: removing all files and uninstalling plugins`);
      this.cancelAll();
      _classPrivateFieldLooseBase3(this, _storeUnsubscribe)[_storeUnsubscribe]();
      this.iteratePlugins((plugin) => {
        this.removePlugin(plugin);
      });
      if (typeof window !== "undefined" && window.removeEventListener) {
        window.removeEventListener("online", _classPrivateFieldLooseBase3(this, _updateOnlineStatus)[_updateOnlineStatus]);
        window.removeEventListener("offline", _classPrivateFieldLooseBase3(this, _updateOnlineStatus)[_updateOnlineStatus]);
      }
    }
    hideInfo() {
      const {
        info
      } = this.getState();
      this.setState({
        info: info.slice(1)
      });
      this.emit("info-hidden");
    }
    /**
     * Set info message in `state.info`, so that UI plugins like `Informer`
     * can display the message.
     */
    info(message, type, duration) {
      if (type === void 0) {
        type = "info";
      }
      if (duration === void 0) {
        duration = 3e3;
      }
      const isComplexMessage = typeof message === "object";
      this.setState({
        info: [...this.getState().info, {
          type,
          message: isComplexMessage ? message.message : message,
          details: isComplexMessage ? message.details : null
        }]
      });
      setTimeout(() => this.hideInfo(), duration);
      this.emit("info-visible");
    }
    /**
     * Passes messages to a function, provided in `opts.logger`.
     * If `opts.logger: Uppy.debugLogger` or `opts.debug: true`, logs to the browser console.
     */
    log(message, type) {
      const {
        logger
      } = this.opts;
      switch (type) {
        case "error":
          logger.error(message);
          break;
        case "warning":
          logger.warn(message);
          break;
        default:
          logger.debug(message);
          break;
      }
    }
    registerRequestClient(id11, client) {
      _classPrivateFieldLooseBase3(this, _requestClientById)[_requestClientById].set(id11, client);
    }
    /** @protected */
    getRequestClientForFile(file) {
      if (!file.remote) throw new Error(`Tried to get RequestClient for a non-remote file ${file.id}`);
      const requestClient = _classPrivateFieldLooseBase3(this, _requestClientById)[_requestClientById].get(file.remote.requestClientId);
      if (requestClient == null) throw new Error(`requestClientId "${file.remote.requestClientId}" not registered for file "${file.id}"`);
      return requestClient;
    }
    /**
     * Restore an upload by its ID.
     */
    restore(uploadID) {
      this.log(`Core: attempting to restore upload "${uploadID}"`);
      if (!this.getState().currentUploads[uploadID]) {
        _classPrivateFieldLooseBase3(this, _removeUpload)[_removeUpload](uploadID);
        return Promise.reject(new Error("Nonexistent upload"));
      }
      return _classPrivateFieldLooseBase3(this, _runUpload)[_runUpload](uploadID);
    }
    [Symbol.for("uppy test: createUpload")]() {
      return _classPrivateFieldLooseBase3(this, _createUpload)[_createUpload](...arguments);
    }
    /**
     * Add data to an upload's result object.
     */
    addResultData(uploadID, data) {
      if (!_classPrivateFieldLooseBase3(this, _getUpload)[_getUpload](uploadID)) {
        this.log(`Not setting result for an upload that has been removed: ${uploadID}`);
        return;
      }
      const {
        currentUploads
      } = this.getState();
      const currentUpload = {
        ...currentUploads[uploadID],
        result: {
          ...currentUploads[uploadID].result,
          ...data
        }
      };
      this.setState({
        currentUploads: {
          ...currentUploads,
          [uploadID]: currentUpload
        }
      });
    }
    /**
     * Start an upload for all the files that are not currently being uploaded.
     */
    upload() {
      var _classPrivateFieldLoo;
      if (!((_classPrivateFieldLoo = _classPrivateFieldLooseBase3(this, _plugins)[_plugins]["uploader"]) != null && _classPrivateFieldLoo.length)) {
        this.log("No uploader type plugins are used", "warning");
      }
      let {
        files
      } = this.getState();
      const onBeforeUploadResult = this.opts.onBeforeUpload(files);
      if (onBeforeUploadResult === false) {
        return Promise.reject(new Error("Not starting the upload because onBeforeUpload returned false"));
      }
      if (onBeforeUploadResult && typeof onBeforeUploadResult === "object") {
        files = onBeforeUploadResult;
        this.setState({
          files
        });
      }
      return Promise.resolve().then(() => _classPrivateFieldLooseBase3(this, _restricter)[_restricter].validateMinNumberOfFiles(files)).catch((err) => {
        _classPrivateFieldLooseBase3(this, _informAndEmit)[_informAndEmit]([err]);
        throw err;
      }).then(() => {
        if (!_classPrivateFieldLooseBase3(this, _checkRequiredMetaFields)[_checkRequiredMetaFields](files)) {
          throw new RestrictionError(this.i18n("missingRequiredMetaField"));
        }
      }).catch((err) => {
        throw err;
      }).then(() => {
        const {
          currentUploads
        } = this.getState();
        const currentlyUploadingFiles = Object.values(currentUploads).flatMap((curr) => curr.fileIDs);
        const waitingFileIDs = [];
        Object.keys(files).forEach((fileID) => {
          const file = this.getFile(fileID);
          if (!file.progress.uploadStarted && currentlyUploadingFiles.indexOf(fileID) === -1) {
            waitingFileIDs.push(file.id);
          }
        });
        const uploadID = _classPrivateFieldLooseBase3(this, _createUpload)[_createUpload](waitingFileIDs);
        return _classPrivateFieldLooseBase3(this, _runUpload)[_runUpload](uploadID);
      }).catch((err) => {
        this.emit("error", err);
        this.log(err, "error");
        throw err;
      });
    }
  };
  function _informAndEmit2(errors) {
    for (const error of errors) {
      if (error.isRestriction) {
        this.emit("restriction-failed", error.file, error);
      } else {
        this.emit("error", error, error.file);
      }
      this.log(error, "warning");
    }
    const userFacingErrors = errors.filter((error) => error.isUserFacing);
    const maxNumToShow = 4;
    const firstErrors = userFacingErrors.slice(0, maxNumToShow);
    const additionalErrors = userFacingErrors.slice(maxNumToShow);
    firstErrors.forEach((_ref2) => {
      let {
        message,
        details = ""
      } = _ref2;
      this.info({
        message,
        details
      }, "error", this.opts.infoTimeout);
    });
    if (additionalErrors.length > 0) {
      this.info({
        message: this.i18n("additionalRestrictionsFailed", {
          count: additionalErrors.length
        })
      });
    }
  }
  function _checkRequiredMetaFieldsOnFile2(file) {
    const {
      missingFields,
      error
    } = _classPrivateFieldLooseBase3(this, _restricter)[_restricter].getMissingRequiredMetaFields(file);
    if (missingFields.length > 0) {
      this.setFileState(file.id, {
        missingRequiredMetaFields: missingFields
      });
      this.log(error.message);
      this.emit("restriction-failed", file, error);
      return false;
    }
    return true;
  }
  function _checkRequiredMetaFields2(files) {
    let success = true;
    for (const file of Object.values(files)) {
      if (!_classPrivateFieldLooseBase3(this, _checkRequiredMetaFieldsOnFile)[_checkRequiredMetaFieldsOnFile](file)) {
        success = false;
      }
    }
    return success;
  }
  function _assertNewUploadAllowed2(file) {
    const {
      allowNewUpload
    } = this.getState();
    if (allowNewUpload === false) {
      const error = new RestrictionError(this.i18n("noMoreFilesAllowed"), {
        file
      });
      _classPrivateFieldLooseBase3(this, _informAndEmit)[_informAndEmit]([error]);
      throw error;
    }
  }
  function _transformFile2(fileDescriptorOrFile) {
    const file = fileDescriptorOrFile instanceof File ? {
      name: fileDescriptorOrFile.name,
      type: fileDescriptorOrFile.type,
      size: fileDescriptorOrFile.size,
      data: fileDescriptorOrFile
    } : fileDescriptorOrFile;
    const fileType = getFileType(file);
    const fileName = getFileName(fileType, file);
    const fileExtension = getFileNameAndExtension(fileName).extension;
    const id11 = getSafeFileId(file, this.getID());
    const meta = file.meta || {};
    meta.name = fileName;
    meta.type = fileType;
    const size = Number.isFinite(file.data.size) ? file.data.size : null;
    return {
      source: file.source || "",
      id: id11,
      name: fileName,
      extension: fileExtension || "",
      meta: {
        ...this.getState().meta,
        ...meta
      },
      type: fileType,
      data: file.data,
      progress: {
        percentage: 0,
        bytesUploaded: false,
        bytesTotal: size,
        uploadComplete: false,
        uploadStarted: null
      },
      size,
      isGhost: false,
      isRemote: file.isRemote || false,
      remote: file.remote,
      preview: file.preview
    };
  }
  function _startIfAutoProceed2() {
    if (this.opts.autoProceed && !this.scheduledAutoProceed) {
      this.scheduledAutoProceed = setTimeout(() => {
        this.scheduledAutoProceed = null;
        this.upload().catch((err) => {
          if (!err.isRestriction) {
            this.log(err.stack || err.message || err);
          }
        });
      }, 4);
    }
  }
  function _checkAndUpdateFileState2(filesToAdd) {
    const {
      files: existingFiles
    } = this.getState();
    const nextFilesState = {
      ...existingFiles
    };
    const validFilesToAdd = [];
    const errors = [];
    for (const fileToAdd of filesToAdd) {
      try {
        var _existingFiles$newFil;
        let newFile = _classPrivateFieldLooseBase3(this, _transformFile)[_transformFile](fileToAdd);
        const isGhost = (_existingFiles$newFil = existingFiles[newFile.id]) == null ? void 0 : _existingFiles$newFil.isGhost;
        if (isGhost) {
          const existingFileState = existingFiles[newFile.id];
          newFile = {
            ...existingFileState,
            isGhost: false,
            data: fileToAdd.data
          };
          this.log(`Replaced the blob in the restored ghost file: ${newFile.name}, ${newFile.id}`);
        }
        const onBeforeFileAddedResult = this.opts.onBeforeFileAdded(newFile, nextFilesState);
        if (!onBeforeFileAddedResult && this.checkIfFileAlreadyExists(newFile.id)) {
          var _newFile$name;
          throw new RestrictionError(this.i18n("noDuplicates", {
            fileName: (_newFile$name = newFile.name) != null ? _newFile$name : this.i18n("unnamed")
          }), {
            file: fileToAdd
          });
        }
        if (onBeforeFileAddedResult === false && !isGhost) {
          throw new RestrictionError("Cannot add the file because onBeforeFileAdded returned false.", {
            isUserFacing: false,
            file: fileToAdd
          });
        } else if (typeof onBeforeFileAddedResult === "object" && onBeforeFileAddedResult !== null) {
          newFile = onBeforeFileAddedResult;
        }
        _classPrivateFieldLooseBase3(this, _restricter)[_restricter].validateSingleFile(newFile);
        nextFilesState[newFile.id] = newFile;
        validFilesToAdd.push(newFile);
      } catch (err) {
        errors.push(err);
      }
    }
    try {
      _classPrivateFieldLooseBase3(this, _restricter)[_restricter].validateAggregateRestrictions(Object.values(existingFiles), validFilesToAdd);
    } catch (err) {
      errors.push(err);
      return {
        nextFilesState: existingFiles,
        validFilesToAdd: [],
        errors
      };
    }
    return {
      nextFilesState,
      validFilesToAdd,
      errors
    };
  }
  function _addListeners2() {
    const errorHandler = (error, file, response) => {
      let errorMsg = error.message || "Unknown error";
      if (error.details) {
        errorMsg += ` ${error.details}`;
      }
      this.setState({
        error: errorMsg
      });
      if (file != null && file.id in this.getState().files) {
        this.setFileState(file.id, {
          error: errorMsg,
          response
        });
      }
    };
    this.on("error", errorHandler);
    this.on("upload-error", (file, error, response) => {
      errorHandler(error, file, response);
      if (typeof error === "object" && error.message) {
        var _file$name;
        this.log(error.message, "error");
        const newError = new Error(this.i18n("failedToUpload", {
          file: (_file$name = file == null ? void 0 : file.name) != null ? _file$name : ""
        }));
        newError.isUserFacing = true;
        newError.details = error.message;
        if (error.details) {
          newError.details += ` ${error.details}`;
        }
        _classPrivateFieldLooseBase3(this, _informAndEmit)[_informAndEmit]([newError]);
      } else {
        _classPrivateFieldLooseBase3(this, _informAndEmit)[_informAndEmit]([error]);
      }
    });
    let uploadStalledWarningRecentlyEmitted = null;
    this.on("upload-stalled", (error, files) => {
      const {
        message
      } = error;
      const details = files.map((file) => file.meta.name).join(", ");
      if (!uploadStalledWarningRecentlyEmitted) {
        this.info({
          message,
          details
        }, "warning", this.opts.infoTimeout);
        uploadStalledWarningRecentlyEmitted = setTimeout(() => {
          uploadStalledWarningRecentlyEmitted = null;
        }, this.opts.infoTimeout);
      }
      this.log(`${message} ${details}`.trim(), "warning");
    });
    this.on("upload", () => {
      this.setState({
        error: null
      });
    });
    const onUploadStarted = (files) => {
      const filesFiltered = files.filter((file) => {
        const exists = file != null && this.getFile(file.id);
        if (!exists) this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
        return exists;
      });
      const filesState = Object.fromEntries(filesFiltered.map((file) => [file.id, {
        progress: {
          uploadStarted: Date.now(),
          uploadComplete: false,
          percentage: 0,
          bytesUploaded: 0,
          bytesTotal: file.size
        }
      }]));
      this.patchFilesState(filesState);
    };
    this.on("upload-start", onUploadStarted);
    this.on("upload-progress", this.calculateProgress);
    this.on("upload-success", (file, uploadResp) => {
      if (file == null || !this.getFile(file.id)) {
        this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
        return;
      }
      const currentProgress = this.getFile(file.id).progress;
      this.setFileState(file.id, {
        progress: {
          ...currentProgress,
          postprocess: _classPrivateFieldLooseBase3(this, _postProcessors)[_postProcessors].size > 0 ? {
            mode: "indeterminate"
          } : void 0,
          uploadComplete: true,
          percentage: 100,
          bytesUploaded: currentProgress.bytesTotal
        },
        response: uploadResp,
        uploadURL: uploadResp.uploadURL,
        isPaused: false
      });
      if (file.size == null) {
        this.setFileState(file.id, {
          size: uploadResp.bytesUploaded || currentProgress.bytesTotal
        });
      }
      this.calculateTotalProgress();
    });
    this.on("preprocess-progress", (file, progress) => {
      if (file == null || !this.getFile(file.id)) {
        this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
        return;
      }
      this.setFileState(file.id, {
        progress: {
          ...this.getFile(file.id).progress,
          preprocess: progress
        }
      });
    });
    this.on("preprocess-complete", (file) => {
      if (file == null || !this.getFile(file.id)) {
        this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
        return;
      }
      const files = {
        ...this.getState().files
      };
      files[file.id] = {
        ...files[file.id],
        progress: {
          ...files[file.id].progress
        }
      };
      delete files[file.id].progress.preprocess;
      this.setState({
        files
      });
    });
    this.on("postprocess-progress", (file, progress) => {
      if (file == null || !this.getFile(file.id)) {
        this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
        return;
      }
      this.setFileState(file.id, {
        progress: {
          ...this.getState().files[file.id].progress,
          postprocess: progress
        }
      });
    });
    this.on("postprocess-complete", (file) => {
      if (file == null || !this.getFile(file.id)) {
        this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
        return;
      }
      const files = {
        ...this.getState().files
      };
      files[file.id] = {
        ...files[file.id],
        progress: {
          ...files[file.id].progress
        }
      };
      delete files[file.id].progress.postprocess;
      this.setState({
        files
      });
    });
    this.on("restored", () => {
      this.calculateTotalProgress();
    });
    this.on("dashboard:file-edit-complete", (file) => {
      if (file) {
        _classPrivateFieldLooseBase3(this, _checkRequiredMetaFieldsOnFile)[_checkRequiredMetaFieldsOnFile](file);
      }
    });
    if (typeof window !== "undefined" && window.addEventListener) {
      window.addEventListener("online", _classPrivateFieldLooseBase3(this, _updateOnlineStatus)[_updateOnlineStatus]);
      window.addEventListener("offline", _classPrivateFieldLooseBase3(this, _updateOnlineStatus)[_updateOnlineStatus]);
      setTimeout(_classPrivateFieldLooseBase3(this, _updateOnlineStatus)[_updateOnlineStatus], 3e3);
    }
  }
  function _createUpload2(fileIDs, opts) {
    if (opts === void 0) {
      opts = {};
    }
    const {
      forceAllowNewUpload = false
    } = opts;
    const {
      allowNewUpload,
      currentUploads
    } = this.getState();
    if (!allowNewUpload && !forceAllowNewUpload) {
      throw new Error("Cannot create a new upload: already uploading.");
    }
    const uploadID = nanoid();
    this.emit("upload", uploadID, this.getFilesByIds(fileIDs));
    this.setState({
      allowNewUpload: this.opts.allowMultipleUploadBatches !== false && this.opts.allowMultipleUploads !== false,
      currentUploads: {
        ...currentUploads,
        [uploadID]: {
          fileIDs,
          step: 0,
          result: {}
        }
      }
    });
    return uploadID;
  }
  function _getUpload2(uploadID) {
    const {
      currentUploads
    } = this.getState();
    return currentUploads[uploadID];
  }
  function _removeUpload2(uploadID) {
    const currentUploads = {
      ...this.getState().currentUploads
    };
    delete currentUploads[uploadID];
    this.setState({
      currentUploads
    });
  }
  async function _runUpload2(uploadID) {
    const getCurrentUpload = () => {
      const {
        currentUploads
      } = this.getState();
      return currentUploads[uploadID];
    };
    let currentUpload = getCurrentUpload();
    const steps = [..._classPrivateFieldLooseBase3(this, _preProcessors)[_preProcessors], ..._classPrivateFieldLooseBase3(this, _uploaders)[_uploaders], ..._classPrivateFieldLooseBase3(this, _postProcessors)[_postProcessors]];
    try {
      for (let step = currentUpload.step || 0; step < steps.length; step++) {
        if (!currentUpload) {
          break;
        }
        const fn = steps[step];
        this.setState({
          currentUploads: {
            ...this.getState().currentUploads,
            [uploadID]: {
              ...currentUpload,
              step
            }
          }
        });
        const {
          fileIDs
        } = currentUpload;
        await fn(fileIDs, uploadID);
        currentUpload = getCurrentUpload();
      }
    } catch (err) {
      _classPrivateFieldLooseBase3(this, _removeUpload)[_removeUpload](uploadID);
      throw err;
    }
    if (currentUpload) {
      currentUpload.fileIDs.forEach((fileID) => {
        const file = this.getFile(fileID);
        if (file && file.progress.postprocess) {
          this.emit("postprocess-complete", file);
        }
      });
      const files = currentUpload.fileIDs.map((fileID) => this.getFile(fileID));
      const successful = files.filter((file) => !file.error);
      const failed = files.filter((file) => file.error);
      this.addResultData(uploadID, {
        successful,
        failed,
        uploadID
      });
      currentUpload = getCurrentUpload();
    }
    let result;
    if (currentUpload) {
      result = currentUpload.result;
      this.emit("complete", result);
      _classPrivateFieldLooseBase3(this, _removeUpload)[_removeUpload](uploadID);
    }
    if (result == null) {
      this.log(`Not setting result for an upload that has been removed: ${uploadID}`);
    }
    return result;
  }
  Uppy.VERSION = packageJson2.version;
  var Uppy_default = Uppy;

  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var t;
  var i;
  var o;
  var r;
  var f;
  var e;
  var c;
  var s;
  var a;
  var h = {};
  var p = [];
  var v = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var y = Array.isArray;
  function d(n2, l2) {
    for (var u2 in l2) n2[u2] = l2[u2];
    return n2;
  }
  function w(n2) {
    var l2 = n2.parentNode;
    l2 && l2.removeChild(n2);
  }
  function _(l2, u2, t2) {
    var i2, o2, r2, f2 = {};
    for (r2 in u2) "key" == r2 ? i2 = u2[r2] : "ref" == r2 ? o2 = u2[r2] : f2[r2] = u2[r2];
    if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), "function" == typeof l2 && null != l2.defaultProps) for (r2 in l2.defaultProps) void 0 === f2[r2] && (f2[r2] = l2.defaultProps[r2]);
    return g(l2, f2, i2, o2, null);
  }
  function g(n2, t2, i2, o2, r2) {
    var f2 = { type: n2, props: t2, key: i2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r2 ? ++u : r2, __i: -1, __u: 0 };
    return null == r2 && null != l.vnode && l.vnode(f2), f2;
  }
  function k(n2) {
    return n2.children;
  }
  function b(n2, l2) {
    this.props = n2, this.context = l2;
  }
  function x(n2, l2) {
    if (null == l2) return n2.__ ? x(n2.__, n2.__i + 1) : null;
    for (var u2; l2 < n2.__k.length; l2++) if (null != (u2 = n2.__k[l2]) && null != u2.__e) return u2.__e;
    return "function" == typeof n2.type ? x(n2) : null;
  }
  function C(n2) {
    var l2, u2;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++) if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
      return C(n2);
    }
  }
  function M(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !P.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(P);
  }
  function P() {
    var n2, u2, t2, o2, r2, e2, c2, s2;
    for (i.sort(f); n2 = i.shift(); ) n2.__d && (u2 = i.length, o2 = void 0, e2 = (r2 = (t2 = n2).__v).__e, c2 = [], s2 = [], t2.__P && ((o2 = d({}, r2)).__v = r2.__v + 1, l.vnode && l.vnode(o2), O(t2.__P, o2, r2, t2.__n, t2.__P.namespaceURI, 32 & r2.__u ? [e2] : null, c2, null == e2 ? x(r2) : e2, !!(32 & r2.__u), s2), o2.__v = r2.__v, o2.__.__k[o2.__i] = o2, j(c2, o2, s2), o2.__e != e2 && C(o2)), i.length > u2 && i.sort(f));
    P.__r = 0;
  }
  function S(n2, l2, u2, t2, i2, o2, r2, f2, e2, c2, s2) {
    var a2, v2, y2, d2, w2, _2 = t2 && t2.__k || p, g2 = l2.length;
    for (u2.__d = e2, $(u2, l2, _2), e2 = u2.__d, a2 = 0; a2 < g2; a2++) null != (y2 = u2.__k[a2]) && "boolean" != typeof y2 && "function" != typeof y2 && (v2 = -1 === y2.__i ? h : _2[y2.__i] || h, y2.__i = a2, O(n2, y2, v2, i2, o2, r2, f2, e2, c2, s2), d2 = y2.__e, y2.ref && v2.ref != y2.ref && (v2.ref && N(v2.ref, null, y2), s2.push(y2.ref, y2.__c || d2, y2)), null == w2 && null != d2 && (w2 = d2), 65536 & y2.__u || v2.__k === y2.__k ? e2 = I(y2, e2, n2) : "function" == typeof y2.type && void 0 !== y2.__d ? e2 = y2.__d : d2 && (e2 = d2.nextSibling), y2.__d = void 0, y2.__u &= -196609);
    u2.__d = e2, u2.__e = w2;
  }
  function $(n2, l2, u2) {
    var t2, i2, o2, r2, f2, e2 = l2.length, c2 = u2.length, s2 = c2, a2 = 0;
    for (n2.__k = [], t2 = 0; t2 < e2; t2++) r2 = t2 + a2, null != (i2 = n2.__k[t2] = null == (i2 = l2[t2]) || "boolean" == typeof i2 || "function" == typeof i2 ? null : "string" == typeof i2 || "number" == typeof i2 || "bigint" == typeof i2 || i2.constructor == String ? g(null, i2, null, null, null) : y(i2) ? g(k, { children: i2 }, null, null, null) : void 0 === i2.constructor && i2.__b > 0 ? g(i2.type, i2.props, i2.key, i2.ref ? i2.ref : null, i2.__v) : i2) ? (i2.__ = n2, i2.__b = n2.__b + 1, f2 = L(i2, u2, r2, s2), i2.__i = f2, o2 = null, -1 !== f2 && (s2--, (o2 = u2[f2]) && (o2.__u |= 131072)), null == o2 || null === o2.__v ? (-1 == f2 && a2--, "function" != typeof i2.type && (i2.__u |= 65536)) : f2 !== r2 && (f2 == r2 - 1 ? a2-- : f2 == r2 + 1 ? a2++ : f2 > r2 ? s2 > e2 - r2 ? a2 += f2 - r2 : a2-- : f2 < r2 && (f2 == r2 - a2 ? a2 -= f2 - r2 : a2++), f2 !== t2 + a2 && (i2.__u |= 65536))) : (o2 = u2[r2]) && null == o2.key && o2.__e && 0 == (131072 & o2.__u) && (o2.__e == n2.__d && (n2.__d = x(o2)), V(o2, o2, false), u2[r2] = null, s2--);
    if (s2) for (t2 = 0; t2 < c2; t2++) null != (o2 = u2[t2]) && 0 == (131072 & o2.__u) && (o2.__e == n2.__d && (n2.__d = x(o2)), V(o2, o2));
  }
  function I(n2, l2, u2) {
    var t2, i2;
    if ("function" == typeof n2.type) {
      for (t2 = n2.__k, i2 = 0; t2 && i2 < t2.length; i2++) t2[i2] && (t2[i2].__ = n2, l2 = I(t2[i2], l2, u2));
      return l2;
    }
    n2.__e != l2 && (l2 && n2.type && !u2.contains(l2) && (l2 = x(n2)), u2.insertBefore(n2.__e, l2 || null), l2 = n2.__e);
    do {
      l2 = l2 && l2.nextSibling;
    } while (null != l2 && 8 === l2.nodeType);
    return l2;
  }
  function L(n2, l2, u2, t2) {
    var i2 = n2.key, o2 = n2.type, r2 = u2 - 1, f2 = u2 + 1, e2 = l2[u2];
    if (null === e2 || e2 && i2 == e2.key && o2 === e2.type && 0 == (131072 & e2.__u)) return u2;
    if (t2 > (null != e2 && 0 == (131072 & e2.__u) ? 1 : 0)) for (; r2 >= 0 || f2 < l2.length; ) {
      if (r2 >= 0) {
        if ((e2 = l2[r2]) && 0 == (131072 & e2.__u) && i2 == e2.key && o2 === e2.type) return r2;
        r2--;
      }
      if (f2 < l2.length) {
        if ((e2 = l2[f2]) && 0 == (131072 & e2.__u) && i2 == e2.key && o2 === e2.type) return f2;
        f2++;
      }
    }
    return -1;
  }
  function T(n2, l2, u2) {
    "-" === l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || v.test(l2) ? u2 : u2 + "px";
  }
  function A(n2, l2, u2, t2, i2) {
    var o2;
    n: if ("style" === l2) if ("string" == typeof u2) n2.style.cssText = u2;
    else {
      if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2) for (l2 in t2) u2 && l2 in u2 || T(n2.style, l2, "");
      if (u2) for (l2 in u2) t2 && u2[l2] === t2[l2] || T(n2.style, l2, u2[l2]);
    }
    else if ("o" === l2[0] && "n" === l2[1]) o2 = l2 !== (l2 = l2.replace(/(PointerCapture)$|Capture$/i, "$1")), l2 = l2.toLowerCase() in n2 || "onFocusOut" === l2 || "onFocusIn" === l2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? t2 ? u2.u = t2.u : (u2.u = e, n2.addEventListener(l2, o2 ? s : c, o2)) : n2.removeEventListener(l2, o2 ? s : c, o2);
    else {
      if ("http://www.w3.org/2000/svg" == i2) l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != l2 && "height" != l2 && "href" != l2 && "list" != l2 && "form" != l2 && "tabIndex" != l2 && "download" != l2 && "rowSpan" != l2 && "colSpan" != l2 && "role" != l2 && "popover" != l2 && l2 in n2) try {
        n2[l2] = null == u2 ? "" : u2;
        break n;
      } catch (n3) {
      }
      "function" == typeof u2 || (null == u2 || false === u2 && "-" !== l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, "popover" == l2 && 1 == u2 ? "" : u2));
    }
  }
  function F(n2) {
    return function(u2) {
      if (this.l) {
        var t2 = this.l[u2.type + n2];
        if (null == u2.t) u2.t = e++;
        else if (u2.t < t2.u) return;
        return t2(l.event ? l.event(u2) : u2);
      }
    };
  }
  function O(n2, u2, t2, i2, o2, r2, f2, e2, c2, s2) {
    var a2, h2, p2, v2, w2, _2, g2, m, x2, C2, M2, P2, $2, I2, H, L2, T2 = u2.type;
    if (void 0 !== u2.constructor) return null;
    128 & t2.__u && (c2 = !!(32 & t2.__u), r2 = [e2 = u2.__e = t2.__e]), (a2 = l.__b) && a2(u2);
    n: if ("function" == typeof T2) try {
      if (m = u2.props, x2 = "prototype" in T2 && T2.prototype.render, C2 = (a2 = T2.contextType) && i2[a2.__c], M2 = a2 ? C2 ? C2.props.value : a2.__ : i2, t2.__c ? g2 = (h2 = u2.__c = t2.__c).__ = h2.__E : (x2 ? u2.__c = h2 = new T2(m, M2) : (u2.__c = h2 = new b(m, M2), h2.constructor = T2, h2.render = q), C2 && C2.sub(h2), h2.props = m, h2.state || (h2.state = {}), h2.context = M2, h2.__n = i2, p2 = h2.__d = true, h2.__h = [], h2._sb = []), x2 && null == h2.__s && (h2.__s = h2.state), x2 && null != T2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = d({}, h2.__s)), d(h2.__s, T2.getDerivedStateFromProps(m, h2.__s))), v2 = h2.props, w2 = h2.state, h2.__v = u2, p2) x2 && null == T2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), x2 && null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
      else {
        if (x2 && null == T2.getDerivedStateFromProps && m !== v2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(m, M2), !h2.__e && (null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(m, h2.__s, M2) || u2.__v === t2.__v)) {
          for (u2.__v !== t2.__v && (h2.props = m, h2.state = h2.__s, h2.__d = false), u2.__e = t2.__e, u2.__k = t2.__k, u2.__k.forEach(function(n3) {
            n3 && (n3.__ = u2);
          }), P2 = 0; P2 < h2._sb.length; P2++) h2.__h.push(h2._sb[P2]);
          h2._sb = [], h2.__h.length && f2.push(h2);
          break n;
        }
        null != h2.componentWillUpdate && h2.componentWillUpdate(m, h2.__s, M2), x2 && null != h2.componentDidUpdate && h2.__h.push(function() {
          h2.componentDidUpdate(v2, w2, _2);
        });
      }
      if (h2.context = M2, h2.props = m, h2.__P = n2, h2.__e = false, $2 = l.__r, I2 = 0, x2) {
        for (h2.state = h2.__s, h2.__d = false, $2 && $2(u2), a2 = h2.render(h2.props, h2.state, h2.context), H = 0; H < h2._sb.length; H++) h2.__h.push(h2._sb[H]);
        h2._sb = [];
      } else do {
        h2.__d = false, $2 && $2(u2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
      } while (h2.__d && ++I2 < 25);
      h2.state = h2.__s, null != h2.getChildContext && (i2 = d(d({}, i2), h2.getChildContext())), x2 && !p2 && null != h2.getSnapshotBeforeUpdate && (_2 = h2.getSnapshotBeforeUpdate(v2, w2)), S(n2, y(L2 = null != a2 && a2.type === k && null == a2.key ? a2.props.children : a2) ? L2 : [L2], u2, t2, i2, o2, r2, f2, e2, c2, s2), h2.base = u2.__e, u2.__u &= -161, h2.__h.length && f2.push(h2), g2 && (h2.__E = h2.__ = null);
    } catch (n3) {
      if (u2.__v = null, c2 || null != r2) {
        for (u2.__u |= c2 ? 160 : 32; e2 && 8 === e2.nodeType && e2.nextSibling; ) e2 = e2.nextSibling;
        r2[r2.indexOf(e2)] = null, u2.__e = e2;
      } else u2.__e = t2.__e, u2.__k = t2.__k;
      l.__e(n3, u2, t2);
    }
    else null == r2 && u2.__v === t2.__v ? (u2.__k = t2.__k, u2.__e = t2.__e) : u2.__e = z(t2.__e, u2, t2, i2, o2, r2, f2, c2, s2);
    (a2 = l.diffed) && a2(u2);
  }
  function j(n2, u2, t2) {
    u2.__d = void 0;
    for (var i2 = 0; i2 < t2.length; i2++) N(t2[i2], t2[++i2], t2[++i2]);
    l.__c && l.__c(u2, n2), n2.some(function(u3) {
      try {
        n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
          n3.call(u3);
        });
      } catch (n3) {
        l.__e(n3, u3.__v);
      }
    });
  }
  function z(l2, u2, t2, i2, o2, r2, f2, e2, c2) {
    var s2, a2, p2, v2, d2, _2, g2, m = t2.props, k2 = u2.props, b2 = u2.type;
    if ("svg" === b2 ? o2 = "http://www.w3.org/2000/svg" : "math" === b2 ? o2 = "http://www.w3.org/1998/Math/MathML" : o2 || (o2 = "http://www.w3.org/1999/xhtml"), null != r2) {
      for (s2 = 0; s2 < r2.length; s2++) if ((d2 = r2[s2]) && "setAttribute" in d2 == !!b2 && (b2 ? d2.localName === b2 : 3 === d2.nodeType)) {
        l2 = d2, r2[s2] = null;
        break;
      }
    }
    if (null == l2) {
      if (null === b2) return document.createTextNode(k2);
      l2 = document.createElementNS(o2, b2, k2.is && k2), r2 = null, e2 = false;
    }
    if (null === b2) m === k2 || e2 && l2.data === k2 || (l2.data = k2);
    else {
      if (r2 = r2 && n.call(l2.childNodes), m = t2.props || h, !e2 && null != r2) for (m = {}, s2 = 0; s2 < l2.attributes.length; s2++) m[(d2 = l2.attributes[s2]).name] = d2.value;
      for (s2 in m) if (d2 = m[s2], "children" == s2) ;
      else if ("dangerouslySetInnerHTML" == s2) p2 = d2;
      else if ("key" !== s2 && !(s2 in k2)) {
        if ("value" == s2 && "defaultValue" in k2 || "checked" == s2 && "defaultChecked" in k2) continue;
        A(l2, s2, null, d2, o2);
      }
      for (s2 in k2) d2 = k2[s2], "children" == s2 ? v2 = d2 : "dangerouslySetInnerHTML" == s2 ? a2 = d2 : "value" == s2 ? _2 = d2 : "checked" == s2 ? g2 = d2 : "key" === s2 || e2 && "function" != typeof d2 || m[s2] === d2 || A(l2, s2, d2, m[s2], o2);
      if (a2) e2 || p2 && (a2.__html === p2.__html || a2.__html === l2.innerHTML) || (l2.innerHTML = a2.__html), u2.__k = [];
      else if (p2 && (l2.innerHTML = ""), S(l2, y(v2) ? v2 : [v2], u2, t2, i2, "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : o2, r2, f2, r2 ? r2[0] : t2.__k && x(t2, 0), e2, c2), null != r2) for (s2 = r2.length; s2--; ) null != r2[s2] && w(r2[s2]);
      e2 || (s2 = "value", void 0 !== _2 && (_2 !== l2[s2] || "progress" === b2 && !_2 || "option" === b2 && _2 !== m[s2]) && A(l2, s2, _2, m[s2], o2), s2 = "checked", void 0 !== g2 && g2 !== l2[s2] && A(l2, s2, g2, m[s2], o2));
    }
    return l2;
  }
  function N(n2, u2, t2) {
    try {
      if ("function" == typeof n2) {
        var i2 = "function" == typeof n2.__u;
        i2 && n2.__u(), i2 && null == u2 || (n2.__u = n2(u2));
      } else n2.current = u2;
    } catch (n3) {
      l.__e(n3, t2);
    }
  }
  function V(n2, u2, t2) {
    var i2, o2;
    if (l.unmount && l.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current !== n2.__e || N(i2, null, u2)), null != (i2 = n2.__c)) {
      if (i2.componentWillUnmount) try {
        i2.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u2);
      }
      i2.base = i2.__P = null;
    }
    if (i2 = n2.__k) for (o2 = 0; o2 < i2.length; o2++) i2[o2] && V(i2[o2], u2, t2 || "function" != typeof n2.type);
    t2 || null == n2.__e || w(n2.__e), n2.__c = n2.__ = n2.__e = n2.__d = void 0;
  }
  function q(n2, l2, u2) {
    return this.constructor(n2, u2);
  }
  function B(u2, t2, i2) {
    var o2, r2, f2, e2;
    l.__ && l.__(u2, t2), r2 = (o2 = "function" == typeof i2) ? null : i2 && i2.__k || t2.__k, f2 = [], e2 = [], O(t2, u2 = (!o2 && i2 || t2).__k = _(k, null, [u2]), r2 || h, h, t2.namespaceURI, !o2 && i2 ? [i2] : r2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, f2, !o2 && i2 ? i2 : r2 ? r2.__e : t2.firstChild, o2, e2), j(f2, u2, e2);
  }
  n = p.slice, l = { __e: function(n2, l2, u2, t2) {
    for (var i2, o2, r2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
      if ((o2 = i2.constructor) && null != o2.getDerivedStateFromError && (i2.setState(o2.getDerivedStateFromError(n2)), r2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), r2 = i2.__d), r2) return i2.__E = i2;
    } catch (l3) {
      n2 = l3;
    }
    throw n2;
  } }, u = 0, t = function(n2) {
    return null != n2 && null == n2.constructor;
  }, b.prototype.setState = function(n2, l2) {
    var u2;
    u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n2 && (n2 = n2(d({}, u2), this.props)), n2 && d(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), M(this));
  }, b.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
  }, b.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l2) {
    return n2.__v.__b - l2.__v.__b;
  }, P.__r = 0, e = 0, c = F(false), s = F(true), a = 0;

  // node_modules/@uppy/utils/lib/isDOMElement.js
  function isDOMElement(obj) {
    if (typeof obj !== "object" || obj === null) return false;
    if (!("nodeType" in obj)) return false;
    return obj.nodeType === Node.ELEMENT_NODE;
  }

  // node_modules/@uppy/utils/lib/findDOMElement.js
  function findDOMElement(element, context) {
    if (context === void 0) {
      context = document;
    }
    if (typeof element === "string") {
      return context.querySelector(element);
    }
    if (isDOMElement(element)) {
      return element;
    }
    return null;
  }
  var findDOMElement_default = findDOMElement;

  // node_modules/@uppy/utils/lib/getTextDirection.js
  function getTextDirection(element) {
    var _element;
    while (element && !element.dir) {
      element = element.parentNode;
    }
    return (_element = element) == null ? void 0 : _element.dir;
  }
  var getTextDirection_default = getTextDirection;

  // node_modules/@uppy/core/lib/BasePlugin.js
  var BasePlugin = class {
    constructor(uppy, opts) {
      this.uppy = uppy;
      this.opts = opts != null ? opts : {};
    }
    getPluginState() {
      const {
        plugins
      } = this.uppy.getState();
      return (plugins == null ? void 0 : plugins[this.id]) || {};
    }
    setPluginState(update) {
      const {
        plugins
      } = this.uppy.getState();
      this.uppy.setState({
        plugins: {
          ...plugins,
          [this.id]: {
            ...plugins[this.id],
            ...update
          }
        }
      });
    }
    setOptions(newOpts) {
      this.opts = {
        ...this.opts,
        ...newOpts
      };
      this.setPluginState(void 0);
      this.i18nInit();
    }
    i18nInit() {
      const translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
      this.i18n = translator.translate.bind(translator);
      this.i18nArray = translator.translateArray.bind(translator);
      this.setPluginState(void 0);
    }
    /**
     * Extendable methods
     * ==================
     * These methods are here to serve as an overview of the extendable methods as well as
     * making them not conditional in use, such as `if (this.afterUpdate)`.
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addTarget(plugin) {
      throw new Error("Extend the addTarget method to add your plugin to another plugin's target");
    }
    install() {
    }
    uninstall() {
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    update(state) {
    }
    // Called after every state update, after everything's mounted. Debounced.
    afterUpdate() {
    }
  };

  // node_modules/@uppy/core/lib/UIPlugin.js
  function _classPrivateFieldLooseBase4(e2, t2) {
    if (!{}.hasOwnProperty.call(e2, t2)) throw new TypeError("attempted to use private field on non-instance");
    return e2;
  }
  var id4 = 0;
  function _classPrivateFieldLooseKey4(e2) {
    return "__private_" + id4++ + "_" + e2;
  }
  function debounce(fn) {
    let calling = null;
    let latestArgs;
    return function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      latestArgs = args;
      if (!calling) {
        calling = Promise.resolve().then(() => {
          calling = null;
          return fn(...latestArgs);
        });
      }
      return calling;
    };
  }
  var _updateUI = /* @__PURE__ */ _classPrivateFieldLooseKey4("updateUI");
  var UIPlugin = class _UIPlugin extends BasePlugin {
    constructor() {
      super(...arguments);
      Object.defineProperty(this, _updateUI, {
        writable: true,
        value: void 0
      });
    }
    getTargetPlugin(target) {
      let targetPlugin;
      if (typeof (target == null ? void 0 : target.addTarget) === "function") {
        targetPlugin = target;
        if (!(targetPlugin instanceof _UIPlugin)) {
          console.warn(new Error("The provided plugin is not an instance of UIPlugin. This is an indication of a bug with the way Uppy is bundled.", {
            cause: {
              targetPlugin,
              UIPlugin: _UIPlugin
            }
          }));
        }
      } else if (typeof target === "function") {
        const Target = target;
        this.uppy.iteratePlugins((p2) => {
          if (p2 instanceof Target) {
            targetPlugin = p2;
          }
        });
      }
      return targetPlugin;
    }
    /**
     * Check if supplied `target` is a DOM element or an `object`.
     * If it’s an object — target is a plugin, and we search `plugins`
     * for a plugin with same name and return its target.
     */
    mount(target, plugin) {
      const callerPluginName = plugin.id;
      const targetElement = findDOMElement_default(target);
      if (targetElement) {
        this.isTargetDOMEl = true;
        const uppyRootElement = document.createElement("div");
        uppyRootElement.classList.add("uppy-Root");
        _classPrivateFieldLooseBase4(this, _updateUI)[_updateUI] = debounce((state) => {
          if (!this.uppy.getPlugin(this.id)) return;
          B(this.render(state), uppyRootElement);
          this.afterUpdate();
        });
        this.uppy.log(`Installing ${callerPluginName} to a DOM element '${target}'`);
        if (this.opts.replaceTargetContent) {
          targetElement.innerHTML = "";
        }
        B(this.render(this.uppy.getState()), uppyRootElement);
        this.el = uppyRootElement;
        targetElement.appendChild(uppyRootElement);
        uppyRootElement.dir = this.opts.direction || getTextDirection_default(uppyRootElement) || "ltr";
        this.onMount();
        return this.el;
      }
      const targetPlugin = this.getTargetPlugin(target);
      if (targetPlugin) {
        this.uppy.log(`Installing ${callerPluginName} to ${targetPlugin.id}`);
        this.parent = targetPlugin;
        this.el = targetPlugin.addTarget(plugin);
        this.onMount();
        return this.el;
      }
      this.uppy.log(`Not installing ${callerPluginName}`);
      let message = `Invalid target option given to ${callerPluginName}.`;
      if (typeof target === "function") {
        message += " The given target is not a Plugin class. Please check that you're not specifying a React Component instead of a plugin. If you are using @uppy/* packages directly, make sure you have only 1 version of @uppy/core installed: run `npm ls @uppy/core` on the command line and verify that all the versions match and are deduped correctly.";
      } else {
        message += "If you meant to target an HTML element, please make sure that the element exists. Check that the <script> tag initializing Uppy is right before the closing </body> tag at the end of the page. (see https://github.com/transloadit/uppy/issues/1042)\n\nIf you meant to target a plugin, please confirm that your `import` statements or `require` calls are correct.";
      }
      throw new Error(message);
    }
    /**
     * Called when plugin is mounted, whether in DOM or into another plugin.
     * Needed because sometimes plugins are mounted separately/after `install`,
     * so this.el and this.parent might not be available in `install`.
     * This is the case with @uppy/react plugins, for example.
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    render(state) {
      throw new Error("Extend the render method to add your plugin to a DOM element");
    }
    update(state) {
      if (this.el != null) {
        var _classPrivateFieldLoo, _classPrivateFieldLoo2;
        (_classPrivateFieldLoo = (_classPrivateFieldLoo2 = _classPrivateFieldLooseBase4(this, _updateUI))[_updateUI]) == null || _classPrivateFieldLoo.call(_classPrivateFieldLoo2, state);
      }
    }
    unmount() {
      if (this.isTargetDOMEl) {
        var _this$el;
        (_this$el = this.el) == null || _this$el.remove();
      }
      this.onUnmount();
    }
    onMount() {
    }
    onUnmount() {
    }
  };
  var UIPlugin_default = UIPlugin;

  // node_modules/@uppy/utils/lib/UserFacingApiError.js
  var UserFacingApiError = class extends Error {
    constructor() {
      super(...arguments);
      this.name = "UserFacingApiError";
    }
  };
  var UserFacingApiError_default = UserFacingApiError;

  // node_modules/p-retry/index.js
  var import_retry = __toESM(require_retry2(), 1);

  // node_modules/is-network-error/index.js
  var objectToString = Object.prototype.toString;
  var isError = (value) => objectToString.call(value) === "[object Error]";
  var errorMessages = /* @__PURE__ */ new Set([
    "network error",
    // Chrome
    "Failed to fetch",
    // Chrome
    "NetworkError when attempting to fetch resource.",
    // Firefox
    "The Internet connection appears to be offline.",
    // Safari 16
    "Load failed",
    // Safari 17+
    "Network request failed",
    // `cross-fetch`
    "fetch failed",
    // Undici (Node.js)
    "terminated"
    // Undici (Node.js)
  ]);
  function isNetworkError(error) {
    const isValid = error && isError(error) && error.name === "TypeError" && typeof error.message === "string";
    if (!isValid) {
      return false;
    }
    if (error.message === "Load failed") {
      return error.stack === void 0;
    }
    return errorMessages.has(error.message);
  }

  // node_modules/p-retry/index.js
  var AbortError = class extends Error {
    constructor(message) {
      super();
      if (message instanceof Error) {
        this.originalError = message;
        ({ message } = message);
      } else {
        this.originalError = new Error(message);
        this.originalError.stack = this.stack;
      }
      this.name = "AbortError";
      this.message = message;
    }
  };
  var decorateErrorWithCounts = (error, attemptNumber, options) => {
    const retriesLeft = options.retries - (attemptNumber - 1);
    error.attemptNumber = attemptNumber;
    error.retriesLeft = retriesLeft;
    return error;
  };
  async function pRetry(input, options) {
    return new Promise((resolve, reject) => {
      options = {
        onFailedAttempt() {
        },
        retries: 10,
        shouldRetry: () => true,
        ...options
      };
      const operation = import_retry.default.operation(options);
      const abortHandler = () => {
        operation.stop();
        reject(options.signal?.reason);
      };
      if (options.signal && !options.signal.aborted) {
        options.signal.addEventListener("abort", abortHandler, { once: true });
      }
      const cleanUp = () => {
        options.signal?.removeEventListener("abort", abortHandler);
        operation.stop();
      };
      operation.attempt(async (attemptNumber) => {
        try {
          const result = await input(attemptNumber);
          cleanUp();
          resolve(result);
        } catch (error) {
          try {
            if (!(error instanceof Error)) {
              throw new TypeError(`Non-error was thrown: "${error}". You should only throw errors.`);
            }
            if (error instanceof AbortError) {
              throw error.originalError;
            }
            if (error instanceof TypeError && !isNetworkError(error)) {
              throw error;
            }
            decorateErrorWithCounts(error, attemptNumber, options);
            if (!await options.shouldRetry(error)) {
              operation.stop();
              reject(error);
            }
            await options.onFailedAttempt(error);
            if (!operation.retry(error)) {
              throw operation.mainError();
            }
          } catch (finalError) {
            decorateErrorWithCounts(finalError, attemptNumber, options);
            cleanUp();
            reject(finalError);
          }
        }
      });
    });
  }

  // node_modules/@uppy/utils/lib/NetworkError.js
  var NetworkError = class extends Error {
    constructor(error, xhr) {
      if (xhr === void 0) {
        xhr = null;
      }
      super(`This looks like a network error, the endpoint might be blocked by an internet provider or a firewall.`);
      this.cause = error;
      this.isNetworkError = true;
      this.request = xhr;
    }
  };
  var NetworkError_default = NetworkError;

  // node_modules/@uppy/utils/lib/fetchWithNetworkError.js
  function fetchWithNetworkError() {
    return fetch(...arguments).catch((err) => {
      if (err.name === "AbortError") {
        throw err;
      } else {
        throw new NetworkError_default(err);
      }
    });
  }

  // node_modules/@uppy/utils/lib/hasProperty.js
  function has(object, key) {
    return Object.prototype.hasOwnProperty.call(object, key);
  }

  // node_modules/@uppy/utils/lib/ErrorWithCause.js
  var ErrorWithCause = class extends Error {
    constructor(message, options) {
      super(message);
      this.cause = options == null ? void 0 : options.cause;
      if (this.cause && has(this.cause, "isNetworkError")) {
        this.isNetworkError = this.cause.isNetworkError;
      } else {
        this.isNetworkError = false;
      }
    }
  };
  var ErrorWithCause_default = ErrorWithCause;

  // node_modules/@uppy/utils/lib/emitSocketProgress.js
  var import_throttle2 = __toESM(require_throttle(), 1);
  function emitSocketProgress(uploader, progressData, file) {
    const {
      progress,
      bytesUploaded,
      bytesTotal
    } = progressData;
    if (progress) {
      var _file$progress$upload;
      uploader.uppy.log(`Upload progress: ${progress}`);
      uploader.uppy.emit("upload-progress", file, {
        uploadStarted: (_file$progress$upload = file.progress.uploadStarted) != null ? _file$progress$upload : 0,
        bytesUploaded,
        bytesTotal
      });
    }
  }
  var emitSocketProgress_default = (0, import_throttle2.default)(emitSocketProgress, 300, {
    leading: true,
    trailing: true
  });

  // node_modules/@uppy/utils/lib/getSocketHost.js
  function getSocketHost(url) {
    var _regex$exec;
    const regex = /^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i;
    const host = (_regex$exec = regex.exec(url)) == null ? void 0 : _regex$exec[1];
    const socketProtocol = /^http:\/\//i.test(url) ? "ws" : "wss";
    return `${socketProtocol}://${host}`;
  }

  // node_modules/@uppy/companion-client/lib/AuthError.js
  var AuthError = class extends Error {
    constructor() {
      super("Authorization required");
      this.name = "AuthError";
      this.isAuthError = true;
    }
  };
  var AuthError_default = AuthError;

  // node_modules/@uppy/companion-client/lib/RequestClient.js
  function _classPrivateFieldLooseBase5(e2, t2) {
    if (!{}.hasOwnProperty.call(e2, t2)) throw new TypeError("attempted to use private field on non-instance");
    return e2;
  }
  var id5 = 0;
  function _classPrivateFieldLooseKey5(e2) {
    return "__private_" + id5++ + "_" + e2;
  }
  var packageJson3 = {
    "version": "4.0.1"
  };
  function stripSlash(url) {
    return url.replace(/\/$/, "");
  }
  var retryCount = 10;
  var socketActivityTimeoutMs = 5 * 60 * 1e3;
  var authErrorStatusCode = 401;
  var HttpError = class extends Error {
    constructor(_ref) {
      let {
        statusCode,
        message
      } = _ref;
      super(message);
      this.name = "HttpError";
      this.statusCode = statusCode;
    }
  };
  async function handleJSONResponse(res) {
    if (res.status === authErrorStatusCode) {
      throw new AuthError_default();
    }
    if (res.ok) {
      return res.json();
    }
    let errMsg = `Failed request with status: ${res.status}. ${res.statusText}`;
    let errData;
    try {
      errData = await res.json();
      if (errData.message) errMsg = `${errMsg} message: ${errData.message}`;
      if (errData.requestId) errMsg = `${errMsg} request-Id: ${errData.requestId}`;
    } catch (cause) {
      throw new Error(errMsg, {
        cause
      });
    }
    if (res.status >= 400 && res.status <= 499 && errData.message) {
      throw new UserFacingApiError_default(errData.message);
    }
    throw new HttpError({
      statusCode: res.status,
      message: errMsg
    });
  }
  var _companionHeaders = /* @__PURE__ */ _classPrivateFieldLooseKey5("companionHeaders");
  var _getUrl = /* @__PURE__ */ _classPrivateFieldLooseKey5("getUrl");
  var _requestSocketToken = /* @__PURE__ */ _classPrivateFieldLooseKey5("requestSocketToken");
  var _awaitRemoteFileUpload = /* @__PURE__ */ _classPrivateFieldLooseKey5("awaitRemoteFileUpload");
  var RequestClient = class {
    constructor(uppy, opts) {
      Object.defineProperty(this, _awaitRemoteFileUpload, {
        value: _awaitRemoteFileUpload2
      });
      Object.defineProperty(this, _getUrl, {
        value: _getUrl2
      });
      Object.defineProperty(this, _companionHeaders, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _requestSocketToken, {
        writable: true,
        value: async (_ref2) => {
          var _file$remote;
          let {
            file,
            postBody,
            signal
          } = _ref2;
          if (((_file$remote = file.remote) == null ? void 0 : _file$remote.url) == null) {
            throw new Error("Cannot connect to an undefined URL");
          }
          const res = await this.post(file.remote.url, {
            ...file.remote.body,
            ...postBody
          }, {
            signal
          });
          return res.token;
        }
      });
      this.uppy = uppy;
      this.opts = opts;
      this.onReceiveResponse = this.onReceiveResponse.bind(this);
      _classPrivateFieldLooseBase5(this, _companionHeaders)[_companionHeaders] = opts.companionHeaders;
    }
    setCompanionHeaders(headers) {
      _classPrivateFieldLooseBase5(this, _companionHeaders)[_companionHeaders] = headers;
    }
    [Symbol.for("uppy test: getCompanionHeaders")]() {
      return _classPrivateFieldLooseBase5(this, _companionHeaders)[_companionHeaders];
    }
    get hostname() {
      const {
        companion
      } = this.uppy.getState();
      const host = this.opts.companionUrl;
      return stripSlash(companion && companion[host] ? companion[host] : host);
    }
    async headers(emptyBody) {
      if (emptyBody === void 0) {
        emptyBody = false;
      }
      const defaultHeaders = {
        Accept: "application/json",
        ...emptyBody ? void 0 : {
          // Passing those headers on requests with no data forces browsers to first make a preflight request.
          "Content-Type": "application/json"
        }
      };
      return {
        ...defaultHeaders,
        ..._classPrivateFieldLooseBase5(this, _companionHeaders)[_companionHeaders]
      };
    }
    onReceiveResponse(res) {
      const {
        headers
      } = res;
      const state = this.uppy.getState();
      const companion = state.companion || {};
      const host = this.opts.companionUrl;
      if (headers.has("i-am") && headers.get("i-am") !== companion[host]) {
        this.uppy.setState({
          companion: {
            ...companion,
            [host]: headers.get("i-am")
          }
        });
      }
    }
    async request(_ref3) {
      let {
        path,
        method = "GET",
        data,
        skipPostResponse,
        signal
      } = _ref3;
      try {
        const headers = await this.headers(!data);
        const response = await fetchWithNetworkError(_classPrivateFieldLooseBase5(this, _getUrl)[_getUrl](path), {
          method,
          signal,
          headers,
          credentials: this.opts.companionCookiesRule || "same-origin",
          body: data ? JSON.stringify(data) : null
        });
        if (!skipPostResponse) this.onReceiveResponse(response);
        return await handleJSONResponse(response);
      } catch (err) {
        if (err.isAuthError || err.name === "UserFacingApiError" || err.name === "AbortError") throw err;
        throw new ErrorWithCause_default(`Could not ${method} ${_classPrivateFieldLooseBase5(this, _getUrl)[_getUrl](path)}`, {
          cause: err
        });
      }
    }
    async get(path, options) {
      return this.request({
        ...options,
        path
      });
    }
    async post(path, data, options) {
      return this.request({
        ...options,
        path,
        method: "POST",
        data
      });
    }
    async delete(path, data, options) {
      return this.request({
        ...options,
        path,
        method: "DELETE",
        data
      });
    }
    /**
     * Remote uploading consists of two steps:
     * 1. #requestSocketToken which starts the download/upload in companion and returns a unique token for the upload.
     * Then companion will halt the upload until:
     * 2. #awaitRemoteFileUpload is called, which will open/ensure a websocket connection towards companion, with the
     * previously generated token provided. It returns a promise that will resolve/reject once the file has finished
     * uploading or is otherwise done (failed, canceled)
     */
    async uploadRemoteFile(file, reqBody, options) {
      var _this = this;
      try {
        const {
          signal,
          getQueue
        } = options || {};
        return await pRetry(async () => {
          var _this$uppy$getFile;
          const existingServerToken = (_this$uppy$getFile = this.uppy.getFile(file.id)) == null ? void 0 : _this$uppy$getFile.serverToken;
          if (existingServerToken != null) {
            this.uppy.log(`Connecting to exiting websocket ${existingServerToken}`);
            return _classPrivateFieldLooseBase5(this, _awaitRemoteFileUpload)[_awaitRemoteFileUpload]({
              file,
              queue: getQueue(),
              signal
            });
          }
          const queueRequestSocketToken = getQueue().wrapPromiseFunction(async function() {
            try {
              return await _classPrivateFieldLooseBase5(_this, _requestSocketToken)[_requestSocketToken](...arguments);
            } catch (outerErr) {
              if (outerErr.isAuthError) throw new AbortError(outerErr);
              if (outerErr.cause == null) throw outerErr;
              const err = outerErr.cause;
              const isRetryableHttpError = () => [408, 409, 429, 418, 423].includes(err.statusCode) || err.statusCode >= 500 && err.statusCode <= 599 && ![501, 505].includes(err.statusCode);
              if (err.name === "HttpError" && !isRetryableHttpError()) throw new AbortError(err);
              throw err;
            }
          }, {
            priority: -1
          });
          const serverToken = await queueRequestSocketToken({
            file,
            postBody: reqBody,
            signal
          }).abortOn(signal);
          if (!this.uppy.getFile(file.id)) return void 0;
          this.uppy.setFileState(file.id, {
            serverToken
          });
          return _classPrivateFieldLooseBase5(this, _awaitRemoteFileUpload)[_awaitRemoteFileUpload]({
            file: this.uppy.getFile(file.id),
            // re-fetching file because it might have changed in the meantime
            queue: getQueue(),
            signal
          });
        }, {
          retries: retryCount,
          signal,
          onFailedAttempt: (err) => this.uppy.log(`Retrying upload due to: ${err.message}`, "warning")
        });
      } catch (err) {
        if (err.name === "AbortError") {
          return void 0;
        }
        this.uppy.emit("upload-error", file, err);
        throw err;
      }
    }
  };
  function _getUrl2(url) {
    if (/^(https?:|)\/\//.test(url)) {
      return url;
    }
    return `${this.hostname}/${url}`;
  }
  async function _awaitRemoteFileUpload2(_ref4) {
    let {
      file,
      queue,
      signal
    } = _ref4;
    let removeEventHandlers;
    const {
      capabilities
    } = this.uppy.getState();
    try {
      return await new Promise((resolve, reject) => {
        const token = file.serverToken;
        const host = getSocketHost(file.remote.companionUrl);
        let socket;
        let socketAbortController;
        let activityTimeout;
        let {
          isPaused
        } = file;
        const socketSend = (action, payload) => {
          if (socket == null || socket.readyState !== socket.OPEN) {
            var _socket;
            this.uppy.log(`Cannot send "${action}" to socket ${file.id} because the socket state was ${String((_socket = socket) == null ? void 0 : _socket.readyState)}`, "warning");
            return;
          }
          socket.send(JSON.stringify({
            action,
            payload: payload != null ? payload : {}
          }));
        };
        function sendState() {
          if (!capabilities.resumableUploads) return;
          if (isPaused) socketSend("pause");
          else socketSend("resume");
        }
        const createWebsocket = async () => {
          if (socketAbortController) socketAbortController.abort();
          socketAbortController = new AbortController();
          const onFatalError = (err) => {
            var _socketAbortControlle;
            this.uppy.setFileState(file.id, {
              serverToken: null
            });
            (_socketAbortControlle = socketAbortController) == null || _socketAbortControlle.abort == null || _socketAbortControlle.abort();
            reject(err);
          };
          function resetActivityTimeout() {
            clearTimeout(activityTimeout);
            if (isPaused) return;
            activityTimeout = setTimeout(() => onFatalError(new Error("Timeout waiting for message from Companion socket")), socketActivityTimeoutMs);
          }
          try {
            await queue.wrapPromiseFunction(async () => {
              const reconnectWebsocket = async () => (
                // eslint-disable-next-line promise/param-names
                new Promise((_2, rejectSocket) => {
                  socket = new WebSocket(`${host}/api/${token}`);
                  resetActivityTimeout();
                  socket.addEventListener("close", () => {
                    socket = void 0;
                    rejectSocket(new Error("Socket closed unexpectedly"));
                  });
                  socket.addEventListener("error", (error) => {
                    var _socket2;
                    this.uppy.log(`Companion socket error ${JSON.stringify(error)}, closing socket`, "warning");
                    (_socket2 = socket) == null || _socket2.close();
                  });
                  socket.addEventListener("open", () => {
                    sendState();
                  });
                  socket.addEventListener("message", (e2) => {
                    resetActivityTimeout();
                    try {
                      const {
                        action,
                        payload
                      } = JSON.parse(e2.data);
                      switch (action) {
                        case "progress": {
                          emitSocketProgress_default(this, payload, this.uppy.getFile(file.id));
                          break;
                        }
                        case "success": {
                          var _payload$response, _payload$response$sta, _payload$response2, _socketAbortControlle2;
                          const text = (_payload$response = payload.response) == null ? void 0 : _payload$response.responseText;
                          this.uppy.emit("upload-success", this.uppy.getFile(file.id), {
                            uploadURL: payload.url,
                            status: (_payload$response$sta = (_payload$response2 = payload.response) == null ? void 0 : _payload$response2.status) != null ? _payload$response$sta : 200,
                            body: text ? JSON.parse(text) : void 0
                          });
                          (_socketAbortControlle2 = socketAbortController) == null || _socketAbortControlle2.abort == null || _socketAbortControlle2.abort();
                          resolve();
                          break;
                        }
                        case "error": {
                          const {
                            message
                          } = payload.error;
                          throw Object.assign(new Error(message), {
                            cause: payload.error
                          });
                        }
                        default:
                          this.uppy.log(`Companion socket unknown action ${action}`, "warning");
                      }
                    } catch (err) {
                      onFatalError(err);
                    }
                  });
                  const closeSocket = () => {
                    this.uppy.log(`Closing socket ${file.id}`, "info");
                    clearTimeout(activityTimeout);
                    if (socket) socket.close();
                    socket = void 0;
                  };
                  socketAbortController.signal.addEventListener("abort", () => {
                    closeSocket();
                  });
                })
              );
              await pRetry(reconnectWebsocket, {
                retries: retryCount,
                signal: socketAbortController.signal,
                onFailedAttempt: () => {
                  if (socketAbortController.signal.aborted) return;
                  this.uppy.log(`Retrying websocket ${file.id}`, "info");
                }
              });
            })().abortOn(socketAbortController.signal);
          } catch (err) {
            if (socketAbortController.signal.aborted) return;
            onFatalError(err);
          }
        };
        const pause = (newPausedState) => {
          if (!capabilities.resumableUploads) return;
          isPaused = newPausedState;
          if (socket) sendState();
        };
        const onFileRemove = (targetFile) => {
          var _socketAbortControlle3;
          if (!capabilities.individualCancellation) return;
          if (targetFile.id !== file.id) return;
          socketSend("cancel");
          (_socketAbortControlle3 = socketAbortController) == null || _socketAbortControlle3.abort == null || _socketAbortControlle3.abort();
          this.uppy.log(`upload ${file.id} was removed`, "info");
          resolve();
        };
        const onCancelAll = () => {
          var _socketAbortControlle4;
          socketSend("cancel");
          (_socketAbortControlle4 = socketAbortController) == null || _socketAbortControlle4.abort == null || _socketAbortControlle4.abort();
          this.uppy.log(`upload ${file.id} was canceled`, "info");
          resolve();
        };
        const onFilePausedChange = (targetFile, newPausedState) => {
          if ((targetFile == null ? void 0 : targetFile.id) !== file.id) return;
          pause(newPausedState);
        };
        const onPauseAll = () => pause(true);
        const onResumeAll = () => pause(false);
        this.uppy.on("file-removed", onFileRemove);
        this.uppy.on("cancel-all", onCancelAll);
        this.uppy.on("upload-pause", onFilePausedChange);
        this.uppy.on("pause-all", onPauseAll);
        this.uppy.on("resume-all", onResumeAll);
        removeEventHandlers = () => {
          this.uppy.off("file-removed", onFileRemove);
          this.uppy.off("cancel-all", onCancelAll);
          this.uppy.off("upload-pause", onFilePausedChange);
          this.uppy.off("pause-all", onPauseAll);
          this.uppy.off("resume-all", onResumeAll);
        };
        signal.addEventListener("abort", () => {
          var _socketAbortControlle5;
          (_socketAbortControlle5 = socketAbortController) == null || _socketAbortControlle5.abort();
        });
        createWebsocket();
      });
    } finally {
      removeEventHandlers == null || removeEventHandlers();
    }
  }
  RequestClient.VERSION = packageJson3.version;

  // node_modules/@uppy/core/lib/EventManager.js
  function _classPrivateFieldLooseBase6(e2, t2) {
    if (!{}.hasOwnProperty.call(e2, t2)) throw new TypeError("attempted to use private field on non-instance");
    return e2;
  }
  var id6 = 0;
  function _classPrivateFieldLooseKey6(e2) {
    return "__private_" + id6++ + "_" + e2;
  }
  var _uppy = /* @__PURE__ */ _classPrivateFieldLooseKey6("uppy");
  var _events = /* @__PURE__ */ _classPrivateFieldLooseKey6("events");
  var EventManager = class {
    constructor(uppy) {
      Object.defineProperty(this, _uppy, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _events, {
        writable: true,
        value: []
      });
      _classPrivateFieldLooseBase6(this, _uppy)[_uppy] = uppy;
    }
    on(event, fn) {
      _classPrivateFieldLooseBase6(this, _events)[_events].push([event, fn]);
      return _classPrivateFieldLooseBase6(this, _uppy)[_uppy].on(event, fn);
    }
    remove() {
      for (const [event, fn] of _classPrivateFieldLooseBase6(this, _events)[_events].splice(0)) {
        _classPrivateFieldLooseBase6(this, _uppy)[_uppy].off(event, fn);
      }
    }
    onFilePause(fileID, cb) {
      this.on("upload-pause", (file, isPaused) => {
        if (fileID === (file == null ? void 0 : file.id)) {
          cb(isPaused);
        }
      });
    }
    onFileRemove(fileID, cb) {
      this.on("file-removed", (file) => {
        if (fileID === file.id) cb(file.id);
      });
    }
    onPause(fileID, cb) {
      this.on("upload-pause", (file, isPaused) => {
        if (fileID === (file == null ? void 0 : file.id)) {
          cb(isPaused);
        }
      });
    }
    onRetry(fileID, cb) {
      this.on("upload-retry", (file) => {
        if (fileID === (file == null ? void 0 : file.id)) {
          cb();
        }
      });
    }
    onRetryAll(fileID, cb) {
      this.on("retry-all", () => {
        if (!_classPrivateFieldLooseBase6(this, _uppy)[_uppy].getFile(fileID)) return;
        cb();
      });
    }
    onPauseAll(fileID, cb) {
      this.on("pause-all", () => {
        if (!_classPrivateFieldLooseBase6(this, _uppy)[_uppy].getFile(fileID)) return;
        cb();
      });
    }
    onCancelAll(fileID, eventHandler) {
      var _this = this;
      this.on("cancel-all", function() {
        if (!_classPrivateFieldLooseBase6(_this, _uppy)[_uppy].getFile(fileID)) return;
        eventHandler(...arguments);
      });
    }
    onResumeAll(fileID, cb) {
      this.on("resume-all", () => {
        if (!_classPrivateFieldLooseBase6(this, _uppy)[_uppy].getFile(fileID)) return;
        cb();
      });
    }
  };

  // node_modules/@uppy/utils/lib/RateLimitedQueue.js
  function _classPrivateFieldLooseBase7(e2, t2) {
    if (!{}.hasOwnProperty.call(e2, t2)) throw new TypeError("attempted to use private field on non-instance");
    return e2;
  }
  var id7 = 0;
  function _classPrivateFieldLooseKey7(e2) {
    return "__private_" + id7++ + "_" + e2;
  }
  function createCancelError(cause) {
    return new Error("Cancelled", {
      cause
    });
  }
  function abortOn(signal) {
    if (signal != null) {
      var _this$then;
      const abortPromise = () => this.abort(signal.reason);
      signal.addEventListener("abort", abortPromise, {
        once: true
      });
      const removeAbortListener = () => {
        signal.removeEventListener("abort", abortPromise);
      };
      (_this$then = this.then) == null || _this$then.call(this, removeAbortListener, removeAbortListener);
    }
    return this;
  }
  var _activeRequests = /* @__PURE__ */ _classPrivateFieldLooseKey7("activeRequests");
  var _queuedHandlers = /* @__PURE__ */ _classPrivateFieldLooseKey7("queuedHandlers");
  var _paused = /* @__PURE__ */ _classPrivateFieldLooseKey7("paused");
  var _pauseTimer = /* @__PURE__ */ _classPrivateFieldLooseKey7("pauseTimer");
  var _downLimit = /* @__PURE__ */ _classPrivateFieldLooseKey7("downLimit");
  var _upperLimit = /* @__PURE__ */ _classPrivateFieldLooseKey7("upperLimit");
  var _rateLimitingTimer = /* @__PURE__ */ _classPrivateFieldLooseKey7("rateLimitingTimer");
  var _call = /* @__PURE__ */ _classPrivateFieldLooseKey7("call");
  var _queueNext = /* @__PURE__ */ _classPrivateFieldLooseKey7("queueNext");
  var _next = /* @__PURE__ */ _classPrivateFieldLooseKey7("next");
  var _queue = /* @__PURE__ */ _classPrivateFieldLooseKey7("queue");
  var _dequeue = /* @__PURE__ */ _classPrivateFieldLooseKey7("dequeue");
  var _resume = /* @__PURE__ */ _classPrivateFieldLooseKey7("resume");
  var _increaseLimit = /* @__PURE__ */ _classPrivateFieldLooseKey7("increaseLimit");
  var RateLimitedQueue = class {
    constructor(limit) {
      Object.defineProperty(this, _dequeue, {
        value: _dequeue2
      });
      Object.defineProperty(this, _queue, {
        value: _queue2
      });
      Object.defineProperty(this, _next, {
        value: _next2
      });
      Object.defineProperty(this, _queueNext, {
        value: _queueNext2
      });
      Object.defineProperty(this, _call, {
        value: _call2
      });
      Object.defineProperty(this, _activeRequests, {
        writable: true,
        value: 0
      });
      Object.defineProperty(this, _queuedHandlers, {
        writable: true,
        value: []
      });
      Object.defineProperty(this, _paused, {
        writable: true,
        value: false
      });
      Object.defineProperty(this, _pauseTimer, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _downLimit, {
        writable: true,
        value: 1
      });
      Object.defineProperty(this, _upperLimit, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _rateLimitingTimer, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _resume, {
        writable: true,
        value: () => this.resume()
      });
      Object.defineProperty(this, _increaseLimit, {
        writable: true,
        value: () => {
          if (_classPrivateFieldLooseBase7(this, _paused)[_paused]) {
            _classPrivateFieldLooseBase7(this, _rateLimitingTimer)[_rateLimitingTimer] = setTimeout(_classPrivateFieldLooseBase7(this, _increaseLimit)[_increaseLimit], 0);
            return;
          }
          _classPrivateFieldLooseBase7(this, _downLimit)[_downLimit] = this.limit;
          this.limit = Math.ceil((_classPrivateFieldLooseBase7(this, _upperLimit)[_upperLimit] + _classPrivateFieldLooseBase7(this, _downLimit)[_downLimit]) / 2);
          for (let i2 = _classPrivateFieldLooseBase7(this, _downLimit)[_downLimit]; i2 <= this.limit; i2++) {
            _classPrivateFieldLooseBase7(this, _queueNext)[_queueNext]();
          }
          if (_classPrivateFieldLooseBase7(this, _upperLimit)[_upperLimit] - _classPrivateFieldLooseBase7(this, _downLimit)[_downLimit] > 3) {
            _classPrivateFieldLooseBase7(this, _rateLimitingTimer)[_rateLimitingTimer] = setTimeout(_classPrivateFieldLooseBase7(this, _increaseLimit)[_increaseLimit], 2e3);
          } else {
            _classPrivateFieldLooseBase7(this, _downLimit)[_downLimit] = Math.floor(_classPrivateFieldLooseBase7(this, _downLimit)[_downLimit] / 2);
          }
        }
      });
      if (typeof limit !== "number" || limit === 0) {
        this.limit = Infinity;
      } else {
        this.limit = limit;
      }
    }
    run(fn, queueOptions) {
      if (!_classPrivateFieldLooseBase7(this, _paused)[_paused] && _classPrivateFieldLooseBase7(this, _activeRequests)[_activeRequests] < this.limit) {
        return _classPrivateFieldLooseBase7(this, _call)[_call](fn);
      }
      return _classPrivateFieldLooseBase7(this, _queue)[_queue](fn, queueOptions);
    }
    wrapSyncFunction(fn, queueOptions) {
      var _this = this;
      return function() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        const queuedRequest = _this.run(() => {
          fn(...args);
          queueMicrotask(() => queuedRequest.done());
          return () => {
          };
        }, queueOptions);
        return {
          abortOn,
          abort() {
            queuedRequest.abort();
          }
        };
      };
    }
    wrapPromiseFunction(fn, queueOptions) {
      var _this2 = this;
      return function() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        let queuedRequest;
        const outerPromise = new Promise((resolve, reject) => {
          queuedRequest = _this2.run(() => {
            let cancelError;
            let innerPromise;
            try {
              innerPromise = Promise.resolve(fn(...args));
            } catch (err) {
              innerPromise = Promise.reject(err);
            }
            innerPromise.then((result) => {
              if (cancelError) {
                reject(cancelError);
              } else {
                queuedRequest.done();
                resolve(result);
              }
            }, (err) => {
              if (cancelError) {
                reject(cancelError);
              } else {
                queuedRequest.done();
                reject(err);
              }
            });
            return (cause) => {
              cancelError = createCancelError(cause);
            };
          }, queueOptions);
        });
        outerPromise.abort = (cause) => {
          queuedRequest.abort(cause);
        };
        outerPromise.abortOn = abortOn;
        return outerPromise;
      };
    }
    resume() {
      _classPrivateFieldLooseBase7(this, _paused)[_paused] = false;
      clearTimeout(_classPrivateFieldLooseBase7(this, _pauseTimer)[_pauseTimer]);
      for (let i2 = 0; i2 < this.limit; i2++) {
        _classPrivateFieldLooseBase7(this, _queueNext)[_queueNext]();
      }
    }
    /**
     * Freezes the queue for a while or indefinitely.
     *
     * @param {number | null } [duration] Duration for the pause to happen, in milliseconds.
     *                                    If omitted, the queue won't resume automatically.
     */
    pause(duration) {
      if (duration === void 0) {
        duration = null;
      }
      _classPrivateFieldLooseBase7(this, _paused)[_paused] = true;
      clearTimeout(_classPrivateFieldLooseBase7(this, _pauseTimer)[_pauseTimer]);
      if (duration != null) {
        _classPrivateFieldLooseBase7(this, _pauseTimer)[_pauseTimer] = setTimeout(_classPrivateFieldLooseBase7(this, _resume)[_resume], duration);
      }
    }
    /**
     * Pauses the queue for a duration, and lower the limit of concurrent requests
     * when the queue resumes. When the queue resumes, it tries to progressively
     * increase the limit in `this.#increaseLimit` until another call is made to
     * `this.rateLimit`.
     * Call this function when using the RateLimitedQueue for network requests and
     * the remote server responds with 429 HTTP code.
     *
     * @param {number} duration in milliseconds.
     */
    rateLimit(duration) {
      clearTimeout(_classPrivateFieldLooseBase7(this, _rateLimitingTimer)[_rateLimitingTimer]);
      this.pause(duration);
      if (this.limit > 1 && Number.isFinite(this.limit)) {
        _classPrivateFieldLooseBase7(this, _upperLimit)[_upperLimit] = this.limit - 1;
        this.limit = _classPrivateFieldLooseBase7(this, _downLimit)[_downLimit];
        _classPrivateFieldLooseBase7(this, _rateLimitingTimer)[_rateLimitingTimer] = setTimeout(_classPrivateFieldLooseBase7(this, _increaseLimit)[_increaseLimit], duration);
      }
    }
    get isPaused() {
      return _classPrivateFieldLooseBase7(this, _paused)[_paused];
    }
  };
  function _call2(fn) {
    _classPrivateFieldLooseBase7(this, _activeRequests)[_activeRequests] += 1;
    let done = false;
    let cancelActive;
    try {
      cancelActive = fn();
    } catch (err) {
      _classPrivateFieldLooseBase7(this, _activeRequests)[_activeRequests] -= 1;
      throw err;
    }
    return {
      abort: (cause) => {
        if (done) return;
        done = true;
        _classPrivateFieldLooseBase7(this, _activeRequests)[_activeRequests] -= 1;
        cancelActive == null || cancelActive(cause);
        _classPrivateFieldLooseBase7(this, _queueNext)[_queueNext]();
      },
      done: () => {
        if (done) return;
        done = true;
        _classPrivateFieldLooseBase7(this, _activeRequests)[_activeRequests] -= 1;
        _classPrivateFieldLooseBase7(this, _queueNext)[_queueNext]();
      }
    };
  }
  function _queueNext2() {
    queueMicrotask(() => _classPrivateFieldLooseBase7(this, _next)[_next]());
  }
  function _next2() {
    if (_classPrivateFieldLooseBase7(this, _paused)[_paused] || _classPrivateFieldLooseBase7(this, _activeRequests)[_activeRequests] >= this.limit) {
      return;
    }
    if (_classPrivateFieldLooseBase7(this, _queuedHandlers)[_queuedHandlers].length === 0) {
      return;
    }
    const next = _classPrivateFieldLooseBase7(this, _queuedHandlers)[_queuedHandlers].shift();
    if (next == null) {
      throw new Error("Invariant violation: next is null");
    }
    const handler = _classPrivateFieldLooseBase7(this, _call)[_call](next.fn);
    next.abort = handler.abort;
    next.done = handler.done;
  }
  function _queue2(fn, options) {
    const handler = {
      fn,
      priority: (options == null ? void 0 : options.priority) || 0,
      abort: () => {
        _classPrivateFieldLooseBase7(this, _dequeue)[_dequeue](handler);
      },
      done: () => {
        throw new Error("Cannot mark a queued request as done: this indicates a bug");
      }
    };
    const index = _classPrivateFieldLooseBase7(this, _queuedHandlers)[_queuedHandlers].findIndex((other) => {
      return handler.priority > other.priority;
    });
    if (index === -1) {
      _classPrivateFieldLooseBase7(this, _queuedHandlers)[_queuedHandlers].push(handler);
    } else {
      _classPrivateFieldLooseBase7(this, _queuedHandlers)[_queuedHandlers].splice(index, 0, handler);
    }
    return handler;
  }
  function _dequeue2(handler) {
    const index = _classPrivateFieldLooseBase7(this, _queuedHandlers)[_queuedHandlers].indexOf(handler);
    if (index !== -1) {
      _classPrivateFieldLooseBase7(this, _queuedHandlers)[_queuedHandlers].splice(index, 1);
    }
  }
  var internalRateLimitedQueue = Symbol("__queue");

  // node_modules/@uppy/utils/lib/fileFilters.js
  function filterNonFailedFiles(files) {
    const hasError = (file) => "error" in file && !!file.error;
    return files.filter((file) => !hasError(file));
  }
  function filterFilesToEmitUploadStarted(files) {
    return files.filter((file) => {
      var _file$progress;
      return !((_file$progress = file.progress) != null && _file$progress.uploadStarted) || !file.isRestored;
    });
  }

  // node_modules/@uppy/utils/lib/AbortController.js
  var {
    AbortController: AbortController2
  } = globalThis;
  var {
    AbortSignal
  } = globalThis;
  var createAbortError = function(message, options) {
    if (message === void 0) {
      message = "Aborted";
    }
    const err = new DOMException(message, "AbortError");
    if (options != null && has(options, "cause")) {
      Object.defineProperty(err, "cause", {
        // @ts-expect-error TS is drunk
        __proto__: null,
        configurable: true,
        writable: true,
        value: options.cause
      });
    }
    return err;
  };

  // node_modules/@uppy/utils/lib/getAllowedMetaFields.js
  function getAllowedMetaFields(fields, meta) {
    if (fields === true) {
      return Object.keys(meta);
    }
    if (Array.isArray(fields)) {
      return fields;
    }
    return [];
  }

  // node_modules/@uppy/aws-s3/lib/MultipartUploader.js
  function _classPrivateFieldLooseBase8(e2, t2) {
    if (!{}.hasOwnProperty.call(e2, t2)) throw new TypeError("attempted to use private field on non-instance");
    return e2;
  }
  var id8 = 0;
  function _classPrivateFieldLooseKey8(e2) {
    return "__private_" + id8++ + "_" + e2;
  }
  var MB = 1024 * 1024;
  var defaultOptions2 = {
    getChunkSize(file) {
      return Math.ceil(file.size / 1e4);
    },
    onProgress() {
    },
    onPartComplete() {
    },
    onSuccess() {
    },
    onError(err) {
      throw err;
    }
  };
  function ensureInt(value) {
    if (typeof value === "string") {
      return parseInt(value, 10);
    }
    if (typeof value === "number") {
      return value;
    }
    throw new TypeError("Expected a number");
  }
  var pausingUploadReason = Symbol("pausing upload, not an actual error");
  var _abortController = /* @__PURE__ */ _classPrivateFieldLooseKey8("abortController");
  var _chunks = /* @__PURE__ */ _classPrivateFieldLooseKey8("chunks");
  var _chunkState = /* @__PURE__ */ _classPrivateFieldLooseKey8("chunkState");
  var _data = /* @__PURE__ */ _classPrivateFieldLooseKey8("data");
  var _file = /* @__PURE__ */ _classPrivateFieldLooseKey8("file");
  var _uploadHasStarted = /* @__PURE__ */ _classPrivateFieldLooseKey8("uploadHasStarted");
  var _onError = /* @__PURE__ */ _classPrivateFieldLooseKey8("onError");
  var _onSuccess = /* @__PURE__ */ _classPrivateFieldLooseKey8("onSuccess");
  var _shouldUseMultipart = /* @__PURE__ */ _classPrivateFieldLooseKey8("shouldUseMultipart");
  var _isRestoring = /* @__PURE__ */ _classPrivateFieldLooseKey8("isRestoring");
  var _onReject = /* @__PURE__ */ _classPrivateFieldLooseKey8("onReject");
  var _maxMultipartParts = /* @__PURE__ */ _classPrivateFieldLooseKey8("maxMultipartParts");
  var _minPartSize = /* @__PURE__ */ _classPrivateFieldLooseKey8("minPartSize");
  var _initChunks = /* @__PURE__ */ _classPrivateFieldLooseKey8("initChunks");
  var _createUpload3 = /* @__PURE__ */ _classPrivateFieldLooseKey8("createUpload");
  var _resumeUpload = /* @__PURE__ */ _classPrivateFieldLooseKey8("resumeUpload");
  var _onPartProgress = /* @__PURE__ */ _classPrivateFieldLooseKey8("onPartProgress");
  var _onPartComplete = /* @__PURE__ */ _classPrivateFieldLooseKey8("onPartComplete");
  var _abortUpload = /* @__PURE__ */ _classPrivateFieldLooseKey8("abortUpload");
  var MultipartUploader = class {
    constructor(data, options) {
      var _this$options, _this$options$getChun;
      Object.defineProperty(this, _abortUpload, {
        value: _abortUpload2
      });
      Object.defineProperty(this, _resumeUpload, {
        value: _resumeUpload2
      });
      Object.defineProperty(this, _createUpload3, {
        value: _createUpload22
      });
      Object.defineProperty(this, _initChunks, {
        value: _initChunks2
      });
      Object.defineProperty(this, _abortController, {
        writable: true,
        value: new AbortController2()
      });
      Object.defineProperty(this, _chunks, {
        writable: true,
        value: []
      });
      Object.defineProperty(this, _chunkState, {
        writable: true,
        value: []
      });
      Object.defineProperty(this, _data, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _file, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _uploadHasStarted, {
        writable: true,
        value: false
      });
      Object.defineProperty(this, _onError, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _onSuccess, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _shouldUseMultipart, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _isRestoring, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _onReject, {
        writable: true,
        value: (err) => (err == null ? void 0 : err.cause) === pausingUploadReason ? null : _classPrivateFieldLooseBase8(this, _onError)[_onError](err)
      });
      Object.defineProperty(this, _maxMultipartParts, {
        writable: true,
        value: 1e4
      });
      Object.defineProperty(this, _minPartSize, {
        writable: true,
        value: 5 * MB
      });
      Object.defineProperty(this, _onPartProgress, {
        writable: true,
        value: (index) => (ev) => {
          if (!ev.lengthComputable) return;
          _classPrivateFieldLooseBase8(this, _chunkState)[_chunkState][index].uploaded = ensureInt(ev.loaded);
          const totalUploaded = _classPrivateFieldLooseBase8(this, _chunkState)[_chunkState].reduce((n2, c2) => n2 + c2.uploaded, 0);
          this.options.onProgress(totalUploaded, _classPrivateFieldLooseBase8(this, _data)[_data].size);
        }
      });
      Object.defineProperty(this, _onPartComplete, {
        writable: true,
        value: (index) => (etag) => {
          _classPrivateFieldLooseBase8(this, _chunks)[_chunks][index] = null;
          _classPrivateFieldLooseBase8(this, _chunkState)[_chunkState][index].etag = etag;
          _classPrivateFieldLooseBase8(this, _chunkState)[_chunkState][index].done = true;
          const part = {
            PartNumber: index + 1,
            ETag: etag
          };
          this.options.onPartComplete(part);
        }
      });
      this.options = {
        ...defaultOptions2,
        ...options
      };
      (_this$options$getChun = (_this$options = this.options).getChunkSize) != null ? _this$options$getChun : _this$options.getChunkSize = defaultOptions2.getChunkSize;
      _classPrivateFieldLooseBase8(this, _data)[_data] = data;
      _classPrivateFieldLooseBase8(this, _file)[_file] = options.file;
      _classPrivateFieldLooseBase8(this, _onSuccess)[_onSuccess] = this.options.onSuccess;
      _classPrivateFieldLooseBase8(this, _onError)[_onError] = this.options.onError;
      _classPrivateFieldLooseBase8(this, _shouldUseMultipart)[_shouldUseMultipart] = this.options.shouldUseMultipart;
      _classPrivateFieldLooseBase8(this, _isRestoring)[_isRestoring] = options.uploadId && options.key;
      _classPrivateFieldLooseBase8(this, _initChunks)[_initChunks]();
    }
    start() {
      if (_classPrivateFieldLooseBase8(this, _uploadHasStarted)[_uploadHasStarted]) {
        if (!_classPrivateFieldLooseBase8(this, _abortController)[_abortController].signal.aborted) _classPrivateFieldLooseBase8(this, _abortController)[_abortController].abort(pausingUploadReason);
        _classPrivateFieldLooseBase8(this, _abortController)[_abortController] = new AbortController2();
        _classPrivateFieldLooseBase8(this, _resumeUpload)[_resumeUpload]();
      } else if (_classPrivateFieldLooseBase8(this, _isRestoring)[_isRestoring]) {
        this.options.companionComm.restoreUploadFile(_classPrivateFieldLooseBase8(this, _file)[_file], {
          uploadId: this.options.uploadId,
          key: this.options.key
        });
        _classPrivateFieldLooseBase8(this, _resumeUpload)[_resumeUpload]();
      } else {
        _classPrivateFieldLooseBase8(this, _createUpload3)[_createUpload3]();
      }
    }
    pause() {
      _classPrivateFieldLooseBase8(this, _abortController)[_abortController].abort(pausingUploadReason);
      _classPrivateFieldLooseBase8(this, _abortController)[_abortController] = new AbortController2();
    }
    abort(opts) {
      if (opts != null && opts.really) _classPrivateFieldLooseBase8(this, _abortUpload)[_abortUpload]();
      else this.pause();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    [Symbol.for("uppy test: getChunkState")]() {
      return _classPrivateFieldLooseBase8(this, _chunkState)[_chunkState];
    }
  };
  function _initChunks2() {
    const fileSize = _classPrivateFieldLooseBase8(this, _data)[_data].size;
    const shouldUseMultipart = typeof _classPrivateFieldLooseBase8(this, _shouldUseMultipart)[_shouldUseMultipart] === "function" ? _classPrivateFieldLooseBase8(this, _shouldUseMultipart)[_shouldUseMultipart](_classPrivateFieldLooseBase8(this, _file)[_file]) : Boolean(_classPrivateFieldLooseBase8(this, _shouldUseMultipart)[_shouldUseMultipart]);
    if (shouldUseMultipart && fileSize > _classPrivateFieldLooseBase8(this, _minPartSize)[_minPartSize]) {
      let chunkSize = Math.max(
        this.options.getChunkSize(_classPrivateFieldLooseBase8(this, _data)[_data]),
        // Math.max can take undefined but TS does not think so
        _classPrivateFieldLooseBase8(this, _minPartSize)[_minPartSize]
      );
      let arraySize = Math.floor(fileSize / chunkSize);
      if (arraySize > _classPrivateFieldLooseBase8(this, _maxMultipartParts)[_maxMultipartParts]) {
        arraySize = _classPrivateFieldLooseBase8(this, _maxMultipartParts)[_maxMultipartParts];
        chunkSize = fileSize / _classPrivateFieldLooseBase8(this, _maxMultipartParts)[_maxMultipartParts];
      }
      _classPrivateFieldLooseBase8(this, _chunks)[_chunks] = Array(arraySize);
      for (let offset = 0, j2 = 0; offset < fileSize; offset += chunkSize, j2++) {
        const end = Math.min(fileSize, offset + chunkSize);
        const getData = () => {
          const i2 = offset;
          return _classPrivateFieldLooseBase8(this, _data)[_data].slice(i2, end);
        };
        _classPrivateFieldLooseBase8(this, _chunks)[_chunks][j2] = {
          getData,
          onProgress: _classPrivateFieldLooseBase8(this, _onPartProgress)[_onPartProgress](j2),
          onComplete: _classPrivateFieldLooseBase8(this, _onPartComplete)[_onPartComplete](j2),
          shouldUseMultipart
        };
        if (_classPrivateFieldLooseBase8(this, _isRestoring)[_isRestoring]) {
          const size = offset + chunkSize > fileSize ? fileSize - offset : chunkSize;
          _classPrivateFieldLooseBase8(this, _chunks)[_chunks][j2].setAsUploaded = () => {
            _classPrivateFieldLooseBase8(this, _chunks)[_chunks][j2] = null;
            _classPrivateFieldLooseBase8(this, _chunkState)[_chunkState][j2].uploaded = size;
          };
        }
      }
    } else {
      _classPrivateFieldLooseBase8(this, _chunks)[_chunks] = [{
        getData: () => _classPrivateFieldLooseBase8(this, _data)[_data],
        onProgress: _classPrivateFieldLooseBase8(this, _onPartProgress)[_onPartProgress](0),
        onComplete: _classPrivateFieldLooseBase8(this, _onPartComplete)[_onPartComplete](0),
        shouldUseMultipart
      }];
    }
    _classPrivateFieldLooseBase8(this, _chunkState)[_chunkState] = _classPrivateFieldLooseBase8(this, _chunks)[_chunks].map(() => ({
      uploaded: 0
    }));
  }
  function _createUpload22() {
    this.options.companionComm.uploadFile(_classPrivateFieldLooseBase8(this, _file)[_file], _classPrivateFieldLooseBase8(this, _chunks)[_chunks], _classPrivateFieldLooseBase8(this, _abortController)[_abortController].signal).then(_classPrivateFieldLooseBase8(this, _onSuccess)[_onSuccess], _classPrivateFieldLooseBase8(this, _onReject)[_onReject]);
    _classPrivateFieldLooseBase8(this, _uploadHasStarted)[_uploadHasStarted] = true;
  }
  function _resumeUpload2() {
    this.options.companionComm.resumeUploadFile(_classPrivateFieldLooseBase8(this, _file)[_file], _classPrivateFieldLooseBase8(this, _chunks)[_chunks], _classPrivateFieldLooseBase8(this, _abortController)[_abortController].signal).then(_classPrivateFieldLooseBase8(this, _onSuccess)[_onSuccess], _classPrivateFieldLooseBase8(this, _onReject)[_onReject]);
  }
  function _abortUpload2() {
    _classPrivateFieldLooseBase8(this, _abortController)[_abortController].abort();
    this.options.companionComm.abortFileUpload(_classPrivateFieldLooseBase8(this, _file)[_file]).catch((err) => this.options.log(err));
  }
  var MultipartUploader_default = MultipartUploader;

  // node_modules/@uppy/aws-s3/lib/utils.js
  function throwIfAborted(signal) {
    if (signal != null && signal.aborted) {
      throw createAbortError("The operation was aborted", {
        cause: signal.reason
      });
    }
  }

  // node_modules/@uppy/aws-s3/lib/createSignedURL.js
  function createCanonicalRequest(_ref) {
    let {
      method = "PUT",
      CanonicalUri = "/",
      CanonicalQueryString = "",
      SignedHeaders,
      HashedPayload
    } = _ref;
    const headerKeys = Object.keys(SignedHeaders).map((k2) => k2.toLowerCase()).sort();
    return [method, CanonicalUri, CanonicalQueryString, ...headerKeys.map((k2) => `${k2}:${SignedHeaders[k2]}`), "", headerKeys.join(";"), HashedPayload].join("\n");
  }
  var ec = new TextEncoder();
  var algorithm = {
    name: "HMAC",
    hash: "SHA-256"
  };
  async function digest(data) {
    const {
      subtle
    } = globalThis.crypto;
    return subtle.digest(algorithm.hash, ec.encode(data));
  }
  async function generateHmacKey(secret) {
    const {
      subtle
    } = globalThis.crypto;
    return subtle.importKey("raw", typeof secret === "string" ? ec.encode(secret) : secret, algorithm, false, ["sign"]);
  }
  function arrayBufferToHexString(arrayBuffer) {
    const byteArray = new Uint8Array(arrayBuffer);
    let hexString = "";
    for (let i2 = 0; i2 < byteArray.length; i2++) {
      hexString += byteArray[i2].toString(16).padStart(2, "0");
    }
    return hexString;
  }
  async function hash(key, data) {
    const {
      subtle
    } = globalThis.crypto;
    return subtle.sign(algorithm, await generateHmacKey(key), ec.encode(data));
  }
  async function createSignedURL(_ref2) {
    let {
      accountKey,
      accountSecret,
      sessionToken,
      bucketName,
      Key,
      Region,
      expires,
      uploadId,
      partNumber
    } = _ref2;
    const Service = "s3";
    const host = `${Service}.${Region}.amazonaws.com`;
    const CanonicalUri = `/${bucketName}/${encodeURI(Key).replace(/[;?:@&=+$,#!'()*]/g, (c2) => `%${c2.charCodeAt(0).toString(16).toUpperCase()}`)}`;
    const payload = "UNSIGNED-PAYLOAD";
    const requestDateTime = (/* @__PURE__ */ new Date()).toISOString().replace(/[-:]|\.\d+/g, "");
    const date = requestDateTime.slice(0, 8);
    const scope = `${date}/${Region}/${Service}/aws4_request`;
    const url = new URL(`https://${host}${CanonicalUri}`);
    url.searchParams.set("X-Amz-Algorithm", "AWS4-HMAC-SHA256");
    url.searchParams.set("X-Amz-Content-Sha256", payload);
    url.searchParams.set("X-Amz-Credential", `${accountKey}/${scope}`);
    url.searchParams.set("X-Amz-Date", requestDateTime);
    url.searchParams.set("X-Amz-Expires", expires);
    url.searchParams.set("X-Amz-Security-Token", sessionToken);
    url.searchParams.set("X-Amz-SignedHeaders", "host");
    if (partNumber) url.searchParams.set("partNumber", partNumber);
    if (uploadId) url.searchParams.set("uploadId", uploadId);
    url.searchParams.set("x-id", partNumber && uploadId ? "UploadPart" : "PutObject");
    const canonical = createCanonicalRequest({
      CanonicalUri,
      CanonicalQueryString: url.search.slice(1),
      SignedHeaders: {
        host
      },
      HashedPayload: payload
    });
    const hashedCanonical = arrayBufferToHexString(await digest(canonical));
    const stringToSign = [
      `AWS4-HMAC-SHA256`,
      // The algorithm used to create the hash of the canonical request.
      requestDateTime,
      // The date and time used in the credential scope.
      scope,
      // The credential scope. This restricts the resulting signature to the specified Region and service.
      hashedCanonical
      // The hash of the canonical request.
    ].join("\n");
    const kDate = await hash(`AWS4${accountSecret}`, date);
    const kRegion = await hash(kDate, Region);
    const kService = await hash(kRegion, Service);
    const kSigning = await hash(kService, "aws4_request");
    const signature = arrayBufferToHexString(await hash(kSigning, stringToSign));
    url.searchParams.set("X-Amz-Signature", signature);
    return url;
  }

  // node_modules/@uppy/aws-s3/lib/HTTPCommunicationQueue.js
  function _classPrivateFieldLooseBase9(e2, t2) {
    if (!{}.hasOwnProperty.call(e2, t2)) throw new TypeError("attempted to use private field on non-instance");
    return e2;
  }
  var id9 = 0;
  function _classPrivateFieldLooseKey9(e2) {
    return "__private_" + id9++ + "_" + e2;
  }
  function removeMetadataFromURL(urlString) {
    const urlObject = new URL(urlString);
    urlObject.search = "";
    urlObject.hash = "";
    return urlObject.href;
  }
  var _abortMultipartUpload = /* @__PURE__ */ _classPrivateFieldLooseKey9("abortMultipartUpload");
  var _cache = /* @__PURE__ */ _classPrivateFieldLooseKey9("cache");
  var _createMultipartUpload = /* @__PURE__ */ _classPrivateFieldLooseKey9("createMultipartUpload");
  var _fetchSignature = /* @__PURE__ */ _classPrivateFieldLooseKey9("fetchSignature");
  var _getUploadParameters = /* @__PURE__ */ _classPrivateFieldLooseKey9("getUploadParameters");
  var _listParts = /* @__PURE__ */ _classPrivateFieldLooseKey9("listParts");
  var _previousRetryDelay = /* @__PURE__ */ _classPrivateFieldLooseKey9("previousRetryDelay");
  var _requests = /* @__PURE__ */ _classPrivateFieldLooseKey9("requests");
  var _retryDelays = /* @__PURE__ */ _classPrivateFieldLooseKey9("retryDelays");
  var _sendCompletionRequest = /* @__PURE__ */ _classPrivateFieldLooseKey9("sendCompletionRequest");
  var _setS3MultipartState = /* @__PURE__ */ _classPrivateFieldLooseKey9("setS3MultipartState");
  var _uploadPartBytes = /* @__PURE__ */ _classPrivateFieldLooseKey9("uploadPartBytes");
  var _getFile = /* @__PURE__ */ _classPrivateFieldLooseKey9("getFile");
  var _shouldRetry = /* @__PURE__ */ _classPrivateFieldLooseKey9("shouldRetry");
  var _nonMultipartUpload = /* @__PURE__ */ _classPrivateFieldLooseKey9("nonMultipartUpload");
  var HTTPCommunicationQueue = class {
    constructor(_requests2, options, setS3MultipartState, getFile) {
      Object.defineProperty(this, _nonMultipartUpload, {
        value: _nonMultipartUpload2
      });
      Object.defineProperty(this, _shouldRetry, {
        value: _shouldRetry2
      });
      Object.defineProperty(this, _abortMultipartUpload, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _cache, {
        writable: true,
        value: /* @__PURE__ */ new WeakMap()
      });
      Object.defineProperty(this, _createMultipartUpload, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _fetchSignature, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _getUploadParameters, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _listParts, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _previousRetryDelay, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _requests, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _retryDelays, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _sendCompletionRequest, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _setS3MultipartState, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _uploadPartBytes, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _getFile, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldLooseBase9(this, _requests)[_requests] = _requests2;
      _classPrivateFieldLooseBase9(this, _setS3MultipartState)[_setS3MultipartState] = setS3MultipartState;
      _classPrivateFieldLooseBase9(this, _getFile)[_getFile] = getFile;
      this.setOptions(options);
    }
    setOptions(options) {
      const requests = _classPrivateFieldLooseBase9(this, _requests)[_requests];
      if ("abortMultipartUpload" in options) {
        _classPrivateFieldLooseBase9(this, _abortMultipartUpload)[_abortMultipartUpload] = requests.wrapPromiseFunction(options.abortMultipartUpload, {
          priority: 1
        });
      }
      if ("createMultipartUpload" in options) {
        _classPrivateFieldLooseBase9(this, _createMultipartUpload)[_createMultipartUpload] = requests.wrapPromiseFunction(options.createMultipartUpload, {
          priority: -1
        });
      }
      if ("signPart" in options) {
        _classPrivateFieldLooseBase9(this, _fetchSignature)[_fetchSignature] = requests.wrapPromiseFunction(options.signPart);
      }
      if ("listParts" in options) {
        _classPrivateFieldLooseBase9(this, _listParts)[_listParts] = requests.wrapPromiseFunction(options.listParts);
      }
      if ("completeMultipartUpload" in options) {
        _classPrivateFieldLooseBase9(this, _sendCompletionRequest)[_sendCompletionRequest] = requests.wrapPromiseFunction(options.completeMultipartUpload, {
          priority: 1
        });
      }
      if ("retryDelays" in options) {
        var _options$retryDelays;
        _classPrivateFieldLooseBase9(this, _retryDelays)[_retryDelays] = (_options$retryDelays = options.retryDelays) != null ? _options$retryDelays : [];
      }
      if ("uploadPartBytes" in options) {
        _classPrivateFieldLooseBase9(this, _uploadPartBytes)[_uploadPartBytes] = requests.wrapPromiseFunction(options.uploadPartBytes, {
          priority: Infinity
        });
      }
      if ("getUploadParameters" in options) {
        _classPrivateFieldLooseBase9(this, _getUploadParameters)[_getUploadParameters] = requests.wrapPromiseFunction(options.getUploadParameters);
      }
    }
    async getUploadId(file, signal) {
      let cachedResult;
      while ((cachedResult = _classPrivateFieldLooseBase9(this, _cache)[_cache].get(file.data)) != null) {
        try {
          return await cachedResult;
        } catch {
        }
      }
      const promise = _classPrivateFieldLooseBase9(this, _createMultipartUpload)[_createMultipartUpload](_classPrivateFieldLooseBase9(this, _getFile)[_getFile](file), signal);
      const abortPromise = () => {
        promise.abort(signal.reason);
        _classPrivateFieldLooseBase9(this, _cache)[_cache].delete(file.data);
      };
      signal.addEventListener("abort", abortPromise, {
        once: true
      });
      _classPrivateFieldLooseBase9(this, _cache)[_cache].set(file.data, promise);
      promise.then(async (result) => {
        signal.removeEventListener("abort", abortPromise);
        _classPrivateFieldLooseBase9(this, _setS3MultipartState)[_setS3MultipartState](file, result);
        _classPrivateFieldLooseBase9(this, _cache)[_cache].set(file.data, result);
      }, () => {
        signal.removeEventListener("abort", abortPromise);
        _classPrivateFieldLooseBase9(this, _cache)[_cache].delete(file.data);
      });
      return promise;
    }
    async abortFileUpload(file) {
      const result = _classPrivateFieldLooseBase9(this, _cache)[_cache].get(file.data);
      if (result == null) {
        return;
      }
      _classPrivateFieldLooseBase9(this, _cache)[_cache].delete(file.data);
      _classPrivateFieldLooseBase9(this, _setS3MultipartState)[_setS3MultipartState](file, /* @__PURE__ */ Object.create(null));
      let awaitedResult;
      try {
        awaitedResult = await result;
      } catch {
        return;
      }
      await _classPrivateFieldLooseBase9(this, _abortMultipartUpload)[_abortMultipartUpload](_classPrivateFieldLooseBase9(this, _getFile)[_getFile](file), awaitedResult);
    }
    async uploadFile(file, chunks, signal) {
      throwIfAborted(signal);
      if (chunks.length === 1 && !chunks[0].shouldUseMultipart) {
        return _classPrivateFieldLooseBase9(this, _nonMultipartUpload)[_nonMultipartUpload](file, chunks[0], signal);
      }
      const {
        uploadId,
        key
      } = await this.getUploadId(file, signal);
      throwIfAborted(signal);
      try {
        const parts = await Promise.all(chunks.map((chunk, i2) => this.uploadChunk(file, i2 + 1, chunk, signal)));
        throwIfAborted(signal);
        return await _classPrivateFieldLooseBase9(this, _sendCompletionRequest)[_sendCompletionRequest](_classPrivateFieldLooseBase9(this, _getFile)[_getFile](file), {
          key,
          uploadId,
          parts,
          signal
        }, signal).abortOn(signal);
      } catch (err) {
        if ((err == null ? void 0 : err.cause) !== pausingUploadReason && (err == null ? void 0 : err.name) !== "AbortError") {
          this.abortFileUpload(file);
        }
        throw err;
      }
    }
    restoreUploadFile(file, uploadIdAndKey) {
      _classPrivateFieldLooseBase9(this, _cache)[_cache].set(file.data, uploadIdAndKey);
    }
    async resumeUploadFile(file, chunks, signal) {
      throwIfAborted(signal);
      if (chunks.length === 1 && chunks[0] != null && !chunks[0].shouldUseMultipart) {
        return _classPrivateFieldLooseBase9(this, _nonMultipartUpload)[_nonMultipartUpload](file, chunks[0], signal);
      }
      const {
        uploadId,
        key
      } = await this.getUploadId(file, signal);
      throwIfAborted(signal);
      const alreadyUploadedParts = await _classPrivateFieldLooseBase9(this, _listParts)[_listParts](_classPrivateFieldLooseBase9(this, _getFile)[_getFile](file), {
        uploadId,
        key,
        signal
      }, signal).abortOn(signal);
      throwIfAborted(signal);
      const parts = await Promise.all(chunks.map((chunk, i2) => {
        const partNumber = i2 + 1;
        const alreadyUploadedInfo = alreadyUploadedParts.find((_ref) => {
          let {
            PartNumber
          } = _ref;
          return PartNumber === partNumber;
        });
        if (alreadyUploadedInfo == null) {
          return this.uploadChunk(file, partNumber, chunk, signal);
        }
        chunk == null || chunk.setAsUploaded == null || chunk.setAsUploaded();
        return {
          PartNumber: partNumber,
          ETag: alreadyUploadedInfo.ETag
        };
      }));
      throwIfAborted(signal);
      return _classPrivateFieldLooseBase9(this, _sendCompletionRequest)[_sendCompletionRequest](_classPrivateFieldLooseBase9(this, _getFile)[_getFile](file), {
        key,
        uploadId,
        parts,
        signal
      }, signal).abortOn(signal);
    }
    async uploadChunk(file, partNumber, chunk, signal) {
      throwIfAborted(signal);
      const {
        uploadId,
        key
      } = await this.getUploadId(file, signal);
      const signatureRetryIterator = _classPrivateFieldLooseBase9(this, _retryDelays)[_retryDelays].values();
      const chunkRetryIterator = _classPrivateFieldLooseBase9(this, _retryDelays)[_retryDelays].values();
      const shouldRetrySignature = () => {
        const next = signatureRetryIterator.next();
        if (next == null || next.done) {
          return null;
        }
        return next.value;
      };
      for (; ; ) {
        throwIfAborted(signal);
        const chunkData = chunk.getData();
        const {
          onProgress,
          onComplete
        } = chunk;
        let signature;
        try {
          signature = await _classPrivateFieldLooseBase9(this, _fetchSignature)[_fetchSignature](_classPrivateFieldLooseBase9(this, _getFile)[_getFile](file), {
            uploadId,
            key,
            partNumber,
            body: chunkData,
            signal
          }).abortOn(signal);
        } catch (err) {
          const timeout = shouldRetrySignature();
          if (timeout == null || signal.aborted) {
            throw err;
          }
          await new Promise((resolve) => setTimeout(resolve, timeout));
          continue;
        }
        throwIfAborted(signal);
        try {
          return {
            PartNumber: partNumber,
            ...await _classPrivateFieldLooseBase9(this, _uploadPartBytes)[_uploadPartBytes]({
              signature,
              body: chunkData,
              size: chunkData.size,
              onProgress,
              onComplete,
              signal
            }).abortOn(signal)
          };
        } catch (err) {
          if (!await _classPrivateFieldLooseBase9(this, _shouldRetry)[_shouldRetry](err, chunkRetryIterator)) throw err;
        }
      }
    }
  };
  async function _shouldRetry2(err, retryDelayIterator) {
    var _err$source;
    const requests = _classPrivateFieldLooseBase9(this, _requests)[_requests];
    const status = err == null || (_err$source = err.source) == null ? void 0 : _err$source.status;
    if (status == null) {
      return false;
    }
    if (status === 403 && err.message === "Request has expired") {
      if (!requests.isPaused) {
        if (requests.limit === 1 || _classPrivateFieldLooseBase9(this, _previousRetryDelay)[_previousRetryDelay] == null) {
          const next = retryDelayIterator.next();
          if (next == null || next.done) {
            return false;
          }
          _classPrivateFieldLooseBase9(this, _previousRetryDelay)[_previousRetryDelay] = next.value;
        }
        requests.rateLimit(0);
        await new Promise((resolve) => setTimeout(resolve, _classPrivateFieldLooseBase9(this, _previousRetryDelay)[_previousRetryDelay]));
      }
    } else if (status === 429) {
      if (!requests.isPaused) {
        const next = retryDelayIterator.next();
        if (next == null || next.done) {
          return false;
        }
        requests.rateLimit(next.value);
      }
    } else if (status > 400 && status < 500 && status !== 409) {
      return false;
    } else if (typeof navigator !== "undefined" && navigator.onLine === false) {
      if (!requests.isPaused) {
        requests.pause();
        window.addEventListener("online", () => {
          requests.resume();
        }, {
          once: true
        });
      }
    } else {
      const next = retryDelayIterator.next();
      if (next == null || next.done) {
        return false;
      }
      await new Promise((resolve) => setTimeout(resolve, next.value));
    }
    return true;
  }
  async function _nonMultipartUpload2(file, chunk, signal) {
    const {
      method = "POST",
      url,
      fields,
      headers
    } = await _classPrivateFieldLooseBase9(this, _getUploadParameters)[_getUploadParameters](_classPrivateFieldLooseBase9(this, _getFile)[_getFile](file), {
      signal
    }).abortOn(signal);
    let body;
    const data = chunk.getData();
    if (method.toUpperCase() === "POST") {
      const formData = new FormData();
      Object.entries(fields).forEach((_ref2) => {
        let [key, value] = _ref2;
        return formData.set(key, value);
      });
      formData.set("file", data);
      body = formData;
    } else {
      body = data;
    }
    const {
      onProgress,
      onComplete
    } = chunk;
    const result = await _classPrivateFieldLooseBase9(this, _uploadPartBytes)[_uploadPartBytes]({
      signature: {
        url,
        headers,
        method
      },
      body,
      size: data.size,
      onProgress,
      onComplete,
      signal
    }).abortOn(signal);
    return "location" in result ? result : {
      location: removeMetadataFromURL(url),
      ...result
    };
  }

  // node_modules/@uppy/aws-s3/lib/index.js
  function _classPrivateFieldLooseBase10(e2, t2) {
    if (!{}.hasOwnProperty.call(e2, t2)) throw new TypeError("attempted to use private field on non-instance");
    return e2;
  }
  var id10 = 0;
  function _classPrivateFieldLooseKey10(e2) {
    return "__private_" + id10++ + "_" + e2;
  }
  var packageJson4 = {
    "version": "4.0.3"
  };
  function assertServerError(res) {
    if (res != null && res.error) {
      const error = new Error(res.message);
      Object.assign(error, res.error);
      throw error;
    }
    return res;
  }
  function getExpiry(credentials) {
    const expirationDate = credentials.Expiration;
    if (expirationDate) {
      const timeUntilExpiry = Math.floor((new Date(expirationDate) - Date.now()) / 1e3);
      if (timeUntilExpiry > 9) {
        return timeUntilExpiry;
      }
    }
    return void 0;
  }
  function getAllowedMetadata(_ref) {
    let {
      meta,
      allowedMetaFields,
      querify = false
    } = _ref;
    const metaFields = allowedMetaFields != null ? allowedMetaFields : Object.keys(meta);
    if (!meta) return {};
    return Object.fromEntries(metaFields.filter((key) => meta[key] != null).map((key) => {
      const realKey = querify ? `metadata[${key}]` : key;
      const value = String(meta[key]);
      return [realKey, value];
    }));
  }
  var defaultOptions3 = {
    allowedMetaFields: true,
    limit: 6,
    getTemporarySecurityCredentials: false,
    // eslint-disable-next-line no-bitwise
    shouldUseMultipart: (file) => (
      // eslint-disable-next-line no-bitwise
      file.size >> 10 >> 10 > 100
    ),
    retryDelays: [0, 1e3, 3e3, 5e3]
  };
  var _companionCommunicationQueue = /* @__PURE__ */ _classPrivateFieldLooseKey10("companionCommunicationQueue");
  var _client = /* @__PURE__ */ _classPrivateFieldLooseKey10("client");
  var _setClient = /* @__PURE__ */ _classPrivateFieldLooseKey10("setClient");
  var _assertHost = /* @__PURE__ */ _classPrivateFieldLooseKey10("assertHost");
  var _cachedTemporaryCredentials = /* @__PURE__ */ _classPrivateFieldLooseKey10("cachedTemporaryCredentials");
  var _getTemporarySecurityCredentials = /* @__PURE__ */ _classPrivateFieldLooseKey10("getTemporarySecurityCredentials");
  var _setS3MultipartState2 = /* @__PURE__ */ _classPrivateFieldLooseKey10("setS3MultipartState");
  var _getFile2 = /* @__PURE__ */ _classPrivateFieldLooseKey10("getFile");
  var _uploadLocalFile = /* @__PURE__ */ _classPrivateFieldLooseKey10("uploadLocalFile");
  var _getCompanionClientArgs = /* @__PURE__ */ _classPrivateFieldLooseKey10("getCompanionClientArgs");
  var _upload = /* @__PURE__ */ _classPrivateFieldLooseKey10("upload");
  var _setCompanionHeaders = /* @__PURE__ */ _classPrivateFieldLooseKey10("setCompanionHeaders");
  var _setResumableUploadsCapability = /* @__PURE__ */ _classPrivateFieldLooseKey10("setResumableUploadsCapability");
  var _resetResumableCapability = /* @__PURE__ */ _classPrivateFieldLooseKey10("resetResumableCapability");
  var AwsS3Multipart = class _AwsS3Multipart extends BasePlugin {
    constructor(uppy, _opts) {
      var _rateLimitedQueue;
      super(uppy, {
        ...defaultOptions3,
        uploadPartBytes: _AwsS3Multipart.uploadPartBytes,
        createMultipartUpload: null,
        listParts: null,
        abortMultipartUpload: null,
        completeMultipartUpload: null,
        signPart: null,
        getUploadParameters: null,
        ..._opts
      });
      Object.defineProperty(this, _getCompanionClientArgs, {
        value: _getCompanionClientArgs2
      });
      Object.defineProperty(this, _uploadLocalFile, {
        value: _uploadLocalFile2
      });
      Object.defineProperty(this, _getTemporarySecurityCredentials, {
        value: _getTemporarySecurityCredentials2
      });
      Object.defineProperty(this, _assertHost, {
        value: _assertHost2
      });
      Object.defineProperty(this, _setClient, {
        value: _setClient2
      });
      Object.defineProperty(this, _companionCommunicationQueue, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _client, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _cachedTemporaryCredentials, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _setS3MultipartState2, {
        writable: true,
        value: (file, _ref2) => {
          let {
            key,
            uploadId
          } = _ref2;
          const cFile = this.uppy.getFile(file.id);
          if (cFile == null) {
            return;
          }
          this.uppy.setFileState(file.id, {
            s3Multipart: {
              ...cFile.s3Multipart,
              key,
              uploadId
            }
          });
        }
      });
      Object.defineProperty(this, _getFile2, {
        writable: true,
        value: (file) => {
          return this.uppy.getFile(file.id) || file;
        }
      });
      Object.defineProperty(this, _upload, {
        writable: true,
        value: async (fileIDs) => {
          if (fileIDs.length === 0) return void 0;
          const files = this.uppy.getFilesByIds(fileIDs);
          const filesFiltered = filterNonFailedFiles(files);
          const filesToEmit = filterFilesToEmitUploadStarted(filesFiltered);
          this.uppy.emit("upload-start", filesToEmit);
          const promises = filesFiltered.map((file) => {
            if (file.isRemote) {
              const getQueue = () => this.requests;
              _classPrivateFieldLooseBase10(this, _setResumableUploadsCapability)[_setResumableUploadsCapability](false);
              const controller = new AbortController();
              const removedHandler = (removedFile) => {
                if (removedFile.id === file.id) controller.abort();
              };
              this.uppy.on("file-removed", removedHandler);
              const uploadPromise = this.uppy.getRequestClientForFile(file).uploadRemoteFile(file, _classPrivateFieldLooseBase10(this, _getCompanionClientArgs)[_getCompanionClientArgs](file), {
                signal: controller.signal,
                getQueue
              });
              this.requests.wrapSyncFunction(() => {
                this.uppy.off("file-removed", removedHandler);
              }, {
                priority: -1
              })();
              return uploadPromise;
            }
            return _classPrivateFieldLooseBase10(this, _uploadLocalFile)[_uploadLocalFile](file);
          });
          const upload = await Promise.all(promises);
          _classPrivateFieldLooseBase10(this, _setResumableUploadsCapability)[_setResumableUploadsCapability](true);
          return upload;
        }
      });
      Object.defineProperty(this, _setCompanionHeaders, {
        writable: true,
        value: () => {
          var _classPrivateFieldLoo;
          (_classPrivateFieldLoo = _classPrivateFieldLooseBase10(this, _client)[_client]) == null || _classPrivateFieldLoo.setCompanionHeaders(this.opts.headers);
        }
      });
      Object.defineProperty(this, _setResumableUploadsCapability, {
        writable: true,
        value: (boolean) => {
          const {
            capabilities
          } = this.uppy.getState();
          this.uppy.setState({
            capabilities: {
              ...capabilities,
              resumableUploads: boolean
            }
          });
        }
      });
      Object.defineProperty(this, _resetResumableCapability, {
        writable: true,
        value: () => {
          _classPrivateFieldLooseBase10(this, _setResumableUploadsCapability)[_setResumableUploadsCapability](true);
        }
      });
      this.type = "uploader";
      this.id = this.opts.id || "AwsS3Multipart";
      _classPrivateFieldLooseBase10(this, _setClient)[_setClient](_opts);
      const dynamicDefaultOptions = {
        createMultipartUpload: this.createMultipartUpload,
        listParts: this.listParts,
        abortMultipartUpload: this.abortMultipartUpload,
        completeMultipartUpload: this.completeMultipartUpload,
        signPart: _opts != null && _opts.getTemporarySecurityCredentials ? this.createSignedURL : this.signPart,
        getUploadParameters: _opts != null && _opts.getTemporarySecurityCredentials ? this.createSignedURL : this.getUploadParameters
      };
      for (const key of Object.keys(dynamicDefaultOptions)) {
        if (this.opts[key] == null) {
          this.opts[key] = dynamicDefaultOptions[key].bind(this);
        }
      }
      this.requests = (_rateLimitedQueue = this.opts.rateLimitedQueue) != null ? _rateLimitedQueue : new RateLimitedQueue(this.opts.limit);
      _classPrivateFieldLooseBase10(this, _companionCommunicationQueue)[_companionCommunicationQueue] = new HTTPCommunicationQueue(this.requests, this.opts, _classPrivateFieldLooseBase10(this, _setS3MultipartState2)[_setS3MultipartState2], _classPrivateFieldLooseBase10(this, _getFile2)[_getFile2]);
      this.uploaders = /* @__PURE__ */ Object.create(null);
      this.uploaderEvents = /* @__PURE__ */ Object.create(null);
    }
    [Symbol.for("uppy test: getClient")]() {
      return _classPrivateFieldLooseBase10(this, _client)[_client];
    }
    setOptions(newOptions) {
      _classPrivateFieldLooseBase10(this, _companionCommunicationQueue)[_companionCommunicationQueue].setOptions(newOptions);
      super.setOptions(newOptions);
      _classPrivateFieldLooseBase10(this, _setClient)[_setClient](newOptions);
    }
    /**
     * Clean up all references for a file's upload: the MultipartUploader instance,
     * any events related to the file, and the Companion WebSocket connection.
     *
     * Set `opts.abort` to tell S3 that the multipart upload is cancelled and must be removed.
     * This should be done when the user cancels the upload, not when the upload is completed or errored.
     */
    resetUploaderReferences(fileID, opts) {
      if (this.uploaders[fileID]) {
        this.uploaders[fileID].abort({
          really: (opts == null ? void 0 : opts.abort) || false
        });
        this.uploaders[fileID] = null;
      }
      if (this.uploaderEvents[fileID]) {
        this.uploaderEvents[fileID].remove();
        this.uploaderEvents[fileID] = null;
      }
    }
    createMultipartUpload(file, signal) {
      _classPrivateFieldLooseBase10(this, _assertHost)[_assertHost]("createMultipartUpload");
      throwIfAborted(signal);
      const allowedMetaFields = getAllowedMetaFields(this.opts.allowedMetaFields, file.meta);
      const metadata = getAllowedMetadata({
        meta: file.meta,
        allowedMetaFields
      });
      return _classPrivateFieldLooseBase10(this, _client)[_client].post("s3/multipart", {
        filename: file.name,
        type: file.type,
        metadata
      }, {
        signal
      }).then(assertServerError);
    }
    listParts(file, _ref3, oldSignal) {
      var _signal;
      let {
        key,
        uploadId,
        signal
      } = _ref3;
      (_signal = signal) != null ? _signal : signal = oldSignal;
      _classPrivateFieldLooseBase10(this, _assertHost)[_assertHost]("listParts");
      throwIfAborted(signal);
      const filename = encodeURIComponent(key);
      return _classPrivateFieldLooseBase10(this, _client)[_client].get(`s3/multipart/${encodeURIComponent(uploadId)}?key=${filename}`, {
        signal
      }).then(assertServerError);
    }
    completeMultipartUpload(file, _ref4, oldSignal) {
      var _signal2;
      let {
        key,
        uploadId,
        parts,
        signal
      } = _ref4;
      (_signal2 = signal) != null ? _signal2 : signal = oldSignal;
      _classPrivateFieldLooseBase10(this, _assertHost)[_assertHost]("completeMultipartUpload");
      throwIfAborted(signal);
      const filename = encodeURIComponent(key);
      const uploadIdEnc = encodeURIComponent(uploadId);
      return _classPrivateFieldLooseBase10(this, _client)[_client].post(`s3/multipart/${uploadIdEnc}/complete?key=${filename}`, {
        parts: parts.map((_ref5) => {
          let {
            ETag,
            PartNumber
          } = _ref5;
          return {
            ETag,
            PartNumber
          };
        })
      }, {
        signal
      }).then(assertServerError);
    }
    async createSignedURL(file, options) {
      const data = await _classPrivateFieldLooseBase10(this, _getTemporarySecurityCredentials)[_getTemporarySecurityCredentials](options);
      const expires = getExpiry(data.credentials) || 604800;
      const {
        uploadId,
        key,
        partNumber
      } = options;
      return {
        method: "PUT",
        expires,
        fields: {},
        url: `${await createSignedURL({
          accountKey: data.credentials.AccessKeyId,
          accountSecret: data.credentials.SecretAccessKey,
          sessionToken: data.credentials.SessionToken,
          expires,
          bucketName: data.bucket,
          Region: data.region,
          Key: key != null ? key : `${crypto.randomUUID()}-${file.name}`,
          uploadId,
          partNumber
        })}`,
        // Provide content type header required by S3
        headers: {
          "Content-Type": file.type
        }
      };
    }
    signPart(file, _ref6) {
      let {
        uploadId,
        key,
        partNumber,
        signal
      } = _ref6;
      _classPrivateFieldLooseBase10(this, _assertHost)[_assertHost]("signPart");
      throwIfAborted(signal);
      if (uploadId == null || key == null || partNumber == null) {
        throw new Error("Cannot sign without a key, an uploadId, and a partNumber");
      }
      const filename = encodeURIComponent(key);
      return _classPrivateFieldLooseBase10(this, _client)[_client].get(`s3/multipart/${encodeURIComponent(uploadId)}/${partNumber}?key=${filename}`, {
        signal
      }).then(assertServerError);
    }
    abortMultipartUpload(file, _ref7) {
      let {
        key,
        uploadId,
        signal
      } = _ref7;
      _classPrivateFieldLooseBase10(this, _assertHost)[_assertHost]("abortMultipartUpload");
      const filename = encodeURIComponent(key);
      const uploadIdEnc = encodeURIComponent(uploadId);
      return _classPrivateFieldLooseBase10(this, _client)[_client].delete(`s3/multipart/${uploadIdEnc}?key=${filename}`, void 0, {
        signal
      }).then(assertServerError);
    }
    getUploadParameters(file, options) {
      _classPrivateFieldLooseBase10(this, _assertHost)[_assertHost]("getUploadParameters");
      const {
        meta
      } = file;
      const {
        type,
        name: filename
      } = meta;
      const allowedMetaFields = getAllowedMetaFields(this.opts.allowedMetaFields, file.meta);
      const metadata = getAllowedMetadata({
        meta,
        allowedMetaFields,
        querify: true
      });
      const query = new URLSearchParams({
        filename,
        type,
        ...metadata
      });
      return _classPrivateFieldLooseBase10(this, _client)[_client].get(`s3/params?${query}`, options);
    }
    static async uploadPartBytes(_ref8) {
      let {
        signature: {
          url,
          expires,
          headers,
          method = "PUT"
        },
        body,
        size = body.size,
        onProgress,
        onComplete,
        signal
      } = _ref8;
      throwIfAborted(signal);
      if (url == null) {
        throw new Error("Cannot upload to an undefined URL");
      }
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        if (headers) {
          Object.keys(headers).forEach((key) => {
            xhr.setRequestHeader(key, headers[key]);
          });
        }
        xhr.responseType = "text";
        if (typeof expires === "number") {
          xhr.timeout = expires * 1e3;
        }
        function onabort() {
          xhr.abort();
        }
        function cleanup() {
          signal == null || signal.removeEventListener("abort", onabort);
        }
        signal == null || signal.addEventListener("abort", onabort);
        xhr.upload.addEventListener("progress", (ev) => {
          onProgress(ev);
        });
        xhr.addEventListener("abort", () => {
          cleanup();
          reject(createAbortError());
        });
        xhr.addEventListener("timeout", () => {
          cleanup();
          const error = new Error("Request has expired");
          error.source = {
            status: 403
          };
          reject(error);
        });
        xhr.addEventListener("load", () => {
          cleanup();
          if (xhr.status === 403 && xhr.responseText.includes("<Message>Request has expired</Message>")) {
            const error = new Error("Request has expired");
            error.source = xhr;
            reject(error);
            return;
          }
          if (xhr.status < 200 || xhr.status >= 300) {
            const error = new Error("Non 2xx");
            error.source = xhr;
            reject(error);
            return;
          }
          onProgress == null || onProgress({
            loaded: size,
            lengthComputable: true
          });
          const arr = xhr.getAllResponseHeaders().trim().split(/[\r\n]+/);
          const headersMap = {
            __proto__: null
          };
          for (const line of arr) {
            const parts = line.split(": ");
            const header = parts.shift();
            const value = parts.join(": ");
            headersMap[header] = value;
          }
          const {
            etag,
            location: location2
          } = headersMap;
          if (method.toUpperCase() === "POST" && location2 === null) {
            console.warn("AwsS3/Multipart: Could not read the Location header. This likely means CORS is not configured correctly on the S3 Bucket. See https://uppy.io/docs/aws-s3-multipart#S3-Bucket-Configuration for instructions.");
          }
          if (etag === null) {
            reject(new Error("AwsS3/Multipart: Could not read the ETag header. This likely means CORS is not configured correctly on the S3 Bucket. See https://uppy.io/docs/aws-s3-multipart#S3-Bucket-Configuration for instructions."));
            return;
          }
          onComplete == null || onComplete(etag);
          resolve({
            ...headersMap,
            ETag: etag
            // keep capitalised ETag for backwards compatiblity
          });
        });
        xhr.addEventListener("error", (ev) => {
          cleanup();
          const error = new Error("Unknown error");
          error.source = ev.target;
          reject(error);
        });
        xhr.send(body);
      });
    }
    install() {
      _classPrivateFieldLooseBase10(this, _setResumableUploadsCapability)[_setResumableUploadsCapability](true);
      this.uppy.addPreProcessor(_classPrivateFieldLooseBase10(this, _setCompanionHeaders)[_setCompanionHeaders]);
      this.uppy.addUploader(_classPrivateFieldLooseBase10(this, _upload)[_upload]);
      this.uppy.on("cancel-all", _classPrivateFieldLooseBase10(this, _resetResumableCapability)[_resetResumableCapability]);
    }
    uninstall() {
      this.uppy.removePreProcessor(_classPrivateFieldLooseBase10(this, _setCompanionHeaders)[_setCompanionHeaders]);
      this.uppy.removeUploader(_classPrivateFieldLooseBase10(this, _upload)[_upload]);
      this.uppy.off("cancel-all", _classPrivateFieldLooseBase10(this, _resetResumableCapability)[_resetResumableCapability]);
    }
  };
  function _setClient2(opts) {
    if (opts == null || !("endpoint" in opts || "companionUrl" in opts || "headers" in opts || "companionHeaders" in opts || "cookiesRule" in opts || "companionCookiesRule" in opts)) return;
    if ("companionUrl" in opts && !("endpoint" in opts)) {
      this.uppy.log("`companionUrl` option has been removed in @uppy/aws-s3, use `endpoint` instead.", "warning");
    }
    if ("companionHeaders" in opts && !("headers" in opts)) {
      this.uppy.log("`companionHeaders` option has been removed in @uppy/aws-s3, use `headers` instead.", "warning");
    }
    if ("companionCookiesRule" in opts && !("cookiesRule" in opts)) {
      this.uppy.log("`companionCookiesRule` option has been removed in @uppy/aws-s3, use `cookiesRule` instead.", "warning");
    }
    if ("endpoint" in opts) {
      _classPrivateFieldLooseBase10(this, _client)[_client] = new RequestClient(this.uppy, {
        pluginId: this.id,
        provider: "AWS",
        companionUrl: this.opts.endpoint,
        companionHeaders: this.opts.headers,
        companionCookiesRule: this.opts.cookiesRule
      });
    } else {
      if ("headers" in opts) {
        _classPrivateFieldLooseBase10(this, _setCompanionHeaders)[_setCompanionHeaders]();
      }
      if ("cookiesRule" in opts) {
        _classPrivateFieldLooseBase10(this, _client)[_client].opts.companionCookiesRule = opts.cookiesRule;
      }
    }
  }
  function _assertHost2(method) {
    if (!_classPrivateFieldLooseBase10(this, _client)[_client]) {
      throw new Error(`Expected a \`endpoint\` option containing a URL, or if you are not using Companion, a custom \`${method}\` implementation.`);
    }
  }
  async function _getTemporarySecurityCredentials2(options) {
    throwIfAborted(options == null ? void 0 : options.signal);
    if (_classPrivateFieldLooseBase10(this, _cachedTemporaryCredentials)[_cachedTemporaryCredentials] == null) {
      const {
        getTemporarySecurityCredentials
      } = this.opts;
      if (getTemporarySecurityCredentials === true) {
        _classPrivateFieldLooseBase10(this, _assertHost)[_assertHost]("getTemporarySecurityCredentials");
        _classPrivateFieldLooseBase10(this, _cachedTemporaryCredentials)[_cachedTemporaryCredentials] = _classPrivateFieldLooseBase10(this, _client)[_client].get("s3/sts", options).then(assertServerError);
      } else {
        _classPrivateFieldLooseBase10(this, _cachedTemporaryCredentials)[_cachedTemporaryCredentials] = getTemporarySecurityCredentials(options);
      }
      _classPrivateFieldLooseBase10(this, _cachedTemporaryCredentials)[_cachedTemporaryCredentials] = await _classPrivateFieldLooseBase10(this, _cachedTemporaryCredentials)[_cachedTemporaryCredentials];
      setTimeout(() => {
        _classPrivateFieldLooseBase10(this, _cachedTemporaryCredentials)[_cachedTemporaryCredentials] = null;
      }, (getExpiry(_classPrivateFieldLooseBase10(this, _cachedTemporaryCredentials)[_cachedTemporaryCredentials].credentials) || 0) * 500);
    }
    return _classPrivateFieldLooseBase10(this, _cachedTemporaryCredentials)[_cachedTemporaryCredentials];
  }
  function _uploadLocalFile2(file) {
    var _this = this;
    return new Promise((resolve, reject) => {
      const onProgress = (bytesUploaded, bytesTotal) => {
        var _latestFile$progress$;
        const latestFile = this.uppy.getFile(file.id);
        this.uppy.emit("upload-progress", latestFile, {
          uploadStarted: (_latestFile$progress$ = latestFile.progress.uploadStarted) != null ? _latestFile$progress$ : 0,
          bytesUploaded,
          bytesTotal
        });
      };
      const onError = (err) => {
        this.uppy.log(err);
        this.uppy.emit("upload-error", file, err);
        this.resetUploaderReferences(file.id);
        reject(err);
      };
      const onSuccess = (result) => {
        const uploadResp = {
          body: {
            ...result
          },
          status: 200,
          uploadURL: result.location
        };
        this.resetUploaderReferences(file.id);
        this.uppy.emit("upload-success", _classPrivateFieldLooseBase10(this, _getFile2)[_getFile2](file), uploadResp);
        if (result.location) {
          this.uppy.log(`Download ${file.name} from ${result.location}`);
        }
        resolve();
      };
      const upload = new MultipartUploader_default(file.data, {
        // .bind to pass the file object to each handler.
        companionComm: _classPrivateFieldLooseBase10(this, _companionCommunicationQueue)[_companionCommunicationQueue],
        log: function() {
          return _this.uppy.log(...arguments);
        },
        getChunkSize: this.opts.getChunkSize ? this.opts.getChunkSize.bind(this) : void 0,
        onProgress,
        onError,
        onSuccess,
        onPartComplete: (part) => {
          this.uppy.emit("s3-multipart:part-uploaded", _classPrivateFieldLooseBase10(this, _getFile2)[_getFile2](file), part);
        },
        file,
        shouldUseMultipart: this.opts.shouldUseMultipart,
        ...file.s3Multipart
      });
      this.uploaders[file.id] = upload;
      const eventManager = new EventManager(this.uppy);
      this.uploaderEvents[file.id] = eventManager;
      eventManager.onFileRemove(file.id, (removed) => {
        upload.abort();
        this.resetUploaderReferences(file.id, {
          abort: true
        });
        resolve(`upload ${removed} was removed`);
      });
      eventManager.onCancelAll(file.id, () => {
        upload.abort();
        this.resetUploaderReferences(file.id, {
          abort: true
        });
        resolve(`upload ${file.id} was canceled`);
      });
      eventManager.onFilePause(file.id, (isPaused) => {
        if (isPaused) {
          upload.pause();
        } else {
          upload.start();
        }
      });
      eventManager.onPauseAll(file.id, () => {
        upload.pause();
      });
      eventManager.onResumeAll(file.id, () => {
        upload.start();
      });
      upload.start();
    });
  }
  function _getCompanionClientArgs2(file) {
    var _file$remote;
    return {
      ...(_file$remote = file.remote) == null ? void 0 : _file$remote.body,
      protocol: "s3-multipart",
      size: file.data.size,
      metadata: file.meta
    };
  }
  AwsS3Multipart.VERSION = packageJson4.version;

  // node_modules/@uppy/utils/lib/toArray.js
  var toArray_default = Array.from;

  // node_modules/@uppy/file-input/lib/locale.js
  var locale_default2 = {
    strings: {
      chooseFiles: "Choose files"
    }
  };

  // node_modules/@uppy/file-input/lib/FileInput.js
  var packageJson5 = {
    "version": "4.0.1"
  };
  var defaultOptions4 = {
    pretty: true,
    inputName: "files[]"
  };
  var FileInput = class extends UIPlugin_default {
    constructor(uppy, opts) {
      super(uppy, {
        ...defaultOptions4,
        ...opts
      });
      this.input = null;
      this.id = this.opts.id || "FileInput";
      this.title = "File Input";
      this.type = "acquirer";
      this.defaultLocale = locale_default2;
      this.i18nInit();
      this.render = this.render.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }
    addFiles(files) {
      const descriptors = files.map((file) => ({
        source: this.id,
        name: file.name,
        type: file.type,
        data: file
      }));
      try {
        this.uppy.addFiles(descriptors);
      } catch (err) {
        this.uppy.log(err);
      }
    }
    handleInputChange(event) {
      this.uppy.log("[FileInput] Something selected through input...");
      const files = toArray_default(event.target.files);
      this.addFiles(files);
      event.target.value = null;
    }
    handleClick() {
      this.input.click();
    }
    render() {
      var _restrictions$allowed;
      const hiddenInputStyle = {
        width: "0.1px",
        height: "0.1px",
        opacity: 0,
        overflow: "hidden",
        position: "absolute",
        zIndex: -1
      };
      const {
        restrictions
      } = this.uppy.opts;
      return _("div", {
        className: "uppy-FileInput-container"
      }, _("input", {
        className: "uppy-FileInput-input",
        style: this.opts.pretty ? hiddenInputStyle : void 0,
        type: "file",
        name: this.opts.inputName,
        onChange: this.handleInputChange,
        multiple: restrictions.maxNumberOfFiles !== 1,
        accept: (_restrictions$allowed = restrictions.allowedFileTypes) == null ? void 0 : _restrictions$allowed.join(", "),
        ref: (input) => {
          this.input = input;
        }
      }), this.opts.pretty && _("button", {
        className: "uppy-FileInput-btn",
        type: "button",
        onClick: this.handleClick
      }, this.i18n("chooseFiles")));
    }
    install() {
      const {
        target
      } = this.opts;
      if (target) {
        this.mount(target, this);
      }
    }
    uninstall() {
      this.unmount();
    }
  };
  FileInput.VERSION = packageJson5.version;

  // resources/js/filament-uppy-component.js
  var import_prettier_bytes2 = __toESM(require_prettierBytes());

  // node_modules/@uppy/utils/lib/getDroppedFiles/utils/webkitGetAsEntryApi/getFilesAndDirectoriesFromDirectory.js
  function getFilesAndDirectoriesFromDirectory(directoryReader, oldEntries, logDropError, _ref) {
    let {
      onSuccess
    } = _ref;
    directoryReader.readEntries(
      (entries) => {
        const newEntries = [...oldEntries, ...entries];
        if (entries.length) {
          queueMicrotask(() => {
            getFilesAndDirectoriesFromDirectory(directoryReader, newEntries, logDropError, {
              onSuccess
            });
          });
        } else {
          onSuccess(newEntries);
        }
      },
      // Make sure we resolve on error anyway, it's fine if only one directory couldn't be parsed!
      (error) => {
        logDropError(error);
        onSuccess(oldEntries);
      }
    );
  }

  // node_modules/@uppy/utils/lib/getDroppedFiles/utils/webkitGetAsEntryApi/index.js
  function getAsFileSystemHandleFromEntry(entry, logDropError) {
    if (entry == null) return entry;
    return {
      kind: (
        // eslint-disable-next-line no-nested-ternary
        entry.isFile ? "file" : entry.isDirectory ? "directory" : void 0
      ),
      name: entry.name,
      getFile() {
        return new Promise((resolve, reject) => entry.file(resolve, reject));
      },
      async *values() {
        const directoryReader = entry.createReader();
        const entries = await new Promise((resolve) => {
          getFilesAndDirectoriesFromDirectory(directoryReader, [], logDropError, {
            onSuccess: (dirEntries) => resolve(dirEntries.map((file) => getAsFileSystemHandleFromEntry(file, logDropError)))
          });
        });
        yield* entries;
      },
      isSameEntry: void 0
    };
  }
  function createPromiseToAddFileOrParseDirectory(entry, relativePath, lastResortFile) {
    try {
      if (lastResortFile === void 0) {
        lastResortFile = void 0;
      }
      return async function* () {
        const getNextRelativePath = () => `${relativePath}/${entry.name}`;
        if (entry.kind === "file") {
          const file = await entry.getFile();
          if (file != null) {
            ;
            file.relativePath = relativePath ? getNextRelativePath() : null;
            yield file;
          } else if (lastResortFile != null) yield lastResortFile;
        } else if (entry.kind === "directory") {
          for await (const handle of entry.values()) {
            yield* createPromiseToAddFileOrParseDirectory(handle, relativePath ? getNextRelativePath() : entry.name);
          }
        } else if (lastResortFile != null) yield lastResortFile;
      }();
    } catch (e2) {
      return Promise.reject(e2);
    }
  }
  async function* getFilesFromDataTransfer(dataTransfer, logDropError) {
    const fileSystemHandles = await Promise.all(Array.from(dataTransfer.items, async (item) => {
      var _fileSystemHandle;
      let fileSystemHandle;
      const getAsEntry = () => typeof item.getAsEntry === "function" ? item.getAsEntry() : item.webkitGetAsEntry();
      (_fileSystemHandle = fileSystemHandle) != null ? _fileSystemHandle : fileSystemHandle = getAsFileSystemHandleFromEntry(getAsEntry(), logDropError);
      return {
        fileSystemHandle,
        lastResortFile: item.getAsFile()
        // can be used as a fallback in case other methods fail
      };
    }));
    for (const {
      lastResortFile,
      fileSystemHandle
    } of fileSystemHandles) {
      if (fileSystemHandle != null) {
        try {
          yield* createPromiseToAddFileOrParseDirectory(fileSystemHandle, "", lastResortFile);
        } catch (err) {
          if (lastResortFile != null) {
            yield lastResortFile;
          } else {
            logDropError(err);
          }
        }
      } else if (lastResortFile != null) yield lastResortFile;
    }
  }

  // node_modules/@uppy/utils/lib/getDroppedFiles/utils/fallbackApi.js
  function fallbackApi(dataTransfer) {
    const files = toArray_default(dataTransfer.files);
    return Promise.resolve(files);
  }

  // node_modules/@uppy/utils/lib/getDroppedFiles/index.js
  async function getDroppedFiles(dataTransfer, options) {
    var _options$logDropError;
    const logDropError = (_options$logDropError = options == null ? void 0 : options.logDropError) != null ? _options$logDropError : Function.prototype;
    try {
      const accumulator = [];
      for await (const file of getFilesFromDataTransfer(dataTransfer, logDropError)) {
        accumulator.push(file);
      }
      return accumulator;
    } catch {
      return fallbackApi(dataTransfer);
    }
  }

  // resources/js/filament-uppy-component.js
  var File2 = class {
    constructor(uppyFile, url, completed) {
      this.id = uppyFile.id;
      this.name = uppyFile.name;
      this.url = url;
      this.completed = completed;
      this.percentage = completed ? 100 : 0;
      this.error = false;
      this.size = uppyFile.size;
      this.humanSize = (0, import_prettier_bytes2.default)(uppyFile.size);
    }
    toObject() {
      return {
        id: this.id,
        name: this.name,
        size: this.size,
        url: this.url
      };
    }
    updateProgress(progress) {
      this.percentage = progress.percentage;
      if (this.percentage == 100) {
        this.completed = true;
      }
    }
    updateUrl(response) {
      this.url = response.uploadURL;
    }
    markCompleted() {
      this.percentage = 100;
      this.completed = true;
    }
    markErrored() {
      this.error = true;
    }
  };
  var InternalState = class {
    constructor() {
      this.files = {};
      this.length = 0;
      this.inProgress = 0;
      this.errors = 0;
    }
    empty() {
      return this.length == 0;
    }
    filled() {
      return this.length > 0;
    }
    done() {
      return this.errors == 0 && this.inProgress == 0;
    }
    get(id11) {
      return this.files[id11];
    }
    addInProgress(uppyFile) {
      ++this.inProgress;
      ++this.length;
      this.files[uppyFile.id] = new File2(uppyFile, "", false);
    }
    addComplete(object) {
      ++this.length;
      this.files[object.id] = new File2(object, object.url, true);
    }
    removeInProgress(file) {
      --this.inProgress;
      if (file.error) {
        --this.errors;
      }
      --this.length;
      delete this.files[file.id];
    }
    removeComplete(file) {
      --this.length;
      delete this.files[file.id];
    }
    markCompleted(uppyFile, response) {
      --this.inProgress;
      const file = this.files[uppyFile.id];
      file.updateUrl(response);
      file.markCompleted();
    }
    markErrored(uppyFile, _error, _response) {
      ++this.errors;
      this.files[uppyFile.id].markErrored();
    }
    updateProgress(uppyFile, progress) {
      this.files[uppyFile.id].updateProgress(progress);
    }
    load(externalState) {
      for (const object of externalState) {
        this.addComplete(object);
      }
    }
    export() {
      return Object.values(this.files).filter((file) => file.completed).map((file) => file.toObject());
    }
  };
  window.fileUploaderComponent = function fileUploaderComponent({
    state,
    uploadEndpoint,
    successEndpoint,
    errorEndpoint,
    deleteEndpoint,
    uploadingMessage,
    restrictions
  }) {
    return {
      state,
      internalState: new InternalState(),
      uppy: new Uppy_default({
        autoProceed: true,
        allowMultipleUploads: true,
        restrictions
      }),
      busy: false,
      dragDepth: 0,
      init() {
        if (!Array.isArray(this.state)) {
          this.state = [];
        }
        this.pullState();
        window.addEventListener("beforeunload", (e2) => {
          if (!this.busy) return;
          e2.preventDefault();
          e2.returnValue = "Are you sure you want to leave? Uploads in progress will be cancelled.";
        });
        this.initUppy();
      },
      pullState() {
        this.internalState.load(this.state);
      },
      pushState() {
        this.state = this.internalState.export();
      },
      initUppy() {
        this.uppy.on("file-added", this.fileAdded.bind(this)).on("upload-progress", this.uploadProgress.bind(this)).on("upload-success", this.uploadSuccess.bind(this)).on("upload-error", this.uploadError.bind(this));
        this.uppy.use(AwsS3Multipart, {
          endpoint: uploadEndpoint,
          getChunkSize: (file) => 100 * 1024 * 1024,
          // 100MB
          shouldUseMultipart: (file) => file.size > 100 * 1024 * 1024
          // 100MB
        });
        this.uppy.use(FileInput, {
          target: this.$refs.fileInput,
          pretty: false
        });
      },
      // NOTE: this handler ensures that files can be added by dropping a
      // folder of files rather than just files themselves.
      handleDrop(event) {
        getDroppedFiles(event.dataTransfer, {
          logDropError: (error) => this.uppy.log(error, "error")
        }).then((files) => {
          const descriptors = files.map((file) => ({
            name: file.name,
            type: file.type,
            data: file,
            meta: {
              relativePath: file.relativePath || null
            }
          }));
          try {
            this.uppy.addFiles(descriptors);
          } catch (error) {
            this.uppy.log(error);
          }
        });
      },
      fileAdded(uppyFile) {
        this.affectsBusyState(() => {
          this.internalState.addInProgress(uppyFile);
        });
      },
      uploadProgress(uppyFile, _progress) {
        this.internalState.updateProgress(uppyFile, uppyFile.progress);
      },
      uploadSuccess(uppyFile, response) {
        this.affectsBusyState(() => {
          this.uppy.removeFile(uppyFile.id);
          this.internalState.markCompleted(uppyFile, response);
        });
        this.callSuccessEndpoint(uppyFile, response);
      },
      uploadError(uppyFile, error, response) {
        this.affectsBusyState(() => {
          this.internalState.markErrored(uppyFile, error, response);
        });
        this.callErrorEndpoint(uppyFile, error, response);
      },
      removeFile(id11) {
        this.affectsBusyState(() => {
          const file = this.internalState.get(id11);
          if (!file) {
            return;
          }
          if (file.completed) {
            this.removeCompletedFile(file);
          } else {
            this.removeFileInProgress(file);
          }
        });
      },
      removeCompletedFile(file) {
        this.affectsBusyState(() => {
          this.internalState.removeComplete(file);
        });
        this.callDeleteEndpoint(file);
      },
      removeFileInProgress(file) {
        this.affectsBusyState(() => {
          this.uppy.removeFile(file.id);
          this.internalState.removeInProgress(file);
        });
      },
      // A wrapper that properly handles events, busy state, and syncs
      // internal state.
      affectsBusyState(cb) {
        if (!this.busy) {
          this.dispatchFormEvent("form-processing-started", {
            message: uploadingMessage
          });
          this.busy = true;
        }
        cb();
        if (this.internalState.done()) {
          this.busy = false;
          this.pushState();
          this.dispatchFormEvent("form-processing-finished");
        }
      },
      dispatchFormEvent(name, detail = {}) {
        this.$el.closest("form")?.dispatchEvent(
          new CustomEvent(name, {
            composed: true,
            cancelable: true,
            detail
          })
        );
      },
      hovering() {
        return this.dragDepth > 0;
      },
      callSuccessEndpoint(file, response) {
        if (!successEndpoint) {
          return;
        }
        const key = response.uploadURL.split("/").pop();
        const uuid = key.split(".")[0];
        const name = file.name;
        fetch(successEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content
          },
          body: JSON.stringify({ key, uuid, name })
        });
      },
      callErrorEndpoint(file, error, response) {
        if (errorEndpoint) {
          fetch(errorEndpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content
            },
            body: JSON.stringify({
              name: file.name,
              size: file.size,
              error
            })
          });
        }
      },
      callDeleteEndpoint(file) {
        if (deleteEndpoint) {
          const key = file.url.split("/").pop();
          const uuid = key.split(".")[0];
          const name = file.name;
          const url = file.url;
          fetch(deleteEndpoint, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content
            },
            body: JSON.stringify({ name, url, uuid })
          });
        }
      }
    };
  };
})();
/*! Bundled license information:

@uppy/utils/lib/Translator.js:
  (**
   * Takes a string with placeholder variables like `%{smart_count} file selected`
   * and replaces it with values from options `{smart_count: 5}`
   *
   * @license https://github.com/airbnb/polyglot.js/blob/master/LICENSE
   * taken from https://github.com/airbnb/polyglot.js/blob/master/lib/polyglot.js#L299
   *
   * @param phrase that needs interpolation, with placeholders
   * @param options with values that will be used to replace placeholders
   *)
*/
