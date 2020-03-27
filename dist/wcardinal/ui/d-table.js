/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "./d-align-horizontal";
import { DDialogSelect } from "./d-dialog-select";
import { DMenu } from "./d-menu";
import { DPane } from "./d-pane";
import { DTableBody } from "./d-table-body";
import { DTableCategory } from "./d-table-category";
import { DTableColumnType } from "./d-table-column";
import { DTableDataSelectionType } from "./d-table-data-selection";
import { DTableHeader } from "./d-table-header";
import { isArray } from "./util/is-array";
import { isString } from "./util/is-string";
import { toString } from "./util/to-string";
import { UtilPointerEvent } from "./util/util-pointer-event";
var defaultGetter = function (row, columnIndex) {
    return row[columnIndex];
};
var defaultSetter = function (row, columnIndex, cell) {
    row[columnIndex] = cell;
};
var defaultGetterEmpty = function () { return ""; };
var defaultSetterEmpty = function () {
    // DO NOTHING
};
var toPathGetter = function (path, def) {
    if (path.length <= 1) {
        var key_1 = path[0];
        if (def === undefined) {
            return function (row) {
                return row[key_1];
            };
        }
        else {
            return function (row) {
                return key_1 in row ? row[key_1] : def;
            };
        }
    }
    else {
        if (def === undefined) {
            return function (row) {
                for (var i = 0, imax = path.length - 1; i < imax; ++i) {
                    row = row[path[i]];
                }
                return row[path[path.length - 1]];
            };
        }
        else {
            return function (row) {
                for (var i = 0, imax = path.length - 1; i < imax; ++i) {
                    row = row[path[i]];
                }
                var key = path[path.length - 1];
                return key in row ? row[key] : def;
            };
        }
    }
};
var toPathSetter = function (path) {
    if (path.length <= 1) {
        var key_2 = path[0];
        return function (row, columnIndex, cell) {
            row[key_2] = cell;
        };
    }
    else {
        return function (row, columnIndex, cell) {
            for (var i = 0, imax = path.length - 1; i < imax; ++i) {
                row = row[path[i]] || {};
            }
            row[path[path.length - 1]] = cell;
        };
    }
};
var defaultEditingUnformatter = function (formatted) {
    return formatted;
};
var toColumnAlign = function (options, type) {
    if (options.align != null) {
        if (isString(options.align)) {
            return DAlignHorizontal[options.align];
        }
        else {
            return options.align;
        }
    }
    switch (type) {
        case DTableColumnType.TEXT:
            return DAlignHorizontal.LEFT;
        case DTableColumnType.REAL:
        case DTableColumnType.INTEGER:
            return DAlignHorizontal.RIGHT;
        case DTableColumnType.BUTTON:
        case DTableColumnType.INDEX:
        case DTableColumnType.SELECT:
        case DTableColumnType.ACTION:
        case DTableColumnType.LINK:
            return DAlignHorizontal.CENTER;
        default:
            return DAlignHorizontal.LEFT;
    }
};
var toColumnDataChecker = function (path) {
    if (path != null) {
        if (path.length <= 1) {
            var key_3 = path[0];
            return function (row) {
                return key_3 in row;
            };
        }
        else {
            return function (row) {
                for (var i = 0, imax = path.length; i < imax; ++i) {
                    var part = path[i];
                    if (part in row) {
                        row = row[part];
                    }
                    else {
                        return false;
                    }
                }
                return true;
            };
        }
    }
    return function (row, columnIndex) {
        return columnIndex < row.length;
    };
};
var toColumnEditingEnable = function (enable, path) {
    if (isString(enable)) {
        return toColumnDataChecker(path);
    }
    else if (enable != null) {
        return enable;
    }
    else {
        return false;
    }
};
var toColumnEditing = function (options, path) {
    var editing = options.editing;
    if (editing) {
        return {
            enable: toColumnEditingEnable(editing.enable != null ? editing.enable : options.editable, path),
            formatter: editing.formatter || toString,
            unformatter: editing.unformatter || defaultEditingUnformatter,
            validator: editing.validator
        };
    }
    return {
        enable: toColumnEditingEnable(options.editable, path),
        formatter: toString,
        unformatter: defaultEditingUnformatter
    };
};
var toComparator = function (getter, index) {
    return function (rowA, rowB) {
        var valueA = getter(rowA, index);
        var valueB = getter(rowB, index);
        return (valueA < valueB ? -1 : (valueB < valueA ? +1 : 0));
    };
};
var toColumnSorting = function (getter, index, options) {
    var sorting = options.sorting;
    if (sorting) {
        var enable = sorting.enable === true || options.sortable === true;
        if (enable) {
            return {
                enable: enable,
                comparator: sorting.comparator || toComparator(getter, index)
            };
        }
        else {
            return {
                enable: enable
            };
        }
    }
    if (options.sortable === true) {
        return {
            enable: true,
            comparator: toComparator(getter, index)
        };
    }
    else {
        return {
            enable: false
        };
    }
};
var toColumnMenu = function (options) {
    if (options == null) {
        return undefined;
    }
    else if (options instanceof DMenu) {
        return options;
    }
    else {
        return new DMenu(options);
    }
};
var toColumnDialog = function (options) {
    if (options == null) {
        return undefined;
    }
    else if ("open" in options) {
        return options;
    }
    else {
        return new DDialogSelect(options);
    }
};
var defaultSelectingGetter = function (dialog) {
    return dialog.value;
};
var defaultSelectingSetter = function () {
    // DO NOTHING
};
var toColumnSelecting = function (options) {
    if (options) {
        return {
            getter: options.getter || defaultSelectingGetter,
            setter: options.setter || defaultSelectingSetter,
            menu: toColumnMenu(options.menu),
            multiple: toColumnMenu(options.multiple),
            dialog: toColumnDialog(options.dialog),
            promise: options.promise
        };
    }
    return {
        getter: defaultSelectingGetter,
        setter: defaultSelectingSetter
    };
};
var toColumnGetter = function (options, type, parts) {
    var getter = options.getter;
    if (getter) {
        return getter;
    }
    switch (type) {
        case DTableColumnType.ACTION:
        case DTableColumnType.LINK:
            return defaultGetterEmpty;
        default:
            if (parts == null) {
                return defaultGetter;
            }
            else {
                return toPathGetter(parts, options.default);
            }
    }
};
var toColumnSetter = function (options, type, path) {
    var setter = options.setter;
    if (setter) {
        return setter;
    }
    switch (type) {
        case DTableColumnType.BUTTON:
        case DTableColumnType.ACTION:
        case DTableColumnType.LINK:
            return defaultSetterEmpty;
        default:
            if (path == null) {
                return defaultSetter;
            }
            else {
                return toPathSetter(path);
            }
    }
};
var toColumnPath = function (options) {
    return options.path != null ? options.path.split(".") : null;
};
var toColumnRenderable = function (options, path) {
    var renderable = options.renderable;
    if (isString(renderable)) {
        return toColumnDataChecker(path);
    }
    else if (renderable != null) {
        return renderable;
    }
    return true;
};
var toColumn = function (index, options) {
    var weight = (options.weight != null ? options.weight :
        (options.width != null ? undefined : +1));
    var width = (weight != null ? undefined :
        (options.width != null ? options.width : 100));
    var type = (options.type != null ?
        (isString(options.type) ? DTableColumnType[options.type] : options.type) :
        DTableColumnType.TEXT);
    var align = toColumnAlign(options, type);
    var label = options.label || "";
    var path = toColumnPath(options);
    var getter = toColumnGetter(options, type, path);
    var setter = toColumnSetter(options, type, path);
    return {
        weight: weight,
        width: width,
        type: type,
        label: label,
        getter: getter,
        setter: setter,
        formatter: options.formatter,
        renderable: toColumnRenderable(options, path),
        align: align,
        editing: toColumnEditing(options, path),
        sorting: toColumnSorting(getter, index, options),
        header: options.header,
        body: options.body,
        selecting: toColumnSelecting(options.selecting),
        category: options.category,
        frozen: options.frozen,
        offset: 0.0,
        link: options.link
    };
};
var toColumns = function (options) {
    var result = [];
    for (var i = 0, imax = options.length; i < imax; ++i) {
        result.push(toColumn(i, options[i]));
    }
    return result;
};
var toFrozen = function (columns) {
    for (var i = columns.length - 1; 0 <= i; --i) {
        if (columns[i].frozen === true) {
            return i + 1;
        }
    }
    return 0;
};
var DTable = /** @class */ (function (_super) {
    __extends(DTable, _super);
    function DTable(options) {
        return _super.call(this, options) || this;
    }
    DTable.prototype.init = function (options) {
        // Column
        var columns = toColumns(options.columns);
        // Frozen
        var frozen = toFrozen(columns);
        // Categories
        var categories = this.newCategories(options, columns, frozen);
        this._categories = categories;
        // Header
        var headerOffset = 0;
        for (var i = 0, imax = categories.length; i < imax; ++i) {
            headerOffset += categories[i].height;
        }
        var header = this.newHeader(options, columns, frozen, headerOffset);
        this._header = header;
        // Body
        var bodyOffset = headerOffset + ((header && header.height) || 0);
        var body = this.newBody(options, columns, frozen, bodyOffset);
        this._body = body;
        // Super
        _super.prototype.init.call(this, options);
        // Content
        var content = this._content;
        content.setWidth(this.toContentWidth(options));
        content.addChild(body);
        if (header) {
            content.addChild(header);
        }
        for (var i = categories.length - 1; 0 <= i; --i) {
            content.addChild(categories[i]);
        }
        content.on("move", function () {
            body.update();
        });
        content.on("resize", function () {
            body.update();
        });
        if (body.data.selection.type !== DTableDataSelectionType.NONE) {
            UtilPointerEvent.onClick(this, function (e) {
                body.onRowClicked(e);
            });
        }
        body.update();
    };
    DTable.prototype.onResize = function (newWidth, newHeight, oldWidth, oldHeight) {
        var body = this._body;
        body.lock();
        _super.prototype.onResize.call(this, newWidth, newHeight, oldWidth, oldHeight);
        body.update();
        body.unlock(true);
    };
    DTable.prototype.getCategoryCount = function (columns) {
        var result = 0;
        for (var i = 0, imax = columns.length; i < imax; ++i) {
            var category = columns[i].category;
            if (category != null) {
                var count = isString(category) ? 1 : category.length;
                result = Math.max(result, count);
            }
        }
        return result;
    };
    DTable.prototype.toCategoryLabel = function (index, category) {
        if (category) {
            if (isString(category)) {
                if (index === 0) {
                    return category;
                }
            }
            else {
                if (index < category.length) {
                    return category[index];
                }
            }
        }
        return undefined;
    };
    DTable.prototype.isSameCategory = function (index, a, b) {
        if (a != null) {
            if (b != null) {
                if (isString(a)) {
                    if (isString(b)) {
                        if (0 < index) {
                            return true;
                        }
                        else {
                            return a === b;
                        }
                    }
                    else {
                        if (0 < index) {
                            return b.length <= index;
                        }
                        else {
                            return b.length === 1 && a === b[0];
                        }
                    }
                }
                else {
                    if (isString(b)) {
                        if (0 < index) {
                            return a.length <= index;
                        }
                        else {
                            return a.length === 1 && a[0] === b;
                        }
                    }
                    else {
                        if (a.length <= index && b.length <= index) {
                            return true;
                        }
                        else if (b.length === a.length) {
                            for (var i = index, imax = a.length; i < imax; ++i) {
                                if (a[i] !== b[i]) {
                                    return false;
                                }
                            }
                            return true;
                        }
                        return false;
                    }
                }
            }
            else {
                if (isString(a)) {
                    if (0 < index) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    if (a.length <= index) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }
        }
        else {
            if (b != null) {
                if (isString(b)) {
                    if (0 < index) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    if (b.length <= index) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }
            else {
                return true;
            }
        }
    };
    DTable.prototype.toCategoryColumns = function (index, columns, frozen) {
        var result = [];
        var tcolumn = null;
        var ccolumn = null;
        for (var i = 0, imax = columns.length; i < imax; ++i) {
            var column = columns[i];
            if (i !== frozen && ccolumn && tcolumn && this.isSameCategory(index, tcolumn.category, column.category)) {
                if (ccolumn.weight != null && column.weight != null) {
                    ccolumn.weight += column.weight;
                }
                else if (ccolumn.width != null && column.width != null) {
                    ccolumn.width += column.width;
                }
                else {
                    tcolumn = column;
                    ccolumn = {
                        label: this.toCategoryLabel(index, column.category),
                        weight: column.weight,
                        width: column.width,
                        offset: 0.0
                    };
                    result.push(ccolumn);
                }
            }
            else {
                tcolumn = column;
                ccolumn = {
                    label: this.toCategoryLabel(index, column.category),
                    weight: column.weight,
                    width: column.width,
                    offset: 0.0
                };
                result.push(ccolumn);
            }
        }
        return result;
    };
    DTable.prototype.toCategoryOptions = function (index, options, columns, frozen, offset) {
        if (options) {
            if (options.columns === undefined) {
                options.columns = this.toCategoryColumns(index, columns, frozen);
            }
            if (options.frozen == null) {
                options.frozen = frozen;
            }
            if (options.offset == null) {
                options.offset = offset;
            }
            return options;
        }
        return {
            columns: this.toCategoryColumns(index, columns, frozen),
            frozen: frozen,
            offset: offset
        };
    };
    DTable.prototype.newCategories = function (options, columns, frozen) {
        var count = this.getCategoryCount(columns);
        var result = [];
        var offset = 0;
        for (var i = count - 1; 0 <= i; --i) {
            var category = new DTableCategory(this.toCategoryOptions(i, options.category, columns, frozen, offset));
            result.push(category);
            offset += category.height;
        }
        return result;
    };
    DTable.prototype.onDblClick = function (e, interactionManager) {
        var result = this._body.onDblClick(e, interactionManager);
        return _super.prototype.onDblClick.call(this, e, interactionManager) || result;
    };
    DTable.prototype.getScrollBarOffsetVerticalStart = function (size) {
        return size * 0.5 + this._body.position.y;
    };
    DTable.prototype.toContentWidth = function (options) {
        var columnWidthTotal = 0;
        var columns = options.columns;
        if (columns) {
            for (var i = 0, imax = columns.length; i < imax; ++i) {
                var column = columns[i];
                var columnWidth = column.width;
                if (columnWidth != null) {
                    columnWidthTotal += columnWidth;
                }
            }
        }
        if (0 < columnWidthTotal) {
            return function (p) {
                return Math.max(p, columnWidthTotal);
            };
        }
        return "100%";
    };
    DTable.prototype.hasHeader = function (options) {
        var columns = options.columns;
        for (var i = 0, imax = columns.length; i < imax; ++i) {
            if (columns[i].label != null) {
                return true;
            }
        }
        return false;
    };
    DTable.prototype.newHeader = function (options, columns, frozen, offset) {
        if (this.hasHeader(options)) {
            return new DTableHeader(this.toHeaderOptions(options.header, columns, frozen, offset));
        }
        return null;
    };
    DTable.prototype.toHeaderOptions = function (options, columns, frozen, offset) {
        if (options) {
            if (options.columns === undefined) {
                options.columns = columns;
            }
            if (options.frozen == null) {
                options.frozen = frozen;
            }
            if (options.offset === undefined) {
                options.offset = offset;
            }
            if (options.table === undefined) {
                options.table = this;
            }
            return options;
        }
        return {
            columns: columns,
            frozen: frozen,
            offset: offset,
            table: this
        };
    };
    DTable.prototype.newBody = function (options, columns, frozen, offset) {
        return new DTableBody(this.toBodyOptions(options.body, columns, frozen, offset, options.data));
    };
    DTable.prototype.toBodyOptions = function (options, columns, frozen, offset, data) {
        if (options != null) {
            if (options.columns === undefined) {
                options.columns = columns;
            }
            if (options.frozen == null) {
                options.frozen = frozen;
            }
            if (options.offset === undefined) {
                options.offset = offset;
            }
            if (options.data === undefined && data !== undefined) {
                if (isArray(data)) {
                    options.data = {
                        rows: data
                    };
                }
                else {
                    options.data = data;
                }
            }
            if (options.height === undefined && options.weight === undefined) {
                options.weight = 1;
            }
            return options;
        }
        if (isArray(data)) {
            return {
                columns: columns,
                frozen: frozen,
                offset: offset,
                data: {
                    rows: data
                },
                weight: 1
            };
        }
        else {
            return {
                columns: columns,
                frozen: frozen,
                offset: offset,
                data: data,
                weight: 1
            };
        }
    };
    DTable.prototype.getType = function () {
        return "DTable";
    };
    Object.defineProperty(DTable.prototype, "categories", {
        get: function () {
            return this._categories;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DTable.prototype, "header", {
        get: function () {
            return this._header;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DTable.prototype, "body", {
        get: function () {
            return this._body;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DTable.prototype, "data", {
        get: function () {
            return this._body.data;
        },
        enumerable: true,
        configurable: true
    });
    return DTable;
}(DPane));
export { DTable };
//# sourceMappingURL=d-table.js.map