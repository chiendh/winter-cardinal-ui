import { DScalarFunction } from "./d-scalar-function";
export interface DScalarSet {
    x?: DScalarFunction | null;
    y?: DScalarFunction | null;
    width?: DScalarFunction | null;
    height?: DScalarFunction | null;
}
