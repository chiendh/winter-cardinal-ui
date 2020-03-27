/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
export var DMouseModifier;
(function (DMouseModifier) {
    DMouseModifier[DMouseModifier["NONE"] = 0] = "NONE";
    DMouseModifier[DMouseModifier["CTRL"] = 1] = "CTRL";
    DMouseModifier[DMouseModifier["SHIFT"] = 2] = "SHIFT";
    DMouseModifier[DMouseModifier["ALT"] = 4] = "ALT";
    DMouseModifier[DMouseModifier["AND"] = 8] = "AND";
    DMouseModifier[DMouseModifier["OR"] = 16] = "OR";
    DMouseModifier[DMouseModifier["NOT_NONE"] = 23] = "NOT_NONE";
})(DMouseModifier || (DMouseModifier = {}));
//# sourceMappingURL=d-mouse-modifier.js.map