/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeEditor } from "./e-shape-editor";
import { EShapeSizes } from "./e-shape-sizes";
import { EShapeBase } from "./variant/e-shape-base";
var EShapeTransforms = /** @class */ (function () {
    function EShapeTransforms() {
    }
    EShapeTransforms.prepare = function (shape) {
        var editor = shape.editor = (shape.editor || new EShapeEditor());
        // Ttransform
        shape.updateTransform();
        var parent = shape.parent;
        if (parent instanceof EShapeBase) {
            parent.transform.internalTransform.copyTo(editor.internalTransformParentInverse).invert();
        }
        else {
            editor.internalTransformParentInverse.identity();
        }
        shape.transform.internalTransform.copyTo(editor.internalTransform);
        // Rotation
        editor.rotation = shape.transform.rotation;
        // Size
        editor.size.copyFrom(shape.size);
        //
        shape.disallowOnTransformChange();
    };
    EShapeTransforms.finalize = function (shape) {
        shape.allowOnTransformChange(true);
    };
    EShapeTransforms.apply = function (shape, transform, keepSize) {
        var editor = shape.editor;
        if (editor != null) {
            var newLocalTransform = editor.localTransform;
            editor.internalTransformParentInverse.copyTo(newLocalTransform)
                .append(transform).append(editor.internalTransform);
            if (keepSize) {
                this.applyLocal(shape, newLocalTransform);
            }
            else {
                var size = editor.size;
                this.applyLocal(shape, newLocalTransform, size.x, size.y);
            }
        }
    };
    EShapeTransforms.applyLocal = function (shape, localTransform, bx, by) {
        shape.disallowUploadedUpdate();
        // Reconstruct the position, the rotation and the size
        var a = localTransform.a;
        var b = localTransform.b;
        var c = localTransform.c;
        var d = localTransform.d;
        var tx = localTransform.tx;
        var ty = localTransform.ty;
        // Rotation
        var transform = shape.transform;
        var rx = Math.atan2(-c, d); // rotation - skewX
        var ry = Math.atan2(+b, a); // rotation + skewY
        transform.rotation = (rx + ry) * 0.5; // Here, assumes `skewX` === `skewY`
        // Skew
        var skew = (ry - rx) * 0.5;
        transform.skew.set(skew, skew);
        // Position: Assumes the pivot is invariant.
        // tx = position.x - (a * px + c * py)
        // ty = position.y - (b * px + d * py)
        //
        // Thus,
        // position.x = tx + (a * px + c * py)
        // position.y = ty + (b * px + d * py)
        var pivot = transform.pivot;
        var px = pivot.x;
        var py = pivot.y;
        transform.position.set(tx + (a * px + c * py), ty + (b * px + d * py));
        // Scale
        if (bx != null && by != null) {
            var sx = Math.sqrt(a * a + b * b);
            var sy = Math.sqrt(c * c + d * d);
            shape.size.set(EShapeSizes.toNormalized(bx * sx), EShapeSizes.toNormalized(by * sy));
        }
        //
        shape.allowUploadedUpdate();
    };
    return EShapeTransforms;
}());
export { EShapeTransforms };
//# sourceMappingURL=e-shape-transforms.js.map