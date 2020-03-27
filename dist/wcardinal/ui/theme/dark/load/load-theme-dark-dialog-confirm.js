/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogConfirm } from "../d-theme-dark-dialog-confirm";
import { DThemeDarkDialogConfirmMessage } from "../d-theme-dark-dialog-confirm-message";
export var loadThemeDarkDialogConfirm = function () {
    DThemeDark.set("DDialogConfirm", DThemeDarkDialogConfirm);
    DThemeDark.set("DDialogConfirmMessage", DThemeDarkDialogConfirmMessage);
};
//# sourceMappingURL=load-theme-dark-dialog-confirm.js.map