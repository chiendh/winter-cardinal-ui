/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { toLabel } from "../../util/to-label";
import { DThemeWhiteButton } from "./d-theme-white-button";
var DThemeWhiteButtonSelect = /** @class */ (function (_super) {
    __extends(DThemeWhiteButtonSelect, _super);
    function DThemeWhiteButtonSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteButtonSelect.prototype.getTextFormatter = function () {
        return toLabel;
    };
    DThemeWhiteButtonSelect.prototype.newTextValue = function () {
        return null;
    };
    return DThemeWhiteButtonSelect;
}(DThemeWhiteButton));
export { DThemeWhiteButtonSelect };
//# sourceMappingURL=d-theme-white-button-select.js.map