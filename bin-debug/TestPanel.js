var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var TestPanel = (function (_super) {
    __extends(TestPanel, _super);
    function TestPanel() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    TestPanel.prototype.init = function () {
        var bg = new egret.Bitmap(RES.getRes("loadingBG_jpg"));
        this.addChild(bg);
        var icon_1 = new egret.Bitmap(RES.getRes("sjdj_bg2_png"));
        this.addChild(icon_1);
    };
    return TestPanel;
}(egret.Sprite));
__reflect(TestPanel.prototype, "TestPanel");
