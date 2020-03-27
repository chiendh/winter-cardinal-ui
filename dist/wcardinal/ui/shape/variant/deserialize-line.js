/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeDefaults } from "../e-shape-defaults";
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeLine } from "./e-shape-line";
export var deserializeLine = function (item, manager) {
    var resources = manager.resources;
    var resourceId = item[15];
    if (0 <= resourceId && resourceId < resources.length) {
        var parsed = manager.extensions.get(resourceId);
        if (parsed == null) {
            parsed = JSON.parse(resources[resourceId]);
            manager.extensions.set(resourceId, parsed);
        }
        var shape = new EShapeLine(parsed[0], parsed[1], EShapeDefaults.STROKE_WIDTH, parsed[2]);
        return EShapeDeserializer.deserialize(item, manager, shape);
    }
    return null;
};
//# sourceMappingURL=deserialize-line.js.map