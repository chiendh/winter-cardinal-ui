/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { UtilRgb } from "./util/util-rgb";
var DDiagramCanvasEditorBackground = /** @class */ (function () {
    function DDiagramCanvasEditorBackground(target, base) {
        this._target = target;
        this._base = base;
    }
    DDiagramCanvasEditorBackground.prototype.getTheme = function () {
        return this._target.getTheme();
    };
    DDiagramCanvasEditorBackground.prototype.setTheme = function (theme) {
        this._target.setTheme(theme);
    };
    DDiagramCanvasEditorBackground.prototype.getBaseColor = function () {
        return this._base;
    };
    DDiagramCanvasEditorBackground.prototype.setBaseColor = function (baseColor) {
        this._base = baseColor;
    };
    DDiagramCanvasEditorBackground.prototype.getColor = function (state) {
        var target = this._target;
        var base = this._base;
        var color = target.getColor(state);
        if (base != null) {
            if (color != null) {
                return UtilRgb.blend(base, color, target.getAlpha(state));
            }
            return base;
        }
        return color;
    };
    Object.defineProperty(DDiagramCanvasEditorBackground.prototype, "color", {
        get: function () {
            return this._target.color;
        },
        set: function (color) {
            this._target.color = color;
        },
        enumerable: true,
        configurable: true
    });
    DDiagramCanvasEditorBackground.prototype.getAlpha = function (state) {
        var base = this._base;
        if (base != null) {
            return 1;
        }
        return this._target.getAlpha(state);
    };
    Object.defineProperty(DDiagramCanvasEditorBackground.prototype, "alpha", {
        get: function () {
            return this._target.alpha;
        },
        set: function (alpha) {
            this._target.alpha = alpha;
        },
        enumerable: true,
        configurable: true
    });
    return DDiagramCanvasEditorBackground;
}());
export { DDiagramCanvasEditorBackground };
//# sourceMappingURL=d-diagram-canvas-editor-background.js.map