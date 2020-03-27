import { DisplayObject, IPoint, Point, Renderer } from "pixi.js";
import { DynamicAtlas } from "../util/dynamic-atlas";
import { DynamicSDFFontAtlases } from "../util/dynamic-sdf-font-atlases";
import { EShape } from "./e-shape";
import { EShapeBuffer } from "./e-shape-buffer";
import { EShapeRenderer } from "./e-shape-renderer";
export declare class EShapeContainer extends DisplayObject {
    protected _shapeRenderer: EShapeRenderer | null;
    readonly children: EShape[];
    protected _childrenId: number;
    protected _childrenIdRendered: number;
    protected _atlas: DynamicAtlas | null;
    protected _fontAtlases: DynamicSDFFontAtlases;
    protected _pixelScale: number;
    protected _pixelScaleId: number;
    protected _work: Point;
    protected _buffers: EShapeBuffer[];
    constructor();
    calculateBounds(): void;
    onChildTransformChange(): void;
    toDirty(): number;
    isDirty(): boolean;
    render(renderer: Renderer): void;
    containsPoint(point: Point): boolean;
    getFontAtlases(): DynamicSDFFontAtlases;
    getAtlas(resolution: number): DynamicAtlas;
    getBuffers(): EShapeBuffer[];
    toPixelScale(resolution: number): number;
    getPixelScale(): number;
    getAntialiasWeight(resolution: number): number;
    hitTest(global: IPoint, handler?: (shape: EShape) => boolean): EShape | null;
    hitTestBBox(global: IPoint, handler?: (shape: EShape) => boolean): EShape | null;
    destroy(): void;
}
