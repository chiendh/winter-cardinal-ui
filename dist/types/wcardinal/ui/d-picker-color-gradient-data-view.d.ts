import { Geometry, Mesh, Point, Rectangle, Shader, Texture, TextureUvs } from "pixi.js";
import { DPickerColorGradientDataLike } from "./d-picker-color-gradient-data";
declare type Parts = Array<{
    data: DPickerColorGradientDataLike | null;
    rect: Rectangle;
}>;
export declare class DPickerColorGradientDataView extends Mesh {
    protected _nPointsPerData: number;
    protected _vertices: Float32Array;
    protected _uvs: Float32Array;
    protected _colors: Float32Array;
    protected _indices: Uint16Array;
    protected _lastHitIndex: number;
    protected _workColor: number[];
    protected _workPoint: Point;
    protected _parts: Parts;
    protected constructor(nPointsPerData: number, vertices: Float32Array, uvs: Float32Array, colors: Float32Array, indices: Uint16Array, parts: Parts, geometry: Geometry, shader: Shader);
    getRectangle(index: number): Rectangle | null;
    setRectangle(index: number, x: number, y: number, width: number, height: number): void;
    getData(index: number): DPickerColorGradientDataLike | null;
    setData(index: number, data: DPickerColorGradientDataLike | null): void;
    getLastHitIndex(): number;
    private setColors;
    private setColorsHex;
    private setColorsWhite;
    private setColorsPoint;
    protected setVertices(iv: number, vertices: Float32Array, position: number, rect: Rectangle): void;
    protected setUvs(iv: number, uvs: Float32Array, position: number, textureUvs: TextureUvs): void;
    private newIndices;
    protected _calculateBounds(): void;
    update(): void;
    containsPoint(point: Point): boolean;
    static from(size: number, nPointsPerData: number, texture?: Texture): DPickerColorGradientDataView;
}
export {};
