/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var UtilName = /** @class */ (function () {
    function UtilName() {
    }
    UtilName.create = function (type) {
        var mapping = this._mapping;
        if (type in mapping) {
            return type + " " + ++mapping[type];
        }
        else {
            mapping[type] = 1;
            return type + " 1";
        }
    };
    UtilName._mapping = {};
    return UtilName;
}());
export { UtilName };
//# sourceMappingURL=util-name.js.map