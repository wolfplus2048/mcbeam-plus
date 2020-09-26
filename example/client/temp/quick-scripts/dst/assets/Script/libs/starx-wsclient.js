
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/libs/starx-wsclient.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5d3c3y9EUFLCIeheaIgKfzd', 'starx-wsclient');
// Script/libs/starx-wsclient.js

"use strict";

(function () {
  function Emitter(obj) {
    if (obj) return mixin(obj);
  }
  /**
  * Mixin the emitter properties.
  *
  * @param {Object} obj
  * @return {Object}
  * @gateway private
  */


  function mixin(obj) {
    for (var key in Emitter.prototype) {
      obj[key] = Emitter.prototype[key];
    }

    return obj;
  }
  /**
   * Listen on the given `event` with `fn`.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @gateway public
   */


  Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
    this._callbacks = this._callbacks || {};
    (this._callbacks[event] = this._callbacks[event] || []).push(fn);
    return this;
  };
  /**
   * Adds an `event` listener that will be invoked a single
   * time then automatically removed.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @gateway public
   */


  Emitter.prototype.once = function (event, fn) {
    var self = this;
    this._callbacks = this._callbacks || {};

    function on() {
      self.off(event, on);
      fn.apply(this, arguments);
    }

    on.fn = fn;
    this.on(event, on);
    return this;
  };
  /**
   * Remove the given callback for `event` or all
   * registered callbacks.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @gateway public
   */


  Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
    this._callbacks = this._callbacks || {}; // all

    if (0 == arguments.length) {
      this._callbacks = {};
      return this;
    } // specific event


    var callbacks = this._callbacks[event];
    if (!callbacks) return this; // remove all handlers

    if (1 == arguments.length) {
      delete this._callbacks[event];
      return this;
    } // remove specific component


    var cb;

    for (var i = 0; i < callbacks.length; i++) {
      cb = callbacks[i];

      if (cb === fn || cb.fn === fn) {
        callbacks.splice(i, 1);
        break;
      }
    }

    return this;
  };
  /**
   * Emit `event` with the given args.
   *
   * @param {String} event
   * @param {Mixed} ...
   * @return {Emitter}
   */


  Emitter.prototype.emit = function (event) {
    this._callbacks = this._callbacks || {};
    var args = [].slice.call(arguments, 1),
        callbacks = this._callbacks[event];

    if (callbacks) {
      callbacks = callbacks.slice(0);

      for (var i = 0, len = callbacks.length; i < len; ++i) {
        callbacks[i].apply(this, args);
      }
    }

    return this;
  };
  /**
   * Return array of callbacks for `event`.
   *
   * @param {String} event
   * @return {Array}
   * @gateway public
   */


  Emitter.prototype.listeners = function (event) {
    this._callbacks = this._callbacks || {};
    return this._callbacks[event] || [];
  };
  /**
   * Check if this emitter has `event` handlers.
   *
   * @param {String} event
   * @return {Boolean}
   * @gateway public
   */


  Emitter.prototype.hasListeners = function (event) {
    return !!this.listeners(event).length;
  };

  var JS_WS_CLIENT_TYPE = 'js-websocket';
  var JS_WS_CLIENT_VERSION = '0.0.1';
  var Protocol = window.Protocol;
  var decodeIO_encoder = null;
  var decodeIO_decoder = null;
  var Package = Protocol.Package;
  var Message = Protocol.Message;
  var EventEmitter = Emitter;
  var rsa = window.rsa;

  if (typeof window != "undefined" && typeof sys != 'undefined' && sys.localStorage) {
    window.localStorage = sys.localStorage;
  }

  var RES_OK = 200;
  var RES_FAIL = 500;
  var RES_OLD_CLIENT = 501;

  if (typeof Object.create !== 'function') {
    Object.create = function (o) {
      function F() {}

      F.prototype = o;
      return new F();
    };
  }

  var root = window;
  var starx = Object.create(EventEmitter.prototype); // object extend from object

  root.starx = starx;
  var socket = null;
  var reqId = 0;
  var callbacks = {};
  var handlers = {}; //Map from request id to route

  var routeMap = {};
  var dict = {}; // route string to code

  var abbrs = {}; // code to route string

  var heartbeatInterval = 0;
  var heartbeatTimeout = 0;
  var nextHeartbeatTimeout = 0;
  var gapThreshold = 100; // heartbeat gap threashold

  var heartbeatId = null;
  var heartbeatTimeoutId = null;
  var handshakeCallback = null;
  var decode = null;
  var encode = null;
  var reconnect = false;
  var reconncetTimer = null;
  var reconnectUrl = null;
  var reconnectAttempts = 0;
  var reconnectionDelay = 5000;
  var DEFAULT_MAX_RECONNECT_ATTEMPTS = 10;
  var useCrypto;
  var handshakeBuffer = {
    'sys': {
      type: JS_WS_CLIENT_TYPE,
      version: JS_WS_CLIENT_VERSION,
      rsa: {}
    },
    'user': {}
  };
  var initCallback = null;

  starx.init = function (params, cb) {
    initCallback = cb;
    var host = params.host;
    var port = params.port;
    var path = params.path; // encode = params.encode || defaultEncode;
    // decode = params.decode || defaultDecode;

    encode = params.encode || byteEncode;
    decode = params.decode || byteDecode;
    var url = 'ws://' + host;

    if (port) {
      url += ':' + port;
    }

    if (path) {
      url += path;
    }

    handshakeBuffer.user = params.user;

    if (params.encrypt) {
      useCrypto = true;
      rsa.generate(1024, "10001");
      var data = {
        rsa_n: rsa.n.toString(16),
        rsa_e: rsa.e
      };
      handshakeBuffer.sys.rsa = data;
    }

    handshakeCallback = params.handshakeCallback;
    connect(params, url, cb);
  };

  var defaultDecode = starx.decode = function (data) {
    var msg = Message.decode(data);

    if (msg.id > 0) {
      msg.route = routeMap[msg.id];
      delete routeMap[msg.id];

      if (!msg.route) {
        return;
      }
    }

    msg.body = deCompose(msg);
    return msg;
  };

  var defaultEncode = starx.encode = function (reqId, route, msg) {
    var type = reqId ? Message.TYPE_REQUEST : Message.TYPE_NOTIFY;

    if (decodeIO_encoder && decodeIO_encoder.lookup(route)) {
      var Builder = decodeIO_encoder.build(route);
      msg = new Builder(msg).encodeNB();
    } else {
      msg = Protocol.strencode(JSON.stringify(msg));
    }

    var compressRoute = 0;

    if (dict && dict[route]) {
      route = dict[route];
      compressRoute = 1;
    }

    return Message.encode(reqId, type, compressRoute, route, msg);
  }; //by wolfplus


  var byteDecode = starx.decode = function (data) {
    var msg = Message.decode(data);

    if (msg.id > 0) {
      msg.route = routeMap[msg.id];
      delete routeMap[msg.id];

      if (!msg.route) {
        return;
      }
    }

    msg.body = deByteCompose(msg);
    return msg;
  };

  var byteEncode = starx.encode = function (reqId, route, msg) {
    var type = reqId ? Message.TYPE_REQUEST : Message.TYPE_NOTIFY;

    if (decodeIO_encoder && decodeIO_encoder.lookup(route)) {
      var Builder = decodeIO_encoder.build(route);
      msg = new Builder(msg).encodeNB();
    } else {//msg = Protocol.strencode(JSON.stringify(msg));
    }

    var compressRoute = 0;

    if (dict && dict[route]) {
      route = dict[route];
      compressRoute = 1;
    }

    return Message.encode(reqId, type, compressRoute, route, msg);
  };

  var deByteCompose = function deByteCompose(msg) {
    var route = msg.route; //Decompose route from dict

    if (msg.compressRoute) {
      if (!abbrs[route]) {
        return {};
      }

      route = msg.route = abbrs[route];
    }

    if (decodeIO_decoder && decodeIO_decoder.lookup(route)) {
      return decodeIO_decoder.build(route).decode(msg.body);
    } else {
      return msg.body;
    }

    return msg;
  };

  var connect = function connect(params, url, cb) {
    console.log('connect to ' + url);
    var params = params || {};
    var maxReconnectAttempts = params.maxReconnectAttempts || DEFAULT_MAX_RECONNECT_ATTEMPTS;
    reconnectUrl = url;

    var onopen = function onopen(event) {
      if (!!reconnect) {
        starx.emit('reconnect');
      }

      reset();
      var obj = Package.encode(Package.TYPE_HANDSHAKE, Protocol.strencode(JSON.stringify(handshakeBuffer)));
      send(obj);
    };

    var onmessage = function onmessage(event) {
      processPackage(Package.decode(event.data), cb); // new package arrived, update the heartbeat timeout

      if (heartbeatTimeout) {
        nextHeartbeatTimeout = Date.now() + heartbeatTimeout;
      }
    };

    var onerror = function onerror(event) {
      starx.emit('io-error', event);
      console.error('socket error: ', event);
    };

    var onclose = function onclose(event) {
      starx.emit('close', event);
      starx.emit('disconnect', event);
      console.log('socket close: ', event);

      if (!!params.reconnect && reconnectAttempts < maxReconnectAttempts) {
        reconnect = true;
        reconnectAttempts++;
        reconncetTimer = setTimeout(function () {
          connect(params, reconnectUrl, cb);
        }, reconnectionDelay);
        reconnectionDelay *= 2;
      }
    };

    socket = new WebSocket(url);
    socket.binaryType = 'arraybuffer';
    socket.onopen = onopen;
    socket.onmessage = onmessage;
    socket.onerror = onerror;
    socket.onclose = onclose;
  };

  starx.disconnect = function () {
    if (socket) {
      if (socket.disconnect) socket.disconnect();
      if (socket.close) socket.close();
      console.log('disconnect');
      socket = null;
    }

    if (heartbeatId) {
      clearTimeout(heartbeatId);
      heartbeatId = null;
    }

    if (heartbeatTimeoutId) {
      clearTimeout(heartbeatTimeoutId);
      heartbeatTimeoutId = null;
    }
  };

  var reset = function reset() {
    reconnect = false;
    reconnectionDelay = 1000 * 5;
    reconnectAttempts = 0;
    clearTimeout(reconncetTimer);
  };

  starx.request = function (route, msg, cb) {
    if (arguments.length === 2 && typeof msg === 'function') {
      cb = msg;
      msg = {};
    } else {
      msg = msg || {};
    }

    route = route || msg.route;

    if (!route) {
      return;
    }

    reqId++;
    sendMessage(reqId, route, msg);
    callbacks[reqId] = cb;
    routeMap[reqId] = route;
  };

  starx.notify = function (route, msg) {
    msg = msg || {};
    sendMessage(0, route, msg);
  };

  var sendMessage = function sendMessage(reqId, route, msg) {
    if (useCrypto) {
      msg = JSON.stringify(msg);
      var sig = rsa.signString(msg, "sha256");
      msg = JSON.parse(msg);
      msg['__crypto__'] = sig;
    }

    if (encode) {
      msg = encode(reqId, route, msg);
    }

    var packet = Package.encode(Package.TYPE_DATA, msg);
    send(packet);
  };

  var send = function send(packet) {
    socket.send(packet.buffer);
  };

  var handler = {};

  var heartbeat = function heartbeat(data) {
    if (!heartbeatInterval) {
      // no heartbeat
      return;
    }

    var obj = Package.encode(Package.TYPE_HEARTBEAT);

    if (heartbeatTimeoutId) {
      clearTimeout(heartbeatTimeoutId);
      heartbeatTimeoutId = null;
    }

    if (heartbeatId) {
      // already in a heartbeat interval
      return;
    }

    heartbeatId = setTimeout(function () {
      heartbeatId = null;
      send(obj);
      nextHeartbeatTimeout = Date.now() + heartbeatTimeout;
      heartbeatTimeoutId = setTimeout(heartbeatTimeoutCb, heartbeatTimeout);
    }, heartbeatInterval);
  };

  var heartbeatTimeoutCb = function heartbeatTimeoutCb() {
    var gap = nextHeartbeatTimeout - Date.now();

    if (gap > gapThreshold) {
      heartbeatTimeoutId = setTimeout(heartbeatTimeoutCb, gap);
    } else {
      console.error('server heartbeat timeout');
      starx.emit('heartbeat timeout');
      starx.disconnect();
    }
  };

  var handshake = function handshake(data) {
    data = JSON.parse(Protocol.strdecode(data));

    if (data.code === RES_OLD_CLIENT) {
      starx.emit('error', 'client version not fullfill');
      return;
    }

    if (data.code !== RES_OK) {
      starx.emit('error', 'handshake fail');
      return;
    }

    handshakeInit(data);
    var obj = Package.encode(Package.TYPE_HANDSHAKE_ACK);
    send(obj);

    if (initCallback) {
      initCallback(socket);
    }
  };

  var onData = function onData(data) {
    var msg = data;

    if (decode) {
      msg = decode(msg);
    }

    processMessage(starx, msg);
  };

  var onKick = function onKick(data) {
    data = JSON.parse(Protocol.strdecode(data));
    starx.emit('onKick', data);
  };

  handlers[Package.TYPE_HANDSHAKE] = handshake;
  handlers[Package.TYPE_HEARTBEAT] = heartbeat;
  handlers[Package.TYPE_DATA] = onData;
  handlers[Package.TYPE_KICK] = onKick;

  var processPackage = function processPackage(msgs) {
    if (Array.isArray(msgs)) {
      for (var i = 0; i < msgs.length; i++) {
        var msg = msgs[i];
        handlers[msg.type](msg.body);
      }
    } else {
      handlers[msgs.type](msgs.body);
    }
  };

  var processMessage = function processMessage(starx, msg) {
    if (!msg.id) {
      // server push message
      starx.emit(msg.route, msg.body);
      return;
    } //if have a id then find the callback function with the request


    var cb = callbacks[msg.id];
    delete callbacks[msg.id];

    if (typeof cb !== 'function') {
      return;
    }

    cb(msg.body);
  };

  var processMessageBatch = function processMessageBatch(starx, msgs) {
    for (var i = 0, l = msgs.length; i < l; i++) {
      processMessage(starx, msgs[i]);
    }
  };

  var deCompose = function deCompose(msg) {
    var route = msg.route; //Decompose route from dict

    if (msg.compressRoute) {
      if (!abbrs[route]) {
        return {};
      }

      route = msg.route = abbrs[route];
    }

    if (decodeIO_decoder && decodeIO_decoder.lookup(route)) {
      return decodeIO_decoder.build(route).decode(msg.body);
    } else {
      return JSON.parse(Protocol.strdecode(msg.body));
    }

    return msg;
  };

  var handshakeInit = function handshakeInit(data) {
    if (data.sys && data.sys.heartbeat) {
      heartbeatInterval = data.sys.heartbeat * 1000; // heartbeat interval

      heartbeatTimeout = heartbeatInterval * 2; // max heartbeat timeout
    } else {
      heartbeatInterval = 0;
      heartbeatTimeout = 0;
    }

    initData(data);

    if (typeof handshakeCallback === 'function') {
      handshakeCallback(data.user);
    }
  }; //Initilize data used in starx client


  var initData = function initData(data) {
    if (!data || !data.sys) {
      return;
    }

    dict = data.sys.dict; //Init compress dict

    if (dict) {
      dict = dict;
      abbrs = {};

      for (var route in dict) {
        abbrs[dict[route]] = route;
      }
    }

    window.starx = starx;
  };
})();

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsaWJzXFxzdGFyeC13c2NsaWVudC5qcyJdLCJuYW1lcyI6WyJFbWl0dGVyIiwib2JqIiwibWl4aW4iLCJrZXkiLCJwcm90b3R5cGUiLCJvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImZuIiwiX2NhbGxiYWNrcyIsInB1c2giLCJvbmNlIiwic2VsZiIsIm9mZiIsImFwcGx5IiwiYXJndW1lbnRzIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibGVuZ3RoIiwiY2FsbGJhY2tzIiwiY2IiLCJpIiwic3BsaWNlIiwiZW1pdCIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJsZW4iLCJsaXN0ZW5lcnMiLCJoYXNMaXN0ZW5lcnMiLCJKU19XU19DTElFTlRfVFlQRSIsIkpTX1dTX0NMSUVOVF9WRVJTSU9OIiwiUHJvdG9jb2wiLCJ3aW5kb3ciLCJkZWNvZGVJT19lbmNvZGVyIiwiZGVjb2RlSU9fZGVjb2RlciIsIlBhY2thZ2UiLCJNZXNzYWdlIiwiRXZlbnRFbWl0dGVyIiwicnNhIiwic3lzIiwibG9jYWxTdG9yYWdlIiwiUkVTX09LIiwiUkVTX0ZBSUwiLCJSRVNfT0xEX0NMSUVOVCIsIk9iamVjdCIsImNyZWF0ZSIsIm8iLCJGIiwicm9vdCIsInN0YXJ4Iiwic29ja2V0IiwicmVxSWQiLCJoYW5kbGVycyIsInJvdXRlTWFwIiwiZGljdCIsImFiYnJzIiwiaGVhcnRiZWF0SW50ZXJ2YWwiLCJoZWFydGJlYXRUaW1lb3V0IiwibmV4dEhlYXJ0YmVhdFRpbWVvdXQiLCJnYXBUaHJlc2hvbGQiLCJoZWFydGJlYXRJZCIsImhlYXJ0YmVhdFRpbWVvdXRJZCIsImhhbmRzaGFrZUNhbGxiYWNrIiwiZGVjb2RlIiwiZW5jb2RlIiwicmVjb25uZWN0IiwicmVjb25uY2V0VGltZXIiLCJyZWNvbm5lY3RVcmwiLCJyZWNvbm5lY3RBdHRlbXB0cyIsInJlY29ubmVjdGlvbkRlbGF5IiwiREVGQVVMVF9NQVhfUkVDT05ORUNUX0FUVEVNUFRTIiwidXNlQ3J5cHRvIiwiaGFuZHNoYWtlQnVmZmVyIiwidHlwZSIsInZlcnNpb24iLCJpbml0Q2FsbGJhY2siLCJpbml0IiwicGFyYW1zIiwiaG9zdCIsInBvcnQiLCJwYXRoIiwiYnl0ZUVuY29kZSIsImJ5dGVEZWNvZGUiLCJ1cmwiLCJ1c2VyIiwiZW5jcnlwdCIsImdlbmVyYXRlIiwiZGF0YSIsInJzYV9uIiwibiIsInRvU3RyaW5nIiwicnNhX2UiLCJlIiwiY29ubmVjdCIsImRlZmF1bHREZWNvZGUiLCJtc2ciLCJpZCIsInJvdXRlIiwiYm9keSIsImRlQ29tcG9zZSIsImRlZmF1bHRFbmNvZGUiLCJUWVBFX1JFUVVFU1QiLCJUWVBFX05PVElGWSIsImxvb2t1cCIsIkJ1aWxkZXIiLCJidWlsZCIsImVuY29kZU5CIiwic3RyZW5jb2RlIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbXByZXNzUm91dGUiLCJkZUJ5dGVDb21wb3NlIiwiY29uc29sZSIsImxvZyIsIm1heFJlY29ubmVjdEF0dGVtcHRzIiwib25vcGVuIiwicmVzZXQiLCJUWVBFX0hBTkRTSEFLRSIsInNlbmQiLCJvbm1lc3NhZ2UiLCJwcm9jZXNzUGFja2FnZSIsIkRhdGUiLCJub3ciLCJvbmVycm9yIiwiZXJyb3IiLCJvbmNsb3NlIiwic2V0VGltZW91dCIsIldlYlNvY2tldCIsImJpbmFyeVR5cGUiLCJkaXNjb25uZWN0IiwiY2xvc2UiLCJjbGVhclRpbWVvdXQiLCJyZXF1ZXN0Iiwic2VuZE1lc3NhZ2UiLCJub3RpZnkiLCJzaWciLCJzaWduU3RyaW5nIiwicGFyc2UiLCJwYWNrZXQiLCJUWVBFX0RBVEEiLCJidWZmZXIiLCJoYW5kbGVyIiwiaGVhcnRiZWF0IiwiVFlQRV9IRUFSVEJFQVQiLCJoZWFydGJlYXRUaW1lb3V0Q2IiLCJnYXAiLCJoYW5kc2hha2UiLCJzdHJkZWNvZGUiLCJjb2RlIiwiaGFuZHNoYWtlSW5pdCIsIlRZUEVfSEFORFNIQUtFX0FDSyIsIm9uRGF0YSIsInByb2Nlc3NNZXNzYWdlIiwib25LaWNrIiwiVFlQRV9LSUNLIiwibXNncyIsIkFycmF5IiwiaXNBcnJheSIsInByb2Nlc3NNZXNzYWdlQmF0Y2giLCJsIiwiaW5pdERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQ0FBQyxZQUFXO0FBQ1YsV0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0I7QUFDcEIsUUFBSUEsR0FBSixFQUFTLE9BQU9DLEtBQUssQ0FBQ0QsR0FBRCxDQUFaO0FBQ1Y7QUFDQzs7Ozs7Ozs7O0FBUUYsV0FBU0MsS0FBVCxDQUFlRCxHQUFmLEVBQW9CO0FBQ2xCLFNBQUssSUFBSUUsR0FBVCxJQUFnQkgsT0FBTyxDQUFDSSxTQUF4QixFQUFtQztBQUNqQ0gsTUFBQUEsR0FBRyxDQUFDRSxHQUFELENBQUgsR0FBV0gsT0FBTyxDQUFDSSxTQUFSLENBQWtCRCxHQUFsQixDQUFYO0FBQ0Q7O0FBQ0QsV0FBT0YsR0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7QUFTQUQsRUFBQUEsT0FBTyxDQUFDSSxTQUFSLENBQWtCQyxFQUFsQixHQUNBTCxPQUFPLENBQUNJLFNBQVIsQ0FBa0JFLGdCQUFsQixHQUFxQyxVQUFTQyxLQUFULEVBQWdCQyxFQUFoQixFQUFtQjtBQUN0RCxTQUFLQyxVQUFMLEdBQWtCLEtBQUtBLFVBQUwsSUFBbUIsRUFBckM7QUFDQSxLQUFDLEtBQUtBLFVBQUwsQ0FBZ0JGLEtBQWhCLElBQXlCLEtBQUtFLFVBQUwsQ0FBZ0JGLEtBQWhCLEtBQTBCLEVBQXBELEVBQ0dHLElBREgsQ0FDUUYsRUFEUjtBQUVBLFdBQU8sSUFBUDtBQUNELEdBTkQ7QUFRQTs7Ozs7Ozs7Ozs7QUFVQVIsRUFBQUEsT0FBTyxDQUFDSSxTQUFSLENBQWtCTyxJQUFsQixHQUF5QixVQUFTSixLQUFULEVBQWdCQyxFQUFoQixFQUFtQjtBQUMxQyxRQUFJSSxJQUFJLEdBQUcsSUFBWDtBQUNBLFNBQUtILFVBQUwsR0FBa0IsS0FBS0EsVUFBTCxJQUFtQixFQUFyQzs7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QixFQUFtQztBQUNqQ3RGLE1BQUFBLGlCQUFpQixHQUFHK0IsSUFBSSxDQUFDaEQsR0FBTCxDQUFTdUcsU0FBVCxHQUFxQixJQUF6QyxDQURpQyxDQUNnQjs7QUFDakRyRixNQUFBQSxnQkFBZ0IsR0FBR0QsaUJBQWlCLEdBQUcsQ0FBdkMsQ0FGaUMsQ0FFZ0I7QUFDbEQsS0FIRCxNQUdPO0FBQ0xBLE1BQUFBLGlCQUFpQixHQUFHLENBQXBCO0FBQ0FDLE1BQUFBLGdCQUFnQixHQUFHLENBQW5CO0FBQ0Q7O0FBRUR1RyxJQUFBQSxRQUFRLENBQUN6RSxJQUFELENBQVI7O0FBRUEsUUFBRyxPQUFPekIsaUJBQVAsS0FBNkIsVUFBaEMsRUFBNEM7QUFDMUNBLE1BQUFBLGlCQUFpQixDQUFDeUIsSUFBSSxDQUFDSCxJQUFOLENBQWpCO0FBQ0Q7QUFDRixHQWRELENBamxCVSxDQWltQlY7OztBQUNBLE1BQUk0RSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFTekUsSUFBVCxFQUFlO0FBQzVCLFFBQUcsQ0FBQ0EsSUFBRCxJQUFTLENBQUNBLElBQUksQ0FBQ2hELEdBQWxCLEVBQXVCO0FBQ3JCO0FBQ0Q7O0FBQ0RlLElBQUFBLElBQUksR0FBR2lDLElBQUksQ0FBQ2hELEdBQUwsQ0FBU2UsSUFBaEIsQ0FKNEIsQ0FNNUI7O0FBQ0EsUUFBR0EsSUFBSCxFQUFTO0FBQ1BBLE1BQUFBLElBQUksR0FBR0EsSUFBUDtBQUNBQyxNQUFBQSxLQUFLLEdBQUcsRUFBUjs7QUFFQSxXQUFJLElBQUkwQyxLQUFSLElBQWlCM0MsSUFBakIsRUFBdUI7QUFDckJDLFFBQUFBLEtBQUssQ0FBQ0QsSUFBSSxDQUFDMkMsS0FBRCxDQUFMLENBQUwsR0FBcUJBLEtBQXJCO0FBQ0Q7QUFDRjs7QUFFRGpFLElBQUFBLE1BQU0sQ0FBQ2lCLEtBQVAsR0FBZUEsS0FBZjtBQUNELEdBakJEO0FBaUJFLENBbm5CSiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xyXG4gIGZ1bmN0aW9uIEVtaXR0ZXIob2JqKSB7XHJcbiAgICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqKTtcclxuICB9XHJcbiAgICAvKipcclxuICAgKiBNaXhpbiB0aGUgZW1pdHRlciBwcm9wZXJ0aWVzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IG9ialxyXG4gICAqIEByZXR1cm4ge09iamVjdH1cclxuICAgKiBAZ2F0ZXdheSBwcml2YXRlXHJcbiAgICovXHJcblxyXG4gIGZ1bmN0aW9uIG1peGluKG9iaikge1xyXG4gICAgZm9yICh2YXIga2V5IGluIEVtaXR0ZXIucHJvdG90eXBlKSB7XHJcbiAgICAgIG9ialtrZXldID0gRW1pdHRlci5wcm90b3R5cGVba2V5XTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYmo7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMaXN0ZW4gb24gdGhlIGdpdmVuIGBldmVudGAgd2l0aCBgZm5gLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICAgKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gICAqIEBnYXRld2F5IHB1YmxpY1xyXG4gICAqL1xyXG5cclxuICBFbWl0dGVyLnByb3RvdHlwZS5vbiA9XHJcbiAgRW1pdHRlci5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XHJcbiAgICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcbiAgICAodGhpcy5fY2FsbGJhY2tzW2V2ZW50XSA9IHRoaXMuX2NhbGxiYWNrc1tldmVudF0gfHwgW10pXHJcbiAgICAgIC5wdXNoKGZuKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgYW4gYGV2ZW50YCBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgaW52b2tlZCBhIHNpbmdsZVxyXG4gICAqIHRpbWUgdGhlbiBhdXRvbWF0aWNhbGx5IHJlbW92ZWQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gICAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAgICogQGdhdGV3YXkgcHVibGljXHJcbiAgICovXHJcblxyXG4gIEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uKCkge1xyXG4gICAgICBzZWxmLm9mZihldmVudCwgb24pO1xyXG4gICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uLmZuID0gZm47XHJcbiAgICB0aGlzLm9uKGV2ZW50LCBvbik7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxyXG4gICAqIHJlZ2lzdGVyZWQgY2FsbGJhY2tzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICAgKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gICAqIEBnYXRld2F5IHB1YmxpY1xyXG4gICAqL1xyXG5cclxuICBFbWl0dGVyLnByb3RvdHlwZS5vZmYgPVxyXG4gIEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cclxuICBFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxyXG4gIEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gICAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG5cclxuICAgIC8vIGFsbFxyXG4gICAgaWYgKDAgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3BlY2lmaWMgZXZlbnRcclxuICAgIHZhciBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xyXG4gICAgaWYgKCFjYWxsYmFja3MpIHJldHVybiB0aGlzO1xyXG5cclxuICAgIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcclxuICAgIGlmICgxID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tldmVudF07XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlbW92ZSBzcGVjaWZpYyBjb21wb25lbnRcclxuICAgIHZhciBjYjtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNiID0gY2FsbGJhY2tzW2ldO1xyXG4gICAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xyXG4gICAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXQgYGV2ZW50YCB3aXRoIHRoZSBnaXZlbiBhcmdzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAgICogQHBhcmFtIHtNaXhlZH0gLi4uXHJcbiAgICogQHJldHVybiB7RW1pdHRlcn1cclxuICAgKi9cclxuXHJcbiAgRW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXHJcbiAgICAgICwgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcclxuXHJcbiAgICBpZiAoY2FsbGJhY2tzKSB7XHJcbiAgICAgIGNhbGxiYWNrcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcclxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICAgIGNhbGxiYWNrc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybiBhcnJheSBvZiBjYWxsYmFja3MgZm9yIGBldmVudGAuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICAgKiBAcmV0dXJuIHtBcnJheX1cclxuICAgKiBAZ2F0ZXdheSBwdWJsaWNcclxuICAgKi9cclxuXHJcbiAgRW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG4gICAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrc1tldmVudF0gfHwgW107XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgdGhpcyBlbWl0dGVyIGhhcyBgZXZlbnRgIGhhbmRsZXJzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cclxuICAgKiBAZ2F0ZXdheSBwdWJsaWNcclxuICAgKi9cclxuXHJcbiAgRW1pdHRlci5wcm90b3R5cGUuaGFzTGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgcmV0dXJuICEhIHRoaXMubGlzdGVuZXJzKGV2ZW50KS5sZW5ndGg7XHJcbiAgfTtcclxuICB2YXIgSlNfV1NfQ0xJRU5UX1RZUEUgPSAnanMtd2Vic29ja2V0JztcclxuICB2YXIgSlNfV1NfQ0xJRU5UX1ZFUlNJT04gPSAnMC4wLjEnO1xyXG5cclxuICB2YXIgUHJvdG9jb2wgPSB3aW5kb3cuUHJvdG9jb2w7XHJcbiAgdmFyIGRlY29kZUlPX2VuY29kZXIgPSBudWxsO1xyXG4gIHZhciBkZWNvZGVJT19kZWNvZGVyID0gbnVsbDtcclxuICB2YXIgUGFja2FnZSA9IFByb3RvY29sLlBhY2thZ2U7XHJcbiAgdmFyIE1lc3NhZ2UgPSBQcm90b2NvbC5NZXNzYWdlO1xyXG4gIHZhciBFdmVudEVtaXR0ZXIgPSBFbWl0dGVyO1xyXG4gIHZhciByc2EgPSB3aW5kb3cucnNhO1xyXG5cclxuICBpZih0eXBlb2Yod2luZG93KSAhPSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZihzeXMpICE9ICd1bmRlZmluZWQnICYmIHN5cy5sb2NhbFN0b3JhZ2UpIHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UgPSBzeXMubG9jYWxTdG9yYWdlO1xyXG4gIH1cclxuXHJcbiAgdmFyIFJFU19PSyA9IDIwMDtcclxuICB2YXIgUkVTX0ZBSUwgPSA1MDA7XHJcbiAgdmFyIFJFU19PTERfQ0xJRU5UID0gNTAxO1xyXG5cclxuICBpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgIT09ICdmdW5jdGlvbicpIHtcclxuICAgIE9iamVjdC5jcmVhdGUgPSBmdW5jdGlvbiAobykge1xyXG4gICAgICBmdW5jdGlvbiBGKCkge31cclxuICAgICAgRi5wcm90b3R5cGUgPSBvO1xyXG4gICAgICByZXR1cm4gbmV3IEYoKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB2YXIgcm9vdCA9IHdpbmRvdztcclxuICB2YXIgc3RhcnggPSBPYmplY3QuY3JlYXRlKEV2ZW50RW1pdHRlci5wcm90b3R5cGUpOyAvLyBvYmplY3QgZXh0ZW5kIGZyb20gb2JqZWN0XHJcbiAgcm9vdC5zdGFyeCA9IHN0YXJ4O1xyXG4gIHZhciBzb2NrZXQgPSBudWxsO1xyXG4gIHZhciByZXFJZCA9IDA7XHJcbiAgdmFyIGNhbGxiYWNrcyA9IHt9O1xyXG4gIHZhciBoYW5kbGVycyA9IHt9O1xyXG4gIC8vTWFwIGZyb20gcmVxdWVzdCBpZCB0byByb3V0ZVxyXG4gIHZhciByb3V0ZU1hcCA9IHt9O1xyXG4gIHZhciBkaWN0ID0ge307ICAgIC8vIHJvdXRlIHN0cmluZyB0byBjb2RlXHJcbiAgdmFyIGFiYnJzID0ge307ICAgLy8gY29kZSB0byByb3V0ZSBzdHJpbmdcclxuXHJcbiAgdmFyIGhlYXJ0YmVhdEludGVydmFsID0gMDtcclxuICB2YXIgaGVhcnRiZWF0VGltZW91dCA9IDA7XHJcbiAgdmFyIG5leHRIZWFydGJlYXRUaW1lb3V0ID0gMDtcclxuICB2YXIgZ2FwVGhyZXNob2xkID0gMTAwOyAgIC8vIGhlYXJ0YmVhdCBnYXAgdGhyZWFzaG9sZFxyXG4gIHZhciBoZWFydGJlYXRJZCA9IG51bGw7XHJcbiAgdmFyIGhlYXJ0YmVhdFRpbWVvdXRJZCA9IG51bGw7XHJcbiAgdmFyIGhhbmRzaGFrZUNhbGxiYWNrID0gbnVsbDtcclxuXHJcbiAgdmFyIGRlY29kZSA9IG51bGw7XHJcbiAgdmFyIGVuY29kZSA9IG51bGw7XHJcblxyXG4gIHZhciByZWNvbm5lY3QgPSBmYWxzZTtcclxuICB2YXIgcmVjb25uY2V0VGltZXIgPSBudWxsO1xyXG4gIHZhciByZWNvbm5lY3RVcmwgPSBudWxsO1xyXG4gIHZhciByZWNvbm5lY3RBdHRlbXB0cyA9IDA7XHJcbiAgdmFyIHJlY29ubmVjdGlvbkRlbGF5ID0gNTAwMDtcclxuICB2YXIgREVGQVVMVF9NQVhfUkVDT05ORUNUX0FUVEVNUFRTID0gMTA7XHJcblxyXG4gIHZhciB1c2VDcnlwdG87XHJcblxyXG4gIHZhciBoYW5kc2hha2VCdWZmZXIgPSB7XHJcbiAgICAnc3lzJzoge1xyXG4gICAgICB0eXBlOiBKU19XU19DTElFTlRfVFlQRSxcclxuICAgICAgdmVyc2lvbjogSlNfV1NfQ0xJRU5UX1ZFUlNJT04sXHJcbiAgICAgIHJzYToge31cclxuICAgIH0sXHJcbiAgICAndXNlcic6IHtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB2YXIgaW5pdENhbGxiYWNrID0gbnVsbDtcclxuXHJcbiAgc3RhcnguaW5pdCA9IGZ1bmN0aW9uKHBhcmFtcywgY2IpIHtcclxuICAgIGluaXRDYWxsYmFjayA9IGNiO1xyXG4gICAgdmFyIGhvc3QgPSBwYXJhbXMuaG9zdDtcclxuICAgIHZhciBwb3J0ID0gcGFyYW1zLnBvcnQ7XHJcbiAgICB2YXIgcGF0aCA9IHBhcmFtcy5wYXRoO1xyXG5cclxuICAgIC8vIGVuY29kZSA9IHBhcmFtcy5lbmNvZGUgfHwgZGVmYXVsdEVuY29kZTtcclxuICAgIC8vIGRlY29kZSA9IHBhcmFtcy5kZWNvZGUgfHwgZGVmYXVsdERlY29kZTtcclxuICAgIGVuY29kZSA9IHBhcmFtcy5lbmNvZGUgfHwgYnl0ZUVuY29kZTtcclxuICAgIGRlY29kZSA9IHBhcmFtcy5kZWNvZGUgfHwgYnl0ZURlY29kZTtcclxuICAgIHZhciB1cmwgPSAnd3M6Ly8nICsgaG9zdDtcclxuICAgIGlmKHBvcnQpIHtcclxuICAgICAgdXJsICs9ICAnOicgKyBwb3J0O1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHBhdGgpIHtcclxuICAgICAgdXJsICs9IHBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZHNoYWtlQnVmZmVyLnVzZXIgPSBwYXJhbXMudXNlcjtcclxuICAgIGlmKHBhcmFtcy5lbmNyeXB0KSB7XHJcbiAgICAgIHVzZUNyeXB0byA9IHRydWU7XHJcbiAgICAgIHJzYS5nZW5lcmF0ZSgxMDI0LCBcIjEwMDAxXCIpO1xyXG4gICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICByc2FfbjogcnNhLm4udG9TdHJpbmcoMTYpLFxyXG4gICAgICAgIHJzYV9lOiByc2EuZVxyXG4gICAgICB9O1xyXG4gICAgICBoYW5kc2hha2VCdWZmZXIuc3lzLnJzYSA9IGRhdGE7XHJcbiAgICB9XHJcbiAgICBoYW5kc2hha2VDYWxsYmFjayA9IHBhcmFtcy5oYW5kc2hha2VDYWxsYmFjaztcclxuICAgIGNvbm5lY3QocGFyYW1zLCB1cmwsIGNiKTtcclxuICB9O1xyXG5cclxuICB2YXIgZGVmYXVsdERlY29kZSA9IHN0YXJ4LmRlY29kZSA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgIHZhciBtc2cgPSBNZXNzYWdlLmRlY29kZShkYXRhKTtcclxuXHJcbiAgICBpZihtc2cuaWQgPiAwKXtcclxuICAgICAgbXNnLnJvdXRlID0gcm91dGVNYXBbbXNnLmlkXTtcclxuICAgICAgZGVsZXRlIHJvdXRlTWFwW21zZy5pZF07XHJcbiAgICAgIGlmKCFtc2cucm91dGUpe1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1zZy5ib2R5ID0gZGVDb21wb3NlKG1zZyk7XHJcbiAgICByZXR1cm4gbXNnO1xyXG4gIH07XHJcblxyXG4gIHZhciBkZWZhdWx0RW5jb2RlID0gc3RhcnguZW5jb2RlID0gZnVuY3Rpb24ocmVxSWQsIHJvdXRlLCBtc2cpIHtcclxuICAgIHZhciB0eXBlID0gcmVxSWQgPyBNZXNzYWdlLlRZUEVfUkVRVUVTVCA6IE1lc3NhZ2UuVFlQRV9OT1RJRlk7XHJcblxyXG4gICAgaWYoZGVjb2RlSU9fZW5jb2RlciAmJiBkZWNvZGVJT19lbmNvZGVyLmxvb2t1cChyb3V0ZSkpIHtcclxuICAgICAgdmFyIEJ1aWxkZXIgPSBkZWNvZGVJT19lbmNvZGVyLmJ1aWxkKHJvdXRlKTtcclxuICAgICAgbXNnID0gbmV3IEJ1aWxkZXIobXNnKS5lbmNvZGVOQigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbXNnID0gUHJvdG9jb2wuc3RyZW5jb2RlKEpTT04uc3RyaW5naWZ5KG1zZykpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjb21wcmVzc1JvdXRlID0gMDtcclxuICAgIGlmKGRpY3QgJiYgZGljdFtyb3V0ZV0pIHtcclxuICAgICAgcm91dGUgPSBkaWN0W3JvdXRlXTtcclxuICAgICAgY29tcHJlc3NSb3V0ZSA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE1lc3NhZ2UuZW5jb2RlKHJlcUlkLCB0eXBlLCBjb21wcmVzc1JvdXRlLCByb3V0ZSwgbXNnKTtcclxuICB9O1xyXG5cclxuICAvL2J5IHdvbGZwbHVzXHJcbiAgdmFyIGJ5dGVEZWNvZGUgPSBzdGFyeC5kZWNvZGUgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICB2YXIgbXNnID0gTWVzc2FnZS5kZWNvZGUoZGF0YSk7XHJcblxyXG4gICAgaWYobXNnLmlkID4gMCl7XHJcbiAgICAgIG1zZy5yb3V0ZSA9IHJvdXRlTWFwW21zZy5pZF07XHJcbiAgICAgIGRlbGV0ZSByb3V0ZU1hcFttc2cuaWRdO1xyXG4gICAgICBpZighbXNnLnJvdXRlKXtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtc2cuYm9keSA9IGRlQnl0ZUNvbXBvc2UobXNnKTtcclxuICAgIHJldHVybiBtc2c7XHJcbiAgfTtcclxuICB2YXIgYnl0ZUVuY29kZSA9IHN0YXJ4LmVuY29kZSA9IGZ1bmN0aW9uKHJlcUlkLCByb3V0ZSwgbXNnKSB7XHJcbiAgICB2YXIgdHlwZSA9IHJlcUlkID8gTWVzc2FnZS5UWVBFX1JFUVVFU1QgOiBNZXNzYWdlLlRZUEVfTk9USUZZO1xyXG5cclxuICAgIGlmKGRlY29kZUlPX2VuY29kZXIgJiYgZGVjb2RlSU9fZW5jb2Rlci5sb29rdXAocm91dGUpKSB7XHJcbiAgICAgIHZhciBCdWlsZGVyID0gZGVjb2RlSU9fZW5jb2Rlci5idWlsZChyb3V0ZSk7XHJcbiAgICAgIG1zZyA9IG5ldyBCdWlsZGVyKG1zZykuZW5jb2RlTkIoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vbXNnID0gUHJvdG9jb2wuc3RyZW5jb2RlKEpTT04uc3RyaW5naWZ5KG1zZykpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjb21wcmVzc1JvdXRlID0gMDtcclxuICAgIGlmKGRpY3QgJiYgZGljdFtyb3V0ZV0pIHtcclxuICAgICAgcm91dGUgPSBkaWN0W3JvdXRlXTtcclxuICAgICAgY29tcHJlc3NSb3V0ZSA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE1lc3NhZ2UuZW5jb2RlKHJlcUlkLCB0eXBlLCBjb21wcmVzc1JvdXRlLCByb3V0ZSwgbXNnKTtcclxuICB9O1xyXG4gIHZhciBkZUJ5dGVDb21wb3NlID0gZnVuY3Rpb24obXNnKSB7XHJcbiAgICB2YXIgcm91dGUgPSBtc2cucm91dGU7XHJcblxyXG4gICAgLy9EZWNvbXBvc2Ugcm91dGUgZnJvbSBkaWN0XHJcbiAgICBpZihtc2cuY29tcHJlc3NSb3V0ZSkge1xyXG4gICAgICBpZighYWJicnNbcm91dGVdKXtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJvdXRlID0gbXNnLnJvdXRlID0gYWJicnNbcm91dGVdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGRlY29kZUlPX2RlY29kZXIgJiYgZGVjb2RlSU9fZGVjb2Rlci5sb29rdXAocm91dGUpKSB7XHJcbiAgICAgIHJldHVybiBkZWNvZGVJT19kZWNvZGVyLmJ1aWxkKHJvdXRlKS5kZWNvZGUobXNnLmJvZHkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG1zZy5ib2R5O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBtc2c7XHJcbiAgfTtcclxuXHJcbiAgdmFyIGNvbm5lY3QgPSBmdW5jdGlvbihwYXJhbXMsIHVybCwgY2IpIHtcclxuICAgIGNvbnNvbGUubG9nKCdjb25uZWN0IHRvICcgKyB1cmwpO1xyXG5cclxuICAgIHZhciBwYXJhbXMgPSBwYXJhbXMgfHwge307XHJcbiAgICB2YXIgbWF4UmVjb25uZWN0QXR0ZW1wdHMgPSBwYXJhbXMubWF4UmVjb25uZWN0QXR0ZW1wdHMgfHwgREVGQVVMVF9NQVhfUkVDT05ORUNUX0FUVEVNUFRTO1xyXG4gICAgcmVjb25uZWN0VXJsID0gdXJsO1xyXG5cclxuICAgIHZhciBvbm9wZW4gPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICBpZighIXJlY29ubmVjdCkge1xyXG4gICAgICAgIHN0YXJ4LmVtaXQoJ3JlY29ubmVjdCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJlc2V0KCk7XHJcbiAgICAgIHZhciBvYmogPSBQYWNrYWdlLmVuY29kZShQYWNrYWdlLlRZUEVfSEFORFNIQUtFLCBQcm90b2NvbC5zdHJlbmNvZGUoSlNPTi5zdHJpbmdpZnkoaGFuZHNoYWtlQnVmZmVyKSkpO1xyXG4gICAgICBzZW5kKG9iaik7XHJcbiAgICB9O1xyXG4gICAgdmFyIG9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgIHByb2Nlc3NQYWNrYWdlKFBhY2thZ2UuZGVjb2RlKGV2ZW50LmRhdGEpLCBjYik7XHJcbiAgICAgIC8vIG5ldyBwYWNrYWdlIGFycml2ZWQsIHVwZGF0ZSB0aGUgaGVhcnRiZWF0IHRpbWVvdXRcclxuICAgICAgaWYoaGVhcnRiZWF0VGltZW91dCkge1xyXG4gICAgICAgIG5leHRIZWFydGJlYXRUaW1lb3V0ID0gRGF0ZS5ub3coKSArIGhlYXJ0YmVhdFRpbWVvdXQ7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB2YXIgb25lcnJvciA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgIHN0YXJ4LmVtaXQoJ2lvLWVycm9yJywgZXZlbnQpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdzb2NrZXQgZXJyb3I6ICcsIGV2ZW50KTtcclxuICAgIH07XHJcbiAgICB2YXIgb25jbG9zZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgIHN0YXJ4LmVtaXQoJ2Nsb3NlJyxldmVudCk7XHJcbiAgICAgIHN0YXJ4LmVtaXQoJ2Rpc2Nvbm5lY3QnLCBldmVudCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzb2NrZXQgY2xvc2U6ICcsIGV2ZW50KTtcclxuICAgICAgaWYoISFwYXJhbXMucmVjb25uZWN0ICYmIHJlY29ubmVjdEF0dGVtcHRzIDwgbWF4UmVjb25uZWN0QXR0ZW1wdHMpIHtcclxuICAgICAgICByZWNvbm5lY3QgPSB0cnVlO1xyXG4gICAgICAgIHJlY29ubmVjdEF0dGVtcHRzKys7XHJcbiAgICAgICAgcmVjb25uY2V0VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgY29ubmVjdChwYXJhbXMsIHJlY29ubmVjdFVybCwgY2IpO1xyXG4gICAgICAgIH0sIHJlY29ubmVjdGlvbkRlbGF5KTtcclxuICAgICAgICByZWNvbm5lY3Rpb25EZWxheSAqPSAyO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgc29ja2V0ID0gbmV3IFdlYlNvY2tldCh1cmwpO1xyXG4gICAgc29ja2V0LmJpbmFyeVR5cGUgPSAnYXJyYXlidWZmZXInO1xyXG4gICAgc29ja2V0Lm9ub3BlbiA9IG9ub3BlbjtcclxuICAgIHNvY2tldC5vbm1lc3NhZ2UgPSBvbm1lc3NhZ2U7XHJcbiAgICBzb2NrZXQub25lcnJvciA9IG9uZXJyb3I7XHJcbiAgICBzb2NrZXQub25jbG9zZSA9IG9uY2xvc2U7XHJcbiAgfTtcclxuXHJcbiAgc3RhcnguZGlzY29ubmVjdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYoc29ja2V0KSB7XHJcbiAgICAgIGlmKHNvY2tldC5kaXNjb25uZWN0KSBzb2NrZXQuZGlzY29ubmVjdCgpO1xyXG4gICAgICBpZihzb2NrZXQuY2xvc2UpIHNvY2tldC5jbG9zZSgpO1xyXG4gICAgICBjb25zb2xlLmxvZygnZGlzY29ubmVjdCcpO1xyXG4gICAgICBzb2NrZXQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGhlYXJ0YmVhdElkKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dChoZWFydGJlYXRJZCk7XHJcbiAgICAgIGhlYXJ0YmVhdElkID0gbnVsbDtcclxuICAgIH1cclxuICAgIGlmKGhlYXJ0YmVhdFRpbWVvdXRJZCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQoaGVhcnRiZWF0VGltZW91dElkKTtcclxuICAgICAgaGVhcnRiZWF0VGltZW91dElkID0gbnVsbDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB2YXIgcmVzZXQgPSBmdW5jdGlvbigpIHtcclxuICAgIHJlY29ubmVjdCA9IGZhbHNlO1xyXG4gICAgcmVjb25uZWN0aW9uRGVsYXkgPSAxMDAwICogNTtcclxuICAgIHJlY29ubmVjdEF0dGVtcHRzID0gMDtcclxuICAgIGNsZWFyVGltZW91dChyZWNvbm5jZXRUaW1lcik7XHJcbiAgfTtcclxuXHJcbiAgc3RhcngucmVxdWVzdCA9IGZ1bmN0aW9uKHJvdXRlLCBtc2csIGNiKSB7XHJcbiAgICBpZihhcmd1bWVudHMubGVuZ3RoID09PSAyICYmIHR5cGVvZiBtc2cgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgY2IgPSBtc2c7XHJcbiAgICAgIG1zZyA9IHt9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbXNnID0gbXNnIHx8IHt9O1xyXG4gICAgfVxyXG4gICAgcm91dGUgPSByb3V0ZSB8fCBtc2cucm91dGU7XHJcbiAgICBpZighcm91dGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcUlkKys7XHJcbiAgICBzZW5kTWVzc2FnZShyZXFJZCwgcm91dGUsIG1zZyk7XHJcblxyXG4gICAgY2FsbGJhY2tzW3JlcUlkXSA9IGNiO1xyXG4gICAgcm91dGVNYXBbcmVxSWRdID0gcm91dGU7XHJcbiAgfTtcclxuXHJcbiAgc3Rhcngubm90aWZ5ID0gZnVuY3Rpb24ocm91dGUsIG1zZykge1xyXG4gICAgbXNnID0gbXNnIHx8IHt9O1xyXG4gICAgc2VuZE1lc3NhZ2UoMCwgcm91dGUsIG1zZyk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIHNlbmRNZXNzYWdlID0gZnVuY3Rpb24ocmVxSWQsIHJvdXRlLCBtc2cpIHtcclxuICAgIGlmKHVzZUNyeXB0bykge1xyXG4gICAgICBtc2cgPSBKU09OLnN0cmluZ2lmeShtc2cpO1xyXG4gICAgICB2YXIgc2lnID0gcnNhLnNpZ25TdHJpbmcobXNnLCBcInNoYTI1NlwiKTtcclxuICAgICAgbXNnID0gSlNPTi5wYXJzZShtc2cpO1xyXG4gICAgICBtc2dbJ19fY3J5cHRvX18nXSA9IHNpZztcclxuICAgIH1cclxuXHJcbiAgICBpZihlbmNvZGUpIHtcclxuICAgICAgbXNnID0gZW5jb2RlKHJlcUlkLCByb3V0ZSwgbXNnKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcGFja2V0ID0gUGFja2FnZS5lbmNvZGUoUGFja2FnZS5UWVBFX0RBVEEsIG1zZyk7XHJcbiAgICBzZW5kKHBhY2tldCk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIHNlbmQgPSBmdW5jdGlvbihwYWNrZXQpIHtcclxuICAgIHNvY2tldC5zZW5kKHBhY2tldC5idWZmZXIpO1xyXG4gIH07XHJcblxyXG4gIHZhciBoYW5kbGVyID0ge307XHJcblxyXG4gIHZhciBoZWFydGJlYXQgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICBpZighaGVhcnRiZWF0SW50ZXJ2YWwpIHtcclxuICAgICAgLy8gbm8gaGVhcnRiZWF0XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgb2JqID0gUGFja2FnZS5lbmNvZGUoUGFja2FnZS5UWVBFX0hFQVJUQkVBVCk7XHJcbiAgICBpZihoZWFydGJlYXRUaW1lb3V0SWQpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KGhlYXJ0YmVhdFRpbWVvdXRJZCk7XHJcbiAgICAgIGhlYXJ0YmVhdFRpbWVvdXRJZCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoaGVhcnRiZWF0SWQpIHtcclxuICAgICAgLy8gYWxyZWFkeSBpbiBhIGhlYXJ0YmVhdCBpbnRlcnZhbFxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBoZWFydGJlYXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIGhlYXJ0YmVhdElkID0gbnVsbDtcclxuICAgICAgc2VuZChvYmopO1xyXG5cclxuICAgICAgbmV4dEhlYXJ0YmVhdFRpbWVvdXQgPSBEYXRlLm5vdygpICsgaGVhcnRiZWF0VGltZW91dDtcclxuICAgICAgaGVhcnRiZWF0VGltZW91dElkID0gc2V0VGltZW91dChoZWFydGJlYXRUaW1lb3V0Q2IsIGhlYXJ0YmVhdFRpbWVvdXQpO1xyXG4gICAgfSwgaGVhcnRiZWF0SW50ZXJ2YWwpO1xyXG4gIH07XHJcblxyXG4gIHZhciBoZWFydGJlYXRUaW1lb3V0Q2IgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBnYXAgPSBuZXh0SGVhcnRiZWF0VGltZW91dCAtIERhdGUubm93KCk7XHJcbiAgICBpZihnYXAgPiBnYXBUaHJlc2hvbGQpIHtcclxuICAgICAgaGVhcnRiZWF0VGltZW91dElkID0gc2V0VGltZW91dChoZWFydGJlYXRUaW1lb3V0Q2IsIGdhcCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdzZXJ2ZXIgaGVhcnRiZWF0IHRpbWVvdXQnKTtcclxuICAgICAgc3RhcnguZW1pdCgnaGVhcnRiZWF0IHRpbWVvdXQnKTtcclxuICAgICAgc3RhcnguZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHZhciBoYW5kc2hha2UgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICBkYXRhID0gSlNPTi5wYXJzZShQcm90b2NvbC5zdHJkZWNvZGUoZGF0YSkpO1xyXG4gICAgaWYoZGF0YS5jb2RlID09PSBSRVNfT0xEX0NMSUVOVCkge1xyXG4gICAgICBzdGFyeC5lbWl0KCdlcnJvcicsICdjbGllbnQgdmVyc2lvbiBub3QgZnVsbGZpbGwnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGRhdGEuY29kZSAhPT0gUkVTX09LKSB7XHJcbiAgICAgIHN0YXJ4LmVtaXQoJ2Vycm9yJywgJ2hhbmRzaGFrZSBmYWlsJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kc2hha2VJbml0KGRhdGEpO1xyXG5cclxuICAgIHZhciBvYmogPSBQYWNrYWdlLmVuY29kZShQYWNrYWdlLlRZUEVfSEFORFNIQUtFX0FDSyk7XHJcbiAgICBzZW5kKG9iaik7XHJcbiAgICBpZihpbml0Q2FsbGJhY2spIHtcclxuICAgICAgaW5pdENhbGxiYWNrKHNvY2tldCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdmFyIG9uRGF0YSA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgIHZhciBtc2cgPSBkYXRhO1xyXG4gICAgaWYoZGVjb2RlKSB7XHJcbiAgICAgIG1zZyA9IGRlY29kZShtc2cpO1xyXG4gICAgfVxyXG4gICAgcHJvY2Vzc01lc3NhZ2Uoc3RhcngsIG1zZyk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIG9uS2ljayA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgIGRhdGEgPSBKU09OLnBhcnNlKFByb3RvY29sLnN0cmRlY29kZShkYXRhKSk7XHJcbiAgICBzdGFyeC5lbWl0KCdvbktpY2snLCBkYXRhKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVyc1tQYWNrYWdlLlRZUEVfSEFORFNIQUtFXSA9IGhhbmRzaGFrZTtcclxuICBoYW5kbGVyc1tQYWNrYWdlLlRZUEVfSEVBUlRCRUFUXSA9IGhlYXJ0YmVhdDtcclxuICBoYW5kbGVyc1tQYWNrYWdlLlRZUEVfREFUQV0gPSBvbkRhdGE7XHJcbiAgaGFuZGxlcnNbUGFja2FnZS5UWVBFX0tJQ0tdID0gb25LaWNrO1xyXG5cclxuICB2YXIgcHJvY2Vzc1BhY2thZ2UgPSBmdW5jdGlvbihtc2dzKSB7XHJcbiAgICBpZihBcnJheS5pc0FycmF5KG1zZ3MpKSB7XHJcbiAgICAgIGZvcih2YXIgaT0wOyBpPG1zZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgbXNnID0gbXNnc1tpXTtcclxuICAgICAgICBoYW5kbGVyc1ttc2cudHlwZV0obXNnLmJvZHkpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoYW5kbGVyc1ttc2dzLnR5cGVdKG1zZ3MuYm9keSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdmFyIHByb2Nlc3NNZXNzYWdlID0gZnVuY3Rpb24oc3RhcngsIG1zZykge1xyXG4gICAgaWYoIW1zZy5pZCkge1xyXG4gICAgICAvLyBzZXJ2ZXIgcHVzaCBtZXNzYWdlXHJcbiAgICAgIHN0YXJ4LmVtaXQobXNnLnJvdXRlLCBtc2cuYm9keSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvL2lmIGhhdmUgYSBpZCB0aGVuIGZpbmQgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHdpdGggdGhlIHJlcXVlc3RcclxuICAgIHZhciBjYiA9IGNhbGxiYWNrc1ttc2cuaWRdO1xyXG5cclxuICAgIGRlbGV0ZSBjYWxsYmFja3NbbXNnLmlkXTtcclxuICAgIGlmKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY2IobXNnLmJvZHkpO1xyXG5cclxuICB9O1xyXG5cclxuICB2YXIgcHJvY2Vzc01lc3NhZ2VCYXRjaCA9IGZ1bmN0aW9uKHN0YXJ4LCBtc2dzKSB7XHJcbiAgICBmb3IodmFyIGk9MCwgbD1tc2dzLmxlbmd0aDsgaTxsOyBpKyspIHtcclxuICAgICAgcHJvY2Vzc01lc3NhZ2Uoc3RhcngsIG1zZ3NbaV0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHZhciBkZUNvbXBvc2UgPSBmdW5jdGlvbihtc2cpIHtcclxuICAgIHZhciByb3V0ZSA9IG1zZy5yb3V0ZTtcclxuXHJcbiAgICAvL0RlY29tcG9zZSByb3V0ZSBmcm9tIGRpY3RcclxuICAgIGlmKG1zZy5jb21wcmVzc1JvdXRlKSB7XHJcbiAgICAgIGlmKCFhYmJyc1tyb3V0ZV0pe1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcm91dGUgPSBtc2cucm91dGUgPSBhYmJyc1tyb3V0ZV07XHJcbiAgICB9XHJcblxyXG4gICAgaWYoZGVjb2RlSU9fZGVjb2RlciAmJiBkZWNvZGVJT19kZWNvZGVyLmxvb2t1cChyb3V0ZSkpIHtcclxuICAgICAgcmV0dXJuIGRlY29kZUlPX2RlY29kZXIuYnVpbGQocm91dGUpLmRlY29kZShtc2cuYm9keSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShQcm90b2NvbC5zdHJkZWNvZGUobXNnLmJvZHkpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbXNnO1xyXG4gIH07XHJcblxyXG4gIHZhciBoYW5kc2hha2VJbml0ID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgaWYoZGF0YS5zeXMgJiYgZGF0YS5zeXMuaGVhcnRiZWF0KSB7XHJcbiAgICAgIGhlYXJ0YmVhdEludGVydmFsID0gZGF0YS5zeXMuaGVhcnRiZWF0ICogMTAwMDsgICAvLyBoZWFydGJlYXQgaW50ZXJ2YWxcclxuICAgICAgaGVhcnRiZWF0VGltZW91dCA9IGhlYXJ0YmVhdEludGVydmFsICogMjsgICAgICAgIC8vIG1heCBoZWFydGJlYXQgdGltZW91dFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaGVhcnRiZWF0SW50ZXJ2YWwgPSAwO1xyXG4gICAgICBoZWFydGJlYXRUaW1lb3V0ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBpbml0RGF0YShkYXRhKTtcclxuXHJcbiAgICBpZih0eXBlb2YgaGFuZHNoYWtlQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgaGFuZHNoYWtlQ2FsbGJhY2soZGF0YS51c2VyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvL0luaXRpbGl6ZSBkYXRhIHVzZWQgaW4gc3RhcnggY2xpZW50XHJcbiAgdmFyIGluaXREYXRhID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgaWYoIWRhdGEgfHwgIWRhdGEuc3lzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGRpY3QgPSBkYXRhLnN5cy5kaWN0O1xyXG5cclxuICAgIC8vSW5pdCBjb21wcmVzcyBkaWN0XHJcbiAgICBpZihkaWN0KSB7XHJcbiAgICAgIGRpY3QgPSBkaWN0O1xyXG4gICAgICBhYmJycyA9IHt9O1xyXG5cclxuICAgICAgZm9yKHZhciByb3V0ZSBpbiBkaWN0KSB7XHJcbiAgICAgICAgYWJicnNbZGljdFtyb3V0ZV1dID0gcm91dGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuc3RhcnggPSBzdGFyeDtcclxuICB9fSkoKTtcclxuIl19