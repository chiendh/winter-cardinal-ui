/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var EShapeTextAlignImpl = /** @class */ (function () {
    function EShapeTextAlignImpl(parent, horizontal, vertical) {
        this._parent = parent;
        this._horizontal = horizontal;
        this._vertical = vertical;
    }
    Object.defineProperty(EShapeTextAlignImpl.prototype, "horizontal", {
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
    Object.defineProperty(EShapeTextAlignImpl.prototype, "vertical", {
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
    EShapeTextAlignImpl.prototype.copy = function (target) {
        if (target) {
            this.set(target.horizontal, target.vertical);
        }
    };
    EShapeTextAlignImpl.prototype.set = function (horizontal, vertical) {
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
    EShapeTextAlignImpl.prototype.toObject = function () {
        return {
            horizontal: this._horizontal,
            vertical: this._vertical
        };
    };
    EShapeTextAlignImpl.prototype.serialize = function (manager) {
        return manager.add("[" + this._horizontal + "," + this._vertical + "]");
    };
    EShapeTextAlignImpl.prototype.deserialize = function (target, manager) {
        var resources = manager.resources;
        if (0 <= target && target < resources.length) {
            var parsed = manager.aligns.get(target);
            if (parsed != null) {
                this.set(parsed[0], parsed[1]);
            }
            else {
                var deserialized = JSON.parse(resources[target]);
                manager.aligns.set(target, deserialized);
                this.set(deserialized[0], deserialized[1]);
            }
        }
    };
    return EShapeTextAlignImpl;
}());
export { EShapeTextAlignImpl };
//# sourceMappingURL=e-shape-text-align-impl.js.map