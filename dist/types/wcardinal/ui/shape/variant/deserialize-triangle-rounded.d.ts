import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeTriangleRounded } from "./e-shape-triangle-rounded";
export declare const deserializeTriangleRounded: (item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization) => EShapeTriangleRounded | Promise<EShapeTriangleRounded>;
