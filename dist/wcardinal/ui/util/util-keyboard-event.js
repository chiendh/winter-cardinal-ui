/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { isString } from "./is-string";
var setShortcutKeyAndWhich = function (shortcut) {
    var key = shortcut.key;
    if (key.length <= 1) {
        if (shortcut.shift) {
            shortcut.key = key.toUpperCase();
        }
        var code = key.charCodeAt(0);
        if (97 <= code && code <= 122) {
            // a ... z
            shortcut.which = code - 32;
        }
        else {
            shortcut.which = code;
        }
    }
    else {
        switch (key) {
            case "Enter":
                shortcut.which = 13;
                break;
            case "Space":
                shortcut.key = " ";
                shortcut.which = 32;
                break;
            case "Escape":
                shortcut.which = 27;
                break;
            case "F1":
                shortcut.which = 112;
                break;
            case "F2":
                shortcut.which = 113;
                break;
            case "F3":
                shortcut.which = 114;
                break;
            case "F4":
                shortcut.which = 115;
                break;
            case "F5":
                shortcut.which = 116;
                break;
            case "F6":
                shortcut.which = 117;
                break;
            case "F7":
                shortcut.which = 118;
                break;
            case "F8":
                shortcut.which = 119;
                break;
            case "F9":
                shortcut.which = 120;
                break;
            case "F10":
                shortcut.which = 121;
                break;
            case "F11":
                shortcut.which = 122;
                break;
            case "F12":
                shortcut.which = 123;
                break;
            case "CapsLock":
                if (shortcut.shift) {
                    shortcut.which = 20;
                }
                else {
                    shortcut.which = 240;
                }
                break;
            case "ArrowUp":
                shortcut.which = 38;
                break;
            case "ArrowDown":
                shortcut.which = 40;
                break;
            case "ArrowLeft":
                shortcut.which = 37;
                break;
            case "ArrowRight":
                shortcut.which = 39;
                break;
            case "Insert":
                shortcut.which = 45;
                break;
            case "Delete":
                shortcut.which = 46;
                break;
            case "PageUp":
                shortcut.which = 33;
                break;
            case "PageDown":
                shortcut.which = 34;
                break;
            case "Backspace":
                shortcut.which = 8;
                break;
            case ";":
                shortcut.which = 187;
                break;
            case "Pause":
                shortcut.which = 19;
                break;
            case "ScrollLock":
                shortcut.which = 145;
                break;
            case "Tab":
                shortcut.which = 9;
                break;
        }
    }
    return shortcut;
};
var UtilKeyboardEvent = /** @class */ (function () {
    function UtilKeyboardEvent() {
    }
    UtilKeyboardEvent.isActivateKey = function (e) {
        return (e.key === "Space" || e.key === "Enter" || e.which === 32 || e.which === 13);
    };
    UtilKeyboardEvent.isArrowUpKey = function (e) {
        return (e.key === "ArrowUp" || e.which === 38);
    };
    UtilKeyboardEvent.isArrowDownKey = function (e) {
        return (e.key === "ArrowDown" || e.which === 40);
    };
    UtilKeyboardEvent.isArrowLeftKey = function (e) {
        return (e.key === "ArrowLeft" || e.which === 37);
    };
    UtilKeyboardEvent.isArrowRightKey = function (e) {
        return (e.key === "ArrowRight" || e.which === 39);
    };
    UtilKeyboardEvent.isCancelKey = function (e) {
        return (e.key === "Esc" || e.which === 27);
    };
    UtilKeyboardEvent.isFocusKey = function (e) {
        return (e.key === "Tab" || e.which === 9);
    };
    UtilKeyboardEvent.isUndoKey = function (e) {
        return (e.ctrlKey && (e.key === "z" || e.which === 90));
    };
    UtilKeyboardEvent.isRedoKey = function (e) {
        return (e.ctrlKey && (e.key === "y" || e.which === 89));
    };
    UtilKeyboardEvent.isSaveKey = function (e) {
        return (e.ctrlKey && !e.shiftKey && (e.key === "s" || e.which === 83));
    };
    UtilKeyboardEvent.isSaveAsKey = function (e) {
        return (e.ctrlKey && e.shiftKey && (e.key === "S" || e.which === 83));
    };
    UtilKeyboardEvent.isDeleteKey = function (e) {
        return (e.key === "Delete" || e.which === 46);
    };
    UtilKeyboardEvent.isSelectAllKey = function (e) {
        return (e.ctrlKey && !e.shiftKey && (e.key === "a" || e.which === 65));
    };
    UtilKeyboardEvent.isOkKey = function (e) {
        return (e.key === "Enter" || e.which === 13);
    };
    UtilKeyboardEvent.getFocusDirection = function (e) {
        return (e.shiftKey !== true);
    };
    UtilKeyboardEvent.toShortcut = function (expressionOrShortcut) {
        if (!isString(expressionOrShortcut)) {
            return expressionOrShortcut;
        }
        else {
            var expression = expressionOrShortcut;
            var arrowIndex = expression.indexOf("->");
            var keyExpression = void 0;
            var event_1;
            if (0 <= arrowIndex) {
                keyExpression = expression.substring(0, arrowIndex).trim();
                event_1 = expression.substring(arrowIndex + 2).trim();
            }
            else {
                keyExpression = expression.trim();
            }
            var keys = keyExpression.toLowerCase().split("+");
            var alt = 0 <= keys.indexOf("alt");
            var ctrl = 0 <= keys.indexOf("ctrl");
            var shift = 0 <= keys.indexOf("shift");
            var key = keys[keys.length - 1];
            return setShortcutKeyAndWhich({
                alt: alt,
                ctrl: ctrl,
                shift: shift,
                key: key,
                which: 0,
                event: event_1
            });
        }
    };
    UtilKeyboardEvent.toString = function (shortcut) {
        var parts = [];
        if (shortcut.ctrl) {
            parts.push("Ctrl");
        }
        if (shortcut.shift) {
            parts.push("Shift");
        }
        if (shortcut.alt) {
            parts.push("Alt");
        }
        parts.push(shortcut.key.toUpperCase());
        return parts.join("+");
    };
    UtilKeyboardEvent.on = function (target, expressionOrShortcut, handler) {
        var shortcut = this.toShortcut(expressionOrShortcut);
        document.body.addEventListener("keydown", function (e) {
            if (e.altKey === shortcut.alt && e.ctrlKey === shortcut.ctrl &&
                e.shiftKey === shortcut.shift &&
                (e.key === shortcut.key || e.which === shortcut.which)) {
                if (target.isActionable()) {
                    if (shortcut.event != null) {
                        target.emit(shortcut.event);
                    }
                    else if (handler != null) {
                        handler(e);
                    }
                }
                e.preventDefault();
            }
        });
    };
    return UtilKeyboardEvent;
}());
export { UtilKeyboardEvent };
//# sourceMappingURL=util-keyboard-event.js.map