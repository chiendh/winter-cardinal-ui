import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DThemeDropdownBase } from "../../d-dropdown-base";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeWhiteButtonBase } from "./d-theme-white-button-base";
export declare abstract class DThemeWhiteDropdownBase<TEXT_VALUE> extends DThemeWhiteButtonBase implements DThemeDropdownBase<TEXT_VALUE> {
    getSecondaryImageAlignHorizontal(): DAlignHorizontal;
    getSecondaryImageAlignWith(): DAlignWith;
    getSecondaryImageMarginHorizontal(): number;
    getSecondaryImageSource(state: DBaseState): Texture | DisplayObject | null;
    abstract newTextValue(): DStateAwareOrValueMightBe<TEXT_VALUE>;
    abstract getTextValue(state: DBaseState): TEXT_VALUE;
}
