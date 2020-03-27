/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DisplayObject, Point } from "pixi.js";
import { DynamicAtlas } from "../util/dynamic-atlas";
import { DynamicSDFFontAtlases } from "../util/dynamic-sdf-font-atlases";
import { EShapeRenderer } from "./e-shape-renderer";
var EShapeContainer = /** @class */ (function (_super) {
    __extends(EShapeContainer, _super);
    function EShapeContainer() {
        var _this = _super.call(this) || this;
        _this._shapeRenderer = null;
        _this.children = [];
        _this._childrenId = 0;
        _this._childrenIdRendered = -1;
        _this._atlas = null;
        _this._fontAtlases = new DynamicSDFFontAtlases();
        _this._pixelScale = 1;
        _this._pixelScaleId = NaN;
        _this._work = new Point();
        _this._buffers = [];
        return _this;
    }
    EShapeContainer.prototype.calculateBounds = function () {
        this._bounds.clear();
    };
    EShapeContainer.prototype.onChildTransformChange = function () {
        // DO NOTHING
    };
    EShapeContainer.prototype.toDirty = function () {
        return this._childrenId += 1;
    };
    EShapeContainer.prototype.isDirty = function () {
        return this._childrenIdRendered < this._childrenId;
    };
    EShapeContainer.prototype.render = function (renderer) {
        if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {
            return;
        }
        var childrenId = this._childrenId;
        var childrenIdRendered = this._childrenIdRendered;
        this._childrenIdRendered = childrenId;
        var isChildrenDirty = childrenIdRendered < childrenId;
        var children = this.children;
        var shapeRenderer = this._shapeRenderer;
        if (shapeRenderer == null) {
            shapeRenderer = this._shapeRenderer = new EShapeRenderer(renderer);
        }
        renderer.batch.setObjectRenderer(shapeRenderer);
        var mask = this.mask;
        if (mask) {
            renderer.mask.push(this, mask);
            shapeRenderer.render_(this, children, isChildrenDirty);
            renderer.mask.pop(this);
        }
        else {
            shapeRenderer.render_(this, children, isChildrenDirty);
        }
    };
    EShapeContainer.prototype.containsPoint = function (point) {
        return false;
    };
    EShapeContainer.prototype.getFontAtlases = function () {
        return this._fontAtlases;
    };
    EShapeContainer.prototype.getAtlas = function (resolution) {
        var atlas = this._atlas;
        if (atlas == null) {
            atlas = new DynamicAtlas(resolution);
            this._atlas = atlas;
        }
        return atlas;
    };
    EShapeContainer.prototype.getBuffers = function () {
        return this._buffers;
    };
    EShapeContainer.prototype.toPixelScale = function (resolution) {
        this.updateTransform();
        var transform = this.transform;
        var worldID = transform._worldID;
        if (worldID !== this._pixelScaleId) {
            this._pixelScaleId = worldID;
            var worldTransform = transform.worldTransform;
            var a = worldTransform.a;
            var b = worldTransform.b;
            var scale = Math.sqrt(a * a + b * b);
            this._pixelScale = 1 / (resolution * scale);
        }
        return this._pixelScale;
    };
    EShapeContainer.prototype.getPixelScale = function () {
        return this._pixelScale;
    };
    EShapeContainer.prototype.getAntialiasWeight = function (resolution) {
        return 1.25 / resolution;
    };
    EShapeContainer.prototype.hitTest = function (global, handler) {
        var work = this._work;
        var children = this.children;
        for (var i = children.length - 1; 0 <= i; --i) {
            var child = children[i];
            if (child.visible) {
                var childLocal = child.toLocal(global, undefined, work);
                var childResult = child.contains(childLocal);
                if (childResult != null) {
                    if (handler == null || handler(childResult)) {
                        return childResult;
                    }
                }
            }
        }
        return null;
    };
    EShapeContainer.prototype.hitTestBBox = function (global, handler) {
        var work = this._work;
        var children = this.children;
        for (var i = children.length - 1; 0 <= i; --i) {
            var child = children[i];
            if (child.visible) {
                var childLocal = child.toLocal(global, undefined, work);
                if (child.containsBBox(childLocal)) {
                    if (handler == null || handler(child)) {
                        return child;
                    }
                }
            }
        }
        return null;
    };
    EShapeContainer.prototype.destroy = function () {
        // Buffer
        var buffers = this._buffers;
        if (buffers != null) {
            for (var i = 0, imax = buffers.length; i < imax; ++i) {
                buffers[i].destroy();
            }
        }
        this._buffers.length = 0;
        // Shapes
        var children = this.children;
        for (var i = children.length - 1; 0 <= i; --i) {
            children[i].destroy();
        }
        children.length = 0;
        //
        _super.prototype.destroy.call(this);
    };
    return EShapeContainer;
}(DisplayObject));
export { EShapeContainer };
//# sourceMappingURL=e-shape-container.js.map