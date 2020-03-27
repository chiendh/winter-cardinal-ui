/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeCapabilities } from "../e-shape-capabilities";
import { EShapeCapability } from "../e-shape-capability";
import { EShapeDeserializers } from "../e-shape-deserializers";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createLineOfTriangleRoundedsUploaded } from "../variant/create-line-of-triangle-roundeds-uploaded";
import { deserializeLineOfTriangleRoundeds } from "../variant/deserialize-line-of-triangle-roundeds";
export var loadShapeLineOfTriangleRoundeds = function () {
    EShapeUploadeds[EShapeType.LINE_OF_TRIANGLE_ROUNDEDS] = createLineOfTriangleRoundedsUploaded;
    EShapeDeserializers[EShapeType.LINE_OF_TRIANGLE_ROUNDEDS] = deserializeLineOfTriangleRoundeds;
    EShapeCapabilities.set(EShapeType.LINE_OF_TRIANGLE_ROUNDEDS, EShapeCapability.PRIMITIVE | EShapeCapability.BORDER_RADIUS);
};
//# sourceMappingURL=load-shape-line-of-triangle-roundeds.js.map