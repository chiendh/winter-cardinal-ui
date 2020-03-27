/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DThemeDarkText } from "./d-theme-dark-text";
var DThemeDarkInputLabel = /** @class */ (function (_super) {
    __extends(DThemeDarkInputLabel, _super);
    function DThemeDarkInputLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkInputLabel.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.RIGHT;
    };
    DThemeDarkInputLabel.prototype.getWidth = function () {
        return 60;
    };
    DThemeDarkInputLabel.prototype.getHeight = function () {
        return this.getLineHeight();
    };
    return DThemeDarkInputLabel;
}(DThemeDarkText));
export { DThemeDarkInputLabel };
//# sourceMappingURL=d-theme-dark-input-label.js.map