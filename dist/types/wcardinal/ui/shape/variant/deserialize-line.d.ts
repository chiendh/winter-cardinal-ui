import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeLine } from "./e-shape-line";
export declare const deserializeLine: (item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization) => EShapeLine | Promise<EShapeLine> | null;
