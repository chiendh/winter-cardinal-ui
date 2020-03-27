import { DDiagramCanvasTileMapping } from "./d-diagram-canvas-mapping";
import { DDiagramCanvasTileMappingPointImpl } from "./d-diagram-canvas-mapping-point-impl";
import { DMapTileMappingPoint } from "./d-map-tile-mapping";
export declare class DDiagramCanvasTileMappingImpl implements DDiagramCanvasTileMapping {
    protected _enable: boolean;
    protected _from: DDiagramCanvasTileMappingPointImpl;
    protected _to: DDiagramCanvasTileMappingPointImpl;
    protected _cb: () => void;
    constructor(cb: () => void, mapping?: DDiagramCanvasTileMapping);
    constructor(cb: () => void, enable: boolean, lon0: number, lat0: number, lon1: number, lat1: number);
    get enable(): boolean;
    set enable(enable: boolean);
    get from(): DMapTileMappingPoint;
    get to(): DMapTileMappingPoint;
    serialize(): DDiagramCanvasTileMapping;
}
