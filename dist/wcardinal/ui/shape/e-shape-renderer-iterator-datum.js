/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var DUMMY_SHAPES = [];
var EShapeRendererIteratorDatum = /** @class */ (function () {
    function EShapeRendererIteratorDatum() {
        this.index = 0;
        this.shapes = DUMMY_SHAPES;
    }
    EShapeRendererIteratorDatum.prototype.reset = function (shapes) {
        this.index = -1;
        this.shapes = shapes;
    };
    EShapeRendererIteratorDatum.prototype.next = function () {
        var index = this.index = this.index + 1;
        var shapes = this.shapes;
        if (index < shapes.length) {
            return shapes[index];
        }
        return null;
    };
    return EShapeRendererIteratorDatum;
}());
export { EShapeRendererIteratorDatum };
//# sourceMappingURL=e-shape-renderer-iterator-datum.js.map