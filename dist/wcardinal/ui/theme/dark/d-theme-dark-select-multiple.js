/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { isString } from "../../util/is-string";
import { DThemeDarkDropdownBase } from "./d-theme-dark-dropdown-base";
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
var DThemeDarkSelectMultiple = /** @class */ (function (_super) {
    __extends(DThemeDarkSelectMultiple, _super);
    function DThemeDarkSelectMultiple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkSelectMultiple.prototype.newTextValue = function () {
        return [];
    };
    DThemeDarkSelectMultiple.prototype.getTextValue = function (state) {
        return [];
    };
    DThemeDarkSelectMultiple.prototype.getTextFormatter = function () {
        return formatter;
    };
    return DThemeDarkSelectMultiple;
}(DThemeDarkDropdownBase));
export { DThemeDarkSelectMultiple };
//# sourceMappingURL=d-theme-dark-select-multiple.js.map