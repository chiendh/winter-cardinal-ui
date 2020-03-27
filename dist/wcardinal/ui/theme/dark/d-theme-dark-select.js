/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { isString } from "../../util/is-string";
import { DThemeDarkDropdownBase } from "./d-theme-dark-dropdown-base";
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
var DThemeDarkSelect = /** @class */ (function (_super) {
    __extends(DThemeDarkSelect, _super);
    function DThemeDarkSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkSelect.prototype.newTextValue = function () {
        return null;
    };
    DThemeDarkSelect.prototype.getTextValue = function (state) {
        return null;
    };
    DThemeDarkSelect.prototype.getTextFormatter = function () {
        return formatter;
    };
    return DThemeDarkSelect;
}(DThemeDarkDropdownBase));
export { DThemeDarkSelect };
//# sourceMappingURL=d-theme-dark-select.js.map