/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Text } from "pixi.js";
import { DAlignHorizontal } from "./d-align-horizontal";
import { DAlignVertical } from "./d-align-vertical";
import { DApplications } from "./d-applications";
import { DBase } from "./d-base";
import { DBaseOverflowMaskSimple } from "./d-base-overflow-mask-simple";
import { DDynamicText } from "./d-dynamic-text";
import { isFunction } from "./util/is-function";
import { isString } from "./util/is-string";
// Option parser
var isOverflowMaskEnabled = function (theme, options) {
    if (options && options.mask != null) {
        return options.mask;
    }
    return theme.isOverflowMaskEnabled();
};
var toTextValue = function (theme, options) {
    if (options && options.text && options.text.value !== undefined) {
        return options.text.value;
    }
    return theme.newTextValue();
};
var toTextStyle = function (theme, options, state) {
    if (options && options.text && options.text.style != null) {
        var style = options.text.style;
        var fill = style.fill != null ? style.fill : theme.getColor(state);
        var fontSize = style.fontSize != null ? style.fontSize : theme.getFontSize();
        var fontFamily = style.fontFamily != null ? style.fontFamily : theme.getFontFamilly();
        var fontWeight = style.fontWeight != null ? style.fontWeight : theme.getFontWeight();
        var fontStyle = style.fontStyle != null ? style.fontStyle : theme.getFontStyle();
        var fontVariant = style.fontVariant != null ? style.fontVariant : theme.getFontVariant();
        var clipping = style.clipping != null ? style.clipping : theme.getTextStyleClipping();
        return {
            fill: fill,
            fontSize: fontSize,
            fontFamily: fontFamily,
            fontWeight: fontWeight,
            fontStyle: fontStyle,
            fontVariant: fontVariant,
            clipping: clipping
        };
    }
    return {
        fill: theme.getColor(state),
        fontSize: theme.getFontSize(),
        fontFamily: theme.getFontFamilly(),
        fontWeight: theme.getFontWeight(),
        fontStyle: theme.getFontStyle(),
        fontVariant: theme.getFontVariant(),
        clipping: theme.getTextStyleClipping()
    };
};
var toTextAlign = function (theme, options) {
    if (options && options.text && options.text.align) {
        var align = options.text.align;
        var vertical = (align.vertical != null ?
            (isString(align.vertical) ? DAlignVertical[align.vertical] : align.vertical) :
            theme.getTextAlignVertical());
        var horizontal = (align.horizontal != null ?
            (isString(align.horizontal) ? DAlignHorizontal[align.horizontal] : align.horizontal) :
            theme.getTextAlignHorizontal());
        return {
            vertical: vertical,
            horizontal: horizontal
        };
    }
    return {
        vertical: theme.getTextAlignVertical(),
        horizontal: theme.getTextAlignHorizontal()
    };
};
var toTextFormatter = function (theme, options) {
    if (options && options.text && options.text.formatter) {
        return options.text.formatter;
    }
    return theme.getTextFormatter();
};
var toTextDynamic = function (theme, options) {
    if (options && options.text && options.text.dynamic != null) {
        return options.text.dynamic;
    }
    return theme.isTextDynamic();
};
var DTextBase = /** @class */ (function (_super) {
    __extends(DTextBase, _super);
    function DTextBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DTextBase.prototype.init = function (options) {
        _super.prototype.init.call(this, options);
        this._text = null;
        var theme = this.theme;
        this._textValue = toTextValue(theme, options);
        this._textValueComputed = this.computeTextValue();
        this._textColor = (options && options.text && options.text.color);
        this._textAlpha = (options && options.text && options.text.alpha);
        this._textStyle = toTextStyle(theme, options, this.state);
        this._textAlign = toTextAlign(theme, options);
        this._textFormatter = toTextFormatter(theme, options);
        this._textDynamic = toTextDynamic(theme, options);
        this._isOverflowMaskEnabled = isOverflowMaskEnabled(theme, options);
        this._overflowMask = null;
        this.onTextChange();
        this.createOrUpdateText();
    };
    Object.defineProperty(DTextBase.prototype, "text", {
        get: function () {
            return this._textValue;
        },
        set: function (text) {
            if (this._textValue !== text) {
                this._textValue = text;
                this.updateTextValue();
            }
        },
        enumerable: true,
        configurable: true
    });
    DTextBase.prototype.onTextChange = function () {
        // DO NOTHING
    };
    DTextBase.prototype.computeTextValue = function () {
        var textValue = this._textValue;
        if (textValue !== undefined) {
            if (isFunction(textValue)) {
                var result = textValue(this.state);
                if (result !== undefined) {
                    return result;
                }
            }
            else {
                return textValue;
            }
        }
        return this.theme.getTextValue(this.state);
    };
    DTextBase.prototype.createOrUpdateText = function () {
        var formatted = this._textFormatter(this._textValueComputed, this);
        if (this._text == null) {
            if (0 < formatted.length) {
                var text = this.createText(formatted);
                this._text = text;
                this.addChild(text);
                this.updateTextPosition(text);
                if (this._isOverflowMaskEnabled) {
                    text.mask = this.getOrCreateOverflowMask();
                }
                this.toDirty();
                DApplications.update(this);
            }
        }
        else {
            this._text.text = formatted;
            this.toDirty();
            DApplications.update(this);
        }
    };
    DTextBase.prototype.createText = function (formatted) {
        return (this._textDynamic ?
            new DDynamicText(formatted, this._textStyle) :
            new Text(formatted, this._textStyle));
    };
    DTextBase.prototype.getOrCreateOverflowMask = function () {
        if (this._overflowMask == null) {
            this._overflowMask = new DBaseOverflowMaskSimple(this);
            this.addReflowable(this._overflowMask);
            this.toDirty();
        }
        return this._overflowMask;
    };
    DTextBase.prototype.updateTextPosition = function (text) {
        var align = this._textAlign;
        var padding = this._padding;
        var toRounded = this.toRounded;
        switch (align.horizontal) {
            case DAlignHorizontal.LEFT:
                text.x = toRounded(padding.getLeft());
                break;
            case DAlignHorizontal.CENTER:
                text.x = toRounded((this.width - text.width) * 0.5);
                break;
            case DAlignHorizontal.RIGHT:
                text.x = toRounded(this.width - text.width - padding.getRight());
                break;
        }
        switch (align.vertical) {
            case DAlignVertical.TOP:
                text.y = toRounded(padding.getTop());
                break;
            case DAlignVertical.MIDDLE:
                text.y = toRounded((this.height - text.height) * 0.5);
                break;
            case DAlignVertical.BOTTOM:
                text.y = toRounded(this.height - text.height - padding.getBottom());
                break;
        }
    };
    DTextBase.prototype.toRounded = function (value) {
        return Math.round(value);
    };
    DTextBase.prototype.getTextColor = function (theme, state) {
        var color = this._textColor;
        if (color !== undefined) {
            if (isFunction(color)) {
                var result = color(state);
                if (result !== undefined) {
                    return result;
                }
            }
            else {
                return color;
            }
        }
        return theme.getColor(state);
    };
    DTextBase.prototype.getTextAlpha = function (theme, state) {
        var alpha = this._textAlpha;
        if (alpha !== undefined) {
            if (isFunction(alpha)) {
                var result = alpha(state);
                if (result !== undefined) {
                    return result;
                }
            }
            else {
                return alpha;
            }
        }
        return theme.getAlpha(state);
    };
    DTextBase.prototype.updateTextColor = function (text) {
        var theme = this.theme;
        var state = this.state;
        text.style.fill = this.getTextColor(theme, state);
        text.alpha = this.getTextAlpha(theme, state);
    };
    DTextBase.prototype.updateTextValue = function () {
        var newTextValueComputed = this.computeTextValue();
        if (this._textValueComputed !== newTextValueComputed) {
            this._textValueComputed = newTextValueComputed;
            this.onTextChange();
            this.createOrUpdateText();
        }
    };
    DTextBase.prototype.updateText = function () {
        var text = this._text;
        if (text != null) {
            this.updateTextValue();
            this.updateTextPosition(text);
            this.updateTextColor(text);
        }
    };
    DTextBase.prototype.onReflow = function () {
        _super.prototype.onReflow.call(this);
        this.updateText();
    };
    DTextBase.prototype.isRefitable = function (target) {
        return _super.prototype.isRefitable.call(this, target) ||
            (target != null && target === this._text);
    };
    DTextBase.prototype.applyTitle = function () {
        var text = this._text;
        if (this._title.length <= 0 && text && ("clipped" in text) && text.clipped) {
            var layer = DApplications.getLayer(this);
            if (layer) {
                layer.view.title = text.text;
            }
        }
        else {
            _super.prototype.applyTitle.call(this);
        }
    };
    DTextBase.prototype.getType = function () {
        return "DTextBase";
    };
    DTextBase.prototype.destroy = function () {
        // Text
        var text = this._text;
        if (text != null) {
            this._text = null;
            text.destroy();
        }
        // Overflow mask
        var overflowMask = this._overflowMask;
        if (overflowMask != null) {
            this._overflowMask = null;
            overflowMask.destroy();
        }
        _super.prototype.destroy.call(this);
    };
    return DTextBase;
}(DBase));
export { DTextBase };
//# sourceMappingURL=d-text-base.js.map