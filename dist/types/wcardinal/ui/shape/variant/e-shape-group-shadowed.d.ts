import { EShapeType } from "../e-shape-type";
import { EShapeGroup } from "./e-shape-group";
import { EShapeGroupSize } from "./e-shape-group-size";
export declare class EShapeGroupShadowed extends EShapeGroup {
    constructor(type?: EShapeType);
    protected newGroupSize(): EShapeGroupSize;
}
