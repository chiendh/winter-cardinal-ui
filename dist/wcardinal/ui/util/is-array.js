/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
export var isArray = Array.isArray || (function (target) {
    return Object.prototype.toString.call(target) === "[object Array]";
});
//# sourceMappingURL=is-array.js.map