import { Container, DisplayObject, interaction, Point, Rectangle, Renderer, Texture, Transform } from "pixi.js";
import InteractionEvent = interaction.InteractionEvent;
import { DBackgroundStateAware } from "./d-background";
import { DBaseInteractive } from "./d-base-interactive";
import { DBasePoint } from "./d-base-point";
import { DBaseState } from "./d-base-state";
import { DBorderStateAware } from "./d-border";
import { DBorderMask } from "./d-border-mask";
import { DCoordinatePosition, DCoordinateSize } from "./d-coordinate";
import { DCorner } from "./d-corner";
import { DCornerMask } from "./d-corner-mask";
import { DThemeFont } from "./d-font";
import { DLayoutClearType } from "./d-layout-clear-type";
import { DOutline } from "./d-outline";
import { DPadding } from "./d-padding";
import { DShadow } from "./d-shadow";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
import { UtilKeyboardEventShortcut } from "./util/util-keyboard-event";
import { UtilWheelEventDeltas } from "./util/util-wheel-event";
/**
 * {@link DBase} padding options.
 */
export interface DBasePaddingOptions {
    /** A top padding */
    top?: number;
    /** A right padding */
    right?: number;
    /** A bottom padding */
    bottom?: number;
    /** A left padding */
    left?: number;
}
/**
 * {@link DBase} corner options.
 */
export interface DBaseCornerOptions {
    /** A radius */
    radius?: number;
    /** Masked corners get unrounded. */
    mask?: (keyof typeof DCornerMask) | DCornerMask;
}
/**
 * Mappings of event names and event handlers.
 */
export interface DBaseOnOptions {
    [name: string]: Function | undefined;
    /**
     * Triggered when an initialization is finished.
     *
     * @param self an initialized instance
     */
    init?: (self: any) => void;
}
/**
 * {@link DBase} background options.
 */
export interface DBaseBackgroundOptions {
    /**
     * A color code or a function returning a color code.
     * If a computed value is undefined, falls back to the theme color.
     * If a computed value is null, a background is not rendered.
     */
    color?: DStateAwareOrValueMightBe<number | null>;
    /**
     * An alpha or a function returning an alpha.
     * If a computed value is undefined, falls back to an background alpha of a theme.
     */
    alpha?: DStateAwareOrValueMightBe<number>;
}
/**
 * {@link DBase} border options.
 */
export interface DBaseBorderOptions {
    /**
     * A color code or a function returning a color code.
     * If a computed value is undefined, falls back to the theme color.
     * If a computed value is null, a background is not rendered.
     */
    color?: DStateAwareOrValueMightBe<number | null>;
    /**
     * An alpha or a function returning an alpha.
     * If a computed value is undefined, falls back to a border alpha of a theme.
     */
    alpha?: DStateAwareOrValueMightBe<number>;
    /**
     * A width or a function returning a width.
     * If a computed value is undefined, falls back to a border width of a theme.
     */
    width?: DStateAwareOrValueMightBe<number>;
    /**
     * An align or a function returning an align.
     * If a computed value is undefined, falls back to a border align of a theme.
     * If an align is 0, a border is rendered completely inside of a {@link DBase}.
     * If an align is 1, a border is rendered completely outside of a {@link DBase}.
     */
    align?: DStateAwareOrValueMightBe<number>;
    /** Masked borders get removed. */
    mask?: DStateAwareOrValueMightBe<DBorderMask> | (keyof typeof DBorderMask);
}
/**
 * {@link DBase} outline optons.
 */
export interface DBaseOutlineOptions {
    /**
     * A color code or a function returning a color code.
     * If a computed value is undefined, falls back to the theme color.
     * If a computed value is null, a background is not rendered.
     */
    color?: DStateAwareOrValueMightBe<number | null>;
    /**
     * An alpha or a function returning an alpha.
     * If a computed value is undefined, falls back to an outline alpha of a theme.
     */
    alpha?: DStateAwareOrValueMightBe<number>;
    /**
     * A width or a function returning a width.
     * If a computed value is undefined, falls back to an outline width of a theme.
     */
    width?: DStateAwareOrValueMightBe<number>;
    /**
     * An offset or a function returning an offset.
     * If a computed value is undefined, falls back to an outline align of a theme.
     * A outline moves to outside when an offset gets larger.
     */
    offset?: DStateAwareOrValueMightBe<number>;
    /**
     * An align or a function returning an align.
     * If a computed value is undefined, falls back to an outline align of a theme.
     * If an align is 0, an outline is rendered completely inside.
     * If an align is 1, an outline is rendered completely outside.
     */
    align?: DStateAwareOrValueMightBe<number>;
    /** Masked outlines get removed. */
    mask?: DStateAwareOrValueMightBe<DBorderMask> | (keyof typeof DBorderMask);
}
/**
 * {@link DBase} options.
 */
export interface DBaseOptions<THEME extends DThemeBase = DThemeBase> {
    /**
     * A parent.
     *
     * In the case of UI classes which pop up (e.g., {@link DDialog} and {@link DMenu}),
     * if multiple application instances are there, better to set
     * this to an `application.stage` so that they pick a right application.
     * By default, they assume the last created application is
     * the one they belong to at the time when they are created.
     */
    parent?: Container;
    /** Children. */
    children?: Array<DisplayObject | null>;
    /** A name. */
    name?: string;
    /**
     * One of the followings:
     * * A X position
     * * A position keyword
     * * A position expression (Parsed by {@link DScalarExpression})
     * * A function returning a X position ({@link DScalarFunction})
     * * An object returning a X position ({@link DScalar})
     */
    x?: DCoordinatePosition;
    /**
     * One of the followings:
     * * A Y position
     * * A position keyword
     * * A position expresion (Parsed by {@link DScalarExpression})
     * * A function returning a Y position ({@link DScalarFunction})
     * * An object returning a Y position ({@link DScalar})
     */
    y?: DCoordinatePosition;
    /**
     * One of the followings:
     * * A width
     * * A size keyword
     * * A size expression (Parsed by {@link DScalarExpression})
     * * A function returning a width ({@link DScalarFunction})
     * * An object returning a width ({@link DScalar})
     */
    width?: DCoordinateSize;
    /**
     * One of the followings:
     * * A height
     * * A size keyword
     * * A size expression (Parsed by {@link DScalarExpression})
     * * A function returning a hight ({@link DScalarFunction})
     * * An object returning a hight ({@link DScalar})
     */
    height?: DCoordinateSize;
    /**
     * A visibility.
     * Set to true to make {@link DBase} visible.
     * Set to false to make {@link DBase} invisible.
     * The default values is true.
     */
    visible?: boolean;
    /** A default state. */
    state?: (keyof typeof DBaseState) | Array<keyof typeof DBaseState> | DBaseState;
    /** An interactivity option. */
    interactive?: (keyof typeof DBaseInteractive) | DBaseInteractive;
    /** A padding options. */
    padding?: number | DBasePaddingOptions;
    /** A corner options. */
    corner?: number | DBaseCornerOptions;
    /** A theme or a theme name. */
    theme?: THEME | string;
    /**
     * Mappings of event names and event handlers.
     */
    on?: DBaseOnOptions;
    /**
     * A weight used by {@link DLayoutVertical} and {@link DLayoutHorizontal}.
     */
    weight?: number;
    /** A tooltip text. */
    title?: string;
    /** A shortcut option. */
    shortcut?: string | UtilKeyboardEventShortcut;
    /** A shortcut options. */
    shortcuts?: Array<string | UtilKeyboardEventShortcut>;
    /** A background options. */
    background?: DBaseBackgroundOptions;
    /** A border options. */
    border?: DBaseBorderOptions;
    /** An outline options. */
    outline?: DBaseOutlineOptions;
    /** A shadow. */
    shadow?: "NONE" | "WEAK" | "DEFAULT" | DShadow | null;
    /** A clear type used by {@link DLayoutVertical} and {@link DLayoutHorizontal}. */
    clear?: (keyof typeof DLayoutClearType) | DLayoutClearType;
    /** A cursor shape. */
    cursor?: string;
}
/**
 * DBase theme
 */
export interface DThemeBase extends DThemeFont {
    /**
     * Returns a X coordinate.
     */
    getX(): DCoordinatePosition;
    /**
     * Returns a Y coordinate.
     */
    getY(): DCoordinatePosition;
    /**
     * Returns a height.
     */
    getHeight(): DCoordinateSize;
    /**
     * Returns a width.
     */
    getWidth(): DCoordinateSize;
    /**
     * Returns a background color.
     * If the color is null, backgrounds are not be rendered.
     *
     * @param state a state
     */
    getBackgroundColor(state: DBaseState): number | null;
    /**
     * Returns a background alpha.
     *
     * @param state a state
     */
    getBackgroundAlpha(state: DBaseState): number;
    /**
     * Returns a background texture of the given radius.
     *
     * @param radius a corner radius
     */
    getBackgroundTexture(radius: number): Texture;
    /**
     * Returns a border color.
     * If the color is null, borders are not be rendered.
     *
     * @param state a state
     */
    getBorderColor(state: DBaseState): number | null;
    /**
     * Returns a border alpha.
     *
     * @param state a state
     */
    getBorderAlpha(state: DBaseState): number;
    /**
     * Returns a border width.
     *
     * @param state a state
     */
    getBorderWidth(state: DBaseState): number;
    /**
     * Returns a border align.
     *
     * @param state a state
     */
    getBorderAlign(state: DBaseState): number;
    /**
     * Returns a border mask.
     *
     * @param state a mask
     */
    getBorderMask(state: DBaseState): DBorderMask;
    /**
     * Returns a border texture of the given radius and width.
     *
     * @param radius a corner radius
     * @param width a border width
     */
    getBorderTexture(radius: number, width: number): Texture;
    /**
     * Returns a left padding.
     */
    getPaddingLeft(): number;
    /**
     * Returns a right padding.
     */
    getPaddingRight(): number;
    /**
     * Returns a top padding.
     */
    getPaddingTop(): number;
    /**
     * Returns a bottom padding.
     */
    getPaddingBottom(): number;
    /**
     * Returns a corner radius.
     */
    getCornerRadius(): number;
    /**
     * Returns a corner mask.
     */
    getCornerMask(): DCornerMask;
    /**
     * Returns an outline color.
     * If the color is null, outlines are not be rendered.
     *
     * @param state a state
     */
    getOutlineColor(state: DBaseState): number | null;
    /**
     * Returns an outline alpha.
     *
     * @param state a state
     */
    getOutlineAlpha(state: DBaseState): number;
    /**
     * Returns an outline width.
     *
     * @param state a state
     */
    getOutlineWidth(state: DBaseState): number;
    /**
     * Returns an outline offset.
     *
     * @param state a state
     */
    getOutlineOffset(state: DBaseState): number;
    /**
     * Returns an outline align.
     *
     * @param state a state
     */
    getOutlineAlign(state: DBaseState): number;
    /**
     * Returns an outline mask.
     *
     * @param state a state
     */
    getOutlineMask(state: DBaseState): DBorderMask;
    /**
     * Returns a shadow.
     * If a shadow is null, no shadow is rendered.
     */
    getShadow(): DShadow | null;
    /**
     * Returns an interactivity.
     */
    getInteractive(): DBaseInteractive;
    /**
     * Returns a tooltip text.
     */
    getTitle(): string;
    /**
     * Returns a clear type.
     * A clear type is for layout classes including {@link DLayoutVertical}.
     */
    getClearType(): DLayoutClearType;
    /**
     * Returns a weight.
     * Weights are for layout classes including {@link DLayoutVertical}.
     * If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.
     */
    getWeight(): number;
    /**
     * Creates a new shadow.
     */
    newShadow(): DShadow | null;
    /**
     * Creates a new weak shadow.
     */
    newShadowWeak(): DShadow | null;
    /**
     * Returns a cursor.
     */
    getCursor(): string | null;
}
export interface DRefitable {
    readonly width: number;
    readonly height: number;
}
export interface DRenderable {
    render(renderer: Renderer): void;
    updateTransform(): void;
}
export interface DReflowable {
    onReflow(base: DBase, width: number, height: number): void;
}
declare const enum AutoFlag {
    NONE = 0,
    WIDTH = 1,
    HEIGHT = 2
}
export declare class DBase<THEME extends DThemeBase = DThemeBase, OPTIONS extends DBaseOptions<THEME> = DBaseOptions<THEME>> extends Container {
    protected static WORK_CONTAINS_POINT: Point;
    private _name;
    private _state;
    private _stateLocal;
    private _theme;
    protected _options: OPTIONS | undefined;
    private _width;
    private _height;
    protected _padding: DPadding;
    protected _corner: DCorner;
    private _scalarSet;
    protected _autoFlags: AutoFlag;
    private _isDirty;
    private _hasDirty;
    protected _isChildrenDirty: boolean;
    private _shadow;
    private _onShadowUpdateBound;
    private _weight;
    private _position;
    private _scale;
    private _skew;
    protected _title: string;
    protected _background: DBackgroundStateAware;
    protected _border: DBorderStateAware;
    protected _outline: DOutline;
    protected _clearType: DLayoutClearType;
    protected _shortcuts?: UtilKeyboardEventShortcut[];
    protected _befores: DRenderable[];
    protected _afters: DRenderable[];
    protected _reflowables: DReflowable[];
    protected _lastDownPoint?: Point;
    constructor(options?: OPTIONS);
    prependRenderable(renderable: DRenderable, phase: boolean): void;
    appendRenderable(renderable: DRenderable, phase: boolean): void;
    removeRenderable(renderable: DRenderable, phase: boolean): void;
    addReflowable(reflowable: DReflowable): void;
    removeReflowable(reflowable: DReflowable): void;
    protected initReflowable(): void;
    protected onChildrenChange(): void;
    protected onShortcut(e: KeyboardEvent): void;
    protected init(options?: OPTIONS): void;
    get weight(): number;
    protected onPositionChanged(): void;
    resize(width: number, height: number): boolean;
    getClearType(): DLayoutClearType;
    onResize(newWidth: number, newHeight: number, oldWidth: number, oldHeight: number): void;
    protected onScaleChanged(): void;
    protected onSkewChanged(): void;
    get type(): string;
    get name(): string;
    set name(name: string);
    get x(): number;
    set x(x: number);
    getX(): DCoordinatePosition;
    setX(x: DCoordinatePosition): void;
    get y(): number;
    set y(y: number);
    getY(): DCoordinatePosition;
    setY(y: DCoordinatePosition): void;
    get width(): number;
    set width(width: number);
    protected toWidthAuto(): void;
    protected isWidthAuto(): boolean;
    getWidth(): DCoordinateSize;
    setWidth(width: DCoordinateSize): void;
    get height(): number;
    set height(height: number);
    protected toHeightAuto(): void;
    protected isHeightAuto(): boolean;
    getHeight(): DCoordinateSize;
    setHeight(height: DCoordinateSize): void;
    get position(): DBasePoint;
    get scale(): DBasePoint;
    get skew(): DBasePoint;
    get padding(): DPadding;
    get corner(): DCorner;
    get background(): DBackgroundStateAware;
    get border(): DBorderStateAware;
    get outline(): DOutline;
    get unsafe(): Transform;
    get title(): string;
    set title(title: string);
    protected applyTitle(): void;
    show(): this;
    isShown(): boolean;
    hide(): this;
    isHidden(): boolean;
    toDirty(): boolean;
    toHasDirty(): boolean;
    toParentHasDirty(): void;
    toChildrenDirty(): boolean;
    toParentChildrenDirty(): void;
    isChildrenDirty(): boolean;
    protected onChildrenDirty(): void;
    isDirty(): boolean;
    hasDirty(): boolean;
    setHovered(isHovered: boolean): this;
    setActive(isActive: boolean): this;
    setPressed(isPressed: boolean): this;
    setReadOnly(isReadOnly: boolean): this;
    setDisabled(isDisabled: boolean): this;
    setDragging(isDragging: boolean): this;
    setInvalid(isInvalid: boolean): this;
    setSucceeded(isSucceeded: boolean): this;
    setFailed(isFailed: boolean): this;
    setFocused(isFocused: boolean): this;
    focus(): this;
    blur(recursively?: boolean): this;
    isHovered(): boolean;
    isActive(): boolean;
    isActiveIn(): boolean;
    isPressed(): boolean;
    isReadOnly(): boolean;
    isDisabled(): boolean;
    isActionable(): boolean;
    isDragging(): boolean;
    isFocused(): boolean;
    isFocusedIn(): boolean;
    isUnfocusable(): boolean;
    isInvalid(): boolean;
    isSucceeded(): boolean;
    isFailed(): boolean;
    setState(state: DBaseState, isOn: boolean): this;
    setStates(statesOn: DBaseState, statesOff: DBaseState): this;
    protected updateState(): void;
    protected mergeState(stateLocal: DBaseState, stateParent: DBaseState): DBaseState;
    protected onStateChange(newState: number, oldState: number): void;
    protected onChildFocused(focused: DBase): void;
    protected onFocused(): void;
    protected onBlured(): void;
    protected onParentStateChange(newStateParent: number, oldStateParent: number): void;
    get state(): DBaseState;
    getState(): DBaseState;
    hasState(state: DBaseState): boolean;
    get theme(): THEME;
    set theme(theme: THEME);
    refit(): void;
    protected onRefit(): void;
    protected isRefitable(target: any): target is DRefitable;
    protected hasRefitableHeight(target: any): target is DRefitable;
    protected hasRefitableWidth(target: any): target is DBase<any, any>;
    reflow(): void;
    protected onReflow(): void;
    get shadow(): DShadow | null;
    set shadow(shadow: DShadow | null);
    layout(): void;
    protected getParentOfSize(): {
        width: number;
        height: number;
        padding: DPadding;
    } | null;
    /**
     * Called when a parent resized.
     *
     * @param parentWidth a parent's local width
     * @param parentHeight a parent's local height
     */
    onParentResize(parentWidth: number, parentHeight: number, parentPadding: DPadding): void;
    resizeChildren(): void;
    /**
     * Called when a parent moved.
     *
     * @param x a parent's local x position
     * @param y a parent's local y position
     */
    onParentMove(x: number, y: number): void;
    protected moveChildren(): void;
    onWheel(e: WheelEvent, deltas: UtilWheelEventDeltas, global: Point): boolean;
    onKeyDown(e: KeyboardEvent): boolean;
    onKeyUp(e: KeyboardEvent): boolean;
    protected isEventTarget(e: InteractionEvent): boolean;
    protected onDown(e: InteractionEvent): void;
    protected onDownThis(e: InteractionEvent): void;
    protected onUp(e: InteractionEvent): void;
    protected onUpThis(e: InteractionEvent): void;
    protected focusOnClosest(): void;
    protected onOver(e: InteractionEvent): void;
    protected onOut(e: InteractionEvent): void;
    onDblClick(e: MouseEvent | TouchEvent, interactionManager: interaction.InteractionManager): boolean;
    render(renderer: Renderer): void;
    protected renderBefore(renderer: Renderer): void;
    protected renderAfter(renderer: Renderer): void;
    protected getThemeDefault(): THEME;
    protected getType(): string;
    protected _calculateBounds(): void;
    containsPoint(point: Point): boolean;
    protected containsGlobalPoint(point: Point): boolean;
    protected containsLocalPoint(point: Point): boolean;
    /**
     * Returns a clipping rect.
     *
     * @param result a clipping rect
     */
    getClippingRect(target: DBase, result: Rectangle): void;
    destroy(): void;
}
export {};
