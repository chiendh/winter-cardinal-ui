import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeImage } from "./e-shape-image";
export declare const deserializeImage: (item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization) => EShapeImage | Promise<EShapeImage>;
