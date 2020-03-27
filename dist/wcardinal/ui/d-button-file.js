/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DButton } from "./d-button";
import { isString } from "./util/is-string";
import { UtilFileAs, UtilFileOpener } from "./util/util-file-opener";
export var DButtonFileAs = UtilFileAs;
var DButtonFile = /** @class */ (function (_super) {
    __extends(DButtonFile, _super);
    function DButtonFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DButtonFile.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        this._checker = (options != null && options.checker != null ? options.checker : undefined);
        var as = (options != null && options.as != null ?
            (isString(options.as) ? DButtonFileAs[options.as] : options.as) :
            DButtonFileAs.TEXT);
        var opener = new UtilFileOpener(as, this);
        this._opener = opener;
        this.on("active", function () {
            var result = _this.onOpening();
            if (result === true) {
                opener.open();
            }
            else if (result === false) {
                // DO NOTHING
            }
            else {
                result.then(function () {
                    opener.open();
                });
            }
        });
    };
    DButtonFile.prototype.onOpening = function () {
        var checker = this._checker;
        if (checker != null) {
            return checker();
        }
        return true;
    };
    DButtonFile.prototype.open = function () {
        this._opener.open();
    };
    DButtonFile.prototype.getType = function () {
        return "DButtonFile";
    };
    return DButtonFile;
}(DButton));
export { DButtonFile };
//# sourceMappingURL=d-button-file.js.map