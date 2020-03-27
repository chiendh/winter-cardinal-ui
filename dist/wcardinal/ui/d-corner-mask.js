/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
export var DCornerMask;
(function (DCornerMask) {
    DCornerMask[DCornerMask["NONE"] = 0] = "NONE";
    DCornerMask[DCornerMask["TOP_LEFT"] = 1] = "TOP_LEFT";
    DCornerMask[DCornerMask["TOP_RIGHT"] = 2] = "TOP_RIGHT";
    DCornerMask[DCornerMask["BOTTOM_LEFT"] = 4] = "BOTTOM_LEFT";
    DCornerMask[DCornerMask["BOTTOM_RIGHT"] = 8] = "BOTTOM_RIGHT";
    DCornerMask[DCornerMask["TOP"] = 3] = "TOP";
    DCornerMask[DCornerMask["BOTTOM"] = 12] = "BOTTOM";
    DCornerMask[DCornerMask["LEFT"] = 5] = "LEFT";
    DCornerMask[DCornerMask["RIGHT"] = 10] = "RIGHT";
    DCornerMask[DCornerMask["ALL"] = 15] = "ALL";
})(DCornerMask || (DCornerMask = {}));
//# sourceMappingURL=d-corner-mask.js.map