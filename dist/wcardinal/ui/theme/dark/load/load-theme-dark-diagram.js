/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDiagram } from "../d-theme-dark-diagram";
import { DThemeDarkDiagramCanvas } from "../d-theme-dark-diagram-canvas";
export var loadThemeDarkDiagram = function () {
    DThemeDark.set("DDiagram", DThemeDarkDiagram);
    DThemeDark.set("DDiagramCanvas", DThemeDarkDiagramCanvas);
};
//# sourceMappingURL=load-theme-dark-diagram.js.map