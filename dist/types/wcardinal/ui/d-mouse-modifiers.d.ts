import { interaction } from "pixi.js";
import { DMouseModifier } from "./d-mouse-modifier";
export declare type DMouseModifierEvent = WheelEvent | MouseEvent | TouchEvent | interaction.InteractionEvent;
export declare class DMouseModifiers {
    static from(e: DMouseModifierEvent): DMouseModifier;
    static match(e: DMouseModifierEvent, modifier: DMouseModifier): boolean;
}
