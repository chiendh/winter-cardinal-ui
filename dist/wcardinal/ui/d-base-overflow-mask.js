/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Graphics } from "pixi.js";
import { DCornerMask } from "./d-corner-mask";
var DBaseOverflowMask = /** @class */ (function (_super) {
    __extends(DBaseOverflowMask, _super);
    function DBaseOverflowMask(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        return _this;
    }
    DBaseOverflowMask.prototype.render = function (renderer) {
        this.updateTransform();
        _super.prototype.render.call(this, renderer);
    };
    DBaseOverflowMask.prototype.onReflow = function (base, width, height) {
        var x = 0;
        var y = 0;
        var corner = base.corner;
        var cornerRadius = Math.max(0, corner.getRadius() - 0.5);
        var cornerMask = corner.getMask();
        var tl = (cornerMask & DCornerMask.TOP_LEFT ? 0 : cornerRadius);
        var tr = (cornerMask & DCornerMask.TOP_RIGHT ? 0 : cornerRadius);
        var bl = (cornerMask & DCornerMask.BOTTOM_LEFT ? 0 : cornerRadius);
        var br = (cornerMask & DCornerMask.BOTTOM_RIGHT ? 0 : cornerRadius);
        this.clear();
        this.beginFill(0xFFFFFF, 1);
        this.lineStyle(0, 0, 0, 0, false);
        if (tl <= 0 && tr <= 0 && bl <= 0 && br <= 0) {
            this.moveTo(x, y);
            this.lineTo(x + width, y);
            this.lineTo(x + width, y + height);
            this.lineTo(x, y + height);
            this.lineTo(x, y);
        }
        else {
            this.moveTo(x + tl, y);
            if (0 < tr) {
                this.arcTo(x + width, y, x + width, y + height, tr);
            }
            else {
                this.lineTo(x + width, y);
            }
            if (0 < br) {
                this.arcTo(x + width, y + height, x, y + height, br);
            }
            else {
                this.lineTo(x + width, y + height);
            }
            if (0 < bl) {
                this.arcTo(x, y + height, x, y, bl);
            }
            else {
                this.lineTo(x, y + height);
            }
            if (0 < tl) {
                this.arcTo(x, y, x + width, y, tl);
            }
            else {
                this.lineTo(x, y);
            }
        }
        this.endFill();
    };
    return DBaseOverflowMask;
}(Graphics));
export { DBaseOverflowMask };
//# sourceMappingURL=d-base-overflow-mask.js.map