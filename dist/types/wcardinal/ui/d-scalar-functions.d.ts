import { DCoordinatePosition, DCoordinateSizeNoAuto } from "./d-coordinate";
import { DScalarFunction } from "./d-scalar-function";
export declare class DScalarFunctions {
    static position(coordinate: DCoordinatePosition | undefined): DScalarFunction | null;
    static size(coordinate: DCoordinateSizeNoAuto | undefined): DScalarFunction | null;
}
