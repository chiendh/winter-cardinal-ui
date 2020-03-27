import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeGroupShadowed } from "./e-shape-group-shadowed";
export declare const deserializeGroupShadowed: (item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization) => EShapeGroupShadowed | Promise<EShapeGroupShadowed>;
