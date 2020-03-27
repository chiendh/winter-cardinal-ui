import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeGroup } from "./e-shape-group";
export declare const deserializeGroup: (item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization) => EShapeGroup | Promise<EShapeGroup>;
