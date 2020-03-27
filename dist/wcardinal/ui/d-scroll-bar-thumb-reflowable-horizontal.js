/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Graphics } from "pixi.js";
var DScrollBarThumbReflowableHorizontal = /** @class */ (function (_super) {
    __extends(DScrollBarThumbReflowableHorizontal, _super);
    function DScrollBarThumbReflowableHorizontal(base) {
        var _this = _super.call(this) || this;
        base.appendRenderable(_this, true);
        base.addReflowable(_this);
        return _this;
    }
    DScrollBarThumbReflowableHorizontal.prototype.onReflow = function (base, width, height) {
        var state = base.state;
        this.clear();
        var background = base.background;
        var backgroundColor = background.getColor(state);
        var backgroundAlpha = background.getAlpha(state);
        if (backgroundColor != null) {
            var size = 1;
            this.beginFill(backgroundColor, backgroundAlpha);
            this.lineStyle(0, 0, 0, 0);
            this.drawRect(0, height * 0.5 - size, width, size * 2);
            this.endFill();
            this.visible = true;
        }
        else {
            this.visible = false;
        }
    };
    return DScrollBarThumbReflowableHorizontal;
}(Graphics));
export { DScrollBarThumbReflowableHorizontal };
//# sourceMappingURL=d-scroll-bar-thumb-reflowable-horizontal.js.map