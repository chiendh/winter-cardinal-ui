import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeRectangleRounded } from "./e-shape-rectangle-rounded";
export declare const deserializeRectangleRounded: (item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization) => EShapeRectangleRounded | Promise<EShapeRectangleRounded>;
