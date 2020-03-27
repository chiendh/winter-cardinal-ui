import { Container } from "pixi.js";
import { DDiagramLayer } from "./d-diagram-layer";
import { DDiagramSerializedItem, DDiagramSerializedLayer } from "./d-diagram-serialized";
import { EShapeResourceManagerSerialization } from "./shape/e-shape-resource-manager-serialization";
export declare class DDiagramLayerContainer extends Container {
    children: DDiagramLayer[];
    protected _active: DDiagramLayer | null;
    constructor();
    get active(): DDiagramLayer | null;
    set active(layer: DDiagramLayer | null);
    create(name: string, activate?: boolean): DDiagramLayer;
    /**
     * Adds the specified layer and activates it if the `activate` is true.
     *
     * @param layer
     * @param activate
     */
    attach(layer: DDiagramLayer, activate?: boolean): void;
    attachAt(layer: DDiagramLayer, index: number, activate?: boolean): void;
    /**
     * Removes the specified layer from this container and activates the specified layer.
     * This method does not destroy the secified layer.
     *
     * @param layer
     */
    detach(layer: DDiagramLayer, active: DDiagramLayer | null): void;
    /**
     * Removes the specified layer and activate the next layer.
     * This method does not destroy the specified layer.
     *
     * @param layer
     * @param activateNext
     */
    delete(layer: DDiagramLayer, activateNext?: boolean): number;
    get(index: number): DDiagramLayer | null;
    clear(): void;
    destroy(): void;
    size(): number;
    serialize(manager: EShapeResourceManagerSerialization, items: DDiagramSerializedItem[]): DDiagramSerializedLayer[];
}
