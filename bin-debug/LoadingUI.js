//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
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
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.BitmapText();
        var fnt = RES.getRes("num_fnt"); //加载字体位图
        this.textField.text = "0%";
        this.textField.font = fnt;
        this.textField.textAlign = "center",
            this.textField.x = 260,
            this.textField.y = 550,
            this.textField.width = 130,
            this.textField.height = 100;
        var bg = new egret.Bitmap(RES.getRes("loadingBG_jpg"));
        this.addChild(bg);
        this.load = new egret.Bitmap(RES.getRes("loading_json.loading_icon_png"));
        this.load.anchorOffsetX = this.load.width / 2;
        this.load.anchorOffsetY = this.load.height / 2;
        this.load.x = 640 / 2;
        this.load.y = 1136 / 2;
        this.addChild(this.load);
        this.loadBar2 = new egret.Bitmap(RES.getRes("loading_json.loading_bar1_png"));
        this.loadBar2.x = (640 - this.loadBar2.width) / 2;
        this.loadBar2.y = (1136 - this.loadBar2.height) / 2;
        this.addChild(this.loadBar2);
        this.loadBar = new egret.Bitmap(RES.getRes("loading_json.loading_bar2_png"));
        this.loadBar.x = (640 - this.loadBar.width) / 2;
        this.loadBar.y = (1136 - this.loadBar.height) / 2;
        this.addChild(this.loadBar);
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        /**显示百分比 */
        this.textField.text = Math.ceil((current / total) * 100).toString() + "%";
        //遮罩
        var mask = this.getSectorProgress(Math.ceil((current / total) * 360));
        this.addChild(mask);
        this.loadBar.mask = mask;
        this.addChild(this.textField);
    };
    /**loadBar遮罩 */
    LoadingUI.prototype.getSectorProgress = function (angle) {
        var self = this;
        var shape = new egret.Shape();
        changeGraphics(angle);
        return shape;
        //绘制shape遮罩
        function changeGraphics(angle) {
            shape.graphics.clear();
            shape.graphics.beginFill(16711680);
            shape.graphics.moveTo(self.loadBar.x, self.loadBar.y);
            shape.graphics.lineTo(self.loadBar.x + self.loadBar.width / 2, self.loadBar.y + self.loadBar.height / 2);
            shape.graphics.drawArc(self.loadBar.x + self.loadBar.width / 2, self.loadBar.y + self.loadBar.height / 2, self.loadBar.width / 2, 0, angle * Math.PI / 180);
            shape.graphics.lineTo(self.loadBar.x + self.loadBar.width / 2, self.loadBar.y + self.loadBar.height / 2);
            shape.graphics.endFill();
        }
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
