/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { ObservablePoint } from "pixi.js";
import { EShapeCorner } from "../e-shape-corner";
import { EShapeDefaults } from "../e-shape-defaults";
import { EShapeBase } from "./e-shape-base";
import { EShapeFillImpl } from "./e-shape-fill-impl";
import { EShapeStrokeImpl } from "./e-shape-stroke-impl";
import { EShapeTagImpl } from "./e-shape-tag-impl";
import { EShapeTextImpl } from "./e-shape-text-impl";
var EShapePrimitive = /** @class */ (function (_super) {
    __extends(EShapePrimitive, _super);
    function EShapePrimitive(type) {
        var _this = _super.call(this, type) || this;
        _this.size = _this.newSize();
        _this.fill = _this.newFill();
        _this.stroke = _this.newStroke();
        _this._radius = EShapeDefaults.RADIUS;
        _this._corner = EShapeCorner.ALL;
        _this.tag = new EShapeTagImpl();
        _this.text = _this.newText();
        _this.cursor = EShapeDefaults.CURSOR;
        return _this;
    }
    EShapePrimitive.prototype.newSize = function () {
        var _this = this;
        return new ObservablePoint(function () { _this.onSizeChange(); }, undefined, EShapeDefaults.SIZE_X, EShapeDefaults.SIZE_Y);
    };
    EShapePrimitive.prototype.newFill = function () {
        return new EShapeFillImpl(this, true, EShapeDefaults.FILL_COLOR, EShapeDefaults.FILL_ALPHA);
    };
    EShapePrimitive.prototype.newStroke = function () {
        return new EShapeStrokeImpl(this, true, EShapeDefaults.STROKE_COLOR, EShapeDefaults.STROKE_ALPHA, EShapeDefaults.STROKE_WIDTH, EShapeDefaults.STROKE_ALIGN, EShapeDefaults.STROKE_SIDE);
    };
    EShapePrimitive.prototype.newText = function () {
        return new EShapeTextImpl(this, EShapeDefaults.TEXT_VALUE, EShapeDefaults.STROKE_COLOR, EShapeDefaults.STROKE_ALPHA, EShapeDefaults.TEXT_FAMILY, EShapeDefaults.TEXT_SIZE);
    };
    Object.defineProperty(EShapePrimitive.prototype, "corner", {
        get: function () {
            return this._corner;
        },
        set: function (corner) {
            if (this._corner !== corner) {
                this._corner = corner;
                this.updateUploaded();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapePrimitive.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (radius) {
            if (this._radius !== radius) {
                this._radius = radius;
                this.updateUploaded();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapePrimitive.prototype, "image", {
        get: function () {
            return this._image;
        },
        set: function (image) {
            if (this._image !== image) {
                if (image != null) {
                    this._image = image;
                    this.imageSrc = image.src;
                }
                else {
                    this._image = undefined;
                    this.imageSrc = undefined;
                }
                var parent_1 = this.parent;
                if (parent_1 != null) {
                    parent_1.toDirty();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    return EShapePrimitive;
}(EShapeBase));
export { EShapePrimitive };
//# sourceMappingURL=e-shape-primitive.js.map