import { DDiagramCanvasBase } from "./d-diagram-canvas-base";
import { DMapCoordinate } from "./d-map-coordinate";
import { DMapTilePyramid, DMapTilePyramidPlaneOptions } from "./d-map-tile-pyramid";
import { DMapTileUrlBuilder } from "./d-map-tile-url-builder";
export declare const DMapTileUrlBuilderKokudo: DMapTileUrlBuilder;
export declare const DMapTileUrlBuilderOsm: DMapTileUrlBuilder;
export declare const DMapTileUrlBuilderOsmfj: DMapTileUrlBuilder;
export interface DMapTilePyramidsFromOptions {
    canvas: DDiagramCanvasBase<any, any>;
    builder?: DMapTileUrlBuilder;
    coordinate?: DMapCoordinate;
    plane?: Partial<DMapTilePyramidPlaneOptions>;
}
export declare class DMapTilePyramids {
    protected static MIN: number;
    protected static MAX: number;
    protected static THROTTLE: number;
    protected static toPlaneOptions(options: DMapTilePyramidsFromOptions): {
        min: number;
        max: number;
        throttle: number;
    };
    static from(options: DMapTilePyramidsFromOptions): DMapTilePyramid;
}
