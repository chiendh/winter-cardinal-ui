/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Container, utils } from "pixi.js";
import { DBaseState } from "./d-base-state";
import { DListItem } from "./d-list-item";
import { DMenu } from "./d-menu";
import { isString } from "./util/is-string";
export var DMenuSidedSelectionMode;
(function (DMenuSidedSelectionMode) {
    DMenuSidedSelectionMode[DMenuSidedSelectionMode["NONE"] = 0] = "NONE";
    DMenuSidedSelectionMode[DMenuSidedSelectionMode["SINGLE"] = 1] = "SINGLE";
    DMenuSidedSelectionMode[DMenuSidedSelectionMode["SINGLE_ONCE"] = 2] = "SINGLE_ONCE";
    DMenuSidedSelectionMode[DMenuSidedSelectionMode["DEFAULT"] = 2] = "DEFAULT";
})(DMenuSidedSelectionMode || (DMenuSidedSelectionMode = {}));
var defaultFilter = function () { return true; };
var DMenuSidedSelection = /** @class */ (function (_super) {
    __extends(DMenuSidedSelection, _super);
    function DMenuSidedSelection(content, options) {
        var _this = _super.call(this) || this;
        _this._content = content;
        _this._item = null;
        _this._isDirty = true;
        _this._mode = (options && options.mode != null ?
            (isString(options.mode) ? DMenuSidedSelectionMode[options.mode] : options.mode) :
            DMenuSidedSelectionMode.DEFAULT);
        _this._filter = (options && options.filter) || _this.getFilterDefault();
        // Events
        var on = options && options.on;
        if (on) {
            for (var name_1 in on) {
                _this.on(name_1, on[name_1]);
            }
        }
        return _this;
    }
    DMenuSidedSelection.prototype.toDirty = function () {
        this._isDirty = true;
    };
    DMenuSidedSelection.prototype.update = function () {
        if (this._isDirty) {
            this._isDirty = false;
            this.update_(this._content);
        }
    };
    DMenuSidedSelection.prototype.hasMenu = function (child) {
        return child && child.menu instanceof DMenu;
    };
    DMenuSidedSelection.prototype.update_ = function (root) {
        var children = root.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            var child = children[i];
            if (child instanceof DListItem) {
                if (child.isActive()) {
                    this.set_(child, false);
                }
            }
            if (child instanceof Container) {
                this.update_(child);
            }
            if (this.hasMenu(child)) {
                this.update_(child.menu);
            }
        }
    };
    DMenuSidedSelection.prototype.add = function (item) {
        this.update();
        this.set_(item, true);
    };
    DMenuSidedSelection.prototype.set = function (item) {
        this.update();
        this.set_(item, true);
    };
    DMenuSidedSelection.prototype.get = function () {
        this.update();
        return this._item;
    };
    DMenuSidedSelection.prototype.size = function () {
        return (this._item ? 1 : 0);
    };
    DMenuSidedSelection.prototype.isEmpty = function () {
        return this._item == null;
    };
    DMenuSidedSelection.prototype.remove = function (item) {
        this.update();
        if (this._item === item) {
            this.set_(null, true);
        }
    };
    DMenuSidedSelection.prototype.clear = function () {
        this.update();
        this.set_(null, true);
    };
    DMenuSidedSelection.prototype.getFilterDefault = function () {
        return defaultFilter;
    };
    DMenuSidedSelection.prototype.set_ = function (item, emit) {
        var oldItem = this._item;
        var mode = this._mode;
        if (mode !== DMenuSidedSelectionMode.NONE && this._filter(item) && oldItem !== item) {
            this.setState(oldItem, mode, false);
            this._item = item;
            this.setState(item, mode, true);
            if (emit) {
                this.emit("change", this);
            }
        }
    };
    DMenuSidedSelection.prototype.setState = function (item, mode, isOn) {
        if (item) {
            if (mode === DMenuSidedSelectionMode.SINGLE) {
                item.setState(DBaseState.ACTIVE, isOn);
            }
            else {
                item.setState(DBaseState.ACTIVE | DBaseState.READ_ONLY, isOn);
            }
        }
    };
    return DMenuSidedSelection;
}(utils.EventEmitter));
export { DMenuSidedSelection };
//# sourceMappingURL=d-menu-sided-selection.js.map