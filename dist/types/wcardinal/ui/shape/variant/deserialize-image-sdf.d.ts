import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeImageSdf } from "./e-shape-image-sdf";
export declare const deserializeImageSdf: (item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization) => EShapeImageSdf | Promise<EShapeImageSdf>;
