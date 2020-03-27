/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
export var DCommandFlag;
(function (DCommandFlag) {
    DCommandFlag[DCommandFlag["NONE"] = 0] = "NONE";
    /**
     * Commands with a `UNSTORABLE` flag will not be queued to the `done` queue.
     */
    DCommandFlag[DCommandFlag["UNSTORABLE"] = 1] = "UNSTORABLE";
    /**
     * Commands with a `CLEAR` flag clears the command queue.
     */
    DCommandFlag[DCommandFlag["CLEAR"] = 2] = "CLEAR";
})(DCommandFlag || (DCommandFlag = {}));
//# sourceMappingURL=d-command-flag.js.map