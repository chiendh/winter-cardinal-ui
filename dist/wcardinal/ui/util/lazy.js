/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var Lazy = /** @class */ (function () {
    function Lazy(newInstance, options, base) {
        var _this = this;
        this.instance = null;
        this.newInstance = newInstance;
        this.options = options;
        if (base != null) {
            if (base.isActive()) {
                setTimeout(function () {
                    _this.get();
                }, 0);
            }
            base.on("active", function () {
                _this.get();
            });
        }
    }
    Lazy.prototype.get = function () {
        var instance = this.instance;
        if (instance == null) {
            instance = this.instance = new (this.newInstance)(this.options);
        }
        return instance;
    };
    return Lazy;
}());
export { Lazy };
//# sourceMappingURL=lazy.js.map