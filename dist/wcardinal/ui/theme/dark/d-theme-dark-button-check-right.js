/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DThemeDarkButtonCheck } from "./d-theme-dark-button-check";
var DThemeDarkButtonCheckRight = /** @class */ (function (_super) {
    __extends(DThemeDarkButtonCheckRight, _super);
    function DThemeDarkButtonCheckRight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkButtonCheckRight.prototype.getImageAlignWith = function () {
        return DAlignWith.PADDING;
    };
    DThemeDarkButtonCheckRight.prototype.getImageAlignHorizontal = function () {
        return DAlignHorizontal.RIGHT;
    };
    DThemeDarkButtonCheckRight.prototype.getImageMarginHorizontal = function () {
        return 0;
    };
    DThemeDarkButtonCheckRight.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.LEFT;
    };
    return DThemeDarkButtonCheckRight;
}(DThemeDarkButtonCheck));
export { DThemeDarkButtonCheckRight };
//# sourceMappingURL=d-theme-dark-button-check-right.js.map