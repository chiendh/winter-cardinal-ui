/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var DMenuContext = /** @class */ (function () {
    function DMenuContext(owner) {
        this._owner = owner;
        this._closeables = [];
    }
    DMenuContext.prototype.indexOf = function (target) {
        return this._closeables.indexOf(target);
    };
    DMenuContext.prototype.close = function (index) {
        var closeables = this._closeables;
        var imin = Math.max(0, index);
        for (var i = closeables.length - 1; imin <= i; --i) {
            closeables[i].close();
        }
    };
    DMenuContext.prototype.add = function (closeable) {
        this._closeables.push(closeable);
    };
    DMenuContext.prototype.trim = function (closeable) {
        this.close(this.indexOf(closeable) + 1);
    };
    DMenuContext.prototype.remove = function (closeable) {
        var index = this.indexOf(closeable);
        if (0 <= index) {
            this.close(index + 1);
            this._closeables.splice(index, 1);
            if (index === 0) {
                this._owner.focus();
            }
        }
    };
    return DMenuContext;
}());
export { DMenuContext };
//# sourceMappingURL=d-menu-context.js.map