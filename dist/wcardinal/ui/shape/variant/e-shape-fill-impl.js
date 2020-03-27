/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var EShapeFillImpl = /** @class */ (function () {
    function EShapeFillImpl(parent, enable, color, alpha) {
        this._parent = parent;
        this._enable = enable;
        this._color = color;
        this._alpha = alpha;
    }
    Object.defineProperty(EShapeFillImpl.prototype, "enable", {
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
    Object.defineProperty(EShapeFillImpl.prototype, "color", {
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
    Object.defineProperty(EShapeFillImpl.prototype, "alpha", {
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
    EShapeFillImpl.prototype.copy = function (target) {
        if (target) {
            this.set(target.enable, target.color, target.alpha);
        }
    };
    EShapeFillImpl.prototype.set = function (enable, color, alpha) {
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
        if (isChanged) {
            this._parent.updateUploaded();
        }
    };
    EShapeFillImpl.prototype.clone = function () {
        return new EShapeFillImpl(this._parent, this._enable, this._color, this._alpha);
    };
    EShapeFillImpl.prototype.toObject = function () {
        return {
            enable: this._enable,
            color: this._color,
            alpha: this._alpha
        };
    };
    EShapeFillImpl.prototype.serialize = function (manager) {
        var stringified = "[" + (this._enable ? 1 : 0) + "," + this._color + "," + this._alpha + "]";
        return manager.add(stringified);
    };
    EShapeFillImpl.prototype.deserialize = function (target, manager) {
        var resources = manager.resources;
        if (0 <= target && target < resources.length) {
            var parsed = manager.fills.get(target);
            if (parsed != null) {
                this.set(parsed[0] !== 0, parsed[1], parsed[2]);
            }
            else {
                var deserialized = JSON.parse(resources[target]);
                manager.fills.set(target, deserialized);
                this.set(deserialized[0] !== 0, deserialized[1], deserialized[2]);
            }
        }
    };
    return EShapeFillImpl;
}());
export { EShapeFillImpl };
//# sourceMappingURL=e-shape-fill-impl.js.map