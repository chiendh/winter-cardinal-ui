import { DControllerDocument } from "./d-controller-document";
import { DDiagramBase, DDiagramBaseOnOptions, DDiagramBaseOptions, DThemeDiagramBase } from "./d-diagram-base";
import { DDiagramCanvasEditor, DDiagramCanvasEditorOptions } from "./d-diagram-canvas-editor";
import { DDiagramSerialized, DDiagramSerializedSimple } from "./d-diagram-serialized";
import { ESnapper } from "./snapper/e-snapper";
export interface DDiagramEditorController {
    get(id: number): Promise<DDiagramSerializedSimple | DDiagramSerialized>;
    save(simple: DDiagramSerializedSimple): Promise<number>;
    delete(id: number): Promise<void>;
}
export interface DDiagramEditorOnOptions extends DDiagramBaseOnOptions<DDiagramCanvasEditor> {
    /**
     * Triggered when a serialized data is changed without using the set / unset methods.
     * This happens, for instance, when the name or the ID of the serialized data is changed.
     *
     * @param self a diagram editor
     */
    change?: (self: any) => void;
    /**
     * Triggered when an operation is successfully finished.
     *
     * @param operation an operation ID
     * @param self a diagram editor
     */
    success?: (operation: "save" | "save-as", self: any) => void;
    /**
     * Triggered when an operation is failed.
     *
     * @param operation an operation ID
     * @param self a diagram editor
     */
    fail?: (operation: "save" | "save-as", self: any) => void;
}
export interface DDiagramEditorOptions<THEME extends DThemeDiagramEditor = DThemeDiagramEditor> extends DDiagramBaseOptions<DDiagramCanvasEditor, THEME> {
    controller: DDiagramEditorController;
    on?: DDiagramEditorOnOptions;
}
export interface DThemeDiagramEditor extends DThemeDiagramBase {
}
export declare class DDiagramEditor<THEME extends DThemeDiagramEditor = DThemeDiagramEditor, OPTIONS extends DDiagramEditorOptions<THEME> = DDiagramEditorOptions<THEME>> extends DDiagramBase<DDiagramCanvasEditor, THEME, OPTIONS> implements DControllerDocument<DDiagramSerialized> {
    protected _isChanged: boolean;
    protected _controller: DDiagramEditorController;
    snapper: ESnapper;
    constructor(options: OPTIONS);
    protected newCanvas(serialized: DDiagramSerialized): DDiagramCanvasEditor;
    protected toCanvasOptions(serialized: DDiagramSerialized): DDiagramCanvasEditorOptions;
    serialize(): DDiagramSerialized | null;
    save(): Promise<unknown> | boolean;
    saveAs(name: string): Promise<unknown> | boolean;
    delete(): Promise<unknown> | boolean;
    create(name: string, width: number, height: number): Promise<unknown> | boolean;
    protected onSet(serialized: DDiagramSerialized): void;
    protected onUnset(): void;
    open(id: number): Promise<unknown> | boolean;
    close(): void;
    isChanged(): boolean;
    isNew(): boolean;
    getName(): string | null;
    get controller(): DDiagramEditorController;
    protected getType(): string;
}
