import { DDiagramSerializedItem } from "../d-diagram-serialized";
import { EShape } from "./e-shape";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
declare type Deserializer = (item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization) => Promise<EShape> | EShape | null;
export declare const EShapeDeserializers: {
    [type: number]: Deserializer | undefined;
};
export {};
