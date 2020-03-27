/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DThemeWhiteButtonCheck } from "./d-theme-white-button-check";
var DThemeWhiteButtonCheckRight = /** @class */ (function (_super) {
    __extends(DThemeWhiteButtonCheckRight, _super);
    function DThemeWhiteButtonCheckRight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteButtonCheckRight.prototype.getImageAlignWith = function () {
        return DAlignWith.PADDING;
    };
    DThemeWhiteButtonCheckRight.prototype.getImageAlignHorizontal = function () {
        return DAlignHorizontal.RIGHT;
    };
    DThemeWhiteButtonCheckRight.prototype.getImageMarginHorizontal = function () {
        return 0;
    };
    DThemeWhiteButtonCheckRight.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.LEFT;
    };
    return DThemeWhiteButtonCheckRight;
}(DThemeWhiteButtonCheck));
export { DThemeWhiteButtonCheckRight };
//# sourceMappingURL=d-theme-white-button-check-right.js.map