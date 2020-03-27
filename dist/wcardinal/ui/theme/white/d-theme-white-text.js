/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeWhiteTextBase } from "./d-theme-white-text-base";
var DThemeWhiteText = /** @class */ (function (_super) {
    __extends(DThemeWhiteText, _super);
    function DThemeWhiteText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteText.prototype.getHeight = function () {
        return this.getLineHeight();
    };
    return DThemeWhiteText;
}(DThemeWhiteTextBase));
export { DThemeWhiteText };
//# sourceMappingURL=d-theme-white-text.js.map