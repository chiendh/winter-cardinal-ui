/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeCorner } from "../e-shape-corner";
import { EShapeDefaults } from "../e-shape-defaults";
import { EShapeType } from "../e-shape-type";
import { EShapeBase } from "./e-shape-base";
import { EShapeGroupFillEditor } from "./e-shape-group-fill-editor";
import { EShapeGroupPoints } from "./e-shape-group-points";
import { EShapeGroupSizeEditor } from "./e-shape-group-size-editor";
import { EShapeGroupSizeViewer } from "./e-shape-group-size-viewer";
import { EShapeGroupStrokeEditor } from "./e-shape-group-stroke-editor";
import { EShapeGroupTextEditor } from "./e-shape-group-text-editor";
import { EShapeTagImpl } from "./e-shape-tag-impl";
var EShapeGroup = /** @class */ (function (_super) {
    __extends(EShapeGroup, _super);
    function EShapeGroup(type) {
        if (type === void 0) { type = EShapeType.GROUP; }
        var _this = _super.call(this, type) || this;
        _this.tag = new EShapeTagImpl();
        _this.size = _this.newGroupSize();
        _this.fill = _this.newGroupFill();
        _this.stroke = _this.newGroupStroke();
        _this.text = _this.newGroupText();
        _this.points = _this.newGroupPoints();
        return _this;
    }
    EShapeGroup.prototype.newGroupSize = function () {
        var _this = this;
        if (EShapeDefaults.IS_EDIT_MODE) {
            return new EShapeGroupSizeEditor(this, EShapeDefaults.SIZE_X, EShapeDefaults.SIZE_Y);
        }
        else {
            var result_1 = new EShapeGroupSizeViewer(function () {
                var base = result_1.base;
                _this.transform.scale.set(result_1.x / base.x, result_1.y / base.y);
            }, EShapeDefaults.SIZE_X, EShapeDefaults.SIZE_Y);
            return result_1;
        }
    };
    EShapeGroup.prototype.newGroupFill = function () {
        return new EShapeGroupFillEditor(this);
    };
    EShapeGroup.prototype.newGroupStroke = function () {
        return new EShapeGroupStrokeEditor(this);
    };
    EShapeGroup.prototype.newGroupText = function () {
        return new EShapeGroupTextEditor(this);
    };
    EShapeGroup.prototype.newGroupPoints = function () {
        return new EShapeGroupPoints(this);
    };
    EShapeGroup.prototype.getBoundsSize = function () {
        var size = this.size;
        if (size instanceof EShapeGroupSizeViewer) {
            return size.base;
        }
        else {
            return size;
        }
    };
    EShapeGroup.prototype.onChildTransformChange = function () {
        _super.prototype.onChildTransformChange.call(this);
        this.size.fit();
    };
    Object.defineProperty(EShapeGroup.prototype, "corner", {
        get: function () {
            var children = this.children;
            if (0 < children.length) {
                return children[children.length - 1].corner;
            }
            return EShapeCorner.ALL;
        },
        set: function (corner) {
            var children = this.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].corner = corner;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroup.prototype, "cursor", {
        get: function () {
            var children = this.children;
            if (0 < children.length) {
                return children[children.length - 1].cursor;
            }
            return "";
        },
        set: function (cursor) {
            var children = this.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].cursor = cursor;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroup.prototype, "gradient", {
        get: function () {
            var children = this.children;
            for (var i = children.length - 1; 0 <= i; --i) {
                var gradient = children[i].gradient;
                if (gradient != null) {
                    return gradient;
                }
            }
            return undefined;
        },
        set: function (gradient) {
            var children = this.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].gradient = gradient;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroup.prototype, "radius", {
        get: function () {
            var children = this.children;
            if (0 < children.length) {
                return children[children.length - 1].radius;
            }
            return 0.5;
        },
        set: function (radius) {
            var children = this.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].radius = radius;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroup.prototype, "image", {
        get: function () {
            var children = this.children;
            for (var i = children.length - 1; 0 <= i; --i) {
                var image = children[i].image;
                if (image != null) {
                    return image;
                }
            }
            return undefined;
        },
        set: function (image) {
            var children = this.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].image = image;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroup.prototype, "points", {
        get: function () {
            var children = this.children;
            for (var i = children.length - 1; 0 <= i; --i) {
                var points = children[i].points;
                if (points != null) {
                    return this._points;
                }
            }
            return undefined;
        },
        set: function (points) {
            // DO NOTHING
        },
        enumerable: true,
        configurable: true
    });
    EShapeGroup.prototype.clone = function () {
        var constructor = this.constructor;
        var result = new constructor().copy(this);
        var children = this.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            var clone = children[i].clone();
            clone.parent = result;
            result.children.push(clone);
        }
        result.onChildTransformChange();
        result.toDirty();
        return result;
    };
    EShapeGroup.prototype.containsAbs = function (x, y, ax, ay) {
        return false;
    };
    return EShapeGroup;
}(EShapeBase));
export { EShapeGroup };
//# sourceMappingURL=e-shape-group.js.map