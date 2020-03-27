/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseState } from "./d-base-state";
import { DLink } from "./d-link";
import { DLinkTarget } from "./d-link-target";
import { DTableBodyCellButton } from "./d-table-body-cell-button";
import { DTableCellState } from "./d-table-cell-state";
import { isString } from "./util/is-string";
var DTableBodyCellLink = /** @class */ (function (_super) {
    __extends(DTableBodyCellLink, _super);
    function DTableBodyCellLink(options) {
        return _super.call(this, options) || this;
    }
    DTableBodyCellLink.prototype.toLinkOptions = function (options) {
        var link = options.link;
        if (link) {
            return {
                url: this.toUrl(link.url),
                target: link.target,
                checker: this.toChecker(link.checker),
                menu: link.menu
            };
        }
        return undefined;
    };
    DTableBodyCellLink.prototype.toUrl = function (url) {
        var _this = this;
        if (isString(url) || url == null) {
            return url;
        }
        else {
            return function () {
                var row = _this._row;
                if (row !== undefined) {
                    return url(row, _this._rowIndex, _this._columnIndex, _this);
                }
                return null;
            };
        }
    };
    DTableBodyCellLink.prototype.toChecker = function (checker) {
        var _this = this;
        if (checker != null) {
            return function () {
                var row = _this._row;
                if (row !== undefined) {
                    return checker(row, _this._rowIndex, _this._columnIndex, _this);
                }
                return false;
            };
        }
        return undefined;
    };
    DTableBodyCellLink.prototype.init = function (options) {
        if (options.link && options.link.target === DLinkTarget.NEW_WINDOW) {
            options.state = (options.state || DBaseState.NONE) || DTableCellState.NEW_WINDOW;
        }
        this._link = new DLink(this.theme, this.toLinkOptions(options));
        _super.prototype.init.call(this, options);
    };
    DTableBodyCellLink.prototype.initOnClick = function (options) {
        var _this = this;
        this._link.apply(this, function (e) { return _this.onActive(e); });
    };
    Object.defineProperty(DTableBodyCellLink.prototype, "url", {
        get: function () {
            return this._link.url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DTableBodyCellLink.prototype, "menu", {
        get: function () {
            return this._link.menu;
        },
        enumerable: true,
        configurable: true
    });
    DTableBodyCellLink.prototype.getType = function () {
        return "DTableBodyCellLink";
    };
    DTableBodyCellLink.prototype.onActive = function (e) {
        this.emit("active", this);
        var row = this._row;
        if (row !== undefined) {
            var rowIndex = this._rowIndex;
            var columnIndex = this._columnIndex;
            this._columnData.setter(row, columnIndex, null);
            this.emit("cellchange", null, null, row, rowIndex, columnIndex, this);
            this.open(this._link.inNewWindow(e));
        }
    };
    DTableBodyCellLink.prototype.open = function (inNewWindow) {
        this._link.open(inNewWindow);
    };
    return DTableBodyCellLink;
}(DTableBodyCellButton));
export { DTableBodyCellLink };
//# sourceMappingURL=d-table-body-cell-link.js.map