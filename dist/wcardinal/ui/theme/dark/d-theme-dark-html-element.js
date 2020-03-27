import { __extends } from "tslib";
import { DBaseStates } from "../../d-base-states";
import { DHtmlElementWhen } from "../../d-html-element-when";
import { DThemeDarkImageBase } from "./d-theme-dark-image-base";
var divCreator = function (parent) {
    var result = document.createElement("div");
    parent.appendChild(result);
    return result;
};
var DThemeDarkHtmlElement = /** @class */ (function (_super) {
    __extends(DThemeDarkHtmlElement, _super);
    function DThemeDarkHtmlElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkHtmlElement.prototype.getElementCreator = function () {
        return null;
    };
    DThemeDarkHtmlElement.prototype.setElementStyle = function (target, state, padding, elementRect, clipperRect) {
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
    DThemeDarkHtmlElement.prototype.getElementStyleBackground = function (state) {
        return "background-color: transparent;";
    };
    DThemeDarkHtmlElement.prototype.getElementStyleBorder = function (state) {
        return "border: none; box-sizing: border-box;";
    };
    DThemeDarkHtmlElement.prototype.getElementStylePadding = function (state, padding, elementRect) {
        var paddingTop = padding.getTop();
        var paddingRight = padding.getRight();
        var paddingBottom = padding.getBottom();
        var paddingLeft = padding.getLeft();
        return "padding: " + paddingTop + "px " + paddingRight + "px " + paddingBottom + "px " + paddingLeft + "px;";
    };
    DThemeDarkHtmlElement.prototype.getElementStyleOutline = function (state) {
        return "outline: none;";
    };
    DThemeDarkHtmlElement.prototype.getElementStylePosition = function (state, elementRect, clipperRect) {
        return "position: absolute;" +
            ("left: " + (elementRect.x - clipperRect.x) + "px;") +
            ("top: " + (elementRect.y - clipperRect.y) + "px;") +
            ("width: " + elementRect.width + "px;") +
            ("height: " + elementRect.height + "px;") +
            ("line-height: " + elementRect.height + "px;");
    };
    DThemeDarkHtmlElement.prototype.getElementStyleText = function (state) {
        return "font-family: " + this.getFontFamilly() + ";" +
            ("font-size: " + this.getFontSize() + "px;") +
            ("color: #" + this.getColor(state).toString(16) + ";");
    };
    DThemeDarkHtmlElement.prototype.getElementStyleMargin = function (state) {
        return "margin: 0;";
    };
    DThemeDarkHtmlElement.prototype.getClipperCreator = function () {
        return divCreator;
    };
    DThemeDarkHtmlElement.prototype.setClipperStyle = function (target, state, padding, elementRect, clipperRect) {
        var style = "overflow: hidden; outline: none;" +
            "padding: 0; margin: 0; border: none; background-color: transparent;" +
            this.getClipperStylePosition(state, elementRect, clipperRect);
        target.setAttribute("style", style);
    };
    DThemeDarkHtmlElement.prototype.getClipperStylePosition = function (state, elementRect, clipperRect) {
        return "position: absolute;" +
            ("left: " + clipperRect.x + "px;") +
            ("top: " + clipperRect.y + "px;") +
            ("width: " + clipperRect.width + "px;") +
            ("height: " + clipperRect.height + "px;") +
            ("line-height: " + elementRect.height + "px;");
    };
    DThemeDarkHtmlElement.prototype.getBeforeCreator = function () {
        return divCreator;
    };
    DThemeDarkHtmlElement.prototype.setBeforeStyle = function (target) {
        var style = "overflow: hidden; outline: none;" +
            "padding: 0; margin: 0; border: none; background-color: transparent;" +
            "position: absolute; left: 0; top: 0; width: 0; height: 0; line-height: 0;";
        target.setAttribute("style", style);
        target.setAttribute("tabindex", "0");
    };
    DThemeDarkHtmlElement.prototype.getAfterCreator = function () {
        return divCreator;
    };
    DThemeDarkHtmlElement.prototype.setAfterStyle = function (target) {
        this.setBeforeStyle(target);
    };
    DThemeDarkHtmlElement.prototype.getWhen = function () {
        return DHtmlElementWhen.FOCUSED;
    };
    DThemeDarkHtmlElement.prototype.getSelect = function () {
        return false;
    };
    return DThemeDarkHtmlElement;
}(DThemeDarkImageBase));
export { DThemeDarkHtmlElement };
//# sourceMappingURL=d-theme-dark-html-element.js.map