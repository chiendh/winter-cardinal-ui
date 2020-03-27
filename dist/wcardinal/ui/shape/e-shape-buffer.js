/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { Buffer, DRAW_MODES, Geometry, Texture } from "pixi.js";
import { EShapeBufferUnitBuilder } from "./e-shape-buffer-unit-builder";
import { EShapeType } from "./e-shape-type";
import { EShapeUploadeds } from "./e-shape-uploadeds";
var EShapeBuffer = /** @class */ (function () {
    function EShapeBuffer(ntriangles, renderer) {
        var nindices = ntriangles * 3;
        var nvertices = nindices;
        this.vertices = new Float32Array(nvertices * 2);
        this._vertexCapacity = nvertices;
        this._vertexCount = 0;
        this._vertexBuffer = null;
        this.clippings = new Float32Array(nvertices * 3);
        this._clippingBuffer = null;
        this.steps = new Float32Array(nvertices * 6);
        this._stepBuffer = null;
        this.colorFills = new Float32Array(nvertices * 4);
        this._colorFillBuffer = null;
        this.colorStrokes = new Float32Array(nvertices * 4);
        this._colorStrokeBuffer = null;
        this.uvs = new Float32Array(nvertices * 2);
        this._uvBuffer = null;
        var isIndicesShort = (nvertices <= 65535);
        this.indices = (isIndicesShort ? new Uint16Array(nindices) : new Uint32Array(nindices));
        this._indexCapacity = ntriangles;
        this._indexCount = 0;
        this.indexCountRequested = 0;
        this._indexBuffer = null;
        this._renderer = renderer;
        this._builder = new EShapeBufferUnitBuilder();
        this._geometry = null;
    }
    EShapeBuffer.prototype.updateVertices = function () {
        var vertexBuffer = this._vertexBuffer;
        if (vertexBuffer) {
            vertexBuffer.update();
        }
    };
    EShapeBuffer.prototype.updateClippings = function () {
        var clippingBuffer = this._clippingBuffer;
        if (clippingBuffer) {
            clippingBuffer.update();
        }
    };
    EShapeBuffer.prototype.updateSteps = function () {
        var stepBuffer = this._stepBuffer;
        if (stepBuffer) {
            stepBuffer.update();
        }
    };
    EShapeBuffer.prototype.updateColorFills = function () {
        var colorFillBuffer = this._colorFillBuffer;
        if (colorFillBuffer) {
            colorFillBuffer.update();
        }
    };
    EShapeBuffer.prototype.updateColorStrokes = function () {
        var colorStrokeBuffer = this._colorStrokeBuffer;
        if (colorStrokeBuffer) {
            colorStrokeBuffer.update();
        }
    };
    EShapeBuffer.prototype.updateUvs = function () {
        var uvBuffer = this._uvBuffer;
        if (uvBuffer) {
            uvBuffer.update();
        }
    };
    EShapeBuffer.prototype.updateIndices = function () {
        var indexBuffer = this._indexBuffer;
        if (indexBuffer) {
            indexBuffer.update();
        }
    };
    EShapeBuffer.prototype.getGeometry = function () {
        var result = this._geometry;
        if (result == null) {
            this._vertexBuffer = new Buffer(this.vertices, false, false);
            this._clippingBuffer = new Buffer(this.clippings, false, false);
            this._stepBuffer = new Buffer(this.steps, false, false);
            this._colorFillBuffer = new Buffer(this.colorFills, false, false);
            this._colorStrokeBuffer = new Buffer(this.colorStrokes, false, false);
            this._uvBuffer = new Buffer(this.uvs, false, false);
            this._indexBuffer = new Buffer(this.indices, false, true);
            this._geometry = result = new Geometry()
                .addIndex(this._indexBuffer)
                .addAttribute("aPosition", this._vertexBuffer, 2)
                .addAttribute("aClipping", this._clippingBuffer, 3)
                .addAttribute("aStep", this._stepBuffer, 2)
                .addAttribute("aAntialias", this._stepBuffer, 4)
                .addAttribute("aColorFill", this._colorFillBuffer, 4)
                .addAttribute("aColorStroke", this._colorStrokeBuffer, 4)
                .addAttribute("aUv", this._uvBuffer, 2);
        }
        return result;
    };
    EShapeBuffer.prototype.upload = function () {
        this._renderer.geometry.bind(this.getGeometry());
    };
    EShapeBuffer.prototype.render = function (shader) {
        var renderer = this._renderer;
        renderer.geometry.bind(this.getGeometry());
        var units = this._builder.units;
        var unitCount = units.length;
        if (0 < unitCount) {
            var type = DRAW_MODES.TRIANGLES;
            var unit0 = null;
            var unit1 = units[0];
            var ioffset0 = 0;
            var ioffset1 = unit1.indexOffset * 3;
            var vcount = 0;
            var texture = Texture.WHITE;
            for (var i = 0, imax = unitCount - 1; i < imax; ++i) {
                unit0 = unit1;
                unit1 = units[i + 1];
                ioffset0 = ioffset1;
                ioffset1 = unit1.indexOffset * 3;
                vcount = ioffset1 - ioffset0;
                texture = unit0.texture || Texture.WHITE;
                if (0 < vcount && texture.valid) {
                    shader.uniforms.sampler = renderer.texture.bind(texture);
                    renderer.geometry.draw(type, vcount, ioffset0);
                }
            }
            vcount = this._indexCount * 3 - ioffset1;
            texture = unit1.texture || Texture.WHITE;
            if (0 < vcount && texture.valid) {
                shader.uniforms.sampler = renderer.texture.bind(texture);
                renderer.geometry.draw(type, vcount, ioffset1);
            }
        }
    };
    EShapeBuffer.prototype.isCompatible = function (shape, uploaded, vindex, iindex) {
        return (uploaded.getBuffer() === this &&
            uploaded.getVertexOffset() === vindex &&
            uploaded.getIndexOffset() === iindex &&
            uploaded.isCompatible(shape));
    };
    EShapeBuffer.prototype.update = function (iterator, antialiasWeight, noMoreThanOne) {
        var builder = this._builder;
        builder.begin();
        var vindex = 0;
        var iindex = 0;
        var shape = iterator.get();
        for (; shape != null; shape = iterator.next()) {
            var uploaded = shape.uploaded;
            if (uploaded == null || !this.isCompatible(shape, uploaded, vindex, iindex)) {
                break;
            }
            uploaded.update(shape);
            uploaded.buildUnit(builder);
            vindex += uploaded.getVertexCount();
            iindex += uploaded.getIndexCount();
            if (noMoreThanOne) {
                iterator.next();
                builder.end();
                this._vertexCount = vindex;
                this._indexCount = iindex;
                return 0 < builder.units.length;
            }
        }
        for (; shape != null; shape = iterator.next()) {
            var creater = EShapeUploadeds[shape.type] || EShapeUploadeds[EShapeType.GROUP];
            if (creater == null) {
                break;
            }
            var uploaded = creater(this, shape, vindex, iindex, antialiasWeight);
            if (uploaded == null) {
                break;
            }
            uploaded.buildUnit(builder);
            vindex += uploaded.getVertexCount();
            iindex += uploaded.getIndexCount();
            if (noMoreThanOne) {
                iterator.next();
                break;
            }
        }
        builder.end();
        this._vertexCount = vindex;
        this._indexCount = iindex;
        return 0 < builder.units.length;
    };
    EShapeBuffer.prototype.check = function (vindex, ioffset, vcount, icount) {
        this.indexCountRequested = icount;
        return vindex + vcount <= this._vertexCapacity && ioffset + icount <= this._indexCapacity;
    };
    EShapeBuffer.prototype.destroy = function () {
        var geometry = this._geometry;
        if (geometry) {
            geometry.destroy();
        }
        this._builder.destroy();
    };
    return EShapeBuffer;
}());
export { EShapeBuffer };
//# sourceMappingURL=e-shape-buffer.js.map