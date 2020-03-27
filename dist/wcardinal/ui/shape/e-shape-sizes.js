/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var EShapeSizes = /** @class */ (function () {
    function EShapeSizes() {
    }
    EShapeSizes.toRounded = function (value) {
        return Math.round(value * 100) / 100;
    };
    EShapeSizes.toNormalized = function (size) {
        var THRESHOLD = 0.001;
        if (Math.abs(size) < THRESHOLD) {
            return (size < 0 ? -THRESHOLD : +THRESHOLD);
        }
        return EShapeSizes.toRounded(size);
    };
    EShapeSizes.resize = function (shape, from, to, centerMode, isPerfect) {
        shape.disallowUploadedUpdate();
        var position = shape.transform.position;
        if (centerMode) {
            var dx = Math.abs(to.x - from.x);
            var dy = Math.abs(to.y - from.y);
            if (isPerfect) {
                var hsize = Math.max(dx, dy);
                var size = hsize + hsize;
                shape.size.set(EShapeSizes.toNormalized(size), EShapeSizes.toNormalized(size));
                position.set(EShapeSizes.toRounded(from.x), EShapeSizes.toRounded(from.y));
            }
            else {
                shape.size.set(EShapeSizes.toNormalized(dx + dx), EShapeSizes.toNormalized(dy + dy));
                position.set(EShapeSizes.toRounded(from.x), EShapeSizes.toRounded(from.y));
            }
        }
        else {
            if (isPerfect) {
                var dx = to.x - from.x;
                var dy = to.y - from.y;
                var size = Math.max(Math.abs(dx), Math.abs(dy));
                var x2 = from.x + (dx < 0 ? -size : +size);
                var y2 = from.y + (dy < 0 ? -size : +size);
                var hsize = size * 0.5;
                var x = Math.min(from.x, x2) + hsize;
                var y = Math.min(from.y, y2) + hsize;
                shape.size.set(EShapeSizes.toNormalized(size), EShapeSizes.toNormalized(size));
                position.set(EShapeSizes.toRounded(x), EShapeSizes.toRounded(y));
            }
            else {
                var x0 = Math.min(from.x, to.x);
                var y0 = Math.min(from.y, to.y);
                var x1 = Math.max(from.x, to.x);
                var y1 = Math.max(from.y, to.y);
                var width = x1 - x0;
                var height = y1 - y0;
                var px = width * 0.5;
                var py = height * 0.5;
                shape.size.set(EShapeSizes.toNormalized(width), EShapeSizes.toNormalized(height));
                position.set(EShapeSizes.toRounded(x0 + px), EShapeSizes.toRounded(y0 + py));
            }
        }
        shape.allowUploadedUpdate();
    };
    return EShapeSizes;
}());
export { EShapeSizes };
//# sourceMappingURL=e-shape-sizes.js.map