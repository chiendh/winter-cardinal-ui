import { Point, Renderer, utils } from "pixi.js";
import { DBase } from "./d-base";
import { DMapCoordinate } from "./d-map-coordinate";
import { DMapTileMapping } from "./d-map-tile-mapping";
import { DMapTileMappingInternal } from "./d-map-tile-mapping-internal";
import { DMapTilePlane } from "./d-map-tile-plane";
import { DMapTilePyramid, DMapTilePyramidOptions } from "./d-map-tile-pyramid";
import { DMapTileUrlBuilder } from "./d-map-tile-url-builder";
export declare class DMapTilePyramidImpl extends utils.EventEmitter implements DMapTilePyramid {
    protected static WORK_LONLAT: Point;
    protected readonly _canvas: DBase;
    protected readonly _builder: DMapTileUrlBuilder;
    protected readonly _planes: Array<DMapTilePlane | undefined>;
    protected _z: number;
    protected _tz: number;
    protected _minZ: number;
    protected _maxZ: number;
    protected _mapping: DMapTileMapping;
    protected _mappingInternal: DMapTileMappingInternal;
    protected _coordinate: DMapCoordinate;
    protected _onLoadedBound: () => void;
    protected _fitBound: () => void;
    protected _fitBoundTimeout: number | undefined;
    protected _fitThrottledBound: () => void;
    protected _fitThrottle: number;
    constructor(options: DMapTilePyramidOptions);
    get coordinate(): DMapCoordinate;
    protected fitThrottled(): void;
    protected toMapping(canvas: DBase, mapping: DMapTileMapping, coordinate: DMapCoordinate): DMapTileMappingInternal;
    get mapping(): DMapTileMapping;
    set mapping(mapping: DMapTileMapping);
    protected newPlane(tz: number): DMapTilePlane;
    render(renderer: Renderer): void;
    protected toTileZ(tz: number): number;
    updateTransform(): void;
    protected toZ(scale: number): number;
    move(scale: number, lon0: number, lat0: number, lon1: number, lat1: number): this;
    fit(): this;
    protected destroyPlanesBefore(tz: number, planes: Array<DMapTilePlane | undefined>): void;
    protected destroyPlanesAfter(tz: number, planes: Array<DMapTilePlane | undefined>): void;
    protected cleanup(): void;
    protected onLoaded(): void;
    destroy(): this;
}
