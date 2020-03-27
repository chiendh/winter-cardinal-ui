/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeStrokeSide } from "../e-shape-stroke-side";
var EShapeGroupStrokeEditor = /** @class */ (function () {
    function EShapeGroupStrokeEditor(parent) {
        this._parent = parent;
    }
    Object.defineProperty(EShapeGroupStrokeEditor.prototype, "enable", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                return children[children.length - 1].stroke.enable;
            }
            return false;
        },
        set: function (enable) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].stroke.enable = enable;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupStrokeEditor.prototype, "color", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                return children[children.length - 1].stroke.color;
            }
            return 0xffffff;
        },
        set: function (color) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].stroke.color = color;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupStrokeEditor.prototype, "alpha", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                return children[children.length - 1].stroke.alpha;
            }
            return 1.0;
        },
        set: function (alpha) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].stroke.alpha = alpha;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupStrokeEditor.prototype, "width", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                return children[children.length - 1].stroke.width;
            }
            return 1.0;
        },
        set: function (width) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].stroke.width = width;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupStrokeEditor.prototype, "align", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                return children[children.length - 1].stroke.align;
            }
            return 1.0;
        },
        set: function (align) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].stroke.align = align;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupStrokeEditor.prototype, "side", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                return children[children.length - 1].stroke.side;
            }
            return 1.0;
        },
        set: function (side) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].stroke.side = side;
            }
        },
        enumerable: true,
        configurable: true
    });
    EShapeGroupStrokeEditor.prototype.copy = function (target) {
        var children = this._parent.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            children[i].stroke.copy(target);
        }
    };
    EShapeGroupStrokeEditor.prototype.set = function (enable, color, alpha, width, side) {
        var children = this._parent.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            children[i].stroke.set(enable, color, alpha, width, side);
        }
    };
    EShapeGroupStrokeEditor.prototype.clone = function () {
        return new EShapeGroupStrokeEditor(this._parent);
    };
    EShapeGroupStrokeEditor.prototype.toObject = function () {
        var children = this._parent.children;
        if (0 < children.length) {
            return children[children.length - 1].stroke.toObject();
        }
        return {
            enable: false,
            color: 0xffffff,
            alpha: 1.0,
            width: 1.0,
            align: 0.0,
            side: EShapeStrokeSide.NONE
        };
    };
    EShapeGroupStrokeEditor.prototype.serialize = function (manager) {
        return -1;
    };
    EShapeGroupStrokeEditor.prototype.deserialize = function (target, manager) {
        //
    };
    return EShapeGroupStrokeEditor;
}());
export { EShapeGroupStrokeEditor };
//# sourceMappingURL=e-shape-group-stroke-editor.js.map