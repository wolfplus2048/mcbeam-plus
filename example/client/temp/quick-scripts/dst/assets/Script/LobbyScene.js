
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/LobbyScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxMb2JieVNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFDMUMsaUNBQTZCO0FBSTdCO0lBQXNDLDRCQUFZO0lBRGxEO1FBQUEscUVBbUNDO1FBL0JHLGNBQVEsR0FBYSxJQUFJLENBQUM7O1FBOEIxQixpQkFBaUI7SUFDckIsQ0FBQztJQTdCRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7UUFDSSxLQUFLLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxVQUFDLElBQUk7WUFDM0IsSUFBSSxHQUFHLEdBQUcsYUFBSyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQzlDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFFWCxJQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBQztnQkFDcEIsSUFBSSxHQUFHLEdBQUcsYUFBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQTtnQkFDckQsSUFBSSxJQUFJLEdBQUcsYUFBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFBO2dCQUNsRCxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLENBQUE7YUFDOUQ7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNGLEtBQUssQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsSUFBSTtZQUNyQixJQUFJLEdBQUcsR0FBRyxhQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDekMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNYLElBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUNyQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQTthQUNoQztRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELDZCQUFVLEdBQVY7UUFDSSxJQUFJLEdBQUcsR0FBRyxhQUFLLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFBO1FBQ3JFLElBQUksR0FBRyxHQUFHLGFBQUssQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtRQUN0RCxLQUFLLENBQUMsTUFBTSxDQUFDLHdCQUF3QixFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQy9DLENBQUM7SUE3QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDTztJQUhULFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FrQzVCO0lBQUQsZUFBQztDQWxDRCxBQWtDQyxDQWxDcUMsRUFBRSxDQUFDLFNBQVMsR0FrQ2pEO2tCQWxDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5pbXBvcnQge3Byb3RvfSBmcm9tIFwiLi9wcm90b1wiXHJcbmltcG9ydCB7IFJTQV9QS0NTMV9PQUVQX1BBRERJTkcgfSBmcm9tIFwiY29uc3RhbnRzXCI7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcm9vbU5hbWU6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgc3Rhcngub24oJ0NyZWF0ZVJvb21SZXMnLCAoZGF0YSk9PntcclxuICAgICAgICAgICAgbGV0IHJzcCA9IHByb3RvLm1nci5DcmVhdGVSb29tUmVzLmRlY29kZShkYXRhKVxyXG4gICAgICAgICAgICBjYy5sb2cocnNwKVxyXG5cclxuICAgICAgICAgICAgaWYocnNwLmNvZGUubGVuZ3RoIDw9IDApe1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcSA9IHByb3RvLnJvb20uSm9pblJlcS5jcmVhdGUoe2lkOnJzcC5yb29tLmlkfSlcclxuICAgICAgICAgICAgICAgIGxldCBidWZmID0gcHJvdG8ucm9vbS5Kb2luUmVxLmVuY29kZShyZXEpLmZpbmlzaCgpXHJcbiAgICAgICAgICAgICAgICBzdGFyeC5ub3RpZnkocnNwLnNlcnZlcklkICsgXCIucm9vbS5oYW5kbGVyLmpvaW5yb29tXCIsIGJ1ZmYpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHN0YXJ4Lm9uKCdKb2luUmVzJywgKGRhdGEpPT57XHJcbiAgICAgICAgICAgIGxldCByc3AgPSBwcm90by5yb29tLkpvaW5SZXMuZGVjb2RlKGRhdGEpXHJcbiAgICAgICAgICAgIGNjLmxvZyhyc3ApXHJcbiAgICAgICAgICAgIGlmKHJzcC5jb2RlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJyb29tXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY3JlYXRlUm9vbSgpIHtcclxuICAgICAgICBsZXQgcmVxID0gcHJvdG8ubWdyLkNyZWF0ZVJvb21SZXEuY3JlYXRlKHtuYW1lOnRoaXMucm9vbU5hbWUuc3RyaW5nfSlcclxuICAgICAgICBsZXQgYnVmID0gcHJvdG8ubWdyLkNyZWF0ZVJvb21SZXEuZW5jb2RlKHJlcSkuZmluaXNoKClcclxuICAgICAgICBzdGFyeC5ub3RpZnkoXCJtZ3IuaGFuZGxlci5jcmVhdGVyb29tXCIsIGJ1ZilcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19