import { DisplayObject, IPoint, Point, Rectangle, Texture, utils } from "pixi.js";
import { DBaseState } from "../d-base-state";
import { DDiagramSerializedItem } from "../d-diagram-serialized";
import { EShapeAction } from "./action/e-shape-action";
import { EShapeContainer } from "./e-shape-container";
import { EShapeCorner } from "./e-shape-corner";
import { EShapeEditor } from "./e-shape-editor";
import { EShapeFill } from "./e-shape-fill";
import { EShapeGradientLike } from "./e-shape-gradient";
import { EShapeLayout } from "./e-shape-layout";
import { EShapePoints } from "./e-shape-points";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";
import { EShapeRuntime } from "./e-shape-runtime";
import { EShapeStroke } from "./e-shape-stroke";
import { EShapeTag } from "./e-shape-tag";
import { EShapeText } from "./e-shape-text";
import { EShapeTransform } from "./e-shape-transform";
import { EShapeType } from "./e-shape-type";
import { EShapeUploaded } from "./e-shape-uploaded";
export declare enum EShapeCopyPart {
    NONE = 0,
    TRANSFORM = 1,
    SIZE = 2,
    STYLE = 4,
    ACTION = 8,
    POINTS = 16,
    STATE = 32,
    ALL = 63
}
export interface EShape extends utils.EventEmitter {
    id: string;
    readonly type: EShapeType;
    readonly size: IPoint;
    readonly fill: EShapeFill;
    readonly stroke: EShapeStroke;
    readonly transform: EShapeTransform;
    radius: number;
    corner: EShapeCorner;
    readonly points?: EShapePoints;
    image?: HTMLImageElement;
    imageSrc?: string;
    texture?: Texture;
    gradient?: EShapeGradientLike;
    readonly text: EShapeText;
    readonly tag: EShapeTag;
    readonly action: EShapeAction;
    cursor: string;
    visible: boolean;
    interactive: boolean;
    shortcut?: string;
    title?: string;
    parent: EShapeContainer | EShape | null;
    root: EShape;
    children: EShape[];
    layout?: EShapeLayout;
    index: number;
    selected: boolean;
    reference: number;
    runtime?: EShapeRuntime;
    editor?: EShapeEditor;
    uploaded?: EShapeUploaded;
    hovered: boolean;
    active: boolean;
    readonly: boolean;
    readonly enabled: boolean;
    disabled: boolean;
    dragging: boolean;
    focused: boolean;
    readonly focusedin: boolean;
    unfocusable: boolean;
    readonly clicked: boolean;
    readonly pressed: boolean;
    readonly down: boolean;
    readonly up: boolean;
    readonly shadowed: boolean;
    toDirty(): void;
    attach(parent: EShapeContainer | EShape, at?: number): this;
    detach(): this;
    copy(source: EShape): this;
    copy(source: EShape, part: EShapeCopyPart): this;
    clone(): EShape;
    destroy(): void;
    getState(): DBaseState;
    setState(state: DBaseState, isOn: boolean): this;
    hasState(state: DBaseState): boolean;
    focus(): this;
    blur(): this;
    onDblClick(e: MouseEvent): void;
    onShortcut(e: KeyboardEvent): void;
    onSizeChange(): void;
    update(time: number): void;
    updateTransform(): void;
    disallowOnTransformChange(): void;
    allowOnTransformChange(invokeOnTransformChange: boolean): void;
    onTransformChange(): void;
    onChildTransformChange(): void;
    disallowUploadedUpdate(): void;
    allowUploadedUpdate(): void;
    updateUploaded(): void;
    updateUploadedRecursively(): void;
    serialize(manager: EShapeResourceManagerSerialization): DDiagramSerializedItem;
    contains(point: Point): EShape | null;
    containsBBox(point: Point): boolean;
    containsAbs(x: number, y: number, ax: number, ay: number): boolean;
    containsAbsBBox(x: number, y: number, ax: number, ay: number): boolean;
    toGlobal(position: IPoint, result: Point, skipUpdate?: boolean): Point;
    toLocal(position: IPoint, from?: DisplayObject, result?: Point, skipUpdate?: boolean): Point;
    getBounds(work: Point, skipUpdate: boolean, result: Rectangle): Rectangle;
    getBoundsInternal(work: Point, skipUpdate: boolean, result: Rectangle): Rectangle;
    getBoundsLocal(work: Point, skipUpdate: boolean, result: Rectangle): Rectangle;
}
