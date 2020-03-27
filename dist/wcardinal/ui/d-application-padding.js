/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var DApplicationPadding = /** @class */ (function () {
    function DApplicationPadding(top, right, bottom, left) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }
    DApplicationPadding.prototype.getTheme = function () {
        throw new Error("Not supported");
    };
    DApplicationPadding.prototype.setTheme = function (theme) {
        throw new Error("Not supported");
    };
    DApplicationPadding.prototype.getTop = function () {
        return this.left;
    };
    DApplicationPadding.prototype.getRight = function () {
        return this.right;
    };
    DApplicationPadding.prototype.getBottom = function () {
        return this.bottom;
    };
    DApplicationPadding.prototype.getLeft = function () {
        return this.left;
    };
    DApplicationPadding.prototype.set = function (top, right, bottom, left) {
        if (right == null) {
            this.top = top;
            this.right = top;
            this.bottom = top;
            this.left = top;
        }
        else if (bottom == null) {
            this.top = top;
            this.right = right;
            this.bottom = top;
            this.left = right;
        }
        else if (left == null) {
            this.top = top;
            this.right = right;
            this.bottom = bottom;
            this.left = right;
        }
        else {
            this.top = top;
            this.right = right;
            this.bottom = bottom;
            this.left = left;
        }
    };
    return DApplicationPadding;
}());
export { DApplicationPadding };
//# sourceMappingURL=d-application-padding.js.map