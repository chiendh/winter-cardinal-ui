import { EShape } from "./e-shape";
import { EShapeContainer } from "./e-shape-container";
export declare class EShapeDeleter {
    static delete(parent: EShape | EShapeContainer, shapes?: EShape[], generateListOfDetachedShapes?: boolean): EShape[] | null;
}
