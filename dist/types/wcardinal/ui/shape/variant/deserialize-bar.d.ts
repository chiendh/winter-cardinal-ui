import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeBar } from "./e-shape-bar";
export declare const deserializeBar: (item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization) => EShapeBar | Promise<EShapeBar>;
