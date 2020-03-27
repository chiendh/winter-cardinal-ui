/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeTextAlignHorizontal } from "../e-shape-text-align-horizontal";
import { EShapeTextAlignVertical } from "../e-shape-text-align-vertical";
var EShapeGroupTextAlignEditor = /** @class */ (function () {
    function EShapeGroupTextAlignEditor(parent) {
        this._parent = parent;
    }
    Object.defineProperty(EShapeGroupTextAlignEditor.prototype, "horizontal", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                return children[children.length - 1].text.align.horizontal;
            }
            return EShapeTextAlignHorizontal.CENTER;
        },
        set: function (horizontal) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].text.align.horizontal = horizontal;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupTextAlignEditor.prototype, "vertical", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                return children[children.length - 1].text.align.vertical;
            }
            return EShapeTextAlignVertical.MIDDLE;
        },
        set: function (vertical) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].text.align.vertical = vertical;
            }
        },
        enumerable: true,
        configurable: true
    });
    EShapeGroupTextAlignEditor.prototype.copy = function (target) {
        var children = this._parent.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            children[i].text.align.copy(target);
        }
    };
    EShapeGroupTextAlignEditor.prototype.set = function (horizontal, vertical) {
        var children = this._parent.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            children[i].text.align.set(horizontal, vertical);
        }
    };
    EShapeGroupTextAlignEditor.prototype.toObject = function () {
        var children = this._parent.children;
        if (0 < children.length) {
            return children[children.length - 1].text.align.toObject();
        }
        return {
            horizontal: EShapeTextAlignHorizontal.CENTER,
            vertical: EShapeTextAlignVertical.MIDDLE
        };
    };
    EShapeGroupTextAlignEditor.prototype.serialize = function (manager) {
        return -1;
    };
    EShapeGroupTextAlignEditor.prototype.deserialize = function (target, manager) {
        // DO NOTHING
    };
    return EShapeGroupTextAlignEditor;
}());
export { EShapeGroupTextAlignEditor };
//# sourceMappingURL=e-shape-group-text-align-editor.js.map