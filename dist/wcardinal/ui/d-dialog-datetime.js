/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DDialogCommand } from "./d-dialog-command";
import { DPickerDatetime } from "./d-picker-datetime";
var DDialogDatetime = /** @class */ (function (_super) {
    __extends(DDialogDatetime, _super);
    function DDialogDatetime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DDialogDatetime.prototype.onInit = function (layout, options) {
        _super.prototype.onInit.call(this, layout, options);
        var picker = new DPickerDatetime(options && options.picker);
        this._picker = picker;
        layout.addChild(picker);
    };
    Object.defineProperty(DDialogDatetime.prototype, "current", {
        get: function () {
            return this._picker.current;
        },
        set: function (dateCurrent) {
            this._picker.current = dateCurrent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DDialogDatetime.prototype, "new", {
        get: function () {
            return this._picker.new;
        },
        set: function (dateNew) {
            this._picker.new = dateNew;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DDialogDatetime.prototype, "page", {
        get: function () {
            return this._picker.new;
        },
        set: function (datePage) {
            this._picker.page = datePage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DDialogDatetime.prototype, "picker", {
        get: function () {
            return this._picker;
        },
        enumerable: true,
        configurable: true
    });
    DDialogDatetime.prototype.getType = function () {
        return "DDialogDatetime";
    };
    return DDialogDatetime;
}(DDialogCommand));
export { DDialogDatetime };
//# sourceMappingURL=d-dialog-datetime.js.map