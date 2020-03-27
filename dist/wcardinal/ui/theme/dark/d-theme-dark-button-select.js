/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { toLabel } from "../../util/to-label";
import { DThemeDarkButton } from "./d-theme-dark-button";
var DThemeDarkButtonSelect = /** @class */ (function (_super) {
    __extends(DThemeDarkButtonSelect, _super);
    function DThemeDarkButtonSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkButtonSelect.prototype.getTextFormatter = function () {
        return toLabel;
    };
    DThemeDarkButtonSelect.prototype.newTextValue = function () {
        return null;
    };
    return DThemeDarkButtonSelect;
}(DThemeDarkButton));
export { DThemeDarkButtonSelect };
//# sourceMappingURL=d-theme-dark-button-select.js.map