/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseStates } from "./d-base-states";
import { DImage } from "./d-image";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
// Option parser
var toValue = function (options) {
    return (options != null && options.value != null ?
        options.value : null);
};
var DListItem = /** @class */ (function (_super) {
    __extends(DListItem, _super);
    function DListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DListItem.prototype.init = function (options) {
        _super.prototype.init.call(this, options);
        this.buttonMode = true;
        this._value = toValue(options);
    };
    Object.defineProperty(DListItem.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    DListItem.prototype.hasSelection = function (target) {
        return (target && target.selection && target.selection.add);
    };
    DListItem.prototype.getSelection = function () {
        var parent = this.parent;
        while (parent) {
            if (this.hasSelection(parent)) {
                return parent.selection;
            }
            parent = parent.parent;
        }
        return null;
    };
    DListItem.prototype.onSelect = function (e) {
        this.emit("select", this);
        var selection = this.getSelection();
        if (selection) {
            selection.add(this);
        }
    };
    DListItem.prototype.onKeyDown = function (e) {
        if (this.isActionable() && this.isFocused() && UtilKeyboardEvent.isActivateKey(e)) {
            this.onSelect(e);
        }
        return _super.prototype.onKeyDown.call(this, e);
    };
    DListItem.prototype.onStateChange = function (newState, oldState) {
        _super.prototype.onStateChange.call(this, newState, oldState);
        this.buttonMode = DBaseStates.isActionable(newState);
    };
    DListItem.prototype.getType = function () {
        return "DListItem";
    };
    return DListItem;
}(DImage));
export { DListItem };
//# sourceMappingURL=d-list-item.js.map