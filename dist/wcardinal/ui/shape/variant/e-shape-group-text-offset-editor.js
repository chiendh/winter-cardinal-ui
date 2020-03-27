/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var EShapeGroupTextOffsetEditor = /** @class */ (function () {
    function EShapeGroupTextOffsetEditor(parent) {
        this._parent = parent;
    }
    Object.defineProperty(EShapeGroupTextOffsetEditor.prototype, "horizontal", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                return children[children.length - 1].text.offset.horizontal;
            }
            return 0;
        },
        set: function (horizontal) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].text.offset.horizontal = horizontal;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupTextOffsetEditor.prototype, "vertical", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                return children[children.length - 1].text.offset.vertical;
            }
            return 0;
        },
        set: function (vertical) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].text.offset.vertical = vertical;
            }
        },
        enumerable: true,
        configurable: true
    });
    EShapeGroupTextOffsetEditor.prototype.copy = function (target) {
        var children = this._parent.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            children[i].text.offset.copy(target);
        }
    };
    EShapeGroupTextOffsetEditor.prototype.set = function (horizontal, vertical) {
        var children = this._parent.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            children[i].text.offset.set(horizontal, vertical);
        }
    };
    EShapeGroupTextOffsetEditor.prototype.toObject = function () {
        var children = this._parent.children;
        if (0 < children.length) {
            return children[children.length - 1].text.offset.toObject();
        }
        return {
            horizontal: 0,
            vertical: 0
        };
    };
    EShapeGroupTextOffsetEditor.prototype.serialize = function (manager) {
        return -1;
    };
    EShapeGroupTextOffsetEditor.prototype.deserialize = function (target, manager) {
        // DO NOTHING
    };
    return EShapeGroupTextOffsetEditor;
}());
export { EShapeGroupTextOffsetEditor };
//# sourceMappingURL=e-shape-group-text-offset-editor.js.map