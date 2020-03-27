/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeTextStyle, EShapeTextWeight } from "../e-shape-text";
import { EShapeTextDirection } from "../e-shape-text-direction";
import { EShapeGroupTextAlignViewer } from "./e-shape-group-text-align-viewer";
import { EShapeGroupTextOffsetViewer } from "./e-shape-group-text-offset-viewer";
import { EShapeGroupTextOutlineViewer } from "./e-shape-group-text-outline-viewer";
import { EShapeGroupTextPaddingViewer } from "./e-shape-group-text-padding-viewer";
import { EShapeGroupTextSpacingViewer } from "./e-shape-group-text-spacing-viewer";
var EShapeGroupTextViewer = /** @class */ (function () {
    function EShapeGroupTextViewer() {
        this.align = new EShapeGroupTextAlignViewer();
        this.offset = new EShapeGroupTextOffsetViewer();
        this.outline = new EShapeGroupTextOutlineViewer();
        this.spacing = new EShapeGroupTextSpacingViewer();
        this.padding = new EShapeGroupTextPaddingViewer();
    }
    Object.defineProperty(EShapeGroupTextViewer.prototype, "enable", {
        get: function () {
            return true;
        },
        set: function (enable) {
            // DO NOTHING
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupTextViewer.prototype, "value", {
        get: function () {
            return "";
        },
        set: function (value) {
            // DO NOTHING
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupTextViewer.prototype, "color", {
        get: function () {
            return 0x000000;
        },
        set: function (color) {
            // DO NOTHING
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupTextViewer.prototype, "alpha", {
        get: function () {
            return 1.0;
        },
        set: function (alpha) {
            // DO NOTHING
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupTextViewer.prototype, "family", {
        get: function () {
            return "auto";
        },
        set: function (family) {
            // DO NOTHING
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupTextViewer.prototype, "size", {
        get: function () {
            return 24;
        },
        set: function (size) {
            // DO NOTHING
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupTextViewer.prototype, "weight", {
        get: function () {
            return EShapeTextWeight.NORMAL;
        },
        set: function (weight) {
            // DO NOTHING
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupTextViewer.prototype, "style", {
        get: function () {
            return EShapeTextStyle.NORMAL;
        },
        set: function (style) {
            // DO NOTHING
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupTextViewer.prototype, "direction", {
        get: function () {
            return EShapeTextDirection.LEFT_TO_RIGHT;
        },
        set: function (direction) {
            // DO NOTHING
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupTextViewer.prototype, "clipping", {
        get: function () {
            return false;
        },
        set: function (clipping) {
            // DO NOTHING
        },
        enumerable: true,
        configurable: true
    });
    EShapeGroupTextViewer.prototype.copy = function (target) {
        return this;
    };
    EShapeGroupTextViewer.prototype.set = function (value, color, alpha, family, size, weight, style, direction, clipping) {
        return this;
    };
    EShapeGroupTextViewer.prototype.toObject = function () {
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
    EShapeGroupTextViewer.prototype.serialize = function (manager) {
        return -1;
    };
    EShapeGroupTextViewer.prototype.deserialize = function (target, manager) {
        //
    };
    return EShapeGroupTextViewer;
}());
export { EShapeGroupTextViewer };
//# sourceMappingURL=e-shape-group-text-viewer.js.map