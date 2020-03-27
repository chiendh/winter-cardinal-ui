/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseState } from "./d-base-state";
import { DListItem } from "./d-list-item";
import { DListItemSeparatorReflowable } from "./d-list-item-separator-reflowable";
var DListItemSeparator = /** @class */ (function (_super) {
    __extends(DListItemSeparator, _super);
    function DListItemSeparator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DListItemSeparator.prototype.init = function (options) {
        _super.prototype.init.call(this, options);
        this.interactive = false;
        this.buttonMode = false;
        this.setState(DBaseState.UNFOCUSABLE, true);
    };
    DListItemSeparator.prototype.initReflowable = function () {
        new DListItemSeparatorReflowable(this);
    };
    DListItemSeparator.prototype.getType = function () {
        return "DListItemSeparator";
    };
    return DListItemSeparator;
}(DListItem));
export { DListItemSeparator };
//# sourceMappingURL=d-list-item-separator.js.map