/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeTagValueRangeType } from "../e-shape-tag-value-range";
var EShapeTagValueRangeImpl = /** @class */ (function () {
    function EShapeTagValueRangeImpl() {
        this._type = EShapeTagValueRangeType.NONE;
        this._from = 0;
        this._to = 1;
    }
    Object.defineProperty(EShapeTagValueRangeImpl.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (type) {
            if (this._type !== type) {
                this._type = type;
                var parent_1 = this.parent;
                if (parent_1 != null) {
                    parent_1.isChanged = true;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeTagValueRangeImpl.prototype, "from", {
        get: function () {
            return this._from;
        },
        set: function (from) {
            if (this._from !== from) {
                this._from = from;
                var parent_2 = this.parent;
                if (parent_2 != null) {
                    parent_2.isChanged = true;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeTagValueRangeImpl.prototype, "to", {
        get: function () {
            return this._to;
        },
        set: function (to) {
            if (this._to !== to) {
                this._to = to;
                var parent_3 = this.parent;
                if (parent_3 != null) {
                    parent_3.isChanged = true;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    EShapeTagValueRangeImpl.prototype.set = function (from, to) {
        var result = false;
        if (from !== undefined && to !== undefined) {
            if (from !== null && to !== null) {
                var type = (this._type | EShapeTagValueRangeType.FROM) | EShapeTagValueRangeType.TO;
                if (this._type !== type || this._from !== from || this._to !== to) {
                    this._type = type;
                    this._from = from;
                    this._to = to;
                    result = true;
                }
            }
            else if (from !== null) {
                var type = (this._type | EShapeTagValueRangeType.FROM) & (~EShapeTagValueRangeType.TO);
                if (this._type !== type || this._from !== from) {
                    this._type = type;
                    this._from = from;
                    result = true;
                }
            }
            else if (to !== null) {
                var type = (this._type | EShapeTagValueRangeType.TO) & (~EShapeTagValueRangeType.FROM);
                if (this._type !== type || this._from !== from) {
                    this._type = type;
                    this._to = to;
                    result = true;
                }
            }
            else {
                var type = this._type & (~(EShapeTagValueRangeType.TO | EShapeTagValueRangeType.FROM));
                if (this._type !== type) {
                    this._type = type;
                    result = true;
                }
            }
        }
        else if (from !== undefined) {
            if (from !== null) {
                var type = this._type | EShapeTagValueRangeType.FROM;
                if (this._type !== type || this._from !== from) {
                    this._type = type;
                    this._from = from;
                    result = true;
                }
            }
            else {
                var type = this._type & (~EShapeTagValueRangeType.FROM);
                if (this._type !== type) {
                    this._type = type;
                    result = true;
                }
            }
        }
        else if (to !== undefined) {
            if (to !== null) {
                var type = this._type | EShapeTagValueRangeType.TO;
                if (this._type !== type || this._to !== to) {
                    this._type = type;
                    this._to = to;
                    result = true;
                }
            }
            else {
                var type = this._type & (~EShapeTagValueRangeType.TO);
                if (this._type !== type) {
                    this._type = type;
                    result = true;
                }
            }
        }
        if (result) {
            var parent_4 = this.parent;
            if (parent_4 != null) {
                parent_4.isChanged = true;
            }
        }
        return result;
    };
    EShapeTagValueRangeImpl.prototype.normalize = function (value) {
        var type = this._type;
        var from = this._from;
        var to = this._to;
        switch (type) {
            case EShapeTagValueRangeType.FROM_TO:
                return (value - from) / (to - from);
            case EShapeTagValueRangeType.FROM:
                return value - from;
            case EShapeTagValueRangeType.TO:
                return to - value;
            case EShapeTagValueRangeType.NONE:
            default:
                return value;
        }
    };
    EShapeTagValueRangeImpl.prototype.isEquals = function (target) {
        return (this._type === target.type &&
            this._from === target.from &&
            this._to === target.to);
    };
    EShapeTagValueRangeImpl.prototype.copy = function (target) {
        return this.copy_(target.type, target.from, target.to);
    };
    EShapeTagValueRangeImpl.prototype.copy_ = function (type, from, to) {
        var isChanged = false;
        if (this._type !== type) {
            this._type = type;
            isChanged = true;
        }
        if (this._from !== from) {
            this._from = from;
            isChanged = true;
        }
        if (this._to !== to) {
            this._to = to;
            isChanged = true;
        }
        if (isChanged) {
            var parent_5 = this.parent;
            if (parent_5 != null) {
                parent_5.isChanged = true;
            }
        }
        return this;
    };
    EShapeTagValueRangeImpl.prototype.toObject = function () {
        return {
            type: this.type,
            from: this.from,
            to: this.to
        };
    };
    EShapeTagValueRangeImpl.prototype.serialize = function (manager) {
        var serialized = "[" + this._type + "," + this._from + "," + this._to + "]";
        return manager.add(serialized);
    };
    EShapeTagValueRangeImpl.prototype.deserialize = function (target, manager) {
        var resources = manager.resources;
        if (0 <= target && target < resources.length) {
            var parsed = manager.ranges.get(target);
            if (parsed != null) {
                this.copy_(parsed[0], parsed[1], parsed[2]);
            }
            else {
                var deserialized = JSON.parse(resources[target]);
                manager.ranges.set(target, deserialized);
                this.copy_(deserialized[0], deserialized[1], deserialized[2]);
            }
        }
    };
    return EShapeTagValueRangeImpl;
}());
export { EShapeTagValueRangeImpl };
//# sourceMappingURL=e-shape-tag-value-range-impl.js.map