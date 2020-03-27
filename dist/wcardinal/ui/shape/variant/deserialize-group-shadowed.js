/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeGroupShadowed } from "./e-shape-group-shadowed";
export var deserializeGroupShadowed = function (item, manager) {
    var shape = new EShapeGroupShadowed();
    var result = EShapeDeserializer.deserialize(item, manager, shape);
    shape.size.init();
    return result;
};
//# sourceMappingURL=deserialize-group-shadowed.js.map