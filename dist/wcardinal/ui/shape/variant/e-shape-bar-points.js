/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { Point } from "pixi.js";
import { EShapeBarPosition } from "./e-shape-bar-position";
var EShapeBarPoints = /** @class */ (function () {
    function EShapeBarPoints(parent, position, size, style) {
        this._parent = parent;
        this._id = 0;
        this._values = [0, 0, 0, 0];
        this._segments = [];
        this._style = style;
        this._size = size;
        this._position = position;
        this._updatedSize = NaN;
        this._updatedParentSizeX = NaN;
        this._updatedParentSizeY = NaN;
        this._updatedPosition = NaN;
    }
    EShapeBarPoints.prototype.getComputedSize = function (size, position, sizeX, sizeY) {
        if (0 <= size) {
            return size;
        }
        else {
            switch (position) {
                case EShapeBarPosition.TOP:
                case EShapeBarPosition.BOTTOM:
                    return Math.abs(sizeY);
                case EShapeBarPosition.RIGHT:
                case EShapeBarPosition.LEFT:
                    return Math.abs(sizeX);
            }
            return 0;
        }
    };
    EShapeBarPoints.prototype.update = function () {
        var parentSize = this._parent.size;
        var parentSizeX = parentSize.x;
        var parentSizeY = parentSize.y;
        var position = this._position;
        var size = this._size;
        if (this._updatedSize !== size || this._updatedParentSizeX !== parentSizeX ||
            this._updatedParentSizeY !== parentSizeY || this._updatedPosition !== position) {
            this._id += 1;
            this._updatedSize = size;
            this._updatedParentSizeX = parentSizeX;
            this._updatedParentSizeY = parentSizeY;
            this._updatedPosition = position;
            var psxh = parentSizeX * 0.5;
            var psyh = parentSizeY * 0.5;
            var computedSize = this.getComputedSize(size, position, parentSizeX, parentSizeY);
            var values = this._values;
            switch (position) {
                case EShapeBarPosition.TOP:
                    values[0] = 0;
                    values[1] = -psyh;
                    values[2] = 0;
                    values[3] = -psyh + computedSize;
                    break;
                case EShapeBarPosition.RIGHT:
                    values[0] = psxh;
                    values[1] = 0;
                    values[2] = psxh - computedSize;
                    values[3] = 0;
                    break;
                case EShapeBarPosition.BOTTOM:
                    values[0] = 0;
                    values[1] = psyh;
                    values[2] = 0;
                    values[3] = psyh - computedSize;
                    break;
                case EShapeBarPosition.LEFT:
                    values[0] = -psxh;
                    values[1] = 0;
                    values[2] = -psxh + computedSize;
                    values[3] = 0;
                    break;
            }
        }
    };
    Object.defineProperty(EShapeBarPoints.prototype, "length", {
        get: function () {
            return 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeBarPoints.prototype, "id", {
        get: function () {
            this.update();
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeBarPoints.prototype, "values", {
        get: function () {
            this.update();
            return this._values;
        },
        set: function (values) {
            // SUPPOSED NOT TO BE CALLED
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeBarPoints.prototype, "segments", {
        get: function () {
            return this._segments;
        },
        set: function (segments) {
            // SUPPOSED NOT TO BE CALLED
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeBarPoints.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (size) {
            this.moveTo(undefined, size, undefined);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeBarPoints.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (position) {
            this.moveTo(position, undefined, undefined);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeBarPoints.prototype, "style", {
        get: function () {
            return this._style;
        },
        set: function (style) {
            this.moveTo(undefined, undefined, style);
        },
        enumerable: true,
        configurable: true
    });
    EShapeBarPoints.prototype.copy = function (source) {
        if (source instanceof EShapeBarPoints) {
            return this.moveTo(source.position, source.size, source.style);
        }
        else {
            return this.moveTo(undefined, undefined, source.style);
        }
    };
    EShapeBarPoints.prototype.set = function (newValues, newSegments, newStyle) {
        var newPosition;
        var newSize;
        if (newValues != null) {
            var x0 = newValues[0];
            if (x0 === 0) {
                var y0 = newValues[1];
                newPosition = (y0 <= 0 ? EShapeBarPosition.TOP : EShapeBarPosition.BOTTOM);
                newSize = Math.abs(newValues[3] - y0);
            }
            else {
                newPosition = (x0 <= 0 ? EShapeBarPosition.LEFT : EShapeBarPosition.RIGHT);
                newSize = Math.abs(newValues[2] - x0);
            }
        }
        return this.moveTo(newPosition, newSize, newStyle);
    };
    EShapeBarPoints.prototype.moveTo = function (position, size, style) {
        var isChanged = false;
        if (style != null && this._style !== style) {
            this._style = style;
            isChanged = true;
        }
        if (position != null && this._position !== position) {
            this._position = position;
            isChanged = true;
        }
        if (size != null && this._size !== size) {
            this._size = size;
            isChanged = true;
        }
        if (isChanged) {
            this._parent.updateUploaded();
        }
        return this;
    };
    EShapeBarPoints.prototype.clone = function (parent) {
        return new EShapeBarPoints(parent, this._position, this._size, this._style);
    };
    EShapeBarPoints.prototype.toPoints = function (transform) {
        var result = [];
        var values = this.values;
        for (var i = 0, imax = values.length; i < imax; i += 2) {
            var point = new Point(values[i + 0], values[i + 1]);
            result.push(transform.apply(point, point));
        }
        return result;
    };
    EShapeBarPoints.prototype.serialize = function (manager) {
        return manager.add("[" + this._position + "," + this._size + "," + this._style + "]");
    };
    EShapeBarPoints.prototype.deserialize = function (resourceId, manager) {
        if (0 <= resourceId && resourceId < manager.resources.length) {
            var resource = manager.resources[resourceId];
            var parsed = JSON.parse(resource);
            this.moveTo(parsed[0], parsed[1], parsed[2]);
        }
    };
    EShapeBarPoints.prototype.calcHitPointAbs = function (x, y, ax, ay, threshold, range, tester, result) {
        var length = this.length;
        if (2 <= length) {
            var values = this._values;
            var v0x = values[0];
            var v0y = values[1];
            var v1x = values[2];
            var v1y = values[3];
            if (tester(x, y, v0x, v0y, v1x, v1y, 0, threshold, result)) {
                return true;
            }
        }
        return false;
    };
    return EShapeBarPoints;
}());
export { EShapeBarPoints };
//# sourceMappingURL=e-shape-bar-points.js.map