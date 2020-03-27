/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
export var isNumber = function (target) {
    return (typeof target === "number") ||
        (Object.prototype.toString.call(target) === "[object Number]");
};
//# sourceMappingURL=is-number.js.map