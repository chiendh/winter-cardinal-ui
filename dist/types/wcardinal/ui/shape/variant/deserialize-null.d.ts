import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeNull } from "./e-shape-null";
export declare const deserializeNull: (item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization) => EShapeNull | Promise<EShapeNull>;
