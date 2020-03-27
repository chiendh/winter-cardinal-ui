/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseStates } from "../../d-base-states";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteHtmlElement } from "./d-theme-white-html-element";
var editingValidator = function () {
    return null;
};
var editingUnformatter = function (text) {
    return text;
};
var CREATOR_CLASSNAME = "d-theme-white-input";
var CREATOR_CLASSNAME_ELEMENT = CREATOR_CLASSNAME + "-element";
var elementCreator = function (parent) {
    var found = parent.getElementsByClassName(CREATOR_CLASSNAME_ELEMENT);
    if (0 < found.length) {
        return found[0];
    }
    var element = document.createElement("input");
    element.setAttribute("spellcheck", "false");
    element.setAttribute("class", CREATOR_CLASSNAME_ELEMENT);
    parent.appendChild(element);
    return element;
};
var divCreator = function (parent, classname) {
    var found = parent.getElementsByClassName(classname);
    if (0 < found.length) {
        return found[0];
    }
    var result = document.createElement("div");
    result.setAttribute("class", classname);
    parent.appendChild(result);
    return result;
};
var CREATOR_CLASSNAME_CLIPPER = CREATOR_CLASSNAME + "-clipper";
var clipperCreator = function (parent) {
    return divCreator(parent, CREATOR_CLASSNAME_CLIPPER);
};
var CREATOR_CLASSNAME_BEFORE = CREATOR_CLASSNAME + "-before";
var beforeCreator = function (parent) {
    return divCreator(parent, CREATOR_CLASSNAME_BEFORE);
};
var CREATOR_CLASSNAME_AFTER = CREATOR_CLASSNAME + "-after";
var afterCreator = function (parent) {
    return divCreator(parent, CREATOR_CLASSNAME_AFTER);
};
var DThemeWhiteInput = /** @class */ (function (_super) {
    __extends(DThemeWhiteInput, _super);
    function DThemeWhiteInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.COLOR = 0xffffff;
        _this.COLOR_HOVERED = UtilRgb.darken(_this.COLOR, 0.017);
        return _this;
    }
    DThemeWhiteInput.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isDisabled(state) || DBaseStates.isReadOnly(state)) {
            return null;
        }
        else if (DBaseStates.isFocused(state) || DBaseStates.isHovered(state)) {
            return this.COLOR_HOVERED;
        }
        else {
            return this.COLOR;
        }
    };
    DThemeWhiteInput.prototype.getBorderColor = function (state) {
        return DThemeWhiteConstants.BORDER_COLOR;
    };
    DThemeWhiteInput.prototype.getOutlineColor = function (state) {
        if (DBaseStates.isInvalid(state)) {
            return DThemeWhiteConstants.INVALID_COLOR;
        }
        return _super.prototype.getOutlineColor.call(this, state);
    };
    DThemeWhiteInput.prototype.getHeight = function () {
        return this.getLineHeight();
    };
    DThemeWhiteInput.prototype.getWidth = function () {
        return 100;
    };
    DThemeWhiteInput.prototype.getPlaceholder = function () {
        return "";
    };
    DThemeWhiteInput.prototype.getPaddingLeft = function () {
        return 10;
    };
    DThemeWhiteInput.prototype.getPaddingRight = function () {
        return 10;
    };
    DThemeWhiteInput.prototype.getCursor = function () {
        return "text";
    };
    DThemeWhiteInput.prototype.getEditingFormatter = function () {
        return this.getTextFormatter();
    };
    DThemeWhiteInput.prototype.getEditingUnformatter = function () {
        return editingUnformatter;
    };
    DThemeWhiteInput.prototype.getEditingValidator = function () {
        return editingValidator;
    };
    DThemeWhiteInput.prototype.getElementCreator = function () {
        return elementCreator;
    };
    DThemeWhiteInput.prototype.getClipperCreator = function () {
        return clipperCreator;
    };
    DThemeWhiteInput.prototype.getBeforeCreator = function () {
        return beforeCreator;
    };
    DThemeWhiteInput.prototype.getAfterCreator = function () {
        return afterCreator;
    };
    DThemeWhiteInput.prototype.getSelect = function () {
        return true;
    };
    DThemeWhiteInput.prototype.getElementStyleMargin = function (state) {
        return "margin: 0.1em 0 0 0;";
    };
    return DThemeWhiteInput;
}(DThemeWhiteHtmlElement));
export { DThemeWhiteInput };
//# sourceMappingURL=d-theme-white-input.js.map