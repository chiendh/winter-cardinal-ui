/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseStates } from "../../d-base-states";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkHtmlElement } from "./d-theme-dark-html-element";
var editingValidator = function () {
    return null;
};
var editingUnformatter = function (text) {
    return text;
};
var CREATOR_CLASSNAME = "d-theme-dark-input";
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
var DThemeDarkInput = /** @class */ (function (_super) {
    __extends(DThemeDarkInput, _super);
    function DThemeDarkInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkInput.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isDisabled(state) || DBaseStates.isReadOnly(state)) {
            return 0x1F1F1F;
        }
        else if (DBaseStates.isFocused(state) || DBaseStates.isHovered(state)) {
            return 0x2E2E2E;
        }
        else {
            return null;
        }
    };
    DThemeDarkInput.prototype.getBorderColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return 0x1F1F1F;
        }
        else if (DBaseStates.isFocused(state)) {
            return DThemeDarkConstants.HIGHLIGHT_COLOR;
        }
        else {
            return 0x646464;
        }
    };
    DThemeDarkInput.prototype.getColor = function (state) {
        if (DBaseStates.isDisabled(state) || DBaseStates.isReadOnly(state)) {
            return 0x646464;
        }
        return _super.prototype.getColor.call(this, state);
    };
    DThemeDarkInput.prototype.getOutlineColor = function (state) {
        if (DBaseStates.isInvalid(state)) {
            return 0xCF6679;
        }
        return _super.prototype.getOutlineColor.call(this, state);
    };
    DThemeDarkInput.prototype.getHeight = function () {
        return this.getLineHeight();
    };
    DThemeDarkInput.prototype.getWidth = function () {
        return 100;
    };
    DThemeDarkInput.prototype.getPlaceholder = function () {
        return "";
    };
    DThemeDarkInput.prototype.getPaddingLeft = function () {
        return 10;
    };
    DThemeDarkInput.prototype.getPaddingRight = function () {
        return 10;
    };
    DThemeDarkInput.prototype.getCursor = function () {
        return "text";
    };
    DThemeDarkInput.prototype.getEditingFormatter = function () {
        return this.getTextFormatter();
    };
    DThemeDarkInput.prototype.getEditingUnformatter = function () {
        return editingUnformatter;
    };
    DThemeDarkInput.prototype.getEditingValidator = function () {
        return editingValidator;
    };
    DThemeDarkInput.prototype.getElementCreator = function () {
        return elementCreator;
    };
    DThemeDarkInput.prototype.getClipperCreator = function () {
        return clipperCreator;
    };
    DThemeDarkInput.prototype.getBeforeCreator = function () {
        return beforeCreator;
    };
    DThemeDarkInput.prototype.getAfterCreator = function () {
        return afterCreator;
    };
    DThemeDarkInput.prototype.getSelect = function () {
        return true;
    };
    DThemeDarkInput.prototype.getElementStyleMargin = function (state) {
        return "margin: 0.1em 0 0 0;";
    };
    return DThemeDarkInput;
}(DThemeDarkHtmlElement));
export { DThemeDarkInput };
//# sourceMappingURL=d-theme-dark-input.js.map