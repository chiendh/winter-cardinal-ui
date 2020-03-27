import { __extends } from "tslib";
import { DBaseStates } from "../../d-base-states";
import { DHtmlElementWhen } from "../../d-html-element-when";
import { DThemeWhiteImageBase } from "./d-theme-white-image-base";
var divCreator = function (parent) {
    var result = document.createElement("div");
    parent.appendChild(result);
    return result;
};
var DThemeWhiteHtmlElement = /** @class */ (function (_super) {
    __extends(DThemeWhiteHtmlElement, _super);
    function DThemeWhiteHtmlElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteHtmlElement.prototype.getElementCreator = function () {
        return null;
    };
    DThemeWhiteHtmlElement.prototype.setElementStyle = function (target, state, padding, elementRect, clipperRect) {
        // Style
        var style = this.getElementStylePosition(state, elementRect, clipperRect) +
            this.getElementStyleMargin(state) +
            this.getElementStyleText(state) +
            this.getElementStyleBackground(state) +
            this.getElementStyleBorder(state) +
            this.getElementStylePadding(state, padding, elementRect) +
            this.getElementStyleOutline(state);
        target.setAttribute("style", style);
        // ReadOnly
        if (DBaseStates.isReadOnly(state)) {
            target.setAttribute("readonly", "readonly");
        }
        else {
            target.removeAttribute("readonly");
        }
        // Disabled
        if (DBaseStates.isDisabled(state)) {
            target.setAttribute("disabled", "disabled");
        }
        else {
            target.removeAttribute("disabled");
        }
    };
    DThemeWhiteHtmlElement.prototype.getElementStyleBackground = function (state) {
        return "background-color: transparent;";
    };
    DThemeWhiteHtmlElement.prototype.getElementStyleBorder = function (state) {
        return "border: none; box-sizing: border-box;";
    };
    DThemeWhiteHtmlElement.prototype.getElementStylePadding = function (state, padding, elementRect) {
        var paddingTop = padding.getTop();
        var paddingRight = padding.getRight();
        var paddingBottom = padding.getBottom();
        var paddingLeft = padding.getLeft();
        return "padding: " + paddingTop + "px " + paddingRight + "px " + paddingBottom + "px " + paddingLeft + "px;";
    };
    DThemeWhiteHtmlElement.prototype.getElementStyleOutline = function (state) {
        return "outline: none;";
    };
    DThemeWhiteHtmlElement.prototype.getElementStylePosition = function (state, elementRect, clipperRect) {
        return "position: absolute;" +
            ("left: " + (elementRect.x - clipperRect.x) + "px;") +
            ("top: " + (elementRect.y - clipperRect.y) + "px;") +
            ("width: " + elementRect.width + "px;") +
            ("height: " + elementRect.height + "px;") +
            ("line-height: " + elementRect.height + "px;");
    };
    DThemeWhiteHtmlElement.prototype.getElementStyleText = function (state) {
        return "font-family: " + this.getFontFamilly() + ";" +
            ("font-size: " + this.getFontSize() + "px;") +
            ("color: #" + this.getColor(state).toString(16) + ";");
    };
    DThemeWhiteHtmlElement.prototype.getElementStyleMargin = function (state) {
        return "margin: 0;";
    };
    DThemeWhiteHtmlElement.prototype.getClipperCreator = function () {
        return divCreator;
    };
    DThemeWhiteHtmlElement.prototype.setClipperStyle = function (target, state, padding, elementRect, clipperRect) {
        var style = "overflow: hidden; outline: none;" +
            "padding: 0; margin: 0; border: none; background-color: transparent;" +
            this.getClipperStylePosition(state, elementRect, clipperRect);
        target.setAttribute("style", style);
    };
    DThemeWhiteHtmlElement.prototype.getClipperStylePosition = function (state, elementRect, clipperRect) {
        return "position: absolute;" +
            ("left: " + clipperRect.x + "px;") +
            ("top: " + clipperRect.y + "px;") +
            ("width: " + clipperRect.width + "px;") +
            ("height: " + clipperRect.height + "px;") +
            ("line-height: " + elementRect.height + "px;");
    };
    DThemeWhiteHtmlElement.prototype.getBeforeCreator = function () {
        return divCreator;
    };
    DThemeWhiteHtmlElement.prototype.setBeforeStyle = function (target) {
        var style = "overflow: hidden; outline: none;" +
            "padding: 0; margin: 0; border: none; background-color: transparent;" +
            "position: absolute; left: 0; top: 0; width: 0; height: 0; line-height: 0;";
        target.setAttribute("style", style);
        target.setAttribute("tabindex", "0");
    };
    DThemeWhiteHtmlElement.prototype.getAfterCreator = function () {
        return divCreator;
    };
    DThemeWhiteHtmlElement.prototype.setAfterStyle = function (target) {
        this.setBeforeStyle(target);
    };
    DThemeWhiteHtmlElement.prototype.getWhen = function () {
        return DHtmlElementWhen.FOCUSED;
    };
    DThemeWhiteHtmlElement.prototype.getSelect = function () {
        return false;
    };
    return DThemeWhiteHtmlElement;
}(DThemeWhiteImageBase));
export { DThemeWhiteHtmlElement };
//# sourceMappingURL=d-theme-white-html-element.js.map