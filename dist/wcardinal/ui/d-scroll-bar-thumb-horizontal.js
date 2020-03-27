/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DScrollBarThumb } from "./d-scroll-bar-thumb";
import { DScrollBarThumbReflowableHorizontal } from "./d-scroll-bar-thumb-reflowable-horizontal";
var DScrollBarThumbHorizontal = /** @class */ (function (_super) {
    __extends(DScrollBarThumbHorizontal, _super);
    function DScrollBarThumbHorizontal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DScrollBarThumbHorizontal.prototype.onDragMove = function (dx, dy) {
        this.emit("regionmove", dx, this);
    };
    DScrollBarThumbHorizontal.prototype.initReflowable = function () {
        new DScrollBarThumbReflowableHorizontal(this);
    };
    return DScrollBarThumbHorizontal;
}(DScrollBarThumb));
export { DScrollBarThumbHorizontal };
//# sourceMappingURL=d-scroll-bar-thumb-horizontal.js.map