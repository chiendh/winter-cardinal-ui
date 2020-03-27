/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var EShapeGroupTextSpacingEditor = /** @class */ (function () {
    function EShapeGroupTextSpacingEditor(parent) {
        this._parent = parent;
    }
    Object.defineProperty(EShapeGroupTextSpacingEditor.prototype, "horizontal", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                return children[children.length - 1].text.spacing.horizontal;
            }
            return 0;
        },
        set: function (horizontal) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].text.spacing.horizontal = horizontal;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupTextSpacingEditor.prototype, "vertical", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                return children[children.length - 1].text.spacing.vertical;
            }
            return 0;
        },
        set: function (vertical) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].text.spacing.vertical = vertical;
            }
        },
        enumerable: true,
        configurable: true
    });
    EShapeGroupTextSpacingEditor.prototype.copy = function (target) {
        var children = this._parent.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            children[i].text.spacing.copy(target);
        }
    };
    EShapeGroupTextSpacingEditor.prototype.set = function (horizontal, vertical) {
        var children = this._parent.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            children[i].text.spacing.set(horizontal, vertical);
        }
    };
    EShapeGroupTextSpacingEditor.prototype.toObject = function () {
        var children = this._parent.children;
        if (0 < children.length) {
            return children[children.length - 1].text.spacing.toObject();
        }
        return {
            horizontal: 0,
            vertical: 0
        };
    };
    EShapeGroupTextSpacingEditor.prototype.serialize = function (manager) {
        return -1;
    };
    EShapeGroupTextSpacingEditor.prototype.deserialize = function (target, manager) {
        // DO NOTHING
    };
    return EShapeGroupTextSpacingEditor;
}());
export { EShapeGroupTextSpacingEditor };
//# sourceMappingURL=e-shape-group-text-spacing-editor.js.map