/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DButtonBase } from "./d-button-base";
import { DLink } from "./d-link";
var DButtonLink = /** @class */ (function (_super) {
    __extends(DButtonLink, _super);
    function DButtonLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DButtonLink.prototype.initOnClick = function (options) {
        var _this = this;
        var link = new DLink(this.theme, options);
        this._link = link;
        link.apply(this, function (e) {
            _this.onClick(e);
        });
    };
    DButtonLink.prototype.onActivate = function (e) {
        _super.prototype.onActivate.call(this, e);
        this.open(this._link.inNewWindow(e));
    };
    DButtonLink.prototype.open = function (inNewWindow) {
        this._link.open(inNewWindow);
    };
    DButtonLink.prototype.getType = function () {
        return "DButtonLink";
    };
    return DButtonLink;
}(DButtonBase));
export { DButtonLink };
//# sourceMappingURL=d-button-link.js.map