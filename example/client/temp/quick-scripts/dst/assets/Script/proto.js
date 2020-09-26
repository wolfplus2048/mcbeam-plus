
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/proto.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab1cdOjIaVAnr3ZSwmhYuH+', 'proto');
// Script/proto.js

/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict"; // var $protobuf = require("protobufjs/minimal");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var $protobuf = protobuf; // Common aliases

var $Reader = $protobuf.Reader,
    $Writer = $protobuf.Writer,
    $util = $protobuf.util; // Exported root namespace

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.proto = function () {
  /**
   * Namespace proto.
   * @exports proto
   * @namespace
   */
  var proto = {};

  proto.gate = function () {
    /**
     * Namespace gateway.
     * @memberof proto
     * @namespace
     */
    var gate = {};

    gate.LoginReq = function () {
      /**
       * Properties of a LoginReq.
       * @memberof proto.gateway
       * @interface ILoginReq
       * @property {string|null} [username] LoginReq username
       */

      /**
       * Constructs a new LoginReq.
       * @memberof proto.gateway
       * @classdesc Represents a LoginReq.
       * @implements ILoginReq
       * @constructor
       * @param {proto.gate.ILoginReq=} [properties] Properties to set
       */
      function LoginReq(properties) {
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
      }
      /**
       * LoginReq username.
       * @member {string} username
       * @memberof proto.gateway.LoginReq
       * @instance
       */


      LoginReq.prototype.username = "";
      /**
       * Creates a new LoginReq instance using the specified properties.
       * @function create
       * @memberof proto.gateway.LoginReq
       * @static
       * @param {proto.gate.ILoginReq=} [properties] Properties to set
       * @returns {proto.gate.LoginReq} LoginReq instance
       */

      LoginReq.create = function create(properties) {
        return new LoginReq(properties);
      };
      /**
       * Encodes the specified LoginReq message. Does not implicitly {@link proto.gate.LoginReq.verify|verify} messages.
       * @function encode
       * @memberof proto.gateway.LoginReq
       * @static
       * @param {proto.gate.ILoginReq} message LoginReq message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      LoginReq.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.username != null && Object.hasOwnProperty.call(message, "username")) writer.uint32(
        /* id 1, wireType 2 =*/
        10).string(message.username);
        return writer;
      };
      /**
       * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link proto.gate.LoginReq.verify|verify} messages.
       * @function encodeDelimited
       * @memberof proto.gateway.LoginReq
       * @static
       * @param {proto.gate.ILoginReq} message LoginReq message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      LoginReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      /**
       * Decodes a LoginReq message from the specified reader or buffer.
       * @function decode
       * @memberof proto.gateway.LoginReq
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {proto.gate.LoginReq} LoginReq
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      LoginReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.proto.gate.LoginReq();

        while (reader.pos < end) {
          var tag = reader.uint32();

          switch (tag >>> 3) {
            case 1:
              message.username = reader.string();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      };
      /**
       * Decodes a LoginReq message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof proto.gateway.LoginReq
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {proto.gate.LoginReq} LoginReq
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      LoginReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies a LoginReq message.
       * @function verify
       * @memberof proto.gateway.LoginReq
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      LoginReq.verify = function verify(message) {
        if (_typeof(message) !== "object" || message === null) return "object expected";
        if (message.username != null && message.hasOwnProperty("username")) if (!$util.isString(message.username)) return "username: string expected";
        return null;
      };
      /**
       * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof proto.gateway.LoginReq
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {proto.gate.LoginReq} LoginReq
       */


      LoginReq.fromObject = function fromObject(object) {
        if (object instanceof $root.proto.gate.LoginReq) return object;
        var message = new $root.proto.gate.LoginReq();
        if (object.username != null) message.username = String(object.username);
        return message;
      };
      /**
       * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
       * @function toObject
       * @memberof proto.gateway.LoginReq
       * @static
       * @param {proto.gate.LoginReq} message LoginReq
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      LoginReq.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) object.username = "";
        if (message.username != null && message.hasOwnProperty("username")) object.username = message.username;
        return object;
      };
      /**
       * Converts this LoginReq to JSON.
       * @function toJSON
       * @memberof proto.gateway.LoginReq
       * @instance
       * @returns {Object.<string,*>} JSON object
       */


      LoginReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return LoginReq;
    }();

    gate.LoginRes = function () {
      /**
       * Properties of a LoginRes.
       * @memberof proto.gateway
       * @interface ILoginRes
       * @property {string|null} [code] LoginRes code
       * @property {string|null} [uid] LoginRes uid
       * @property {string|null} [username] LoginRes username
       */

      /**
       * Constructs a new LoginRes.
       * @memberof proto.gateway
       * @classdesc Represents a LoginRes.
       * @implements ILoginRes
       * @constructor
       * @param {proto.gate.ILoginRes=} [properties] Properties to set
       */
      function LoginRes(properties) {
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
      }
      /**
       * LoginRes code.
       * @member {string} code
       * @memberof proto.gateway.LoginRes
       * @instance
       */


      LoginRes.prototype.code = "";
      /**
       * LoginRes uid.
       * @member {string} uid
       * @memberof proto.gateway.LoginRes
       * @instance
       */

      LoginRes.prototype.uid = "";
      /**
       * LoginRes username.
       * @member {string} username
       * @memberof proto.gateway.LoginRes
       * @instance
       */

      LoginRes.prototype.username = "";
      /**
       * Creates a new LoginRes instance using the specified properties.
       * @function create
       * @memberof proto.gateway.LoginRes
       * @static
       * @param {proto.gate.ILoginRes=} [properties] Properties to set
       * @returns {proto.gate.LoginRes} LoginRes instance
       */

      LoginRes.create = function create(properties) {
        return new LoginRes(properties);
      };
      /**
       * Encodes the specified LoginRes message. Does not implicitly {@link proto.gate.LoginRes.verify|verify} messages.
       * @function encode
       * @memberof proto.gateway.LoginRes
       * @static
       * @param {proto.gate.ILoginRes} message LoginRes message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      LoginRes.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code")) writer.uint32(
        /* id 1, wireType 2 =*/
        10).string(message.code);
        if (message.uid != null && Object.hasOwnProperty.call(message, "uid")) writer.uint32(
        /* id 2, wireType 2 =*/
        18).string(message.uid);
        if (message.username != null && Object.hasOwnProperty.call(message, "username")) writer.uint32(
        /* id 3, wireType 2 =*/
        26).string(message.username);
        return writer;
      };
      /**
       * Encodes the specified LoginRes message, length delimited. Does not implicitly {@link proto.gate.LoginRes.verify|verify} messages.
       * @function encodeDelimited
       * @memberof proto.gateway.LoginRes
       * @static
       * @param {proto.gate.ILoginRes} message LoginRes message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      LoginRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      /**
       * Decodes a LoginRes message from the specified reader or buffer.
       * @function decode
       * @memberof proto.gateway.LoginRes
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {proto.gate.LoginRes} LoginRes
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      LoginRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.proto.gate.LoginRes();

        while (reader.pos < end) {
          var tag = reader.uint32();

          switch (tag >>> 3) {
            case 1:
              message.code = reader.string();
              break;

            case 2:
              message.uid = reader.string();
              break;

            case 3:
              message.username = reader.string();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      };
      /**
       * Decodes a LoginRes message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof proto.gateway.LoginRes
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {proto.gate.LoginRes} LoginRes
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      LoginRes.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies a LoginRes message.
       * @function verify
       * @memberof proto.gateway.LoginRes
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      LoginRes.verify = function verify(message) {
        if (_typeof(message) !== "object" || message === null) return "object expected";
        if (message.code != null && message.hasOwnProperty("code")) if (!$util.isString(message.code)) return "code: string expected";
        if (message.uid != null && message.hasOwnProperty("uid")) if (!$util.isString(message.uid)) return "uid: string expected";
        if (message.username != null && message.hasOwnProperty("username")) if (!$util.isString(message.username)) return "username: string expected";
        return null;
      };
      /**
       * Creates a LoginRes message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof proto.gateway.LoginRes
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {proto.gate.LoginRes} LoginRes
       */


      LoginRes.fromObject = function fromObject(object) {
        if (object instanceof $root.proto.gate.LoginRes) return object;
        var message = new $root.proto.gate.LoginRes();
        if (object.code != null) message.code = String(object.code);
        if (object.uid != null) message.uid = String(object.uid);
        if (object.username != null) message.username = String(object.username);
        return message;
      };
      /**
       * Creates a plain object from a LoginRes message. Also converts values to other types if specified.
       * @function toObject
       * @memberof proto.gateway.LoginRes
       * @static
       * @param {proto.gate.LoginRes} message LoginRes
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      LoginRes.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};

        if (options.defaults) {
          object.code = "";
          object.uid = "";
          object.username = "";
        }

        if (message.code != null && message.hasOwnProperty("code")) object.code = message.code;
        if (message.uid != null && message.hasOwnProperty("uid")) object.uid = message.uid;
        if (message.username != null && message.hasOwnProperty("username")) object.username = message.username;
        return object;
      };
      /**
       * Converts this LoginRes to JSON.
       * @function toJSON
       * @memberof proto.gateway.LoginRes
       * @instance
       * @returns {Object.<string,*>} JSON object
       */


      LoginRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return LoginRes;
    }();

    gate.GetUserInfoReq = function () {
      /**
       * Properties of a GetUserInfoReq.
       * @memberof proto.gateway
       * @interface IGetUserInfoReq
       * @property {string|null} [uid] GetUserInfoReq uid
       */

      /**
       * Constructs a new GetUserInfoReq.
       * @memberof proto.gateway
       * @classdesc Represents a GetUserInfoReq.
       * @implements IGetUserInfoReq
       * @constructor
       * @param {proto.gate.IGetUserInfoReq=} [properties] Properties to set
       */
      function GetUserInfoReq(properties) {
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
      }
      /**
       * GetUserInfoReq uid.
       * @member {string} uid
       * @memberof proto.gateway.GetUserInfoReq
       * @instance
       */


      GetUserInfoReq.prototype.uid = "";
      /**
       * Creates a new GetUserInfoReq instance using the specified properties.
       * @function create
       * @memberof proto.gateway.GetUserInfoReq
       * @static
       * @param {proto.gate.IGetUserInfoReq=} [properties] Properties to set
       * @returns {proto.gate.GetUserInfoReq} GetUserInfoReq instance
       */

      GetUserInfoReq.create = function create(properties) {
        return new GetUserInfoReq(properties);
      };
      /**
       * Encodes the specified GetUserInfoReq message. Does not implicitly {@link proto.gate.GetUserInfoReq.verify|verify} messages.
       * @function encode
       * @memberof proto.gateway.GetUserInfoReq
       * @static
       * @param {proto.gate.IGetUserInfoReq} message GetUserInfoReq message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      GetUserInfoReq.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.uid != null && Object.hasOwnProperty.call(message, "uid")) writer.uint32(
        /* id 1, wireType 2 =*/
        10).string(message.uid);
        return writer;
      };
      /**
       * Encodes the specified GetUserInfoReq message, length delimited. Does not implicitly {@link proto.gate.GetUserInfoReq.verify|verify} messages.
       * @function encodeDelimited
       * @memberof proto.gateway.GetUserInfoReq
       * @static
       * @param {proto.gate.IGetUserInfoReq} message GetUserInfoReq message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      GetUserInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      /**
       * Decodes a GetUserInfoReq message from the specified reader or buffer.
       * @function decode
       * @memberof proto.gateway.GetUserInfoReq
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {proto.gate.GetUserInfoReq} GetUserInfoReq
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      GetUserInfoReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.proto.gate.GetUserInfoReq();

        while (reader.pos < end) {
          var tag = reader.uint32();

          switch (tag >>> 3) {
            case 1:
              message.uid = reader.string();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      };
      /**
       * Decodes a GetUserInfoReq message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof proto.gateway.GetUserInfoReq
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {proto.gate.GetUserInfoReq} GetUserInfoReq
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      GetUserInfoReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies a GetUserInfoReq message.
       * @function verify
       * @memberof proto.gateway.GetUserInfoReq
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      GetUserInfoReq.verify = function verify(message) {
        if (_typeof(message) !== "object" || message === null) return "object expected";
        if (message.uid != null && message.hasOwnProperty("uid")) if (!$util.isString(message.uid)) return "uid: string expected";
        return null;
      };
      /**
       * Creates a GetUserInfoReq message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof proto.gateway.GetUserInfoReq
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {proto.gate.GetUserInfoReq} GetUserInfoReq
       */


      GetUserInfoReq.fromObject = function fromObject(object) {
        if (object instanceof $root.proto.gate.GetUserInfoReq) return object;
        var message = new $root.proto.gate.GetUserInfoReq();
        if (object.uid != null) message.uid = String(object.uid);
        return message;
      };
      /**
       * Creates a plain object from a GetUserInfoReq message. Also converts values to other types if specified.
       * @function toObject
       * @memberof proto.gateway.GetUserInfoReq
       * @static
       * @param {proto.gate.GetUserInfoReq} message GetUserInfoReq
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      GetUserInfoReq.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) object.uid = "";
        if (message.uid != null && message.hasOwnProperty("uid")) object.uid = message.uid;
        return object;
      };
      /**
       * Converts this GetUserInfoReq to JSON.
       * @function toJSON
       * @memberof proto.gateway.GetUserInfoReq
       * @instance
       * @returns {Object.<string,*>} JSON object
       */


      GetUserInfoReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return GetUserInfoReq;
    }();

    gate.GetUserInfoRes = function () {
      /**
       * Properties of a GetUserInfoRes.
       * @memberof proto.gateway
       * @interface IGetUserInfoRes
       * @property {string|null} [code] GetUserInfoRes code
       * @property {string|null} [uid] GetUserInfoRes uid
       * @property {string|null} [username] GetUserInfoRes username
       */

      /**
       * Constructs a new GetUserInfoRes.
       * @memberof proto.gateway
       * @classdesc Represents a GetUserInfoRes.
       * @implements IGetUserInfoRes
       * @constructor
       * @param {proto.gate.IGetUserInfoRes=} [properties] Properties to set
       */
      function GetUserInfoRes(properties) {
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
      }
      /**
       * GetUserInfoRes code.
       * @member {string} code
       * @memberof proto.gateway.GetUserInfoRes
       * @instance
       */


      GetUserInfoRes.prototype.code = "";
      /**
       * GetUserInfoRes uid.
       * @member {string} uid
       * @memberof proto.gateway.GetUserInfoRes
       * @instance
       */

      GetUserInfoRes.prototype.uid = "";
      /**
       * GetUserInfoRes username.
       * @member {string} username
       * @memberof proto.gateway.GetUserInfoRes
       * @instance
       */

      GetUserInfoRes.prototype.username = "";
      /**
       * Creates a new GetUserInfoRes instance using the specified properties.
       * @function create
       * @memberof proto.gateway.GetUserInfoRes
       * @static
       * @param {proto.gate.IGetUserInfoRes=} [properties] Properties to set
       * @returns {proto.gate.GetUserInfoRes} GetUserInfoRes instance
       */

      GetUserInfoRes.create = function create(properties) {
        return new GetUserInfoRes(properties);
      };
      /**
       * Encodes the specified GetUserInfoRes message. Does not implicitly {@link proto.gate.GetUserInfoRes.verify|verify} messages.
       * @function encode
       * @memberof proto.gateway.GetUserInfoRes
       * @static
       * @param {proto.gate.IGetUserInfoRes} message GetUserInfoRes message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      GetUserInfoRes.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code")) writer.uint32(
        /* id 1, wireType 2 =*/
        10).string(message.code);
        if (message.uid != null && Object.hasOwnProperty.call(message, "uid")) writer.uint32(
        /* id 2, wireType 2 =*/
        18).string(message.uid);
        if (message.username != null && Object.hasOwnProperty.call(message, "username")) writer.uint32(
        /* id 3, wireType 2 =*/
        26).string(message.username);
        return writer;
      };
      /**
       * Encodes the specified GetUserInfoRes message, length delimited. Does not implicitly {@link proto.gate.GetUserInfoRes.verify|verify} messages.
       * @function encodeDelimited
       * @memberof proto.gateway.GetUserInfoRes
       * @static
       * @param {proto.gate.IGetUserInfoRes} message GetUserInfoRes message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      GetUserInfoRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      /**
       * Decodes a GetUserInfoRes message from the specified reader or buffer.
       * @function decode
       * @memberof proto.gateway.GetUserInfoRes
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {proto.gate.GetUserInfoRes} GetUserInfoRes
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      GetUserInfoRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.proto.gate.GetUserInfoRes();

        while (reader.pos < end) {
          var tag = reader.uint32();

          switch (tag >>> 3) {
            case 1:
              message.code = reader.string();
              break;

            case 2:
              message.uid = reader.string();
              break;

            case 3:
              message.username = reader.string();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      };
      /**
       * Decodes a GetUserInfoRes message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof proto.gateway.GetUserInfoRes
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {proto.gate.GetUserInfoRes} GetUserInfoRes
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      GetUserInfoRes.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies a GetUserInfoRes message.
       * @function verify
       * @memberof proto.gateway.GetUserInfoRes
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      GetUserInfoRes.verify = function verify(message) {
        if (_typeof(message) !== "object" || message === null) return "object expected";
        if (message.code != null && message.hasOwnProperty("code")) if (!$util.isString(message.code)) return "code: string expected";
        if (message.uid != null && message.hasOwnProperty("uid")) if (!$util.isString(message.uid)) return "uid: string expected";
        if (message.username != null && message.hasOwnProperty("username")) if (!$util.isString(message.username)) return "username: string expected";
        return null;
      };
      /**
       * Creates a GetUserInfoRes message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof proto.gateway.GetUserInfoRes
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {proto.gate.GetUserInfoRes} GetUserInfoRes
       */


      GetUserInfoRes.fromObject = function fromObject(object) {
        if (object instanceof $root.proto.gate.GetUserInfoRes) return object;
        var message = new $root.proto.gate.GetUserInfoRes();
        if (object.code != null) message.code = String(object.code);
        if (object.uid != null) message.uid = String(object.uid);
        if (object.username != null) message.username = String(object.username);
        return message;
      };
      /**
       * Creates a plain object from a GetUserInfoRes message. Also converts values to other types if specified.
       * @function toObject
       * @memberof proto.gateway.GetUserInfoRes
       * @static
       * @param {proto.gate.GetUserInfoRes} message GetUserInfoRes
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      GetUserInfoRes.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};

        if (options.defaults) {
          object.code = "";
          object.uid = "";
          object.username = "";
        }

        if (message.code != null && message.hasOwnProperty("code")) object.code = message.code;
        if (message.uid != null && message.hasOwnProperty("uid")) object.uid = message.uid;
        if (message.username != null && message.hasOwnProperty("username")) object.username = message.username;
        return object;
      };
      /**
       * Converts this GetUserInfoRes to JSON.
       * @function toJSON
       * @memberof proto.gateway.GetUserInfoRes
       * @instance
       * @returns {Object.<string,*>} JSON object
       */


      GetUserInfoRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return GetUserInfoRes;
    }();

    return gate;
  }();

  proto.mgr = function () {
    /**
     * Namespace mgr.
     * @memberof proto
     * @namespace
     */
    var mgr = {};

    mgr.Room = function () {
      /**
       * Properties of a Room.
       * @memberof proto.mgr
       * @interface IRoom
       * @property {string|null} [id] Room id
       * @property {string|null} [name] Room name
       * @property {number|null} [status] Room status
       */

      /**
       * Constructs a new Room.
       * @memberof proto.mgr
       * @classdesc Represents a Room.
       * @implements IRoom
       * @constructor
       * @param {proto.mgr.IRoom=} [properties] Properties to set
       */
      function Room(properties) {
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
      }
      /**
       * Room id.
       * @member {string} id
       * @memberof proto.mgr.Room
       * @instance
       */


      Room.prototype.id = "";
      /**
       * Room name.
       * @member {string} name
       * @memberof proto.mgr.Room
       * @instance
       */

      Room.prototype.name = "";
      /**
       * Room status.
       * @member {number} status
       * @memberof proto.mgr.Room
       * @instance
       */

      Room.prototype.status = 0;
      /**
       * Creates a new Room instance using the specified properties.
       * @function create
       * @memberof proto.mgr.Room
       * @static
       * @param {proto.mgr.IRoom=} [properties] Properties to set
       * @returns {proto.mgr.Room} Room instance
       */

      Room.create = function create(properties) {
        return new Room(properties);
      };
      /**
       * Encodes the specified Room message. Does not implicitly {@link proto.mgr.Room.verify|verify} messages.
       * @function encode
       * @memberof proto.mgr.Room
       * @static
       * @param {proto.mgr.IRoom} message Room message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      Room.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id")) writer.uint32(
        /* id 1, wireType 2 =*/
        10).string(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name")) writer.uint32(
        /* id 2, wireType 2 =*/
        18).string(message.name);
        if (message.status != null && Object.hasOwnProperty.call(message, "status")) writer.uint32(
        /* id 4, wireType 0 =*/
        32).int32(message.status);
        return writer;
      };
      /**
       * Encodes the specified Room message, length delimited. Does not implicitly {@link proto.mgr.Room.verify|verify} messages.
       * @function encodeDelimited
       * @memberof proto.mgr.Room
       * @static
       * @param {proto.mgr.IRoom} message Room message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      Room.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      /**
       * Decodes a Room message from the specified reader or buffer.
       * @function decode
       * @memberof proto.mgr.Room
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {proto.mgr.Room} Room
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      Room.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.proto.mgr.Room();

        while (reader.pos < end) {
          var tag = reader.uint32();

          switch (tag >>> 3) {
            case 1:
              message.id = reader.string();
              break;

            case 2:
              message.name = reader.string();
              break;

            case 4:
              message.status = reader.int32();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      };
      /**
       * Decodes a Room message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof proto.mgr.Room
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {proto.mgr.Room} Room
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      Room.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies a Room message.
       * @function verify
       * @memberof proto.mgr.Room
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      Room.verify = function verify(message) {
        if (_typeof(message) !== "object" || message === null) return "object expected";
        if (message.id != null && message.hasOwnProperty("id")) if (!$util.isString(message.id)) return "id: string expected";
        if (message.name != null && message.hasOwnProperty("name")) if (!$util.isString(message.name)) return "name: string expected";
        if (message.status != null && message.hasOwnProperty("status")) if (!$util.isInteger(message.status)) return "status: integer expected";
        return null;
      };
      /**
       * Creates a Room message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof proto.mgr.Room
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {proto.mgr.Room} Room
       */


      Room.fromObject = function fromObject(object) {
        if (object instanceof $root.proto.mgr.Room) return object;
        var message = new $root.proto.mgr.Room();
        if (object.id != null) message.id = String(object.id);
        if (object.name != null) message.name = String(object.name);
        if (object.status != null) message.status = object.status | 0;
        return message;
      };
      /**
       * Creates a plain object from a Room message. Also converts values to other types if specified.
       * @function toObject
       * @memberof proto.mgr.Room
       * @static
       * @param {proto.mgr.Room} message Room
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      Room.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};

        if (options.defaults) {
          object.id = "";
          object.name = "";
          object.status = 0;
        }

        if (message.id != null && message.hasOwnProperty("id")) object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name")) object.name = message.name;
        if (message.status != null && message.hasOwnProperty("status")) object.status = message.status;
        return object;
      };
      /**
       * Converts this Room to JSON.
       * @function toJSON
       * @memberof proto.mgr.Room
       * @instance
       * @returns {Object.<string,*>} JSON object
       */


      Room.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return Room;
    }();

    mgr.GetRoomListReq = function () {
      /**
       * Properties of a GetRoomListReq.
       * @memberof proto.mgr
       * @interface IGetRoomListReq
       */

      /**
       * Constructs a new GetRoomListReq.
       * @memberof proto.mgr
       * @classdesc Represents a GetRoomListReq.
       * @implements IGetRoomListReq
       * @constructor
       * @param {proto.mgr.IGetRoomListReq=} [properties] Properties to set
       */
      function GetRoomListReq(properties) {
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
      }
      /**
       * Creates a new GetRoomListReq instance using the specified properties.
       * @function create
       * @memberof proto.mgr.GetRoomListReq
       * @static
       * @param {proto.mgr.IGetRoomListReq=} [properties] Properties to set
       * @returns {proto.mgr.GetRoomListReq} GetRoomListReq instance
       */


      GetRoomListReq.create = function create(properties) {
        return new GetRoomListReq(properties);
      };
      /**
       * Encodes the specified GetRoomListReq message. Does not implicitly {@link proto.mgr.GetRoomListReq.verify|verify} messages.
       * @function encode
       * @memberof proto.mgr.GetRoomListReq
       * @static
       * @param {proto.mgr.IGetRoomListReq} message GetRoomListReq message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      GetRoomListReq.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
      };
      /**
       * Encodes the specified GetRoomListReq message, length delimited. Does not implicitly {@link proto.mgr.GetRoomListReq.verify|verify} messages.
       * @function encodeDelimited
       * @memberof proto.mgr.GetRoomListReq
       * @static
       * @param {proto.mgr.IGetRoomListReq} message GetRoomListReq message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      GetRoomListReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      /**
       * Decodes a GetRoomListReq message from the specified reader or buffer.
       * @function decode
       * @memberof proto.mgr.GetRoomListReq
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {proto.mgr.GetRoomListReq} GetRoomListReq
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      GetRoomListReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.proto.mgr.GetRoomListReq();

        while (reader.pos < end) {
          var tag = reader.uint32();

          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      };
      /**
       * Decodes a GetRoomListReq message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof proto.mgr.GetRoomListReq
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {proto.mgr.GetRoomListReq} GetRoomListReq
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      GetRoomListReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies a GetRoomListReq message.
       * @function verify
       * @memberof proto.mgr.GetRoomListReq
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      GetRoomListReq.verify = function verify(message) {
        if (_typeof(message) !== "object" || message === null) return "object expected";
        return null;
      };
      /**
       * Creates a GetRoomListReq message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof proto.mgr.GetRoomListReq
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {proto.mgr.GetRoomListReq} GetRoomListReq
       */


      GetRoomListReq.fromObject = function fromObject(object) {
        if (object instanceof $root.proto.mgr.GetRoomListReq) return object;
        return new $root.proto.mgr.GetRoomListReq();
      };
      /**
       * Creates a plain object from a GetRoomListReq message. Also converts values to other types if specified.
       * @function toObject
       * @memberof proto.mgr.GetRoomListReq
       * @static
       * @param {proto.mgr.GetRoomListReq} message GetRoomListReq
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      GetRoomListReq.toObject = function toObject() {
        return {};
      };
      /**
       * Converts this GetRoomListReq to JSON.
       * @function toJSON
       * @memberof proto.mgr.GetRoomListReq
       * @instance
       * @returns {Object.<string,*>} JSON object
       */


      GetRoomListReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return GetRoomListReq;
    }();

    mgr.GetRoomListRes = function () {
      /**
       * Properties of a GetRoomListRes.
       * @memberof proto.mgr
       * @interface IGetRoomListRes
       * @property {Array.<proto.mgr.IRoom>|null} [rooms] GetRoomListRes rooms
       */

      /**
       * Constructs a new GetRoomListRes.
       * @memberof proto.mgr
       * @classdesc Represents a GetRoomListRes.
       * @implements IGetRoomListRes
       * @constructor
       * @param {proto.mgr.IGetRoomListRes=} [properties] Properties to set
       */
      function GetRoomListRes(properties) {
        this.rooms = [];
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
      }
      /**
       * GetRoomListRes rooms.
       * @member {Array.<proto.mgr.IRoom>} rooms
       * @memberof proto.mgr.GetRoomListRes
       * @instance
       */


      GetRoomListRes.prototype.rooms = $util.emptyArray;
      /**
       * Creates a new GetRoomListRes instance using the specified properties.
       * @function create
       * @memberof proto.mgr.GetRoomListRes
       * @static
       * @param {proto.mgr.IGetRoomListRes=} [properties] Properties to set
       * @returns {proto.mgr.GetRoomListRes} GetRoomListRes instance
       */

      GetRoomListRes.create = function create(properties) {
        return new GetRoomListRes(properties);
      };
      /**
       * Encodes the specified GetRoomListRes message. Does not implicitly {@link proto.mgr.GetRoomListRes.verify|verify} messages.
       * @function encode
       * @memberof proto.mgr.GetRoomListRes
       * @static
       * @param {proto.mgr.IGetRoomListRes} message GetRoomListRes message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      GetRoomListRes.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.rooms != null && message.rooms.length) for (var i = 0; i < message.rooms.length; ++i) {
          $root.proto.mgr.Room.encode(message.rooms[i], writer.uint32(
          /* id 1, wireType 2 =*/
          10).fork()).ldelim();
        }
        return writer;
      };
      /**
       * Encodes the specified GetRoomListRes message, length delimited. Does not implicitly {@link proto.mgr.GetRoomListRes.verify|verify} messages.
       * @function encodeDelimited
       * @memberof proto.mgr.GetRoomListRes
       * @static
       * @param {proto.mgr.IGetRoomListRes} message GetRoomListRes message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      GetRoomListRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      /**
       * Decodes a GetRoomListRes message from the specified reader or buffer.
       * @function decode
       * @memberof proto.mgr.GetRoomListRes
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {proto.mgr.GetRoomListRes} GetRoomListRes
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      GetRoomListRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.proto.mgr.GetRoomListRes();

        while (reader.pos < end) {
          var tag = reader.uint32();

          switch (tag >>> 3) {
            case 1:
              if (!(message.rooms && message.rooms.length)) message.rooms = [];
              message.rooms.push($root.proto.mgr.Room.decode(reader, reader.uint32()));
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      };
      /**
       * Decodes a GetRoomListRes message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof proto.mgr.GetRoomListRes
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {proto.mgr.GetRoomListRes} GetRoomListRes
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      GetRoomListRes.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies a GetRoomListRes message.
       * @function verify
       * @memberof proto.mgr.GetRoomListRes
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      GetRoomListRes.verify = function verify(message) {
        if (_typeof(message) !== "object" || message === null) return "object expected";

        if (message.rooms != null && message.hasOwnProperty("rooms")) {
          if (!Array.isArray(message.rooms)) return "rooms: array expected";

          for (var i = 0; i < message.rooms.length; ++i) {
            var error = $root.proto.mgr.Room.verify(message.rooms[i]);
            if (error) return "rooms." + error;
          }
        }

        return null;
      };
      /**
       * Creates a GetRoomListRes message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof proto.mgr.GetRoomListRes
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {proto.mgr.GetRoomListRes} GetRoomListRes
       */


      GetRoomListRes.fromObject = function fromObject(object) {
        if (object instanceof $root.proto.mgr.GetRoomListRes) return object;
        var message = new $root.proto.mgr.GetRoomListRes();

        if (object.rooms) {
          if (!Array.isArray(object.rooms)) throw TypeError(".proto.mgr.GetRoomListRes.rooms: array expected");
          message.rooms = [];

          for (var i = 0; i < object.rooms.length; ++i) {
            if (_typeof(object.rooms[i]) !== "object") throw TypeError(".proto.mgr.GetRoomListRes.rooms: object expected");
            message.rooms[i] = $root.proto.mgr.Room.fromObject(object.rooms[i]);
          }
        }

        return message;
      };
      /**
       * Creates a plain object from a GetRoomListRes message. Also converts values to other types if specified.
       * @function toObject
       * @memberof proto.mgr.GetRoomListRes
       * @static
       * @param {proto.mgr.GetRoomListRes} message GetRoomListRes
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      GetRoomListRes.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.arrays || options.defaults) object.rooms = [];

        if (message.rooms && message.rooms.length) {
          object.rooms = [];

          for (var j = 0; j < message.rooms.length; ++j) {
            object.rooms[j] = $root.proto.mgr.Room.toObject(message.rooms[j], options);
          }
        }

        return object;
      };
      /**
       * Converts this GetRoomListRes to JSON.
       * @function toJSON
       * @memberof proto.mgr.GetRoomListRes
       * @instance
       * @returns {Object.<string,*>} JSON object
       */


      GetRoomListRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return GetRoomListRes;
    }();

    mgr.CreateRoomReq = function () {
      /**
       * Properties of a CreateRoomReq.
       * @memberof proto.mgr
       * @interface ICreateRoomReq
       * @property {string|null} [name] CreateRoomReq name
       */

      /**
       * Constructs a new CreateRoomReq.
       * @memberof proto.mgr
       * @classdesc Represents a CreateRoomReq.
       * @implements ICreateRoomReq
       * @constructor
       * @param {proto.mgr.ICreateRoomReq=} [properties] Properties to set
       */
      function CreateRoomReq(properties) {
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
      }
      /**
       * CreateRoomReq name.
       * @member {string} name
       * @memberof proto.mgr.CreateRoomReq
       * @instance
       */


      CreateRoomReq.prototype.name = "";
      /**
       * Creates a new CreateRoomReq instance using the specified properties.
       * @function create
       * @memberof proto.mgr.CreateRoomReq
       * @static
       * @param {proto.mgr.ICreateRoomReq=} [properties] Properties to set
       * @returns {proto.mgr.CreateRoomReq} CreateRoomReq instance
       */

      CreateRoomReq.create = function create(properties) {
        return new CreateRoomReq(properties);
      };
      /**
       * Encodes the specified CreateRoomReq message. Does not implicitly {@link proto.mgr.CreateRoomReq.verify|verify} messages.
       * @function encode
       * @memberof proto.mgr.CreateRoomReq
       * @static
       * @param {proto.mgr.ICreateRoomReq} message CreateRoomReq message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      CreateRoomReq.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name")) writer.uint32(
        /* id 1, wireType 2 =*/
        10).string(message.name);
        return writer;
      };
      /**
       * Encodes the specified CreateRoomReq message, length delimited. Does not implicitly {@link proto.mgr.CreateRoomReq.verify|verify} messages.
       * @function encodeDelimited
       * @memberof proto.mgr.CreateRoomReq
       * @static
       * @param {proto.mgr.ICreateRoomReq} message CreateRoomReq message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      CreateRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      /**
       * Decodes a CreateRoomReq message from the specified reader or buffer.
       * @function decode
       * @memberof proto.mgr.CreateRoomReq
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {proto.mgr.CreateRoomReq} CreateRoomReq
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      CreateRoomReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.proto.mgr.CreateRoomReq();

        while (reader.pos < end) {
          var tag = reader.uint32();

          switch (tag >>> 3) {
            case 1:
              message.name = reader.string();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      };
      /**
       * Decodes a CreateRoomReq message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof proto.mgr.CreateRoomReq
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {proto.mgr.CreateRoomReq} CreateRoomReq
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      CreateRoomReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies a CreateRoomReq message.
       * @function verify
       * @memberof proto.mgr.CreateRoomReq
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      CreateRoomReq.verify = function verify(message) {
        if (_typeof(message) !== "object" || message === null) return "object expected";
        if (message.name != null && message.hasOwnProperty("name")) if (!$util.isString(message.name)) return "name: string expected";
        return null;
      };
      /**
       * Creates a CreateRoomReq message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof proto.mgr.CreateRoomReq
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {proto.mgr.CreateRoomReq} CreateRoomReq
       */


      CreateRoomReq.fromObject = function fromObject(object) {
        if (object instanceof $root.proto.mgr.CreateRoomReq) return object;
        var message = new $root.proto.mgr.CreateRoomReq();
        if (object.name != null) message.name = String(object.name);
        return message;
      };
      /**
       * Creates a plain object from a CreateRoomReq message. Also converts values to other types if specified.
       * @function toObject
       * @memberof proto.mgr.CreateRoomReq
       * @static
       * @param {proto.mgr.CreateRoomReq} message CreateRoomReq
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      CreateRoomReq.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) object.name = "";
        if (message.name != null && message.hasOwnProperty("name")) object.name = message.name;
        return object;
      };
      /**
       * Converts this CreateRoomReq to JSON.
       * @function toJSON
       * @memberof proto.mgr.CreateRoomReq
       * @instance
       * @returns {Object.<string,*>} JSON object
       */


      CreateRoomReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return CreateRoomReq;
    }();

    mgr.CreateRoomRes = function () {
      /**
       * Properties of a CreateRoomRes.
       * @memberof proto.mgr
       * @interface ICreateRoomRes
       * @property {string|null} [code] CreateRoomRes code
       * @property {string|null} [serverId] CreateRoomRes serverId
       * @property {proto.mgr.IRoom|null} [room] CreateRoomRes room
       */

      /**
       * Constructs a new CreateRoomRes.
       * @memberof proto.mgr
       * @classdesc Represents a CreateRoomRes.
       * @implements ICreateRoomRes
       * @constructor
       * @param {proto.mgr.ICreateRoomRes=} [properties] Properties to set
       */
      function CreateRoomRes(properties) {
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
      }
      /**
       * CreateRoomRes code.
       * @member {string} code
       * @memberof proto.mgr.CreateRoomRes
       * @instance
       */


      CreateRoomRes.prototype.code = "";
      /**
       * CreateRoomRes serverId.
       * @member {string} serverId
       * @memberof proto.mgr.CreateRoomRes
       * @instance
       */

      CreateRoomRes.prototype.serverId = "";
      /**
       * CreateRoomRes room.
       * @member {proto.mgr.IRoom|null|undefined} room
       * @memberof proto.mgr.CreateRoomRes
       * @instance
       */

      CreateRoomRes.prototype.room = null;
      /**
       * Creates a new CreateRoomRes instance using the specified properties.
       * @function create
       * @memberof proto.mgr.CreateRoomRes
       * @static
       * @param {proto.mgr.ICreateRoomRes=} [properties] Properties to set
       * @returns {proto.mgr.CreateRoomRes} CreateRoomRes instance
       */

      CreateRoomRes.create = function create(properties) {
        return new CreateRoomRes(properties);
      };
      /**
       * Encodes the specified CreateRoomRes message. Does not implicitly {@link proto.mgr.CreateRoomRes.verify|verify} messages.
       * @function encode
       * @memberof proto.mgr.CreateRoomRes
       * @static
       * @param {proto.mgr.ICreateRoomRes} message CreateRoomRes message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      CreateRoomRes.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code")) writer.uint32(
        /* id 1, wireType 2 =*/
        10).string(message.code);
        if (message.room != null && Object.hasOwnProperty.call(message, "room")) $root.proto.mgr.Room.encode(message.room, writer.uint32(
        /* id 2, wireType 2 =*/
        18).fork()).ldelim();
        if (message.serverId != null && Object.hasOwnProperty.call(message, "serverId")) writer.uint32(
        /* id 3, wireType 2 =*/
        26).string(message.serverId);
        return writer;
      };
      /**
       * Encodes the specified CreateRoomRes message, length delimited. Does not implicitly {@link proto.mgr.CreateRoomRes.verify|verify} messages.
       * @function encodeDelimited
       * @memberof proto.mgr.CreateRoomRes
       * @static
       * @param {proto.mgr.ICreateRoomRes} message CreateRoomRes message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      CreateRoomRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      /**
       * Decodes a CreateRoomRes message from the specified reader or buffer.
       * @function decode
       * @memberof proto.mgr.CreateRoomRes
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {proto.mgr.CreateRoomRes} CreateRoomRes
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      CreateRoomRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.proto.mgr.CreateRoomRes();

        while (reader.pos < end) {
          var tag = reader.uint32();

          switch (tag >>> 3) {
            case 1:
              message.code = reader.string();
              break;

            case 3:
              message.serverId = reader.string();
              break;

            case 2:
              message.room = $root.proto.mgr.Room.decode(reader, reader.uint32());
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      };
      /**
       * Decodes a CreateRoomRes message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof proto.mgr.CreateRoomRes
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {proto.mgr.CreateRoomRes} CreateRoomRes
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      CreateRoomRes.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies a CreateRoomRes message.
       * @function verify
       * @memberof proto.mgr.CreateRoomRes
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      CreateRoomRes.verify = function verify(message) {
        if (_typeof(message) !== "object" || message === null) return "object expected";
        if (message.code != null && message.hasOwnProperty("code")) if (!$util.isString(message.code)) return "code: string expected";
        if (message.serverId != null && message.hasOwnProperty("serverId")) if (!$util.isString(message.serverId)) return "serverId: string expected";

        if (message.room != null && message.hasOwnProperty("room")) {
          var error = $root.proto.mgr.Room.verify(message.room);
          if (error) return "room." + error;
        }

        return null;
      };
      /**
       * Creates a CreateRoomRes message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof proto.mgr.CreateRoomRes
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {proto.mgr.CreateRoomRes} CreateRoomRes
       */


      CreateRoomRes.fromObject = function fromObject(object) {
        if (object instanceof $root.proto.mgr.CreateRoomRes) return object;
        var message = new $root.proto.mgr.CreateRoomRes();
        if (object.code != null) message.code = String(object.code);
        if (object.serverId != null) message.serverId = String(object.serverId);

        if (object.room != null) {
          if (_typeof(object.room) !== "object") throw TypeError(".proto.mgr.CreateRoomRes.room: object expected");
          message.room = $root.proto.mgr.Room.fromObject(object.room);
        }

        return message;
      };
      /**
       * Creates a plain object from a CreateRoomRes message. Also converts values to other types if specified.
       * @function toObject
       * @memberof proto.mgr.CreateRoomRes
       * @static
       * @param {proto.mgr.CreateRoomRes} message CreateRoomRes
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      CreateRoomRes.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};

        if (options.defaults) {
          object.code = "";
          object.room = null;
          object.serverId = "";
        }

        if (message.code != null && message.hasOwnProperty("code")) object.code = message.code;
        if (message.room != null && message.hasOwnProperty("room")) object.room = $root.proto.mgr.Room.toObject(message.room, options);
        if (message.serverId != null && message.hasOwnProperty("serverId")) object.serverId = message.serverId;
        return object;
      };
      /**
       * Converts this CreateRoomRes to JSON.
       * @function toJSON
       * @memberof proto.mgr.CreateRoomRes
       * @instance
       * @returns {Object.<string,*>} JSON object
       */


      CreateRoomRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return CreateRoomRes;
    }();

    return mgr;
  }();

  proto.room = function () {
    /**
     * Namespace room.
     * @memberof proto
     * @namespace
     */
    var room = {};

    room.User = function () {
      /**
       * Properties of a User.
       * @memberof proto.room
       * @interface IUser
       * @property {string|null} [uid] User uid
       * @property {string|null} [username] User username
       */

      /**
       * Constructs a new User.
       * @memberof proto.room
       * @classdesc Represents a User.
       * @implements IUser
       * @constructor
       * @param {proto.room.IUser=} [properties] Properties to set
       */
      function User(properties) {
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
      }
      /**
       * User uid.
       * @member {string} uid
       * @memberof proto.room.User
       * @instance
       */


      User.prototype.uid = "";
      /**
       * User username.
       * @member {string} username
       * @memberof proto.room.User
       * @instance
       */

      User.prototype.username = "";
      /**
       * Creates a new User instance using the specified properties.
       * @function create
       * @memberof proto.room.User
       * @static
       * @param {proto.room.IUser=} [properties] Properties to set
       * @returns {proto.room.User} User instance
       */

      User.create = function create(properties) {
        return new User(properties);
      };
      /**
       * Encodes the specified User message. Does not implicitly {@link proto.room.User.verify|verify} messages.
       * @function encode
       * @memberof proto.room.User
       * @static
       * @param {proto.room.IUser} message User message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      User.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.uid != null && Object.hasOwnProperty.call(message, "uid")) writer.uint32(
        /* id 1, wireType 2 =*/
        10).string(message.uid);
        if (message.username != null && Object.hasOwnProperty.call(message, "username")) writer.uint32(
        /* id 2, wireType 2 =*/
        18).string(message.username);
        return writer;
      };
      /**
       * Encodes the specified User message, length delimited. Does not implicitly {@link proto.room.User.verify|verify} messages.
       * @function encodeDelimited
       * @memberof proto.room.User
       * @static
       * @param {proto.room.IUser} message User message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      User.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      /**
       * Decodes a User message from the specified reader or buffer.
       * @function decode
       * @memberof proto.room.User
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {proto.room.User} User
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      User.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.proto.room.User();

        while (reader.pos < end) {
          var tag = reader.uint32();

          switch (tag >>> 3) {
            case 1:
              message.uid = reader.string();
              break;

            case 2:
              message.username = reader.string();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      };
      /**
       * Decodes a User message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof proto.room.User
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {proto.room.User} User
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      User.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies a User message.
       * @function verify
       * @memberof proto.room.User
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      User.verify = function verify(message) {
        if (_typeof(message) !== "object" || message === null) return "object expected";
        if (message.uid != null && message.hasOwnProperty("uid")) if (!$util.isString(message.uid)) return "uid: string expected";
        if (message.username != null && message.hasOwnProperty("username")) if (!$util.isString(message.username)) return "username: string expected";
        return null;
      };
      /**
       * Creates a User message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof proto.room.User
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {proto.room.User} User
       */


      User.fromObject = function fromObject(object) {
        if (object instanceof $root.proto.room.User) return object;
        var message = new $root.proto.room.User();
        if (object.uid != null) message.uid = String(object.uid);
        if (object.username != null) message.username = String(object.username);
        return message;
      };
      /**
       * Creates a plain object from a User message. Also converts values to other types if specified.
       * @function toObject
       * @memberof proto.room.User
       * @static
       * @param {proto.room.User} message User
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      User.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};

        if (options.defaults) {
          object.uid = "";
          object.username = "";
        }

        if (message.uid != null && message.hasOwnProperty("uid")) object.uid = message.uid;
        if (message.username != null && message.hasOwnProperty("username")) object.username = message.username;
        return object;
      };
      /**
       * Converts this User to JSON.
       * @function toJSON
       * @memberof proto.room.User
       * @instance
       * @returns {Object.<string,*>} JSON object
       */


      User.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return User;
    }();

    room.Room = function () {
      /**
       * Properties of a Room.
       * @memberof proto.room
       * @interface IRoom
       * @property {string|null} [id] Room id
       * @property {string|null} [name] Room name
       * @property {Array.<proto.room.IUser>|null} [users] Room users
       */

      /**
       * Constructs a new Room.
       * @memberof proto.room
       * @classdesc Represents a Room.
       * @implements IRoom
       * @constructor
       * @param {proto.room.IRoom=} [properties] Properties to set
       */
      function Room(properties) {
        this.users = [];
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
      }
      /**
       * Room id.
       * @member {string} id
       * @memberof proto.room.Room
       * @instance
       */


      Room.prototype.id = "";
      /**
       * Room name.
       * @member {string} name
       * @memberof proto.room.Room
       * @instance
       */

      Room.prototype.name = "";
      /**
       * Room users.
       * @member {Array.<proto.room.IUser>} users
       * @memberof proto.room.Room
       * @instance
       */

      Room.prototype.users = $util.emptyArray;
      /**
       * Creates a new Room instance using the specified properties.
       * @function create
       * @memberof proto.room.Room
       * @static
       * @param {proto.room.IRoom=} [properties] Properties to set
       * @returns {proto.room.Room} Room instance
       */

      Room.create = function create(properties) {
        return new Room(properties);
      };
      /**
       * Encodes the specified Room message. Does not implicitly {@link proto.room.Room.verify|verify} messages.
       * @function encode
       * @memberof proto.room.Room
       * @static
       * @param {proto.room.IRoom} message Room message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      Room.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id")) writer.uint32(
        /* id 1, wireType 2 =*/
        10).string(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name")) writer.uint32(
        /* id 2, wireType 2 =*/
        18).string(message.name);
        if (message.users != null && message.users.length) for (var i = 0; i < message.users.length; ++i) {
          $root.proto.room.User.encode(message.users[i], writer.uint32(
          /* id 4, wireType 2 =*/
          34).fork()).ldelim();
        }
        return writer;
      };
      /**
       * Encodes the specified Room message, length delimited. Does not implicitly {@link proto.room.Room.verify|verify} messages.
       * @function encodeDelimited
       * @memberof proto.room.Room
       * @static
       * @param {proto.room.IRoom} message Room message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      Room.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      /**
       * Decodes a Room message from the specified reader or buffer.
       * @function decode
       * @memberof proto.room.Room
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {proto.room.Room} Room
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      Room.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.proto.room.Room();

        while (reader.pos < end) {
          var tag = reader.uint32();

          switch (tag >>> 3) {
            case 1:
              message.id = reader.string();
              break;

            case 2:
              message.name = reader.string();
              break;

            case 4:
              if (!(message.users && message.users.length)) message.users = [];
              message.users.push($root.proto.room.User.decode(reader, reader.uint32()));
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      };
      /**
       * Decodes a Room message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof proto.room.Room
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {proto.room.Room} Room
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      Room.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies a Room message.
       * @function verify
       * @memberof proto.room.Room
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      Room.verify = function verify(message) {
        if (_typeof(message) !== "object" || message === null) return "object expected";
        if (message.id != null && message.hasOwnProperty("id")) if (!$util.isString(message.id)) return "id: string expected";
        if (message.name != null && message.hasOwnProperty("name")) if (!$util.isString(message.name)) return "name: string expected";

        if (message.users != null && message.hasOwnProperty("users")) {
          if (!Array.isArray(message.users)) return "users: array expected";

          for (var i = 0; i < message.users.length; ++i) {
            var error = $root.proto.room.User.verify(message.users[i]);
            if (error) return "users." + error;
          }
        }

        return null;
      };
      /**
       * Creates a Room message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof proto.room.Room
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {proto.room.Room} Room
       */


      Room.fromObject = function fromObject(object) {
        if (object instanceof $root.proto.room.Room) return object;
        var message = new $root.proto.room.Room();
        if (object.id != null) message.id = String(object.id);
        if (object.name != null) message.name = String(object.name);

        if (object.users) {
          if (!Array.isArray(object.users)) throw TypeError(".proto.room.Room.users: array expected");
          message.users = [];

          for (var i = 0; i < object.users.length; ++i) {
            if (_typeof(object.users[i]) !== "object") throw TypeError(".proto.room.Room.users: object expected");
            message.users[i] = $root.proto.room.User.fromObject(object.users[i]);
          }
        }

        return message;
      };
      /**
       * Creates a plain object from a Room message. Also converts values to other types if specified.
       * @function toObject
       * @memberof proto.room.Room
       * @static
       * @param {proto.room.Room} message Room
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      Room.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.arrays || options.defaults) object.users = [];

        if (options.defaults) {
          object.id = "";
          object.name = "";
        }

        if (message.id != null && message.hasOwnProperty("id")) object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name")) object.name = message.name;

        if (message.users && message.users.length) {
          object.users = [];

          for (var j = 0; j < message.users.length; ++j) {
            object.users[j] = $root.proto.room.User.toObject(message.users[j], options);
          }
        }

        return object;
      };
      /**
       * Converts this Room to JSON.
       * @function toJSON
       * @memberof proto.room.Room
       * @instance
       * @returns {Object.<string,*>} JSON object
       */


      Room.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return Room;
    }();

    room.JoinReq = function () {
      /**
       * Properties of a JoinReq.
       * @memberof proto.room
       * @interface IJoinReq
       * @property {string|null} [id] JoinReq id
       */

      /**
       * Constructs a new JoinReq.
       * @memberof proto.room
       * @classdesc Represents a JoinReq.
       * @implements IJoinReq
       * @constructor
       * @param {proto.room.IJoinReq=} [properties] Properties to set
       */
      function JoinReq(properties) {
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
      }
      /**
       * JoinReq id.
       * @member {string} id
       * @memberof proto.room.JoinReq
       * @instance
       */


      JoinReq.prototype.id = "";
      /**
       * Creates a new JoinReq instance using the specified properties.
       * @function create
       * @memberof proto.room.JoinReq
       * @static
       * @param {proto.room.IJoinReq=} [properties] Properties to set
       * @returns {proto.room.JoinReq} JoinReq instance
       */

      JoinReq.create = function create(properties) {
        return new JoinReq(properties);
      };
      /**
       * Encodes the specified JoinReq message. Does not implicitly {@link proto.room.JoinReq.verify|verify} messages.
       * @function encode
       * @memberof proto.room.JoinReq
       * @static
       * @param {proto.room.IJoinReq} message JoinReq message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      JoinReq.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id")) writer.uint32(
        /* id 1, wireType 2 =*/
        10).string(message.id);
        return writer;
      };
      /**
       * Encodes the specified JoinReq message, length delimited. Does not implicitly {@link proto.room.JoinReq.verify|verify} messages.
       * @function encodeDelimited
       * @memberof proto.room.JoinReq
       * @static
       * @param {proto.room.IJoinReq} message JoinReq message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      JoinReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      /**
       * Decodes a JoinReq message from the specified reader or buffer.
       * @function decode
       * @memberof proto.room.JoinReq
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {proto.room.JoinReq} JoinReq
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      JoinReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.proto.room.JoinReq();

        while (reader.pos < end) {
          var tag = reader.uint32();

          switch (tag >>> 3) {
            case 1:
              message.id = reader.string();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      };
      /**
       * Decodes a JoinReq message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof proto.room.JoinReq
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {proto.room.JoinReq} JoinReq
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      JoinReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies a JoinReq message.
       * @function verify
       * @memberof proto.room.JoinReq
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      JoinReq.verify = function verify(message) {
        if (_typeof(message) !== "object" || message === null) return "object expected";
        if (message.id != null && message.hasOwnProperty("id")) if (!$util.isString(message.id)) return "id: string expected";
        return null;
      };
      /**
       * Creates a JoinReq message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof proto.room.JoinReq
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {proto.room.JoinReq} JoinReq
       */


      JoinReq.fromObject = function fromObject(object) {
        if (object instanceof $root.proto.room.JoinReq) return object;
        var message = new $root.proto.room.JoinReq();
        if (object.id != null) message.id = String(object.id);
        return message;
      };
      /**
       * Creates a plain object from a JoinReq message. Also converts values to other types if specified.
       * @function toObject
       * @memberof proto.room.JoinReq
       * @static
       * @param {proto.room.JoinReq} message JoinReq
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      JoinReq.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) object.id = "";
        if (message.id != null && message.hasOwnProperty("id")) object.id = message.id;
        return object;
      };
      /**
       * Converts this JoinReq to JSON.
       * @function toJSON
       * @memberof proto.room.JoinReq
       * @instance
       * @returns {Object.<string,*>} JSON object
       */


      JoinReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return JoinReq;
    }();

    room.JoinRes = function () {
      /**
       * Properties of a JoinRes.
       * @memberof proto.room
       * @interface IJoinRes
       * @property {string|null} [code] JoinRes code
       * @property {proto.room.IRoom|null} [room] JoinRes room
       */

      /**
       * Constructs a new JoinRes.
       * @memberof proto.room
       * @classdesc Represents a JoinRes.
       * @implements IJoinRes
       * @constructor
       * @param {proto.room.IJoinRes=} [properties] Properties to set
       */
      function JoinRes(properties) {
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
      }
      /**
       * JoinRes code.
       * @member {string} code
       * @memberof proto.room.JoinRes
       * @instance
       */


      JoinRes.prototype.code = "";
      /**
       * JoinRes room.
       * @member {proto.room.IRoom|null|undefined} room
       * @memberof proto.room.JoinRes
       * @instance
       */

      JoinRes.prototype.room = null;
      /**
       * Creates a new JoinRes instance using the specified properties.
       * @function create
       * @memberof proto.room.JoinRes
       * @static
       * @param {proto.room.IJoinRes=} [properties] Properties to set
       * @returns {proto.room.JoinRes} JoinRes instance
       */

      JoinRes.create = function create(properties) {
        return new JoinRes(properties);
      };
      /**
       * Encodes the specified JoinRes message. Does not implicitly {@link proto.room.JoinRes.verify|verify} messages.
       * @function encode
       * @memberof proto.room.JoinRes
       * @static
       * @param {proto.room.IJoinRes} message JoinRes message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      JoinRes.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code")) writer.uint32(
        /* id 1, wireType 2 =*/
        10).string(message.code);
        if (message.room != null && Object.hasOwnProperty.call(message, "room")) $root.proto.room.Room.encode(message.room, writer.uint32(
        /* id 2, wireType 2 =*/
        18).fork()).ldelim();
        return writer;
      };
      /**
       * Encodes the specified JoinRes message, length delimited. Does not implicitly {@link proto.room.JoinRes.verify|verify} messages.
       * @function encodeDelimited
       * @memberof proto.room.JoinRes
       * @static
       * @param {proto.room.IJoinRes} message JoinRes message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      JoinRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      /**
       * Decodes a JoinRes message from the specified reader or buffer.
       * @function decode
       * @memberof proto.room.JoinRes
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {proto.room.JoinRes} JoinRes
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      JoinRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.proto.room.JoinRes();

        while (reader.pos < end) {
          var tag = reader.uint32();

          switch (tag >>> 3) {
            case 1:
              message.code = reader.string();
              break;

            case 2:
              message.room = $root.proto.room.Room.decode(reader, reader.uint32());
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      };
      /**
       * Decodes a JoinRes message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof proto.room.JoinRes
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {proto.room.JoinRes} JoinRes
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      JoinRes.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies a JoinRes message.
       * @function verify
       * @memberof proto.room.JoinRes
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      JoinRes.verify = function verify(message) {
        if (_typeof(message) !== "object" || message === null) return "object expected";
        if (message.code != null && message.hasOwnProperty("code")) if (!$util.isString(message.code)) return "code: string expected";

        if (message.room != null && message.hasOwnProperty("room")) {
          var error = $root.proto.room.Room.verify(message.room);
          if (error) return "room." + error;
        }

        return null;
      };
      /**
       * Creates a JoinRes message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof proto.room.JoinRes
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {proto.room.JoinRes} JoinRes
       */


      JoinRes.fromObject = function fromObject(object) {
        if (object instanceof $root.proto.room.JoinRes) return object;
        var message = new $root.proto.room.JoinRes();
        if (object.code != null) message.code = String(object.code);

        if (object.room != null) {
          if (_typeof(object.room) !== "object") throw TypeError(".proto.room.JoinRes.room: object expected");
          message.room = $root.proto.room.Room.fromObject(object.room);
        }

        return message;
      };
      /**
       * Creates a plain object from a JoinRes message. Also converts values to other types if specified.
       * @function toObject
       * @memberof proto.room.JoinRes
       * @static
       * @param {proto.room.JoinRes} message JoinRes
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      JoinRes.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};

        if (options.defaults) {
          object.code = "";
          object.room = null;
        }

        if (message.code != null && message.hasOwnProperty("code")) object.code = message.code;
        if (message.room != null && message.hasOwnProperty("room")) object.room = $root.proto.room.Room.toObject(message.room, options);
        return object;
      };
      /**
       * Converts this JoinRes to JSON.
       * @function toJSON
       * @memberof proto.room.JoinRes
       * @instance
       * @returns {Object.<string,*>} JSON object
       */


      JoinRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return JoinRes;
    }();

    room.ChatReq = function () {
      /**
       * Properties of a ChatReq.
       * @memberof proto.room
       * @interface IChatReq
       * @property {string|null} [content] ChatReq content
       */

      /**
       * Constructs a new ChatReq.
       * @memberof proto.room
       * @classdesc Represents a ChatReq.
       * @implements IChatReq
       * @constructor
       * @param {proto.room.IChatReq=} [properties] Properties to set
       */
      function ChatReq(properties) {
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
      }
      /**
       * ChatReq content.
       * @member {string} content
       * @memberof proto.room.ChatReq
       * @instance
       */


      ChatReq.prototype.content = "";
      /**
       * Creates a new ChatReq instance using the specified properties.
       * @function create
       * @memberof proto.room.ChatReq
       * @static
       * @param {proto.room.IChatReq=} [properties] Properties to set
       * @returns {proto.room.ChatReq} ChatReq instance
       */

      ChatReq.create = function create(properties) {
        return new ChatReq(properties);
      };
      /**
       * Encodes the specified ChatReq message. Does not implicitly {@link proto.room.ChatReq.verify|verify} messages.
       * @function encode
       * @memberof proto.room.ChatReq
       * @static
       * @param {proto.room.IChatReq} message ChatReq message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      ChatReq.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.content != null && Object.hasOwnProperty.call(message, "content")) writer.uint32(
        /* id 1, wireType 2 =*/
        10).string(message.content);
        return writer;
      };
      /**
       * Encodes the specified ChatReq message, length delimited. Does not implicitly {@link proto.room.ChatReq.verify|verify} messages.
       * @function encodeDelimited
       * @memberof proto.room.ChatReq
       * @static
       * @param {proto.room.IChatReq} message ChatReq message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      ChatReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      /**
       * Decodes a ChatReq message from the specified reader or buffer.
       * @function decode
       * @memberof proto.room.ChatReq
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {proto.room.ChatReq} ChatReq
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      ChatReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.proto.room.ChatReq();

        while (reader.pos < end) {
          var tag = reader.uint32();

          switch (tag >>> 3) {
            case 1:
              message.content = reader.string();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      };
      /**
       * Decodes a ChatReq message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof proto.room.ChatReq
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {proto.room.ChatReq} ChatReq
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      ChatReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies a ChatReq message.
       * @function verify
       * @memberof proto.room.ChatReq
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      ChatReq.verify = function verify(message) {
        if (_typeof(message) !== "object" || message === null) return "object expected";
        if (message.content != null && message.hasOwnProperty("content")) if (!$util.isString(message.content)) return "content: string expected";
        return null;
      };
      /**
       * Creates a ChatReq message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof proto.room.ChatReq
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {proto.room.ChatReq} ChatReq
       */


      ChatReq.fromObject = function fromObject(object) {
        if (object instanceof $root.proto.room.ChatReq) return object;
        var message = new $root.proto.room.ChatReq();
        if (object.content != null) message.content = String(object.content);
        return message;
      };
      /**
       * Creates a plain object from a ChatReq message. Also converts values to other types if specified.
       * @function toObject
       * @memberof proto.room.ChatReq
       * @static
       * @param {proto.room.ChatReq} message ChatReq
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      ChatReq.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) object.content = "";
        if (message.content != null && message.hasOwnProperty("content")) object.content = message.content;
        return object;
      };
      /**
       * Converts this ChatReq to JSON.
       * @function toJSON
       * @memberof proto.room.ChatReq
       * @instance
       * @returns {Object.<string,*>} JSON object
       */


      ChatReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return ChatReq;
    }();

    room.ChatNot = function () {
      /**
       * Properties of a ChatNot.
       * @memberof proto.room
       * @interface IChatNot
       * @property {string|null} [uid] ChatNot uid
       * @property {string|null} [content] ChatNot content
       */

      /**
       * Constructs a new ChatNot.
       * @memberof proto.room
       * @classdesc Represents a ChatNot.
       * @implements IChatNot
       * @constructor
       * @param {proto.room.IChatNot=} [properties] Properties to set
       */
      function ChatNot(properties) {
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
      }
      /**
       * ChatNot uid.
       * @member {string} uid
       * @memberof proto.room.ChatNot
       * @instance
       */


      ChatNot.prototype.uid = "";
      /**
       * ChatNot content.
       * @member {string} content
       * @memberof proto.room.ChatNot
       * @instance
       */

      ChatNot.prototype.content = "";
      /**
       * Creates a new ChatNot instance using the specified properties.
       * @function create
       * @memberof proto.room.ChatNot
       * @static
       * @param {proto.room.IChatNot=} [properties] Properties to set
       * @returns {proto.room.ChatNot} ChatNot instance
       */

      ChatNot.create = function create(properties) {
        return new ChatNot(properties);
      };
      /**
       * Encodes the specified ChatNot message. Does not implicitly {@link proto.room.ChatNot.verify|verify} messages.
       * @function encode
       * @memberof proto.room.ChatNot
       * @static
       * @param {proto.room.IChatNot} message ChatNot message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      ChatNot.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.uid != null && Object.hasOwnProperty.call(message, "uid")) writer.uint32(
        /* id 1, wireType 2 =*/
        10).string(message.uid);
        if (message.content != null && Object.hasOwnProperty.call(message, "content")) writer.uint32(
        /* id 2, wireType 2 =*/
        18).string(message.content);
        return writer;
      };
      /**
       * Encodes the specified ChatNot message, length delimited. Does not implicitly {@link proto.room.ChatNot.verify|verify} messages.
       * @function encodeDelimited
       * @memberof proto.room.ChatNot
       * @static
       * @param {proto.room.IChatNot} message ChatNot message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      ChatNot.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      /**
       * Decodes a ChatNot message from the specified reader or buffer.
       * @function decode
       * @memberof proto.room.ChatNot
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {proto.room.ChatNot} ChatNot
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      ChatNot.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.proto.room.ChatNot();

        while (reader.pos < end) {
          var tag = reader.uint32();

          switch (tag >>> 3) {
            case 1:
              message.uid = reader.string();
              break;

            case 2:
              message.content = reader.string();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      };
      /**
       * Decodes a ChatNot message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof proto.room.ChatNot
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {proto.room.ChatNot} ChatNot
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      ChatNot.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies a ChatNot message.
       * @function verify
       * @memberof proto.room.ChatNot
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      ChatNot.verify = function verify(message) {
        if (_typeof(message) !== "object" || message === null) return "object expected";
        if (message.uid != null && message.hasOwnProperty("uid")) if (!$util.isString(message.uid)) return "uid: string expected";
        if (message.content != null && message.hasOwnProperty("content")) if (!$util.isString(message.content)) return "content: string expected";
        return null;
      };
      /**
       * Creates a ChatNot message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof proto.room.ChatNot
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {proto.room.ChatNot} ChatNot
       */


      ChatNot.fromObject = function fromObject(object) {
        if (object instanceof $root.proto.room.ChatNot) return object;
        var message = new $root.proto.room.ChatNot();
        if (object.uid != null) message.uid = String(object.uid);
        if (object.content != null) message.content = String(object.content);
        return message;
      };
      /**
       * Creates a plain object from a ChatNot message. Also converts values to other types if specified.
       * @function toObject
       * @memberof proto.room.ChatNot
       * @static
       * @param {proto.room.ChatNot} message ChatNot
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      ChatNot.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};

        if (options.defaults) {
          object.uid = "";
          object.content = "";
        }

        if (message.uid != null && message.hasOwnProperty("uid")) object.uid = message.uid;
        if (message.content != null && message.hasOwnProperty("content")) object.content = message.content;
        return object;
      };
      /**
       * Converts this ChatNot to JSON.
       * @function toJSON
       * @memberof proto.room.ChatNot
       * @instance
       * @returns {Object.<string,*>} JSON object
       */


      ChatNot.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return ChatNot;
    }();

    room.UserAction = function () {
      /**
       * Properties of a UserAction.
       * @memberof proto.room
       * @interface IUserAction
       * @property {number|null} [action] UserAction action
       * @property {string|null} [uid] UserAction uid
       */

      /**
       * Constructs a new UserAction.
       * @memberof proto.room
       * @classdesc Represents a UserAction.
       * @implements IUserAction
       * @constructor
       * @param {proto.room.IUserAction=} [properties] Properties to set
       */
      function UserAction(properties) {
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
      }
      /**
       * UserAction action.
       * @member {number} action
       * @memberof proto.room.UserAction
       * @instance
       */


      UserAction.prototype.action = 0;
      /**
       * UserAction uid.
       * @member {string} uid
       * @memberof proto.room.UserAction
       * @instance
       */

      UserAction.prototype.uid = "";
      /**
       * Creates a new UserAction instance using the specified properties.
       * @function create
       * @memberof proto.room.UserAction
       * @static
       * @param {proto.room.IUserAction=} [properties] Properties to set
       * @returns {proto.room.UserAction} UserAction instance
       */

      UserAction.create = function create(properties) {
        return new UserAction(properties);
      };
      /**
       * Encodes the specified UserAction message. Does not implicitly {@link proto.room.UserAction.verify|verify} messages.
       * @function encode
       * @memberof proto.room.UserAction
       * @static
       * @param {proto.room.IUserAction} message UserAction message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      UserAction.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.action != null && Object.hasOwnProperty.call(message, "action")) writer.uint32(
        /* id 1, wireType 0 =*/
        8).int32(message.action);
        if (message.uid != null && Object.hasOwnProperty.call(message, "uid")) writer.uint32(
        /* id 2, wireType 2 =*/
        18).string(message.uid);
        return writer;
      };
      /**
       * Encodes the specified UserAction message, length delimited. Does not implicitly {@link proto.room.UserAction.verify|verify} messages.
       * @function encodeDelimited
       * @memberof proto.room.UserAction
       * @static
       * @param {proto.room.IUserAction} message UserAction message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      UserAction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      /**
       * Decodes a UserAction message from the specified reader or buffer.
       * @function decode
       * @memberof proto.room.UserAction
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {proto.room.UserAction} UserAction
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      UserAction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.proto.room.UserAction();

        while (reader.pos < end) {
          var tag = reader.uint32();

          switch (tag >>> 3) {
            case 1:
              message.action = reader.int32();
              break;

            case 2:
              message.uid = reader.string();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      };
      /**
       * Decodes a UserAction message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof proto.room.UserAction
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {proto.room.UserAction} UserAction
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      UserAction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies a UserAction message.
       * @function verify
       * @memberof proto.room.UserAction
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      UserAction.verify = function verify(message) {
        if (_typeof(message) !== "object" || message === null) return "object expected";
        if (message.action != null && message.hasOwnProperty("action")) if (!$util.isInteger(message.action)) return "action: integer expected";
        if (message.uid != null && message.hasOwnProperty("uid")) if (!$util.isString(message.uid)) return "uid: string expected";
        return null;
      };
      /**
       * Creates a UserAction message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof proto.room.UserAction
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {proto.room.UserAction} UserAction
       */


      UserAction.fromObject = function fromObject(object) {
        if (object instanceof $root.proto.room.UserAction) return object;
        var message = new $root.proto.room.UserAction();
        if (object.action != null) message.action = object.action | 0;
        if (object.uid != null) message.uid = String(object.uid);
        return message;
      };
      /**
       * Creates a plain object from a UserAction message. Also converts values to other types if specified.
       * @function toObject
       * @memberof proto.room.UserAction
       * @static
       * @param {proto.room.UserAction} message UserAction
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      UserAction.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};

        if (options.defaults) {
          object.action = 0;
          object.uid = "";
        }

        if (message.action != null && message.hasOwnProperty("action")) object.action = message.action;
        if (message.uid != null && message.hasOwnProperty("uid")) object.uid = message.uid;
        return object;
      };
      /**
       * Converts this UserAction to JSON.
       * @function toJSON
       * @memberof proto.room.UserAction
       * @instance
       * @returns {Object.<string,*>} JSON object
       */


      UserAction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return UserAction;
    }();

    room.CreateRoomReq = function () {
      /**
       * Properties of a CreateRoomReq.
       * @memberof proto.room
       * @interface ICreateRoomReq
       * @property {string|null} [name] CreateRoomReq name
       */

      /**
       * Constructs a new CreateRoomReq.
       * @memberof proto.room
       * @classdesc Represents a CreateRoomReq.
       * @implements ICreateRoomReq
       * @constructor
       * @param {proto.room.ICreateRoomReq=} [properties] Properties to set
       */
      function CreateRoomReq(properties) {
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
      }
      /**
       * CreateRoomReq name.
       * @member {string} name
       * @memberof proto.room.CreateRoomReq
       * @instance
       */


      CreateRoomReq.prototype.name = "";
      /**
       * Creates a new CreateRoomReq instance using the specified properties.
       * @function create
       * @memberof proto.room.CreateRoomReq
       * @static
       * @param {proto.room.ICreateRoomReq=} [properties] Properties to set
       * @returns {proto.room.CreateRoomReq} CreateRoomReq instance
       */

      CreateRoomReq.create = function create(properties) {
        return new CreateRoomReq(properties);
      };
      /**
       * Encodes the specified CreateRoomReq message. Does not implicitly {@link proto.room.CreateRoomReq.verify|verify} messages.
       * @function encode
       * @memberof proto.room.CreateRoomReq
       * @static
       * @param {proto.room.ICreateRoomReq} message CreateRoomReq message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      CreateRoomReq.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name")) writer.uint32(
        /* id 1, wireType 2 =*/
        10).string(message.name);
        return writer;
      };
      /**
       * Encodes the specified CreateRoomReq message, length delimited. Does not implicitly {@link proto.room.CreateRoomReq.verify|verify} messages.
       * @function encodeDelimited
       * @memberof proto.room.CreateRoomReq
       * @static
       * @param {proto.room.ICreateRoomReq} message CreateRoomReq message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      CreateRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      /**
       * Decodes a CreateRoomReq message from the specified reader or buffer.
       * @function decode
       * @memberof proto.room.CreateRoomReq
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {proto.room.CreateRoomReq} CreateRoomReq
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      CreateRoomReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.proto.room.CreateRoomReq();

        while (reader.pos < end) {
          var tag = reader.uint32();

          switch (tag >>> 3) {
            case 1:
              message.name = reader.string();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      };
      /**
       * Decodes a CreateRoomReq message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof proto.room.CreateRoomReq
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {proto.room.CreateRoomReq} CreateRoomReq
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      CreateRoomReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies a CreateRoomReq message.
       * @function verify
       * @memberof proto.room.CreateRoomReq
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      CreateRoomReq.verify = function verify(message) {
        if (_typeof(message) !== "object" || message === null) return "object expected";
        if (message.name != null && message.hasOwnProperty("name")) if (!$util.isString(message.name)) return "name: string expected";
        return null;
      };
      /**
       * Creates a CreateRoomReq message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof proto.room.CreateRoomReq
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {proto.room.CreateRoomReq} CreateRoomReq
       */


      CreateRoomReq.fromObject = function fromObject(object) {
        if (object instanceof $root.proto.room.CreateRoomReq) return object;
        var message = new $root.proto.room.CreateRoomReq();
        if (object.name != null) message.name = String(object.name);
        return message;
      };
      /**
       * Creates a plain object from a CreateRoomReq message. Also converts values to other types if specified.
       * @function toObject
       * @memberof proto.room.CreateRoomReq
       * @static
       * @param {proto.room.CreateRoomReq} message CreateRoomReq
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      CreateRoomReq.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) object.name = "";
        if (message.name != null && message.hasOwnProperty("name")) object.name = message.name;
        return object;
      };
      /**
       * Converts this CreateRoomReq to JSON.
       * @function toJSON
       * @memberof proto.room.CreateRoomReq
       * @instance
       * @returns {Object.<string,*>} JSON object
       */


      CreateRoomReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return CreateRoomReq;
    }();

    room.CreateRoomRes = function () {
      /**
       * Properties of a CreateRoomRes.
       * @memberof proto.room
       * @interface ICreateRoomRes
       * @property {string|null} [code] CreateRoomRes code
       * @property {proto.room.IRoom|null} [room] CreateRoomRes room
       * @property {string|null} [serverId] CreateRoomRes serverId
       */

      /**
       * Constructs a new CreateRoomRes.
       * @memberof proto.room
       * @classdesc Represents a CreateRoomRes.
       * @implements ICreateRoomRes
       * @constructor
       * @param {proto.room.ICreateRoomRes=} [properties] Properties to set
       */
      function CreateRoomRes(properties) {
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
      }
      /**
       * CreateRoomRes code.
       * @member {string} code
       * @memberof proto.room.CreateRoomRes
       * @instance
       */


      CreateRoomRes.prototype.code = "";
      /**
       * CreateRoomRes room.
       * @member {proto.room.IRoom|null|undefined} room
       * @memberof proto.room.CreateRoomRes
       * @instance
       */

      CreateRoomRes.prototype.room = null;
      /**
       * CreateRoomRes serverId.
       * @member {string} serverId
       * @memberof proto.room.CreateRoomRes
       * @instance
       */

      CreateRoomRes.prototype.serverId = "";
      /**
       * Creates a new CreateRoomRes instance using the specified properties.
       * @function create
       * @memberof proto.room.CreateRoomRes
       * @static
       * @param {proto.room.ICreateRoomRes=} [properties] Properties to set
       * @returns {proto.room.CreateRoomRes} CreateRoomRes instance
       */

      CreateRoomRes.create = function create(properties) {
        return new CreateRoomRes(properties);
      };
      /**
       * Encodes the specified CreateRoomRes message. Does not implicitly {@link proto.room.CreateRoomRes.verify|verify} messages.
       * @function encode
       * @memberof proto.room.CreateRoomRes
       * @static
       * @param {proto.room.ICreateRoomRes} message CreateRoomRes message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      CreateRoomRes.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code")) writer.uint32(
        /* id 1, wireType 2 =*/
        10).string(message.code);
        if (message.room != null && Object.hasOwnProperty.call(message, "room")) $root.proto.room.Room.encode(message.room, writer.uint32(
        /* id 2, wireType 2 =*/
        18).fork()).ldelim();
        if (message.serverId != null && Object.hasOwnProperty.call(message, "serverId")) writer.uint32(
        /* id 3, wireType 2 =*/
        26).string(message.serverId);
        return writer;
      };
      /**
       * Encodes the specified CreateRoomRes message, length delimited. Does not implicitly {@link proto.room.CreateRoomRes.verify|verify} messages.
       * @function encodeDelimited
       * @memberof proto.room.CreateRoomRes
       * @static
       * @param {proto.room.ICreateRoomRes} message CreateRoomRes message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      CreateRoomRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      /**
       * Decodes a CreateRoomRes message from the specified reader or buffer.
       * @function decode
       * @memberof proto.room.CreateRoomRes
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {proto.room.CreateRoomRes} CreateRoomRes
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      CreateRoomRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.proto.room.CreateRoomRes();

        while (reader.pos < end) {
          var tag = reader.uint32();

          switch (tag >>> 3) {
            case 1:
              message.code = reader.string();
              break;

            case 2:
              message.room = $root.proto.room.Room.decode(reader, reader.uint32());
              break;

            case 3:
              message.serverId = reader.string();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      };
      /**
       * Decodes a CreateRoomRes message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof proto.room.CreateRoomRes
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {proto.room.CreateRoomRes} CreateRoomRes
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      CreateRoomRes.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies a CreateRoomRes message.
       * @function verify
       * @memberof proto.room.CreateRoomRes
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      CreateRoomRes.verify = function verify(message) {
        if (_typeof(message) !== "object" || message === null) return "object expected";
        if (message.code != null && message.hasOwnProperty("code")) if (!$util.isString(message.code)) return "code: string expected";

        if (message.room != null && message.hasOwnProperty("room")) {
          var error = $root.proto.room.Room.verify(message.room);
          if (error) return "room." + error;
        }

        if (message.serverId != null && message.hasOwnProperty("serverId")) if (!$util.isString(message.serverId)) return "serverId: string expected";
        return null;
      };
      /**
       * Creates a CreateRoomRes message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof proto.room.CreateRoomRes
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {proto.room.CreateRoomRes} CreateRoomRes
       */


      CreateRoomRes.fromObject = function fromObject(object) {
        if (object instanceof $root.proto.room.CreateRoomRes) return object;
        var message = new $root.proto.room.CreateRoomRes();
        if (object.code != null) message.code = String(object.code);

        if (object.room != null) {
          if (_typeof(object.room) !== "object") throw TypeError(".proto.room.CreateRoomRes.room: object expected");
          message.room = $root.proto.room.Room.fromObject(object.room);
        }

        if (object.serverId != null) message.serverId = String(object.serverId);
        return message;
      };
      /**
       * Creates a plain object from a CreateRoomRes message. Also converts values to other types if specified.
       * @function toObject
       * @memberof proto.room.CreateRoomRes
       * @static
       * @param {proto.room.CreateRoomRes} message CreateRoomRes
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      CreateRoomRes.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};

        if (options.defaults) {
          object.code = "";
          object.room = null;
          object.serverId = "";
        }

        if (message.code != null && message.hasOwnProperty("code")) object.code = message.code;
        if (message.room != null && message.hasOwnProperty("room")) object.room = $root.proto.room.Room.toObject(message.room, options);
        if (message.serverId != null && message.hasOwnProperty("serverId")) object.serverId = message.serverId;
        return object;
      };
      /**
       * Converts this CreateRoomRes to JSON.
       * @function toJSON
       * @memberof proto.room.CreateRoomRes
       * @instance
       * @returns {Object.<string,*>} JSON object
       */


      CreateRoomRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return CreateRoomRes;
    }();

    return room;
  }();

  return proto;
}();

module.exports = $root;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwcm90by5qcyJdLCJuYW1lcyI6WyIkcHJvdG9idWYiLCJwcm90b2J1ZiIsIiRSZWFkZXIiLCJSZWFkZXIiLCIkV3JpdGVyIiwiV3JpdGVyIiwiJHV0aWwiLCJ1dGlsIiwiJHJvb3QiLCJyb290cyIsInByb3RvIiwiZ2F0ZSIsIkxvZ2luUmVxIiwicHJvcGVydGllcyIsImtleXMiLCJPYmplY3QiLCJpIiwibGVuZ3RoIiwicHJvdG90eXBlIiwidXNlcm5hbWUiLCJjcmVhdGUiLCJlbmNvZGUiLCJtZXNzYWdlIiwid3JpdGVyIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwidWludDMyIiwic3RyaW5nIiwiZW5jb2RlRGVsaW1pdGVkIiwibGRlbGltIiwiZGVjb2RlIiwicmVhZGVyIiwiZW5kIiwidW5kZWZpbmVkIiwibGVuIiwicG9zIiwidGFnIiwic2tpcFR5cGUiLCJkZWNvZGVEZWxpbWl0ZWQiLCJ2ZXJpZnkiLCJpc1N0cmluZyIsImZyb21PYmplY3QiLCJvYmplY3QiLCJTdHJpbmciLCJ0b09iamVjdCIsIm9wdGlvbnMiLCJkZWZhdWx0cyIsInRvSlNPTiIsImNvbnN0cnVjdG9yIiwidG9KU09OT3B0aW9ucyIsIkxvZ2luUmVzIiwiY29kZSIsInVpZCIsIkdldFVzZXJJbmZvUmVxIiwiR2V0VXNlckluZm9SZXMiLCJtZ3IiLCJSb29tIiwiaWQiLCJuYW1lIiwic3RhdHVzIiwiaW50MzIiLCJpc0ludGVnZXIiLCJHZXRSb29tTGlzdFJlcSIsIkdldFJvb21MaXN0UmVzIiwicm9vbXMiLCJlbXB0eUFycmF5IiwiZm9yayIsInB1c2giLCJBcnJheSIsImlzQXJyYXkiLCJlcnJvciIsIlR5cGVFcnJvciIsImFycmF5cyIsImoiLCJDcmVhdGVSb29tUmVxIiwiQ3JlYXRlUm9vbVJlcyIsInNlcnZlcklkIiwicm9vbSIsIlVzZXIiLCJ1c2VycyIsIkpvaW5SZXEiLCJKb2luUmVzIiwiQ2hhdFJlcSIsImNvbnRlbnQiLCJDaGF0Tm90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RCxTQUFkLENBQXdCNkIsTUFBeEIsR0FBaUMsU0FBU0EsTUFBVCxHQUFrQjtBQUMvQyxlQUFPLEtBQUtDLFdBQUwsQ0FBaUJKLFFBQWpCLENBQTBCLElBQTFCLEVBQWdDNUMsU0FBUyxDQUFDTyxJQUFWLENBQWUwQyxhQUEvQyxDQUFQO0FBQ0gsT0FGRDs7QUFJQSxhQUFPMEIsYUFBUDtBQUNILEtBM09vQixFQUFyQjs7QUE2T0EsV0FBT0UsSUFBUDtBQUNILEdBbjNEWSxFQUFiOztBQXEzREEsU0FBT25FLEtBQVA7QUFDSCxDQTd0SGEsRUFBZDs7QUErdEhBNkUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCaEYsS0FBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qZXNsaW50LWRpc2FibGUgYmxvY2stc2NvcGVkLXZhciwgaWQtbGVuZ3RoLCBuby1jb250cm9sLXJlZ2V4LCBuby1tYWdpYy1udW1iZXJzLCBuby1wcm90b3R5cGUtYnVpbHRpbnMsIG5vLXJlZGVjbGFyZSwgbm8tc2hhZG93LCBuby12YXIsIHNvcnQtdmFycyovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gdmFyICRwcm90b2J1ZiA9IHJlcXVpcmUoXCJwcm90b2J1ZmpzL21pbmltYWxcIik7XHJcbnZhciAkcHJvdG9idWYgPSBwcm90b2J1ZlxyXG4vLyBDb21tb24gYWxpYXNlc1xyXG52YXIgJFJlYWRlciA9ICRwcm90b2J1Zi5SZWFkZXIsICRXcml0ZXIgPSAkcHJvdG9idWYuV3JpdGVyLCAkdXRpbCA9ICRwcm90b2J1Zi51dGlsO1xyXG5cclxuLy8gRXhwb3J0ZWQgcm9vdCBuYW1lc3BhY2VcclxudmFyICRyb290ID0gJHByb3RvYnVmLnJvb3RzW1wiZGVmYXVsdFwiXSB8fCAoJHByb3RvYnVmLnJvb3RzW1wiZGVmYXVsdFwiXSA9IHt9KTtcclxuXHJcbiRyb290LnByb3RvID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTmFtZXNwYWNlIHByb3RvLlxyXG4gICAgICogQGV4cG9ydHMgcHJvdG9cclxuICAgICAqIEBuYW1lc3BhY2VcclxuICAgICAqL1xyXG4gICAgdmFyIHByb3RvID0ge307XHJcblxyXG4gICAgcHJvdG8uZ2F0ZSA9IChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTmFtZXNwYWNlIGdhdGV3YXkuXHJcbiAgICAgICAgICogQG1lbWJlcm9mIHByb3RvXHJcbiAgICAgICAgICogQG5hbWVzcGFjZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHZhciBnYXRlID0ge307XHJcblxyXG4gICAgICAgIGdhdGUuTG9naW5SZXEgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogUHJvcGVydGllcyBvZiBhIExvZ2luUmVxLlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8uZ2F0ZXdheVxyXG4gICAgICAgICAgICAgKiBAaW50ZXJmYWNlIElMb2dpblJlcVxyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBbdXNlcm5hbWVdIExvZ2luUmVxIHVzZXJuYW1lXHJcbiAgICAgICAgICAgICAqL1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENvbnN0cnVjdHMgYSBuZXcgTG9naW5SZXEuXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5nYXRld2F5XHJcbiAgICAgICAgICAgICAqIEBjbGFzc2Rlc2MgUmVwcmVzZW50cyBhIExvZ2luUmVxLlxyXG4gICAgICAgICAgICAgKiBAaW1wbGVtZW50cyBJTG9naW5SZXFcclxuICAgICAgICAgICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8uZ2F0ZS5JTG9naW5SZXE9fSBbcHJvcGVydGllc10gUHJvcGVydGllcyB0byBzZXRcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIExvZ2luUmVxKHByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKSwgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllc1trZXlzW2ldXSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXlzW2ldXSA9IHByb3BlcnRpZXNba2V5c1tpXV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBMb2dpblJlcSB1c2VybmFtZS5cclxuICAgICAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSB1c2VybmFtZVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8uZ2F0ZXdheS5Mb2dpblJlcVxyXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIExvZ2luUmVxLnByb3RvdHlwZS51c2VybmFtZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBMb2dpblJlcSBpbnN0YW5jZSB1c2luZyB0aGUgc3BlY2lmaWVkIHByb3BlcnRpZXMuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBjcmVhdGVcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLmdhdGV3YXkuTG9naW5SZXFcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3Byb3RvLmdhdGUuSUxvZ2luUmVxPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtwcm90by5nYXRlLkxvZ2luUmVxfSBMb2dpblJlcSBpbnN0YW5jZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTG9naW5SZXEuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKHByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTG9naW5SZXEocHJvcGVydGllcyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRW5jb2RlcyB0aGUgc3BlY2lmaWVkIExvZ2luUmVxIG1lc3NhZ2UuIERvZXMgbm90IGltcGxpY2l0bHkge0BsaW5rIHByb3RvLmdhdGUuTG9naW5SZXEudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLmdhdGV3YXkuTG9naW5SZXFcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3Byb3RvLmdhdGUuSUxvZ2luUmVxfSBtZXNzYWdlIExvZ2luUmVxIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3cml0ZXJdIFdyaXRlciB0byBlbmNvZGUgdG9cclxuICAgICAgICAgICAgICogQHJldHVybnMgeyRwcm90b2J1Zi5Xcml0ZXJ9IFdyaXRlclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTG9naW5SZXEuZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKG1lc3NhZ2UsIHdyaXRlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF3cml0ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVyID0gJFdyaXRlci5jcmVhdGUoKTtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnVzZXJuYW1lICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZSwgXCJ1c2VybmFtZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIudWludDMyKC8qIGlkIDEsIHdpcmVUeXBlIDIgPSovMTApLnN0cmluZyhtZXNzYWdlLnVzZXJuYW1lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB3cml0ZXI7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRW5jb2RlcyB0aGUgc3BlY2lmaWVkIExvZ2luUmVxIG1lc3NhZ2UsIGxlbmd0aCBkZWxpbWl0ZWQuIERvZXMgbm90IGltcGxpY2l0bHkge0BsaW5rIHByb3RvLmdhdGUuTG9naW5SZXEudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVEZWxpbWl0ZWRcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLmdhdGV3YXkuTG9naW5SZXFcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3Byb3RvLmdhdGUuSUxvZ2luUmVxfSBtZXNzYWdlIExvZ2luUmVxIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3cml0ZXJdIFdyaXRlciB0byBlbmNvZGUgdG9cclxuICAgICAgICAgICAgICogQHJldHVybnMgeyRwcm90b2J1Zi5Xcml0ZXJ9IFdyaXRlclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTG9naW5SZXEuZW5jb2RlRGVsaW1pdGVkID0gZnVuY3Rpb24gZW5jb2RlRGVsaW1pdGVkKG1lc3NhZ2UsIHdyaXRlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW5jb2RlKG1lc3NhZ2UsIHdyaXRlcikubGRlbGltKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRGVjb2RlcyBhIExvZ2luUmVxIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLmdhdGV3YXkuTG9naW5SZXFcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gcmVhZGVyIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cclxuICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGhdIE1lc3NhZ2UgbGVuZ3RoIGlmIGtub3duIGJlZm9yZWhhbmRcclxuICAgICAgICAgICAgICogQHJldHVybnMge3Byb3RvLmdhdGUuTG9naW5SZXF9IExvZ2luUmVxXHJcbiAgICAgICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGF5bG9hZCBpcyBub3QgYSByZWFkZXIgb3IgdmFsaWQgYnVmZmVyXHJcbiAgICAgICAgICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTG9naW5SZXEuZGVjb2RlID0gZnVuY3Rpb24gZGVjb2RlKHJlYWRlciwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShyZWFkZXIgaW5zdGFuY2VvZiAkUmVhZGVyKSlcclxuICAgICAgICAgICAgICAgICAgICByZWFkZXIgPSAkUmVhZGVyLmNyZWF0ZShyZWFkZXIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGgsIG1lc3NhZ2UgPSBuZXcgJHJvb3QucHJvdG8uZ2F0ZS5Mb2dpblJlcSgpO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnVzZXJuYW1lID0gcmVhZGVyLnN0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIERlY29kZXMgYSBMb2dpblJlcSBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLCBsZW5ndGggZGVsaW1pdGVkLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZGVjb2RlRGVsaW1pdGVkXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5nYXRld2F5LkxvZ2luUmVxXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuUmVhZGVyfFVpbnQ4QXJyYXl9IHJlYWRlciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtwcm90by5nYXRlLkxvZ2luUmVxfSBMb2dpblJlcVxyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIExvZ2luUmVxLmRlY29kZURlbGltaXRlZCA9IGZ1bmN0aW9uIGRlY29kZURlbGltaXRlZChyZWFkZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghKHJlYWRlciBpbnN0YW5jZW9mICRSZWFkZXIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlciA9IG5ldyAkUmVhZGVyKHJlYWRlcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFZlcmlmaWVzIGEgTG9naW5SZXEgbWVzc2FnZS5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHZlcmlmeVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8uZ2F0ZXdheS5Mb2dpblJlcVxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsKj59IG1lc3NhZ2UgUGxhaW4gb2JqZWN0IHRvIHZlcmlmeVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfG51bGx9IGBudWxsYCBpZiB2YWxpZCwgb3RoZXJ3aXNlIHRoZSByZWFzb24gd2h5IGl0IGlzIG5vdFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTG9naW5SZXEudmVyaWZ5ID0gZnVuY3Rpb24gdmVyaWZ5KG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSAhPT0gXCJvYmplY3RcIiB8fCBtZXNzYWdlID09PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm9iamVjdCBleHBlY3RlZFwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UudXNlcm5hbWUgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwidXNlcm5hbWVcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkdXRpbC5pc1N0cmluZyhtZXNzYWdlLnVzZXJuYW1lKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwidXNlcm5hbWU6IHN0cmluZyBleHBlY3RlZFwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ3JlYXRlcyBhIExvZ2luUmVxIG1lc3NhZ2UgZnJvbSBhIHBsYWluIG9iamVjdC4gQWxzbyBjb252ZXJ0cyB2YWx1ZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBpbnRlcm5hbCB0eXBlcy5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGZyb21PYmplY3RcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLmdhdGV3YXkuTG9naW5SZXFcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCo+fSBvYmplY3QgUGxhaW4gb2JqZWN0XHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtwcm90by5nYXRlLkxvZ2luUmVxfSBMb2dpblJlcVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTG9naW5SZXEuZnJvbU9iamVjdCA9IGZ1bmN0aW9uIGZyb21PYmplY3Qob2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgJHJvb3QucHJvdG8uZ2F0ZS5Mb2dpblJlcSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBuZXcgJHJvb3QucHJvdG8uZ2F0ZS5Mb2dpblJlcSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC51c2VybmFtZSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UudXNlcm5hbWUgPSBTdHJpbmcob2JqZWN0LnVzZXJuYW1lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBwbGFpbiBvYmplY3QgZnJvbSBhIExvZ2luUmVxIG1lc3NhZ2UuIEFsc28gY29udmVydHMgdmFsdWVzIHRvIG90aGVyIHR5cGVzIGlmIHNwZWNpZmllZC5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHRvT2JqZWN0XHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5nYXRld2F5LkxvZ2luUmVxXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtwcm90by5nYXRlLkxvZ2luUmVxfSBtZXNzYWdlIExvZ2luUmVxXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLklDb252ZXJzaW9uT3B0aW9uc30gW29wdGlvbnNdIENvbnZlcnNpb24gb3B0aW9uc1xyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0LjxzdHJpbmcsKj59IFBsYWluIG9iamVjdFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTG9naW5SZXEudG9PYmplY3QgPSBmdW5jdGlvbiB0b09iamVjdChtZXNzYWdlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgdmFyIG9iamVjdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGVmYXVsdHMpXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnVzZXJuYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnVzZXJuYW1lICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcInVzZXJuYW1lXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC51c2VybmFtZSA9IG1lc3NhZ2UudXNlcm5hbWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENvbnZlcnRzIHRoaXMgTG9naW5SZXEgdG8gSlNPTi5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHRvSlNPTlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8uZ2F0ZXdheS5Mb2dpblJlcVxyXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgICAgICogQHJldHVybnMge09iamVjdC48c3RyaW5nLCo+fSBKU09OIG9iamVjdFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTG9naW5SZXEucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnRvT2JqZWN0KHRoaXMsICRwcm90b2J1Zi51dGlsLnRvSlNPTk9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIExvZ2luUmVxO1xyXG4gICAgICAgIH0pKCk7XHJcblxyXG4gICAgICAgIGdhdGUuTG9naW5SZXMgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogUHJvcGVydGllcyBvZiBhIExvZ2luUmVzLlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8uZ2F0ZXdheVxyXG4gICAgICAgICAgICAgKiBAaW50ZXJmYWNlIElMb2dpblJlc1xyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBbY29kZV0gTG9naW5SZXMgY29kZVxyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBbdWlkXSBMb2dpblJlcyB1aWRcclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gW3VzZXJuYW1lXSBMb2dpblJlcyB1c2VybmFtZVxyXG4gICAgICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IExvZ2luUmVzLlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8uZ2F0ZXdheVxyXG4gICAgICAgICAgICAgKiBAY2xhc3NkZXNjIFJlcHJlc2VudHMgYSBMb2dpblJlcy5cclxuICAgICAgICAgICAgICogQGltcGxlbWVudHMgSUxvZ2luUmVzXHJcbiAgICAgICAgICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3Byb3RvLmdhdGUuSUxvZ2luUmVzPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBMb2dpblJlcyhwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcylcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXlzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyksIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNba2V5c1tpXV0gIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba2V5c1tpXV0gPSBwcm9wZXJ0aWVzW2tleXNbaV1dO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogTG9naW5SZXMgY29kZS5cclxuICAgICAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSBjb2RlXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5nYXRld2F5LkxvZ2luUmVzXHJcbiAgICAgICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTG9naW5SZXMucHJvdG90eXBlLmNvZGUgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIExvZ2luUmVzIHVpZC5cclxuICAgICAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSB1aWRcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLmdhdGV3YXkuTG9naW5SZXNcclxuICAgICAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBMb2dpblJlcy5wcm90b3R5cGUudWlkID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBMb2dpblJlcyB1c2VybmFtZS5cclxuICAgICAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSB1c2VybmFtZVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8uZ2F0ZXdheS5Mb2dpblJlc1xyXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIExvZ2luUmVzLnByb3RvdHlwZS51c2VybmFtZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBMb2dpblJlcyBpbnN0YW5jZSB1c2luZyB0aGUgc3BlY2lmaWVkIHByb3BlcnRpZXMuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBjcmVhdGVcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLmdhdGV3YXkuTG9naW5SZXNcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3Byb3RvLmdhdGUuSUxvZ2luUmVzPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtwcm90by5nYXRlLkxvZ2luUmVzfSBMb2dpblJlcyBpbnN0YW5jZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTG9naW5SZXMuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKHByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTG9naW5SZXMocHJvcGVydGllcyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRW5jb2RlcyB0aGUgc3BlY2lmaWVkIExvZ2luUmVzIG1lc3NhZ2UuIERvZXMgbm90IGltcGxpY2l0bHkge0BsaW5rIHByb3RvLmdhdGUuTG9naW5SZXMudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLmdhdGV3YXkuTG9naW5SZXNcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3Byb3RvLmdhdGUuSUxvZ2luUmVzfSBtZXNzYWdlIExvZ2luUmVzIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3cml0ZXJdIFdyaXRlciB0byBlbmNvZGUgdG9cclxuICAgICAgICAgICAgICogQHJldHVybnMgeyRwcm90b2J1Zi5Xcml0ZXJ9IFdyaXRlclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTG9naW5SZXMuZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKG1lc3NhZ2UsIHdyaXRlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF3cml0ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVyID0gJFdyaXRlci5jcmVhdGUoKTtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmNvZGUgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlLCBcImNvZGVcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVyLnVpbnQzMigvKiBpZCAxLCB3aXJlVHlwZSAyID0qLzEwKS5zdHJpbmcobWVzc2FnZS5jb2RlKTtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnVpZCAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2UsIFwidWlkXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlci51aW50MzIoLyogaWQgMiwgd2lyZVR5cGUgMiA9Ki8xOCkuc3RyaW5nKG1lc3NhZ2UudWlkKTtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnVzZXJuYW1lICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZSwgXCJ1c2VybmFtZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIudWludDMyKC8qIGlkIDMsIHdpcmVUeXBlIDIgPSovMjYpLnN0cmluZyhtZXNzYWdlLnVzZXJuYW1lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB3cml0ZXI7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRW5jb2RlcyB0aGUgc3BlY2lmaWVkIExvZ2luUmVzIG1lc3NhZ2UsIGxlbmd0aCBkZWxpbWl0ZWQuIERvZXMgbm90IGltcGxpY2l0bHkge0BsaW5rIHByb3RvLmdhdGUuTG9naW5SZXMudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVEZWxpbWl0ZWRcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLmdhdGV3YXkuTG9naW5SZXNcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3Byb3RvLmdhdGUuSUxvZ2luUmVzfSBtZXNzYWdlIExvZ2luUmVzIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3cml0ZXJdIFdyaXRlciB0byBlbmNvZGUgdG9cclxuICAgICAgICAgICAgICogQHJldHVybnMgeyRwcm90b2J1Zi5Xcml0ZXJ9IFdyaXRlclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTG9naW5SZXMuZW5jb2RlRGVsaW1pdGVkID0gZnVuY3Rpb24gZW5jb2RlRGVsaW1pdGVkKG1lc3NhZ2UsIHdyaXRlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW5jb2RlKG1lc3NhZ2UsIHdyaXRlcikubGRlbGltKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRGVjb2RlcyBhIExvZ2luUmVzIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLmdhdGV3YXkuTG9naW5SZXNcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gcmVhZGVyIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cclxuICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGhdIE1lc3NhZ2UgbGVuZ3RoIGlmIGtub3duIGJlZm9yZWhhbmRcclxuICAgICAgICAgICAgICogQHJldHVybnMge3Byb3RvLmdhdGUuTG9naW5SZXN9IExvZ2luUmVzXHJcbiAgICAgICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGF5bG9hZCBpcyBub3QgYSByZWFkZXIgb3IgdmFsaWQgYnVmZmVyXHJcbiAgICAgICAgICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTG9naW5SZXMuZGVjb2RlID0gZnVuY3Rpb24gZGVjb2RlKHJlYWRlciwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShyZWFkZXIgaW5zdGFuY2VvZiAkUmVhZGVyKSlcclxuICAgICAgICAgICAgICAgICAgICByZWFkZXIgPSAkUmVhZGVyLmNyZWF0ZShyZWFkZXIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGgsIG1lc3NhZ2UgPSBuZXcgJHJvb3QucHJvdG8uZ2F0ZS5Mb2dpblJlcygpO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmNvZGUgPSByZWFkZXIuc3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS51aWQgPSByZWFkZXIuc3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS51c2VybmFtZSA9IHJlYWRlci5zdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBEZWNvZGVzIGEgTG9naW5SZXMgbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgcmVhZGVyIG9yIGJ1ZmZlciwgbGVuZ3RoIGRlbGltaXRlZC5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGRlY29kZURlbGltaXRlZFxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8uZ2F0ZXdheS5Mb2dpblJlc1xyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLlJlYWRlcnxVaW50OEFycmF5fSByZWFkZXIgUmVhZGVyIG9yIGJ1ZmZlciB0byBkZWNvZGUgZnJvbVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7cHJvdG8uZ2F0ZS5Mb2dpblJlc30gTG9naW5SZXNcclxuICAgICAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXlsb2FkIGlzIG5vdCBhIHJlYWRlciBvciB2YWxpZCBidWZmZXJcclxuICAgICAgICAgICAgICogQHRocm93cyB7JHByb3RvYnVmLnV0aWwuUHJvdG9jb2xFcnJvcn0gSWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBMb2dpblJlcy5kZWNvZGVEZWxpbWl0ZWQgPSBmdW5jdGlvbiBkZWNvZGVEZWxpbWl0ZWQocmVhZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShyZWFkZXIgaW5zdGFuY2VvZiAkUmVhZGVyKSlcclxuICAgICAgICAgICAgICAgICAgICByZWFkZXIgPSBuZXcgJFJlYWRlcihyZWFkZXIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBWZXJpZmllcyBhIExvZ2luUmVzIG1lc3NhZ2UuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiB2ZXJpZnlcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLmdhdGV3YXkuTG9naW5SZXNcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCo+fSBtZXNzYWdlIFBsYWluIG9iamVjdCB0byB2ZXJpZnlcclxuICAgICAgICAgICAgICogQHJldHVybnMge3N0cmluZ3xudWxsfSBgbnVsbGAgaWYgdmFsaWQsIG90aGVyd2lzZSB0aGUgcmVhc29uIHdoeSBpdCBpcyBub3RcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIExvZ2luUmVzLnZlcmlmeSA9IGZ1bmN0aW9uIHZlcmlmeShtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgIT09IFwib2JqZWN0XCIgfHwgbWVzc2FnZSA9PT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJvYmplY3QgZXhwZWN0ZWRcIjtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmNvZGUgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwiY29kZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISR1dGlsLmlzU3RyaW5nKG1lc3NhZ2UuY29kZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImNvZGU6IHN0cmluZyBleHBlY3RlZFwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UudWlkICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcInVpZFwiKSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISR1dGlsLmlzU3RyaW5nKG1lc3NhZ2UudWlkKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwidWlkOiBzdHJpbmcgZXhwZWN0ZWRcIjtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnVzZXJuYW1lICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcInVzZXJuYW1lXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJHV0aWwuaXNTdHJpbmcobWVzc2FnZS51c2VybmFtZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInVzZXJuYW1lOiBzdHJpbmcgZXhwZWN0ZWRcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBMb2dpblJlcyBtZXNzYWdlIGZyb20gYSBwbGFpbiBvYmplY3QuIEFsc28gY29udmVydHMgdmFsdWVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgaW50ZXJuYWwgdHlwZXMuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBmcm9tT2JqZWN0XHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5nYXRld2F5LkxvZ2luUmVzXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gb2JqZWN0IFBsYWluIG9iamVjdFxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7cHJvdG8uZ2F0ZS5Mb2dpblJlc30gTG9naW5SZXNcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIExvZ2luUmVzLmZyb21PYmplY3QgPSBmdW5jdGlvbiBmcm9tT2JqZWN0KG9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mICRyb290LnByb3RvLmdhdGUuTG9naW5SZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gbmV3ICRyb290LnByb3RvLmdhdGUuTG9naW5SZXMoKTtcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3QuY29kZSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuY29kZSA9IFN0cmluZyhvYmplY3QuY29kZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0LnVpZCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UudWlkID0gU3RyaW5nKG9iamVjdC51aWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC51c2VybmFtZSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UudXNlcm5hbWUgPSBTdHJpbmcob2JqZWN0LnVzZXJuYW1lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBwbGFpbiBvYmplY3QgZnJvbSBhIExvZ2luUmVzIG1lc3NhZ2UuIEFsc28gY29udmVydHMgdmFsdWVzIHRvIG90aGVyIHR5cGVzIGlmIHNwZWNpZmllZC5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHRvT2JqZWN0XHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5nYXRld2F5LkxvZ2luUmVzXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtwcm90by5nYXRlLkxvZ2luUmVzfSBtZXNzYWdlIExvZ2luUmVzXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLklDb252ZXJzaW9uT3B0aW9uc30gW29wdGlvbnNdIENvbnZlcnNpb24gb3B0aW9uc1xyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0LjxzdHJpbmcsKj59IFBsYWluIG9iamVjdFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTG9naW5SZXMudG9PYmplY3QgPSBmdW5jdGlvbiB0b09iamVjdChtZXNzYWdlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgdmFyIG9iamVjdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGVmYXVsdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuY29kZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnVpZCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnVzZXJuYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmNvZGUgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwiY29kZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuY29kZSA9IG1lc3NhZ2UuY29kZTtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnVpZCAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJ1aWRcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnVpZCA9IG1lc3NhZ2UudWlkO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UudXNlcm5hbWUgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwidXNlcm5hbWVcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnVzZXJuYW1lID0gbWVzc2FnZS51c2VybmFtZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ29udmVydHMgdGhpcyBMb2dpblJlcyB0byBKU09OLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gdG9KU09OXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5nYXRld2F5LkxvZ2luUmVzXHJcbiAgICAgICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0LjxzdHJpbmcsKj59IEpTT04gb2JqZWN0XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBMb2dpblJlcy5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IudG9PYmplY3QodGhpcywgJHByb3RvYnVmLnV0aWwudG9KU09OT3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gTG9naW5SZXM7XHJcbiAgICAgICAgfSkoKTtcclxuXHJcbiAgICAgICAgZ2F0ZS5HZXRVc2VySW5mb1JlcSA9IChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBQcm9wZXJ0aWVzIG9mIGEgR2V0VXNlckluZm9SZXEuXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5nYXRld2F5XHJcbiAgICAgICAgICAgICAqIEBpbnRlcmZhY2UgSUdldFVzZXJJbmZvUmVxXHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IFt1aWRdIEdldFVzZXJJbmZvUmVxIHVpZFxyXG4gICAgICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IEdldFVzZXJJbmZvUmVxLlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8uZ2F0ZXdheVxyXG4gICAgICAgICAgICAgKiBAY2xhc3NkZXNjIFJlcHJlc2VudHMgYSBHZXRVc2VySW5mb1JlcS5cclxuICAgICAgICAgICAgICogQGltcGxlbWVudHMgSUdldFVzZXJJbmZvUmVxXHJcbiAgICAgICAgICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3Byb3RvLmdhdGUuSUdldFVzZXJJbmZvUmVxPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBHZXRVc2VySW5mb1JlcShwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcylcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXlzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyksIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNba2V5c1tpXV0gIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba2V5c1tpXV0gPSBwcm9wZXJ0aWVzW2tleXNbaV1dO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogR2V0VXNlckluZm9SZXEgdWlkLlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IHVpZFxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8uZ2F0ZXdheS5HZXRVc2VySW5mb1JlcVxyXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEdldFVzZXJJbmZvUmVxLnByb3RvdHlwZS51aWQgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBuZXcgR2V0VXNlckluZm9SZXEgaW5zdGFuY2UgdXNpbmcgdGhlIHNwZWNpZmllZCBwcm9wZXJ0aWVzLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gY3JlYXRlXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5nYXRld2F5LkdldFVzZXJJbmZvUmVxXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtwcm90by5nYXRlLklHZXRVc2VySW5mb1JlcT19IFtwcm9wZXJ0aWVzXSBQcm9wZXJ0aWVzIHRvIHNldFxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7cHJvdG8uZ2F0ZS5HZXRVc2VySW5mb1JlcX0gR2V0VXNlckluZm9SZXEgaW5zdGFuY2VcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEdldFVzZXJJbmZvUmVxLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEdldFVzZXJJbmZvUmVxKHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBHZXRVc2VySW5mb1JlcSBtZXNzYWdlLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBwcm90by5nYXRlLkdldFVzZXJJbmZvUmVxLnZlcmlmeXx2ZXJpZnl9IG1lc3NhZ2VzLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZW5jb2RlXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5nYXRld2F5LkdldFVzZXJJbmZvUmVxXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtwcm90by5nYXRlLklHZXRVc2VySW5mb1JlcX0gbWVzc2FnZSBHZXRVc2VySW5mb1JlcSBtZXNzYWdlIG9yIHBsYWluIG9iamVjdCB0byBlbmNvZGVcclxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuV3JpdGVyfSBbd3JpdGVyXSBXcml0ZXIgdG8gZW5jb2RlIHRvXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEdldFVzZXJJbmZvUmVxLmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZShtZXNzYWdlLCB3cml0ZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghd3JpdGVyKVxyXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlciA9ICRXcml0ZXIuY3JlYXRlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS51aWQgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlLCBcInVpZFwiKSlcclxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIudWludDMyKC8qIGlkIDEsIHdpcmVUeXBlIDIgPSovMTApLnN0cmluZyhtZXNzYWdlLnVpZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gd3JpdGVyO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBHZXRVc2VySW5mb1JlcSBtZXNzYWdlLCBsZW5ndGggZGVsaW1pdGVkLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBwcm90by5nYXRlLkdldFVzZXJJbmZvUmVxLnZlcmlmeXx2ZXJpZnl9IG1lc3NhZ2VzLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZW5jb2RlRGVsaW1pdGVkXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5nYXRld2F5LkdldFVzZXJJbmZvUmVxXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtwcm90by5nYXRlLklHZXRVc2VySW5mb1JlcX0gbWVzc2FnZSBHZXRVc2VySW5mb1JlcSBtZXNzYWdlIG9yIHBsYWluIG9iamVjdCB0byBlbmNvZGVcclxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuV3JpdGVyfSBbd3JpdGVyXSBXcml0ZXIgdG8gZW5jb2RlIHRvXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEdldFVzZXJJbmZvUmVxLmVuY29kZURlbGltaXRlZCA9IGZ1bmN0aW9uIGVuY29kZURlbGltaXRlZChtZXNzYWdlLCB3cml0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVuY29kZShtZXNzYWdlLCB3cml0ZXIpLmxkZWxpbSgpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIERlY29kZXMgYSBHZXRVc2VySW5mb1JlcSBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZGVjb2RlXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5nYXRld2F5LkdldFVzZXJJbmZvUmVxXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuUmVhZGVyfFVpbnQ4QXJyYXl9IHJlYWRlciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoXSBNZXNzYWdlIGxlbmd0aCBpZiBrbm93biBiZWZvcmVoYW5kXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtwcm90by5nYXRlLkdldFVzZXJJbmZvUmVxfSBHZXRVc2VySW5mb1JlcVxyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEdldFVzZXJJbmZvUmVxLmRlY29kZSA9IGZ1bmN0aW9uIGRlY29kZShyZWFkZXIsIGxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEocmVhZGVyIGluc3RhbmNlb2YgJFJlYWRlcikpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyID0gJFJlYWRlci5jcmVhdGUocmVhZGVyKTtcclxuICAgICAgICAgICAgICAgIHZhciBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoLCBtZXNzYWdlID0gbmV3ICRyb290LnByb3RvLmdhdGUuR2V0VXNlckluZm9SZXEoKTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhZyA9IHJlYWRlci51aW50MzIoKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS51aWQgPSByZWFkZXIuc3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRGVjb2RlcyBhIEdldFVzZXJJbmZvUmVxIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIsIGxlbmd0aCBkZWxpbWl0ZWQuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVEZWxpbWl0ZWRcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLmdhdGV3YXkuR2V0VXNlckluZm9SZXFcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gcmVhZGVyIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cclxuICAgICAgICAgICAgICogQHJldHVybnMge3Byb3RvLmdhdGUuR2V0VXNlckluZm9SZXF9IEdldFVzZXJJbmZvUmVxXHJcbiAgICAgICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGF5bG9hZCBpcyBub3QgYSByZWFkZXIgb3IgdmFsaWQgYnVmZmVyXHJcbiAgICAgICAgICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgR2V0VXNlckluZm9SZXEuZGVjb2RlRGVsaW1pdGVkID0gZnVuY3Rpb24gZGVjb2RlRGVsaW1pdGVkKHJlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEocmVhZGVyIGluc3RhbmNlb2YgJFJlYWRlcikpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyID0gbmV3ICRSZWFkZXIocmVhZGVyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVmVyaWZpZXMgYSBHZXRVc2VySW5mb1JlcSBtZXNzYWdlLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gdmVyaWZ5XHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5nYXRld2F5LkdldFVzZXJJbmZvUmVxXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gbWVzc2FnZSBQbGFpbiBvYmplY3QgdG8gdmVyaWZ5XHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd8bnVsbH0gYG51bGxgIGlmIHZhbGlkLCBvdGhlcndpc2UgdGhlIHJlYXNvbiB3aHkgaXQgaXMgbm90XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBHZXRVc2VySW5mb1JlcS52ZXJpZnkgPSBmdW5jdGlvbiB2ZXJpZnkobWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlICE9PSBcIm9iamVjdFwiIHx8IG1lc3NhZ2UgPT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwib2JqZWN0IGV4cGVjdGVkXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS51aWQgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwidWlkXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJHV0aWwuaXNTdHJpbmcobWVzc2FnZS51aWQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ1aWQ6IHN0cmluZyBleHBlY3RlZFwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ3JlYXRlcyBhIEdldFVzZXJJbmZvUmVxIG1lc3NhZ2UgZnJvbSBhIHBsYWluIG9iamVjdC4gQWxzbyBjb252ZXJ0cyB2YWx1ZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBpbnRlcm5hbCB0eXBlcy5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGZyb21PYmplY3RcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLmdhdGV3YXkuR2V0VXNlckluZm9SZXFcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCo+fSBvYmplY3QgUGxhaW4gb2JqZWN0XHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtwcm90by5nYXRlLkdldFVzZXJJbmZvUmVxfSBHZXRVc2VySW5mb1JlcVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgR2V0VXNlckluZm9SZXEuZnJvbU9iamVjdCA9IGZ1bmN0aW9uIGZyb21PYmplY3Qob2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgJHJvb3QucHJvdG8uZ2F0ZS5HZXRVc2VySW5mb1JlcSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBuZXcgJHJvb3QucHJvdG8uZ2F0ZS5HZXRVc2VySW5mb1JlcSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC51aWQgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnVpZCA9IFN0cmluZyhvYmplY3QudWlkKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBwbGFpbiBvYmplY3QgZnJvbSBhIEdldFVzZXJJbmZvUmVxIG1lc3NhZ2UuIEFsc28gY29udmVydHMgdmFsdWVzIHRvIG90aGVyIHR5cGVzIGlmIHNwZWNpZmllZC5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHRvT2JqZWN0XHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5nYXRld2F5LkdldFVzZXJJbmZvUmVxXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtwcm90by5nYXRlLkdldFVzZXJJbmZvUmVxfSBtZXNzYWdlIEdldFVzZXJJbmZvUmVxXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLklDb252ZXJzaW9uT3B0aW9uc30gW29wdGlvbnNdIENvbnZlcnNpb24gb3B0aW9uc1xyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0LjxzdHJpbmcsKj59IFBsYWluIG9iamVjdFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgR2V0VXNlckluZm9SZXEudG9PYmplY3QgPSBmdW5jdGlvbiB0b09iamVjdChtZXNzYWdlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgdmFyIG9iamVjdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGVmYXVsdHMpXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnVpZCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS51aWQgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwidWlkXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC51aWQgPSBtZXNzYWdlLnVpZDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ29udmVydHMgdGhpcyBHZXRVc2VySW5mb1JlcSB0byBKU09OLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gdG9KU09OXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5nYXRld2F5LkdldFVzZXJJbmZvUmVxXHJcbiAgICAgICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0LjxzdHJpbmcsKj59IEpTT04gb2JqZWN0XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBHZXRVc2VySW5mb1JlcS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IudG9PYmplY3QodGhpcywgJHByb3RvYnVmLnV0aWwudG9KU09OT3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gR2V0VXNlckluZm9SZXE7XHJcbiAgICAgICAgfSkoKTtcclxuXHJcbiAgICAgICAgZ2F0ZS5HZXRVc2VySW5mb1JlcyA9IChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBQcm9wZXJ0aWVzIG9mIGEgR2V0VXNlckluZm9SZXMuXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5nYXRld2F5XHJcbiAgICAgICAgICAgICAqIEBpbnRlcmZhY2UgSUdldFVzZXJJbmZvUmVzXHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IFtjb2RlXSBHZXRVc2VySW5mb1JlcyBjb2RlXHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IFt1aWRdIEdldFVzZXJJbmZvUmVzIHVpZFxyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBbdXNlcm5hbWVdIEdldFVzZXJJbmZvUmVzIHVzZXJuYW1lXHJcbiAgICAgICAgICAgICAqL1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENvbnN0cnVjdHMgYSBuZXcgR2V0VXNlckluZm9SZXMuXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5nYXRld2F5XHJcbiAgICAgICAgICAgICAqIEBjbGFzc2Rlc2MgUmVwcmVzZW50cyBhIEdldFVzZXJJbmZvUmVzLlxyXG4gICAgICAgICAgICAgKiBAaW1wbGVtZW50cyBJR2V0VXNlckluZm9SZXNcclxuICAgICAgICAgICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8uZ2F0ZS5JR2V0VXNlckluZm9SZXM9fSBbcHJvcGVydGllc10gUHJvcGVydGllcyB0byBzZXRcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIEdldFVzZXJJbmZvUmVzKHByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKSwgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllc1trZXlzW2ldXSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXlzW2ldXSA9IHByb3BlcnRpZXNba2V5c1tpXV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBHZXRVc2VySW5mb1JlcyBjb2RlLlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IGNvZGVcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLmdhdGV3YXkuR2V0VXNlckluZm9SZXNcclxuICAgICAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBHZXRVc2VySW5mb1Jlcy5wcm90b3R5cGUuY29kZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogR2V0VXNlckluZm9SZXMgdWlkLlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IHVpZFxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8uZ2F0ZXdheS5HZXRVc2VySW5mb1Jlc1xyXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEdldFVzZXJJbmZvUmVzLnByb3RvdHlwZS51aWQgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEdldFVzZXJJbmZvUmVzIHVzZXJuYW1lLlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IHVzZXJuYW1lXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5nYXRld2F5LkdldFVzZXJJbmZvUmVzXHJcbiAgICAgICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgR2V0VXNlckluZm9SZXMucHJvdG90eXBlLnVzZXJuYW1lID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IEdldFVzZXJJbmZvUmVzIGluc3RhbmNlIHVzaW5nIHRoZSBzcGVjaWZpZWQgcHJvcGVydGllcy5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGNyZWF0ZVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8uZ2F0ZXdheS5HZXRVc2VySW5mb1Jlc1xyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8uZ2F0ZS5JR2V0VXNlckluZm9SZXM9fSBbcHJvcGVydGllc10gUHJvcGVydGllcyB0byBzZXRcclxuICAgICAgICAgICAgICogQHJldHVybnMge3Byb3RvLmdhdGUuR2V0VXNlckluZm9SZXN9IEdldFVzZXJJbmZvUmVzIGluc3RhbmNlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBHZXRVc2VySW5mb1Jlcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUocHJvcGVydGllcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBHZXRVc2VySW5mb1Jlcyhwcm9wZXJ0aWVzKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgR2V0VXNlckluZm9SZXMgbWVzc2FnZS4gRG9lcyBub3QgaW1wbGljaXRseSB7QGxpbmsgcHJvdG8uZ2F0ZS5HZXRVc2VySW5mb1Jlcy52ZXJpZnl8dmVyaWZ5fSBtZXNzYWdlcy5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGVuY29kZVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8uZ2F0ZXdheS5HZXRVc2VySW5mb1Jlc1xyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8uZ2F0ZS5JR2V0VXNlckluZm9SZXN9IG1lc3NhZ2UgR2V0VXNlckluZm9SZXMgbWVzc2FnZSBvciBwbGFpbiBvYmplY3QgdG8gZW5jb2RlXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLldyaXRlcn0gW3dyaXRlcl0gV3JpdGVyIHRvIGVuY29kZSB0b1xyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7JHByb3RvYnVmLldyaXRlcn0gV3JpdGVyXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBHZXRVc2VySW5mb1Jlcy5lbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGUobWVzc2FnZSwgd3JpdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXdyaXRlcilcclxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIgPSAkV3JpdGVyLmNyZWF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuY29kZSAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2UsIFwiY29kZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIudWludDMyKC8qIGlkIDEsIHdpcmVUeXBlIDIgPSovMTApLnN0cmluZyhtZXNzYWdlLmNvZGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UudWlkICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZSwgXCJ1aWRcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVyLnVpbnQzMigvKiBpZCAyLCB3aXJlVHlwZSAyID0qLzE4KS5zdHJpbmcobWVzc2FnZS51aWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UudXNlcm5hbWUgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlLCBcInVzZXJuYW1lXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlci51aW50MzIoLyogaWQgMywgd2lyZVR5cGUgMiA9Ki8yNikuc3RyaW5nKG1lc3NhZ2UudXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdyaXRlcjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgR2V0VXNlckluZm9SZXMgbWVzc2FnZSwgbGVuZ3RoIGRlbGltaXRlZC4gRG9lcyBub3QgaW1wbGljaXRseSB7QGxpbmsgcHJvdG8uZ2F0ZS5HZXRVc2VySW5mb1Jlcy52ZXJpZnl8dmVyaWZ5fSBtZXNzYWdlcy5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGVuY29kZURlbGltaXRlZFxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8uZ2F0ZXdheS5HZXRVc2VySW5mb1Jlc1xyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8uZ2F0ZS5JR2V0VXNlckluZm9SZXN9IG1lc3NhZ2UgR2V0VXNlckluZm9SZXMgbWVzc2FnZSBvciBwbGFpbiBvYmplY3QgdG8gZW5jb2RlXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLldyaXRlcn0gW3dyaXRlcl0gV3JpdGVyIHRvIGVuY29kZSB0b1xyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7JHByb3RvYnVmLldyaXRlcn0gV3JpdGVyXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBHZXRVc2VySW5mb1Jlcy5lbmNvZGVEZWxpbWl0ZWQgPSBmdW5jdGlvbiBlbmNvZGVEZWxpbWl0ZWQobWVzc2FnZSwgd3JpdGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbmNvZGUobWVzc2FnZSwgd3JpdGVyKS5sZGVsaW0oKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBEZWNvZGVzIGEgR2V0VXNlckluZm9SZXMgbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgcmVhZGVyIG9yIGJ1ZmZlci5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGRlY29kZVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8uZ2F0ZXdheS5HZXRVc2VySW5mb1Jlc1xyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLlJlYWRlcnxVaW50OEFycmF5fSByZWFkZXIgUmVhZGVyIG9yIGJ1ZmZlciB0byBkZWNvZGUgZnJvbVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aF0gTWVzc2FnZSBsZW5ndGggaWYga25vd24gYmVmb3JlaGFuZFxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7cHJvdG8uZ2F0ZS5HZXRVc2VySW5mb1Jlc30gR2V0VXNlckluZm9SZXNcclxuICAgICAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXlsb2FkIGlzIG5vdCBhIHJlYWRlciBvciB2YWxpZCBidWZmZXJcclxuICAgICAgICAgICAgICogQHRocm93cyB7JHByb3RvYnVmLnV0aWwuUHJvdG9jb2xFcnJvcn0gSWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBHZXRVc2VySW5mb1Jlcy5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGUocmVhZGVyLCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghKHJlYWRlciBpbnN0YW5jZW9mICRSZWFkZXIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlciA9ICRSZWFkZXIuY3JlYXRlKHJlYWRlcik7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aCwgbWVzc2FnZSA9IG5ldyAkcm9vdC5wcm90by5nYXRlLkdldFVzZXJJbmZvUmVzKCk7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWcgPSByZWFkZXIudWludDMyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuY29kZSA9IHJlYWRlci5zdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnVpZCA9IHJlYWRlci5zdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnVzZXJuYW1lID0gcmVhZGVyLnN0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIERlY29kZXMgYSBHZXRVc2VySW5mb1JlcyBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLCBsZW5ndGggZGVsaW1pdGVkLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZGVjb2RlRGVsaW1pdGVkXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5nYXRld2F5LkdldFVzZXJJbmZvUmVzXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuUmVhZGVyfFVpbnQ4QXJyYXl9IHJlYWRlciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtwcm90by5nYXRlLkdldFVzZXJJbmZvUmVzfSBHZXRVc2VySW5mb1Jlc1xyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEdldFVzZXJJbmZvUmVzLmRlY29kZURlbGltaXRlZCA9IGZ1bmN0aW9uIGRlY29kZURlbGltaXRlZChyZWFkZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghKHJlYWRlciBpbnN0YW5jZW9mICRSZWFkZXIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlciA9IG5ldyAkUmVhZGVyKHJlYWRlcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFZlcmlmaWVzIGEgR2V0VXNlckluZm9SZXMgbWVzc2FnZS5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHZlcmlmeVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8uZ2F0ZXdheS5HZXRVc2VySW5mb1Jlc1xyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsKj59IG1lc3NhZ2UgUGxhaW4gb2JqZWN0IHRvIHZlcmlmeVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfG51bGx9IGBudWxsYCBpZiB2YWxpZCwgb3RoZXJ3aXNlIHRoZSByZWFzb24gd2h5IGl0IGlzIG5vdFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgR2V0VXNlckluZm9SZXMudmVyaWZ5ID0gZnVuY3Rpb24gdmVyaWZ5KG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSAhPT0gXCJvYmplY3RcIiB8fCBtZXNzYWdlID09PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm9iamVjdCBleHBlY3RlZFwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuY29kZSAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJjb2RlXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJHV0aWwuaXNTdHJpbmcobWVzc2FnZS5jb2RlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiY29kZTogc3RyaW5nIGV4cGVjdGVkXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS51aWQgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwidWlkXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJHV0aWwuaXNTdHJpbmcobWVzc2FnZS51aWQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ1aWQ6IHN0cmluZyBleHBlY3RlZFwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UudXNlcm5hbWUgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwidXNlcm5hbWVcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkdXRpbC5pc1N0cmluZyhtZXNzYWdlLnVzZXJuYW1lKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwidXNlcm5hbWU6IHN0cmluZyBleHBlY3RlZFwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ3JlYXRlcyBhIEdldFVzZXJJbmZvUmVzIG1lc3NhZ2UgZnJvbSBhIHBsYWluIG9iamVjdC4gQWxzbyBjb252ZXJ0cyB2YWx1ZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBpbnRlcm5hbCB0eXBlcy5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGZyb21PYmplY3RcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLmdhdGV3YXkuR2V0VXNlckluZm9SZXNcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCo+fSBvYmplY3QgUGxhaW4gb2JqZWN0XHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtwcm90by5nYXRlLkdldFVzZXJJbmZvUmVzfSBHZXRVc2VySW5mb1Jlc1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgR2V0VXNlckluZm9SZXMuZnJvbU9iamVjdCA9IGZ1bmN0aW9uIGZyb21PYmplY3Qob2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgJHJvb3QucHJvdG8uZ2F0ZS5HZXRVc2VySW5mb1JlcylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBuZXcgJHJvb3QucHJvdG8uZ2F0ZS5HZXRVc2VySW5mb1JlcygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5jb2RlICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5jb2RlID0gU3RyaW5nKG9iamVjdC5jb2RlKTtcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3QudWlkICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS51aWQgPSBTdHJpbmcob2JqZWN0LnVpZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0LnVzZXJuYW1lICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS51c2VybmFtZSA9IFN0cmluZyhvYmplY3QudXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ3JlYXRlcyBhIHBsYWluIG9iamVjdCBmcm9tIGEgR2V0VXNlckluZm9SZXMgbWVzc2FnZS4gQWxzbyBjb252ZXJ0cyB2YWx1ZXMgdG8gb3RoZXIgdHlwZXMgaWYgc3BlY2lmaWVkLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gdG9PYmplY3RcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLmdhdGV3YXkuR2V0VXNlckluZm9SZXNcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3Byb3RvLmdhdGUuR2V0VXNlckluZm9SZXN9IG1lc3NhZ2UgR2V0VXNlckluZm9SZXNcclxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuSUNvbnZlcnNpb25PcHRpb25zfSBbb3B0aW9uc10gQ29udmVyc2lvbiBvcHRpb25zXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtPYmplY3QuPHN0cmluZywqPn0gUGxhaW4gb2JqZWN0XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBHZXRVc2VySW5mb1Jlcy50b09iamVjdCA9IGZ1bmN0aW9uIHRvT2JqZWN0KG1lc3NhZ2UsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucylcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0ge307XHJcbiAgICAgICAgICAgICAgICB2YXIgb2JqZWN0ID0ge307XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5kZWZhdWx0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5jb2RlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QudWlkID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QudXNlcm5hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuY29kZSAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJjb2RlXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5jb2RlID0gbWVzc2FnZS5jb2RlO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UudWlkICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcInVpZFwiKSlcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QudWlkID0gbWVzc2FnZS51aWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS51c2VybmFtZSAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJ1c2VybmFtZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QudXNlcm5hbWUgPSBtZXNzYWdlLnVzZXJuYW1lO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDb252ZXJ0cyB0aGlzIEdldFVzZXJJbmZvUmVzIHRvIEpTT04uXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiB0b0pTT05cclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLmdhdGV3YXkuR2V0VXNlckluZm9SZXNcclxuICAgICAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtPYmplY3QuPHN0cmluZywqPn0gSlNPTiBvYmplY3RcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEdldFVzZXJJbmZvUmVzLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci50b09iamVjdCh0aGlzLCAkcHJvdG9idWYudXRpbC50b0pTT05PcHRpb25zKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBHZXRVc2VySW5mb1JlcztcclxuICAgICAgICB9KSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gZ2F0ZTtcclxuICAgIH0pKCk7XHJcblxyXG4gICAgcHJvdG8ubWdyID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBOYW1lc3BhY2UgbWdyLlxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBwcm90b1xyXG4gICAgICAgICAqIEBuYW1lc3BhY2VcclxuICAgICAgICAgKi9cclxuICAgICAgICB2YXIgbWdyID0ge307XHJcblxyXG4gICAgICAgIG1nci5Sb29tID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFByb3BlcnRpZXMgb2YgYSBSb29tLlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ubWdyXHJcbiAgICAgICAgICAgICAqIEBpbnRlcmZhY2UgSVJvb21cclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gW2lkXSBSb29tIGlkXHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IFtuYW1lXSBSb29tIG5hbWVcclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ8bnVsbH0gW3N0YXR1c10gUm9vbSBzdGF0dXNcclxuICAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ29uc3RydWN0cyBhIG5ldyBSb29tLlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ubWdyXHJcbiAgICAgICAgICAgICAqIEBjbGFzc2Rlc2MgUmVwcmVzZW50cyBhIFJvb20uXHJcbiAgICAgICAgICAgICAqIEBpbXBsZW1lbnRzIElSb29tXHJcbiAgICAgICAgICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3Byb3RvLm1nci5JUm9vbT19IFtwcm9wZXJ0aWVzXSBQcm9wZXJ0aWVzIHRvIHNldFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZnVuY3Rpb24gUm9vbShwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcylcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXlzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyksIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNba2V5c1tpXV0gIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba2V5c1tpXV0gPSBwcm9wZXJ0aWVzW2tleXNbaV1dO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogUm9vbSBpZC5cclxuICAgICAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSBpZFxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ubWdyLlJvb21cclxuICAgICAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBSb29tLnByb3RvdHlwZS5pZCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogUm9vbSBuYW1lLlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IG5hbWVcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLm1nci5Sb29tXHJcbiAgICAgICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgUm9vbS5wcm90b3R5cGUubmFtZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogUm9vbSBzdGF0dXMuXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXIge251bWJlcn0gc3RhdHVzXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5tZ3IuUm9vbVxyXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFJvb20ucHJvdG90eXBlLnN0YXR1cyA9IDA7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBSb29tIGluc3RhbmNlIHVzaW5nIHRoZSBzcGVjaWZpZWQgcHJvcGVydGllcy5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGNyZWF0ZVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ubWdyLlJvb21cclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3Byb3RvLm1nci5JUm9vbT19IFtwcm9wZXJ0aWVzXSBQcm9wZXJ0aWVzIHRvIHNldFxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7cHJvdG8ubWdyLlJvb219IFJvb20gaW5zdGFuY2VcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFJvb20uY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKHByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUm9vbShwcm9wZXJ0aWVzKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgUm9vbSBtZXNzYWdlLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBwcm90by5tZ3IuUm9vbS52ZXJpZnl8dmVyaWZ5fSBtZXNzYWdlcy5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGVuY29kZVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ubWdyLlJvb21cclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3Byb3RvLm1nci5JUm9vbX0gbWVzc2FnZSBSb29tIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3cml0ZXJdIFdyaXRlciB0byBlbmNvZGUgdG9cclxuICAgICAgICAgICAgICogQHJldHVybnMgeyRwcm90b2J1Zi5Xcml0ZXJ9IFdyaXRlclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgUm9vbS5lbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGUobWVzc2FnZSwgd3JpdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXdyaXRlcilcclxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIgPSAkV3JpdGVyLmNyZWF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuaWQgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlLCBcImlkXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlci51aW50MzIoLyogaWQgMSwgd2lyZVR5cGUgMiA9Ki8xMCkuc3RyaW5nKG1lc3NhZ2UuaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UubmFtZSAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2UsIFwibmFtZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIudWludDMyKC8qIGlkIDIsIHdpcmVUeXBlIDIgPSovMTgpLnN0cmluZyhtZXNzYWdlLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2Uuc3RhdHVzICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZSwgXCJzdGF0dXNcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVyLnVpbnQzMigvKiBpZCA0LCB3aXJlVHlwZSAwID0qLzMyKS5pbnQzMihtZXNzYWdlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gd3JpdGVyO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBSb29tIG1lc3NhZ2UsIGxlbmd0aCBkZWxpbWl0ZWQuIERvZXMgbm90IGltcGxpY2l0bHkge0BsaW5rIHByb3RvLm1nci5Sb29tLnZlcmlmeXx2ZXJpZnl9IG1lc3NhZ2VzLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZW5jb2RlRGVsaW1pdGVkXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5tZ3IuUm9vbVxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8ubWdyLklSb29tfSBtZXNzYWdlIFJvb20gbWVzc2FnZSBvciBwbGFpbiBvYmplY3QgdG8gZW5jb2RlXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLldyaXRlcn0gW3dyaXRlcl0gV3JpdGVyIHRvIGVuY29kZSB0b1xyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7JHByb3RvYnVmLldyaXRlcn0gV3JpdGVyXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBSb29tLmVuY29kZURlbGltaXRlZCA9IGZ1bmN0aW9uIGVuY29kZURlbGltaXRlZChtZXNzYWdlLCB3cml0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVuY29kZShtZXNzYWdlLCB3cml0ZXIpLmxkZWxpbSgpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIERlY29kZXMgYSBSb29tIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLm1nci5Sb29tXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuUmVhZGVyfFVpbnQ4QXJyYXl9IHJlYWRlciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoXSBNZXNzYWdlIGxlbmd0aCBpZiBrbm93biBiZWZvcmVoYW5kXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtwcm90by5tZ3IuUm9vbX0gUm9vbVxyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFJvb20uZGVjb2RlID0gZnVuY3Rpb24gZGVjb2RlKHJlYWRlciwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShyZWFkZXIgaW5zdGFuY2VvZiAkUmVhZGVyKSlcclxuICAgICAgICAgICAgICAgICAgICByZWFkZXIgPSAkUmVhZGVyLmNyZWF0ZShyZWFkZXIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGgsIG1lc3NhZ2UgPSBuZXcgJHJvb3QucHJvdG8ubWdyLlJvb20oKTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhZyA9IHJlYWRlci51aW50MzIoKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5pZCA9IHJlYWRlci5zdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLm5hbWUgPSByZWFkZXIuc3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdGF0dXMgPSByZWFkZXIuaW50MzIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBEZWNvZGVzIGEgUm9vbSBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLCBsZW5ndGggZGVsaW1pdGVkLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZGVjb2RlRGVsaW1pdGVkXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5tZ3IuUm9vbVxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLlJlYWRlcnxVaW50OEFycmF5fSByZWFkZXIgUmVhZGVyIG9yIGJ1ZmZlciB0byBkZWNvZGUgZnJvbVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7cHJvdG8ubWdyLlJvb219IFJvb21cclxuICAgICAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXlsb2FkIGlzIG5vdCBhIHJlYWRlciBvciB2YWxpZCBidWZmZXJcclxuICAgICAgICAgICAgICogQHRocm93cyB7JHByb3RvYnVmLnV0aWwuUHJvdG9jb2xFcnJvcn0gSWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBSb29tLmRlY29kZURlbGltaXRlZCA9IGZ1bmN0aW9uIGRlY29kZURlbGltaXRlZChyZWFkZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghKHJlYWRlciBpbnN0YW5jZW9mICRSZWFkZXIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlciA9IG5ldyAkUmVhZGVyKHJlYWRlcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFZlcmlmaWVzIGEgUm9vbSBtZXNzYWdlLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gdmVyaWZ5XHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5tZ3IuUm9vbVxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsKj59IG1lc3NhZ2UgUGxhaW4gb2JqZWN0IHRvIHZlcmlmeVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfG51bGx9IGBudWxsYCBpZiB2YWxpZCwgb3RoZXJ3aXNlIHRoZSByZWFzb24gd2h5IGl0IGlzIG5vdFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgUm9vbS52ZXJpZnkgPSBmdW5jdGlvbiB2ZXJpZnkobWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlICE9PSBcIm9iamVjdFwiIHx8IG1lc3NhZ2UgPT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwib2JqZWN0IGV4cGVjdGVkXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5pZCAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJpZFwiKSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISR1dGlsLmlzU3RyaW5nKG1lc3NhZ2UuaWQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJpZDogc3RyaW5nIGV4cGVjdGVkXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5uYW1lICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcIm5hbWVcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkdXRpbC5pc1N0cmluZyhtZXNzYWdlLm5hbWUpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJuYW1lOiBzdHJpbmcgZXhwZWN0ZWRcIjtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnN0YXR1cyAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJzdGF0dXNcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkdXRpbC5pc0ludGVnZXIobWVzc2FnZS5zdGF0dXMpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJzdGF0dXM6IGludGVnZXIgZXhwZWN0ZWRcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBSb29tIG1lc3NhZ2UgZnJvbSBhIHBsYWluIG9iamVjdC4gQWxzbyBjb252ZXJ0cyB2YWx1ZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBpbnRlcm5hbCB0eXBlcy5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGZyb21PYmplY3RcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLm1nci5Sb29tXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gb2JqZWN0IFBsYWluIG9iamVjdFxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7cHJvdG8ubWdyLlJvb219IFJvb21cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFJvb20uZnJvbU9iamVjdCA9IGZ1bmN0aW9uIGZyb21PYmplY3Qob2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgJHJvb3QucHJvdG8ubWdyLlJvb20pXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gbmV3ICRyb290LnByb3RvLm1nci5Sb29tKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0LmlkICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5pZCA9IFN0cmluZyhvYmplY3QuaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5uYW1lICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5uYW1lID0gU3RyaW5nKG9iamVjdC5uYW1lKTtcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3Quc3RhdHVzICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdGF0dXMgPSBvYmplY3Quc3RhdHVzIHwgMDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBwbGFpbiBvYmplY3QgZnJvbSBhIFJvb20gbWVzc2FnZS4gQWxzbyBjb252ZXJ0cyB2YWx1ZXMgdG8gb3RoZXIgdHlwZXMgaWYgc3BlY2lmaWVkLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gdG9PYmplY3RcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLm1nci5Sb29tXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtwcm90by5tZ3IuUm9vbX0gbWVzc2FnZSBSb29tXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLklDb252ZXJzaW9uT3B0aW9uc30gW29wdGlvbnNdIENvbnZlcnNpb24gb3B0aW9uc1xyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0LjxzdHJpbmcsKj59IFBsYWluIG9iamVjdFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgUm9vbS50b09iamVjdCA9IGZ1bmN0aW9uIHRvT2JqZWN0KG1lc3NhZ2UsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucylcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0ge307XHJcbiAgICAgICAgICAgICAgICB2YXIgb2JqZWN0ID0ge307XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5kZWZhdWx0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5pZCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Lm5hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5zdGF0dXMgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuaWQgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwiaWRcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmlkID0gbWVzc2FnZS5pZDtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLm5hbWUgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwibmFtZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QubmFtZSA9IG1lc3NhZ2UubmFtZTtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnN0YXR1cyAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJzdGF0dXNcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnN0YXR1cyA9IG1lc3NhZ2Uuc3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDb252ZXJ0cyB0aGlzIFJvb20gdG8gSlNPTi5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHRvSlNPTlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ubWdyLlJvb21cclxuICAgICAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtPYmplY3QuPHN0cmluZywqPn0gSlNPTiBvYmplY3RcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFJvb20ucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnRvT2JqZWN0KHRoaXMsICRwcm90b2J1Zi51dGlsLnRvSlNPTk9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFJvb207XHJcbiAgICAgICAgfSkoKTtcclxuXHJcbiAgICAgICAgbWdyLkdldFJvb21MaXN0UmVxID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFByb3BlcnRpZXMgb2YgYSBHZXRSb29tTGlzdFJlcS5cclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLm1nclxyXG4gICAgICAgICAgICAgKiBAaW50ZXJmYWNlIElHZXRSb29tTGlzdFJlcVxyXG4gICAgICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IEdldFJvb21MaXN0UmVxLlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ubWdyXHJcbiAgICAgICAgICAgICAqIEBjbGFzc2Rlc2MgUmVwcmVzZW50cyBhIEdldFJvb21MaXN0UmVxLlxyXG4gICAgICAgICAgICAgKiBAaW1wbGVtZW50cyBJR2V0Um9vbUxpc3RSZXFcclxuICAgICAgICAgICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8ubWdyLklHZXRSb29tTGlzdFJlcT19IFtwcm9wZXJ0aWVzXSBQcm9wZXJ0aWVzIHRvIHNldFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZnVuY3Rpb24gR2V0Um9vbUxpc3RSZXEocHJvcGVydGllcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIga2V5cyA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzW2tleXNbaV1dICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tleXNbaV1dID0gcHJvcGVydGllc1trZXlzW2ldXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBuZXcgR2V0Um9vbUxpc3RSZXEgaW5zdGFuY2UgdXNpbmcgdGhlIHNwZWNpZmllZCBwcm9wZXJ0aWVzLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gY3JlYXRlXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5tZ3IuR2V0Um9vbUxpc3RSZXFcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3Byb3RvLm1nci5JR2V0Um9vbUxpc3RSZXE9fSBbcHJvcGVydGllc10gUHJvcGVydGllcyB0byBzZXRcclxuICAgICAgICAgICAgICogQHJldHVybnMge3Byb3RvLm1nci5HZXRSb29tTGlzdFJlcX0gR2V0Um9vbUxpc3RSZXEgaW5zdGFuY2VcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEdldFJvb21MaXN0UmVxLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEdldFJvb21MaXN0UmVxKHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBHZXRSb29tTGlzdFJlcSBtZXNzYWdlLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBwcm90by5tZ3IuR2V0Um9vbUxpc3RSZXEudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLm1nci5HZXRSb29tTGlzdFJlcVxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8ubWdyLklHZXRSb29tTGlzdFJlcX0gbWVzc2FnZSBHZXRSb29tTGlzdFJlcSBtZXNzYWdlIG9yIHBsYWluIG9iamVjdCB0byBlbmNvZGVcclxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuV3JpdGVyfSBbd3JpdGVyXSBXcml0ZXIgdG8gZW5jb2RlIHRvXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEdldFJvb21MaXN0UmVxLmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZShtZXNzYWdlLCB3cml0ZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghd3JpdGVyKVxyXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlciA9ICRXcml0ZXIuY3JlYXRlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gd3JpdGVyO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBHZXRSb29tTGlzdFJlcSBtZXNzYWdlLCBsZW5ndGggZGVsaW1pdGVkLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBwcm90by5tZ3IuR2V0Um9vbUxpc3RSZXEudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVEZWxpbWl0ZWRcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLm1nci5HZXRSb29tTGlzdFJlcVxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8ubWdyLklHZXRSb29tTGlzdFJlcX0gbWVzc2FnZSBHZXRSb29tTGlzdFJlcSBtZXNzYWdlIG9yIHBsYWluIG9iamVjdCB0byBlbmNvZGVcclxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuV3JpdGVyfSBbd3JpdGVyXSBXcml0ZXIgdG8gZW5jb2RlIHRvXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEdldFJvb21MaXN0UmVxLmVuY29kZURlbGltaXRlZCA9IGZ1bmN0aW9uIGVuY29kZURlbGltaXRlZChtZXNzYWdlLCB3cml0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVuY29kZShtZXNzYWdlLCB3cml0ZXIpLmxkZWxpbSgpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIERlY29kZXMgYSBHZXRSb29tTGlzdFJlcSBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZGVjb2RlXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5tZ3IuR2V0Um9vbUxpc3RSZXFcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gcmVhZGVyIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cclxuICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGhdIE1lc3NhZ2UgbGVuZ3RoIGlmIGtub3duIGJlZm9yZWhhbmRcclxuICAgICAgICAgICAgICogQHJldHVybnMge3Byb3RvLm1nci5HZXRSb29tTGlzdFJlcX0gR2V0Um9vbUxpc3RSZXFcclxuICAgICAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXlsb2FkIGlzIG5vdCBhIHJlYWRlciBvciB2YWxpZCBidWZmZXJcclxuICAgICAgICAgICAgICogQHRocm93cyB7JHByb3RvYnVmLnV0aWwuUHJvdG9jb2xFcnJvcn0gSWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBHZXRSb29tTGlzdFJlcS5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGUocmVhZGVyLCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghKHJlYWRlciBpbnN0YW5jZW9mICRSZWFkZXIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlciA9ICRSZWFkZXIuY3JlYXRlKHJlYWRlcik7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aCwgbWVzc2FnZSA9IG5ldyAkcm9vdC5wcm90by5tZ3IuR2V0Um9vbUxpc3RSZXEoKTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhZyA9IHJlYWRlci51aW50MzIoKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRGVjb2RlcyBhIEdldFJvb21MaXN0UmVxIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIsIGxlbmd0aCBkZWxpbWl0ZWQuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVEZWxpbWl0ZWRcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLm1nci5HZXRSb29tTGlzdFJlcVxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLlJlYWRlcnxVaW50OEFycmF5fSByZWFkZXIgUmVhZGVyIG9yIGJ1ZmZlciB0byBkZWNvZGUgZnJvbVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7cHJvdG8ubWdyLkdldFJvb21MaXN0UmVxfSBHZXRSb29tTGlzdFJlcVxyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEdldFJvb21MaXN0UmVxLmRlY29kZURlbGltaXRlZCA9IGZ1bmN0aW9uIGRlY29kZURlbGltaXRlZChyZWFkZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghKHJlYWRlciBpbnN0YW5jZW9mICRSZWFkZXIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlciA9IG5ldyAkUmVhZGVyKHJlYWRlcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFZlcmlmaWVzIGEgR2V0Um9vbUxpc3RSZXEgbWVzc2FnZS5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHZlcmlmeVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ubWdyLkdldFJvb21MaXN0UmVxXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gbWVzc2FnZSBQbGFpbiBvYmplY3QgdG8gdmVyaWZ5XHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd8bnVsbH0gYG51bGxgIGlmIHZhbGlkLCBvdGhlcndpc2UgdGhlIHJlYXNvbiB3aHkgaXQgaXMgbm90XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBHZXRSb29tTGlzdFJlcS52ZXJpZnkgPSBmdW5jdGlvbiB2ZXJpZnkobWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlICE9PSBcIm9iamVjdFwiIHx8IG1lc3NhZ2UgPT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwib2JqZWN0IGV4cGVjdGVkXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDcmVhdGVzIGEgR2V0Um9vbUxpc3RSZXEgbWVzc2FnZSBmcm9tIGEgcGxhaW4gb2JqZWN0LiBBbHNvIGNvbnZlcnRzIHZhbHVlcyB0byB0aGVpciByZXNwZWN0aXZlIGludGVybmFsIHR5cGVzLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZnJvbU9iamVjdFxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ubWdyLkdldFJvb21MaXN0UmVxXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gb2JqZWN0IFBsYWluIG9iamVjdFxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7cHJvdG8ubWdyLkdldFJvb21MaXN0UmVxfSBHZXRSb29tTGlzdFJlcVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgR2V0Um9vbUxpc3RSZXEuZnJvbU9iamVjdCA9IGZ1bmN0aW9uIGZyb21PYmplY3Qob2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgJHJvb3QucHJvdG8ubWdyLkdldFJvb21MaXN0UmVxKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICRyb290LnByb3RvLm1nci5HZXRSb29tTGlzdFJlcSgpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBwbGFpbiBvYmplY3QgZnJvbSBhIEdldFJvb21MaXN0UmVxIG1lc3NhZ2UuIEFsc28gY29udmVydHMgdmFsdWVzIHRvIG90aGVyIHR5cGVzIGlmIHNwZWNpZmllZC5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHRvT2JqZWN0XHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5tZ3IuR2V0Um9vbUxpc3RSZXFcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3Byb3RvLm1nci5HZXRSb29tTGlzdFJlcX0gbWVzc2FnZSBHZXRSb29tTGlzdFJlcVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5JQ29udmVyc2lvbk9wdGlvbnN9IFtvcHRpb25zXSBDb252ZXJzaW9uIG9wdGlvbnNcclxuICAgICAgICAgICAgICogQHJldHVybnMge09iamVjdC48c3RyaW5nLCo+fSBQbGFpbiBvYmplY3RcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEdldFJvb21MaXN0UmVxLnRvT2JqZWN0ID0gZnVuY3Rpb24gdG9PYmplY3QoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ29udmVydHMgdGhpcyBHZXRSb29tTGlzdFJlcSB0byBKU09OLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gdG9KU09OXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5tZ3IuR2V0Um9vbUxpc3RSZXFcclxuICAgICAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtPYmplY3QuPHN0cmluZywqPn0gSlNPTiBvYmplY3RcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEdldFJvb21MaXN0UmVxLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci50b09iamVjdCh0aGlzLCAkcHJvdG9idWYudXRpbC50b0pTT05PcHRpb25zKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBHZXRSb29tTGlzdFJlcTtcclxuICAgICAgICB9KSgpO1xyXG5cclxuICAgICAgICBtZ3IuR2V0Um9vbUxpc3RSZXMgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogUHJvcGVydGllcyBvZiBhIEdldFJvb21MaXN0UmVzLlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ubWdyXHJcbiAgICAgICAgICAgICAqIEBpbnRlcmZhY2UgSUdldFJvb21MaXN0UmVzXHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7QXJyYXkuPHByb3RvLm1nci5JUm9vbT58bnVsbH0gW3Jvb21zXSBHZXRSb29tTGlzdFJlcyByb29tc1xyXG4gICAgICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IEdldFJvb21MaXN0UmVzLlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ubWdyXHJcbiAgICAgICAgICAgICAqIEBjbGFzc2Rlc2MgUmVwcmVzZW50cyBhIEdldFJvb21MaXN0UmVzLlxyXG4gICAgICAgICAgICAgKiBAaW1wbGVtZW50cyBJR2V0Um9vbUxpc3RSZXNcclxuICAgICAgICAgICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8ubWdyLklHZXRSb29tTGlzdFJlcz19IFtwcm9wZXJ0aWVzXSBQcm9wZXJ0aWVzIHRvIHNldFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZnVuY3Rpb24gR2V0Um9vbUxpc3RSZXMocHJvcGVydGllcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb29tcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIga2V5cyA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzW2tleXNbaV1dICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tleXNbaV1dID0gcHJvcGVydGllc1trZXlzW2ldXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEdldFJvb21MaXN0UmVzIHJvb21zLlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtBcnJheS48cHJvdG8ubWdyLklSb29tPn0gcm9vbXNcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLm1nci5HZXRSb29tTGlzdFJlc1xyXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEdldFJvb21MaXN0UmVzLnByb3RvdHlwZS5yb29tcyA9ICR1dGlsLmVtcHR5QXJyYXk7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBHZXRSb29tTGlzdFJlcyBpbnN0YW5jZSB1c2luZyB0aGUgc3BlY2lmaWVkIHByb3BlcnRpZXMuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBjcmVhdGVcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLm1nci5HZXRSb29tTGlzdFJlc1xyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8ubWdyLklHZXRSb29tTGlzdFJlcz19IFtwcm9wZXJ0aWVzXSBQcm9wZXJ0aWVzIHRvIHNldFxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7cHJvdG8ubWdyLkdldFJvb21MaXN0UmVzfSBHZXRSb29tTGlzdFJlcyBpbnN0YW5jZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgR2V0Um9vbUxpc3RSZXMuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKHByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgR2V0Um9vbUxpc3RSZXMocHJvcGVydGllcyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRW5jb2RlcyB0aGUgc3BlY2lmaWVkIEdldFJvb21MaXN0UmVzIG1lc3NhZ2UuIERvZXMgbm90IGltcGxpY2l0bHkge0BsaW5rIHByb3RvLm1nci5HZXRSb29tTGlzdFJlcy52ZXJpZnl8dmVyaWZ5fSBtZXNzYWdlcy5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGVuY29kZVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ubWdyLkdldFJvb21MaXN0UmVzXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtwcm90by5tZ3IuSUdldFJvb21MaXN0UmVzfSBtZXNzYWdlIEdldFJvb21MaXN0UmVzIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3cml0ZXJdIFdyaXRlciB0byBlbmNvZGUgdG9cclxuICAgICAgICAgICAgICogQHJldHVybnMgeyRwcm90b2J1Zi5Xcml0ZXJ9IFdyaXRlclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgR2V0Um9vbUxpc3RSZXMuZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKG1lc3NhZ2UsIHdyaXRlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF3cml0ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVyID0gJFdyaXRlci5jcmVhdGUoKTtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnJvb21zICE9IG51bGwgJiYgbWVzc2FnZS5yb29tcy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZXNzYWdlLnJvb21zLmxlbmd0aDsgKytpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkcm9vdC5wcm90by5tZ3IuUm9vbS5lbmNvZGUobWVzc2FnZS5yb29tc1tpXSwgd3JpdGVyLnVpbnQzMigvKiBpZCAxLCB3aXJlVHlwZSAyID0qLzEwKS5mb3JrKCkpLmxkZWxpbSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdyaXRlcjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgR2V0Um9vbUxpc3RSZXMgbWVzc2FnZSwgbGVuZ3RoIGRlbGltaXRlZC4gRG9lcyBub3QgaW1wbGljaXRseSB7QGxpbmsgcHJvdG8ubWdyLkdldFJvb21MaXN0UmVzLnZlcmlmeXx2ZXJpZnl9IG1lc3NhZ2VzLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZW5jb2RlRGVsaW1pdGVkXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5tZ3IuR2V0Um9vbUxpc3RSZXNcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3Byb3RvLm1nci5JR2V0Um9vbUxpc3RSZXN9IG1lc3NhZ2UgR2V0Um9vbUxpc3RSZXMgbWVzc2FnZSBvciBwbGFpbiBvYmplY3QgdG8gZW5jb2RlXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLldyaXRlcn0gW3dyaXRlcl0gV3JpdGVyIHRvIGVuY29kZSB0b1xyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7JHByb3RvYnVmLldyaXRlcn0gV3JpdGVyXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBHZXRSb29tTGlzdFJlcy5lbmNvZGVEZWxpbWl0ZWQgPSBmdW5jdGlvbiBlbmNvZGVEZWxpbWl0ZWQobWVzc2FnZSwgd3JpdGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbmNvZGUobWVzc2FnZSwgd3JpdGVyKS5sZGVsaW0oKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBEZWNvZGVzIGEgR2V0Um9vbUxpc3RSZXMgbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgcmVhZGVyIG9yIGJ1ZmZlci5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGRlY29kZVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ubWdyLkdldFJvb21MaXN0UmVzXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuUmVhZGVyfFVpbnQ4QXJyYXl9IHJlYWRlciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoXSBNZXNzYWdlIGxlbmd0aCBpZiBrbm93biBiZWZvcmVoYW5kXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtwcm90by5tZ3IuR2V0Um9vbUxpc3RSZXN9IEdldFJvb21MaXN0UmVzXHJcbiAgICAgICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGF5bG9hZCBpcyBub3QgYSByZWFkZXIgb3IgdmFsaWQgYnVmZmVyXHJcbiAgICAgICAgICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgR2V0Um9vbUxpc3RSZXMuZGVjb2RlID0gZnVuY3Rpb24gZGVjb2RlKHJlYWRlciwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShyZWFkZXIgaW5zdGFuY2VvZiAkUmVhZGVyKSlcclxuICAgICAgICAgICAgICAgICAgICByZWFkZXIgPSAkUmVhZGVyLmNyZWF0ZShyZWFkZXIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGgsIG1lc3NhZ2UgPSBuZXcgJHJvb3QucHJvdG8ubWdyLkdldFJvb21MaXN0UmVzKCk7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWcgPSByZWFkZXIudWludDMyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKG1lc3NhZ2Uucm9vbXMgJiYgbWVzc2FnZS5yb29tcy5sZW5ndGgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5yb29tcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnJvb21zLnB1c2goJHJvb3QucHJvdG8ubWdyLlJvb20uZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRGVjb2RlcyBhIEdldFJvb21MaXN0UmVzIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIsIGxlbmd0aCBkZWxpbWl0ZWQuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVEZWxpbWl0ZWRcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLm1nci5HZXRSb29tTGlzdFJlc1xyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLlJlYWRlcnxVaW50OEFycmF5fSByZWFkZXIgUmVhZGVyIG9yIGJ1ZmZlciB0byBkZWNvZGUgZnJvbVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7cHJvdG8ubWdyLkdldFJvb21MaXN0UmVzfSBHZXRSb29tTGlzdFJlc1xyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEdldFJvb21MaXN0UmVzLmRlY29kZURlbGltaXRlZCA9IGZ1bmN0aW9uIGRlY29kZURlbGltaXRlZChyZWFkZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghKHJlYWRlciBpbnN0YW5jZW9mICRSZWFkZXIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlciA9IG5ldyAkUmVhZGVyKHJlYWRlcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFZlcmlmaWVzIGEgR2V0Um9vbUxpc3RSZXMgbWVzc2FnZS5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHZlcmlmeVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ubWdyLkdldFJvb21MaXN0UmVzXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gbWVzc2FnZSBQbGFpbiBvYmplY3QgdG8gdmVyaWZ5XHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd8bnVsbH0gYG51bGxgIGlmIHZhbGlkLCBvdGhlcndpc2UgdGhlIHJlYXNvbiB3aHkgaXQgaXMgbm90XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBHZXRSb29tTGlzdFJlcy52ZXJpZnkgPSBmdW5jdGlvbiB2ZXJpZnkobWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlICE9PSBcIm9iamVjdFwiIHx8IG1lc3NhZ2UgPT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwib2JqZWN0IGV4cGVjdGVkXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5yb29tcyAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJyb29tc1wiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShtZXNzYWdlLnJvb21zKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm9vbXM6IGFycmF5IGV4cGVjdGVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZXNzYWdlLnJvb21zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJvciA9ICRyb290LnByb3RvLm1nci5Sb29tLnZlcmlmeShtZXNzYWdlLnJvb21zW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm9vbXMuXCIgKyBlcnJvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDcmVhdGVzIGEgR2V0Um9vbUxpc3RSZXMgbWVzc2FnZSBmcm9tIGEgcGxhaW4gb2JqZWN0LiBBbHNvIGNvbnZlcnRzIHZhbHVlcyB0byB0aGVpciByZXNwZWN0aXZlIGludGVybmFsIHR5cGVzLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZnJvbU9iamVjdFxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ubWdyLkdldFJvb21MaXN0UmVzXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gb2JqZWN0IFBsYWluIG9iamVjdFxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7cHJvdG8ubWdyLkdldFJvb21MaXN0UmVzfSBHZXRSb29tTGlzdFJlc1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgR2V0Um9vbUxpc3RSZXMuZnJvbU9iamVjdCA9IGZ1bmN0aW9uIGZyb21PYmplY3Qob2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgJHJvb3QucHJvdG8ubWdyLkdldFJvb21MaXN0UmVzKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IG5ldyAkcm9vdC5wcm90by5tZ3IuR2V0Um9vbUxpc3RSZXMoKTtcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3Qucm9vbXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkob2JqZWN0LnJvb21zKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiLnByb3RvLm1nci5HZXRSb29tTGlzdFJlcy5yb29tczogYXJyYXkgZXhwZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5yb29tcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0LnJvb21zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LnJvb21zW2ldICE9PSBcIm9iamVjdFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiLnByb3RvLm1nci5HZXRSb29tTGlzdFJlcy5yb29tczogb2JqZWN0IGV4cGVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnJvb21zW2ldID0gJHJvb3QucHJvdG8ubWdyLlJvb20uZnJvbU9iamVjdChvYmplY3Qucm9vbXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBwbGFpbiBvYmplY3QgZnJvbSBhIEdldFJvb21MaXN0UmVzIG1lc3NhZ2UuIEFsc28gY29udmVydHMgdmFsdWVzIHRvIG90aGVyIHR5cGVzIGlmIHNwZWNpZmllZC5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHRvT2JqZWN0XHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5tZ3IuR2V0Um9vbUxpc3RSZXNcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3Byb3RvLm1nci5HZXRSb29tTGlzdFJlc30gbWVzc2FnZSBHZXRSb29tTGlzdFJlc1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5JQ29udmVyc2lvbk9wdGlvbnN9IFtvcHRpb25zXSBDb252ZXJzaW9uIG9wdGlvbnNcclxuICAgICAgICAgICAgICogQHJldHVybnMge09iamVjdC48c3RyaW5nLCo+fSBQbGFpbiBvYmplY3RcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEdldFJvb21MaXN0UmVzLnRvT2JqZWN0ID0gZnVuY3Rpb24gdG9PYmplY3QobWVzc2FnZSwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7fTtcclxuICAgICAgICAgICAgICAgIHZhciBvYmplY3QgPSB7fTtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmFycmF5cyB8fCBvcHRpb25zLmRlZmF1bHRzKVxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5yb29tcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2Uucm9vbXMgJiYgbWVzc2FnZS5yb29tcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3Qucm9vbXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG1lc3NhZ2Uucm9vbXMubGVuZ3RoOyArK2opXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5yb29tc1tqXSA9ICRyb290LnByb3RvLm1nci5Sb29tLnRvT2JqZWN0KG1lc3NhZ2Uucm9vbXNbal0sIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDb252ZXJ0cyB0aGlzIEdldFJvb21MaXN0UmVzIHRvIEpTT04uXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiB0b0pTT05cclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLm1nci5HZXRSb29tTGlzdFJlc1xyXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgICAgICogQHJldHVybnMge09iamVjdC48c3RyaW5nLCo+fSBKU09OIG9iamVjdFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgR2V0Um9vbUxpc3RSZXMucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnRvT2JqZWN0KHRoaXMsICRwcm90b2J1Zi51dGlsLnRvSlNPTk9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIEdldFJvb21MaXN0UmVzO1xyXG4gICAgICAgIH0pKCk7XHJcblxyXG4gICAgICAgIG1nci5DcmVhdGVSb29tUmVxID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFByb3BlcnRpZXMgb2YgYSBDcmVhdGVSb29tUmVxLlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ubWdyXHJcbiAgICAgICAgICAgICAqIEBpbnRlcmZhY2UgSUNyZWF0ZVJvb21SZXFcclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gW25hbWVdIENyZWF0ZVJvb21SZXEgbmFtZVxyXG4gICAgICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IENyZWF0ZVJvb21SZXEuXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5tZ3JcclxuICAgICAgICAgICAgICogQGNsYXNzZGVzYyBSZXByZXNlbnRzIGEgQ3JlYXRlUm9vbVJlcS5cclxuICAgICAgICAgICAgICogQGltcGxlbWVudHMgSUNyZWF0ZVJvb21SZXFcclxuICAgICAgICAgICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8ubWdyLklDcmVhdGVSb29tUmVxPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBDcmVhdGVSb29tUmVxKHByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKSwgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllc1trZXlzW2ldXSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXlzW2ldXSA9IHByb3BlcnRpZXNba2V5c1tpXV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDcmVhdGVSb29tUmVxIG5hbWUuXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gbmFtZVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ubWdyLkNyZWF0ZVJvb21SZXFcclxuICAgICAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBDcmVhdGVSb29tUmVxLnByb3RvdHlwZS5uYW1lID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IENyZWF0ZVJvb21SZXEgaW5zdGFuY2UgdXNpbmcgdGhlIHNwZWNpZmllZCBwcm9wZXJ0aWVzLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gY3JlYXRlXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5tZ3IuQ3JlYXRlUm9vbVJlcVxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8ubWdyLklDcmVhdGVSb29tUmVxPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtwcm90by5tZ3IuQ3JlYXRlUm9vbVJlcX0gQ3JlYXRlUm9vbVJlcSBpbnN0YW5jZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ3JlYXRlUm9vbVJlcS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUocHJvcGVydGllcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDcmVhdGVSb29tUmVxKHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBDcmVhdGVSb29tUmVxIG1lc3NhZ2UuIERvZXMgbm90IGltcGxpY2l0bHkge0BsaW5rIHByb3RvLm1nci5DcmVhdGVSb29tUmVxLnZlcmlmeXx2ZXJpZnl9IG1lc3NhZ2VzLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZW5jb2RlXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5tZ3IuQ3JlYXRlUm9vbVJlcVxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8ubWdyLklDcmVhdGVSb29tUmVxfSBtZXNzYWdlIENyZWF0ZVJvb21SZXEgbWVzc2FnZSBvciBwbGFpbiBvYmplY3QgdG8gZW5jb2RlXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLldyaXRlcn0gW3dyaXRlcl0gV3JpdGVyIHRvIGVuY29kZSB0b1xyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7JHByb3RvYnVmLldyaXRlcn0gV3JpdGVyXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBDcmVhdGVSb29tUmVxLmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZShtZXNzYWdlLCB3cml0ZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghd3JpdGVyKVxyXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlciA9ICRXcml0ZXIuY3JlYXRlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5uYW1lICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZSwgXCJuYW1lXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlci51aW50MzIoLyogaWQgMSwgd2lyZVR5cGUgMiA9Ki8xMCkuc3RyaW5nKG1lc3NhZ2UubmFtZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gd3JpdGVyO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBDcmVhdGVSb29tUmVxIG1lc3NhZ2UsIGxlbmd0aCBkZWxpbWl0ZWQuIERvZXMgbm90IGltcGxpY2l0bHkge0BsaW5rIHByb3RvLm1nci5DcmVhdGVSb29tUmVxLnZlcmlmeXx2ZXJpZnl9IG1lc3NhZ2VzLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZW5jb2RlRGVsaW1pdGVkXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5tZ3IuQ3JlYXRlUm9vbVJlcVxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8ubWdyLklDcmVhdGVSb29tUmVxfSBtZXNzYWdlIENyZWF0ZVJvb21SZXEgbWVzc2FnZSBvciBwbGFpbiBvYmplY3QgdG8gZW5jb2RlXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLldyaXRlcn0gW3dyaXRlcl0gV3JpdGVyIHRvIGVuY29kZSB0b1xyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7JHByb3RvYnVmLldyaXRlcn0gV3JpdGVyXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBDcmVhdGVSb29tUmVxLmVuY29kZURlbGltaXRlZCA9IGZ1bmN0aW9uIGVuY29kZURlbGltaXRlZChtZXNzYWdlLCB3cml0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVuY29kZShtZXNzYWdlLCB3cml0ZXIpLmxkZWxpbSgpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIERlY29kZXMgYSBDcmVhdGVSb29tUmVxIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLm1nci5DcmVhdGVSb29tUmVxXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuUmVhZGVyfFVpbnQ4QXJyYXl9IHJlYWRlciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoXSBNZXNzYWdlIGxlbmd0aCBpZiBrbm93biBiZWZvcmVoYW5kXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtwcm90by5tZ3IuQ3JlYXRlUm9vbVJlcX0gQ3JlYXRlUm9vbVJlcVxyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENyZWF0ZVJvb21SZXEuZGVjb2RlID0gZnVuY3Rpb24gZGVjb2RlKHJlYWRlciwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShyZWFkZXIgaW5zdGFuY2VvZiAkUmVhZGVyKSlcclxuICAgICAgICAgICAgICAgICAgICByZWFkZXIgPSAkUmVhZGVyLmNyZWF0ZShyZWFkZXIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGgsIG1lc3NhZ2UgPSBuZXcgJHJvb3QucHJvdG8ubWdyLkNyZWF0ZVJvb21SZXEoKTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhZyA9IHJlYWRlci51aW50MzIoKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5uYW1lID0gcmVhZGVyLnN0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIERlY29kZXMgYSBDcmVhdGVSb29tUmVxIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIsIGxlbmd0aCBkZWxpbWl0ZWQuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVEZWxpbWl0ZWRcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLm1nci5DcmVhdGVSb29tUmVxXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuUmVhZGVyfFVpbnQ4QXJyYXl9IHJlYWRlciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtwcm90by5tZ3IuQ3JlYXRlUm9vbVJlcX0gQ3JlYXRlUm9vbVJlcVxyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENyZWF0ZVJvb21SZXEuZGVjb2RlRGVsaW1pdGVkID0gZnVuY3Rpb24gZGVjb2RlRGVsaW1pdGVkKHJlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEocmVhZGVyIGluc3RhbmNlb2YgJFJlYWRlcikpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyID0gbmV3ICRSZWFkZXIocmVhZGVyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVmVyaWZpZXMgYSBDcmVhdGVSb29tUmVxIG1lc3NhZ2UuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiB2ZXJpZnlcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLm1nci5DcmVhdGVSb29tUmVxXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gbWVzc2FnZSBQbGFpbiBvYmplY3QgdG8gdmVyaWZ5XHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd8bnVsbH0gYG51bGxgIGlmIHZhbGlkLCBvdGhlcndpc2UgdGhlIHJlYXNvbiB3aHkgaXQgaXMgbm90XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBDcmVhdGVSb29tUmVxLnZlcmlmeSA9IGZ1bmN0aW9uIHZlcmlmeShtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgIT09IFwib2JqZWN0XCIgfHwgbWVzc2FnZSA9PT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJvYmplY3QgZXhwZWN0ZWRcIjtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLm5hbWUgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwibmFtZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISR1dGlsLmlzU3RyaW5nKG1lc3NhZ2UubmFtZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm5hbWU6IHN0cmluZyBleHBlY3RlZFwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ3JlYXRlcyBhIENyZWF0ZVJvb21SZXEgbWVzc2FnZSBmcm9tIGEgcGxhaW4gb2JqZWN0LiBBbHNvIGNvbnZlcnRzIHZhbHVlcyB0byB0aGVpciByZXNwZWN0aXZlIGludGVybmFsIHR5cGVzLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZnJvbU9iamVjdFxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ubWdyLkNyZWF0ZVJvb21SZXFcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCo+fSBvYmplY3QgUGxhaW4gb2JqZWN0XHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtwcm90by5tZ3IuQ3JlYXRlUm9vbVJlcX0gQ3JlYXRlUm9vbVJlcVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ3JlYXRlUm9vbVJlcS5mcm9tT2JqZWN0ID0gZnVuY3Rpb24gZnJvbU9iamVjdChvYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiAkcm9vdC5wcm90by5tZ3IuQ3JlYXRlUm9vbVJlcSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBuZXcgJHJvb3QucHJvdG8ubWdyLkNyZWF0ZVJvb21SZXEoKTtcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3QubmFtZSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UubmFtZSA9IFN0cmluZyhvYmplY3QubmFtZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDcmVhdGVzIGEgcGxhaW4gb2JqZWN0IGZyb20gYSBDcmVhdGVSb29tUmVxIG1lc3NhZ2UuIEFsc28gY29udmVydHMgdmFsdWVzIHRvIG90aGVyIHR5cGVzIGlmIHNwZWNpZmllZC5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHRvT2JqZWN0XHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5tZ3IuQ3JlYXRlUm9vbVJlcVxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8ubWdyLkNyZWF0ZVJvb21SZXF9IG1lc3NhZ2UgQ3JlYXRlUm9vbVJlcVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5JQ29udmVyc2lvbk9wdGlvbnN9IFtvcHRpb25zXSBDb252ZXJzaW9uIG9wdGlvbnNcclxuICAgICAgICAgICAgICogQHJldHVybnMge09iamVjdC48c3RyaW5nLCo+fSBQbGFpbiBvYmplY3RcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENyZWF0ZVJvb21SZXEudG9PYmplY3QgPSBmdW5jdGlvbiB0b09iamVjdChtZXNzYWdlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgdmFyIG9iamVjdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGVmYXVsdHMpXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Lm5hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UubmFtZSAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJuYW1lXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5uYW1lID0gbWVzc2FnZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDb252ZXJ0cyB0aGlzIENyZWF0ZVJvb21SZXEgdG8gSlNPTi5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHRvSlNPTlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ubWdyLkNyZWF0ZVJvb21SZXFcclxuICAgICAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtPYmplY3QuPHN0cmluZywqPn0gSlNPTiBvYmplY3RcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENyZWF0ZVJvb21SZXEucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnRvT2JqZWN0KHRoaXMsICRwcm90b2J1Zi51dGlsLnRvSlNPTk9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIENyZWF0ZVJvb21SZXE7XHJcbiAgICAgICAgfSkoKTtcclxuXHJcbiAgICAgICAgbWdyLkNyZWF0ZVJvb21SZXMgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogUHJvcGVydGllcyBvZiBhIENyZWF0ZVJvb21SZXMuXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5tZ3JcclxuICAgICAgICAgICAgICogQGludGVyZmFjZSBJQ3JlYXRlUm9vbVJlc1xyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBbY29kZV0gQ3JlYXRlUm9vbVJlcyBjb2RlXHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IFtzZXJ2ZXJJZF0gQ3JlYXRlUm9vbVJlcyBzZXJ2ZXJJZFxyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3Byb3RvLm1nci5JUm9vbXxudWxsfSBbcm9vbV0gQ3JlYXRlUm9vbVJlcyByb29tXHJcbiAgICAgICAgICAgICAqL1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENvbnN0cnVjdHMgYSBuZXcgQ3JlYXRlUm9vbVJlcy5cclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLm1nclxyXG4gICAgICAgICAgICAgKiBAY2xhc3NkZXNjIFJlcHJlc2VudHMgYSBDcmVhdGVSb29tUmVzLlxyXG4gICAgICAgICAgICAgKiBAaW1wbGVtZW50cyBJQ3JlYXRlUm9vbVJlc1xyXG4gICAgICAgICAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAgICAgICAgICogQHBhcmFtIHtwcm90by5tZ3IuSUNyZWF0ZVJvb21SZXM9fSBbcHJvcGVydGllc10gUHJvcGVydGllcyB0byBzZXRcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIENyZWF0ZVJvb21SZXMocHJvcGVydGllcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIga2V5cyA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzW2tleXNbaV1dICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tleXNbaV1dID0gcHJvcGVydGllc1trZXlzW2ldXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENyZWF0ZVJvb21SZXMgY29kZS5cclxuICAgICAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSBjb2RlXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5tZ3IuQ3JlYXRlUm9vbVJlc1xyXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENyZWF0ZVJvb21SZXMucHJvdG90eXBlLmNvZGUgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENyZWF0ZVJvb21SZXMgc2VydmVySWQuXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gc2VydmVySWRcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLm1nci5DcmVhdGVSb29tUmVzXHJcbiAgICAgICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ3JlYXRlUm9vbVJlcy5wcm90b3R5cGUuc2VydmVySWQgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENyZWF0ZVJvb21SZXMgcm9vbS5cclxuICAgICAgICAgICAgICogQG1lbWJlciB7cHJvdG8ubWdyLklSb29tfG51bGx8dW5kZWZpbmVkfSByb29tXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5tZ3IuQ3JlYXRlUm9vbVJlc1xyXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENyZWF0ZVJvb21SZXMucHJvdG90eXBlLnJvb20gPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBuZXcgQ3JlYXRlUm9vbVJlcyBpbnN0YW5jZSB1c2luZyB0aGUgc3BlY2lmaWVkIHByb3BlcnRpZXMuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBjcmVhdGVcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLm1nci5DcmVhdGVSb29tUmVzXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtwcm90by5tZ3IuSUNyZWF0ZVJvb21SZXM9fSBbcHJvcGVydGllc10gUHJvcGVydGllcyB0byBzZXRcclxuICAgICAgICAgICAgICogQHJldHVybnMge3Byb3RvLm1nci5DcmVhdGVSb29tUmVzfSBDcmVhdGVSb29tUmVzIGluc3RhbmNlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBDcmVhdGVSb29tUmVzLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENyZWF0ZVJvb21SZXMocHJvcGVydGllcyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRW5jb2RlcyB0aGUgc3BlY2lmaWVkIENyZWF0ZVJvb21SZXMgbWVzc2FnZS4gRG9lcyBub3QgaW1wbGljaXRseSB7QGxpbmsgcHJvdG8ubWdyLkNyZWF0ZVJvb21SZXMudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLm1nci5DcmVhdGVSb29tUmVzXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtwcm90by5tZ3IuSUNyZWF0ZVJvb21SZXN9IG1lc3NhZ2UgQ3JlYXRlUm9vbVJlcyBtZXNzYWdlIG9yIHBsYWluIG9iamVjdCB0byBlbmNvZGVcclxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuV3JpdGVyfSBbd3JpdGVyXSBXcml0ZXIgdG8gZW5jb2RlIHRvXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENyZWF0ZVJvb21SZXMuZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKG1lc3NhZ2UsIHdyaXRlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF3cml0ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVyID0gJFdyaXRlci5jcmVhdGUoKTtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmNvZGUgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlLCBcImNvZGVcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVyLnVpbnQzMigvKiBpZCAxLCB3aXJlVHlwZSAyID0qLzEwKS5zdHJpbmcobWVzc2FnZS5jb2RlKTtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnJvb20gIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlLCBcInJvb21cIikpXHJcbiAgICAgICAgICAgICAgICAgICAgJHJvb3QucHJvdG8ubWdyLlJvb20uZW5jb2RlKG1lc3NhZ2Uucm9vbSwgd3JpdGVyLnVpbnQzMigvKiBpZCAyLCB3aXJlVHlwZSAyID0qLzE4KS5mb3JrKCkpLmxkZWxpbSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2Uuc2VydmVySWQgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlLCBcInNlcnZlcklkXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlci51aW50MzIoLyogaWQgMywgd2lyZVR5cGUgMiA9Ki8yNikuc3RyaW5nKG1lc3NhZ2Uuc2VydmVySWQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdyaXRlcjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgQ3JlYXRlUm9vbVJlcyBtZXNzYWdlLCBsZW5ndGggZGVsaW1pdGVkLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBwcm90by5tZ3IuQ3JlYXRlUm9vbVJlcy52ZXJpZnl8dmVyaWZ5fSBtZXNzYWdlcy5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGVuY29kZURlbGltaXRlZFxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ubWdyLkNyZWF0ZVJvb21SZXNcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3Byb3RvLm1nci5JQ3JlYXRlUm9vbVJlc30gbWVzc2FnZSBDcmVhdGVSb29tUmVzIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3cml0ZXJdIFdyaXRlciB0byBlbmNvZGUgdG9cclxuICAgICAgICAgICAgICogQHJldHVybnMgeyRwcm90b2J1Zi5Xcml0ZXJ9IFdyaXRlclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ3JlYXRlUm9vbVJlcy5lbmNvZGVEZWxpbWl0ZWQgPSBmdW5jdGlvbiBlbmNvZGVEZWxpbWl0ZWQobWVzc2FnZSwgd3JpdGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbmNvZGUobWVzc2FnZSwgd3JpdGVyKS5sZGVsaW0oKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBEZWNvZGVzIGEgQ3JlYXRlUm9vbVJlcyBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZGVjb2RlXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5tZ3IuQ3JlYXRlUm9vbVJlc1xyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLlJlYWRlcnxVaW50OEFycmF5fSByZWFkZXIgUmVhZGVyIG9yIGJ1ZmZlciB0byBkZWNvZGUgZnJvbVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aF0gTWVzc2FnZSBsZW5ndGggaWYga25vd24gYmVmb3JlaGFuZFxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7cHJvdG8ubWdyLkNyZWF0ZVJvb21SZXN9IENyZWF0ZVJvb21SZXNcclxuICAgICAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXlsb2FkIGlzIG5vdCBhIHJlYWRlciBvciB2YWxpZCBidWZmZXJcclxuICAgICAgICAgICAgICogQHRocm93cyB7JHByb3RvYnVmLnV0aWwuUHJvdG9jb2xFcnJvcn0gSWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBDcmVhdGVSb29tUmVzLmRlY29kZSA9IGZ1bmN0aW9uIGRlY29kZShyZWFkZXIsIGxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEocmVhZGVyIGluc3RhbmNlb2YgJFJlYWRlcikpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyID0gJFJlYWRlci5jcmVhdGUocmVhZGVyKTtcclxuICAgICAgICAgICAgICAgIHZhciBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoLCBtZXNzYWdlID0gbmV3ICRyb290LnByb3RvLm1nci5DcmVhdGVSb29tUmVzKCk7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWcgPSByZWFkZXIudWludDMyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuY29kZSA9IHJlYWRlci5zdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnNlcnZlcklkID0gcmVhZGVyLnN0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uucm9vbSA9ICRyb290LnByb3RvLm1nci5Sb29tLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRGVjb2RlcyBhIENyZWF0ZVJvb21SZXMgbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgcmVhZGVyIG9yIGJ1ZmZlciwgbGVuZ3RoIGRlbGltaXRlZC5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGRlY29kZURlbGltaXRlZFxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ubWdyLkNyZWF0ZVJvb21SZXNcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gcmVhZGVyIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cclxuICAgICAgICAgICAgICogQHJldHVybnMge3Byb3RvLm1nci5DcmVhdGVSb29tUmVzfSBDcmVhdGVSb29tUmVzXHJcbiAgICAgICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGF5bG9hZCBpcyBub3QgYSByZWFkZXIgb3IgdmFsaWQgYnVmZmVyXHJcbiAgICAgICAgICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ3JlYXRlUm9vbVJlcy5kZWNvZGVEZWxpbWl0ZWQgPSBmdW5jdGlvbiBkZWNvZGVEZWxpbWl0ZWQocmVhZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShyZWFkZXIgaW5zdGFuY2VvZiAkUmVhZGVyKSlcclxuICAgICAgICAgICAgICAgICAgICByZWFkZXIgPSBuZXcgJFJlYWRlcihyZWFkZXIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBWZXJpZmllcyBhIENyZWF0ZVJvb21SZXMgbWVzc2FnZS5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHZlcmlmeVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ubWdyLkNyZWF0ZVJvb21SZXNcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCo+fSBtZXNzYWdlIFBsYWluIG9iamVjdCB0byB2ZXJpZnlcclxuICAgICAgICAgICAgICogQHJldHVybnMge3N0cmluZ3xudWxsfSBgbnVsbGAgaWYgdmFsaWQsIG90aGVyd2lzZSB0aGUgcmVhc29uIHdoeSBpdCBpcyBub3RcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENyZWF0ZVJvb21SZXMudmVyaWZ5ID0gZnVuY3Rpb24gdmVyaWZ5KG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSAhPT0gXCJvYmplY3RcIiB8fCBtZXNzYWdlID09PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm9iamVjdCBleHBlY3RlZFwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuY29kZSAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJjb2RlXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJHV0aWwuaXNTdHJpbmcobWVzc2FnZS5jb2RlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiY29kZTogc3RyaW5nIGV4cGVjdGVkXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5zZXJ2ZXJJZCAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJzZXJ2ZXJJZFwiKSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISR1dGlsLmlzU3RyaW5nKG1lc3NhZ2Uuc2VydmVySWQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJzZXJ2ZXJJZDogc3RyaW5nIGV4cGVjdGVkXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5yb29tICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcInJvb21cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3IgPSAkcm9vdC5wcm90by5tZ3IuUm9vbS52ZXJpZnkobWVzc2FnZS5yb29tKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvb20uXCIgKyBlcnJvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBDcmVhdGVSb29tUmVzIG1lc3NhZ2UgZnJvbSBhIHBsYWluIG9iamVjdC4gQWxzbyBjb252ZXJ0cyB2YWx1ZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBpbnRlcm5hbCB0eXBlcy5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGZyb21PYmplY3RcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLm1nci5DcmVhdGVSb29tUmVzXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gb2JqZWN0IFBsYWluIG9iamVjdFxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7cHJvdG8ubWdyLkNyZWF0ZVJvb21SZXN9IENyZWF0ZVJvb21SZXNcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENyZWF0ZVJvb21SZXMuZnJvbU9iamVjdCA9IGZ1bmN0aW9uIGZyb21PYmplY3Qob2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgJHJvb3QucHJvdG8ubWdyLkNyZWF0ZVJvb21SZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gbmV3ICRyb290LnByb3RvLm1nci5DcmVhdGVSb29tUmVzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0LmNvZGUgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmNvZGUgPSBTdHJpbmcob2JqZWN0LmNvZGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5zZXJ2ZXJJZCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc2VydmVySWQgPSBTdHJpbmcob2JqZWN0LnNlcnZlcklkKTtcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3Qucm9vbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3Qucm9vbSAhPT0gXCJvYmplY3RcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiLnByb3RvLm1nci5DcmVhdGVSb29tUmVzLnJvb206IG9iamVjdCBleHBlY3RlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnJvb20gPSAkcm9vdC5wcm90by5tZ3IuUm9vbS5mcm9tT2JqZWN0KG9iamVjdC5yb29tKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBwbGFpbiBvYmplY3QgZnJvbSBhIENyZWF0ZVJvb21SZXMgbWVzc2FnZS4gQWxzbyBjb252ZXJ0cyB2YWx1ZXMgdG8gb3RoZXIgdHlwZXMgaWYgc3BlY2lmaWVkLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gdG9PYmplY3RcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLm1nci5DcmVhdGVSb29tUmVzXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtwcm90by5tZ3IuQ3JlYXRlUm9vbVJlc30gbWVzc2FnZSBDcmVhdGVSb29tUmVzXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLklDb252ZXJzaW9uT3B0aW9uc30gW29wdGlvbnNdIENvbnZlcnNpb24gb3B0aW9uc1xyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0LjxzdHJpbmcsKj59IFBsYWluIG9iamVjdFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ3JlYXRlUm9vbVJlcy50b09iamVjdCA9IGZ1bmN0aW9uIHRvT2JqZWN0KG1lc3NhZ2UsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucylcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0ge307XHJcbiAgICAgICAgICAgICAgICB2YXIgb2JqZWN0ID0ge307XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5kZWZhdWx0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5jb2RlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3Qucm9vbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnNlcnZlcklkID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmNvZGUgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwiY29kZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuY29kZSA9IG1lc3NhZ2UuY29kZTtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnJvb20gIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwicm9vbVwiKSlcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3Qucm9vbSA9ICRyb290LnByb3RvLm1nci5Sb29tLnRvT2JqZWN0KG1lc3NhZ2Uucm9vbSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5zZXJ2ZXJJZCAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJzZXJ2ZXJJZFwiKSlcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3Quc2VydmVySWQgPSBtZXNzYWdlLnNlcnZlcklkO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDb252ZXJ0cyB0aGlzIENyZWF0ZVJvb21SZXMgdG8gSlNPTi5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHRvSlNPTlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ubWdyLkNyZWF0ZVJvb21SZXNcclxuICAgICAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtPYmplY3QuPHN0cmluZywqPn0gSlNPTiBvYmplY3RcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENyZWF0ZVJvb21SZXMucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnRvT2JqZWN0KHRoaXMsICRwcm90b2J1Zi51dGlsLnRvSlNPTk9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIENyZWF0ZVJvb21SZXM7XHJcbiAgICAgICAgfSkoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1ncjtcclxuICAgIH0pKCk7XHJcblxyXG4gICAgcHJvdG8ucm9vbSA9IChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTmFtZXNwYWNlIHJvb20uXHJcbiAgICAgICAgICogQG1lbWJlcm9mIHByb3RvXHJcbiAgICAgICAgICogQG5hbWVzcGFjZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHZhciByb29tID0ge307XHJcblxyXG4gICAgICAgIHJvb20uVXNlciA9IChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBQcm9wZXJ0aWVzIG9mIGEgVXNlci5cclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb21cclxuICAgICAgICAgICAgICogQGludGVyZmFjZSBJVXNlclxyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBbdWlkXSBVc2VyIHVpZFxyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBbdXNlcm5hbWVdIFVzZXIgdXNlcm5hbWVcclxuICAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ29uc3RydWN0cyBhIG5ldyBVc2VyLlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbVxyXG4gICAgICAgICAgICAgKiBAY2xhc3NkZXNjIFJlcHJlc2VudHMgYSBVc2VyLlxyXG4gICAgICAgICAgICAgKiBAaW1wbGVtZW50cyBJVXNlclxyXG4gICAgICAgICAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAgICAgICAgICogQHBhcmFtIHtwcm90by5yb29tLklVc2VyPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBVc2VyKHByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKSwgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllc1trZXlzW2ldXSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXlzW2ldXSA9IHByb3BlcnRpZXNba2V5c1tpXV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBVc2VyIHVpZC5cclxuICAgICAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSB1aWRcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uVXNlclxyXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFVzZXIucHJvdG90eXBlLnVpZCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVXNlciB1c2VybmFtZS5cclxuICAgICAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSB1c2VybmFtZVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbS5Vc2VyXHJcbiAgICAgICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgVXNlci5wcm90b3R5cGUudXNlcm5hbWUgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBuZXcgVXNlciBpbnN0YW5jZSB1c2luZyB0aGUgc3BlY2lmaWVkIHByb3BlcnRpZXMuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBjcmVhdGVcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uVXNlclxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8ucm9vbS5JVXNlcj19IFtwcm9wZXJ0aWVzXSBQcm9wZXJ0aWVzIHRvIHNldFxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7cHJvdG8ucm9vbS5Vc2VyfSBVc2VyIGluc3RhbmNlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBVc2VyLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFVzZXIocHJvcGVydGllcyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRW5jb2RlcyB0aGUgc3BlY2lmaWVkIFVzZXIgbWVzc2FnZS4gRG9lcyBub3QgaW1wbGljaXRseSB7QGxpbmsgcHJvdG8ucm9vbS5Vc2VyLnZlcmlmeXx2ZXJpZnl9IG1lc3NhZ2VzLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZW5jb2RlXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5yb29tLlVzZXJcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3Byb3RvLnJvb20uSVVzZXJ9IG1lc3NhZ2UgVXNlciBtZXNzYWdlIG9yIHBsYWluIG9iamVjdCB0byBlbmNvZGVcclxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuV3JpdGVyfSBbd3JpdGVyXSBXcml0ZXIgdG8gZW5jb2RlIHRvXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFVzZXIuZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKG1lc3NhZ2UsIHdyaXRlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF3cml0ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVyID0gJFdyaXRlci5jcmVhdGUoKTtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnVpZCAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2UsIFwidWlkXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlci51aW50MzIoLyogaWQgMSwgd2lyZVR5cGUgMiA9Ki8xMCkuc3RyaW5nKG1lc3NhZ2UudWlkKTtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnVzZXJuYW1lICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZSwgXCJ1c2VybmFtZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIudWludDMyKC8qIGlkIDIsIHdpcmVUeXBlIDIgPSovMTgpLnN0cmluZyhtZXNzYWdlLnVzZXJuYW1lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB3cml0ZXI7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRW5jb2RlcyB0aGUgc3BlY2lmaWVkIFVzZXIgbWVzc2FnZSwgbGVuZ3RoIGRlbGltaXRlZC4gRG9lcyBub3QgaW1wbGljaXRseSB7QGxpbmsgcHJvdG8ucm9vbS5Vc2VyLnZlcmlmeXx2ZXJpZnl9IG1lc3NhZ2VzLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZW5jb2RlRGVsaW1pdGVkXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5yb29tLlVzZXJcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3Byb3RvLnJvb20uSVVzZXJ9IG1lc3NhZ2UgVXNlciBtZXNzYWdlIG9yIHBsYWluIG9iamVjdCB0byBlbmNvZGVcclxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuV3JpdGVyfSBbd3JpdGVyXSBXcml0ZXIgdG8gZW5jb2RlIHRvXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFVzZXIuZW5jb2RlRGVsaW1pdGVkID0gZnVuY3Rpb24gZW5jb2RlRGVsaW1pdGVkKG1lc3NhZ2UsIHdyaXRlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW5jb2RlKG1lc3NhZ2UsIHdyaXRlcikubGRlbGltKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRGVjb2RlcyBhIFVzZXIgbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgcmVhZGVyIG9yIGJ1ZmZlci5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGRlY29kZVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbS5Vc2VyXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuUmVhZGVyfFVpbnQ4QXJyYXl9IHJlYWRlciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoXSBNZXNzYWdlIGxlbmd0aCBpZiBrbm93biBiZWZvcmVoYW5kXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtwcm90by5yb29tLlVzZXJ9IFVzZXJcclxuICAgICAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXlsb2FkIGlzIG5vdCBhIHJlYWRlciBvciB2YWxpZCBidWZmZXJcclxuICAgICAgICAgICAgICogQHRocm93cyB7JHByb3RvYnVmLnV0aWwuUHJvdG9jb2xFcnJvcn0gSWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBVc2VyLmRlY29kZSA9IGZ1bmN0aW9uIGRlY29kZShyZWFkZXIsIGxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEocmVhZGVyIGluc3RhbmNlb2YgJFJlYWRlcikpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyID0gJFJlYWRlci5jcmVhdGUocmVhZGVyKTtcclxuICAgICAgICAgICAgICAgIHZhciBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoLCBtZXNzYWdlID0gbmV3ICRyb290LnByb3RvLnJvb20uVXNlcigpO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnVpZCA9IHJlYWRlci5zdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnVzZXJuYW1lID0gcmVhZGVyLnN0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIERlY29kZXMgYSBVc2VyIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIsIGxlbmd0aCBkZWxpbWl0ZWQuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVEZWxpbWl0ZWRcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uVXNlclxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLlJlYWRlcnxVaW50OEFycmF5fSByZWFkZXIgUmVhZGVyIG9yIGJ1ZmZlciB0byBkZWNvZGUgZnJvbVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7cHJvdG8ucm9vbS5Vc2VyfSBVc2VyXHJcbiAgICAgICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGF5bG9hZCBpcyBub3QgYSByZWFkZXIgb3IgdmFsaWQgYnVmZmVyXHJcbiAgICAgICAgICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgVXNlci5kZWNvZGVEZWxpbWl0ZWQgPSBmdW5jdGlvbiBkZWNvZGVEZWxpbWl0ZWQocmVhZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShyZWFkZXIgaW5zdGFuY2VvZiAkUmVhZGVyKSlcclxuICAgICAgICAgICAgICAgICAgICByZWFkZXIgPSBuZXcgJFJlYWRlcihyZWFkZXIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBWZXJpZmllcyBhIFVzZXIgbWVzc2FnZS5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHZlcmlmeVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbS5Vc2VyXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gbWVzc2FnZSBQbGFpbiBvYmplY3QgdG8gdmVyaWZ5XHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd8bnVsbH0gYG51bGxgIGlmIHZhbGlkLCBvdGhlcndpc2UgdGhlIHJlYXNvbiB3aHkgaXQgaXMgbm90XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBVc2VyLnZlcmlmeSA9IGZ1bmN0aW9uIHZlcmlmeShtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgIT09IFwib2JqZWN0XCIgfHwgbWVzc2FnZSA9PT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJvYmplY3QgZXhwZWN0ZWRcIjtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnVpZCAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJ1aWRcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkdXRpbC5pc1N0cmluZyhtZXNzYWdlLnVpZCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInVpZDogc3RyaW5nIGV4cGVjdGVkXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS51c2VybmFtZSAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJ1c2VybmFtZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISR1dGlsLmlzU3RyaW5nKG1lc3NhZ2UudXNlcm5hbWUpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ1c2VybmFtZTogc3RyaW5nIGV4cGVjdGVkXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDcmVhdGVzIGEgVXNlciBtZXNzYWdlIGZyb20gYSBwbGFpbiBvYmplY3QuIEFsc28gY29udmVydHMgdmFsdWVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgaW50ZXJuYWwgdHlwZXMuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBmcm9tT2JqZWN0XHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5yb29tLlVzZXJcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCo+fSBvYmplY3QgUGxhaW4gb2JqZWN0XHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtwcm90by5yb29tLlVzZXJ9IFVzZXJcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFVzZXIuZnJvbU9iamVjdCA9IGZ1bmN0aW9uIGZyb21PYmplY3Qob2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgJHJvb3QucHJvdG8ucm9vbS5Vc2VyKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IG5ldyAkcm9vdC5wcm90by5yb29tLlVzZXIoKTtcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3QudWlkICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS51aWQgPSBTdHJpbmcob2JqZWN0LnVpZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0LnVzZXJuYW1lICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS51c2VybmFtZSA9IFN0cmluZyhvYmplY3QudXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ3JlYXRlcyBhIHBsYWluIG9iamVjdCBmcm9tIGEgVXNlciBtZXNzYWdlLiBBbHNvIGNvbnZlcnRzIHZhbHVlcyB0byBvdGhlciB0eXBlcyBpZiBzcGVjaWZpZWQuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiB0b09iamVjdFxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbS5Vc2VyXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtwcm90by5yb29tLlVzZXJ9IG1lc3NhZ2UgVXNlclxyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5JQ29udmVyc2lvbk9wdGlvbnN9IFtvcHRpb25zXSBDb252ZXJzaW9uIG9wdGlvbnNcclxuICAgICAgICAgICAgICogQHJldHVybnMge09iamVjdC48c3RyaW5nLCo+fSBQbGFpbiBvYmplY3RcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFVzZXIudG9PYmplY3QgPSBmdW5jdGlvbiB0b09iamVjdChtZXNzYWdlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgdmFyIG9iamVjdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGVmYXVsdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QudWlkID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QudXNlcm5hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UudWlkICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcInVpZFwiKSlcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QudWlkID0gbWVzc2FnZS51aWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS51c2VybmFtZSAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJ1c2VybmFtZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QudXNlcm5hbWUgPSBtZXNzYWdlLnVzZXJuYW1lO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDb252ZXJ0cyB0aGlzIFVzZXIgdG8gSlNPTi5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHRvSlNPTlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbS5Vc2VyXHJcbiAgICAgICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0LjxzdHJpbmcsKj59IEpTT04gb2JqZWN0XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBVc2VyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci50b09iamVjdCh0aGlzLCAkcHJvdG9idWYudXRpbC50b0pTT05PcHRpb25zKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBVc2VyO1xyXG4gICAgICAgIH0pKCk7XHJcblxyXG4gICAgICAgIHJvb20uUm9vbSA9IChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBQcm9wZXJ0aWVzIG9mIGEgUm9vbS5cclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb21cclxuICAgICAgICAgICAgICogQGludGVyZmFjZSBJUm9vbVxyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBbaWRdIFJvb20gaWRcclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gW25hbWVdIFJvb20gbmFtZVxyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge0FycmF5Ljxwcm90by5yb29tLklVc2VyPnxudWxsfSBbdXNlcnNdIFJvb20gdXNlcnNcclxuICAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ29uc3RydWN0cyBhIG5ldyBSb29tLlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbVxyXG4gICAgICAgICAgICAgKiBAY2xhc3NkZXNjIFJlcHJlc2VudHMgYSBSb29tLlxyXG4gICAgICAgICAgICAgKiBAaW1wbGVtZW50cyBJUm9vbVxyXG4gICAgICAgICAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAgICAgICAgICogQHBhcmFtIHtwcm90by5yb29tLklSb29tPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBSb29tKHByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKSwgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllc1trZXlzW2ldXSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXlzW2ldXSA9IHByb3BlcnRpZXNba2V5c1tpXV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBSb29tIGlkLlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IGlkXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5yb29tLlJvb21cclxuICAgICAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBSb29tLnByb3RvdHlwZS5pZCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogUm9vbSBuYW1lLlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IG5hbWVcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uUm9vbVxyXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFJvb20ucHJvdG90eXBlLm5hbWUgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFJvb20gdXNlcnMuXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXIge0FycmF5Ljxwcm90by5yb29tLklVc2VyPn0gdXNlcnNcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uUm9vbVxyXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFJvb20ucHJvdG90eXBlLnVzZXJzID0gJHV0aWwuZW1wdHlBcnJheTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IFJvb20gaW5zdGFuY2UgdXNpbmcgdGhlIHNwZWNpZmllZCBwcm9wZXJ0aWVzLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gY3JlYXRlXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5yb29tLlJvb21cclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3Byb3RvLnJvb20uSVJvb209fSBbcHJvcGVydGllc10gUHJvcGVydGllcyB0byBzZXRcclxuICAgICAgICAgICAgICogQHJldHVybnMge3Byb3RvLnJvb20uUm9vbX0gUm9vbSBpbnN0YW5jZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgUm9vbS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUocHJvcGVydGllcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSb29tKHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBSb29tIG1lc3NhZ2UuIERvZXMgbm90IGltcGxpY2l0bHkge0BsaW5rIHByb3RvLnJvb20uUm9vbS52ZXJpZnl8dmVyaWZ5fSBtZXNzYWdlcy5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGVuY29kZVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbS5Sb29tXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtwcm90by5yb29tLklSb29tfSBtZXNzYWdlIFJvb20gbWVzc2FnZSBvciBwbGFpbiBvYmplY3QgdG8gZW5jb2RlXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLldyaXRlcn0gW3dyaXRlcl0gV3JpdGVyIHRvIGVuY29kZSB0b1xyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7JHByb3RvYnVmLldyaXRlcn0gV3JpdGVyXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBSb29tLmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZShtZXNzYWdlLCB3cml0ZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghd3JpdGVyKVxyXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlciA9ICRXcml0ZXIuY3JlYXRlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5pZCAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2UsIFwiaWRcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVyLnVpbnQzMigvKiBpZCAxLCB3aXJlVHlwZSAyID0qLzEwKS5zdHJpbmcobWVzc2FnZS5pZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5uYW1lICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZSwgXCJuYW1lXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlci51aW50MzIoLyogaWQgMiwgd2lyZVR5cGUgMiA9Ki8xOCkuc3RyaW5nKG1lc3NhZ2UubmFtZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS51c2VycyAhPSBudWxsICYmIG1lc3NhZ2UudXNlcnMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWVzc2FnZS51c2Vycy5sZW5ndGg7ICsraSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHJvb3QucHJvdG8ucm9vbS5Vc2VyLmVuY29kZShtZXNzYWdlLnVzZXJzW2ldLCB3cml0ZXIudWludDMyKC8qIGlkIDQsIHdpcmVUeXBlIDIgPSovMzQpLmZvcmsoKSkubGRlbGltKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gd3JpdGVyO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBSb29tIG1lc3NhZ2UsIGxlbmd0aCBkZWxpbWl0ZWQuIERvZXMgbm90IGltcGxpY2l0bHkge0BsaW5rIHByb3RvLnJvb20uUm9vbS52ZXJpZnl8dmVyaWZ5fSBtZXNzYWdlcy5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGVuY29kZURlbGltaXRlZFxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbS5Sb29tXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtwcm90by5yb29tLklSb29tfSBtZXNzYWdlIFJvb20gbWVzc2FnZSBvciBwbGFpbiBvYmplY3QgdG8gZW5jb2RlXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLldyaXRlcn0gW3dyaXRlcl0gV3JpdGVyIHRvIGVuY29kZSB0b1xyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7JHByb3RvYnVmLldyaXRlcn0gV3JpdGVyXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBSb29tLmVuY29kZURlbGltaXRlZCA9IGZ1bmN0aW9uIGVuY29kZURlbGltaXRlZChtZXNzYWdlLCB3cml0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVuY29kZShtZXNzYWdlLCB3cml0ZXIpLmxkZWxpbSgpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIERlY29kZXMgYSBSb29tIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uUm9vbVxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLlJlYWRlcnxVaW50OEFycmF5fSByZWFkZXIgUmVhZGVyIG9yIGJ1ZmZlciB0byBkZWNvZGUgZnJvbVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aF0gTWVzc2FnZSBsZW5ndGggaWYga25vd24gYmVmb3JlaGFuZFxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7cHJvdG8ucm9vbS5Sb29tfSBSb29tXHJcbiAgICAgICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGF5bG9hZCBpcyBub3QgYSByZWFkZXIgb3IgdmFsaWQgYnVmZmVyXHJcbiAgICAgICAgICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgUm9vbS5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGUocmVhZGVyLCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghKHJlYWRlciBpbnN0YW5jZW9mICRSZWFkZXIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlciA9ICRSZWFkZXIuY3JlYXRlKHJlYWRlcik7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aCwgbWVzc2FnZSA9IG5ldyAkcm9vdC5wcm90by5yb29tLlJvb20oKTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhZyA9IHJlYWRlci51aW50MzIoKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5pZCA9IHJlYWRlci5zdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLm5hbWUgPSByZWFkZXIuc3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEobWVzc2FnZS51c2VycyAmJiBtZXNzYWdlLnVzZXJzLmxlbmd0aCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnVzZXJzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UudXNlcnMucHVzaCgkcm9vdC5wcm90by5yb29tLlVzZXIuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRGVjb2RlcyBhIFJvb20gbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgcmVhZGVyIG9yIGJ1ZmZlciwgbGVuZ3RoIGRlbGltaXRlZC5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGRlY29kZURlbGltaXRlZFxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbS5Sb29tXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuUmVhZGVyfFVpbnQ4QXJyYXl9IHJlYWRlciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtwcm90by5yb29tLlJvb219IFJvb21cclxuICAgICAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXlsb2FkIGlzIG5vdCBhIHJlYWRlciBvciB2YWxpZCBidWZmZXJcclxuICAgICAgICAgICAgICogQHRocm93cyB7JHByb3RvYnVmLnV0aWwuUHJvdG9jb2xFcnJvcn0gSWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBSb29tLmRlY29kZURlbGltaXRlZCA9IGZ1bmN0aW9uIGRlY29kZURlbGltaXRlZChyZWFkZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghKHJlYWRlciBpbnN0YW5jZW9mICRSZWFkZXIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlciA9IG5ldyAkUmVhZGVyKHJlYWRlcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFZlcmlmaWVzIGEgUm9vbSBtZXNzYWdlLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gdmVyaWZ5XHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5yb29tLlJvb21cclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCo+fSBtZXNzYWdlIFBsYWluIG9iamVjdCB0byB2ZXJpZnlcclxuICAgICAgICAgICAgICogQHJldHVybnMge3N0cmluZ3xudWxsfSBgbnVsbGAgaWYgdmFsaWQsIG90aGVyd2lzZSB0aGUgcmVhc29uIHdoeSBpdCBpcyBub3RcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFJvb20udmVyaWZ5ID0gZnVuY3Rpb24gdmVyaWZ5KG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSAhPT0gXCJvYmplY3RcIiB8fCBtZXNzYWdlID09PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm9iamVjdCBleHBlY3RlZFwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuaWQgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwiaWRcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkdXRpbC5pc1N0cmluZyhtZXNzYWdlLmlkKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiaWQ6IHN0cmluZyBleHBlY3RlZFwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UubmFtZSAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJuYW1lXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJHV0aWwuaXNTdHJpbmcobWVzc2FnZS5uYW1lKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibmFtZTogc3RyaW5nIGV4cGVjdGVkXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS51c2VycyAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJ1c2Vyc1wiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShtZXNzYWdlLnVzZXJzKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwidXNlcnM6IGFycmF5IGV4cGVjdGVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZXNzYWdlLnVzZXJzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJvciA9ICRyb290LnByb3RvLnJvb20uVXNlci52ZXJpZnkobWVzc2FnZS51c2Vyc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInVzZXJzLlwiICsgZXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ3JlYXRlcyBhIFJvb20gbWVzc2FnZSBmcm9tIGEgcGxhaW4gb2JqZWN0LiBBbHNvIGNvbnZlcnRzIHZhbHVlcyB0byB0aGVpciByZXNwZWN0aXZlIGludGVybmFsIHR5cGVzLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZnJvbU9iamVjdFxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbS5Sb29tXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gb2JqZWN0IFBsYWluIG9iamVjdFxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7cHJvdG8ucm9vbS5Sb29tfSBSb29tXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBSb29tLmZyb21PYmplY3QgPSBmdW5jdGlvbiBmcm9tT2JqZWN0KG9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mICRyb290LnByb3RvLnJvb20uUm9vbSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBuZXcgJHJvb3QucHJvdG8ucm9vbS5Sb29tKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0LmlkICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5pZCA9IFN0cmluZyhvYmplY3QuaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5uYW1lICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5uYW1lID0gU3RyaW5nKG9iamVjdC5uYW1lKTtcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3QudXNlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkob2JqZWN0LnVzZXJzKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiLnByb3RvLnJvb20uUm9vbS51c2VyczogYXJyYXkgZXhwZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS51c2VycyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0LnVzZXJzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LnVzZXJzW2ldICE9PSBcIm9iamVjdFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiLnByb3RvLnJvb20uUm9vbS51c2Vyczogb2JqZWN0IGV4cGVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnVzZXJzW2ldID0gJHJvb3QucHJvdG8ucm9vbS5Vc2VyLmZyb21PYmplY3Qob2JqZWN0LnVzZXJzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDcmVhdGVzIGEgcGxhaW4gb2JqZWN0IGZyb20gYSBSb29tIG1lc3NhZ2UuIEFsc28gY29udmVydHMgdmFsdWVzIHRvIG90aGVyIHR5cGVzIGlmIHNwZWNpZmllZC5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHRvT2JqZWN0XHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5yb29tLlJvb21cclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3Byb3RvLnJvb20uUm9vbX0gbWVzc2FnZSBSb29tXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLklDb252ZXJzaW9uT3B0aW9uc30gW29wdGlvbnNdIENvbnZlcnNpb24gb3B0aW9uc1xyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0LjxzdHJpbmcsKj59IFBsYWluIG9iamVjdFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgUm9vbS50b09iamVjdCA9IGZ1bmN0aW9uIHRvT2JqZWN0KG1lc3NhZ2UsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucylcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0ge307XHJcbiAgICAgICAgICAgICAgICB2YXIgb2JqZWN0ID0ge307XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5hcnJheXMgfHwgb3B0aW9ucy5kZWZhdWx0cylcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QudXNlcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmRlZmF1bHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmlkID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QubmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5pZCAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJpZFwiKSlcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuaWQgPSBtZXNzYWdlLmlkO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UubmFtZSAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJuYW1lXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5uYW1lID0gbWVzc2FnZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UudXNlcnMgJiYgbWVzc2FnZS51c2Vycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QudXNlcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG1lc3NhZ2UudXNlcnMubGVuZ3RoOyArK2opXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC51c2Vyc1tqXSA9ICRyb290LnByb3RvLnJvb20uVXNlci50b09iamVjdChtZXNzYWdlLnVzZXJzW2pdLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ29udmVydHMgdGhpcyBSb29tIHRvIEpTT04uXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiB0b0pTT05cclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uUm9vbVxyXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgICAgICogQHJldHVybnMge09iamVjdC48c3RyaW5nLCo+fSBKU09OIG9iamVjdFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgUm9vbS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IudG9PYmplY3QodGhpcywgJHByb3RvYnVmLnV0aWwudG9KU09OT3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gUm9vbTtcclxuICAgICAgICB9KSgpO1xyXG5cclxuICAgICAgICByb29tLkpvaW5SZXEgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogUHJvcGVydGllcyBvZiBhIEpvaW5SZXEuXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5yb29tXHJcbiAgICAgICAgICAgICAqIEBpbnRlcmZhY2UgSUpvaW5SZXFcclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gW2lkXSBKb2luUmVxIGlkXHJcbiAgICAgICAgICAgICAqL1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENvbnN0cnVjdHMgYSBuZXcgSm9pblJlcS5cclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb21cclxuICAgICAgICAgICAgICogQGNsYXNzZGVzYyBSZXByZXNlbnRzIGEgSm9pblJlcS5cclxuICAgICAgICAgICAgICogQGltcGxlbWVudHMgSUpvaW5SZXFcclxuICAgICAgICAgICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8ucm9vbS5JSm9pblJlcT19IFtwcm9wZXJ0aWVzXSBQcm9wZXJ0aWVzIHRvIHNldFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZnVuY3Rpb24gSm9pblJlcShwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcylcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXlzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyksIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNba2V5c1tpXV0gIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba2V5c1tpXV0gPSBwcm9wZXJ0aWVzW2tleXNbaV1dO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogSm9pblJlcSBpZC5cclxuICAgICAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSBpZFxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbS5Kb2luUmVxXHJcbiAgICAgICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgSm9pblJlcS5wcm90b3R5cGUuaWQgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBuZXcgSm9pblJlcSBpbnN0YW5jZSB1c2luZyB0aGUgc3BlY2lmaWVkIHByb3BlcnRpZXMuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBjcmVhdGVcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uSm9pblJlcVxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8ucm9vbS5JSm9pblJlcT19IFtwcm9wZXJ0aWVzXSBQcm9wZXJ0aWVzIHRvIHNldFxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7cHJvdG8ucm9vbS5Kb2luUmVxfSBKb2luUmVxIGluc3RhbmNlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBKb2luUmVxLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEpvaW5SZXEocHJvcGVydGllcyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRW5jb2RlcyB0aGUgc3BlY2lmaWVkIEpvaW5SZXEgbWVzc2FnZS4gRG9lcyBub3QgaW1wbGljaXRseSB7QGxpbmsgcHJvdG8ucm9vbS5Kb2luUmVxLnZlcmlmeXx2ZXJpZnl9IG1lc3NhZ2VzLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZW5jb2RlXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5yb29tLkpvaW5SZXFcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3Byb3RvLnJvb20uSUpvaW5SZXF9IG1lc3NhZ2UgSm9pblJlcSBtZXNzYWdlIG9yIHBsYWluIG9iamVjdCB0byBlbmNvZGVcclxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuV3JpdGVyfSBbd3JpdGVyXSBXcml0ZXIgdG8gZW5jb2RlIHRvXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEpvaW5SZXEuZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKG1lc3NhZ2UsIHdyaXRlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF3cml0ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVyID0gJFdyaXRlci5jcmVhdGUoKTtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmlkICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZSwgXCJpZFwiKSlcclxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIudWludDMyKC8qIGlkIDEsIHdpcmVUeXBlIDIgPSovMTApLnN0cmluZyhtZXNzYWdlLmlkKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB3cml0ZXI7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRW5jb2RlcyB0aGUgc3BlY2lmaWVkIEpvaW5SZXEgbWVzc2FnZSwgbGVuZ3RoIGRlbGltaXRlZC4gRG9lcyBub3QgaW1wbGljaXRseSB7QGxpbmsgcHJvdG8ucm9vbS5Kb2luUmVxLnZlcmlmeXx2ZXJpZnl9IG1lc3NhZ2VzLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZW5jb2RlRGVsaW1pdGVkXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5yb29tLkpvaW5SZXFcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3Byb3RvLnJvb20uSUpvaW5SZXF9IG1lc3NhZ2UgSm9pblJlcSBtZXNzYWdlIG9yIHBsYWluIG9iamVjdCB0byBlbmNvZGVcclxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuV3JpdGVyfSBbd3JpdGVyXSBXcml0ZXIgdG8gZW5jb2RlIHRvXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEpvaW5SZXEuZW5jb2RlRGVsaW1pdGVkID0gZnVuY3Rpb24gZW5jb2RlRGVsaW1pdGVkKG1lc3NhZ2UsIHdyaXRlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW5jb2RlKG1lc3NhZ2UsIHdyaXRlcikubGRlbGltKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRGVjb2RlcyBhIEpvaW5SZXEgbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgcmVhZGVyIG9yIGJ1ZmZlci5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGRlY29kZVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbS5Kb2luUmVxXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuUmVhZGVyfFVpbnQ4QXJyYXl9IHJlYWRlciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoXSBNZXNzYWdlIGxlbmd0aCBpZiBrbm93biBiZWZvcmVoYW5kXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtwcm90by5yb29tLkpvaW5SZXF9IEpvaW5SZXFcclxuICAgICAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXlsb2FkIGlzIG5vdCBhIHJlYWRlciBvciB2YWxpZCBidWZmZXJcclxuICAgICAgICAgICAgICogQHRocm93cyB7JHByb3RvYnVmLnV0aWwuUHJvdG9jb2xFcnJvcn0gSWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBKb2luUmVxLmRlY29kZSA9IGZ1bmN0aW9uIGRlY29kZShyZWFkZXIsIGxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEocmVhZGVyIGluc3RhbmNlb2YgJFJlYWRlcikpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyID0gJFJlYWRlci5jcmVhdGUocmVhZGVyKTtcclxuICAgICAgICAgICAgICAgIHZhciBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoLCBtZXNzYWdlID0gbmV3ICRyb290LnByb3RvLnJvb20uSm9pblJlcSgpO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmlkID0gcmVhZGVyLnN0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIERlY29kZXMgYSBKb2luUmVxIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIsIGxlbmd0aCBkZWxpbWl0ZWQuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVEZWxpbWl0ZWRcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uSm9pblJlcVxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLlJlYWRlcnxVaW50OEFycmF5fSByZWFkZXIgUmVhZGVyIG9yIGJ1ZmZlciB0byBkZWNvZGUgZnJvbVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7cHJvdG8ucm9vbS5Kb2luUmVxfSBKb2luUmVxXHJcbiAgICAgICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGF5bG9hZCBpcyBub3QgYSByZWFkZXIgb3IgdmFsaWQgYnVmZmVyXHJcbiAgICAgICAgICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgSm9pblJlcS5kZWNvZGVEZWxpbWl0ZWQgPSBmdW5jdGlvbiBkZWNvZGVEZWxpbWl0ZWQocmVhZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShyZWFkZXIgaW5zdGFuY2VvZiAkUmVhZGVyKSlcclxuICAgICAgICAgICAgICAgICAgICByZWFkZXIgPSBuZXcgJFJlYWRlcihyZWFkZXIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBWZXJpZmllcyBhIEpvaW5SZXEgbWVzc2FnZS5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHZlcmlmeVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbS5Kb2luUmVxXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gbWVzc2FnZSBQbGFpbiBvYmplY3QgdG8gdmVyaWZ5XHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd8bnVsbH0gYG51bGxgIGlmIHZhbGlkLCBvdGhlcndpc2UgdGhlIHJlYXNvbiB3aHkgaXQgaXMgbm90XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBKb2luUmVxLnZlcmlmeSA9IGZ1bmN0aW9uIHZlcmlmeShtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgIT09IFwib2JqZWN0XCIgfHwgbWVzc2FnZSA9PT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJvYmplY3QgZXhwZWN0ZWRcIjtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmlkICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcImlkXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJHV0aWwuaXNTdHJpbmcobWVzc2FnZS5pZCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImlkOiBzdHJpbmcgZXhwZWN0ZWRcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBKb2luUmVxIG1lc3NhZ2UgZnJvbSBhIHBsYWluIG9iamVjdC4gQWxzbyBjb252ZXJ0cyB2YWx1ZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBpbnRlcm5hbCB0eXBlcy5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGZyb21PYmplY3RcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uSm9pblJlcVxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsKj59IG9iamVjdCBQbGFpbiBvYmplY3RcclxuICAgICAgICAgICAgICogQHJldHVybnMge3Byb3RvLnJvb20uSm9pblJlcX0gSm9pblJlcVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgSm9pblJlcS5mcm9tT2JqZWN0ID0gZnVuY3Rpb24gZnJvbU9iamVjdChvYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiAkcm9vdC5wcm90by5yb29tLkpvaW5SZXEpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gbmV3ICRyb290LnByb3RvLnJvb20uSm9pblJlcSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5pZCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuaWQgPSBTdHJpbmcob2JqZWN0LmlkKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBwbGFpbiBvYmplY3QgZnJvbSBhIEpvaW5SZXEgbWVzc2FnZS4gQWxzbyBjb252ZXJ0cyB2YWx1ZXMgdG8gb3RoZXIgdHlwZXMgaWYgc3BlY2lmaWVkLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gdG9PYmplY3RcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uSm9pblJlcVxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8ucm9vbS5Kb2luUmVxfSBtZXNzYWdlIEpvaW5SZXFcclxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuSUNvbnZlcnNpb25PcHRpb25zfSBbb3B0aW9uc10gQ29udmVyc2lvbiBvcHRpb25zXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtPYmplY3QuPHN0cmluZywqPn0gUGxhaW4gb2JqZWN0XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBKb2luUmVxLnRvT2JqZWN0ID0gZnVuY3Rpb24gdG9PYmplY3QobWVzc2FnZSwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7fTtcclxuICAgICAgICAgICAgICAgIHZhciBvYmplY3QgPSB7fTtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmRlZmF1bHRzKVxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5pZCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5pZCAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJpZFwiKSlcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuaWQgPSBtZXNzYWdlLmlkO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDb252ZXJ0cyB0aGlzIEpvaW5SZXEgdG8gSlNPTi5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHRvSlNPTlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbS5Kb2luUmVxXHJcbiAgICAgICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0LjxzdHJpbmcsKj59IEpTT04gb2JqZWN0XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBKb2luUmVxLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci50b09iamVjdCh0aGlzLCAkcHJvdG9idWYudXRpbC50b0pTT05PcHRpb25zKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBKb2luUmVxO1xyXG4gICAgICAgIH0pKCk7XHJcblxyXG4gICAgICAgIHJvb20uSm9pblJlcyA9IChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBQcm9wZXJ0aWVzIG9mIGEgSm9pblJlcy5cclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb21cclxuICAgICAgICAgICAgICogQGludGVyZmFjZSBJSm9pblJlc1xyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBbY29kZV0gSm9pblJlcyBjb2RlXHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7cHJvdG8ucm9vbS5JUm9vbXxudWxsfSBbcm9vbV0gSm9pblJlcyByb29tXHJcbiAgICAgICAgICAgICAqL1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENvbnN0cnVjdHMgYSBuZXcgSm9pblJlcy5cclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb21cclxuICAgICAgICAgICAgICogQGNsYXNzZGVzYyBSZXByZXNlbnRzIGEgSm9pblJlcy5cclxuICAgICAgICAgICAgICogQGltcGxlbWVudHMgSUpvaW5SZXNcclxuICAgICAgICAgICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8ucm9vbS5JSm9pblJlcz19IFtwcm9wZXJ0aWVzXSBQcm9wZXJ0aWVzIHRvIHNldFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZnVuY3Rpb24gSm9pblJlcyhwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcylcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXlzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyksIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNba2V5c1tpXV0gIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba2V5c1tpXV0gPSBwcm9wZXJ0aWVzW2tleXNbaV1dO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogSm9pblJlcyBjb2RlLlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IGNvZGVcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uSm9pblJlc1xyXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEpvaW5SZXMucHJvdG90eXBlLmNvZGUgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEpvaW5SZXMgcm9vbS5cclxuICAgICAgICAgICAgICogQG1lbWJlciB7cHJvdG8ucm9vbS5JUm9vbXxudWxsfHVuZGVmaW5lZH0gcm9vbVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbS5Kb2luUmVzXHJcbiAgICAgICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgSm9pblJlcy5wcm90b3R5cGUucm9vbSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBKb2luUmVzIGluc3RhbmNlIHVzaW5nIHRoZSBzcGVjaWZpZWQgcHJvcGVydGllcy5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGNyZWF0ZVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbS5Kb2luUmVzXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtwcm90by5yb29tLklKb2luUmVzPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtwcm90by5yb29tLkpvaW5SZXN9IEpvaW5SZXMgaW5zdGFuY2VcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEpvaW5SZXMuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKHByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSm9pblJlcyhwcm9wZXJ0aWVzKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgSm9pblJlcyBtZXNzYWdlLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBwcm90by5yb29tLkpvaW5SZXMudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uSm9pblJlc1xyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8ucm9vbS5JSm9pblJlc30gbWVzc2FnZSBKb2luUmVzIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3cml0ZXJdIFdyaXRlciB0byBlbmNvZGUgdG9cclxuICAgICAgICAgICAgICogQHJldHVybnMgeyRwcm90b2J1Zi5Xcml0ZXJ9IFdyaXRlclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgSm9pblJlcy5lbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGUobWVzc2FnZSwgd3JpdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXdyaXRlcilcclxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIgPSAkV3JpdGVyLmNyZWF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuY29kZSAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2UsIFwiY29kZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIudWludDMyKC8qIGlkIDEsIHdpcmVUeXBlIDIgPSovMTApLnN0cmluZyhtZXNzYWdlLmNvZGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2Uucm9vbSAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2UsIFwicm9vbVwiKSlcclxuICAgICAgICAgICAgICAgICAgICAkcm9vdC5wcm90by5yb29tLlJvb20uZW5jb2RlKG1lc3NhZ2Uucm9vbSwgd3JpdGVyLnVpbnQzMigvKiBpZCAyLCB3aXJlVHlwZSAyID0qLzE4KS5mb3JrKCkpLmxkZWxpbSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdyaXRlcjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgSm9pblJlcyBtZXNzYWdlLCBsZW5ndGggZGVsaW1pdGVkLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBwcm90by5yb29tLkpvaW5SZXMudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVEZWxpbWl0ZWRcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uSm9pblJlc1xyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8ucm9vbS5JSm9pblJlc30gbWVzc2FnZSBKb2luUmVzIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3cml0ZXJdIFdyaXRlciB0byBlbmNvZGUgdG9cclxuICAgICAgICAgICAgICogQHJldHVybnMgeyRwcm90b2J1Zi5Xcml0ZXJ9IFdyaXRlclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgSm9pblJlcy5lbmNvZGVEZWxpbWl0ZWQgPSBmdW5jdGlvbiBlbmNvZGVEZWxpbWl0ZWQobWVzc2FnZSwgd3JpdGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbmNvZGUobWVzc2FnZSwgd3JpdGVyKS5sZGVsaW0oKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBEZWNvZGVzIGEgSm9pblJlcyBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZGVjb2RlXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5yb29tLkpvaW5SZXNcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gcmVhZGVyIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cclxuICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGhdIE1lc3NhZ2UgbGVuZ3RoIGlmIGtub3duIGJlZm9yZWhhbmRcclxuICAgICAgICAgICAgICogQHJldHVybnMge3Byb3RvLnJvb20uSm9pblJlc30gSm9pblJlc1xyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEpvaW5SZXMuZGVjb2RlID0gZnVuY3Rpb24gZGVjb2RlKHJlYWRlciwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShyZWFkZXIgaW5zdGFuY2VvZiAkUmVhZGVyKSlcclxuICAgICAgICAgICAgICAgICAgICByZWFkZXIgPSAkUmVhZGVyLmNyZWF0ZShyZWFkZXIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGgsIG1lc3NhZ2UgPSBuZXcgJHJvb3QucHJvdG8ucm9vbS5Kb2luUmVzKCk7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWcgPSByZWFkZXIudWludDMyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuY29kZSA9IHJlYWRlci5zdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnJvb20gPSAkcm9vdC5wcm90by5yb29tLlJvb20uZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBEZWNvZGVzIGEgSm9pblJlcyBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLCBsZW5ndGggZGVsaW1pdGVkLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZGVjb2RlRGVsaW1pdGVkXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5yb29tLkpvaW5SZXNcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gcmVhZGVyIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cclxuICAgICAgICAgICAgICogQHJldHVybnMge3Byb3RvLnJvb20uSm9pblJlc30gSm9pblJlc1xyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEpvaW5SZXMuZGVjb2RlRGVsaW1pdGVkID0gZnVuY3Rpb24gZGVjb2RlRGVsaW1pdGVkKHJlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEocmVhZGVyIGluc3RhbmNlb2YgJFJlYWRlcikpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyID0gbmV3ICRSZWFkZXIocmVhZGVyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVmVyaWZpZXMgYSBKb2luUmVzIG1lc3NhZ2UuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiB2ZXJpZnlcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uSm9pblJlc1xyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsKj59IG1lc3NhZ2UgUGxhaW4gb2JqZWN0IHRvIHZlcmlmeVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfG51bGx9IGBudWxsYCBpZiB2YWxpZCwgb3RoZXJ3aXNlIHRoZSByZWFzb24gd2h5IGl0IGlzIG5vdFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgSm9pblJlcy52ZXJpZnkgPSBmdW5jdGlvbiB2ZXJpZnkobWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlICE9PSBcIm9iamVjdFwiIHx8IG1lc3NhZ2UgPT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwib2JqZWN0IGV4cGVjdGVkXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5jb2RlICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcImNvZGVcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkdXRpbC5pc1N0cmluZyhtZXNzYWdlLmNvZGUpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJjb2RlOiBzdHJpbmcgZXhwZWN0ZWRcIjtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnJvb20gIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwicm9vbVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlcnJvciA9ICRyb290LnByb3RvLnJvb20uUm9vbS52ZXJpZnkobWVzc2FnZS5yb29tKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvb20uXCIgKyBlcnJvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBKb2luUmVzIG1lc3NhZ2UgZnJvbSBhIHBsYWluIG9iamVjdC4gQWxzbyBjb252ZXJ0cyB2YWx1ZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBpbnRlcm5hbCB0eXBlcy5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGZyb21PYmplY3RcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uSm9pblJlc1xyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsKj59IG9iamVjdCBQbGFpbiBvYmplY3RcclxuICAgICAgICAgICAgICogQHJldHVybnMge3Byb3RvLnJvb20uSm9pblJlc30gSm9pblJlc1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgSm9pblJlcy5mcm9tT2JqZWN0ID0gZnVuY3Rpb24gZnJvbU9iamVjdChvYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiAkcm9vdC5wcm90by5yb29tLkpvaW5SZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gbmV3ICRyb290LnByb3RvLnJvb20uSm9pblJlcygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5jb2RlICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5jb2RlID0gU3RyaW5nKG9iamVjdC5jb2RlKTtcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3Qucm9vbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3Qucm9vbSAhPT0gXCJvYmplY3RcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiLnByb3RvLnJvb20uSm9pblJlcy5yb29tOiBvYmplY3QgZXhwZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5yb29tID0gJHJvb3QucHJvdG8ucm9vbS5Sb29tLmZyb21PYmplY3Qob2JqZWN0LnJvb20pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ3JlYXRlcyBhIHBsYWluIG9iamVjdCBmcm9tIGEgSm9pblJlcyBtZXNzYWdlLiBBbHNvIGNvbnZlcnRzIHZhbHVlcyB0byBvdGhlciB0eXBlcyBpZiBzcGVjaWZpZWQuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiB0b09iamVjdFxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbS5Kb2luUmVzXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtwcm90by5yb29tLkpvaW5SZXN9IG1lc3NhZ2UgSm9pblJlc1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5JQ29udmVyc2lvbk9wdGlvbnN9IFtvcHRpb25zXSBDb252ZXJzaW9uIG9wdGlvbnNcclxuICAgICAgICAgICAgICogQHJldHVybnMge09iamVjdC48c3RyaW5nLCo+fSBQbGFpbiBvYmplY3RcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEpvaW5SZXMudG9PYmplY3QgPSBmdW5jdGlvbiB0b09iamVjdChtZXNzYWdlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgdmFyIG9iamVjdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGVmYXVsdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuY29kZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnJvb20gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuY29kZSAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJjb2RlXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5jb2RlID0gbWVzc2FnZS5jb2RlO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2Uucm9vbSAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJyb29tXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5yb29tID0gJHJvb3QucHJvdG8ucm9vbS5Sb29tLnRvT2JqZWN0KG1lc3NhZ2Uucm9vbSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENvbnZlcnRzIHRoaXMgSm9pblJlcyB0byBKU09OLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gdG9KU09OXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5yb29tLkpvaW5SZXNcclxuICAgICAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtPYmplY3QuPHN0cmluZywqPn0gSlNPTiBvYmplY3RcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEpvaW5SZXMucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnRvT2JqZWN0KHRoaXMsICRwcm90b2J1Zi51dGlsLnRvSlNPTk9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIEpvaW5SZXM7XHJcbiAgICAgICAgfSkoKTtcclxuXHJcbiAgICAgICAgcm9vbS5DaGF0UmVxID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFByb3BlcnRpZXMgb2YgYSBDaGF0UmVxLlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbVxyXG4gICAgICAgICAgICAgKiBAaW50ZXJmYWNlIElDaGF0UmVxXHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IFtjb250ZW50XSBDaGF0UmVxIGNvbnRlbnRcclxuICAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ29uc3RydWN0cyBhIG5ldyBDaGF0UmVxLlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbVxyXG4gICAgICAgICAgICAgKiBAY2xhc3NkZXNjIFJlcHJlc2VudHMgYSBDaGF0UmVxLlxyXG4gICAgICAgICAgICAgKiBAaW1wbGVtZW50cyBJQ2hhdFJlcVxyXG4gICAgICAgICAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAgICAgICAgICogQHBhcmFtIHtwcm90by5yb29tLklDaGF0UmVxPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBDaGF0UmVxKHByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKSwgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllc1trZXlzW2ldXSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXlzW2ldXSA9IHByb3BlcnRpZXNba2V5c1tpXV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDaGF0UmVxIGNvbnRlbnQuXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gY29udGVudFxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbS5DaGF0UmVxXHJcbiAgICAgICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ2hhdFJlcS5wcm90b3R5cGUuY29udGVudCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBDaGF0UmVxIGluc3RhbmNlIHVzaW5nIHRoZSBzcGVjaWZpZWQgcHJvcGVydGllcy5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGNyZWF0ZVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbS5DaGF0UmVxXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtwcm90by5yb29tLklDaGF0UmVxPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtwcm90by5yb29tLkNoYXRSZXF9IENoYXRSZXEgaW5zdGFuY2VcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENoYXRSZXEuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKHByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ2hhdFJlcShwcm9wZXJ0aWVzKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgQ2hhdFJlcSBtZXNzYWdlLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBwcm90by5yb29tLkNoYXRSZXEudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uQ2hhdFJlcVxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8ucm9vbS5JQ2hhdFJlcX0gbWVzc2FnZSBDaGF0UmVxIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3cml0ZXJdIFdyaXRlciB0byBlbmNvZGUgdG9cclxuICAgICAgICAgICAgICogQHJldHVybnMgeyRwcm90b2J1Zi5Xcml0ZXJ9IFdyaXRlclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ2hhdFJlcS5lbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGUobWVzc2FnZSwgd3JpdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXdyaXRlcilcclxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIgPSAkV3JpdGVyLmNyZWF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuY29udGVudCAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2UsIFwiY29udGVudFwiKSlcclxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIudWludDMyKC8qIGlkIDEsIHdpcmVUeXBlIDIgPSovMTApLnN0cmluZyhtZXNzYWdlLmNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdyaXRlcjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgQ2hhdFJlcSBtZXNzYWdlLCBsZW5ndGggZGVsaW1pdGVkLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBwcm90by5yb29tLkNoYXRSZXEudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVEZWxpbWl0ZWRcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uQ2hhdFJlcVxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8ucm9vbS5JQ2hhdFJlcX0gbWVzc2FnZSBDaGF0UmVxIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3cml0ZXJdIFdyaXRlciB0byBlbmNvZGUgdG9cclxuICAgICAgICAgICAgICogQHJldHVybnMgeyRwcm90b2J1Zi5Xcml0ZXJ9IFdyaXRlclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ2hhdFJlcS5lbmNvZGVEZWxpbWl0ZWQgPSBmdW5jdGlvbiBlbmNvZGVEZWxpbWl0ZWQobWVzc2FnZSwgd3JpdGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbmNvZGUobWVzc2FnZSwgd3JpdGVyKS5sZGVsaW0oKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBEZWNvZGVzIGEgQ2hhdFJlcSBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZGVjb2RlXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5yb29tLkNoYXRSZXFcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gcmVhZGVyIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cclxuICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGhdIE1lc3NhZ2UgbGVuZ3RoIGlmIGtub3duIGJlZm9yZWhhbmRcclxuICAgICAgICAgICAgICogQHJldHVybnMge3Byb3RvLnJvb20uQ2hhdFJlcX0gQ2hhdFJlcVxyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENoYXRSZXEuZGVjb2RlID0gZnVuY3Rpb24gZGVjb2RlKHJlYWRlciwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShyZWFkZXIgaW5zdGFuY2VvZiAkUmVhZGVyKSlcclxuICAgICAgICAgICAgICAgICAgICByZWFkZXIgPSAkUmVhZGVyLmNyZWF0ZShyZWFkZXIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGgsIG1lc3NhZ2UgPSBuZXcgJHJvb3QucHJvdG8ucm9vbS5DaGF0UmVxKCk7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWcgPSByZWFkZXIudWludDMyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuY29udGVudCA9IHJlYWRlci5zdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBEZWNvZGVzIGEgQ2hhdFJlcSBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLCBsZW5ndGggZGVsaW1pdGVkLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZGVjb2RlRGVsaW1pdGVkXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5yb29tLkNoYXRSZXFcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gcmVhZGVyIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cclxuICAgICAgICAgICAgICogQHJldHVybnMge3Byb3RvLnJvb20uQ2hhdFJlcX0gQ2hhdFJlcVxyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENoYXRSZXEuZGVjb2RlRGVsaW1pdGVkID0gZnVuY3Rpb24gZGVjb2RlRGVsaW1pdGVkKHJlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEocmVhZGVyIGluc3RhbmNlb2YgJFJlYWRlcikpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyID0gbmV3ICRSZWFkZXIocmVhZGVyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVmVyaWZpZXMgYSBDaGF0UmVxIG1lc3NhZ2UuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiB2ZXJpZnlcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uQ2hhdFJlcVxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsKj59IG1lc3NhZ2UgUGxhaW4gb2JqZWN0IHRvIHZlcmlmeVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfG51bGx9IGBudWxsYCBpZiB2YWxpZCwgb3RoZXJ3aXNlIHRoZSByZWFzb24gd2h5IGl0IGlzIG5vdFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ2hhdFJlcS52ZXJpZnkgPSBmdW5jdGlvbiB2ZXJpZnkobWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlICE9PSBcIm9iamVjdFwiIHx8IG1lc3NhZ2UgPT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwib2JqZWN0IGV4cGVjdGVkXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5jb250ZW50ICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcImNvbnRlbnRcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkdXRpbC5pc1N0cmluZyhtZXNzYWdlLmNvbnRlbnQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250ZW50OiBzdHJpbmcgZXhwZWN0ZWRcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBDaGF0UmVxIG1lc3NhZ2UgZnJvbSBhIHBsYWluIG9iamVjdC4gQWxzbyBjb252ZXJ0cyB2YWx1ZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBpbnRlcm5hbCB0eXBlcy5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGZyb21PYmplY3RcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uQ2hhdFJlcVxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsKj59IG9iamVjdCBQbGFpbiBvYmplY3RcclxuICAgICAgICAgICAgICogQHJldHVybnMge3Byb3RvLnJvb20uQ2hhdFJlcX0gQ2hhdFJlcVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ2hhdFJlcS5mcm9tT2JqZWN0ID0gZnVuY3Rpb24gZnJvbU9iamVjdChvYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiAkcm9vdC5wcm90by5yb29tLkNoYXRSZXEpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gbmV3ICRyb290LnByb3RvLnJvb20uQ2hhdFJlcSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5jb250ZW50ICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5jb250ZW50ID0gU3RyaW5nKG9iamVjdC5jb250ZW50KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBwbGFpbiBvYmplY3QgZnJvbSBhIENoYXRSZXEgbWVzc2FnZS4gQWxzbyBjb252ZXJ0cyB2YWx1ZXMgdG8gb3RoZXIgdHlwZXMgaWYgc3BlY2lmaWVkLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gdG9PYmplY3RcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uQ2hhdFJlcVxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8ucm9vbS5DaGF0UmVxfSBtZXNzYWdlIENoYXRSZXFcclxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuSUNvbnZlcnNpb25PcHRpb25zfSBbb3B0aW9uc10gQ29udmVyc2lvbiBvcHRpb25zXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtPYmplY3QuPHN0cmluZywqPn0gUGxhaW4gb2JqZWN0XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBDaGF0UmVxLnRvT2JqZWN0ID0gZnVuY3Rpb24gdG9PYmplY3QobWVzc2FnZSwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7fTtcclxuICAgICAgICAgICAgICAgIHZhciBvYmplY3QgPSB7fTtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmRlZmF1bHRzKVxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5jb250ZW50ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmNvbnRlbnQgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwiY29udGVudFwiKSlcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuY29udGVudCA9IG1lc3NhZ2UuY29udGVudDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ29udmVydHMgdGhpcyBDaGF0UmVxIHRvIEpTT04uXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiB0b0pTT05cclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uQ2hhdFJlcVxyXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgICAgICogQHJldHVybnMge09iamVjdC48c3RyaW5nLCo+fSBKU09OIG9iamVjdFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ2hhdFJlcS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IudG9PYmplY3QodGhpcywgJHByb3RvYnVmLnV0aWwudG9KU09OT3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gQ2hhdFJlcTtcclxuICAgICAgICB9KSgpO1xyXG5cclxuICAgICAgICByb29tLkNoYXROb3QgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogUHJvcGVydGllcyBvZiBhIENoYXROb3QuXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5yb29tXHJcbiAgICAgICAgICAgICAqIEBpbnRlcmZhY2UgSUNoYXROb3RcclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gW3VpZF0gQ2hhdE5vdCB1aWRcclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gW2NvbnRlbnRdIENoYXROb3QgY29udGVudFxyXG4gICAgICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IENoYXROb3QuXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5yb29tXHJcbiAgICAgICAgICAgICAqIEBjbGFzc2Rlc2MgUmVwcmVzZW50cyBhIENoYXROb3QuXHJcbiAgICAgICAgICAgICAqIEBpbXBsZW1lbnRzIElDaGF0Tm90XHJcbiAgICAgICAgICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3Byb3RvLnJvb20uSUNoYXROb3Q9fSBbcHJvcGVydGllc10gUHJvcGVydGllcyB0byBzZXRcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIENoYXROb3QocHJvcGVydGllcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIga2V5cyA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzW2tleXNbaV1dICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tleXNbaV1dID0gcHJvcGVydGllc1trZXlzW2ldXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENoYXROb3QgdWlkLlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IHVpZFxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbS5DaGF0Tm90XHJcbiAgICAgICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ2hhdE5vdC5wcm90b3R5cGUudWlkID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDaGF0Tm90IGNvbnRlbnQuXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gY29udGVudFxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbS5DaGF0Tm90XHJcbiAgICAgICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ2hhdE5vdC5wcm90b3R5cGUuY29udGVudCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBDaGF0Tm90IGluc3RhbmNlIHVzaW5nIHRoZSBzcGVjaWZpZWQgcHJvcGVydGllcy5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGNyZWF0ZVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbS5DaGF0Tm90XHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtwcm90by5yb29tLklDaGF0Tm90PX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtwcm90by5yb29tLkNoYXROb3R9IENoYXROb3QgaW5zdGFuY2VcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENoYXROb3QuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKHByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ2hhdE5vdChwcm9wZXJ0aWVzKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgQ2hhdE5vdCBtZXNzYWdlLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBwcm90by5yb29tLkNoYXROb3QudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uQ2hhdE5vdFxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8ucm9vbS5JQ2hhdE5vdH0gbWVzc2FnZSBDaGF0Tm90IG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3cml0ZXJdIFdyaXRlciB0byBlbmNvZGUgdG9cclxuICAgICAgICAgICAgICogQHJldHVybnMgeyRwcm90b2J1Zi5Xcml0ZXJ9IFdyaXRlclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ2hhdE5vdC5lbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGUobWVzc2FnZSwgd3JpdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXdyaXRlcilcclxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIgPSAkV3JpdGVyLmNyZWF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UudWlkICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZSwgXCJ1aWRcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVyLnVpbnQzMigvKiBpZCAxLCB3aXJlVHlwZSAyID0qLzEwKS5zdHJpbmcobWVzc2FnZS51aWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuY29udGVudCAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2UsIFwiY29udGVudFwiKSlcclxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIudWludDMyKC8qIGlkIDIsIHdpcmVUeXBlIDIgPSovMTgpLnN0cmluZyhtZXNzYWdlLmNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdyaXRlcjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgQ2hhdE5vdCBtZXNzYWdlLCBsZW5ndGggZGVsaW1pdGVkLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBwcm90by5yb29tLkNoYXROb3QudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVEZWxpbWl0ZWRcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uQ2hhdE5vdFxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8ucm9vbS5JQ2hhdE5vdH0gbWVzc2FnZSBDaGF0Tm90IG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3cml0ZXJdIFdyaXRlciB0byBlbmNvZGUgdG9cclxuICAgICAgICAgICAgICogQHJldHVybnMgeyRwcm90b2J1Zi5Xcml0ZXJ9IFdyaXRlclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ2hhdE5vdC5lbmNvZGVEZWxpbWl0ZWQgPSBmdW5jdGlvbiBlbmNvZGVEZWxpbWl0ZWQobWVzc2FnZSwgd3JpdGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbmNvZGUobWVzc2FnZSwgd3JpdGVyKS5sZGVsaW0oKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBEZWNvZGVzIGEgQ2hhdE5vdCBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZGVjb2RlXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5yb29tLkNoYXROb3RcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gcmVhZGVyIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cclxuICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGhdIE1lc3NhZ2UgbGVuZ3RoIGlmIGtub3duIGJlZm9yZWhhbmRcclxuICAgICAgICAgICAgICogQHJldHVybnMge3Byb3RvLnJvb20uQ2hhdE5vdH0gQ2hhdE5vdFxyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENoYXROb3QuZGVjb2RlID0gZnVuY3Rpb24gZGVjb2RlKHJlYWRlciwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShyZWFkZXIgaW5zdGFuY2VvZiAkUmVhZGVyKSlcclxuICAgICAgICAgICAgICAgICAgICByZWFkZXIgPSAkUmVhZGVyLmNyZWF0ZShyZWFkZXIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGgsIG1lc3NhZ2UgPSBuZXcgJHJvb3QucHJvdG8ucm9vbS5DaGF0Tm90KCk7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWcgPSByZWFkZXIudWludDMyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UudWlkID0gcmVhZGVyLnN0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuY29udGVudCA9IHJlYWRlci5zdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBEZWNvZGVzIGEgQ2hhdE5vdCBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLCBsZW5ndGggZGVsaW1pdGVkLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZGVjb2RlRGVsaW1pdGVkXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5yb29tLkNoYXROb3RcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gcmVhZGVyIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cclxuICAgICAgICAgICAgICogQHJldHVybnMge3Byb3RvLnJvb20uQ2hhdE5vdH0gQ2hhdE5vdFxyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENoYXROb3QuZGVjb2RlRGVsaW1pdGVkID0gZnVuY3Rpb24gZGVjb2RlRGVsaW1pdGVkKHJlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEocmVhZGVyIGluc3RhbmNlb2YgJFJlYWRlcikpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyID0gbmV3ICRSZWFkZXIocmVhZGVyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVmVyaWZpZXMgYSBDaGF0Tm90IG1lc3NhZ2UuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiB2ZXJpZnlcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uQ2hhdE5vdFxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsKj59IG1lc3NhZ2UgUGxhaW4gb2JqZWN0IHRvIHZlcmlmeVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfG51bGx9IGBudWxsYCBpZiB2YWxpZCwgb3RoZXJ3aXNlIHRoZSByZWFzb24gd2h5IGl0IGlzIG5vdFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ2hhdE5vdC52ZXJpZnkgPSBmdW5jdGlvbiB2ZXJpZnkobWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlICE9PSBcIm9iamVjdFwiIHx8IG1lc3NhZ2UgPT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwib2JqZWN0IGV4cGVjdGVkXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS51aWQgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwidWlkXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJHV0aWwuaXNTdHJpbmcobWVzc2FnZS51aWQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ1aWQ6IHN0cmluZyBleHBlY3RlZFwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuY29udGVudCAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJjb250ZW50XCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJHV0aWwuaXNTdHJpbmcobWVzc2FnZS5jb250ZW50KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGVudDogc3RyaW5nIGV4cGVjdGVkXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDcmVhdGVzIGEgQ2hhdE5vdCBtZXNzYWdlIGZyb20gYSBwbGFpbiBvYmplY3QuIEFsc28gY29udmVydHMgdmFsdWVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgaW50ZXJuYWwgdHlwZXMuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBmcm9tT2JqZWN0XHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5yb29tLkNoYXROb3RcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCo+fSBvYmplY3QgUGxhaW4gb2JqZWN0XHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtwcm90by5yb29tLkNoYXROb3R9IENoYXROb3RcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENoYXROb3QuZnJvbU9iamVjdCA9IGZ1bmN0aW9uIGZyb21PYmplY3Qob2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgJHJvb3QucHJvdG8ucm9vbS5DaGF0Tm90KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IG5ldyAkcm9vdC5wcm90by5yb29tLkNoYXROb3QoKTtcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3QudWlkICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS51aWQgPSBTdHJpbmcob2JqZWN0LnVpZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0LmNvbnRlbnQgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmNvbnRlbnQgPSBTdHJpbmcob2JqZWN0LmNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ3JlYXRlcyBhIHBsYWluIG9iamVjdCBmcm9tIGEgQ2hhdE5vdCBtZXNzYWdlLiBBbHNvIGNvbnZlcnRzIHZhbHVlcyB0byBvdGhlciB0eXBlcyBpZiBzcGVjaWZpZWQuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiB0b09iamVjdFxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbS5DaGF0Tm90XHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtwcm90by5yb29tLkNoYXROb3R9IG1lc3NhZ2UgQ2hhdE5vdFxyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5JQ29udmVyc2lvbk9wdGlvbnN9IFtvcHRpb25zXSBDb252ZXJzaW9uIG9wdGlvbnNcclxuICAgICAgICAgICAgICogQHJldHVybnMge09iamVjdC48c3RyaW5nLCo+fSBQbGFpbiBvYmplY3RcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENoYXROb3QudG9PYmplY3QgPSBmdW5jdGlvbiB0b09iamVjdChtZXNzYWdlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgdmFyIG9iamVjdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGVmYXVsdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QudWlkID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuY29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS51aWQgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwidWlkXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC51aWQgPSBtZXNzYWdlLnVpZDtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmNvbnRlbnQgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwiY29udGVudFwiKSlcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuY29udGVudCA9IG1lc3NhZ2UuY29udGVudDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ29udmVydHMgdGhpcyBDaGF0Tm90IHRvIEpTT04uXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiB0b0pTT05cclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uQ2hhdE5vdFxyXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgICAgICogQHJldHVybnMge09iamVjdC48c3RyaW5nLCo+fSBKU09OIG9iamVjdFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ2hhdE5vdC5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IudG9PYmplY3QodGhpcywgJHByb3RvYnVmLnV0aWwudG9KU09OT3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gQ2hhdE5vdDtcclxuICAgICAgICB9KSgpO1xyXG5cclxuICAgICAgICByb29tLlVzZXJBY3Rpb24gPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogUHJvcGVydGllcyBvZiBhIFVzZXJBY3Rpb24uXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5yb29tXHJcbiAgICAgICAgICAgICAqIEBpbnRlcmZhY2UgSVVzZXJBY3Rpb25cclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ8bnVsbH0gW2FjdGlvbl0gVXNlckFjdGlvbiBhY3Rpb25cclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gW3VpZF0gVXNlckFjdGlvbiB1aWRcclxuICAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ29uc3RydWN0cyBhIG5ldyBVc2VyQWN0aW9uLlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbVxyXG4gICAgICAgICAgICAgKiBAY2xhc3NkZXNjIFJlcHJlc2VudHMgYSBVc2VyQWN0aW9uLlxyXG4gICAgICAgICAgICAgKiBAaW1wbGVtZW50cyBJVXNlckFjdGlvblxyXG4gICAgICAgICAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAgICAgICAgICogQHBhcmFtIHtwcm90by5yb29tLklVc2VyQWN0aW9uPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBVc2VyQWN0aW9uKHByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKSwgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllc1trZXlzW2ldXSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXlzW2ldXSA9IHByb3BlcnRpZXNba2V5c1tpXV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBVc2VyQWN0aW9uIGFjdGlvbi5cclxuICAgICAgICAgICAgICogQG1lbWJlciB7bnVtYmVyfSBhY3Rpb25cclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uVXNlckFjdGlvblxyXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFVzZXJBY3Rpb24ucHJvdG90eXBlLmFjdGlvbiA9IDA7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVXNlckFjdGlvbiB1aWQuXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gdWlkXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5yb29tLlVzZXJBY3Rpb25cclxuICAgICAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBVc2VyQWN0aW9uLnByb3RvdHlwZS51aWQgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBuZXcgVXNlckFjdGlvbiBpbnN0YW5jZSB1c2luZyB0aGUgc3BlY2lmaWVkIHByb3BlcnRpZXMuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBjcmVhdGVcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uVXNlckFjdGlvblxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8ucm9vbS5JVXNlckFjdGlvbj19IFtwcm9wZXJ0aWVzXSBQcm9wZXJ0aWVzIHRvIHNldFxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7cHJvdG8ucm9vbS5Vc2VyQWN0aW9ufSBVc2VyQWN0aW9uIGluc3RhbmNlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBVc2VyQWN0aW9uLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFVzZXJBY3Rpb24ocHJvcGVydGllcyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRW5jb2RlcyB0aGUgc3BlY2lmaWVkIFVzZXJBY3Rpb24gbWVzc2FnZS4gRG9lcyBub3QgaW1wbGljaXRseSB7QGxpbmsgcHJvdG8ucm9vbS5Vc2VyQWN0aW9uLnZlcmlmeXx2ZXJpZnl9IG1lc3NhZ2VzLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZW5jb2RlXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5yb29tLlVzZXJBY3Rpb25cclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3Byb3RvLnJvb20uSVVzZXJBY3Rpb259IG1lc3NhZ2UgVXNlckFjdGlvbiBtZXNzYWdlIG9yIHBsYWluIG9iamVjdCB0byBlbmNvZGVcclxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuV3JpdGVyfSBbd3JpdGVyXSBXcml0ZXIgdG8gZW5jb2RlIHRvXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFVzZXJBY3Rpb24uZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKG1lc3NhZ2UsIHdyaXRlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF3cml0ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVyID0gJFdyaXRlci5jcmVhdGUoKTtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmFjdGlvbiAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2UsIFwiYWN0aW9uXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlci51aW50MzIoLyogaWQgMSwgd2lyZVR5cGUgMCA9Ki84KS5pbnQzMihtZXNzYWdlLmFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS51aWQgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlLCBcInVpZFwiKSlcclxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIudWludDMyKC8qIGlkIDIsIHdpcmVUeXBlIDIgPSovMTgpLnN0cmluZyhtZXNzYWdlLnVpZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gd3JpdGVyO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBVc2VyQWN0aW9uIG1lc3NhZ2UsIGxlbmd0aCBkZWxpbWl0ZWQuIERvZXMgbm90IGltcGxpY2l0bHkge0BsaW5rIHByb3RvLnJvb20uVXNlckFjdGlvbi52ZXJpZnl8dmVyaWZ5fSBtZXNzYWdlcy5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGVuY29kZURlbGltaXRlZFxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbS5Vc2VyQWN0aW9uXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtwcm90by5yb29tLklVc2VyQWN0aW9ufSBtZXNzYWdlIFVzZXJBY3Rpb24gbWVzc2FnZSBvciBwbGFpbiBvYmplY3QgdG8gZW5jb2RlXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLldyaXRlcn0gW3dyaXRlcl0gV3JpdGVyIHRvIGVuY29kZSB0b1xyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7JHByb3RvYnVmLldyaXRlcn0gV3JpdGVyXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBVc2VyQWN0aW9uLmVuY29kZURlbGltaXRlZCA9IGZ1bmN0aW9uIGVuY29kZURlbGltaXRlZChtZXNzYWdlLCB3cml0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVuY29kZShtZXNzYWdlLCB3cml0ZXIpLmxkZWxpbSgpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIERlY29kZXMgYSBVc2VyQWN0aW9uIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uVXNlckFjdGlvblxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLlJlYWRlcnxVaW50OEFycmF5fSByZWFkZXIgUmVhZGVyIG9yIGJ1ZmZlciB0byBkZWNvZGUgZnJvbVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aF0gTWVzc2FnZSBsZW5ndGggaWYga25vd24gYmVmb3JlaGFuZFxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7cHJvdG8ucm9vbS5Vc2VyQWN0aW9ufSBVc2VyQWN0aW9uXHJcbiAgICAgICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGF5bG9hZCBpcyBub3QgYSByZWFkZXIgb3IgdmFsaWQgYnVmZmVyXHJcbiAgICAgICAgICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgVXNlckFjdGlvbi5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGUocmVhZGVyLCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghKHJlYWRlciBpbnN0YW5jZW9mICRSZWFkZXIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlciA9ICRSZWFkZXIuY3JlYXRlKHJlYWRlcik7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aCwgbWVzc2FnZSA9IG5ldyAkcm9vdC5wcm90by5yb29tLlVzZXJBY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhZyA9IHJlYWRlci51aW50MzIoKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5hY3Rpb24gPSByZWFkZXIuaW50MzIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnVpZCA9IHJlYWRlci5zdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBEZWNvZGVzIGEgVXNlckFjdGlvbiBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLCBsZW5ndGggZGVsaW1pdGVkLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZGVjb2RlRGVsaW1pdGVkXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5yb29tLlVzZXJBY3Rpb25cclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gcmVhZGVyIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cclxuICAgICAgICAgICAgICogQHJldHVybnMge3Byb3RvLnJvb20uVXNlckFjdGlvbn0gVXNlckFjdGlvblxyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFVzZXJBY3Rpb24uZGVjb2RlRGVsaW1pdGVkID0gZnVuY3Rpb24gZGVjb2RlRGVsaW1pdGVkKHJlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEocmVhZGVyIGluc3RhbmNlb2YgJFJlYWRlcikpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyID0gbmV3ICRSZWFkZXIocmVhZGVyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVmVyaWZpZXMgYSBVc2VyQWN0aW9uIG1lc3NhZ2UuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiB2ZXJpZnlcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uVXNlckFjdGlvblxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsKj59IG1lc3NhZ2UgUGxhaW4gb2JqZWN0IHRvIHZlcmlmeVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfG51bGx9IGBudWxsYCBpZiB2YWxpZCwgb3RoZXJ3aXNlIHRoZSByZWFzb24gd2h5IGl0IGlzIG5vdFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgVXNlckFjdGlvbi52ZXJpZnkgPSBmdW5jdGlvbiB2ZXJpZnkobWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlICE9PSBcIm9iamVjdFwiIHx8IG1lc3NhZ2UgPT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwib2JqZWN0IGV4cGVjdGVkXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5hY3Rpb24gIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwiYWN0aW9uXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJHV0aWwuaXNJbnRlZ2VyKG1lc3NhZ2UuYWN0aW9uKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiYWN0aW9uOiBpbnRlZ2VyIGV4cGVjdGVkXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS51aWQgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwidWlkXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJHV0aWwuaXNTdHJpbmcobWVzc2FnZS51aWQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ1aWQ6IHN0cmluZyBleHBlY3RlZFwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ3JlYXRlcyBhIFVzZXJBY3Rpb24gbWVzc2FnZSBmcm9tIGEgcGxhaW4gb2JqZWN0LiBBbHNvIGNvbnZlcnRzIHZhbHVlcyB0byB0aGVpciByZXNwZWN0aXZlIGludGVybmFsIHR5cGVzLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZnJvbU9iamVjdFxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbS5Vc2VyQWN0aW9uXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gb2JqZWN0IFBsYWluIG9iamVjdFxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7cHJvdG8ucm9vbS5Vc2VyQWN0aW9ufSBVc2VyQWN0aW9uXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBVc2VyQWN0aW9uLmZyb21PYmplY3QgPSBmdW5jdGlvbiBmcm9tT2JqZWN0KG9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mICRyb290LnByb3RvLnJvb20uVXNlckFjdGlvbilcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBuZXcgJHJvb3QucHJvdG8ucm9vbS5Vc2VyQWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0LmFjdGlvbiAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuYWN0aW9uID0gb2JqZWN0LmFjdGlvbiB8IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0LnVpZCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UudWlkID0gU3RyaW5nKG9iamVjdC51aWQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ3JlYXRlcyBhIHBsYWluIG9iamVjdCBmcm9tIGEgVXNlckFjdGlvbiBtZXNzYWdlLiBBbHNvIGNvbnZlcnRzIHZhbHVlcyB0byBvdGhlciB0eXBlcyBpZiBzcGVjaWZpZWQuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiB0b09iamVjdFxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbS5Vc2VyQWN0aW9uXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtwcm90by5yb29tLlVzZXJBY3Rpb259IG1lc3NhZ2UgVXNlckFjdGlvblxyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5JQ29udmVyc2lvbk9wdGlvbnN9IFtvcHRpb25zXSBDb252ZXJzaW9uIG9wdGlvbnNcclxuICAgICAgICAgICAgICogQHJldHVybnMge09iamVjdC48c3RyaW5nLCo+fSBQbGFpbiBvYmplY3RcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFVzZXJBY3Rpb24udG9PYmplY3QgPSBmdW5jdGlvbiB0b09iamVjdChtZXNzYWdlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgdmFyIG9iamVjdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGVmYXVsdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuYWN0aW9uID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QudWlkID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmFjdGlvbiAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJhY3Rpb25cIikpXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmFjdGlvbiA9IG1lc3NhZ2UuYWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UudWlkICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcInVpZFwiKSlcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QudWlkID0gbWVzc2FnZS51aWQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENvbnZlcnRzIHRoaXMgVXNlckFjdGlvbiB0byBKU09OLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gdG9KU09OXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5yb29tLlVzZXJBY3Rpb25cclxuICAgICAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtPYmplY3QuPHN0cmluZywqPn0gSlNPTiBvYmplY3RcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFVzZXJBY3Rpb24ucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnRvT2JqZWN0KHRoaXMsICRwcm90b2J1Zi51dGlsLnRvSlNPTk9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFVzZXJBY3Rpb247XHJcbiAgICAgICAgfSkoKTtcclxuXHJcbiAgICAgICAgcm9vbS5DcmVhdGVSb29tUmVxID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFByb3BlcnRpZXMgb2YgYSBDcmVhdGVSb29tUmVxLlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbVxyXG4gICAgICAgICAgICAgKiBAaW50ZXJmYWNlIElDcmVhdGVSb29tUmVxXHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IFtuYW1lXSBDcmVhdGVSb29tUmVxIG5hbWVcclxuICAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ29uc3RydWN0cyBhIG5ldyBDcmVhdGVSb29tUmVxLlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbVxyXG4gICAgICAgICAgICAgKiBAY2xhc3NkZXNjIFJlcHJlc2VudHMgYSBDcmVhdGVSb29tUmVxLlxyXG4gICAgICAgICAgICAgKiBAaW1wbGVtZW50cyBJQ3JlYXRlUm9vbVJlcVxyXG4gICAgICAgICAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAgICAgICAgICogQHBhcmFtIHtwcm90by5yb29tLklDcmVhdGVSb29tUmVxPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBDcmVhdGVSb29tUmVxKHByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKSwgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllc1trZXlzW2ldXSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXlzW2ldXSA9IHByb3BlcnRpZXNba2V5c1tpXV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDcmVhdGVSb29tUmVxIG5hbWUuXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gbmFtZVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbS5DcmVhdGVSb29tUmVxXHJcbiAgICAgICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ3JlYXRlUm9vbVJlcS5wcm90b3R5cGUubmFtZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBDcmVhdGVSb29tUmVxIGluc3RhbmNlIHVzaW5nIHRoZSBzcGVjaWZpZWQgcHJvcGVydGllcy5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGNyZWF0ZVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbS5DcmVhdGVSb29tUmVxXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtwcm90by5yb29tLklDcmVhdGVSb29tUmVxPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtwcm90by5yb29tLkNyZWF0ZVJvb21SZXF9IENyZWF0ZVJvb21SZXEgaW5zdGFuY2VcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENyZWF0ZVJvb21SZXEuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKHByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ3JlYXRlUm9vbVJlcShwcm9wZXJ0aWVzKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgQ3JlYXRlUm9vbVJlcSBtZXNzYWdlLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBwcm90by5yb29tLkNyZWF0ZVJvb21SZXEudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uQ3JlYXRlUm9vbVJlcVxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8ucm9vbS5JQ3JlYXRlUm9vbVJlcX0gbWVzc2FnZSBDcmVhdGVSb29tUmVxIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3cml0ZXJdIFdyaXRlciB0byBlbmNvZGUgdG9cclxuICAgICAgICAgICAgICogQHJldHVybnMgeyRwcm90b2J1Zi5Xcml0ZXJ9IFdyaXRlclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ3JlYXRlUm9vbVJlcS5lbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGUobWVzc2FnZSwgd3JpdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXdyaXRlcilcclxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIgPSAkV3JpdGVyLmNyZWF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UubmFtZSAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2UsIFwibmFtZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIudWludDMyKC8qIGlkIDEsIHdpcmVUeXBlIDIgPSovMTApLnN0cmluZyhtZXNzYWdlLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdyaXRlcjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgQ3JlYXRlUm9vbVJlcSBtZXNzYWdlLCBsZW5ndGggZGVsaW1pdGVkLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBwcm90by5yb29tLkNyZWF0ZVJvb21SZXEudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVEZWxpbWl0ZWRcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uQ3JlYXRlUm9vbVJlcVxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8ucm9vbS5JQ3JlYXRlUm9vbVJlcX0gbWVzc2FnZSBDcmVhdGVSb29tUmVxIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3cml0ZXJdIFdyaXRlciB0byBlbmNvZGUgdG9cclxuICAgICAgICAgICAgICogQHJldHVybnMgeyRwcm90b2J1Zi5Xcml0ZXJ9IFdyaXRlclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ3JlYXRlUm9vbVJlcS5lbmNvZGVEZWxpbWl0ZWQgPSBmdW5jdGlvbiBlbmNvZGVEZWxpbWl0ZWQobWVzc2FnZSwgd3JpdGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbmNvZGUobWVzc2FnZSwgd3JpdGVyKS5sZGVsaW0oKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBEZWNvZGVzIGEgQ3JlYXRlUm9vbVJlcSBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZGVjb2RlXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5yb29tLkNyZWF0ZVJvb21SZXFcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gcmVhZGVyIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cclxuICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGhdIE1lc3NhZ2UgbGVuZ3RoIGlmIGtub3duIGJlZm9yZWhhbmRcclxuICAgICAgICAgICAgICogQHJldHVybnMge3Byb3RvLnJvb20uQ3JlYXRlUm9vbVJlcX0gQ3JlYXRlUm9vbVJlcVxyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENyZWF0ZVJvb21SZXEuZGVjb2RlID0gZnVuY3Rpb24gZGVjb2RlKHJlYWRlciwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShyZWFkZXIgaW5zdGFuY2VvZiAkUmVhZGVyKSlcclxuICAgICAgICAgICAgICAgICAgICByZWFkZXIgPSAkUmVhZGVyLmNyZWF0ZShyZWFkZXIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGgsIG1lc3NhZ2UgPSBuZXcgJHJvb3QucHJvdG8ucm9vbS5DcmVhdGVSb29tUmVxKCk7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWcgPSByZWFkZXIudWludDMyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UubmFtZSA9IHJlYWRlci5zdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBEZWNvZGVzIGEgQ3JlYXRlUm9vbVJlcSBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLCBsZW5ndGggZGVsaW1pdGVkLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZGVjb2RlRGVsaW1pdGVkXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5yb29tLkNyZWF0ZVJvb21SZXFcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gcmVhZGVyIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cclxuICAgICAgICAgICAgICogQHJldHVybnMge3Byb3RvLnJvb20uQ3JlYXRlUm9vbVJlcX0gQ3JlYXRlUm9vbVJlcVxyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENyZWF0ZVJvb21SZXEuZGVjb2RlRGVsaW1pdGVkID0gZnVuY3Rpb24gZGVjb2RlRGVsaW1pdGVkKHJlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEocmVhZGVyIGluc3RhbmNlb2YgJFJlYWRlcikpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyID0gbmV3ICRSZWFkZXIocmVhZGVyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVmVyaWZpZXMgYSBDcmVhdGVSb29tUmVxIG1lc3NhZ2UuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiB2ZXJpZnlcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uQ3JlYXRlUm9vbVJlcVxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsKj59IG1lc3NhZ2UgUGxhaW4gb2JqZWN0IHRvIHZlcmlmeVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfG51bGx9IGBudWxsYCBpZiB2YWxpZCwgb3RoZXJ3aXNlIHRoZSByZWFzb24gd2h5IGl0IGlzIG5vdFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ3JlYXRlUm9vbVJlcS52ZXJpZnkgPSBmdW5jdGlvbiB2ZXJpZnkobWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlICE9PSBcIm9iamVjdFwiIHx8IG1lc3NhZ2UgPT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwib2JqZWN0IGV4cGVjdGVkXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5uYW1lICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcIm5hbWVcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkdXRpbC5pc1N0cmluZyhtZXNzYWdlLm5hbWUpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJuYW1lOiBzdHJpbmcgZXhwZWN0ZWRcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBDcmVhdGVSb29tUmVxIG1lc3NhZ2UgZnJvbSBhIHBsYWluIG9iamVjdC4gQWxzbyBjb252ZXJ0cyB2YWx1ZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBpbnRlcm5hbCB0eXBlcy5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGZyb21PYmplY3RcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uQ3JlYXRlUm9vbVJlcVxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsKj59IG9iamVjdCBQbGFpbiBvYmplY3RcclxuICAgICAgICAgICAgICogQHJldHVybnMge3Byb3RvLnJvb20uQ3JlYXRlUm9vbVJlcX0gQ3JlYXRlUm9vbVJlcVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ3JlYXRlUm9vbVJlcS5mcm9tT2JqZWN0ID0gZnVuY3Rpb24gZnJvbU9iamVjdChvYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiAkcm9vdC5wcm90by5yb29tLkNyZWF0ZVJvb21SZXEpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gbmV3ICRyb290LnByb3RvLnJvb20uQ3JlYXRlUm9vbVJlcSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5uYW1lICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5uYW1lID0gU3RyaW5nKG9iamVjdC5uYW1lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBwbGFpbiBvYmplY3QgZnJvbSBhIENyZWF0ZVJvb21SZXEgbWVzc2FnZS4gQWxzbyBjb252ZXJ0cyB2YWx1ZXMgdG8gb3RoZXIgdHlwZXMgaWYgc3BlY2lmaWVkLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gdG9PYmplY3RcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uQ3JlYXRlUm9vbVJlcVxyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8ucm9vbS5DcmVhdGVSb29tUmVxfSBtZXNzYWdlIENyZWF0ZVJvb21SZXFcclxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuSUNvbnZlcnNpb25PcHRpb25zfSBbb3B0aW9uc10gQ29udmVyc2lvbiBvcHRpb25zXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtPYmplY3QuPHN0cmluZywqPn0gUGxhaW4gb2JqZWN0XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBDcmVhdGVSb29tUmVxLnRvT2JqZWN0ID0gZnVuY3Rpb24gdG9PYmplY3QobWVzc2FnZSwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7fTtcclxuICAgICAgICAgICAgICAgIHZhciBvYmplY3QgPSB7fTtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmRlZmF1bHRzKVxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5uYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLm5hbWUgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwibmFtZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QubmFtZSA9IG1lc3NhZ2UubmFtZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ29udmVydHMgdGhpcyBDcmVhdGVSb29tUmVxIHRvIEpTT04uXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiB0b0pTT05cclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uQ3JlYXRlUm9vbVJlcVxyXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgICAgICogQHJldHVybnMge09iamVjdC48c3RyaW5nLCo+fSBKU09OIG9iamVjdFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ3JlYXRlUm9vbVJlcS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IudG9PYmplY3QodGhpcywgJHByb3RvYnVmLnV0aWwudG9KU09OT3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gQ3JlYXRlUm9vbVJlcTtcclxuICAgICAgICB9KSgpO1xyXG5cclxuICAgICAgICByb29tLkNyZWF0ZVJvb21SZXMgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogUHJvcGVydGllcyBvZiBhIENyZWF0ZVJvb21SZXMuXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5yb29tXHJcbiAgICAgICAgICAgICAqIEBpbnRlcmZhY2UgSUNyZWF0ZVJvb21SZXNcclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gW2NvZGVdIENyZWF0ZVJvb21SZXMgY29kZVxyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3Byb3RvLnJvb20uSVJvb218bnVsbH0gW3Jvb21dIENyZWF0ZVJvb21SZXMgcm9vbVxyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBbc2VydmVySWRdIENyZWF0ZVJvb21SZXMgc2VydmVySWRcclxuICAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ29uc3RydWN0cyBhIG5ldyBDcmVhdGVSb29tUmVzLlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbVxyXG4gICAgICAgICAgICAgKiBAY2xhc3NkZXNjIFJlcHJlc2VudHMgYSBDcmVhdGVSb29tUmVzLlxyXG4gICAgICAgICAgICAgKiBAaW1wbGVtZW50cyBJQ3JlYXRlUm9vbVJlc1xyXG4gICAgICAgICAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAgICAgICAgICogQHBhcmFtIHtwcm90by5yb29tLklDcmVhdGVSb29tUmVzPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBDcmVhdGVSb29tUmVzKHByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKSwgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllc1trZXlzW2ldXSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXlzW2ldXSA9IHByb3BlcnRpZXNba2V5c1tpXV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDcmVhdGVSb29tUmVzIGNvZGUuXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gY29kZVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbS5DcmVhdGVSb29tUmVzXHJcbiAgICAgICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ3JlYXRlUm9vbVJlcy5wcm90b3R5cGUuY29kZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ3JlYXRlUm9vbVJlcyByb29tLlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtwcm90by5yb29tLklSb29tfG51bGx8dW5kZWZpbmVkfSByb29tXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5yb29tLkNyZWF0ZVJvb21SZXNcclxuICAgICAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBDcmVhdGVSb29tUmVzLnByb3RvdHlwZS5yb29tID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDcmVhdGVSb29tUmVzIHNlcnZlcklkLlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IHNlcnZlcklkXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5yb29tLkNyZWF0ZVJvb21SZXNcclxuICAgICAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBDcmVhdGVSb29tUmVzLnByb3RvdHlwZS5zZXJ2ZXJJZCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBDcmVhdGVSb29tUmVzIGluc3RhbmNlIHVzaW5nIHRoZSBzcGVjaWZpZWQgcHJvcGVydGllcy5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGNyZWF0ZVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbS5DcmVhdGVSb29tUmVzXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtwcm90by5yb29tLklDcmVhdGVSb29tUmVzPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtwcm90by5yb29tLkNyZWF0ZVJvb21SZXN9IENyZWF0ZVJvb21SZXMgaW5zdGFuY2VcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENyZWF0ZVJvb21SZXMuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKHByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ3JlYXRlUm9vbVJlcyhwcm9wZXJ0aWVzKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgQ3JlYXRlUm9vbVJlcyBtZXNzYWdlLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBwcm90by5yb29tLkNyZWF0ZVJvb21SZXMudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uQ3JlYXRlUm9vbVJlc1xyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8ucm9vbS5JQ3JlYXRlUm9vbVJlc30gbWVzc2FnZSBDcmVhdGVSb29tUmVzIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3cml0ZXJdIFdyaXRlciB0byBlbmNvZGUgdG9cclxuICAgICAgICAgICAgICogQHJldHVybnMgeyRwcm90b2J1Zi5Xcml0ZXJ9IFdyaXRlclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ3JlYXRlUm9vbVJlcy5lbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGUobWVzc2FnZSwgd3JpdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXdyaXRlcilcclxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIgPSAkV3JpdGVyLmNyZWF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuY29kZSAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2UsIFwiY29kZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIudWludDMyKC8qIGlkIDEsIHdpcmVUeXBlIDIgPSovMTApLnN0cmluZyhtZXNzYWdlLmNvZGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2Uucm9vbSAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2UsIFwicm9vbVwiKSlcclxuICAgICAgICAgICAgICAgICAgICAkcm9vdC5wcm90by5yb29tLlJvb20uZW5jb2RlKG1lc3NhZ2Uucm9vbSwgd3JpdGVyLnVpbnQzMigvKiBpZCAyLCB3aXJlVHlwZSAyID0qLzE4KS5mb3JrKCkpLmxkZWxpbSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2Uuc2VydmVySWQgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlLCBcInNlcnZlcklkXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlci51aW50MzIoLyogaWQgMywgd2lyZVR5cGUgMiA9Ki8yNikuc3RyaW5nKG1lc3NhZ2Uuc2VydmVySWQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdyaXRlcjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgQ3JlYXRlUm9vbVJlcyBtZXNzYWdlLCBsZW5ndGggZGVsaW1pdGVkLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBwcm90by5yb29tLkNyZWF0ZVJvb21SZXMudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVEZWxpbWl0ZWRcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uQ3JlYXRlUm9vbVJlc1xyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7cHJvdG8ucm9vbS5JQ3JlYXRlUm9vbVJlc30gbWVzc2FnZSBDcmVhdGVSb29tUmVzIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3cml0ZXJdIFdyaXRlciB0byBlbmNvZGUgdG9cclxuICAgICAgICAgICAgICogQHJldHVybnMgeyRwcm90b2J1Zi5Xcml0ZXJ9IFdyaXRlclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ3JlYXRlUm9vbVJlcy5lbmNvZGVEZWxpbWl0ZWQgPSBmdW5jdGlvbiBlbmNvZGVEZWxpbWl0ZWQobWVzc2FnZSwgd3JpdGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbmNvZGUobWVzc2FnZSwgd3JpdGVyKS5sZGVsaW0oKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBEZWNvZGVzIGEgQ3JlYXRlUm9vbVJlcyBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZGVjb2RlXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5yb29tLkNyZWF0ZVJvb21SZXNcclxuICAgICAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gcmVhZGVyIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cclxuICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGhdIE1lc3NhZ2UgbGVuZ3RoIGlmIGtub3duIGJlZm9yZWhhbmRcclxuICAgICAgICAgICAgICogQHJldHVybnMge3Byb3RvLnJvb20uQ3JlYXRlUm9vbVJlc30gQ3JlYXRlUm9vbVJlc1xyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENyZWF0ZVJvb21SZXMuZGVjb2RlID0gZnVuY3Rpb24gZGVjb2RlKHJlYWRlciwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShyZWFkZXIgaW5zdGFuY2VvZiAkUmVhZGVyKSlcclxuICAgICAgICAgICAgICAgICAgICByZWFkZXIgPSAkUmVhZGVyLmNyZWF0ZShyZWFkZXIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGgsIG1lc3NhZ2UgPSBuZXcgJHJvb3QucHJvdG8ucm9vbS5DcmVhdGVSb29tUmVzKCk7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWcgPSByZWFkZXIudWludDMyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuY29kZSA9IHJlYWRlci5zdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnJvb20gPSAkcm9vdC5wcm90by5yb29tLlJvb20uZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnNlcnZlcklkID0gcmVhZGVyLnN0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIERlY29kZXMgYSBDcmVhdGVSb29tUmVzIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIsIGxlbmd0aCBkZWxpbWl0ZWQuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVEZWxpbWl0ZWRcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIHByb3RvLnJvb20uQ3JlYXRlUm9vbVJlc1xyXG4gICAgICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLlJlYWRlcnxVaW50OEFycmF5fSByZWFkZXIgUmVhZGVyIG9yIGJ1ZmZlciB0byBkZWNvZGUgZnJvbVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7cHJvdG8ucm9vbS5DcmVhdGVSb29tUmVzfSBDcmVhdGVSb29tUmVzXHJcbiAgICAgICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGF5bG9hZCBpcyBub3QgYSByZWFkZXIgb3IgdmFsaWQgYnVmZmVyXHJcbiAgICAgICAgICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ3JlYXRlUm9vbVJlcy5kZWNvZGVEZWxpbWl0ZWQgPSBmdW5jdGlvbiBkZWNvZGVEZWxpbWl0ZWQocmVhZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShyZWFkZXIgaW5zdGFuY2VvZiAkUmVhZGVyKSlcclxuICAgICAgICAgICAgICAgICAgICByZWFkZXIgPSBuZXcgJFJlYWRlcihyZWFkZXIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBWZXJpZmllcyBhIENyZWF0ZVJvb21SZXMgbWVzc2FnZS5cclxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHZlcmlmeVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbS5DcmVhdGVSb29tUmVzXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gbWVzc2FnZSBQbGFpbiBvYmplY3QgdG8gdmVyaWZ5XHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd8bnVsbH0gYG51bGxgIGlmIHZhbGlkLCBvdGhlcndpc2UgdGhlIHJlYXNvbiB3aHkgaXQgaXMgbm90XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBDcmVhdGVSb29tUmVzLnZlcmlmeSA9IGZ1bmN0aW9uIHZlcmlmeShtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgIT09IFwib2JqZWN0XCIgfHwgbWVzc2FnZSA9PT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJvYmplY3QgZXhwZWN0ZWRcIjtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmNvZGUgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwiY29kZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISR1dGlsLmlzU3RyaW5nKG1lc3NhZ2UuY29kZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImNvZGU6IHN0cmluZyBleHBlY3RlZFwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2Uucm9vbSAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJyb29tXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yID0gJHJvb3QucHJvdG8ucm9vbS5Sb29tLnZlcmlmeShtZXNzYWdlLnJvb20pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm9vbS5cIiArIGVycm9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2Uuc2VydmVySWQgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwic2VydmVySWRcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkdXRpbC5pc1N0cmluZyhtZXNzYWdlLnNlcnZlcklkKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwic2VydmVySWQ6IHN0cmluZyBleHBlY3RlZFwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ3JlYXRlcyBhIENyZWF0ZVJvb21SZXMgbWVzc2FnZSBmcm9tIGEgcGxhaW4gb2JqZWN0LiBBbHNvIGNvbnZlcnRzIHZhbHVlcyB0byB0aGVpciByZXNwZWN0aXZlIGludGVybmFsIHR5cGVzLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZnJvbU9iamVjdFxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbS5DcmVhdGVSb29tUmVzXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gb2JqZWN0IFBsYWluIG9iamVjdFxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7cHJvdG8ucm9vbS5DcmVhdGVSb29tUmVzfSBDcmVhdGVSb29tUmVzXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBDcmVhdGVSb29tUmVzLmZyb21PYmplY3QgPSBmdW5jdGlvbiBmcm9tT2JqZWN0KG9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mICRyb290LnByb3RvLnJvb20uQ3JlYXRlUm9vbVJlcylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBuZXcgJHJvb3QucHJvdG8ucm9vbS5DcmVhdGVSb29tUmVzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0LmNvZGUgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmNvZGUgPSBTdHJpbmcob2JqZWN0LmNvZGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5yb29tICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5yb29tICE9PSBcIm9iamVjdFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCIucHJvdG8ucm9vbS5DcmVhdGVSb29tUmVzLnJvb206IG9iamVjdCBleHBlY3RlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnJvb20gPSAkcm9vdC5wcm90by5yb29tLlJvb20uZnJvbU9iamVjdChvYmplY3Qucm9vbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0LnNlcnZlcklkICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zZXJ2ZXJJZCA9IFN0cmluZyhvYmplY3Quc2VydmVySWQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ3JlYXRlcyBhIHBsYWluIG9iamVjdCBmcm9tIGEgQ3JlYXRlUm9vbVJlcyBtZXNzYWdlLiBBbHNvIGNvbnZlcnRzIHZhbHVlcyB0byBvdGhlciB0eXBlcyBpZiBzcGVjaWZpZWQuXHJcbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiB0b09iamVjdFxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgcHJvdG8ucm9vbS5DcmVhdGVSb29tUmVzXHJcbiAgICAgICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgICAgICogQHBhcmFtIHtwcm90by5yb29tLkNyZWF0ZVJvb21SZXN9IG1lc3NhZ2UgQ3JlYXRlUm9vbVJlc1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5JQ29udmVyc2lvbk9wdGlvbnN9IFtvcHRpb25zXSBDb252ZXJzaW9uIG9wdGlvbnNcclxuICAgICAgICAgICAgICogQHJldHVybnMge09iamVjdC48c3RyaW5nLCo+fSBQbGFpbiBvYmplY3RcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENyZWF0ZVJvb21SZXMudG9PYmplY3QgPSBmdW5jdGlvbiB0b09iamVjdChtZXNzYWdlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgdmFyIG9iamVjdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGVmYXVsdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuY29kZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnJvb20gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5zZXJ2ZXJJZCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5jb2RlICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcImNvZGVcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmNvZGUgPSBtZXNzYWdlLmNvZGU7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5yb29tICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcInJvb21cIikpXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnJvb20gPSAkcm9vdC5wcm90by5yb29tLlJvb20udG9PYmplY3QobWVzc2FnZS5yb29tLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnNlcnZlcklkICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcInNlcnZlcklkXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5zZXJ2ZXJJZCA9IG1lc3NhZ2Uuc2VydmVySWQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENvbnZlcnRzIHRoaXMgQ3JlYXRlUm9vbVJlcyB0byBKU09OLlxyXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gdG9KU09OXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBwcm90by5yb29tLkNyZWF0ZVJvb21SZXNcclxuICAgICAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtPYmplY3QuPHN0cmluZywqPn0gSlNPTiBvYmplY3RcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENyZWF0ZVJvb21SZXMucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnRvT2JqZWN0KHRoaXMsICRwcm90b2J1Zi51dGlsLnRvSlNPTk9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIENyZWF0ZVJvb21SZXM7XHJcbiAgICAgICAgfSkoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJvb207XHJcbiAgICB9KSgpO1xyXG5cclxuICAgIHJldHVybiBwcm90bztcclxufSkoKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gJHJvb3Q7XHJcbiJdfQ==