/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var EShapeAction = /** @class */ (function () {
    function EShapeAction() {
        this.values = [];
    }
    EShapeAction.prototype.add = function (value, index) {
        var values = this.values;
        if (index != null) {
            values.splice(index, 0, value);
        }
        else {
            values.push(value);
        }
    };
    EShapeAction.prototype.addAll = function (values) {
        var sources = values;
        var destinations = this.values;
        for (var i = 0, imax = sources.length; i < imax; ++i) {
            destinations.push(sources[i]);
        }
    };
    EShapeAction.prototype.indexOf = function (target) {
        var values = this.values;
        // Instance-based matching
        for (var i = 0, imax = values.length; i < imax; ++i) {
            var value = values[i];
            if (value === target) {
                return i;
            }
        }
        // Data-based matching
        for (var i = 0, imax = values.length; i < imax; ++i) {
            var value = values[i];
            if (value.isEquals(target)) {
                return i;
            }
        }
        return -1;
    };
    EShapeAction.prototype.get = function (index) {
        var result = this.values[index];
        if (result != null) {
            return result;
        }
        return null;
    };
    EShapeAction.prototype.set = function (index, value) {
        this.values[index] = value;
    };
    EShapeAction.prototype.remove = function (index) {
        this.values.splice(index, 1);
    };
    EShapeAction.prototype.clear = function () {
        this.values.length = 0;
    };
    EShapeAction.prototype.size = function () {
        return this.values.length;
    };
    EShapeAction.prototype.swap = function (indexA, indexB) {
        var values = this.values;
        var tmp = values[indexB];
        values[indexB] = values[indexA];
        values[indexA] = tmp;
    };
    EShapeAction.prototype.serialize = function (manager) {
        var result = [];
        var values = this.values;
        for (var i = 0, imax = values.length; i < imax; ++i) {
            result.push(values[i].serialize(manager));
        }
        return result;
    };
    return EShapeAction;
}());
export { EShapeAction };
//# sourceMappingURL=e-shape-action.js.map