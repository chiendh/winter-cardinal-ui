/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeGroup } from "./e-shape-group";
export var deserializeGroup = function (item, manager) {
    var shape = new EShapeGroup();
    var result = EShapeDeserializer.deserialize(item, manager, shape);
    shape.size.init();
    return result;
};
//# sourceMappingURL=deserialize-group.js.map