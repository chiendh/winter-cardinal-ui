import { DDiagramSerializedItem } from "../d-diagram-serialized";
import { EShape } from "./e-shape";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
export declare class EShapeDeserializer {
    static toShape(item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization): Promise<EShape> | EShape | null;
    static deserialize<SHAPE extends EShape>(item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization, result: SHAPE): Promise<SHAPE> | SHAPE;
    static deserializeAll(serializeds: DDiagramSerializedItem[], resources: string[]): Promise<EShape[]> | null;
}
