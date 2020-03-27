/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseStates } from "./d-base-states";
import { DTableBodyCellText } from "./d-table-body-cell-text";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilPointerEvent } from "./util/util-pointer-event";
var DTableBodyCellButton = /** @class */ (function (_super) {
    __extends(DTableBodyCellButton, _super);
    function DTableBodyCellButton(options) {
        return _super.call(this, options) || this;
    }
    DTableBodyCellButton.prototype.init = function (options) {
        _super.prototype.init.call(this, options);
        this.buttonMode = true;
        this.initOnClick(options);
    };
    DTableBodyCellButton.prototype.initOnClick = function (options) {
        var _this = this;
        UtilPointerEvent.onClick(this, function (e) {
            if (_this.isActionable()) {
                _this.onActive(e);
            }
        });
    };
    DTableBodyCellButton.prototype.onActive = function (e) {
        this.emit("active", this);
        var row = this._row;
        if (row !== undefined) {
            var rowIndex = this._rowIndex;
            var columnIndex = this._columnIndex;
            this._columnData.setter(row, columnIndex, null);
            this.emit("cellchange", null, null, row, rowIndex, columnIndex, this);
        }
    };
    DTableBodyCellButton.prototype.onActivateKeyDown = function (e) {
        if (this.isActionable()) {
            this.setPressed(true);
        }
    };
    DTableBodyCellButton.prototype.onActivateKeyUp = function (e) {
        if (this.isActionable()) {
            if (this.isPressed()) {
                this.onActive(e);
            }
            this.setPressed(false);
        }
    };
    DTableBodyCellButton.prototype.onKeyDown = function (e) {
        if (UtilKeyboardEvent.isActivateKey(e)) {
            this.onActivateKeyDown(e);
        }
        return _super.prototype.onKeyDown.call(this, e);
    };
    DTableBodyCellButton.prototype.onKeyUp = function (e) {
        if (UtilKeyboardEvent.isActivateKey(e)) {
            this.onActivateKeyUp(e);
        }
        return _super.prototype.onKeyUp.call(this, e);
    };
    DTableBodyCellButton.prototype.onStateChange = function (newState, oldState) {
        _super.prototype.onStateChange.call(this, newState, oldState);
        this.buttonMode = DBaseStates.isActionable(newState);
    };
    DTableBodyCellButton.prototype.getType = function () {
        return "DTableBodyCellButton";
    };
    return DTableBodyCellButton;
}(DTableBodyCellText));
export { DTableBodyCellButton };
//# sourceMappingURL=d-table-body-cell-button.js.map