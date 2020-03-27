import { __extends } from "tslib";
import { utils } from "pixi.js";
import { DTableDataFilterTree } from "./d-table-data-filter-tree";
import { DTableDataListMapped } from "./d-table-data-list-mapped";
import { DTableDataSelectionImpl } from "./d-table-data-selection-impl";
import { DTableDataSorterTree } from "./d-table-data-sorter-tree";
var DTableDataTree = /** @class */ (function (_super) {
    __extends(DTableDataTree, _super);
    function DTableDataTree(options) {
        var _this = _super.call(this) || this;
        _this._parent = null;
        _this._mapped = new DTableDataListMapped(_this);
        _this._rows = [];
        _this._isRowsDirty = false;
        _this._supplimentals = [];
        _this._flags = new WeakMap();
        _this._selection = new DTableDataSelectionImpl(_this, options && options.selection);
        _this._filter = new DTableDataFilterTree(_this);
        _this._sorter = new DTableDataSorterTree();
        if (options) {
            // Filter
            var filter = options.filter;
            if (filter) {
                _this._filter.set(filter);
            }
            // Events
            var on = options.on;
            if (on) {
                for (var name_1 in on) {
                    var handler = on[name_1];
                    if (handler) {
                        _this.on(name_1, handler);
                    }
                }
            }
        }
        // Update rows
        _this.nodes = options && options.nodes;
        return _this;
    }
    DTableDataTree.prototype.bind = function (parent) {
        this._parent = parent;
    };
    Object.defineProperty(DTableDataTree.prototype, "nodes", {
        get: function () {
            return this._nodes;
        },
        set: function (nodes) {
            this._nodes = nodes;
            this._isRowsDirty = true;
            this._filter.toDirty();
            this.update(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DTableDataTree.prototype, "rows", {
        get: function () {
            if (this._isRowsDirty) {
                this._isRowsDirty = false;
                this.updateRows(this._nodes);
            }
            return this._rows;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DTableDataTree.prototype, "supplimentals", {
        get: function () {
            return this._supplimentals;
        },
        enumerable: true,
        configurable: true
    });
    DTableDataTree.prototype.updateRows = function (nodes) {
        var rows = this._rows;
        var supplimentals = this._supplimentals;
        var flags = this._flags;
        if (nodes != null) {
            var irows = this.updateRows_(nodes, 0, 0, rows, supplimentals, flags);
            if (irows !== rows.length) {
                rows.length = irows;
                supplimentals.length = irows;
            }
        }
        else {
            rows.length = 0;
            supplimentals.length = 0;
        }
    };
    DTableDataTree.prototype.toSupplimental = function (ilevel, hasChildren, isOpened) {
        return (ilevel << 2) | (hasChildren ? 2 : 0) | (isOpened ? 1 : 0);
    };
    DTableDataTree.prototype.updateRows_ = function (nodes, irows, ilevel, rows, supplimentals, flags) {
        for (var i = 0, imax = nodes.length; i < imax; ++i) {
            var node = nodes[i];
            var children = node.children;
            var isOpened = flags.has(node);
            var supplimental = this.toSupplimental(ilevel, !!(children && 0 < children.length), isOpened);
            if (irows < rows.length) {
                rows[irows] = node;
                supplimentals[irows] = supplimental;
            }
            else {
                rows.push(node);
                supplimentals.push(supplimental);
            }
            irows += 1;
            if (isOpened && children) {
                irows = this.updateRows_(children, irows, ilevel + 1, rows, supplimentals, flags);
            }
        }
        return irows;
    };
    DTableDataTree.prototype.update = function (forcibly) {
        var parent = this._parent;
        if (parent) {
            parent.update(forcibly);
        }
    };
    DTableDataTree.prototype.size = function () {
        return this.rows.length;
    };
    DTableDataTree.prototype.get = function (index) {
        var rows = this.rows;
        if (0 <= index && index < rows.length) {
            return rows[index];
        }
        return null;
    };
    DTableDataTree.prototype.open = function (node) {
        var flags = this._flags;
        if (!flags.has(node)) {
            flags.set(node, 1);
            this._isRowsDirty = true;
            this._filter.toDirty();
            this.update(true);
        }
    };
    DTableDataTree.prototype.close = function (node) {
        var flags = this._flags;
        if (flags.has(node)) {
            flags.delete(node);
            this._isRowsDirty = true;
            this._filter.toDirty();
            this.update(true);
        }
    };
    DTableDataTree.prototype.isOpened = function (node) {
        return this._flags.has(node);
    };
    DTableDataTree.prototype.toggle = function (node) {
        var flags = this._flags;
        if (flags.has(node)) {
            flags.delete(node);
        }
        else {
            flags.set(node, 1);
        }
        this._isRowsDirty = true;
        this._filter.toDirty();
        this.update(true);
    };
    DTableDataTree.prototype.each = function (iteratee, ifrom, ito) {
        var rows = this.rows;
        ifrom = (ifrom != null ? Math.max(0, ifrom) : 0);
        ito = (ito != null ? Math.min(rows.length, ito) : rows.length);
        for (var i = ifrom; i < ito; ++i) {
            var row = rows[i];
            if (iteratee(row, i) === false) {
                break;
            }
        }
    };
    Object.defineProperty(DTableDataTree.prototype, "selection", {
        get: function () {
            return this._selection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DTableDataTree.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DTableDataTree.prototype, "sorter", {
        get: function () {
            return this._sorter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DTableDataTree.prototype, "mapped", {
        get: function () {
            return this._mapped;
        },
        enumerable: true,
        configurable: true
    });
    return DTableDataTree;
}(utils.EventEmitter));
export { DTableDataTree };
//# sourceMappingURL=d-table-data-tree.js.map