/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DDialogTime } from "./d-dialog-time";
var DDialogTimes = /** @class */ (function () {
    function DDialogTimes() {
    }
    DDialogTimes.getInstance = function () {
        if (DDialogTimes.INSTANCE == null) {
            DDialogTimes.INSTANCE = new DDialogTime();
        }
        return DDialogTimes.INSTANCE;
    };
    return DDialogTimes;
}());
export { DDialogTimes };
//# sourceMappingURL=d-dialog-times.js.map