import { utils } from "pixi.js";
import { DApplicationTarget } from "./d-application-like";
import { DDiagramCanvasIdMap } from "./d-diagram-canvas-id-map";
import { EShape } from "./shape/e-shape";
export interface DDiagramShapeLayer {
    children: EShape[];
}
export interface DDiagramShapeLayerContainer {
    children: DDiagramShapeLayer[];
}
export interface DDiagramShapeCanvas {
    layer: DDiagramShapeLayerContainer;
    ids: DDiagramCanvasIdMap;
    actionables: EShape[];
}
export interface DDiagramShapeDiagram extends DApplicationTarget {
    canvas: DDiagramShapeCanvas | null;
}
/**
 * A shape helper class for diagrams.
 */
export declare class DDiagramShape extends utils.EventEmitter {
    protected _diagram: DDiagramShapeDiagram;
    protected _updateBound: () => void;
    constructor(diagram: DDiagramShapeDiagram);
    update(): void;
    get(id: string): EShape | null;
    getAll(id: string): EShape[];
    each(callback: (shape: EShape) => (boolean | void), reverse?: boolean): EShape | null;
}
