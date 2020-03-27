import { EShape } from "./e-shape";
import { EShapeCapability } from "./e-shape-capability";
import { EShapeType } from "./e-shape-type";
export declare class EShapeCapabilities {
    static mappings: {
        [type: number]: EShapeCapability;
    };
    static get(type: EShapeType): EShapeCapability;
    static contains(shape: EShape | null | undefined, capability: EShapeCapability): shape is EShape;
    static set(type: EShapeType, capability: EShapeCapability): void;
}
