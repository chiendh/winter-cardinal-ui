/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapePointsStyle } from "../e-shape-points-style";
import { EShapeBar } from "./e-shape-bar";
import { EShapeBarPosition } from "./e-shape-bar-position";
export var deserializeBar = function (item, manager) {
    var shape = new EShapeBar(EShapeBarPosition.RIGHT, 10, 3, EShapePointsStyle.NONE);
    var result = EShapeDeserializer.deserialize(item, manager, shape);
    shape.points.deserialize(item[15], manager);
    return result;
};
//# sourceMappingURL=deserialize-bar.js.map