import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeCircle } from "./e-shape-circle";
export declare const deserializeCircle: (item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization) => EShapeCircle | Promise<EShapeCircle>;
