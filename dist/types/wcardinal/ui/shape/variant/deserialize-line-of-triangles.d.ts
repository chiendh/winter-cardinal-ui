import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeLineOfTriangles } from "./e-shape-line-of-triangles";
export declare const deserializeLineOfTriangles: (item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization) => EShapeLineOfTriangles | Promise<EShapeLineOfTriangles>;
