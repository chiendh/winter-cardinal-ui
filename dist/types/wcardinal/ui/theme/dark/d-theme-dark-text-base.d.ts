import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignVertical } from "../../d-align-vertical";
import { DBaseState } from "../../d-base-state";
import { DThemeTextBase } from "../../d-text-base";
import { DThemeDarkBase } from "./d-theme-dark-base";
export declare class DThemeDarkTextBase extends DThemeDarkBase implements DThemeTextBase {
    getTextAlignVertical(): DAlignVertical;
    getTextAlignHorizontal(): DAlignHorizontal;
    isOverflowMaskEnabled(): boolean;
    isTextDynamic(): boolean;
    getTextStyleClipping(): boolean;
    newTextValue(): any;
    getTextValue(state: DBaseState): any;
    getTextFormatter(): (value: any, caller: any) => string;
}
