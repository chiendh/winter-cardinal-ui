/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeTextStyle, EShapeTextWeight } from "../e-shape-text";
import { EShapeTextDirection } from "../e-shape-text-direction";
import { EShapeGroupTextAlignEditor } from "./e-shape-group-text-align-editor";
import { EShapeGroupTextOffsetEditor } from "./e-shape-group-text-offset-editor";
import { EShapeGroupTextOutlineEditor } from "./e-shape-group-text-outline-editor";
import { EShapeGroupTextPaddingEditor } from "./e-shape-group-text-padding-editor";
import { EShapeGroupTextSpacingEditor } from "./e-shape-group-text-spacing-editor";
var EShapeGroupTextEditor = /** @class */ (function () {
    function EShapeGroupTextEditor(parent) {
        this._parent = parent;
        this.align = new EShapeGroupTextAlignEditor(parent);
        this.offset = new EShapeGroupTextOffsetEditor(parent);
        this.outline = new EShapeGroupTextOutlineEditor(parent);
        this.spacing = new EShapeGroupTextSpacingEditor(parent);
        this.padding = new EShapeGroupTextPaddingEditor(parent);
    }
    Object.defineProperty(EShapeGroupTextEditor.prototype, "enable", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                return children[children.length - 1].text.enable;
            }
            return true;
        },
        set: function (enable) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].text.enable = enable;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupTextEditor.prototype, "value", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                return children[children.length - 1].text.value;
            }
            return "";
        },
        set: function (value) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].text.value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupTextEditor.prototype, "color", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                return children[children.length - 1].text.color;
            }
            return 0x000000;
        },
        set: function (color) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].text.color = color;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupTextEditor.prototype, "alpha", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                return children[children.length - 1].text.alpha;
            }
            return 1.0;
        },
        set: function (alpha) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].text.alpha = alpha;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupTextEditor.prototype, "family", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                return children[children.length - 1].text.family;
            }
            return "auto";
        },
        set: function (family) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].text.family = family;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupTextEditor.prototype, "size", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                return children[children.length - 1].text.size;
            }
            return 24;
        },
        set: function (size) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].text.size = size;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupTextEditor.prototype, "weight", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                return children[children.length - 1].text.weight;
            }
            return EShapeTextWeight.NORMAL;
        },
        set: function (weight) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].text.weight = weight;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupTextEditor.prototype, "style", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                return children[children.length - 1].text.style;
            }
            return EShapeTextStyle.NORMAL;
        },
        set: function (style) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].text.style = style;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupTextEditor.prototype, "direction", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                return children[children.length - 1].text.direction;
            }
            return 0;
        },
        set: function (direction) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].text.direction = direction;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupTextEditor.prototype, "clipping", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                return children[children.length - 1].text.clipping;
            }
            return false;
        },
        set: function (clipping) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].text.clipping = clipping;
            }
        },
        enumerable: true,
        configurable: true
    });
    EShapeGroupTextEditor.prototype.copy = function (target) {
        var children = this._parent.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            children[i].text.copy(target);
        }
        return this;
    };
    EShapeGroupTextEditor.prototype.set = function (value, color, alpha, family, size, weight, style, direction) {
        var children = this._parent.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            children[i].text.set(value, color, alpha, family, size, weight, style, direction);
        }
        return this;
    };
    EShapeGroupTextEditor.prototype.toObject = function () {
        var children = this._parent.children;
        if (0 < children.length) {
            return children[children.length - 1].text.toObject();
        }
        return {
            value: "",
            color: 0x000000,
            alpha: 1.0,
            family: "auto",
            size: 24,
            weight: EShapeTextWeight.NORMAL,
            align: this.align.toObject(),
            offset: this.offset.toObject(),
            style: EShapeTextStyle.NORMAL,
            outline: this.outline.toObject(),
            spacing: this.spacing.toObject(),
            direction: EShapeTextDirection.LEFT_TO_RIGHT,
            padding: this.padding.toObject(),
            clipping: false
        };
    };
    EShapeGroupTextEditor.prototype.serialize = function (manager) {
        return -1;
    };
    EShapeGroupTextEditor.prototype.deserialize = function (target, manager) {
        //
    };
    return EShapeGroupTextEditor;
}());
export { EShapeGroupTextEditor };
//# sourceMappingURL=e-shape-group-text-editor.js.map