/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeDarkTextBase } from "./d-theme-dark-text-base";
var DThemeDarkText = /** @class */ (function (_super) {
    __extends(DThemeDarkText, _super);
    function DThemeDarkText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkText.prototype.getHeight = function () {
        return this.getLineHeight();
    };
    return DThemeDarkText;
}(DThemeDarkTextBase));
export { DThemeDarkText };
//# sourceMappingURL=d-theme-dark-text.js.map