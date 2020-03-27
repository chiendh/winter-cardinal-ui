import { Buffer, MeshGeometry, Texture } from "pixi.js";
import { DCornerMask } from "./d-corner-mask";
export declare class DBaseBackgroundMeshGeometry extends MeshGeometry {
    protected _texture: Texture;
    protected _width: number;
    protected _height: number;
    protected _borderSize: number;
    protected _cornerMask: DCornerMask;
    protected _isDirty: boolean;
    protected _textureId: number;
    protected _vertices: Float32Array;
    protected _uvs: Float32Array;
    protected _indices: Uint16Array;
    protected _vertexBuffer: Buffer;
    protected _uvBuffer: Buffer;
    protected _indexBuffer: Buffer;
    constructor(texture: Texture, width: number, height: number, borderSize: number, cornerMask: DCornerMask);
    get borderSize(): number;
    set borderSize(borderSize: number);
    get cornerMask(): DCornerMask;
    set cornerMask(cornerMask: DCornerMask);
    get width(): number;
    set width(width: number);
    get height(): number;
    set height(height: number);
    get texture(): Texture;
    set texture(texture: Texture);
    protected getTextureId(): number;
    protected fillVertices(iv: number, array: Float32Array, x0: number, x1: number, y0: number, y1: number): void;
    protected fillIndices(ii: number, indices: Uint16Array, iv: number): void;
    protected fillUvsCorner(iv: number, uvs: Float32Array, c: boolean, u0: number, u1: number, u2: number, u3: number, v0: number, v1: number, v2: number, v3: number): void;
    protected fillUvs(iv: number, uvs: Float32Array, u0: number, u1: number, v0: number, v1: number): void;
    update(): void;
}
