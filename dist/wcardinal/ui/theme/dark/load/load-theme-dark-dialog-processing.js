/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogProcessing } from "../d-theme-dark-dialog-processing";
import { DThemeDarkDialogProcessingMessage } from "../d-theme-dark-dialog-processing-message";
export var loadThemeDarkDialogProcessing = function () {
    DThemeDark.set("DDialogProcessing", DThemeDarkDialogProcessing);
    DThemeDark.set("DDialogProcessingMessage", DThemeDarkDialogProcessingMessage);
};
//# sourceMappingURL=load-theme-dark-dialog-processing.js.map