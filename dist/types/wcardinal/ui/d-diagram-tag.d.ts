import { DDiagramCanvasTagMap } from "./d-diagram-canvas-tag-map";
export interface DDiagramTagCanvas {
    tags: DDiagramCanvasTagMap;
}
export interface DDiagramTagDiagram {
    canvas: DDiagramTagCanvas | null;
}
/**
 * A tag helper class for diagrams.
 */
export declare class DDiagramTag {
    protected _diagram: DDiagramTagDiagram;
    constructor(diagram: DDiagramTagDiagram);
    update(): void;
    getIds(): string[];
    each(callback: (tagId: string) => (boolean | void)): string | null;
    set(id: string, value: unknown, time?: number, from?: number | null, to?: number | null): void;
    clear(id: string): void;
    setAll(id: string, values: unknown[], times?: number[], from?: number | null, to?: number | null): void;
    setValue(id: string, value: unknown, time?: number): void;
    setValues(id: string, values: unknown[], times?: number[]): void;
    setTime(id: string, time: number): void;
    setTimes(id: string, times: number[]): void;
    setRange(id: string, from?: number | null, to?: number | null): void;
}
