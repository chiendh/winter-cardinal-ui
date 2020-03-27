/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { Point, Rectangle } from "pixi.js";
import { DApplications } from "../../d-applications";
import { DynamicSDFFontAtlas } from "../../util/dynamic-sdf-font-atlas";
import { UtilKeyboardEvent } from "../../util/util-keyboard-event";
import { EShapeTextWeight } from "../e-shape-text";
var EShapeActionRuntimeMiscInputData = /** @class */ (function () {
    function EShapeActionRuntimeMiscInputData() {
        var _this = this;
        this.input = null;
        this.shape = null;
        this.value = "";
        this.point = new Point();
        this.rect = new Rectangle();
        this._onInputKeyDownBound = function (e) {
            _this.onInputKeyDown(e);
        };
        this._onInputBlurBound = function (e) {
            _this.onInputBlur(e);
        };
        this._updateInputBound = function () {
            _this.updateInput();
        };
        this._onInputChangeBound = function () {
            _this.onInputChange();
        };
        this._onInputInputBound = function (e) {
            _this.onInputInput(e);
        };
        this._updateInputBoundRenderer = null;
    }
    EShapeActionRuntimeMiscInputData.prototype.getInput = function (layer) {
        if (this.input == null) {
            layer.application.getRootElement().appendChild(this.input = this.createInput());
        }
        return this.input;
    };
    EShapeActionRuntimeMiscInputData.prototype.createInput = function () {
        var result = document.createElement("input");
        result.setAttribute("spellcheck", "false");
        return result;
    };
    EShapeActionRuntimeMiscInputData.prototype.getInputType = function () {
        return "text";
    };
    EShapeActionRuntimeMiscInputData.prototype.initInput = function (shape, input, value) {
        input.type = this.getInputType();
        input.value = value;
        input.addEventListener("keydown", this._onInputKeyDownBound);
        input.addEventListener("blur", this._onInputBlurBound);
        input.addEventListener("change", this._onInputChangeBound);
        input.addEventListener("input", this._onInputInputBound);
        // Style
        input.setAttribute("style", this.getInputStyle(shape));
        // ReadOnly
        if (shape.readonly) {
            input.setAttribute("readonly", "readonly");
        }
        else {
            input.removeAttribute("readonly");
        }
        // Disabled
        if (shape.disabled) {
            input.setAttribute("disabled", "disabled");
        }
        else {
            input.removeAttribute("disabled");
        }
    };
    EShapeActionRuntimeMiscInputData.prototype.getInputStyleBackground = function () {
        return "background-color: transparent;";
    };
    EShapeActionRuntimeMiscInputData.prototype.getInputStyleBorder = function () {
        return "border: none; box-sizing: border-box;";
    };
    EShapeActionRuntimeMiscInputData.prototype.getInputStylePadding = function (shape, scale) {
        var padding = shape.text.padding;
        var paddingVertical = 0;
        var paddingHorizontal = padding.horizontal * scale;
        return "padding: " + paddingVertical + "px " + paddingHorizontal + "px " + paddingVertical + "px " + paddingHorizontal + "px;";
    };
    EShapeActionRuntimeMiscInputData.prototype.getInputStyleOutline = function () {
        return "outline: none;";
    };
    EShapeActionRuntimeMiscInputData.prototype.getInputStylePosition = function (rect, matrix) {
        return "position: absolute;" +
            ("left: " + rect.x + "px;") +
            ("top: " + rect.y + "px;") +
            ("width: " + rect.width + "px;") +
            ("height: " + rect.height + "px;") +
            ("line-height: " + rect.height + "px;") +
            ("transform: matrix(" + matrix.a + "," + matrix.b + "," + matrix.c + "," + matrix.d + "," + matrix.tx + "," + matrix.ty + ");");
    };
    EShapeActionRuntimeMiscInputData.prototype.getInputStyleText = function (shape, rect, scale) {
        var text = shape.text;
        return "font-family: " + DynamicSDFFontAtlas.toFontFamily(text.family) + ";" +
            ("font-size: " + text.size * scale + "px;") +
            ("font-weight: " + (text.weight === EShapeTextWeight.NORMAL ? "normal" : "bold") + ";") +
            ("color: #" + text.color.toString(16) + ";");
    };
    EShapeActionRuntimeMiscInputData.prototype.getInputStyleMargin = function (shape, rect, scale) {
        return "margin: 0;";
    };
    EShapeActionRuntimeMiscInputData.prototype.getInputStyle = function (shape) {
        var pivot = shape.transform.pivot;
        var size = shape.size;
        var sizeX = size.x;
        var sizeY = size.y;
        var rect = this.rect;
        rect.x = -0.5 * sizeX + pivot.x;
        rect.y = -0.5 * sizeY + pivot.y;
        rect.width = sizeX;
        rect.height = sizeY;
        shape.updateTransform();
        var scale = 1.0;
        var worldTransform = shape.transform.worldTransform;
        return this.getInputStylePosition(rect, worldTransform) +
            this.getInputStyleMargin(shape, rect, scale) +
            this.getInputStyleText(shape, rect, scale) +
            this.getInputStyleBackground() +
            this.getInputStyleBorder() +
            this.getInputStylePadding(shape, scale) +
            this.getInputStyleOutline();
    };
    EShapeActionRuntimeMiscInputData.prototype.onInputKeyDown = function (e) {
        if (UtilKeyboardEvent.isFocusKey(e)) {
            var shape = this.shape;
            if (shape != null) {
                this.onInputChange();
                this.hide();
                var layer = DApplications.getLayer(shape);
                if (layer) {
                    var focusController = layer.getFocusController();
                    var direction = UtilKeyboardEvent.getFocusDirection(e);
                    var focusable = focusController.findFocusable(shape, false, false, direction);
                    if (focusable != null) {
                        layer.view.focus();
                        e.preventDefault();
                        focusController.setFocused(focusable, true, true);
                    }
                }
            }
        }
        else if (UtilKeyboardEvent.isOkKey(e)) {
            this.onInputChange();
            this.hide();
        }
    };
    EShapeActionRuntimeMiscInputData.prototype.onInputBlur = function (e) {
        this.onInputChange();
        this.hide();
    };
    EShapeActionRuntimeMiscInputData.prototype.onInputInput = function (e) {
        if (e.target instanceof HTMLInputElement) {
            var shape = this.shape;
            var onInput = this.onInput;
            if (shape != null && onInput != null) {
                onInput(shape, e.target.value);
            }
        }
    };
    EShapeActionRuntimeMiscInputData.prototype.updateInput = function () {
        var shape = this.shape;
        if (shape != null) {
            if (shape.visible) {
                var input = this.input;
                if (input != null) {
                    input.setAttribute("style", this.getInputStyle(shape));
                }
            }
            else {
                this.hide();
            }
        }
    };
    EShapeActionRuntimeMiscInputData.prototype.isShown = function (shape) {
        return (this.shape === shape);
    };
    EShapeActionRuntimeMiscInputData.prototype.show = function (newShape, value, onChange, onInput) {
        var oldShape = this.shape;
        if (oldShape != null && oldShape !== newShape) {
            this.hide();
        }
        if (this.shape == null) {
            this.shape = newShape;
            this.value = value;
            this.onChange = onChange;
            this.onInput = onInput;
            var text = newShape.text;
            if (text != null) {
                text.enable = false;
            }
            var layer = DApplications.getLayer(newShape);
            if (layer) {
                var input = this.getInput(layer);
                if (input) {
                    this.initInput(newShape, input, value);
                    var updateInputBound = this._updateInputBound;
                    var renderer = this._updateInputBoundRenderer;
                    if (renderer != null) {
                        renderer.off("postrender", updateInputBound);
                    }
                    this._updateInputBoundRenderer = layer.renderer;
                    layer.renderer.on("postrender", updateInputBound);
                    input.style.display = "";
                    input.focus();
                    input.select();
                }
                layer.update();
            }
        }
    };
    EShapeActionRuntimeMiscInputData.prototype.hide = function () {
        var shape = this.shape;
        if (shape != null) {
            this.shape = null;
            this.value = "";
            var text = shape.text;
            if (text != null) {
                text.enable = true;
            }
            var input = this.input;
            if (input != null) {
                input.removeEventListener("keydown", this._onInputKeyDownBound);
                input.removeEventListener("blur", this._onInputBlurBound);
                input.removeEventListener("change", this._onInputChangeBound);
                input.removeEventListener("input", this._onInputInputBound);
                input.style.display = "none";
            }
            var renderer = this._updateInputBoundRenderer;
            if (renderer != null) {
                this._updateInputBoundRenderer = null;
                renderer.off("postrender", this._updateInputBound);
            }
            DApplications.update(shape);
        }
    };
    EShapeActionRuntimeMiscInputData.prototype.onInputChange = function () {
        var shape = this.shape;
        var input = this.input;
        var onChange = this.onChange;
        if (shape != null && input != null && onChange != null) {
            var newValue = input.value;
            if (this.value !== newValue) {
                onChange(shape, newValue);
            }
        }
    };
    return EShapeActionRuntimeMiscInputData;
}());
export { EShapeActionRuntimeMiscInputData };
//# sourceMappingURL=e-shape-action-runtime-misc-input-data.js.map