/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogProcessing } from "../d-theme-white-dialog-processing";
import { DThemeWhiteDialogProcessingMessage } from "../d-theme-white-dialog-processing-message";
export var loadThemeWhiteDialogProcessing = function () {
    DThemeWhite.set("DDialogProcessing", DThemeWhiteDialogProcessing);
    DThemeWhite.set("DDialogProcessingMessage", DThemeWhiteDialogProcessingMessage);
};
//# sourceMappingURL=load-theme-white-dialog-processing.js.map