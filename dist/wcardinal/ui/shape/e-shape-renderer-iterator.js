/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeRendererIteratorDatum } from "./e-shape-renderer-iterator-datum";
var EShapeRendererIterator = /** @class */ (function () {
    function EShapeRendererIterator() {
        this._index = -1;
        this._datum = new EShapeRendererIteratorDatum();
        this._data = [this._datum];
        this._current = null;
    }
    EShapeRendererIterator.prototype.reset = function (shapes) {
        this._index = 0;
        var current = this._datum = this._data[0];
        current.reset(shapes);
        this._current = null;
        return this.next();
    };
    EShapeRendererIterator.prototype.get = function () {
        return this._current;
    };
    EShapeRendererIterator.prototype.next = function () {
        var datum = this._datum;
        var shape = datum.next();
        if (shape != null) {
            this._current = shape;
            var children = shape.children;
            if (0 < children.length) {
                var datumIndex = this._index = this._index + 1;
                var data = this._data;
                if (datumIndex < data.length) {
                    var newDatum = data[datumIndex];
                    newDatum.reset(children);
                    this._datum = newDatum;
                }
                else {
                    var newDatum = new EShapeRendererIteratorDatum();
                    data.push(newDatum);
                    newDatum.reset(children);
                    this._datum = newDatum;
                }
            }
            return shape;
        }
        else {
            var datumIndex = this._index = this._index - 1;
            var data = this._data;
            if (0 <= datumIndex) {
                this._datum = data[datumIndex];
                this._current = null;
                return this.next();
            }
            else {
                this._current = null;
                return null;
            }
        }
    };
    return EShapeRendererIterator;
}());
export { EShapeRendererIterator };
//# sourceMappingURL=e-shape-renderer-iterator.js.map