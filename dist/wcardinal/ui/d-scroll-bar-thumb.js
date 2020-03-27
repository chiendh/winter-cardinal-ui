/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Point } from "pixi.js";
import { DBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { UtilDrag } from "./util/util-drag";
var DScrollBarThumb = /** @class */ (function (_super) {
    __extends(DScrollBarThumb, _super);
    function DScrollBarThumb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DScrollBarThumb.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        this.setState(DBaseState.UNFOCUSABLE, true);
        var position = new Point();
        this._dragUtil = new UtilDrag({
            target: this,
            easing: false,
            on: {
                start: function () {
                    position.copyFrom(_this.position);
                },
                move: function (dx, dy) {
                    position.set(position.x + dx, position.y + dy);
                    _this.onDragMove(position.x, position.y);
                }
            }
        });
    };
    DScrollBarThumb.prototype.getMinimumSize = function () {
        return this.theme.getMinimumSize();
    };
    DScrollBarThumb.prototype.getType = function () {
        return "DScrollBarThumb";
    };
    return DScrollBarThumb;
}(DBase));
export { DScrollBarThumb };
//# sourceMappingURL=d-scroll-bar-thumb.js.map