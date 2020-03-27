/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Graphics } from "pixi.js";
var DScrollBarThumbReflowableVertical = /** @class */ (function (_super) {
    __extends(DScrollBarThumbReflowableVertical, _super);
    function DScrollBarThumbReflowableVertical(base) {
        var _this = _super.call(this) || this;
        base.appendRenderable(_this, true);
        base.addReflowable(_this);
        return _this;
    }
    DScrollBarThumbReflowableVertical.prototype.onReflow = function (base, width, height) {
        var state = base.state;
        this.clear();
        var background = base.background;
        var backgroundColor = background.getColor(state);
        var backgroundAlpha = background.getAlpha(state);
        if (backgroundColor != null) {
            var size = 1;
            this.beginFill(backgroundColor, backgroundAlpha);
            this.lineStyle(0, 0, 0, 0);
            this.drawRect(width * 0.5 - size, 0, size * 2, height);
            this.endFill();
            this.visible = true;
        }
        else {
            this.visible = false;
        }
    };
    return DScrollBarThumbReflowableVertical;
}(Graphics));
export { DScrollBarThumbReflowableVertical };
//# sourceMappingURL=d-scroll-bar-thumb-reflowable-vertical.js.map