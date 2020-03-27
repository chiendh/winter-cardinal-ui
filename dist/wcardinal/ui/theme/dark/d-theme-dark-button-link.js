/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeDarkButtonAmbient } from "./d-theme-dark-button-ambient";
import { DThemeDarkLinks } from "./d-theme-dark-links";
DThemeDarkLinks.init();
var DThemeDarkButtonLink = /** @class */ (function (_super) {
    __extends(DThemeDarkButtonLink, _super);
    function DThemeDarkButtonLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkButtonLink.prototype.getLinkMenuOptions = function () {
        return DThemeDarkLinks.getLinkMenuOptions();
    };
    return DThemeDarkButtonLink;
}(DThemeDarkButtonAmbient));
export { DThemeDarkButtonLink };
//# sourceMappingURL=d-theme-dark-button-link.js.map