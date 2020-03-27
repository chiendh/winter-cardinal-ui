import { interaction, Point } from "pixi.js";
import InteractionEvent = interaction.InteractionEvent;
import { DBase } from "../d-base";
export declare type UtilClickOutsideOnClick = (e: InteractionEvent) => void;
export declare class UtilClickOutside {
    protected static point: Point;
    static apply(target: DBase<any, any>, onClick: UtilClickOutsideOnClick): void;
}
