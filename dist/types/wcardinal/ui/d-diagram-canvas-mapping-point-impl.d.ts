import { ObservablePoint } from "pixi.js";
import { DMapTileMappingPoint } from "./d-map-tile-mapping";
export declare class DDiagramCanvasTileMappingPointImpl extends ObservablePoint implements DMapTileMappingPoint {
    get lon(): number;
    set lon(lon: number);
    get lat(): number;
    set lat(lat: number);
    toObject(): {
        lon: number;
        lat: number;
    };
}
