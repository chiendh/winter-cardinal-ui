/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { isStatic } from "./is-static";
import { toComputed } from "./to-computed";
var EShapeLineOfAnyPointsStrokeImpl = /** @class */ (function () {
    function EShapeLineOfAnyPointsStrokeImpl(parent) {
        this._parent = parent;
        this._id = 0;
        this._color = null;
        this._alpha = null;
    }
    Object.defineProperty(EShapeLineOfAnyPointsStrokeImpl.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeLineOfAnyPointsStrokeImpl.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this.set(color, undefined);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeLineOfAnyPointsStrokeImpl.prototype, "alpha", {
        get: function () {
            return this._alpha;
        },
        set: function (alpha) {
            this.set(undefined, alpha);
        },
        enumerable: true,
        configurable: true
    });
    EShapeLineOfAnyPointsStrokeImpl.prototype.set = function (color, alpha) {
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
    EShapeLineOfAnyPointsStrokeImpl.prototype.getColor = function (index, def) {
        return toComputed(index, this._color, def);
    };
    EShapeLineOfAnyPointsStrokeImpl.prototype.getAlpha = function (index, def) {
        return toComputed(index, this._alpha, def);
    };
    EShapeLineOfAnyPointsStrokeImpl.prototype.isStaticColor = function () {
        return isStatic(this._color);
    };
    EShapeLineOfAnyPointsStrokeImpl.prototype.isStaticAlpha = function () {
        return isStatic(this._alpha);
    };
    EShapeLineOfAnyPointsStrokeImpl.prototype.toDirty = function () {
        this._id += 1;
    };
    return EShapeLineOfAnyPointsStrokeImpl;
}());
export { EShapeLineOfAnyPointsStrokeImpl };
//# sourceMappingURL=e-shape-line-of-any-points-stroke-impl.js.map