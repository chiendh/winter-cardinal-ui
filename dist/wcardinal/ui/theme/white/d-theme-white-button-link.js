/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeWhiteButtonAmbient } from "./d-theme-white-button-ambient";
import { DThemeWhiteLinks } from "./d-theme-white-links";
DThemeWhiteLinks.init();
var DThemeWhiteButtonLink = /** @class */ (function (_super) {
    __extends(DThemeWhiteButtonLink, _super);
    function DThemeWhiteButtonLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteButtonLink.prototype.getLinkMenuOptions = function () {
        return DThemeWhiteLinks.getLinkMenuOptions();
    };
    return DThemeWhiteButtonLink;
}(DThemeWhiteButtonAmbient));
export { DThemeWhiteButtonLink };
//# sourceMappingURL=d-theme-white-button-link.js.map