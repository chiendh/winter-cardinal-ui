/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { Matrix, Point } from "pixi.js";
import { EShapeTransforms } from "../e-shape-transforms";
var EShapeGroupSizeLayout = /** @class */ (function () {
    function EShapeGroupSizeLayout(shape, bx, by) {
        this.shape = shape;
        // Base group size
        this.base = new Point(bx, by);
        // Base shape size
        var size = shape.size;
        this.shapeBase = new Point(size.x, size.y);
        // Transform
        this.transform = new Matrix();
        shape.updateTransform();
        shape.transform.localTransform.copyTo(this.transform);
    }
    EShapeGroupSizeLayout.prototype.isCompatible = function (shape) {
        return this.shape === shape;
    };
    EShapeGroupSizeLayout.prototype.reset = function (shape, baseX, baseY) {
        this.base.set(baseX, baseY);
        // Base shape size
        var size = shape.size;
        this.shapeBase.copyFrom(size);
        // Transform
        shape.updateTransform();
        shape.transform.localTransform.copyTo(this.transform);
    };
    EShapeGroupSizeLayout.prototype.update = function (shape, baseX, baseY, pivotX, pivotY) {
        var sx = baseX / this.base.x;
        var sy = baseY / this.base.y;
        var childBase = this.shapeBase;
        var transform = EShapeGroupSizeLayout.WORK_TRANSFORM;
        transform.identity()
            .append(this.transform)
            .translate(-pivotX, -pivotY)
            .scale(sx, sy)
            .translate(+pivotX, +pivotY);
        shape.disallowOnTransformChange();
        EShapeTransforms.applyLocal(shape, transform, childBase.x, childBase.y);
        shape.allowOnTransformChange(false);
    };
    EShapeGroupSizeLayout.WORK_TRANSFORM = new Matrix();
    return EShapeGroupSizeLayout;
}());
export { EShapeGroupSizeLayout };
//# sourceMappingURL=e-shape-group-size-layout.js.map