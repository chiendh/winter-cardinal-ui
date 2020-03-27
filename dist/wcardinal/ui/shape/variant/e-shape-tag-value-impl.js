/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeTagValueOrder } from "../e-shape-tag-value";
import { EShapeTagValueRangeImpl } from "./e-shape-tag-value-range-impl";
var INDEX_COMPARATOR = function (a, b) {
    return a - b;
};
var EShapeTagValueImpl = /** @class */ (function () {
    function EShapeTagValueImpl() {
        this.id = "";
        this.initial = "";
        this.format = "";
        this.range = new EShapeTagValueRangeImpl();
        this._value = 0;
        this._time = 0;
        this._capacity = 0;
        this._order = EShapeTagValueOrder.ASCENDING;
    }
    Object.defineProperty(EShapeTagValueImpl.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        set: function (parent) {
            if (this._parent !== parent) {
                this._parent = parent;
                this.range.parent = parent;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeTagValueImpl.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (newValue) {
            var formatter = this.formatter;
            if (formatter != null) {
                newValue = formatter(newValue);
            }
            var capacity = this._capacity;
            if (capacity <= 0) {
                if (this._value !== newValue) {
                    this._value = newValue;
                    var parent_1 = this.parent;
                    if (parent_1 != null) {
                        parent_1.isChanged = true;
                    }
                }
            }
            else {
                var values = this._values;
                if (values == null) {
                    values = [];
                    this._values = values;
                }
                // Update the value
                this._value = newValue;
                // Update the values
                var order = this._order;
                if (order === EShapeTagValueOrder.ASCENDING) {
                    values.push(newValue);
                }
                else {
                    values.unshift(newValue);
                }
                // Remove the unnecessary values
                var count = values.length - capacity;
                if (0 < count) {
                    if (order === EShapeTagValueOrder.ASCENDING) {
                        for (var i = 0; i < count; ++i) {
                            values.shift();
                        }
                    }
                    else {
                        values.length = capacity;
                    }
                }
                // Tell the parent it's changed
                var parent_2 = this.parent;
                if (parent_2 != null) {
                    parent_2.isChanged = true;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeTagValueImpl.prototype, "nvalue", {
        get: function () {
            return this.range.normalize(this._value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeTagValueImpl.prototype, "values", {
        get: function () {
            var result = this._values;
            if (result == null) {
                result = [];
                this._values = result;
            }
            return result;
        },
        set: function (newValues) {
            if (0 < newValues.length) {
                var capacity = this._capacity;
                if (capacity <= 0) {
                    var newValue = newValues[newValues.length - 1];
                    var formatter = this.formatter;
                    if (formatter != null) {
                        newValue = formatter(newValue);
                    }
                    if (this._value !== newValue) {
                        this._value = newValue;
                        var parent_3 = this.parent;
                        if (parent_3 != null) {
                            parent_3.isChanged = true;
                        }
                    }
                }
                else {
                    var values = this._values;
                    if (values == null) {
                        values = [];
                        this._values = values;
                    }
                    var order = this._order;
                    var formatter = this.formatter;
                    if (formatter != null) {
                        // Update the value
                        this._value = formatter(newValues[newValues.length - 1]);
                        // Update the values
                        if (order === EShapeTagValueOrder.ASCENDING) {
                            for (var i = 0, imax = newValues.length; i < imax; ++i) {
                                values.push(formatter(newValues[i]));
                            }
                        }
                        else {
                            for (var i = 0, imax = newValues.length; i < imax; ++i) {
                                values.unshift(formatter(newValues[i]));
                            }
                        }
                    }
                    else {
                        // Update the value
                        this._value = newValues[newValues.length - 1];
                        // Update the values
                        if (order === EShapeTagValueOrder.ASCENDING) {
                            for (var i = 0, imax = newValues.length; i < imax; ++i) {
                                values.push(newValues[i]);
                            }
                        }
                        else {
                            for (var i = 0, imax = newValues.length; i < imax; ++i) {
                                values.unshift(newValues[i]);
                            }
                        }
                    }
                    // Remove the unnecessary values
                    var count = values.length - capacity;
                    if (0 < count) {
                        if (order === EShapeTagValueOrder.ASCENDING) {
                            for (var i = 0; i < count; ++i) {
                                values.shift();
                            }
                        }
                        else {
                            values.length = capacity;
                        }
                    }
                    // Tell the parent it's changed
                    var parent_4 = this.parent;
                    if (parent_4 != null) {
                        parent_4.isChanged = true;
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeTagValueImpl.prototype, "time", {
        get: function () {
            return this._time;
        },
        set: function (newTime) {
            var capacity = this._capacity;
            if (capacity <= 0) {
                if (this._time !== newTime) {
                    this._time = newTime;
                    var parent_5 = this.parent;
                    if (parent_5 != null) {
                        parent_5.isChanged = true;
                    }
                }
            }
            else {
                // Update the times
                var times = this._times;
                if (times == null) {
                    times = [];
                    this._times = times;
                }
                // Update the time
                this._time = newTime;
                // Update the times
                var order = this._order;
                if (order === EShapeTagValueOrder.ASCENDING) {
                    times.push(newTime);
                }
                else {
                    times.unshift(newTime);
                }
                // Remove the unnecessary times
                var count = times.length - capacity;
                if (0 < count) {
                    if (order === EShapeTagValueOrder.ASCENDING) {
                        for (var i = 0; i < count; ++i) {
                            times.shift();
                        }
                    }
                    else {
                        times.length = capacity;
                    }
                }
                // Tell the parent it's changed
                var parent_6 = this.parent;
                if (parent_6 != null) {
                    parent_6.isChanged = true;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeTagValueImpl.prototype, "times", {
        get: function () {
            var result = this._times;
            if (result == null) {
                result = [];
                this._times = result;
            }
            return result;
        },
        set: function (newTimes) {
            if (0 < newTimes.length) {
                var capacity = this._capacity;
                if (capacity <= 0) {
                    var newTime = newTimes[newTimes.length - 1];
                    if (this._time !== newTime) {
                        this._time = newTime;
                        var parent_7 = this.parent;
                        if (parent_7 != null) {
                            parent_7.isChanged = true;
                        }
                    }
                }
                else {
                    // Update the times
                    var times = this._times;
                    if (times == null) {
                        times = [];
                        this._times = times;
                    }
                    // Update the value
                    this._time = newTimes[newTimes.length - 1];
                    //
                    var order = this._order;
                    if (order === EShapeTagValueOrder.ASCENDING) {
                        for (var i = 0, imax = newTimes.length; i < imax; ++i) {
                            times.push(newTimes[i]);
                        }
                    }
                    else {
                        for (var i = 0, imax = newTimes.length; i < imax; ++i) {
                            times.unshift(newTimes[i]);
                        }
                    }
                    //
                    var count = times.length - capacity;
                    if (0 < count) {
                        if (order === EShapeTagValueOrder.ASCENDING) {
                            for (var i = 0; i < count; ++i) {
                                times.shift();
                            }
                        }
                        else {
                            times.length = capacity;
                        }
                    }
                    // Tell the parent it's changed
                    var parent_8 = this.parent;
                    if (parent_8 != null) {
                        parent_8.isChanged = true;
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeTagValueImpl.prototype, "capacity", {
        get: function () {
            return this._capacity;
        },
        set: function (capacity) {
            if (this._capacity < capacity) {
                this._capacity = capacity;
            }
            else if (capacity < this._capacity) {
                this._capacity = capacity;
                var isChanged = false;
                // Values
                var order = this._order;
                var values = this._values;
                if (values != null) {
                    var count = values.length - capacity;
                    if (0 < count) {
                        if (order === EShapeTagValueOrder.ASCENDING) {
                            for (var i = 0; i < count; ++i) {
                                values.shift();
                            }
                        }
                        else {
                            values.length = capacity;
                        }
                        isChanged = true;
                    }
                }
                // Times
                var times = this._times;
                if (times != null) {
                    var count = times.length - capacity;
                    if (0 < count) {
                        if (order === EShapeTagValueOrder.ASCENDING) {
                            for (var i = 0; i < count; ++i) {
                                times.shift();
                            }
                        }
                        else {
                            times.length = capacity;
                        }
                        isChanged = true;
                    }
                }
                if (isChanged) {
                    var parent_9 = this.parent;
                    if (parent_9 != null) {
                        parent_9.isChanged = true;
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeTagValueImpl.prototype, "order", {
        get: function () {
            return this._order;
        },
        set: function (order) {
            this._order = order;
        },
        enumerable: true,
        configurable: true
    });
    EShapeTagValueImpl.prototype.remove = function (index) {
        var isChanged = false;
        // Values
        var values = this._values;
        if (values != null) {
            if (0 <= index && index < values.length) {
                values.splice(index, 1);
                isChanged = true;
            }
        }
        // Times
        var times = this._times;
        if (times != null) {
            if (0 <= index && index < times.length) {
                times.splice(index, 1);
                isChanged = true;
            }
        }
        if (isChanged) {
            var parent_10 = this.parent;
            if (parent_10 != null) {
                parent_10.isChanged = true;
            }
        }
    };
    EShapeTagValueImpl.prototype.removeAll = function (indices) {
        var isChanged = false;
        var values = this._values;
        var times = this._times;
        var sorted = indices.slice(0).sort(INDEX_COMPARATOR);
        if (values != null) {
            if (times != null) {
                for (var i = sorted.length - 1; 0 <= i; --i) {
                    var index = sorted[i];
                    if (0 <= index) {
                        if (index < values.length) {
                            values.splice(index, 1);
                            isChanged = true;
                        }
                        if (index < times.length) {
                            times.splice(index, 1);
                            isChanged = true;
                        }
                    }
                }
            }
            else {
                for (var i = sorted.length - 1; 0 <= i; --i) {
                    var index = sorted[i];
                    if (0 <= index && index < values.length) {
                        values.splice(index, 1);
                        isChanged = true;
                    }
                }
            }
        }
        else {
            if (times != null) {
                for (var i = sorted.length - 1; 0 <= i; --i) {
                    var index = sorted[i];
                    if (0 <= index && index < times.length) {
                        times.splice(index, 1);
                        isChanged = true;
                    }
                }
            }
        }
        if (isChanged) {
            var parent_11 = this.parent;
            if (parent_11 != null) {
                parent_11.isChanged = true;
            }
        }
    };
    EShapeTagValueImpl.prototype.clear = function () {
        var isChanged = false;
        // Values
        var values = this._values;
        if (values != null) {
            values.length = 0;
            isChanged = true;
        }
        // Times
        var times = this._times;
        if (times != null) {
            times.length = 0;
            isChanged = true;
        }
        // Change flag
        if (isChanged) {
            var parent_12 = this.parent;
            if (parent_12 != null) {
                parent_12.isChanged = true;
            }
        }
    };
    /**
     * This method does not copy the `#values` and `#times` for the performance.
     *
     * @param target a copy target
     */
    EShapeTagValueImpl.prototype.copy = function (target) {
        this.id = target.id;
        this.initial = target.initial;
        this.format = target.format;
        this.formatter = target.formatter;
        this.range.copy(target.range);
        this._value = target.value;
        this._time = target.time;
        this._capacity = target.capacity;
        return this;
    };
    EShapeTagValueImpl.prototype.serialize = function (manager) {
        var idSerialized = manager.add(this.id);
        var initialSerialized = manager.add(this.initial);
        var formatSerialized = manager.add(this.format.trim());
        var rangeSerialized = this.range.serialize(manager);
        return manager.add("[" + idSerialized + "," + initialSerialized + "," + formatSerialized + "," + rangeSerialized + "," + this._capacity + "," + this._order + "]");
    };
    EShapeTagValueImpl.prototype.deserialize = function (target, manager) {
        var resources = manager.resources;
        if (0 <= target && target < resources.length) {
            var parsed = manager.tagValues.get(target);
            if (parsed == null) {
                parsed = JSON.parse(resources[target]);
                manager.tagValues.set(target, parsed);
            }
            this.id = resources[parsed[0]] || "";
            this.initial = resources[parsed[1]] || "";
            this.format = resources[parsed[2]] || "";
            this.range.deserialize(parsed[3], manager);
            this._capacity = parsed[4];
            this._order = parsed[5];
        }
        return this;
    };
    return EShapeTagValueImpl;
}());
export { EShapeTagValueImpl };
//# sourceMappingURL=e-shape-tag-value-impl.js.map