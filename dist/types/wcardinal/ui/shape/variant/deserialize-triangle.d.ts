import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeTriangle } from "./e-shape-triangle";
export declare const deserializeTriangle: (item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization) => EShapeTriangle | Promise<EShapeTriangle>;
