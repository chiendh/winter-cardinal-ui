/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBase } from "./d-base";
import { DListSelection } from "./d-list-selection";
import { DPane } from "./d-pane";
import { UtilPointerEvent } from "./util/util-pointer-event";
var DList = /** @class */ (function (_super) {
    __extends(DList, _super);
    function DList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DList.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        var selection = options && options.selection;
        this._selection = (selection instanceof DListSelection ?
            selection : this.newSelection(selection));
        UtilPointerEvent.onClick(this, function (e) {
            var child = _this.findItem(e.target);
            if (child instanceof DBase && child.isActionable()) {
                _this.selection.add(child);
            }
        });
    };
    DList.prototype.newSelection = function (options) {
        return new DListSelection(this._content, options);
    };
    DList.prototype.onChildrenDirty = function () {
        var selection = this._selection;
        if (selection != null) {
            selection.toDirty();
        }
        _super.prototype.onChildrenDirty.call(this);
    };
    Object.defineProperty(DList.prototype, "selection", {
        get: function () {
            return this._selection;
        },
        enumerable: true,
        configurable: true
    });
    DList.prototype.findItem = function (target) {
        var content = this.content;
        var current = target;
        while (current != null) {
            if (current.parent === content) {
                return current;
            }
            current = current.parent;
        }
        return null;
    };
    DList.prototype.onRefit = function () {
        _super.prototype.onRefit.call(this);
        this.updateChildPosition();
        this.updateChildVisibility();
    };
    DList.prototype.updateChildPosition = function () {
        var content = this.content;
        var items = content.children;
        var y = 0;
        for (var i = 0, imax = items.length; i < imax; ++i) {
            var item = items[i];
            if (item instanceof DBase) {
                item.y = y;
                y += item.height;
            }
        }
        var scrollLimit = Math.min(0, -y + this.height);
        if (content.y < scrollLimit) {
            content.y = scrollLimit;
        }
        content.height = y;
    };
    DList.prototype.updateChildVisibility = function () {
        var content = this.content;
        var items = content.children;
        var from = -content.y;
        var to = from + this.height;
        for (var i = 0, imax = items.length; i < imax; ++i) {
            var item = items[i];
            if (item instanceof DBase) {
                var itemY = item.y;
                item.visible = (from <= itemY + item.height && itemY <= to);
            }
        }
    };
    DList.prototype.onContentChanged = function () {
        _super.prototype.onContentChanged.call(this);
        this.updateChildVisibility();
    };
    DList.prototype.getType = function () {
        return "DList";
    };
    return DList;
}(DPane));
export { DList };
//# sourceMappingURL=d-list.js.map