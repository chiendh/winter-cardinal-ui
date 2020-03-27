/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { isString } from "../../util/is-string";
import { DThemeWhiteDropdownBase } from "./d-theme-white-dropdown-base";
var formatter = function (values) {
    if (values) {
        var result = "";
        var delimiter = "";
        for (var i = 0, imax = values.length; i < imax; ++i) {
            var value = values[i];
            var text = value.text;
            if (isString(text)) {
                result += delimiter + text;
                delimiter = ", ";
            }
            else if (text != null) {
                var computed = text(value.state);
                if (computed != null) {
                    result += delimiter + computed;
                    delimiter = ", ";
                }
            }
        }
        return result;
    }
    return "";
};
var DThemeWhiteSelectMultiple = /** @class */ (function (_super) {
    __extends(DThemeWhiteSelectMultiple, _super);
    function DThemeWhiteSelectMultiple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteSelectMultiple.prototype.newTextValue = function () {
        return [];
    };
    DThemeWhiteSelectMultiple.prototype.getTextValue = function (state) {
        return [];
    };
    DThemeWhiteSelectMultiple.prototype.getTextFormatter = function () {
        return formatter;
    };
    return DThemeWhiteSelectMultiple;
}(DThemeWhiteDropdownBase));
export { DThemeWhiteSelectMultiple };
//# sourceMappingURL=d-theme-white-select-multiple.js.map