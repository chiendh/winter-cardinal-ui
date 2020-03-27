/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeTagValueImpl } from "./e-shape-tag-value-impl";
import { EShapeTagValueRangeImpl } from "./e-shape-tag-value-range-impl";
var EShapeTagImpl = /** @class */ (function () {
    function EShapeTagImpl() {
        this._values = [];
        this.isChanged = true;
    }
    Object.defineProperty(EShapeTagImpl.prototype, "id", {
        get: function () {
            var values = this._values;
            if (0 < values.length) {
                return values[0].id;
            }
            else {
                var inherited = this.inherited;
                if (inherited != null) {
                    return inherited.id;
                }
            }
            return "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeTagImpl.prototype, "initial", {
        get: function () {
            var values = this._values;
            if (0 < values.length) {
                return values[0].initial;
            }
            else {
                var inherited = this.inherited;
                if (inherited != null) {
                    return inherited.initial;
                }
            }
            return "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeTagImpl.prototype, "format", {
        get: function () {
            var values = this._values;
            if (0 < values.length) {
                return values[0].format;
            }
            else {
                var inherited = this.inherited;
                if (inherited != null) {
                    return inherited.format;
                }
            }
            return "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeTagImpl.prototype, "range", {
        get: function () {
            var values = this._values;
            if (0 < values.length) {
                return values[0].range;
            }
            else {
                var inherited = this.inherited;
                if (inherited != null) {
                    return inherited.range;
                }
            }
            return EShapeTagImpl.RANGE_DUMMY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeTagImpl.prototype, "value", {
        get: function () {
            var values = this._values;
            if (0 < values.length) {
                return values[0].value;
            }
            else {
                var inherited = this.inherited;
                if (inherited != null) {
                    return inherited.value;
                }
            }
            return 0;
        },
        set: function (value) {
            var values = this._values;
            if (0 < values.length) {
                values[0].value = value;
            }
            else {
                var inherited = this.inherited;
                if (inherited != null) {
                    inherited.value = value;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeTagImpl.prototype, "nvalue", {
        get: function () {
            var values = this._values;
            if (0 < values.length) {
                return values[0].nvalue;
            }
            else {
                var inherited = this.inherited;
                if (inherited != null) {
                    return inherited.nvalue;
                }
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeTagImpl.prototype, "time", {
        get: function () {
            var values = this._values;
            if (0 < values.length) {
                return values[0].time;
            }
            else {
                var inherited = this.inherited;
                if (inherited != null) {
                    return inherited.time;
                }
            }
            return 0;
        },
        set: function (time) {
            var values = this._values;
            if (0 < values.length) {
                values[0].time = time;
            }
            else {
                var inherited = this.inherited;
                if (inherited != null) {
                    inherited.time = time;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeTagImpl.prototype, "values", {
        get: function () {
            var values = this._values;
            if (0 < values.length) {
                return values[0].values;
            }
            else {
                var inherited = this.inherited;
                if (inherited != null) {
                    return inherited.values;
                }
            }
            return EShapeTagImpl.EMPTY_ARRAY;
        },
        set: function (newValues) {
            var values = this._values;
            if (0 < values.length) {
                values[0].values = newValues;
            }
            else {
                var inherited = this.inherited;
                if (inherited != null) {
                    inherited.values = newValues;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeTagImpl.prototype, "times", {
        get: function () {
            var values = this._values;
            if (0 < values.length) {
                return values[0].times;
            }
            else {
                var inherited = this.inherited;
                if (inherited != null) {
                    return inherited.times;
                }
            }
            return EShapeTagImpl.EMPTY_ARRAY;
        },
        set: function (newTimes) {
            var values = this._values;
            if (0 < values.length) {
                values[0].times = newTimes;
            }
            else {
                var inherited = this.inherited;
                if (inherited != null) {
                    inherited.times = newTimes;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeTagImpl.prototype, "capacity", {
        get: function () {
            var values = this._values;
            if (0 < values.length) {
                return values[0].capacity;
            }
            else {
                var inherited = this.inherited;
                if (inherited != null) {
                    return inherited.capacity;
                }
            }
            return 0;
        },
        set: function (capacity) {
            var values = this._values;
            if (0 < values.length) {
                values[0].capacity = capacity;
            }
            else {
                var inherited = this.inherited;
                if (inherited != null) {
                    inherited.capacity = capacity;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    EShapeTagImpl.prototype.add = function (value, index) {
        var values = this._values;
        value.parent = this;
        if (index === undefined) {
            values.push(value);
        }
        else {
            values.splice(index, 0, value);
        }
    };
    EShapeTagImpl.prototype.set = function (index, value) {
        var values = this._values;
        if (0 <= index && index < values.length) {
            var result = values[index];
            value.parent = this;
            values[index] = value;
            result.parent = undefined;
            return result;
        }
        return null;
    };
    EShapeTagImpl.prototype.remove = function (index) {
        var values = this._values;
        if (0 <= index && index < values.length) {
            values.splice(index, 1)[0].parent = undefined;
        }
    };
    EShapeTagImpl.prototype.indexOf = function (target) {
        var values = this._values;
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
            if (value.id === target.id &&
                value.initial === target.initial &&
                value.formatter === target.formatter &&
                value.range.isEquals(target.range)) {
                return i;
            }
        }
        // ID-based matching
        for (var i = 0, imax = values.length; i < imax; ++i) {
            var value = values[i];
            if (value.id === target.id) {
                return i;
            }
        }
        return -1;
    };
    EShapeTagImpl.prototype.get = function (index) {
        var values = this._values;
        if (0 <= index && index < values.length) {
            return values[index];
        }
        return null;
    };
    EShapeTagImpl.prototype.size = function () {
        return this._values.length;
    };
    EShapeTagImpl.prototype.swap = function (indexA, indexB) {
        var values = this._values;
        var tmp = values[indexB];
        values[indexB] = values[indexA];
        values[indexA] = tmp;
    };
    EShapeTagImpl.prototype.copy = function (target) {
        var values = this._values;
        values.length = 0;
        for (var i = 0, imax = target.size(); i < imax; ++i) {
            var value = target.get(i);
            if (value != null) {
                var newValue = new EShapeTagValueImpl().copy(value);
                newValue.parent = this;
                values.push(newValue);
            }
        }
        return this;
    };
    EShapeTagImpl.prototype.serialize = function (manager) {
        var values = this._values;
        if (values.length <= 0) {
            return manager.add("[]");
        }
        else {
            var serialized = "[" + values[0].serialize(manager);
            for (var i = 1, imax = values.length; i < imax; ++i) {
                serialized += "," + values[i].serialize(manager);
            }
            serialized += "]";
            return manager.add(serialized);
        }
    };
    EShapeTagImpl.prototype.deserialize = function (target, manager) {
        if (0 <= target && target < manager.resources.length) {
            var deserialized = manager.tags.get(target);
            if (deserialized == null) {
                deserialized = JSON.parse(manager.resources[target]);
                manager.tags.set(target, deserialized);
            }
            var values = this._values;
            values.length = 0;
            for (var i = 0, imax = deserialized.length; i < imax; ++i) {
                var index = deserialized[i];
                var value = new EShapeTagValueImpl();
                value.parent = this;
                value.deserialize(index, manager);
                values.push(value);
            }
        }
    };
    EShapeTagImpl.RANGE_DUMMY = new EShapeTagValueRangeImpl();
    EShapeTagImpl.EMPTY_ARRAY = [];
    return EShapeTagImpl;
}());
export { EShapeTagImpl };
//# sourceMappingURL=e-shape-tag-impl.js.map