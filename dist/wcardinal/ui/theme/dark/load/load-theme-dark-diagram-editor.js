/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDiagramCanvasEditor } from "../d-theme-dark-diagram-canvas-editor";
import { DThemeDarkDiagramEditor } from "../d-theme-dark-diagram-editor";
import { loadThemeDarkShapeActionValue } from "./load-theme-dark-shape-action-value";
export var loadThemeDarkDiagramEditor = function () {
    DThemeDark.set("DDiagramEditor", DThemeDarkDiagramEditor);
    DThemeDark.set("DDiagramCanvasEditor", DThemeDarkDiagramCanvasEditor);
    loadThemeDarkShapeActionValue();
};
//# sourceMappingURL=load-theme-dark-diagram-editor.js.map