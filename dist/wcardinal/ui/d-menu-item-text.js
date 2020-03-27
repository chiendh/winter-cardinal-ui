/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Text } from "pixi.js";
import { DBase } from "./d-base";
import { DDynamicText } from "./d-dynamic-text";
import { DMenuItem } from "./d-menu-item";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilPointerEvent } from "./util/util-pointer-event";
var DMenuItemText = /** @class */ (function (_super) {
    __extends(DMenuItemText, _super);
    function DMenuItemText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DMenuItemText.prototype.init = function (options) {
        _super.prototype.init.call(this, options);
        this.initOnClick(options);
        this.initOnOver(options);
        this.initShortcuts(options);
    };
    DMenuItemText.prototype.initOnClick = function (options) {
        var _this = this;
        UtilPointerEvent.onClick(this, function (e) {
            if (_this.isActionable()) {
                _this.onSelect(e);
            }
        });
    };
    DMenuItemText.prototype.initOnOver = function (options) {
        var _this = this;
        this.on(UtilPointerEvent.over, function () {
            var context = _this.getContext();
            if (context != null) {
                var parent_1 = _this.parent;
                if (parent_1 instanceof DBase) {
                    context.trim(_this.getCloseable());
                }
            }
        });
    };
    DMenuItemText.prototype.initShortcuts = function (options) {
        var shortcuts = this._shortcuts;
        this._shortcutMargin = this.theme.getShortcutTextMargin();
        if (shortcuts != null && 0 < shortcuts.length) {
            var shortcut = shortcuts[0];
            var shortcutTextValue = UtilKeyboardEvent.toString(shortcut);
            this._shortcutText = (this._textDynamic ?
                new DDynamicText(shortcutTextValue, this._textStyle) :
                new Text(shortcutTextValue, this._textStyle));
            this.appendRenderable(this._shortcutText, true);
        }
        else {
            this._shortcutText = null;
        }
    };
    DMenuItemText.prototype.updateShortcutText = function () {
        var text = this._shortcutText;
        if (text != null) {
            var toRounded = this.toRounded;
            text.position.set(toRounded(this.width - this._shortcutMargin - text.width), toRounded((this.height - text.height) * 0.5));
        }
    };
    DMenuItemText.prototype.updateTextColor = function (text) {
        _super.prototype.updateTextColor.call(this, text);
        var shortcutText = this._shortcutText;
        if (shortcutText != null) {
            var theme = this.theme;
            var state = this.state;
            shortcutText.style.fill = theme.getColor(state);
            shortcutText.alpha = theme.getAlpha(state);
        }
    };
    DMenuItemText.prototype.updateText = function () {
        _super.prototype.updateText.call(this);
        this.updateShortcutText();
    };
    DMenuItemText.prototype.getType = function () {
        return "DMenuItemText";
    };
    DMenuItemText.prototype.onSelect = function (e) {
        _super.prototype.onSelect.call(this, e);
        var closeable = this.getCloseable();
        if (closeable != null) {
            closeable.emit("select", this.value, this, closeable);
        }
    };
    DMenuItemText.prototype.onShortcut = function (e) {
        _super.prototype.onShortcut.call(this, e);
        this.onSelect(e);
    };
    return DMenuItemText;
}(DMenuItem));
export { DMenuItemText };
//# sourceMappingURL=d-menu-item-text.js.map