/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
export var toPadded = function (str, length, c) {
    var strLength = str.length;
    if (length < strLength) {
        return str;
    }
    var padding = "";
    for (var i = 0, imax = length - strLength; i < imax; ++i) {
        padding += c;
    }
    return padding + str;
};
//# sourceMappingURL=to-padded.js.map