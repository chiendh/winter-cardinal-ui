/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A border mask.
 * Borders on masked parts are not rendered.
 */
export var DBorderMask;
(function (DBorderMask) {
    DBorderMask[DBorderMask["NONE"] = 0] = "NONE";
    DBorderMask[DBorderMask["TOP"] = 1] = "TOP";
    DBorderMask[DBorderMask["RIGHT"] = 2] = "RIGHT";
    DBorderMask[DBorderMask["BOTTOM"] = 4] = "BOTTOM";
    DBorderMask[DBorderMask["LEFT"] = 8] = "LEFT";
    DBorderMask[DBorderMask["TOP_RIGHT"] = 3] = "TOP_RIGHT";
    DBorderMask[DBorderMask["TOP_BOTTOM"] = 5] = "TOP_BOTTOM";
    DBorderMask[DBorderMask["TOP_LEFT"] = 9] = "TOP_LEFT";
    DBorderMask[DBorderMask["RIGHT_BOTTOM"] = 6] = "RIGHT_BOTTOM";
    DBorderMask[DBorderMask["RIGHT_LEFT"] = 10] = "RIGHT_LEFT";
    DBorderMask[DBorderMask["BOTTOM_LEFT"] = 12] = "BOTTOM_LEFT";
    DBorderMask[DBorderMask["NOT_TOP"] = 14] = "NOT_TOP";
    DBorderMask[DBorderMask["NOT_RIGHT"] = 13] = "NOT_RIGHT";
    DBorderMask[DBorderMask["NOT_BOTTOM"] = 11] = "NOT_BOTTOM";
    DBorderMask[DBorderMask["NOT_LEFT"] = 7] = "NOT_LEFT";
    DBorderMask[DBorderMask["ALL"] = 15] = "ALL";
})(DBorderMask || (DBorderMask = {}));
//# sourceMappingURL=d-border-mask.js.map