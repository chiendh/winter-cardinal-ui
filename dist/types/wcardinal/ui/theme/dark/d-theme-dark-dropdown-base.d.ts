import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DThemeDropdownBase } from "../../d-dropdown-base";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkButtonBase } from "./d-theme-dark-button-base";
export declare abstract class DThemeDarkDropdownBase<TEXT_VALUE> extends DThemeDarkButtonBase implements DThemeDropdownBase<TEXT_VALUE> {
    getSecondaryImageAlignHorizontal(): DAlignHorizontal;
    getSecondaryImageAlignWith(): DAlignWith;
    getSecondaryImageMarginHorizontal(): number;
    getSecondaryImageSource(state: DBaseState): Texture | DisplayObject | null;
    abstract newTextValue(): DStateAwareOrValueMightBe<TEXT_VALUE>;
    abstract getTextValue(state: DBaseState): TEXT_VALUE;
}
