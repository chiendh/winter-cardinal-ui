import { DDiagramSerializedFill, DDiagramSerializedStroke, DDiagramSerializedTagRange, DDiagramSerializedTagValue, DDiagramSerializedText, DDiagramSerializedTextOutline } from "../d-diagram-serialized";
import { EShapeActionValue } from "./action/e-shape-action-value";
export declare class EShapeResourceManagerDeserialization {
    resources: string[];
    actions: Map<number, EShapeActionValue>;
    fills: Map<number, DDiagramSerializedFill>;
    strokes: Map<number, DDiagramSerializedStroke>;
    tagValues: Map<number, DDiagramSerializedTagValue>;
    tags: Map<number, number[]>;
    ranges: Map<number, DDiagramSerializedTagRange>;
    aligns: Map<number, [number, number]>;
    margins: Map<number, [number, number]>;
    texts: Map<number, DDiagramSerializedText>;
    textOutlines: Map<number, DDiagramSerializedTextOutline>;
    extensions: Map<number, unknown>;
    constructor(resources: string[]);
}
