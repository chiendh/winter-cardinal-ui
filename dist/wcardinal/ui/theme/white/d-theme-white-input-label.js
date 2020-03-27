/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DThemeWhiteText } from "./d-theme-white-text";
var DThemeWhiteInputLabel = /** @class */ (function (_super) {
    __extends(DThemeWhiteInputLabel, _super);
    function DThemeWhiteInputLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteInputLabel.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.RIGHT;
    };
    DThemeWhiteInputLabel.prototype.getWidth = function () {
        return 60;
    };
    DThemeWhiteInputLabel.prototype.getHeight = function () {
        return this.getLineHeight();
    };
    return DThemeWhiteInputLabel;
}(DThemeWhiteText));
export { DThemeWhiteInputLabel };
//# sourceMappingURL=d-theme-white-input-label.js.map