/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { utils } from "pixi.js";
import { isFunction } from "./util/is-function";
var DTableDataFilterTree = /** @class */ (function (_super) {
    __extends(DTableDataFilterTree, _super);
    function DTableDataFilterTree(parent) {
        var _this = _super.call(this) || this;
        _this._id = 0;
        _this._idUpdated = -1;
        _this._isApplied = false;
        _this._parent = parent;
        _this._filter = null;
        _this._filtered = null;
        return _this;
    }
    Object.defineProperty(DTableDataFilterTree.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    DTableDataFilterTree.prototype.apply = function () {
        this._isApplied = true;
        this._id += 1;
        this._parent.update();
    };
    DTableDataFilterTree.prototype.unapply = function () {
        if (this._isApplied) {
            this._isApplied = false;
            this._id += 1;
            this._parent.update();
        }
    };
    DTableDataFilterTree.prototype.isApplied = function () {
        return this._isApplied;
    };
    DTableDataFilterTree.prototype.isFiltered = function (node, index, filter) {
        if (isFunction(filter)) {
            return filter(node, index);
        }
        else {
            return filter.test(node, index);
        }
    };
    DTableDataFilterTree.prototype.hasFiltered = function (parent, nodes, filter) {
        for (var i = 0, imax = nodes.length; i < imax; ++i) {
            var node = nodes[i];
            if (this.isFiltered(node, -1, filter)) {
                return true;
            }
            if (node.children != null && 0 < node.children.length && this.hasFiltered(parent, node.children, filter)) {
                return true;
            }
        }
        return false;
    };
    DTableDataFilterTree.prototype.addAllToFiltered = function (parent, nodes, filtered, cursor) {
        for (var i = 0, imax = nodes.length; i < imax; ++i) {
            var node = nodes[i];
            filtered.push(cursor[0]);
            cursor[0] += 1;
            if (node.children != null && 0 < node.children.length && parent.isOpened(node)) {
                this.addAllToFiltered(parent, node.children, filtered, cursor);
            }
        }
    };
    DTableDataFilterTree.prototype.newFilteredSub = function (parent, nodes, filter, filtered, cursor) {
        var result = false;
        for (var i = 0, imax = nodes.length; i < imax; ++i) {
            var node = nodes[i];
            var index = cursor[0];
            cursor[0] += 1;
            var isFiltered = this.isFiltered(node, index, filter);
            if (node.children != null && 0 < node.children.length) {
                if (parent.isOpened(node)) {
                    if (isFiltered) {
                        filtered.push(index);
                        result = true;
                        this.addAllToFiltered(parent, node.children, filtered, cursor);
                    }
                    else {
                        var position = filtered.length;
                        if (this.newFilteredSub(parent, node.children, filter, filtered, cursor)) {
                            filtered.splice(position, 0, index);
                            result = true;
                        }
                    }
                }
                else if (isFiltered || this.hasFiltered(parent, node.children, filter)) {
                    filtered.push(index);
                    result = true;
                }
            }
            else if (isFiltered) {
                filtered.push(index);
                result = true;
            }
        }
        return result;
    };
    DTableDataFilterTree.prototype.newFiltered = function () {
        var filter = this._filter;
        if (filter != null) {
            var filtered = [];
            var parent_1 = this._parent;
            var nodes = parent_1.nodes;
            if (nodes) {
                var cursor = [0];
                this.newFilteredSub(parent_1, nodes, filter, filtered, cursor);
            }
            return filtered;
        }
        return null;
    };
    DTableDataFilterTree.prototype.get = function () {
        return this._filter;
    };
    DTableDataFilterTree.prototype.set = function (filter) {
        if (this._filter !== filter) {
            this._filter = filter;
        }
    };
    DTableDataFilterTree.prototype.toDirty = function () {
        this._id += 1;
    };
    DTableDataFilterTree.prototype.update = function () {
        if (this._id !== this._idUpdated) {
            this._idUpdated = this._id;
            if (this._isApplied) {
                this._filtered = this.newFiltered();
                this.emit("change", this);
            }
            else if (this._filtered != null) {
                this._filtered = null;
                this.emit("change", this);
            }
        }
    };
    Object.defineProperty(DTableDataFilterTree.prototype, "indices", {
        get: function () {
            this.update();
            return this._filtered;
        },
        enumerable: true,
        configurable: true
    });
    DTableDataFilterTree.prototype.map = function (sortedIndex) {
        var result = sortedIndex;
        var indices = this.indices;
        if (indices) {
            var index = indices.indexOf(result);
            if (0 <= index) {
                result = index;
            }
            else {
                return null;
            }
        }
        return result;
    };
    DTableDataFilterTree.prototype.unmap = function (index) {
        var result = index;
        var indices = this.indices;
        if (indices) {
            result = indices[result];
        }
        return result;
    };
    return DTableDataFilterTree;
}(utils.EventEmitter));
export { DTableDataFilterTree };
//# sourceMappingURL=d-table-data-filter-tree.js.map