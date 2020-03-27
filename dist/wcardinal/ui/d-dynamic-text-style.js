/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemes } from "./theme/d-themes";
var DDynamicTextStyle = /** @class */ (function () {
    function DDynamicTextStyle(options, onChange) {
        this._id = 0;
        this._idApproved = -1;
        var font = DDynamicTextStyle.FONT = (DDynamicTextStyle.FONT || DThemes.getInstance().get("DBase"));
        this._align = (options && options.align) || "left";
        this._fontFamily = (options && options.fontFamily) || font.getFontFamilly();
        this._fontSize = (options && options.fontSize) || font.getFontSize();
        this._fontStyle = (options && options.fontStyle) || "normal";
        this._fontVariant = (options && options.fontVariant) || "normal";
        this._fontWeight = (options && options.fontWeight) || "normal";
        this._fontIdId = -1;
        this._fontId = "";
        this._fontIdApproved = "";
        this._fill = (options && options.fill) || font.getColor(0);
        this._fillApproved = 0x000000;
        this._clipping = ((options && options.clipping != null) ? options.clipping : true);
        this._onChange = onChange;
    }
    Object.defineProperty(DDynamicTextStyle.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DDynamicTextStyle.prototype, "idApproved", {
        get: function () {
            return this._idApproved;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DDynamicTextStyle.prototype, "fontId", {
        get: function () {
            this.update();
            return this._fontId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DDynamicTextStyle.prototype, "fontIdApproved", {
        get: function () {
            return this._fontIdApproved;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DDynamicTextStyle.prototype, "fill", {
        get: function () {
            return this._fill;
        },
        set: function (fill) {
            if (this._fill !== fill) {
                this._fill = fill;
                this.onChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    DDynamicTextStyle.prototype.onChange = function () {
        this._id += 1;
        this._onChange();
    };
    Object.defineProperty(DDynamicTextStyle.prototype, "fillApproved", {
        get: function () {
            return this._fillApproved;
        },
        enumerable: true,
        configurable: true
    });
    DDynamicTextStyle.prototype.approve = function () {
        this.update();
        this._idApproved = this._id;
        this._fontIdApproved = this._fontId;
        this._fillApproved = this._fill;
    };
    Object.defineProperty(DDynamicTextStyle.prototype, "fontFamily", {
        get: function () {
            return this._fontFamily;
        },
        set: function (fontFamily) {
            if (this._fontFamily !== fontFamily) {
                this._fontFamily = fontFamily;
                this.onChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DDynamicTextStyle.prototype, "fontSize", {
        get: function () {
            return this._fontSize;
        },
        set: function (fontSize) {
            if (this._fontSize !== fontSize) {
                this._fontSize = fontSize;
                this.onChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DDynamicTextStyle.prototype, "fontStyle", {
        get: function () {
            return this._fontStyle;
        },
        set: function (fontStyle) {
            if (this._fontStyle !== fontStyle) {
                this._fontStyle = fontStyle;
                this.onChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DDynamicTextStyle.prototype, "fontVariant", {
        get: function () {
            return this._fontVariant;
        },
        set: function (fontVariant) {
            if (this._fontVariant !== fontVariant) {
                this._fontVariant = fontVariant;
                this.onChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DDynamicTextStyle.prototype, "fontWeight", {
        get: function () {
            return this._fontWeight;
        },
        set: function (fontWeight) {
            if (this._fontWeight !== fontWeight) {
                this._fontWeight = fontWeight;
                this.onChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    DDynamicTextStyle.prototype.update = function () {
        if (this._fontIdId !== this._id) {
            this._fontIdId = this._id;
            this._fontId = this.newFontId();
        }
    };
    DDynamicTextStyle.prototype.newFontId = function () {
        return this._fontStyle + " " + this._fontVariant + " " + this._fontWeight + " " + this._fontSize + "px " + this._fontFamily;
    };
    Object.defineProperty(DDynamicTextStyle.prototype, "clipping", {
        get: function () {
            return this._clipping;
        },
        set: function (clipping) {
            if (this._clipping !== clipping) {
                this._clipping = clipping;
                this.onChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    DDynamicTextStyle.FONT = null;
    return DDynamicTextStyle;
}());
export { DDynamicTextStyle };
//# sourceMappingURL=d-dynamic-text-style.js.map