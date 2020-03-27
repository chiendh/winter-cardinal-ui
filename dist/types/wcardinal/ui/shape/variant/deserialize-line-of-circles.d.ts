import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeLineOfCircles } from "./e-shape-line-of-circles";
export declare const deserializeLineOfCircles: (item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization) => EShapeLineOfCircles | Promise<EShapeLineOfCircles>;
