/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteCanvas } from "../d-theme-white-canvas";
import { DThemeWhiteCanvasContainer } from "../d-theme-white-canvas-container";
export var loadThemeWhiteCanvasContainer = function () {
    DThemeWhite.set("DCanvasContainer", DThemeWhiteCanvasContainer);
    DThemeWhite.set("DCanvas", DThemeWhiteCanvas);
};
//# sourceMappingURL=load-theme-white-canvas-container.js.map