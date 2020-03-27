/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
export var isString = function (target) {
    return (typeof target === "string") ||
        (Object.prototype.toString.call(target) === "[object String]");
};
//# sourceMappingURL=is-string.js.map