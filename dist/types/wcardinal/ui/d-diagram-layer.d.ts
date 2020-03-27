import { DDiagramSerializedItem, DDiagramSerializedLayer } from "./d-diagram-serialized";
import { EShapeContainer } from "./shape/e-shape-container";
import { EShapeResourceManagerSerialization } from "./shape/e-shape-resource-manager-serialization";
export declare class DDiagramLayer extends EShapeContainer {
    reference: number;
    constructor(name: string);
    destroy(): void;
    serialize(layer: number, manager: EShapeResourceManagerSerialization, items: DDiagramSerializedItem[]): DDiagramSerializedLayer;
}
