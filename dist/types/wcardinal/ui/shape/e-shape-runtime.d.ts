import { interaction, Point } from "pixi.js";
import { DBaseState } from "../d-base-state";
import { EShapeActionRuntime } from "./action/e-shape-action-runtime";
import { EShape } from "./e-shape";
import { EShapeFillLike } from "./e-shape-fill";
import { EShapeStrokeLike } from "./e-shape-stroke";
import { EShapeTextLike } from "./e-shape-text";
export declare enum EShapeRuntimeReset {
    NONE = 0,
    POSITION_X = 1,
    POSITION_Y = 2,
    POSITION = 3,
    ROTATION = 4,
    COLOR_FILL = 8,
    COLOR_STROKE = 16,
    COLOR_FILL_AND_STROKE = 24,
    COLOR_TEXT = 32,
    COLOR_TEXT_OUTLINE = 64,
    COLOR = 120,
    VISIBILITY = 128,
    HEIGHT = 256,
    WIDTH = 512,
    SIZE = 768,
    TEXT = 1024,
    CURSOR = 2048
}
export declare enum EShapeRuntimeState {
    NONE = 0,
    CHANGED = 1,
    CLICKED = 2,
    DOWN = 4,
    UP = 8,
    PRESSED = 16,
    PERSISTENT = 16
}
export declare class EShapeRuntime {
    x: number;
    y: number;
    size: Point;
    rotation: number;
    actions: EShapeActionRuntime[];
    fill: EShapeFillLike;
    stroke: EShapeStrokeLike;
    text: EShapeTextLike;
    cursor: string;
    reset: EShapeRuntimeReset;
    written: EShapeRuntimeReset;
    effect: number;
    state: EShapeRuntimeState;
    interactive: boolean;
    constructor(shape: EShape);
    onPointerClick(shape: EShape, e?: interaction.InteractionEvent): void;
    onPointerDblClick(shape: EShape, e?: MouseEvent | TouchEvent): boolean;
    onPointerOver(shape: EShape, e?: interaction.InteractionEvent): void;
    onPointerOut(shape: EShape, e?: interaction.InteractionEvent): void;
    onPointerDown(shape: EShape, e?: interaction.InteractionEvent): void;
    onPointerUp(shape: EShape, e?: interaction.InteractionEvent): void;
    onPointerMove(shape: EShape, e?: interaction.InteractionEvent): void;
    onKeyDown(shape: EShape, e: KeyboardEvent): boolean;
    onKeyUp(shape: EShape, e: KeyboardEvent): boolean;
    onStateChange(shape: EShape, newState: DBaseState, oldState: DBaseState): void;
    update(shape: EShape, time: number): void;
    protected onUpdate(shape: EShape, time: number): void;
    protected executeActions(shape: EShape, time: number): void;
    protected resetUnwrittenProperties(shape: EShape): void;
}
