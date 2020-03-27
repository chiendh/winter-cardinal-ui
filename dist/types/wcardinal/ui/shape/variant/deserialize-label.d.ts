import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeLabel } from "./e-shape-label";
export declare const deserializeLabel: (item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization) => EShapeLabel | Promise<EShapeLabel>;
