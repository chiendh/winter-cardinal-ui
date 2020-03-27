/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var EShapeGroupTextPaddingEditor = /** @class */ (function () {
    function EShapeGroupTextPaddingEditor(parent) {
        this._parent = parent;
    }
    Object.defineProperty(EShapeGroupTextPaddingEditor.prototype, "horizontal", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                return children[children.length - 1].text.padding.horizontal;
            }
            return 0;
        },
        set: function (horizontal) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].text.padding.horizontal = horizontal;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupTextPaddingEditor.prototype, "vertical", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                return children[children.length - 1].text.padding.vertical;
            }
            return 0;
        },
        set: function (vertical) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].text.padding.vertical = vertical;
            }
        },
        enumerable: true,
        configurable: true
    });
    EShapeGroupTextPaddingEditor.prototype.copy = function (target) {
        var children = this._parent.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            children[i].text.padding.copy(target);
        }
    };
    EShapeGroupTextPaddingEditor.prototype.set = function (horizontal, vertical) {
        var children = this._parent.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            children[i].text.padding.set(horizontal, vertical);
        }
    };
    EShapeGroupTextPaddingEditor.prototype.toObject = function () {
        var children = this._parent.children;
        if (0 < children.length) {
            return children[children.length - 1].text.padding.toObject();
        }
        return {
            horizontal: 0,
            vertical: 0
        };
    };
    EShapeGroupTextPaddingEditor.prototype.serialize = function (manager) {
        return -1;
    };
    EShapeGroupTextPaddingEditor.prototype.deserialize = function (target, manager) {
        // DO NOTHING
    };
    return EShapeGroupTextPaddingEditor;
}());
export { EShapeGroupTextPaddingEditor };
//# sourceMappingURL=e-shape-group-text-padding-editor.js.map