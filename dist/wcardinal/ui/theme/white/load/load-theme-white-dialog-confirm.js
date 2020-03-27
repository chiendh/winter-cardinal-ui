/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogConfirm } from "../d-theme-white-dialog-confirm";
import { DThemeWhiteDialogConfirmMessage } from "../d-theme-white-dialog-confirm-message";
export var loadThemeWhiteDialogConfirm = function () {
    DThemeWhite.set("DDialogConfirm", DThemeWhiteDialogConfirm);
    DThemeWhite.set("DDialogConfirmMessage", DThemeWhiteDialogConfirmMessage);
};
//# sourceMappingURL=load-theme-white-dialog-confirm.js.map