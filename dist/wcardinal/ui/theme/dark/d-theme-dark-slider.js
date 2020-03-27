/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DThemeDarkBase } from "./d-theme-dark-base";
var DThemeDarkSlider = /** @class */ (function (_super) {
    __extends(DThemeDarkSlider, _super);
    function DThemeDarkSlider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkSlider.prototype.getInteractive = function () {
        return DBaseInteractive.CHILDREN;
    };
    return DThemeDarkSlider;
}(DThemeDarkBase));
export { DThemeDarkSlider };
//# sourceMappingURL=d-theme-dark-slider.js.map