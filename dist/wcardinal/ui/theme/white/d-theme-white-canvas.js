/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeWhiteBase } from "./d-theme-white-base";
var DThemeWhiteCanvas = /** @class */ (function (_super) {
    __extends(DThemeWhiteCanvas, _super);
    function DThemeWhiteCanvas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteCanvas.prototype.getBackgroundColor = function () {
        return 0xffffff;
    };
    DThemeWhiteCanvas.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeWhiteCanvas.prototype.getCornerMask = function () {
        return DCornerMask.ALL;
    };
    DThemeWhiteCanvas.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    return DThemeWhiteCanvas;
}(DThemeWhiteBase));
export { DThemeWhiteCanvas };
//# sourceMappingURL=d-theme-white-canvas.js.map