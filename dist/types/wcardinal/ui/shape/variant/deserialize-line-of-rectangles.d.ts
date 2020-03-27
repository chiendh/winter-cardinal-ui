import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeLineOfRectangles } from "./e-shape-line-of-rectangles";
export declare const deserializeLineOfRectangles: (item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization) => EShapeLineOfRectangles | Promise<EShapeLineOfRectangles>;
