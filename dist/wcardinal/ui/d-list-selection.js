/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { utils } from "pixi.js";
import { DBase } from "./d-base";
export var DListSelectionMode;
(function (DListSelectionMode) {
    DListSelectionMode[DListSelectionMode["NONE"] = 0] = "NONE";
    DListSelectionMode[DListSelectionMode["SINGLE"] = 1] = "SINGLE";
    DListSelectionMode[DListSelectionMode["MULTIPLE"] = 2] = "MULTIPLE";
})(DListSelectionMode || (DListSelectionMode = {}));
var DListSelection = /** @class */ (function (_super) {
    __extends(DListSelection, _super);
    function DListSelection(content, options) {
        var _this = _super.call(this) || this;
        _this._content = content;
        _this._isDirty = false;
        _this._indices = [];
        _this._mode = (options && options.mode != null ? options.mode : DListSelectionMode.SINGLE);
        // Events
        var on = options && options.on;
        if (on) {
            for (var name_1 in on) {
                _this.on(name_1, on[name_1]);
            }
        }
        return _this;
    }
    DListSelection.prototype.toDirty = function () {
        this._isDirty = true;
    };
    DListSelection.prototype.update = function () {
        if (this._isDirty) {
            this._isDirty = false;
            var indices = this._indices;
            indices.length = 0;
            var content = this._content;
            var children = content.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                var child = children[i];
                if (child instanceof DBase) {
                    if (child.isActive()) {
                        indices.push(i);
                    }
                }
            }
        }
    };
    DListSelection.prototype.size = function () {
        this.update();
        return this._indices.length;
    };
    DListSelection.prototype.isEmpty = function () {
        return this.size() <= 0;
    };
    DListSelection.prototype.first = function () {
        return this.get(0);
    };
    DListSelection.prototype.get = function (index) {
        this.update();
        var indices = this._indices;
        if (0 <= index && index < indices.length) {
            var content = this._content;
            var child = content.children[indices[index]];
            if (child != null) {
                return child;
            }
        }
        return null;
    };
    DListSelection.prototype.getIndex = function (index) {
        this.update();
        var indices = this._indices;
        if (0 <= index && index < indices.length) {
            return indices[index];
        }
        return null;
    };
    DListSelection.prototype.clear = function () {
        this.update();
        var indices = this._indices;
        if (0 < indices.length) {
            var content = this._content;
            var children = content.children;
            for (var i = 0, imax = indices.length; i < imax; ++i) {
                var child = children[indices[i]];
                if (child instanceof DBase) {
                    child.setActive(false);
                }
            }
            indices.length = 0;
            this.emit("change", this);
        }
    };
    DListSelection.prototype.add = function (target) {
        var mode = this._mode;
        var content = this._content;
        if (mode === DListSelectionMode.SINGLE) {
            if (!target.isActive()) {
                this.update();
                // Remove the existing
                var indices = this._indices;
                var children = content.children;
                for (var i = 0, imax = indices.length; i < imax; ++i) {
                    var child = children[indices[i]];
                    if (child instanceof DBase) {
                        child.setActive(false);
                    }
                }
                indices.length = 0;
                // Add a new child
                indices.push(content.getChildIndex(target));
                target.setActive(true);
                // Event
                this.emit("change", this);
            }
        }
        else if (mode === DListSelectionMode.MULTIPLE) {
            if (!target.isActive()) {
                if (this._isDirty) {
                    target.setActive(true);
                    this.emit("change", this);
                }
                else {
                    // Find an insertion position
                    var indices = this._indices;
                    var targetIndex = content.getChildIndex(target);
                    for (var i = 0, imax = indices.length; i < imax; ++i) {
                        var index = indices[i];
                        if (targetIndex === index) {
                            target.setActive(true);
                            return;
                        }
                        else if (targetIndex < index) {
                            indices.splice(i, 0, targetIndex);
                            target.setActive(true);
                            this.emit("change", this);
                            return;
                        }
                    }
                    // Push
                    indices.push(targetIndex);
                    target.setActive(true);
                    this.emit("change", this);
                }
            }
        }
    };
    DListSelection.prototype.remove = function (target) {
        if (!target.isActive()) {
            if (this._isDirty) {
                target.setActive(false);
                this.emit("change", this);
            }
            else {
                var indices = this._indices;
                var content = this._content;
                var targetIndex = content.getChildIndex(target);
                for (var i = 0, imax = indices.length; i < imax; ++i) {
                    var index = indices[i];
                    if (targetIndex === index) {
                        indices.splice(i, 1);
                        target.setActive(false);
                        this.emit("change", this);
                        return;
                    }
                }
            }
        }
    };
    return DListSelection;
}(utils.EventEmitter));
export { DListSelection };
//# sourceMappingURL=d-list-selection.js.map