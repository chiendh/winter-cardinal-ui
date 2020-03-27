/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DImage } from "./d-image";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilPointerEvent } from "./util/util-pointer-event";
var DExpandableHeader = /** @class */ (function (_super) {
    __extends(DExpandableHeader, _super);
    function DExpandableHeader(options) {
        var _this = _super.call(this, options) || this;
        _this.on(UtilPointerEvent.down, function () {
            if (_this.isActionable()) {
                _this.onSelect();
            }
        });
        return _this;
    }
    DExpandableHeader.prototype.onSelect = function () {
        this.emit("select", this);
    };
    DExpandableHeader.prototype.onKeyDown = function (e) {
        if (this.isActionable() && this.isFocused() && UtilKeyboardEvent.isActivateKey(e)) {
            this.onSelect();
        }
        return _super.prototype.onKeyDown.call(this, e);
    };
    DExpandableHeader.prototype.getType = function () {
        return "DExpandableHeader";
    };
    return DExpandableHeader;
}(DImage));
export { DExpandableHeader };
//# sourceMappingURL=d-expandable-header.js.map