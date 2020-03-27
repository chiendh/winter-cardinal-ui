/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Texture } from "pixi.js";
import { EShapeUploadedBase } from "../e-shape-uploaded";
var EShapeNullUploaded = /** @class */ (function (_super) {
    __extends(EShapeNullUploaded, _super);
    function EShapeNullUploaded(buffer, voffset, ioffset) {
        return _super.call(this, buffer, voffset, ioffset, 0, 0, 1) || this;
    }
    EShapeNullUploaded.prototype.init = function (shape) {
        _super.prototype.init.call(this, shape);
        this.texture = shape.texture || Texture.WHITE;
        return this;
    };
    EShapeNullUploaded.prototype.update = function (shape) {
        // DO NOTHING
    };
    return EShapeNullUploaded;
}(EShapeUploadedBase));
export { EShapeNullUploaded };
//# sourceMappingURL=e-shape-null-uploaded.js.map