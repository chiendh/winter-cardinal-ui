/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { isStatic } from "./is-static";
import { toComputed } from "./to-computed";
var EShapeLineOfAnyPointsFillImpl = /** @class */ (function () {
    function EShapeLineOfAnyPointsFillImpl(parent) {
        this._parent = parent;
        this._id = 0;
        this._color = null;
        this._alpha = null;
    }
    Object.defineProperty(EShapeLineOfAnyPointsFillImpl.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeLineOfAnyPointsFillImpl.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this.set(color, undefined);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeLineOfAnyPointsFillImpl.prototype, "alpha", {
        get: function () {
            return this._alpha;
        },
        set: function (alpha) {
            this.set(undefined, alpha);
        },
        enumerable: true,
        configurable: true
    });
    EShapeLineOfAnyPointsFillImpl.prototype.set = function (color, alpha) {
        var isChanged = false;
        if (color !== undefined && this._color !== color) {
            isChanged = true;
            this._color = color;
        }
        if (alpha !== undefined && this._alpha !== alpha) {
            isChanged = true;
            this._alpha = alpha;
        }
        if (isChanged) {
            this._id += 1;
            this._parent.updateUploaded();
        }
    };
    EShapeLineOfAnyPointsFillImpl.prototype.getColor = function (index, def) {
        return toComputed(index, this._color, def);
    };
    EShapeLineOfAnyPointsFillImpl.prototype.getAlpha = function (index, def) {
        return toComputed(index, this._alpha, def);
    };
    EShapeLineOfAnyPointsFillImpl.prototype.isStaticColor = function () {
        return isStatic(this._color);
    };
    EShapeLineOfAnyPointsFillImpl.prototype.isStaticAlpha = function () {
        return isStatic(this._alpha);
    };
    EShapeLineOfAnyPointsFillImpl.prototype.toDirty = function () {
        this._id += 1;
    };
    return EShapeLineOfAnyPointsFillImpl;
}());
export { EShapeLineOfAnyPointsFillImpl };
//# sourceMappingURL=e-shape-line-of-any-points-fill-impl.js.map