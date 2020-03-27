/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeTextStyle, EShapeTextWeight } from "../e-shape-text";
import { EShapeTextAlignHorizontal } from "../e-shape-text-align-horizontal";
import { EShapeTextAlignVertical } from "../e-shape-text-align-vertical";
import { EShapeTextDirection } from "../e-shape-text-direction";
import { EShapeTextAlignImpl } from "./e-shape-text-align-impl";
import { EShapeTextOffsetImpl } from "./e-shape-text-offset-impl";
import { EShapeTextOutlineImpl } from "./e-shape-text-outline-impl";
var EShapeTextImpl = /** @class */ (function () {
    function EShapeTextImpl(parent, value, color, alpha, family, size) {
        this._parent = parent;
        this._enable = true;
        this._value = value;
        this._color = color;
        this._alpha = alpha;
        this._family = family;
        this._size = size;
        this._weight = EShapeTextWeight.NORMAL;
        this.align = new EShapeTextAlignImpl(parent, EShapeTextAlignHorizontal.CENTER, EShapeTextAlignVertical.MIDDLE);
        this.offset = new EShapeTextOffsetImpl(parent, 0, 0);
        this._style = EShapeTextStyle.NORMAL;
        this.spacing = new EShapeTextOffsetImpl(parent, 0, 0);
        this.outline = new EShapeTextOutlineImpl(parent, false, 0xffffff, 1.0, 0.5);
        this._direction = EShapeTextDirection.LEFT_TO_RIGHT;
        this.padding = new EShapeTextOffsetImpl(parent, 10, 10);
        this._clipping = false;
    }
    Object.defineProperty(EShapeTextImpl.prototype, "enable", {
        get: function () {
            return this._enable;
        },
        set: function (enable) {
            if (this._enable !== enable) {
                this._enable = enable;
                this._parent.updateUploaded();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeTextImpl.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (this._value !== value) {
                this._value = value;
                // Compatibility check
                var parent_1 = this._parent;
                var uploaded = parent_1.uploaded;
                if (uploaded == null || !uploaded.isCompatible(parent_1)) {
                    this.atlas = undefined;
                    parent_1.toDirty();
                    return;
                }
                // Character code check
                var atlas = this.atlas;
                var characters = atlas && atlas.characters;
                if (characters != null) {
                    for (var i = 0, imax = value.length; i < imax; ++i) {
                        var char = value[i];
                        if (!(char in characters)) {
                            this.atlas = undefined;
                            parent_1.toDirty();
                            return;
                        }
                    }
                }
                else {
                    this.atlas = undefined;
                    parent_1.toDirty();
                    return;
                }
                // Update uploaded
                parent_1.updateUploaded();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeTextImpl.prototype, "family", {
        get: function () {
            return this._family;
        },
        set: function (family) {
            if (this._family !== family) {
                this._family = family;
                this._parent.toDirty();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeTextImpl.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            if (this._color !== color) {
                this._color = color;
                this._parent.updateUploaded();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeTextImpl.prototype, "alpha", {
        get: function () {
            return this._alpha;
        },
        set: function (alpha) {
            if (this._alpha !== alpha) {
                this._alpha = alpha;
                this._parent.updateUploaded();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeTextImpl.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (size) {
            if (this._size !== size) {
                this._size = size;
                this._parent.updateUploaded();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeTextImpl.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (weight) {
            if (this._weight !== weight) {
                this._weight = weight;
                this._parent.updateUploaded();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeTextImpl.prototype, "style", {
        get: function () {
            return this._style;
        },
        set: function (style) {
            if (this._style !== style) {
                this._style = style;
                this._parent.updateUploaded();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeTextImpl.prototype, "direction", {
        get: function () {
            return this._direction;
        },
        set: function (direction) {
            if (this._direction !== direction) {
                this._direction = direction;
                this._parent.updateUploaded();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeTextImpl.prototype, "clipping", {
        get: function () {
            return this._clipping;
        },
        set: function (clipping) {
            if (this._clipping !== clipping) {
                this._clipping = clipping;
                this._parent.updateUploaded();
            }
        },
        enumerable: true,
        configurable: true
    });
    EShapeTextImpl.prototype.copy = function (target) {
        if (target) {
            this.set(target.value, target.color, target.alpha, target.family, target.size, target.weight, target.style, target.direction, target.clipping);
            this.align.copy(target.align);
            this.offset.copy(target.offset);
            this.outline.copy(target.outline);
            this.spacing.copy(target.spacing);
            this.padding.copy(target.padding);
        }
        return this;
    };
    EShapeTextImpl.prototype.set = function (value, color, alpha, family, size, weight, style, direction, clipping) {
        var isChangedDirty = false;
        var isChangedUploaded = false;
        if (value != null && this._value !== value) {
            this._value = value;
            isChangedDirty = true;
        }
        if (color != null && this._color !== color) {
            this._color = color;
            isChangedUploaded = true;
        }
        if (alpha != null && this._alpha !== alpha) {
            this._alpha = alpha;
            isChangedUploaded = true;
        }
        if (family != null && this._family !== family) {
            this._family = family;
            isChangedDirty = true;
        }
        if (size != null && this._size !== size) {
            this._size = size;
            isChangedUploaded = true;
        }
        if (weight != null && this._weight !== weight) {
            this._weight = weight;
            isChangedUploaded = true;
        }
        if (style != null && this._style !== style) {
            this._style = style;
            isChangedUploaded = true;
        }
        if (direction != null && this._direction !== direction) {
            this._direction = direction;
            isChangedUploaded = true;
        }
        if (clipping != null && this._clipping !== clipping) {
            this._clipping = clipping;
            isChangedUploaded = true;
        }
        if (isChangedDirty) {
            this._parent.toDirty();
        }
        else if (isChangedUploaded) {
            this._parent.updateUploaded();
        }
        return this;
    };
    EShapeTextImpl.prototype.toObject = function () {
        return {
            value: this._value,
            color: this._color,
            alpha: this._alpha,
            family: this._family,
            size: this._size,
            weight: this._weight,
            align: this.align.toObject(),
            offset: this.offset.toObject(),
            style: this._style,
            outline: this.outline.toObject(),
            direction: this._direction,
            spacing: this.spacing.toObject(),
            padding: this.padding.toObject(),
            clipping: this._clipping
        };
    };
    EShapeTextImpl.prototype.serialize = function (manager) {
        var alignSerialized = this.align.serialize(manager);
        var offsetSerialized = this.offset.serialize(manager);
        var outlineSerialized = this.outline.serialize(manager);
        var spacingSerialized = this.spacing.serialize(manager);
        var paddingSerialized = this.padding.serialize(manager);
        var serialized = "[" + manager.add(this._value) + "," + this._color + "," + this._alpha + "," +
            (manager.add(this._family) + "," + this._size + "," + this._weight + "," + alignSerialized + ",") +
            (offsetSerialized + "," + this._style + "," + outlineSerialized + "," + spacingSerialized + ",") +
            (this._direction + "," + paddingSerialized + "," + (this._clipping ? 1 : 0) + "]");
        return manager.add(serialized);
    };
    EShapeTextImpl.prototype.deserialize = function (target, manager) {
        var resources = manager.resources;
        if (0 <= target && target < resources.length) {
            var parsed = manager.texts.get(target);
            if (parsed == null) {
                parsed = JSON.parse(resources[target]);
                manager.texts.set(target, parsed);
            }
            this.set(resources[parsed[0]] || "", parsed[1], parsed[2], resources[parsed[3]] || "auto", parsed[4], parsed[5], parsed[8], parsed[11], (parsed[13] !== 0));
            this.align.deserialize(parsed[6], manager);
            this.offset.deserialize(parsed[7], manager);
            this.outline.deserialize(parsed[9], manager);
            this.spacing.deserialize(parsed[10], manager);
            this.padding.deserialize(parsed[12], manager);
        }
    };
    return EShapeTextImpl;
}());
export { EShapeTextImpl };
//# sourceMappingURL=e-shape-text-impl.js.map