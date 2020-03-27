/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { NineSlicePlane } from "pixi.js";
var DShadowImpl = /** @class */ (function (_super) {
    __extends(DShadowImpl, _super);
    function DShadowImpl(texture, width, height, offsetX, offsetY) {
        var _this = _super.call(this, texture, width, height, width, height) || this;
        _this._offsetX = offsetX;
        _this._offsetY = offsetY;
        _this._shiftX = width * 0.5;
        _this._shiftY = height * 0.5;
        _this.interactive = false;
        _this.interactiveChildren = false;
        texture.on("update", function () {
            _this.onTextureUpdate();
        });
        return _this;
    }
    DShadowImpl.prototype.onTextureUpdate = function () {
        this.emit("update", this);
    };
    DShadowImpl.prototype.onReflow = function (base, width, height) {
        var sx = this._shiftX;
        var sy = this._shiftY;
        this.x = -sx + this._offsetX;
        this.y = -sy + this._offsetY;
        this.width = sx + width + sx;
        this.height = sy + height + sy;
    };
    return DShadowImpl;
}(NineSlicePlane));
export { DShadowImpl };
//# sourceMappingURL=d-shadow-impl.js.map