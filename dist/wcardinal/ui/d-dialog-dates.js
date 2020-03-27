/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DDialogDate } from "./d-dialog-date";
var DDialogDates = /** @class */ (function () {
    function DDialogDates() {
    }
    DDialogDates.getInstance = function () {
        if (DDialogDates.INSTANCE == null) {
            DDialogDates.INSTANCE = new DDialogDate();
        }
        return DDialogDates.INSTANCE;
    };
    return DDialogDates;
}());
export { DDialogDates };
//# sourceMappingURL=d-dialog-dates.js.map