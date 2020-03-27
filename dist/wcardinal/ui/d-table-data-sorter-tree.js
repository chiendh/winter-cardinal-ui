/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { utils } from "pixi.js";
import { DTableDataOrder } from "./d-table-data-sorter";
var DTableDataSorterTree = /** @class */ (function (_super) {
    __extends(DTableDataSorterTree, _super);
    function DTableDataSorterTree() {
        return _super.call(this) || this;
    }
    Object.defineProperty(DTableDataSorterTree.prototype, "id", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DTableDataSorterTree.prototype, "order", {
        get: function () {
            return DTableDataOrder.ASCENDING;
        },
        set: function (order) {
            // DO NOTHING
        },
        enumerable: true,
        configurable: true
    });
    DTableDataSorterTree.prototype.apply = function () {
        // DO NOTHING
    };
    DTableDataSorterTree.prototype.unapply = function () {
        // DO NOTHING
    };
    DTableDataSorterTree.prototype.isApplied = function () {
        return false;
    };
    DTableDataSorterTree.prototype.get = function () {
        return null;
    };
    DTableDataSorterTree.prototype.set = function (comparator) {
        // DO NOTHING
    };
    DTableDataSorterTree.prototype.toDirty = function () {
        // DO NOTHING
    };
    DTableDataSorterTree.prototype.update = function () {
        // DO NOTHING
    };
    Object.defineProperty(DTableDataSorterTree.prototype, "indices", {
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    DTableDataSorterTree.prototype.map = function (unmappedIndex) {
        return unmappedIndex;
    };
    DTableDataSorterTree.prototype.unmap = function (index) {
        return index;
    };
    return DTableDataSorterTree;
}(utils.EventEmitter));
export { DTableDataSorterTree };
//# sourceMappingURL=d-table-data-sorter-tree.js.map