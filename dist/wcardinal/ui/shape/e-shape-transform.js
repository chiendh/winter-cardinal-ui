/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Matrix, Transform } from "pixi.js";
var EShapeTransformImpl = /** @class */ (function (_super) {
    __extends(EShapeTransformImpl, _super);
    function EShapeTransformImpl(parent) {
        var _this = _super.call(this) || this;
        _this.internalTransform = new Matrix();
        _this._parent = parent;
        return _this;
    }
    EShapeTransformImpl.prototype.onChange = function () {
        _super.prototype.onChange.call(this);
        this._parent.onTransformChange();
    };
    EShapeTransformImpl.prototype.updateSkew = function () {
        _super.prototype.updateSkew.call(this);
        this._parent.onTransformChange();
    };
    EShapeTransformImpl.prototype.getLocalIdCurrent = function () {
        return this._currentLocalID;
    };
    EShapeTransformImpl.prototype.getLocalId = function () {
        return this._localID;
    };
    EShapeTransformImpl.prototype.getParentId = function () {
        return this._parentID;
    };
    EShapeTransformImpl.prototype.getWorldId = function () {
        return this._worldID;
    };
    EShapeTransformImpl.prototype.updateTransform = function (parentTransform) {
        var oldLocalId = this._currentLocalID;
        var oldWorldId = this._worldID;
        _super.prototype.updateTransform.call(this, parentTransform);
        var newLocalId = this._currentLocalID;
        var newWorldId = this._worldID;
        if (oldLocalId !== newLocalId) {
            var localTransform = this.localTransform;
            var internalTransform = this.internalTransform;
            localTransform.copyTo(internalTransform);
            if (parentTransform instanceof EShapeTransformImpl) {
                internalTransform.prepend(parentTransform.internalTransform);
            }
        }
        else if (oldWorldId !== newWorldId) {
            var localTransform = this.localTransform;
            var internalTransform = this.internalTransform;
            if (parentTransform instanceof EShapeTransformImpl) {
                localTransform.copyTo(internalTransform).prepend(parentTransform.internalTransform);
                this._currentLocalID += 1;
                this._localID = this._currentLocalID;
            }
        }
    };
    return EShapeTransformImpl;
}(Transform));
export { EShapeTransformImpl };
//# sourceMappingURL=e-shape-transform.js.map