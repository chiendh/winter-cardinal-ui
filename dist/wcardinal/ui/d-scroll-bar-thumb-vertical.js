/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DScrollBarThumb } from "./d-scroll-bar-thumb";
import { DScrollBarThumbReflowableVertical } from "./d-scroll-bar-thumb-reflowable-vertical";
var DScrollBarThumbVertocal = /** @class */ (function (_super) {
    __extends(DScrollBarThumbVertocal, _super);
    function DScrollBarThumbVertocal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DScrollBarThumbVertocal.prototype.onDragMove = function (dx, dy) {
        this.emit("regionmove", dy, this);
    };
    DScrollBarThumbVertocal.prototype.initReflowable = function () {
        new DScrollBarThumbReflowableVertical(this);
    };
    return DScrollBarThumbVertocal;
}(DScrollBarThumb));
export { DScrollBarThumbVertocal };
//# sourceMappingURL=d-scroll-bar-thumb-vertical.js.map