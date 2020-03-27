/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DThemeWhiteBase } from "./d-theme-white-base";
var DThemeWhiteSlider = /** @class */ (function (_super) {
    __extends(DThemeWhiteSlider, _super);
    function DThemeWhiteSlider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteSlider.prototype.getInteractive = function () {
        return DBaseInteractive.CHILDREN;
    };
    return DThemeWhiteSlider;
}(DThemeWhiteBase));
export { DThemeWhiteSlider };
//# sourceMappingURL=d-theme-white-slider.js.map