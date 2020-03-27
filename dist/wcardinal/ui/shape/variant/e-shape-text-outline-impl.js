/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var EShapeTextOutlineImpl = /** @class */ (function () {
    function EShapeTextOutlineImpl(parent, enable, color, alpha, width) {
        this._parent = parent;
        this._enable = enable;
        this._color = color;
        this._alpha = alpha;
        this._width = width;
    }
    Object.defineProperty(EShapeTextOutlineImpl.prototype, "enable", {
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
    Object.defineProperty(EShapeTextOutlineImpl.prototype, "color", {
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
    Object.defineProperty(EShapeTextOutlineImpl.prototype, "alpha", {
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
    Object.defineProperty(EShapeTextOutlineImpl.prototype, "width", {
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
    EShapeTextOutlineImpl.prototype.copy = function (target) {
        if (target) {
            this.set(target.enable, target.color, target.alpha, target.width);
        }
    };
    EShapeTextOutlineImpl.prototype.set = function (enable, color, alpha, width) {
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
        if (isChanged) {
            this._parent.updateUploaded();
        }
    };
    EShapeTextOutlineImpl.prototype.clone = function () {
        return new EShapeTextOutlineImpl(this._parent, this._enable, this._color, this._alpha, this._width);
    };
    EShapeTextOutlineImpl.prototype.toObject = function () {
        return {
            enable: this._enable,
            color: this._color,
            alpha: this._alpha,
            width: this._width
        };
    };
    EShapeTextOutlineImpl.prototype.serialize = function (manager) {
        var serialized = "[" + (this._enable ? 1 : 0) + "," + this._color + "," + this._alpha + "," + this._width + "]";
        return manager.add(serialized);
    };
    EShapeTextOutlineImpl.prototype.deserialize = function (target, manager) {
        var resources = manager.resources;
        if (0 <= target && target < resources.length) {
            var parsed = manager.textOutlines.get(target);
            if (parsed != null) {
                this.set(parsed[0] !== 0, parsed[1], parsed[2], parsed[3]);
            }
            else {
                var deserialized = JSON.parse(resources[target]);
                manager.textOutlines.set(target, deserialized);
                this.set(deserialized[0] !== 0, deserialized[1], deserialized[2], deserialized[3]);
            }
        }
    };
    return EShapeTextOutlineImpl;
}());
export { EShapeTextOutlineImpl };
//# sourceMappingURL=e-shape-text-outline-impl.js.map