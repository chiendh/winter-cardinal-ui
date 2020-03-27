/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var EShapeGroupFillEditor = /** @class */ (function () {
    function EShapeGroupFillEditor(parent) {
        this._parent = parent;
    }
    Object.defineProperty(EShapeGroupFillEditor.prototype, "enable", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                return children[children.length - 1].fill.enable;
            }
            return true;
        },
        set: function (enable) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].fill.enable = enable;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupFillEditor.prototype, "color", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                return children[children.length - 1].fill.color;
            }
            return 0xffffff;
        },
        set: function (color) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].fill.color = color;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupFillEditor.prototype, "alpha", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                return children[children.length - 1].fill.alpha;
            }
            return 1.0;
        },
        set: function (alpha) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].fill.alpha = alpha;
            }
        },
        enumerable: true,
        configurable: true
    });
    EShapeGroupFillEditor.prototype.copy = function (target) {
        var children = this._parent.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            children[i].fill.copy(target);
        }
    };
    EShapeGroupFillEditor.prototype.set = function (enable, color, alpha) {
        var children = this._parent.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            children[i].fill.set(enable, color, alpha);
        }
    };
    EShapeGroupFillEditor.prototype.clone = function () {
        return new EShapeGroupFillEditor(this._parent);
    };
    EShapeGroupFillEditor.prototype.toObject = function () {
        var children = this._parent.children;
        if (0 < children.length) {
            return children[children.length - 1].fill.toObject();
        }
        return {
            enable: true,
            color: 0xffffff,
            alpha: 1.0
        };
    };
    EShapeGroupFillEditor.prototype.serialize = function (manager) {
        return -1;
    };
    EShapeGroupFillEditor.prototype.deserialize = function (target, manager) {
        //
    };
    return EShapeGroupFillEditor;
}());
export { EShapeGroupFillEditor };
//# sourceMappingURL=e-shape-group-fill-editor.js.map