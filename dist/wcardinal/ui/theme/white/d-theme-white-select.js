/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { isString } from "../../util/is-string";
import { DThemeWhiteDropdownBase } from "./d-theme-white-dropdown-base";
var formatter = function (value) {
    if (value) {
        var text = value.text;
        if (isString(text)) {
            return text;
        }
        else if (text != null) {
            var computed = text(value.state);
            if (computed != null) {
                return computed;
            }
        }
    }
    return "";
};
var DThemeWhiteSelect = /** @class */ (function (_super) {
    __extends(DThemeWhiteSelect, _super);
    function DThemeWhiteSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteSelect.prototype.newTextValue = function () {
        return null;
    };
    DThemeWhiteSelect.prototype.getTextValue = function (state) {
        return null;
    };
    DThemeWhiteSelect.prototype.getTextFormatter = function () {
        return formatter;
    };
    return DThemeWhiteSelect;
}(DThemeWhiteDropdownBase));
export { DThemeWhiteSelect };
//# sourceMappingURL=d-theme-white-select.js.map