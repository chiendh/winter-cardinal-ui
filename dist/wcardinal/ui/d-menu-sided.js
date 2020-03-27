/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DMenuContext } from "./d-menu-context";
import { DMenuSidedContent } from "./d-menu-sided-content";
import { DMenuSidedSelection } from "./d-menu-sided-selection";
import { DMenuSideds } from "./d-menu-sideds";
import { DPane } from "./d-pane";
var DMenuSided = /** @class */ (function (_super) {
    __extends(DMenuSided, _super);
    function DMenuSided() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DMenuSided.prototype.init = function (options) {
        _super.prototype.init.call(this, options);
        var context = new DMenuContext(this);
        this._context = context;
        context.add(this);
        var items = options && options.items;
        if (items != null) {
            var sticky = (options && options.sticky != null ? options.sticky : false);
            this.newItems(items, sticky);
        }
        var selection = options && options.selection;
        this._selection = (selection instanceof DMenuSidedSelection ?
            selection : this.newSelection(selection));
    };
    DMenuSided.prototype.newSelection = function (options) {
        return new DMenuSidedSelection(this._content, options);
    };
    DMenuSided.prototype.onChildrenDirty = function () {
        var selection = this._selection;
        if (selection != null) {
            selection.toDirty();
        }
        _super.prototype.onChildrenDirty.call(this);
    };
    DMenuSided.prototype.newItems = function (items, sticky) {
        DMenuSideds.newItems(this.content, items, sticky);
    };
    DMenuSided.prototype.newContent = function (options) {
        return new DMenuSidedContent(options);
    };
    Object.defineProperty(DMenuSided.prototype, "selection", {
        get: function () {
            return this._selection;
        },
        enumerable: true,
        configurable: true
    });
    DMenuSided.prototype.getContext = function () {
        return this._context;
    };
    DMenuSided.prototype.getCloseable = function () {
        return this;
    };
    DMenuSided.prototype.open = function () {
        // DO NOTHING
    };
    DMenuSided.prototype.close = function () {
        // DO NOTHING
    };
    DMenuSided.prototype.getType = function () {
        return "DMenuSided";
    };
    return DMenuSided;
}(DPane));
export { DMenuSided };
//# sourceMappingURL=d-menu-sided.js.map