/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DDialogCommand } from "./d-dialog-command";
import { DDialogSelectList } from "./d-dialog-select-list";
import { DDialogSelectListItem } from "./d-dialog-select-list-item";
import { DDialogSelectSearh } from "./d-dialog-select-search";
import { DInputText } from "./d-input-text";
import { DListItem } from "./d-list-item";
import { DNote } from "./d-note";
import { UtilTransition } from "./util/util-transition";
// Helper
var toItemTextFormatter = function (theme, options) {
    if (options) {
        var item = options.item;
        if (item) {
            var text = item.text;
            if (text) {
                return text.formatter || theme.getItemTextFormatter();
            }
        }
    }
    return theme.getItemTextFormatter();
};
var toNoteOptions = function (options, parent, text) {
    if (options != null) {
        if (options.parent == null) {
            options.parent = parent;
        }
        if (options.text == null) {
            options.text = {
                value: text
            };
        }
        else if (options.text.value == null) {
            options.text.value = text;
        }
        return options;
    }
    return {
        parent: parent,
        text: {
            value: text
        }
    };
};
var toNoteNoItemsOptions = function (theme, options, parent) {
    var note = options && options.note;
    return toNoteOptions(note && note.noItems, parent, theme.getNoteNoItemsText());
};
var toNoteSearchingOptions = function (theme, options, parent) {
    var note = options && options.note;
    return toNoteOptions(note && note.noItems, parent, theme.getNoteSearchingText());
};
var toSearch = function (controller) {
    if (controller) {
        var search = controller.search;
        if ("create" in search) {
            return search;
        }
        else {
            return new DDialogSelectSearh(search);
        }
    }
    else {
        return new DDialogSelectSearh();
    }
};
var DDialogSelect = /** @class */ (function (_super) {
    __extends(DDialogSelect, _super);
    function DDialogSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DDialogSelect.prototype.onInit = function (layout, options) {
        var _this = this;
        this._value = null;
        var theme = this.theme;
        this._itemTextFormatter = toItemTextFormatter(theme, options);
        // Search box
        this._input = new DInputText({
            parent: layout,
            width: "padding"
        });
        // List
        var list = this._list = new DDialogSelectList({
            parent: layout,
            width: "padding",
            selection: {
                on: {
                    change: function (selection) {
                        var item = selection.first();
                        if (item != null) {
                            _this._value = item.value;
                            _this.onOk();
                        }
                    }
                }
            }
        });
        // Text No Items
        var noteNoItems = new DNote(toNoteNoItemsOptions(theme, options, list));
        this._noteNoItems = noteNoItems;
        // Text Searching
        var noteSearching = new DNote(toNoteSearchingOptions(theme, options, list));
        this._noteSearching = noteSearching;
        // Controller binding
        var search = toSearch(options && options.controller);
        this._search = search;
        this._input.on("input", function (value) {
            search.create([value]);
        });
        search.on("success", function (e, results) {
            _this.onSearched(results);
        });
        // Visibility
        var transition = new UtilTransition();
        search.on("change", function () {
            if (search.isDone()) {
                var result = search.getResult();
                if (result != null && 0 < result.length) {
                    transition.hide();
                }
                else {
                    transition.show(noteNoItems);
                }
            }
            else {
                transition.show(noteSearching);
            }
        });
    };
    DDialogSelect.prototype.onSearched = function (results) {
        var list = this._list;
        var itemTextFormatter = this._itemTextFormatter;
        var content = list.content;
        var children = content.children;
        // Update the existing children
        var childrenLength = children.length;
        var searchResultsLength = results.length;
        var minLength = Math.min(childrenLength, searchResultsLength);
        for (var i = 0, imax = minLength; i < imax; ++i) {
            var child = children[i];
            var result = results[i];
            if (child instanceof DListItem) {
                child.text = itemTextFormatter(result, this);
                child.value = result;
            }
            else {
                content.removeChildAt(i);
                child.destroy();
                var newChild = this.newItem(result, itemTextFormatter(result, this));
                content.addChildAt(newChild, i);
            }
        }
        // Insert new children
        for (var i = minLength, imax = searchResultsLength; i < imax; ++i) {
            var result = results[i];
            var newChild = this.newItem(result, itemTextFormatter(result, this));
            content.addChild(newChild);
        }
        // Remove unused children
        for (var i = childrenLength - 1; minLength <= i; --i) {
            children[i].destroy();
        }
    };
    DDialogSelect.prototype.newItem = function (result, label) {
        return new DDialogSelectListItem({
            value: result,
            text: {
                value: label
            }
        });
    };
    Object.defineProperty(DDialogSelect.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    DDialogSelect.prototype.getType = function () {
        return "DDialogSelect";
    };
    DDialogSelect.prototype.onOpen = function () {
        _super.prototype.onOpen.call(this);
        this._list.selection.clear();
        this._search.create([this._input.value]);
    };
    DDialogSelect.prototype.onOk = function () {
        this.emit("select", this._value, this);
        _super.prototype.onOk.call(this);
    };
    DDialogSelect.prototype.destroy = function () {
        this._input.destroy();
        this._noteNoItems.destroy();
        this._noteSearching.destroy();
        this._list.destroy();
        _super.prototype.destroy.call(this);
    };
    return DDialogSelect;
}(DDialogCommand));
export { DDialogSelect };
//# sourceMappingURL=d-dialog-select.js.map