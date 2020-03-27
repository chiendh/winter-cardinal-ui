/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var EShapeTextOffsetImpl = /** @class */ (function () {
    function EShapeTextOffsetImpl(parent, horizontal, vertical) {
        this._parent = parent;
        this._horizontal = horizontal;
        this._vertical = vertical;
    }
    Object.defineProperty(EShapeTextOffsetImpl.prototype, "horizontal", {
        get: function () {
            return this._horizontal;
        },
        set: function (horizontal) {
            if (this._horizontal !== horizontal) {
                this._horizontal = horizontal;
                this._parent.updateUploaded();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeTextOffsetImpl.prototype, "vertical", {
        get: function () {
            return this._vertical;
        },
        set: function (vertical) {
            if (this._vertical !== vertical) {
                this._vertical = vertical;
                this._parent.updateUploaded();
            }
        },
        enumerable: true,
        configurable: true
    });
    EShapeTextOffsetImpl.prototype.copy = function (target) {
        if (target) {
            this.set(target.horizontal, target.vertical);
        }
    };
    EShapeTextOffsetImpl.prototype.set = function (horizontal, vertical) {
        var isChanged = false;
        if (horizontal != null && this._horizontal !== horizontal) {
            this._horizontal = horizontal;
            isChanged = true;
        }
        if (vertical != null && this._vertical !== vertical) {
            this._vertical = vertical;
            isChanged = true;
        }
        if (isChanged) {
            this._parent.updateUploaded();
        }
    };
    EShapeTextOffsetImpl.prototype.toObject = function () {
        return {
            horizontal: this._horizontal,
            vertical: this._vertical
        };
    };
    EShapeTextOffsetImpl.prototype.serialize = function (manager) {
        return manager.add("[" + this._horizontal + "," + this._vertical + "]");
    };
    EShapeTextOffsetImpl.prototype.deserialize = function (target, manager) {
        var resources = manager.resources;
        if (0 <= target && target < resources.length) {
            var parsed = manager.margins.get(target);
            if (parsed != null) {
                this.set(parsed[0], parsed[1]);
            }
            else {
                var deserialized = JSON.parse(resources[target]);
                manager.margins.set(target, deserialized);
                this.set(deserialized[0], deserialized[1]);
            }
        }
    };
    return EShapeTextOffsetImpl;
}());
export { EShapeTextOffsetImpl };
//# sourceMappingURL=e-shape-text-offset-impl.js.map