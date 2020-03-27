/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DDialogDatetime } from "./d-dialog-datetime";
var DDialogDatetimes = /** @class */ (function () {
    function DDialogDatetimes() {
    }
    DDialogDatetimes.getInstance = function () {
        if (DDialogDatetimes.INSTANCE == null) {
            DDialogDatetimes.INSTANCE = new DDialogDatetime();
        }
        return DDialogDatetimes.INSTANCE;
    };
    return DDialogDatetimes;
}());
export { DDialogDatetimes };
//# sourceMappingURL=d-dialog-datetimes.js.map