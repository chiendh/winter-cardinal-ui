import { DBase } from "./d-base";
import { DDiagramLayerContainer } from "./d-diagram-layer-container";
import { DDiagramSerialized, DDiagramSerializedSimple } from "./d-diagram-serialized";
import { EShape } from "./shape/e-shape";
export declare class DDiagrams {
    static toSerialized(target: DDiagramSerializedSimple | DDiagramSerialized): DDiagramSerialized;
    static newLayer(serialized: DDiagramSerialized, container: DDiagramLayerContainer): Promise<EShape[]>;
    static applyBackground(serialized: DDiagramSerialized, canvas: DBase, canvasContainer: DBase): void;
}
