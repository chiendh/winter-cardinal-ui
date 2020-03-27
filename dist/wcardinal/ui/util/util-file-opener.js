/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * An output format.
 */
export var UtilFileAs;
(function (UtilFileAs) {
    UtilFileAs[UtilFileAs["TEXT"] = 0] = "TEXT";
    UtilFileAs[UtilFileAs["DATA_URL"] = 1] = "DATA_URL";
    UtilFileAs[UtilFileAs["BINARY_STRING"] = 2] = "BINARY_STRING";
    UtilFileAs[UtilFileAs["ARRAY_BUTTER"] = 3] = "ARRAY_BUTTER";
})(UtilFileAs || (UtilFileAs = {}));
var UtilFileOpener = /** @class */ (function () {
    function UtilFileOpener(as, facade) {
        this._input = null;
        this._as = as;
        this._facade = facade;
    }
    UtilFileOpener.prototype.open = function () {
        var input = this.getOrCreateInput();
        if (input != null) {
            input.click();
        }
        else {
            this.onCancel();
        }
    };
    UtilFileOpener.prototype.getOrCreateInput = function () {
        var _this = this;
        if ("FileReader" in window && this._input == null) {
            var input_1 = this._input = document.createElement("input");
            input_1.setAttribute("type", "file");
            input_1.setAttribute("style", "display:none");
            input_1.addEventListener("change", function (e) {
                _this.onInputChange(input_1);
                input_1.value = "";
                e.stopImmediatePropagation();
                e.preventDefault();
            });
            document.body.appendChild(input_1);
        }
        return this._input;
    };
    UtilFileOpener.prototype.onInputChange = function (input) {
        var _this = this;
        var files = input.files;
        if (files != null && 0 < files.length) {
            var file = files[0];
            var fileReader = new FileReader();
            fileReader.onload = function (e) {
                if (e.target != null) {
                    var target = e.target;
                    _this.onOpen(target.result);
                }
            };
            fileReader.onabort = function (e) {
                _this.onAboart(e);
            };
            switch (this._as) {
                case UtilFileAs.TEXT:
                    fileReader.readAsText(file);
                    break;
                case UtilFileAs.DATA_URL:
                    fileReader.readAsDataURL(file);
                    break;
                case UtilFileAs.BINARY_STRING:
                    fileReader.readAsBinaryString(file);
                    break;
                case UtilFileAs.ARRAY_BUTTER:
                    fileReader.readAsArrayBuffer(file);
                    break;
                default:
                    fileReader.readAsText(file);
                    break;
            }
        }
        else {
            this.onCancel();
        }
    };
    UtilFileOpener.prototype.onOpen = function (result) {
        var facade = this._facade;
        facade.emit("open", result, facade);
    };
    UtilFileOpener.prototype.onAboart = function (e) {
        var facade = this._facade;
        facade.emit("abort", e, facade);
    };
    UtilFileOpener.prototype.onCancel = function () {
        var facade = this._facade;
        facade.emit("cancel", facade);
    };
    return UtilFileOpener;
}());
export { UtilFileOpener };
//# sourceMappingURL=util-file-opener.js.map