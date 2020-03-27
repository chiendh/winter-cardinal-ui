/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var EShapeGroupTextOutlineEditor = /** @class */ (function () {
    function EShapeGroupTextOutlineEditor(parent) {
        this._parent = parent;
    }
    Object.defineProperty(EShapeGroupTextOutlineEditor.prototype, "enable", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                return children[children.length - 1].text.outline.enable;
            }
            return false;
        },
        set: function (enable) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].text.outline.enable = enable;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupTextOutlineEditor.prototype, "color", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                return children[children.length - 1].text.outline.color;
            }
            return 0xffffff;
        },
        set: function (color) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].text.outline.color = color;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupTextOutlineEditor.prototype, "alpha", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                return children[children.length - 1].text.outline.alpha;
            }
            return 1.0;
        },
        set: function (alpha) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].text.outline.alpha = alpha;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupTextOutlineEditor.prototype, "width", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                return children[children.length - 1].text.outline.width;
            }
            return 1.0;
        },
        set: function (width) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].text.outline.width = width;
            }
        },
        enumerable: true,
        configurable: true
    });
    EShapeGroupTextOutlineEditor.prototype.copy = function (target) {
        var children = this._parent.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            children[i].text.outline.copy(target);
        }
    };
    EShapeGroupTextOutlineEditor.prototype.set = function (enable, color, alpha, width) {
        var children = this._parent.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            children[i].text.outline.set(enable, color, alpha, width);
        }
    };
    EShapeGroupTextOutlineEditor.prototype.clone = function () {
        return new EShapeGroupTextOutlineEditor(this._parent);
    };
    EShapeGroupTextOutlineEditor.prototype.toObject = function () {
        var children = this._parent.children;
        if (0 < children.length) {
            return children[children.length - 1].text.outline.toObject();
        }
        return {
            enable: false,
            color: 0xffffff,
            alpha: 1.0,
            width: 1.0
        };
    };
    EShapeGroupTextOutlineEditor.prototype.serialize = function (manager) {
        return -1;
    };
    EShapeGroupTextOutlineEditor.prototype.deserialize = function (target, manager) {
        //
    };
    return EShapeGroupTextOutlineEditor;
}());
export { EShapeGroupTextOutlineEditor };
//# sourceMappingURL=e-shape-group-text-outline-editor.js.map