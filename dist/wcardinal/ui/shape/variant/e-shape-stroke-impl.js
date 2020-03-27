/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var EShapeStrokeImpl = /** @class */ (function () {
    function EShapeStrokeImpl(parent, enable, color, alpha, width, align, side) {
        this._parent = parent;
        this._enable = enable;
        this._color = color;
        this._alpha = alpha;
        this._width = width;
        this._align = align;
        this._side = side;
    }
    Object.defineProperty(EShapeStrokeImpl.prototype, "enable", {
        get: function () {
            return this._enable;
        },
        set: function (enable) {
            if (this._enable !== enable) {
                this._enable = enable;
                this._parent.updateUploaded();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeStrokeImpl.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            if (this._color !== color) {
                this._color = color;
                this._parent.updateUploaded();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeStrokeImpl.prototype, "alpha", {
        get: function () {
            return this._alpha;
        },
        set: function (alpha) {
            if (this._alpha !== alpha) {
                this._alpha = alpha;
                this._parent.updateUploaded();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeStrokeImpl.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (width) {
            if (this._width !== width) {
                this._width = width;
                this._parent.updateUploaded();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeStrokeImpl.prototype, "align", {
        get: function () {
            return this._align;
        },
        set: function (align) {
            if (this._align !== align) {
                this._align = align;
                this._parent.updateUploaded();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeStrokeImpl.prototype, "side", {
        get: function () {
            return this._side;
        },
        set: function (side) {
            if (this._side !== side) {
                this._side = side;
                this._parent.updateUploaded();
            }
        },
        enumerable: true,
        configurable: true
    });
    EShapeStrokeImpl.prototype.copy = function (target) {
        if (target) {
            this.set(target.enable, target.color, target.alpha, target.width, target.align, target.side);
        }
    };
    EShapeStrokeImpl.prototype.set = function (enable, color, alpha, width, align, side) {
        var isChanged = false;
        if (enable !== undefined && this._enable !== enable) {
            this._enable = enable;
            isChanged = true;
        }
        if (color !== undefined && this._color !== color) {
            this._color = color;
            isChanged = true;
        }
        if (alpha !== undefined && this._alpha !== alpha) {
            this._alpha = alpha;
            isChanged = true;
        }
        if (width !== undefined && this._width !== width) {
            this._width = width;
            isChanged = true;
        }
        if (align !== undefined && this._align !== align) {
            this._align = align;
            isChanged = true;
        }
        if (side !== undefined && this._side !== side) {
            this._side = side;
            isChanged = true;
        }
        if (isChanged) {
            this._parent.updateUploaded();
        }
    };
    EShapeStrokeImpl.prototype.clone = function () {
        return new EShapeStrokeImpl(this._parent, this._enable, this._color, this._alpha, this._width, this._align, this._side);
    };
    EShapeStrokeImpl.prototype.toObject = function () {
        return {
            enable: this._enable,
            color: this._color,
            alpha: this._alpha,
            width: this._width,
            align: this._align,
            side: this._side
        };
    };
    EShapeStrokeImpl.prototype.serialize = function (manager) {
        var enable = this._enable ? 1 : 0;
        var serialized = "[" + enable + "," + this._color + "," + this._alpha + "," + this._width + "," + this._align + "," + this._side + "]";
        return manager.add(serialized);
    };
    EShapeStrokeImpl.prototype.deserialize = function (target, manager) {
        var resources = manager.resources;
        if (0 <= target && target < resources.length) {
            var parsed = manager.strokes.get(target);
            if (parsed != null) {
                this.set(parsed[0] !== 0, parsed[1], parsed[2], parsed[3], parsed[4], parsed[5]);
            }
            else {
                var deserialized = JSON.parse(resources[target]);
                manager.strokes.set(target, deserialized);
                this.set(deserialized[0] !== 0, deserialized[1], deserialized[2], deserialized[3], deserialized[4], deserialized[5]);
            }
        }
    };
    return EShapeStrokeImpl;
}());
export { EShapeStrokeImpl };
//# sourceMappingURL=e-shape-stroke-impl.js.map