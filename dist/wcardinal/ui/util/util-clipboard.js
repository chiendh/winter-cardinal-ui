/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { utils } from "pixi.js";
var getSelection = function (element) {
    var selection = document.getSelection();
    if (selection) {
        var range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }
    return selection;
};
var toClipboardData = function (e) {
    return e.clipboardData || window.clipboardData;
};
var copyUsingDiv = function (text) {
    var div = document.createElement("div");
    div.setAttribute("style", "-webkit-user-select: text !important");
    div.textContent = "Dummy";
    document.body.appendChild(div);
    var selection = getSelection(div);
    var result = false;
    if (selection) {
        var handler = function (e) {
            if (e.target === div) {
                var clipboardData = toClipboardData(e);
                clipboardData.setData("text/plain", text);
                result = (clipboardData.getData("text/plain") === text);
                e.preventDefault();
            }
        };
        document.addEventListener("copy", handler);
        try {
            document.execCommand("copy");
        }
        finally {
            document.removeEventListener("copy", handler);
        }
        selection.removeAllRanges();
    }
    document.body.removeChild(div);
    return result;
};
var copyUsingSpan = function (text) {
    var div = document.createElement("div");
    div.setAttribute("style", "-webkit-user-select: text !important");
    var span = document.createElement("span");
    span.innerText = text;
    var root = (div.attachShadow ? div.attachShadow({ mode: "open" }) : div);
    root.appendChild(span);
    document.body.appendChild(div);
    var result = false;
    var selection = getSelection(div);
    if (selection) {
        result = document.execCommand("copy");
        selection.removeAllRanges();
    }
    document.body.removeChild(div);
    return result;
};
var copyUsingWindow = function (window, text) {
    if (typeof ClipboardEvent === "undefined") {
        var clipboardData = window.clipboardData;
        if (typeof clipboardData !== "undefined" && typeof clipboardData.setData !== "undefined") {
            clipboardData.setData("Text", text);
            return true;
        }
    }
    return false;
};
var UtilClipboard = /** @class */ (function (_super) {
    __extends(UtilClipboard, _super);
    function UtilClipboard() {
        var _this = _super.call(this) || this;
        var element = document.body;
        element.addEventListener("copy", function (e) {
            if (e.target === element) {
                e.preventDefault();
                e.stopPropagation();
                _this.emit("copy", toClipboardData(e));
            }
        });
        element.addEventListener("cut", function (e) {
            if (e.target === element) {
                e.preventDefault();
                e.stopPropagation();
                _this.emit("cut", toClipboardData(e));
            }
        });
        element.addEventListener("paste", function (e) {
            if (e.target === element) {
                e.preventDefault();
                e.stopPropagation();
                _this.emit("paste", toClipboardData(e));
            }
        });
        return _this;
    }
    UtilClipboard.copy = function (text) {
        var clipboard = navigator.clipboard;
        if (clipboard && clipboard.writeText) {
            clipboard.writeText(text);
        }
        else {
            if (!copyUsingWindow(window, text)) {
                if (!copyUsingDiv(text)) {
                    if (navigator.userAgent.indexOf("Edge") < 0) {
                        copyUsingSpan(text);
                    }
                }
            }
        }
    };
    return UtilClipboard;
}(utils.EventEmitter));
export { UtilClipboard };
//# sourceMappingURL=util-clipboard.js.map