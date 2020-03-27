/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DPane } from "./d-pane";
import { DTreeItem } from "./d-tree-item";
import { DTreeSelection } from "./d-tree-selection";
import { DThemes } from "./theme";
export var DTreeAddedItemPosition;
(function (DTreeAddedItemPosition) {
    DTreeAddedItemPosition[DTreeAddedItemPosition["BEFORE"] = 0] = "BEFORE";
    DTreeAddedItemPosition[DTreeAddedItemPosition["AFTER"] = 1] = "AFTER";
})(DTreeAddedItemPosition || (DTreeAddedItemPosition = {}));
var DTree = /** @class */ (function (_super) {
    __extends(DTree, _super);
    function DTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DTree.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        this._itemOptions = new WeakMap();
        this._selection = new DTreeSelection();
        this._itemOptionsShowable = [];
        this._itemIndexMappedStart = 0;
        this._itemIndexMappedEnd = 0;
        this._itemY = 0;
        var itemTheme = DThemes.getInstance().get("DTreeItem");
        this._itemHeight = Number(itemTheme.getHeight());
        this._value = options && options.value ? options.value : [];
        this.updateData(null, this._value, 0);
        this._content.on("move", function () {
            _this.update();
        });
        this._content.on("resize", function () {
            _this._content.removeChildren();
            _this.update();
        });
        this.update();
    };
    DTree.prototype.update = function () {
        var _this = this;
        var content = this._content;
        var items = content.children;
        // calculate content height
        content.height = this._itemOptionsShowable.length * this._itemHeight;
        var contentY = content.position.y;
        var height = this.height;
        var itemIndexMappedStart = (0 - contentY) / this._itemHeight - 2 < 0 ?
            0 :
            Math.floor((0 - contentY) / this._itemHeight) - 2;
        var itemIndexMappedEnd = (height - contentY) / this._itemHeight + 2 < this._itemOptionsShowable.length - 1 ?
            Math.floor((height - contentY) / this._itemHeight) + 2 :
            this._itemOptionsShowable.length;
        // get items options are shown in Dpane content frame
        var itemOptionsShown = this._itemOptionsShowable.slice(itemIndexMappedStart, itemIndexMappedEnd);
        if (items.length < itemOptionsShown.length) {
            var _loop_1 = function (i) {
                var itemOptions = itemOptionsShown[i];
                var treeItem = new DTreeItem(itemOptions);
                content.addChild(treeItem);
                // listen select item event
                treeItem.on("select", function (e) {
                    if (!_this.isDisabled()) {
                        _this.onSelect(treeItem.getRawData(), e);
                    }
                });
                // listen toggle item event
                treeItem.on("toggle", function () {
                    if (treeItem.isParent()) {
                        if (!_this.isDisabled()) {
                            _this.toggle(treeItem.getRawData());
                        }
                    }
                });
            };
            for (var i = items.length; i < itemOptionsShown.length; i++) {
                _loop_1(i);
            }
        }
        else if (items.length > itemOptionsShown.length) {
            for (var i = itemOptionsShown.length; i < items.length; i++) {
                items[i].hide();
            }
        }
        for (var i = 0; i < itemOptionsShown.length; i++) {
            items[i] = items[i].update(itemOptionsShown[i], this._selection.contains(itemOptionsShown[i].rawData));
            if (items[i].isHidden()) {
                items[i].show();
            }
        }
    };
    DTree.prototype.reload = function (expandAll) {
        // reset data of tree widget
        this._itemOptionsShowable.length = 0;
        this._itemY = 0;
        // re-render tree
        this.updateData(null, this._value, 0, expandAll);
        this.update();
    };
    Object.defineProperty(DTree.prototype, "value", {
        /**
         * Getter method to access raw data.
         *
         * @returns raw data.
         */
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Toggle an tree parent item,
     * Expand an collapsed tree item or collapse an expanded item.
     *
     * @param item Reference data of item want to toggle in “value” array.
     */
    DTree.prototype.toggle = function (item) {
        var itemOptions = this._itemOptions.get(item);
        if (itemOptions) {
            itemOptions.expanded = !itemOptions.expanded;
            this.reload();
        }
    };
    /**
     * Expand a collapsed tree item.
     *
     * @param item Reference data of item want to expand in “value” array.
     */
    DTree.prototype.expand = function (item) {
        var itemOptions = this._itemOptions.get(item);
        if (itemOptions) {
            itemOptions.expanded = true;
            this.reload();
        }
    };
    /**
     * Collapse an expanded tree item.
     *
     * @param item Reference data of item want to collapse in “value” array.
     */
    DTree.prototype.collapse = function (item) {
        var itemOptions = this._itemOptions.get(item);
        if (itemOptions) {
            itemOptions.expanded = false;
            this.reload();
        }
    };
    /**
     * Expand all tree item.
     */
    DTree.prototype.expandAll = function () {
        this.reload(true);
    };
    /**
     * Collapse all tree item.
     */
    DTree.prototype.collapseAll = function () {
        this.reload(false);
    };
    /**
     * Check if an item is collapsed.
     *
     * @param item Reference data of item want to check in “value” array.
     *
     * @returns collapse status of the item.
     */
    DTree.prototype.isCollapsed = function (item) {
        var itemOptions = this._itemOptions.get(item);
        return itemOptions && !itemOptions.expanded;
    };
    /**
     * Check if an item is expanded.
     *
     * @param item Reference data of item want to check in “value” array.
     *
     * @returns expand status of the item.
     */
    DTree.prototype.isExpanded = function (item) {
        var itemOptions = this._itemOptions.get(item);
        return itemOptions && itemOptions.expanded;
    };
    /**
     * Clear all tree item.
     */
    DTree.prototype.clear = function () {
        this._value = [];
        this.reload();
    };
    /**
     * Remove a tree item
     *
     * @param item Reference data of item want to remove in “value” array.
     */
    DTree.prototype.remove = function (item) {
        this._removeItem = item;
        this.reload();
    };
    /**
     * Add a tree item
     *
     * @param item data of new item want to add to tree.
     * @param parent Reference data of parent item will contain the adding item.
     * If the parent is undefined, the item will be added at the top level.
     * If the parent is not undefined, the item will be inserted as a child of the given parent item.
     */
    DTree.prototype.add = function (item, parent) {
        if (parent) {
            if (parent.children) {
                parent.children.push(item);
            }
            else {
                parent.children = [item];
            }
        }
        else {
            this._value.push(item);
        }
        this.reload();
    };
    /**
     * Add the given item will be inserted before the given sibling item.
     *
     * @param item data of new item want to add to tree.
     * @param sibling Reference data of parent item will be using like anchor to add new item.
     */
    DTree.prototype.addBefore = function (item, sibling) {
        this._addItemOptions = {
            item: item,
            sibling: sibling,
            positon: DTreeAddedItemPosition.BEFORE
        };
        this.reload();
    };
    /**
     * Add the given item will be inserted after the given sibling item.
     *
     * @param item data of new item want to add to tree.
     * @param sibling Reference data of parent item will be using like anchor to add new item.
     */
    DTree.prototype.addAfter = function (item, sibling) {
        this._addItemOptions = {
            item: item,
            sibling: sibling,
            positon: DTreeAddedItemPosition.AFTER
        };
        this.reload();
    };
    /**
     * Iterate over all the items.
     *
     * @param iteratee  boolean function. If the iteratee explicitly returns false, an iteration stops.
     * @param item data of browsed item.
     */
    DTree.prototype.each = function (iteratee) {
        this.inOrder(this._value, iteratee);
    };
    /**
     * The recursive function performs item browsing in the tree.
     */
    DTree.prototype.inOrder = function (items, iteratee) {
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            if (!iteratee(item)) {
                return;
            }
            else if (item.children) {
                this.inOrder(item.children, iteratee);
            }
        }
    };
    Object.defineProperty(DTree.prototype, "selection", {
        /**
         * Get selection object.
         * @returns selection.
         */
        get: function () {
            return this._selection;
        },
        enumerable: true,
        configurable: true
    });
    DTree.prototype.updateData = function (parentItemOptions, items, level, expandAll) {
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            // handle remove item
            if (item === this._removeItem) {
                // remove item from this._value.
                items.splice(i, 1);
                this._removeItem = null;
                i--;
                if (parentItemOptions && items.length === 0) {
                    parentItemOptions.isParent = false;
                }
                continue;
            }
            // handle add item
            if (this._addItemOptions && item === this._addItemOptions.sibling) {
                if (this._addItemOptions.positon === DTreeAddedItemPosition.AFTER) {
                    items.splice(i + 1, 0, this._addItemOptions.item);
                    this._addItemOptions = null;
                }
                else if (this._addItemOptions.positon === DTreeAddedItemPosition.BEFORE) {
                    items.splice(i, 0, this._addItemOptions.item);
                    i--;
                    this._addItemOptions = null;
                    continue;
                }
            }
            var isParent = item.children && (item.children.length > 0);
            var text = item.text ? item.text : "";
            var itemImage = item.image ? item.image : null;
            var isItemExisted = false;
            var itemOptions = this._itemOptions.get(item);
            var expanded = false; // set default expand status of item is false
            if (expandAll != null) {
                expanded = expandAll;
            }
            else if (itemOptions) {
                expanded = itemOptions.expanded;
            }
            if (itemOptions != null) {
                itemOptions.rawData = item;
                itemOptions.text = text;
                itemOptions.y = this._itemY;
                itemOptions.isParent = isParent;
                itemOptions.expanded = expanded;
                itemOptions.image = itemImage;
                isItemExisted = true;
            }
            else {
                itemOptions = {
                    rawData: item,
                    text: text,
                    level: level,
                    y: this._itemY,
                    isParent: isParent,
                    expanded: expanded,
                    image: itemImage
                };
            }
            /* displayed items need to satisfy 1 of the 2 conditions:
            1. is root item
            2. the parent item is show and expand
            */
            if (parentItemOptions == null ||
                (parentItemOptions &&
                    parentItemOptions.expanded &&
                    parentItemOptions.showable)) {
                itemOptions.showable = true;
                this._itemOptionsShowable.push(itemOptions);
                this._itemY += this._itemHeight;
            }
            else {
                itemOptions.showable = false;
            }
            if (!isItemExisted) {
                this._itemOptions.set(item, itemOptions);
            }
            if (item && item.children) {
                this.updateData(itemOptions, item.children, level + 1, expandAll);
            }
        }
    };
    DTree.prototype.onSelect = function (item, e) {
        var _this = this;
        var _a, _b;
        // multi select by "ctr" key + click
        if (e.data.originalEvent.ctrlKey) {
            this._selection.toggle(item);
            // multi select by "shift" key + click
        }
        else if (e.data.originalEvent.shiftKey) {
            var lastSelection = this._selection.get(this._selection.size() - 1);
            if (lastSelection) {
                this._selection.clear();
                var selectionY = Number((_a = this._itemOptions.get(item)) === null || _a === void 0 ? void 0 : _a.y);
                var lastSelectionY = Number((_b = this._itemOptions.get(lastSelection)) === null || _b === void 0 ? void 0 : _b.y);
                var maxY_1 = selectionY < lastSelectionY ?
                    lastSelectionY - this._itemHeight :
                    selectionY;
                var minY_1 = selectionY < lastSelectionY ?
                    selectionY :
                    lastSelectionY + this._itemHeight;
                this._itemOptionsShowable.every(function (itemOptions) {
                    if (itemOptions.y >= minY_1 && itemOptions.y <= maxY_1 && itemOptions.showable) {
                        _this._selection.add(itemOptions.rawData);
                    }
                    return itemOptions.y < maxY_1;
                });
                this._selection.add(lastSelection);
            }
            // single select
        }
        else {
            this._selection.clear();
            this._selection.add(item);
        }
        this.updateActiveState();
    };
    /* update active state of all shown item.
    *
    **/
    DTree.prototype.updateActiveState = function () {
        var _this = this;
        var items = this._content.children;
        items.forEach(function (item) {
            item.updateActiveState(_this._selection.contains(item.getRawData()));
        });
    };
    DTree.prototype.getType = function () {
        return "DTree";
    };
    return DTree;
}(DPane));
export { DTree };
//# sourceMappingURL=d-tree.js.map