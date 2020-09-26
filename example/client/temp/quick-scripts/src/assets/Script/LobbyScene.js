"use strict";
cc._RF.push(module, '2842dDdfJhA0522xGP2NyHw', 'LobbyScene');
// Script/LobbyScene.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var proto_1 = require("./proto");
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.roomName = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        starx.on('CreateRoomRes', function (data) {
            var rsp = proto_1.proto.mgr.CreateRoomRes.decode(data);
            cc.log(rsp);
            if (rsp.code.length <= 0) {
                var req = proto_1.proto.room.JoinReq.create({ id: rsp.room.id });
                var buff = proto_1.proto.room.JoinReq.encode(req).finish();
                starx.notify(rsp.serverId + ".room.handler.joinroom", buff);
            }
        });
        starx.on('JoinRes', function (data) {
            var rsp = proto_1.proto.room.JoinRes.decode(data);
            cc.log(rsp);
            if (rsp.code.length == 0) {
                cc.director.loadScene("room");
            }
        });
    };
    NewClass.prototype.createRoom = function () {
        var req = proto_1.proto.mgr.CreateRoomReq.create({ name: this.roomName.string });
        var buf = proto_1.proto.mgr.CreateRoomReq.encode(req).finish();
        starx.notify("mgr.handler.createroom", buf);
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "roomName", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();