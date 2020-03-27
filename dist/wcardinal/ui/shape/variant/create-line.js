/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeLine } from "./e-shape-line";
export var createLine = function (points, segments, strokeWidth, style) {
    return new EShapeLine(points, segments, strokeWidth, style);
};
export var toLineStrokeWidth = function (index, resources) {
    if (0 <= index && index < resources.length) {
        try {
            return JSON.parse(resources[index])[3];
        }
        catch (e) {
            //
        }
    }
    return 8;
};
//# sourceMappingURL=create-line.js.map