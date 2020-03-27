import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeRectangle } from "./e-shape-rectangle";
export declare const deserializeRectangle: (item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization) => EShapeRectangle | Promise<EShapeRectangle>;
