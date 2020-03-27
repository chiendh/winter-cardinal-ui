/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeDarkBase } from "./d-theme-dark-base";
var DThemeDarkCanvas = /** @class */ (function (_super) {
    __extends(DThemeDarkCanvas, _super);
    function DThemeDarkCanvas() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.COLOR = 0x2E2E2E;
        return _this;
    }
    DThemeDarkCanvas.prototype.getBackgroundColor = function () {
        return this.COLOR;
    };
    DThemeDarkCanvas.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeDarkCanvas.prototype.getCornerMask = function () {
        return DCornerMask.ALL;
    };
    DThemeDarkCanvas.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    return DThemeDarkCanvas;
}(DThemeDarkBase));
export { DThemeDarkCanvas };
//# sourceMappingURL=d-theme-dark-canvas.js.map