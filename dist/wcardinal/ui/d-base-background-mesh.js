/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Mesh, MeshMaterial } from "pixi.js";
import { DBaseBackgroundMeshGeometry } from "./d-base-background-mesh-geometry";
var DBaseBackgroundMesh = /** @class */ (function (_super) {
    __extends(DBaseBackgroundMesh, _super);
    function DBaseBackgroundMesh(texture, borderSize, cornerMask) {
        return _super.call(this, new DBaseBackgroundMeshGeometry(texture, 100, 100, borderSize, cornerMask), new MeshMaterial(texture)) || this;
    }
    Object.defineProperty(DBaseBackgroundMesh.prototype, "texture", {
        get: function () {
            return this.shader.texture;
        },
        set: function (texture) {
            if (this.shader.texture !== texture) {
                this.shader.texture = texture;
                this.geometry.texture = texture;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DBaseBackgroundMesh.prototype, "width", {
        get: function () {
            return this.geometry.width;
        },
        set: function (width) {
            this.geometry.width = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DBaseBackgroundMesh.prototype, "height", {
        get: function () {
            return this.geometry.height;
        },
        set: function (height) {
            this.geometry.height = height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DBaseBackgroundMesh.prototype, "borderSize", {
        get: function () {
            return this.geometry.cornerMask;
        },
        set: function (borderSize) {
            this.geometry.borderSize = borderSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DBaseBackgroundMesh.prototype, "cornerMask", {
        get: function () {
            return this.geometry.cornerMask;
        },
        set: function (cornerMask) {
            this.geometry.cornerMask = cornerMask;
        },
        enumerable: true,
        configurable: true
    });
    DBaseBackgroundMesh.prototype._render = function (renderer) {
        this.geometry.update();
        _super.prototype._render.call(this, renderer);
    };
    DBaseBackgroundMesh.prototype.update = function () {
        this.geometry.update();
    };
    return DBaseBackgroundMesh;
}(Mesh));
export { DBaseBackgroundMesh };
//# sourceMappingURL=d-base-background-mesh.js.map