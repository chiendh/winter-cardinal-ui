/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { Point, Rectangle } from "pixi.js";
import { EShapeGroupSizeLayout } from "./e-shape-group-size-layout";
var EShapeGroupSizeEditor = /** @class */ (function () {
    function EShapeGroupSizeEditor(parent, x, y) {
        this._workPoint = new Point();
        this._workRectForCalcRect = new Rectangle();
        this._workRectForFit = new Rectangle();
        this._parent = parent;
        this._layouts = [];
        this._size = new Point(x, y);
    }
    EShapeGroupSizeEditor.prototype.init = function () {
        // DO NOTHING
    };
    Object.defineProperty(EShapeGroupSizeEditor.prototype, "x", {
        get: function () {
            return this._size.x;
        },
        set: function (x) {
            var size = this._size;
            if (size.x !== x) {
                var ox = size.x;
                size.x = x;
                this.onChange(ox, size.y);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupSizeEditor.prototype, "y", {
        get: function () {
            return this._size.y;
        },
        set: function (y) {
            var size = this._size;
            if (size.y !== y) {
                var oy = size.y;
                size.y = y;
                this.onChange(size.x, oy);
            }
        },
        enumerable: true,
        configurable: true
    });
    EShapeGroupSizeEditor.prototype.set = function (x, y) {
        var isChanged = false;
        var size = this._size;
        var ox = size.x;
        var oy = size.y;
        if (x != null && ox !== x) {
            isChanged = true;
            size.x = x;
        }
        if (y != null && oy !== y) {
            isChanged = true;
            size.y = y;
        }
        if (isChanged) {
            this.onChange(ox, oy);
        }
        return this;
    };
    EShapeGroupSizeEditor.prototype.clone = function () {
        var size = this._size;
        return new EShapeGroupSizeEditor(this._parent, size.x, size.y);
    };
    EShapeGroupSizeEditor.prototype.copy = function () {
        // DO NOTHING
    };
    EShapeGroupSizeEditor.prototype.copyFrom = function (point) {
        var x = point.x;
        var y = point.y;
        var size = this._size;
        var ox = size.x;
        var oy = size.y;
        if (ox !== x || oy !== y) {
            size.x = x;
            size.y = y;
            this.onChange(ox, oy);
        }
        return this;
    };
    EShapeGroupSizeEditor.prototype.copyTo = function (point) {
        return this._size.copyTo(point);
    };
    EShapeGroupSizeEditor.prototype.equals = function (point) {
        return this._size.equals(point);
    };
    EShapeGroupSizeEditor.prototype.fit = function () {
        var parent = this._parent;
        parent.disallowOnTransformChange();
        // Calculate the rect
        var rect = this.calcRect(this._workRectForFit);
        // Set size
        var size = this._size;
        size.set(rect.width, rect.height);
        // Position & Pivot
        // rx := rect.x
        // ry := rect.y
        //
        // | a c tx | | 1 0 +rx | | 1 0 -rx |   | a c tx + (a * rx + c * ry) | | 1 0 -rx |
        // | b d ty | | 0 1 +ry | | 0 1 -ry | = | b d ty + (b * rx + d * ry) | | 0 1 -ry |
        // | 0 0 1  | | 0 0  1  | | 0 0  1  |   | 0 0 1                      | | 0 0  1  |
        //
        // tx -> tx + (a * rx + c * ry) = poxition.x - (a * pivot.x + c * pivot.y)
        // ty -> ty + (b * rx + d * ry) = poxition.y - (b * pivot.x + d * pivot.y)
        // position.x -> position.x + (a * rx + c * ry) - (a * pivot.x + c * pivot.y)
        // position.y -> position.y + (b * rx + d * ry) - (b * pivot.x + d * pivot.y)
        // pivot.x -> 0
        // pivot.y -> 0
        //
        // a -> a', b -> b', c -> c', tx -> tx', ty -> ty'
        //
        // | a' c' tx' | | 1 0 -rx |   | a' c' tx' - (a' * rx + c' * ry) |
        // | b' d' ty' | | 0 1 -ry | = | b' d' ty' - (b' * rx + d' * ry) |
        // | 0  0  1   | | 0 0  1  |   | 0  0  1                         |
        //
        // tx' -> tx' - (a' * rx + c' * ry) = poxition.x - (a' * pivot.x + c' * pivot.y)
        // ty' -> ty' - (b' * rx + d' * ry) = poxition.y - (b' * pivot.x + d' * pivot.y)
        // pivot.x -> pivot.x + rx
        // pivot.y -> pivot.y + ry
        parent.updateTransform();
        var transform = parent.transform;
        var x = rect.x + rect.width * 0.5;
        var y = rect.y + rect.height * 0.5;
        var position = transform.position;
        var localTransform = transform.localTransform;
        var a = localTransform.a;
        var b = localTransform.b;
        var c = localTransform.c;
        var d = localTransform.d;
        var pivot = transform.pivot;
        position.set(position.x + (a * x + c * y) - (a * pivot.x + c * pivot.y), position.y + (b * x + d * y) - (b * pivot.x + d * pivot.y));
        pivot.set(x, y);
        // Reset the data
        this.reset(parent.children, this._layouts, size);
        //
        parent.allowOnTransformChange(true);
    };
    EShapeGroupSizeEditor.prototype.reset = function (children, layouts, size) {
        for (var i = 0, imax = Math.min(layouts.length, children.length); i < imax; ++i) {
            var child = children[i];
            var layout = layouts[i];
            if (layout.isCompatible(child)) {
                layout.reset(child, size.x, size.y);
            }
            else {
                layouts.length = i;
                break;
            }
        }
        if (children.length < layouts.length) {
            layouts.length = children.length;
        }
    };
    EShapeGroupSizeEditor.prototype.calcRect = function (result) {
        var parent = this._parent;
        var children = parent.children;
        if (children.length <= 0) {
            result.x = 0;
            result.y = 0;
            result.width = 0;
            result.height = 0;
        }
        else {
            var workPoint = this._workPoint;
            var workRect = this._workRectForCalcRect;
            children[0].getBoundsLocal(workPoint, false, result);
            for (var i = 1, imax = children.length; i < imax; ++i) {
                var child = children[i];
                child.getBoundsLocal(workPoint, false, workRect);
                result.enlarge(workRect);
            }
        }
        return result;
    };
    EShapeGroupSizeEditor.prototype.onChange = function (ox, oy) {
        var parent = this._parent;
        var size = this._size;
        var pivot = parent.transform.pivot;
        this.onChange_(parent.children, this._layouts, size.x, size.y, pivot.x, pivot.y, ox, oy);
        parent.onSizeChange();
    };
    EShapeGroupSizeEditor.prototype.onChange_ = function (children, layouts, sx, sy, px, py, ox, oy) {
        for (var i = 0, imax = Math.min(layouts.length, children.length); i < imax; ++i) {
            var child = children[i];
            var layout = layouts[i];
            if (layout.isCompatible(child)) {
                layout.update(child, sx, sy, px, py);
            }
            else {
                layouts.length = i;
                break;
            }
        }
        for (var i = layouts.length, imax = children.length; i < imax; ++i) {
            var child = children[i];
            var layout = this.newLayout(child, ox, oy);
            layout.update(child, sx, sy, px, py);
            layouts.push(layout);
        }
        if (layouts.length !== children.length) {
            layouts.length = children.length;
        }
    };
    EShapeGroupSizeEditor.prototype.newLayout = function (shape, ox, oy) {
        return shape.layout || new EShapeGroupSizeLayout(shape, ox, oy);
    };
    return EShapeGroupSizeEditor;
}());
export { EShapeGroupSizeEditor };
//# sourceMappingURL=e-shape-group-size-editor.js.map