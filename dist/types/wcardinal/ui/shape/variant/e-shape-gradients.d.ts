import { EShapeGradientLike } from "../e-shape-gradient";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
export declare class EShapeGradients {
    static serializeGradient(gradient: EShapeGradientLike): string;
    static parseGradient(target: string): number[] | null;
    static deserializeGradient(target: string): EShapeGradientLike | undefined;
    static toGradientId(gradient: EShapeGradientLike | undefined, manager: EShapeResourceManagerSerialization): number;
    static toGradientImageUrl(gradient: EShapeGradientLike): string;
}
