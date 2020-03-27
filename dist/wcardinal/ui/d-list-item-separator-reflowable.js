/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Graphics } from "pixi.js";
var DListItemSeparatorReflowable = /** @class */ (function (_super) {
    __extends(DListItemSeparatorReflowable, _super);
    function DListItemSeparatorReflowable(base) {
        var _this = _super.call(this) || this;
        base.appendRenderable(_this, true);
        base.addReflowable(_this);
        return _this;
    }
    DListItemSeparatorReflowable.prototype.onReflow = function (base, width, height) {
        var state = base.state;
        var border = base.border;
        var borderWidth = border.getWidth(state);
        var borderColor = border.getColor(state);
        if (borderColor != null) {
            var borderAlpha = border.getAlpha(state);
            var borderAlign = border.getAlign(state);
            var padding = base.padding;
            var middle = height * 0.5;
            this.clear();
            this.lineStyle(borderWidth, borderColor, borderAlpha, borderAlign);
            this.moveTo(padding.getLeft(), middle);
            this.lineTo(width - padding.getRight(), middle);
            this.visible = true;
        }
        else {
            this.clear();
            this.visible = false;
        }
    };
    return DListItemSeparatorReflowable;
}(Graphics));
export { DListItemSeparatorReflowable };
//# sourceMappingURL=d-list-item-separator-reflowable.js.map