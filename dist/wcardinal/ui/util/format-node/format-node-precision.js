/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var FormatNodePrecision = /** @class */ (function () {
    function FormatNodePrecision(precision) {
        if (precision != null) {
            this.precision = +precision.substring(1, precision.length);
        }
        else {
            this.precision = undefined;
        }
    }
    return FormatNodePrecision;
}());
export { FormatNodePrecision };
//# sourceMappingURL=format-node-precision.js.map