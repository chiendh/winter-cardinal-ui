/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Graphics } from "pixi.js";
var DBaseOverflowMaskSimple = /** @class */ (function (_super) {
    __extends(DBaseOverflowMaskSimple, _super);
    function DBaseOverflowMaskSimple(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        return _this;
    }
    DBaseOverflowMaskSimple.prototype.render = function (renderer) {
        this.updateTransform();
        _super.prototype.render.call(this, renderer);
    };
    DBaseOverflowMaskSimple.prototype.onReflow = function (base, width, height) {
        this.clear();
        this.beginFill(0xFFFFFF, 1);
        this.drawRect(0, 0, width, height);
        this.endFill();
    };
    return DBaseOverflowMaskSimple;
}(Graphics));
export { DBaseOverflowMaskSimple };
//# sourceMappingURL=d-base-overflow-mask-simple.js.map