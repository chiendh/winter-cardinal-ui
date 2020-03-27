import { DisplayObject, interaction, Point } from "pixi.js";
import InteractionEvent = interaction.InteractionEvent;
import { DApplicationTarget } from "../d-application-like";
export declare type UtilPointerEventClickHandler = (e: InteractionEvent) => void;
export interface UtilPointerEventClickTarget extends DApplicationTarget {
    on(name: string, handler: UtilPointerEventClickHandler): void;
}
export declare class UtilPointerEvent {
    static CLICK_DISTANCE_THRESHOLD: number;
    static DBLCLICK_INTERVAL_THRESHOLD: number;
    static LONG_CLICK_THRESHOLD: number;
    static get touchable(): boolean;
    static get tap(): string;
    static get down(): string;
    static get enter(): string;
    static get leave(): string;
    static get move(): string;
    static get out(): string;
    static get over(): string;
    static get up(): string;
    static get cancel(): string;
    static toGlobal(e: MouseEvent | TouchEvent, interactionManager: interaction.InteractionManager, result: Point): Point;
    static onClick(target: UtilPointerEventClickTarget, handler: UtilPointerEventClickHandler): void;
    static onLongClick(target: UtilPointerEventClickTarget, onClick: UtilPointerEventClickHandler, onLongClick: UtilPointerEventClickHandler): void;
    static onDblClick(target: HTMLElement, handler: (e: MouseEvent | TouchEvent) => void): void;
    static contains(target: unknown, targetOrChild: DisplayObject | null): boolean;
}
