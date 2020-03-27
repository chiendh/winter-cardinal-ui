/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeType } from "../e-shape-type";
import { EShapeRectangle } from "./e-shape-rectangle";
var EShapeImage = /** @class */ (function (_super) {
    __extends(EShapeImage, _super);
    function EShapeImage(image, type) {
        if (type === void 0) { type = EShapeType.IMAGE; }
        var _this = _super.call(this, type) || this;
        if (image != null) {
            _this.image = image;
            _this.size.set(image.width, image.height);
        }
        _this.fill.alpha = 1.0;
        return _this;
    }
    EShapeImage.prototype.clone = function () {
        return new EShapeImage(this.image).copy(this);
    };
    return EShapeImage;
}(EShapeRectangle));
export { EShapeImage };
//# sourceMappingURL=e-shape-image.js.map