/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Mesh, MeshMaterial } from "pixi.js";
import { DBaseBorderMeshGeometry } from "./d-base-border-mesh-geometry";
var DBaseBorderMesh = /** @class */ (function (_super) {
    __extends(DBaseBorderMesh, _super);
    function DBaseBorderMesh(texture, borderSize, borderMask, cornerMask) {
        return _super.call(this, new DBaseBorderMeshGeometry(texture, 100, 100, borderSize, borderMask, cornerMask), new MeshMaterial(texture)) || this;
    }
    Object.defineProperty(DBaseBorderMesh.prototype, "texture", {
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
    Object.defineProperty(DBaseBorderMesh.prototype, "width", {
        get: function () {
            return this.geometry.width;
        },
        set: function (width) {
            this.geometry.width = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DBaseBorderMesh.prototype, "height", {
        get: function () {
            return this.geometry.height;
        },
        set: function (height) {
            this.geometry.height = height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DBaseBorderMesh.prototype, "borderSize", {
        get: function () {
            return this.geometry.borderSize;
        },
        set: function (borderSize) {
            this.geometry.borderSize = borderSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DBaseBorderMesh.prototype, "borderMask", {
        get: function () {
            return this.geometry.borderMask;
        },
        set: function (borderMask) {
            this.geometry.borderMask = borderMask;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DBaseBorderMesh.prototype, "cornerMask", {
        get: function () {
            return this.geometry.cornerMask;
        },
        set: function (cornerMask) {
            this.geometry.cornerMask = cornerMask;
        },
        enumerable: true,
        configurable: true
    });
    DBaseBorderMesh.prototype._render = function (renderer) {
        this.geometry.update();
        _super.prototype._render.call(this, renderer);
    };
    DBaseBorderMesh.prototype.update = function () {
        this.geometry.update();
    };
    return DBaseBorderMesh;
}(Mesh));
export { DBaseBorderMesh };
//# sourceMappingURL=d-base-border-mesh.js.map