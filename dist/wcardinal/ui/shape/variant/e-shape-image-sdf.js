/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeType } from "../e-shape-type";
import { EShapeImage } from "./e-shape-image";
var EShapeImageSdf = /** @class */ (function (_super) {
    __extends(EShapeImageSdf, _super);
    function EShapeImageSdf(image, type) {
        if (type === void 0) { type = EShapeType.IMAGE_SDF; }
        return _super.call(this, image, type) || this;
    }
    EShapeImageSdf.prototype.clone = function () {
        return new EShapeImageSdf(this.image).copy(this);
    };
    return EShapeImageSdf;
}(EShapeImage));
export { EShapeImageSdf };
//# sourceMappingURL=e-shape-image-sdf.js.map