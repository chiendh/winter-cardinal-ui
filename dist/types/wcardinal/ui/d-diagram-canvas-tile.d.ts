import { DDiagramCanvasBase } from "./d-diagram-canvas-base";
import { DDiagramCanvasTileMapping } from "./d-diagram-canvas-mapping";
import { DDiagramCanvasTileMappingImpl } from "./d-diagram-canvas-mapping-impl";
import { DMapTilePyramid } from "./d-map-tile-pyramid";
/**
 * A tile pyramid factory.
 */
export declare type DDiagramCanvasTilePyramidFactory = (canvas: DDiagramCanvasBase<any, any>) => DMapTilePyramid;
export interface DDiagramCanvasTileOptions {
    factory?: DDiagramCanvasTilePyramidFactory;
    mapping?: DDiagramCanvasTileMapping;
}
export declare class DDiagramCanvasTile {
    protected _canvas: DDiagramCanvasBase<any, any>;
    protected _pyramid?: DMapTilePyramid;
    protected _factory?: DDiagramCanvasTilePyramidFactory;
    protected _mapping: DDiagramCanvasTileMappingImpl;
    constructor(canvas: DDiagramCanvasBase<any, any>, options?: DDiagramCanvasTileOptions);
    init(): void;
    protected onMappingChange(): void;
    get pyramid(): DMapTilePyramid | undefined;
    get factory(): DDiagramCanvasTilePyramidFactory | undefined;
    get mapping(): DDiagramCanvasTileMapping;
    serialize(): {
        mapping: DDiagramCanvasTileMapping;
    };
    destroy(): void;
}
